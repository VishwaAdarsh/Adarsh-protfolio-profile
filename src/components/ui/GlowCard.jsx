import React, { useRef, useEffect } from 'react';
import { cn } from "@/lib/utils";

export default function GlowCard({ children, className, ...props }) {
    const cardRef = useRef(null);

    useEffect(() => {
        const card = cardRef.current;
        if (!card) return;

        const handleMouseMove = (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            card.style.setProperty("--mouse-x", `${x}px`);
            card.style.setProperty("--mouse-y", `${y}px`);
        };

        card.addEventListener("mousemove", handleMouseMove);
        return () => {
            card.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div
            ref={cardRef}
            className={cn(
                "relative rounded-xl border border-white/10 bg-black/40 overflow-hidden group transition-all duration-300",
                className
            )}
            {...props}
        >
            {/* Light Gradient Overlay */}
            <div
                className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition duration-300"
                style={{
                    background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.06), transparent 40%)`,
                }}
            />
            {/* Border Glow */}
            <div
                className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition duration-500"
                style={{
                    background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(139, 92, 246, 0.4), transparent 40%)`,
                    zIndex: -1
                }}
            />

            <div className="relative h-full">
                {children}
            </div>
        </div>
    );
}
