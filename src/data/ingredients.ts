export interface IngredientInfo {
    name: string;
    description: string;
    alternativeNames?: string[];
    commonIn?: string[];
    image?: string;
}

export const ingredientsGlossary: IngredientInfo[] = [
    {
        name: 'Attiéké',
        description: 'Semoule de manioc fermentée, aliment de base en Côte d\'Ivoire. Texture granuleuse similaire au couscous.',
        alternativeNames: ['Couscous de manioc', 'Garri (Nigeria)', 'Gari', 'Attieke', 'Atcheke'],
        commonIn: ['Afrique de l\'Ouest']
    },
    {
        name: 'Okra (Gombo)',
        description: 'Légume vert en forme de capsule, utilisé pour épaissir les sauces. Texture légèrement visqueuse.',
        alternativeNames: ['Gombo', 'Okra', 'Lady fingers', 'Okro', 'Bamia', 'Bamya', 'Quiabo', 'Gumbo (légume)'],
        commonIn: ['Afrique', 'Amérique du Nord', 'Caraïbes']
    },
    {
        name: 'Feuilles de Ndolé',
        description: 'Feuilles amères du Cameroun, riches en nutriments. Doivent être lavées plusieurs fois pour réduire l\'amertume.',
        alternativeNames: ['Vernonia', 'Ndole', 'Bitter leaf', 'Feuilles amères', 'Onugbu (Igbo)'],
        commonIn: ['Afrique Centrale']
    },
    {
        name: 'Pâte d\'arachide',
        description: 'Arachides moulues utilisées pour créer des sauces riches et crémeuses. Base du Mafé.',
        alternativeNames: ['Beurre de cacahuète nature', 'Peanut butter', 'Tigadèguèna', 'Pâte de cacahuète', 'Groundnut paste'],
        commonIn: ['Afrique de l\'Ouest']
    },
    {
        name: 'Huile de palme',
        description: 'Huile rouge extraite du fruit du palmier. Donne une couleur et saveur caractéristiques aux plats africains.',
        alternativeNames: ['Red palm oil', 'Huile rouge', 'Zomi (Bénin)', 'Dendê (Brésil)', 'Palm oil', 'Moambe oil'],
        commonIn: ['Afrique', 'Amérique du Sud']
    },
    {
        name: 'Feuilles de manioc',
        description: 'Jeunes feuilles du manioc, pilées et cuites longuement. Riches en protéines et vitamines.',
        alternativeNames: ['Pondu', 'Saka-saka', 'Cassava leaves', 'Matembele', 'Kpwem', 'Feuilles de cassave'],
        commonIn: ['Afrique Centrale']
    },
    {
        name: 'Banane plantain',
        description: 'Variété de banane à cuire, plus grosse et moins sucrée que la banane dessert. Se consomme frite, bouillie ou grillée.',
        alternativeNames: ['Plantain', 'Aloco (quand frit)', 'Dodo (Nigeria)', 'Plátano', 'Kelewele (Ghana, épicé)', 'Makemba'],
        commonIn: ['Afrique', 'Caraïbes', 'Amérique du Sud']
    },
    {
        name: 'Egusi',
        description: 'Graines de courge moulues, utilisées pour épaissir et enrichir les soupes nigérianes.',
        alternativeNames: ['Melon seeds', 'Graines de courge', 'Agushi', 'Egushi', 'Graines de melon'],
        commonIn: ['Afrique de l\'Ouest']
    },
    {
        name: 'Yét',
        description: 'Poisson fermenté séché utilisé au Sénégal pour parfumer le Thieboudienne.',
        alternativeNames: ['Poisson fermenté', 'Yet', 'Tambadiang', 'Keccax', 'Guedj (poisson)'],
        commonIn: ['Afrique de l\'Ouest']
    },
    {
        name: 'Guedj',
        description: 'Coquillages séchés utilisés dans la cuisine sénégalaise pour ajouter de la profondeur aux plats.',
        alternativeNames: ['Yet', 'Coquillages séchés', 'Yeet', 'Cymbium', 'Touffa'],
        commonIn: ['Afrique de l\'Ouest']
    },
    {
        name: 'Thiof',
        description: 'Poisson blanc prisé au Sénégal, considéré comme le meilleur pour le Thieboudienne.',
        alternativeNames: ['Mérou blanc', 'Grouper', 'Thiof fish', 'White grouper'],
        commonIn: ['Afrique de l\'Ouest']
    },
    {
        name: 'Moambe',
        description: 'Sauce à base de noix de palme, ingrédient central de la cuisine congolaise.',
        alternativeNames: ['Sauce graine', 'Palm butter', 'Nyembwe', 'Mwambe', 'Palm cream', 'Banga'],
        commonIn: ['Afrique Centrale']
    },
    {
        name: 'Yaji',
        description: 'Mélange d\'épices nigérian pour le Suya : arachides grillées, gingembre, piment, ail.',
        alternativeNames: ['Suya spice', 'Suya pepper', 'Yaji pepper', 'Kankan rogo'],
        commonIn: ['Afrique de l\'Ouest']
    },
    {
        name: 'Iru',
        description: 'Graines de néré fermentées, condiment nigérian au goût umami prononcé. Incontournable des sauces gombo.',
        alternativeNames: ['Locust beans', 'Dawadawa', 'Afiti (Bénin)', 'Nététou (Sénégal)', 'Soumbala (Mali)', 'Afiyo', 'Ogiri', 'Dawa dawa'],
        commonIn: ['Afrique de l\'Ouest']
    },
    {
        name: 'Fufu',
        description: 'Pâte épaisse faite d\'igname, manioc ou banane plantain pilée. Se mange avec les doigts, trempée dans la sauce.',
        alternativeNames: ['Foufou', 'Foutou', 'Ugali (Afrique de l\'Est)', 'Sadza', 'Pap', 'Eba (Nigeria)', 'Luku', 'Sakora'],
        commonIn: ['Afrique de l\'Ouest et Centrale']
    },
    {
        name: 'Saucisse Andouille',
        description: 'Saucisse fumée cajun/créole à base de porc, essentielle au Gumbo louisianais.',
        alternativeNames: ['Andouille sausage', 'Andouille fumée', 'Cajun sausage'],
        commonIn: ['Amérique du Nord']
    },
    {
        name: 'Roux',
        description: 'Mélange de farine et d\'huile cuit jusqu\'à couleur chocolat, base du Gumbo. Donne épaisseur et saveur.',
        alternativeNames: ['Brown roux', 'Roux brun', 'Dark roux', 'Cajun roux'],
        commonIn: ['Amérique du Nord']
    },
    {
        name: 'Haricots noirs',
        description: 'Légumineuses noires utilisées dans la Feijoada brésilienne. Riches en protéines.',
        alternativeNames: ['Black beans', 'Feijão preto', 'Frijoles negros', 'Haricots nègres'],
        commonIn: ['Amérique du Sud']
    },
    {
        name: 'Farofa',
        description: 'Farine de manioc grillée, accompagnement traditionnel brésilien. Texture croquante.',
        alternativeNames: ['Manioc toasté', 'Farinha torrada', 'Cassava flour toasted', 'Gari grillé'],
        commonIn: ['Amérique du Sud']
    },
    {
        name: 'Morue salée',
        description: 'Cabillaud conservé dans le sel, doit être dessalé avant utilisation. Base des Accras antillais.',
        alternativeNames: ['Bacalhau', 'Salt cod', 'Bacalao', 'Stockfish', 'Morue séchée', 'Cod fish'],
        commonIn: ['Caraïbes', 'Amérique du Sud']
    },
    {
        name: 'Piment antillais',
        description: 'Piment très fort des Caraïbes, aussi appelé piment végétarien ou Scotch Bonnet.',
        alternativeNames: ['Scotch Bonnet', 'Habanero', 'Piment végétarien', 'Bonnet pepper', 'Caribbean red pepper', 'Piment bouc'],
        commonIn: ['Caraïbes']
    },
    {
        name: 'Manioc',
        description: 'Tubercule tropical, aliment de base en Afrique et Amérique du Sud. Se consomme bouilli, frit ou transformé.',
        alternativeNames: ['Cassava', 'Yuca', 'Mandioca', 'Tapioca (racine)', 'Aipim', 'Macaxeira'],
        commonIn: ['Afrique', 'Amérique du Sud', 'Caraïbes']
    },
    {
        name: 'Igname',
        description: 'Tubercule à chair blanche ou jaune, plus nutritif que la pomme de terre. Base du Fufu.',
        alternativeNames: ['Yam', 'Igname blanche', 'Ñame', 'Ji (Igbo)', 'Dioscorea'],
        commonIn: ['Afrique', 'Caraïbes']
    },
    {
        name: 'Feuilles de bananier',
        description: 'Grandes feuilles utilisées pour emballer et cuire les aliments (papillote). Donnent un arôme subtil.',
        alternativeNames: ['Banana leaves', 'Feuilles de banane', 'Hojas de plátano'],
        commonIn: ['Afrique', 'Amérique du Sud', 'Caraïbes']
    },
    {
        name: 'Piment de Cayenne',
        description: 'Piment rouge séché et moulu, apporte chaleur et couleur aux plats. Essentiel dans la cuisine créole.',
        alternativeNames: ['Cayenne pepper', 'Poivre de Cayenne', 'Red pepper', 'Piment rouge moulu'],
        commonIn: ['Amérique du Nord', 'Caraïbes', 'Afrique']
    },
    {
        name: 'Céleri',
        description: 'Légume aromatique faisant partie de la "Sainte Trinité" créole avec oignon et poivron.',
        alternativeNames: ['Celery', 'Céleri branche', 'Apio'],
        commonIn: ['Amérique du Nord', 'Caraïbes']
    },
    {
        name: 'Tomate concentrée',
        description: 'Pâte de tomate épaisse utilisée pour enrichir les sauces et ragoûts africains.',
        alternativeNames: ['Pâte de tomate', 'Tomato paste', 'Concentré de tomate', 'Tomato purée'],
        commonIn: ['Afrique', 'Global']
    },
    {
        name: 'Bouillon cube',
        description: 'Cube de bouillon concentré pour assaisonner. Maggi, Jumbo et Knorr sont populaires en Afrique.',
        alternativeNames: ['Maggi', 'Jumbo', 'Knorr', 'Cube Maggi', 'Bouillon Jumbo', 'Stock cube'],
        commonIn: ['Afrique', 'Global']
    },
    {
        name: 'Piment frais',
        description: 'Piments frais utilisés dans toute la cuisine afro pour ajouter du piquant.',
        alternativeNames: ['Atarodo (Yoruba)', 'Ata rodo', 'Pili pili', 'Piment oiseau', 'Bird\'s eye chili', 'Piment fort'],
        commonIn: ['Afrique', 'Caraïbes']
    },
    {
        name: 'Crevettes séchées',
        description: 'Petites crevettes séchées utilisées pour parfumer soupes et sauces. Goût umami intense.',
        alternativeNames: ['Dried shrimp', 'Crevettes fumées', 'Oporo (Yoruba)', 'Kpanla', 'Camarão seco'],
        commonIn: ['Afrique', 'Amérique du Sud', 'Caraïbes']
    },
    {
        name: 'Poisson fumé',
        description: 'Poisson séché et fumé, utilisé pour donner de la profondeur aux plats. Très aromatique.',
        alternativeNames: ['Smoked fish', 'Poisson braisé', 'Koobi (Ghana)', 'Kako', 'Adjuevan'],
        commonIn: ['Afrique']
    }
];
