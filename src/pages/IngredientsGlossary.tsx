import { useState } from 'react';
import { ingredientsGlossary } from '../data/ingredients';
import { Search, MapPin } from 'lucide-react';

export function IngredientsGlossary() {
    const [searchQuery, setSearchQuery] = useState('');

    // Filter ingredients based on search query
    const filteredIngredients = ingredientsGlossary.filter(ingredient => {
        const query = searchQuery.toLowerCase();
        return (
            ingredient.name.toLowerCase().includes(query) ||
            ingredient.description.toLowerCase().includes(query) ||
            ingredient.alternativeNames?.some(alt => alt.toLowerCase().includes(query))
        );
    });

    // Group ingredients alphabetically
    const groupedIngredients = filteredIngredients.reduce((acc, ingredient) => {
        const firstLetter = ingredient.name[0].toUpperCase();
        if (!acc[firstLetter]) acc[firstLetter] = [];
        acc[firstLetter].push(ingredient);
        return acc;
    }, {} as Record<string, typeof filteredIngredients>);

    const sortedLetters = Object.keys(groupedIngredients).sort();

    return (
        <div className="p-4 max-w-md mx-auto pb-24">
            <header className="mb-6 mt-2">
                <h1 className="text-3xl font-serif font-bold text-gray-900 mb-1">
                    Glossaire des Ingrédients
                </h1>
                <p className="text-gray-500 text-sm">Découvrez les ingrédients de la cuisine afro</p>
            </header>

            {/* Search Input */}
            <div className="mb-6 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                    type="text"
                    placeholder="Rechercher un ingrédient..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                />
            </div>

            {/* Results Count */}
            <p className="text-sm text-gray-600 mb-4">
                <span className="font-semibold text-gray-900">{filteredIngredients.length}</span>{' '}
                {filteredIngredients.length === 1 ? 'ingrédient' : 'ingrédients'}
            </p>

            {/* Ingredients List */}
            {filteredIngredients.length > 0 ? (
                <div className="space-y-6">
                    {sortedLetters.map((letter) => (
                        <div key={letter}>
                            {/* Letter Header */}
                            <div className="sticky top-0 bg-white/95 backdrop-blur-sm py-2 mb-3 border-b-2 border-primary/20 z-10">
                                <h2 className="text-2xl font-serif font-bold text-primary">{letter}</h2>
                            </div>

                            {/* Ingredients in this letter group */}
                            <div className="space-y-4">
                                {groupedIngredients[letter].map((ingredient) => (
                                    <div
                                        key={ingredient.name}
                                        className="bg-gradient-to-br from-orange-50 to-white p-4 rounded-xl border border-orange-100 hover:shadow-md transition-shadow"
                                    >
                                        <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">
                                            {ingredient.name}
                                        </h3>

                                        <p className="text-gray-700 text-sm leading-relaxed mb-3">
                                            {ingredient.description}
                                        </p>

                                        {ingredient.alternativeNames && ingredient.alternativeNames.length > 0 && (
                                            <div className="mb-2">
                                                <p className="text-xs font-semibold text-gray-500 mb-1">
                                                    Aussi appelé :
                                                </p>
                                                <div className="flex flex-wrap gap-1">
                                                    {ingredient.alternativeNames.map((alt) => (
                                                        <span
                                                            key={alt}
                                                            className="px-2 py-1 bg-white text-gray-600 rounded-md text-xs border border-gray-200"
                                                        >
                                                            {alt}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {ingredient.commonIn && ingredient.commonIn.length > 0 && (
                                            <div className="flex items-start gap-1 text-xs text-gray-500">
                                                <MapPin className="w-3 h-3 mt-0.5 flex-shrink-0" />
                                                <span>
                                                    Commun en : {ingredient.commonIn.join(', ')}
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-center py-12">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Search className="w-8 h-8 text-gray-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Aucun ingrédient trouvé</h3>
                    <p className="text-gray-500 text-sm">
                        Essayez un autre terme de recherche
                    </p>
                </div>
            )}
        </div>
    );
}
