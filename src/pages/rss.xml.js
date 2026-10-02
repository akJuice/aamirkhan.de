import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
export async function GET(context) {
  const posts = await getCollection('blog', p => !p.data.draft);
  return rss({ title: 'Aamir Khan', description: 'Writing on AI, product delivery, and life by Aamir Khan', site: context.site,
    items: posts.map(p => ({ title: p.data.title, description: p.data.description, pubDate: p.data.date, link: p.data.externalUrl ?? `/blog/${p.id}/` })) });
}
