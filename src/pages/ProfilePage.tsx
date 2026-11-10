import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { recipes } from '../data/recipes';
import {
    ChefHat,
    Heart,
    Clock,
    Utensils,
    Settings,
    Award,
    LogOut,
    Flame,
    Globe2,
    Check,
    X,
    Camera,
    Lock,
    ArrowRight,
    LogIn,
    Share2,
    BookOpen,
} from 'lucide-react';
import { cn } from '../lib/utils';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import { PRESET_AVATARS } from '../data/avatars';
import { ALL_BADGES, computeChefLevel, type Badge } from '../data/badges';
import { RecipeCard } from '../components/ui/RecipeCard';
import { useTranslation } from 'react-i18next';

export function ProfilePage() {
    const {
        user,
        isAuthenticated,
        effectiveFavorites,
        effectiveCooked,
        effectiveBadges,
        updateUser,
        logout,
        loginDemo,
    } = useAuth();
    const { i18n } = useTranslation();

    const [isEditing, setIsEditing] = useState(false);
    const [selectedBadge, setSelectedBadge] = useState<Badge | null>(null);
    const [activeTab, setActiveTab] = useState<'cooked' | 'favorites'>('cooked');
    const [copiedLink, setCopiedLink] = useState(false);

    // Edit form state
    const [editData, setEditData] = useState({
        name: user?.name || 'Chef Savoureux',
        bio: user?.bio || 'Passionné des trésors culinaires africains.',
        avatar: user?.avatar || PRESET_AVATARS[0].url,
        cookingLevel: user?.cookingLevel || 'Intermediate',
        spiceLevel: user?.preferences?.spiceLevel || 'hot',
        favoriteRegion: user?.preferences?.favoriteRegion || 'Afrique de l’Ouest',
        diets: user?.preferences?.diets || ['Halal', 'Fait Maison'],
    });

    const handleSave = () => {
        updateUser({
            name: editData.name,
            bio: editData.bio,
            avatar: editData.avatar,
            cookingLevel: editData.cookingLevel as any,
            preferences: {
                spiceLevel: editData.spiceLevel as any,
                favoriteRegion: editData.favoriteRegion,
                diets: editData.diets,
            },
        });
        setIsEditing(false);
    };

    // Calculate chef level & progression
    const chefLevelInfo = computeChefLevel(effectiveCooked.length);

    // Recipes cooked
    const cookedRecipeObjects = effectiveCooked
        .map((entry) => {
            const recipe = recipes.find((r) => r.id === entry.recipeId);
            return recipe ? { ...recipe, completedAt: entry.completedAt } : null;
        })
        .filter(Boolean) as (typeof recipes[0] & { completedAt: string })[];

    // Recipes favorited
    const favoriteRecipeObjects = recipes.filter((r) => effectiveFavorites.includes(r.id));

    // Total cooked time
    const totalCookedMinutes = cookedRecipeObjects.reduce(
        (acc, r) => acc + (r.prepTime + r.cookTime),
        0
    );
    const formattedCookedHours =
        totalCookedMinutes > 60
            ? `${Math.floor(totalCookedMinutes / 60)}h${totalCookedMinutes % 60 > 0 ? (totalCookedMinutes % 60) + 'm' : ''}`
            : `${totalCookedMinutes} min`;

    const stats = [
        {
            label: 'Cuisinés',
            value: effectiveCooked.length.toString(),
            icon: Utensils,
            color: 'text-orange-500',
            bg: 'bg-orange-50',
        },
        {
            label: 'Favoris',
            value: effectiveFavorites.length.toString(),
            icon: Heart,
            color: 'text-rose-500',
            bg: 'bg-rose-50',
        },
        {
            label: 'Temps',
            value: totalCookedMinutes > 0 ? formattedCookedHours : '0 min',
            icon: Clock,
            color: 'text-blue-500',
            bg: 'bg-blue-50',
        },
        {
            label: 'Badges',
            value: `${effectiveBadges.length}/${ALL_BADGES.length}`,
            icon: Award,
            color: 'text-purple-500',
            bg: 'bg-purple-50',
        },
    ];

    const spiceLabels: Record<string, { label: string; desc: string; icon: string }> = {
        mild: { label: 'Doux', desc: 'Parfumé sans piquant', icon: '🟢' },
        medium: { label: 'Relevé', desc: 'Gingembre & poivre doux', icon: '🟡' },
        hot: { label: 'Pimenté', desc: 'Habanero & piment oiseau', icon: '🔴' },
        volcano: { label: 'Palais de Feu', desc: 'Piment fatal & kan-kan', icon: '🔥' },
    };

    const currentSpiceLevel = user?.preferences?.spiceLevel || editData.spiceLevel || 'hot';

    const handleQuickSpiceChange = (level: 'mild' | 'medium' | 'hot' | 'volcano') => {
        setEditData((prev) => ({ ...prev, spiceLevel: level }));
        if (user) {
            updateUser({
                preferences: {
                    ...(user.preferences || { favoriteRegion: 'Afrique de l’Ouest', diets: ['Halal'] }),
                    spiceLevel: level,
                },
            });
        }
    };

    const handleDietToggle = (diet: string) => {
        const currentDiets = editData.diets || [];
        const nextDiets = currentDiets.includes(diet)
            ? currentDiets.filter((d) => d !== diet)
            : [...currentDiets, diet];
        setEditData((prev) => ({ ...prev, diets: nextDiets }));
        if (user) {
            updateUser({
                preferences: {
                    ...(user.preferences || { spiceLevel: 'hot', favoriteRegion: 'Afrique de l’Ouest' }),
                    diets: nextDiets,
                },
            });
        }
    };

    const handleShareProfile = async () => {
        const shareData = {
            title: `Profil de Chef - Saveurs d'Afrique`,
            text: `Rejoignez-moi sur Saveurs d'Afrique ! J'ai déjà cuisiné ${effectiveCooked.length} plats africains et débloqué ${effectiveBadges.length} badges 🍲✨`,
            url: window.location.href,
        };
        if (navigator.share) {
            try {
                await navigator.share(shareData);
            } catch {
                // ignore
            }
        } else {
            navigator.clipboard.writeText(window.location.href);
            setCopiedLink(true);
            setTimeout(() => setCopiedLink(false), 2000);
        }
    };

    const toggleLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
    };

    return (
        <div className="min-h-screen bg-gray-50/50 pb-36">
            {/* Header Profil */}
            <div className="bg-white px-6 pt-12 pb-8 rounded-b-[2.5rem] shadow-sm border-b border-gray-100">
                {/* Guest banner if not authenticated */}
                {!isAuthenticated && (
                    <div className="mb-6 p-4 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 text-white flex items-center justify-between shadow-lg shadow-orange-500/20">
                        <div>
                            <p className="font-bold text-sm">Mode Invité Activé</p>
                            <p className="text-xs text-white/90">Vos progrès et favoris sont enregistrés localement.</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <button
                                onClick={loginDemo}
                                className="px-3 py-1.5 bg-white text-primary text-xs font-bold rounded-xl shadow-sm hover:scale-105 active:scale-95 transition-all whitespace-nowrap"
                            >
                                Compte Démo
                            </button>
                            <Link
                                to="/login"
                                className="p-2 bg-white/20 hover:bg-white/30 rounded-xl transition-colors text-white"
                                title="Se connecter"
                            >
                                <LogIn className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                )}

                {/* Top Info Bar */}
                <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <div className="w-20 h-20 rounded-[1.8rem] bg-gradient-to-tr from-primary to-amber-400 p-1 shadow-lg shadow-orange-500/20">
                                <div className="w-full h-full rounded-[1.6rem] bg-white overflow-hidden">
                                    <img
                                        src={
                                            user?.avatar ||
                                            'https://api.dicebear.com/7.x/avataaars/svg?seed=GuestChef'
                                        }
                                        alt="Avatar"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                            <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-white rounded-xl flex items-center justify-center shadow-md border border-gray-50">
                                <ChefHat className="w-4 h-4 text-primary" />
                            </div>
                        </div>
                        <div>
                            <h1 className="text-2xl font-serif font-black text-gray-900 leading-tight">
                                {user ? user.name : 'Chef Explorateur'}
                            </h1>
                            <div className="flex items-center gap-2 mt-1">
                                <span className="text-[10px] bg-primary/10 text-primary font-bold px-2 py-0.5 rounded-lg uppercase tracking-wider">
                                    {chefLevelInfo.title}
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-2">
                        {isAuthenticated && (
                            <button
                                onClick={() => setIsEditing(true)}
                                className="p-2.5 bg-gray-50 rounded-xl text-gray-400 hover:text-gray-900 hover:bg-gray-100 transition-colors"
                                title="Paramètres du profil"
                            >
                                <Settings className="w-5 h-5" />
                            </button>
                        )}
                        <button
                            onClick={handleShareProfile}
                            className="p-2.5 bg-gray-50 rounded-xl text-gray-400 hover:text-gray-900 hover:bg-gray-100 transition-colors"
                            title="Partager mon profil"
                        >
                            <Share2 className="w-5 h-5" />
                        </button>
                        {isAuthenticated && (
                            <button
                                onClick={logout}
                                className="p-2.5 bg-rose-50 rounded-xl text-rose-400 hover:text-rose-600 hover:bg-rose-100 transition-colors"
                                title="Déconnexion"
                            >
                                <LogOut className="w-5 h-5" />
                            </button>
                        )}
                    </div>
                </div>

                {copiedLink && (
                    <motion.div
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-4 text-xs font-bold text-center text-primary bg-primary/10 py-1.5 rounded-xl"
                    >
                        Lien du profil copié dans le presse-papier !
                    </motion.div>
                )}

                {/* Bio Section */}
                <p className="text-gray-600 text-xs italic mb-6 px-3 py-2 bg-orange-50/50 rounded-xl border border-orange-100/40">
                    « {user?.bio || editData.bio || 'À la découverte des authentiques recettes du berceau de l’humanité.'} »
                </p>

                {/* Progression Bar */}
                <div className="bg-gray-50 rounded-2xl p-4 mb-6 border border-gray-100">
                    <div className="flex justify-between items-end mb-2">
                        <div>
                            <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest">
                                Évolution de Chef
                            </p>
                            <p className="text-xs font-bold text-gray-800">
                                Objectif : {chefLevelInfo.nextLevel}
                            </p>
                        </div>
                        <p className="text-xs font-black text-primary">{chefLevelInfo.progress}%</p>
                    </div>
                    <div className="h-2 w-full bg-white rounded-full overflow-hidden border border-gray-100">
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${chefLevelInfo.progress}%` }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                            className={`h-full bg-gradient-to-r ${chefLevelInfo.color}`}
                        />
                    </div>
                    <p className="text-[10px] text-gray-400 mt-2 text-right">
                        {effectiveCooked.length} plat{effectiveCooked.length > 1 ? 's' : ''} cuisiné{effectiveCooked.length > 1 ? 's' : ''} • Plus que {Math.max(1, chefLevelInfo.targetCount - effectiveCooked.length)} pour le rang suivant
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-4 gap-2.5">
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.05 }}
                            className="flex flex-col items-center bg-gray-50/80 p-3 rounded-2xl border border-gray-100/60"
                        >
                            <div className={cn('w-9 h-9 rounded-xl flex items-center justify-center mb-1.5 shadow-sm', stat.bg)}>
                                <stat.icon className={cn('w-4 h-4', stat.color)} />
                            </div>
                            <span className="text-sm font-serif font-black text-gray-900">{stat.value}</span>
                            <span className="text-[9px] text-gray-400 font-bold uppercase tracking-tight">{stat.label}</span>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Badges Section */}
            <section className="px-6 mt-8">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                        <Award className="w-5 h-5 text-primary" />
                        <h2 className="text-xl font-serif font-bold text-gray-900">Galerie de Badges</h2>
                    </div>
                    <span className="text-xs font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-lg">
                        {effectiveBadges.length} / {ALL_BADGES.length} débloqués
                    </span>
                </div>

                <div className="grid grid-cols-4 gap-3 bg-white p-5 rounded-[2rem] border border-gray-100 shadow-sm">
                    {ALL_BADGES.map((badge) => {
                        const isUnlocked = effectiveBadges.includes(badge.id);
                        return (
                            <button
                                key={badge.id}
                                onClick={() => setSelectedBadge(badge)}
                                className={cn(
                                    'flex flex-col items-center p-2 rounded-2xl transition-all relative group',
                                    isUnlocked
                                        ? 'hover:scale-105 active:scale-95'
                                        : 'opacity-40 hover:opacity-75'
                                )}
                            >
                                <div
                                    className={cn(
                                        'w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shadow-sm mb-1.5 relative border transition-colors',
                                        isUnlocked
                                            ? 'bg-gradient-to-tr from-orange-100 via-amber-50 to-orange-50 border-orange-200 shadow-orange-500/10'
                                            : 'bg-gray-100 border-gray-200 grayscale'
                                    )}
                                >
                                    <span>{badge.emoji}</span>
                                    {!isUnlocked && (
                                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-gray-600 text-white rounded-full flex items-center justify-center text-[9px]">
                                            <Lock className="w-2.5 h-2.5" />
                                        </div>
                                    )}
                                </div>
                                <span className="text-[10px] font-bold text-center leading-tight line-clamp-1 text-gray-800">
                                    {badge.title}
                                </span>
                            </button>
                        );
                    })}
                </div>
            </section>

            {/* Préférences Culinaires & Pimentomètre */}
            <section className="px-6 mt-8">
                <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                            <Flame className="w-5 h-5 text-orange-500" />
                            <h2 className="text-lg font-serif font-bold text-gray-900">Pimentomètre & Goûts</h2>
                        </div>
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                            Personnalisé
                        </span>
                    </div>

                    <p className="text-xs text-gray-500 mb-4">
                        Ajustez votre niveau de piquant pour adapter vos astuces et recommandations culinaires :
                    </p>

                    {/* Spice Level Selector */}
                    <div className="grid grid-cols-4 gap-2 mb-6">
                        {(['mild', 'medium', 'hot', 'volcano'] as const).map((lvl) => {
                            const isSelected = currentSpiceLevel === lvl;
                            const info = spiceLabels[lvl];
                            return (
                                <button
                                    key={lvl}
                                    onClick={() => handleQuickSpiceChange(lvl)}
                                    className={cn(
                                        'flex flex-col items-center p-2.5 rounded-2xl border transition-all text-center',
                                        isSelected
                                            ? 'bg-orange-50/80 border-primary shadow-sm scale-105'
                                            : 'bg-gray-50/50 border-gray-100 hover:border-gray-200'
                                    )}
                                >
                                    <span className="text-xl mb-1">{info.icon}</span>
                                    <span className="text-[11px] font-bold text-gray-900 leading-tight">
                                        {info.label}
                                    </span>
                                </button>
                            );
                        })}
                    </div>

                    {/* Diets & Preferences Tags */}
                    <div>
                        <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-2">
                            Régimes & Alimentation
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {['Halal', 'Végétarien', 'Sans Gluten', 'Pescétarien', 'Fait Maison'].map(
                                (diet) => {
                                    const active = (user?.preferences?.diets || editData.diets || []).includes(diet);
                                    return (
                                        <button
                                            key={diet}
                                            onClick={() => handleDietToggle(diet)}
                                            className={cn(
                                                'px-3 py-1.5 rounded-xl text-xs font-bold transition-all border',
                                                active
                                                    ? 'bg-primary text-white border-primary shadow-sm'
                                                    : 'bg-gray-50 text-gray-600 border-gray-200 hover:border-gray-300'
                                            )}
                                        >
                                            {diet} {active && '✓'}
                                        </button>
                                    );
                                }
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Carnet de Chef : Onglets Plats Cuisinés & Favoris */}
            <section className="px-6 mt-8">
                <div className="flex gap-2 mb-4 bg-gray-100/80 p-1.5 rounded-2xl">
                    <button
                        onClick={() => setActiveTab('cooked')}
                        className={cn(
                            'flex-1 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5',
                            activeTab === 'cooked'
                                ? 'bg-white text-gray-900 shadow-sm'
                                : 'text-gray-500 hover:text-gray-700'
                        )}
                    >
                        <Utensils className="w-3.5 h-3.5 text-primary" />
                        <span>Plats Cuisinés ({cookedRecipeObjects.length})</span>
                    </button>
                    <button
                        onClick={() => setActiveTab('favorites')}
                        className={cn(
                            'flex-1 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5',
                            activeTab === 'favorites'
                                ? 'bg-white text-gray-900 shadow-sm'
                                : 'text-gray-500 hover:text-gray-700'
                        )}
                    >
                        <Heart className="w-3.5 h-3.5 text-rose-500" />
                        <span>Favoris ({favoriteRecipeObjects.length})</span>
                    </button>
                </div>

                {activeTab === 'cooked' ? (
                    cookedRecipeObjects.length > 0 ? (
                        <div className="grid grid-cols-1 gap-4">
                            {cookedRecipeObjects.map((recipe) => (
                                <Link
                                    key={recipe.id}
                                    to={`/recipe/${recipe.id}`}
                                    className="bg-white p-3.5 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4 hover:border-primary/30 transition-all group"
                                >
                                    <img
                                        src={recipe.image}
                                        alt={recipe.title}
                                        className="w-16 h-16 rounded-xl object-cover shadow-sm group-hover:scale-105 transition-transform"
                                    />
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2 mb-0.5">
                                            <span className="text-[9px] font-bold px-2 py-0.5 bg-emerald-50 text-emerald-600 rounded-md uppercase tracking-wider">
                                                ✓ Réussi
                                            </span>
                                            <span className="text-[10px] text-gray-400">
                                                {recipe.completedAt
                                                    ? new Date(recipe.completedAt).toLocaleDateString('fr-FR', {
                                                          day: 'numeric',
                                                          month: 'short',
                                                      })
                                                    : 'Récemment'}
                                            </span>
                                        </div>
                                        <h3 className="font-serif font-bold text-gray-900 truncate text-sm group-hover:text-primary transition-colors">
                                            {recipe.title}
                                        </h3>
                                        <p className="text-[11px] text-gray-400">
                                            {recipe.prepTime + recipe.cookTime} min • {recipe.origin}
                                        </p>
                                    </div>
                                    <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-primary transition-colors flex-shrink-0" />
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <div className="bg-white rounded-3xl p-8 border border-gray-100 text-center">
                            <div className="w-14 h-14 rounded-2xl bg-orange-50 text-primary flex items-center justify-center mx-auto mb-3">
                                <BookOpen className="w-6 h-6" />
                            </div>
                            <h3 className="font-serif font-bold text-gray-900 mb-1">
                                Votre carnet de chef est encore vierge
                            </h3>
                            <p className="text-xs text-gray-500 mb-5 max-w-xs mx-auto">
                                Lancez une recette en cuisine guidée et cliquez sur « Terminé » pour inscrire votre premier festin !
                            </p>
                            <Link
                                to="/recipes"
                                className="inline-block px-5 py-2.5 bg-primary text-white text-xs font-bold rounded-xl shadow-md shadow-primary/20 hover:scale-105 active:scale-95 transition-all"
                            >
                                Choisir une recette
                            </Link>
                        </div>
                    )
                ) : favoriteRecipeObjects.length > 0 ? (
                    <div className="grid grid-cols-1 gap-4">
                        {favoriteRecipeObjects.map((recipe) => (
                            <RecipeCard key={recipe.id} recipe={recipe} />
                        ))}
                    </div>
                ) : (
                    <div className="bg-white rounded-3xl p-8 border border-gray-100 text-center">
                        <div className="w-14 h-14 rounded-2xl bg-rose-50 text-rose-500 flex items-center justify-center mx-auto mb-3">
                            <Heart className="w-6 h-6" />
                        </div>
                        <h3 className="font-serif font-bold text-gray-900 mb-1">Aucun favori enregistré</h3>
                        <p className="text-xs text-gray-500 mb-5 max-w-xs mx-auto">
                            Touchez le cœur sur n’importe quelle recette pour la conserver précieusement ici.
                        </p>
                        <Link
                            to="/recipes"
                            className="inline-block px-5 py-2.5 bg-gray-900 text-white text-xs font-bold rounded-xl shadow-md hover:scale-105 active:scale-95 transition-all"
                        >
                            Parcourir les recettes
                        </Link>
                    </div>
                )}
            </section>

            {/* Paramètres & Sélecteur de Langue */}
            <section className="px-6 mt-8">
                <div className="bg-white p-5 rounded-[2rem] border border-gray-100 shadow-sm flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                            <Globe2 className="w-5 h-5" />
                        </div>
                        <div>
                            <p className="text-xs font-bold text-gray-900">Langue / Language</p>
                            <p className="text-[10px] text-gray-400">Interface de l'application</p>
                        </div>
                    </div>
                    <div className="flex items-center bg-gray-100 p-1 rounded-xl">
                        <button
                            onClick={() => toggleLanguage('fr')}
                            className={cn(
                                'px-3 py-1.5 rounded-lg text-xs font-bold transition-all',
                                i18n.language === 'fr'
                                    ? 'bg-white text-gray-900 shadow-sm'
                                    : 'text-gray-400 hover:text-gray-700'
                            )}
                        >
                            🇫🇷 FR
                        </button>
                        <button
                            onClick={() => toggleLanguage('en')}
                            className={cn(
                                'px-3 py-1.5 rounded-lg text-xs font-bold transition-all',
                                i18n.language === 'en'
                                    ? 'bg-white text-gray-900 shadow-sm'
                                    : 'text-gray-400 hover:text-gray-700'
                            )}
                        >
                            🇬🇧 EN
                        </button>
                        <button
                            onClick={() => toggleLanguage('pt')}
                            className={cn(
                                'px-3 py-1.5 rounded-lg text-xs font-bold transition-all',
                                i18n.language === 'pt'
                                    ? 'bg-white text-gray-900 shadow-sm'
                                    : 'text-gray-400 hover:text-gray-700'
                            )}
                        >
                            🇵🇹 PT
                        </button>
                    </div>
                </div>
            </section>

            {/* Badge Detail Modal */}
            <AnimatePresence>
                {selectedBadge && (
                    <div className="fixed inset-0 z-[120] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="bg-white rounded-3xl p-6 max-w-xs w-full text-center relative border border-orange-100 shadow-2xl"
                        >
                            <button
                                onClick={() => setSelectedBadge(null)}
                                className="absolute top-4 right-4 p-1.5 bg-gray-100 hover:bg-gray-200 text-gray-400 rounded-full"
                            >
                                <X className="w-4 h-4" />
                            </button>

                            <div className="w-20 h-20 rounded-3xl bg-orange-50 border border-orange-100 flex items-center justify-center text-4xl mx-auto mb-4 shadow-sm">
                                {selectedBadge.emoji}
                            </div>

                            <span
                                className={cn(
                                    'inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-2',
                                    effectiveBadges.includes(selectedBadge.id)
                                        ? 'bg-emerald-100 text-emerald-700'
                                        : 'bg-gray-100 text-gray-500'
                                )}
                            >
                                {effectiveBadges.includes(selectedBadge.id) ? '✓ Badge Obtenu' : '🔒 À Débloquer'}
                            </span>

                            <h3 className="text-xl font-serif font-black text-gray-900 mb-2">
                                {selectedBadge.title}
                            </h3>

                            <p className="text-xs text-gray-600 mb-4 leading-relaxed">
                                {selectedBadge.description}
                            </p>

                            <div className="bg-gray-50 p-3 rounded-2xl border border-gray-100 text-[11px] text-gray-500 mb-4">
                                <span className="font-bold text-gray-700">Comment l'obtenir :</span>{' '}
                                {selectedBadge.hint}
                            </div>

                            <button
                                onClick={() => setSelectedBadge(null)}
                                className="w-full py-3 bg-gray-900 text-white rounded-xl text-xs font-bold hover:scale-105 active:scale-95 transition-all"
                            >
                                Compris
                            </button>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            {/* Editing Modal/View Overlay style */}
            {isEditing && (
                <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-end justify-center">
                    <motion.div
                        initial={{ y: '100%' }}
                        animate={{ y: 0 }}
                        className="bg-white w-full max-w-lg rounded-t-[3rem] p-8 pb-12 shadow-2xl relative overflow-y-auto max-h-[90vh]"
                    >
                        <div className="flex justify-between items-center mb-8">
                            <h2 className="text-2xl font-serif font-black text-gray-900">Mon Profil Chef</h2>
                            <button
                                onClick={() => setIsEditing(false)}
                                className="p-2 bg-gray-50 rounded-full text-gray-400"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        <div className="space-y-8">
                            {/* Avatar Picker */}
                            <div className="flex flex-col items-center gap-4">
                                <div className="relative group">
                                    <div className="w-24 h-24 rounded-[2rem] p-1 bg-gradient-to-br from-primary to-orange-400 overflow-hidden">
                                        <div className="w-full h-full rounded-[1.8rem] bg-white overflow-hidden">
                                            <img src={editData.avatar} alt="Current" className="w-full h-full object-cover" />
                                        </div>
                                    </div>
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                        <div className="bg-black/20 backdrop-blur-sm rounded-[1.8rem] w-full h-full flex items-center justify-center">
                                            <Camera className="w-8 h-8 text-white" />
                                        </div>
                                    </div>
                                </div>

                                <div className="w-full">
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-4 text-center">
                                        Changer d'Avatar Persona
                                    </p>
                                    <div className="grid grid-cols-4 gap-3 bg-gray-50 p-4 rounded-3xl border border-gray-100">
                                        {PRESET_AVATARS.map((av) => (
                                            <button
                                                key={av.id}
                                                onClick={() => setEditData({ ...editData, avatar: av.url })}
                                                className={cn(
                                                    'relative aspect-square rounded-2xl overflow-hidden transition-all',
                                                    editData.avatar === av.url
                                                        ? 'ring-4 ring-primary ring-offset-2 scale-90'
                                                        : 'opacity-40 hover:opacity-100'
                                                )}
                                            >
                                                <img src={av.url} alt={av.label} />
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Form Fields */}
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-2">
                                        Nom de Chef
                                    </label>
                                    <input
                                        value={editData.name}
                                        onChange={(e) => setEditData({ ...editData, name: e.target.value })}
                                        className="w-full bg-gray-50 border border-transparent focus:bg-white focus:border-primary/20 px-6 py-4 rounded-2xl outline-none transition-all font-bold"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-2">
                                        Ma Petite Bio
                                    </label>
                                    <textarea
                                        rows={3}
                                        value={editData.bio}
                                        onChange={(e) => setEditData({ ...editData, bio: e.target.value })}
                                        className="w-full bg-gray-50 border border-transparent focus:bg-white focus:border-primary/20 px-6 py-4 rounded-2xl outline-none transition-all font-medium text-sm italic"
                                        placeholder="Décrivez votre passion culinaire..."
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-2">
                                        Région Préférée
                                    </label>
                                    <select
                                        value={editData.favoriteRegion}
                                        onChange={(e) => setEditData({ ...editData, favoriteRegion: e.target.value })}
                                        className="w-full bg-gray-50 border border-transparent focus:bg-white focus:border-primary/20 px-6 py-4 rounded-2xl outline-none transition-all font-bold text-sm"
                                    >
                                        <option value="Afrique de l’Ouest">Afrique de l’Ouest</option>
                                        <option value="Afrique Centrale">Afrique Centrale</option>
                                        <option value="Afrique de l’Est">Afrique de l’Est</option>
                                        <option value="Afrique Australe">Afrique Australe</option>
                                        <option value="Caraïbes & Antilles">Caraïbes & Antilles</option>
                                        <option value="Amérique du Sud & Afro-descendance">Amérique du Sud</option>
                                    </select>
                                </div>
                            </div>

                            <button
                                onClick={handleSave}
                                className="w-full bg-gray-900 text-white py-5 rounded-[2rem] font-black shadow-2xl flex items-center justify-center gap-3 active:scale-95 transition-transform"
                            >
                                <Check className="w-5 h-5" />
                                Enregistrer les modifications
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </div>
    );
}
