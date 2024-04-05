export default function sitemap() {
  return [
    {
      url: 'https://torcah.com',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://torcah.com/authentication/login',
      lastModified: new Date(),
      changeFrequency: 'never',
      priority: 0.8,
    },
    {
      url: 'https://torcah.com/authentication/signin',
      lastModified: new Date(),
      changeFrequency: 'never',
      priority: 0.8,
    },
    {
      url: 'https://torcah.com/home',
      lastModified: new Date(),
      changeFrequency: 'always',
      priority: 0.9,
    },

    {
      url: 'https://torcah.com/not-found',
      lastModified: new Date(),
      changeFrequency: 'never',
      priority: 0.8,
    },
  ]
}