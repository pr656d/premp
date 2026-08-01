# Graph Report - .  (2026-08-01)

## Corpus Check
- 104 files · ~32,276 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 724 nodes · 853 edges · 121 communities (104 shown, 17 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 5|Community 5]]
- [[_COMMUNITY_Community 6|Community 6]]
- [[_COMMUNITY_Community 7|Community 7]]
- [[_COMMUNITY_Community 8|Community 8]]
- [[_COMMUNITY_Community 9|Community 9]]
- [[_COMMUNITY_Community 10|Community 10]]
- [[_COMMUNITY_Community 12|Community 12]]
- [[_COMMUNITY_Community 13|Community 13]]
- [[_COMMUNITY_Community 14|Community 14]]
- [[_COMMUNITY_Community 15|Community 15]]
- [[_COMMUNITY_Community 16|Community 16]]
- [[_COMMUNITY_Community 17|Community 17]]
- [[_COMMUNITY_Community 18|Community 18]]
- [[_COMMUNITY_Community 19|Community 19]]
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
- [[_COMMUNITY_Community 40|Community 40]]
- [[_COMMUNITY_Community 41|Community 41]]
- [[_COMMUNITY_Community 42|Community 42]]
- [[_COMMUNITY_Community 43|Community 43]]
- [[_COMMUNITY_Community 44|Community 44]]
- [[_COMMUNITY_Community 45|Community 45]]
- [[_COMMUNITY_Community 46|Community 46]]
- [[_COMMUNITY_Community 48|Community 48]]
- [[_COMMUNITY_Community 49|Community 49]]
- [[_COMMUNITY_Community 50|Community 50]]
- [[_COMMUNITY_Community 51|Community 51]]
- [[_COMMUNITY_Community 52|Community 52]]
- [[_COMMUNITY_Community 53|Community 53]]
- [[_COMMUNITY_Community 57|Community 57]]
- [[_COMMUNITY_Community 58|Community 58]]
- [[_COMMUNITY_Community 59|Community 59]]
- [[_COMMUNITY_Community 60|Community 60]]
- [[_COMMUNITY_Community 62|Community 62]]
- [[_COMMUNITY_Community 64|Community 64]]
- [[_COMMUNITY_Community 68|Community 68]]
- [[_COMMUNITY_Community 69|Community 69]]
- [[_COMMUNITY_Community 70|Community 70]]
- [[_COMMUNITY_Community 71|Community 71]]
- [[_COMMUNITY_Community 78|Community 78]]
- [[_COMMUNITY_Community 119|Community 119]]

## God Nodes (most connected - your core abstractions)
1. `cn()` - 69 edges
2. `compilerOptions` - 17 edges
3. `FileRoutesByPath` - 12 edges
4. `NotebookPage()` - 9 edges
5. `Doodle()` - 8 edges
6. `scripts` - 7 edges
7. `aliases` - 6 edges
8. `buttonVariants` - 6 edges
9. `website-redesign-brief.md document` - 6 edges
10. `tailwind` - 5 edges

## Surprising Connections (you probably didn't know these)
- `AlertDialogHeader()` --calls--> `cn()`  [EXTRACTED]
  src/components/ui/alert-dialog.tsx → src/lib/utils.ts
- `AlertDialogFooter()` --calls--> `cn()`  [EXTRACTED]
  src/components/ui/alert-dialog.tsx → src/lib/utils.ts
- `BreadcrumbSeparator()` --calls--> `cn()`  [EXTRACTED]
  src/components/ui/breadcrumb.tsx → src/lib/utils.ts
- `BreadcrumbEllipsis()` --calls--> `cn()`  [EXTRACTED]
  src/components/ui/breadcrumb.tsx → src/lib/utils.ts
- `CalendarDayButton()` --calls--> `cn()`  [EXTRACTED]
  src/components/ui/calendar.tsx → src/lib/utils.ts

## Import Cycles
- 1-file cycle: `src/components/ui/input-otp.tsx -> src/components/ui/input-otp.tsx`
- 1-file cycle: `src/components/ui/sonner.tsx -> src/components/ui/sonner.tsx`

## Communities (121 total, 17 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.06
Nodes (27): Doodle(), Props, IndexContent(), Props, NotebookPage(), Props, StaticPageSurface, NotebookSurface (+19 more)

### Community 1 - "Community 1"
Cohesion: 0.04
Nodes (52): dependencies, class-variance-authority, clsx, cmdk, date-fns, embla-carousel-react, @hookform/resolvers, lucide-react (+44 more)

### Community 2 - "Community 2"
Cohesion: 0.06
Nodes (36): BulletMark(), Props, getRouter(), Route, Item, ITEMS, Route, Route (+28 more)

### Community 3 - "Community 3"
Cohesion: 0.05
Nodes (39): Input, Separator, SheetContent, SheetContentProps, SheetDescription, SheetFooter(), SheetHeader(), SheetOverlay (+31 more)

### Community 4 - "Community 4"
Cohesion: 0.07
Nodes (29): devDependencies, eslint, eslint-config-prettier, @eslint/js, eslint-plugin-prettier, eslint-plugin-react-hooks, eslint-plugin-react-refresh, globals (+21 more)

### Community 5 - "Community 5"
Cohesion: 0.08
Nodes (14): AccordionContent, AccordionItem, AccordionTrigger, Checkbox, HoverCardContent, PopoverContent, Progress, RadioGroup (+6 more)

### Community 6 - "Community 6"
Cohesion: 0.10
Nodes (19): compilerOptions, allowImportingTsExtensions, jsx, lib, module, moduleResolution, noEmit, noFallthroughCasesInSwitch (+11 more)

### Community 7 - "Community 7"
Cohesion: 0.11
Nodes (18): aliases, components, hooks, lib, ui, utils, iconLibrary, registries (+10 more)

### Community 8 - "Community 8"
Cohesion: 0.15
Nodes (14): AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter(), AlertDialogHeader(), AlertDialogOverlay, AlertDialogTitle (+6 more)

### Community 9 - "Community 9"
Cohesion: 0.12
Nodes (14): Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut() (+6 more)

### Community 10 - "Community 10"
Cohesion: 0.12
Nodes (11): Menubar, MenubarCheckboxItem, MenubarContent, MenubarItem, MenubarLabel, MenubarRadioItem, MenubarSeparator, MenubarShortcut() (+3 more)

### Community 12 - "Community 12"
Cohesion: 0.14
Nodes (11): FormControl, FormDescription, FormFieldContext, FormFieldContextValue, FormItem, FormItemContext, FormItemContextValue, FormLabel (+3 more)

### Community 13 - "Community 13"
Cohesion: 0.14
Nodes (12): Carousel, CarouselApi, CarouselContent, CarouselContext, CarouselContextProps, CarouselItem, CarouselNext, CarouselOptions (+4 more)

### Community 14 - "Community 14"
Cohesion: 0.18
Nodes (5): ThemeToggle(), LovableErrorOptions, LovableEvents, reportLovableError(), Window

### Community 15 - "Community 15"
Cohesion: 0.27
Nodes (8): consumeLastCapturedError(), renderErrorPage(), fetch(), getServerEntry(), isH3SwallowedErrorBody(), normalizeCatastrophicSsrResponse(), ServerEntry, errorMiddleware

### Community 16 - "Community 16"
Cohesion: 0.26
Nodes (10): Pagination(), PaginationContent, PaginationEllipsis(), PaginationItem, PaginationLinkProps, PaginationNext(), PaginationPrevious(), ResizableHandle() (+2 more)

### Community 17 - "Community 17"
Cohesion: 0.18
Nodes (7): ChartConfig, ChartContainer, ChartContext, ChartContextProps, ChartLegendContent, ChartTooltipContent, THEMES

### Community 18 - "Community 18"
Cohesion: 0.20
Nodes (9): ContextMenuCheckboxItem, ContextMenuContent, ContextMenuItem, ContextMenuLabel, ContextMenuRadioItem, ContextMenuSeparator, ContextMenuShortcut(), ContextMenuSubContent (+1 more)

### Community 19 - "Community 19"
Cohesion: 0.20
Nodes (9): DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuShortcut(), DropdownMenuSubContent (+1 more)

### Community 21 - "Community 21"
Cohesion: 0.22
Nodes (8): enabled, type, url, mcp, lovable, $schema, skills, paths

### Community 22 - "Community 22"
Cohesion: 0.22
Nodes (8): Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow

### Community 23 - "Community 23"
Cohesion: 0.25
Nodes (7): Breadcrumb, BreadcrumbEllipsis(), BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator()

### Community 24 - "Community 24"
Cohesion: 0.25
Nodes (6): DrawerContent, DrawerDescription, DrawerFooter(), DrawerHeader(), DrawerOverlay, DrawerTitle

### Community 25 - "Community 25"
Cohesion: 0.25
Nodes (7): NavigationMenu, NavigationMenuContent, NavigationMenuIndicator, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle, NavigationMenuViewport

### Community 26 - "Community 26"
Cohesion: 0.25
Nodes (7): SelectContent, SelectItem, SelectLabel, SelectScrollDownButton, SelectScrollUpButton, SelectSeparator, SelectTrigger

### Community 27 - "Community 27"
Cohesion: 0.29
Nodes (6): Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle

### Community 28 - "Community 28"
Cohesion: 0.33
Nodes (5): ToggleGroup, ToggleGroupContext, ToggleGroupItem, Toggle, toggleVariants

### Community 29 - "Community 29"
Cohesion: 0.33
Nodes (6): Design System (`src/styles.css`), Landing cover → open animation, plan.md document, Prem Patel Portfolio — Dot-Grid Notebook, Routes (file-based), Shared components (`src/components/notebook/`)

### Community 30 - "Community 30"
Cohesion: 0.33
Nodes (6): about-me.md document, Experience, Lead Engineer, Prem Patel, Professional Summary, Simform

### Community 31 - "Community 31"
Cohesion: 0.33
Nodes (6): AGENTS.md document, Copy rules (hard requirements, from Prem), Current State: Notebook Site LIVE (since 2026-07-17), Premp Website Configuration, Release flow (Lovable → preview → production), Resume system

### Community 32 - "Community 32"
Cohesion: 0.33
Nodes (6): CLAUDE.md document, Copy rules (hard requirements, from Prem), Current State: Notebook Site LIVE (since 2026-07-17), Premp Website Configuration, Release flow (Lovable → preview → production), Resume system

### Community 33 - "Community 33"
Cohesion: 0.40
Nodes (5): input-otp, InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot

### Community 34 - "Community 34"
Cohesion: 0.33
Nodes (6): Environment Variables, How releases work, Local development, premp.in, README.md document, Stack

### Community 35 - "Community 35"
Cohesion: 0.33
Nodes (6): default-resume.md document, Experience, Open Source & Side Projects, Prem Patel, Skills, Summary

### Community 36 - "Community 36"
Cohesion: 0.40
Nodes (5): Prerequisites (one-time, flag if missing), reflect-premp, SKILL.md document, Usage, What it does

### Community 37 - "Community 37"
Cohesion: 0.40
Nodes (5): Behavior, Input, Resume Tailoring Skill, SKILL.md document, Source Materials

### Community 38 - "Community 38"
Cohesion: 0.40
Nodes (5): Prerequisites (one-time, flag if missing), reflect-premp, SKILL.md document, Usage, What it does

### Community 39 - "Community 39"
Cohesion: 0.40
Nodes (5): Behavior, Input, Resume Tailoring Skill, SKILL.md document, Source Materials

### Community 40 - "Community 40"
Cohesion: 0.50
Nodes (5): 1. Content Inventory, About Me, Experience Timeline, Hero / Introduction, website-redesign-brief.md document

### Community 41 - "Community 41"
Cohesion: 0.40
Nodes (5): About Prem, Current open-source and builder work, llms.txt document, Prem Patel, Site sections

### Community 42 - "Community 42"
Cohesion: 0.40
Nodes (4): Alert, AlertDescription, AlertTitle, alertVariants

### Community 44 - "Community 44"
Cohesion: 0.50
Nodes (3): Avatar, AvatarFallback, AvatarImage

### Community 45 - "Community 45"
Cohesion: 0.67
Nodes (3): Badge(), BadgeProps, badgeVariants

### Community 46 - "Community 46"
Cohesion: 0.50
Nodes (3): TabsContent, TabsList, TabsTrigger

### Community 48 - "Community 48"
Cohesion: 0.67
Nodes (3): AI-readable site summary: https://premp.in/llms.txt, Public site: allow search, AI search, user-directed fetchers, and training crawlers., robots.txt document

### Community 50 - "Community 50"
Cohesion: 0.67
Nodes (3): Conventions, README.md document, Routes

## Knowledge Gaps
- **399 isolated node(s):** `16:02 | crew/cad18-pageturn-lovable-20260718-154311`, `15:59 | crew/cad18-pageturn-lovable-20260718-154311`, `about.en`, `experience.en`, `now.en` (+394 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **17 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `cn()` connect `Community 16` to `Community 3`, `Community 5`, `Community 8`, `Community 9`, `Community 10`, `Community 12`, `Community 13`, `Community 17`, `Community 18`, `Community 19`, `Community 22`, `Community 23`, `Community 24`, `Community 25`, `Community 26`, `Community 27`, `Community 28`, `Community 33`, `Community 42`, `Community 44`, `Community 45`, `Community 46`?**
  _High betweenness centrality (0.125) - this node is a cross-community bridge._
- **Why does `dependencies` connect `Community 1` to `Community 33`, `Community 43`, `Community 4`?**
  _High betweenness centrality (0.101) - this node is a cross-community bridge._
- **Why does `input-otp` connect `Community 33` to `Community 1`?**
  _High betweenness centrality (0.090) - this node is a cross-community bridge._
- **What connects `16:02 | crew/cad18-pageturn-lovable-20260718-154311`, `15:59 | crew/cad18-pageturn-lovable-20260718-154311`, `about.en` to the rest of the system?**
  _399 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.0633879781420765 - nodes in this community are weakly interconnected._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.038461538461538464 - nodes in this community are weakly interconnected._
- **Should `Community 2` be split into smaller, more focused modules?**
  _Cohesion score 0.05952380952380952 - nodes in this community are weakly interconnected._