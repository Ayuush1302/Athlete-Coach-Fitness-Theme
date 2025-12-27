import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Calendar } from "./ui/calendar";
import {
  Activity,
  TrendingUp,
  Droplets,
  Moon,
  Flame,
  Target,
  Calendar as CalendarIcon,
  MessageSquare,
  ChevronRight
} from "lucide-react";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from "recharts";
import { useState } from "react";

const activityData = [
  { day: "Mon", steps: 8500, calories: 2200 },
  { day: "Tue", steps: 10200, calories: 2450 },
  { day: "Wed", steps: 7800, calories: 2100 },
  { day: "Thu", steps: 12400, calories: 2800 },
  { day: "Fri", steps: 9800, calories: 2350 },
  { day: "Sat", steps: 11200, calories: 2600 },
  { day: "Sun", steps: 6500, calories: 1950 },
];

const progressData = [
  { week: "W1", weight: 185, target: 175 },
  { week: "W2", weight: 183, target: 175 },
  { week: "W3", weight: 181, target: 175 },
  { week: "W4", weight: 179, target: 175 },
  { week: "W5", weight: 177, target: 175 },
];

export function AthleteDashboard() {
  // Set up date range state - selecting Nov 20-27, 2025
  const [dateRange, setDateRange] = useState<{ from: Date | undefined; to: Date | undefined }>({
    from: new Date(2025, 10, 20), // November 20, 2025
    to: new Date(2025, 10, 27),   // November 27, 2025
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1>Welcome back, Alex! 👋</h1>
          <p className="text-muted-foreground">Here's your fitness progress for today</p>
        </div>
        <Button>
          <Plus className="size-4 mr-2" />
          Log Workout
        </Button>
      </div>

      {/* Today's Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <Card className="p-5 space-y-3">
          <div className="flex items-center justify-between">
            <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Activity className="size-5 text-primary" />
            </div>
            <Badge variant="outline" className="bg-green-50 dark:bg-green-950 text-green-700 dark:text-green-300 border-green-200 dark:border-green-800">
              +12%
            </Badge>
          </div>
          <div>
            <div className="text-sm text-muted-foreground">Steps Today</div>
            <div className="text-2xl font-semibold">9,847</div>
            <Progress value={82} className="mt-2" />
            <div className="text-xs text-muted-foreground mt-1">Goal: 12,000</div>
          </div>
        </Card>

        <Card className="p-5 space-y-3">
          <div className="flex items-center justify-between">
            <div className="size-10 rounded-lg bg-accent/10 flex items-center justify-center">
              <Flame className="size-5 text-accent" />
            </div>
            <Badge variant="outline" className="bg-green-50 dark:bg-green-950 text-green-700 dark:text-green-300 border-green-200 dark:border-green-800">
              +8%
            </Badge>
          </div>
          <div>
            <div className="text-sm text-muted-foreground">Calories Burned</div>
            <div className="text-2xl font-semibold">2,340</div>
            <Progress value={78} className="mt-2" />
            <div className="text-xs text-muted-foreground mt-1">Goal: 3,000</div>
          </div>
        </Card>

        <Card className="p-5 space-y-3">
          <div className="flex items-center justify-between">
            <div className="size-10 rounded-lg" style={{ backgroundColor: "var(--chart-5)", opacity: 0.15 }}>
              <Droplets className="size-5 m-auto mt-2.5" style={{ color: "var(--chart-5)" }} />
            </div>
            <Badge variant="outline" className="bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800">
              Good
            </Badge>
          </div>
          <div>
            <div className="text-sm text-muted-foreground">Water Intake</div>
            <div className="text-2xl font-semibold">6 / 8</div>
            <Progress value={75} className="mt-2" />
            <div className="text-xs text-muted-foreground mt-1">Glasses</div>
          </div>
        </Card>

        <Card className="p-5 space-y-3">
          <div className="flex items-center justify-between">
            <div className="size-10 rounded-lg bg-secondary/50 flex items-center justify-center">
              <Moon className="size-5 text-secondary-foreground" />
            </div>
            <Badge variant="outline" className="bg-purple-50 dark:bg-purple-950 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800">
              7.5h
            </Badge>
          </div>
          <div>
            <div className="text-sm text-muted-foreground">Sleep Quality</div>
            <div className="text-2xl font-semibold">Good</div>
            <Progress value={88} className="mt-2" />
            <div className="text-xs text-muted-foreground mt-1">Target: 8 hours</div>
          </div>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* Weekly Activity */}
        <Card className="p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3>Weekly Activity</h3>
              <p className="text-sm text-muted-foreground">Steps and calories burned</p>
            </div>
            <Button variant="outline" size="sm">View All</Button>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={activityData}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
              <XAxis dataKey="day" stroke="var(--muted-foreground)" />
              <YAxis stroke="var(--muted-foreground)" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "var(--card)",
                  border: "1px solid var(--border)",
                  borderRadius: "8px"
                }}
              />
              <Bar dataKey="steps" fill="var(--chart-1)" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        {/* Weight Progress */}
        <Card className="p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3>Weight Progress</h3>
              <p className="text-sm text-muted-foreground">Tracking to your goal</p>
            </div>
            <Button variant="outline" size="sm">Update</Button>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <AreaChart data={progressData}>
              <defs>
                <linearGradient id="weightGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="var(--chart-2)" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="var(--chart-2)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
              <XAxis dataKey="week" stroke="var(--muted-foreground)" />
              <YAxis stroke="var(--muted-foreground)" domain={[170, 190]} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "var(--card)",
                  border: "1px solid var(--border)",
                  borderRadius: "8px"
                }}
              />
              <Area
                type="monotone"
                dataKey="weight"
                stroke="var(--chart-2)"
                strokeWidth={2}
                fill="url(#weightGradient)"
              />
              <Line
                type="monotone"
                dataKey="target"
                stroke="var(--primary)"
                strokeWidth={2}
                strokeDasharray="5 5"
              />
            </AreaChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Your Coach & Upcoming */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Your Coach */}
        <Card className="p-6 space-y-4 lg:col-span-1">
          <h3>Your Coach</h3>
          <div className="flex items-start gap-4">
            <Avatar className="size-14">
              <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=coach" />
              <AvatarFallback>SC</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="font-medium">Sarah Chen</div>
              <div className="text-sm text-muted-foreground">Certified Personal Trainer</div>
              <Badge className="mt-2 bg-green-100 dark:bg-green-950 text-green-700 dark:text-green-300">
                Available
              </Badge>
            </div>
          </div>
          <div className="space-y-2">
            <Button className="w-full" variant="outline">
              <MessageSquare className="size-4 mr-2" />
              Send Message
            </Button>
            <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
              <CalendarIcon className="size-4 mr-2" />
              Schedule Session
            </Button>
          </div>
        </Card>

        {/* Upcoming Workouts */}
        <Card className="p-6 space-y-4 lg:col-span-2">
          <div className="flex items-center justify-between">
            <h3>Upcoming Workouts</h3>
            <Button variant="ghost" size="sm">View Calendar</Button>
          </div>
          <div className="space-y-3">
            {[
              { name: "Upper Body Strength", time: "Today, 4:00 PM", duration: "45 min", type: "Strength" },
              { name: "HIIT Cardio", time: "Tomorrow, 6:30 AM", duration: "30 min", type: "Cardio" },
              { name: "Yoga & Stretching", time: "Wed, 7:00 PM", duration: "60 min", type: "Flexibility" },
            ].map((workout, i) => (
              <div key={i} className="flex items-center justify-between p-4 rounded-lg bg-surface border border-border hover:bg-surface/80 transition-colors cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Target className="size-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">{workout.name}</div>
                    <div className="text-sm text-muted-foreground">{workout.time} • {workout.duration}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant="outline">{workout.type}</Badge>
                  <ChevronRight className="size-5 text-muted-foreground" />
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Training Calendar */}
      <Card className="p-6 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3>Training Calendar</h3>
            <p className="text-sm text-muted-foreground">Select a date range to view your workout schedule</p>
          </div>
          <Badge className="bg-primary/10 text-primary border-primary/20">
            Nov 20 - Nov 27 Selected
          </Badge>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Calendar */}
          <div className="lg:col-span-2">
            <Calendar
              mode="range"
              selected={dateRange}
              onSelect={(range) => setDateRange(range || { from: undefined, to: undefined })}
              numberOfMonths={2}
              className="rounded-lg border bg-surface/50"
            />
          </div>

          {/* Legend & Stats */}
          <div className="space-y-4">
            <div className="space-y-3">
              <div className="text-sm font-medium">Workout Summary</div>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-3 rounded-lg bg-surface border border-border">
                  <div className="flex items-center gap-2">
                    <div className="size-3 rounded-full bg-primary"></div>
                    <span className="text-sm">Strength Training</span>
                  </div>
                  <span className="text-sm font-medium">3 days</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-surface border border-border">
                  <div className="flex items-center gap-2">
                    <div className="size-3 rounded-full bg-accent"></div>
                    <span className="text-sm">Cardio</span>
                  </div>
                  <span className="text-sm font-medium">2 days</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-surface border border-border">
                  <div className="flex items-center gap-2">
                    <div className="size-3 rounded-full" style={{ backgroundColor: "var(--chart-3)" }}></div>
                    <span className="text-sm">Flexibility</span>
                  </div>
                  <span className="text-sm font-medium">2 days</span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
              <div className="flex items-start gap-3">
                <CalendarIcon className="size-5 text-primary mt-0.5" />
                <div>
                  <div className="text-sm font-medium">Selected Range</div>
                  <div className="text-xs text-muted-foreground mt-1">
                    7 days • 7 scheduled workouts
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    Avg: 52 min per session
                  </div>
                </div>
              </div>
            </div>

            <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
              <Plus className="size-4 mr-2" />
              Add Workout
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}

function Plus(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}