import { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw } from 'lucide-react';
import { Button } from './Button';
import { cn } from '@/lib/utils';

interface TimerProps {
    durationMinutes: number;
}

export function Timer({ durationMinutes }: TimerProps) {
    const [timeLeft, setTimeLeft] = useState(durationMinutes * 60);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let interval: ReturnType<typeof setInterval>;
        if (isRunning && timeLeft > 0) {
            interval = setInterval(() => {
                setTimeLeft((prev) => prev - 1);
            }, 1000);
        } else if (timeLeft === 0) {
            setIsRunning(false);
            // Could add sound or notification here
        }
        return () => clearInterval(interval);
    }, [isRunning, timeLeft]);

    const toggleTimer = () => setIsRunning(!isRunning);
    const resetTimer = () => {
        setIsRunning(false);
        setTimeLeft(durationMinutes * 60);
    };

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    const progress = 100 - (timeLeft / (durationMinutes * 60)) * 100;

    return (
        <div className="bg-orange-50 rounded-xl p-4 border border-orange-100 mb-4">
            <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-orange-800">Minuteur</span>
                <span className="text-2xl font-mono font-bold text-orange-900">
                    {formatTime(timeLeft)}
                </span>
            </div>

            <div className="h-2 bg-orange-200 rounded-full mb-4 overflow-hidden">
                <div
                    className="h-full bg-primary transition-all duration-1000 ease-linear"
                    style={{ width: `${Math.max(0.5, 100 - progress)}%` }} // Reverse logic for countdown bar
                />
            </div>

            <div className="flex gap-2">
                <Button
                    size="sm"
                    onClick={toggleTimer}
                    className={cn("flex-1", isRunning ? "bg-orange-600 hover:bg-orange-700" : "bg-primary")}
                >
                    {isRunning ? <><Pause className="w-4 h-4 mr-2" /> Pause</> : <><Play className="w-4 h-4 mr-2" /> Démarrer</>}
                </Button>
                <Button size="sm" variant="outline" onClick={resetTimer} className="bg-white">
                    <RotateCcw className="w-4 h-4" />
                </Button>
            </div>
        </div>
    );
}
