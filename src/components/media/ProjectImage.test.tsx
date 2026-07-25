import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ProjectImage } from "@/components/media/ProjectImage";
describe("ProjectImage", () => {
  it("uses fallback after an error", () => {
    render(
      <ProjectImage
        src="/missing.webp"
        alt="Missing preview"
        width={1280}
        height={720}
      />,
    );
    const image = screen.getByRole("img", { name: "Missing preview" });
    fireEvent.error(image);
    expect(image).toHaveAttribute(
      "src",
      "/images/projects/fallback/project-fallback.svg",
    );
  });
});
