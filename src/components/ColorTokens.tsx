export function ColorTokens() {
  const tokens = [
    { name: "Primary", var: "--primary", fg: "--primary-foreground", note: "CTAs, main buttons, highlights (#ff8d03)" },
    { name: "Secondary", var: "--secondary", fg: "--secondary-foreground", note: "Sidebars, surfaces, filters (#ff981b)" },
    { name: "Tertiary", var: "--accent", fg: "--accent-foreground", note: "Subtle highlights (#ffac47)" },
    { name: "Background", var: "--background", fg: "--foreground", note: "Page background (White/Black)" },
    { name: "Surface", var: "--surface", fg: "--surface-foreground", note: "Card backgrounds, panels" },
    { name: "Card", var: "--card", fg: "--card-foreground", note: "Card components" },
  ];

  return (
    <div className="space-y-5">
      <div>
        <h2 className="mb-4">🎨 Color Token System</h2>
        <p className="text-muted-foreground mb-6">
          Primary, Accent, and Secondary colors remain constant in both light and dark modes.
          Only backgrounds, surfaces, and text colors invert.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tokens.map((token) => (
          <div
            key={token.name}
            className="border rounded-xl overflow-hidden"
            style={{ boxShadow: "var(--shadow-md)" }}
          >
            <div
              className="h-24 flex items-center justify-center"
              style={{
                backgroundColor: `var(${token.var})`,
                color: `var(${token.fg})`,
              }}
            >
              <div className="text-center">
                <div className="font-medium">{token.name}</div>
                <div className="text-sm opacity-75">{token.var}</div>
              </div>
            </div>
            <div className="p-4 bg-card">
              <p className="text-sm text-muted-foreground">{token.note}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}