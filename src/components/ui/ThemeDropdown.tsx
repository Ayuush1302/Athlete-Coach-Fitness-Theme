import { useState, useEffect, useRef } from "react";
import { Palette } from "lucide-react";
import { Button } from "./button";
import { useTheme } from "../../context/ThemeContext";
import { themes } from "../../themes/themeConfig";

export function ThemeDropdown() {
  const { currentTheme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleThemeSelect = (themeKey: keyof typeof themes) => {
    setTheme(themeKey);
    setIsOpen(false); // Auto-close after selection
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Trigger Button */}
      <Button
        variant="outline"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="gap-2"
      >
        <Palette className="size-4" />
        <span className="hidden sm:inline">Theme</span>
      </Button>

      {/* Dropdown Panel */}
      {isOpen && (
        <div className="dropdown-container">
          <div className="theme-dropdown-list space-y-1">
            {Object.entries(themes).map(([key, theme]) => {
              // Check if theme has dual primary colors
              const hasDualPrimary = "primaryOrange" in theme && "primaryGreen" in theme;
              
              return (
                <div
                  key={key}
                  className={`theme-item ${
                    currentTheme === key ? "theme-item-active" : ""
                  }`}
                  onClick={() => handleThemeSelect(key as keyof typeof themes)}
                >
                  {hasDualPrimary ? (
                    // Two-color badge for dual-primary themes
                    <div className="color-preview-dual">
                      <span
                        className="theme-dot"
                        style={{ backgroundColor: theme.primaryOrange }}
                      />
                      <span
                        className="theme-dot"
                        style={{ backgroundColor: theme.primaryGreen }}
                      />
                    </div>
                  ) : (
                    // Three-color badge for standard themes
                    <div className="color-preview-multi">
                      {[theme.primary, theme.secondary, theme.tertiary].map(
                        (color, index) => (
                          <span
                            key={`${theme.name}-${index}`}
                            className="theme-dot"
                            style={{ backgroundColor: color }}
                          />
                        )
                      )}
                    </div>
                  )}
                  <span>{theme.name}</span>
                  {currentTheme === key && (
                    <span className="ml-auto text-xs">✓</span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      <style>{`
        .dropdown-container {
          position: absolute;
          top: 100%;
          right: 0;
          margin-top: 8px;
          background: var(--card);
          padding: 12px;
          border-radius: 10px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          min-width: 180px;
          z-index: 50;
          border: 1px solid var(--border);
        }

        .theme-dropdown-list {
          max-height: 350px;
          overflow-y: auto;
          padding-right: 4px;
          scrollbar-width: thin;
          scrollbar-color: rgba(0, 0, 0, 0.2) transparent;
        }

        .theme-dropdown-list::-webkit-scrollbar {
          width: 6px;
        }

        .theme-dropdown-list::-webkit-scrollbar-track {
          background: transparent;
        }

        .theme-dropdown-list::-webkit-scrollbar-thumb {
          background-color: rgba(0, 0, 0, 0.2);
          border-radius: 4px;
        }

        .theme-dropdown-list::-webkit-scrollbar-thumb:hover {
          background-color: rgba(0, 0, 0, 0.3);
        }

        .dark .theme-dropdown-list {
          scrollbar-color: rgba(255, 255, 255, 0.3) transparent;
        }

        .dark .theme-dropdown-list::-webkit-scrollbar-thumb {
          background-color: rgba(255, 255, 255, 0.3);
        }

        .dark .theme-dropdown-list::-webkit-scrollbar-thumb:hover {
          background-color: rgba(255, 255, 255, 0.4);
        }

        .theme-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 8px 12px;
          border-radius: 8px;
          cursor: pointer;
          transition: background-color 0.15s ease;
          font-size: 14px;
        }

        .theme-item:hover {
          background: var(--accent);
          color: var(--accent-foreground);
        }

        .theme-item-active {
          background: var(--primary);
          color: var(--primary-foreground);
        }

        .color-preview-dual {
          display: flex;
          gap: 4px;
          align-items: center;
          flex-shrink: 0;
        }

        .color-preview-multi {
          display: flex;
          gap: 4px;
          align-items: center;
          flex-shrink: 0;
        }

        .theme-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: 1px solid var(--border);
          display: inline-block;
        }
      `}</style>
    </div>
  );
}

