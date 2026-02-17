/** @type {import('next').NextConfig} */
const nextConfig = {

  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.proximachat.com" }],
        destination: "https://proximachat.com/:path*",
        permanent: true,
      },
    ];
  },  
  images: {
    domains: ["c.animaapp.com"],
  },
};

module.exports = nextConfig;