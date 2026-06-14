import { test, expect, vi } from "vitest";
import { render } from "@testing-library/react";
import App from "./App";

// PhotoSwipe needs browser APIs not available in jsdom
vi.mock("react-photoswipe-gallery", () => ({
  Gallery: ({ children }: { children: React.ReactNode }) => <>{children}</>,
  Item: ({ children }: { children: (props: { ref: React.Ref<HTMLElement>; open: () => void }) => React.ReactNode }) =>
    <>{children({ ref: null, open: () => {} })}</>,
}));

test("renders without crashing", () => {
  render(<App />);
  expect(document.body.firstChild).not.toBeNull();
});
