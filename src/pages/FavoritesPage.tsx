import { Link } from 'react-router-dom';
import { Heart, Search } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { recipes } from '../data/recipes';
import { RecipeCard } from '../components/ui/RecipeCard';
import { motion } from 'framer-motion';

export function FavoritesPage() {
    const { isAuthenticated, effectiveFavorites } = useAuth();
    const favoriteRecipes = recipes.filter(r => effectiveFavorites?.includes(r.id));

    // Si aucun favori et pas connecté
    if (!isAuthenticated && effectiveFavorites.length === 0) {
        return (
            <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6 text-center">
                <div className="w-20 h-20 bg-rose-100 rounded-full flex items-center justify-center mb-6">
                    <Heart className="w-8 h-8 text-rose-500" />
                </div>
                <h1 className="text-2xl font-serif font-bold text-gray-900 mb-3">Vos Favoris</h1>
                <p className="text-gray-500 mb-8 max-w-xs">
                    Connectez-vous pour sauvegarder et retrouver facilement vos recettes préférées.
                </p>
                <Link to="/login" className="bg-primary text-white px-8 py-3 rounded-xl font-bold hover:scale-105 transition-all shadow-lg shadow-primary/20">
                    Se connecter
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50/50 pb-24">
            <div className="px-6 pt-6 pb-4 bg-white sticky top-0 z-10 shadow-sm border-b border-gray-100">
                <h1 className="text-2xl font-serif font-bold text-gray-900 flex items-center gap-3">
                    <Heart className="w-6 h-6 text-rose-500 fill-rose-500" />
                    Mes Favoris
                </h1>
                <p className="text-sm text-gray-500 mt-1 font-medium">
                    {favoriteRecipes.length} recette{favoriteRecipes.length !== 1 ? 's' : ''} sauvegardée{favoriteRecipes.length !== 1 ? 's' : ''}
                </p>
                {!isAuthenticated && (
                    <div className="mt-3 p-3 bg-orange-50 border border-orange-100 rounded-xl flex items-center justify-between text-xs text-orange-900">
                        <span>Mode invité local.</span>
                        <Link to="/login" className="font-bold text-primary hover:underline">
                            Se connecter pour synchroniser
                        </Link>
                    </div>
                )}
            </div>

            <div className="p-6">
                {favoriteRecipes.length > 0 ? (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {favoriteRecipes.map(recipe => (
                            <RecipeCard key={recipe.id} recipe={recipe} />
                        ))}
                    </motion.div>
                ) : (
                    <div className="flex flex-col items-center justify-center py-20 text-center">
                        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                            <Search className="w-6 h-6 text-gray-400" />
                        </div>
                        <h2 className="text-xl font-serif font-bold text-gray-900 mb-2">Aucun favori pour le moment</h2>
                        <p className="text-sm text-gray-500 mb-8 max-w-xs">
                            Parcourez nos recettes et cliquez sur le cœur pour les ajouter à votre collection.
                        </p>
                        <Link to="/recipes" className="bg-gray-900 text-white px-6 py-3 rounded-xl font-bold text-sm hover:scale-105 transition-all">
                            Explorer les recettes
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}
