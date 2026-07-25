import { render } from "@testing-library/react";
import type { RenderResult } from "@testing-library/react";
import type { ReactElement, ReactNode } from "react";
import { MemoryRouter } from "react-router-dom";
export const renderWithRouter = (
  element: ReactElement,
  initialEntries: readonly string[] = ["/"],
): RenderResult =>
  render(element, {
    wrapper: ({ children }: { readonly children: ReactNode }) => (
      <MemoryRouter initialEntries={[...initialEntries]}>{children}</MemoryRouter>
    ),
  });
