import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppLayout } from './layouts/AppLayout';
import { HomePage } from './pages/HomePage';
import { RecipeDetail } from './pages/RecipeDetail';
import { SearchPage } from './pages/SearchPage';
import { IngredientsGlossary } from './pages/IngredientsGlossary';
import { RecipesListPage } from './pages/RecipesListPage';
import { ProfilePage } from './pages/ProfilePage';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { HealthySeasoningPage } from './pages/HealthySeasoningPage';
import { FavoritesPage } from './pages/FavoritesPage';
import { AuthProvider } from './context/AuthContext';
import { ScrollToTop } from './components/ScrollToTop';

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/recipes" element={<RecipesListPage />} />
            <Route path="/recipe/:id" element={<RecipeDetail />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/ingredients" element={<IngredientsGlossary />} />
            <Route path="/healthy-seasoning" element={<HealthySeasoningPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
