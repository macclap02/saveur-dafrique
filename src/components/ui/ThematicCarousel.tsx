import { useRef } from 'react';
import type { Recipe } from '../../types';
import { RecipeCard } from './RecipeCard';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface ThematicCarouselProps {
    title: string;
    subtitle?: string;
    recipes: Recipe[];
    viewAllLink?: string;
}

export function ThematicCarousel({ title, subtitle, recipes, viewAllLink }: ThematicCarouselProps) {
    const scrollRef = useRef<HTMLDivElement>(null);

    return (
        <section className="mb-10 last:mb-4">
            <div className="flex items-end justify-between px-6 mb-4">
                <div>
                    <h2 className="text-2xl font-serif font-bold text-gray-900 leading-tight">
                        {title}
                    </h2>
                    {subtitle && (
                        <p className="text-gray-500 text-sm mt-1 font-sans">
                            {subtitle}
                        </p>
                    )}
                </div>
                {viewAllLink && (
                    <Link
                        to={viewAllLink}
                        className="text-primary text-sm font-semibold flex items-center gap-0.5 hover:underline"
                    >
                        Tout voir <ChevronRight className="w-4 h-4" />
                    </Link>
                )}
            </div>

            <div
                ref={scrollRef}
                className="flex gap-4 overflow-x-auto px-6 pb-4 scrollbar-hide snap-x"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {recipes.map((recipe, index) => (
                    <motion.div
                        key={recipe.id}
                        className="min-w-[280px] max-w-[280px] snap-start"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        viewport={{ once: true }}
                    >
                        <RecipeCard recipe={recipe} />
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
