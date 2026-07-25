import { Outlet } from "react-router-dom";
import { BackToTopButton } from "@/components/layout/BackToTopButton";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SkipToContent } from "@/components/layout/SkipToContent";
import { RouteEffects } from "@/components/routing/RouteEffects";
export function RouteLayout(): React.JSX.Element {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-slate-950 text-slate-200">
      <RouteEffects />
      <SkipToContent />
      <div aria-hidden className="site-background pointer-events-none fixed inset-0" />
      <SiteHeader />
      <main id="main-content" tabIndex={-1} className="relative z-10 min-h-screen pt-20">
        <Outlet />
      </main>
      <BackToTopButton />
    </div>
  );
}
