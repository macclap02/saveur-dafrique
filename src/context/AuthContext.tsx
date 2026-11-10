import React, { createContext, useContext, useState, useEffect } from 'react';
import { recipes } from '../data/recipes';
import { computeUnlockedBadges } from '../data/badges';

export interface CookedRecipeRecord {
    recipeId: string;
    completedAt: string;
}

export interface UserPreferences {
    spiceLevel: 'mild' | 'medium' | 'hot' | 'volcano';
    diets: string[];
    favoriteRegion: string;
}

export interface User {
    id: string;
    name: string;
    email: string;
    avatar: string;
    bio?: string;
    cookingLevel: 'Beginner' | 'Intermediate' | 'Pro' | 'Expert';
    badges: string[];
    diets: string[];
    favorites: string[];
    cookedRecipes: CookedRecipeRecord[];
    preferences: UserPreferences;
    isModerator?: boolean;
}

interface AuthContextType {
    user: User | null;
    isAuthenticated: boolean;
    guestFavorites: string[];
    guestCooked: CookedRecipeRecord[];
    effectiveFavorites: string[];
    effectiveCooked: CookedRecipeRecord[];
    effectiveBadges: string[];
    login: (email: string) => void;
    loginDemo: () => void;
    logout: () => void;
    register: (data: Partial<User>) => void;
    updateUser: (data: Partial<User>) => void;
    toggleFavorite: (recipeId: string) => void;
    markRecipeAsCooked: (recipeId: string) => void;
    isRecipeCooked: (recipeId: string) => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const DEFAULT_PREFERENCES: UserPreferences = {
    spiceLevel: 'hot',
    diets: ['Halal'],
    favoriteRegion: 'Afrique de l’Ouest',
};

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [guestFavorites, setGuestFavorites] = useState<string[]>([]);
    const [guestCooked, setGuestCooked] = useState<CookedRecipeRecord[]>([]);

    // Initial check (mock persistence)
    useEffect(() => {
        const savedUser = localStorage.getItem('chef_user');
        if (savedUser) {
            try {
                const parsed = JSON.parse(savedUser);
                if (!parsed.cookedRecipes) parsed.cookedRecipes = [];
                if (!parsed.preferences) parsed.preferences = DEFAULT_PREFERENCES;
                setUser(parsed);
            } catch {
                localStorage.removeItem('chef_user');
            }
        }

        const savedGuestFavs = localStorage.getItem('guest_favorites');
        if (savedGuestFavs) {
            try {
                setGuestFavorites(JSON.parse(savedGuestFavs));
            } catch {
                // ignore
            }
        }

        const savedGuestCooked = localStorage.getItem('guest_cooked');
        if (savedGuestCooked) {
            try {
                setGuestCooked(JSON.parse(savedGuestCooked));
            } catch {
                // ignore
            }
        }
    }, []);

    // Effective values (User if logged in, Guest otherwise)
    const effectiveFavorites = user ? user.favorites || [] : guestFavorites;
    const effectiveCooked = user ? user.cookedRecipes || [] : guestCooked;
    const cookedIds = effectiveCooked.map((c) => c.recipeId);
    const effectiveBadges = computeUnlockedBadges(cookedIds, effectiveFavorites, recipes);

    const login = (email: string) => {
        // Merge with existing guest data
        const mergedFavorites = Array.from(new Set([...guestFavorites, 'jollof-rice', 'poulet-dg']));
        const mergedCooked = [
            ...guestCooked,
            { recipeId: 'jollof-rice', completedAt: new Date(Date.now() - 86400000 * 2).toISOString() },
            { recipeId: 'puff-puff', completedAt: new Date(Date.now() - 86400000).toISOString() },
        ];

        const mockUser: User = {
            id: '1',
            name: 'Chef Awa',
            email: email || 'chef.awa@saveurs-afrique.com',
            avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=AwaChef&eyebrows=default&mouth=smile',
            bio: 'Passionnée de transmission et de cuisine afro-fusion depuis 2018. 🌍👨‍🍳',
            cookingLevel: 'Pro',
            badges: computeUnlockedBadges(mergedCooked.map((c) => c.recipeId), mergedFavorites, recipes),
            diets: ['Halal', 'Fait Maison'],
            favorites: mergedFavorites,
            cookedRecipes: mergedCooked,
            preferences: {
                spiceLevel: 'hot',
                diets: ['Halal'],
                favoriteRegion: 'Afrique de l’Ouest',
            },
            isModerator: true,
        };
        setUser(mockUser);
        localStorage.setItem('chef_user', JSON.stringify(mockUser));
    };

    const loginDemo = () => {
        login('chef.awa@saveurs-afrique.com');
    };

    const register = (data: Partial<User>) => {
        const newUser: User = {
            id: Math.random().toString(36).substr(2, 9),
            name: data.name || 'Nouveau Chef',
            email: data.email || '',
            avatar: data.avatar || `https://api.dicebear.com/7.x/avataaars/svg?seed=${data.email || 'Chef'}`,
            bio: data.bio || 'Passionné des saveurs d’Afrique.',
            cookingLevel: 'Beginner',
            badges: ['first_dish'],
            diets: data.diets || [],
            favorites: guestFavorites,
            cookedRecipes: guestCooked,
            preferences: DEFAULT_PREFERENCES,
            ...data,
        } as User;
        setUser(newUser);
        localStorage.setItem('chef_user', JSON.stringify(newUser));
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('chef_user');
    };

    const updateUser = (data: Partial<User>) => {
        if (user) {
            const updated = { ...user, ...data };
            setUser(updated);
            localStorage.setItem('chef_user', JSON.stringify(updated));
        }
    };

    const toggleFavorite = (recipeId: string) => {
        if (user) {
            const isFav = user.favorites?.includes(recipeId);
            const updatedFavorites = isFav
                ? user.favorites.filter((id) => id !== recipeId)
                : [...(user.favorites || []), recipeId];
            updateUser({ favorites: updatedFavorites });
        } else {
            // Guest mode
            const isFav = guestFavorites.includes(recipeId);
            const updated = isFav
                ? guestFavorites.filter((id) => id !== recipeId)
                : [...guestFavorites, recipeId];
            setGuestFavorites(updated);
            localStorage.setItem('guest_favorites', JSON.stringify(updated));
        }
    };

    const markRecipeAsCooked = (recipeId: string) => {
        const newRecord: CookedRecipeRecord = {
            recipeId,
            completedAt: new Date().toISOString(),
        };

        if (user) {
            const existing = user.cookedRecipes || [];
            // Add if not already present or append new completion
            const filtered = existing.filter((c) => c.recipeId !== recipeId);
            const updated = [newRecord, ...filtered];
            const updatedBadges = computeUnlockedBadges(
                updated.map((c) => c.recipeId),
                user.favorites || [],
                recipes
            );
            updateUser({
                cookedRecipes: updated,
                badges: updatedBadges,
            });
        } else {
            const filtered = guestCooked.filter((c) => c.recipeId !== recipeId);
            const updated = [newRecord, ...filtered];
            setGuestCooked(updated);
            localStorage.setItem('guest_cooked', JSON.stringify(updated));
        }
    };

    const isRecipeCooked = (recipeId: string) => {
        return effectiveCooked.some((c) => c.recipeId === recipeId);
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                isAuthenticated: !!user,
                guestFavorites,
                guestCooked,
                effectiveFavorites,
                effectiveCooked,
                effectiveBadges,
                login,
                loginDemo,
                logout,
                register,
                updateUser,
                toggleFavorite,
                markRecipeAsCooked,
                isRecipeCooked,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
