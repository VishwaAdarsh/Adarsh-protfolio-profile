import { useRef, useEffect } from 'react';
import { cn } from "@/lib/utils";

export default function GlowCard({ children, className, ...props }) {
    const cardRef = useRef(null);

    useEffect(() => {
        const card = cardRef.current;
        if (!card) return;
        if (typeof window === 'undefined') return;
        if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

        const handleMouseMove = (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            card.style.setProperty("--mouse-x", `${x}px`);
            card.style.setProperty("--mouse-y", `${y}px`);
        };

        card.addEventListener("mousemove", handleMouseMove, { passive: true });
        return () => {
            card.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div
            ref={cardRef}
            className={cn(
                "relative rounded-xl border border-slate-200/80 dark:border-white/10 bg-white/80 dark:bg-black/40 shadow-sm dark:shadow-none overflow-hidden group transition-all duration-300",
                className
            )}
            {...props}
        >
            {/* Light Gradient Overlay */}
            <div
                className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition duration-300"
                style={{
                    background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(139,92,246,0.1), transparent 40%)`,
                }}
            />
            {/* Border Glow */}
            <div
                className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition duration-500"
                style={{
                    background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(139, 92, 246, 0.35), transparent 40%)`,
                    zIndex: -1
                }}
            />

            <div className="relative h-full">
                {children}
            </div>
        </div>
    );
}
