import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';
import { Mail, Lock, ArrowRight, Sparkles, ChefHat, Facebook } from 'lucide-react';

export function LoginPage() {
    const [email, setEmail] = useState('');
    const { login, loginDemo } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        login(email);
        navigate('/profile');
    };

    const handleDemoClick = () => {
        loginDemo();
        navigate('/profile');
    };

    return (
        <div className="min-h-screen bg-white flex flex-col items-center justify-center p-8 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
                <div className="absolute top-1/2 -right-20 w-80 h-80 bg-orange-400/5 rounded-full blur-3xl" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-sm relative z-10"
            >
                <div className="text-center mb-10">
                    <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-6">
                        <Sparkles className="w-10 h-10 text-primary" />
                    </div>
                    <h1 className="text-4xl font-serif font-black text-gray-900 mb-2">Bon retour !</h1>
                    <p className="text-gray-500 font-medium mb-4">Connectez-vous pour retrouver vos recettes et collections.</p>
                    <button
                        type="button"
                        onClick={handleDemoClick}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-100 to-amber-100 border border-orange-200 text-primary text-xs font-bold rounded-xl hover:scale-105 active:scale-95 transition-all shadow-sm"
                    >
                        <ChefHat className="w-4 h-4" />
                        Tester en 1-clic (Compte Démo Chef Awa)
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-2">Email</label>
                        <div className="relative group">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-primary transition-colors" />
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="votre@email.com"
                                className="w-full bg-gray-50 border-2 border-transparent focus:border-primary/20 focus:bg-white px-12 py-4 rounded-2xl outline-none transition-all font-medium text-gray-900 placeholder:text-gray-300"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-2">Mot de passe</label>
                        <div className="relative group">
                            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-primary transition-colors" />
                            <input
                                type="password"
                                required
                                placeholder="••••••••"
                                className="w-full bg-gray-50 border-2 border-transparent focus:border-primary/20 focus:bg-white px-12 py-4 rounded-2xl outline-none transition-all font-medium text-gray-900 placeholder:text-gray-300"
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-gray-900 text-white py-5 rounded-2xl font-bold shadow-xl shadow-gray-900/10 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3"
                    >
                        Se connecter
                        <ArrowRight className="w-5 h-5" />
                    </button>
                </form>

                <div className="mt-8 flex flex-col gap-3">
                    <div className="flex items-center gap-4 my-2">
                        <div className="h-[1px] flex-1 bg-gray-100" />
                        <span className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">ou continuer avec</span>
                        <div className="h-[1px] flex-1 bg-gray-100" />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <button className="flex items-center justify-center gap-2 py-4 bg-white border border-gray-100 rounded-2xl hover:bg-gray-50 transition-colors shadow-sm active:scale-95">
                            <svg className="w-5 h-5" viewBox="0 0 24 24">
                                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
                                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                            </svg>
                            <span className="text-sm font-bold text-gray-700 font-sans">Google</span>
                        </button>
                        <button className="flex items-center justify-center gap-2 py-4 bg-[#1877F2] rounded-2xl hover:bg-[#166fe5] transition-colors shadow-sm active:scale-95">
                            <Facebook className="w-5 h-5 text-white fill-white" />
                            <span className="text-sm font-bold text-white font-sans">Facebook</span>
                        </button>
                    </div>
                </div>

                <div className="mt-10 text-center space-y-4">
                    <p className="text-sm border-t border-gray-100 pt-8">
                        <span className="text-gray-400">Pas encore de compte ?</span>{' '}
                        <Link to="/register" className="text-primary font-bold hover:underline">S'inscrire</Link>
                    </p>

                    <div className="flex items-center justify-center gap-2 text-[10px] text-gray-300 font-bold uppercase tracking-widest">
                        <ChefHat className="w-3 h-3" />
                        Saveurs d'Afrique Premium
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
