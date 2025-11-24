import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { themes } from "../themes/themeConfig";

type ThemeKey = keyof typeof themes;
type ColorMode = "light" | "dark";

interface ThemeContextType {
  currentTheme: ThemeKey;
  colorMode: ColorMode;
  setTheme: (themeKey: ThemeKey) => void;
  toggleColorMode: () => void;
  applyThemeVariables: (themeKey: ThemeKey, mode: ColorMode) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const STORAGE_KEYS = {
  THEME: "app-theme",
  COLOR_MODE: "app-color-mode",
};

const applyThemeVariables = (themeKey: ThemeKey, mode: ColorMode) => {
  const theme = themes[themeKey];
  if (!theme) return;

  const root = document.documentElement;
  const isDarkMode = mode === "dark";

  // Handle dual-primary themes (primaryOrange + primaryGreen)
  if ("primaryOrange" in theme && "primaryGreen" in theme) {
    // Set dual primary colors
    root.style.setProperty("--color-primary-orange", theme.primaryOrange);
    root.style.setProperty("--color-primary-green", theme.primaryGreen);
    // Also set --color-primary to primaryOrange for backward compatibility
    root.style.setProperty("--color-primary", theme.primaryOrange);
    root.style.setProperty("--primary", theme.primaryOrange);
  } else {
    // Standard theme with single primary color
    root.style.setProperty("--color-primary", theme.primary);
    root.style.setProperty("--primary", theme.primary);
  }

  // Handle primaryHover if it exists
  if ("primaryHover" in theme) {
    root.style.setProperty("--color-primary-hover", theme.primaryHover);
  }

  // Secondary and Tertiary stay constant (using both naming conventions for compatibility)
  root.style.setProperty("--color-secondary", theme.secondary);
  root.style.setProperty("--color-tertiary", theme.tertiary);
  root.style.setProperty("--secondary", theme.secondary);
  root.style.setProperty("--accent", theme.tertiary);

  // Background, surface, card, border, text, and text-muted change based on mode
  // Always set these variables when the theme has the corresponding properties
  if (isDarkMode) {
    root.style.setProperty("--color-background", theme.backgroundDark);
    root.style.setProperty("--background", theme.backgroundDark);
    root.style.setProperty("--color-text", theme.textDark);
    root.style.setProperty("--foreground", theme.textDark);
    
    // Set surface if it exists
    if ("surfaceDark" in theme) {
      root.style.setProperty("--color-surface", theme.surfaceDark);
      root.style.setProperty("--surface", theme.surfaceDark);
    }
    
    // Set card if it exists
    if ("cardDark" in theme) {
      root.style.setProperty("--color-card", theme.cardDark);
      root.style.setProperty("--card", theme.cardDark);
    }
    
    // Set border if it exists
    if ("borderDark" in theme) {
      root.style.setProperty("--color-border", theme.borderDark);
      root.style.setProperty("--border", theme.borderDark);
    }
    
    // Set text-muted if it exists
    if ("textMutedDark" in theme) {
      root.style.setProperty("--color-text-muted", theme.textMutedDark);
      root.style.setProperty("--muted-foreground", theme.textMutedDark);
    }
  } else {
    root.style.setProperty("--color-background", theme.backgroundLight);
    root.style.setProperty("--background", theme.backgroundLight);
    root.style.setProperty("--color-text", theme.textLight);
    root.style.setProperty("--foreground", theme.textLight);
    
    // Set surface if it exists
    if ("surfaceLight" in theme) {
      root.style.setProperty("--color-surface", theme.surfaceLight);
      root.style.setProperty("--surface", theme.surfaceLight);
    }
    
    // Set card if it exists
    if ("cardLight" in theme) {
      root.style.setProperty("--color-card", theme.cardLight);
      root.style.setProperty("--card", theme.cardLight);
    }
    
    // Set border if it exists
    if ("borderLight" in theme) {
      root.style.setProperty("--color-border", theme.borderLight);
      root.style.setProperty("--border", theme.borderLight);
    }
    
    // Set text-muted if it exists
    if ("textMutedLight" in theme) {
      root.style.setProperty("--color-text-muted", theme.textMutedLight);
      root.style.setProperty("--muted-foreground", theme.textMutedLight);
    }
  }

  // Update ring color (used for focus states) - use primaryOrange for dual-primary themes
  const primaryColor = "primaryOrange" in theme ? theme.primaryOrange : theme.primary;
  root.style.setProperty("--ring", primaryColor);

  // Update chart colors
  root.style.setProperty("--chart-1", primaryColor);
  root.style.setProperty("--chart-2", theme.tertiary);

  // Update sidebar colors
  root.style.setProperty("--sidebar-primary", primaryColor);
  root.style.setProperty("--sidebar-ring", primaryColor);
};

export function ThemeProvider({ children }: { children: ReactNode }) {
  // Initialize state from localStorage or defaults
  const getInitialTheme = (): ThemeKey => {
    const savedTheme = localStorage.getItem(STORAGE_KEYS.THEME) as ThemeKey;
    return savedTheme && themes[savedTheme] ? savedTheme : "theme2";
  };

  const getInitialColorMode = (): ColorMode => {
    const savedMode = localStorage.getItem(STORAGE_KEYS.COLOR_MODE) as ColorMode;
    if (savedMode === "dark" || savedMode === "light") {
      return savedMode;
    }
    // Check system preference
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return prefersDark ? "dark" : "light";
  };

  const [currentTheme, setCurrentTheme] = useState<ThemeKey>(getInitialTheme);
  const [colorMode, setColorMode] = useState<ColorMode>(getInitialColorMode);

  // Apply theme immediately on mount
  useEffect(() => {
    const initialTheme = getInitialTheme();
    const initialMode = getInitialColorMode();

    // Apply dark class if needed
    if (initialMode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // Apply theme variables immediately
    applyThemeVariables(initialTheme, initialMode);
  }, []);

  // Apply theme variables whenever theme or mode changes
  useEffect(() => {
    applyThemeVariables(currentTheme, colorMode);
  }, [currentTheme, colorMode]);

  const setTheme = (themeKey: ThemeKey) => {
    if (themes[themeKey]) {
      setCurrentTheme(themeKey);
      localStorage.setItem(STORAGE_KEYS.THEME, themeKey);
    }
  };

  const toggleColorMode = () => {
    const newMode = colorMode === "light" ? "dark" : "light";
    setColorMode(newMode);
    localStorage.setItem(STORAGE_KEYS.COLOR_MODE, newMode);

    // Toggle dark class on document
    if (newMode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        currentTheme,
        colorMode,
        setTheme,
        toggleColorMode,
        applyThemeVariables,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
