import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { sampleProject } from "@/test/fixtures/project.fixture";
import { renderWithRouter } from "@/test/render-with-router";
describe("ProjectCard", () => {
  it("renders details link", () => {
    renderWithRouter(<ProjectCard project={sampleProject} />);
    expect(screen.getByRole("link", { name: "View details" })).toHaveAttribute(
      "href",
      "/projects/alpha-dashboard",
    );
  });
});
