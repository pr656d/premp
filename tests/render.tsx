import { render } from "@testing-library/react";
import { createMemoryHistory, createRouter, RouterProvider } from "@tanstack/react-router";
import { QueryClient } from "@tanstack/react-query";
import { routeTree } from "@/routeTree.gen";

/** Render the real app router at `path`, the way a visitor lands on it. */
export async function renderAt(path: string) {
  const router = createRouter({
    routeTree,
    context: { queryClient: new QueryClient() },
    history: createMemoryHistory({ initialEntries: [path] }),
  });
  await router.load();
  const view = render(<RouterProvider router={router} />);
  return { router, ...view };
}

export function newRouter() {
  return createRouter({ routeTree, context: { queryClient: new QueryClient() } });
}
