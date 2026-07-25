import type { StructuredData } from "@/types/seo.types";
export function SeoJsonLd({
  data,
}: {
  readonly data: StructuredData | readonly StructuredData[];
}): React.JSX.Element {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
