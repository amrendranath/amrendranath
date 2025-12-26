import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Amrendra Nath - Lead Consultant";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background:
            "linear-gradient(to bottom right, #0f172a, #1e3a8a, #0f172a)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
        }}
      >
        <div style={{ fontSize: 80, fontWeight: "bold", marginBottom: 20 }}>
          Amrendra Nath
        </div>
        <div
          style={{
            fontSize: 48,
            background: "linear-gradient(to right, #3b82f6, #8b5cf6, #06b6d4)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          Lead Consultant
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
