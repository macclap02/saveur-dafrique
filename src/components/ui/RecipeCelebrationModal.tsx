import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChefHat, Sparkles, CheckCircle2, Clock, Users, Share2, X, Utensils } from 'lucide-react';
import type { Recipe } from '../../types';
import { Confetti } from './Confetti';

interface RecipeCelebrationModalProps {
    recipe: Recipe;
    onClose: () => void;
}

function playCelebrationChime() {
    try {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof window.AudioContext }).webkitAudioContext;
        if (!AudioCtx) return;
        const ctx = new AudioCtx();
        if (ctx.state === 'suspended') {
            ctx.resume();
        }
        // African kalimba/marimba joyful pentatonic arpeggio (C5 - E5 - G5 - C6)
        const notes = [523.25, 659.25, 783.99, 1046.5];
        notes.forEach((freq, idx) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.11);
            gain.gain.setValueAtTime(0, ctx.currentTime + idx * 0.11);
            gain.gain.linearRampToValueAtTime(0.25, ctx.currentTime + idx * 0.11 + 0.02);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + idx * 0.11 + 0.55);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start(ctx.currentTime + idx * 0.11);
            osc.stop(ctx.currentTime + idx * 0.11 + 0.6);
        });
    } catch {
        // AudioContext might be muted or blocked by browser policy
    }
}

export function RecipeCelebrationModal({ recipe, onClose }: RecipeCelebrationModalProps) {
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        playCelebrationChime();
    }, []);

    const handleShare = async () => {
        const shareData = {
            title: `J'ai cuisiné : ${recipe.title} !`,
            text: `Je viens de réussir la recette de ${recipe.title} sur Saveurs d'Afrique ! Un délice authentique 🍲✨`,
            url: window.location.href,
        };

        if (navigator.share) {
            try {
                await navigator.share(shareData);
            } catch {
                // User cancelled or share failed
            }
        } else {
            try {
                await navigator.clipboard.writeText(
                    `Je viens de cuisiner "${recipe.title}" sur Saveurs d'Afrique ! ${window.location.href}`
                );
                setCopied(true);
                setTimeout(() => setCopied(false), 2500);
            } catch {
                // Clipboard write failed
            }
        }
    };

    const totalTime = recipe.prepTime + recipe.cookTime;

    return (
        <div className="fixed inset-0 z-[130] flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
            <Confetti />

            <motion.div
                initial={{ opacity: 0, scale: 0.85, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.85, y: 30 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                className="relative w-full max-w-md bg-white rounded-[2.5rem] p-6 sm:p-8 shadow-2xl border border-orange-100 overflow-hidden text-center"
            >
                {/* Decorative warm aura */}
                <div className="absolute -top-20 -left-20 w-44 h-44 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-20 -right-20 w-44 h-44 bg-amber-200/40 rounded-full blur-3xl pointer-events-none" />

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-5 right-5 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 transition-colors z-20"
                    aria-label="Fermer"
                >
                    <X className="w-5 h-5" />
                </button>

                {/* Animated Badge Icon */}
                <div className="relative mx-auto w-24 h-24 mb-5 flex items-center justify-center">
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
                        className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30"
                    />
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: [0, 1.15, 1] }}
                        transition={{ delay: 0.1, duration: 0.6 }}
                        className="w-20 h-20 rounded-3xl bg-gradient-to-tr from-primary via-orange-500 to-amber-400 text-white flex items-center justify-center shadow-xl shadow-orange-500/30"
                    >
                        <ChefHat className="w-10 h-10 drop-shadow" />
                    </motion.div>

                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.35, type: 'spring' }}
                        className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-lg border-2 border-white"
                    >
                        <CheckCircle2 className="w-5 h-5" />
                    </motion.div>

                    <motion.div
                        animate={{ scale: [1, 1.25, 1], opacity: [0.7, 1, 0.7] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="absolute -top-2 -left-1 text-amber-400"
                    >
                        <Sparkles className="w-6 h-6 fill-amber-300" />
                    </motion.div>
                </div>

                {/* Title & Congratulations */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-orange-100/80 text-primary text-[11px] font-bold uppercase tracking-widest rounded-full mb-2">
                        <Sparkles className="w-3.5 h-3.5" /> Recette Terminée !
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-serif font-black text-gray-900 leading-tight mb-2">
                        Félicitations, Chef ! 🎉
                    </h2>

                    <p className="text-gray-600 text-sm leading-relaxed mb-6 font-medium">
                        Vous avez suivi et complété toutes les étapes de la recette{' '}
                        <span className="font-bold text-gray-900">{recipe.title}</span>.
                    </p>
                </motion.div>

                {/* Recipe Mini Card / Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="bg-orange-50/70 border border-orange-100/80 rounded-2xl p-4 mb-6"
                >
                    <div className="flex items-center gap-3 text-left mb-3 pb-3 border-b border-orange-100">
                        <img
                            src={recipe.image}
                            alt={recipe.title}
                            className="w-12 h-12 rounded-xl object-cover shadow-sm flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                            <h4 className="font-serif font-bold text-gray-900 truncate text-sm">
                                {recipe.title}
                            </h4>
                            <p className="text-xs text-primary font-bold uppercase tracking-wider">
                                {recipe.origin}
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2 text-center">
                        <div className="bg-white/80 rounded-xl p-2 border border-orange-100/50">
                            <Clock className="w-4 h-4 text-primary mx-auto mb-1" />
                            <div className="text-xs font-bold text-gray-900">{totalTime} min</div>
                            <div className="text-[9px] text-gray-400 font-bold uppercase">Temps</div>
                        </div>
                        <div className="bg-white/80 rounded-xl p-2 border border-orange-100/50">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 mx-auto mb-1" />
                            <div className="text-xs font-bold text-gray-900">{recipe.steps.length}</div>
                            <div className="text-[9px] text-gray-400 font-bold uppercase">Étapes</div>
                        </div>
                        <div className="bg-white/80 rounded-xl p-2 border border-orange-100/50">
                            <Users className="w-4 h-4 text-primary mx-auto mb-1" />
                            <div className="text-xs font-bold text-gray-900">{recipe.servings}</div>
                            <div className="text-[9px] text-gray-400 font-bold uppercase">Portions</div>
                        </div>
                    </div>
                </motion.div>

                {/* Friendly culinary note */}
                <p className="text-xs text-gray-500 italic mb-6">
                    « Le secret de la bonne cuisine africaine réside dans l’amour et la patience du partage. Bon appétit ! »
                </p>

                {/* Actions */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="space-y-3"
                >
                    <button
                        onClick={onClose}
                        className="w-full bg-primary hover:bg-primary/95 text-white py-4 rounded-2xl font-bold shadow-lg shadow-primary/25 hover:scale-[1.02] active:scale-95 transition-all text-sm flex items-center justify-center gap-2"
                    >
                        <Utensils className="w-4 h-4" /> Déguster mon plat
                    </button>

                    <button
                        onClick={handleShare}
                        className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 rounded-2xl font-bold text-xs flex items-center justify-center gap-2 transition-all active:scale-95"
                    >
                        <Share2 className="w-3.5 h-3.5" />
                        {copied ? 'Lien copié dans le presse-papier !' : 'Partager ma réussite'}
                    </button>
                </motion.div>
            </motion.div>
        </div>
    );
}
