import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

import remarkLinkCard from 'remark-link-card';
import rehypeRaw from 'rehype-raw';
import rehypeExternalLinks from 'rehype-external-links';

export default defineConfig({
  integrations: [icon()],
  server: { port: 3000 },
  markdown: {
    remarkPlugins: [[remarkLinkCard, { shortenUrl: true }]],
    rehypePlugins: [
      rehypeRaw,
      [
        rehypeExternalLinks,
        { target: '_blank', rel: ['noopener', 'noreferrer'] },
      ],
    ],
  },
});
