import { Link } from "react-router-dom";
import { ROUTES } from "@/app/routes";
import { Container } from "@/components/layout/Container";
import { getButtonClassName } from "@/components/ui/Button";
import { personalInfo } from "@/data/personal.data";
import { useSeo } from "@/hooks/useSeo";
export function NotFoundPage(): React.JSX.Element {
  useSeo({
    title: `Page Not Found | ${personalInfo.fullName}`,
    description: "The requested portfolio page could not be found.",
    canonicalPath: window.location.pathname,
    robots: "noindex, nofollow",
  });
  return (
    <Container className="flex min-h-[calc(100vh-5rem)] flex-col justify-center py-20">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">
        404 error
      </p>
      <h1
        data-route-heading="true"
        tabIndex={-1}
        className="mt-4 text-4xl font-bold text-slate-50 sm:text-6xl"
      >
        Page not found
      </h1>
      <p className="mt-6 max-w-2xl leading-8 text-slate-300">
        The page may have been removed, renamed or entered incorrectly.
      </p>
      <Link to={ROUTES.home} className={getButtonClassName({ className: "mt-8 w-fit" })}>
        Return home
      </Link>
    </Container>
  );
}
