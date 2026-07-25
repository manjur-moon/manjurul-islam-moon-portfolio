import { lazy, Suspense } from "react";
import { MotionConfig } from "framer-motion";
import { Route, Routes } from "react-router-dom";
import { RouteLayout } from "@/app/layouts/RouteLayout";
import { ROUTES } from "@/app/routes";
import { RouteLoadingFallback } from "@/components/routing/RouteLoadingFallback";
import { HomePage } from "@/pages/HomePage";
const ProjectDetailsPage = lazy(async () => ({
  default: (await import("@/pages/ProjectDetailsPage")).ProjectDetailsPage,
}));
const NotFoundPage = lazy(async () => ({
  default: (await import("@/pages/NotFoundPage")).NotFoundPage,
}));
export function App(): React.JSX.Element {
  return (
    <MotionConfig reducedMotion="user">
      <Suspense fallback={<RouteLoadingFallback />}>
        <Routes>
          <Route element={<RouteLayout />}>
            <Route path={ROUTES.home} element={<HomePage />} />
            <Route path={ROUTES.projectDetailsPattern} element={<ProjectDetailsPage />} />
            <Route path={ROUTES.notFound} element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </MotionConfig>
  );
}
