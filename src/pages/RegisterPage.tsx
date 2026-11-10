import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';
import { User, Mail, Sparkles, ArrowRight, Facebook } from 'lucide-react';
import { cn } from '../lib/utils';
import { PRESET_AVATARS } from '../data/avatars';

export function RegisterPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [selectedDiets, setSelectedDiets] = useState<string[]>([]);
    const [selectedAvatar, setSelectedAvatar] = useState(PRESET_AVATARS[0].url);
    const { register } = useAuth();
    const navigate = useNavigate();

    const diets = ['Végétarien', 'Halal', 'Sans Piment', 'Pimenté', 'Rapide'];

    const toggleDiet = (diet: string) => {
        setSelectedDiets(prev =>
            prev.includes(diet) ? prev.filter(d => d !== diet) : [...prev, diet]
        );
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        register({
            name,
            email,
            diets: selectedDiets,
            avatar: selectedAvatar
        });
        navigate('/profile');
    };

    return (
        <div className="min-h-screen bg-gray-50/50 flex flex-col p-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-sm mx-auto flex-1 flex flex-col justify-center"
            >
                <div className="text-center mb-10">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <Sparkles className="w-8 h-8 text-primary" />
                    </div>
                    <h1 className="text-3xl font-serif font-black text-gray-900 mb-2">Devenir Chef</h1>
                    <p className="text-gray-500 font-medium text-sm">Créez votre profil pour personnaliser vos saveurs.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-2">Nom Complet</label>
                        <div className="relative group">
                            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-primary transition-colors" />
                            <input
                                type="text"
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Votre nom"
                                className="w-full bg-white border border-gray-100 focus:border-primary/20 focus:ring-4 focus:ring-primary/5 px-12 py-4 rounded-2xl outline-none transition-all font-medium text-gray-900"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-2">Email</label>
                        <div className="relative group">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-primary transition-colors" />
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="votre@email.com"
                                className="w-full bg-white border border-gray-100 focus:border-primary/20 focus:ring-4 focus:ring-primary/5 px-12 py-4 rounded-2xl outline-none transition-all font-medium text-gray-900"
                            />
                        </div>
                    </div>

                    <div className="space-y-4">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-2">Choisir votre Avatar Chef</label>
                        <div className="grid grid-cols-4 gap-3 bg-white p-4 rounded-3xl border border-gray-100 shadow-sm">
                            {PRESET_AVATARS.map((avatar) => (
                                <button
                                    key={avatar.id}
                                    type="button"
                                    onClick={() => setSelectedAvatar(avatar.url)}
                                    className={cn(
                                        "relative aspect-square rounded-2xl overflow-hidden transition-all duration-300",
                                        selectedAvatar === avatar.url
                                            ? "ring-4 ring-primary ring-offset-2 scale-90"
                                            : "hover:scale-105 opacity-60 hover:opacity-100"
                                    )}
                                >
                                    <img src={avatar.url} alt={avatar.label} className="w-full h-full object-cover" />
                                    {selectedAvatar === avatar.url && (
                                        <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                                            <div className="bg-white rounded-full p-1 shadow-lg">
                                                <Sparkles className="w-3 h-3 text-primary fill-primary" />
                                            </div>
                                        </div>
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-3">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-2">Préférences Culinaires</label>
                        <div className="flex flex-wrap gap-2">
                            {diets.map((diet) => (
                                <button
                                    key={diet}
                                    type="button"
                                    onClick={() => toggleDiet(diet)}
                                    className={cn(
                                        "px-4 py-2 rounded-xl text-xs font-bold transition-all border",
                                        selectedDiets.includes(diet)
                                            ? "bg-primary border-primary text-white"
                                            : "bg-white border-gray-100 text-gray-400 hover:border-primary/20"
                                    )}
                                >
                                    {diet}
                                </button>
                            ))}
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-gray-900 text-white py-5 rounded-2xl font-bold shadow-xl shadow-gray-900/10 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 mt-4"
                    >
                        Créer mon profil
                        <ArrowRight className="w-5 h-5" />
                    </button>
                </form>

                <div className="mt-8 flex flex-col gap-3">
                    <div className="flex items-center gap-4 my-2">
                        <div className="h-[1px] flex-1 bg-gray-100" />
                        <span className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">ou s'inscrire avec</span>
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

                <p className="mt-8 text-center text-sm">
                    <span className="text-gray-400">Déjà un compte ?</span>{' '}
                    <Link to="/login" className="text-primary font-bold hover:underline">Se connecter</Link>
                </p>
            </motion.div>
        </div>
    );
}
