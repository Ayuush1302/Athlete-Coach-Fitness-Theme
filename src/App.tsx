import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import { ThemeToggle } from "./components/ThemeToggle";
import { ThemeDropdown } from "./components/ui/ThemeDropdown";
import { ColorTokens } from "./components/ColorTokens";
import { ComponentShowcase } from "./components/ComponentShowcase";
import { LayoutShowcase } from "./components/LayoutShowcase";
import { AthleteDashboard } from "./components/AthleteDashboard";
import { CoachDashboard } from "./components/CoachDashboard";
import { Palette, Box, Layout, User, UserCog } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card sticky top-0 z-50" style={{ boxShadow: "var(--shadow-sm)" }}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1>Athlete-Coach Fitness Platform</h1>
              <p className="text-sm text-muted-foreground">Complete Visual Theme System</p>
            </div>
            <div className="flex items-center gap-2">
              <ThemeDropdown />
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-8">
        <Tabs defaultValue="tokens" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 lg:w-auto lg:inline-grid">
            <TabsTrigger value="tokens" className="gap-2">
              <Palette className="size-4" />
              <span className="hidden sm:inline">Tokens</span>
            </TabsTrigger>
            <TabsTrigger value="components" className="gap-2">
              <Box className="size-4" />
              <span className="hidden sm:inline">Components</span>
            </TabsTrigger>
            <TabsTrigger value="layout" className="gap-2">
              <Layout className="size-4" />
              <span className="hidden sm:inline">Layout</span>
            </TabsTrigger>
            <TabsTrigger value="athlete" className="gap-2">
              <User className="size-4" />
              <span className="hidden sm:inline">Athlete</span>
            </TabsTrigger>
            <TabsTrigger value="coach" className="gap-2">
              <UserCog className="size-4" />
              <span className="hidden sm:inline">Coach</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="tokens">
            <ColorTokens />
          </TabsContent>

          <TabsContent value="components">
            <ComponentShowcase />
          </TabsContent>

          <TabsContent value="layout">
            <LayoutShowcase />
          </TabsContent>

          <TabsContent value="athlete">
            <AthleteDashboard />
          </TabsContent>

          <TabsContent value="coach">
            <CoachDashboard />
          </TabsContent>
        </Tabs>
      </div>

      {/* Footer Info */}
      <div className="border-t border-border bg-surface mt-16">
        <div className="container mx-auto px-6 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="mb-2">🎨 Theme Highlights</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Primary Color: #ff8d03 (Vibrant Orange)</li>
                <li>• Secondary Color: #ff981b (Amber Orange)</li>
                <li>• Tertiary Color: #ffac47 (Light Orange)</li>
                <li>• WCAG AA compliant</li>
              </ul>
            </div>
            <div>
              <h4 className="mb-2">🌗 Mode Behavior</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Primary, Secondary, Tertiary stay constant</li>
                <li>• Only backgrounds & text invert</li>
                <li>• Light mode: White background</li>
                <li>• Dark mode: Pure black background</li>
              </ul>
            </div>
            <div>
              <h4 className="mb-2">📐 Design System</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• 12px border radius (rounded cards)</li>
                <li>• Soft ambient shadows</li>
                <li>• 16px/20px spacing system</li>
                <li>• Premium clean layout</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}