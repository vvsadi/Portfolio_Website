import matter from 'gray-matter';

const rawModules = import.meta.glob('../assets/blog_posts/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
});

function basename(path) {
  const parts = path.replace(/\\/g, '/').split('/');
  return parts[parts.length - 1] ?? '';
}

const IGNORED_FILES = new Set(['instructions.md']);

function parsePost(filePath, raw) {
  const file = basename(filePath);
  if (file.startsWith('_')) return null;
  if (IGNORED_FILES.has(file.toLowerCase())) return null;

  const { data, content } = matter(raw);
  if (data.draft === true) return null;

  const slug =
    typeof data.slug === 'string' && data.slug.trim()
      ? data.slug.trim()
      : file.replace(/\.md$/i, '');

  return {
    title: data.title ?? 'Untitled',
    date: data.date ?? '',
    slug,
    excerpt: data.excerpt ?? '',
    tags: Array.isArray(data.tags) ? data.tags : [],
    content: content.trim(),
  };
}

const postsCache = (() => {
  const list = [];
  for (const [path, raw] of Object.entries(rawModules)) {
    const post = parsePost(path, raw);
    if (post) list.push(post);
  }
  list.sort((a, b) => {
    const ta = Date.parse(a.date);
    const tb = Date.parse(b.date);
    const da = Number.isFinite(ta) ? ta : 0;
    const db = Number.isFinite(tb) ? tb : 0;
    return db - da;
  });
  return list;
})();

export function getAllPosts() {
  return postsCache;
}

export function getPostBySlug(slug) {
  return postsCache.find((p) => p.slug === slug) ?? null;
}
