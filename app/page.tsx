import Image from "next/image";

export default function Home() {
  return (
    <main style={{ maxWidth: 900, margin: "48px auto", padding: 16 }}>
      <h1 style={{ fontSize: 40, marginBottom: 8 }}>ProximaChat</h1>
      <p style={{ fontSize: 18, lineHeight: 1.5 }}>
        A location-based, anonymous campus chat experience. Launching soon.
      </p>

      <div style={{ marginTop: 24, display: "flex", gap: 12, flexWrap: "wrap" }}>
        <a href="/about">About</a>
        <a href="/privacy">Privacy</a>
        <a href="/terms">Terms</a>
        <a href="/donate">Donate</a>
      </div>

      <hr style={{ margin: "32px 0" }} />

      <h2 style={{ fontSize: 24, marginBottom: 8 }}>Join the waitlist</h2>
      <p>Drop your email and we’ll notify you when we open access.</p>

    </main>
  );
}
