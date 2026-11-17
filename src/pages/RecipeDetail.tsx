import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { recipes } from '../data/recipes';
import { ArrowLeft, Clock, Users, ChefHat, CheckCircle2, Circle, Play, X, ChevronRight, ChevronLeft, Sparkles, Globe } from 'lucide-react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { RecipeCelebrationModal } from '../components/ui/RecipeCelebrationModal';

export function RecipeDetail() {
    const { id } = useParams<{ id: string }>();
    const recipe = recipes.find(r => r.id === id);
    const { user, isAuthenticated, markRecipeAsCooked, isRecipeCooked } = useAuth();
    const [checkedIngredients, setCheckedIngredients] = useState<Set<string>>(new Set());

    // Cooking Mode States
    const [isCookingMode, setIsCookingMode] = useState(false);
    const [currentStepIndex, setCurrentStepIndex] = useState(0);
    const [showCelebration, setShowCelebration] = useState(false);
    const [hasCompletedRecipe, setHasCompletedRecipe] = useState(false);

    useEffect(() => {
        if (recipe && isRecipeCooked(recipe.id)) {
            setHasCompletedRecipe(true);
        }
    }, [recipe, isRecipeCooked]);

    // Scroll to top when recipe changes
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [id]);

    if (!recipe) {
        return <div className="p-8 text-center uppercase font-serif tracking-widest mt-20 text-gray-400">Recette non trouvée</div>;
    }

    const toggleIngredient = (name: string) => {
        const newChecked = new Set(checkedIngredients);
        if (newChecked.has(name)) {
            newChecked.delete(name);
        } else {
            newChecked.add(name);
        }
        setCheckedIngredients(newChecked);
    };

    const startCooking = () => {
        setIsCookingMode(true);
        setCurrentStepIndex(0);
    };

    const nextStep = () => {
        if (currentStepIndex < recipe.steps.length - 1) {
            setCurrentStepIndex(prev => prev + 1);
        }
    };

    const prevStep = () => {
        if (currentStepIndex > 0) {
            setCurrentStepIndex(prev => prev - 1);
        }
    };

    return (
        <div className="bg-white min-h-screen pb-32">
            {/* Header Image */}
            <div className="relative h-96 w-full">
                <motion.img
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.8 }}
                    src={recipe.image}
                    alt={recipe.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/20" />

                <Link
                    to="/recipes"
                    className="absolute top-6 left-6 p-3 bg-white/90 backdrop-blur-md rounded-2xl text-gray-900 shadow-xl hover:bg-white transition-all active:scale-95"
                >
                    <ArrowLeft className="w-6 h-6" />
                </Link>

                <div className="absolute bottom-12 left-8 right-8 text-gray-900">
                    <motion.span
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="px-3 py-1 bg-primary text-white text-[10px] font-bold rounded-lg mb-3 inline-block uppercase tracking-widest shadow-lg shadow-primary/20"
                    >
                        {recipe.origin}
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl font-serif font-black leading-tight drop-shadow-sm"
                    >
                        {recipe.title}
                    </motion.h1>
                </div>
            </div>

            <div className="max-w-md mx-auto p-8 -mt-8 bg-white rounded-t-[3rem] shadow-[0_-20px_50px_-20px_rgba(0,0,0,0.1)] relative z-10">
                {/* Cultural Equivalents / Regional Aliases */}
                {recipe.aliases && recipe.aliases.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-8 p-4 bg-gradient-to-br from-orange-50/90 to-amber-50/50 border border-orange-100 rounded-2xl shadow-xs"
                    >
                        <div className="flex items-center gap-2 mb-2 text-xs font-bold text-orange-950 uppercase tracking-wider">
                            <Globe className="w-3.5 h-3.5 text-primary" />
                            <span>Variantes & appellations régionales</span>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                            {recipe.aliases.slice(0, 6).map((alias, i) => (
                                <span
                                    key={i}
                                    className="text-xs font-medium text-orange-950 bg-white/90 border border-orange-200/60 px-2.5 py-1 rounded-full capitalize shadow-xs"
                                >
                                    {alias}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                )}

                {/* Info Bar */}
                <div className="flex items-center justify-between mb-10 pb-8 border-b border-gray-100">
                    <div className="flex flex-col items-center">
                        <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center mb-2">
                            <Clock className="w-6 h-6 text-primary" />
                        </div>
                        <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Temps</span>
                        <span className="font-serif font-bold text-gray-900">{recipe.prepTime + recipe.cookTime}min</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center mb-2">
                            <Users className="w-6 h-6 text-primary" />
                        </div>
                        <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Portions</span>
                        <span className="font-serif font-bold text-gray-900">{recipe.servings}</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center mb-2">
                            <ChefHat className="w-6 h-6 text-primary" />
                        </div>
                        <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Niveau</span>
                        <span className="font-serif font-bold text-gray-900">{recipe.difficulty}</span>
                    </div>
                </div>

                {/* Description */}
                {recipe.description && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="mb-10 text-gray-600 font-serif leading-relaxed italic text-lg"
                    >
                        "{recipe.description}"
                    </motion.div>
                )}

                {/* Completed Banner if finished */}
                {hasCompletedRecipe && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="mb-8 p-4 bg-gradient-to-r from-emerald-50 to-emerald-100/60 border border-emerald-200 rounded-3xl flex items-center gap-3 text-emerald-900 shadow-sm"
                    >
                        <div className="w-10 h-10 rounded-2xl bg-emerald-500 text-white flex items-center justify-center flex-shrink-0 shadow-md shadow-emerald-500/20">
                            <CheckCircle2 className="w-6 h-6" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="font-bold text-sm">Recette réalisée avec succès !</p>
                            <p className="text-xs text-emerald-700">Toutes les étapes ont été suivies. Bravo Chef !</p>
                        </div>
                        <button
                            onClick={() => setShowCelebration(true)}
                            className="text-xs font-bold text-emerald-800 bg-white hover:bg-emerald-50 border border-emerald-200 px-3 py-2 rounded-xl transition-all shadow-sm flex-shrink-0"
                        >
                            🎉 Fêter
                        </button>
                    </motion.div>
                )}

                {/* Guided Cooking Button - Sticky Trigger */}
                <div className="fixed bottom-28 inset-x-0 flex justify-center z-[60] px-6 pointer-events-none">
                    <button
                        onClick={startCooking}
                        className={cn(
                            "pointer-events-auto w-full max-w-xs py-5 rounded-[2rem] font-bold shadow-2xl flex items-center justify-center gap-3 hover:scale-105 active:scale-95 transition-all text-lg group",
                            hasCompletedRecipe
                                ? "bg-emerald-900 text-white shadow-emerald-950/20"
                                : "bg-gray-900 text-white shadow-orange-950/20"
                        )}
                    >
                        <div className={cn(
                            "w-8 h-8 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform",
                            hasCompletedRecipe ? "bg-emerald-500" : "bg-primary"
                        )}>
                            <Play className="w-4 h-4 fill-white text-white ml-0.5" />
                        </div>
                        {hasCompletedRecipe ? "Recuisiner ce plat" : "Lancer la cuisine"}
                    </button>
                </div>

                {/* Ingredients */}
                <section className="mb-12">
                    <h2 className="text-2xl font-serif font-bold mb-6 flex items-center justify-between">
                        Ingrédients
                        <div className="flex items-center gap-2">
                            <div className="h-1.5 w-24 bg-gray-100 rounded-full overflow-hidden">
                                <motion.div
                                    className="h-full bg-primary"
                                    initial={{ width: 0 }}
                                    animate={{ width: `${(checkedIngredients.size / recipe.ingredients.length) * 100}%` }}
                                />
                            </div>
                            <span className="text-[10px] font-sans font-bold text-gray-400 uppercase tracking-widest">
                                {checkedIngredients.size}/{recipe.ingredients.length}
                            </span>
                        </div>
                    </h2>
                    <div className="space-y-4">
                        {recipe.ingredients.map((ing) => {
                            const isChecked = checkedIngredients.has(ing.name);
                            return (
                                <div
                                    key={ing.name}
                                    onClick={() => toggleIngredient(ing.name)}
                                    className={cn(
                                        "flex items-center p-4 rounded-3xl border transition-all cursor-pointer",
                                        isChecked
                                            ? "bg-primary/5 border-primary/20 scale-95"
                                            : "bg-white border-gray-100 hover:border-primary/30"
                                    )}
                                >
                                    <div className={cn("mr-4 transition-all duration-300", isChecked ? "text-primary rotate-0 scale-110" : "text-gray-200")}>
                                        {isChecked ? <CheckCircle2 className="w-6 h-6" /> : <Circle className="w-6 h-6" />}
                                    </div>
                                    <div className="flex-1">
                                        <span className={cn("font-medium text-gray-700 transition-colors", isChecked && "text-gray-400")}>
                                            {ing.name}
                                        </span>
                                    </div>
                                    <span className="text-xs text-gray-400 font-bold uppercase tracking-tighter">
                                        {ing.quantity}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* Steps Preview */}
                <section className="mb-12">
                    <h2 className="text-2xl font-serif font-bold mb-6">Préparation</h2>
                    <div className="space-y-6 relative">
                        <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-gray-100" />
                        {recipe.steps.map((step, idx) => (
                            <div key={idx} className="relative pl-12">
                                <span className="absolute left-0 top-0 w-8 h-8 rounded-full bg-white border-2 border-primary text-primary flex items-center justify-center font-serif font-bold text-sm z-10">
                                    {idx + 1}
                                </span>
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Practical Tips / Secrets de Chef */}
                {recipe.practicalTips && recipe.practicalTips.length > 0 && (
                    <section className="mb-12">
                        <div className="bg-gradient-to-br from-orange-50 to-orange-100/50 rounded-[2.5rem] p-8 border border-orange-100 relative overflow-hidden">
                            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/5 rounded-full blur-2xl" />

                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/20">
                                    <Sparkles className="w-5 h-5" />
                                </div>
                                <h2 className="text-xl font-serif font-bold text-gray-900">Secrets de Chef</h2>
                            </div>

                            <ul className="space-y-4">
                                {recipe.practicalTips.map((tip, idx) => (
                                    <li key={idx} className="flex gap-4">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                                        <p className="text-sm text-gray-700 leading-relaxed font-medium">
                                            {tip}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>
                )}

                {/* Community Section */}
                <section className="mb-24 pb-12 border-t border-gray-100 pt-12">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h2 className="text-2xl font-serif font-bold text-gray-900">Communauté</h2>
                            <p className="text-xs text-gray-400 mt-1 font-bold uppercase tracking-widest">Partagez votre expérience</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="flex -space-x-2">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-100 overflow-hidden">
                                        <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 10}`} alt="User" />
                                    </div>
                                ))}
                            </div>
                            <span className="text-xs font-bold text-gray-400">+24</span>
                        </div>
                    </div>

                    {/* Comment Form */}
                    {isAuthenticated ? (
                        <div className="bg-gray-50 rounded-[2rem] p-6 mb-10 border border-gray-100">
                            <div className="flex gap-4 mb-4">
                                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                                    <img src={user?.avatar} className="w-full h-full object-cover rounded-xl" alt="Me" />
                                </div>
                                <div className="flex-1">
                                    <p className="text-xs font-bold text-gray-900">{user?.name}</p>
                                    <p className="text-[10px] text-primary font-bold uppercase tracking-widest">Chef {user?.cookingLevel}</p>
                                </div>
                            </div>
                            <textarea
                                placeholder="Un conseil, une variante ?"
                                className="w-full bg-white border border-gray-100 rounded-2xl p-4 text-sm outline-none focus:border-primary/20 transition-all min-h-[100px]"
                            />
                            <div className="flex justify-end mt-4">
                                <button className="bg-gray-900 text-white px-8 py-3 rounded-xl font-bold text-sm hover:scale-105 transition-all">
                                    Publier
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="bg-orange-50 rounded-[2rem] p-8 text-center mb-10 border border-orange-100/50">
                            <p className="text-sm font-bold text-gray-900 mb-4">Connectez-vous pour rejoindre la discussion</p>
                            <Link to="/login" className="inline-block bg-primary text-white px-8 py-3 rounded-xl font-bold text-sm shadow-lg shadow-primary/20">
                                Se connecter
                            </Link>
                        </div>
                    )}

                    {/* Comments List */}
                    <div className="space-y-8">
                        {[
                            { id: 1, user: 'Amina K.', text: 'J\'ai rajouté un peu plus de gingembre, c\'était divin ! Merci pour les étapes guidées.', date: 'Il y a 2h', isMod: false },
                            { id: 2, user: 'Moussa B.', text: 'Attention à ne pas trop cuire le riz, sinon ça colle.', date: 'Hier', isMod: false }
                        ].map((comment) => (
                            <div key={comment.id} className="relative group">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-2xl bg-gray-100 overflow-hidden flex-shrink-0">
                                        <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${comment.user}`} alt={comment.user} />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between mb-1">
                                            <h4 className="font-bold text-sm text-gray-900">{comment.user}</h4>
                                            <span className="text-[10px] font-bold text-gray-400 uppercase">{comment.date}</span>
                                        </div>
                                        <p className="text-sm text-gray-500 leading-relaxed">{comment.text}</p>

                                        {/* Moderation Tool */}
                                        {user?.isModerator && (
                                            <button className="mt-3 text-[10px] text-rose-500 font-bold uppercase tracking-widest flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity hover:underline">
                                                <X className="w-3 h-3" /> Supprimer (Modération)
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            {/* FULLSCREEN COOKING MODE OVERLAY */}
            <AnimatePresence>
                {isCookingMode && (
                    <motion.div
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, y: 100 }}
                        className="fixed inset-0 z-[100] bg-white flex flex-col"
                    >
                        {/* Header */}
                        <div className="p-6 flex items-center justify-between border-b border-gray-50 bg-white">
                            <button
                                onClick={() => setIsCookingMode(false)}
                                className="p-2 -ml-2 text-gray-500"
                            >
                                <X className="w-6 h-6" />
                            </button>
                            <div className="flex-1 px-4">
                                <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
                                    <motion.div
                                        className="h-full bg-primary"
                                        animate={{ width: `${((currentStepIndex + 1) / recipe.steps.length) * 100}%` }}
                                    />
                                </div>
                            </div>
                            <span className="text-[10px] font-bold text-gray-400 w-10 text-right uppercase tracking-widest">
                                {currentStepIndex + 1} / {recipe.steps.length}
                            </span>
                        </div>

                        {/* Content */}
                        <div className="flex-1 px-6 py-6 overflow-y-auto flex flex-col">
                            <div className="my-auto w-full max-w-xl mx-auto py-4 flex flex-col items-center">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={currentStepIndex}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        className="w-full text-center"
                                    >
                                        <span className="inline-block px-4 py-1.5 bg-primary/10 rounded-full text-primary font-bold text-xs uppercase tracking-widest mb-5">
                                            Étape {recipe.steps[currentStepIndex].order}
                                        </span>
                                        <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-gray-900 leading-relaxed mb-6 max-w-lg mx-auto">
                                            {recipe.steps[currentStepIndex].description}
                                        </h3>

                                        {recipe.steps[currentStepIndex].duration && recipe.steps[currentStepIndex].duration > 0 && (
                                            <div className="inline-flex items-center gap-2 bg-orange-50 px-5 py-2.5 rounded-2xl text-primary border border-orange-100 font-bold text-sm mb-2 shadow-2xs">
                                                <Clock className="w-4 h-4" />
                                                <span>{recipe.steps[currentStepIndex].duration} minutes</span>
                                            </div>
                                        )}
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>

                        {/* Footer Controls */}
                        <div className="p-8 grid grid-cols-2 gap-4 border-t border-gray-50 bg-gray-50/50">
                            <button
                                onClick={prevStep}
                                disabled={currentStepIndex === 0}
                                className={cn(
                                    "flex items-center justify-center gap-2 py-6 rounded-3xl font-black text-sm uppercase tracking-widest transition-all",
                                    currentStepIndex === 0 ? "text-gray-300 pointer-events-none" : "bg-white text-gray-500 shadow-sm"
                                )}
                            >
                                <ChevronLeft className="w-5 h-5" /> Précédent
                            </button>

                            {currentStepIndex === recipe.steps.length - 1 ? (
                                <button
                                    onClick={() => {
                                        markRecipeAsCooked(recipe.id);
                                        setHasCompletedRecipe(true);
                                        setShowCelebration(true);
                                    }}
                                    className="flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-orange-500 text-white py-6 rounded-3xl font-black text-sm uppercase tracking-widest shadow-xl shadow-primary/30 hover:scale-[1.02] active:scale-95 transition-all"
                                >
                                    Terminé <CheckCircle2 className="w-5 h-5" />
                                </button>
                            ) : (
                                <button
                                    onClick={nextStep}
                                    className="flex items-center justify-center gap-2 bg-primary text-white py-6 rounded-3xl font-black text-sm uppercase tracking-widest shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all"
                                >
                                    Suivant <ChevronRight className="w-5 h-5" />
                                </button>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* CELEBRATION MODAL */}
            <AnimatePresence>
                {showCelebration && (
                    <RecipeCelebrationModal
                        recipe={recipe}
                        onClose={() => {
                            setShowCelebration(false);
                            setIsCookingMode(false);
                        }}
                    />
                )}
            </AnimatePresence>
        </div>
    );
}
