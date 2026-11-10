import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  fr: {
    translation: {
      "nav": {
        "home": "Accueil",
        "recipes": "Ingrédients",
        "search": "Recherche",
        "favorites": "Favoris",
        "profile": "Profil"
      },
      "home": {
        "title": "Saveurs d'Afrique",
        "mission_title": "Le voyage intemporel des saveurs",
        "mission_text": "Saveurs d'Afrique a pour vocation de rassembler l'héritage gastronomique africain à travers l'histoire et les continents. Découvrez comment nos traditions culinaires ont traversé les océans pour s'enraciner, évoluer et façonner les cuisines du monde entier, unissant les cultures autour d'un patrimoine universel.",
        "health_badge": "Initiative Santé",
        "health_title": "Le secret des assaisonnements 100% naturels",
        "discover": "Découvrir",
        "collections": {
          "classics": "Les Incontournables",
          "classics_sub": "Les piliers de la gastronomie africaine",
          "street": "Street Food & Snacks",
          "street_sub": "Le meilleur de la cuisine de rue",
          "diaspora": "Voyage en Diaspora",
          "diaspora_sub": "L'influence africaine à travers le monde",
          "grillades": "🔥 Grillades & Barbecues",
          "grillades_sub": "Braai, Jerk, Churrasco, Suya : les maîtres du feu",
          "view_all": "Voir tout"
        },
        "footer": {
          "title": "Rejoignez l'aventure",
          "subtitle": "Explorez {{count}} héritages culinaires uniques.",
          "regions": "Régions",
          "recipes": "Recettes"
        }
      },
      "recipe": {
        "time": "Temps",
        "servings": "Portions",
        "level": "Niveau",
        "start_cooking": "Lancer la cuisine",
        "ingredients": "Ingrédients",
        "preparation": "Préparation",
        "chef_secrets": "Secrets de Chef",
        "community": "Communauté",
        "share_exp": "Partagez votre expérience",
        "login_to_join": "Connectez-vous pour rejoindre la discussion",
        "publish": "Publier",
        "step": "Étape",
        "next": "Suivant",
        "prev": "Précédent",
        "done": "Terminé",
        "not_found": "Recette non trouvée"
      },
      "favorites": {
        "title": "Mes Favoris",
        "saved": "sauvegardée(s)",
        "not_logged": "Connectez-vous pour sauvegarder et retrouver facilement vos recettes préférées.",
        "login_btn": "Se connecter",
        "empty_title": "Aucun favori pour le moment",
        "empty_desc": "Parcourez nos recettes et cliquez sur le cœur pour les ajouter à votre collection.",
        "explore_btn": "Explorer les recettes"
      },
      "search": {
        "title": "Recherche Avancée",
        "subtitle": "Explorez notre patrimoine culinaire selon vos envies",
        "placeholder": "Recette, ingrédient (manioc, arachide...), pays...",
        "clear_search": "Effacer",
        "filters": "Filtres",
        "filter_all": "Toutes",
        "all_regions": "Toutes les régions",
        "all_difficulties": "Tous les niveaux",
        "all_compositions": "Toutes les compositions",
        "all_durations": "Toutes les durées",
        "regions_title": "Origine géographique",
        "difficulty_title": "Niveau de difficulté",
        "composition_title": "Composition du plat",
        "duration_title": "Temps de préparation",
        "active_filters": "Filtres actifs :",
        "reset_filters": "Réinitialiser les filtres",
        "no_results": "Aucune recette ne correspond à votre recherche.",
        "try_different": "Essayez d'ajuster vos critères ou de vérifier l'orthographe.",
        "results_count_one": "{{count}} recette trouvée",
        "results_count_other": "{{count}} recettes trouvées",
        "quick_time": "Rapide (< 30 min)",
        "medium_time": "Modéré (30–60 min)",
        "slow_time": "Mijoté (> 1h)",
        "comp_meat": "Viandes rouges",
        "comp_poultry": "Volailles",
        "comp_seafood": "Poissons & Fruits de mer",
        "comp_vegetarian": "Végétarien",
        "comp_bbq": "Grillades & Barbecue",
        "comp_dessert": "Douceurs & Desserts"
      }
    }
  },
  en: {
    translation: {
      "nav": {
        "home": "Home",
        "recipes": "Ingredients",
        "search": "Search",
        "favorites": "Favorites",
        "profile": "Profile"
      },
      "home": {
        "title": "African Flavors",
        "mission_title": "The timeless journey of flavors",
        "mission_text": "Saveurs d'Afrique aims to gather the African gastronomic heritage across history and continents. Discover how our culinary traditions crossed oceans to take root, evolve, and shape world cuisines, uniting cultures around a universal heritage.",
        "health_badge": "Health Initiative",
        "health_title": "The secret of 100% natural seasonings",
        "discover": "Discover",
        "collections": {
          "classics": "The Classics",
          "classics_sub": "The pillars of African gastronomy",
          "street": "Street Food & Snacks",
          "street_sub": "The best of street cuisine",
          "diaspora": "Diaspora Journey",
          "diaspora_sub": "African influence around the world",
          "grillades": "🔥 Barbecue & Grills",
          "grillades_sub": "Braai, Jerk, Churrasco, Suya: masters of fire",
          "view_all": "View all"
        },
        "footer": {
          "title": "Join the adventure",
          "subtitle": "Explore {{count}} unique culinary heritages.",
          "regions": "Regions",
          "recipes": "Recipes"
        }
      },
      "recipe": {
        "time": "Time",
        "servings": "Servings",
        "level": "Level",
        "start_cooking": "Start Cooking",
        "ingredients": "Ingredients",
        "preparation": "Preparation",
        "chef_secrets": "Chef's Secrets",
        "community": "Community",
        "share_exp": "Share your experience",
        "login_to_join": "Log in to join the discussion",
        "publish": "Post",
        "step": "Step",
        "next": "Next",
        "prev": "Previous",
        "done": "Done",
        "not_found": "Recipe not found"
      },
      "favorites": {
        "title": "My Favorites",
        "saved": "saved",
        "not_logged": "Log in to save and easily find your favorite recipes.",
        "login_btn": "Log in",
        "empty_title": "No favorites yet",
        "empty_desc": "Browse our recipes and click the heart to add them to your collection.",
        "explore_btn": "Explore recipes"
      },
      "search": {
        "title": "Advanced Search",
        "subtitle": "Explore our culinary heritage to match your appetite",
        "placeholder": "Recipe, ingredient (cassava, peanut...), country...",
        "clear_search": "Clear",
        "filters": "Filters",
        "filter_all": "All",
        "all_regions": "All regions",
        "all_difficulties": "All levels",
        "all_compositions": "All compositions",
        "all_durations": "All durations",
        "regions_title": "Geographic origin",
        "difficulty_title": "Difficulty level",
        "composition_title": "Dish composition",
        "duration_title": "Preparation time",
        "active_filters": "Active filters:",
        "reset_filters": "Reset filters",
        "no_results": "No recipe matches your search.",
        "try_different": "Try adjusting your filters or checking spelling.",
        "results_count_one": "{{count}} recipe found",
        "results_count_other": "{{count}} recipes found",
        "quick_time": "Quick (< 30 min)",
        "medium_time": "Moderate (30–60 min)",
        "slow_time": "Slow-cooked (> 1h)",
        "comp_meat": "Red meat",
        "comp_poultry": "Poultry",
        "comp_seafood": "Fish & Seafood",
        "comp_vegetarian": "Vegetarian",
        "comp_bbq": "Grills & Barbecue",
        "comp_dessert": "Sweets & Desserts"
      }
    }
  },
  pt: {
    translation: {
      "nav": {
        "home": "Início",
        "recipes": "Ingredientes",
        "search": "Busca",
        "favorites": "Favoritos",
        "profile": "Perfil"
      },
      "home": {
        "title": "Sabores da África",
        "mission_title": "A viagem intemporal dos sabores",
        "mission_text": "Saveurs d'Afrique tem como vocação reunir a herança gastronômica africana através da história e dos continentes. Descubra como nossas tradições culinárias cruzaram oceanos para criar raízes, evoluir e moldar as cozinhas do mundo inteiro, unindo culturas em torno de um patrimônio universal.",
        "health_badge": "Iniciativa Saúde",
        "health_title": "O segredo dos temperos 100% naturais",
        "discover": "Descobrir",
        "collections": {
          "classics": "Os Clássicos",
          "classics_sub": "Os pilares da gastronomia africana",
          "street": "Comida de Rua & Petiscos",
          "street_sub": "O melhor da culinária de rua",
          "diaspora": "Viagem na Diáspora",
          "diaspora_sub": "A influência africana pelo mundo",
          "grillades": "🔥 Churrasco & Grelhados",
          "grillades_sub": "Braai, Jerk, Churrasco, Suya: os mestres do fogo",
          "view_all": "Ver tudo"
        },
        "footer": {
          "title": "Junte-se à aventura",
          "subtitle": "Explore {{count}} heranças culinárias únicas.",
          "regions": "Regiões",
          "recipes": "Receitas"
        }
      },
      "recipe": {
        "time": "Tempo",
        "servings": "Porções",
        "level": "Nível",
        "start_cooking": "Iniciar o preparo",
        "ingredients": "Ingredientes",
        "preparation": "Preparo",
        "chef_secrets": "Segredos do Chef",
        "community": "Comunidade",
        "share_exp": "Compartilhe sua experiência",
        "login_to_join": "Conecte-se para participar da conversa",
        "publish": "Publicar",
        "step": "Etapa",
        "next": "Próximo",
        "prev": "Anterior",
        "done": "Concluído",
        "not_found": "Receita não encontrada"
      },
      "favorites": {
        "title": "Meus Favoritos",
        "saved": "salva(s)",
        "not_logged": "Conecte-se para salvar e encontrar facilmente suas receitas favoritas.",
        "login_btn": "Entrar",
        "empty_title": "Nenhum favorito por enquanto",
        "empty_desc": "Navegue por nossas receitas e toque no coração para adicioná-las à sua coleção.",
        "explore_btn": "Explorar receitas"
      },
      "search": {
        "title": "Busca Avançada",
        "subtitle": "Explore nosso patrimônio culinário de acordo com seu paladar",
        "placeholder": "Receita, ingrediente (mandioca, amendoim...), país...",
        "clear_search": "Limpar",
        "filters": "Filtros",
        "filter_all": "Todas",
        "all_regions": "Todas as regiões",
        "all_difficulties": "Todos os níveis",
        "all_compositions": "Todas as composições",
        "all_durations": "Todos os tempos",
        "regions_title": "Origem geográfica",
        "difficulty_title": "Nível de dificuldade",
        "composition_title": "Composição do prato",
        "duration_title": "Tempo de preparo",
        "active_filters": "Filtros ativos:",
        "reset_filters": "Limpar filtros",
        "no_results": "Nenhuma receita corresponde à sua busca.",
        "try_different": "Tente ajustar seus critérios ou verificar a ortografia.",
        "results_count_one": "{{count}} receita encontrada",
        "results_count_other": "{{count}} receitas encontradas",
        "quick_time": "Rápido (< 30 min)",
        "medium_time": "Moderado (30–60 min)",
        "slow_time": "Cozimento lento (> 1h)",
        "comp_meat": "Carnes vermelhas",
        "comp_poultry": "Aves",
        "comp_seafood": "Peixes & Frutos do mar",
        "comp_vegetarian": "Vegetariano",
        "comp_bbq": "Churrasco & Grelhados",
        "comp_dessert": "Doces & Sobremesas"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "fr", // Default language
    fallbackLng: "fr",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
