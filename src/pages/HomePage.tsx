import { Link } from 'react-router-dom';
import { recipes } from '../data/recipes';
import { getRecipesByCategory } from '../data/categories';
import { Users, Search, Sparkles, UtensilsCrossed, Globe2 } from 'lucide-react';
import { ThematicCarousel } from '../components/ui/ThematicCarousel';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export function HomePage() {
    const { t } = useTranslation();
    // Featured collections
    const classics = getRecipesByCategory('classics');
    const streetFood = getRecipesByCategory('street');
    const desserts = getRecipesByCategory('desserts');
    const diaspora = getRecipesByCategory('diaspora');
    const grillades = getRecipesByCategory('grillades');

    return (
        <div className="min-h-screen pb-24 bg-gray-50/50">
            {/* Header / Search Area */}
            <div className="px-6 pt-6 pb-4 bg-white sticky top-0 z-40 shadow-sm border-b border-gray-100">
                <div className="flex items-center justify-between mb-4">
                    <h1 className="text-2xl font-serif font-bold text-gray-900 flex items-center gap-2">
                        <Sparkles className="w-5 h-5 text-primary fill-primary" />
                        {t('home.title')}
                    </h1>
                    <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center border border-orange-200">
                        <Users className="w-5 h-5 text-primary" />
                    </div>
                </div>

                <Link to="/search" className="flex items-center gap-3 bg-gray-100 px-4 py-3 rounded-2xl text-gray-500 hover:bg-gray-200 transition-colors">
                    <Search className="w-5 h-5" />
                    <span className="text-sm font-medium">{t('nav.search')}</span>
                </Link>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                {/* Mission / Intro Block */}
                <div className="px-6 py-4">
                    <div className="bg-orange-50/80 rounded-[2rem] p-6 border border-orange-100 shadow-sm relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-orange-200 rounded-full blur-[40px] opacity-40 -mr-10 -mt-10" />
                        <h2 className="text-xl font-serif font-bold text-gray-900 mb-3 leading-tight relative z-10">
                            {t('home.mission_title')}
                        </h2>
                        <p className="text-gray-600 text-sm leading-relaxed font-medium relative z-10">
                            {t('home.mission_text')}
                        </p>
                    </div>
                </div>

                {/* Discreet Health Initiative Banner */}
                <div className="px-6 pb-6">
                    <Link to="/healthy-seasoning" className="group relative block w-full overflow-hidden rounded-2xl bg-gray-900 shadow-md flex items-center p-4 border border-gray-800">
                        <div className="absolute inset-0 opacity-30 group-hover:opacity-40 transition-opacity">
                            <img
                                src="https://images.unsplash.com/photo-1506484334402-40f2dd6bd7f4?auto=format&fit=crop&q=80&w=800"
                                alt="Ingrédients Naturels"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
                        
                        <div className="relative z-10 flex-1 pr-4">
                            <div className="flex items-center gap-2 mb-1">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                                </span>
                                <span className="text-[10px] font-black text-orange-400 uppercase tracking-widest">{t('home.health_badge')}</span>
                            </div>
                            <h3 className="text-white font-serif font-bold text-[15px] leading-tight">
                                {t('home.health_title')}
                            </h3>
                        </div>
                        <div className="relative z-10 bg-white/10 backdrop-blur-md text-white text-xs font-bold px-4 py-2.5 rounded-xl border border-white/20 group-hover:bg-primary group-hover:border-primary transition-all">
                            {t('home.discover')}
                        </div>
                    </Link>
                </div>

                {/* Collections */}
                <ThematicCarousel
                    title={t('home.collections.classics')}
                    subtitle={t('home.collections.classics_sub')}
                    recipes={classics}
                    viewAllLink="/recipes?category=classics"
                />

                <ThematicCarousel
                    title={t('home.collections.street')}
                    subtitle={t('home.collections.street_sub')}
                    recipes={streetFood}
                    viewAllLink="/recipes?category=street"
                />

                <ThematicCarousel
                    title={t('home.collections.diaspora')}
                    subtitle={t('home.collections.diaspora_sub')}
                    recipes={diaspora}
                    viewAllLink="/recipes?category=diaspora"
                />

                <ThematicCarousel
                    title={t('home.collections.grillades', '🔥 Grillades & Barbecues')}
                    subtitle={t('home.collections.grillades_sub', 'Braai, Jerk, Churrasco, Suya : les maîtres du feu')}
                    recipes={grillades}
                    viewAllLink="/recipes?category=grillades"
                />

                <ThematicCarousel
                    title="🍮 Douceurs & Desserts"
                    subtitle="De la cocada brésilienne au malva pudding sud-africain"
                    recipes={desserts}
                    viewAllLink="/recipes?category=desserts"
                />

                {/* Quick Stats / Fun Footer */}
                <div className="px-6 pb-8">
                    <div className="bg-gray-900 rounded-3xl p-6 text-white overflow-hidden relative">
                        <div className="relative z-10">
                            <h3 className="text-xl font-serif font-bold mb-2">{t('home.footer.title')}</h3>
                            <p className="text-white/60 text-sm mb-6 max-w-[200px]">
                                {t('home.footer.subtitle', { count: recipes.length })}
                            </p>

                            <div className="grid grid-cols-2 gap-3">
                                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                                    <Globe2 className="w-5 h-5 text-primary mb-2" />
                                    <div className="text-xl font-bold">4</div>
                                    <div className="text-[10px] text-white/60 uppercase font-bold tracking-widest mt-1">{t('home.footer.regions')}</div>
                                </div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                                    <UtensilsCrossed className="w-5 h-5 text-primary mb-2" />
                                    <div className="text-xl font-bold">{recipes.length}</div>
                                    <div className="text-[10px] text-white/60 uppercase font-bold tracking-widest mt-1">{t('home.footer.recipes')}</div>
                                </div>
                            </div>
                        </div>

                        {/* Abstract backgrounds */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary rounded-full blur-[80px] opacity-20 -mr-10 -mt-10" />
                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-orange-400 rounded-full blur-[60px] opacity-10 -ml-5 -mb-5" />
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
