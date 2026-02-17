export default function Privacy() {
  return (
    <main style={{ maxWidth: 760, margin: "48px auto", padding: 16 }}>
      <h1>Privacy Policy</h1>
      <p style={{ marginTop: 8 }}>Last updated: [DATE]</p>

      <h2 style={{ marginTop: 20 }}>What this site is</h2>
      <p style={{ lineHeight: 1.6 }}>
        proximachat.com is a marketing website only. It does not host the ProximaChat app.
      </p>

      <h2 style={{ marginTop: 20 }}>Information we collect</h2>
      <p style={{ lineHeight: 1.6 }}>
        If you submit a waitlist or contact form, we collect the information you provide
        (such as your email). We may also collect basic technical data automatically
        (such as IP address and device/browser data) to keep the site secure and reliable.
      </p>

      <h2 style={{ marginTop: 20 }}>How we use information</h2>
      <p style={{ lineHeight: 1.6 }}>
        We use submitted information to respond to requests and notify you about launch
        updates. We use technical data for security, performance, and preventing abuse.
      </p>

      <h2 style={{ marginTop: 20 }}>Third parties</h2>
      <p style={{ lineHeight: 1.6 }}>
        We may use service providers for hosting and forms/payments (e.g., Vercel, email
        provider, payment processor). Those providers process data on our behalf.
      </p>

      <h2 style={{ marginTop: 20 }}>Contact</h2>
      <p style={{ lineHeight: 1.6 }}>
        Questions or deletion requests: support@proximachat.com
      </p>
    </main>
  );
}
