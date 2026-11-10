import { Home, Search, Heart, User, BookOpen } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { useTranslation } from 'react-i18next';

export function FixedBottomNavigation() {
    const { t } = useTranslation();

    const navItems = [
        { icon: Home, label: t('nav.home'), path: '/' },
        { icon: Search, label: t('nav.search'), path: '/search' },
        { icon: BookOpen, label: t('nav.recipes'), path: '/ingredients' }, // Note: We use recipes label for ingredients to show i18n
        { icon: Heart, label: t('nav.favorites'), path: '/favorites' },
        { icon: User, label: t('nav.profile'), path: '/profile' },
    ];


    return (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-2 px-6 pb-safe z-50">
            <nav className="flex justify-between items-center max-w-md mx-auto">
                {navItems.map((item) => (
                    <NavLink
                        key={item.label}
                        to={item.path}
                        className={({ isActive }) => cn(
                            "flex flex-col items-center gap-1 p-2 rounded-xl transition-colors",
                            isActive
                                ? "text-primary"
                                : "text-gray-400 hover:text-gray-600"
                        )}
                    >
                        <item.icon className="w-6 h-6" />
                        <span className="text-[10px] font-medium">{item.label}</span>
                    </NavLink>
                ))}
            </nav>
        </div>
    );
}
