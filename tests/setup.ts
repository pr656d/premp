import { afterEach } from "vitest";
import { cleanup } from "@testing-library/react";

// jsdom has no matchMedia. Report reduced motion so page turns and the cover
// navigate immediately instead of waiting on animation timers.
window.matchMedia = (query: string) =>
  ({
    matches: query.includes("prefers-reduced-motion"),
    media: query,
    onchange: null,
    addEventListener: () => {},
    removeEventListener: () => {},
    addListener: () => {},
    removeListener: () => {},
    dispatchEvent: () => false,
  }) as MediaQueryList;

afterEach(() => {
  cleanup();
  sessionStorage.clear();
});

// jsdom has no element scrolling; pages reset scroll on navigation.
Element.prototype.scrollTo = () => {};
window.scrollTo = () => {};
