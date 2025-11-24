import { Palette } from "lucide-react";
import { Button } from "./button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./popover";
import { useTheme } from "../../context/ThemeContext";
import { themes } from "../../themes/themeConfig";

export function ThemeDialog() {
  const { currentTheme, setTheme } = useTheme();

  const handleThemeSelect = (themeKey: keyof typeof themes) => {
    setTheme(themeKey);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          <Palette className="size-4" />
          <span className="hidden sm:inline">Theme</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-56 p-2" align="end">
        <div className="space-y-1">
          <div className="px-2 py-1.5 text-sm font-medium text-muted-foreground">
            Select Theme
          </div>
          {Object.entries(themes).map(([key, theme]) => (
            <button
              key={key}
              onClick={() => handleThemeSelect(key as keyof typeof themes)}
              className={`w-full rounded-md px-3 py-2 text-left text-sm transition-colors ${
                currentTheme === key
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-accent hover:text-accent-foreground"
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className="size-4 rounded-full border-2 border-border"
                  style={{ backgroundColor: theme.primary }}
                />
                <span>{theme.name}</span>
                {currentTheme === key && (
                  <span className="ml-auto text-xs">✓</span>
                )}
              </div>
            </button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}

