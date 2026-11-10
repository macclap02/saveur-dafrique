import type { Recipe } from '../types';
import { DESSERT_RECIPE_IDS, BBQ_RECIPE_IDS } from '../data/categories';

export type CompositionFilter =
    | 'all'
    | 'viande'
    | 'volaille'
    | 'poisson'
    | 'vegetarien'
    | 'grillades'
    | 'dessert';

export type DurationFilter = 'all' | 'quick' | 'medium' | 'slow';

export type DifficultyFilter = 'all' | 'Facile' | 'Moyen' | 'Difficile';

const POULTRY_KEYWORDS = [
    'poulet', 'poule', 'coq', 'canard', 'pintade', 'chicken', 'volaille', 'galinha'
];

const SEAFOOD_KEYWORDS = [
    'poisson', 'morue', 'crevette', 'crevettes', 'crabe', 'dorade', 'aiglefin',
    'thon', 'tilapia', 'flying fish', 'capitaine', 'mâchoiron', 'gambas',
    'fruits de mer', 'pescado', 'homard', 'langouste'
];

const RED_MEAT_KEYWORDS = [
    'boeuf', 'bœuf', 'mouton', 'agneau', 'porc', 'jarret', 'saucisse', 'andouille',
    'viande', 'picanha', 'carne-seca', 'linguiça', 'boerewors', 'queue de bœuf',
    'tripes', 'chèvre', 'chevre', 'cabri', 'gibier', 'ragoût de viande', 'kanda'
];

export function matchesComposition(recipe: Recipe, filter: CompositionFilter): boolean {
    if (filter === 'all') return true;

    // Dessert
    if (filter === 'dessert') {
        return DESSERT_RECIPE_IDS.includes(recipe.id) || (recipe.tags?.includes('sucre') ?? false);
    }

    // Grillades / BBQ
    if (filter === 'grillades') {
        return BBQ_RECIPE_IDS.includes(recipe.id) || (recipe.tags?.includes('grillades') ?? false);
    }

    // Check recipe explicit tags first
    if (recipe.tags && recipe.tags.length > 0) {
        if (filter === 'viande' && recipe.tags.includes('viande')) return true;
        if (filter === 'volaille' && recipe.tags.includes('volaille')) return true;
        if (filter === 'poisson' && recipe.tags.includes('poisson-fruits-de-mer')) return true;
        if (filter === 'vegetarien' && (recipe.tags.includes('vegetarien') || recipe.tags.includes('vegan'))) return true;
    }

    const ingText =
        (recipe.ingredients || []).map((i) => i.name.toLowerCase()).join(' ') +
        ' ' +
        recipe.title.toLowerCase();

    const hasPoultry = POULTRY_KEYWORDS.some((k) => ingText.includes(k));
    const hasSeafood = SEAFOOD_KEYWORDS.some((k) => ingText.includes(k));
    const hasRedMeat = RED_MEAT_KEYWORDS.some((k) => ingText.includes(k));

    if (filter === 'volaille') return hasPoultry;
    if (filter === 'poisson') return hasSeafood;
    if (filter === 'viande') return hasRedMeat;
    if (filter === 'vegetarien') {
        return (
            !DESSERT_RECIPE_IDS.includes(recipe.id) &&
            !hasPoultry &&
            !hasSeafood &&
            !hasRedMeat
        );
    }

    return true;
}

export function matchesDuration(recipe: Recipe, filter: DurationFilter): boolean {
    if (filter === 'all') return true;
    const totalTime = (recipe.prepTime || 0) + (recipe.cookTime || 0);
    if (filter === 'quick') return totalTime <= 30;
    if (filter === 'medium') return totalTime > 30 && totalTime <= 60;
    if (filter === 'slow') return totalTime > 60;
    return true;
}

export function matchesDifficulty(recipe: Recipe, filter: DifficultyFilter): boolean {
    if (filter === 'all') return true;
    return recipe.difficulty === filter;
}

/**
 * Normalise a string by removing accents and lowercasing for fuzzy searching
 */
export function normalizeText(text: string): string {
    return text
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
        .trim();
}

/**
 * Searches a recipe across title, origin, description, intro, and ingredients list
 */
export function matchesQuery(recipe: Recipe, query: string): boolean {
    if (!query || query.trim() === '') return true;
    const normalizedQuery = normalizeText(query);
    const words = normalizedQuery.split(/\s+/).filter(Boolean);

    const searchableBlob = normalizeText(
        [
            recipe.title,
            recipe.origin,
            recipe.region,
            recipe.intro || '',
            recipe.description || '',
            ...(recipe.ingredients || []).map((i) => i.name),
        ].join(' ')
    );

    // All typed words must appear somewhere in the searchable blob
    return words.every((word) => searchableBlob.includes(word));
}
