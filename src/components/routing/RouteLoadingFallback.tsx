import { LoaderCircle } from "lucide-react";
import { Container } from "@/components/layout/Container";
export function RouteLoadingFallback(): React.JSX.Element {
  return (
    <Container className="flex min-h-[calc(100vh-5rem)] items-center justify-center py-20">
      <div role="status" className="flex flex-col items-center gap-4 text-slate-400">
        <LoaderCircle
          aria-hidden
          className="animate-spin text-sky-300 motion-reduce:animate-none"
        />
        Loading page
      </div>
    </Container>
  );
}
