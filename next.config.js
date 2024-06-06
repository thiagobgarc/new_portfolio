/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental:
        {serverActions: true,},
        typescript: {
            // !! WARN !!
            // Dangerously allow production builds to successfully complete even if
            // your project has type errors.
            // !! WARN !!
            ignoreBuildErrors: true,
          },
          experimental: {
            serverActions: true,
          },
          env: {
            RESEND_API_KEY: process.env.RESEND_API_KEY,
          },
}

module.exports = nextConfig
