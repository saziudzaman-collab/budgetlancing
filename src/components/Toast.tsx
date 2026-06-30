import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function Toast({ msg }: { msg: string | null }) {
  return (
    <AnimatePresence>
      {msg && (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.9 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[60] glass glow-ring rounded-full px-5 py-3 flex items-center gap-2 text-sm font-medium"
        >
          <CheckCircle2 className="h-5 w-5 text-green-500" />
          {msg}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
