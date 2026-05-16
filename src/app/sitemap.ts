import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.peehudekamakeupstudioandacademy.com';
  const currentDate = new Date();

  return [
    {
      url: `${baseUrl}/`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
      images: [
        'https://asffo800kc6xioqb.public.blob.vercel-storage.com/u65hdcauburo6s9pktzl.webp'
      ],
    },
    {
      url: `${baseUrl}/courses/`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.95,
      images: [
        'https://asffo800kc6xioqb.public.blob.vercel-storage.com/k2fd3rinaaasathxjvuv.webp',
        'https://asffo800kc6xioqb.public.blob.vercel-storage.com/709B79A6-F684-4A11-A6BF-EF286AE1B4CC.jpg',
        'https://asffo800kc6xioqb.public.blob.vercel-storage.com/canvos6xq0jhkftnccvp.webp'
      ],
    },
    {
      url: `${baseUrl}/portfolio/`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
      images: [
        'https://asffo800kc6xioqb.public.blob.vercel-storage.com/08C087E8-179D-49AD-AD02-10FAA16A8346.jpg',
        'https://asffo800kc6xioqb.public.blob.vercel-storage.com/52040396-70A8-40B6-A807-8CEF0D498AF5.jpg',
        'https://asffo800kc6xioqb.public.blob.vercel-storage.com/949FA1C8-DB70-4C85-B6FD-11FFAA7469F1.jpg'
      ],
    },
    {
      url: `${baseUrl}/admissions/`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/about/`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
      images: [
        'https://asffo800kc6xioqb.public.blob.vercel-storage.com/Peehu%E2%80%99s%20single%20photos%20%281%29.jpg'
      ]
    },
    {
      url: `${baseUrl}/contact/`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ];
}
