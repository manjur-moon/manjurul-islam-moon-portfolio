import { describe, expect, it } from "vitest";
import { sampleProject } from "@/test/fixtures/project.fixture";
import type { Project } from "@/types/project.types";
import {
  queryProjectCollection,
  searchProjectCollection,
  sortProjectCollection,
} from "@/utils/project.utils";
const backend: Project = {
  ...sampleProject,
  id: "beta",
  slug: "beta-api",
  title: "Beta API",
  category: "backend",
  technologies: ["Node.js"],
  completionDate: "2025-01-01",
  isFeatured: false,
};
describe("project utilities", () => {
  it("searches by title", () =>
    expect(searchProjectCollection([sampleProject, backend], "alpha")).toEqual([
      sampleProject,
    ]));
  it("sorts newest", () =>
    expect(sortProjectCollection([backend, sampleProject], "newest")[0]?.id).toBe(
      "alpha",
    ));
  it("combines filters", () =>
    expect(
      queryProjectCollection([sampleProject, backend], {
        category: "backend",
        search: "node",
      }),
    ).toEqual([backend]));
});
