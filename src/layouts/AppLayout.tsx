import { Outlet, useLocation } from 'react-router-dom';
import { FixedBottomNavigation } from './FixedBottomNavigation';
import { motion, AnimatePresence } from 'framer-motion';

export function AppLayout() {
    const location = useLocation();

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <main className="flex-1">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={location.pathname}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                    >
                        <Outlet />
                    </motion.div>
                </AnimatePresence>
            </main>
            {!['/login', '/register'].includes(location.pathname) && <FixedBottomNavigation />}
        </div>
    );
}
