import { ImageResponse } from "next/og";
import { site } from "@/content/site";

// Branded default social-share image, generated at build. Applied site-wide via
// the Next file convention unless a route sets its own openGraph.images.
export const runtime = "edge";
export const alt = `${site.name} — Construction Bidding & Estimating`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0A1226",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Ruled columns */}
        <div style={{ position: "absolute", inset: 0, display: "flex", justifyContent: "space-between", padding: "0 72px" }}>
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} style={{ width: 1, height: "100%", background: "rgba(255,255,255,0.05)" }} />
          ))}
        </div>

        {/* Brand row */}
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 14,
              background: "#C8A951",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 40,
              fontWeight: 800,
              color: "#0A1226",
            }}
          >
            N
          </div>
          <div style={{ display: "flex", fontSize: 30, fontWeight: 700, color: "#E3E6EC" }}>
            Noble <span style={{ color: "#C8A951", marginLeft: 8 }}>Bidding</span>
          </div>
        </div>

        {/* Headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              fontSize: 40,
              textTransform: "uppercase",
              letterSpacing: 6,
              color: "#C8A951",
              fontWeight: 600,
            }}
          >
            Construction Bidding Specialists
          </div>
          <div style={{ fontSize: 72, fontWeight: 800, color: "#FFFFFF", lineHeight: 1.05, maxWidth: 920 }}>
            Bid-ready estimates in 24 to 48 hours
          </div>
        </div>

        {/* Footer */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 26, color: "#8A94A8" }}>
          <div style={{ display: "flex" }}>{site.domain}</div>
          <div style={{ display: "flex" }}>Estimating · Takeoffs · Bid Packages</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
