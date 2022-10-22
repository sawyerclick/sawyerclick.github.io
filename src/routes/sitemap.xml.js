import site from '$lib/data/site.js';

export const GET = async () => {
	const pages = ['whoami'];

	return {
		headers: {
			'Cache-Control': 'max-age=0, s-maxage=3600',
			'Content-Type': 'application/xml'
		},
		body: `<?xml version="1.0" encoding="UTF-8" ?>
    <urlset
      xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
      xmlns:xhtml="https://www.w3.org/1999/xhtml"
      xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
      xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
      xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
    >
      <url>
        <loc>${site.site}</loc>
        <changefreq>monthly</changefreq>
        <priority>0.3</priority>
      </url>
  ${pages
		.map(
			(page) => `
  <url>
    <loc>${site.site}/${page}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.3</priority>
  </url>
  `
		)
		.join('')}
    </urlset>`
	};
};
