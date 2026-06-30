import { Moon, Sun } from "lucide-react";
import { useTheme } from "../lib/hooks";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="relative h-9 w-9 rounded-full glass flex items-center justify-center hover:scale-110 transition-transform"
    >
      {theme === "dark" ? (
        <Sun className="h-4 w-4 text-amber-400" />
      ) : (
        <Moon className="h-4 w-4 text-violet-600" />
      )}
    </button>
  );
}
