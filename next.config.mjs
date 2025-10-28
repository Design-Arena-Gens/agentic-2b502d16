const nextConfig = {
  reactStrictMode: true,
  experimental: {
    typedRoutes: true,
    serverActions: {
      bodySizeLimit: '1mb'
    }
  },
  images: {
    formats: ['image/avif', 'image/webp']
  }
};

export default nextConfig;
