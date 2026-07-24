# Graph Report - premp  (2026-07-18)

## Corpus Check
- 100 files · ~42,066 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 707 nodes · 818 edges · 118 communities (102 shown, 16 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `869cf8bd`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_Hugo Coder Theme Documentation|Hugo Coder Theme Documentation]]
- [[_COMMUNITY_DOMPurify JS Security Utility|DOMPurify JS Security Utility]]
- [[_COMMUNITY_Node & Package Dependencies|Node & Package Dependencies]]
- [[_COMMUNITY_Theme Color Scheme Toggle Script|Theme Color Scheme Toggle Script]]
- [[_COMMUNITY_Single Page & Math Rendering Layouts|Single Page & Math Rendering Layouts]]
- [[_COMMUNITY_Lovable MCP Server Config|Lovable MCP Server Config]]
- [[_COMMUNITY_About|About]]
- [[_COMMUNITY_Experience|Experience]]
- [[_COMMUNITY_Now|Now]]
- [[_COMMUNITY_Pkg Github Com Luizdepra Hugo Coder|Pkg Github Com Luizdepra Hugo Coder]]
- [[_COMMUNITY_Readme|Readme]]
- [[_COMMUNITY_Archetypes Default|Archetypes Default]]
- [[_COMMUNITY_Community 19|Community 19]]
- [[_COMMUNITY_Assets Scss Font Awesome License|Assets Scss Font Awesome License]]
- [[_COMMUNITY_Community 21|Community 21]]
- [[_COMMUNITY_Community 22|Community 22]]
- [[_COMMUNITY_Community 23|Community 23]]
- [[_COMMUNITY_Community 24|Community 24]]
- [[_COMMUNITY_Community 25|Community 25]]
- [[_COMMUNITY_Community 26|Community 26]]
- [[_COMMUNITY_Community 27|Community 27]]
- [[_COMMUNITY_Community 28|Community 28]]
- [[_COMMUNITY_Community 29|Community 29]]
- [[_COMMUNITY_Community 30|Community 30]]
- [[_COMMUNITY_Community 31|Community 31]]
- [[_COMMUNITY_Community 32|Community 32]]
- [[_COMMUNITY_Community 33|Community 33]]
- [[_COMMUNITY_Community 34|Community 34]]
- [[_COMMUNITY_Community 35|Community 35]]
- [[_COMMUNITY_Community 36|Community 36]]
- [[_COMMUNITY_Community 37|Community 37]]
- [[_COMMUNITY_Community 38|Community 38]]
- [[_COMMUNITY_Community 39|Community 39]]
- [[_COMMUNITY_Examplesite Categories Syntax Index|Examplesite Categories Syntax Index]]
- [[_COMMUNITY_Examplesite Categories Themes Index|Examplesite Categories Themes Index]]
- [[_COMMUNITY_Community 42|Community 42]]
- [[_COMMUNITY_Community 43|Community 43]]
- [[_COMMUNITY_Community 44|Community 44]]
- [[_COMMUNITY_Community 45|Community 45]]
- [[_COMMUNITY_Community 46|Community 46]]
- [[_COMMUNITY_Community 47|Community 47]]
- [[_COMMUNITY_Community 48|Community 48]]
- [[_COMMUNITY_Community 49|Community 49]]
- [[_COMMUNITY_Community 50|Community 50]]
- [[_COMMUNITY_Community 51|Community 51]]
- [[_COMMUNITY_Community 52|Community 52]]
- [[_COMMUNITY_Examplesite Tags Shortcodes Index|Examplesite Tags Shortcodes Index]]
- [[_COMMUNITY_Github Funding|Github Funding]]
- [[_COMMUNITY_Community 61|Community 61]]
- [[_COMMUNITY_Community 62|Community 62]]
- [[_COMMUNITY_Community 63|Community 63]]
- [[_COMMUNITY_Community 64|Community 64]]
- [[_COMMUNITY_Community 105|Community 105]]
- [[_COMMUNITY_Static Fonts License|Static Fonts License]]
- [[_COMMUNITY_Community 107|Community 107]]
- [[_COMMUNITY_Community 109|Community 109]]
- [[_COMMUNITY_Community 110|Community 110]]
- [[_COMMUNITY_Community 111|Community 111]]
- [[_COMMUNITY_Community 117|Community 117]]

## God Nodes (most connected - your core abstractions)
1. `cn()` - 69 edges
2. `compilerOptions` - 17 edges
3. `FileRoutesByPath` - 12 edges
4. `NotebookPage()` - 8 edges
5. `Prem Patel Portfolio — Dot-Grid Notebook` - 8 edges
6. `scripts` - 7 edges
7. `Doodle()` - 7 edges
8. `aliases` - 6 edges
9. `buttonVariants` - 6 edges
10. `premp.in` - 6 edges

## Surprising Connections (you probably didn't know these)
- `AlertDialogHeader()` --calls--> `cn()`  [EXTRACTED]
  src/components/ui/alert-dialog.tsx → src/lib/utils.ts
- `AlertDialogFooter()` --calls--> `cn()`  [EXTRACTED]
  src/components/ui/alert-dialog.tsx → src/lib/utils.ts
- `BreadcrumbSeparator()` --calls--> `cn()`  [EXTRACTED]
  src/components/ui/breadcrumb.tsx → src/lib/utils.ts
- `BreadcrumbEllipsis()` --calls--> `cn()`  [EXTRACTED]
  src/components/ui/breadcrumb.tsx → src/lib/utils.ts
- `CommandShortcut()` --calls--> `cn()`  [EXTRACTED]
  src/components/ui/command.tsx → src/lib/utils.ts

## Import Cycles
- 1-file cycle: `src/components/ui/input-otp.tsx -> src/components/ui/input-otp.tsx`
- 1-file cycle: `src/components/ui/sonner.tsx -> src/components/ui/sonner.tsx`

## Communities (118 total, 16 thin omitted)

### Community 1 - "Hugo Coder Theme Documentation"
Cohesion: 0.05
Nodes (39): Input, Separator, SheetContent, SheetContentProps, SheetDescription, SheetFooter(), SheetHeader(), SheetOverlay (+31 more)

### Community 3 - "DOMPurify JS Security Utility"
Cohesion: 0.12
Nodes (15): CattleNotes, Certifications & Ongoing Learning, Core Android (Primary), DevOps & Systems (Secondary), Education, Experience, Freelance, Lead Engineer (+7 more)

### Community 4 - "Node & Package Dependencies"
Cohesion: 0.04
Nodes (52): dependencies, class-variance-authority, clsx, cmdk, date-fns, embla-carousel-react, @hookform/resolvers, lucide-react (+44 more)

### Community 5 - "Theme Color Scheme Toggle Script"
Cohesion: 0.07
Nodes (29): devDependencies, eslint, eslint-config-prettier, @eslint/js, eslint-plugin-prettier, eslint-plugin-react-hooks, eslint-plugin-react-refresh, globals (+21 more)

### Community 7 - "Single Page & Math Rendering Layouts"
Cohesion: 0.10
Nodes (26): getRouter(), Route, Route, Route, Route, Route, SitemapEntry, AboutRoute (+18 more)

### Community 8 - "Lovable MCP Server Config"
Cohesion: 0.22
Nodes (11): IndexContent(), Props, Props, NotebookSurface(), Props, PageNavBar(), PAGES, usePageNav() (+3 more)

### Community 15 - "Pkg Github Com Luizdepra Hugo Coder"
Cohesion: 0.10
Nodes (19): compilerOptions, allowImportingTsExtensions, jsx, lib, module, moduleResolution, noEmit, noFallthroughCasesInSwitch (+11 more)

### Community 16 - "Readme"
Cohesion: 0.11
Nodes (18): aliases, components, hooks, lib, ui, utils, iconLibrary, registries (+10 more)

### Community 18 - "Archetypes Default"
Cohesion: 0.14
Nodes (13): 1. Content Inventory, 2. Lovable Prompting Design Brief, 3. Mirroring & Netlify Deployment Plan, About Me, Experience Timeline, Git Repositories Setup, Hero / Introduction, Mirroring & Branch Config (+5 more)

### Community 19 - "Community 19"
Cohesion: 0.15
Nodes (12): enabled, type, url, mcp, lovable, netlify, enabled, type (+4 more)

### Community 21 - "Community 21"
Cohesion: 0.09
Nodes (12): Checkbox, HoverCardContent, PopoverContent, Progress, ScrollArea, ScrollBar, Slider, Switch (+4 more)

### Community 22 - "Community 22"
Cohesion: 0.12
Nodes (14): Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut() (+6 more)

### Community 23 - "Community 23"
Cohesion: 0.12
Nodes (11): Menubar, MenubarCheckboxItem, MenubarContent, MenubarItem, MenubarLabel, MenubarRadioItem, MenubarSeparator, MenubarShortcut() (+3 more)

### Community 24 - "Community 24"
Cohesion: 0.19
Nodes (16): Button, ButtonProps, buttonVariants, Calendar(), CalendarDayButton(), Pagination(), PaginationContent, PaginationEllipsis() (+8 more)

### Community 25 - "Community 25"
Cohesion: 0.22
Nodes (8): Commands, Copy rules (hard requirements, from Prem), Current State: Notebook Site LIVE (since 2026-07-17), Key Files & Directories, Premp Website Configuration, Release flow (Lovable → preview → production), Resume system, Tech Stack (production)

### Community 26 - "Community 26"
Cohesion: 0.22
Nodes (8): Content, Design System (`src/styles.css`), Landing cover → open animation, Non-goals / constraints, Prem Patel Portfolio — Dot-Grid Notebook, Routes (file-based), SEO, Shared components (`src/components/notebook/`)

### Community 27 - "Community 27"
Cohesion: 0.14
Nodes (11): FormControl, FormDescription, FormFieldContext, FormFieldContextValue, FormItem, FormItemContext, FormItemContextValue, FormLabel (+3 more)

### Community 28 - "Community 28"
Cohesion: 0.14
Nodes (12): Carousel, CarouselApi, CarouselContent, CarouselContext, CarouselContextProps, CarouselItem, CarouselNext, CarouselOptions (+4 more)

### Community 29 - "Community 29"
Cohesion: 0.27
Nodes (8): consumeLastCapturedError(), renderErrorPage(), fetch(), getServerEntry(), isH3SwallowedErrorBody(), normalizeCatastrophicSsrResponse(), ServerEntry, errorMiddleware

### Community 30 - "Community 30"
Cohesion: 0.15
Nodes (5): Doodle(), Props, SOCIALS, Route, Route

### Community 31 - "Community 31"
Cohesion: 0.40
Nodes (4): Prerequisites (one-time, flag if missing), reflect-premp, Usage, What it does

### Community 32 - "Community 32"
Cohesion: 0.18
Nodes (5): ThemeToggle(), LovableErrorOptions, LovableEvents, reportLovableError(), Window

### Community 33 - "Community 33"
Cohesion: 0.18
Nodes (7): ChartConfig, ChartContainer, ChartContext, ChartContextProps, ChartLegendContent, ChartTooltipContent, THEMES

### Community 34 - "Community 34"
Cohesion: 0.29
Nodes (6): Certifications, Education, Experience, Prem Patel, Skills, Summary

### Community 35 - "Community 35"
Cohesion: 0.22
Nodes (8): Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow

### Community 36 - "Community 36"
Cohesion: 0.20
Nodes (9): ContextMenuCheckboxItem, ContextMenuContent, ContextMenuItem, ContextMenuLabel, ContextMenuRadioItem, ContextMenuSeparator, ContextMenuShortcut(), ContextMenuSubContent (+1 more)

### Community 37 - "Community 37"
Cohesion: 0.50
Nodes (3): AccordionContent, AccordionItem, AccordionTrigger

### Community 38 - "Community 38"
Cohesion: 0.67
Nodes (3): Badge(), BadgeProps, badgeVariants

### Community 39 - "Community 39"
Cohesion: 0.40
Nodes (4): Behavior, Input, Resume Tailoring Skill, Source Materials

### Community 42 - "Community 42"
Cohesion: 0.29
Nodes (6): Environment Variables, How releases work, Local development, premp.in, Repo extras, Stack

### Community 43 - "Community 43"
Cohesion: 0.22
Nodes (8): AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter(), AlertDialogHeader(), AlertDialogOverlay, AlertDialogTitle

### Community 44 - "Community 44"
Cohesion: 0.20
Nodes (9): DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuShortcut(), DropdownMenuSubContent (+1 more)

### Community 45 - "Community 45"
Cohesion: 0.25
Nodes (7): Breadcrumb, BreadcrumbEllipsis(), BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator()

### Community 46 - "Community 46"
Cohesion: 0.25
Nodes (6): DrawerContent, DrawerDescription, DrawerFooter(), DrawerHeader(), DrawerOverlay, DrawerTitle

### Community 47 - "Community 47"
Cohesion: 0.25
Nodes (7): NavigationMenu, NavigationMenuContent, NavigationMenuIndicator, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle, NavigationMenuViewport

### Community 48 - "Community 48"
Cohesion: 0.25
Nodes (7): SelectContent, SelectItem, SelectLabel, SelectScrollDownButton, SelectScrollUpButton, SelectSeparator, SelectTrigger

### Community 49 - "Community 49"
Cohesion: 0.24
Nodes (6): BulletMark(), Props, Route, Item, ITEMS, Route

### Community 50 - "Community 50"
Cohesion: 0.29
Nodes (6): Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle

### Community 51 - "Community 51"
Cohesion: 0.33
Nodes (5): ToggleGroup, ToggleGroupContext, ToggleGroupItem, Toggle, toggleVariants

### Community 52 - "Community 52"
Cohesion: 0.40
Nodes (5): InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot, input-otp

### Community 61 - "Community 61"
Cohesion: 0.18
Nodes (5): NotebookPage(), FEATURED, Project, Route, Route

### Community 62 - "Community 62"
Cohesion: 0.40
Nodes (4): Alert, AlertDescription, AlertTitle, alertVariants

### Community 117 - "Community 117"
Cohesion: 0.50
Nodes (3): Avatar, AvatarFallback, AvatarImage

## Knowledge Gaps
- **386 isolated node(s):** `lovable`, `netlify`, `$schema`, `type`, `url` (+381 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **16 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `cn()` connect `Community 24` to `Hugo Coder Theme Documentation`, `Community 21`, `Community 22`, `Community 23`, `Community 27`, `Community 28`, `Community 33`, `Community 35`, `Community 36`, `Community 37`, `Community 38`, `Community 43`, `Community 44`, `Community 45`, `Community 46`, `Community 47`, `Community 48`, `Community 50`, `Community 51`, `Community 52`, `Community 62`, `Community 105`, `Community 117`?**
  _High betweenness centrality (0.131) - this node is a cross-community bridge._
- **Why does `dependencies` connect `Node & Package Dependencies` to `Community 52`, `Theme Color Scheme Toggle Script`, `Community 63`?**
  _High betweenness centrality (0.106) - this node is a cross-community bridge._
- **Why does `input-otp` connect `Community 52` to `Node & Package Dependencies`?**
  _High betweenness centrality (0.094) - this node is a cross-community bridge._
- **What connects `lovable`, `netlify`, `$schema` to the rest of the system?**
  _386 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Hugo Post Partials & Taxonomies` be split into smaller, more focused modules?**
  _Cohesion score 0.125 - nodes in this community are weakly interconnected._
- **Should `Hugo Coder Theme Documentation` be split into smaller, more focused modules?**
  _Cohesion score 0.05087881591119334 - nodes in this community are weakly interconnected._
- **Should `DOMPurify JS Security Utility` be split into smaller, more focused modules?**
  _Cohesion score 0.125 - nodes in this community are weakly interconnected._