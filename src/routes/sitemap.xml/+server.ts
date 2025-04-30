import type { RequestHandler } from '@sveltejs/kit';

// Adjust this base URL to your production environment
const BASE_URL = 'https://buddybotlearning.com';

const pages = [
  {
    path: '/',
    priority: 1.0,
    changefreq: 'daily'
  },
  {
    path: '/about',
    priority: 0.8,
    changefreq: 'weekly'
  },
  {
    path: '/features',
    priority: 0.9,
    changefreq: 'weekly'
  },
  {
    path: '/how-it-works',
    priority: 0.9,
    changefreq: 'weekly'
  },
  {
    path: '/waitlist',
    priority: 1.0,
    changefreq: 'daily'
  },
  {
    path: '/privacy',
    priority: 0.6,
    changefreq: 'monthly'
  },
  {
    path: '/terms',
    priority: 0.6,
    changefreq: 'monthly'
  },
  {
    path: '/safety',
    priority: 0.7,
    changefreq: 'monthly'
  },
  {
    path: '/faq',
    priority: 0.8,
    changefreq: 'weekly'
  }
];

// You might need to fetch dynamic routes (e.g., blog posts) here in a real app
// const dynamicPages = await fetchDynamicBlogPosts(); 

// Using general type for RequestHandler
export const GET: RequestHandler = async () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .map(
      (page) => `
    <url>
      <loc>${BASE_URL}${page.path}</loc>
      <changefreq>${page.changefreq}</changefreq>
      <priority>${page.priority}</priority>
      <lastmod>${new Date().toISOString()}</lastmod>
    </url>
  `
    )
    .join('')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600'
    }
  });
};

// Ensure this endpoint is prerendered if your site is fully static
// export const prerender = true; 
// Note: Prerendering might conflict with fetching dynamic routes at build time.
// If you have dynamic content, keep prerender=false (default) or implement fetching logic carefully. 