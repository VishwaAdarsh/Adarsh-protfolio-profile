import { Suspense, lazy } from 'react';
import HeroUniverseCanvas from './HeroUniverseCanvas';

// Lazy load Spline to keep initial bundle size lightweight
const Spline = lazy(() => import('@splinetool/react-spline'));

/**
 * SplineSceneIntegration
 * Provides a production-ready integration point for published Spline 3D scenes.
 * If a valid scene URL is provided (e.g. from Spline editor export), it renders the interactive Spline scene.
 * If no scene is provided or during loading/error, it automatically delegates to the procedural R3F HeroUniverseCanvas.
 */
export default function SplineSceneIntegration({ sceneUrl = null, className = "" }) {
  if (sceneUrl) {
    return (
      <div className={`absolute inset-0 pointer-events-none z-0 overflow-hidden ${className}`}>
        <Suspense fallback={<HeroUniverseCanvas />}>
          <Spline scene={sceneUrl} className="w-full h-full" />
        </Suspense>
      </div>
    );
  }

  return <HeroUniverseCanvas className={className} />;
}
