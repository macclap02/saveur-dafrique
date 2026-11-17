import type { Recipe } from '../types';

export const recipes: Recipe[] = [
    {
        id: 'jollof-rice',
        title: 'Jollof Rice',
        origin: 'Nigeria / Ghana',
        region: 'Afrique',
        image: '/images/jollof.png',
        prepTime: 30,
        cookTime: 50,
        servings: 6,
        difficulty: 'Moyen',
        ingredients: [
            { name: "Riz long grain parfumé ou étuvé", quantity: "4 tasses" },
            { name: "Tomates fraîches bien mûres", quantity: "6" },
            { name: "Poivrons rouges (Tatashe)", quantity: "3" },
            { name: "Oignons rouges", quantity: "3" },
            { name: "Ail frais", quantity: "6 gousses" },
            { name: "Gingembre frais râpé", quantity: "2 c.à.s" },
            { name: "Piments Scotch Bonnet (Atarodo)", quantity: "2" },
            { name: "Concentré de tomate", quantity: "4 c.à.s" },
            { name: "Huile végétale", quantity: "1/2 tasse" },
            { name: "Thym séché", quantity: "1 c.à.s" },
            { name: "Curry doux en poudre", quantity: "1 c.à.s" },
            { name: "Paprika fumé", quantity: "1 c.à.c" },
            { name: "Noix de muscade râpée", quantity: "1/2 c.à.c" },
            { name: "Feuilles de laurier", quantity: "3" },
            { name: "Bouillon de viande ou de volaille corsé", quantity: "750ml" },
            { name: "Sel et poivre noir concassé", quantity: "Au goût" }
        ],
        utensils: [
            "Mixeur",
            "Grande marmite en fonte ou inox à fond épais",
            "Spatule en bois",
            "Papier aluminium"
        ],
        steps: [
            { order: 1, description: "La base aromatique (Obatoro) : Mixer ensemble les tomates fraîches, les poivrons rouges épépinés, 2 oignons, l'ail, le gingembre et les piments Scotch Bonnet avec un filet d'eau jusqu'à texture lisse. Verser cette purée dans une casserole et faire bouillir 15 minutes à feu vif pour réduire l'eau de moitié.", duration: 15 },
            { order: 2, description: "Rissolage de la tomate : Dans la grande marmite, faire chauffer l'huile végétale à feu moyen. Émincer le dernier oignon restant et le faire suer 3 minutes. Ajouter le concentré de tomate et faire frire en remuant sans arrêt pendant 5 à 7 minutes pour éliminer toute acidité : l'huile doit se teinter d'un rouge profond et le concentré doit former de petites graines brillantes.", duration: 8 },
            { order: 3, description: "La sauce mijotée : Verser la purée de tomates et poivrons réduite dans la marmite. Ajouter le thym, le curry, le paprika fumé, la muscade, les feuilles de laurier, le sel et le poivre noir. Laisser mijoter à feu moyen-doux pendant 12 minutes en remuant de temps en temps, jusqu'à ce que des bulles épaisses éclatent et que l'huile remonte en surface.", duration: 12 },
            { order: 4, description: "Lavage et nacrage du riz : Laver soigneusement le riz dans plusieurs eaux tièdes jusqu'à ce que l'eau soit parfaitement limpide (cela élimine l'excès d'amidon et évite que le riz ne devienne pâteux). Bien égoutter. Verser le riz cru dans la sauce mijotée et remuer délicatement à la spatule en bois pendant 2 minutes pour enrober chaque grain de sauce.", duration: 5 },
            { order: 5, description: "Mouillage et cuisson à l'étouffée : Verser le bouillon de viande chaud sur le riz (le niveau de liquide doit affleurer juste à 1 cm au-dessus des grains). Rectifier l'assaisonnement en sel. Couvrir la marmite d'une feuille d'aluminium bien scellée sur les bords, puis poser le couvercle par-dessus pour enfermer hermétiquement la vapeur.", duration: 3 },
            { order: 6, description: "Le fumage et la croûte dorée : Réduire au feu le plus doux possible et laisser cuire à l'étouffée pendant 25 minutes sans JAMAIS ouvrir. Éteindre le feu et laisser reposer 10 minutes sous vapeur. Ouvrir délicatement, aérer le riz à la fourchette pour séparer les grains : le fond de la marmite doit présenter une croûte délicieusement dorée et toastée qui diffuse le parfum fumé typique des fêtes.", duration: 35 }
        ],
        suggestedAccompaniments: [
            "Poulet grillé au four",
            "Alloco (bananes plantains frites)",
            "Salade de crudités au vinaigre",
            "Moyo d'oignons"
        ],
        practicalTips: [
            "Le secret du goût fumé : ne pas avoir peur que le fond caramélise légèrement (le \"party jollof\"). C'est cette légère torréfaction qui donne toute l'âme au plat.",
            "Cuisinez avec un couvercle hermétique ou du papier d'aluminium : le riz Jollof cuit par la force de la vapeur concentrée, pas par un bain d'eau.",
            "Lavez le riz 3 à 4 fois jusqu'à eau limpide pour garantir des grains bien détachés et aériens."
        ],
        intro: "Le parfum envoûtant de la tomate mijotée, la vapeur épicée et le crépitement du riz qui dore au fond de la marmite : voici le roi incontesté des fêtes ouest-africaines.",
        description: "Le Jollof Rice est le plat le plus célèbre d'Afrique de l'Ouest, objet d'une rivalité amicale et passionnée entre le Nigeria, le Ghana et le Sénégal. Son nom rend hommage à l'empire Djolof qui régnait sur le bassin sénégambien au 14e siècle. Il a voyagé jusqu'aux Amériques pour inspirer le Charleston Red Rice et le Jambalaya louisianais.",
        relatedRecipes: ["thieboudienne","arroz-titote"]
    },
    {
        id: 'poulet-yassa',
        title: 'Poulet Yassa',
        origin: 'Sénégal',
        region: 'Afrique',
        image: '/images/yassa.png',
        prepTime: 30,
        cookTime: 45,
        servings: 4,
        difficulty: 'Facile',
        ingredients: [
            { name: "Morceaux de poulet fermier (cuisses et hauts de cuisses)", quantity: "1.2kg" },
            { name: "Gros oignons jaunes ou blancs", quantity: "1.5kg" },
            { name: "Jus de citrons verts frais", quantity: "5 citrons" },
            { name: "Moutarde de Dijon", quantity: "4 c.à.s" },
            { name: "Ail frais", quantity: "8 gousses" },
            { name: "Gingembre frais râpé", quantity: "3cm" },
            { name: "Piment Scotch Bonnet (entier)", quantity: "1" },
            { name: "Persil frais plat", quantity: "1/2 bouquet" },
            { name: "Huile végétale (tournesol ou arachide)", quantity: "1/2 tasse" },
            { name: "Feuilles de laurier", quantity: "3" },
            { name: "Bouillon de volaille (ou eau tiède)", quantity: "200ml" },
            { name: "Grains de poivre noir concassés", quantity: "1 c.à.c" },
            { name: "Sel fin", quantity: "Au goût" }
        ],
        utensils: [
            "Mixeur ou mortier",
            "Grande cocotte en fonte",
            "Grille de barbecue ou four (mode grill)"
        ],
        steps: [
            { order: 1, description: "La marinade verte (Le Nokoss) : Piler ou mixer ensemble 4 gousses d'ail, le gingembre frais, la moitié du persil, 1 cuillère à café de sel et le poivre noir concassé avec une goutte d'huile pour obtenir une pâte d'assaisonnement très aromatique.", duration: 5 },
            { order: 2, description: "Entailler et mariner le poulet : Pratiquer de profondes incisions obliques sur les morceaux de poulet pour que les saveurs pénètrent jusqu'à l'os. Frotter le poulet avec la moitié du Nokoss vert, 2 cuillères à soupe de moutarde et le jus de 3 citrons verts. Laisser reposer au frais minimum 2 heures (idéalement toute une nuit).", duration: 120 },
            { order: 3, description: "Préparation du lit d'oignons : Émincer finement les 1.5 kg d'oignons en fines lamelles régulières. Dans un grand saladier, masser les oignons avec le reste de moutarde (2 c.à.s), le jus des 2 derniers citrons, le reste de Nokoss (ail/gingembre/persil restant) et les feuilles de laurier froissées. Incorporer également le jus rendu par la marinade du poulet.", duration: 10 },
            { order: 4, description: "Le braisage du poulet : Faire griller les morceaux de poulet au barbecue sur braises vives, ou sous le grill du four à 220°C pendant 15 minutes, jusqu'à ce que la peau soit bien croustillante, tachetée de brun et parfumée de fumée. Réserver le poulet doré.", duration: 15 },
            { order: 5, description: "Caramélisation lente des oignons : Dans une grande cocotte, faire chauffer l'huile végétale. Verser la montagne d'oignons marinés. Faire cuire à feu moyen-vif en remuant régulièrement pendant 20 minutes : les oignons doivent fondre, suer puis blondir doucement pour devenir translucides, doux et délicieusement confits sans brûler.", duration: 20 },
            { order: 6, description: "Mijotage final et osmose : Déposer les morceaux de poulet braisés sur le lit d'oignons confits. Verser les 200 ml de bouillon de volaille, déposer délicatement le piment Scotch Bonnet entier par-dessus (sans le percer pour diffuser son arôme sans piquant excessif). Couvrir et laisser mijoter à feu doux pendant 20 minutes : la sauce doit réduire pour devenir sirupeuse, brillante et nappante.", duration: 20 }
        ],
        suggestedAccompaniments: [
            "Riz blanc brisé (Riz sénégalais)",
            "Attiéké vapeur",
            "Frites de patates douces",
            "Bananes plantains frites"
        ],
        practicalTips: [
            "Ne trichez pas sur la quantité d'oignons : ils fondent de plus de moitié à la cuisson. Le Yassa est avant tout une sauce aux oignons confits.",
            "Laissez le piment entier au-dessus des oignons : il parfumera divinement la sauce sans brûler le palais.",
            "Le braisage préalable du poulet (au barbecue ou sous grill chaud) est indispensable pour apporter la note fumée signature du terroir casamançais."
        ],
        intro: "Une symphonie d'oignons caramélisés et de citron acidulé, où chaque bouchée raconte la douceur de la Casamance.",
        description: "Plat national informel du Sénégal, le Yassa est originaire de la Casamance. Son nom vient du mot \"yassa\" qui signifie \"cuire\" dans la langue locale. C'est un hommage à la patience et à l'équilibre entre l'acidité du citron et la douceur des oignons.",
        relatedRecipes: ["poulet-dg","kedjenou"]
    },
    {
        id: 'mafe',
        title: 'Mafé',
        origin: 'Mali / Sénégal',
        region: 'Afrique',
        image: '/images/mafe-poulet.webp',
        prepTime: 25,
        cookTime: 55,
        servings: 4,
        difficulty: 'Moyen',
        ingredients: [
            { name: "Viande de bœuf à braiser (paleron ou gîte) ou jarret d'agneau coupé en cubes", quantity: "800g" },
            { name: "Pâte d'arachide naturelle 100% pure (sans sucre ajouté)", quantity: "200g" },
            { name: "Concentré de tomate", quantity: "2 c.à.s bien pleines" },
            { name: "Tomates fraîches concassées", quantity: "2" },
            { name: "Oignons jaunes", quantity: "2" },
            { name: "Ail frais pilé", quantity: "5 gousses" },
            { name: "Gingembre frais râpé", quantity: "2cm" },
            { name: "Patates douces pelées et coupées en gros quartiers", quantity: "2" },
            { name: "Carottes épluchées et tronçonnées", quantity: "2" },
            { name: "Quartier de chou blanc", quantity: "1/4" },
            { name: "Piments frais entiers", quantity: "2" },
            { name: "Cumin moulu", quantity: "1 c.à.c" },
            { name: "Coriandre moulue", quantity: "1/2 c.à.c" },
            { name: "Feuilles de laurier", quantity: "2" },
            { name: "Huile d'arachide ou de tournesol", quantity: "3 c.à.s" },
            { name: "Eau tiède ou bouillon", quantity: "800ml" },
            { name: "Sel et poivre noir", quantity: "Au goût" }
        ],
        utensils: [
            "Grande marmite en fonte ou inox",
            "Couteau d'office",
            "Fouet ou bol pour délayer la pâte d'arachide"
        ],
        steps: [
            { order: 1, description: "Saisie et caramélisation de la viande : Dans la marmite, faire chauffer l'huile à feu vif. Déposer les cubes de bœuf assaisonnés de sel et de poivre noir. Les faire dorer sur toutes leurs faces pendant 8 à 10 minutes jusqu'à formation d'une belle croûte dorée au fond de la cocotte.", duration: 10 },
            { order: 2, description: "Sueur des aromates : Hacher les oignons. Baisser à feu moyen, ajouter les oignons, l'ail pilé et le gingembre râpé avec la viande dorée. Faire revenir 4 minutes en grattant les sucs de cuisson.", duration: 4 },
            { order: 3, description: "Rissolage de la tomate et épices : Ajouter le concentré de tomate, les tomates fraîches concassées, le cumin, la coriandre et les feuilles de laurier. Faire frire le mélange pendant 5 minutes à feu moyen en remuant : le concentré doit foncer et perdre toute verdeur acide.", duration: 5 },
            { order: 4, description: "Délayage de la pâte d'arachide : Dans un bol séparé, prélever 2 louches d'eau tiède ou de bouillon chaud et fouetter avec les 200 g de pâte d'arachide jusqu'à consistance fluide et homogène. Cette étape technique essentielle évite la formation de grumeaux compacts dans la marmite.", duration: 4 },
            { order: 5, description: "Mouillage et mijotage de la sauce : Verser la pâte d'arachide délayée dans la marmite, compléter avec le reste d'eau tiède (environ 700 ml). Mélanger intimement. Porter à ébullition douce, couvrir et laisser cuire la viande à feu doux pendant 25 minutes.", duration: 25 },
            { order: 6, description: "Ajout des légumes et \"l'œil de l'huile\" : Incorporer les morceaux de patates douces, les carottes, le chou et déposer les piments entiers sur le dessus sans les percer. Poursuivre la cuisson à feu très doux pendant 20 minutes sans couvrir complètement. Le Mafé est à son apogée quand les légumes sont fondants et qu'une fine pellicule d'huile rouge-ambrée remonte délicatement en surface (le fameux \"œil de l'huile\").", duration: 20 }
        ],
        suggestedAccompaniments: [
            "Riz blanc étuvé",
            "Fonio cuit à la vapeur",
            "Couscous de mil (Thiéré)",
            "Fufu de manioc"
        ],
        practicalTips: [
            "Le signe infaillible de cuisson : observez la surface. Quand les bulles deviennent lourdes et que l'huile d'arachide remonte en cercles dorés, la sauce est cuite à cœur.",
            "Choisissez impérativement une pâte d'arachide 100% pure cacahuètes grillées, sans sucre ni huile de palme hydrogénée ajoutée.",
            "Ne coupez pas les légumes trop petits : ils doivent cuire 20 minutes dans la sauce onctueuse sans se désagréger."
        ],
        intro: "L'onctuosité veloutée de l'arachide mariée à la tendreté de la viande, pour un voyage au cœur du Sahel.",
        description: "Le Mafé est un pilier de la cuisine mandingue. L'anecdote veut que l'on teste sa réussite à \"l'œil de l'huile\" : une fine couche d'huile rouge doit remonter en surface, signe que l'arachide est parfaitement cuite et a libéré tous ses parfums.",
        relatedRecipes: ["ndole","egusi-soup","moambe-chicken"]
    },
    {
        id: 'ndole',
        title: 'Ndolé',
        origin: 'Cameroun',
        region: 'Afrique',
        image: '/images/ndole.png',
        prepTime: 45,
        cookTime: 50,
        servings: 6,
        difficulty: 'Difficile',
        ingredients: [
            { name: "Feuilles de Ndolé blanchies et égouttées", quantity: "500g" },
            { name: "Arachides blanches émondées et crues", quantity: "500g" },
            { name: "Viande de bœuf coupée en morceaux (gîte ou jarret)", quantity: "400g" },
            { name: "Crevettes fraîches entières", quantity: "250g" },
            { name: "Crevettes séchées (écrevisses séchées)", quantity: "50g" },
            { name: "Oignons rouges", quantity: "3" },
            { name: "Ail frais", quantity: "8 gousses" },
            { name: "Gingembre frais râpé", quantity: "3cm" },
            { name: "Piments frais entiers", quantity: "2" },
            { name: "Graines de Sélim (Kankankan/Kieng) concassées", quantity: "1/2 c.à.c" },
            { name: "Basilic africain (Feuilles d'Akpi/Djangsang ou D'essessan)", quantity: "1 bouquet" },
            { name: "Huile végétale raffinée", quantity: "4 c.à.s" },
            { name: "Sel fin", quantity: "Au goût" }
        ],
        utensils: [
            "Mixeur puissant",
            "Grande marmite en fonte ou inox",
            "Poêle pour le crépitement final",
            "Passoire fine"
        ],
        steps: [
            { order: 1, description: "Traitement des feuilles de Ndolé : Rincer les feuilles blanchies dans un grand volume d'eau fraîche en les frottant délicatement entre vos paumes pour retirer l'excédent d'amertume, jusqu'à ce que l'eau devienne limpide. Bien presser les feuilles entre vos mains pour en extraire toute l'eau, former des boules denses et les hacher finement sur une planche.", duration: 15 },
            { order: 2, description: "Bouillon et cuisson de la viande : Dans la marmite, mettre les morceaux de bœuf avec 1 oignon émincé, 1 pincée de sel et couvrir avec 600 ml d'eau. Porter à ébullition et laisser mijoter à feu moyen pendant 35 minutes jusqu'à ce que la viande soit bien tendre. Réserver la viande avec son bouillon parfumé.", duration: 35 },
            { order: 3, description: "Le hachis aromatique traditionnel : Dans le mixeur, rassembler 4 gousses d'ail, le gingembre, le bouquet de basilic africain, les crevettes séchées préalablement rincées, les graines de Sélim concassées (débarrassées de leur gousse fibreuse) et un petit filet d'eau. Mixer jusqu'à obtenir une pâte aromatique verte sombre très parfumée.", duration: 5 },
            { order: 4, description: "La crème d'arachide : Faire tremper les arachides émondées 10 minutes dans de l'eau tiède. Les égoutter puis les mixer au robot avec un peu de bouillon de viande tiède jusqu'à obtenir une pâte d'arachide crémeuse et totalement lisse, sans le moindre grain résiduel.", duration: 8 },
            { order: 5, description: "Cuisson de la crème d'arachide et fusion aromatique : Verser la pâte d'arachide lisse et le hachis aromatique d'épices (basilic, Sélim, crevettes séchées) directement dans la marmite avec la viande et son bouillon. Cuire à feu doux en remuant continuellement avec une spatule en bois pendant 15 minutes : l'arachide doit cuire, s'épaissir et perdre sa verdeur crue sans jamais accrocher au fond.", duration: 15 },
            { order: 6, description: "Incorporation du Ndolé : Ajouter les boules de feuilles de Ndolé hachées dans la crème d'arachide bouillonnante. Mélanger intimement pour bien détendre la verdure. Ajouter les 2 piments entiers sur le dessus. Poursuivre la cuisson à feu très doux pendant 15 à 20 minutes en remuant régulièrement : la sauce doit devenir compacte, onctueuse et liée.", duration: 20 },
            { order: 7, description: "Le crépitement final (L'Arrosage de prestige) : Décortiquer les crevettes fraîches en gardant la queue. Émincer finement les 2 oignons restants. Dans une poêle, faire chauffer l'huile à feu vif. Y jeter les oignons et les crevettes fraîches avec une pincée de sel. Dès que les oignons caramélisent et que les crevettes deviennent d'un beau rose nacré (environ 3 minutes), verser immédiatement cette huile frémissante avec les crevettes sur le Ndolé fumant. Servir aussitôt.", duration: 5 }
        ],
        suggestedAccompaniments: [
            "Bâtons de manioc (Bobolo ou Miondo)",
            "Bananes plantains mûres bouillies",
            "Riz blanc parfumé"
        ],
        practicalTips: [
            "Ne zappez pas le crépitement final : verser l'huile chaude avec les oignons et les crevettes sur le plat au moment du service est le geste sacré qui réveille tous les arômes.",
            "Les graines de Sélim et le basilic africain doivent être mixés avec les crevettes séchées pour créer la base umami inimitable du terroir Douala.",
            "Remuez constamment la crème d'arachide à la cuillère en bois avant d'ajouter les feuilles : l'arachide crue est fragile et accroche facilement."
        ],
        intro: "Le roi des plats camerounais : une crème d'arachide onctueuse défiant l'amertume des feuilles sacrées.",
        description: "Surnommé le \"caviar camerounais\", le Ndolé est un plat de prestige. Sa préparation est un rite de passage : laver les feuilles jusqu'à obtenir le juste équilibre d'amertume est un savoir-faire qui se transmet de mère en fille comme un secret d'État."
    },
    {
        id: 'thieboudienne',
        title: 'Thieboudienne (Ceebu Jën)',
        origin: 'Sénégal',
        region: 'Afrique',
        image: '/images/thieboudienne.png',
        prepTime: 45,
        cookTime: 60,
        servings: 6,
        difficulty: 'Difficile',
        ingredients: [
            { name: "Riz brisé deux fois (Riz sénégalais)", quantity: "800g" },
            { name: "Beau poisson noble entier (Mérou/Thiof, Dorade ou Carpe rouge) coupé en tronçons", quantity: "1.2kg" },
            { name: "Yët (mollusque fermenté et séché)", quantity: "1 petit morceau (environ 30g)" },
            { name: "Guèdj (poisson séché fermenté)", quantity: "1 morceau (environ 40g)" },
            { name: "Concentré de tomate", quantity: "3 c.à.s" },
            { name: "Tomates fraîches concassées", quantity: "3" },
            { name: "Carottes épluchées coupées en gros tronçons", quantity: "3" },
            { name: "Morceau de chou blanc coupé en quartiers", quantity: "1/2" },
            { name: "Tronçon de manioc épluché", quantity: "1 gros" },
            { name: "Aubergine africaine amère (Diakhatou)", quantity: "2" },
            { name: "Gombos frais entiers", quantity: "4" },
            { name: "Piments frais entiers (Scotch Bonnet)", quantity: "2" },
            { name: "Oignons rouges", quantity: "2" },
            { name: "Ail frais", quantity: "6 gousses" },
            { name: "Persil plat frais", quantity: "1 bouquet" },
            { name: "Piment en poudre ou poivre noir concassé", quantity: "1 c.à.c" },
            { name: "Huile d'arachide", quantity: "1/2 tasse" },
            { name: "Eau tiède", quantity: "1.5L" },
            { name: "Sel fin", quantity: "Au goût" }
        ],
        utensils: [
            "Grande marmite sénégalaise en fonte d'aluminium",
            "Passoire / couscoussier pour précuire le riz à la vapeur",
            "Mortier et pilon"
        ],
        steps: [
            { order: 1, description: "La farce secrète du poisson (Le Roff) : Piler au mortier le persil plat avec 3 gousses d'ail, 1/2 oignon, 1 piment vert épépiné, du sel et du poivre noir concassé. Pratiquer 2 incisions profondes dans chaque tronçon de poisson et y insérer généreusement cette farce parfumée.", duration: 10 },
            { order: 2, description: "Rissolage de base et friture du poisson : Dans la grande marmite, faire chauffer l'huile d'arachide. Faire dorer les tronçons de poisson farcis pendant 3 à 4 minutes par face jusqu'à belle croûte dorée. Retirer délicatement le poisson et réserver. Dans la même huile parfumée, jeter le morceau de Yët rincé et le reste d'oignons émincés : faire revenir jusqu'à coloration rousse.", duration: 10 },
            { order: 3, description: "La sauce tomate rouge concentrée : Ajouter le concentré de tomate et les tomates fraîches concassées. Faire frire le concentré pendant 6 à 8 minutes en remuant pour casser l'acidité jusqu'à ce que l'huile devienne d'un rouge profond. Verser 1.5 litre d'eau tiède, ajouter le morceau de Guèdj bien lavé et porter à franche ébullition.", duration: 10 },
            { order: 4, description: "Cuisson des légumes et infusion marine : Plonger dans le bouillon rouge les gros légumes : quartiers de chou, carottes, tronçons de manioc, aubergines amères (diakhatou) et les piments entiers. Saler au goût. Laisser mijoter à feu moyen pendant 25 minutes. Ajouter les gombos et remettre délicatement les tronçons de poisson dans le bouillon pendant les 10 dernières minutes pour qu'ils finissent de cuire à cœur.", duration: 25 },
            { order: 5, description: "Précuisson vapeur du riz (Le Gnari Chin) : Pendant que les légumes cuisent, laver le riz brisé dans plusieurs eaux. Placer le riz égoutté dans un panier vapeur au-dessus de la marmite (ou au cuiseur vapeur) pendant 10 minutes pour que les grains s'attendrissent avant de plonger dans la sauce.", duration: 10 },
            { order: 6, description: "Retrait et cuisson du riz : À l'aide d'une écumoire, retirer délicatement tous les légumes, le poisson, le yët et le guèdj de la marmite et les disposer soigneusement sur un grand plat de service chaud. Goûter et ajuster le sel du bouillon restant (qui doit être bien rouge et corsé). Verser le riz précuit à la vapeur dans le bouillon : le liquide doit dépasser le riz d'environ 1 cm (en retirer une louche si nécessaire).", duration: 5 },
            { order: 7, description: "L'étouffée et le Xood (Croûte croustillante) : Couvrir hermétiquement et cuire à feu très doux pendant 25 minutes sans remuer. Les grains de riz vont boire toute la sauce rouge jusqu'à devenir fondants et parfumés. Au fond, une délicieuse croûte croustillante dorée (le Xood ou Pouthiou) se forme naturellement. Servir le riz rouge au centre d'un grand plat commun entouré des légumes et couronné du poisson farci.", duration: 25 }
        ],
        suggestedAccompaniments: [
            "Sauce Beugueudj (Sauce feuille d'oseille amère)",
            "Sauce Soul (tamarin acidulé)",
            "Piment frais écrasé"
        ],
        practicalTips: [
            "Le Yët et le Guèdj sont l'âme du Ceebu Jën : ces produits séchés et fermentés apportent la note umami iodée irremplaçable qui distingue la vraie cuisine de Saint-Louis.",
            "Ne sautez pas la précuisson vapeur du riz : le riz brisé gonfle mieux et absorbe le bouillon sans jamais se casser en bouillie.",
            "Retirez une louche de bouillon avant d'y jeter le riz si vous avez peur d'avoir trop de liquide : vous pourrez en rajouter au besoin en cours de cuisson."
        ],
        intro: "L'élégance suprême du riz rouge infusé au poisson et aux légumes : le joyau de la Teranga.",
        description: "La légende raconte que la Thieboudienne fut inventée au 19ème siècle par Penda Mbaye, une cuisinière de Saint-Louis du Sénégal. Face à une pénurie d'orge, elle utilisa du riz, créant sans le savoir le plat le plus emblématique d'Afrique de l'Ouest.",
        relatedRecipes: ["jollof-rice","arroz-titote"]
    },
    {
        id: 'poulet-dg',
        title: 'Poulet DG',
        origin: 'Cameroun',
        region: 'Afrique',
        image: '/images/poulet-dg.webp',
        prepTime: 30,
        cookTime: 40,
        servings: 4,
        difficulty: 'Moyen',
        ingredients: [
            { name: "Poulet fermier coupé en morceaux réguliers", quantity: "1.2kg" },
            { name: "Bananes plantains bien mûres (peau tachetée de noir mais fermes)", quantity: "4" },
            { name: "Carottes taillées en biseaux ou julienne", quantity: "3" },
            { name: "Haricots verts frais équeutés", quantity: "150g" },
            { name: "Poivron rouge et poivron vert taillés en lamelles", quantity: "2" },
            { name: "Tomates fraîches bien mûres concassées", quantity: "3" },
            { name: "Oignons rouges émincés", quantity: "2" },
            { name: "Gousses d'ail hachées", quantity: "5" },
            { name: "Gingembre frais râpé", quantity: "2 c.à.s" },
            { name: "Poivre blanc de Penja moulu", quantity: "1 c.à.s" },
            { name: "Branches de céleri hachées", quantity: "2" },
            { name: "Huile pour friture et cuisson", quantity: "500ml" },
            { name: "Bouillon de volaille tiède", quantity: "150ml" },
            { name: "Sel fin", quantity: "Au goût" }
        ],
        utensils: [
            "Friteuse ou grande poêle à frire",
            "Wok ou grande sauteuse en fonte",
            "Écumoire"
        ],
        steps: [
            { order: 1, description: "Marinade savoureuse du poulet : Dans un plat creux, mélanger la moitié de l'ail haché, la moitié du gingembre, le poivre blanc de Penja, 1 oignon émincé, le céleri haché et 1 cuillère à café de sel. Frotter énergiquement les morceaux de poulet avec cette marinade et laisser reposer 30 minutes.", duration: 30 },
            { order: 2, description: "La friture dorée des plantains : Éplucher les bananes plantains mûres et les découper en rondelles épaisses d'environ 1.5 cm (ou en biseaux). Faire chauffer l'huile de friture à 175°C. Y plonger les rondelles de plantain par petites fournées et les frire 4 à 5 minutes jusqu'à ce qu'elles soient d'un beau caramel doré croustillant à l'extérieur et fondantes à l'intérieur. Égoutter sur papier absorbant et réserver.", duration: 15 },
            { order: 3, description: "La dorure du poulet : Dans la même huile chaude (ou dans une poêle avec 3 cuillères à soupe d'huile), faire dorer les morceaux de poulet égouttés de leur marinade pendant 10 à 12 minutes jusqu'à obtenir une croûte bien croustillante et ambrée. Égoutter et réserver avec les plantains.", duration: 12 },
            { order: 4, description: "La poêlée croquante de légumes : Dans une grande sauteuse ou un wok, chauffer 2 cuillères à soupe d'huile. Faire revenir le reste d'oignons, d'ail et de gingembre pendant 2 minutes. Ajouter les tomates concassées, les carottes en biseaux et les haricots verts. Faire sauter à feu vif pendant 5 minutes pour que les légumes cuisent tout en restant agréablement croquants.", duration: 7 },
            { order: 5, description: "Ajout des poivrons et sauce onctueuse : Ajouter les lamelles de poivrons rouges et verts, verser le reste de marinade du poulet et les 150 ml de bouillon de volaille. Laisser réduire à feu moyen pendant 4 minutes pour obtenir un jus de cuisson riche, parfumé au céleri et au poivre de Penja.", duration: 5 },
            { order: 6, description: "Le mariage royal (Poulet, Légumes, Plantains) : Réintroduire les morceaux de poulet dorés dans la sauteuse de légumes et bien enrober pendant 3 minutes à feu doux. Ajouter délicatement les rondelles de plantains frites au tout dernier moment en soulevant avec une spatule pour qu'elles s'imbibent de la sauce sans se briser. Servir immédiatement bien chaud et coloré.", duration: 4 }
        ],
        suggestedAccompaniments: [
            "Se déguste traditionnellement seul (plat complet)",
            "Riz blanc parfumé",
            "Salade verte croquante"
        ],
        practicalTips: [
            "Ajoutez impérativement les plantains frits à la toute dernière minute : ils doivent rester fermes et croustillants sans se transformer en purée au contact de la sauce.",
            "Le Poivre blanc de Penja est le joyau du terroir camerounais : ses notes boisées et mentholées subliment la douceur naturelle du plantain frit.",
            "Ne faites pas trop cuire les légumes : carottes, haricots verts et poivrons doivent conserver un croquant irrésistible sous la dent."
        ],
        intro: "Le plat des \"Directeurs Généraux\" : un mariage sucré-salé croquant entre plantain frit et poulet braisé.",
        description: "Né dans les années 80 au Cameroun, le Poulet DG doit son nom à son standing : il était autrefois réservé aux \"Directeurs Généraux\" et aux grandes réceptions. C'est le symbole de la réussite sociale, servi dans une explosion de couleurs et de saveurs.",
        relatedRecipes: ["kedjenou","muamba-galinha","poulet-yassa"]
    },
    {
        id: 'garba',
        title: 'Garba',
        origin: 'Côte d\'Ivoire',
        region: 'Afrique',
        image: '/images/garba.webp',
        prepTime: 10,
        cookTime: 15,
        servings: 2,
        difficulty: 'Facile',
        ingredients: [
            { name: "Attiéké de qualité supérieure (semoule de manioc fermentée à gros grains)", quantity: "400g" },
            { name: "Morceaux de thon frais ou thonine (appelé localement \"Magnan\")", quantity: "2 gros pavés (environ 350g)" },
            { name: "Farine de blé (pour enrober le poisson)", quantity: "4 c.à.s" },
            { name: "Piments frais rouges et verts (Piment piment)", quantity: "3" },
            { name: "Oignon rouge ou blanc haché finement", quantity: "1" },
            { name: "Tomate fraîche ferme découpée en petits dés", quantity: "1" },
            { name: "Huile de friture", quantity: "400ml" },
            { name: "Sel fin", quantity: "Au goût" }
        ],
        utensils: [
            "Friteuse ou poêle profonde à frire",
            "Assiette creuse traditionnelle"
        ],
        steps: [
            { order: 1, description: "Préparation et réchauffage de l'Attiéké : Égrener délicatement l'Attiéké entre vos doigts pour séparer les grains de manioc. Le passer à la vapeur pendant 3 à 5 minutes (ou quelques secondes au micro-ondes couvert d'un film) pour qu'il soit tiède, aérien et légèrement acidulé. Disposer l'Attiéké en dôme dans une grande assiette creuse.", duration: 5 },
            { order: 2, description: "Assaisonnement et farinage du poisson : Saler généreusement les morceaux de thon frais sur toutes leurs faces. Les rouler dans la farine de blé en tapotant l'excédent : cette fine pellicule de farine garantira une croûte ultra-croustillante tout en gardant la chair du thon juteuse.", duration: 3 },
            { order: 3, description: "La friture brûlante du Magnan : Faire chauffer l'huile de friture à feu vif (environ 180°C). Y plonger les morceaux de thon farinés. Frire pendant 6 à 8 minutes en les retournant à mi-cuisson jusqu'à ce que la croûte soit bien dorée, craquante et rustique. Égoutter le poisson.", duration: 8 },
            { order: 4, description: "Le dressage et l'arrosage authentique : Déposer le morceau de thon frit brûlant au centre de l'Attiéké. Prélever 2 cuillères à soupe de l'huile de friture encore fumante du poisson et arroser directement l'Attiéké : les grains s'imprègnent instantanément de l'arôme iodé et du gras croustillant.", duration: 2 },
            { order: 5, description: "La garniture fraîche et piquante : Parsemer l'assiette avec l'oignon haché croquant, les dés de tomate fraîche et écraser grossièrement les piments frais directement du bout des doigts sur le poisson pour les plus téméraires. Déguster immédiatement à la main selon la tradition abidjanaise.", duration: 2 }
        ],
        suggestedAccompaniments: [
            "Jus de Bissap glacé",
            "Jus de Gingembre (Gnamankoudji)",
            "Jus de Tamarin"
        ],
        practicalTips: [
            "Le secret incontournable du Garba : l'arrosage à l'huile de friture brûlante du thon sur l'attiéké. C'est ce geste qui lie la semoule et lui donne son goût incomparable.",
            "Faites fariner le thon avant de le frire pour obtenir cette texture croustillante qui fait la légende des \"garbadromes\" d'Abidjan.",
            "L'attiéké doit être tiède et égrené, jamais compact ni collant."
        ],
        intro: "L'âme de la rue abidjanaise : l'attiéké granuleux réchauffé par l'huile d'un thon frit à la perfection.",
        description: "Inventé par des vendeurs nigériens à Abidjan, le Garba tire son nom de son créateur. C'est l'anti-stress des Ivoiriens : un plat rapide, populaire et imbattable qui a conquis toutes les classes sociales, des étudiants aux cadres."
    },
    {
        id: 'saka-saka',
        title: 'Saka Saka (Pondu)',
        origin: 'Congo',
        region: 'Afrique',
        image: '/images/saka saka pondu.webp',
        prepTime: 40,
        cookTime: 90,
        servings: 6,
        difficulty: 'Moyen',
        ingredients: [
            { name: "Feuilles de manioc fraîches pilées très finement", quantity: "1kg" },
            { name: "Huile de palme rouge pure", quantity: "200ml" },
            { name: "Poisson fumé (ou poisson salé makayabu dessalé)", quantity: "400g" },
            { name: "Gros oignons rouges", quantity: "2" },
            { name: "Gousses d'ail", quantity: "6" },
            { name: "Poireau (blanc et vert)", quantity: "1" },
            { name: "Ciboulette fraîche ou ciboule africaine", quantity: "1 bouquet" },
            { name: "Piments entiers frais", quantity: "2" },
            { name: "Poudre de crevettes séchées (optionnel)", quantity: "2 c.à.s" },
            { name: "Eau pour la cuisson", quantity: "1.5L" },
            { name: "Sel", quantity: "Au goût" }
        ],
        utensils: [
            "Grande marmite en fonte ou inox à fond épais",
            "Mortier et pilon (ou mixeur)"
        ],
        steps: [
            { order: 1, description: "La première cuisson à découvert : Dans la grande marmite, placer les feuilles de manioc pilées et couvrir d'1 litre d'eau fraîche. Porter à ébullition et faire bouillir à DÉCOUVERT pendant 30 minutes sans couvrir : cette étape est indispensable pour laisser s'évaporer les composés volatils naturellement présents dans la feuille de manioc crue.", duration: 30 },
            { order: 2, description: "Préparation du bouquet aromatique : Hacher finement le poireau, les oignons, l'ail et la ciboulette. Nettoyer et effilocher le poisson fumé en retirant soigneusement les arêtes et la peau.", duration: 10 },
            { order: 3, description: "Association aromatique et deuxième cuisson : Après les 30 minutes, ajouter les aromates hachés (poireau, oignons, ail, ciboulette), le poisson fumé effiloché et la poudre de crevettes séchées dans la marmite de feuilles de manioc. Compléter avec 500 ml d'eau tiède, saler et mélanger intimement.", duration: 10 },
            { order: 4, description: "Le mijotage prolongé : Couvrir à moitié et laisser mijoter à feu moyen-doux pendant 45 minutes : les feuilles de manioc vont s'attendrir, changer de couleur pour prendre une teinte vert olive sombre et s'imprégner des sucs du poisson fumé.", duration: 45 },
            { order: 5, description: "L'incorporation de l'huile de palme rouge : Verser les 200 ml d'huile de palme rouge sur le Pondu. Poser les piments entiers sur le dessus sans les percer. Poursuivre la cuisson à découvert à feu doux pendant 20 à 30 minutes en remuant régulièrement jusqu'à ce que toute l'eau résiduelle soit évaporée et que la préparation forme une purée onctueuse, brillante et liée qui crépite doucement dans son huile.", duration: 25 }
        ],
        suggestedAccompaniments: [
            "Chikwangue (bâton de manioc congolais)",
            "Fufu de manioc et maïs",
            "Riz blanc chaud",
            "Bananes plantains bouillies"
        ],
        practicalTips: [
            "Respectez impérativement la cuisson à découvert au départ : les feuilles de manioc doivent cuire longtemps sans couvercle pour que l'amertume et les substances volatiles se dissipent.",
            "L'huile de palme rouge doit être ajoutée en fin de parcours : elle ne doit pas bouillir excessivement afin de conserver sa couleur éclatante et son parfum fruité naturel.",
            "Le Pondu est encore meilleur réchauffé le lendemain, lorsque les saveurs du poisson fumé ont intimement pénétré la fibre des feuilles de manioc."
        ],
        intro: "La force de la terre congolaise : une purée de feuilles de manioc onctueuse sublimée par l'huile de palme.",
        description: "Le Pondu (ou Saka Saka) est le ciment des familles congolaises. On dit qu'il n'y a pas deux Pondu identiques : chaque province, chaque famille possède sa variante, mais toutes s'accordent sur une chose : plus il cuit, meilleur il est."
    },
    {
        id: 'alloco',
        title: 'Alloco',
        origin: 'Côte d\'Ivoire',
        region: 'Afrique',
        image: '/images/alloco.webp',
        prepTime: 10,
        cookTime: 15,
        servings: 4,
        difficulty: 'Facile',
        ingredients: [
            { name: "Bananes plantains bien mûres (peau jaune tachetée de noir, fermes au toucher)", quantity: "4 grosses" },
            { name: "Huile de friture (huile de palme rouge raffinée ou huile de tournesol)", quantity: "500ml" },
            { name: "Sel fin", quantity: "1 pincée" },
            { name: "Tomates fraîches bien mûres (pour la sauce Alloco)", quantity: "2" },
            { name: "Oignon rouge", quantity: "1" },
            { name: "Piment frais rouge", quantity: "1" },
            { name: "Pincée de sel et filet d'huile pour la sauce", quantity: "1 c.à.c" }
        ],
        utensils: [
            "Planche à découper",
            "Poêle profonde ou friteuse",
            "Écumoire",
            "Papier absorbant"
        ],
        steps: [
            { order: 1, description: "La sélection et la découpe géométrique : Éplucher les bananes plantains. Les fendre en 4 dans le sens de la longueur, puis les débiter en petits dés réguliers ou en rondelles obliques de taille homogène pour garantir une cuisson parfaitement uniforme.", duration: 5 },
            { order: 2, description: "L'assaisonnement léger : Placer les dés de plantains dans un bol, saupoudrer d'une légère pincée de sel et mélanger à la main juste avant la friture (ne pas saler trop à l'avance pour éviter que le plantain ne rende de l'eau).", duration: 2 },
            { order: 3, description: "La friture dorée : Faire chauffer l'huile à feu moyen-vif (environ 175°C). Pour vérifier la température, plonger un dé de plantain : il doit immédiatement remonter entouré de petites bulles vives. Déposer les dés de plantain dans l'huile sans surcharger la poêle.", duration: 3 },
            { order: 4, description: "La caramélisation : Laisser frire pendant 6 à 8 minutes en les retournant délicatement à l'aide d'une écumoire : les dés doivent prendre une belle robe acajou brillante, croustillante sur les arêtes et fondante à cœur.", duration: 8 },
            { order: 5, description: "Égouttage et préparation du piment d'accompagnement : Retirer avec l'écumoire et égoutter sur une assiette tapissée de papier absorbant. Pour la sauce piment d'accompagnement : écraser au mortier les tomates concassées, l'oignon rouge finement haché et le piment avec un filet d'huile de friture chaude et une pincée de sel. Servir l'Alloco brûlant avec sa sauce.", duration: 5 }
        ],
        suggestedAccompaniments: [
            "Poisson braisé ou frit",
            "Poulet grillé",
            "Œufs durs",
            "Sauce piment tomate"
        ],
        practicalTips: [
            "Le choix du plantain est capital : la peau doit être jaune avec de larges taches noires. S'il est trop vert, l'Alloco sera dur et fade ; s'il est complètement noir et mou, il boira trop d'huile.",
            "L'huile doit être abondante et bien chaude : une friture à température idéale saisit instantanément l'extérieur du plantain et empêche le gras de pénétrer au cœur.",
            "Pour une touche authentique abidjanaise, utilisez de l'huile de palme : elle confère une couleur cuivrée magnifique et une saveur toastée unique."
        ],
        intro: "Des pépites d'or sucrées et fondantes, indispensables compagnes de tous les festins ivoiriens.",
        description: "L'Alloco est bien plus qu'un accompagnement : c'est une institution. En Côte d'Ivoire, les \"allocodromes\" sont des lieux de vie où l'odeur du plantain frit se mêle aux rires et aux discussions passionnées. C'est le symbole de la convivialité urbaine.",
        relatedRecipes: ["kakro","garba","attieke-poisson"]
    },
    {
        id: 'egusi-soup',
        title: 'Egusi Soup',
        origin: 'Nigeria',
        region: 'Afrique',
        image: '/images/egusi soup.webp',
        prepTime: 25,
        cookTime: 45,
        servings: 4,
        difficulty: 'Moyen',
        ingredients: [
            { name: "Graines de melon ou courge Egusi moulues très finement", quantity: "2 tasses (environ 250g)" },
            { name: "Huile de palme rouge pure", quantity: "1/2 tasse" },
            { name: "Feuilles d'épinards frais hachées (ou feuilles d'Ugwu / Bitterleaf blanchies)", quantity: "300g" },
            { name: "Viande de bœuf ou de chèvre coupée en cubes", quantity: "400g" },
            { name: "Poisson fumé nettoyé et effiloché", quantity: "200g" },
            { name: "Crevettes séchées (crayfish) moulues", quantity: "3 c.à.s" },
            { name: "Graines de caroube fermentées (Iru / Dawadawa)", quantity: "1 c.à.s" },
            { name: "Oignons rouges", quantity: "2" },
            { name: "Piments Scotch Bonnet (Atarodo)", quantity: "2" },
            { name: "Poivrons rouges doux", quantity: "2" },
            { name: "Ail frais", quantity: "4 gousses" },
            { name: "Bouillon de viande chaud", quantity: "500ml" },
            { name: "Sel et poivre", quantity: "Au goût" }
        ],
        utensils: [
            "Mixeur",
            "Marmite à fond épais",
            "Spatule en bois",
            "Bol de préparation"
        ],
        steps: [
            { order: 1, description: "La cuisson de la viande et du bouillon : Dans la marmite, faire bouillir les cubes de bœuf avec 1/2 oignon émincé, 1 pincée de sel et 600 ml d'eau pendant 35 minutes jusqu'à ce que la viande soit tendre. Filtrer et réserver le bouillon de viande précieux.", duration: 35 },
            { order: 2, description: "La purée aromatique de piments : Mixer ensemble les poivrons rouges, 1 oignon et demi, l'ail et les piments Scotch Bonnet jusqu'à consistance lisse. Réserver.", duration: 5 },
            { order: 3, description: "La pâte d'Egusi en boulettes : Dans un bol, verser les graines d'Egusi moulues. Hacher très finement un demi-oignon et l'incorporer aux graines avec 3 cuillères à soupe d'eau tiède. Malaxer à la main ou à la cuillère pour former une pâte compacte et épaisse qui peut se modeler en petites boulettes.", duration: 5 },
            { order: 4, description: "Friture et torréfaction de l'Egusi : Dans la marmite propre, faire chauffer l'huile de palme rouge à feu moyen. Ajouter l'Iru (dawadawa) pour libérer son arôme umami envoûtant pendant 1 minute. Prélever de petites boulettes de pâte d'Egusi et les déposer dans l'huile chaude. Laisser frire 8 à 10 minutes sans trop remuer pour que des grumeaux savoureux se forment naturellement, puis remuer délicatement pour les dorer.", duration: 10 },
            { order: 5, description: "Mijotage de la sauce : Verser la purée de poivrons et piments mixée sur l'Egusi doré. Ajouter les crevettes séchées moulues (crayfish), les morceaux de viande cuits, le poisson fumé effiloché et le bouillon de viande chaud. Bien mélanger, couvrir et laisser mijoter à feu doux pendant 20 minutes : la sauce doit épaissir et révéler sa belle texture granuleuse caractéristique.", duration: 20 },
            { order: 6, description: "La touche verte finale : Ajouter les feuilles d'épinards frais hachées (ou feuilles d'Ugwu). Mélanger délicatement et laisser cuire à feu très doux pendant seulement 3 à 4 minutes afin que les feuilles s'assouplissent tout en conservant leur éclat vert émeraude et leurs vitamines. Couper le feu et servir chaud.", duration: 4 }
        ],
        suggestedAccompaniments: [
            "Pounded Yam (Igname pilée)",
            "Fufu de manioc",
            "Eba (Garri chaud)",
            "Amala",
            "Riz blanc"
        ],
        practicalTips: [
            "Ne passez pas à côté de l'Iru (caroube fermenté) : c'est l'ingrédient magique qui apporte cette profondeur umami incomparable et reconnaissable entre mille.",
            "Modelez l'Egusi en pâte avec un peu d'oignon avant de le frire dans l'huile de palme : cela crée ces grumeaux moelleux (\"lumps\") si recherchés dans la haute cuisine nigériane.",
            "Ajoutez les feuilles vertes au tout dernier moment pour ne pas les surcuire et préserver leur texture fraîche."
        ],
        intro: "Une texture granuleuse et riche, où les graines de courge dansent dans une sauce onctueuse et épicée.",
        description: "La soupe d'Egusi est le plat de prédilection des fêtes nigérianes. Sa texture unique vient des graines de melon (egusi) séchées et moulues. On dit qu'une Egusi réussie doit avoir de petits \"grumeaux\" savoureux qui capturent parfaitement l'arôme de l'Iru (caroube fermenté).",
        relatedRecipes: ["mafe","kanda"]
    },
    {
        id: 'sauce-gombo',
        title: 'Sauce Gombo (Okra Soup)',
        origin: 'West Africa',
        region: 'Afrique',
        image: '/images/sauce-gombo.webp',
        prepTime: 20,
        cookTime: 35,
        servings: 4,
        difficulty: 'Facile',
        ingredients: [
            { name: "Gombos frais bien verts et tendres", quantity: "500g" },
            { name: "Huile de palme rouge", quantity: "4 c.à.s" },
            { name: "Viande de bœuf ou queue de bœuf découpée", quantity: "400g" },
            { name: "Poisson fumé (mâchoiron ou silure) nettoyé", quantity: "200g" },
            { name: "Crevettes fraîches ou crabe découpé", quantity: "200g" },
            { name: "Graines de caroube fermentées (Iru / Afiti)", quantity: "2 c.à.s" },
            { name: "Poudre de crevettes séchées", quantity: "2 c.à.s" },
            { name: "Oignons rouges", quantity: "2" },
            { name: "Ail frais pilé", quantity: "4 gousses" },
            { name: "Gingembre frais râpé", quantity: "2cm" },
            { name: "Piments frais entiers (Scotch Bonnet)", quantity: "2" },
            { name: "Tomates fraîches concassées", quantity: "2" },
            { name: "Bicarbonate de soude alimentaire ou potasse kankankan (optionnel, pour l'élasticité)", quantity: "1 petite pincée" },
            { name: "Sel et poivre", quantity: "Au goût" }
        ],
        utensils: [
            "Marmite en inox ou fonte",
            "Couteau d'office ou râpe à gombo"
        ],
        steps: [
            { order: 1, description: "Bouillon de viande parfumé : Dans la marmite, faire bouillir la viande avec 1 oignon émincé, l'ail, le gingembre, 1 cuillère à café de sel et 700 ml d'eau pendant 35 minutes jusqu'à ce que la viande soit fondante.", duration: 35 },
            { order: 2, description: "Découpe technique du gombo : Laver et sécher les gombos. Couper les extrémités. Hacher finement les deux tiers des gombos au couteau (ou les râper) pour libérer leur mucilage gélifiant naturel, et découper le tiers restant en rondelles plus épaisses pour garder de la mâche.", duration: 10 },
            { order: 3, description: "La sauce tomate aromatique : Dans une sauteuse, chauffer l'huile de palme. Faire revenir 1/2 oignon émincé, les tomates concassées, l'Iru/Afiti écrasé et la poudre de crevettes séchées pendant 5 minutes pour développer les arômes.", duration: 5 },
            { order: 4, description: "Cuisson du gombo et élasticité : Verser la sauce tomate aromatique dans la marmite de viande bouillonnante. Ajouter le poisson fumé effiloché et les crabes/crevettes. Ajouter la pincée de bicarbonate (qui fixe la chlorophylle verte et renforce le filant du gombo). Incorporer tous les gombos hachés et en rondelles.", duration: 5 },
            { order: 5, description: "Mijotage à découvert : Laisser cuire à DÉCOUVERT à feu moyen pendant 12 à 15 minutes en remuant régulièrement du bas vers le haut avec une cuillère en bois : la sauce prend une belle texture visqueuse brillante, élastique et intensément savoureuse.", duration: 15 }
        ],
        suggestedAccompaniments: [
            "Pâte de maïs blanche ou jaune",
            "Foutou banane ou igname",
            "Tô / Plakali",
            "Riz blanc chaud"
        ],
        practicalTips: [
            "Cuisez toujours la sauce gombo à DÉCOUVERT : fermer le couvercle détruit l'élasticité et fait perdre sa belle couleur verte au gombo.",
            "Une minuscule pincée de bicarbonate de soude garantit une texture ultra-filante et un vert émeraude spectaculaire.",
            "L'Iru / Afiti est indispensable : son goût de fermentation noble apporte la touche authentique des terroirs côtiers."
        ],
        intro: "L'élasticité gourmande du gombo mariée aux saveurs profondes du poisson fumé et de l'huile de palme.",
        description: "La sauce Gombo est appréciée pour sa texture \"gluante\" (mucilagineuse), signe de fraîcheur et de qualité. C'est l'une des sauces les plus anciennes et les plus répandues sur le continent, chaque région y apportant sa touche, du poisson fumé au crabe frais.",
        relatedRecipes: ["gumbo","callaloo","cou-cou-flying-fish"]
    },
    {
        id: 'kedjenou',
        title: 'Kédjénou de Poulet',
        origin: 'Côte d\'Ivoire',
        region: 'Afrique',
        image: '/images/kedjenou-de-poulet.webp',
        prepTime: 20,
        cookTime: 50,
        servings: 4,
        difficulty: 'Moyen',
        ingredients: [
            { name: "Poulet fermier ou poulet bicyclette entier découpé en morceaux", quantity: "1.2kg" },
            { name: "Aubergines africaines rondes (amères ou douces)", quantity: "3" },
            { name: "Tomates fraîches fermes découpées en quartiers", quantity: "4" },
            { name: "Gros oignons émincés en lamelles", quantity: "3" },
            { name: "Gousses d'ail entières pelées", quantity: "6" },
            { name: "Gingembre frais coupé en fines lamelles", quantity: "3cm" },
            { name: "Piments frais entiers intacts", quantity: "2" },
            { name: "Feuilles de laurier", quantity: "3" },
            { name: "Branches de thym frais", quantity: "3" },
            { name: "Feuille de bananier propre (ou feuille d'aluminium pour fermer hermétiquement)", quantity: "1" },
            { name: "Sel fin et grains de poivre noir concassés", quantity: "Au goût" }
        ],
        utensils: [
            "Canari en terre cuite traditionnelle (ou cocotte en fonte lourde à couvercle hermétique)",
            "Torchon pour secouer"
        ],
        steps: [
            { order: 1, description: "Assaisonnement à cru du poulet : Dans un grand saladier, assaisonner les morceaux de poulet avec du sel, le poivre noir concassé, la moitié de l'ail et du gingembre râpé. Masser la chair à la main.", duration: 5 },
            { order: 2, description: "L'assemblage à sec (AUCUNE GOUTTE D'EAU, AUCUNE HUILE) : Dans le canari ou la cocotte en fonte, disposer au fond les morceaux de poulet assaisonnés. Recouvrir avec les oignons émincés, les quartiers de tomates fraîches, les aubergines africaines coupées en deux, les gousses d'ail entières et les lamelles de gingembre restantes. Glisser les branches de thym et les feuilles de laurier. Poser les 2 piments entiers au sommet.", duration: 5 },
            { order: 3, description: "Le scellement hermétique : Couvrir l'ouverture du canari avec une feuille de bananier flambée (ou une double épaisseur de papier aluminium), puis rabattre le couvercle lourd par-dessus. La vapeur doit être totalement emprisonnée pour que le poulet et les légumes cuisent dans leur propre jus.", duration: 3 },
            { order: 4, description: "La cuisson magique et le rituel du secouage : Placer le récipient sur feu moyen-doux pendant 10 minutes pour que les sucs commencent à s'extraire. Ensuite, toutes les 8 à 10 minutes, saisir la cocotte avec un torchon épais en maintenant fermement le couvercle, et la secouer vigoureusement par mouvements circulaires : ce geste mélange les ingrédients, empêche le poulet d'accrocher et émulsionne le jus de cuisson avec la pulpe de tomate et d'oignon.", duration: 45 },
            { order: 5, description: "Ouverture et dégustation : Après 45 à 50 minutes de cuisson rythmée par les secousses, retirer du feu. Découvrir avec précaution : un bouillon doré, limpide, immensément parfumé s'est formé comme par enchantement sans le moindre ajout d'eau.", duration: 2 }
        ],
        suggestedAccompaniments: [
            "Attiéké ivoirien frais",
            "Riz blanc nature",
            "Foutou banane"
        ],
        practicalTips: [
            "Règle d'or absolue du Kédjénou : N'AJOUTEZ JAMAIS D'EAU NI D'HUILE. Le poulet fermier et la montagne de légumes rendent naturellement un bouillon succulent et abondant.",
            "Secouez régulièrement la cocotte sans JAMAIS l'ouvrir pendant la cuisson pour préserver toute l'humidité aromatique à l'intérieur.",
            "Si vous utilisez une cocotte en fonte classique, assurez-vous que le couvercle est bien hermétique en glissant une feuille d'aluminium entre le bord et le couvercle."
        ],
        intro: "Le secret le mieux gardé de la Côte d'Ivoire : un étouffé de poulet où les arômes restent prisonniers de la vapeur.",
        description: "Le nom \"Kédjénou\" vient du baoulé et signifie \"secouer\". La tradition veut qu'on cuise le poulet dans un canari d'argile hermétiquement fermé, en le secouant vigoureusement pour que la viande ne colle pas. C'est une cuisson à l'étouffée pure, sans ajout d'eau."
    },
    {
        id: 'moambe-chicken',
        title: 'Poulet à la Moambe',
        origin: 'Congo',
        region: 'Afrique',
        image: '/images/poulet-a-la-moambe.webp',
        prepTime: 25,
        cookTime: 55,
        servings: 4,
        difficulty: 'Moyen',
        ingredients: [
            { name: "Poulet fermier coupé en morceaux", quantity: "1.2kg" },
            { name: "Sauce graine pure (pulpe de fruits du palmier à huile) fraîche ou en conserve", quantity: "400g" },
            { name: "Gros oignons rouges hachés", quantity: "2" },
            { name: "Gousses d'ail pilées", quantity: "5" },
            { name: "Gingembre frais râpé", quantity: "2cm" },
            { name: "Piments frais entiers", quantity: "2" },
            { name: "Feuilles de laurier", quantity: "2" },
            { name: "Huile végétale pour dorer", quantity: "2 c.à.s" },
            { name: "Eau tiède", quantity: "400ml" },
            { name: "Sel et poivre noir", quantity: "Au goût" }
        ],
        utensils: [
            "Grande marmite en fonte",
            "Spatule en bois"
        ],
        steps: [
            { order: 1, description: "Marinade et assaisonnement du poulet : Saler et poivrer les morceaux de poulet avec la moitié de l'ail pilé et du gingembre râpé. Laisser reposer 15 minutes.", duration: 15 },
            { order: 2, description: "Dorure du poulet : Dans la marmite, chauffer les 2 cuillères d'huile. Faire dorer les morceaux de poulet sur feu vif pendant 8 à 10 minutes jusqu'à belle coloration ambrée. Retirer la viande.", duration: 10 },
            { order: 3, description: "Sueur des oignons : Dans les sucs de cuisson du poulet, ajouter les oignons hachés, le reste d'ail et de gingembre. Faire suer 3 minutes à feu moyen.", duration: 3 },
            { order: 4, description: "Cuisson de la Moambe : Ajouter la pulpe de noix de palme (moambe) et verser 400 ml d'eau tiède en délayant soigneusement à la spatule en bois. Ajouter les feuilles de laurier et porter à frémissement.", duration: 5 },
            { order: 5, description: "Mijotage lent et réduction : Réintroduire les morceaux de poulet dorés dans la sauce rouge onctueuse. Poser les 2 piments entiers dessus. Couvrir et laisser mijoter à feu doux pendant 35 minutes en remuant de temps en temps. La sauce doit épaissir, napper la cuillère et une belle huile rouge doit se détacher doucement.", duration: 35 }
        ],
        suggestedAccompaniments: [
            "Chikwangue congolaise (bâton de manioc)",
            "Fufu",
            "Riz blanc",
            "Feuilles de manioc (Saka-Saka)"
        ],
        practicalTips: [
            "Remuez régulièrement le fond de la marmite : la pulpe de palme est riche et a tendance à caraméliser au fond si le feu est trop fort.",
            "Accompagnez traditionnellement ce plat d'une portion de Saka-Saka et de bananes plantains bouillies pour un festin congolais complet."
        ],
        intro: "L'onctuosité rougeoyante de la noix de palme enveloppant chaque morceau de poulet pour un réconfort ancestral.",
        description: "Le Poulet à la Moambe est souvent cité comme le plat national du Congo. La \"moambe\" désigne la pulpe de noix de palme, une base riche et onctueuse qui symbolise la générosité de la terre. C'est un plat de fête, de famille et de réconciliation."
    },
    {
        id: 'attieke-poisson',
        title: 'Attiéké-Poisson',
        origin: 'Côte d\'Ivoire',
        region: 'Afrique',
        image: '/images/attieke-poisson-braise.webp',
        prepTime: 20,
        cookTime: 25,
        servings: 2,
        difficulty: 'Facile',
        ingredients: [
            { name: "Attiéké de qualité supérieure", quantity: "500g" },
            { name: "Poissons entiers nettoyés et écaillés (Tilapia, Capitaine ou Dorade)", quantity: "2" },
            { name: "Oignons rouges", quantity: "2" },
            { name: "Tomates fraîches bien fermes", quantity: "2" },
            { name: "Piments frais rouges et verts", quantity: "2" },
            { name: "Gousses d'ail hachées", quantity: "4" },
            { name: "Gingembre frais râpé", quantity: "1 c.à.s" },
            { name: "Jus de citron vert", quantity: "2 citrons" },
            { name: "Huile de friture ou d'assaisonnement", quantity: "300ml" },
            { name: "Vinaigre blanc ou de cidre", quantity: "1 c.à.s" },
            { name: "Sel fin et poivre noir", quantity: "Au goût" }
        ],
        utensils: [
            "Couscoussier ou passoire pour vapeur",
            "Poêle à frire ou grille de barbecue",
            "Bol pour la sauce Moyo"
        ],
        steps: [
            { order: 1, description: "Entaille et marinade du poisson : Pratiquer 3 incisions profondes sur chaque face des poissons. Les frotter généreusement à l'intérieur et à l'extérieur avec le jus d'un citron vert, l'ail haché, le gingembre râpé, 1 cuillère à café de sel et du poivre. Laisser mariner 15 minutes.", duration: 15 },
            { order: 2, description: "Préparation de la sauce Moyo fraîche : Découper 1 oignon et les 2 tomates en très petits dés réguliers. Émincer finement 1 piment. Dans un bol, mélanger ces crudités avec le jus du deuxième citron vert, 1 cuillère à soupe de vinaigre, 2 cuillères à soupe d'huile et une pincée de sel. Réserver au frais.", duration: 8 },
            { order: 3, description: "Friture ou braisage du poisson : Chauffer l'huile de friture à feu vif (ou préparer les braises du barbecue). Déposer les poissons égouttés et les cuire 6 à 8 minutes par face jusqu'à ce que la peau soit croustillante et bien dorée, et la chair cuite à l'arête.", duration: 15 },
            { order: 4, description: "Réchauffage de l'Attiéké : Égrener l'Attiéké à la main pour le décompacter. Le chauffer à la vapeur dans un couscoussier pendant 5 minutes pour qu'il devienne tiède, moelleux et gonflé.", duration: 5 },
            { order: 5, description: "Dressage harmonieux : Dresser l'Attiéké en dôme sur le plat de service, déposer le poisson croustillant à côté et napper généreusement de sauce Moyo fraîche aux oignons et tomates croquants.", duration: 2 }
        ],
        suggestedAccompaniments: [
            "Alloco (bananes plantains frites)",
            "Sauce piment noir Shito ou pâte de piment",
            "Jus de gingembre"
        ],
        practicalTips: [
            "L'équilibre parfait réside dans le contraste : le poisson doit être brûlant et croustillant, l'attiéké moelleux et chaud, et la sauce Moyo bien fraîche et acidulée."
        ],
        intro: "Le craquant d'un poisson frit à la perfection contre la douceur d'un attiéké vapeur, relevés par une sauce moyo éclatante.",
        description: "Le duo Attiéké-Poisson est l'équilibre parfait de la cuisine ivoirienne. L'attiéké, une semoule de manioc fermentée, apporte une légère acidité qui vient rompre le gras du poisson frit. C'est le repas de midi par excellence à Abidjan."
    },
    {
        id: 'fufu-light-soup',
        title: "Fufu & Light Soup",
        origin: "Ghana",
        region: "Afrique",
        image: "/images/fufu light soup.webp",
        prepTime: 35,
        cookTime: 50,
        servings: 4,
        difficulty: "Difficile",
        ingredients: [
            { name: "Manioc frais épluché", quantity: "500g" },
            { name: "Bananes plantains vertes épluchées", quantity: "500g" },
            { name: "Viande de chèvre (ou bœuf/poulet)", quantity: "600g" },
            { name: "Tomates fraîches bien mûres", quantity: "4" },
            { name: "Aubergines africaines de jardin (Garden eggs)", quantity: "4" },
            { name: "Gros oignons", quantity: "3" },
            { name: "Piments Scotch Bonnet frais", quantity: "3" },
            { name: "Gousses d'ail pilées", quantity: "5" },
            { name: "Gingembre frais râpé", quantity: "3cm" },
            { name: "Concentré de tomate", quantity: "1 c.à.s" },
            { name: "Eau pour le bouillon", quantity: "1.2L" },
            { name: "Sel fin", quantity: "Au goût" }
        ],
        utensils: [
            "Grand mortier et pilon en bois (ou robot à fufu)",
            "Grande marmite",
            "Passoire fine ou tamis"
        ],
        steps: [
            { order: 1, description: "Assaisonnement de la viande : Dans la marmite, déposer les morceaux de chèvre avec la moitié de l'ail, du gingembre, 1 oignon émincé et 1 cuillère à café de sel. Faire suer à feu moyen pendant 10 minutes pour que la viande rende son jus parfumé.", duration: 10 },
            { order: 2, description: "La cuisson des légumes de la Light Soup : Ajouter les tomates entières, 2 oignons entiers pelés, les aubergines africaines et les piments entiers dans la marmite avec la viande. Couvrir avec 1.2 litre d'eau tiède. Porter à ébullition et cuire 20 minutes jusqu'à ce que les légumes soient très tendres.", duration: 20 },
            { order: 3, description: "Le filtrage de la soupe légère (Light Soup) : Retirer les tomates, oignons, aubergines et piments cuits avec une écumoire. Les mixer finement au robot puis les passer au tamis directement au-dessus de la marmite pour ne garder qu'un bouillon rouge velouté sans pépins ni peaux. Ajouter la cuillère de concentré de tomate et laisser mijoter à feu doux 20 minutes : la soupe doit être légère, limpide et parfumée.", duration: 20 },
            { order: 4, description: "Cuisson des tubercules pour le Fufu : Dans une casserole séparée, faire bouillir les morceaux de manioc et de plantain vert dans de l'eau salée pendant 20 minutes jusqu'à ce qu'une fourchette s'y enfonce sans résistance. Égoutter chaud.", duration: 20 },
            { order: 5, description: "Le rituel du pilage du Fufu : Piler d'abord le manioc chaud au mortier avec des mouvements vigoureux et rythmés jusqu'à disparition complète des morceaux. Incorporer le plantain vert chaud et continuer de piler en arrosant d'un filet d'eau tiède pour former une pâte élastique, soyeuse et sans aucun grumeau. Façonner des boules lisses.", duration: 15 },
            { order: 6, description: "Le dressage traditionnel : Déposer une boule de Fufu luisante au centre d'un bol profond et verser la Light Soup brûlante tout autour avec les morceaux de viande de chèvre. Déguster traditionnellement à la main en avalant la bouchée sans la mâcher.", duration: 2 }
        ],
        suggestedAccompaniments: [
            "Se déguste seul comme plat royal",
            "Jus de gingembre maison"
        ],
        practicalTips: [
            "Passez impérativement la purée de légumes au tamis : c'est ce qui donne à la \"Light Soup\" sa texture fluide et aérienne si réconfortante.",
            "Le manioc et le plantain doivent être pilés immédiatement à la sortie de l'eau de cuisson encore très chauds, sinon ils durcissent et font des grumeaux."
        ],
        intro: "Une boule de fufu lisse et élastique nichée dans un océan de soupe légère et épicée : le cœur battant de la cuisine ghanéenne.",
        description: "Bouillir les légumes et mixer pour la soupe.",
        relatedRecipes: ['mofongo', 'sancocho']
    },
        {
        id: 'efo-riro',
        title: "Efo Riro",
        origin: "Nigeria",
        region: "Afrique",
        image: "/images/efo riro.webp",
        prepTime: 20,
        cookTime: 35,
        servings: 4,
        difficulty: "Moyen",
        ingredients: [
            { name: "Feuilles d'épinards frais (ou Shoko / Tete / Feuilles de blette)", quantity: "600g" },
            { name: "Huile de palme rouge pure", quantity: "1/3 tasse" },
            { name: "Graines de caroube fermentées (Iru / Dawadawa)", quantity: "2 c.à.s" },
            { name: "Viandes mixtes cuites (bœuf, tripes shaki, queue de bœuf)", quantity: "400g" },
            { name: "Poisson fumé nettoyé et effiloché", quantity: "150g" },
            { name: "Poudre de crevettes séchées (crayfish)", quantity: "3 c.à.s" },
            { name: "Poivrons rouges doux (Tatashe)", quantity: "3" },
            { name: "Piments Scotch Bonnet (Atarodo)", quantity: "2" },
            { name: "Oignons rouges", quantity: "2" },
            { name: "Gousses d'ail hachées", quantity: "4" },
            { name: "Bouillon de viande réduit", quantity: "150ml" },
            { name: "Sel fin", quantity: "Au goût" }
        ],
        utensils: [
            "Mixeur à impulsions",
            "Grande marmite",
            "Passoire"
        ],
        steps: [
            { order: 1, description: "Le blanchiment express des épinards : Laver soigneusement les épinards. Les plonger 1 minute dans de l'eau bouillante, puis les égoutter immédiatement et les rincer à l'eau glacée pour stopper la cuisson. Bien presser les feuilles pour retirer un maximum d'eau résiduelle et les hacher grossièrement.", duration: 5 },
            { order: 2, description: "La pâte de poivrons concassée : Mixer grossièrement les poivrons rouges, 1 oignon et les piments Scotch Bonnet par courtes impulsions pour obtenir un hachis granuleux (ne pas en faire une purée lisse liquide). Égoutter dans une passoire pour retirer l'excédent d'eau.", duration: 5 },
            { order: 3, description: "La friture aromatique à l'Iru : Dans la marmite, chauffer l'huile de palme rouge à feu moyen. Ajouter le deuxième oignon émincé et les 2 cuillères d'Iru. Faire frire pendant 2 minutes : un parfum intense de terroir yoruba doit se dégager.", duration: 3 },
            { order: 4, description: "La réduction de la sauce : Verser le hachis de poivrons et l'ail haché dans l'huile de palme. Faire frire à feu moyen-vif en remuant pendant 12 minutes jusqu'à ce que la sauce réduise, fonce et que l'huile de palme commence à remonter en surface.", duration: 12 },
            { order: 5, description: "Les viandes et saveurs marines (Obstacles) : Ajouter les viandes cuites assorties, le poisson fumé effiloché, la poudre de crevettes séchées et les 150 ml de bouillon de viande. Saler au goût. Laisser mijoter 8 minutes pour que les viandes s'imprègnent de la sauce aux poivrons.", duration: 8 },
            { order: 6, description: "La fusion verte : Incorporer les épinards blanchis et bien essorés dans la marmite. Mélanger intimement pour bien enrober les feuilles. Poursuivre la cuisson à feu doux pendant seulement 3 minutes sans couvrir : les épinards restent bien verts et la sauce est épaisse et non aqueuse. Servir chaud.", duration: 3 }
        ],
        suggestedAccompaniments: [
            "Amala (farine d'igname noire)",
            "Pounded Yam",
            "Eba (Garri)",
            "Riz blanc"
        ],
        practicalTips: [
            "Pressez absolument toute l'eau des épinards après les avoir blanchis : le secret d'un Efo Riro parfait est une sauce riche et épaisse, jamais noyée dans l'eau des légumes.",
            "Ne mixez pas les poivrons en purée liquide : laissez-les concassés avec de la texture pour garder le style yoruba authentique."
        ],
        intro: "Une explosion de textures où les épinards fondants rencontrent le parfum fumé des poissons séchés et la chaleur du piment rouge.",
        description: "L'Efo Riro est le ragoût de légumes le plus vénéré du peuple Yoruba du sud-ouest du Nigeria. Son nom signifie littéralement « légumes remués » en langue yoruba. Selon la tradition, ce plat ne se prépare pas comme une simple sauce mais comme une offrande royale, où les feuilles d'amarante ou d'épinards locaux (Shoko ou Tete) sont mariées à l'Iru (graines de néré fermentées / soumbala), au poisson séché fumé, aux écrevisses pilées et à l'huile de palme rouge pure. Dans les cosmogonies yorubas, ce mélange d'ingrédients de la terre, des fleuves et des forêts symbolise l'harmonie avec les orishas. C'est l'un des ragoûts fondateurs qui ont traversé l'Atlantique lors de la traite négrière pour donner naissance au Caruru à Bahia au Brésil et au Callaloo dans les Caraïbes, témoignant de la persistance indomptable de la mémoire culinaire africaine.",
    },
        {
        id: 'pepe-soup',
        title: "Pepe Soup",
        origin: "West Africa",
        region: "Afrique",
        image: "/images/pepe soup.webp",
        prepTime: 15,
        cookTime: 40,
        servings: 4,
        difficulty: "Facile",
        ingredients: [
            { name: "Poisson-chat frais en darnes épaisses (ou viande de chèvre coupée en petits morceaux)", quantity: "800g" },
            { name: "Mélange d'épices Pepe Soup (graines d'Ehuru torréfiées, graines de Sélim/Uda, baies d'Uziza)", quantity: "2 c.à.s" },
            { name: "Piments Scotch Bonnet hachés très finement", quantity: "2" },
            { name: "Gros oignon rouge finement émincé", quantity: "1" },
            { name: "Gousses d'ail pilées", quantity: "4" },
            { name: "Gingembre frais râpé", quantity: "2 c.à.s" },
            { name: "Feuilles d'Uziza fraîches ou feuilles de basilic africain ciselées", quantity: "1 petite poignée" },
            { name: "Poudre de crevettes séchées (crayfish)", quantity: "1 c.à.s" },
            { name: "Eau pour le bouillon", quantity: "1.2L" },
            { name: "Sel et poivre noir", quantity: "Au goût" }
        ],
        utensils: [
            "Marmite",
            "Mortier pour moudre les graines d'Ehuru et Uda"
        ],
        steps: [
            { order: 1, description: "Nettoyage et raffermissement du poisson : Laver délicatement les darnes de poisson-chat avec de l'eau tiède citronnée ou un filet de vinaigre pour retirer le film glissant de surface. Égoutter.", duration: 5 },
            { order: 2, description: "Préparation du bouillon aromatique corsé : Dans la marmite, verser 1.2 litre d'eau. Ajouter l'oignon finement émincé, l'ail pilé, le gingembre frais râpé, les piments Scotch Bonnet hachés, les 2 cuillères d'épices Pepe Soup moulues et les crevettes séchées. Saler au goût.", duration: 5 },
            { order: 3, description: "L'infusion bouillonante des épices forestières : Porter le bouillon à ébullition et laisser bouillir à feu moyen pendant 15 minutes afin que les principes actifs des graines d'Ehuru et d'Uda diffusent toutes leurs vertus chauffantes et leurs arômes poivrés.", duration: 15 },
            { order: 4, description: "Cuisson délicate du poisson : Baisser à feu doux. Déposer doucement les darnes de poisson-chat dans le bouillon frémissant. Cuire sans remuer brutalement pendant 12 à 15 minutes pour que la chair du poisson devienne fondante sans se briser.", duration: 15 },
            { order: 5, description: "La touche finale revigorante : Parsemer avec les feuilles d'Uziza ou de basilic africain ciselées. Laisser frémir 2 minutes supplémentaires. Couper le feu et servir le bouillon fumant dans des bols profonds.", duration: 3 }
        ],
        suggestedAccompaniments: [
            "Se savoure traditionnellement seul dans un bol fumant",
            "Bananes plantains mûres bouillies",
            "Igname bouillie"
        ],
        practicalTips: [
            "Si vous utilisez de la viande de chèvre au lieu du poisson, faites-la cuire 40 minutes dans le bouillon aromatique avant d'ajouter les herbes pour qu'elle soit bien tendre.",
            "Les graines d'Ehuru (fausse muscade) et d'Uda (graines de Sélim) sont le cœur médicinal de la Pepe Soup : elles apportent cette chaleur bienfaisante qui dégage les voies respiratoires."
        ],
        intro: "Une infusion brûlante et herbacée d'épices médicinales rares, véritable remède de grand-mère qui réchauffe le corps et l'âme.",
        description: "La Pepe Soup (ou Pepper Soup) est la reine des bouillons réconfortants d'Afrique de l'Ouest et du Golfe de Guinée, partagée du Nigeria au Ghana, en passant par le Cameroun et la Côte d'Ivoire. Bien plus qu'un simple repas, c'est une décoction médicinale millénaire préparée pour requinquer les femmes venant d'accoucher, soigner les coups de froid ou célébrer les retrouvailles nocturnes dans les maquis populaires. Son secret réside dans son mélange d'épices ancestrales torréfiées : l'Uda (poivre de Selim), l'Ehuru (fausse muscade africaine), l'Uziza (poivre noir d'Afrique de l'Ouest) et le piment rouge brûlant. Ce bouillon limpide mais foudroyant d'arômes a inspiré les soupes pimentées des marins et esclaves de la Caraïbe, rappelant que chaque gorgée est un rituel de guérison hérité des forêts tropicales.",
    },
        {
        id: 'kanda',
        title: "Kanda (Boulettes)",
        origin: "RCA",
        region: "Afrique",
        image: "/images/kanda.webp",
        prepTime: 35,
        cookTime: 35,
        servings: 4,
        difficulty: "Moyen",
        ingredients: [
            { name: "Graines de courge (pistache africaine) décortiquées et moulues très finement", quantity: "2 tasses (250g)" },
            { name: "Viande de bœuf hachée fraîche (ou chair de poisson blanc hachée)", quantity: "400g" },
            { name: "Oignons rouges finement hachés", quantity: "2" },
            { name: "Gousses d'ail pilées", quantity: "4" },
            { name: "Gingembre frais râpé", quantity: "1 c.à.s" },
            { name: "Piment frais haché", quantity: "1" },
            { name: "Tomates fraîches concassées", quantity: "4" },
            { name: "Concentré de tomate", quantity: "2 c.à.s" },
            { name: "Huile végétale", quantity: "3 c.à.s" },
            { name: "Feuilles de laurier", quantity: "2" },
            { name: "Eau tiède ou bouillon", quantity: "500ml" },
            { name: "Sel et poivre", quantity: "Au goût" }
        ],
        utensils: [
            "Grand bol pour mélanger les boulettes",
            "Grande sauteuse ou marmite"
        ],
        steps: [
            { order: 1, description: "La farce des boulettes Kanda : Dans un grand saladier, combiner la poudre fine de graines de courge avec la viande de bœuf hachée, la moitié des oignons hachés, l'ail pilé, le gingembre râpé, 1 cuillère à café de sel et une pincée de poivre. Malaxer fermement avec les mains pour obtenir une pâte homogène et dense.", duration: 10 },
            { order: 2, description: "Le façonnage des boulettes : Prélever des portions de pâte et rouler entre vos paumes pour former des boulettes régulières de la taille d'une balle de golf. Bien compacter chaque boulette pour qu'elle garde sa tenue à la cuisson.", duration: 10 },
            { order: 3, description: "La sauce tomate rissolée : Dans la sauteuse, chauffer l'huile végétale. Faire dorer le reste d'oignons pendant 3 minutes. Ajouter le concentré de tomate et faire frire 3 minutes pour casser l'acidité, puis ajouter les tomates fraîches concassées, le piment haché et les feuilles de laurier. Cuire 5 minutes.", duration: 8 },
            { order: 4, description: "Le mouillage : Verser les 500 ml d'eau tiède dans la sauce tomate. Saler légèrement et porter à frémissement doux.", duration: 3 },
            { order: 5, description: "Le pochage délicat des boulettes : Déposer délicatement les boulettes de Kanda crues une à une dans la sauce tomate frémissante sans les superposer. Couvrir la cocotte et laisser mijoter à feu doux pendant 25 minutes sans remuer avec une cuillère (secouer doucement la sauteuse par les poignées) pour ne pas casser les boulettes : elles vont cuire à cœur, gonfler et s'imbiber de sauce tomate.", duration: 25 }
        ],
        suggestedAccompaniments: [
            "Boules de manioc ou Fufu",
            "Riz blanc chaud",
            "Bananes plantains bouillies"
        ],
        practicalTips: [
            "Ne remuez jamais les boulettes avec une spatule métallique pendant les 15 premières minutes de cuisson : secouez simplement la marmite pour faire rouler les boulettes dans la sauce."
        ],
        intro: "Des boulettes fondantes de viande et de graines de courge torréfiées, bercées dans une sauce tomate parfumée de Centrafrique.",
        description: "Le Kanda (ou Kanda ti Nyma) est le plat de fête et de convivialité par excellence de la République Centrafricaine et du bassin de l'Oubangui. Son secret réside dans l'utilisation généreuse des graines de courge séchées et moulues (Egusi / Pistache africaine), qui remplacent la farine pour lier et attendrir la viande hachée de bœuf. Roulées à la main avec de l'ail pilé, du piment et des herbes locales, ces boulettes mijotent doucement dans une sauce tomate veloutée à l'huile rouge. C'est le repas dominical qui rassemble les grandes familles à Bangui, célébrant la richesse des récoltes vivrières des savanes centrafricaines.",
    },
        {
        id: 'liboke',
        title: "Liboke",
        origin: "Congo",
        region: "Afrique",
        image: "/images/Liboke.webp",
        prepTime: 25,
        cookTime: 40,
        servings: 2,
        difficulty: "Moyen",
        ingredients: [
            { name: "Beaux morceaux de poisson frais d'eau douce (Capitaine, Tilapia ou Silure)", quantity: "600g" },
            { name: "Tomates fraîches bien mûres épépinées et concassées", quantity: "2" },
            { name: "Oignons rouges émincés finement", quantity: "2" },
            { name: "Ciboulette fraîche ou ciboule africaine hachée", quantity: "1 bouquet" },
            { name: "Gousses d'ail pilées", quantity: "4" },
            { name: "Gingembre frais râpé", quantity: "1 c.à.s" },
            { name: "Jus de citron vert frais", quantity: "1 citron" },
            { name: "Piment Scotch Bonnet entier ou émincé", quantity: "1" },
            { name: "Huile végétale raffinée", quantity: "2 c.à.s" },
            { name: "Feuilles de bananier nettoyées et assouplies au feu", quantity: "4 grandes feuilles" },
            { name: "Ficelle de cuisine ou lanières de tige de bananier", quantity: "Pour fermer" },
            { name: "Sel fin et poivre noir", quantity: "Au goût" }
        ],
        utensils: [
            "Feuilles de bananier",
            "Barbecue sur braises douces ou four traditionnel à 200°C",
            "Plat à rôtir"
        ],
        steps: [
            { order: 1, description: "Préparation et assouplissement des feuilles de bananier : Passer rapidement les feuilles de bananier au-dessus de la flamme vive du gaz ou sur une plaque chaude pendant quelques secondes : la chaleur assouplit instantanément la fibre végétale et empêche les feuilles de se déchirer lors du pliage.", duration: 5 },
            { order: 2, description: "La marinade végétale forestière : Dans un saladier, mélanger les tomates concassées, les oignons émincés, la ciboulette hachée, l'ail, le gingembre, le jus de citron, l'huile, le sel et le poivre.", duration: 5 },
            { order: 3, description: "L'enrobage du poisson : Assaisonner les morceaux de poisson avec du sel et les mélanger délicatement à la marinade pour que chaque darne soit richement enveloppée d'aromates.", duration: 5 },
            { order: 4, description: "Le pliage hermétique du Liboke : Superposer 2 feuilles de bananier en croix pour doubler le fond. Déposer au centre les morceaux de poisson avec toute leur marinade et glisser le piment. Replier les feuilles vers le haut pour former une bourse hermétique, puis ficeler fermement avec la ficelle de cuisson pour emprisonner toute la vapeur et les sucs.", duration: 10 },
            { order: 5, description: "La cuisson fumée à l'étouffée : Placer la papillote sur les braises d'un barbecue (ou dans un plat au four à 200°C) pendant 35 à 40 minutes en retournant le paquet à mi-cuisson. Les feuilles de bananier extérieures vont brunir et toaster en diffusant leur parfum végétal unique.", duration: 40 },
            { order: 6, description: "Ouverture théâtrale : Couper la ficelle et ouvrir le Liboke à table devant les convives : un nuage de vapeur parfumée s'échappe révélant un poisson ultra-fondant confit dans son propre jus.", duration: 2 }
        ],
        suggestedAccompaniments: [
            "Chikwangue (pain de manioc)",
            "Bananes plantains bouillies ou frites"
        ],
        practicalTips: [
            "Passez impérativement les feuilles de bananier sur la flamme avant de plier : c'est le secret pour qu'elles deviennent souples comme du tissu sans se fendre."
        ],
        intro: "La quintessence du fleuve Congo : des poissons d'eau douce cuits à l'étouffée dans la vapeur bienfaisante des feuilles de marantacée.",
        description: "Le Liboke (ou Liboké) est une technique de cuisson ancestrale des peuples riverains du majestueux fleuve Congo et de ses affluents (notamment les Bangala et les Bobangi). Le mot désigne la papillote végétale confectionnée à partir des larges feuilles cireuses de Marantacée (Megaphrynium macrostachyum), résistantes aux braises vives. Le poisson frais d'eau douce (capitaine, silure ou tilapia) y est enfermé hermétiquement avec des tomates fraîches, des oignons doux, de l'ail, du gingembre et un piment habanero entier. Posé directement sur la cendre chaude ou la grille du feu de bois, le poisson cuit dans ses propres sucs sans aucune goutte d'huile ajoutée, imprégné du parfum herbacé et légèrement vanillé que la feuille chauffée libère. C'est l'un des modes de cuisson les plus sains, écologiques et purs au monde.",
    },
        {
        id: 'gumbo',
        title: "Gumbo",
        origin: "Louisiane, États-Unis",
        region: "Amérique du Nord",
        image: "/images/gumbo.webp",
        prepTime: 30,
        cookTime: 75,
        servings: 6,
        difficulty: "Moyen",
        ingredients: [
            { name: "Gombos frais coupés en rondelles", quantity: "400g" },
            { name: "Cuisses de poulet désossées et coupées en morceaux", quantity: "500g" },
            { name: "Saucisse fumée Andouille cajun (ou saucisse fumée artisanale) en rondelles", quantity: "250g" },
            { name: "Crevettes crues décortiquées (optionnel)", quantity: "250g" },
            { name: "Farine de blé (pour le roux brun)", quantity: "1/2 tasse (70g)" },
            { name: "Huile végétale neutre", quantity: "1/2 tasse (120ml)" },
            { name: "La Sainte Trinité : Gros oignon jaune haché", quantity: "1" },
            { name: "La Sainte Trinité : Branches de céleri hachées", quantity: "2" },
            { name: "La Sainte Trinité : Poivron vert haché en dés", quantity: "1" },
            { name: "Gousses d'ail hachées", quantity: "5" },
            { name: "Bouillon de volaille chaud", quantity: "1.5L" },
            { name: "Feuilles de laurier", quantity: "3" },
            { name: "Thym séché", quantity: "1 c.à.s" },
            { name: "Assaisonnement cajun (paprika, ail, origan, piment de Cayenne)", quantity: "1 c.à.s" },
            { name: "Sel et poivre noir", quantity: "Au goût" }
        ],
        utensils: [
            "Grande cocotte en fonte émaillée à fond épais",
            "Fouet en métal",
            "Cuillère en bois"
        ],
        steps: [
            { order: 1, description: "Saisie des viandes : Dans la cocotte, faire dorer les rondelles d'andouille fumée et les morceaux de poulet pendant 6 minutes. Retirer les viandes et réserver en laissant les sucs parfumés.", duration: 8 },
            { order: 2, description: "La masterclass du roux brun (Dark Roux) : Verser l'huile et la farine dans la cocotte à feu moyen-doux. Fouetter CONTINUELLEMENT sans s'arrêter pendant 18 à 22 minutes : la farine va passer du blond au caramel, puis prendre une couleur chocolat noir profond et dégager une odeur toastée de noisette. Ne quittez pas la cocotte des yeux.", duration: 20 },
            { order: 3, description: "L'arrêt du roux par la Sainte Trinité : Dès que le roux atteint la couleur chocolat noir, jeter immédiatement l'oignon, le céleri et le poivron vert hachés avec l'ail. Le crépitement des légumes arrête la cuisson du roux et l'empêche de brûler. Faire suer 5 minutes en remuant.", duration: 5 },
            { order: 4, description: "Le mouillage au bouillon : Verser progressivement le bouillon de volaille chaud en fouettant vigoureusement pour lier le roux sans former de grumeaux. Ajouter le thym, les feuilles de laurier et les épices cajun.", duration: 5 },
            { order: 5, description: "Mijotage lent : Réintroduire l'andouille et le poulet dorés. Laisser mijoter à feu doux pendant 30 minutes en écumant si nécessaire.", duration: 30 },
            { order: 6, description: "Ajout du gombo et des crevettes : Ajouter les rondelles de gombo frais (qui vont épaissir naturellement le gumbo) et les crevettes décortiquées. Poursuivre la cuisson à feu doux pendant 15 minutes. Servir dans des bols creux sur une boule de riz blanc créole.", duration: 15 }
        ],
        suggestedAccompaniments: [
            "Riz blanc créole à grains longs",
            "Pain de maïs chaud (Cornbread)",
            "Sauce pimentée louisianaise"
        ],
        practicalTips: [
            "Le secret absolu du Gumbo réside dans la patience du roux : il doit être couleur chocolat noir pour apporter cette note torréfiée inimitable. S'il brûle (points noirs), jetez-le et recommencez.",
            "Le gombo apporte le liant naturel du plat tout en rendant hommage à ses origines africaines (\"ki ngombo\")."
        ],
        intro: "Une soupe sombre et profonde, née de la patience infinie d\\'un roux chocolaté et du chant des gombos.",
        description: "Préparer un roux brun : faire cuire farine et huile à feu moyen en remuant constamment jusqu\\'à couleur chocolat.",
        relatedRecipes: ['sauce-gombo', 'callaloo', 'cou-cou-flying-fish']
    },

    // ────────────────────────────────────────────────
    //  JAMBALAYA (Louisiane)
    // ────────────────────────────────────────────────
    {
        id: "jambalaya",
        title: "Jambalaya",
        origin: "Louisiane, États-Unis",
        region: "Amérique du Nord",
        image: "/images/jambalaya.webp",
        prepTime: 20,
        cookTime: 45,
        servings: 6,
        difficulty: "Moyen",
        tags: ["viande", "volaille", "poisson-fruits-de-mer"],
        ingredients: [
            { name: "Riz à grains longs", quantity: "400g" },
            { name: "Poulet (cuisses désossées en morceaux)", quantity: "400g" },
            { name: "Saucisse Andouille fumée", quantity: "250g" },
            { name: "Crevettes décortiquées", quantity: "200g" },
            { name: "Tomates concassées", quantity: "400g (1 boîte)" },
            { name: "Poivron vert", quantity: "1" },
            { name: "Poivron rouge", quantity: "1" },
            { name: "Céleri (branches émincées)", quantity: "3" },
            { name: "Oignons", quantity: "2" },
            { name: "Ail haché", quantity: "4 gousses" },
            { name: "Bouillon de volaille", quantity: "800ml" },
            { name: "Épices Cajun / Créole", quantity: "2 c.à.s" },
            { name: "Thym frais", quantity: "2 branches" },
            { name: "Feuilles de laurier", quantity: "2" },
            { name: "Huile végétale", quantity: "3 c.à.s" },
            { name: "Sauce Worcestershire", quantity: "1 c.à.s" },
            { name: "Sauce piquante (Tabasco)", quantity: "à goût" },
            { name: "Sel et poivre noir", quantity: "à goût" },
            { name: "Oignons verts (ciboulette)", quantity: "pour garnir" }
        ],
        utensils: [
            "Grande cocotte ou faitout en fonte (5L)",
            "Planche à découper",
            "Couteau chef",
            "Cuillère en bois",
            "Mesurette"
        ],
        steps: [
            {
                order: 1,
                description: "Préparation de la Sainte Trinité Cajun : Émincer finement les oignons, le céleri et les poivrons. Hacher l'ail. Couper le poulet en cubes de 3 cm, la saucisse andouille en rondelles biseautées.",
                duration: 15
            },
            {
                order: 2,
                description: "Coloration des viandes : Faire chauffer l'huile à feu vif dans la cocotte. Saisir le poulet assaisonné d'épices cajun jusqu'à coloration dorée (5 min). Réserver. Faire revenir les rondelles de saucisse jusqu'à légère caramélisation. Réserver avec le poulet.",
                duration: 10
            },
            {
                order: 3,
                description: "Construction du fond aromatique : Dans les sucs de cuisson, faire suer la sainte trinité (oignon, poivron, céleri) à feu moyen pendant 8 minutes. Ajouter l'ail, cuire 1 minute. Incorporer les tomates concassées, la sauce Worcestershire et les feuilles de laurier. Mijoter 5 minutes.",
                duration: 15
            },
            {
                order: 4,
                description: "Incorporation du riz : Verser le riz non rincé dans la cocotte, enrober de la base aromatique pendant 2 minutes. Remettre les viandes réservées. Verser le bouillon bouillant, ajuster le sel et les épices cajun. Porter à ébullition.",
                duration: 5
            },
            {
                order: 5,
                description: "Cuisson à couvert : Réduire à feu doux, couvrir hermétiquement et cuire 20 minutes sans soulever le couvercle. Le riz doit absorber tout le bouillon.",
                duration: 20
            },
            {
                order: 6,
                description: "Finition aux crevettes : Découvrir, enfouir les crevettes dans le riz chaud, couvrir et laisser cuire 5 minutes hors du feu. Les crevettes cuisent à la chaleur résiduelle. Corriger l'assaisonnement, retirer les feuilles de laurier.",
                duration: 5
            },
            {
                order: 7,
                description: "Dressage festif : Servir directement dans la cocotte ou dans un grand plat. Garnir généreusement d'oignons verts émincés, de quelques gouttes de sauce piquante et de branches de thym.",
                duration: 3
            }
        ],
        suggestedAccompaniments: [
            "Cornbread (pain de maïs)",
            "Salade de chou créole (Coleslaw)",
            "Okra frit",
            "Bière blonde Cajun"
        ],
        practicalTips: [
            "Ne jamais rincer le riz avant la cuisson : l'amidon de surface est essentiel pour que les grains absorbent tous les arômes du fond.",
            "L'andouille fumée louisianaise est l'âme du plat. À défaut, utiliser une saucisse fumée de bonne qualité (Morteau, Montbéliard).",
            "Le vrai Jambalaya se prépare à la cocotte en fonte pour une chaleur homogène. Éviter les cocottes trop fines qui brûlent le fond.",
            "Pour un Jambalaya Créole plus rouge, doubler la quantité de tomates. Pour la version Cajun plus sèche, se passer des tomates."
        ],
        intro: "Dans la marmite louisianaise, l'Afrique rencontre l'Espagne — le Jambalaya est le Jollof Rice du Mississippi.",
        description: "Le Jambalaya est l'enfant métis de La Nouvelle-Orléans, ville où les cultures se sont heurtées, mélangées et sublimées comme nulle part ailleurs dans les Amériques. Son ancêtre le plus direct est le thiéboudienne — ou plus généralement le riz jollof — préparé par les peuples Wolof, Sérère et Mandé du Sénégal et de Gambie. La connexion linguistique est saisissante : le mot « jambalaya » contiendrait « djam » ou « jama » en wolof, signifiant « rassemblement » ou « fête », et « ya » rappelant des terminaisons de langues d'Afrique occidentale. Les esclaves sénégalais-wolof débarqués à La Nouvelle-Orléans au XVIIIe siècle étaient reconnus pour leur maîtrise de la culture du riz — une expertise qui fit la fortune de leurs maîtres louisianais. Dans les cuisines des grandes maisons créoles, ils recréèrent leur riz jollof en utilisant les ingrédients locaux : écrevisses, andouille cajun, crevettes du golfe, poivrons. Les Espagnols qui gouvernèrent brièvement la Louisiane y ajoutèrent leurs influences paella. Le résultat fut un plat qui porta toutes ces histoires à ébullition dans une seule marmite. Aujourd'hui, qu'il soit « Cajun » (sans tomate) ou « Créole » (avec tomate), le Jambalaya reste le plat de la rencontre — la preuve que la cuisine louisianaise est, dans ses racines les plus profondes, une cuisine africaine.",
        relatedRecipes: ["gumbo", "callaloo", "coucou-flying-fish", "hoppin-john"]
    },

{
        id: 'feijoada',
        title: "Feijoada",
        origin: "Brésil",
        region: "Amérique du Sud",
        image: "/images/feijoada.png",
        prepTime: 20,
        cookTime: 120,
        servings: 8,
        difficulty: "Moyen",
        ingredients: [
            { name: "Haricots noirs secs (Feijão preto)", quantity: "500g" },
            { name: "Viande de bœuf séchée (Carne-seca ou viande salée dessalée)", quantity: "300g" },
            { name: "Travers de porc (côtes) coupés en morceaux", quantity: "400g" },
            { name: "Saucisse fumée calabresa ou chorizo à cuire en rondelles", quantity: "250g" },
            { name: "Poitrine de porc fumée (bacon) taillée en lardons", quantity: "150g" },
            { name: "Oignons émincés", quantity: "2" },
            { name: "Gousses d'ail pilées", quantity: "6" },
            { name: "Feuilles de laurier", quantity: "4" },
            { name: "Orange entière bien lavée non traitée", quantity: "1" },
            { name: "Eau fraîche", quantity: "2L" },
            { name: "Farofa (farine de manioc grillée au beurre) pour le service", quantity: "200g" },
            { name: "Chou vert frisé émincé en lanières fines", quantity: "1 botte" },
            { name: "Sel et poivre", quantity: "Au goût" }
        ],
        utensils: [
            "Grande marmite en fonte",
            "Grande poêle pour la farofa et le chou"
        ],
        steps: [
            { order: 1, description: "Trempage et dessalage préalable : Faire tremper les haricots noirs dans l'eau froide pendant 8 heures. Dans un récipient séparé, faire dessaler la viande séchée dans de l'eau fraîche au réfrigérateur en changeant l'eau 3 fois.", duration: 480 },
            { order: 2, description: "Lancement de la cuisson des haricots : Égoutter et rincer les haricots. Les placer dans la grande marmite avec 2 litres d'eau fraîche, les feuilles de laurier et 1 orange entière coupée en deux (l'orange absorbe les graisses excédentaires et apporte une fraîcheur subtile). Porter à ébullition.", duration: 15 },
            { order: 3, description: "Ajout des viandes à longue cuisson : Ajouter les morceaux de bœuf séché dessalé et les travers de porc dans la marmite de haricots. Laisser mijoter à feu moyen-doux pendant 1 heure en écumant la surface.", duration: 60 },
            { order: 4, description: "Rissolage des saucisses et aromates (O Tempero) : Dans une poêle, faire dorer les lardons de poitrine fumée et les rondelles de saucisse calabresa. Ajouter les oignons émincés et l'ail pilé : faire revenir 4 minutes jusqu'à belle dorure aromatique.", duration: 8 },
            { order: 5, description: "Liaison de la Feijoada : Verser les saucisses, lardons, oignons et ail dorés dans la marmite de haricots. Prélever 2 louches de haricots cuits avec un peu de bouillon, les écraser en purée à la fourchette dans une assiette et les reverser dans la marmite : cette astuce traditionnelle lie la sauce pour la rendre veloutée et sombre.", duration: 5 },
            { order: 6, description: "Mijotage final et accompagnements : Laisser mijoter encore 30 minutes jusqu'à ce que toutes les viandes soient ultra-fondantes. Servir avec du riz blanc, des tranches d'orange fraîche, du chou vert sauté à l'ail et la Farofa croustillante.", duration: 30 }
        ],
        suggestedAccompaniments: [
            "Riz blanc brésilien",
            "Farofa de manioc au beurre",
            "Chou sauté à l'ail (Couve à mineira)",
            "Quartiers d'orange fraîche"
        ],
        practicalTips: [
            "Écrasez une louche de haricots noirs cuits en purée et réincorporez-la à la cocotte : c'est le secret pour obtenir ce bouillon crémeux et dense si caractéristique.",
            "L'orange fraîche servie à côté coupe le gras des viandes et aide remarquablement à la digestion."
        ],
        intro: "Haricots noirs et bas morceaux — la Feijoada est née dans les senzalas du Brésil et conquit les tables de tout un peuple.",
        description: "La Feijoada brésilienne porte en elle l'une des histoires les plus douloureuses et les plus sublimées de l'Atlantique noir. Née dans les senzalas — ces baraquements surpeuplés où les esclaves étaient parqués sur les fazendas du Brésil colonial — elle est le récit de la créativité née de la privation absolue. Les maîtres des plantations gardaient pour eux les belles pièces de bœuf et de porc ; aux esclaves revenaient les bas morceaux que personne ne voulait : pieds de porc, oreilles, museaux, queues, os à moelle. Les esclaves africains — majoritairement d'origine Bantu, Yoruba, Fon et Angolaise — connaissaient l'art de faire de la nécessité une vertu. Ils mijotèrent ces abats pendant des heures avec les haricots noirs qu'ils cultivaient dans leurs jardins de case, héritage direct des haricots niébé et doliques d'Afrique. La lente cuisson à l'étouffée, parfumée aux épices et aux feuilles de laurier, transforma ces ingrédients de misère en un plat d'une profondeur gustative extraordinaire. Aujourd'hui, la Feijoada est le plat national du Brésil, servi le mercredi et le samedi dans tout le pays, des favelas aux restaurants gastronomiques de São Paulo. Mais ses origines restent gravées dans chaque haricot noir : c'est le plat que les esclaves ont légué en héritage à une nation entière, un festin arraché à l'oppression.",
        relatedRecipes: ['cachupa-rico', 'hoppin-john']
    },
        {
        id: 'accras-morue',
        title: "Accras de Morue",
        origin: "Martinique / Guadeloupe",
        region: "Caraïbes et Antilles",
        image: "/images/accra de morue.avif",
        prepTime: 25,
        cookTime: 15,
        servings: 4,
        difficulty: "Facile",
        ingredients: [
            { name: "Morue salée séchée", quantity: "300g" },
            { name: "Farine de blé", quantity: "250g" },
            { name: "Levure chimique", quantity: "1 sachet (11g)" },
            { name: "Cives antillaises ou oignons nouveaux hachés très finement", quantity: "4 tiges" },
            { name: "Persil plat frais haché", quantity: "1/2 bouquet" },
            { name: "Gousses d'ail râpées", quantity: "3" },
            { name: "Piment antillais (Habanero / Bonda Man Jacques) finement haché", quantity: "1/2" },
            { name: "Jus de citron vert", quantity: "1 citron" },
            { name: "Eau très froide ou glacée", quantity: "180ml" },
            { name: "Huile de friture", quantity: "1L" },
            { name: "Poivre noir moulu", quantity: "1/2 c.à.c" }
        ],
        utensils: [
            "Friteuse ou casserole profonde",
            "Grand bol",
            "Fouet ou fourchette",
            "Deux cuillères à café"
        ],
        steps: [
            { order: 1, description: "Dessalage et effilochage de la morue : Dessaler la morue dans de l'eau froide pendant 12 heures en changeant l'eau 3 fois. La pocher 10 minutes dans une casserole d'eau frémissante. Égoutter, retirer soigneusement la peau et toutes les arêtes, puis effilocher très finement la chair entre vos doigts.", duration: 20 },
            { order: 2, description: "La pâte aérée aux aromates : Dans un grand bol, verser la farine et la levure chimique. Ajouter les cives hachées, le persil plat, l'ail râpé, le piment haché et le poivre noir. Incorporer la morue effilochée et le jus de citron vert.", duration: 5 },
            { order: 3, description: "Le choc thermique à l'eau glacée : Verser l'eau très froide progressivement tout en battant énergiquement à la fourchette pour incorporer de l'air : la pâte doit être homogène, épaisse, collante et souple. Laisser reposer 15 minutes au frais.", duration: 15 },
            { order: 4, description: "La friture dorée : Faire chauffer l'huile à 180°C. À l'aide de deux cuillères à café, prélever de petites portions de pâte et les faire glisser délicatement dans l'huile chaude. Ne pas surcharger le bain.", duration: 3 },
            { order: 5, description: "La cuisson gonflée : Les accras gonflent instantanément et se retournent souvent tout seuls. Frire 3 à 4 minutes jusqu'à ce qu'ils soient bien dorés, croustillants à l'extérieur et moelleux comme un nuage à l'intérieur. Égoutter sur papier absorbant et servir immédiatement brûlant avec une sauce chien.", duration: 5 }
        ],
        suggestedAccompaniments: [
            "Sauce Chien antillaise (cives, ail, piment, huile et eau chaude)",
            "Ti-punch ou cocktail de fruits"
        ],
        practicalTips: [
            "Utilisez de l'eau glacée pour lier la pâte : le contraste avec l'huile brûlante à 180°C crée une croûte ultra-croustillante qui n'absorbe pas l'huile.",
            "Ne salez pas la pâte avant d'avoir goûté la morue effilochée, celle-ci apporte déjà le sel nécessaire."
        ],
        intro: "Le samedi matin aux Antilles sent le frisson de l'huile chaude et le parfum de la morue salée — l'accra, beignet de survie devenu roi des marchés créoles.",
        description: "L'accra de morue est né dans la douleur et la nécessité. Pendant trois siècles d'économie de plantation, la morue salée d'Atlantique Nord — importée à bas coût depuis Terre-Neuve et l'Islande — constituait la ration protéinée imposée aux esclaves des îles sucrières. Dure, salée à l'excès, peu appétissante, cette morue de survie était pourtant la seule source de protéine animale accessible aux captifs des habitations guadeloupéennes, martiniquaises et haïtiennes. Avec le génie créateur propre aux peuples contraints, les femmes esclaves dessalèrent la morue à grande eau, l'effilochèrent en filaments fins, et l'intégrèrent à une pâte de farine de manioc ou de blé relevée de piment antillais et d'oignon-pays. Plongés dans l'huile bouillante, ces beignets minuscules se transformèrent en chef-d'œuvre de la friture créole. L'émancipation de 1848 libéra les corps ; les accras, eux, conquirent les marchés. Chaque samedi matin à Pointe-à-Pitre, Fort-de-France ou Port-au-Prince, les marchandes d'accras dressaient leur étal fumant, et tout un peuple venait y chercher, dans la chaleur de ces petites boules dorées, le plaisir simple d'une nourriture enfin choisie. Aujourd'hui, l'accra est l'ambassadeur festif et généreux de la cuisine antillaise — servi à l'apéritif, partagé entre amis, célébrant le fait d'être vivant et libre.",
        relatedRecipes: ['ata', 'acaraje']
    },
        {
        id: 'acaraje',
        title: "Acarajé",
        origin: "Bahia, Brésil",
        region: "Amérique du Sud",
        image: "/images/acaraje_new.png",
        prepTime: 40,
        cookTime: 20,
        servings: 6,
        difficulty: "Moyen",
        ingredients: [
            { name: "Haricots à œil noir (Black-eyed peas) secs", quantity: "500g" },
            { name: "Oignon rouge râpé en purée fine", quantity: "1 gros" },
            { name: "Gousses d'ail pilées", quantity: "2" },
            { name: "Sel fin", quantity: "1 c.à.c rase" },
            { name: "Huile de palme rouge (Dendê) pure pour la friture", quantity: "1L" },
            { name: "Garniture Vatapá (crème d'arachide, coco, crevettes et dendê)", quantity: "200g" },
            { name: "Garniture Caruru (ragoût de gombo)", quantity: "200g" },
            { name: "Crevettes séchées entières dessalées", quantity: "150g" },
            { name: "Sauce Vinagrete (tomates, oignons, coriandre et vinaigre)", quantity: "150g" },
            { name: "Sauce au piment malagueta", quantity: "Au goût" }
        ],
        utensils: [
            "Robot mixeur puissant",
            "Grande cuillère en bois lourde",
            "Friteuse ou poêle profonde"
        ],
        steps: [
            { order: 1, description: "Le concassage et l'épluchage des haricots : Mixer brièvement les haricots secs par à-coups au robot pour fendre les grains sans les réduire en farine. Les plonger dans un grand volume d'eau : les peaux noires se détachent et flottent en surface. Rincer plusieurs fois en versant l'eau pour évacuer toutes les peaux jusqu'à obtenir des haricots immaculés.", duration: 20 },
            { order: 2, description: "Le trempage : Laisser tremper les haricots émondés dans de l'eau fraîche pendant 4 heures. Bien égoutter.", duration: 240 },
            { order: 3, description: "Le broyage en pâte dense : Mixer les haricots égouttés avec la purée d'oignon rouge, l'ail pilé et le sel, avec le strict minimum d'eau possible : la pâte obtenue doit être dense, fine et très blanche.", duration: 10 },
            { order: 4, description: "Le battage sacré (Aeração) : Dans un grand saladier en faïence ou en bois, battre énergiquement la pâte à la cuillère en bois pendant 10 à 12 minutes sans interruption : cette étape incorpore de minuscules bulles d'air. La pâte double de volume, blanchit et devient mousseuse et légère comme une chantilly végétale.", duration: 12 },
            { order: 5, description: "La friture dorée dans l'huile de Dendê : Chauffer l'huile de palme (dendê) à 180°C. Prélever de grosses quenelles de pâte entre deux cuillères à soupe huilées et les glisser délicatement dans l'huile rouge frémissante. Frire 4 à 5 minutes par face jusqu'à obtenir une croûte croustillante d'un rouge cuivré magnifique.", duration: 10 },
            { order: 6, description: "Le garnissage bahianais : Égoutter sur papier absorbant. Fendre les beignets chauds en deux dans l'épaisseur comme un petit pain, et garnir généreusement avec du Vatapá crémeux, du Caruru de gombo, des crevettes séchées sautées et une cuillère de Vinagrete fraîche.", duration: 5 }
        ],
        suggestedAccompaniments: [
            "Sauce piment Malagueta",
            "Bière fraîche bien glacée"
        ],
        practicalTips: [
            "Le secret absolu de l'Acarajé : battre vigoureusement la pâte pendant 10 minutes à la cuillère en bois pour emprisonner l'air. Sans ce geste des Baianas, le beignet sera dense et lourd au lieu d'être aérien et croustillant.",
            "La friture doit obligatoirement se faire dans l'huile de palme rouge (dendê) pour obtenir la couleur rougeoyante et la saveur fumée caractéristique de Salvador de Bahia."
        ],
        intro: "Frit dans l'huile de dendê rouge comme la terre du Bénin, l'Acarajé est une prière en forme de beignet.",
        description: "L'Acarajé est l'un des témoignages les plus vibrants de la survivance culturelle africaine au Brésil. Ce beignet de haricots niébé (feijão-fradinho) fermentés et frits dans l'huile de palme (dendê) est le jumeau brésilien de l'Akara du Bénin et du Nigéria. Son nom vient du yoruba : « acará » (boule de feu) et « jé » (manger) — littéralement « manger la boule de feu ». Les esclaves Yoruba déportés à Bahia au Brésil apportèrent avec eux non seulement la recette, mais tout un système de signification religieuse. Dans le Candomblé, la religion afro-brésilienne née de la résistance des esclaves Nagô/Yoruba, l'Acarajé est l'offrande sacrée d'Iansã (Oyá), déesse des vents et des tempêtes, et de Xangô, dieu de la foudre. Pendant des siècles, les prêtresses du Candomblé — les baianas de acarajé — vendaient ces beignets sur les marchés de Salvador de Bahia pour financer les terreiros (temples). Vêtues de blanc, chargées de turbans et de bijoux rituels, elles étaient à la fois commerçantes, prêtresses et gardiennes de la mémoire africaine. L'UNESCO a inscrit en 2004 « l'Office des baianas de acarajé » au Patrimoine Immatériel de l'Humanité. Chaque beignet frit dans l'huile de dendê rouge est une communion avec Oyá et un refus de l'oubli.",
        relatedRecipes: ['ata', 'accras-morue']
    },
        {
        id: 'ata',
        title: "Ata (Beignets de Haricots)",
        origin: "Bénin / Togo",
        region: "Afrique",
        image: "/images/ata.webp",
        prepTime: 30,
        cookTime: 20,
        servings: 4,
        difficulty: "Facile",
        ingredients: [
            { name: "Haricots à œil noir (Black-eyed peas / Niébé)", quantity: "400g" },
            { name: "Oignons rouges hachés très finement", quantity: "2" },
            { name: "Piments frais rouges pilés", quantity: "2" },
            { name: "Gousses d'ail pilées (optionnel)", quantity: "2" },
            { name: "Sel fin", quantity: "1 c.à.c" },
            { name: "Huile végétale pour friture", quantity: "800ml" }
        ],
        utensils: [
            "Mixeur ou mortier traditionnel",
            "Friteuse ou poêle profonde",
            "Cuillère en bois"
        ],
        steps: [
            { order: 1, description: "Plongez les haricots niébé dans un grand saladier d'eau froide et laissez-les s'imbiber pendant 20 à 30 minutes — ce premier bain ramollit la fine peau qui les enveloppe. Vient alors le geste ancestral de l'émondage : frottez vigoureusement les haricots entre vos paumes, comme si vous les berciez, puis changez l'eau. Les peaux translucides remonteront à la surface, que vous éliminerez en inclinant le récipient. Répétez ce cycle — trempage, frottage, rinçage — jusqu'à ce que les haricots apparaissent nus, d'un blanc ivoire pur. C'est ce patient dépouillement, transmis de mère en fille depuis des générations yoruba, qui donnera à la pâte sa légèreté aérienne et sa couleur claire caractéristique.", duration: 20 },
            { order: 2, description: "Broyage : Mixer les haricots égouttés avec un demi-verre d'eau, l'ail et la moitié des oignons jusqu'à obtenir une pâte lisse et crémeuse.", duration: 8 },
            { order: 3, description: "L'aération de la pâte : Battre vigoureusement la pâte à la cuillère en bois pendant 8 minutes : le mélange doit mousser et s'éclaircir.", duration: 8 },
            { order: 4, description: "Assaisonnement : Incorporer le reste d'oignons hachés, le piment écrasé et le sel juste avant la friture.", duration: 2 },
            { order: 5, description: "Friture croustillante : Chauffer l'huile à 175°C. Déposer des cuillerées de pâte dans l'huile et frire 4 à 5 minutes en les retournant jusqu'à belle dorure craquante. Servir chaud avec une sauce tomate pimentée ou une bouillie d'Akassa.", duration: 10 }
        ],
        suggestedAccompaniments: [
            "Bouillie de maïs fermenté (Akassa ou Koko)",
            "Sauce tomate pimentée (Moyo)",
            "Pain croustillant"
        ],
        practicalTips: [
            "Battez la pâte à la cuillère avant de frire pour rendre l'Atà léger et croustillant."
        ],
        intro: "Aux aurores des marchés de Cotonou, l'odeur des beignets de niébé frits dans l'huile de palme annonce le jour — un rite aussi vieux que la civilisation yoruba elle-même.",
        description: "Bien avant que les caravelles européennes ne sillonnent l'Atlantique, les femmes yoruba du Golfe de Bénin préparaient déjà l'Àtà : des beignets de haricots niébé (Vigna unguiculata) soigneusement émondés, broyés en pâte crémeuse, et frits dans l'huile de palme bouillonnante. Ce beignet sacré n'était pas seulement nourriture — il était offrande. Dans le culte de Candomblé et de l'Ifá, l'Akara est dédié à Iansã, orisha des tempêtes et des âmes errantes. Les marchands d'esclaves embarquèrent les hommes, mais ne purent embarquer leurs mémoires culinaires. Traversant l'Atlantique dans la soute des navires négriers, les Yoruba déportés au Brésil recréèrent leur beignet sacré à Bahia : l'Acarajé naquit, frit dans l'huile de dendê rouge, garni de vatapá et de caruru. Dans les marchés colorés de Porto-Novo, Abomey-Calavi ou Cotonou, les vendeuses d'Àtà s'installent dès l'aube, leur grande bassine d'huile crépitante posée sur un trépied de fortune. Chaque beignet doré est une madeleine de Proust africaine, un pont entre deux continents, un hymne à la résilience de tout un peuple. Aujourd'hui, qu'on l'appelle Àtà au Bénin, Akara au Nigéria, ou Acarajé à Bahia, ce beignet de haricots demeure l'un des témoins les plus éloquents de la diaspora africaine.",
        relatedRecipes: ['acaraje', 'accras-morue']
    },
        {
        id: 'muamba-galinha',
        title: "Muamba de Galinha",
        origin: "Angola",
        region: "Afrique",
        image: "/images/muamba de galinha.webp",
        prepTime: 25,
        cookTime: 50,
        servings: 4,
        difficulty: "Moyen",
        ingredients: [
            { name: "Poulet fermier coupé en morceaux", quantity: "1.2kg" },
            { name: "Pulpe de noix de palme (Moamba) pure", quantity: "350g" },
            { name: "Gombos frais entiers équeutés", quantity: "200g" },
            { name: "Courge butternut ou potiron pelé et coupé en gros cubes", quantity: "300g" },
            { name: "Oignons émincés", quantity: "2" },
            { name: "Gousses d'ail pilées", quantity: "5" },
            { name: "Piments Gindungo (petits piments angolais) entiers", quantity: "2" },
            { name: "Huile de palme ou huile neutre", quantity: "2 c.à.s" },
            { name: "Eau tiède", quantity: "500ml" },
            { name: "Sel et poivre noir", quantity: "Au goût" }
        ],
        utensils: [
            "Grande marmite en fonte",
            "Spatule en bois"
        ],
        steps: [
            { order: 1, description: "Marinade du poulet : Frotter les morceaux de poulet avec l'ail pilé, 1 cuillère à café de sel et du poivre noir. Laisser mariner 15 minutes.", duration: 15 },
            { order: 2, description: "Saisie dorée : Dans la marmite, chauffer l'huile et dorer les morceaux de poulet sur feu vif pendant 8 minutes. Retirer la viande.", duration: 8 },
            { order: 3, description: "Sueur des oignons et sauce Moamba : Dans les sucs de cuisson, faire suer les oignons pendant 3 minutes. Ajouter la pulpe de noix de palme (moamba) et délayer avec 500 ml d'eau tiède.", duration: 5 },
            { order: 4, description: "Mijotage de la viande : Remettre le poulet doré dans la sauce. Couvrir et laisser mijoter 20 minutes à feu moyen-doux.", duration: 20 },
            { order: 5, description: "Ajout de la courge et des gombos : Ajouter les cubes de courge butternut, les gombos frais entiers et les piments Gindungo entiers. Poursuivre la cuisson à feu doux pendant 20 minutes jusqu'à ce que la courge soit fondante et la sauce richement liée.", duration: 20 }
        ],
        suggestedAccompaniments: [
            "Funge de manioc ou de maïs (polenta angolaise)",
            "Riz blanc nature"
        ],
        practicalTips: [
            "Ne coupez pas les gombos : laissez-les entiers pour qu'ils cuisent doucement dans la sauce sans libérer trop de mucilage."
        ],
        intro: "L'onctuosité veloutée de la pulpe de palme rouge et la douceur des gombos : l'hymne national de la gastronomie angolaise.",
        description: "La Muamba de Galinha (ou Moamba de Galinha) est le plat emblématique de l'Angola, hérité des traditions culinaires séculaires des peuples Kimbundu et Bakongo. La « muamba » désigne à la fois la sauce et la pâte onctueuse extraite de la chair charnue des noix du palmier à huile (Elaeis guineensis). Cuisiné dans les marmites en argile avec du poulet fermier, de l'ail, du piment ginguba et de généreuses poignées de gombos frais qui lui confèrent une texture soyeuse, ce ragoût d'un rouge flamboyant raconte l'histoire du royaume du Kongo et des routes commerciales d'Afrique australe. Lorsque les captifs angolais furent déportés vers le Brésil, ils emportèrent le souvenir de cette pâte de palme pour créer la Moqueca et les plats au dendê de Salvador de Bahia.",
        relatedRecipes: ['moambe-chicken', 'poulet-dg']
    },

        {
        id: 'moros-cristianos',
        title: "Moros y Cristianos",
        origin: "Cuba",
        region: "Caraïbes et Antilles",
        image: "/images/Moros-y-Cristianos.webp",
        prepTime: 15,
        cookTime: 40,
        servings: 4,
        difficulty: "Facile",
        ingredients: [
            { name: "Riz blanc long grain", quantity: "2 tasses (400g)" },
            { name: "Haricots noirs cuits avec leur bouillon sombre", quantity: "2 tasses de haricots + 2.5 tasses de bouillon" },
            { name: "Poitrine de porc fumée ou bacon taillé en petits dés", quantity: "100g" },
            { name: "Poivron vert émincé en petits dés", quantity: "1" },
            { name: "Oignon rouge ou jaune haché", quantity: "1" },
            { name: "Gousses d'ail pilées", quantity: "4" },
            { name: "Cumin moulu", quantity: "1 c.à.c" },
            { name: "Origan séché", quantity: "1/2 c.à.c" },
            { name: "Feuille de laurier", quantity: "1" },
            { name: "Huile d'olive vierge", quantity: "3 c.à.s" },
            { name: "Vinaigre de vin blanc", quantity: "1 c.à.s" },
            { name: "Sel et poivre noir", quantity: "Au goût" }
        ],
        utensils: [
            "Marmite en fonte ou sauteuse à couvercle hermétique",
            "Spatule en bois"
        ],
        steps: [
            { order: 1, description: "Le Sofrito cubain : Dans la marmite, faire dorer les dés de lard fumé dans l'huile d'olive pendant 4 minutes. Ajouter l'oignon haché, le poivron vert et l'ail pilé. Faire suer 4 minutes jusqu'à ce que les légumes soient translucides et très parfumés.", duration: 8 },
            { order: 2, description: "Torréfaction des épices et nacrage du riz : Ajouter le cumin moulu, l'origan séché, la feuille de laurier et le vinaigre de vin. Verser le riz cru lavé et égoutté. Faire revenir pendant 2 minutes en remuant pour que le riz s'imprègne des graisses parfumées.", duration: 2 },
            { order: 3, description: "Mouillage au bouillon noir : Verser les 2.5 tasses de bouillon noir des haricots et incorporer les haricots noirs cuits. Saler et poivrer au goût. Porter à franche ébullition pendant 3 minutes.", duration: 5 },
            { order: 4, description: "Cuisson à l'étouffée : Baisser au feu le plus doux possible, couvrir hermétiquement et cuire 20 minutes sans ouvrir. Éteindre le feu et laisser reposer 5 minutes sous vapeur.", duration: 25 },
            { order: 5, description: "Égrenage final : Découvrir et aérer le riz délicatement à la fourchette : les grains de riz sont teintés d'un beau violet-noir foncé, séparés et imprégnés du fumé du sofrito.", duration: 2 }
        ],
        suggestedAccompaniments: [
            "Tostones (plantains verts écrasés et frits)",
            "Yuca con mojo d'ail",
            "Porc rôti à la créole"
        ],
        practicalTips: [
            "Utilisez obligatoirement le bouillon noir de cuisson des haricots pour mouiller le riz : c'est lui qui confère au plat sa couleur sombre emblématique."
        ],
        intro: "Dans chaque foyer cubain, la casserole fumante de Moros y Cristianos raconte, en noir et blanc, l'histoire entremêlée de deux mondes.",
        description: "Le nom évoque la Reconquista espagnole — les Maures (Moros) et les Chrétiens (Cristianos) réunis dans un même plat — mais les racines véritables de ce pilier de la cuisine cubaine traversent l'Atlantique et remontent aux savanes ouest-africaines. Bien avant que les colonisateurs espagnols ne baptisent cette préparation de leur imaginaire medieval, les esclaves yoruba et mandé déportés à Cuba au XVIIe et XVIIIe siècle cuisaient déjà le riz aux haricots : l'Atassi béninois (riz aux niébé cuits dans des feuilles), le Waakye ghanéen (riz aux haricots rouges coloré aux feuilles de sorgho), ou simplement le riz aux haricots noirs préparé dans les senzalas et jardins de case. Ces hommes et ces femmes arrachés à leur terre apportèrent dans leurs mémoires cette technique ancestrale d'association céréale-légumineuse — un accord nutritif parfait qui nourrissait le corps et l'âme. Les cuisinières africaines des grandes habitations sucrières de la région de Matanzas et de Santiago de Cuba perpétuèrent cette tradition, l'adaptant aux haricots noirs (frijoles negros) de Cuba et aux aromates de la Caraïbe. Aujourd'hui, les Moros y Cristianos sont le plat national cubain par excellence, servi à toutes les tables, insaisissable témoignage de ce que l'Afrique a semé dans le Nouveau Monde.",
    },
        {
        id: 'arroz-titote',
        title: "Arroz de Titoté",
        origin: "Carthagène, Colombie",
        region: "Amérique du Sud",
        image: "/images/arroz de titote.webp",
        prepTime: 15,
        cookTime: 45,
        servings: 4,
        difficulty: "Moyen",
        ingredients: [
            { name: "Lait de coco frais entier bien riche en matière grasse", quantity: "500ml" },
            { name: "Riz blanc long grain", quantity: "2 tasses (400g)" },
            { name: "Panela râpée (sucre de canne brut brun) ou cassonade", quantity: "2 c.à.s" },
            { name: "Raisins secs noirs ou blonds", quantity: "1/2 tasse" },
            { name: "Eau tiède", quantity: "2.5 tasses" },
            { name: "Sel fin", quantity: "1 c.à.c rase" }
        ],
        utensils: [
            "Chaudron ou casserole à fond épais en fonte d'aluminium",
            "Spatule en bois"
        ],
        steps: [
            { order: 1, description: "La réduction magique du lait de coco : Verser le lait de coco frais dans le chaudron à feu moyen-vif. Laisser bouillir en remuant de temps en temps. L'eau du lait va s'évaporer, laissant l'huile de coco se séparer des solides lactés.", duration: 15 },
            { order: 2, description: "La création du Titoté caramélisé : Continuer la cuisson de l'huile de coco en remuant constamment à feu moyen. Les solides de coco vont frire dans leur propre huile, brunir et se transformer en petites pépites croustillantes couleur noisette foncée : c'est le fameux \"Titoté\" afro-colombien.", duration: 10 },
            { order: 3, description: "Caramélisation et nacrage : Ajouter la panela râpée (ou cassonade) dans le titoté et remuer 1 minute pour caraméliser. Verser le riz blanc cru et faire revenir 2 minutes pour napper chaque grain de cette huile de coco ambrée.", duration: 3 },
            { order: 4, description: "Mouillage et raisins : Verser l'eau tiède, ajouter les raisins secs et le sel. Porter à ébullition et laisser le niveau de liquide réduire jusqu'à affleurer la surface du riz.", duration: 5 },
            { order: 5, description: "L'étouffée douce : Couvrir hermétiquement, baisser au feu minimum et laisser cuire 20 minutes jusqu'à absorption complète. Aérer à la fourchette : le riz est brillant, ambré, avec un équilibre sucré-salé envoûtant.", duration: 20 }
        ],
        suggestedAccompaniments: [
            "Poisson frit entier croustillant",
            "Patacones (plantains verts frits)",
            "Salade d'avocat"
        ],
        practicalTips: [
            "Surveillez attentivement le lait de coco quand il commence à frire : le passage de doré à brûlé se fait en quelques secondes. Les grains de titoté doivent être ambrés et non noirs."
        ],
        intro: "Sur la côte Pacifique de Colombie, le riz au lait de coco chante la mémoire des ancêtres africains de Buenaventura — doux, profond, irrésistible.",
        description: "Le Arroz con Titoté — riz cuit dans le lait de coco dense extrait à la cuillère de noix fraîchement râpées — est l'âme culinaire de la côte Pacifique colombienne, territoire de résistance et de mémoire des communautés afro-colombiennes. Buenaventura, Tumaco, Guapi : ces villes du Pacifique colombien sont parmi les plus afro-descendantes d'Amérique du Sud, peuplées par les descendants des captifs africains débarqués par les conquistadors espagnols aux XVIe et XVIIe siècles pour travailler dans les mines d'or et les plantations de cacao. Ces communautés, qui cultivèrent la résistance au quotidien — y compris par la fuite dans les communautés de palenques et de cimarrones —, transmirent de génération en génération leur maîtrise du lait de coco, reflet direct des cuisines d'Afrique centrale et de l'Ouest. Le « titoté » désigne le fond caramélisé et parfumé obtenu après la réduction prolongée du lait de coco — une technique de cuisson patiente qui transforme le riz ordinaire en une préparation inoubliable, à la fois suave et légèrement dorée. Ce riz n'est pas un accompagnement banal : c'est un acte de mémoire, une déclaration d'identité afro-pacifique, préparé aux fêtes de San Pacho à Quibdó ou à la Semana de la Afrocolombianidad, vibrant et fier.",
    },
        {
        id: 'griot-haitien',
        title: "Griot Haïtien",
        origin: "Haïti",
        region: "Caraïbes et Antilles",
        image: "/images/griot haitien.webp",
        prepTime: 40,
        cookTime: 45,
        servings: 6,
        difficulty: "Moyen",
        ingredients: [
            { name: "Épaule de porc découpée en gros cubes de 4cm", quantity: "1.2kg" },
            { name: "Jus d'orange amère fraîche (ou mélange jus d'orange douce + jus de citron vert)", quantity: "200ml" },
            { name: "Épis haïtien (pâte aromatique : cives, ail, persil, poivron, thym, piment)", quantity: "4 c.à.s" },
            { name: "Piment Scotch Bonnet (Piman Bouk)", quantity: "1 entier" },
            { name: "Clous de girofle moulus", quantity: "1/4 c.à.c" },
            { name: "Huile pour friture", quantity: "500ml" },
            { name: "Sel fin et poivre noir", quantity: "Au goût" }
        ],
        utensils: [
            "Friteuse ou grande poêle en fonte",
            "Grande casserole",
            "Écumoire"
        ],
        steps: [
            { order: 1, description: "Nettoyage rituel de la viande : Frictionner énergiquement les morceaux de porc avec du gros sel et les moitiés de citrons verts coupés, puis rincer à l'eau bouillante et égoutter.", duration: 10 },
            { order: 2, description: "La marinade créole au Piman Bouk : Dans un saladier, mélanger les cubes de porc avec l'Épis haïtien, le jus d'orange amère, les clous de girofle, le sel et le poivre. Laisser mariner au moins 2 heures (idéalement toute la nuit).", duration: 120 },
            { order: 3, description: "Précuisson fondante à l'étouffée : Placer la viande avec toute sa marinade dans une casserole. Couvrir et cuire à feu moyen-doux pendant 30 minutes : le porc va cuire dans ses propres sucs jusqu'à devenir parfaitement tendre.", duration: 30 },
            { order: 4, description: "Égouttage : Retirer les morceaux de porc tendres du bouillon et les égoutter soigneusement sur une grille (conserver le jus pour la sauce ti-malice).", duration: 5 },
            { order: 5, description: "La friture croustillante et caramélisée : Faire chauffer l'huile à 180°C. Y plonger les cubes de porc par petites fournées et frire 5 à 6 minutes jusqu'à ce que l'extérieur soit profondément doré, croustillant et caramélisé tout en restant juteux à cœur.", duration: 8 }
        ],
        suggestedAccompaniments: [
            "Bannann Peze (bananes plantains pesées et frites)",
            "Pikliz haïtien (salade piquante de chou mariné au piment et vinaigre)",
            "Diri Kole (riz collé aux pois)"
        ],
        practicalTips: [
            "Le secret du Griot réside dans la double cuisson : la précuisson dans le jus d'orange amère attendrit la viande, et la friture vive scelle la caramélisation croustillante extérieure."
        ],
        intro: "Mariné dans l'orange amère et la résistance, le Griot est le cri de liberté d'Haïti sur un plat.",
        description: "Le Griot haïtien est indissociable de l'histoire de la seule révolution d'esclaves victorieuse de l'histoire mondiale. Né dans les mornes et les forêts de Saint-Domingue, ce plat de porc mariné au jus d'orange amère, au piment scotch bonnet et aux épices fut d'abord la nourriture des marrons — ces esclaves fugitifs qui s'échappaient dans les montagnes pour vivre libres. L'orange amère (bigarade) poussait à l'état sauvage dans les hauteurs de l'île et servait à la fois de conservateur naturel et de marinade. Le porc, lui, était l'animal des jours de fête clandestine : abattu en secret lors des cérémonies Vaudou dans les bois, loin des regards des planteurs. La nuit du Bois Caïman, en août 1791, qui marqua le début de la révolution haïtienne, aurait été accompagnée d'un tel festin de porc rituel. Frit ou rôti à la perfection — croustillant à l'extérieur, fondant à l'intérieur — le Griot est aujourd'hui servi avec du riz aux pois rouges (du riz national) et des bananes pesées frites. Son nom lui-même évoque les griots d'Afrique de l'Ouest, ces gardiens de la mémoire collective. Manger du Griot en Haïti, c'est communier avec deux siècles de liberté conquise, une bouchée à la fois.",
    },
        {
        id: 'doubles',
        title: "Doubles",
        origin: "Trinité-et-Tobago",
        region: "Caraïbes et Antilles",
        image: "/images/Doubles trinidad.png",
        prepTime: 40,
        cookTime: 30,
        servings: 4,
        difficulty: "Moyen",
        ingredients: [
            { name: "Pois chiches secs trempés toute la nuit (ou en boîte de qualité)", quantity: "400g" },
            { name: "Pour les Baras : Farine de blé", quantity: "300g" },
            { name: "Pour les Baras : Levure boulangère sèche", quantity: "1 c.à.c" },
            { name: "Pour les Baras : Curcuma en poudre (Safran trinidadien)", quantity: "1 c.à.c" },
            { name: "Pour les Baras : Cumin moulu (Geera)", quantity: "1/2 c.à.c" },
            { name: "Poudre de curry antillais / trinidadien", quantity: "2 c.à.s" },
            { name: "Coriandre longue (Chadon Beni / Culantro) ou coriandre fraîche", quantity: "1 bouquet" },
            { name: "Gousses d'ail pilées", quantity: "4" },
            { name: "Oignon émincé", quantity: "1" },
            { name: "Huile pour friture", quantity: "500ml" },
            { name: "Chutney de mangue douce ou verte", quantity: "4 c.à.s" },
            { name: "Sel et poivre", quantity: "Au goût" }
        ],
        utensils: [
            "Friteuse ou poêle profonde",
            "Rouleau ou mains huilées pour étaler les Baras",
            "Casserole pour le channa"
        ],
        steps: [
            { order: 1, description: "Préparation de la pâte à Bara : Mélanger la farine, la levure, le curcuma, le cumin, 1/2 cuillère à café de sel et de l'eau tiède pour former une pâte très souple et collante. Couvrir et laisser lever 1 heure.", duration: 60 },
            { order: 2, description: "Cuisson du Curry Channa : Dans une casserole avec 1 cuillère d'huile, faire revenir l'oignon, l'ail, la poudre de curry et le Chadon Beni haché pendant 2 minutes. Ajouter les pois chiches et 400 ml d'eau. Laisser mijoter à feu doux 25 minutes jusqu'à ce que les pois chiches soient très tendres et la sauce onctueuse. Écraser légèrement quelques pois pour épaissir la sauce.", duration: 25 },
            { order: 3, description: "Façonnage et friture ultra-rapide des Baras : Huiler vos mains. Prélever de petites boules de pâte levée et les étirer très finement en disques plats de 10 cm. Les plonger dans l'huile à 180°C : le Bara gonfle en 5 secondes ! Retourner et frire 5 secondes supplémentaires. Égoutter chaud dans du papier.", duration: 10 },
            { order: 4, description: "L'assemblage des Doubles : Placer deux Baras chauds côte à côte sur du papier ciré. Déposer 2 généreuses cuillères de Curry Channa au centre, napper de chutney de mangue et d'une pointe de piment. Replier les Baras par-dessus et déguster brûlant avec les doigts.", duration: 3 }
        ],
        suggestedAccompaniments: [
            "Chutney de tamarin",
            "Concombre râpé pimenté (Kuchela)"
        ],
        practicalTips: [
            "Les Baras doivent frire seulement quelques secondes de chaque côté dans une huile bien chaude : ils doivent rester ultra-moelleux et dorés, jamais durs ni croustillants."
        ],
        intro: "Deux bara, un nuage de channa — les Doubles de Trinidad sont le matin même de Port of Spain.",
        description: "Les Doubles sont la street food la plus emblématique de Trinidad-et-Tobago, et leur histoire est le récit d'un syncrétisme culturel unique dans les Caraïbes. Inventés dans les années 1930 à Princes Town par un vendeur d'origine indo-trinidadienne, Emamool Deen, ils portent l'empreinte profonde de la communauté indo-caribéenne arrivée à Trinidad après l'abolition de l'esclavage dans le cadre du système d'engagisme (1838-1917). Les bara — ces petits pains plats frits dans l'huile — sont une adaptation des poori de l'Inde du Nord, préparés avec de la farine et du curcuma (turmeric). Le channa — pois chiches épicés — est issu de la cuisine indienne du chhole. Mais Trinidad n'est jamais une histoire simple : les condiments qui accompagnent les Doubles portent l'âme créole et africaine de l'île. La sauce tamarind sucrée, la pepper sauce au piment habanero (scotch bonnet), le chutn'y de mangue verte — toutes ces saveurs croisent dans une seule bouchée l'Inde, l'Afrique et les Caraïbes. Les Doubles se mangent debout, à l'aube, enveloppés dans du papier journal, par les ouvriers, les écoliers, les noctambules. Ils sont le plat de la démocratie trinidadienne — également accessibles à tous, également aimés par tous. Dans leur diversité d'ingrédients se lisent les cicatrices et les beautés d'une nation née de l'oppression et du mélange.",
    },
        {
        id: 'pom-surinam',
        title: "Pom",
        origin: "Suriname",
        region: "Amérique du Sud",
        image: "/images/pom creole.webp",
        prepTime: 35,
        cookTime: 70,
        servings: 6,
        difficulty: "Moyen",
        ingredients: [
            { name: "Pomtayer râpé (racine de taro/xanthosoma) fraîche ou surgelée", quantity: "800g" },
            { name: "Morceaux de poulet assaisonnés", quantity: "800g" },
            { name: "Jus d'orange fraîche pressée", quantity: "200ml" },
            { name: "Jus de citron vert", quantity: "1 citron" },
            { name: "Oignons émincés", quantity: "2" },
            { name: "Tomates fraîches concassées", quantity: "2" },
            { name: "Beurre salé fondu", quantity: "80g" },
            { name: "Sucre de canne", quantity: "1 c.à.s" },
            { name: "Noix de muscade râpée", quantity: "1/2 c.à.c" },
            { name: "Sel et poivre", quantity: "Au goût" }
        ],
        utensils: [
            "Grand plat à gratin beurré",
            "Sauteuse pour le poulet"
        ],
        steps: [
            { order: 1, description: "Saisie du poulet : Dans une sauteuse avec du beurre, faire dorer les morceaux de poulet avec les oignons et les tomates concassées pendant 10 minutes. Saler, poivrer et laisser tiédir.", duration: 10 },
            { order: 2, description: "Préparation de la crème de Pomtayer : Dans un grand bol, mélanger le pomtayer râpé avec le jus d'orange, le jus de citron vert, le sucre de canne, le beurre fondu et la muscade. La consistance doit être crémeuse et onctueuse.", duration: 8 },
            { order: 3, description: "Le montage en couches : Beurrer le plat à gratin. Étaler la moitié de la crème de pomtayer au fond. Disposer les morceaux de poulet et leur jus au milieu, puis recouvrir avec le reste de pomtayer en lissant la surface.", duration: 5 },
            { order: 4, description: "La cuisson dorée au four : Enfourner à 180°C pendant 60 minutes : le dessus doit former une croûte caramel dorée magnifique et l'intérieur être fondant. Laisser reposer 10 minutes avant de découper en carrés.", duration: 60 }
        ],
        suggestedAccompaniments: [
            "Riz blanc créole",
            "Pain au beurre"
        ],
        practicalTips: [
            "Le jus d'orange et le citron vert apportent l'acidité fruitée indispensable qui neutralise l'astringence naturelle de la racine de taro."
        ],
        intro: "Racine de pomtajer, citron et poulet — le Pom est la mémoire africaine du Suriname dans un plat de fête.",
        description: "Le Pom est le plat de fête par excellence du Suriname, servi lors des mariages, des naissances et des célébrations religieuses des communautés créoles (Afro-Surinamaises) et juives séfarades du pays. Son histoire est un microcosme de la complexité surinamaise, pays où se croisèrent Hollandais, esclaves africains, travailleurs engagés indiens et javanais, et communautés juives fuyant la persécution en Europe. Le Pomtajer — ou tayer, une racine similaire au taro (Xanthosoma sagittifolium) — fut introduit au Suriname par les esclaves africains qui reconnaissaient dans cette plante américaine les qualités des ignames et taros de leur Afrique natale. Râpée finement, mélangée au jus de citron vert pour éviter l'oxydation et adoucie, cette racine forme la base d'un gratin onctueux dans lequel on enfouit du poulet ou du poisson mijoté en sauce. La technique du gratin, elle, vient des influences néerlandaises et juives séfarades. Les Juifs séfarades de Suriname — descendants des réfugiés chassés du Brésil puis d'Europe — adoptèrent le Pom et en firent leur plat de shabbat, substituant le poulet aux ingrédients traditionnels pour respecter les lois de cacherout. Cette rencontre extraordinaire entre la cuisine africaine et la cuisine judéo-sépharade a donné naissance à un plat unique au monde. Le Pom n'appartient à personne et appartient à tout le Suriname.",
    },
        {
        id: 'encocado-pescado',
        title: "Encocado de Pescado",
        origin: "Esmeraldas, Équateur",
        region: "Amérique du Sud",
        image: "/images/encocado de pescado.webp",
        prepTime: 20,
        cookTime: 25,
        servings: 4,
        difficulty: "Facile",
        ingredients: [
            { name: "Pavés de poisson blanc ferme (Mérou, Cabillaud ou Corvina)", quantity: "700g" },
            { name: "Lait de coco frais", quantity: "400ml" },
            { name: "Huile d'Achiote (huile infusée aux graines de roucou rouge)", quantity: "3 c.à.s" },
            { name: "Poivron vert et poivron rouge coupés en petits dés", quantity: "2" },
            { name: "Oignon rouge émincé", quantity: "1" },
            { name: "Gousses d'ail hachées", quantity: "4" },
            { name: "Coriandre fraîche (Culantro / Cilantro) hachée", quantity: "1/2 bouquet" },
            { name: "Jus de citron vert", quantity: "1 citron" },
            { name: "Cumin moulu", quantity: "1/2 c.à.c" },
            { name: "Sel et poivre", quantity: "Au goût" }
        ],
        utensils: [
            "Grande sauteuse en fonte ou inox"
        ],
        steps: [
            { order: 1, description: "Marinade du poisson : Arroser les pavés de poisson de jus de citron vert, sel, poivre et la moitié de l'ail. Laisser reposer 10 minutes.", duration: 10 },
            { order: 2, description: "Le Refrito à l'achiote : Dans la sauteuse, chauffer l'huile d'achiote rougeoyante. Faire suer l'oignon, les poivrons, le reste d'ail et le cumin pendant 5 minutes.", duration: 5 },
            { order: 3, description: "L'infusion de coco : Verser le lait de coco dans le refrito et porter à ébullition douce pendant 5 minutes pour que la sauce réduise et prenne une belle teinte orangée.", duration: 5 },
            { order: 4, description: "Pochage délicat du poisson : Déposer les pavés de poisson dans la sauce de coco bouillonnante. Cuire à feu moyen-doux pendant 8 à 10 minutes en arrosant le poisson sans le retourner pour ne pas briser la chair.", duration: 10 },
            { order: 5, description: "Finition parfumée : Parsemer généreusement de coriandre fraîche ciselée. Servir chaud avec du riz au coco et des patacones.", duration: 2 }
        ],
        suggestedAccompaniments: [
            "Arroz con coco",
            "Patacones (plantains verts écrasés et frits)"
        ],
        practicalTips: [
            "L'huile d'Achiote (roucou) est essentielle pour donner à l'Encocado cette couleur soleil éclatante et sa note terreuse subtile."
        ],
        intro: "Sur la côte Esmeraldas, chaque casserole d'Encocado chante l'Afrique dans la langue du Pacifique — poisson nacré enveloppé de lait de coco et de curcuma doré.",
        description: "L'Encocado de Pescado — poisson mijoté dans une sauce onctueuse de lait de coco, tomates, coriandre, piment et curcuma — est le plat emblématique de la côte Esmeraldas, au nord-ouest de l'Équateur, région à forte majorité afro-équatorienne. Son histoire est indissociable de la présence africaine sur cette côte du Pacifique. En 1553, un navire négrier espagnol s'échoua au large des côtes d'Esmeraldas. Les captifs africains à son bord — originaires d'Afrique centrale et de l'Ouest — se libérèrent et s'enfuirent dans la forêt tropicale côtière, où ils fondèrent des communautés libres, les palenques. Ces pionniers de la liberté — véritables premiers Noirs libres d'Amérique du Sud — recréèrent sur ces terres équatoriales une culture profondément africaine, intégrant les ressources locales : poissons du Pacifique, lait de noix de coco, piment ají, racines tropicales. L'encocado est né de cette synthèse : la maîtrise africaine du lait de coco (héritée des cuisines de l'Afrique subsaharienne côtière) appliquée aux richesses halieutiques de l'Équateur. Préparé au feu de bois dans de grandes marmites en terre cuite, l'encocado reste aujourd'hui le symbole vivant de l'identité afro-équatorienne d'Esmeraldas, inscrit dans le patrimoine immatériel de l'Équateur.",
    },
        {
        id: 'mofongo',
        title: "Mofongo",
        origin: "Porto Rico",
        region: "Caraïbes et Antilles",
        image: "/images/mofongo puerto rico.webp",
        prepTime: 20,
        cookTime: 20,
        servings: 2,
        difficulty: "Moyen",
        ingredients: [
            { name: "Bananes plantains bien vertes (totalement fermes et non sucrées)", quantity: "3" },
            { name: "Chicharrón de porc croustillant (grattons de porc)", quantity: "100g" },
            { name: "Gousses d'ail fraîches", quantity: "4" },
            { name: "Huile d'olive vierge", quantity: "3 c.à.s" },
            { name: "Bouillon de volaille chaud", quantity: "100ml" },
            { name: "Huile pour friture", quantity: "500ml" },
            { name: "Sel fin", quantity: "Au goût" }
        ],
        utensils: [
            "Pilón (Mortier en bois traditionnel portoricain)",
            "Poêle à frire"
        ],
        steps: [
            { order: 1, description: "Découpe et friture à point des plantains verts : Éplucher les plantains verts et les tailler en rondelles épaisses de 2 cm. Faire chauffer l'huile à 160°C (feu moyen). Frire les rondelles pendant 8 minutes : elles doivent être cuites à cœur sans brunir ni durcir à l'extérieur. Égoutter chaud.", duration: 10 },
            { order: 2, description: "L'ail pilé au mortier : Dans le Pilón, écraser les gousses d'ail avec le sel et l'huile d'olive jusqu'à consistance d'une pâte crémeuse.", duration: 3 },
            { order: 3, description: "Le pilage par étapes (Le secret de texture) : Ajouter quelques rondelles de plantains chaudes dans le mortier et piler avec énergie. Incorporer une poignée de chicharrón croustillant et arroser d'une cuillère de bouillon chaud. Répéter l'opération par portions jusqu'à obtenir une masse compacte, malléable et parsemée d'éclats croustillants de porc.", duration: 8 },
            { order: 4, description: "Le moulage et service : Huiler légèrement le Pilón ou un petit bol et tasser le Mofongo dedans pour former un dôme sculptural. Renverser sur une assiette et servir avec une louchée de bouillon chaud ou des crevettes à l'ail.", duration: 2 }
        ],
        suggestedAccompaniments: [
            "Bouillon de volaille corsé servi en tasse à côté",
            "Crevettes sautées à l'ail (Camarones al Ajillo)"
        ],
        practicalTips: [
            "Ne faites pas dorer excessivement les plantains verts : ils doivent rester blonds pour être faciles à piler au mortier sans devenir secs."
        ],
        intro: "Plantain pilé au pilon, l'écho d'un continent — le Mofongo est le fufu de Porto Rico, sculpté par les mains Yoruba.",
        description: "Le Mofongo est l'une des preuves les plus éloquentes de la résilience culturelle africaine dans les Amériques. Son nom même vient du yoruba : « mofongo » serait une déformation de « mofongó », une exclamation, ou dériverait de langues bantoues désignant la manière de piler et mélanger. Les esclaves Yoruba déportés aux Antilles espagnoles — Porto Rico, Cuba, République Dominicaine — portaient dans leurs mains la mémoire du fufu, cette pâte d'igname ou de plantain pilée que l'on préparait en Afrique depuis la nuit des temps. Dans les Caraïbes, ils remplacèrent l'igname africain par le plantain vert, plus abondant sur les plantations. Le pilage dans le mortier — le pilón — devint un acte quasi sacré, transmis de génération en génération. Les esclaves ajoutèrent de l'ail et des chicharrones (couenne de porc frite) pour étoffer la saveur d'une ration autrement terne. Ce geste de créativité face à la privation transforma un simple accompagnement africain en un plat identitaire portoricain. Aujourd'hui, le Mofongo se décline en mille variantes — farci de crevettes, de poulet, de viande en sauce — mais le pilon reste le même, et le geste reste africain. Dans chaque pilée de plantain résonne le mortier de Yorubaland.",
        relatedRecipes: ['fufu', 'sancocho']
    },
        {
        id: 'sancocho',
        title: "Sancocho",
        origin: "République Dominicaine / Colombie",
        region: "Caraïbes et Antilles",
        image: "/images/sancocho.webp",
        prepTime: 30,
        cookTime: 75,
        servings: 6,
        difficulty: "Moyen",
        ingredients: [
            { name: "Viandes mixtes coupées en morceaux (bœuf à braiser, poulet, travers de porc)", quantity: "1.2kg" },
            { name: "Manioc épluché et coupé en tronçons", quantity: "350g" },
            { name: "Igname (Yam) épluché et taillé en morceaux", quantity: "350g" },
            { name: "Bananes plantains vertes tronçonnées", quantity: "2" },
            { name: "Épis de maïs frais coupés en rondelles épaisses", quantity: "2" },
            { name: "Oignon haché", quantity: "1" },
            { name: "Poivron vert haché", quantity: "1" },
            { name: "Gousses d'ail pilées", quantity: "5" },
            { name: "Coriandre fraîche (Cilantro) hachée", quantity: "1 bouquet" },
            { name: "Origan séché", quantity: "1 c.à.c" },
            { name: "Eau fraîche", quantity: "2L" },
            { name: "Sel et poivre", quantity: "Au goût" }
        ],
        utensils: [
            "Grande marmite familiale en inox ou fonte"
        ],
        steps: [
            { order: 1, description: "Marinade et saisie des viandes : Assaisonner les viandes avec l'ail, l'oignon, le poivron vert, l'origan, du sel et du poivre. Faire dorer les viandes dans la marmite avec un filet d'huile pendant 10 minutes.", duration: 10 },
            { order: 2, description: "Mouillage et cuisson lente : Verser les 2 litres d'eau, porter à ébullition et laisser mijoter à feu moyen pendant 30 minutes jusqu'à ce que les viandes s'attendrissent.", duration: 30 },
            { order: 3, description: "Ajout des vivres et maïs : Ajouter les rondelles de maïs, les tronçons de plantain vert, de manioc et d'igname. Laisser mijoter 25 minutes : les tubercules vont cuire et relarguer leur amidon qui épaissit naturellement le bouillon.", duration: 25 },
            { order: 4, description: "Finition aromatique : Écraser quelques morceaux d'igname contre la paroi de la marmite pour donner une onctuosité soyeuse à la soupe. Parsemer d'un bouquet généreux de coriandre fraîche et servir très chaud dans de grands bols.", duration: 5 }
        ],
        suggestedAccompaniments: [
            "Riz blanc",
            "Tranches d'avocat mûr",
            "Quartiers de citron vert"
        ],
        practicalTips: [
            "Écrasez un ou deux morceaux de tubercules cuits dans le bouillon en fin de cuisson pour donner au Sancocho sa consistance liée et généreuse."
        ],
        intro: "Dans le grand chaudron du sancocho se retrouvent tous les peuples des Caraïbes — un pot commun né des rations de plantation, devenu hymne à la convivialité.",
        description: "Le sancocho — cette soupe-repas consistante aux tubercules, viandes et légumes qui parfume les cuisines de Cuba à la Colombie, de Porto Rico à la République Dominicaine — est la mémoire liquide de la plantation caribéenne. Son nom vient peut-être de l'espagnol sancochar (cuire à moitié), mais ses racines plongent bien plus profondément dans l'histoire des captifs africains. Sur les grandes habitations sucrières des Caraïbes espagnoles, les rations distribuées aux esclaves consistaient en tubercules grossiers — igname, manioc, patate douce, malanga — accompagnés de maigres morceaux de viande de bas-morceaux, de poisson séché ou de salé. Les cuisinières africaines, héritières d'une longue tradition de soupes et de ragoûts (l'egusi yoruba, le mafé mandé, le palm-nut soup akan), réunirent ces ingrédients disparates dans un grand pot posé sur le feu, ajoutèrent du maïs vert, du plantain, des herbes sauvages cueillies aux abords du camp. Ce pot collectif — partagé entre tous, préparé par les femmes, nourricier et réconfortant — devint le ciment social des communautés d'esclaves. Après l'Abolition, le sancocho traversa les classes et les îles, s'enrichit de nouvelles viandes et épices, et s'imposa comme le plat du dimanche, de la fête familiale, du rassemblement. Il reste à ce jour le plat le plus partagé et le plus aimé des Caraïbes hispanophones.",
        relatedRecipes: ['fufu', 'mofongo']
    },
        {
        id: 'anticuchos',
        title: "Anticuchos de Corazón",
        origin: "Pérou",
        region: "Amérique du Sud",
        image: "/images/anticuchos-de-corazon.jpg",
        prepTime: 30,
        cookTime: 10,
        servings: 4,
        difficulty: "Moyen",
        ingredients: [
            { name: "Cœur de bœuf paré et dégraissé, taillé en lamelles régulières", quantity: "800g" },
            { name: "Pâte de piment péruvien Ají Panca rouge", quantity: "1/2 tasse" },
            { name: "Vinaigre de vin rouge", quantity: "1/3 tasse" },
            { name: "Gousses d'ail pilées", quantity: "5" },
            { name: "Cumin moulu", quantity: "1 c.à.s" },
            { name: "Origan séché froissé", quantity: "1 c.à.s" },
            { name: "Huile végétale pour la marinade et le badigeonnage", quantity: "4 c.à.s" },
            { name: "Sel et poivre noir", quantity: "Au goût" }
        ],
        utensils: [
            "Piques à brochettes en bambou trempées dans l'eau",
            "Grill barbecue à charbon très chaud",
            "Pinceau fabriqué avec des feuilles de maïs ou pinceau de cuisine"
        ],
        steps: [
            { order: 1, description: "Parage minutieux : Retirer avec un couteau bien aiguisé toute la graisse blanche et les membranes fermes du cœur de bœuf. Tailler la chair rouge en lamelles d'environ 3 cm sur 1 cm d'épaisseur.", duration: 15 },
            { order: 2, description: "La marinade péruvienne à l'Ají Panca : Dans un bol, fouetter la pâte d'Ají Panca avec le vinaigre de vin rouge, l'ail pilé, le cumin, l'origan, 2 cuillères d'huile, 1 cuillère à café de sel et du poivre. Enrober le cœur de bœuf et laisser mariner au réfrigérateur minimum 4 heures (idéalement une nuit).", duration: 240 },
            { order: 3, description: "L'enfilage : Enfiler 3 à 4 lamelles de cœur de bœuf sur chaque pique en bois en les pliant en accordéon.", duration: 10 },
            { order: 4, description: "Cuisson ultra-vive au feu de bois : Placer les brochettes sur la grille brûlante du barbecue. Cuire 2 à 3 minutes par face en badigeonnant continuellement avec le reste de marinade à l'aide du pinceau : la viande doit être saisie vivement, croustillante en surface et rosée et juteuse à cœur.", duration: 6 }
        ],
        suggestedAccompaniments: [
            "Pommes de terre bouillies dorées au grill (Papas doradas)",
            "Rondelles de maïs géant (Choclo)",
            "Sauce crémeuse au piment Ají"
        ],
        practicalTips: [
            "Le cœur de bœuf est une viande très maigre : ne la surcuisez jamais. Une cuisson courte et brûlante de 2 à 3 minutes par face suffit pour garder une tendreté exceptionnelle."
        ],
        intro: "Dans les ruelles nocturnes de Lima, la braise des anticuchos illumine les visages — chaque brochette de cœur raconte une histoire de résilience née dans les chaînes.",
        description: "L'anticucho de corazón — brochette de cœur de bœuf marinée au piment ají panca, à l'ail et au cumin, grillée sur charbon de bois — est l'un des plats les plus emblématiques du Pérou. Mais son histoire commence dans l'humiliation et la dépossession. Dès le XVIe siècle, les maîtres espagnols de Lima réservaient pour eux-mêmes les meilleurs morceaux des bœufs abattus. Les abats — cœur, foie, rognons, tripes — étaient abandonnés aux esclaves africains déportés sur les côtes péruviennes, considérés comme impropres à la table des conquistadors. C'est alors que les femmes africaines des callejones de Lima, avec leur génie culinaire millénaire, transformèrent le rebut en délice. Elles marines le cœur dans des piments locaux et des épices, apprirent à le travailler sur des brochettes d'os ou de canne à sucre, et le firent griller sur des braseros rudimentaires. L'anticucho quitta les cours des maisons d'esclaves pour envahir les rues de Lima : les anticucheras — ces vendeuses nocturnes, souvent afro-descendantes — devinrent des figures incontournables du Lima colonial puis républicain. Aujourd'hui encore, les meilleures anticucheras exercent dans le quartier de Barrios Altos, cœur historique de la présence africaine à Lima. Chaque brochette grillée est un acte de mémoire et de fierté.",
        relatedRecipes: ['suya-chanchanga']
    },
    {
        id: 'base-naturel-viande',
        title: 'CUBE Naturel : Bœuf & Mouton',
        origin: 'Héritage Traditionnel',
        region: 'Afrique',
        image: '/images/cube_boeuf.png',
        prepTime: 20,
        cookTime: 180,
        servings: 24,
        difficulty: 'Facile',
        ingredients: [
            { name: 'Carcasses et os de bœuf/mouton (Récupérés gratuitement au marché)', quantity: '2kg' },
            { name: 'Abats (cœur, rognons)', quantity: '500g' },
            { name: 'Chutes de viande grasses', quantity: '300g' },
            { name: 'Curcuma Bio (pour la couleur et santé)', quantity: '4 c.à.s' },
            { name: 'Poivre noir moulu (Acteur du curcuma)', quantity: '1 c.à.s' },
            { name: 'Oignons brûlés', quantity: '3' },
            { name: 'Ail et clous de girofle', quantity: '10 gousses' }
        ],
        steps: [
            { order: 1, description: 'Torréfaction : Préchauffer le four à 200°C. Disposer les os et carcasses sur une plaque et rôtir jusqu\'à ce qu\'ils soient bien bruns (30-40 min). C\'est la clé du goût "Maggi".', duration: 45 },
            { order: 2, description: 'Nettoyage des abats : Blanchir le cœur et les rognons 5 min dans l\'eau bouillante vinaigrée, puis les découper en petits dés.', duration: 15 },
            { order: 3, description: 'Démarrage à froid : Mettre les os rôtis et abats dans une grande marmite. Couvrir d\'eau froide (environ 5 litres).', duration: 10 },
            { order: 4, description: 'Aromatisation : Ajouter les oignons brûlés (couper en deux et noircir la face à la poêle sèche), l\'ail, les clous de girofle, le curcuma et le poivre noir.', duration: 10 },
            { order: 5, description: 'Mijotage lent : Porter à frémissement (pas d\'ébullition forte) et laisser cuire 3 à 4 heures en écumant régulièrement la mousse en surface.', duration: 240 },
            { order: 6, description: 'Filtrage : Passer le liquide au chinois ou à travers un linge propre pour ne garder que le bouillon pur.', duration: 15 },
            { order: 7, description: 'Réduction : Remettre le bouillon clair sur le feu et laisser réduire à découvert jusqu\'à ce qu\'il n\'en reste qu\'environ 500ml de liquide sirupeux.', duration: 90 },
            { order: 8, description: 'Moulage : Verser dans des bacs à glaçons et placer au congélateur ou procéder au séchage (voir conseils).', duration: 10 }
        ],
        utensils: ['Grande marmite', 'Passoire fine', 'Bacs à glaçons'],
        practicalTips: [
            'Le secret est la cuisson lente qui extrait le collagène des os.',
            'DÉSHYDRATATION : Pour des cubes secs ou de la poudre, étalez le liquide réduit sur du papier cuisson et enfournez à 60°C pendant 5-6h. MÉTHODE SOLAIRE : Étalez sur un plateau large et peu profond, recouvrez d\'un tissu fin blanc et exposez en plein soleil 2 à 3 jours jusqu\'à ce que ce soit parfaitement sec.',
            'Récupérez les os que les bouchers jettent en fin de marché pour un coût quasi nul.',
            'L\'association Curcuma + Poivre Noir booste l\'absorption de la curcumine de 2000%.'
        ],
        intro: 'L\'essence même de la profondeur : un bouillon doré et riche, socle invisible de tous vos chefs-d\'œuvre culinaires.',
        description: 'Un cube riche en fer et minéraux. Le curcuma lui donne la couleur "cube d\'or" du commerce, sans les produits chimiques. L\'activation par le poivre noir en fait un allié santé puissant.'
    },
    {
        id: 'base-naturel-poulet',
        title: 'CUBE Naturel : Poulet & Curcuma',
        origin: 'Héritage Traditionnel',
        region: 'Afrique',
        image: '/images/cube_poulet.png',
        prepTime: 15,
        cookTime: 120,
        servings: 24,
        difficulty: 'Facile',
        ingredients: [
            { name: 'Carcasses, pattes et têtes de poulet (Incontournables du marché)', quantity: '2kg' },
            { name: 'Gésiers et foie de volaille', quantity: '400g' },
            { name: 'Curcuma frais râpé (pour l\'éclat jaune)', quantity: '4 c.à.s' },
            { name: 'Poivre noir fraîchement moulu', quantity: '1 c.à.s' },
            { name: 'Gingembre frais', quantity: '5cm' },
            { name: 'Céleri et oignon vert', quantity: '1 bouquet' }
        ],
        steps: [
            { order: 1, description: 'Nettoyage : Laver soigneusement les pattes (retirer les griffes), les têtes et les carcasses.', duration: 15 },
            { order: 2, description: 'Blanchiment : Plonger les abats (gésiers, foies) 5 min dans l\'eau bouillante, puis les rincer à l\'eau froide.', duration: 10 },
            { order: 3, description: 'Cuisson initiale : Mettre toutes les parties du poulet dans une marmite, couvrir d\'eau froide et porter à ébullition. Écumer soigneusement.', duration: 20 },
            { order: 4, description: 'Infusion de santé : Ajouter le curcuma frais râpé (attention aux taches !), le gingembre, le poivre noir et le bouquet d\'aromates.', duration: 10 },
            { order: 5, description: 'Extraction du collagène : Mijoter à feu très doux pendant 2 bonnes heures. Les pattes doivent devenir translucides.', duration: 120 },
            { order: 6, description: 'Clarification : Filtrer le bouillon à travers une passoire fine ou un tamis.', duration: 10 },
            { order: 7, description: 'Concentration : Réduire le bouillon à feu moyen jusqu\'à obtenir un "jus" épais et collant qui nappe la cuillère.', duration: 60 },
            { order: 8, description: 'Conservation : Répartir dans des bacs à glaçons et congeler. Chaque cube est une bombe d\'immunité.', duration: 10 }
        ],
        utensils: ['Marmite', 'Bacs à glaçons'],
        practicalTips: [
            'Le curcuma apporte une couleur dorée identique aux cubes industriels.',
            'DÉSHYDRATATION : Mixer le concentré et le sécher au four à basse température (ou au soleil sous un voile protecteur) pour obtenir une poudre à saupoudrer directement.',
            'Les pattes de poulet sont riches en gélatine, ce qui donne une texture parfaite au cube.',
            'Le poivre noir active les propriétés anti-inflammatoires du curcuma.'
        ],
        intro: 'Une caresse dorée pour vos plats : la douceur du poulet exaltée par l\'éclat solaire du curcuma.',
        description: 'Un cube cicatrisant et immunitaire. La couleur jaune vive rappelle les meilleurs bouillons, mais avec la force naturelle du curcuma activé.'
    },
    {
        id: 'base-naturel-fume',
        title: 'CUBE Naturel : Goût Fumé',
        origin: 'Héritage Traditionnel',
        region: 'Afrique',
        image: '/images/cube_boeuf.png',
        prepTime: 10,
        cookTime: 90,
        servings: 24,
        difficulty: 'Facile',
        ingredients: [
            { name: 'Peaux de bœuf fumées (Kanda/Pondu - récupérables au marché)', quantity: '500g' },
            { name: 'Carcasses de viande séchée/fumée', quantity: '1kg' },
            { name: 'Curcuma en poudre', quantity: '2 c.à.s' },
            { name: 'Poivre noir de Selim (Souzi)', quantity: '4 gousses' },
            { name: 'Oignons rouges brûlés', quantity: '2' }
        ],
        steps: [
            { order: 1, description: 'Préparation : Brosser les peaux de bœuf fumées sous l\'eau chaude pour enlever les impuretés de la fumaison de marché.', duration: 15 },
            { order: 2, description: 'Torréfaction des os : Faire dorer les carcasses séchées à sec dans la marmite pendant 10 min pour réveiller les arômes.', duration: 10 },
            { order: 3, description: 'Mouillage : Couvrir d\'eau froide (3-4 litres) et porter à frémissement.', duration: 5 },
            { order: 4, description: 'Signature fumée : Ajouter les oignons rouges brûlés, le poivre de Selim (écrasé) et le curcuma.', duration: 10 },
            { order: 5, description: 'Cuisson longue : Mijoter à feu très doux jusqu\'à ce que les peaux soient très tendres (environ 1h30).', duration: 90 },
            { order: 6, description: 'Filtrage intensif : Retirer les gros morceaux et filtrer le liquide.', duration: 10 },
            { order: 7, description: 'Réduction ambrée : Réduire jusqu\'à consistance de caramel sombre. C\'est l\'essence même du feu de bois.', duration: 40 },
            { order: 8, description: 'Finition : Verser dans de petits contenants. À utiliser comme cube pour les plats de "feuilles".', duration: 5 }
        ],
        utensils: ['Mixeur', 'Marmite'],
        practicalTips: [
            'Idéal pour les sauces feuilles (épinards, manioc).',
            'DÉSHYDRATATION : Étaler finement la pâte et sécher au four (ou au soleil dans une bassine couverte d\'un tissu) pour obtenir des "grains de fumée" à saupoudrer.',
            'Les bouchers ont souvent des chutes fumées moins chères en fin de journée.'
        ],
        intro: 'Le mystère du feu dans votre cuisine : un cube intense et boisé qui donne du caractère à chaque sauce.',
        description: 'Le goût ancestral du feu de bois. Le curcuma ajoute la profondeur visuelle attendue d\'un bouillon de qualité.'
    },
    {
        id: 'base-naturel-mer',
        title: 'Cube Naturel : Crevette & Poisson',
        origin: 'Héritage Traditionnel',
        region: 'Afrique',
        image: '/images/cube_poulet.png',
        prepTime: 20,
        cookTime: 60,
        servings: 24,
        difficulty: 'Facile',
        ingredients: [
            { name: 'Têtes, arrêtes et carapaces (Récupérées chez le poissonnier)', quantity: '1.5kg' },
            { name: 'Curcuma et Poivre de la Jamaïque (Allspice)', quantity: '2 c.à.s' },
            { name: 'Écrevisses séchées et Piment sec', quantity: '1/2 tasse' },
            { name: 'Thym, Ail, Oignon vert', quantity: '1 bouquet garni' },
            { name: 'Clous de girofle (Touche Diaspora)', quantity: '3' }
        ],
        steps: [
            { order: 1, description: 'Torréfaction à sec : Dans un grand faitout, faire sauter les têtes et carapaces de crevettes jusqu\'à ce qu\'elles deviennent rouge vif et dégagent une odeur de grillé.', duration: 10 },
            { order: 2, description: 'Extraction Umami : Ajouter les écrevisses séchées et le piment sec. Remuer 2 min.', duration: 5 },
            { order: 3, description: 'Aromatisation Diaspora : Ajouter le curcuma, le poivre de la Jamaïque, les clous de girofle et le bouquet garni.', duration: 5 },
            { order: 4, description: 'Mouillage rapide : Couvrir d\'eau (juste assez pour immerger les têtes). Les bouillons de mer cuisent plus vite.', duration: 5 },
            { order: 5, description: 'Mijotage : Laisser bouillir doucement pendant 45 min.', duration: 45 },
            { order: 6, description: 'Pressage : Utiliser un pilon pour écraser les têtes dans le jus afin d\'en extraire tout le "corail" et la saveur.', duration: 10 },
            { order: 7, description: 'Filtrage double : Passer d\'abord à la passoire, puis au chinois fin.', duration: 10 },
            { order: 8, description: 'Réduction finale : Réduire de moitié jusqu\'à obtenir un nectar marin puissant et ambré.', duration: 30 }
        ],
        utensils: ['Pilon', 'Marmite', 'Passoire fine'],
        practicalTips: [
            'Les déchets de poisson sont les plus riches en goût : demandez-les à votre poissonnier.',
            'DÉSHYDRATATION : Ce bouillon se transforme en une poudre de mer exceptionnelle une fois séché au four ou au soleil (méthode du plateau + voile blanc) et mixé.',
            'Le curcuma donne cette couleur "fretin" authentique sans colorants.'
        ],
        intro: 'Le chant de l\'océan concentré : un nectar marin d\'une finesse rare, voyageant entre les côtes africaines et la diaspora.',
        description: 'L\'âme de l\'océan et de la diaspora. Un cube d\'exception qui unifie les cuisines de l\'Atlantique noir grâce à son mélange d\'épices (allspice, girofle).'
    },

    {
        id: 'base-naturel-tucupi-preto',
        title: 'Tucupi Preto Ouest-Africain (Mélasse de Manioc)',
        origin: 'Afrique de l\'Ouest / Diaspora Amazonienne',
        region: 'Afrique',
        image: '/images/tucupi-preto-africain.webp',
        prepTime: 20,
        cookTime: 240,
        servings: 30,
        difficulty: 'Facile',
        tags: ['vegetarien', 'vegan'],
        ingredients: [
            { name: "Jus de pressage de manioc frais (issu de la fabrication de gari ou d'attiéké)", quantity: "5 litres" },
            { name: "Gousses d'ail écrasées", quantity: "6" },
            { name: "Branches de basilic africain (Tchayo / Akilba) ou chicorée", quantity: "1 bouquet" },
            { name: "Piments végétariens doux ou piments habanero entiers (non percés)", quantity: "2" },
            { name: "Sel marin pur", quantity: "1 c.à.s" }
        ],
        utensils: [
            "Grande marmite ou faitout en inox",
            "Récipient transparent pour décantation (pour séparer l'amidon)",
            "Chinois ou étamine fine",
            "Bouteilles en verre hermétiques"
        ],
        steps: [
            {
                order: 1,
                description: "Décantation & Récupération de l'amidon : Verser le jus de pressage de manioc frais dans un grand récipient transparent. Laisser reposer 2 à 3 heures sans remuer. L'amidon blanc pur (tapioca) se dépose complètement au fond. Transvaser délicatement le liquide jaune surnageant (le jus clair) dans le faitout. Récupérer l'amidon du fond pour le faire sécher en fécule (zéro gâchis !).",
                duration: 180
            },
            {
                order: 2,
                description: "Première ébullition détoxifiante : Porter le liquide jaune à ébullition vive pendant 30 minutes sans couvrir. Les composés cyanogéniques volatils s'évaporent totalement sous l'action de la chaleur, rendant le jus 100% propre et sain à la consommation.",
                duration: 30
            },
            {
                order: 3,
                description: "Aromatisation : Ajouter l'ail écrasé, le bouquet de basilic africain, le sel et les piments doux entiers.",
                duration: 5
            },
            {
                order: 4,
                description: "Grande réduction lente (L'Or Noir) : Baisser le feu au minimum et laisser réduire à découvert pendant 3 à 4 heures, en remuant de temps en temps. Le volume va diminuer de plus de 85%.",
                duration: 210
            },
            {
                order: 5,
                description: "Caramélisation et concentration umami : Lorsque le liquide prend une couleur acajou foncé presque noire, qu'il nappe le dos d'une cuillère comme une mélasse ou une sauce soja épaisse, retirer du feu et filtrer.",
                duration: 15
            },
            {
                order: 6,
                description: "Mise en bouteille : Verser encore chaud dans de petites bouteilles en verre stériles. Ce nectar umami se conserve 6 à 12 mois à température ambiante.",
                duration: 10
            }
        ],
        suggestedAccompaniments: [
            "1 cuillère à café dans les sauces feuilles (Saka-Saka, Ndolé)",
            "Marinade pour viandes grillées et poissons braisés",
            "Fonds de sauces légumes et féculents (Placali, Fufu, Attiéké)"
        ],
        practicalTips: [
            "L'ÉCONOMIE CIRCULAIRE PARFAITE : Au lieu de rejeter l'eau de pressage du manioc qui pollue les abords des ateliers de gari et d'attiéké, cette recette transforme un résidu gratuit en condiment gastronomique de très haute valeur.",
            "UTILISATION : Très concentré ! 1 cuillère à café suffit pour parfumer et saler un plat familial de 6 personnes.",
            "Sécurité absolue : L'ébullition prolongée détruit intégralement l'acide cyanhydrique naturel du manioc. Le Tucupi Preto est consommé depuis des millénaires en toute sécurité."
        ],
        intro: "L'or noir du manioc : la transformation magique de l'eau de pressage du gari et de l'attiéké en un élixir umami sirupeux qui surpasse n'importe quel arôme liquide industriel.",
        description: "Né de la rencontre entre le savoir-faire amazonien et la culture ouest-africaine du manioc, le Tucupi Preto valorise le jus de décantation traditionnellement jeté lors de la fabrication du gari ou de l'attiéké. En réduisant pendant des heures, les sucres complexes et les acides aminés caramélisent pour créer une bombe d'umami 100% végétale."
    },
    {
        id: 'base-naturel-soumbala-or',
        title: 'Poudre d\'Or Ancestrale : Soumbala & Kuli-Kuli',
        origin: 'Afrique de l\'Ouest (Mali, Burkina Faso, Guinée)',
        region: 'Afrique',
        image: '/images/poudre-or-ancestrale.webp',
        prepTime: 15,
        cookTime: 15,
        servings: 50,
        difficulty: 'Facile',
        tags: ['vegetarien', 'vegan'],
        ingredients: [
            { name: "Soumbala (néré fermenté séché)", quantity: "150g" },
            { name: "Kuli-Kuli (tourteau d'arachide torréfié dégraissé)", quantity: "150g" },
            { name: "Curcuma pur en poudre (éclat doré & bienfaits)", quantity: "3 c.à.s" },
            { name: "Ail en poudre & oignon séché moulu", quantity: "3 c.à.s de chaque" },
            { name: "Graines de coriandre torréfiées", quantity: "1 c.à.s" },
            { name: "Poivre de Penja ou poivre noir moulu (activateur de curcumine)", quantity: "1 c.à.s" },
            { name: "Sel marin pur non raffiné", quantity: "2 c.à.s" }
        ],
        utensils: [
            "Poêle en fonte ou poêle sèche",
            "Mixeur à épices ou moulin à café",
            "Bocal hermétique en verre"
        ],
        steps: [
            {
                order: 1,
                description: "Torréfaction des aromates : Dans une poêle sèche à feu doux, faire torréfier les graines de soumbala sec et les graines de coriandre pendant 3 minutes jusqu'à ce que les arômes grillés s'exhalent sans noircir.",
                duration: 5
            },
            {
                order: 2,
                description: "Concassage du Kuli-kuli : Émietter les galettes ou bâtonnets de Kuli-kuli dans un mortier ou un robot.",
                duration: 5
            },
            {
                order: 3,
                description: "Broyage fin : Réunir dans le mixeur le soumbala torréfié, le Kuli-kuli, l'ail, l'oignon, le curcuma, le poivre noir et le sel marin.",
                duration: 5
            },
            {
                order: 4,
                description: "Mixage d'or : Mixer par impulsions jusqu'à obtenir une poudre fine dorée et homogène.",
                duration: 5
            },
            {
                order: 5,
                description: "Conservation : Conserver dans un bocal hermétique à l'abri de l'humidité. Se conserve 6 mois à température ambiante.",
                duration: 5
            }
        ],
        suggestedAccompaniments: [
            "Saupoudrage direct en fin de cuisson dans tous les plats",
            "Assaisonnement pour riz, haricots, soupes et ragoûts",
            "Substitut 1 pour 1 à n'importe quel cube chimique émietté"
        ],
        practicalTips: [
            "LE DUO SANTÉ CURCUMA + POIVRE NOIR : La pipérine du poivre noir décuple l'assimilation de la curcumine de 2000%, transformant votre condiment quotidien en bouclier anti-inflammatoire.",
            "UMAMI NATUREL PUISSANT : Le soumbala apporte la note viandée et fromagée que les industriels imitent avec du glutamate de synthèse."
        ],
        intro: "Le cube d'or réinventé à partir de nos racines : néré fermenté, arachides pressées et curcuma pour remplacer définitivement les cubes industriels sur votre table.",
        description: "Cette poudre d'or combine trois trésors sahéliens : le soumbala (royaume de l'umami végétal), le kuli-kuli (pour la rondeur toastée) et le curcuma activé par le poivre noir. Elle s'utilise exactement comme un bouillon cube classique, sans aucun produit de synthèse ni conservateur."
    },
    {
        id: 'base-naturel-marin-akpi',
        title: 'Condiment Marin & Émulsion d\'Akpi',
        origin: 'Côte d\'Ivoire / Cameroun / Golfe de Guinée',
        region: 'Afrique',
        image: '/images/condiment-marin-akpi.webp',
        prepTime: 20,
        cookTime: 25,
        servings: 30,
        difficulty: 'Facile',
        tags: ['poisson-fruits-de-mer'],
        ingredients: [
            { name: "Écrevisses ou crevettes séchées entières", quantity: "200g" },
            { name: "Graines d'Akpi (Djansang / Njangsa)", quantity: "100g" },
            { name: "Petit poisson séché ou fumé (fretin / keta schoolboys)", quantity: "100g" },
            { name: "Gousses d'ail et rondelle (arbre à ail) râpée", quantity: "4 gousses + 1 rondelle" },
            { name: "Grains de poivre de Selim (Kini / Hwentia)", quantity: "3 grains (sans graines intérieures)" },
            { name: "Fleur de sel marin", quantity: "1.5 c.à.s" }
        ],
        utensils: [
            "Poêle pour torréfaction",
            "Mixeur puissant",
            "Tamis fin"
        ],
        steps: [
            {
                order: 1,
                description: "Torréfaction de l'Akpi : Faire dorer les graines d'akpi à sec dans une poêle chaude pendant 4 minutes en remuant constamment. Elles doivent devenir friables et dégager un arôme de noisette grillée.",
                duration: 5
            },
            {
                order: 2,
                description: "Séchage & Croustillant des crustacés : Passer les crevettes et poissons séchés 5 minutes dans la poêle chaude pour chasser toute humidité résiduelle.",
                duration: 5
            },
            {
                order: 3,
                description: "Concassage des épices boisées : Ouvrir les grains de poivre de Selim, retirer les graines amères intérieures et ne garder que la cosse aromatique. Râper la rondelle.",
                duration: 5
            },
            {
                order: 4,
                description: "Broyage fin : Mixer ensemble l'akpi torréfié, les crevettes, le poisson, l'ail séché, le poivre de Selim et la fleur de sel jusqu'à consistance sablonneuse très fine.",
                duration: 10
            },
            {
                order: 5,
                description: "Tamisage : Passer la poudre au tamis fin pour éliminer les éclats d'arêtes trop dures.",
                duration: 5
            }
        ],
        suggestedAccompaniments: [
            "Idéal pour les sauces gombo, kédjénou, thiéboudienne et soupes de poissons",
            "Riz gras au poisson et sauces graine"
        ],
        practicalTips: [
            "L'EFFET LIANT MAGIQUE DE L'AKPI : L'akpi ne donne pas seulement du goût, ses huiles nobles émulsionnent et épaississent naturellement les sauces, donnant ce velouté irrésistible que l'on croyait réservé aux graisses saturées industrielles.",
            "LA SYNERGIE UMAMI : Les ribonucléotides des crustacés multiplient l'umami des légumes par 8."
        ],
        intro: "La quintessence de l'Atlantique noir : crevettes sauvages séchées et graines d'Akpi torréfiées pour des sauces au fumet marin incomparable.",
        description: "En Afrique centrale et de l'Ouest, l'Akpi (Djansang) est la graine reine des sauces onctueuses. Mariée aux crevettes de rivière et poissons fumés, elle crée un condiment marin complet qui relègue les cubes arôme crevette au rang d'antiquités chimiques."
    },

        {
        id: 'cachupa-rico',
        title: "Cachupa Rico",
        origin: "Cap-Vert",
        region: "Afrique",
        image: "/images/cachupa.webp",
        prepTime: 30,
        cookTime: 120,
        servings: 6,
        difficulty: "Moyen",
        ingredients: [
            { name: "Maïs blanc ou jaune concassé (Samp / Milho de cachupa)", quantity: "400g" },
            { name: "Haricots secs assortis (haricots rouges et haricots pedra)", quantity: "200g" },
            { name: "Viande de porc (travers ou poitrine) et bœuf coupés en morceaux", quantity: "500g" },
            { name: "Saucisse Linguiça ou Chouriço fumé en rondelles", quantity: "200g" },
            { name: "Manioc et patate douce coupés en cubes", quantity: "300g" },
            { name: "Chou vert tronçonné", quantity: "1/4" },
            { name: "Oignons émincés", quantity: "2" },
            { name: "Gousses d'ail pilées", quantity: "4" },
            { name: "Feuilles de laurier", quantity: "3" },
            { name: "Huile d'olive", quantity: "3 c.à.s" },
            { name: "Sel et poivre", quantity: "Au goût" }
        ],
        utensils: [
            "Grande marmite en fonte à fond épais"
        ],
        steps: [
            { order: 1, description: "Trempage : Faire tremper le maïs concassé et les haricots dans l'eau froide pendant 8 heures.", duration: 480 },
            { order: 2, description: "Lancement du maïs et haricots : Égoutter, placer dans la grande marmite avec 2 litres d'eau fraîche et les feuilles de laurier. Cuire à feu moyen pendant 45 minutes.", duration: 45 },
            { order: 3, description: "Ajout des viandes et saucisses : Faire revenir les viandes, la saucisse linguiça, les oignons et l'ail dans une poêle avec l'huile d'olive pendant 8 minutes. Verser dans la marmite de maïs. Laisser mijoter 45 minutes.", duration: 45 },
            { order: 4, description: "Légumes et liaison : Ajouter le manioc, la patate douce et le chou. Poursuivre la cuisson 25 minutes jusqu'à ce que les féculents soient fondants et que le bouillon forme une soupe consistante et réconfortante.", duration: 25 }
        ],
        suggestedAccompaniments: [
            "Pain traditionnel",
            "Œuf au plat posé sur la Cachupa réchauffée le lendemain (Cachupa Refogada)"
        ],
        practicalTips: [
            "La Cachupa est encore meilleure le lendemain : faites-la revenir à la poêle avec un peu d'oignon et servez avec un œuf au plat pour le célèbre petit-déjeuner capverdien."
        ],
        intro: "Maïs, haricots, racines et mémoire — la Cachupa est le récit complet du Cap-Vert dans une marmite.",
        description: "La Cachupa est l'âme du Cap-Vert — ces dix îles volcaniques surgies de l'Atlantique au croisement des routes maritimes africaines, européennes et américaines. Née de la nécessité sur un archipel aride aux ressources limitées, elle est aussi le reflet fidèle d'une société métissée depuis sa fondation au XVe siècle. Les Portugais arrivèrent sur des îles inhabitées et en firent une plaque tournante du commerce triangulaire, déportant des Africains de Sénégambie, de Guinée-Bissau et de la Côte d'Ivoire. Ces esclaves apportèrent le savoir-faire du maïs pilé, des haricots mijotés et des légumes-racines — une base commune à toute la cuisine d'Afrique de l'Ouest. Les Portugais ajoutèrent les saucisses (chouriço, linguiça), les lardons et les morceaux de porc — leur propre vocabulaire culinaire. La Cachupa Rico (riche) se distingue de la Cachupa Pobre (pauvre, sans viande) par l'abondance de ses protéines animales, marqueur de prospérité dans une société historiquement précaire. Mijotée lentement dans de grandes marmites, parfumée au laurier et aux épices, la Cachupa se mange en famille sur plusieurs jours — réchauffée, elle n'en est que meilleure. Les Capverdiens de la diaspora, dispersés entre Lisbonne, Rotterdam, Boston et Dakar, la cuisinent comme un acte de retour aux sources. Elle est à la fois archive et ancre.",
        relatedRecipes: ['feijoada', 'hoppin-john']
    },
        {
        id: 'coucou-flying-fish',
        title: "Cou-cou & Flying Fish",
        origin: "Barbade",
        region: "Caraïbes et Antilles",
        image: "/images/cou cou  flying fish.webp",
        prepTime: 25,
        cookTime: 35,
        servings: 4,
        difficulty: "Moyen",
        ingredients: [
            { name: "Filets de poisson volant frais (ou dorade/aiglefin)", quantity: "600g" },
            { name: "Semoule de maïs fine (Cornmeal)", quantity: "250g" },
            { name: "Gombos frais coupés en fines rondelles", quantity: "150g" },
            { name: "Beurre salé", quantity: "50g" },
            { name: "Tomates concassées", quantity: "3" },
            { name: "Oignon haché", quantity: "1" },
            { name: "Poivron doux haché", quantity: "1" },
            { name: "Assaisonnement bajan (cives, ail, thym, piment, girofle)", quantity: "2 c.à.s" },
            { name: "Eau pour le cou-cou", quantity: "700ml" },
            { name: "Sel et poivre", quantity: "Au goût" }
        ],
        utensils: [
            "Bâton à Cou-Cou (spatule en bois longue)",
            "Casserole pour le poisson",
            "Marmite pour la polenta"
        ],
        steps: [
            { order: 1, description: "Marinade du poisson : Rouler les filets de poisson volant avec l'assaisonnement bajan et laisser reposer 15 minutes.", duration: 15 },
            { order: 2, description: "Le court-bouillon créole : Dans une casserole, faire revenir l'oignon, le poivron et les tomates dans un peu de beurre. Ajouter 200 ml d'eau, déposer les rouleaux de poisson délicatement et pocher à feu doux pendant 12 minutes.", duration: 15 },
            { order: 3, description: "Cuisson des gombos pour le Cou-Cou : Dans une autre marmite, faire bouillir 500 ml d'eau avec les rondelles de gombo et une pincée de sel pendant 8 minutes jusqu'à texture sirupeuse. Retirer une tasse de liquide de gombo.", duration: 8 },
            { order: 4, description: "Le battage du Cou-Cou : Verser la semoule de maïs en pluie dans la marmite de gombos bouillante en tournant vigoureusement avec le bâton de bois pour éviter les grumeaux. Cuire à feu doux en tournant continuellement pendant 12 minutes en ajoutant du liquide de gombo réservé et le beurre pour obtenir une pâte jaune soyeuse et ferme.", duration: 12 },
            { order: 5, description: "Dressage : Former un dôme de Cou-Cou au centre de l'assiette avec un creux au sommet, y déposer les rouleaux de poisson volant et napper généreusement de sauce tomate créole.", duration: 3 }
        ],
        suggestedAccompaniments: [
            "Se déguste comme plat national complet"
        ],
        practicalTips: [
            "Tournez le Cou-Cou sans interruption à l'aide d'une solide spatule en bois : la semoule doit devenir lisse et se détacher parfaitement des parois de la casserole."
        ],
        intro: "Le Cou-Cou est l'âme de la Barbade — cornmeal et gombo tissés ensemble comme les mains qui l'ont créé.",
        description: "Le Cou-Cou est bien plus qu'un plat national : c'est la mémoire vivante des Africains déportés à la Barbade, l'île qui accueillit le premier port négrier des Antilles britanniques. Ses ancêtres sont les fufu d'Afrique de l'Ouest — ces pâtes de céréales pilées que les Ashanti, les Fon et les Yoruba préparaient au mortier depuis des millénaires. Sur les plantations de canne à sucre de la Barbade, les esclaves réinventèrent leur geste ancestral avec ce qu'ils trouvaient : la farine de maïs (cornmeal) apportée par les colons, et le gombo (okra), plante africaine qui traversa l'Atlantique dans les mains mêmes des captifs. L'okra, en fondant dans la polenta, lui donne ce liant soyeux si caractéristique — une technique purement africaine appliquée à des ingrédients du Nouveau Monde. Le poisson volant (flying fish), lui, était péché dans les eaux turquoise de la mer des Caraïbes par les hommes contraints de nourrir les plantations. Abondant et peu coûteux, il devint la protéine du peuple. Ensemble, le Cou-Cou et le flying fish forgèrent l'identité barbadienne, inscrite aujourd'hui dans la Constitution du pays comme plat national. Chaque bouchée est un acte de résistance douce : la transformation de la contrainte en beauté, de la ration en festin.",
        relatedRecipes: ['sauce-gombo', 'gumbo', 'callaloo']
    },
        {
        id: 'hoppin-john',
        title: "Hoppin\\",
        origin: "Sud des États-Unis (Gullah Geechee)",
        region: "Amérique du Nord",
        image: "/images/hoppin john.webp",
        prepTime: 15,
        cookTime: 50,
        servings: 6,
        difficulty: "Facile",
        ingredients: [
            { name: "Haricots à œil noir (Black-eyed peas / Niébé) secs trempés", quantity: "350g" },
            { name: "Riz blanc long grain étuvé", quantity: "2 tasses (400g)" },
            { name: "Jarret de porc fumé (Ham hock) ou lardons fumés épais", quantity: "300g" },
            { name: "Gros oignon jaune haché", quantity: "1" },
            { name: "Branches de céleri émincées", quantity: "2" },
            { name: "Gousses d'ail pilées", quantity: "4" },
            { name: "Piment de Cayenne ou piment rouge frais", quantity: "1/2 c.à.c" },
            { name: "Feuilles de laurier", quantity: "2" },
            { name: "Thym séché", quantity: "1 c.à.c" },
            { name: "Bouillon de volaille ou eau", quantity: "1L" },
            { name: "Sel et poivre noir", quantity: "Au goût" }
        ],
        utensils: [
            "Grande marmite en fonte"
        ],
        steps: [
            { order: 1, description: "Cuisson du jarret fumé et des haricots : Dans la marmite, faire suer l'oignon, le céleri et l'ail avec le jarret fumé pendant 5 minutes. Ajouter les haricots égouttés, le laurier, le thym, le piment de Cayenne et couvrir avec 1 litre de bouillon. Cuire à feu moyen-doux pendant 35 minutes jusqu'à ce que les haricots soient tendres mais encore entiers.", duration: 40 },
            { order: 2, description: "Effilochage de la viande : Retirer le jarret de porc, retirer les os et effilocher la viande fumée en petits morceaux. La remettre dans la marmite.", duration: 5 },
            { order: 3, description: "Cuisson conjointe du riz : Ajouter le riz cru lavé dans la marmite (le niveau de bouillon doit dépasser le riz de 1 cm ; en retirer ou ajouter un peu si nécessaire). Couvrir hermétiquement et laisser cuire à feu très doux pendant 20 minutes sans remuer.", duration: 20 },
            { order: 4, description: "Service : Éteindre le feu, laisser reposer 5 minutes et aérer à la fourchette : le riz a absorbé le parfum du porc fumé et des haricots.", duration: 5 }
        ],
        suggestedAccompaniments: [
            "Chou cavalier braisé (Collard greens)",
            "Pain de maïs chaud"
        ],
        practicalTips: [
            "Plat porte-bonheur emblématique du Nouvel An chez les Afro-Américains (Gullah Geechee) : les haricots symbolisent les pièces de monnaie et le chou les billets de banque."
        ],
        intro: "Dans chaque grain de black-eyed pea se cache un grain de Sénégal — le Hoppin' John est la mémoire douce du peuple Gullah.",
        description: "Le Hoppin' John est l'un des ponts les plus directs qui enjambent l'Atlantique entre l'Afrique de l'Ouest et les États-Unis. Ce plat de riz aux black-eyed peas (niébé, ou cowpeas) de Caroline du Sud est l'héritier direct du thiébou niébé sénégalais et du waakye ghanéen — ces plats de riz aux haricots que les peuples Wolof, Mandé et Akan cuisinaient quotidiennement en Afrique occidentale. Lorsque les négriers sillonnaient la côte de Sénégambie, ils embarquaient souvent des sacs de riz et de niébé comme vivres de bord — préservant involontairement les graines d'une future cuisine de résistance. Les esclaves débarqués dans les Sea Islands de Caroline du Sud — majoritairement d'origine sénégalaise et gambienne — portaient en eux ce savoir culinaire. Isolés des grands centres urbains, les peuples Gullah préservèrent leur langue, leur culture et leurs recettes avec une pureté exceptionnelle. Le Hoppin' John devint leur plat de cohésion : mangé le 1er janvier pour porter chance, préparé avec du riz long-grain et des niébé mijotés avec des herbes et des épices. Aujourd'hui, les communautés Gullah de Caroline du Sud revendiquent fièrement cette filiation africaine, refusant que l'histoire de leur cuisine soit effacée. Le Hoppin' John est leur lettre d'amour à leurs ancêtres.",
        relatedRecipes: ['feijoada', 'cachupa-rico']
    },
        {
        id: 'callaloo',
        title: "Callaloo",
        origin: "Trinité-et-Tobago",
        region: "Caraïbes et Antilles",
        image: "/images/sancocho.webp",
        prepTime: 20,
        cookTime: 35,
        servings: 4,
        difficulty: "Facile",
        ingredients: [
            { name: "Feuilles de dachine / amarante / taro (ou épinards frais)", quantity: "500g" },
            { name: "Gombos frais coupés en rondelles", quantity: "150g" },
            { name: "Lait de coco frais", quantity: "400ml" },
            { name: "Chair de crabe fraîche ou crabe bleu entier nettoyé", quantity: "200g" },
            { name: "Morceau de viande salée ou queue de porc dessalée (optionnel)", quantity: "100g" },
            { name: "Oignon émincé", quantity: "1" },
            { name: "Gousses d'ail pilées", quantity: "4" },
            { name: "Piment Scotch Bonnet entier (intact)", quantity: "1" },
            { name: "Ciboulette fraîche ou cives hachées", quantity: "1 bouquet" },
            { name: "Thym frais", quantity: "3 branches" },
            { name: "Sel et poivre", quantity: "Au goût" }
        ],
        utensils: [
            "Grande casserole",
            "Swizzle stick traditionnel (ou mixeur plongeant)"
        ],
        steps: [
            { order: 1, description: "Assemblage des ingrédients : Dans la casserole, déposer les feuilles de dachine grossièrement hachées, les rondelles de gombo, l'oignon, l'ail, les cives, le thym, la viande salée et la chair de crabe. Verser le lait de coco.", duration: 5 },
            { order: 2, description: "Mijotage au lait de coco : Poser le piment entier délicatement par-dessus sans le percer. Porter à ébullition, puis couvrir et laisser mijoter à feu doux pendant 25 minutes : les feuilles et les gombos doivent devenir complètement fondants.", duration: 25 },
            { order: 3, description: "L'émulsion traditionnelle (Swizzling) : Retirer le piment entier avec précaution. À l'aide d'un batteur en bois swizzle stick (ou quelques brèves pulsations de mixeur plongeant), émulsionner la préparation jusqu'à obtenir un velouté vert épais, lisse et mousseux.", duration: 4 },
            { order: 4, description: "Service : Servir bien chaud comme soupe ou comme accompagnement d'un riz créole.", duration: 1 }
        ],
        suggestedAccompaniments: [
            "Riz blanc",
            "Riz aux petits pois (Rice and peas)",
            "Macaroni pie trinidadienne"
        ],
        practicalTips: [
            "Ne percez jamais le piment Scotch Bonnet pendant la cuisson : il doit seulement parfumer délicatement le lait de coco sans brûler le velouté."
        ],
        intro: "Verte comme la forêt tropicale, crémeuse comme la promesse d'un lendemain — la soupe Callaloo nourrit l'âme de Trinidad.",
        description: "Le Callaloo de Trinidad est né dans les jardins de case — ces minuscules parcelles que les maîtres esclavagistes accordaient parfois aux esclaves pour cultiver leur propre nourriture, aux marges des grandes plantations. C'est là que les femmes africaines, principalement d'origine Igbo, Yoruba et Fon, plantèrent les taro (dasheen) dont les larges feuilles vertes constituent la base du plat. La plante de taro, originaire d'Afrique subsaharienne et d'Asie du Sud-Est, était déjà connue des captifs : elle ressemblait aux légumes-feuilles de leur Afrique natale, les brédes et feuilles de manioc. Le gombo (okra), autre voyageur africain, apporta son pouvoir liant. Le lait de coco, héritage des échanges entre Afrique et Asie, enveloppa tout d'une douceur crémeuse. Les crabes de mangrove, pêchés dans les estuaires de Port d'Espagne, devinrent la protéine festive du plat. Au fil des générations, le Callaloo s'enrichit des apports indo-trinidadiens — curcuma, feuilles de cari — qui rejoignirent l'île après l'abolition de l'esclavage avec l'engagisme. Ce syncrétisme culinaire profond fait du Callaloo le symbole de Trinidad elle-même : une nation née de la douleur et de la rencontre, où chaque culture a laissé une saveur dans le chaudron commun.",
        relatedRecipes: ['sauce-gombo', 'gumbo', 'coucou-flying-fish']
    },
    {
        id: 'amiwo-poulet',
        title: 'Amiwo / Djinkouné',
        origin: 'Bénin / Togo',
        region: 'Afrique',
        image: '/images/amiwo djinkoume.webp', // Placeholder for now
        prepTime: 30,
        cookTime: 45,
        servings: 4,
        difficulty: 'Moyen',
        ingredients: [
            { name: 'Farine de maïs', quantity: '500g' },
            { name: 'Poulet morceaux', quantity: '1kg' },
            { name: 'Tomate concentrée', quantity: '2 c.à.s' },
            { name: 'Tomates fraîches', quantity: '4' },
            { name: 'Oignons', quantity: '3' },
            { name: 'Ail', quantity: '4 gousses' },
            { name: 'Crevettes séchées (pilées)', quantity: '2 c.à.s' },
            { name: 'Piment', quantity: 'au goût' },
            { name: 'Cube Naturel : Poulet', quantity: '1' },
            { name: 'Huile', quantity: '1/2 tasse' }
        ],
        utensils: ['Marmite', 'Spatule en bois (pour tourner la pâte)'],
        steps: [
            { order: 1, description: 'Assaisonner et frire le poulet. Réserver.', duration: 20 },
            { order: 2, description: 'Dans la même huile, faire revenir oignons, tomates, ail et crevettes séchées.', duration: 10 },
            { order: 3, description: 'Ajouter de l\'eau, la tomate concentrée et le cube. Laisser bouillir pour obtenir un bouillon corsé.', duration: 15 },
            { order: 4, description: 'Prélever une partie de ce jus (pour la sauce d\'accompagnement) et laisser le reste dans la marmite.', duration: 2 },
            { order: 5, description: 'Verser la farine de maïs en pluie dans le bouillon bouillant tout en remuant vigoureusement pour éviter les grumeaux.', duration: 15 },
            { order: 6, description: 'Cuire à feu doux en tournant jusqu\'à ce que la pâte (Amiwo) soit ferme et se détache des parois.', duration: 10 }
        ],
        suggestedAccompaniments: ['Jus de cuisson (Moyo)', 'Piment noir (Shito)'],
        practicalTips: [
            'Le secret est de bien assaisonner l\'eau de cuisson : l\'Amiwo doit avoir du goût même sans sauce.',
            'Les crevettes séchées donnent le goût "terre-mer" caractéristique.',
            'À la différence du pâte blanche, l\'Amiwo ne doit pas être fermenté (ou très peu).'
        ],
        intro: "Une pâte de maïs rouge et aérienne, cuite amoureusement dans le bouillon concentré d'un poulet fermier rissolé.",
        description: "Appelé Amiwo au sud du Bénin ou Djinkouné au Togo, ce chef-d'œuvre de la cuisine Fon et Mina est le roi incontesté des banquets, des mariages et des repas de prestige. Contrairement aux pâtes blanches de maïs ordinaires cuites à l'eau simple, l'Amiwo est cuit directement dans une sauce tomate intensément parfumée, enrichie du jus de cuisson d'un poulet fermier doré, de crevettes séchées pilées, d'oignons doux et de piments parfumés. La semoule de maïs blanc y est battue énergiquement au feu de bois jusqu'à ce qu'elle devienne d'un rouge corail uniforme, souple et brillante. Servi avec le poulet braisé croustillant et un condiment d'oignons frais (Moyo), c'est l'incarnation de l'hospitalité bienveillante du Golfe de Guinée.",
        relatedRecipes: ['fufu-light-soup', 'funge']
    },
    {
        id: 'ablo',
        title: 'Ablo',
        origin: 'Togo / Bénin',
        region: 'Afrique',
        image: '/images/ablo.webp', // Placeholder
        prepTime: 40,
        cookTime: 20,
        servings: 6,
        difficulty: 'Moyen',
        ingredients: [
            { name: 'Farine de riz', quantity: '300g' },
            { name: 'Fécule de maïs (Maïzena)', quantity: '100g' },
            { name: 'Levure boulangère', quantity: '1 sachet' },
            { name: 'Sucre', quantity: '100g' },
            { name: 'Sel', quantity: '1 pincée' },
            { name: 'Eau tiède', quantity: '500ml' }
        ],
        utensils: ['Couscoussier (Vapeur)', 'Petits moules ou Feuilles'],
        steps: [
            { order: 1, description: 'Bouillie : Mélanger la fécule de maïs avec un peu d\'eau et cuire pour obtenir une bouillie légère. Laisser tiédir.', duration: 15 },
            { order: 2, description: 'Mélange : Dans un cul de poule, mélanger la farine de riz, la levure, le sucre et la bouillie tiède.', duration: 10 },
            { order: 3, description: 'Fermentation : Couvrir et laisser reposer 3h à 5h (la pâte doit buller et doubler).', duration: 180 },
            { order: 4, description: 'Cuisson : Verser dans des petits moules huilés et cuire à la vapeur 15-20 min.', duration: 20 },
            { order: 5, description: 'Servir avec une sauce tomate pimentée (Moyo) et du poisson frit.', duration: 0 }
        ],
        suggestedAccompaniments: ['Sauce Moyo', 'Sardines frites', 'Piment vert écrasé'],
        practicalTips: [
            'La fermentation est la clé : sans elle, l\'Ablo sera lourd et colles.',
            'L\'étape de la "bouillie" initiale aide à donner du moelleux.',
            'Traditionnellement cuit dans des feuilles de bananier, ce qui parfume le riz.'
        ],
        intro: 'Le pain vapeur de l\'Afrique de l\'Ouest : de petits gâteaux de riz blancs, moelleux, légèrement sucrés et piquants.',
        description: 'L\'Ablo est une friandise salée-sucrée incontournable au Togo et au Bénin. Ce sont de petits gâteaux de riz fermentés cuits à la vapeur, offrant une texture spongieuse et aérée unique. Ils se dégustent traditionnellement avec une sauce tomate très relevée pour créer un contraste de saveurs.'
    }
,
    {
        id: 'matapa',
        title: 'Matapa',
        origin: 'Mozambique',
        region: 'Afrique',
        image: '/images/matapa.webp',
        prepTime: 30,
        cookTime: 60,
        servings: 6,
        difficulty: 'Moyen',
        ingredients: [
            { name: 'Feuilles de manioc pilées', quantity: '500g' },
            { name: 'Lait de coco', quantity: '400ml' },
            { name: 'Cacahuètes non salées (pilées)', quantity: '200g' },
            { name: 'Ail', quantity: '4 gousses' },
            { name: 'Crevettes ou chair de crabe (optionnel)', quantity: '250g' },
            { name: 'Sel', quantity: 'Au goût' }
        ],
        utensils: ['Marmite', 'Mortier et Pilon (ou Mixeur)'],
        steps: [
            { order: 1, description: 'Faites bouillir les feuilles de manioc pilées dans un peu d\'eau avec de l\'ail haché pendant environ 30 minutes jusqu\'à ce qu\'elles soient tendres.', duration: 30 },
            { order: 2, description: 'Ajoutez le lait de coco et laissez mijoter à feu doux pendant 15 minutes.', duration: 15 },
            { order: 3, description: 'Incorporez les cacahuètes pilées en remuant doucement pour lier la sauce.', duration: 5 },
            { order: 4, description: 'Ajoutez les crevettes ou le crabe, salez, et laissez cuire encore 10 minutes.', duration: 10 },
            { order: 5, description: 'Servez chaud, traditionnellement accompagné de Xima (pâte de maïs) ou de riz blanc.' }
        ],
        intro: 'Un trésor culinaire du Mozambique, alliant la douceur de la noix de coco et de l\'arachide aux feuilles de manioc.',
        description: 'Le Matapa est le plat signature du Mozambique. Cette préparation riche et onctueuse célèbre l\'abondance des cocotiers de l\'océan Indien et l\'héritage des saveurs locales. Sans viande rouge, il est à la fois sain, nourrissant et incroyablement savoureux.'
    },
    {
        id: 'frango-zambeziana',
        title: 'Frango à Zambeziana',
        origin: 'Mozambique',
        region: 'Afrique',
        image: '/images/frango a zambeziana.webp',
        prepTime: 20,
        cookTime: 45,
        servings: 4,
        difficulty: 'Facile',
        ingredients: [
            { name: 'Poulet entier (coupé en crapaudine ou morceaux)', quantity: '1' },
            { name: 'Lait de coco', quantity: '200ml' },
            { name: 'Piment Piri-Piri', quantity: 'Au goût' },
            { name: 'Ail', quantity: '5 gousses' },
            { name: 'Jus de citron', quantity: '2 citrons' },
            { name: 'Sel et poivre', quantity: 'Au goût' }
        ],
        utensils: ['Barbecue (ou Four)', 'Pinceau de cuisine', 'Bol de mixage'],
        steps: [
            { order: 1, description: 'Préparez la marinade en mixant l\'ail, le jus de citron, le piment piri-piri, le sel et le poivre.' },
            { order: 2, description: 'Enduisez le poulet de cette marinade et laissez reposer au moins 2 heures (idéalement toute la nuit).', duration: 120 },
            { order: 3, description: 'Préparez un barbecue ou chauffez votre four à 200°C. Commencez la cuisson du poulet.', duration: 15 },
            { order: 4, description: 'Pendant la cuisson, badigeonnez généreusement et régulièrement le poulet avec le lait de coco à l\'aide d\'un pinceau.', duration: 30 },
            { order: 5, description: 'Le poulet est prêt lorsqu\'il est bien doré et que le lait de coco a formé une délicieuse croûte caramélisée.' }
        ],
        intro: 'Le fameux poulet grillé mozambicain, dont le secret réside dans un badigeonnage régulier au lait de coco.',
        description: 'Venu de la province de Zambézie, ce plat est une masterclass de cuisson au barbecue. Contrairement aux autres poulets piri-piri, le Frango à Zambeziana tire sa douceur et sa croûte spectaculaire du lait de coco qui caramélise doucement sur les braises. Une harmonie parfaite entre piquant et douceur.'
    },

        {
        id: "pilau-swahili",
        title: "Pilau Swahili",
        origin: "Tanzanie / Kenya (Zanzibar)",
        region: "Afrique",
        image: "/images/pilau swahili.jpg",
        prepTime: 25,
        cookTime: 45,
        servings: 6,
        difficulty: "Moyen",
        ingredients: [
                  {
                            "name": "Riz Basmati ou grain long",
                            "quantity": "500g"
                  },
                  {
                            "name": "Viande de bœuf ou de chèvre en cubes",
                            "quantity": "700g"
                  },
                  {
                            "name": "Oignons rouges émincés",
                            "quantity": "3 gros"
                  },
                  {
                            "name": "Pommes de terre coupées en deux",
                            "quantity": "4 moyennes"
                  },
                  {
                            "name": "Ail râpé",
                            "quantity": "5 gousses"
                  },
                  {
                            "name": "Gingembre frais râpé",
                            "quantity": "2 c.à.s"
                  },
                  {
                            "name": "Mélange Pilau Masala moulu (cumin, cannelle, cardamome, girofle, poivre)",
                            "quantity": "2 c.à.s"
                  },
                  {
                            "name": "Clous de girofle entiers",
                            "quantity": "6 pièces"
                  },
                  {
                            "name": "Bâton de cannelle",
                            "quantity": "1 pièce"
                  },
                  {
                            "name": "Graines de cardamome verte entrouvertes",
                            "quantity": "6 pièces"
                  },
                  {
                            "name": "Graines de cumin entier",
                            "quantity": "1 c.à.c"
                  },
                  {
                            "name": "Huile végétale ou Ghee (beurre clarifié)",
                            "quantity": "4 c.à.s"
                  },
                  {
                            "name": "Bouillon chaud de cuisson de la viande",
                            "quantity": "900ml"
                  },
                  {
                            "name": "Sel",
                            "quantity": "Au goût"
                  }
        ],
        utensils: [
                  "Grande cocotte ou marmite à fond épais",
                  "Passoire fine",
                  "Cuillère en bois",
                  "Fourchette pour égrener",
                  "Feuille d'aluminium"
        ],
        steps: [
                  {
                            "order": 1,
                            "description": "Précuire la viande : Déposer la viande dans une marmite avec la moitié de l'ail et du gingembre, 1 cuillère à café de sel et 1 litre d'eau. Laisser frémir à couvert 30 minutes jusqu'à tendreté. Filtrer et réserver précieusement le bouillon chaud.",
                            "duration": 30
                  },
                  {
                            "order": 2,
                            "description": "Laver le riz : Rincer le riz basmati à l'eau froide plusieurs fois jusqu'à ce que l'eau soit parfaitement claire. Laisser égoutter dans une passoire.",
                            "duration": 10
                  },
                  {
                            "order": 3,
                            "description": "Caramélisation des oignons (étape clé) : Dans une grande cocotte, chauffer l'huile ou le ghee à feu moyen. Faire revenir patiemment les oignons émincés pendant 12 à 15 minutes jusqu'à obtenir une couleur brun foncé intense sans les brûler (c'est le secret de la couleur ambrée du Pilau).",
                            "duration": 15
                  },
                  {
                            "order": 4,
                            "description": "Torréfaction des épices : Ajouter les épices entières (clous de girofle, cannelle, cardamome, cumin) et le reste d'ail et gingembre. Remuer 2 minutes pour libérer les arômes.",
                            "duration": 2
                  },
                  {
                            "order": 5,
                            "description": "Saisir viande et pommes de terre : Ajouter la viande précuite, les moitiés de pommes de terre et la poudre de Pilau Masala. Faire revenir 5 minutes en remuant pour imprégner les sucs.",
                            "duration": 5
                  },
                  {
                            "order": 6,
                            "description": "Nacrer le riz : Verser le riz égoutté dans la cocotte. Mélanger délicatement pendant 2 minutes pour enrober chaque grain de matière grasse parfumée.",
                            "duration": 2
                  },
                  {
                            "order": 7,
                            "description": "Mouillage : Verser les 900ml de bouillon de viande chaud réservé. Saler au goût. Porter à vive ébullition jusqu'à ce que le liquide arrive au niveau du riz et que des cratères de vapeur se forment.",
                            "duration": 8
                  },
                  {
                            "order": 8,
                            "description": "Cuisson étouffée : Placer une feuille d'aluminium sous le couvercle pour fermer hermétiquement. Réduire le feu au minimum et laisser cuire à l'étouffée pendant 20 minutes sans ouvrir.",
                            "duration": 20
                  },
                  {
                            "order": 9,
                            "description": "Finition : Laisser reposer 10 minutes feu éteint, puis égrener délicatement le riz à la fourchette.",
                            "duration": 10
                  }
        ],
        suggestedAccompaniments: [
                  "Kachumbari (salade fraîche de tomates, oignons rouges, piment et coriandre au citron vert)",
                  "Bananes douces fraîches"
        ],
        practicalTips: [
                  "Le brunissement poussé des oignons est le secret technique n°1 : s'ils sont juste blonds, le Pilau sera pâle et manquera de caractère.",
                  "Rincer le riz jusqu'à ce que l'eau soit limpide garantit que les grains ne colleront pas.",
                  "Ne retirez jamais le couvercle pendant la phase d'étouffée pour que la vapeur résiduelle cuise les pommes de terre à cœur."
        ],
        intro: "L'âme de Zanzibar dans une cocotte : un riz ambré aux grains détachés, parfumé aux clous de girofle, à la cardamome et au cumin torréfié.",
        description: "Le Pilau Swahili est le symbole par excellence de la culture swahilie, née des noces millénaires entre les peuples bantous de la côte est-africaine et les marchands de l'océan Indien. Présent à tous les mariages et grandes réceptions à Zanzibar, Mombasa ou Dar es Salaam, il se distingue par la caramélisation profonde de ses oignons et la cuisson conjointe du riz et de la viande dans un bouillon unique épicé."
    },

    {
        id: "misir-wot",
        title: "Misir Wot",
        origin: "Éthiopie / Érythrée",
        region: "Afrique",
        image: "/images/misir wot.jpg",
        prepTime: 15,
        cookTime: 45,
        servings: 4,
        difficulty: "Facile",
        ingredients: [
                  {
                            "name": "Lentilles corail (Misir)",
                            "quantity": "300g"
                  },
                  {
                            "name": "Oignons rouges hachés très finement",
                            "quantity": "3 gros"
                  },
                  {
                            "name": "Ail écrasé",
                            "quantity": "4 gousses"
                  },
                  {
                            "name": "Gingembre frais râpé",
                            "quantity": "1 c.à.s"
                  },
                  {
                            "name": "Mélange d'épices Berbéré éthiopien",
                            "quantity": "2 à 3 c.à.s"
                  },
                  {
                            "name": "Concentré de tomate",
                            "quantity": "1 c.à.s"
                  },
                  {
                            "name": "Huile végétale ou Niter Kibbeh (beurre épicé clarifié)",
                            "quantity": "4 c.à.s"
                  },
                  {
                            "name": "Eau tiède ou bouillon de légumes",
                            "quantity": "600ml"
                  },
                  {
                            "name": "Sel",
                            "quantity": "Au goût"
                  }
        ],
        utensils: [
                  "Casserole à fond épais ou marmite",
                  "Passoire fine",
                  "Cuillère en bois",
                  "Presse-ail"
        ],
        steps: [
                  {
                            "order": 1,
                            "description": "Cuisson des oignons à sec (technique ancestrale) : Dans une cocotte sans aucune matière grasse, déposer les oignons rouges très finement hachés. Faire suer à feu doux en remuant continuellement 10 à 12 minutes jusqu'à ce qu'ils fondent en compotée dorée.",
                            "duration": 12
                  },
                  {
                            "order": 2,
                            "description": "Ajout de matière grasse : Verser l'huile végétale (ou Niter Kibbeh), l'ail écrasé et le gingembre frais. Faire revenir 2 minutes pour libérer les sucs aromatiques.",
                            "duration": 2
                  },
                  {
                            "order": 3,
                            "description": "Torréfaction du Berbéré : Ajouter le Berbéré et le concentré de tomate. Faire revenir doucement 3 minutes en remuant (ajouter une cuillère d'eau tiède si le mélange accroche).",
                            "duration": 3
                  },
                  {
                            "order": 4,
                            "description": "Rinçage des lentilles : Rincer soigneusement les lentilles corail sous l'eau froide dans une passoire fine et les égoutter.",
                            "duration": 3
                  },
                  {
                            "order": 5,
                            "description": "Nacrage : Verser les lentilles dans la cocotte et bien les mélanger à la base rubis d'oignons et de Berbéré pendant 2 minutes.",
                            "duration": 2
                  },
                  {
                            "order": 6,
                            "description": "Mijotage : Mouiller avec les 600ml d'eau tiède ou bouillon. Saler. Porter à petite ébullition, couvrir à moitié et laisser mijoter à feu doux pendant 25 à 30 minutes en remuant de temps en temps, jusqu'à ce que les lentilles soient tendres et forment un velouté onctueux.",
                            "duration": 28
                  },
                  {
                            "order": 7,
                            "description": "Finition : Rectifier le sel. La consistance doit être riche et crémeuse. Servir chaud.",
                            "duration": 2
                  }
        ],
        suggestedAccompaniments: [
                  "Injera (galette de teff fermenté)",
                  "Gomen (feuilles de chou éthiopiennes sautées)",
                  "Salade de tomates et piments frais"
        ],
        practicalTips: [
                  "La cuisson initiale des oignons sans huile est la technique reine de la cuisine éthiopienne : elle apporte un velouté incomparable sans aucune amertume.",
                  "C'est un plat emblématique de jeûne (Tsom) dans la tradition orthodoxe éthiopienne, 100% végétalien lorsqu'il est cuit à l'huile végétale.",
                  "Les saveurs se bonifient encore après une nuit de repos au frais."
        ],
        intro: "Un velouté de lentilles corail rubis, vibrant d'épices Berbéré, de gingembre et d'oignons fondus : le cœur battant des banquets végétariens d'Abyssinie.",
        description: "Plat roi des hauts plateaux éthiopiens et érythréens, le Misir Wot incarne la riche tradition culinaire des carêmes coptes (plus de 180 jours par an). Dégusté traditionnellement avec les doigts à l'aide de lambeaux d'Injera, la galette de teff fermentée millénaire, il offre une richesse aromatique incomparable grâce au Berbéré, mélange savant de piments, fenugrec, coriandre et cardamome Korarima."
    },

    {
        id: "sukuma-wiki",
        title: "Sukuma Wiki",
        origin: "Kenya / Tanzanie / Ouganda",
        region: "Afrique",
        image: "/images/sukuma wiki.webp",
        prepTime: 20,
        cookTime: 15,
        servings: 4,
        difficulty: "Facile",
        ingredients: [
                  {
                            "name": "Feuilles de chou vert frisé ou chou cavalier (collard greens)",
                            "quantity": "500g"
                  },
                  {
                            "name": "Oignon rouge émincé",
                            "quantity": "1 gros"
                  },
                  {
                            "name": "Tomates fraîches concassées",
                            "quantity": "2 moyennes"
                  },
                  {
                            "name": "Gousses d'ail râpées",
                            "quantity": "2 gousses"
                  },
                  {
                            "name": "Piment vert frais émincé",
                            "quantity": "1 piment"
                  },
                  {
                            "name": "Huile végétale",
                            "quantity": "2 c.à.s"
                  },
                  {
                            "name": "Graines de coriandre moulues",
                            "quantity": "1/2 c.à.c"
                  },
                  {
                            "name": "Jus de citron vert frais",
                            "quantity": "1 c.à.s"
                  },
                  {
                            "name": "Sel et poivre noir moulu",
                            "quantity": "Au goût"
                  }
        ],
        utensils: [
                  "Grande sauteuse ou poêle profonde",
                  "Planche à découper et grand couteau éminceur",
                  "Spatule"
        ],
        steps: [
                  {
                            "order": 1,
                            "description": "Chiffonnade fine : Laver les feuilles de chou, retirer les côtes centrales dures. Superposer les feuilles, les rouler fermement en boudin et les émincer en très fines lanières.",
                            "duration": 15
                  },
                  {
                            "order": 2,
                            "description": "Faire suer : Dans une sauteuse, chauffer l'huile à feu moyen. Ajouter l'oignon émincé et cuire 4 minutes jusqu'à ce qu'il soit doré et translucide.",
                            "duration": 4
                  },
                  {
                            "order": 3,
                            "description": "Ajouter ail et piment : Incorporer l'ail râpé et le piment vert. Remuer 1 minute.",
                            "duration": 1
                  },
                  {
                            "order": 4,
                            "description": "Compotée de tomates : Ajouter les tomates concassées, la coriandre moulue, le sel et le poivre. Laisser compoter 5 minutes jusqu'à formation d'une sauce onctueuse.",
                            "duration": 5
                  },
                  {
                            "order": 5,
                            "description": "Sauter le chou : Ajouter les lanières de chou dans la sauteuse. Mélanger vigoureusement pour bien les enrober. Cuire 5 à 7 minutes à feu vif : les feuilles doivent s'assouplir tout en conservant leur belle couleur verte et un croquant frais.",
                            "duration": 6
                  },
                  {
                            "order": 6,
                            "description": "Touche finale : Arroser du jus de citron vert frais hors du feu, remuer et servir sans attendre.",
                            "duration": 1
                  }
        ],
        suggestedAccompaniments: [
                  "Ugali (pâte de maïs blanc ferme)",
                  "Nyama Choma (viande grillée)",
                  "Kachumbari"
        ],
        practicalTips: [
                  "Ne surcuisez pas les feuilles : elles doivent garder leur chlorophylle vive et leur texture agréable.",
                  "L'éminçage en lanières très fines est la signature des grands cuisiniers kenyans.",
                  "Le filet de citron vert en fin de cuisson réveille les saveurs et favorise l'assimilation du fer végétal."
        ],
        intro: "Le plat quotidien le plus emblématique de la vallée du Rift : du chou vert ciselé à la perfection, sauté aux tomates fraîches, oignons doux et jus de citron vert.",
        description: "En swahili, \"Sukuma Wiki\" signifie littéralement \"pousser la semaine\" : c'est le plat vert et économique qui permettait aux familles ouvrières de tenir jusqu'au jour de paie. Aujourd'hui hissé au rang de monument culinaire au Kenya et en Afrique de l'Est, il accompagne obligatoirement l'Ugali de maïs blanc lors des déjeuners quotidiens et des repas de famille."
    },

    {
        id: "mbongo-tchobi",
        title: "Mbongo Tchobi",
        origin: "Cameroun (Peuple Bassa)",
        region: "Afrique",
        image: "/images/mbongo tchobi.jpg",
        prepTime: 30,
        cookTime: 40,
        servings: 4,
        difficulty: "Moyen",
        ingredients: [
                  {
                            "name": "Poisson frais en darnes épaisses (mâchoiron, bar ou silure)",
                            "quantity": "1 kg"
                  },
                  {
                            "name": "Poudre noire de Mbongo (écorces et fruits de Mbongo brûlés)",
                            "quantity": "3 c.à.s"
                  },
                  {
                            "name": "Graines de Njansang",
                            "quantity": "1 c.à.s"
                  },
                  {
                            "name": "Graines de Pèbè (fausse muscade)",
                            "quantity": "2 graines torréfiées"
                  },
                  {
                            "name": "Tomates fraîches mûres",
                            "quantity": "3 pièces"
                  },
                  {
                            "name": "Oignon moyen",
                            "quantity": "1 pièce"
                  },
                  {
                            "name": "Gousses d'ail",
                            "quantity": "3 pièces"
                  },
                  {
                            "name": "Gingembre frais",
                            "quantity": "1 tronçon de 2cm"
                  },
                  {
                            "name": "Poivre blanc de Penja moulu",
                            "quantity": "1 c.à.c"
                  },
                  {
                            "name": "Huile végétale",
                            "quantity": "4 c.à.s"
                  },
                  {
                            "name": "Piment habanero entier frais",
                            "quantity": "1 pièce"
                  },
                  {
                            "name": "Eau tiède",
                            "quantity": "500ml"
                  },
                  {
                            "name": "Sel",
                            "quantity": "Au goût"
                  }
        ],
        utensils: [
                  "Marmite ou sauteuse",
                  "Mortier ou mixeur",
                  "Cuillère en bois",
                  "Bol de dilution"
        ],
        steps: [
                  {
                            "order": 1,
                            "description": "Nettoyer le poisson : Laver soigneusement les darnes de poisson au jus de citron et sel. Éponger et assaisonner d'une pincée de sel et poivre de Penja. Réserver.",
                            "duration": 10
                  },
                  {
                            "order": 2,
                            "description": "Pâte aromatique : Mixer finement les tomates, l'oignon, l'ail, le gingembre, le njansang et le pèbè avec un demi-verre d'eau pour obtenir une purée homogène.",
                            "duration": 5
                  },
                  {
                            "order": 3,
                            "description": "Cuisson de la purée : Chauffer l'huile dans une sauteuse. Verser la purée d'aromates et laisser réduire 10 minutes à feu moyen jusqu'à évaporation de l'eau.",
                            "duration": 10
                  },
                  {
                            "order": 4,
                            "description": "Incorporation du Mbongo : Diluer la poudre de Mbongo dans 100ml d'eau tiède pour éviter les grumeaux. Verser ce liquide noir d'ébène dans la cocotte. Remuer délicatement.",
                            "duration": 3
                  },
                  {
                            "order": 5,
                            "description": "Mouillage et frémissement : Ajouter les 400ml d'eau restants, le poivre blanc de Penja, le piment entier non percé et le sel. Laisser frémir 10 minutes.",
                            "duration": 10
                  },
                  {
                            "order": 6,
                            "description": "Mijotage du poisson : Déposer délicatement les darnes de poisson dans la sauce noire. Napper à la cuillère. Couvrir et laisser mijoter 15 minutes à feu doux (ne pas remuer à la cuillère pour ne pas briser la chair, secouer simplement la marmite).",
                            "duration": 15
                  },
                  {
                            "order": 7,
                            "description": "La sauce doit napper généreusement le dos d'une cuillère. Retirer le piment et servir bien chaud.",
                            "duration": 2
                  }
        ],
        suggestedAccompaniments: [
                  "Bananes plantains mûres bouillies",
                  "Bobolo ou Miondo (bâtons de manioc fermenté)",
                  "Macabo ou taro vapeur"
        ],
        practicalTips: [
                  "Ne remuez jamais le poisson à la spatule : secouez doucement la cocotte par les anses.",
                  "Le pèbè et le njansang sont indispensables pour équilibrer la note boisée et fumée du Mbongo avec du velouté.",
                  "Le plat est encore plus savoureux réchauffé après quelques heures de repos."
        ],
        intro: "Une sauce d'un noir d'ébène fascinant, aux arômes boisés et sauvages d'écorces brûlées et de poivre blanc de Penja : le joyau des forêts camerounaises.",
        description: "Plat totémique du peuple Bassa du Cameroun littoral et forestier, le Mbongo Tchobi est une rareté gastronomique. Sa couleur noire spectaculaire provient de la poudre issue des fruits et écorces du Mbongo (Scorodophloeus zenkeri / Aframomum citratum), torréfiés à la flamme. Autrefois réservé aux grands dignitaires pour ses propriétés digestives et toniques, il symbolise le respect profond de la pharmacopée forestière bantoue."
    },

    {
        id: "koki",
        title: "Koki",
        origin: "Cameroun (Grassfields)",
        region: "Afrique",
        image: "/images/koki.jpg",
        prepTime: 50,
        cookTime: 90,
        servings: 6,
        difficulty: "Moyen",
        ingredients: [
                  {
                            "name": "Graines de niébé blanc (haricots à œil noir)",
                            "quantity": "500g"
                  },
                  {
                            "name": "Huile de palme rouge brute non raffinée",
                            "quantity": "200ml"
                  },
                  {
                            "name": "Eau tiède",
                            "quantity": "450ml"
                  },
                  {
                            "name": "Piments habanero entiers",
                            "quantity": "2 pièces"
                  },
                  {
                            "name": "Sel fin",
                            "quantity": "1 c.à.s bombée"
                  },
                  {
                            "name": "Feuilles de bananier ramollies à la flamme (ou papier cuisson doublé)",
                            "quantity": "Pour les papillotes"
                  },
                  {
                            "name": "Ficelle de cuisine ou raphia",
                            "quantity": "Pour fermer"
                  }
        ],
        utensils: [
                  "Grand mortier ou blender puissant",
                  "Grand cul de poule",
                  "Spatule en bois",
                  "Grande marmite avec panier vapeur",
                  "Feuilles de bananier"
        ],
        steps: [
                  {
                            "order": 1,
                            "description": "Trempage et décorticage : Tremper les niébés dans l'eau froide 4 à 6 heures. Frotter énergiquement entre les paumes pour détacher les peaux. Évacuer les peaux par flottaison jusqu'à obtenir des graines blanches impeccables.",
                            "duration": 30
                  },
                  {
                            "order": 2,
                            "description": "Broyage fin : Égoutter les haricots. Les broyer au mortier ou au mixeur avec un peu d'eau tiède jusqu'à obtenir une pâte lisse et dense.",
                            "duration": 10
                  },
                  {
                            "order": 3,
                            "description": "Battage de la pâte (secret d'aération) : Dans un grand saladier, battre la pâte vigoureusement à la spatule en bois pendant 10 minutes dans un seul sens pour y incorporer de l'air. La pâte doit blanchir et s'alléger.",
                            "duration": 10
                  },
                  {
                            "order": 4,
                            "description": "Émulsion à l'huile rouge : Tiédir légèrement l'huile de palme pour la fluidifier (sans la surchauffer). Verser en filet continu sur la pâte tout en battant. La pâte prend une magnifique teinte jaune soleil dorée. Incorporer l'eau tiède restante et le sel.",
                            "duration": 5
                  },
                  {
                            "order": 5,
                            "description": "Emballage en papillotes : Découper les feuilles de bananier assouplies à la flamme. Placer 2 couches croisées dans un bol. Verser 2 à 3 louches de préparation, insérer un piment entier au milieu, refermer hermétiquement et ficeler avec le raphia.",
                            "duration": 15
                  },
                  {
                            "order": 6,
                            "description": "Cuisson vapeur lente : Déposer les paquets dans une marmite à vapeur avec de l'eau bouillante au fond. Couvrir hermétiquement et cuire à feu moyen pendant 1h30 en surveillant le niveau d'eau.",
                            "duration": 90
                  },
                  {
                            "order": 7,
                            "description": "Laisser tiédir 10 minutes avant de déballer. La texture doit être ferme sous le doigt mais soyeuse et fondante au palais.",
                            "duration": 10
                  }
        ],
        suggestedAccompaniments: [
                  "Bananes plantains mûres vapeur",
                  "Taro bouilli",
                  "Bâton de manioc"
        ],
        practicalTips: [
                  "Battre énergiquement la pâte est indispensable pour donner au Koki sa légèreté mousseuse.",
                  "L'huile de palme doit être tiédie très doucement pour conserver tous ses caroténoïdes naturels et sa couleur or éclatante.",
                  "Le piment glissé au cœur parfume délicatement la pâte sans la rendre piquante."
        ],
        intro: "Un gâteau solaire à base de niébé battu et d'huile de palme rouge cuit à la vapeur dans des feuilles de bananier : la texture soyeuse la plus addictive des hautes terres du Cameroun.",
        description: "Le Koki est le joyau culinaire des peuples Bamiléké et Grassfields de l'Ouest du Cameroun. Véritable prouesse technique consistant à émulsionner la purée de niébé à l'huile de palme brute avant une longue cuisson à la vapeur étouffée, il est traditionnellement confectionné pour les grands rassemblements coutumiers et les banquets d'honneur."
    },

    {
        id: "poulet-nyembwe",
        title: "Poulet Nyembwe",
        origin: "Gabon",
        region: "Afrique",
        image: "/images/poulet-a-la-moambe.webp",
        prepTime: 25,
        cookTime: 50,
        servings: 4,
        difficulty: "Moyen",
        ingredients: [
                  {
                            "name": "Poulet fermier découpé en morceaux",
                            "quantity": "1,2 kg"
                  },
                  {
                            "name": "Pâte ou pulpe concentrée de noix de palme (Nyembwe)",
                            "quantity": "400g"
                  },
                  {
                            "name": "Oignons émincés",
                            "quantity": "2 gros"
                  },
                  {
                            "name": "Gousses d'ail pilées",
                            "quantity": "4 pièces"
                  },
                  {
                            "name": "Piment habanero entier frais",
                            "quantity": "1 pièce"
                  },
                  {
                            "name": "Eau tiède",
                            "quantity": "400ml"
                  },
                  {
                            "name": "Feuilles de laurier",
                            "quantity": "2 feuilles"
                  },
                  {
                            "name": "Sel et poivre noir moulu",
                            "quantity": "Au goût"
                  }
        ],
        utensils: [
                  "Marmite en fonte",
                  "Four ou gril pour fumer/braiser le poulet",
                  "Cuillère en bois"
        ],
        steps: [
                  {
                            "order": 1,
                            "description": "Braiser le poulet : Assaisonner les morceaux de poulet avec du sel, du poivre et la moitié de l'ail. Faire dorer et fumer au barbecue ou au four à 220°C pendant 20 minutes jusqu'à belle coloration dorée.",
                            "duration": 20
                  },
                  {
                            "order": 2,
                            "description": "Base aromatique : Dans une marmite en fonte, déposer le poulet braisé, les oignons émincés, le reste d'ail et les feuilles de laurier. Faire suer 3 minutes.",
                            "duration": 3
                  },
                  {
                            "order": 3,
                            "description": "Délayer la sauce : Diluer la purée de Nyembwe dans les 400ml d'eau tiède. Verser cette sauce onctueuse rouge-orangée sur le poulet.",
                            "duration": 2
                  },
                  {
                            "order": 4,
                            "description": "Mijotage lent : Porter à ébullition en remuant. Déposer le piment entier délicatement à la surface sans le percer. Baisser le feu et laisser mijoter à découvert pendant 25 à 30 minutes.",
                            "duration": 30
                  },
                  {
                            "order": 5,
                            "description": "Liaison finale : La sauce doit épaissir et napper la cuillère, avec une fine pellicule d'huile rouge brillante remontant en surface. Retirer le piment et rectifier le sel.",
                            "duration": 5
                  }
        ],
        suggestedAccompaniments: [
                  "Manioc vapeur ou bâtons de Bobolo",
                  "Bananes plantains pilées ou bouillies",
                  "Riz blanc"
        ],
        practicalTips: [
                  "Précuire le poulet au gril ou au four avant de le plonger dans la sauce apporte la note fumée indispensable à l'authenticité gabonaise.",
                  "Laissez réduire à découvert pour que l'excédent d'eau s'évapore et que la sauce devienne veloutée."
        ],
        intro: "Le ragoût réconfortant du Gabon : un poulet fermier braisé au feu de bois, nappé d'une sauce soyeuse et riche extraite de la pulpe rouge des noix de palme.",
        description: "Plat national par excellence de la République Gabonaise, le Nyembwe tire son nom du mot myènè signifiant huile ou pulpe de noix de palme (Elaeis guineensis). Ce plat rassemble toutes les provinces du pays autour de la table dominicale, célébrant la générosité des terroirs forestiers d'Afrique Centrale."
    },

    {
        id: "waakye",
        title: "Waakye",
        origin: "Ghana",
        region: "Afrique",
        image: "/images/waakye.jpg",
        prepTime: 20,
        cookTime: 50,
        servings: 6,
        difficulty: "Facile",
        ingredients: [
                  {
                            "name": "Haricots niébé (black-eyed peas)",
                            "quantity": "300g"
                  },
                  {
                            "name": "Riz blanc à grain long ou parfumé",
                            "quantity": "400g"
                  },
                  {
                            "name": "Tiges séchées de sorgho rouge (Waakye leaves)",
                            "quantity": "4 à 5 tiges"
                  },
                  {
                            "name": "Eau",
                            "quantity": "1,5 L"
                  },
                  {
                            "name": "Bicarbonate de soude alimentaire (ou potasse)",
                            "quantity": "1/4 c.à.c"
                  },
                  {
                            "name": "Sel",
                            "quantity": "1 c.à.s"
                  }
        ],
        utensils: [
                  "Grande marmite",
                  "Pince de cuisine",
                  "Fourchette pour égrener",
                  "Passoire"
        ],
        steps: [
                  {
                            "order": 1,
                            "description": "Infusion rouge au sorgho : Rincer les tiges de sorgho sous l'eau. Dans une grande marmite, porter 1,5 L d'eau à ébullition avec les tiges et la pointe de bicarbonate. Laisser frémir 10 minutes : l'eau prend une magnifique teinte pourpre bordeaux foncée.",
                            "duration": 10
                  },
                  {
                            "order": 2,
                            "description": "Cuisson des haricots : Rincer les haricots niébé et les plonger dans l'eau pourpre bouillante avec les tiges de sorgho. Cuire à feu moyen 25 à 30 minutes jusqu'à ce qu'ils soient tendres sous la dent.",
                            "duration": 30
                  },
                  {
                            "order": 3,
                            "description": "Retirer les tiges : À l'aide d'une pince, retirer les tiges de sorgho qui ont libéré toute leur couleur et leurs principes actifs.",
                            "duration": 2
                  },
                  {
                            "order": 4,
                            "description": "Ajout du riz : Rincer le riz blanc à l'eau claire. L'ajouter dans la marmite avec les haricots et le bouillon pourpre. Saler. Le niveau d'eau doit dépasser le riz de 1,5 cm environ.",
                            "duration": 3
                  },
                  {
                            "order": 5,
                            "description": "Cuisson étouffée : Porter à ébullition vive jusqu'à ce que l'eau soit absorbée en surface (environ 5 minutes). Réduire le feu au minimum absolu, couvrir hermétiquement et cuire à l'étouffée 20 minutes.",
                            "duration": 20
                  },
                  {
                            "order": 6,
                            "description": "Égrener : Le riz et les haricots ont pris une couleur pourpre uniforme. Égrener à la fourchette et servir bien chaud.",
                            "duration": 5
                  }
        ],
        suggestedAccompaniments: [
                  "Shito (sauce piment noir ghanéenne au poisson fumé)",
                  "Waakye Stew (sauce tomate et viande braisée)",
                  "Spaghetti ghanéens (Talia)",
                  "Gari (semoule de manioc)",
                  "Œufs durs et avocat"
        ],
        practicalTips: [
                  "Les tiges de sorgho rouge séché (Waakye leaves) sont un trésor médicinal ancestral, exceptionnellement riches en polyphénols antioxydants.",
                  "Si vous ne trouvez pas de tiges de sorgho, une infusion corsée de fleurs de bissap (hibiscus) avec une pincée de bicarbonate offre une belle alternative naturelle."
        ],
        intro: "Le roi des petits-déjeuners de rue ghanéens : un riz et des haricots infusés dans des tiges de sorgho rouge médicinal qui lui confèrent sa couleur pourpre sacrée.",
        description: "Originaire des peuples du nord du Ghana et du Sahel, le Waakye (prononcé \"Waatché\") est devenu l'aliment fédérateur de tout le Ghana. Vendu dès l'aube aux carrefours d'Accra dans de larges feuilles de bananier avec un assortiment copieux de Shito noir piquant, de spaghettis épicés et d'œufs durs, il illustre l'utilisation millénaire du sorgho rouge comme colorant alimentaire et bienfait pour la santé."
    },

    {
        id: "couscous-fonio-royal",
        title: "Couscous de Fonio Royal",
        origin: "Mali / Guinée / Sénégal (Empire Mandingue)",
        region: "Afrique",
        image: "/images/Couscous de Fonio Royal.jpg",
        prepTime: 30,
        cookTime: 50,
        servings: 6,
        difficulty: "Moyen",
        ingredients: [
                  {
                            "name": "Fonio lavé et précuit",
                            "quantity": "500g"
                  },
                  {
                            "name": "Viande d'agneau ou de mouton en morceaux",
                            "quantity": "800g"
                  },
                  {
                            "name": "Carottes épluchées coupées en tronçons",
                            "quantity": "3 pièces"
                  },
                  {
                            "name": "Navets ou patate douce coupés en cubes",
                            "quantity": "2 pièces"
                  },
                  {
                            "name": "Morceau de courge ou potiron",
                            "quantity": "200g"
                  },
                  {
                            "name": "Chou blanc en quartiers",
                            "quantity": "1/4 de chou"
                  },
                  {
                            "name": "Gombos frais entiers",
                            "quantity": "6 pièces"
                  },
                  {
                            "name": "Oignons émincés",
                            "quantity": "2 gros"
                  },
                  {
                            "name": "Gousses d'ail hachées",
                            "quantity": "4 pièces"
                  },
                  {
                            "name": "Concentré de tomate",
                            "quantity": "2 c.à.s"
                  },
                  {
                            "name": "Soumbala moulu (néré fermenté)",
                            "quantity": "1 c.à.s"
                  },
                  {
                            "name": "Piment frais entier",
                            "quantity": "1 pièce"
                  },
                  {
                            "name": "Huile d'arachide ou végétale",
                            "quantity": "4 c.à.s"
                  },
                  {
                            "name": "Beurre ou beurre de karité pour le fonio",
                            "quantity": "30g"
                  },
                  {
                            "name": "Eau tiède",
                            "quantity": "1,2 L"
                  },
                  {
                            "name": "Sel et poivre",
                            "quantity": "Au goût"
                  }
        ],
        utensils: [
                  "Couscoussier complet",
                  "Tissu étamine fine ou gaze pour retenir le fonio",
                  "Grand plat pour égrener",
                  "Fourchette"
        ],
        steps: [
                  {
                            "order": 1,
                            "description": "Rissoler la viande : Dans la marmite du couscoussier, chauffer l'huile d'arachide. Faire dorer les morceaux d'agneau sur toutes leurs faces pendant 8 minutes. Ajouter oignons et ail, cuire 4 minutes.",
                            "duration": 12
                  },
                  {
                            "order": 2,
                            "description": "Sauce au Soumbala : Ajouter le concentré de tomate et le soumbala. Remuer 2 minutes pour libérer les sucs. Verser les 1,2 L d'eau, saler et poivrer.",
                            "duration": 5
                  },
                  {
                            "order": 3,
                            "description": "Légumes fermes : Plonger les carottes, les navets, le chou et le piment entier dans le bouillon. Porter à ébullition.",
                            "duration": 5
                  },
                  {
                            "order": 4,
                            "description": "Première vapeur du fonio : Humidifier légèrement le fonio avec 100ml d'eau tiède salée en l'égrenant entre les doigts. Tapisser le panier vapeur d'une étamine fine (pour que les minuscules graines ne s'échappent pas). Verser le fonio et cuire à la vapeur 15 minutes sur le bouillon.",
                            "duration": 15
                  },
                  {
                            "order": 5,
                            "description": "Aérer le fonio : Verser le fonio dans un plat creux. L'arroser de 150ml d'eau tiède et incorporer le beurre (ou beurre de karité) à la fourchette pour détacher chaque graine.",
                            "duration": 5
                  },
                  {
                            "order": 6,
                            "description": "Légumes tendres : Ajouter les morceaux de courge et les gombos frais entiers dans la sauce au fond de la marmite.",
                            "duration": 3
                  },
                  {
                            "order": 7,
                            "description": "Deuxième vapeur : Remettre le fonio dans le panier vapeur pour une seconde cuisson de 15 minutes jusqu'à texture légère et fondante.",
                            "duration": 15
                  },
                  {
                            "order": 8,
                            "description": "Dressage : Disposer le fonio en dôme, entourer des morceaux d'agneau et des légumes colorés, et servir le bouillon au soumbala à part en saucière.",
                            "duration": 5
                  }
        ],
        suggestedAccompaniments: [
                  "Bouillon corsé au soumbala",
                  "Piment écrasé au jus de citron"
        ],
        practicalTips: [
                  "Le fonio est la plus petite céréale du monde : utilisez impérativement une étamine propre ou un linge fin dans le couscoussier.",
                  "Naturellement sans gluten, à indice glycémique très bas et gorgé d'acides aminés soufrés, le fonio est un trésor nutritionnel ancestral de premier ordre."
        ],
        intro: "Un couscous aérien et délicat préparé avec la plus ancienne céréale sacrée d'Afrique, nappé d'un riche bouillon d'agneau saharien, de courge et de soumbala.",
        description: "Pour le peuple Dogon du Mali, le Fonio (Digitaria exilis) est la graine originelle, la semence divine par laquelle le créateur Amma engendra l'univers. Cultivée depuis plus de cinq millénaires dans les sols arides du Sahel, cette céréale d'une richesse nutritive exceptionnelle a nourri les souverains des empires du Mali et Songhaï."
    },

    {
        id: "soupou-kandja",
        title: "Soupou Kandja",
        origin: "Sénégal",
        region: "Afrique",
        image: "/images/soupou_kandia_ou_saucegombo.jpg",
        prepTime: 30,
        cookTime: 60,
        servings: 6,
        difficulty: "Moyen",
        ingredients: [
                  {
                            "name": "Gombos frais hachés très finement",
                            "quantity": "500g"
                  },
                  {
                            "name": "Viande de bœuf en cubes",
                            "quantity": "500g"
                  },
                  {
                            "name": "Huile de palme rouge brute",
                            "quantity": "150ml"
                  },
                  {
                            "name": "Poisson fumé séché nettoyé et désarêté",
                            "quantity": "150g"
                  },
                  {
                            "name": "Yët (mollusque fermenté séché)",
                            "quantity": "1 petit morceau lavé"
                  },
                  {
                            "name": "Guèdj (poisson séché fermenté)",
                            "quantity": "1 petit morceau lavé"
                  },
                  {
                            "name": "Crevettes fraîches décortiquées ou crabes",
                            "quantity": "200g"
                  },
                  {
                            "name": "Crevettes séchées moulues",
                            "quantity": "2 c.à.s"
                  },
                  {
                            "name": "Oignons émincés",
                            "quantity": "2 gros"
                  },
                  {
                            "name": "Gousses d'ail",
                            "quantity": "3 pièces"
                  },
                  {
                            "name": "Piments habanero entiers",
                            "quantity": "2 pièces"
                  },
                  {
                            "name": "Eau",
                            "quantity": "1 L"
                  },
                  {
                            "name": "Sel",
                            "quantity": "Au goût"
                  }
        ],
        utensils: [
                  "Grande marmite",
                  "Planche à découper et couteau pour émincer le gombo",
                  "Mortier ou pilon",
                  "Louche"
        ],
        steps: [
                  {
                            "order": 1,
                            "description": "Bouillon terre-mer : Dans une marmite, déposer les cubes de bœuf, le yët et le guèdj rincés à l'eau tiède. Couvrir avec 1 litre d'eau, saler modérément et cuire 30 minutes jusqu'à début de tendreté de la viande.",
                            "duration": 30
                  },
                  {
                            "order": 2,
                            "description": "Nokoss aromatique : Au mortier ou au mixeur, écraser un oignon, l'ail et les crevettes séchées moulues pour former une pâte dense.",
                            "duration": 5
                  },
                  {
                            "order": 3,
                            "description": "Ajout poissons et nokoss : Ajouter le poisson fumé désarêté, les crevettes fraîches et la pâte nokoss dans le bouillon. Laisser frémir 10 minutes.",
                            "duration": 10
                  },
                  {
                            "order": 4,
                            "description": "Incorporation du gombo : Verser les 500g de gombos frais hachés très finement. Remuer avec une cuillère en bois en formant des huit pour libérer la texture soyeuse du gombo. Cuire à découvert 15 minutes en remuant régulièrement.",
                            "duration": 15
                  },
                  {
                            "order": 5,
                            "description": "Liaison à l'huile rouge : Verser l'huile de palme rouge sur le ragoût. Poser les piments entiers sur le dessus sans les percer. Laisser mijoter doucement 20 minutes.",
                            "duration": 20
                  },
                  {
                            "order": 6,
                            "description": "La sauce devient dorée, brillante et veloutée. Servir chaud sur du riz blanc.",
                            "duration": 5
                  }
        ],
        suggestedAccompaniments: [
                  "Riz blanc sénégalais brisé (Céeb bu weex)",
                  "Piment écrasé au sel"
        ],
        practicalTips: [
                  "Hacher le gombo le plus finement possible : c'est le secret de la texture soyeuse et fondante de la sauce.",
                  "Le yët et le guèdj apportent la cinquième saveur umami indispensable à la cuisine sénégalaise : dessalez-les à l'eau tiède avant cuisson.",
                  "Le mucilage naturel du gombo protège l'estomac et régule le transit en douceur."
        ],
        intro: "Une merveille de la côte atlantique : du bœuf fondant, du poisson fumé et des fruits de mer mijotés dans une crème de gombos dorée à l'huile de palme.",
        description: "Le Soupou Kandja (qui signifie littéralement \"soupe de gombo\" en wolof) est l'un des fleurons du patrimoine gastronomique sénégalais. Alliance magistrale de la terre et de l'océan, il magnifie le gombo et l'huile de palme rouge en les unissant aux notes intenses du poisson fumé, du yët et des crevettes de l'Atlantique."
    },

    {
        id: "moi-moi",
        title: "Moi-Moi",
        origin: "Nigéria",
        region: "Afrique",
        image: "/images/moi moi.jpg",
        prepTime: 45,
        cookTime: 50,
        servings: 6,
        difficulty: "Moyen",
        ingredients: [
                  {
                            "name": "Haricots niébé (black-eyed peas)",
                            "quantity": "400g"
                  },
                  {
                            "name": "Poivrons rouges doux (Tatashey)",
                            "quantity": "2 gros"
                  },
                  {
                            "name": "Piments habanero (Ata Rodo)",
                            "quantity": "2 pièces"
                  },
                  {
                            "name": "Oignons rouges",
                            "quantity": "2 gros"
                  },
                  {
                            "name": "Écrevisses séchées moulues (Crayfish)",
                            "quantity": "3 c.à.s"
                  },
                  {
                            "name": "Œufs durs coupés en deux",
                            "quantity": "3 pièces"
                  },
                  {
                            "name": "Filets de maquereau fumé émietté",
                            "quantity": "150g"
                  },
                  {
                            "name": "Huile végétale ou huile de palme rouge",
                            "quantity": "100ml"
                  },
                  {
                            "name": "Bouillon tiède ou eau",
                            "quantity": "300ml"
                  },
                  {
                            "name": "Sel fin",
                            "quantity": "1 c.à.c"
                  },
                  {
                            "name": "Feuilles d'Ewe Eran (ou ramequins huilés)",
                            "quantity": "Pour les moules"
                  }
        ],
        utensils: [
                  "Blender haute puissance",
                  "Fouet à main",
                  "Marmite à vapeur",
                  "Ramequins ou feuilles d'emballage"
        ],
        steps: [
                  {
                            "order": 1,
                            "description": "Décorticage des niébés : Tremper les haricots 20 minutes dans l'eau tiède. Les frotter énergiquement entre les paumes pour détacher les peaux et les évacuer par flottaison.",
                            "duration": 20
                  },
                  {
                            "order": 2,
                            "description": "Mixage soyeux : Dans un blender puissant, déposer les haricots mondés, les poivrons rouges épépinés, les piments, les oignons et les 300ml de bouillon tiède. Mixer longuement jusqu'à texture ultra-lisse et crémeuse.",
                            "duration": 5
                  },
                  {
                            "order": 3,
                            "description": "Aérer la pâte : Verser la pâte dans un bol, ajouter l'huile végétale, les écrevisses séchées moulues et le sel. Battre au fouet 5 minutes pour incorporer un maximum d'air.",
                            "duration": 5
                  },
                  {
                            "order": 4,
                            "description": "Garniture : Verser une louche de pâte dans des feuilles pliées en cornet ou des ramequins huilés. Déposer au cœur un demi-œuf dur et du maquereau fumé. Refermer.",
                            "duration": 15
                  },
                  {
                            "order": 5,
                            "description": "Cuisson vapeur : Cuire à la vapeur dans une marmite fermée pendant 45 à 50 minutes.",
                            "duration": 50
                  },
                  {
                            "order": 6,
                            "description": "Laisser tiédir 10 minutes avant de démouler. La consistance doit être ferme, soyeuse et fondante.",
                            "duration": 10
                  }
        ],
        suggestedAccompaniments: [
                  "Jollof Rice",
                  "Ogi / Pap (bouillie de maïs fermenté)",
                  "Dodo (plantains frits)"
        ],
        practicalTips: [
                  "Le mixage ultra-fin est la clé absolue : aucun grain ne doit subsister sous la langue.",
                  "Les poivrons Tatashey donnent la teinte corail spectaculaire sans excès de piquant.",
                  "Cuit à la vapeur, sans gluten et très riche en protéines végétales pures."
        ],
        intro: "Un flan salé vapeur à la teinte corail, divinement aérien et parfumé aux poivrons rouges doux, écrevisses fumées et œufs durs.",
        description: "Plat de prestige de la culture yoruba au Nigéria, le Moi-Moi est incontournable lors des grands banquets de fête (Owambe). Ce flan de légumineuses sans gluten transforme le modeste niébé en une mousseline délicate, hautement nutritive et parfumée aux épices douces."
    },

    {
        id: "sauce-gouagouassou",
        title: "Sauce Gouagouassou",
        origin: "Côte d'Ivoire (Peuple Baoulé)",
        region: "Afrique",
        image: "/images/sauce gouagouassou.jpg",
        prepTime: 30,
        cookTime: 50,
        servings: 4,
        difficulty: "Moyen",
        ingredients: [
                  {
                            "name": "Aubergines sauvages amères fraîches (Gnan-gnan)",
                            "quantity": "200g"
                  },
                  {
                            "name": "Viande de bœuf fumée ou queue de bœuf",
                            "quantity": "400g"
                  },
                  {
                            "name": "Poisson d'eau douce fumé (mâchoiron)",
                            "quantity": "200g"
                  },
                  {
                            "name": "Pâte d'arachide pure (ou graines d'Akpi pilées)",
                            "quantity": "2 c.à.s"
                  },
                  {
                            "name": "Tomates fraîches",
                            "quantity": "2 pièces"
                  },
                  {
                            "name": "Oignons",
                            "quantity": "2 pièces"
                  },
                  {
                            "name": "Piments frais entiers",
                            "quantity": "2 pièces"
                  },
                  {
                            "name": "Poudre de crevettes séchées",
                            "quantity": "1 c.à.s"
                  },
                  {
                            "name": "Eau",
                            "quantity": "1 L"
                  },
                  {
                            "name": "Sel",
                            "quantity": "Au goût"
                  }
        ],
        utensils: [
                  "Marmite",
                  "Mortier et pilon en bois",
                  "Petite casserole",
                  "Écumoire"
        ],
        steps: [
                  {
                            "order": 1,
                            "description": "Dessalage viande : Porter la viande fumée à ébullition dans une casserole d'eau pendant 20 minutes pour l'attendrir. Égoutter.",
                            "duration": 20
                  },
                  {
                            "order": 2,
                            "description": "Cuisson légumes entiers : Dans une grande marmite, déposer la viande fumée, les tomates entières, un oignon épluché et les piments. Mouiller avec 1 litre d'eau, saler et cuire 15 minutes.",
                            "duration": 15
                  },
                  {
                            "order": 3,
                            "description": "Cuisson du Gnan-gnan : Laver les baies amères de Gnan-gnan, les faire bouillir 10 minutes dans une petite casserole d'eau puis les piler au mortier.",
                            "duration": 10
                  },
                  {
                            "order": 4,
                            "description": "Purée d'aromates : Retirer tomates, oignon et piments de la marmite. Les piler au mortier avec le 2e oignon cru et la poudre de crevettes séchées. Remettre cette pâte dans la marmite.",
                            "duration": 5
                  },
                  {
                            "order": 5,
                            "description": "Liaison : Délayer la pâte d'arachide et la purée de Gnan-gnan pilé avec une louche de bouillon chaud. Verser dans la marmite en remuant.",
                            "duration": 3
                  },
                  {
                            "order": 6,
                            "description": "Mijotage poisson fumé : Ajouter les morceaux de poisson fumé nettoyés. Laisser mijoter 20 minutes à feu doux jusqu'à liaison onctueuse.",
                            "duration": 20
                  },
                  {
                            "order": 7,
                            "description": "Rectifier le sel et servir fumant avec un bon foutou banane.",
                            "duration": 2
                  }
        ],
        suggestedAccompaniments: [
                  "Foutou Banane pilé au mortier",
                  "Foutou Igname",
                  "Riz blanc"
        ],
        practicalTips: [
                  "Le Gnan-gnan (Solanum torvum) est une petite baie amère sauvage célèbre dans la pharmacopée traditionnelle pour purifier le sang, stimuler le foie et réguler la glycémie.",
                  "L'onctuosité de la pâte d'arachide et les notes de viande fumée équilibrent parfaitement l'amertume des baies."
        ],
        intro: "L'alliance sacrée du peuple Baoulé : un ragoût de viandes fumées sublimé par la noblesse amère des baies sauvages de Gnan-gnan et la douceur de l'arachide.",
        description: "Le Gouagouassou est le plat cérémoniel d'excellence des Baoulé du centre de la Côte d'Ivoire, traditionnellement préparé pour honorer les patriarches et notables. Il illustre l'usage savant des saveurs amères indigènes, recherchées pour leurs vertus fortifiantes et digestives, associées au geste ancestral du Foutou Banane pilonné en cadence."
    },

    {
        id: "placali-sauce-kpala",
        title: "Placali & Sauce Kpala (Adémé)",
        origin: "Côte d'Ivoire / Bénin / Togo",
        region: "Afrique",
        image: "/images/plakali ademe.jpg",
        prepTime: 30,
        cookTime: 40,
        servings: 4,
        difficulty: "Moyen",
        ingredients: [
                  {
                            "name": "Pâte de manioc fermentée crue (amidon de manioc pour Placali)",
                            "quantity": "500g"
                  },
                  {
                            "name": "Poudre de gombo sec (Kpala) ou feuilles fraîches d'Adémé ciselées",
                            "quantity": "4 c.à.s de poudre ou 300g de feuilles"
                  },
                  {
                            "name": "Bicarbonate de soude ou sel de potasse (Kanwa)",
                            "quantity": "1/2 c.à.c"
                  },
                  {
                            "name": "Poisson fumé et peau de bœuf kanda nettoyée",
                            "quantity": "250g"
                  },
                  {
                            "name": "Crabes de terre nettoyés ou crevettes séchées pilées",
                            "quantity": "2 crabes ou 2 c.à.s de poudre"
                  },
                  {
                            "name": "Piments frais écrasés",
                            "quantity": "Au goût"
                  },
                  {
                            "name": "Bouillon ou eau tiède",
                            "quantity": "1,1 L (500ml pour sauce + 600ml pour placali)"
                  },
                  {
                            "name": "Sel",
                            "quantity": "Au goût"
                  }
        ],
        utensils: [
                  "Casserole à fond épais pour le placali",
                  "Spatule en bois plate solide (spatule à placali)",
                  "Fouet pour la sauce",
                  "Tamis fin"
        ],
        steps: [
                  {
                            "order": 1,
                            "description": "Sauce Kpala / Adémé : Dans une casserole, verser 500ml d'eau. Ajouter le poisson fumé, la peau de bœuf, les crabes et les crevettes séchées. Cuire 15 minutes à ébullition.",
                            "duration": 15
                  },
                  {
                            "order": 2,
                            "description": "Liaison gluante : Délayer la poudre de Kpala (ou les feuilles d'Adémé hachées fin) avec la pincée de potasse dans un bol d'eau tiède. Verser dans le bouillon en fouettant vivement. Cuire 10 minutes à feu doux jusqu'à consistance veloutée et filante.",
                            "duration": 10
                  },
                  {
                            "order": 3,
                            "description": "Délayer le manioc : Dans une seconde casserole, délayer la pâte de manioc fermentée dans 600ml d'eau froide jusqu'à dissolution complète.",
                            "duration": 5
                  },
                  {
                            "order": 4,
                            "description": "Prise de la pâte : Poser sur feu moyen et remuer continuellement à la spatule en bois dès le réchauffement. Le liquide passe du blanc opaque au translucide.",
                            "duration": 5
                  },
                  {
                            "order": 5,
                            "description": "Tournage énergique : Battre vigoureusement la pâte contre les parois de la casserole pendant 10 minutes à feu doux. La pâte devient très souple, élastique, brillante et se décolle parfaitement.",
                            "duration": 10
                  },
                  {
                            "order": 6,
                            "description": "Dressage : Dresser une boule de Placali tiède dans l'assiette et napper généreusement de la sauce gluante au poisson fumé et crabes.",
                            "duration": 3
                  }
        ],
        suggestedAccompaniments: [
                  "Sauce tomate pimentée (Moyo ou Piment noir)",
                  "Poisson frit"
        ],
        practicalTips: [
                  "La fermentation du manioc confère au Placali sa subtile acidité et ses qualités probiotiques bienfaisantes.",
                  "Au Bénin et au Togo, cette sauce est préparée avec les feuilles fraîches d'Adémé (Corète potagère / Molokhia), tandis qu'en Côte d'Ivoire on utilise le gombo sec pulvérisé (Kpala / Kopé) : la technique et le résultat gluant sont identiques."
        ],
        intro: "La rencontre sensuelle entre une pâte de manioc fermentée translucide et ultra-élastique et une sauce gluante ancestrale aux crabes et poissons fumés.",
        description: "Plat populaire par excellence du littoral ivoirien, togolais et béninois, le Placali séduit par son contraste de textures. La pâte de manioc fermenté, travaillée à la force du poignet, s'avale sans mâcher enrobée de la sauce gluante (Kpala en Côte d'Ivoire, Adémé au Togo et Bénin). C'est une immersion vivante dans la cuisine de rue matinale d'Abidjan, de Lomé et de Cotonou."
    },

    {
        id: "chakalaka-pap",
        title: "Chakalaka & Pap",
        origin: "Afrique du Sud",
        region: "Afrique",
        image: "/images/chakalaka-pap.jpg",
        prepTime: 20,
        cookTime: 30,
        servings: 6,
        difficulty: "Facile",
        ingredients: [
                  {
                            "name": "Carottes râpées gros",
                            "quantity": "3 moyennes"
                  },
                  {
                            "name": "Poivrons en petits dés (rouge, vert, jaune)",
                            "quantity": "3 pièces"
                  },
                  {
                            "name": "Haricots blancs à la tomate (baked beans)",
                            "quantity": "1 boîte de 400g"
                  },
                  {
                            "name": "Oignon rouge émincé",
                            "quantity": "1 gros"
                  },
                  {
                            "name": "Gousses d'ail râpées",
                            "quantity": "3 gousses"
                  },
                  {
                            "name": "Gingembre frais râpé",
                            "quantity": "1 c.à.s"
                  },
                  {
                            "name": "Piments frais émincés",
                            "quantity": "2 piments"
                  },
                  {
                            "name": "Poudre de curry doux ou fort",
                            "quantity": "2 c.à.s"
                  },
                  {
                            "name": "Huile végétale",
                            "quantity": "3 c.à.s"
                  },
                  {
                            "name": "Farine de maïs blanc pour le Pap",
                            "quantity": "400g"
                  },
                  {
                            "name": "Eau pour le Pap",
                            "quantity": "1 L"
                  },
                  {
                            "name": "Beurre pour le Pap",
                            "quantity": "30g"
                  },
                  {
                            "name": "Sel et poivre",
                            "quantity": "Au goût"
                  }
        ],
        utensils: [
                  "Grande sauteuse ou poêle profonde",
                  "Râpe à légumes",
                  "Casserole pour le pap",
                  "Cuillère en bois solide"
        ],
        steps: [
                  {
                            "order": 1,
                            "description": "Aromates du Chakalaka : Chauffer l'huile dans une sauteuse. Faire suer l'oignon, l'ail, le gingembre et le piment pendant 4 minutes.",
                            "duration": 4
                  },
                  {
                            "order": 2,
                            "description": "Torréfier le curry : Ajouter la poudre de curry et remuer 1 minute pour épanouir les épices.",
                            "duration": 1
                  },
                  {
                            "order": 3,
                            "description": "Sauter les légumes : Ajouter les dés de poivrons et les carottes râpées. Faire sauter à feu vif 8 minutes : ils doivent rester délicatement croquants.",
                            "duration": 8
                  },
                  {
                            "order": 4,
                            "description": "Haricots : Incorporer les baked beans en boîte, saler, poivrer et laisser mijoter 5 minutes à feu doux. Laisser tiédir.",
                            "duration": 5
                  },
                  {
                            "order": 5,
                            "description": "Cuisson du Pap : Dans une casserole, porter 1L d'eau salée à ébullition. Verser la farine de maïs en pluie en fouettant.",
                            "duration": 3
                  },
                  {
                            "order": 6,
                            "description": "Tourner le Pap : Dès épaississement, réduire au feu doux et battre à la cuillère en bois 20 minutes à couvert jusqu'à pâte ferme. Incorporer le beurre.",
                            "duration": 20
                  },
                  {
                            "order": 7,
                            "description": "Servir une portion de Pap chaud surmontée d'une généreuse louche de Chakalaka épicé.",
                            "duration": 2
                  }
        ],
        suggestedAccompaniments: [
                  "Boerewors (saucisse fermière grillée)",
                  "Côtelettes d'agneau braisées au barbecue"
        ],
        practicalTips: [
                  "Le Chakalaka se prépare idéalement quelques heures à l'avance : les saveurs de curry infusent les carottes.",
                  "Râper les carottes avec une grille moyenne pour conserver une belle mâche."
        ],
        intro: "Un relish vibrant et pimenté aux carottes râpées, poivrons croquants et haricots fondants au curry, posé sur une pâte de maïs blanc fondante : l'âme du Braai sud-africain.",
        description: "Né dans les cantines des mineurs d'or des townships de Soweto et Johannesburg au siècle dernier, le Chakalaka est le symbole culinaire de l'Afrique du Sud démocratique et multiculturelle. Créé en improvisant avec les conserves et légumes disponibles combinés aux épices de curry apportées par les travailleurs indiens du Natal, il est aujourd'hui indissociable du barbecue national (le Braai)."
    },

    {
        id: "seswaa",
        title: "Seswaa",
        origin: "Botswana",
        region: "Afrique",
        image: "/images/seswaa.webp",
        prepTime: 15,
        cookTime: 180,
        servings: 6,
        difficulty: "Facile",
        ingredients: [
                  {
                            "name": "Bœuf avec os (jarret, queue de bœuf, paleron)",
                            "quantity": "1,5 kg"
                  },
                  {
                            "name": "Eau (pour couvrir)",
                            "quantity": "1,5 L"
                  },
                  {
                            "name": "Gros sel marin",
                            "quantity": "1 c.à.s"
                  },
                  {
                            "name": "Grains de poivre noir entier",
                            "quantity": "1 c.à.c"
                  }
        ],
        utensils: [
                  "Cocotte en fonte lourde ou chaudron",
                  "Solide cuillère en bois ou pilon pour écraser la viande",
                  "Écumoire"
        ],
        steps: [
                  {
                            "order": 1,
                            "description": "Mise en marmite : Dans une cocotte en fonte lourde, déposer les morceaux de bœuf avec os, le gros sel marin et les grains de poivre. Couvrir d'eau.",
                            "duration": 10
                  },
                  {
                            "order": 2,
                            "description": "Mijotage lent : Porter à ébullition et écumer la surface. Couvrir hermétiquement et baisser le feu au minimum. Laisser mijoter 3 heures jusqu'à ce que la viande se détache spontanément des os.",
                            "duration": 180
                  },
                  {
                            "order": 3,
                            "description": "Désosser : Retirer les os dénudés qui glissent tout seuls hors de la chair.",
                            "duration": 5
                  },
                  {
                            "order": 4,
                            "description": "Pilonnage à chaud : À même la marmite encore tiède, écraser et effilocher vigoureusement la viande avec une grande cuillère en bois solide. La chair se défait en fils tendres imbibés de jus concentré.",
                            "duration": 10
                  },
                  {
                            "order": 5,
                            "description": "Ajuster en sel et servir bien chaud.",
                            "duration": 2
                  }
        ],
        suggestedAccompaniments: [
                  "Bogobe (porridge de sorgho)",
                  "Pap de maïs",
                  "Feuilles de morogo sautées"
        ],
        practicalTips: [
                  "Règle d'or du Seswaa authentique : aucun oignon, aucune tomate, aucune épice superflue. Seuls l'os, l'eau, le sel et le temps font la magie de ce plat.",
                  "La gélatine naturelle des os et des cartilages donne tout son fondant à l'effiloché."
        ],
        intro: "Trois heures de mijotage dans un chaudron en fonte avec pour seuls compagnons l'eau et le sel marin, puis battu au pilon : la quintessence de la viande selon le peuple Tswana.",
        description: "Plat national par excellence du Botswana, le Seswaa est au cœur des grands rituels de vie : mariages traditionnels, cérémonies d'initiation, investitures de chefs et fêtes nationales. Préparé traditionnellement par les hommes dans de grands chaudrons en fonte à trois pieds sur feu de braises, il prouve que la simplicité absolue et le respect du temps créent les plus grands chefs-d'œuvre gustatifs."
    },

    {
        id: "bobotie-cap",
        title: "Bobotie du Cap",
        origin: "Afrique du Sud (Cape Malay)",
        region: "Afrique",
        image: "/images/bobotie du cap.webp",
        prepTime: 25,
        cookTime: 45,
        servings: 6,
        difficulty: "Moyen",
        ingredients: [
                  {
                            "name": "Bœuf haché (ou mélange bœuf/agneau)",
                            "quantity": "800g"
                  },
                  {
                            "name": "Oignons émincés",
                            "quantity": "2 gros"
                  },
                  {
                            "name": "Tranches de pain blanc sans croûte",
                            "quantity": "2 tranches"
                  },
                  {
                            "name": "Lait entier",
                            "quantity": "250ml"
                  },
                  {
                            "name": "Œufs",
                            "quantity": "2 pièces"
                  },
                  {
                            "name": "Poudre de curry Cape Malay ou de Madras",
                            "quantity": "2 c.à.s"
                  },
                  {
                            "name": "Curcuma moulu",
                            "quantity": "1 c.à.c"
                  },
                  {
                            "name": "Confiture d'abricot ou chutney de mangue",
                            "quantity": "2 c.à.s"
                  },
                  {
                            "name": "Raisins secs dorés",
                            "quantity": "50g"
                  },
                  {
                            "name": "Amandes effilées",
                            "quantity": "30g"
                  },
                  {
                            "name": "Feuilles de laurier fraîches ou de citronnier",
                            "quantity": "5 feuilles"
                  },
                  {
                            "name": "Vinaigre de cidre ou jus de citron",
                            "quantity": "1 c.à.s"
                  },
                  {
                            "name": "Beurre doux",
                            "quantity": "30g"
                  },
                  {
                            "name": "Sel et poivre",
                            "quantity": "Au goût"
                  }
        ],
        utensils: [
                  "Plat à gratin beurré",
                  "Grande sauteuse",
                  "Fouet à main",
                  "Four"
        ],
        steps: [
                  {
                            "order": 1,
                            "description": "Imbiber le pain : Verser le lait sur les tranches de pain dans une assiette creuse. Laisser tremper 5 minutes, essorer le pain entre les mains et réserver le lait pour l'appareil supérieur.",
                            "duration": 5
                  },
                  {
                            "order": 2,
                            "description": "Suer les oignons : Faire fondre le beurre dans une sauteuse, ajouter les oignons émincés et cuire 6 minutes jusqu'à tendreté.",
                            "duration": 6
                  },
                  {
                            "order": 3,
                            "description": "Épices : Ajouter le curry, le curcuma, le sel et le poivre. Remuer 1 minute pour torréfier.",
                            "duration": 1
                  },
                  {
                            "order": 4,
                            "description": "Cuisson viande : Ajouter le bœuf haché en l'émiettant. Cuire 8 minutes. Incorporer le pain essoré, la confiture d'abricot, le vinaigre et les raisins secs. Cuire 5 minutes.",
                            "duration": 10
                  },
                  {
                            "order": 5,
                            "description": "Montage : Préchauffer le four à 180°C. Tasser la viande dans le plat à gratin beurré.",
                            "duration": 5
                  },
                  {
                            "order": 6,
                            "description": "Crème de couverture : Battre les œufs avec le lait réservé, sel et poivre. Verser sur la viande. Piquer les feuilles de laurier dans la crème et parsemer d'amandes effilées.",
                            "duration": 5
                  },
                  {
                            "order": 7,
                            "description": "Cuisson four : Cuire 35 à 40 minutes à 180°C jusqu'à ce que la crème soit prise et dorée. Laisser tiédir 10 minutes avant de servir.",
                            "duration": 40
                  }
        ],
        suggestedAccompaniments: [
                  "Geelrys (riz jaune au curcuma et raisins secs)",
                  "Chutney de mangue",
                  "Salade fraîche"
        ],
        practicalTips: [
                  "Le contraste entre la viande savoureuse, les raisins doux, le chutney acidulé et le flan soyeux aux œufs est la signature du Bobotie.",
                  "Les feuilles de citronnier ou de laurier piquées à la surface diffusent leur parfum délicat dans la crème."
        ],
        intro: "Un hachis de bœuf parfumé au curry doux, curcuma et fruits secs, doré sous une crème aux œufs fondante parsemée de feuilles de laurier : le plat national métissé du Cap.",
        description: "Le Bobotie est le plat le plus emblématique de la culture Cape Malay d'Afrique du Sud, issue des esclaves et exilés javanais, malais et malgaches arrivés au Cap au XVIIe siècle. Ce gratin sucré-salé épicé incarne le métissage unique de la péninsule du Cap, où les épices indonésiennes rencontrent les traditions pastorales africaines."
    },

    {
        id: "ful-medames",
        title: "Ful Medames",
        origin: "Égypte / Soudan (Vallée du Nil)",
        region: "Afrique",
        image: "/images/Ful-medames.jpeg",
        prepTime: 20,
        cookTime: 120,
        servings: 4,
        difficulty: "Facile",
        ingredients: [
                  {
                            "name": "Fèves sèches entières (petites fèves d'Égypte / Ful)",
                            "quantity": "400g"
                  },
                  {
                            "name": "Lentilles corail (pour épaissir)",
                            "quantity": "2 c.à.s"
                  },
                  {
                            "name": "Gousses d'ail écrasées",
                            "quantity": "3 gousses"
                  },
                  {
                            "name": "Huile d'olive extra-vierge ou huile de lin (Zayt Harr)",
                            "quantity": "4 c.à.s"
                  },
                  {
                            "name": "Cumin moulu frais",
                            "quantity": "2 c.à.c"
                  },
                  {
                            "name": "Jus de citrons frais",
                            "quantity": "2 citrons"
                  },
                  {
                            "name": "Tomates fraîches concassées",
                            "quantity": "2 pièces"
                  },
                  {
                            "name": "Persil plat frais ciselé",
                            "quantity": "1/2 botte"
                  },
                  {
                            "name": "Sel fin",
                            "quantity": "1 c.à.c"
                  }
        ],
        utensils: [
                  "Casserole profonde à fond épais ou mijoteuse",
                  "Presse-purée ou fourchette",
                  "Presse-citron"
        ],
        steps: [
                  {
                            "order": 1,
                            "description": "Trempage : Faire tremper les fèves sèches dans l'eau froide au moins 12 heures (une nuit). Égoutter et rincer.",
                            "duration": 10
                  },
                  {
                            "order": 2,
                            "description": "Cuisson douce : Déposer les fèves réhydratées et les 2 cuillères de lentilles corail dans une casserole profonde. Couvrir d'eau froide (5 cm au-dessus des fèves). Porter à ébullition, puis baisser au minimum absolu, couvrir hermétiquement et cuire 2 à 3 heures jusqu'à fondant complet.",
                            "duration": 120
                  },
                  {
                            "order": 3,
                            "description": "Écraser partiellement : À l'aide d'un presse-purée, écraser la moitié des fèves pour lier le bouillon en velouté, en gardant l'autre moitié entière.",
                            "duration": 5
                  },
                  {
                            "order": 4,
                            "description": "Assaisonnement : Incorporer le cumin moulu, l'ail écrasé, le sel et le jus de citron frais. Bien mélanger.",
                            "duration": 3
                  },
                  {
                            "order": 5,
                            "description": "Dressage : Verser dans des bols chauds, garnir de dés de tomates fraîches, de persil ciselé et arroser généreusement d'huile d'olive vierge.",
                            "duration": 5
                  }
        ],
        suggestedAccompaniments: [
                  "Pain pita baladi égyptien chaud",
                  "Œufs durs ou frits",
                  "Pickles saumurés (Torshi)"
        ],
        practicalTips: [
                  "Ne salez jamais les fèves en début de cuisson : le sel durcit la peau des légumineuses.",
                  "Le cumin est essentiel tant pour le goût que pour favoriser une digestion optimale."
        ],
        intro: "Mijoté depuis l'époque des Pharaons dans les ruelles du Caire : un bol fumant de fèves fondantes au cumin, citron pressé et filet d'huile d'olive vierge.",
        description: "Le Ful Medames est sans doute le plus vieux plat cuisiné encore consommé quotidiennement au monde : des traces de fèves ainsi apprêtées ont été découvertes dans les tombes de la XIIe dynastie des Pharaons. Devenu le petit-déjeuner national rassembleur du Caire à Khartoum, il apporte fibres, protéines végétales pures et énergie durable."
    },

        {
        id: "couscous-berbere-7-legumes",
        title: "Couscous Berbère aux 7 Légumes",
        origin: "Maghreb / Sahara (Patrimoine Amazigh)",
        region: "Afrique",
        image: "/images/couscous-aux-sept-legumes.jpg",
        prepTime: 40,
        cookTime: 70,
        servings: 6,
        difficulty: "Moyen",
        tags: ["viande"],
        ingredients: [
            { name: "Grains de couscous moyen de blé dur", quantity: "500g" },
            { name: "Épaule ou gigot d'agneau en morceaux", quantity: "800g" },
            { name: "Pois chiches trempés la veille", quantity: "150g" },
            { name: "Carottes", quantity: "3" },
            { name: "Courgettes", quantity: "3" },
            { name: "Navets blancs", quantity: "2" },
            { name: "Courge rouge / potiron", quantity: "300g" },
            { name: "Chou blanc", quantity: "1/4 de tête" },
            { name: "Tomates mûres concassées", quantity: "3" },
            { name: "Oignons émincés", quantity: "2" },
            { name: "Huile d'olive et Smen (beurre clarifié)", quantity: "3 c.à.s" },
            { name: "Épices (Ras el Hanout, gingembre, curcuma, safran)", quantity: "2 c.à.s" },
            { name: "Coriandre et persil frais", quantity: "1 bouquet ficelé" },
            { name: "Sel et poivre noir", quantity: "à goût" }
        ],
        utensils: [
            "Couscoussier traditionnel (marmite et passoire vapeur)",
            "Gsaa (grand plat large en bois ou terre cuite)",
            "Écumoire",
            "Louche"
        ],
        steps: [
            {
                order: 1,
                description: "Préparation du bouillon : Dans la marmite du couscoussier, faire dorer l'agneau avec huile d'olive, oignons et épices. Ajouter les tomates concassées, les pois chiches et le bouquet d'herbes. Couvrir de 2 litres d'eau bouillante et porter à ébullition.",
                duration: 20
            },
            {
                order: 2,
                description: "Premier passage vapeur de la semoule : Dans la Gsaa, humecter la semoule d'un peu d'eau salée et d'un filet d'huile. Rouler les grains entre les paumes pour aérer. Déposer dans le haut du couscoussier et cuire à la vapeur 20 minutes.",
                duration: 20
            },
            {
                order: 3,
                description: "Aération de la semoule : Reverser la semoule dans la Gsaa, arroser d'eau froide salée, détacher délicatement les grains à l'écumoire ou aux doigts. Laisser reposer 10 minutes pour absorber l'humidité.",
                duration: 10
            },
            {
                order: 4,
                description: "Ajout des légumes fermes : Ajouter au bouillon de viande les carottes, les navets et le chou blanc. Mijoter 20 minutes à feu moyen.",
                duration: 20
            },
            {
                order: 5,
                description: "Deuxième passage vapeur : Remettre la semoule dans le haut du couscoussier pour 20 minutes de cuisson vapeur supplémentaire.",
                duration: 20
            },
            {
                order: 6,
                description: "Ajout des légumes tendres : Incorporer les courgettes et les tranches de potiron dans le bouillon.",
                duration: 10
            },
            {
                order: 7,
                description: "Troisième passage vapeur et finition : Dernière aération avec un peu d'eau et une noisette de Smen ou beurre frais, puis 10 minutes de vapeur finale.",
                duration: 10
            },
            {
                order: 8,
                description: "Dressage dans la Gsaa : Verser la semoule cuite dans le plat, incorporer le Smen ou beurre. Déposer la viande au centre, disposer les 7 légumes en rayons tout autour, parsemer de pois chiches et arroser d'une louche de bouillon.",
                duration: 5
            }
        ],
        suggestedAccompaniments: [
            "Bouillon épicé en saucière",
            "Harissa délayée",
            "Lait fermenté (Lben)"
        ],
        practicalTips: [
            "Le secret de la semoule amazighe réside dans le travail des mains : rouler délicatement les grains entre les paumes pour obtenir une texture vaporeuse.",
            "Les 7 légumes symbolisent l'abondance, la fertilité de la terre et la baraka dans la tradition ancestrale berbère."
        ],
        intro: "Inscrit au patrimoine immatériel de l'UNESCO : une semoule cuite à la vapeur trois fois, gorgée d'un bouillon safrané aux sept légumes du soleil et agneau fondant.",
        description: "Le couscous est l'invention culinaire majeure des peuples Berbères (Amazighs) d'Afrique du Nord, attestée archéologiquement depuis l'Antiquité numide. Ce plat universel de partage, préparé dans une grande Gsaa commune, symbolise la \"Baraka\" (la bénédiction) et le rassemblement de la famille autour de la terre nourricière."
    },


    // ────────────────────────────────────────────────
    //  GRILLADES & BARBECUES DU MONDE AFRICAIN
    // ────────────────────────────────────────────────

    {
        id: "churrasco-bresilien",
        title: "Churrasco Brésilien",
        origin: "Brésil",
        region: "Amérique du Sud",
        image: "/images/churrasco-bresilien.webp",
        prepTime: 30,
        cookTime: 40,
        servings: 6,
        difficulty: "Moyen",
        tags: ["viande", "grillades"],
        ingredients: [
            { name: "Picanha (aiguillette baronne de bœuf)", quantity: "1,2 kg" },
            { name: "Linguiça calabresa (saucisse fumée)", quantity: "400g" },
            { name: "Côtes d'agneau", quantity: "600g" },
            { name: "Sel de mer grossier", quantity: "3 c.à.s" },
            { name: "Ail", quantity: "4 gousses" },
            { name: "Vin blanc sec", quantity: "100ml" },
            { name: "Huile d'olive", quantity: "4 c.à.s" },
            { name: "Chimichurri frais", quantity: "pour servir" },
            { name: "Vinaigrette de tomate (Vinagrete)", quantity: "pour servir" }
        ],
        utensils: [
            "Brochettes métalliques larges (espeto)",
            "Barbecue à charbon de bois (churrasqueira)",
            "Pince longue",
            "Couteau à viande tranchant",
            "Planche de découpe"
        ],
        steps: [
            {
                order: 1,
                description: "Préparation de la Picanha : Laisser la viande à température ambiante 30 minutes. Inciser la couche de gras en croisillons sans entailler la chair. Plier en U la picanha, gras vers l'extérieur, et enfiler sur la brochette large. Saler généreusement de sel grossier sur toutes les faces.",
                duration: 10
            },
            {
                order: 2,
                description: "Allumage du feu : Préparer un feu de braises vives avec charbon de bois de qualité. Attendre que les braises soient blanches et sans flamme vive (30–40 min après allumage). Le Churrasco se cuit sur braises, jamais sur flammes directes.",
                duration: 35
            },
            {
                order: 3,
                description: "Grillade de la Picanha : Placer les brochettes à 20 cm des braises. Cuire 15 minutes côté gras, le gras doit fondre et s'enflammer légèrement pour aromatiser. Retourner, cuire 10 minutes côté chair pour saignant, 15 minutes pour à point.",
                duration: 25
            },
            {
                order: 4,
                description: "Découpe à la table : Dans la tradition Churrascaria, trancher finement les extrémités cuites, les déposer dans les assiettes, puis remettre la brochette sur le feu pour la suite. Répéter jusqu'à consommer toute la pièce.",
                duration: 5
            },
            {
                order: 5,
                description: "Cuisson de la linguiça et des côtes : Griller la saucisse entière 20 minutes en la tournant régulièrement. Les côtes d'agneau, marinées huile-ail-vin blanc, cuisent 8 minutes par face.",
                duration: 25
            },
            {
                order: 6,
                description: "Service Rodízio : Dresser les viandes sur une grande planche de bois. Servir avec le chimichurri, la vinagrete fraîche (tomates-oignons-poivrons), le pain de manioc (farofa) et le riz brésilien.",
                duration: 5
            }
        ],
        suggestedAccompaniments: [
            "Farofa (chapelure de manioc torréfiée)",
            "Riz blanc brésilien",
            "Feijão tropeiro (haricots à la farine)",
            "Pão de queijo (pain au fromage)",
            "Caïpirinha"
        ],
        practicalTips: [
            "La Picanha est la pièce reine du Churrasco. Son identité tient à son épaisse couche de gras : ne jamais la supprimer avant cuisson, elle est source d'arôme et de jutosité.",
            "L'unique assaisonnement traditionnel est le sel grossier. Éviter les marinades complexes qui masquent la qualité de la viande.",
            "La température des braises doit être constante et vive. Un ventail (abano) permet de raviver les braises sans ajouter de charbon."
        ],
        intro: "Au Brésil, le feu est une philosophie. La Picanha trônant sur sa brochette, le sel grossier pour unique parure, révèle la noblesse absolue d'une viande d'exception.",
        description: "Le Churrasco est l'art du feu brésilien, héritage direct des gauchos des Pampas qui, au XVIIIe siècle, faisaient rôtir de grandes pièces de bœuf sur des brochettes en bois. Cette tradition, profondément influencée par les esclaves africains qui maîtrisaient la cuisson des viandes sur braises, s'est codifiée en un rituel social — la Churrasqueira — qui rassemble famille et amis tout au long du dimanche. Le Churrasco est indissociable de l'identité nationale brésilienne.",
        relatedRecipes: ["feijoada", "anticuchos", "jerk-jamaicain"]
    },

    {
        id: "braai-sud-africain",
        title: "Braai Sud-Africain",
        origin: "Afrique du Sud",
        region: "Afrique",
        image: "/images/braai-sud-africain.webp",
        prepTime: 30,
        cookTime: 45,
        servings: 6,
        difficulty: "Facile",
        tags: ["viande", "grillades"],
        ingredients: [
            { name: "Boerewors (saucisse fermière épicée)", quantity: "800g" },
            { name: "Côtes de mouton", quantity: "1 kg" },
            { name: "Poulet (morceaux)", quantity: "800g" },
            { name: "Épices Braai (coriandre moulue, clou de girofle, noix de muscade)", quantity: "3 c.à.s" },
            { name: "Vinaigre de cidre", quantity: "2 c.à.s" },
            { name: "Huile de tournesol", quantity: "3 c.à.s" },
            { name: "Oignons", quantity: "2" },
            { name: "Ail", quantity: "4 gousses" },
            { name: "Sel et poivre", quantity: "à goût" },
            { name: "Bois de feu (rooikrans, buchu, mopane)", quantity: "pour braises" }
        ],
        utensils: [
            "Grille de Braai en fonte",
            "Braaistand (support de grillade)",
            "Pince longue",
            "Pinceau de basting"
        ],
        steps: [
            {
                order: 1,
                description: "Marinade des viandes (idéalement la veille) : Préparer une marinade simple avec huile, vinaigre, ail écrasé, épices braai. Badigeonner les côtes de mouton et le poulet. Laisser mariner 2 heures minimum, ou toute la nuit au réfrigérateur.",
                duration: 15
            },
            {
                order: 2,
                description: "Allumage du feu avec bois : Le Braai traditionnel se fait obligatoirement au bois, jamais au gaz. Allumer le feu 45–60 minutes à l'avance. Les Sud-Africains utilisent des essences locales (Rooikrans, Mopane) pour parfumer la viande. Attendre des braises stables et rouges.",
                duration: 45
            },
            {
                order: 3,
                description: "Grillade du Boerewors en spirale : Placer la saucisse enroulée entière sur la grille, côté épais du premier. Cuire 8 minutes par face sans la piquer — le jus doit rester enfermé. Le Boerewors se sert rosé à cœur.",
                duration: 20
            },
            {
                order: 4,
                description: "Côtes de mouton et poulet : Griller les côtes 12–15 minutes par face en les badigeonnant régulièrement de marinade. Le poulet 15 min par face, à zone de chaleur indirecte pour éviter de brûler la peau avant la cuisson à cœur.",
                duration: 30
            },
            {
                order: 5,
                description: "Le Braai est un événement social — les invités se rassemblent autour du feu avec une bière locale (Castle Lager, Windhoek). Servir les viandes au fur et à mesure, directement depuis la grille.",
                duration: 5
            }
        ],
        suggestedAccompaniments: [
            "Pap & Chakalaka (maïs et relish épicée)",
            "Braaibroodjies (sandwichs grillés tomate-fromage)",
            "Salade de pommes de terre à la mayonnaise",
            "Koeksisters (beignets tressés)",
            "Bière Castle Lager"
        ],
        practicalTips: [
            "La règle d'or du Braai : jamais de gaz, toujours le bois. Les Sud-Africains considèrent le gaz comme une insulte à la tradition.",
            "Le Boerewors ne doit JAMAIS être piqué avant ou pendant la cuisson. Sa farce épicée traditionnelle (30% de gras minimum) le rend juteux naturellement.",
            "L'essence du bois de feu influence le goût — le Mopane donne un arôme doux et fruité, le Rooikrans un arôme plus puissant."
        ],
        intro: "En Afrique du Sud, le Braai n'est pas qu'un repas — c'est un acte de fraternité national. Le bois crépite, la bière coule, et les frontières sociales disparaissent autour des braises.",
        description: "Le Braai (de l'afrikaans 'braaivleis', viande grillée) est la pratique culinaire la plus emblématique d'Afrique du Sud, transcendant les barrières culturelles, linguistiques et raciales dans un pays à l'histoire complexe. Cette tradition de cuisson sur bois remonte aux premières communautés San, Khoikhoi et aux colons voortrekkers du XVIIe siècle, qui maîtrisaient l'art de rôtir les viandes du veldt sur des braises de bois indigène. Le 24 septembre, Jour du Patrimoine national, est officieusement appelé 'Braai Day' — une invitation à tous les Sud-Africains à faire un feu ensemble.",
        relatedRecipes: ["chakalaka-pap", "seswaa", "bobotie-cap", "suya-chanchanga"]
    },

    {
        id: "jerk-jamaicain",
        title: "Jerk Jamaïcain",
        origin: "Jamaïque",
        region: "Caraïbes et Antilles",
        image: "/images/jerk-jamaicain.jpg",
        prepTime: 30,
        cookTime: 60,
        servings: 4,
        difficulty: "Moyen",
        tags: ["volaille", "grillades"],
        ingredients: [
            { name: "Poulet entier découpé (ou pilons)", quantity: "1,5 kg" },
            { name: "Piments Scotch Bonnet (habanero)", quantity: "3–5 (selon tolérance)" },
            { name: "Oignons verts (tiges et bulbes)", quantity: "6" },
            { name: "Ail", quantity: "5 gousses" },
            { name: "Gingembre frais", quantity: "4 cm" },
            { name: "Allspice (poivre de la Jamaïque / piment doux)", quantity: "2 c.à.s" },
            { name: "Thym frais", quantity: "4 branches" },
            { name: "Cannelle", quantity: "1/2 c.à.c" },
            { name: "Noix de muscade", quantity: "1/4 c.à.c" },
            { name: "Sauce soja", quantity: "3 c.à.s" },
            { name: "Jus de citron vert", quantity: "2 c.à.s" },
            { name: "Huile de tournesol", quantity: "2 c.à.s" },
            { name: "Cassonade brune", quantity: "1 c.à.s" },
            { name: "Sel", quantity: "1 c.à.c" }
        ],
        utensils: [
            "Blender ou mixeur",
            "Sac zip ou plat creux pour marinade",
            "Barbecue à charbon avec couvercle (ou four)",
            "Pince longue",
            "Thermomètre de cuisson"
        ],
        steps: [
            {
                order: 1,
                description: "Préparation du Jerk Marinade : Mixer les piments Scotch Bonnet (avec les graines pour le feu), oignons verts, ail, gingembre, allspice, thym, cannelle, muscade, sauce soja, jus de citron vert, huile et cassonade. Obtenir une pâte lisse et très parfumée. Attention : les Scotch Bonnet sont parmi les piments les plus forts au monde — porter des gants pour les manipuler.",
                duration: 10
            },
            {
                order: 2,
                description: "Marinage du poulet : Inciser profondément chaque morceau de poulet avec la pointe d'un couteau. Enduire généreusement de marinade Jerk en pénétrant les incisions. Couvrir hermétiquement et laisser mariner au minimum 4 heures — idéalement 24 heures au réfrigérateur.",
                duration: 15
            },
            {
                order: 3,
                description: "Préparation du feu au bois de Piment (Pimento Wood) : La tradition jamaïcaine utilise les branches et feuilles du Pimento (allspice tree) pour fumer la viande. À défaut, ajouter des copeaux de bois de cerisier ou de pommier sur les braises pour l'arôme fumé caractéristique.",
                duration: 30
            },
            {
                order: 4,
                description: "Cuisson lente au Jerk Pan : Placer le poulet côté peau vers le bas sur la grille à chaleur indirecte. Couvrir avec le couvercle ou une feuille aluminium. Cuire 40 minutes à chaleur indirecte (180°C), puis 15–20 minutes à chaleur directe pour caraméliser la peau.",
                duration: 60
            },
            {
                order: 5,
                description: "Découpe et service : La température interne du poulet doit atteindre 74°C. Hacher chaque morceau en portions à la machette (tradition jamaïcaine). Servir immédiatement avec rice & peas et les accompagnements traditionnels.",
                duration: 5
            }
        ],
        suggestedAccompaniments: [
            "Rice & Peas (riz aux haricots rouges et lait de coco)",
            "Festival (beignets sucrés frits)",
            "Bammy (galette de manioc grillée)",
            "Salade de chou caraïbéenne",
            "Punch planteur jamaïcain"
        ],
        practicalTips: [
            "L'Allspice (piment doux ou poivre de la Jamaïque) est l'ingrédient irremplaçable du Jerk. Ce sont les baies séchées du Pimenta dioica, arbre endémique jamaïcain, qui renferment à la fois cannelle, girofle et muscade.",
            "Plus la marinade est longue, plus les saveurs pénètrent en profondeur. 24 heures est le standard des Jerk stands de Kingston.",
            "Si vous n'avez pas de barbecue, le Jerk peut se préparer au four : 45 min à 200°C, puis 15 min en mode gril. Le fumé sera moins présent mais les saveurs resteront intenses."
        ],
        intro: "Né dans les montagnes jamaïcaines où les Marrons fuyaient l'esclavage, le Jerk porte en lui la résistance, la liberté et les épices les plus ardentes des Caraïbes.",
        description: "Le Jerk est l'héritage direct des Marrons jamaïcains — les esclaves africains évadés qui, dès le XVIIe siècle, se réfugièrent dans les Blue Mountains inaccessibles. Pour conserver la viande sans réfrigération et masquer les odeurs de cuisson, ils développèrent cette technique unique de marinade ultra-épicée à l'Allspice et piments Scotch Bonnet, combinée à une cuisson lente dans des fosses couvertes de Pimento Wood. Le Jerk incarne la résilience africaine et la créativité culinaire née de la nécessité et de la résistance.",
        relatedRecipes: ["griot-haitien", "coucou-flying-fish", "callaloo", "churrasco-bresilien"]
    },

    {
        id: "barbecue-carolines",
        title: "Barbecue des Carolines",
        origin: "Carolines du Nord et du Sud, États-Unis",
        region: "Amérique du Nord",
        image: "/images/barbecue-des-carolines.webp",
        prepTime: 45,
        cookTime: 480,
        servings: 8,
        difficulty: "Difficile",
        tags: ["viande", "grillades"],
        ingredients: [
            { name: "Épaule de porc (Boston Butt, os inclus)", quantity: "3–4 kg" },
            { name: "Sel de mer grossier", quantity: "3 c.à.s" },
            { name: "Sucre brun (cassonade)", quantity: "2 c.à.s" },
            { name: "Paprika fumé", quantity: "2 c.à.s" },
            { name: "Poivre noir grossièrement moulu", quantity: "1 c.à.s" },
            { name: "Ail en poudre", quantity: "1 c.à.s" },
            { name: "Piment de Cayenne", quantity: "1/2 c.à.c" },
            { name: "Moutarde jaune (pour badigeonner)", quantity: "3 c.à.s" },
            { name: "Vinaigre de cidre (Mop sauce / Eastern Carolina style)", quantity: "200ml" },
            { name: "Piment broyé (Mop)", quantity: "1 c.à.c" },
            { name: "Sel (Mop)", quantity: "1 c.à.c" },
            { name: "Eau chaude (Mop)", quantity: "200ml" },
            { name: "Copeaux de bois de hickory (noyer américain)", quantity: "500g (trempés 1h)" }
        ],
        utensils: [
            "Smoker (fumoir) ou barbecue à couvercle adapté",
            "Thermomètre de cuisson à sonde",
            "Pinceau de basting",
            "Gants de protection thermique",
            "Griffes à effilocher (Bear Claws)"
        ],
        steps: [
            {
                order: 1,
                description: "Préparation du Dry Rub : Mélanger sel, cassonade, paprika fumé, poivre, ail en poudre et cayenne. Badigeonner l'épaule de porc de moutarde jaune (elle sert de 'colle'). Enduire généreusement de Dry Rub sur toutes les faces. Emballer et réfrigérer 12 heures minimum (overnight).",
                duration: 20
            },
            {
                order: 2,
                description: "Mise en température : Sortir la viande 1 heure avant cuisson. Préparer le fumoir à 110–120°C (cuisson basse et lente). Ajouter les copeaux de hickory trempés sur les braises pour créer la fumée caractéristique.",
                duration: 30
            },
            {
                order: 3,
                description: "Cuisson Low & Slow (7–8 heures) : Placer l'épaule côté gras vers le haut. Maintenir 110–120°C en permanence. Préparer la Mop Sauce (vinaigre + eau + piment + sel) et badigeonner la viande toutes les 90 minutes pour conserver l'humidité et développer l'écorce (bark) caractéristique.",
                duration: 480
            },
            {
                order: 4,
                description: "Le Stall : entre 65°C et 75°C internes, la température stagne 1–2 heures (phénomène d'évaporation). C'est normal — ne pas augmenter le feu. Pour accélérer, emballer la viande dans du papier boucher (Butcher Paper) à partir de 65°C.",
                duration: 30
            },
            {
                order: 5,
                description: "Température finale : La cuisson est terminée quand la sonde interne atteint 95–98°C et qu'elle s'enfonce sans résistance (comme du beurre). Retirer du feu, envelopper dans du papier boucher et laisser reposer 45–60 minutes dans une glacière.",
                duration: 60
            },
            {
                order: 6,
                description: "Effilochage (Pulling) : À la main ou avec les Bear Claws, effilocher la viande en longs fils. Retirer l'os et les portions de gras indésirables. Mélanger l'effiloché avec quelques cuillerées de sauce vinaigrée. Servir immédiatement.",
                duration: 15
            }
        ],
        suggestedAccompaniments: [
            "Coleslaw (salade de chou crémeuse)",
            "Cornbread (pain de maïs)",
            "Macaroni and Cheese",
            "Pickles de cornichons",
            "Sauce BBQ Eastern Carolina ou Western Carolina"
        ],
        practicalTips: [
            "Le Carolina BBQ est une philosophie de patience : Low & Slow (bas et lent) est la règle absolue. Toute précipitation produit une viande sèche et dure.",
            "L'Eastern Carolina Sauce (vinaigre pur + piment + sel) sans tomate est l'originale. La Western Carolina ajoute de la moutarde et un peu de tomate. Les deux styles ont leurs partisans fanatiques — ne pas mélanger les genres dans un repas !",
            "Le hickory (noyer américain) est l'essence de bois traditionnelle. Le fruitier (pommier, cerisier) donne un arôme plus doux, le chêne un arôme neutre et polyvalent.",
            "La moutarde comme colle pour le rub est une astuce de pitmaster : elle disparaît totalement à la cuisson mais aide à former une belle écorce (bark) croustillante."
        ],
        intro: "L'acte de foi du pitmaster : une épaule de porc abandonnée 8 heures à la lente caresse d'une fumée de hickory — naît alors le Pulled Pork, monument de la cuisine du Sud américain.",
        description: "Le Barbecue des Carolines est probablement la forme la plus ancienne de barbecue américain, directement héritée des techniques de cuisson africaines et amérindiennes. Les esclaves africains réduits en servitude dans les plantations de tabac des Carolines ont perpétué leurs traditions de cuisson dans des fosses, devenant les maîtres incontestés de l'art du feu dans les plantations. Leurs 'Pit Barbecue' du dimanche sont devenus le fondement du Barbecue américain tel qu'il est connu aujourd'hui. La Caroline du Nord et celle du Sud se disputent encore la paternité de la meilleure sauce — vinaigre pur vs moutarde-tomate.",
        relatedRecipes: ["jambalaya", "hoppin-john", "griot-haitien", "jerk-jamaicain"]
    },

    {
        id: "suya-chanchanga",
        title: "Suya & Chanchanga",
        origin: "Nigéria / Cameroun",
        region: "Afrique",
        image: "/images/suya-chanchanga.webp",
        prepTime: 30,
        cookTime: 20,
        servings: 4,
        difficulty: "Moyen",
        tags: ["viande", "grillades"],
        ingredients: [
            { name: "Bœuf (faux-filet ou bavette), tranché très fin", quantity: "600g" },
            { name: "Arachides grillées réduites en poudre (Kuli-kuli)", quantity: "100g" },
            { name: "Assaisonnement 100% naturel (soumbala de néré moulu & sel marin pur)", quantity: "1 c.à.s" },
            { name: "Gingembre en poudre", quantity: "1 c.à.c" },
            { name: "Piment de Cayenne", quantity: "1 c.à.c" },
            { name: "Paprika doux", quantity: "1 c.à.c" },
            { name: "Ail en poudre", quantity: "1 c.à.c" },
            { name: "Oignon séché en poudre", quantity: "1 c.à.c" },
            { name: "Poivre cubèbe ou poivre de Penja", quantity: "1/2 c.à.c" },
            { name: "Huile d'arachide pure", quantity: "2 c.à.s" },
            { name: "Oignon rouge émincé", quantity: "1 (pour servir)" },
            { name: "Tomates fraîches en quartiers", quantity: "2 (pour servir)" },
            { name: "Piment frais (pour servir)", quantity: "à goût" }
        ],
        utensils: [
            "Brochettes en bois (trempées 30 min)",
            "Barbecue à charbon ou plancha très chaude",
            "Pince longue",
            "Pinceau à badigeonner"
        ],
        steps: [
            {
                order: 1,
                description: "Préparation du Yaji authentique et 100% naturel : Mixer les arachides grillées en poudre fine (Kuli-kuli). Mélanger avec le gingembre, le piment de Cayenne, le paprika doux, l'ail et l'oignon en poudre, le poivre cubèbe, le sel marin pur et le soumbala (néré fermenté traditionnel). Ce mélange ancestral confère une note umami profonde et puissante, sans aucun cube de bouillon industriel ni additif chimique.",
                duration: 10
            },
            {
                order: 2,
                description: "Tranchage et préparation de la viande : Trancher le bœuf en lamelles très fines (2 à 3 mm) perpendiculairement aux fibres. Huiler légèrement chaque lamelle au pinceau. Enrober généreusement de poudre Yaji naturelle sur les deux faces en pressant avec la paume pour faire adhérer les épices. Enfiler sur les brochettes en accordéon serré.",
                duration: 15
            },
            {
                order: 3,
                description: "Grillade sur charbon ardent : Les braises doivent être très chaudes et rougeoyantes (190–200°C). Griller les brochettes 3–4 minutes par face, en badigeonnant d'un filet d'huile d'arachide à mi-cuisson. La viande doit développer une croûte d'épices croustillante et légèrement toastée.",
                duration: 10
            },
            {
                order: 4,
                description: "La technique Chanchanga : Dans la variante camerounaise, retirer les brochettes des braises alors qu'elles sont encore juteuses, les rouler dans un supplément de Yaji frais, puis les replacer 1 minute sur les braises vives. Ce double enrobage crée une croûte d'épices encore plus intense et savoureuse.",
                duration: 10
            },
            {
                order: 5,
                description: "Service de rue traditionnel : Servir immédiatement dans du papier kraft avec des rondelles d'oignons rouges piquants, des quartiers de tomates fraîches et une coupelle de Yaji naturel supplémentaire à saupoudrer.",
                duration: 3
            }
        ],
        suggestedAccompaniments: [
            "Pain de manioc ou pain traditionnel",
            "Épis de maïs grillé aux braises",
            "Jus d'hibiscus (Bissap) ou jus de gingembre frais",
            "Oignons rouges crus et piment frais"
        ],
        practicalTips: [
            "Initiative Santé 100% Naturel : Bannissez les cubes de bouillon industriels (Maggi, Jumbo) bourrés de glutamate monosodique et de sel raffiné. L'association traditionnelle du Kuli-kuli (arachide) et du soumbala (néré fermenté) crée un umami naturel prodigieux tout en préservant le système cardiovasculaire.",
            "Le Kuli-kuli (poudre d'arachide dégraissée et torréfiée) est irremplaçable : il absorbe les sucs de cuisson et forme la croûte croustillante emblématique du Suya.",
            "La viande doit être tranchée ultra-fine (2 à 3 mm) pour saisir en quelques minutes sur le feu sans sécher.",
            "La Chanchanga camerounaise pousse l'intensité à son paroxysme grâce au double trempage dans les épices."
        ],
        intro: "Le soir tombe sur Lagos et Douala, la fumée s'élève des barbecues de rue, les arômes d'arachide et de piment enveloppent la nuit — la Suya n'est pas un plat, c'est un rendez-vous.",
        description: "La Suya est la brochette sacrée de l'Afrique de l'Ouest, née chez les peuples Haoussa et Fula du nord du Nigéria avant de conquérir tout le continent. Le Yaji, son mélange d'épices à base de Kuli-kuli (arachides grillées en poudre), est un secret jalousement gardé par chaque mallam (maître grilleur) — certaines recettes familiales se transmettent sur plusieurs générations. La Chanchanga est la déclinaison camerounaise de cette tradition, avec un enrobage d'épices redoublé qui lui confère un caractère plus intense. Ces brochettes sont aujourd'hui un marqueur identitaire fort de la jeunesse africaine urbaine.",
        relatedRecipes: ["braai-sud-africain", "anticuchos", "jerk-jamaicain", "churrasco-bresilien"]
    },

    // ────────────────────────────────────────────────
    //  DESSERTS
    // ────────────────────────────────────────────────
    {
        id: 'puff-puff',
        title: 'Puff-Puff',
        origin: 'Nigéria / Cameroun',
        region: 'Afrique',
        image: '/images/puff-puff.jpg',
        prepTime: 15,
        cookTime: 20,
        servings: 6,
        difficulty: 'Facile',
        ingredients: [
            { name: 'Farine de blé', quantity: '3 tasses (375g)' },
            { name: 'Levure boulangère sèche', quantity: '2 c.à.c (1 sachet)' },
            { name: 'Sucre', quantity: '1/2 tasse' },
            { name: 'Eau tiède', quantity: '1½ à 2 tasses' },
            { name: 'Sel', quantity: '1/2 c.à.c' },
            { name: 'Noix de muscade moulue', quantity: '1/2 c.à.c' },
            { name: 'Huile végétale', quantity: 'Pour la friture' }
        ],
        utensils: ['Grand bol', 'Marmite ou casserole profonde', 'Cuillère à soupe', 'Papier absorbant'],
        steps: [
            { order: 1, description: 'Dans un grand bol, mélanger la farine, le sucre, le sel et la noix de muscade. Créer un puits au centre.', duration: 3 },
            { order: 2, description: 'Délayer la levure dans l\'eau tiède pendant 5 minutes jusqu\'à ce qu\'elle mousse. Verser dans le puits.', duration: 5 },
            { order: 3, description: 'Mélanger vigoureusement jusqu\'à obtenir une pâte lisse et épaisse sans grumeaux. Couvrir d\'un linge propre.', duration: 5 },
            { order: 4, description: 'Laisser lever la pâte dans un endroit chaud pendant 1h à 1h30, jusqu\'à ce qu\'elle ait doublé de volume.', duration: 90 },
            { order: 5, description: 'Chauffer l\'huile à feu moyen (175°C). Tester avec une goutte de pâte : elle doit remonter immédiatement en surface.', duration: 5 },
            { order: 6, description: 'Former des boules de pâte en pressant entre le pouce et l\'index et les faire tomber délicatement dans l\'huile.', duration: 3 },
            { order: 7, description: 'Frire en retournant régulièrement pendant 3-4 minutes jusqu\'à coloration dorée uniforme.', duration: 15 },
            { order: 8, description: 'Égoutter sur du papier absorbant. Servir chauds, nature ou roulés dans du sucre glace.' }
        ],
        practicalTips: [
            'La levée est le secret : une pâte bien fermentée donnera des puff-puff légers et creux à l\'intérieur.',
            'L\'huile doit être à bonne température : trop froide = puff-puff gras ; trop chaude = brûlés dehors et crus dedans.',
            'La pâte doit être épaisse mais coulante. Ajouter de l\'eau si nécessaire.',
            'Variante : ajouter 1 c.à.s de pâte d\'arachide dans la pâte pour une version plus gourmande.'
        ],
        intro: 'Des boules d\'or croustillantes dehors, aériennes et moelleuses dedans — le beignet africain qui rassemble toutes les générations.',
        description: 'Le Puff-Puff est LE dessert et encas de rue universel de l\'Afrique subsaharienne. Du Nigeria au Cameroun, en passant par la Côte d\'Ivoire (Bofloto) et le Congo (Mikate), ces beignets de pâte levée font partie de chaque fête, chaque dimanche en famille, chaque buffet de mariage.',
        relatedRecipes: ['kakro', 'chin-chin']
    },
    {
        id: 'chin-chin',
        title: 'Chin-Chin',
        origin: 'Nigéria',
        region: 'Afrique',
        image: '/images/Chin-Chin Atchomon.png',
        prepTime: 30,
        cookTime: 25,
        servings: 8,
        difficulty: 'Facile',
        ingredients: [
            { name: 'Farine de blé', quantity: '4 tasses (500g)' },
            { name: 'Beurre ou margarine fondu', quantity: '100g' },
            { name: 'Sucre', quantity: '1/2 tasse' },
            { name: 'Œufs', quantity: '2' },
            { name: 'Lait (ou eau)', quantity: '1/2 tasse' },
            { name: 'Noix de muscade moulue', quantity: '1/2 c.à.c' },
            { name: 'Levure chimique', quantity: '1/2 c.à.c' },
            { name: 'Sel', quantity: '1/4 c.à.c' },
            { name: 'Huile végétale', quantity: 'Pour la friture' }
        ],
        utensils: ['Grand bol', 'Rouleau à pâtisserie', 'Couteau ou roulette à pâte', 'Marmite pour friture'],
        steps: [
            { order: 1, description: 'Mélanger farine, sucre, sel, muscade et levure. Ajouter le beurre fondu et sabler avec les doigts.', duration: 5 },
            { order: 2, description: 'Battre les œufs avec le lait. Verser progressivement et pétrir jusqu\'à obtenir une pâte ferme non collante.', duration: 10 },
            { order: 3, description: 'Sur un plan fariné, étaler la pâte en rectangle d\'environ 5mm d\'épaisseur.', duration: 5 },
            { order: 4, description: 'Couper en petits bâtonnets ou carrés d\'environ 1cm, ou rouler en petites cordes puis couper.', duration: 15 },
            { order: 5, description: 'Chauffer l\'huile à feu moyen (170°C). Frire en petites quantités en remuant pour une coloration homogène.', duration: 5 },
            { order: 6, description: 'Frire 5-8 minutes jusqu\'à ce qu\'ils soient bien dorés et croustillants. Égoutter sur papier absorbant.', duration: 8 },
            { order: 7, description: 'Laisser refroidir complètement avant de conserver dans une boîte hermétique (se garde 2-3 semaines).' }
        ],
        practicalTips: [
            'La pâte doit être ferme comme une pâte à tarte : si elle est trop molle, le chin-chin ne sera pas croustillant.',
            'Frire à feu moyen-doux : trop fort et l\'extérieur brûle avant que l\'intérieur soit cuit.',
            'Variantes : ajouter de la noix de coco râpée, des graines de sésame ou du chocolat en poudre.',
            'Pour un chin-chin plus tendre, remplacer une partie de la farine par de la fécule de maïs.'
        ],
        suggestedAccompaniments: ['Jus de gingembre', 'Jus d\'hibiscus (Bissap)'],
        intro: 'Ce petit biscuit frit croustillant est le compagnon indétrônable de toutes les fêtes nigérianes — on en mange une poignée, puis encore une...',
        description: 'Le Chin-Chin est bien plus qu\'un simple biscuit : c\'est un rite de passage culinaire au Nigéria et dans toute l\'Afrique de l\'Ouest. Préparé en grande quantité pour Noël, l\'Aïd ou les mariages, il se partage dans des grands bocaux colorés.',
        relatedRecipes: ['puff-puff']
    },
    {
        id: 'mandazi',
        title: 'Mandazi',
        origin: 'Kenya / Tanzanie',
        region: 'Afrique',
        image: '/images/mandazi.webp',
        prepTime: 20,
        cookTime: 20,
        servings: 4,
        difficulty: 'Facile',
        ingredients: [
            { name: 'Farine de blé', quantity: '3 tasses (375g)' },
            { name: 'Lait de coco', quantity: '1 tasse' },
            { name: 'Sucre', quantity: '4 c.à.s' },
            { name: 'Levure chimique', quantity: '1 c.à.s' },
            { name: 'Cardamome moulue', quantity: '1 c.à.c' },
            { name: 'Noix de muscade', quantity: '1/4 c.à.c' },
            { name: 'Sel', quantity: '1/4 c.à.c' },
            { name: 'Huile végétale', quantity: 'Pour la friture et 1 c.à.s dans la pâte' }
        ],
        utensils: ['Grand bol', 'Rouleau à pâtisserie', 'Emporte-pièce ou verre', 'Marmite ou poêle profonde'],
        steps: [
            { order: 1, description: 'Mélanger la farine, le sucre, le sel, la levure, la cardamome et la muscade dans un grand bol.', duration: 3 },
            { order: 2, description: 'Ajouter le lait de coco et 1 c.à.s d\'huile. Pétrir jusqu\'à obtenir une pâte souple et non collante.', duration: 8 },
            { order: 3, description: 'Couvrir et laisser reposer 30 minutes à température ambiante.', duration: 30 },
            { order: 4, description: 'Étaler la pâte sur 1cm d\'épaisseur. Couper en triangles, carrés ou cercles.', duration: 10 },
            { order: 5, description: 'Chauffer l\'huile à 175°C. Frire les mandazi par petites fournées, 2-3 minutes par côté, jusqu\'à ce qu\'ils soient bien gonflés et dorés.', duration: 20 },
            { order: 6, description: 'Égoutter sur du papier absorbant. Servir chauds avec du thé chai ou du lait concentré sucré.' }
        ],
        practicalTips: [
            'La cardamome est l\'épice signature des Mandazi : ne pas l\'omettre.',
            'Le lait de coco peut être remplacé par du lait normal, mais le résultat sera moins parfumé.',
            'Variante Mahamri (plus traditionnel) : utiliser de la levure boulangère pour une texture encore plus aérée.'
        ],
        suggestedAccompaniments: ['Thé Chai', 'Miel', 'Lait concentré sucré'],
        intro: 'Le beignet de l\'Afrique de l\'Est, parfumé à la cardamome et au lait de coco — un classique des petits-déjeuners swahilis au bord de l\'océan Indien.',
        description: 'Les Mandazi sont le beignet roi de la côte swahilie, du Kenya à la Tanzanie en passant par Zanzibar. Leur parfum unique à la cardamome trahit des siècles d\'échanges commerciaux avec le monde arabe et indien.',
        relatedRecipes: ['puff-puff', 'thiakry']
    },
    {
        id: 'kakro',
        title: 'Kakro (Beignets de Plantain)',
        origin: 'Côte d\'Ivoire / Ghana',
        region: 'Afrique',
        image: '/images/kakro-P.jpg',
        prepTime: 10,
        cookTime: 15,
        servings: 4,
        difficulty: 'Facile',
        ingredients: [
            { name: 'Bananes plantains très mûres (peau noire)', quantity: '3 grandes' },
            { name: 'Farine de blé', quantity: '4 à 6 c.à.s' },
            { name: 'Sucre (optionnel)', quantity: '2 c.à.s' },
            { name: 'Gingembre frais râpé', quantity: '1 c.à.c' },
            { name: 'Sel', quantity: '1 pincée' },
            { name: 'Huile végétale', quantity: 'Pour la friture' }
        ],
        utensils: ['Fourchette ou mixeur', 'Bol', 'Poêle ou marmite', 'Cuillère à soupe'],
        steps: [
            { order: 1, description: 'Éplucher les plantains mûrs et les écraser à la fourchette jusqu\'à obtenir une purée lisse.', duration: 5 },
            { order: 2, description: 'Ajouter la farine, le gingembre, le sel et le sucre. Mélanger jusqu\'à obtenir une pâte épaisse et collante.', duration: 3 },
            { order: 3, description: 'Chauffer l\'huile dans une poêle à feu moyen (environ 3-4cm de profondeur).', duration: 3 },
            { order: 4, description: 'Déposer des cuillerées de pâte dans l\'huile chaude. Aplatir légèrement. Frire 2-3 minutes de chaque côté.', duration: 10 },
            { order: 5, description: 'Les beignets doivent être bien dorés et caramélisés. Égoutter et servir chauds.' }
        ],
        practicalTips: [
            'Le secret absolu : les plantains DOIVENT avoir la peau noire. Un plantain jaune donnera un résultat fade.',
            'Plus vous ajoutez de farine, plus les beignets seront fermes. Moins de farine = plus moelleux.',
            'Variante : ajouter de la noix de coco râpée dans la pâte pour une version plus riche.'
        ],
        intro: 'La magie d\'un plantain trop mûr transformé en or : les Kakro sont la preuve que les meilleurs desserts naissent de la simplicité.',
        description: 'Le Kakro est le beignet de plantain ivoirien par excellence. Née de la tradition de ne rien gâcher, cette recette transforme les plantains à la peau noire en petites douceurs caramélisées irrésistibles.',
        relatedRecipes: ['puff-puff', 'alloco']
    },
    {
        id: 'cocada',
        title: 'Cocada (Bonbon Noix de Coco)',
        origin: 'Brésil (héritage Afro)',
        region: 'Amérique du Sud',
        image: '/images/Cocada.jpg',
        prepTime: 5,
        cookTime: 20,
        servings: 8,
        difficulty: 'Facile',
        ingredients: [
            { name: 'Noix de coco râpée', quantity: '300g' },
            { name: 'Sucre', quantity: '200g' },
            { name: 'Eau', quantity: '100ml' },
            { name: 'Sel', quantity: '1 pincée' },
            { name: 'Lait concentré sucré (optionnel pour version crémeuse)', quantity: '100ml' }
        ],
        utensils: ['Casserole à fond épais', 'Cuillère en bois', 'Papier sulfurisé ou assiette huilée'],
        steps: [
            { order: 1, description: 'Dans une casserole à fond épais, mélanger le sucre et l\'eau. Porter à ébullition sans remuer jusqu\'à obtenir un sirop ambré.', duration: 8 },
            { order: 2, description: 'Ajouter la noix de coco râpée et le sel. Mélanger constamment à feu moyen.', duration: 2 },
            { order: 3, description: 'Cuire en mélangeant pendant 10-12 minutes. La masse va épaissir et se détacher des parois.', duration: 12 },
            { order: 4, description: 'Retirer du feu quand la cocada est sèche. Pour version crémeuse : ajouter le lait concentré et cuire 3 min de plus.', duration: 3 },
            { order: 5, description: 'Déposer des cuillerées sur papier sulfurisé. Laisser refroidir et durcir.' }
        ],
        practicalTips: [
            'Ne pas quitter la casserole des yeux : le sucre peut brûler très rapidement en fin de cuisson.',
            'Version brune (authentique) : laisser le caramel prendre couleur avant d\'ajouter la coco.',
            'Se conserve une semaine dans une boîte hermétique à température ambiante.'
        ],
        intro: 'Trois ingrédients, vingt minutes, une confiserie qui sent la plage, le sucre brun et l\'Afrique.',
        description: 'La Cocada est directement issue de la tradition culinaire africaine transportée au Brésil lors de la traite. Ce bonbon à la noix de coco, préparé par les femmes africaines dans les cuisines des plantations, est devenu l\'une des confiseries les plus aimées du pays.',
        relatedRecipes: ['tablet-kokoye', 'tembleque']
    },
    {
        id: 'thiakry',
        title: 'Thiakry',
        origin: 'Sénégal',
        region: 'Afrique',
        image: '/images/thiakry.jpg',
        prepTime: 15,
        cookTime: 20,
        servings: 6,
        difficulty: 'Facile',
        ingredients: [
            { name: 'Couscous de mil (ou semoule fine)', quantity: '300g' },
            { name: 'Lait caillé (ou yaourt nature épais)', quantity: '500ml' },
            { name: 'Lait concentré sucré', quantity: '200ml' },
            { name: 'Sucre', quantity: '3 c.à.s' },
            { name: 'Noix de coco râpée', quantity: '50g' },
            { name: 'Raisins secs', quantity: '50g' },
            { name: 'Vanille', quantity: '1 c.à.c' },
            { name: 'Eau (pour la cuisson)', quantity: '400ml' }
        ],
        utensils: ['Couscoussier (ou casserole)', 'Grand bol de service', 'Cuillère en bois'],
        steps: [
            { order: 1, description: 'Arroser le couscous de mil d\'eau tiède légèrement salée, laisser gonfler 10 minutes, égrener à la main.', duration: 10 },
            { order: 2, description: 'Cuire à la vapeur dans un couscoussier 15-20 minutes. Doit être tendre mais pas collant. Laisser refroidir complètement.', duration: 20 },
            { order: 3, description: 'Dans un grand bol, mélanger le lait caillé, le lait concentré, le sucre et la vanille.', duration: 3 },
            { order: 4, description: 'Ajouter le couscous refroidi en l\'émiettant bien. Mélanger délicatement.', duration: 3 },
            { order: 5, description: 'Incorporer la noix de coco et les raisins secs. Goûter et ajuster le sucre.', duration: 2 },
            { order: 6, description: 'Réfrigérer au moins 1 heure. Servir très frais, décoré de noix de coco et raisins secs.' }
        ],
        practicalTips: [
            'Le couscous DOIT être complètement refroidi avant d\'être mélangé au lait caillé.',
            'Le thiakry se déguste très froid : préparez-le la veille pour un résultat optimal.',
            'En l\'absence de couscous de mil, de la semoule de blé fine fonctionne très bien.'
        ],
        intro: 'Un nuage de douceur et de fraîcheur — le Thiakry est le dessert le plus élégant du Sénégal, celui que l\'on sert aux invités d\'honneur.',
        description: 'Le Thiakry est le roi des desserts sénégalais. Ce couscous de mil nappé de lait caillé sucré est un symbole de générosité et de partage, servi frais dans les grandes occasions.',
        relatedRecipes: ['puff-puff']
    },
    {
        id: 'malva-pudding',
        title: 'Malva Pudding',
        origin: 'Afrique du Sud',
        region: 'Afrique',
        image: '/images/malva-pudding.jpg',
        prepTime: 15,
        cookTime: 40,
        servings: 8,
        difficulty: 'Moyen',
        ingredients: [
            { name: 'Farine de blé', quantity: '1 tasse (125g)' },
            { name: 'Sucre', quantity: '1 tasse (200g)' },
            { name: 'Œufs', quantity: '2' },
            { name: 'Lait', quantity: '1 tasse' },
            { name: 'Beurre fondu', quantity: '2 c.à.s' },
            { name: 'Vinaigre blanc', quantity: '1 c.à.s' },
            { name: 'Bicarbonate de soude', quantity: '1 c.à.c' },
            { name: 'Confiture d\'abricot (ou de papaye)', quantity: '2 c.à.s' },
            { name: 'Sel', quantity: '1 pincée' },
            { name: 'Levure chimique', quantity: '1 c.à.c' },
            { name: 'Sauce - crème liquide', quantity: '250ml' },
            { name: 'Sauce - beurre', quantity: '50g' },
            { name: 'Sauce - sucre brun', quantity: '100g' },
            { name: 'Sauce - eau', quantity: '50ml' }
        ],
        utensils: ['Moule carré (23cm)', 'Batteur électrique ou fouet', 'Petite casserole pour la sauce'],
        steps: [
            { order: 1, description: 'Préchauffer le four à 180°C. Beurrer un moule carré.', duration: 5 },
            { order: 2, description: 'Battre les œufs et le sucre jusqu\'à ce que le mélange soit pâle et mousseux. Ajouter le beurre fondu et la confiture.', duration: 5 },
            { order: 3, description: 'Dissoudre le bicarbonate dans le lait. Incorporer alternativement farine+levure et lait. Finir par le vinaigre.', duration: 5 },
            { order: 4, description: 'Verser dans le moule et enfourner 35-40 minutes. Bien doré et ferme au toucher.', duration: 40 },
            { order: 5, description: 'Sauce : mélanger crème, beurre, sucre brun et eau dans une casserole. Chauffer jusqu\'à dissolution complète.', duration: 10 },
            { order: 6, description: 'Dès la sortie du four, piquer le pudding partout et verser la sauce chaude dessus. Laisser absorber 10 min avant de servir.' }
        ],
        practicalTips: [
            'Le vinaigre réagit avec le bicarbonate pour donner au pudding sa texture éponge : ne pas l\'omettre.',
            'La sauce doit être versée sur le pudding CHAUD et encore dans le moule pour une absorption maximale.',
            'À défaut de confiture d\'abricot, n\'importe quelle confiture dorée (papaye, mangue) fonctionne.'
        ],
        suggestedAccompaniments: ['Glace vanille', 'Crème fraîche'],
        intro: 'Le dessert chaud qui fait fondre les cœurs : un gâteau éponge gorgé d\'une sauce au beurre caramélisée, né dans les cuisines du Cap.',
        description: 'Le Malva Pudding est le dessert national officieux de l\'Afrique du Sud. Né des cuisines Cape Malay, au carrefour des traditions hollandaises, malaises et africaines, ce pudding chaud est servi à chaque braai et chaque réunion de famille.',
        relatedRecipes: ['koeksisters']
    },
    {
        id: 'tablet-kokoye',
        title: 'Tablet Kokoye (Tablette Coco)',
        origin: 'Haïti',
        region: 'Caraïbes et Antilles',
        image: '/images/haiti-recette-de-la-tablet-kokoye.webp',
        prepTime: 10,
        cookTime: 25,
        servings: 10,
        difficulty: 'Facile',
        ingredients: [
            { name: 'Noix de coco fraîche râpée', quantity: '300g' },
            { name: 'Sucre de canne brun', quantity: '250g' },
            { name: 'Eau', quantity: '100ml' },
            { name: 'Gingembre frais râpé', quantity: '1 c.à.s' },
            { name: 'Cannelle moulue', quantity: '1/2 c.à.c' },
            { name: 'Zeste de citron vert (optionnel)', quantity: '1/2 c.à.c' },
            { name: 'Sel', quantity: '1 pincée' }
        ],
        utensils: ['Casserole à fond épais', 'Cuillère en bois', 'Papier sulfurisé ou marbre huilé'],
        steps: [
            { order: 1, description: 'Verser le sucre et l\'eau dans la casserole. Porter à ébullition sans remuer jusqu\'à obtenir un sirop.', duration: 8 },
            { order: 2, description: 'Ajouter le gingembre, la cannelle et le zeste. Mélanger.', duration: 2 },
            { order: 3, description: 'Incorporer la noix de coco râpée et le sel. Remuer constamment à feu moyen-fort.', duration: 2 },
            { order: 4, description: 'Cuire en mélangeant continuellement 15-20 minutes jusqu\'à ce que la masse épaississe et se détache des parois.', duration: 20 },
            { order: 5, description: 'Tester : une petite quantité sur assiette froide doit durcir en quelques secondes.', duration: 2 },
            { order: 6, description: 'Verser rapidement par cuillerées sur le papier sulfurisé. Aplatir légèrement. Laisser durcir 30 min.' }
        ],
        practicalTips: [
            'La noix de coco fraîche est idéale : râpez-la vous-même pour un résultat incomparable.',
            'Travaillez vite lors du dressage : la tablette durcit très rapidement.',
            'Le sucre brun (cassonade, rapadura) donne une profondeur de goût que le sucre blanc ne peut reproduire.'
        ],
        intro: 'Sur les marchés de Port-au-Prince, les tablettes kokoye s\'empilent dans des paniers en osier, leurs arômes de coco et de gingembre rivalisant avec la chaleur du soleil haïtien.',
        description: 'La Tablet Kokoye est la confiserie nationale haïtienne. Cousine directe de la Cocada brésilienne et des Coconut Drops jamaïcains, elle porte la mémoire des femmes africaines qui ont créé des douceurs extraordinaires avec les ressources de leur nouvel environnement.',
        relatedRecipes: ['cocada', 'tembleque']
    },
    {
        id: 'tembleque',
        title: 'Tembleque',
        origin: 'Porto Rico (héritage Afro-Caribéen)',
        region: 'Caraïbes et Antilles',
        image: '/images/tembleque.jpg',
        prepTime: 5,
        cookTime: 15,
        servings: 6,
        difficulty: 'Facile',
        ingredients: [
            { name: 'Lait de coco', quantity: '2 boîtes (800ml)' },
            { name: 'Fécule de maïs (Maïzena)', quantity: '6 c.à.s' },
            { name: 'Sucre', quantity: '1/2 tasse' },
            { name: 'Sel', quantity: '1 pincée' },
            { name: 'Cannelle moulue', quantity: 'Pour saupoudrer' },
            { name: 'Noix de coco râpée (optionnel)', quantity: 'Pour décorer' }
        ],
        utensils: ['Casserole', 'Fouet', 'Moules individuels ou plat à gratin', 'Film alimentaire'],
        steps: [
            { order: 1, description: 'Mélanger le lait de coco, la fécule, le sucre et le sel au fouet à FROID jusqu\'à dissolution complète.', duration: 3 },
            { order: 2, description: 'Placer sur feu moyen-doux et cuire en remuant CONSTAMMENT avec le fouet. Ne jamais s\'arrêter.', duration: 10 },
            { order: 3, description: 'Dès que la crème épaissit et commence à faire des bulles, retirer du feu immédiatement.', duration: 5 },
            { order: 4, description: 'Verser dans des moules rincés à l\'eau froide. Lisser la surface.', duration: 3 },
            { order: 5, description: 'Laisser refroidir 30 min à température ambiante puis réfrigérer minimum 3 heures.', duration: 180 },
            { order: 6, description: 'Démouler sur une assiette. Saupoudrer de cannelle et décorer de noix de coco râpée.' }
        ],
        practicalTips: [
            '"Tembleque" signifie "qui tremble" : le dessert doit avoir une légère consistance tremblotante.',
            'Ne jamais chauffer à feu vif : la fécule brûle instantanément. Patience.',
            'Plus simple qu\'un flan classique : pas d\'œufs, pas de bain-marie, pas de caramel.'
        ],
        suggestedAccompaniments: ['Mangue fraîche', 'Ananas', 'Fruits de la passion'],
        intro: 'Un flan au lait de coco si délicat qu\'il tremble à chaque frisson — le dessert des Caraïbes dans toute sa pureté.',
        description: 'Le Tembleque est l\'un des desserts les plus aimés de Porto Rico. Cette crème à la noix de coco, sans œufs et sans bain-marie, est d\'une simplicité trompeuse et d\'une élégance remarquable. Héritier direct des traditions culinaires africaines qui ont fait de la noix de coco le pilier de la cuisine caribéenne.',
        relatedRecipes: ['cocada', 'tablet-kokoye']
    },
    {
        id: 'gizzada',
        title: 'Gizzada (Tartelette Coco)',
        origin: 'Jamaïque',
        region: 'Caraïbes et Antilles',
        image: '/images/Gizzarda.jpg',
        prepTime: 30,
        cookTime: 25,
        servings: 8,
        difficulty: 'Moyen',
        ingredients: [
            { name: 'Pâte - Farine de blé', quantity: '2 tasses' },
            { name: 'Pâte - Beurre ou margarine froid', quantity: '100g' },
            { name: 'Pâte - Eau froide', quantity: '4-5 c.à.s' },
            { name: 'Pâte - Sel', quantity: '1/2 c.à.c' },
            { name: 'Garniture - Noix de coco râpée', quantity: '300g' },
            { name: 'Garniture - Sucre brun', quantity: '200g' },
            { name: 'Garniture - Eau', quantity: '100ml' },
            { name: 'Garniture - Gingembre frais râpé', quantity: '1 c.à.c' },
            { name: 'Garniture - Cannelle moulue', quantity: '1/2 c.à.c' },
            { name: 'Garniture - Noix de muscade', quantity: '1/4 c.à.c' },
            { name: 'Garniture - Zeste de citron vert', quantity: '1' }
        ],
        utensils: ['Moules à tartelettes ou moule à muffin', 'Casserole', 'Rouleau à pâtisserie'],
        steps: [
            { order: 1, description: 'Pâte : sabler farine, sel et beurre froid. Ajouter l\'eau cuillère par cuillère pour former une boule. Réfrigérer 30 min.', duration: 10 },
            { order: 2, description: 'Garniture : faire fondre le sucre dans l\'eau, ajouter coco, gingembre, cannelle, muscade et zeste. Cuire 10 min en remuant. Laisser refroidir.', duration: 15 },
            { order: 3, description: 'Préchauffer le four à 180°C. Étaler la pâte finement, découper des cercles.', duration: 5 },
            { order: 4, description: 'Foncer les moules. Pincer les bords pour créer la bordure crénelée signature du Gizzada.', duration: 10 },
            { order: 5, description: 'Précuire les fonds à blanc 10 min. Remplir de garniture coco. Enfourner 15-18 min.', duration: 25 },
            { order: 6, description: 'Laisser refroidir complètement avant de démouler.' }
        ],
        practicalTips: [
            'La bordure crénelée empêche la garniture de déborder pendant la cuisson.',
            'La garniture doit être refroidie avant de garnir les tartelettes.',
            'Le sucre muscovado donne la couleur dorée authentique du Gizzada.'
        ],
        intro: 'Une croûte feuilletée qui croustille, une garniture de noix de coco épicée et fondante — la tartelette jamaïcaine qui résume à elle seule l\'âme sucrée de la Caraïbe.',
        description: 'La Gizzada est l\'une des pâtisseries les plus emblématiques de la Jamaïque. Vendue dans chaque boulangerie de l\'île, elle mêle les techniques de pâtisserie européennes à la maîtrise africaine des épices et de la noix de coco.',
        relatedRecipes: ['tablet-kokoye', 'cocada']
    },
    {
        id: 'koeksisters',
        title: 'Koeksisters',
        origin: 'Afrique du Sud',
        region: 'Afrique',
        image: '/images/koeksisters-1.jpg',
        prepTime: 30,
        cookTime: 30,
        servings: 8,
        difficulty: 'Difficile',
        ingredients: [
            { name: 'Pâte - Farine de blé', quantity: '3 tasses' },
            { name: 'Pâte - Levure chimique', quantity: '3 c.à.c' },
            { name: 'Pâte - Sel', quantity: '1/2 c.à.c' },
            { name: 'Pâte - Beurre froid', quantity: '60g' },
            { name: 'Pâte - Lait', quantity: '180ml' },
            { name: 'Pâte - Œuf', quantity: '1' },
            { name: 'Sirop - Sucre', quantity: '4 tasses (800g)' },
            { name: 'Sirop - Eau', quantity: '2 tasses' },
            { name: 'Sirop - Gingembre moulu', quantity: '1 c.à.c' },
            { name: 'Sirop - Cannelle bâton', quantity: '1' },
            { name: 'Sirop - Jus de citron', quantity: '1 c.à.s' },
            { name: 'Sirop - Crème de tartre (ou vinaigre blanc)', quantity: '1/2 c.à.c' },
            { name: 'Huile végétale', quantity: 'Pour la friture' }
        ],
        utensils: ['Deux bols (dont un au congélateur)', 'Marmite pour friture', 'Couteau', 'Plateau'],
        steps: [
            { order: 1, description: 'Sirop (J-1) : Porter eau et sucre à ébullition avec gingembre, cannelle, citron et crème de tartre. Cuire 5 min. Diviser en deux portions égales et mettre AU CONGÉLATEUR.', duration: 10 },
            { order: 2, description: 'Pâte : Sabler farine, levure, sel et beurre. Ajouter œuf et lait. Pétrir brièvement pour une pâte souple.', duration: 10 },
            { order: 3, description: 'Étaler sur 1cm. Couper des rectangles 8x3cm. Faire 2 incisions dans la longueur (laisser 1cm en haut). Tresser les 3 lanières.', duration: 20 },
            { order: 4, description: 'Frire dans l\'huile à 180°C environ 3 min par côté jusqu\'à dorure complète.', duration: 20 },
            { order: 5, description: 'CRUCIAL : Plonger immédiatement les koeksisters CHAUDS dans le sirop GLACÉ. Laisser 2 min puis transférer dans le 2e bol de sirop froid.', duration: 10 },
            { order: 6, description: 'Égoutter sur une grille. Le sirop cristallise en surface. Servir froids.' }
        ],
        practicalTips: [
            'Le secret : pâte CHAUDE + sirop GLACÉ = absorption maximale et glaçage cristallisé parfait.',
            'Préparer le sirop la veille et le mettre au congélateur : il ne doit pas geler, juste être très froid.',
            'Ne pas faire des tresses trop épaisses : l\'intérieur doit cuire complètement.'
        ],
        intro: 'La tresse sucrée la plus addictive d\'Afrique du Sud : imbibée de sirop épicé, avec ce glaçage cristallisé qui craque sous les dents.',
        description: 'Les Koeksisters demandent une technique précise — notamment le choc thermique entre pâte chaude et sirop glacé — qui les rend brillantes, imbibées à cœur et croustillantes. Un défi technique, mais un résultat inoubliable.',
        relatedRecipes: ['malva-pudding']
    },
    {
        id: 'sweet-potato-pie',
        title: 'Sweet Potato Pie',
        origin: 'Afro-Américain (États-Unis)',
        region: 'Amérique du Nord',
        image: '/images/sweet-potato-pie.jpg',
        prepTime: 30,
        cookTime: 55,
        servings: 8,
        difficulty: 'Moyen',
        ingredients: [
            { name: 'Patates douces cuites et écrasées', quantity: '500g (environ 3 moyennes)' },
            { name: 'Lait concentré sucré', quantity: '200ml' },
            { name: 'Beurre fondu', quantity: '60g' },
            { name: 'Œufs', quantity: '2' },
            { name: 'Sucre brun', quantity: '100g' },
            { name: 'Cannelle moulue', quantity: '1 c.à.c' },
            { name: 'Noix de muscade', quantity: '1/2 c.à.c' },
            { name: 'Gingembre moulu', quantity: '1/2 c.à.c' },
            { name: 'Vanille', quantity: '1 c.à.c' },
            { name: 'Sel', quantity: '1/2 c.à.c' },
            { name: 'Pâte - Farine', quantity: '1½ tasse' },
            { name: 'Pâte - Beurre froid', quantity: '100g' },
            { name: 'Pâte - Eau froide', quantity: '3-4 c.à.s' },
            { name: 'Pâte - Sel', quantity: '1/4 c.à.c' }
        ],
        utensils: ['Mixeur ou fouet', 'Moule à tarte (23cm)', 'Four', 'Rouleau à pâtisserie'],
        steps: [
            { order: 1, description: 'Pâte : Sabler farine, sel et beurre froid. Lier avec l\'eau froide. Réfrigérer 30 min. Foncer le moule beurré. Précuire à blanc 10 min à 190°C.', duration: 20 },
            { order: 2, description: 'Cuire les patates douces (au four 45 min ou vapeur). Éplucher et réduire en purée très lisse.', duration: 45 },
            { order: 3, description: 'Battre les œufs et le sucre brun. Ajouter le lait concentré, le beurre fondu et la vanille.', duration: 5 },
            { order: 4, description: 'Incorporer la purée de patate douce et toutes les épices. Mélanger jusqu\'à obtenir un appareil lisse.', duration: 5 },
            { order: 5, description: 'Verser dans le fond de tarte précuit. Enfourner à 175°C pour 45-55 minutes.', duration: 55 },
            { order: 6, description: 'La tarte est cuite quand le centre est pris. Laisser refroidir complètement (minimum 2 heures) avant de découper.' }
        ],
        practicalTips: [
            'La patate douce à chair orange est idéale : plus sucrée et parfumée.',
            'Une purée parfaitement lisse est la clé : passer au mixeur après l\'avoir écrasée.',
            'Encore meilleure le lendemain : les arômes des épices se développent avec le temps.'
        ],
        suggestedAccompaniments: ['Crème chantilly', 'Glace vanille'],
        intro: 'Le trône des tables de fête afro-américaines depuis des siècles — cette tarte à la patate douce est une ode à la résilience et à la douceur d\'un peuple.',
        description: 'Le Sweet Potato Pie est bien plus qu\'un dessert : c\'est un symbole de l\'histoire afro-américaine. Né dans les cuisines des plantations, il s\'est transformé en œuvre d\'art culinaire transmise de génération en génération, indissociable de Thanksgiving et des réunions de famille du Sud des États-Unis.'
    },
    {
        id: "mangu",
        title: "Mangú",
        origin: "République Dominicaine / Porto Rico",
        region: "Caraïbes et Antilles",
        aliases: ["mangu","mangú","los tres golpes","puree de plantain","fufu caribeen"],
        image: "/images/mangu.webp",
        prepTime: 15,
        cookTime: 25,
        servings: 4,
        difficulty: "Facile",
        ingredients: [
          {
                    "name": "bananes plantain vertes",
                    "quantity": "4 grandes"
          },
          {
                    "name": "beurre",
                    "quantity": "60 g"
          },
          {
                    "name": "oignon rouge",
                    "quantity": "1 moyen, émincé"
          },
          {
                    "name": "vinaigre blanc",
                    "quantity": "2 cuillères à soupe"
          },
          {
                    "name": "sel",
                    "quantity": "à volonté"
          },
          {
                    "name": "eau de cuisson",
                    "quantity": "150 ml"
          }
],
        utensils: [
          "Grand mortier en bois ou pilon",
          "Casserole",
          "Poêle",
          "Presse-purée"
],
        steps: [
          {
                    "order": 1,
                    "description": "Pelez les plantains verts en incisant la peau dans le sens de la longueur. Coupez-les en tronçons de 4 cm. L'épluchage du plantain vert peut noircir les mains ; utilisez de l'huile pour faciliter le décollement de la peau coriace.",
                    "duration": 5
          },
          {
                    "order": 2,
                    "description": "Plongez les tronçons dans une casserole d'eau salée froide. Portez à ébullition et faites cuire 20 minutes à feu moyen, jusqu'à ce qu'ils soient tendres sous la pointe d'un couteau. Réservez 150 ml d'eau de cuisson avant d'égoutter.",
                    "duration": 20
          },
          {
                    "order": 3,
                    "description": "Faites revenir l'oignon rouge émincé dans le beurre à feu doux pendant 8 minutes jusqu'à caramélisation dorée. Ajoutez le vinaigre en fin de cuisson et mélangez. Réservez pour garnir.",
                    "duration": 8
          },
          {
                    "order": 4,
                    "description": "Transférez les plantains égouttés dans le mortier ou un grand bol. Pilez vigoureusement en ajoutant progressivement l'eau de cuisson et 40 g de beurre. Travaillez la pâte jusqu'à obtenir une consistance lisse, dense et homogène, sans grumeaux. C'est le geste ancestral — donnez-lui du respect.",
                    "duration": 8
          },
          {
                    "order": 5,
                    "description": "Rectifiez le sel. Formez des boules ou servez en dôme dans des assiettes creuses. Nappez généreusement avec les oignons caramélisés au vinaigre. Servez immédiatement, le Mangú durcit en refroidissant.",
                    "duration": 2
          }
],
        suggestedAccompaniments: [
          "Œufs frits",
          "Fromage frit (queso frito)",
          "Salami dominicain grillé",
          "Sauce piquante créole"
],
        practicalTips: [
          "Plus le plantain est vert (non mûr), plus la pâte sera ferme et authentique.",
          "L'eau de cuisson amidonnée est le secret d'une texture soyeuse — ne la jetez pas.",
          "On peut remplacer le beurre par de l'huile de coco pour une version plus proche de la tradition africaine."
],
        intro: "Pâte de plantain vert pilée, née du silence des cales. Un mémorial comestible aux ancêtres du Bénin.",
        description: "Le Mangú est l'héritier direct du Fufu, ce plat fondateur façonné par des millions de mains africaines avant l'arrachement. Lorsque les navires négriers traversèrent l'Atlantique depuis les côtes du Golfe de Guinée — Bénin, Nigéria, Angola — ils emportèrent involontairement le geste millénaire de piler les tubercules bouillis. Sur les grandes plantations sucrières de Saint-Domingue et de Porto Rico, les esclaves adaptèrent ce rituel culinaire avec ce qu'ils trouvèrent : la banane plantain verte, abondante et peu coûteuse, que les maîtres laissaient aux captifs. Le pilage en mortier n'était plus seulement une technique ; c'était un acte de mémoire, une transmission codée. Dans les cases, les mères apprenaient à leurs enfants ce même mouvement de pilon que leurs propres mères avaient accompli sur les rivages de l'Afrique. Après l'indépendance dominicaine en 1844, le Mangú devint un symbole de la culture populaire, servi au petit-déjeuner avec des œufs et du fromage frit. Son nom viendrait même d'un soldat américain qui, au début du XXe siècle, goûta ce plat et s'écria \"Man, good!\" — anecdote apocryphe mais révélatrice de l'universalité de sa saveur. Piler du plantain, c'est encore aujourd'hui honorer les ancêtres."
,       tags: ["vegan"]
    },

    {
        id: "soso-mais-brede",
        title: "Soso Maïs & Brèdes",
        origin: "La Réunion / Maurice",
        region: "Océan Indien",
        aliases: ["soso maïs","sosso maïs","bredes","bouillon brede","sosso mai"],
        image: "/images/soso-mais-brede.webp",
        prepTime: 20,
        cookTime: 35,
        servings: 6,
        difficulty: "Facile",
        ingredients: [
          {
                    "name": "semoule de maïs grossière",
                    "quantity": "300 g"
          },
          {
                    "name": "brèdes de taro (ou épinards sauvages)",
                    "quantity": "400 g de feuilles"
          },
          {
                    "name": "oignon",
                    "quantity": "2, émincés"
          },
          {
                    "name": "ail",
                    "quantity": "4 gousses écrasées"
          },
          {
                    "name": "gingembre frais",
                    "quantity": "1 morceau de 3 cm, râpé"
          },
          {
                    "name": "curcuma en poudre (safran péi)",
                    "quantity": "1 cuillère à café"
          },
          {
                    "name": "piment oiseau",
                    "quantity": "1, entier"
          },
          {
                    "name": "huile",
                    "quantity": "3 cuillères à soupe"
          },
          {
                    "name": "sel",
                    "quantity": "à volonté"
          },
          {
                    "name": "eau",
                    "quantity": "900 ml"
          }
],
        utensils: [
          "Grande marmite",
          "Poêle",
          "Couteau",
          "Cuillère en bois"
],
        steps: [
          {
                    "order": 1,
                    "description": "Lavez abondamment les brèdes de taro. Retirez les tiges les plus coriaces, ne gardez que les feuilles tendres et les petites tiges. Coupez grossièrement en lanières. Si vous utilisez des épinards sauvages, traitez-les de la même façon.",
                    "duration": 10
          },
          {
                    "order": 2,
                    "description": "Dans la marmite, faites chauffer l'huile à feu moyen. Faites revenir les oignons jusqu'à translucidité (5 min). Ajoutez l'ail écrasé, le gingembre râpé, le curcuma et le piment entier. Faites revenir encore 2 minutes en remuant constamment pour libérer les arômes sans brûler.",
                    "duration": 7
          },
          {
                    "order": 3,
                    "description": "Ajoutez les brèdes dans la marmite. Remuez énergiquement pour bien les enrober de la base épicée. Faites-les tomber à feu vif pendant 5 minutes — elles vont réduire considérablement de volume. Salez légèrement.",
                    "duration": 5
          },
          {
                    "order": 4,
                    "description": "Versez les 900 ml d'eau dans la marmite. Portez à ébullition. Dès l'ébullition, versez la semoule de maïs en pluie fine en fouettant constamment pour éviter les grumeaux. Réduisez le feu au minimum.",
                    "duration": 5
          },
          {
                    "order": 5,
                    "description": "Couvrez et laissez cuire à feu très doux pendant 20 minutes, en remuant toutes les 5 minutes avec la cuillère en bois. La semoule doit absorber tout le liquide et former une pâte épaisse qui se détache des parois. Retirez le piment entier avant de servir.",
                    "duration": 20
          },
          {
                    "order": 6,
                    "description": "Rectifiez le sel. Servez en portions généreuses dans des assiettes creuses ou des bols. Ce plat se sert chaud, nature ou accompagné d'un rougail tomate ou d'un cari léger.",
                    "duration": 2
          }
],
        suggestedAccompaniments: [
          "Rougail tomate",
          "Cari poulet réunionnais",
          "Achards de légumes",
          "Piment confit"
],
        practicalTips: [
          "Les brèdes de taro peuvent laisser une sensation légèrement âcre si mal cuites — assurez-vous de les faire cuire au moins 20 minutes.",
          "La semoule de maïs grossière (polenta grossa) donne une texture plus rustique et authentique que la fine.",
          "Ce plat se bonifie le lendemain — les saveurs se développent au repos."
],
        intro: "Semoule de maïs aux feuilles sauvages, nourrice des engagés. Dans chaque grain, l'empreinte de l'Inde et de l'Afrique entremêlées.",
        description: "Le Soso Maïs & Brèdes est né dans les champs de canne à sucre de La Réunion et de Maurice, après l'abolition de l'esclavage en 1848. Lorsque les anciens esclaves refusèrent — enfin libres — de retourner dans les plantations, les colons firent venir des travailleurs sous contrat d'engagement (engagés) depuis l'Inde, Mozambique, Madagascar et la Chine entre 1848 et 1920. Ces hommes et femmes arrachés à leur terre reçurent une ration alimentaire de misère : du maïs concassé, quelques légumes. Les brèdes — terme créole désignant toute feuille sauvage ou cultivée comestible (taro, chouchou, morelle, cresson) — devinrent leur salut nutritionnel. Collectées en lisière des champs après le travail, ces feuilles transformaient la simple bouillie de maïs en un plat vivant, parfumé, thérapeutique. Les engagés indiens y glissèrent le curcuma (safran péi), les Mozambicains la façon de lier les brèdes, créant une recette syncrétique qui raconte l'histoire du métissage forcé. Aujourd'hui encore, le Soso Maïs & Brèdes est le plat du dimanche des campagnes réunionnaises et mauriciennes, préparé par les grand-mères qui ne savent pas toujours son histoire, mais en perpétuent le geste avec amour."
,       tags: ["vegan","vegetarien"]
    },

    {
        id: "rougail-morue",
        title: "Rougail Morue",
        origin: "La Réunion",
        region: "Océan Indien",
        aliases: ["rougaille morue","rougay mori","morue safranee","rougail piment"],
        image: "/images/rougail-morue.webp",
        prepTime: 30,
        cookTime: 25,
        servings: 4,
        difficulty: "Moyen",
        ingredients: [
          {
                    "name": "morue salée séchée",
                    "quantity": "600 g"
          },
          {
                    "name": "tomates mûres",
                    "quantity": "5 grandes"
          },
          {
                    "name": "oignon",
                    "quantity": "2, émincés"
          },
          {
                    "name": "ail",
                    "quantity": "5 gousses écrasées"
          },
          {
                    "name": "gingembre frais",
                    "quantity": "2 cm, râpé"
          },
          {
                    "name": "curcuma en poudre (safran péi)",
                    "quantity": "1 cuillère à café"
          },
          {
                    "name": "piment oiseau frais",
                    "quantity": "2 (selon tolérance)"
          },
          {
                    "name": "thym frais",
                    "quantity": "3 brins"
          },
          {
                    "name": "huile",
                    "quantity": "4 cuillères à soupe"
          },
          {
                    "name": "sel",
                    "quantity": "avec précaution (la morue est déjà salée)"
          }
],
        utensils: [
          "Grand bol pour le dessalage",
          "Poêle à griller",
          "Sauteuse large",
          "Fourchette"
],
        steps: [
          {
                    "order": 1,
                    "description": "La veille ou 24 heures à l'avance : plongez la morue dans un grand bol d'eau froide. Changez l'eau 3 à 4 fois pour éliminer l'excès de sel. La morue est prête quand elle a retrouvé une texture souple et qu'un petit morceau goûté reste légèrement salé mais non agressif.",
                    "duration": 1440
          },
          {
                    "order": 2,
                    "description": "Égouttez et séchez la morue dessalée. Chauffez la poêle à griller à sec à feu vif. Grillez les morceaux de morue 3 à 4 minutes de chaque côté jusqu'à l'obtention d'une surface légèrement dorée et parfumée. La fumée légère est normale et désirable — c'est l'âme du plat.",
                    "duration": 8
          },
          {
                    "order": 3,
                    "description": "Laissez tiédir la morue grillée. Effilochez-la à la main ou à la fourchette en écartant soigneusement chaque arête. Ce geste d'effilochage est fondamental — la morue en lamelles s'imprègne mieux de la sauce.",
                    "duration": 10
          },
          {
                    "order": 4,
                    "description": "Dans la sauteuse, faites chauffer l'huile à feu moyen. Faites revenir les oignons jusqu'à coloration (6 min). Ajoutez l'ail, le gingembre, le curcuma, le thym et les piments entiers. Remuez 2 minutes. Ajoutez les tomates coupées en dés et laissez compoter à feu moyen 10 minutes, en écrasant légèrement avec la spatule.",
                    "duration": 18
          },
          {
                    "order": 5,
                    "description": "Incorporez la morue effilochée dans la sauce tomate. Mélangez délicatement pour ne pas trop émietter la chair. Laissez mijoter à feu doux 7 minutes supplémentaires. Goûtez avant d'ajouter du sel. Retirez le thym et les piments entiers avant de servir si vous préférez.",
                    "duration": 7
          }
],
        suggestedAccompaniments: [
          "Riz blanc vapeur",
          "Lentilles corail (dal)",
          "Rougail tomate frais",
          "Achards de papaye verte"
],
        practicalTips: [
          "Ne sautez jamais l'étape de dessalage — une morue trop salée gâche le plat entier.",
          "L'étape de grillage à sec est ce qui différencie le Rougail Morue réunionnais d'un simple ragoût de morue.",
          "Pour une sauce plus riche, ajoutez 2 cuillères à soupe de concentré de tomate avec les tomates fraîches."
],
        intro: "Morue grillée en sauce tomate-safran-piment. L'âme salée de La Réunion, née du commerce triangulaire.",
        description: "Le Rougail Morue est l'emblème culinaire de La Réunion, et son histoire est indissociable du commerce triangulaire. La morue — cabillaud séché et salé — fut introduite dans l'océan Indien par les navires européens du XVIIe siècle comme ration alimentaire durable pour les esclaves. Peu coûteuse, transportable sur des mois, nourrissante, elle devint la protéine assignée aux captifs africains dans les plantations de canne et de café de Bourbon (ancien nom de La Réunion). Mais les esclaves — Malgaches, Mozambicains, Comoriens, Indiens — transformèrent cette contrainte en art. Ils y ajoutèrent le rougail, préparation de tomates fraîches écrasées aux piments dont les racines sont à chercher dans les sauces piquantes d'Afrique de l'Est et de Madagascar. Le safran péi (curcuma local) donna la couleur dorée et les vertus thérapeutiques. Griller la morue avant de la mijoter n'est pas un caprice technique — c'est une mémoire des braises des campements marrons, des feux allumés en forêt par les esclaves fugitifs qui reconstituaient leur dignité autour d'une flamme. Aujourd'hui, le Rougail Morue est servi le vendredi dans les familles réunionnaises, jour maigre hérité du catholicisme colonial, mais le plat reste profondément africain dans son âme et ses techniques."
,       tags: ["poisson-fruits-de-mer"]
    },

    {
        id: "ti-jacques-boucane",
        title: "Ti-Jacques Boucané",
        origin: "La Réunion",
        region: "Océan Indien",
        aliases: ["ti jacque boucane","ti-jacque","ti-jacques","cari boucane","jacque marron"],
        image: "/images/ti-jacques-boucane.webp",
        prepTime: 25,
        cookTime: 45,
        servings: 5,
        difficulty: "Moyen",
        ingredients: [
          {
                    "name": "jackfruit vert (en conserve ou frais)",
                    "quantity": "800 g égoutté"
          },
          {
                    "name": "viande de porc boucané (fumée)",
                    "quantity": "300 g"
          },
          {
                    "name": "oignon",
                    "quantity": "2, émincés"
          },
          {
                    "name": "ail",
                    "quantity": "4 gousses écrasées"
          },
          {
                    "name": "gingembre frais",
                    "quantity": "2 cm, râpé"
          },
          {
                    "name": "curcuma",
                    "quantity": "1 cuillère à café"
          },
          {
                    "name": "thym",
                    "quantity": "3 brins"
          },
          {
                    "name": "tomates",
                    "quantity": "3, en dés"
          },
          {
                    "name": "piment",
                    "quantity": "1, à votre goût"
          },
          {
                    "name": "huile",
                    "quantity": "3 cuillères à soupe"
          },
          {
                    "name": "sel",
                    "quantity": "à volonté"
          }
],
        utensils: [
          "Hachoir ou couteau large",
          "Marmite en fonte",
          "Cuillère en bois"
],
        steps: [
          {
                    "order": 1,
                    "description": "Si vous utilisez du jackfruit en conserve, rincez-le abondamment et égouttez-le. Hachez grossièrement les morceaux au couteau — vous voulez une texture qui rappelle de la viande effilochée, pas de la purée. Si vous utilisez du jackfruit frais, pelez-le avec précaution (sa sève est collante, utilisez de l'huile sur les mains) et découpez la chair verte en morceaux.",
                    "duration": 10
          },
          {
                    "order": 2,
                    "description": "Faites bouillir la viande de porc boucané 15 minutes dans de l'eau pour atténuer l'excès de sel et de fumée. Égouttez et détaillez en petits morceaux ou effilochez à la fourchette. Réservez.",
                    "duration": 15
          },
          {
                    "order": 3,
                    "description": "Dans la marmite en fonte, faites chauffer l'huile à feu moyen-vif. Faites revenir les oignons jusqu'à coloration dorée. Ajoutez l'ail, le gingembre, le curcuma, le thym et le piment. Remuez 2 minutes pour faire monter les arômes.",
                    "duration": 7
          },
          {
                    "order": 4,
                    "description": "Ajoutez les dés de tomates. Laissez compoter 5 minutes en écrasant légèrement. Incorporez ensuite le jackfruit haché et les morceaux de porc boucané. Mélangez bien pour que tout soit enrobé de la base aromatique.",
                    "duration": 7
          },
          {
                    "order": 5,
                    "description": "Ajoutez un demi-verre d'eau, couvrez et laissez mijoter à feu doux pendant 25 minutes. Remuez de temps en temps. Le jackfruit doit s'imprégner des saveurs fumées et de la sauce épicée. En fin de cuisson, montez le feu 2 minutes à découvert pour faire réduire et concentrer la sauce.",
                    "duration": 27
          },
          {
                    "order": 6,
                    "description": "Rectifiez l'assaisonnement. Retirez le thym et le piment entier. Servez bien chaud sur du riz blanc. La texture du jackfruit mijoté est si proche de la viande effilochée que ce plat surprend toujours ses convives.",
                    "duration": 2
          }
],
        suggestedAccompaniments: [
          "Riz blanc parfumé",
          "Lentilles du Puy",
          "Rougail mangue verte",
          "Grains (haricots rouges)"
],
        practicalTips: [
          "Le jackfruit en conserve \"young green jackfruit\" est disponible dans les épiceries asiatiques — c'est le plus pratique.",
          "Si vous ne trouvez pas de porc boucané réunionnais, utilisez du jambon fumé de qualité ou de la palette fumée.",
          "Plus vous hachez finement le jackfruit, plus la texture sera proche de la viande effilochée."
],
        intro: "Jacque vert haché à la viande fumée. La recette de la forêt, née dans les campements des marrons de Bourbon.",
        description: "Le Ti-Jacques Boucané est un plat de résistance. Dans les forêts et les ravines escarpées de Bourbon — aujourd'hui La Réunion — les esclaves fugitifs appelés \"marrons\" survivaient en développant une cuisine de survie et de dignité. Le jacque (jackfruit) sauvage poussait en abondance dans les hauteurs de l'île, et sa chair verte, dense, fibreuse, pouvait tenir lieu de viande. Les marrons fumaient et boucanaient les quelques morceaux de viande ou de porc qu'ils parvenaient à se procurer lors de raids ou d'échanges secrets avec les esclaves des plaines. Le boucané — technique de fumage lente sur bois vert — est lui-même une mémoire africaine, puisque le fumage des viandes était pratiqué depuis des millénaires au Mozambique, à Madagascar et aux Comores. Le mot \"boucané\" vient d'ailleurs des Arawaks des Caraïbes (boucan), rappelant que les techniques de conservation alimentaire des peuples autochtones circulaient dans tout l'Atlantique et l'océan Indien. Malgré l'abolition de 1848, ce plat resta dans les mémoires des descendants de marrons des Hauts de l'île, transmis de génération en génération comme un code identitaire. Manger du Ti-Jacques Boucané, c'est honorer ceux qui ont choisi la liberté dans la forêt plutôt que l'humiliation dans les plaines."
,       tags: ["viande"]
    },

    {
        id: "tchaka",
        title: "Tchaka",
        origin: "Haïti",
        region: "Caraïbes et Antilles",
        aliases: ["chaka","tjakah","mais aux haricots","ragout de porc et mais"],
        image: "/images/tchaka.webp",
        prepTime: 30,
        cookTime: 120,
        servings: 8,
        difficulty: "Difficile",
        ingredients: [
          {
                    "name": "maïs concassé blanc (grès)",
                    "quantity": "400 g trempé une nuit"
          },
          {
                    "name": "haricots rouges secs",
                    "quantity": "300 g trempés une nuit"
          },
          {
                    "name": "pieds de porc",
                    "quantity": "600 g, coupés en morceaux"
          },
          {
                    "name": "huile de palme rouge (ou huile neutre)",
                    "quantity": "4 cuillères à soupe"
          },
          {
                    "name": "oignon",
                    "quantity": "2 gros, émincés"
          },
          {
                    "name": "ail",
                    "quantity": "6 gousses"
          },
          {
                    "name": "piment Scotch Bonnet",
                    "quantity": "1, entier"
          },
          {
                    "name": "thym frais",
                    "quantity": "5 brins"
          },
          {
                    "name": "cébettes",
                    "quantity": "4 tiges"
          },
          {
                    "name": "clous de girofle",
                    "quantity": "3"
          },
          {
                    "name": "sel",
                    "quantity": "à volonté"
          },
          {
                    "name": "eau",
                    "quantity": "2 litres"
          }
],
        utensils: [
          "Très grande marmite en fonte ou aluminium épais",
          "Autocuiseur (optionnel, pour gagner du temps)",
          "Louche",
          "Couteau"
],
        steps: [
          {
                    "order": 1,
                    "description": "La veille : faites tremper séparément le maïs concassé et les haricots rouges dans de l'eau froide pendant 12 heures minimum. Cela réduit considérablement le temps de cuisson et améliore la digestibilité.",
                    "duration": 720
          },
          {
                    "order": 2,
                    "description": "Blanchissez les pieds de porc : plongez-les dans de l'eau froide, portez à ébullition 10 minutes, égouttez et rincez. Cette étape élimine les impuretés et affine la saveur. Réservez.",
                    "duration": 12
          },
          {
                    "order": 3,
                    "description": "Dans la grande marmite, chauffez l'huile à feu moyen. Faites revenir les oignons, l'ail, les cébettes 5 minutes. Ajoutez les pieds de porc blanchis et faites-les dorer légèrement sur toutes les faces, 8 minutes. Ajoutez thym, piment entier, clous de girofle.",
                    "duration": 15
          },
          {
                    "order": 4,
                    "description": "Égouttez le maïs et les haricots trempés. Ajoutez-les dans la marmite avec les 2 litres d'eau. Portez à forte ébullition. Écumez la surface pendant les 5 premières minutes pour retirer les impuretés. Réduisez le feu au minimum, couvrez et laissez mijoter.",
                    "duration": 10
          },
          {
                    "order": 5,
                    "description": "Laissez cuire à feu très doux pendant 90 minutes minimum, en remuant toutes les 15 minutes avec la louche et en ajoutant de l'eau chaude si nécessaire. Le maïs et les haricots doivent être fondants et le bouillon épais. Les pieds de porc doivent être si tendres que la viande se détache de l'os à la pression d'une cuillère.",
                    "duration": 90
          },
          {
                    "order": 6,
                    "description": "Retirez le piment entier et les brins de thym. Rectifiez le sel généreusement. La consistance finale doit être celle d'un ragoût épais, presque d'une soupe-repas. Servez en bols larges, très chaud. Le Tchaka est encore meilleur réchauffé le lendemain.",
                    "duration": 5
          }
],
        suggestedAccompaniments: [
          "Pain haïtien (pain d'épis)",
          "Pikliz (pickles pimentés haïtiens)",
          "Avocat tranché",
          "Riz collé blanc"
],
        practicalTips: [
          "Le trempage une nuit est impératif — sans lui, la cuisson peut dépasser 3 heures.",
          "L'huile de palme rouge donne une couleur et une saveur authentiques — cherchez-la dans les épiceries africaines.",
          "En autocuiseur, la cuisson totale se réduit à 45 minutes après revenu."
],
        intro: "Maïs concassé, haricots rouges, pieds de porc. Le plat du marronnage, cuit au feu de bois dans la montagne haïtienne.",
        description: "Le Tchaka est le plat de la résistance ultime. Né dans les hauteurs boisées de Saint-Domingue à la fin du XVIIIe siècle, il fut la nourriture des marrons — ces esclaves fugitifs qui s'étaient réfugiés dans les mornes (montagnes) pour vivre libres. Inspiré du plat sénégalais Thiébou Yapp et des préparations de grains d'Afrique de l'Ouest où maïs et haricots sont toujours associés (symbole d'union entre les peuples), le Tchaka fut adapté avec ce que les marrons pouvaient se procurer : du maïs concassé volé dans les plantations, des haricots rouges sauvages, et parfois des pieds de porc récupérés lors d'embuscades sur les convois de ravitaillement coloniaux. La longue cuisson au feu de bois — souvent toute la nuit — n'était pas un choix esthétique : c'était une nécessité, le feu de bois étant la seule source de chaleur disponible. Les pieds de porc, partie du cochon que les maîtres n'accordaient qu'aux esclaves (les bas morceaux), furent transformés par les cuisiniers marrons en un met gélatineux d'une richesse incomparable. Après l'indépendance haïtienne de 1804 — première République noire du monde — le Tchaka devint le symbole de la liberté reconquise. Il est encore préparé lors des cérémonies Vodou, offert aux Lwa (esprits) comme offrande de gratitude."
,       tags: ["viande"]
    },

    {
        id: "soupe-joumou",
        title: "Soupe Joumou",
        origin: "Haïti",
        region: "Caraïbes et Antilles",
        aliases: ["soupe de lindependance","soupe giraumon","joumou","soup joumou"],
        image: "/images/soupe-joumou.webp",
        prepTime: 40,
        cookTime: 90,
        servings: 8,
        difficulty: "Difficile",
        ingredients: [
          {
                    "name": "courge giraumon (ou butternut)",
                    "quantity": "1 kg, en cubes"
          },
          {
                    "name": "bœuf (gîte ou paleron)",
                    "quantity": "500 g, en morceaux"
          },
          {
                    "name": "os à moelle",
                    "quantity": "2 morceaux"
          },
          {
                    "name": "carottes",
                    "quantity": "3, en rondelles"
          },
          {
                    "name": "navets",
                    "quantity": "2, en cubes"
          },
          {
                    "name": "chou blanc",
                    "quantity": "1/4, émincé"
          },
          {
                    "name": "céleri",
                    "quantity": "2 branches"
          },
          {
                    "name": "macaroni ou spaghetti coupés",
                    "quantity": "150 g"
          },
          {
                    "name": "banane plantain verte",
                    "quantity": "1, en rondelles"
          },
          {
                    "name": "oignon",
                    "quantity": "2"
          },
          {
                    "name": "ail",
                    "quantity": "5 gousses"
          },
          {
                    "name": "cébettes",
                    "quantity": "4 tiges"
          },
          {
                    "name": "piment Scotch Bonnet",
                    "quantity": "1, entier"
          },
          {
                    "name": "thym",
                    "quantity": "4 brins"
          },
          {
                    "name": "clous de girofle",
                    "quantity": "4"
          },
          {
                    "name": "jus de citron vert",
                    "quantity": "3 cuillères à soupe"
          },
          {
                    "name": "sel et poivre",
                    "quantity": "à volonté"
          },
          {
                    "name": "eau",
                    "quantity": "2,5 litres"
          }
],
        utensils: [
          "Très grande marmite",
          "Mixeur plongeant",
          "Louche",
          "Couteau"
],
        steps: [
          {
                    "order": 1,
                    "description": "La veille : faites mariner les morceaux de bœuf avec le jus de citron vert, le sel, l'ail écrasé, le thym et les cébettes pendant 4 à 12 heures au réfrigérateur. Cette marinade est fondamentale dans la cuisine haïtienne — elle attendrit et parfume profondément la viande.",
                    "duration": 240
          },
          {
                    "order": 2,
                    "description": "Dans la grande marmite, faites dorer les morceaux de bœuf marinés à l'huile à feu vif, 8 minutes sur toutes les faces. Ajoutez les os à moelle, les oignons émincés, le piment entier, les clous de girofle. Couvrez d'eau et portez à ébullition. Écumez. Réduisez le feu et laissez mijoter 45 minutes.",
                    "duration": 55
          },
          {
                    "order": 3,
                    "description": "Pendant ce temps, faites cuire les cubes de giraumon séparément dans de l'eau salée jusqu'à tendreté (15 min). Réduisez en purée très lisse avec le mixeur plongeant. Cette purée de giraumon est l'âme et la couleur dorée de la soupe.",
                    "duration": 20
          },
          {
                    "order": 4,
                    "description": "Incorporez la purée de giraumon dans le bouillon de bœuf. Ajoutez les carottes, les navets, le chou et la banane plantain. Mélangez et laissez cuire à feu moyen 20 minutes supplémentaires.",
                    "duration": 20
          },
          {
                    "order": 5,
                    "description": "Ajoutez les pâtes (macaroni ou spaghetti coupés) directement dans la soupe. Continuez la cuisson 10 minutes jusqu'à ce que les pâtes soient al dente. La soupe doit être épaisse, dorée, parfumée — d'un jaune-orangé intense comme un lever de soleil haïtien.",
                    "duration": 10
          },
          {
                    "order": 6,
                    "description": "Retirez le piment entier et les brins de thym. Retirez les os à moelle, récupérez la moelle et remettez-la dans la soupe pour plus d'onctuosité. Rectifiez le sel. Servez en très grands bols, brûlant, le matin du 1er janvier ou n'importe quel jour où vous avez besoin de sentir la liberté.",
                    "duration": 5
          }
],
        suggestedAccompaniments: [
          "Pain haïtien grillé",
          "Pikliz haïtien",
          "Tranches d'avocat mûr",
          "Jus de fruits tropicaux"
],
        practicalTips: [
          "La marinade au citron vert (épis) est une technique haïtienne incontournable — ne la négligez pas.",
          "Si vous ne trouvez pas de giraumon, la courge butternut est l'équivalent le plus proche en goût et texture.",
          "La soupe est toujours meilleure le lendemain matin — préparez-la la veille pour la déguster chauffée le 1er janvier."
],
        intro: "Soupe de courge giraumon, bœuf et légumes. Depuis le 1er janvier 1804, elle célèbre la première République noire du monde.",
        description: "La Soupe Joumou est l'un des plats les plus chargés de sens politique et symbolique de l'histoire culinaire mondiale. Sous la colonisation française à Saint-Domingue, le joumou — courge giraumon — était un légume réservé exclusivement aux maîtres blancs. Les esclaves africains, qui cultivaient cette courge de leurs mains enchaînées, n'avaient pas le droit d'en manger. Le joumou était littéralement un marqueur de l'oppression raciale par l'alimentation. Le 1er janvier 1804, lorsque Jean-Jacques Dessalines proclama l'indépendance d'Haïti — après la seule révolte d'esclaves victorieuse de l'histoire moderne — la première geste symbolique du peuple haïtien fut de préparer et de consommer collectivement une soupe de joumou. Cet acte culinaire était une déclaration politique aussi puissante qu'un manifeste : \"ce que vous nous avez interdit de manger, nous le mangeons aujourd'hui, libres.\" Depuis 220 ans, chaque famille haïtienne prépare la Soupe Joumou le 1er janvier, peu importe où elle se trouve dans le monde. En 2021, l'UNESCO a inscrit cette tradition sur la liste du patrimoine culturel immatériel de l'humanité. Une soupe qui a changé le monde."
,       tags: ["viande"]
    },

    {
        id: "feroce-avocat",
        title: "Féroce d'Avocat",
        origin: "Martinique",
        region: "Caraïbes et Antilles",
        aliases: ["feroce","avocat morue","chiquetaille avocat","guacamole antillais"],
        image: "/images/feroce-avocat.webp",
        prepTime: 30,
        cookTime: 0,
        servings: 4,
        difficulty: "Facile",
        ingredients: [
          {
                    "name": "avocats bien mûrs",
                    "quantity": "4 grands"
          },
          {
                    "name": "morue salée",
                    "quantity": "300 g"
          },
          {
                    "name": "farine de manioc (ou cassave râpée)",
                    "quantity": "80 g"
          },
          {
                    "name": "piment habanero",
                    "quantity": "1 petit (très fort, à doser avec précaution)"
          },
          {
                    "name": "cébettes (oignons verts)",
                    "quantity": "4 tiges"
          },
          {
                    "name": "jus de citron vert",
                    "quantity": "3 cuillères à soupe"
          },
          {
                    "name": "huile",
                    "quantity": "3 cuillères à soupe"
          },
          {
                    "name": "sel",
                    "quantity": "avec précaution"
          }
],
        utensils: [
          "Grand bol",
          "Fourchette ou pilon",
          "Poêle",
          "Couteau"
],
        steps: [
          {
                    "order": 1,
                    "description": "Dessalez la morue : plongez-la dans de l'eau froide 24 heures en changeant l'eau 3 fois. Ou pour accélérer : faites-la bouillir 20 minutes dans de l'eau non salée, en changeant l'eau une fois à mi-cuisson. Égouttez, laissez tiédir.",
                    "duration": 20
          },
          {
                    "order": 2,
                    "description": "Faites griller les filets de morue dessalée à la poêle sèche 3 minutes de chaque côté — ou effilochez-les directement à la main si vous préférez la version non grillée, plus douce. La version grillée apporte une note fumée caractéristique. Retirez chaque arête avec soin. Émiettez finement.",
                    "duration": 10
          },
          {
                    "order": 3,
                    "description": "Coupez les avocats en deux, retirez le noyau. Prélevez la chair à la cuillère dans un grand bol. Arrosez immédiatement du jus de citron vert pour éviter l'oxydation et pour commencer à \"cuire\" légèrement l'avocat à l'acide.",
                    "duration": 5
          },
          {
                    "order": 4,
                    "description": "Hachez très finement le piment habanero (portez des gants si possible — l'huile capsaïcine brûle les yeux). Ajoutez-le progressivement à votre convenance dans le bol d'avocat avec les cébettes émincées. Mélangez grossièrement à la fourchette — le Féroce doit rester rustique, pas lisse comme une purée.",
                    "duration": 5
          },
          {
                    "order": 5,
                    "description": "Incorporez la morue effilochée et l'huile dans le bol. Ajoutez la farine de manioc en pluie et mélangez délicatement. La farine de manioc va absorber le jus de l'avocat et former une texture granuleuse et absorbante absolument caractéristique du Féroce — irremplaçable.",
                    "duration": 5
          },
          {
                    "order": 6,
                    "description": "Goûtez et rectifiez le sel avec prudence (la morue sale encore). Réfrigérez 15 minutes minimum avant de servir. Dressez dans des verrines, sur des tranches de pain grillé, ou dans les coques des avocats vidées. Servez frais.",
                    "duration": 15
          }
],
        suggestedAccompaniments: [
          "Pain au beurre grillé",
          "Rhum vieux en apéritif",
          "Ti-punch martiniquais",
          "Salade verte simple"
],
        practicalTips: [
          "La farine de manioc (cherchez \"cassave\" ou \"tapioca granulé\" en épicerie antillaise) est absolument irremplaçable — c'est elle qui fait le Féroce.",
          "Le piment habanero est l'un des plus forts au monde — commencez par un quart et ajustez.",
          "Préparez juste avant de servir — l'avocat s'oxyde même avec le citron vert si attendu trop longtemps."
],
        intro: "Avocat pilé, farine de manioc, morue effilochée, piment habanero. La férocité du goût, douceur de l'esclavage sublimée.",
        description: "Le Féroce d'Avocat est un paradoxe culinaire fascinant : son nom évoque la violence, mais sa texture est soyeuse et généreuse. \"Féroce\" vient directement du créole martiniquais et désigne la force piquante du piment habanero qui traverse le palais. Ce plat incarne parfaitement l'histoire de la Martinique : l'avocat, originaire du Mexique et cultivé dès le XVIe siècle dans les Antilles françaises, était consommé par toutes les classes sociales. La morue salée, comme partout dans les Caraïbes, était la protéine des esclaves — bon marché, durable, peu estimée des maîtres. La farine de manioc (cassave) est l'ingrédient qui révèle les racines amérindiennes de ce plat : les Arawaks et les Caraïbes, peuples autochtones des Antilles, transformaient le manioc en farine depuis des millénaires. Cette farine, que les esclaves africains adoptèrent rapidement, apporte ici une texture granuleuse et absorbante absolument unique. Le piment habanero — l'un des plus puissants du monde — fut introduit par les Arawaks et devint le marqueur identitaire de la cuisine antillaise. Mélanger ces trois cultures — africaine, amérindienne, européenne — dans un plat servi froid, sans cuisson, est un acte de synthèse culinaire qui raconte quatre siècles de Martinique en quelques bouchées."
,       tags: ["poisson-fruits-de-mer"]
    },

    {
        id: "ti-nain-morue",
        title: "Ti-Nain Morue",
        origin: "Martinique / Guadeloupe",
        region: "Caraïbes et Antilles",
        aliases: ["ti nain lanmori","tinain morue","banane verte et morue","chiquetaille ti nain"],
        image: "/images/ti-nain-morue.webp",
        prepTime: 20,
        cookTime: 20,
        servings: 4,
        difficulty: "Facile",
        ingredients: [
          {
                    "name": "bananes plantain vertes (ti-nain)",
                    "quantity": "4 moyennes"
          },
          {
                    "name": "morue salée",
                    "quantity": "400 g"
          },
          {
                    "name": "oignon rouge",
                    "quantity": "1, émincé finement"
          },
          {
                    "name": "cébettes",
                    "quantity": "4 tiges, émincées"
          },
          {
                    "name": "piment antillais (ou habanero)",
                    "quantity": "1/2, haché finement"
          },
          {
                    "name": "jus de citron vert",
                    "quantity": "4 cuillères à soupe"
          },
          {
                    "name": "huile",
                    "quantity": "4 cuillères à soupe"
          },
          {
                    "name": "persil frais",
                    "quantity": "1 petite botte"
          },
          {
                    "name": "sel",
                    "quantity": "avec précaution"
          }
],
        utensils: [
          "Casserole",
          "Poêle",
          "Couteau",
          "Grand bol"
],
        steps: [
          {
                    "order": 1,
                    "description": "Dessalez la morue 24 heures dans de l'eau froide en changeant l'eau 3 fois. Pour accélérer : faites-la bouillir 20 minutes dans de l'eau non salée, égouttez, recommencez 10 minutes avec de l'eau fraîche. La morue doit rester légèrement salée — c'est son caractère.",
                    "duration": 20
          },
          {
                    "order": 2,
                    "description": "Faites cuire la morue dessalée dans de l'eau frémissante (sans ébullition) pendant 10 minutes. Égouttez, laissez tiédir. Effilochez entièrement à la main — retirez chaque arête, chaque peau. La chiquetaille doit être en fils fins et réguliers, pas en gros morceaux.",
                    "duration": 15
          },
          {
                    "order": 3,
                    "description": "Préparez la chiquetaille : dans le grand bol, mélangez la morue effilochée avec l'oignon rouge émincé, les cébettes, le piment haché, le jus de citron vert, l'huile et le persil ciselé. Mélangez bien, goûtez, ajustez le piment et le citron. Réservez au moins 15 minutes pour que les saveurs se mêlent.",
                    "duration": 15
          },
          {
                    "order": 4,
                    "description": "Faites cuire les bananes plantain vertes DANS LEUR PEAU dans de l'eau salée bouillante pendant 20 minutes. La peau protège la chair et permet une cuisson à l'étouffée qui donne au ti-nain une texture ferme, dense et légèrement amidonnée — très différente d'une banane pelée bouillie.",
                    "duration": 20
          },
          {
                    "order": 5,
                    "description": "Égouttez les bananes. Incisez la peau dans le sens de la longueur et pelez — attention à la vapeur. Coupez en rondelles épaisses ou servez entières. Dressez les ti-nain dans les assiettes et nappez généreusement de chiquetaille de morue. L'acidité du citron et le piquant du piment réveillent la douceur amidonnée de la banane.",
                    "duration": 5
          }
],
        suggestedAccompaniments: [
          "Tranches d'avocat",
          "Salade de christophine râpée",
          "Ti-punch ou jus de fruit de la passion",
          "Riz créole"
],
        practicalTips: [
          "Cuisez TOUJOURS le ti-nain dans sa peau — c'est la règle absolue pour obtenir la bonne texture.",
          "La chiquetaille préparée la veille et réfrigérée une nuit est encore meilleure — les arômes se concentrent.",
          "Plus la banane est verte (non mûre), plus elle sera ferme et authentique au goût."
],
        intro: "Banane plantain verte bouillie et chiquetaille de morue. L'assiette quotidienne des gens de mer et des champs antillais.",
        description: "Le Ti-Nain Morue est le plat le plus humble et le plus quotidien des Antilles françaises — et peut-être le plus profondément chargé d'histoire. \"Ti-nain\" signifie en créole \"petite banane\" et désigne spécifiquement la banane plantain verte, immature, bouillie dans sa peau. La chiquetaille (ou chiquetaille de morue) désigne la morue effilochée finement assaisonnée de piment, d'oignon, de citron et d'huile. Ce plat est né dans les cases des esclaves des plantations de canne à sucre de la Martinique et de la Guadeloupe au XVIIIe siècle. La banane plantain verte — riche en amidon résistant, satiante, peu coûteuse — constituait la ration de base distribuée aux captifs africains dans les plantations françaises. La morue salée était l'autre pilier de cette ration de survie. Mais les esclaves, avec génie, transformèrent cette maigre pitance en un plat vivant, pimenté, acidulé, parfumé. La chiquetaille porte en elle-même la créativité née de la contrainte : effilocher la morue à la main, l'assaisonner d'herbes fraîches, la corser de piment — c'était refuser la résignation. Aujourd'hui, le Ti-Nain Morue est servi dans tous les boucheries et snacks antillais comme en-cas du matin. Il accompagne aussi bien le rhum du petit-déjeuner que le déjeuner dominical. Simple, direct, inoubliable."
,       tags: ["poisson-fruits-de-mer"]
    },

    {
        id: "bebele",
        title: "Bébélé de Marie-Galante",
        origin: "Guadeloupe / Marie-Galante",
        region: "Caraïbes et Antilles",
        aliases: ["bebele","bélbélé","dombres aux tripes","chaudron marie-galante","tripes au fruit a pain"],
        image: "/images/bebele.webp",
        prepTime: 45,
        cookTime: 90,
        servings: 6,
        difficulty: "Difficile",
        ingredients: [
          {
                    "name": "Tripes de bœuf fraîches nettoyées et blanchies",
                    "quantity": "600g"
          },
          {
                    "name": "Morceau de queue ou groin de porc salé dessalé",
                    "quantity": "300g"
          },
          {
                    "name": "Bananes plantains vertes (ti-nains)",
                    "quantity": "4"
          },
          {
                    "name": "Fruit à pain mûr à point",
                    "quantity": "1/2 fruit (400g)"
          },
          {
                    "name": "Farine de blé (pour les dombrés)",
                    "quantity": "250g"
          },
          {
                    "name": "Eau tiède salée (pour les dombrés)",
                    "quantity": "120ml"
          },
          {
                    "name": "Citrons verts frais (pour le lavage des abats)",
                    "quantity": "3"
          },
          {
                    "name": "Cives fraîches (oignons-pays) hachées",
                    "quantity": "1 bouquet"
          },
          {
                    "name": "Gousses d'ail pilées",
                    "quantity": "5"
          },
          {
                    "name": "Feuilles de bois d'Inde (ou laurier et 4-épices)",
                    "quantity": "3 feuilles"
          },
          {
                    "name": "Thym frais",
                    "quantity": "4 branches"
          },
          {
                    "name": "Piment Bonda Man Jak entier intact",
                    "quantity": "1"
          },
          {
                    "name": "Huile de roucou ou végétale",
                    "quantity": "2 c.à.s"
          },
          {
                    "name": "Sel et poivre noir du moulin",
                    "quantity": "Au goût"
          }
],
        utensils: [
          "Grande marmite en fonte ou chaudron",
          "Saladier pour pétrir les dombrés",
          "Écumoire"
],
        steps: [
          {
                    "order": 1,
                    "description": "Le lavage et blanchiment rituel des tripes : Frotter vigoureusement les tripes de bœuf avec le gros sel et le jus des citrons verts pour éliminer toute odeur forte. Les rincer plusieurs fois, puis les faire blanchir 15 minutes dans de l'eau bouillante vinaigrée. Égoutter et découper en fines lanières régulières.",
                    "duration": 20
          },
          {
                    "order": 2,
                    "description": "Le bouillon de salaisons : Dans la grande marmite, faire suer dans l'huile les cives, l'ail pilé, le thym et le bois d'Inde. Ajouter les tripes et la queue de porc dessalée taillée en morceaux. Couvrir avec 2,5 litres d'eau. Laisser frémir à couvert à feu moyen pendant 1 heure jusqu'à ce que les viandes soient tendres et fondantes.",
                    "duration": 60
          },
          {
                    "order": 3,
                    "description": "Préparation des vivres de case : Peler les bananes vertes (ti-nains) et le fruit à pain. Les couper en morceaux réguliers. Les incorporer dans le bouillon frémissant.",
                    "duration": 10
          },
          {
                    "order": 4,
                    "description": "Le roulage des dombrés : Dans un saladier, pétrir la farine avec l'eau tiède salée pour obtenir une pâte lisse et non collante. Prélever des petites noisettes de pâte et les faire rouler entre vos paumes pour confectionner de petits fuseaux allongés.",
                    "duration": 10
          },
          {
                    "order": 5,
                    "description": "Le plongeon des dombrés et le piment vigie : Jeter les dombrés un à un dans la marmite en ébullition pour qu'ils ne s'agglutinent pas. Déposer délicatement le piment Bonda Man Jak entier sur le dessus sans l'entailler. Laisser mijoter 20 minutes : l'amidon des dombrés et du fruit à pain va velouter la sauce.",
                    "duration": 20
          },
          {
                    "order": 6,
                    "description": "Dressage et dégustation : Retirer le piment avec précaution. Goûter le bouillon, rectifier le sel et le poivre. Servir fumant dans des assiettes creuses avec un filet de jus de citron vert frais.",
                    "duration": 5
          }
],
        suggestedAccompaniments: [
          "Piment écrasé à part",
          "Tranches d'avocat pays bien crémeux",
          "Verre de sirop de batterie ou ti-punch traditionnel"
],
        practicalTips: [
          "Le lavage minutieux des tripes au citron vert et au gros sel est la clé de voûte du Bébélé : il assure un bouillon pur, soyeux et sans amertume.",
          "Surveillez attentivement le piment entier : il ne doit sous aucun prétexte éclater pendant la cuisson pour préserver la douceur du bouillon."
],
        intro: "Le chaudron sacré de Marie-Galante : abats de bœuf, bananes vertes, fruit à pain et dombrés roulés à la main, nés du cinquième quartier des sucreries.",
        description: "Le Bébélé est le trésor gastronomique absolu de Marie-Galante, la « grande galette » sucrière de l'archipel guadeloupéen. Son histoire plonge au plus profond de l'horreur et de l'ingéniosité du système de plantation. Lors de l'abattage des bœufs indispensables pour actionner les moulins à canne et tirer les lourds cabrouets, les colons s'octroyaient les pièces nobles de la viande. Les esclaves n'avaient droit qu'aux abats délaissés : la panse, les tripes, les pieds et les morceaux dits du « cinquième quartier ». Loin de se résigner, les mères africaines déployèrent un savoir-faire extraordinaire : elles lavèrent rituellement ces abats avec le jus des citrons sauvages et le sel pour les purifier, puis les firent confire des heures durant avec ce que fournissaient leurs minuscules jardins de case — bananes vertes (ti-nains), fruit à pain et petites boulettes de farine et d'eau étirées à la main (les dombrés). Le mot « bébélé » dérive probablement d'une langue bantoue d'Afrique centrale signifiant ragoût ou mélange abondant. Aujourd'hui, ce plat de misère transcendé est le roi des dimanches et des fêtes marie-galantaises, célébrant la victoire de la dignité humaine et de l'amour nourricier sur l'oppression."
,       tags: ["viande"]
    }
];

