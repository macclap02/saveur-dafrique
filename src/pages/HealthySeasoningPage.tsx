import { motion } from 'framer-motion';
import {
    ShieldCheck,
    HeartPulse,
    Sparkles,
    ArrowLeft,
    ArrowRight,
    Leaf,
    AlertTriangle,
    CheckCircle2
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { recipes } from '../data/recipes';

export function HealthySeasoningPage() {
    const navigate = useNavigate();
    const naturalBases = recipes.filter(r => r.id.startsWith('base-naturel'));

    // Substitutions comparisons
    const substitutions = [
        {
            title: "Sauces Brunes & Ragoûts Profonds",
            chemical: "Arôme Maggi liquide ou Cubes industriels",
            chemicalDrawback: "Glutamate de synthèse E621, excès de sodium, colorant caramel ammoniacal.",
            natural: "Tucupi Preto Ouest-Africain",
            naturalBenefit: "Eau de pressage du manioc (attiéké/gari) réduite en mélasse noire 100% végétale. Zéro déchet, umami pur.",
            recipeId: "base-naturel-tucupi-preto",
            tag: "Révolution Manioc",
            color: "amber"
        },
        {
            title: "Bouillon Universel & Viande",
            chemical: "Cube Maggi Bœuf / Poulet",
            chemicalDrawback: "55% de sel raffiné blanchi, huiles hydrogénées et dépendance gustative.",
            natural: "Poudre d'Or : Soumbala & Kuli-Kuli",
            naturalBenefit: "Protéines de néré fermentées ancestrales, tourteau d'arachide et curcuma anti-inflammatoire activé par le poivre.",
            recipeId: "base-naturel-soumbala-or",
            tag: "Trésor Sahélien",
            color: "yellow"
        },
        {
            title: "Fumet de Mer & Crustacés",
            chemical: "Cube Crevette Jumbo",
            chemicalDrawback: "Moins de 1% de farine de crevette, arômes artificiels allergènes et conservateurs.",
            natural: "Condiment Marin & Émulsion d'Akpi",
            naturalBenefit: "Vraies écrevisses séchées, fretin entier et graines d'Akpi torréfiées qui veloutent naturellement la sauce.",
            recipeId: "base-naturel-marin-akpi",
            tag: "Atlantique Noir",
            color: "orange"
        },
        {
            title: "Sauces Feuilles (Saka-Saka, Ndolé)",
            chemical: "Surdose de cubes et sel de table",
            chemicalDrawback: "Agression cardiovasculaire directe, rétention d'eau et hypertension.",
            natural: "Cube Fumé & Poivre de Selim",
            naturalBenefit: "Séchage solaire d'os grillés, peaux fumées traditionnelles et baies de Selim digestives.",
            recipeId: "base-naturel-fume",
            tag: "Feu Ancestral",
            color: "red"
        }
    ];

    return (
        <div className="min-h-screen bg-white pb-32">
            {/* Header Hero */}
            <div className="relative h-[560px] bg-orange-950 overflow-hidden">
                <style>{`
                    .no-scrollbar::-webkit-scrollbar { display: none; }
                    .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
                `}</style>
                <img
                    src="https://images.unsplash.com/photo-1506484334402-40f2dd6bd7f4?auto=format&fit=crop&q=80&w=1200"
                    className="w-full h-full object-cover opacity-50 scale-105"
                    alt="Épices naturelles et manioc"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-orange-950/40 to-transparent" />

                <button
                    onClick={() => navigate(-1)}
                    className="absolute top-6 left-6 w-12 h-12 bg-white/20 backdrop-blur-xl rounded-2xl flex items-center justify-center text-white border border-white/20 hover:bg-white hover:text-orange-950 transition-all z-20 shadow-lg"
                    aria-label="Retour"
                >
                    <ArrowLeft className="w-6 h-6" />
                </button>

                {/* Horizontal carousel of natural bases */}
                <div className="absolute inset-x-0 top-20 px-6 z-10">
                    <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar snap-x snap-mandatory">
                        {naturalBases.map((base) => (
                            <Link
                                key={base.id}
                                to={`/recipe/${base.id}`}
                                className="min-w-[270px] h-48 rounded-[2rem] overflow-hidden relative snap-center group border border-white/20 shadow-2xl shrink-0"
                            >
                                <img
                                    src={base.image}
                                    alt={base.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-orange-950/95 via-orange-900/40 to-transparent" />
                                <div className="absolute bottom-4 left-5 right-5">
                                    <div className="flex items-center gap-1.5 mb-1">
                                        <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
                                        <span className="text-[10px] text-orange-200 font-bold uppercase tracking-wider">
                                            {base.difficulty} • {base.cookTime} min
                                        </span>
                                    </div>
                                    <h3 className="text-white font-serif font-bold text-sm leading-snug line-clamp-2">
                                        {base.title}
                                    </h3>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="absolute bottom-10 inset-x-8 z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex flex-col gap-2"
                    >
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                            <span className="bg-red-600 text-white px-3.5 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg shadow-red-600/30 animate-pulse">
                                Stop Glutamate & Hypertension
                            </span>
                            <span className="bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border border-white/20">
                                100% Terroirs & Économie Circulaire
                            </span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-serif font-black text-white leading-tight drop-shadow-md">
                            L'Alternative Sacrée : <br />
                            <span className="text-orange-400">Le Vrai Goût sans Chimie</span>
                        </h1>
                    </motion.div>
                </div>
            </div>

            {/* Pedagogy & Spotlight Section */}
            <div className="px-5 md:px-8 -mt-6 relative z-10 max-w-4xl mx-auto space-y-8">
                {/* 1. FOCUS STAR: LE TUCUPI PRETO DU MANIOC */}
                <section className="bg-gradient-to-br from-gray-900 via-amber-950 to-orange-950 text-white p-7 md:p-9 rounded-[2.5rem] shadow-2xl relative overflow-hidden border border-orange-500/20">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

                    <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-500/20 text-amber-300 text-xs font-black uppercase tracking-widest rounded-xl border border-amber-500/30">
                            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                            Révolution Zéro Gâchis
                        </span>
                        <span className="text-xs text-white/60 font-medium">Afrique de l'Ouest & Amazonie</span>
                    </div>

                    <div className="grid md:grid-cols-12 gap-6 items-center">
                        <div className="md:col-span-7 space-y-3">
                            <h2 className="text-2xl md:text-3xl font-serif font-bold text-white leading-tight">
                                Le <span className="text-amber-400">Tucupi Preto</span> : Transformer l'eau jetée du manioc en Or Noir
                            </h2>
                            <p className="text-white/80 text-xs md:text-sm leading-relaxed">
                                Dans toute l'Afrique de l'Ouest (Côte d'Ivoire, Bénin, Nigéria, Ghana), la fabrication de <strong>l'Attiéké</strong>, du <strong>Gari</strong> et du <strong>Placali</strong> génère chaque jour des milliers de litres de jus de pressage blanc amidonné. 
                                Ce jus est quasiment toujours <strong className="text-red-300">jeté comme déchet</strong>.
                            </p>
                            <div className="p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/15 space-y-1.5">
                                <p className="text-xs font-bold text-amber-300 flex items-center gap-1.5">
                                    <Leaf className="w-4 h-4" /> La magie de la réduction lente
                                </p>
                                <p className="text-[11px] text-white/90 leading-relaxed">
                                    En laissant décanter l'amidon pur (tapioca) puis en faisant bouillir doucement ce jus pendant quelques heures, <strong>l'acide cyanhydrique s'évapore à 100%</strong>. Le liquide caramélise et devient une mélasse noire brillante : une bombe d'umami végétal qui surpasse n'importe quel arôme liquide industriel Maggi !
                                </p>
                            </div>
                            <div className="pt-2">
                                <Link
                                    to="/recipe/base-naturel-tucupi-preto"
                                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-gray-950 font-bold text-xs rounded-xl shadow-lg shadow-amber-500/20 transition-all group"
                                >
                                    <span>Découvrir la recette pas-à-pas</span>
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>

                        <div className="md:col-span-5">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-amber-500/30 group aspect-4/3">
                                <img
                                    src="/images/tucupi-preto-africain.webp"
                                    alt="Tucupi Preto Africain"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                                    <p className="text-[11px] text-white/90 font-medium italic">
                                        "1 cuillère à café remplace 2 cubes industriels dans vos sauces graines et gombos."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2. THE DANGER SECTION */}
                <div className="bg-white rounded-[2.5rem] shadow-xl shadow-orange-950/5 p-6 md:p-8 border border-orange-100/70 space-y-8">
                    {/* The Hidden Trap Section */}
                    <section className="space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-2xl bg-red-100 text-red-600 flex items-center justify-center shrink-0">
                                <ShieldCheck className="w-5 h-5" />
                            </div>
                            <div>
                                <h2 className="text-xl font-serif font-bold text-gray-900">Le Piège Chimique du Glutamate</h2>
                                <p className="text-xs text-gray-500">Pourquoi vos papilles sont trompées chaque jour</p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-red-50/60 p-5 rounded-2xl border border-red-100">
                                <div className="flex items-center gap-2 mb-2 text-red-900 font-bold text-xs uppercase tracking-wide">
                                    <AlertTriangle className="w-4 h-4 text-red-600" />
                                    Une dépendance neurologique
                                </div>
                                <p className="text-gray-600 text-xs leading-relaxed">
                                    Le glutamate monosodique de synthèse (E621) stimule artificiellement les récepteurs umami du cerveau. Il fait croire que le plat est nutritivement riche alors qu'il est vide. Sans lui, les aliments frais paraissent faussement « fades ».
                                </p>
                            </div>

                            <div className="bg-orange-50/60 p-5 rounded-2xl border border-orange-100">
                                <div className="flex items-center gap-2 mb-2 text-orange-900 font-bold text-xs uppercase tracking-wide">
                                    <HeartPulse className="w-4 h-4 text-orange-600" />
                                    L'épidémie silencieuse
                                </div>
                                <p className="text-gray-600 text-xs leading-relaxed">
                                    Un seul cube contient souvent plus de <strong>55% de sel pur</strong> et des graisses de palme saturées. Consommé 2 à 3 fois par jour, c'est le déclencheur majeur de l'explosion des cas d'hypertension et de diabète sur le continent.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* 3. FACE-À-FACE COMPARATIF */}
                    <section className="space-y-5 pt-4 border-t border-gray-100">
                        <div className="flex items-center justify-between flex-wrap gap-2">
                            <div>
                                <h2 className="text-xl font-serif font-bold text-gray-900 flex items-center gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                                    Le Face-à-Face des Substitutions
                                </h2>
                                <p className="text-xs text-gray-500">Remplacer le réflexe chimique par le génie des terroirs</p>
                            </div>
                        </div>

                        <div className="grid gap-3.5">
                            {substitutions.map((sub, idx) => (
                                <div
                                    key={idx}
                                    className="p-4 md:p-5 rounded-2xl border border-gray-100 bg-gray-50/60 hover:bg-white hover:border-orange-200 transition-all shadow-2xs hover:shadow-md space-y-3"
                                >
                                    <div className="flex items-center justify-between">
                                        <h3 className="font-bold text-sm text-gray-900">{sub.title}</h3>
                                        <span className="text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-800">
                                            {sub.tag}
                                        </span>
                                    </div>

                                    <div className="grid sm:grid-cols-2 gap-3 text-xs">
                                        {/* Chemical */}
                                        <div className="p-3 bg-red-50/40 rounded-xl border border-red-100/60">
                                            <span className="text-[10px] font-bold text-red-700 uppercase tracking-wider block mb-1">
                                                ❌ Réflexe Chimique
                                            </span>
                                            <p className="font-semibold text-gray-800">{sub.chemical}</p>
                                            <p className="text-gray-500 text-[11px] mt-0.5">{sub.chemicalDrawback}</p>
                                        </div>

                                        {/* Natural */}
                                        <div className="p-3 bg-emerald-50/40 rounded-xl border border-emerald-100/60">
                                            <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider block mb-1">
                                                ✅ Alternative Sacrée
                                            </span>
                                            <p className="font-semibold text-gray-900">{sub.natural}</p>
                                            <p className="text-gray-600 text-[11px] mt-0.5">{sub.naturalBenefit}</p>
                                        </div>
                                    </div>

                                    <div className="flex justify-end pt-1">
                                        <Link
                                            to={`/recipe/${sub.recipeId}`}
                                            className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-orange-700 transition-colors"
                                        >
                                            <span>Voir la recette du substitut</span>
                                            <ArrowRight className="w-3.5 h-3.5" />
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* 4. THE UMAMI SCIENCE SYNERGY */}
                    <section className="bg-orange-50/70 p-6 rounded-2xl border border-orange-100 space-y-3">
                        <div className="flex items-center gap-2">
                            <Sparkles className="w-5 h-5 text-primary" />
                            <h3 className="font-serif font-bold text-base text-gray-900">
                                La Règle d'Or de l'Umami Ancestral : Glutamate + Ribonucléotides
                            </h3>
                        </div>
                        <p className="text-xs text-gray-600 leading-relaxed">
                            La haute gastronomie mondiale a redécouvert ce que les mères africaines savaient d'instinct : 
                            lorsqu'on associe le <strong>glutamate naturel des plantes fermentées (soumbala, manioc réduit)</strong> avec les <strong>ribonucléotides des crustacés séchés ou poissons fumés</strong>, la perception du goût est multipliée par <strong>8</strong>.
                            C'est pour cela qu'un soupçon d'Akpi torréfié et de crevettes sauvages supplante instantanément n'importe quel additif de laboratoire.
                        </p>
                    </section>
                </div>

                {/* 5. ALL 7 NATURAL BASES CATALOG */}
                <div className="pt-4">
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h2 className="text-2xl font-serif font-bold text-gray-900">
                                Le Laboratoire des 7 Assaisonnements Sains
                            </h2>
                            <p className="text-xs text-gray-500">Recettes intégrales pas-à-pas à préparer et conserver chez soi</p>
                        </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                        {naturalBases.map((base) => (
                            <Link
                                key={base.id}
                                to={`/recipe/${base.id}`}
                                className="group bg-white p-4 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-orange-200 transition-all flex gap-3.5 items-center"
                            >
                                <div className="w-20 h-20 rounded-2xl overflow-hidden shrink-0 relative">
                                    <img
                                        src={base.image}
                                        alt={base.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <span className="text-[10px] font-bold text-primary uppercase tracking-wider block mb-0.5">
                                        {base.cookTime} min de réduction
                                    </span>
                                    <h3 className="font-serif font-bold text-gray-900 text-sm leading-snug truncate group-hover:text-primary transition-colors">
                                        {base.title}
                                    </h3>
                                    <p className="text-xs text-gray-500 line-clamp-1 mt-0.5">
                                        {base.intro || base.description}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
