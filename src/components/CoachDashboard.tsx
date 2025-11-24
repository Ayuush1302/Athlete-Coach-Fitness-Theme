import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { Progress } from "./ui/progress";
import { 
  Users, 
  DollarSign, 
  TrendingUp, 
  Calendar,
  Search,
  Filter,
  MoreVertical,
  Activity,
  Clock,
  CheckCircle2,
  AlertCircle
} from "lucide-react";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from "recharts";

const revenueData = [
  { month: "Jan", revenue: 12400, clients: 42 },
  { month: "Feb", revenue: 14200, clients: 45 },
  { month: "Mar", revenue: 13800, clients: 44 },
  { month: "Apr", revenue: 15600, clients: 48 },
  { month: "May", revenue: 17200, clients: 52 },
  { month: "Jun", revenue: 18900, clients: 56 },
];

const clientData = [
  { name: "Alex Johnson", status: "Active", progress: 85, lastSession: "2 hours ago", plan: "Premium", avatar: "alex" },
  { name: "Emily Rodriguez", status: "Active", progress: 72, lastSession: "1 day ago", plan: "Standard", avatar: "emily" },
  { name: "Michael Chen", status: "Pending", progress: 45, lastSession: "3 days ago", plan: "Premium", avatar: "michael" },
  { name: "Sarah Williams", status: "Active", progress: 91, lastSession: "5 hours ago", plan: "Premium", avatar: "sarah" },
  { name: "David Brown", status: "Active", progress: 68, lastSession: "1 day ago", plan: "Standard", avatar: "david" },
  { name: "Jessica Lee", status: "Inactive", progress: 33, lastSession: "1 week ago", plan: "Basic", avatar: "jessica" },
];

const activityFeed = [
  { client: "Alex Johnson", action: "Completed Upper Body workout", time: "2 hours ago", type: "workout" },
  { client: "Sarah Williams", action: "Logged 12,500 steps", time: "5 hours ago", type: "activity" },
  { client: "Emily Rodriguez", action: "Submitted progress photos", time: "1 day ago", type: "update" },
  { client: "Michael Chen", action: "Missed scheduled workout", time: "3 days ago", type: "missed" },
];

export function CoachDashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1>Coach Dashboard</h1>
          <p className="text-muted-foreground">Manage your clients and track performance</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">
            <Calendar className="size-4 mr-2" />
            Schedule
          </Button>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Users className="size-4 mr-2" />
            Add Client
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <Card className="p-5 space-y-3">
          <div className="flex items-center justify-between">
            <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Users className="size-5 text-primary" />
            </div>
            <TrendingUp className="size-4 text-green-600" />
          </div>
          <div>
            <div className="text-sm text-muted-foreground">Total Clients</div>
            <div className="text-2xl font-semibold">127</div>
            <div className="text-sm text-green-600">+12 this month</div>
          </div>
        </Card>

        <Card className="p-5 space-y-3">
          <div className="flex items-center justify-between">
            <div className="size-10 rounded-lg bg-accent/10 flex items-center justify-center">
              <DollarSign className="size-5 text-accent" />
            </div>
            <TrendingUp className="size-4 text-green-600" />
          </div>
          <div>
            <div className="text-sm text-muted-foreground">Monthly Revenue</div>
            <div className="text-2xl font-semibold">$18,900</div>
            <div className="text-sm text-green-600">+18% vs last month</div>
          </div>
        </Card>

        <Card className="p-5 space-y-3">
          <div className="flex items-center justify-between">
            <div className="size-10 rounded-lg" style={{ backgroundColor: "var(--chart-3)", opacity: 0.15 }}>
              <Activity className="size-5 m-auto mt-2.5" style={{ color: "var(--chart-3)" }} />
            </div>
            <TrendingUp className="size-4 text-green-600" />
          </div>
          <div>
            <div className="text-sm text-muted-foreground">Active Sessions</div>
            <div className="text-2xl font-semibold">43</div>
            <div className="text-sm text-green-600">+8 this week</div>
          </div>
        </Card>

        <Card className="p-5 space-y-3">
          <div className="flex items-center justify-between">
            <div className="size-10 rounded-lg bg-secondary/50 flex items-center justify-center">
              <Clock className="size-5 text-secondary-foreground" />
            </div>
            <div className="text-sm text-muted-foreground">Avg</div>
          </div>
          <div>
            <div className="text-sm text-muted-foreground">Avg Session Time</div>
            <div className="text-2xl font-semibold">52 min</div>
            <div className="text-sm text-muted-foreground">Per client</div>
          </div>
        </Card>
      </div>

      {/* Revenue Chart & Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Revenue Analytics */}
        <Card className="p-6 space-y-4 lg:col-span-2">
          <div className="flex items-center justify-between">
            <div>
              <h3>Revenue Analytics</h3>
              <p className="text-sm text-muted-foreground">Monthly performance overview</p>
            </div>
            <Button variant="outline" size="sm">
              <Filter className="size-4 mr-2" />
              Filter
            </Button>
          </div>
          <ResponsiveContainer width="100%" height={280}>
            <AreaChart data={revenueData}>
              <defs>
                <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="var(--chart-1)" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="var(--chart-1)" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
              <XAxis dataKey="month" stroke="var(--muted-foreground)" />
              <YAxis stroke="var(--muted-foreground)" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "var(--card)", 
                  border: "1px solid var(--border)",
                  borderRadius: "8px"
                }} 
              />
              <Area 
                type="monotone" 
                dataKey="revenue" 
                stroke="var(--chart-1)" 
                strokeWidth={2}
                fill="url(#revenueGradient)" 
              />
            </AreaChart>
          </ResponsiveContainer>
        </Card>

        {/* Recent Activity Feed */}
        <Card className="p-6 space-y-4">
          <h3>Recent Activity</h3>
          <div className="space-y-4">
            {activityFeed.map((item, i) => (
              <div key={i} className="flex gap-3">
                <div className="mt-1">
                  {item.type === "workout" && (
                    <div className="size-8 rounded-full bg-green-100 dark:bg-green-950 flex items-center justify-center">
                      <CheckCircle2 className="size-4 text-green-600" />
                    </div>
                  )}
                  {item.type === "activity" && (
                    <div className="size-8 rounded-full bg-blue-100 dark:bg-blue-950 flex items-center justify-center">
                      <Activity className="size-4 text-blue-600" />
                    </div>
                  )}
                  {item.type === "update" && (
                    <div className="size-8 rounded-full bg-purple-100 dark:bg-purple-950 flex items-center justify-center">
                      <TrendingUp className="size-4 text-purple-600" />
                    </div>
                  )}
                  {item.type === "missed" && (
                    <div className="size-8 rounded-full bg-orange-100 dark:bg-orange-950 flex items-center justify-center">
                      <AlertCircle className="size-4 text-orange-600" />
                    </div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium">{item.client}</div>
                  <div className="text-sm text-muted-foreground truncate">{item.action}</div>
                  <div className="text-xs text-muted-foreground">{item.time}</div>
                </div>
              </div>
            ))}
          </div>
          <Button variant="outline" className="w-full">View All Activity</Button>
        </Card>
      </div>

      {/* Client List */}
      <Card className="p-6 space-y-4">
        <div className="flex items-center justify-between">
          <h3>Client List</h3>
          <div className="flex gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
              <Input placeholder="Search clients..." className="pl-9 w-64" />
            </div>
            <Button variant="outline" size="icon">
              <Filter className="size-4" />
            </Button>
          </div>
        </div>
        
        <div className="border rounded-lg">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Client</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Progress</TableHead>
                <TableHead>Last Session</TableHead>
                <TableHead>Plan</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {clientData.map((client, i) => (
                <TableRow key={i} className="cursor-pointer hover:bg-surface/50">
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${client.avatar}`} />
                        <AvatarFallback>{client.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div className="font-medium">{client.name}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge 
                      variant={client.status === "Active" ? "default" : client.status === "Pending" ? "secondary" : "outline"}
                      className={
                        client.status === "Active" 
                          ? "bg-green-100 dark:bg-green-950 text-green-700 dark:text-green-300 border-green-200 dark:border-green-800" 
                          : client.status === "Pending"
                          ? ""
                          : "border-red-200 dark:border-red-800 text-red-700 dark:text-red-300"
                      }
                    >
                      {client.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Progress value={client.progress} className="w-24" />
                      <span className="text-sm text-muted-foreground">{client.progress}%</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm text-muted-foreground">{client.lastSession}</div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{client.plan}</Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="icon">
                      <MoreVertical className="size-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  );
}
