/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                heading: ['"Space Grotesk"', 'sans-serif'],
                mono: ['"JetBrains Mono"', 'monospace'],
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)'
            },
            colors: {
                universe: {
                    bg: '#070B17',
                    secondary: '#0D1428',
                    surface: '#121B31',
                    surfaceLight: 'rgba(18, 27, 49, 0.75)',
                    surfaceHover: '#182442',
                    border: 'rgba(139, 92, 246, 0.2)',
                },
                cyber: {
                    blue: '#2563FF',
                    brightBlue: '#4169E1',
                    cyan: '#00D9FF',
                    violet: '#8B5CF6',
                    purple: '#B794F6',
                },
                paletteText: {
                    primary: '#FFFFFF',
                    secondary: '#A1A9BA',
                    muted: '#64748B',
                },
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))'
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))'
                },
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))'
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))'
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))'
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))'
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))'
                },
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
            },
            animation: {
                "blob": "blob 10s infinite",
                "shimmer": "shimmer 2s linear infinite",
                "float-slow": "floatSlow 8s ease-in-out infinite",
                "float-reverse": "floatReverse 10s ease-in-out infinite",
                "spin-slow": "spinUltraSlow 45s linear infinite",
            },
            keyframes: {
                blob: {
                    "0%": {
                        transform: "translate(0px, 0px) scale(1)",
                    },
                    "33%": {
                        transform: "translate(25px, -35px) scale(1.05)",
                    },
                    "66%": {
                        transform: "translate(-15px, 15px) scale(0.95)",
                    },
                    "100%": {
                        transform: "translate(0px, 0px) scale(1)",
                    },
                },
                shimmer: {
                    from: {
                        backgroundPosition: "0 0"
                    },
                    to: {
                        backgroundPosition: "-200% 0"
                    }
                },
                floatSlow: {
                    "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
                    "50%": { transform: "translateY(-8px) rotate(1deg)" }
                },
                floatReverse: {
                    "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
                    "50%": { transform: "translateY(8px) rotate(-1deg)" }
                },
                spinUltraSlow: {
                    from: { transform: "rotate(0deg)" },
                    to: { transform: "rotate(360deg)" }
                }
            }
        }
    },
    plugins: [],
}
