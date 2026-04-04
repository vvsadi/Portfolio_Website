import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';
import { getAllPosts } from '../data/blogPosts';

function formatDate(dateStr) {
  const t = Date.parse(dateStr);
  if (!Number.isFinite(t)) return dateStr;
  return new Date(t).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

export default function Blog() {
  const posts = getAllPosts();

  return (
    <>
      <Navigation />
      <main className="max-w-6xl mx-auto px-6 py-12 lg:py-20">
        <div className="mb-12 text-center md:text-left">
          <div className="size-16 md:size-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto md:mx-0 mb-6">
            <span className="material-symbols-outlined text-primary text-3xl md:text-4xl">history_edu</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
            Blog
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mt-4 mx-auto md:mx-0">
            Experiences, learnings, and thoughts on various topics.
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="p-8 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl shadow-sm text-center">
            <h2 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">No posts yet</h2>
            <p className="text-slate-500">Add Markdown files to <code className="text-sm bg-slate-100 dark:bg-slate-800 px-1 rounded">src/assets/blog_posts/</code>.</p>
          </div>
        ) : (
          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link
                  to={`/blog/${post.slug}`}
                  className="group block h-full p-6 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl shadow-sm hover:shadow-md hover:border-primary/20 transition-all"
                >
                  <time
                    className="text-xs font-semibold text-primary uppercase tracking-wider"
                    dateTime={post.date}
                  >
                    {formatDate(post.date)}
                  </time>
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  {post.excerpt ? (
                    <p className="text-slate-600 dark:text-slate-400 text-sm mt-3 line-clamp-3">
                      {post.excerpt}
                    </p>
                  ) : null}
                  <span className="inline-flex items-center gap-1 mt-4 text-sm font-semibold text-primary">
                    Read post
                    <span className="material-symbols-outlined text-base group-hover:translate-x-0.5 transition-transform">
                      arrow_forward
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </main>
      <Footer />
    </>
  );
}
