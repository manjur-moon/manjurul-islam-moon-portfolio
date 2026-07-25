import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { IconButton } from "@/components/ui/IconButton";

export function BackToTopButton(): React.JSX.Element {
  const reduced = useReducedMotion();
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const listener = (): void => setVisible(window.scrollY > 640);
    window.addEventListener("scroll", listener, { passive: true });
    return () => window.removeEventListener("scroll", listener);
  }, []);
  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="fixed bottom-6 right-6 z-30"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
        >
          <IconButton
            icon={ArrowUp}
            label="Back to top"
            variant="solid"
            onClick={() =>
              window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" })
            }
          />
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
