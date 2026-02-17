export default function Donate() {
  return (
    <main style={{ maxWidth: 760, margin: "48px auto", padding: 16 }}>
      <h1>Donate</h1>
      <p style={{ marginTop: 12, lineHeight: 1.6 }}>
        Donations help cover hosting, development, and moderation costs.
      </p>

      <a
        href="REPLACE_WITH_YOUR_STRIPE_OR_PAYPAL_LINK"
        style={{
          display: "inline-block",
          marginTop: 16,
          padding: "12px 16px",
          border: "1px solid #ccc",
          borderRadius: 10,
          textDecoration: "none",
        }}
      >
        Donate
      </a>
    </main>
  );
}
