import type { Recipe } from '../../types';
import { Clock, Users, ChefHat, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../../context/AuthContext';
import { cn } from '../../lib/utils';

interface RecipeCardProps {
    recipe: Recipe;
}

export function RecipeCard({ recipe }: RecipeCardProps) {
    const { toggleFavorite, effectiveFavorites } = useAuth();
    const isFavorite = effectiveFavorites?.includes(recipe.id);

    const handleFavoriteClick = (e: React.MouseEvent) => {
        e.preventDefault(); // Empêcher la navigation
        toggleFavorite(recipe.id);
    };

    return (
        <motion.div
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
        >
            <Link to={`/recipe/${recipe.id}`} className="block group relative">
                <div className="bg-white rounded-[2rem] overflow-hidden shadow-sm border border-gray-100 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-orange-900/5">
                    <div className="relative aspect-[4/3] overflow-hidden">
                        <img
                            src={recipe.image}
                            alt={recipe.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            loading="lazy"
                        />
                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-2xl text-[10px] font-bold text-primary shadow-sm uppercase tracking-wider z-10">
                            {recipe.origin}
                        </div>
                        <button 
                            onClick={handleFavoriteClick}
                            className="absolute top-4 left-4 p-2.5 bg-white/90 backdrop-blur-md rounded-full shadow-sm hover:scale-110 active:scale-95 transition-all z-10"
                        >
                            <Heart 
                                className={cn("w-5 h-5 transition-colors", isFavorite ? "fill-rose-500 text-rose-500" : "text-gray-400")} 
                            />
                        </button>
                    </div>

                    <div className="p-5">
                        <h3 className="text-xl font-serif font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors leading-tight">
                            {recipe.title}
                        </h3>

                        <div className="flex items-center gap-4 text-[11px] text-gray-400 mt-4 font-medium uppercase tracking-widest">
                            <div className="flex items-center gap-1.5 grayscale group-hover:grayscale-0 transition-all">
                                <Clock className="w-3.5 h-3.5" />
                                <span>{recipe.prepTime + recipe.cookTime} m</span>
                            </div>
                            <div className="flex items-center gap-1.5 grayscale group-hover:grayscale-0 transition-all">
                                <Users className="w-3.5 h-3.5" />
                                <span>{recipe.servings} p</span>
                            </div>
                            <div className="flex items-center gap-1.5 grayscale group-hover:grayscale-0 transition-all">
                                <ChefHat className="w-3.5 h-3.5" />
                                <span>{recipe.difficulty}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}
