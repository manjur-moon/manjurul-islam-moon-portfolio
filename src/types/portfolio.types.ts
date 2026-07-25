export type ContentStatus = "draft" | "published";
export type IsoDateString = string;

export interface DateRange {
  readonly start: IsoDateString | null;
  readonly end: IsoDateString | null;
  readonly isCurrent: boolean;
}

export interface ImageAsset {
  readonly src: string;
  readonly alt: string;
  readonly width: number;
  readonly height: number;
  readonly srcSet?: string;
  readonly sizes?: string;
}
