import type { Recipe } from '../types';
import { recipes } from './recipes';

export interface CategoryDef {
    id: string;
    title: string;
    subtitle: string;
    badge: string;
    filter: (recipe: Recipe) => boolean;
}

export const DESSERT_RECIPE_IDS = [
    'puff-puff',
    'chin-chin',
    'mandazi',
    'kakro',
    'cocada',
    'thiakry',
    'malva-pudding',
    'tablet-kokoye',
    'tembleque',
    'gizzada',
    'koeksisters',
    'sweet-potato-pie',
];

export const BBQ_RECIPE_IDS = [
    'churrasco-bresilien',
    'braai-sud-africain',
    'jerk-jamaicain',
    'barbecue-carolines',
    'suya-chanchanga',
    'anticuchos',
    'frango-zambeziana',
];

export const STREET_FOOD_RECIPE_IDS = [
    'alloco',
    'garba',
    'suya-chanchanga',
    'accras-morue',
    'acaraje',
    'ata',
    'doubles',
    'anticuchos',
    'ablo',
    'moi-moi',
    'koki',
    'puff-puff',
    'chin-chin',
    'mandazi',
    'kakro',
];

export const CLASSIC_RECIPE_IDS = [
    'jollof-rice',
    'thieboudienne',
    'mafe',
    'ndole',
    'poulet-yassa',
    'poulet-dg',
    'saka-saka',
    'egusi-soup',
    'sauce-gombo',
    'kedjenou',
    'moambe-chicken',
    'poulet-nyembwe',
    'attieke-poisson',
    'fufu-light-soup',
    'efo-riro',
    'pepe-soup',
    'kanda',
    'liboke',
    'cachupa-rico',
    'matapa',
    'frango-zambeziana',
    'amiwo-poulet',
    'pilau-swahili',
    'misir-wot',
    'sukuma-wiki',
    'mbongo-tchobi',
    'waakye',
    'couscous-fonio-royal',
    'soupou-kandja',
    'sauce-gouagouassou',
    'placali-sauce-kpala',
    'chakalaka-pap',
    'seswaa',
    'bobotie-cap',
    'ful-medames',
    'couscous-berbere-7-legumes',
];

export const CATEGORIES: CategoryDef[] = [
    {
        id: 'classics',
        title: 'Les Incontournables',
        subtitle: 'Les piliers et plats emblématiques de la gastronomie africaine',
        badge: '👑',
        filter: (r) => CLASSIC_RECIPE_IDS.includes(r.id),
    },
    {
        id: 'grillades',
        title: 'Grillades & Barbecues',
        subtitle: 'Braai, Jerk, Churrasco, Suya : l\'art du feu et des braises',
        badge: '🔥',
        filter: (r) => BBQ_RECIPE_IDS.includes(r.id) || (r.tags?.includes('grillades') ?? false),
    },
    {
        id: 'street',
        title: 'Street Food & Snacks',
        subtitle: 'Le meilleur de la cuisine de rue et des encas populaires',
        badge: '🍢',
        filter: (r) => STREET_FOOD_RECIPE_IDS.includes(r.id),
    },
    {
        id: 'diaspora',
        title: 'Voyage en Diaspora',
        subtitle: "L'influence et l'héritage culinaire africain à travers les continents",
        badge: '🌍',
        filter: (r) => r.region !== 'Afrique' && !DESSERT_RECIPE_IDS.includes(r.id),
    },
    {
        id: 'desserts',
        title: 'Douceurs & Desserts',
        subtitle: 'De la cocada brésilienne au malva pudding sud-africain',
        badge: '🍮',
        filter: (r) => DESSERT_RECIPE_IDS.includes(r.id),
    },
];

export function getCategoryById(id: string | null): CategoryDef | undefined {
    if (!id) return undefined;
    return CATEGORIES.find((c) => c.id.toLowerCase() === id.toLowerCase());
}

export function getRecipesByCategory(categoryId: string | null): Recipe[] {
    const category = getCategoryById(categoryId);
    if (!category) return recipes;
    return recipes.filter(category.filter);
}
