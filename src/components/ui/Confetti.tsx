import { useEffect, useRef } from 'react';

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    color: string;
    rotation: number;
    rotationSpeed: number;
    wobble: number;
    wobbleSpeed: number;
    opacity: number;
    shape: 'rect' | 'circle';
}

const COLORS = [
    '#EA580C', // Orange
    '#F59E0B', // Amber
    '#EAB308', // Yellow / Gold
    '#16A34A', // Green
    '#DC2626', // Red
    '#FB923C', // Warm Orange
    '#FBBF24', // Warm Gold
    '#34D399', // Emerald
    '#F43F5E', // Rose
];

export function Confetti() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let width = (canvas.width = window.innerWidth);
        let height = (canvas.height = window.innerHeight);

        const handleResize = () => {
            if (!canvas) return;
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', handleResize);

        const particles: Particle[] = [];
        const particleCount = 120;

        // Launch particles from bottom-left and bottom-right
        for (let i = 0; i < particleCount; i++) {
            const fromLeft = i % 2 === 0;
            const originX = fromLeft ? width * 0.15 : width * 0.85;
            const originY = height * 0.85;

            const angle = fromLeft
                ? -Math.PI / 4 + (Math.random() - 0.5) * 0.6 // Shooting up and right
                : (-3 * Math.PI) / 4 + (Math.random() - 0.5) * 0.6; // Shooting up and left

            const speed = 12 + Math.random() * 16;

            particles.push({
                x: originX,
                y: originY,
                vx: Math.cos(angle) * speed + (Math.random() - 0.5) * 4,
                vy: Math.sin(angle) * speed - Math.random() * 4,
                size: 6 + Math.random() * 7,
                color: COLORS[Math.floor(Math.random() * COLORS.length)],
                rotation: Math.random() * Math.PI * 2,
                rotationSpeed: (Math.random() - 0.5) * 0.2,
                wobble: Math.random() * Math.PI * 2,
                wobbleSpeed: 0.05 + Math.random() * 0.08,
                opacity: 1,
                shape: Math.random() > 0.3 ? 'rect' : 'circle',
            });
        }

        const gravity = 0.35;
        const drag = 0.985;
        let elapsed = 0;

        const render = () => {
            ctx.clearRect(0, 0, width, height);
            elapsed++;

            let aliveCount = 0;

            for (const p of particles) {
                p.vx *= drag;
                p.vy *= drag;
                p.vy += gravity;
                p.x += p.vx;
                p.y += p.vy;

                p.rotation += p.rotationSpeed;
                p.wobble += p.wobbleSpeed;

                if (elapsed > 90) {
                    p.opacity = Math.max(0, p.opacity - 0.015);
                }

                if (p.opacity > 0 && p.y < height + 50) {
                    aliveCount++;

                    ctx.save();
                    ctx.translate(p.x, p.y);
                    ctx.rotate(p.rotation);
                    ctx.globalAlpha = p.opacity;
                    ctx.fillStyle = p.color;

                    const scaleX = Math.cos(p.wobble);

                    if (p.shape === 'rect') {
                        ctx.fillRect(
                            (-p.size / 2) * scaleX,
                            -p.size / 2,
                            p.size * scaleX,
                            p.size * 1.4
                        );
                    } else {
                        ctx.beginPath();
                        ctx.ellipse(
                            0,
                            0,
                            (p.size / 2) * Math.abs(scaleX),
                            p.size / 2,
                            0,
                            0,
                            Math.PI * 2
                        );
                        ctx.fill();
                    }

                    ctx.restore();
                }
            }

            if (aliveCount > 0) {
                animationFrameId = requestAnimationFrame(render);
            }
        };

        animationFrameId = requestAnimationFrame(render);

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-[120]"
            style={{ width: '100vw', height: '100vh' }}
        />
    );
}
