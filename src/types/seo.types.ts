export type OpenGraphType = "website" | "article";
export type RobotsDirective = "index, follow" | "noindex, nofollow";

export interface SeoConfig {
  readonly title: string;
  readonly description: string;
  readonly canonicalPath: string;
  readonly imagePath?: string;
  readonly imageAlt?: string;
  readonly type?: OpenGraphType;
  readonly robots?: RobotsDirective;
}

export type StructuredData = Record<string, unknown>;
