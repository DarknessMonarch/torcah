export default function manifest() {
    return {
      name: 'Torcah',
      short_name: 'Torcah',
      description: 'Streamline Your Delivery, Car Sales, and House Transactions for Seamless Experiences',
      start_url: '/',
      display: 'standalone',
      background_color: '#fff',
      theme_color: '#fff',
      icons: [
        {
          src: '/favicon.ico',
          sizes: 'any',
          type: 'image/x-icon',
        },
      ],
    }
  }