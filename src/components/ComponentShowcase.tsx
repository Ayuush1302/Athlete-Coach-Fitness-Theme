import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { Switch } from "./ui/switch";
import { Slider } from "./ui/slider";
import { Progress } from "./ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { Search, Filter, Plus, MoreVertical } from "lucide-react";

export function ComponentShowcase() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="mb-6">🧩 Component Library</h2>
      </div>

      {/* Buttons */}
      <Card className="p-6 space-y-4">
        <h3>Buttons</h3>
        <div className="flex flex-wrap gap-3">
          <Button>Primary Button</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button size="sm">Small</Button>
          <Button>Default</Button>
          <Button size="lg">Large</Button>
          <Button size="icon"><Plus className="size-4" /></Button>
        </div>
      </Card>

      {/* Badges & Tags */}
      <Card className="p-6 space-y-4">
        <h3>Badges & Tags</h3>
        <div className="flex flex-wrap gap-2">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge className="bg-primary text-primary-foreground">Primary</Badge>
          <Badge className="bg-accent text-accent-foreground">Accent</Badge>
        </div>
      </Card>

      {/* Form Fields */}
      <Card className="p-6 space-y-4">
        <h3>Form Fields</h3>
        <div className="grid gap-4 max-w-md">
          <div className="space-y-2">
            <label>Input Field</label>
            <Input placeholder="Enter text..." />
          </div>
          <div className="space-y-2">
            <label>Search</label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
              <Input placeholder="Search..." className="pl-9" />
            </div>
          </div>
          <div className="space-y-2">
            <label>Select</label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select option..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="option1">Option 1</SelectItem>
                <SelectItem value="option2">Option 2</SelectItem>
                <SelectItem value="option3">Option 3</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </Card>

      {/* Switches & Sliders */}
      <Card className="p-6 space-y-4">
        <h3>Switches & Sliders</h3>
        <div className="space-y-6 max-w-md">
          <div className="flex items-center justify-between">
            <label>Enable notifications</label>
            <Switch />
          </div>
          <div className="space-y-2">
            <label>Volume</label>
            <Slider defaultValue={[70]} />
          </div>
          <div className="space-y-2">
            <label>Progress</label>
            <Progress value={65} />
          </div>
        </div>
      </Card>

      {/* Cards */}
      <Card className="p-6 space-y-4">
        <h3>Cards</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="p-5 space-y-2">
            <div className="text-sm text-muted-foreground">Total Clients</div>
            <div className="text-2xl font-semibold">127</div>
            <div className="text-sm text-green-600">+12% from last month</div>
          </Card>
          <Card className="p-5 space-y-2">
            <div className="text-sm text-muted-foreground">Active Sessions</div>
            <div className="text-2xl font-semibold">43</div>
            <div className="text-sm text-green-600">+8% from last week</div>
          </Card>
          <Card className="p-5 space-y-2">
            <div className="text-sm text-muted-foreground">Revenue</div>
            <div className="text-2xl font-semibold">$12,450</div>
            <div className="text-sm text-green-600">+18% from last month</div>
          </Card>
        </div>
      </Card>

      {/* Table */}
      <Card className="p-6 space-y-4">
        <h3>Table</h3>
        <div className="border rounded-lg">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Progress</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>John Doe</TableCell>
                <TableCell><Badge>Active</Badge></TableCell>
                <TableCell>
                  <Progress value={85} className="w-24" />
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="icon">
                    <MoreVertical className="size-4" />
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Jane Smith</TableCell>
                <TableCell><Badge variant="secondary">Pending</Badge></TableCell>
                <TableCell>
                  <Progress value={45} className="w-24" />
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="icon">
                    <MoreVertical className="size-4" />
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Mike Johnson</TableCell>
                <TableCell><Badge>Active</Badge></TableCell>
                <TableCell>
                  <Progress value={92} className="w-24" />
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="icon">
                    <MoreVertical className="size-4" />
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </Card>

      {/* Tabs */}
      <Card className="p-6 space-y-4">
        <h3>Tabs</h3>
        <Tabs defaultValue="overview" className="w-full">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="py-4">
            <p className="text-muted-foreground">Overview content goes here.</p>
          </TabsContent>
          <TabsContent value="analytics" className="py-4">
            <p className="text-muted-foreground">Analytics content goes here.</p>
          </TabsContent>
          <TabsContent value="reports" className="py-4">
            <p className="text-muted-foreground">Reports content goes here.</p>
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
}
