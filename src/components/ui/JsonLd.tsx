/**
 * Renders a JSON-LD structured-data block. Accepts one object or an array.
 * Uses a script tag with dangerouslySetInnerHTML — the input comes only from
 * our own lib/jsonld builders, never user content.
 */
export function JsonLd({ data }: { data: object | object[] }) {
  const payload = Array.isArray(data) ? data : [data];
  return (
    <>
      {payload.map((item, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
    </>
  );
}
