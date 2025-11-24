import { Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";
import { useTheme } from "../context/ThemeContext";

export function ThemeToggle() {
  const { toggleColorMode, colorMode } = useTheme();

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleColorMode}
      className="gap-2"
    >
      <Sun className="size-4 dark:hidden" />
      <Moon className="size-4 hidden dark:block" />
      <span className="hidden sm:inline">Toggle Theme</span>
    </Button>
  );
}
