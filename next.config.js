module.exports = {
  env: {
    SERVER_API: 'https://climbing-touched-earwig.ngrok-free.app//torcah/api/v1/',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.wikia.nocookie.net',
        port: '',
        pathname: '/p__/**',
      },
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com',
        port: '',
        pathname: '/images/**',
      },
    ],
  },
}