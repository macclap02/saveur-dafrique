import { useState, useMemo } from 'react';
import { recipes } from '../data/recipes';
import { RecipeCard } from '../components/ui/RecipeCard';
import {
    Search,
    X,
    SlidersHorizontal,
    RotateCcw,
    ChefHat,
    Globe2,
    Flame,
    Clock,
    Sparkles
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../lib/utils';
import {
    type CompositionFilter,
    type DurationFilter,
    type DifficultyFilter,
    matchesComposition,
    matchesDuration,
    matchesDifficulty,
    matchesQuery
} from '../utils/recipeClassification';

export function SearchPage() {
    const { t } = useTranslation();

    const [searchQuery, setSearchQuery] = useState('');
    const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
    const [selectedDifficulty, setSelectedDifficulty] = useState<DifficultyFilter>('all');
    const [selectedComposition, setSelectedComposition] = useState<CompositionFilter>('all');
    const [selectedDuration, setSelectedDuration] = useState<DurationFilter>('all');
    const [isFiltersOpen, setIsFiltersOpen] = useState(true);

    const regions = [
        { id: 'Afrique', label: 'Afrique', icon: '🌍' },
        { id: 'Amérique du Nord', label: 'Amérique du Nord', icon: '🌎' },
        { id: 'Amérique du Sud', label: 'Amérique du Sud', icon: '🌎' },
        { id: 'Caraïbes et Antilles', label: 'Caraïbes & Antilles', icon: '🏝️' }
    ];

    const difficulties: { id: DifficultyFilter; label: string; icon: string }[] = [
        { id: 'all', label: t('search.filter_all', 'Tous'), icon: '✨' },
        { id: 'Facile', label: 'Facile', icon: '🟢' },
        { id: 'Moyen', label: 'Moyen', icon: '🟡' },
        { id: 'Difficile', label: 'Difficile', icon: '🔴' }
    ];

    const compositions: { id: CompositionFilter; label: string; icon: string }[] = [
        { id: 'all', label: t('search.filter_all', 'Tous'), icon: '✨' },
        { id: 'viande', label: t('search.comp_meat', 'Viandes rouges'), icon: '🥩' },
        { id: 'volaille', label: t('search.comp_poultry', 'Volailles'), icon: '🍗' },
        { id: 'poisson', label: t('search.comp_seafood', 'Poissons & Fruits de mer'), icon: '🐟' },
        { id: 'vegetarien', label: t('search.comp_vegetarian', 'Végétarien'), icon: '🥦' },
        { id: 'grillades', label: t('search.comp_bbq', 'Grillades & Barbecue'), icon: '🔥' },
        { id: 'dessert', label: t('search.comp_dessert', 'Douceurs & Desserts'), icon: '🍮' }
    ];

    const durations: { id: DurationFilter; label: string; icon: string }[] = [
        { id: 'all', label: t('search.filter_all', 'Tous'), icon: '✨' },
        { id: 'quick', label: t('search.quick_time', 'Rapide (< 30 min)'), icon: '⚡' },
        { id: 'medium', label: t('search.medium_time', 'Modéré (30–60 min)'), icon: '⏱️' },
        { id: 'slow', label: t('search.slow_time', 'Mijoté (> 1h)'), icon: '🍲' }
    ];

    // Filter recipes
    const filteredRecipes = useMemo(() => {
        return recipes.filter((recipe) => {
            const matchesText = matchesQuery(recipe, searchQuery);
            const matchesReg = !selectedRegion || recipe.region === selectedRegion;
            const matchesDiff = matchesDifficulty(recipe, selectedDifficulty);
            const matchesComp = matchesComposition(recipe, selectedComposition);
            const matchesDur = matchesDuration(recipe, selectedDuration);

            return matchesText && matchesReg && matchesDiff && matchesComp && matchesDur;
        });
    }, [searchQuery, selectedRegion, selectedDifficulty, selectedComposition, selectedDuration]);

    const activeFilterCount =
        (selectedRegion ? 1 : 0) +
        (selectedDifficulty !== 'all' ? 1 : 0) +
        (selectedComposition !== 'all' ? 1 : 0) +
        (selectedDuration !== 'all' ? 1 : 0);

    const hasActiveFilters = searchQuery !== '' || activeFilterCount > 0;

    const clearFilters = () => {
        setSearchQuery('');
        setSelectedRegion(null);
        setSelectedDifficulty('all');
        setSelectedComposition('all');
        setSelectedDuration('all');
    };

    return (
        <div className="p-4 max-w-lg mx-auto pb-32">
            {/* Header */}
            <header className="mb-5 mt-2">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-serif font-bold text-gray-900 flex items-center gap-2">
                            <Sparkles className="w-5 h-5 text-primary" />
                            {t('search.title', 'Recherche Avancée')}
                        </h1>
                        <p className="text-gray-500 text-xs mt-0.5">
                            {t('search.subtitle', 'Explorez notre patrimoine culinaire selon vos envies')}
                        </p>
                    </div>

                    <button
                        onClick={() => setIsFiltersOpen(!isFiltersOpen)}
                        className={cn(
                            'p-2.5 rounded-2xl border transition-all flex items-center gap-1.5 text-xs font-bold',
                            activeFilterCount > 0
                                ? 'bg-primary text-white border-primary shadow-sm shadow-primary/20'
                                : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
                        )}
                        aria-label="Toggle filters"
                    >
                        <SlidersHorizontal className="w-4 h-4" />
                        <span className="hidden sm:inline">{t('search.filters', 'Filtres')}</span>
                        {activeFilterCount > 0 && (
                            <span className="w-5 h-5 rounded-full bg-white text-primary text-[11px] font-black flex items-center justify-center">
                                {activeFilterCount}
                            </span>
                        )}
                    </button>
                </div>
            </header>

            {/* Search Input Bar */}
            <div className="mb-4 relative">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                    type="text"
                    placeholder={t('search.placeholder', 'Recette, ingrédient (manioc, arachide...), pays...')}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-10 py-3 bg-white border border-gray-200 rounded-2xl text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary shadow-sm transition-all"
                />
                {searchQuery && (
                    <button
                        onClick={() => setSearchQuery('')}
                        className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
                        title={t('search.clear_search', 'Effacer')}
                    >
                        <X className="w-4 h-4" />
                    </button>
                )}
            </div>

            {/* Collapsible Filter Panel */}
            <AnimatePresence>
                {isFiltersOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                    >
                        <div className="bg-white rounded-3xl p-4 border border-gray-100 shadow-sm mb-4 space-y-4">
                            {/* Filter 1: Région du monde */}
                            <div>
                                <div className="flex items-center gap-1.5 text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                                    <Globe2 className="w-3.5 h-3.5 text-primary" />
                                    <span>{t('search.regions_title', 'Origine géographique')}</span>
                                </div>
                                <div className="flex flex-wrap gap-1.5">
                                    <button
                                        onClick={() => setSelectedRegion(null)}
                                        className={cn(
                                            'px-3 py-1.5 rounded-xl text-xs font-medium transition-all flex items-center gap-1',
                                            selectedRegion === null
                                                ? 'bg-primary text-white shadow-sm'
                                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                        )}
                                    >
                                        <span>✨</span>
                                        <span>{t('search.filter_all', 'Toutes')}</span>
                                    </button>
                                    {regions.map((reg) => {
                                        const isSelected = selectedRegion === reg.id;
                                        return (
                                            <button
                                                key={reg.id}
                                                onClick={() => setSelectedRegion(isSelected ? null : reg.id)}
                                                className={cn(
                                                    'px-3 py-1.5 rounded-xl text-xs font-medium transition-all flex items-center gap-1.5',
                                                    isSelected
                                                        ? 'bg-primary text-white shadow-sm'
                                                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                                )}
                                            >
                                                <span>{reg.icon}</span>
                                                <span>{reg.label}</span>
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Filter 2: Composition & Type de plat */}
                            <div>
                                <div className="flex items-center gap-1.5 text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                                    <ChefHat className="w-3.5 h-3.5 text-primary" />
                                    <span>{t('search.composition_title', 'Composition du plat')}</span>
                                </div>
                                <div className="flex flex-wrap gap-1.5">
                                    {compositions.map((comp) => {
                                        const isSelected = selectedComposition === comp.id;
                                        return (
                                            <button
                                                key={comp.id}
                                                onClick={() => setSelectedComposition(comp.id)}
                                                className={cn(
                                                    'px-3 py-1.5 rounded-xl text-xs font-medium transition-all flex items-center gap-1.5',
                                                    isSelected
                                                        ? 'bg-primary text-white shadow-sm'
                                                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                                )}
                                            >
                                                <span>{comp.icon}</span>
                                                <span>{comp.label}</span>
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Filter 3: Niveau de difficulté & Temps de préparation */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1 border-t border-gray-100">
                                {/* Difficulté */}
                                <div>
                                    <div className="flex items-center gap-1.5 text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                                        <Flame className="w-3.5 h-3.5 text-primary" />
                                        <span>{t('search.difficulty_title', 'Difficulté')}</span>
                                    </div>
                                    <div className="flex flex-wrap gap-1.5">
                                        {difficulties.map((diff) => {
                                            const isSelected = selectedDifficulty === diff.id;
                                            return (
                                                <button
                                                    key={diff.id}
                                                    onClick={() => setSelectedDifficulty(diff.id)}
                                                    className={cn(
                                                        'px-2.5 py-1.5 rounded-xl text-xs font-medium transition-all flex items-center gap-1',
                                                        isSelected
                                                            ? 'bg-primary text-white shadow-sm'
                                                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                                    )}
                                                >
                                                    <span>{diff.icon}</span>
                                                    <span>{diff.label}</span>
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* Durée */}
                                <div>
                                    <div className="flex items-center gap-1.5 text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                                        <Clock className="w-3.5 h-3.5 text-primary" />
                                        <span>{t('search.duration_title', 'Temps')}</span>
                                    </div>
                                    <div className="flex flex-wrap gap-1.5">
                                        {durations.map((dur) => {
                                            const isSelected = selectedDuration === dur.id;
                                            return (
                                                <button
                                                    key={dur.id}
                                                    onClick={() => setSelectedDuration(dur.id)}
                                                    className={cn(
                                                        'px-2.5 py-1.5 rounded-xl text-xs font-medium transition-all flex items-center gap-1',
                                                        isSelected
                                                            ? 'bg-primary text-white shadow-sm'
                                                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                                    )}
                                                >
                                                    <span>{dur.icon}</span>
                                                    <span>{dur.label}</span>
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Active Filters Chips Bar */}
            {hasActiveFilters && (
                <div className="mb-4 bg-orange-50/70 border border-orange-100 rounded-2xl p-3 flex flex-wrap items-center gap-2">
                    <span className="text-[11px] font-bold text-primary uppercase tracking-wider">
                        {t('search.active_filters', 'Filtres actifs :')}
                    </span>

                    {selectedRegion && (
                        <button
                            onClick={() => setSelectedRegion(null)}
                            className="inline-flex items-center gap-1 px-2.5 py-1 bg-white border border-orange-200 rounded-lg text-xs font-semibold text-gray-700 shadow-2xs hover:bg-orange-100 transition-colors"
                        >
                            <span>{selectedRegion}</span>
                            <X className="w-3 h-3 text-gray-400 hover:text-gray-700" />
                        </button>
                    )}

                    {selectedComposition !== 'all' && (
                        <button
                            onClick={() => setSelectedComposition('all')}
                            className="inline-flex items-center gap-1 px-2.5 py-1 bg-white border border-orange-200 rounded-lg text-xs font-semibold text-gray-700 shadow-2xs hover:bg-orange-100 transition-colors"
                        >
                            <span>
                                {compositions.find((c) => c.id === selectedComposition)?.icon}{' '}
                                {compositions.find((c) => c.id === selectedComposition)?.label}
                            </span>
                            <X className="w-3 h-3 text-gray-400 hover:text-gray-700" />
                        </button>
                    )}

                    {selectedDifficulty !== 'all' && (
                        <button
                            onClick={() => setSelectedDifficulty('all')}
                            className="inline-flex items-center gap-1 px-2.5 py-1 bg-white border border-orange-200 rounded-lg text-xs font-semibold text-gray-700 shadow-2xs hover:bg-orange-100 transition-colors"
                        >
                            <span>
                                {difficulties.find((d) => d.id === selectedDifficulty)?.icon}{' '}
                                {difficulties.find((d) => d.id === selectedDifficulty)?.label}
                            </span>
                            <X className="w-3 h-3 text-gray-400 hover:text-gray-700" />
                        </button>
                    )}

                    {selectedDuration !== 'all' && (
                        <button
                            onClick={() => setSelectedDuration('all')}
                            className="inline-flex items-center gap-1 px-2.5 py-1 bg-white border border-orange-200 rounded-lg text-xs font-semibold text-gray-700 shadow-2xs hover:bg-orange-100 transition-colors"
                        >
                            <span>
                                {durations.find((d) => d.id === selectedDuration)?.icon}{' '}
                                {durations.find((d) => d.id === selectedDuration)?.label}
                            </span>
                            <X className="w-3 h-3 text-gray-400 hover:text-gray-700" />
                        </button>
                    )}

                    {searchQuery && (
                        <button
                            onClick={() => setSearchQuery('')}
                            className="inline-flex items-center gap-1 px-2.5 py-1 bg-white border border-orange-200 rounded-lg text-xs font-semibold text-gray-700 shadow-2xs hover:bg-orange-100 transition-colors"
                        >
                            <span>"{searchQuery}"</span>
                            <X className="w-3 h-3 text-gray-400 hover:text-gray-700" />
                        </button>
                    )}

                    <button
                        onClick={clearFilters}
                        className="ml-auto inline-flex items-center gap-1 text-[11px] font-bold text-primary hover:underline transition-all"
                    >
                        <RotateCcw className="w-3 h-3" />
                        <span>{t('search.reset_filters', 'Tout réinitialiser')}</span>
                    </button>
                </div>
            )}

            {/* Results Count Summary */}
            <div className="flex items-center justify-between mb-4 px-1">
                <p className="text-xs font-medium text-gray-500">
                    <span className="font-bold text-gray-900 text-sm">{filteredRecipes.length}</span>{' '}
                    {filteredRecipes.length <= 1
                        ? t('search.results_count_one', { count: filteredRecipes.length })
                        : t('search.results_count_other', { count: filteredRecipes.length })}
                </p>
                {hasActiveFilters && (
                    <button
                        onClick={clearFilters}
                        className="text-xs text-primary font-bold hover:underline"
                    >
                        {t('search.reset_filters', 'Réinitialiser')}
                    </button>
                )}
            </div>

            {/* Recipe Cards List */}
            {filteredRecipes.length > 0 ? (
                <div className="grid grid-cols-1 gap-5">
                    {filteredRecipes.map((recipe) => (
                        <RecipeCard key={recipe.id} recipe={recipe} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-12 px-4 bg-white rounded-3xl border border-gray-100 shadow-sm">
                    <div className="w-16 h-16 bg-orange-50 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                        <Search className="w-7 h-7" />
                    </div>
                    <h3 className="text-base font-serif font-bold text-gray-900 mb-1">
                        {t('search.no_results', 'Aucune recette ne correspond à votre recherche')}
                    </h3>
                    <p className="text-gray-500 text-xs mb-5 max-w-xs mx-auto leading-relaxed">
                        {t('search.try_different', 'Essayez d\'ajuster vos critères ou de vérifier l\'orthographe.')}
                    </p>
                    {hasActiveFilters && (
                        <button
                            onClick={clearFilters}
                            className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white text-xs font-bold rounded-xl shadow-md shadow-primary/20 hover:bg-primary/90 transition-colors"
                        >
                            <RotateCcw className="w-3.5 h-3.5" />
                            <span>{t('search.reset_filters', 'Réinitialiser les filtres')}</span>
                        </button>
                    )}
                </div>
            )}
        </div>
    );
}
