// import type { RequestHandler } from './$types'; // Reverted type import for now

// Adjust this base URL to your production environment
const siteUrl = 'https://www.robolearn.ai';

// List of static pages (add any new top-level routes here)
const staticPages = [
  '/',
  '/waitlist',
  '/safety',
  '/support',
  '/terms',
  '/pricing',
  '/privacy',
  '/blog',
  '/docs',
  '/for-parents',
  '/features',
  '/how-it-works',
  '/about'
];

// You might need to fetch dynamic routes (e.g., blog posts) here in a real app
// const dynamicPages = await fetchDynamicBlogPosts(); 

// Using general type for RequestHandler
export const GET = async (): Promise<Response> => {
  const headers = {
    'Cache-Control': 'max-age=0, s-maxage=3600', // Cache for 1 hour
    'Content-Type': 'application/xml'
  };

  const sitemapEntries = staticPages.map(page => `
    <url>
      <loc>${siteUrl}${page}</loc>
      <lastmod>${new Date().toISOString().split('T')[0]}</lastmod> 
      <changefreq>weekly</changefreq> 
      <priority>${page === '/' ? '1.0' : '0.7'}</priority> 
    </url>`).join('');

  // Add dynamic page entries here if applicable

  const sitemap = `<?xml version=\"1.0\" encoding=\"UTF-8\" ?>
<urlset
  xmlns=\"https://www.sitemaps.org/schemas/sitemap/0.9\"
  xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"
  xsi:schemaLocation=\"https://www.sitemaps.org/schemas/sitemap/0.9 https://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd\">
  ${sitemapEntries}
</urlset>`;

  return new Response(sitemap, { headers });
};

// Ensure this endpoint is prerendered if your site is fully static
// export const prerender = true; 
// Note: Prerendering might conflict with fetching dynamic routes at build time.
// If you have dynamic content, keep prerender=false (default) or implement fetching logic carefully. 