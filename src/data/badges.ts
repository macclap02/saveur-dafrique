import type { Recipe } from '../types';

export interface Badge {
    id: string;
    title: string;
    description: string;
    emoji: string;
    category: 'discovery' | 'skills' | 'tradition' | 'health';
    hint: string;
}

export const ALL_BADGES: Badge[] = [
    {
        id: 'first_dish',
        title: 'Premier Marmiton',
        description: 'Vous avez cuisiné et terminé votre toute première recette africaine !',
        emoji: '🍳',
        category: 'skills',
        hint: 'Cuisiner 1 recette complète en mode guidé',
    },
    {
        id: 'spice_master',
        title: 'Palais de Feu',
        description: 'Amateur de sensations fortes ! Vous avez relevé le défi d’un plat épicé.',
        emoji: '🌶️',
        category: 'skills',
        hint: 'Cuisiner un plat relevé (Suya, Sauce Gombo, Kédjénou...)',
    },
    {
        id: 'diaspora_voyager',
        title: 'Grand Voyageur',
        description: 'Vous explorez l’héritage africain à travers les océans et continents.',
        emoji: '🌍',
        category: 'discovery',
        hint: 'Cuisiner une recette de la Diaspora (Caraïbes ou Amériques)',
    },
    {
        id: 'dessert_lover',
        title: 'Douceur d’Ébène',
        description: 'Le secret des saveurs sucrées : beignets dorés et délices parfumés.',
        emoji: '🍮',
        category: 'discovery',
        hint: 'Cuisiner un dessert ou encas sucré (Puff-Puff, Thiakry, Malva...)',
    },
    {
        id: 'classic_keeper',
        title: 'Gardien des Traditions',
        description: 'Vous perpétuez les monuments sacrés de la gastronomie africaine.',
        emoji: '👑',
        category: 'tradition',
        hint: 'Cuisiner un grand classique (Jollof, Thieb, Mafé, Ndolé...)',
    },
    {
        id: 'sauce_master',
        title: 'Maître des Sauces',
        description: 'L’art de mijoter les sauces profondes et onctueuses n’a plus de secret.',
        emoji: '🥣',
        category: 'skills',
        hint: 'Cuisiner une sauce mijotée (Moambe, Gouagouassou, Kpala, Egusi)',
    },
    {
        id: 'speedy_chef',
        title: 'Chef Éclair',
        description: 'Efficace et gourmand : un repas savoureux préparé en moins de 30 minutes.',
        emoji: '⚡',
        category: 'skills',
        hint: 'Cuisiner une recette de 30 minutes ou moins (Alloco, Garba...)',
    },
    {
        id: 'curious_foodie',
        title: 'Cœur Gourmet',
        description: 'Vous avez constitué une collection de recettes coups de cœur.',
        emoji: '❤️',
        category: 'discovery',
        hint: 'Ajouter au moins 3 recettes à vos favoris',
    },
];

export function computeUnlockedBadges(cookedRecipeIds: string[], favoriteIds: string[], allRecipes: Recipe[]): string[] {
    const unlocked: string[] = [];
    const cooked = allRecipes.filter((r) => cookedRecipeIds.includes(r.id));

    // 1. Premier Marmiton
    if (cooked.length >= 1) {
        unlocked.push('first_dish');
    }

    // 2. Palais de Feu (Suya, sauce-gombo, kedjenou, griot-haitien, efo-riro, pepe-soup)
    const spicyIds = ['suya-chanchanga', 'suya', 'sauce-gombo', 'kedjenou', 'griot-haitien', 'efo-riro', 'pepe-soup'];
    if (cooked.some((r) => spicyIds.includes(r.id))) {
        unlocked.push('spice_master');
    }

    // 3. Grand Voyageur (region !== 'Afrique')
    if (cooked.some((r) => r.region !== 'Afrique')) {
        unlocked.push('diaspora_voyager');
    }

    // 4. Douceur d’Ébène (desserts)
    const dessertIds = ['puff-puff', 'chin-chin', 'mandazi', 'kakro', 'cocada', 'thiakry', 'malva-pudding', 'tablet-kokoye', 'tembleque', 'gizzada', 'koeksisters', 'sweet-potato-pie'];
    if (cooked.some((r) => dessertIds.includes(r.id))) {
        unlocked.push('dessert_lover');
    }

    // 5. Gardien des Traditions (Jollof, thieboudienne, mafe, ndole, poulet-yassa, poulet-dg)
    const classicIds = ['jollof-rice', 'thieboudienne', 'mafe', 'ndole', 'poulet-yassa', 'poulet-dg'];
    if (cooked.some((r) => classicIds.includes(r.id))) {
        unlocked.push('classic_keeper');
    }

    // 6. Maître des Sauces
    const sauceIds = ['sauce-gombo', 'moambe-chicken', 'poulet-nyembwe', 'sauce-gouagouassou', 'placali-sauce-kpala', 'egusi-soup', 'soupou-kandja'];
    if (cooked.some((r) => sauceIds.includes(r.id))) {
        unlocked.push('sauce_master');
    }

    // 7. Chef Éclair (prep + cook <= 30 min)
    if (cooked.some((r) => r.prepTime + r.cookTime <= 30)) {
        unlocked.push('speedy_chef');
    }

    // 8. Cœur Gourmet
    if (favoriteIds.length >= 3) {
        unlocked.push('curious_foodie');
    }

    return unlocked;
}

export function computeChefLevel(cookedCount: number) {
    if (cookedCount === 0) {
        return {
            title: 'Apprenti Marmiton',
            progress: 10,
            nextLevel: 'Cuisinier Passionné',
            targetCount: 1,
            color: 'from-orange-400 to-amber-500',
        };
    }
    if (cookedCount < 3) {
        return {
            title: 'Cuisinier Passionné',
            progress: Math.round((cookedCount / 3) * 100),
            nextLevel: 'Chef de Rue Émérite',
            targetCount: 3,
            color: 'from-amber-500 to-orange-500',
        };
    }
    if (cookedCount < 6) {
        return {
            title: 'Chef de Rue Émérite',
            progress: Math.round((cookedCount / 6) * 100),
            nextLevel: 'Maître Sauces & Épices',
            targetCount: 6,
            color: 'from-orange-500 to-primary',
        };
    }
    if (cookedCount < 10) {
        return {
            title: 'Maître Sauces & Épices',
            progress: Math.round((cookedCount / 10) * 100),
            nextLevel: 'Gardien Suprême des Saveurs',
            targetCount: 10,
            color: 'from-primary to-rose-600',
        };
    }
    return {
        title: 'Gardien Suprême des Saveurs',
        progress: 100,
        nextLevel: 'Maître Légendaire',
        targetCount: 10,
        color: 'from-yellow-400 to-amber-600',
    };
}
