export interface Ingredient {
    name: string;
    quantity: string;
}

export interface Step {
    order: number;
    description: string;
    duration?: number; // minutes
}

export interface Recipe {
    id: string;
    title: string;
    origin: string;
    region: 'Afrique' | 'Amérique du Nord' | 'Amérique du Sud' | 'Caraïbes et Antilles' | 'Océan Indien';
    image: string;
    prepTime: number; // minutes
    cookTime: number; // minutes
    servings: number;
    difficulty: 'Facile' | 'Moyen' | 'Difficile';
    ingredients: Ingredient[];
    utensils: string[];
    steps: Step[];
    suggestedAccompaniments?: string[]; // For sauces: what to serve with
    relatedRecipes?: string[]; // IDs of related recipes
    practicalTips?: string[]; // Practical cooking tips
    intro?: string; // Evocative "mise en bouche"
    description?: string; // Historical context and origin story
    tags?: ('viande' | 'volaille' | 'poisson-fruits-de-mer' | 'vegetarien' | 'vegan' | 'grillades' | 'sucre')[];
    aliases?: string[]; // Regional names and cultural equivalents (e.g., Atassi, Ayimolou, Agoun)
}
