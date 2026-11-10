import { useSearchParams, Link } from 'react-router-dom';
import { recipes } from '../data/recipes';
import type { Recipe } from '../types';
import { RecipeCard } from '../components/ui/RecipeCard';
import { CATEGORIES, getCategoryById, getRecipesByCategory } from '../data/categories';
import { ArrowLeft, Sparkles, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function RecipesListPage() {
    const [searchParams, setSearchParams] = useSearchParams();
    const categoryParam = searchParams.get('category');
    const activeCategory = getCategoryById(categoryParam);

    const filteredRecipes = getRecipesByCategory(categoryParam);

    // Group recipes by region (used when viewing all)
    const recipesByRegion = recipes.reduce((acc, recipe) => {
        if (!acc[recipe.region]) acc[recipe.region] = [];
        acc[recipe.region].push(recipe);
        return acc;
    }, {} as Record<string, Recipe[]>);

    const regionOrder = ['Afrique', 'Amérique du Nord', 'Amérique du Sud', 'Caraïbes et Antilles'];

    const handleSelectCategory = (categoryId: string | null) => {
        if (!categoryId) {
            setSearchParams({});
        } else {
            setSearchParams({ category: categoryId });
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="p-4 max-w-md mx-auto pb-28">
            {/* Back link */}
            <div className="pt-2 mb-3">
                <Link
                    to="/"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-500 hover:text-gray-900 transition-colors py-1 px-2.5 rounded-xl bg-white border border-gray-100 shadow-sm"
                >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Accueil</span>
                </Link>
            </div>

            {/* Header */}
            <header className="mb-6">
                <AnimatePresence mode="wait">
                    {activeCategory ? (
                        <motion.div
                            key={activeCategory.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                        >
                            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-orange-100 text-primary text-[10px] font-bold rounded-lg mb-2 uppercase tracking-widest">
                                <Sparkles className="w-3 h-3" /> Catégorie
                            </div>
                            <h1 className="text-3xl font-serif font-black text-gray-900 flex items-center gap-2">
                                <span>{activeCategory.badge}</span>
                                <span>{activeCategory.title}</span>
                            </h1>
                            <p className="text-gray-500 text-sm mt-1 leading-relaxed">
                                {activeCategory.subtitle}
                            </p>
                            <div className="mt-3 flex items-center justify-between">
                                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                                    {filteredRecipes.length} {filteredRecipes.length > 1 ? 'recettes trouvées' : 'recette trouvée'}
                                </span>
                                <button
                                    onClick={() => handleSelectCategory(null)}
                                    className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:underline"
                                >
                                    <X className="w-3.5 h-3.5" /> Voir toutes les recettes
                                </button>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="all"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                        >
                            <h1 className="text-3xl font-serif font-black text-gray-900">
                                Toutes les Recettes
                            </h1>
                            <p className="text-gray-500 text-sm mt-1">
                                {recipes.length} recettes authentiques de la diaspora africaine
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </header>

            {/* Category Filter Pills */}
            <div className="mb-6 -mx-4 px-4 overflow-x-auto scrollbar-hide flex gap-2 pb-2">
                <button
                    onClick={() => handleSelectCategory(null)}
                    className={`px-4 py-2 rounded-2xl text-xs font-bold whitespace-nowrap transition-all ${
                        !activeCategory
                            ? 'bg-gray-900 text-white shadow-md shadow-gray-900/20 scale-105'
                            : 'bg-white text-gray-600 border border-gray-200 hover:border-gray-300'
                    }`}
                >
                    Toutes ({recipes.length})
                </button>
                {CATEGORIES.map((cat) => {
                    const isSelected = activeCategory?.id === cat.id;
                    const count = recipes.filter(cat.filter).length;
                    return (
                        <button
                            key={cat.id}
                            onClick={() => handleSelectCategory(cat.id)}
                            className={`px-4 py-2 rounded-2xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                                isSelected
                                    ? 'bg-primary text-white shadow-md shadow-primary/25 scale-105'
                                    : 'bg-white text-gray-600 border border-gray-200 hover:border-primary/40'
                            }`}
                        >
                            <span>{cat.badge}</span>
                            <span>{cat.title}</span>
                            <span className={`text-[10px] ml-0.5 opacity-75`}>({count})</span>
                        </button>
                    );
                })}
            </div>

            {/* Content: When filtered by category */}
            {activeCategory ? (
                <div className="grid grid-cols-1 gap-6">
                    {filteredRecipes.map((recipe, index) => (
                        <motion.div
                            key={recipe.id}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: Math.min(index * 0.04, 0.4) }}
                        >
                            <RecipeCard recipe={recipe} />
                        </motion.div>
                    ))}
                    {filteredRecipes.length === 0 && (
                        <div className="text-center py-16 bg-white rounded-3xl border border-gray-100 p-8">
                            <p className="text-gray-400 font-serif">Aucune recette dans cette catégorie pour le moment.</p>
                            <button
                                onClick={() => handleSelectCategory(null)}
                                className="mt-4 px-6 py-2.5 bg-primary text-white text-xs font-bold rounded-xl"
                            >
                                Voir toutes les recettes
                            </button>
                        </div>
                    )}
                </div>
            ) : (
                /* Content: When viewing all, group by region */
                regionOrder.map((region) => {
                    const regionRecipes = recipesByRegion[region];
                    if (!regionRecipes || regionRecipes.length === 0) return null;

                    return (
                        <section key={region} className="mb-8">
                            <h2 className="text-xl font-serif font-bold text-gray-800 mb-4 flex items-center">
                                <span className="flex-1">{region}</span>
                                <span className="text-xs font-sans font-bold text-gray-400 uppercase tracking-wider">
                                    {regionRecipes.length} {regionRecipes.length === 1 ? 'recette' : 'recettes'}
                                </span>
                            </h2>
                            <div className="grid grid-cols-1 gap-6">
                                {regionRecipes.map((recipe) => (
                                    <RecipeCard key={recipe.id} recipe={recipe} />
                                ))}
                            </div>
                        </section>
                    );
                })
            )}
        </div>
    );
}
