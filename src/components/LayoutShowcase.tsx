import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { 
  LayoutDashboard,
  Users,
  Calendar,
  Activity,
  Settings,
  Bell,
  Search,
  Menu,
  ChevronRight,
  Home,
  Dumbbell,
  BarChart3,
  MessageSquare,
  HelpCircle,
  LogOut
} from "lucide-react";

export function LayoutShowcase() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="mb-4">📐 Layout Components</h2>
        <p className="text-muted-foreground mb-6">
          Sidebar and topbar examples showing the premium fitness SaaS layout
        </p>
      </div>

      {/* Sidebar Example */}
      <Card className="p-6 space-y-4">
        <h3>Sidebar Navigation</h3>
        <div className="border rounded-xl overflow-hidden" style={{ boxShadow: "var(--shadow-lg)" }}>
          <div className="flex h-[600px]">
            {/* Sidebar */}
            <div className="w-64 bg-sidebar border-r border-sidebar-border flex flex-col">
              {/* Logo */}
              <div className="p-5 border-b border-sidebar-border">
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-lg bg-primary flex items-center justify-center">
                    <Dumbbell className="size-6 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="font-semibold text-sidebar-foreground">FitCoach</div>
                    <div className="text-xs text-muted-foreground">Pro Platform</div>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex-1 p-3 space-y-1 overflow-y-auto">
                <div className="px-3 py-2 text-xs font-medium text-muted-foreground">MAIN MENU</div>
                {[
                  { icon: Home, label: "Dashboard", active: true, badge: null },
                  { icon: Users, label: "Clients", active: false, badge: "12" },
                  { icon: Calendar, label: "Schedule", active: false, badge: null },
                  { icon: Activity, label: "Workouts", active: false, badge: null },
                  { icon: BarChart3, label: "Analytics", active: false, badge: null },
                  { icon: MessageSquare, label: "Messages", active: false, badge: "3" },
                ].map((item, i) => (
                  <button
                    key={i}
                    className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg transition-colors ${
                      item.active
                        ? "bg-sidebar-primary text-sidebar-primary-foreground"
                        : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <item.icon className="size-4" />
                      <span className="text-sm font-medium">{item.label}</span>
                    </div>
                    {item.badge && (
                      <Badge className="bg-primary text-primary-foreground text-xs h-5 px-1.5">
                        {item.badge}
                      </Badge>
                    )}
                  </button>
                ))}

                <div className="px-3 py-2 text-xs font-medium text-muted-foreground mt-4">SETTINGS</div>
                {[
                  { icon: Settings, label: "Settings", active: false },
                  { icon: HelpCircle, label: "Help & Support", active: false },
                ].map((item, i) => (
                  <button
                    key={i}
                    className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors"
                  >
                    <item.icon className="size-4" />
                    <span className="text-sm font-medium">{item.label}</span>
                  </button>
                ))}
              </div>

              {/* User Profile */}
              <div className="p-3 border-t border-sidebar-border">
                <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-sidebar-accent cursor-pointer">
                  <Avatar className="size-9">
                    <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=user" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium text-sidebar-foreground truncate">John Doe</div>
                    <div className="text-xs text-muted-foreground truncate">john@fitcoach.com</div>
                  </div>
                  <LogOut className="size-4 text-muted-foreground" />
                </div>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 bg-background">
              <div className="p-8">
                <div className="text-sm text-muted-foreground">Main content area...</div>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Topbar Example */}
      <Card className="p-6 space-y-4">
        <h3>Topbar / Header</h3>
        <div className="border rounded-xl overflow-hidden" style={{ boxShadow: "var(--shadow-md)" }}>
          <div className="bg-card border-b border-border">
            <div className="flex items-center justify-between p-5">
              {/* Left Section */}
              <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon">
                  <Menu className="size-5" />
                </Button>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                  <Input placeholder="Search..." className="pl-9 w-64" />
                </div>
              </div>

              {/* Right Section */}
              <div className="flex items-center gap-3">
                <Button variant="ghost" size="icon" className="relative">
                  <Bell className="size-5" />
                  <span className="absolute top-1.5 right-1.5 size-2 bg-destructive rounded-full"></span>
                </Button>
                <Button variant="outline" className="bg-primary text-primary-foreground border-primary hover:bg-primary/90">
                  New Workout
                </Button>
                <div className="flex items-center gap-3 pl-3 border-l border-border">
                  <Avatar>
                    <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=user2" />
                    <AvatarFallback>SC</AvatarFallback>
                  </Avatar>
                  <div className="hidden md:block">
                    <div className="text-sm font-medium">Sarah Chen</div>
                    <div className="text-xs text-muted-foreground">Coach</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Breadcrumb Navigation */}
      <Card className="p-6 space-y-4">
        <h3>Breadcrumb Navigation</h3>
        <div className="border rounded-xl p-5" style={{ boxShadow: "var(--shadow-sm)" }}>
          <div className="flex items-center gap-2 text-sm">
            <button className="text-muted-foreground hover:text-foreground transition-colors">
              Dashboard
            </button>
            <ChevronRight className="size-4 text-muted-foreground" />
            <button className="text-muted-foreground hover:text-foreground transition-colors">
              Clients
            </button>
            <ChevronRight className="size-4 text-muted-foreground" />
            <span className="text-foreground font-medium">Alex Johnson</span>
          </div>
        </div>
      </Card>

      {/* Filter Bar */}
      <Card className="p-6 space-y-4">
        <h3>Filter & Search Bar</h3>
        <div className="border rounded-xl p-5 bg-surface" style={{ boxShadow: "var(--shadow-sm)" }}>
          <div className="flex flex-wrap items-center gap-3">
            <div className="relative flex-1 min-w-[200px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
              <Input placeholder="Search clients..." className="pl-9" />
            </div>
            <Button variant="outline">
              <Calendar className="size-4 mr-2" />
              Date Range
            </Button>
            <Button variant="outline">
              <Activity className="size-4 mr-2" />
              Status
            </Button>
            <Button variant="outline">
              <Settings className="size-4 mr-2" />
              More Filters
            </Button>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              Apply
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
