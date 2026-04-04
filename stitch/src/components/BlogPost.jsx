import { Link, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Navigation from './Navigation';
import Footer from './Footer';
import { getPostBySlug } from '../data/blogPosts';

function formatDate(dateStr) {
  const t = Date.parse(dateStr);
  if (!Number.isFinite(t)) return dateStr;
  return new Date(t).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function BlogPost() {
  const { slug } = useParams();
  const post = slug ? getPostBySlug(slug) : null;

  if (!post) {
    return (
      <>
        <Navigation />
        <main className="max-w-3xl mx-auto px-6 py-16 lg:py-24">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Post not found</h1>
          <p className="text-slate-600 dark:text-slate-400 mb-8">
            There is no article at <span className="font-mono text-sm">/blog/{slug}</span>.
          </p>
          <Link
            to="/blog"
            className="text-primary font-semibold inline-flex items-center gap-1 hover:underline"
          >
            <span className="material-symbols-outlined text-base">arrow_back</span>
            Back to Blog
          </Link>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navigation />
      <main className="max-w-3xl mx-auto px-6 py-12 lg:py-16">
        <Link
          to="/blog"
          className="text-primary text-sm font-semibold inline-flex items-center gap-1 hover:underline mb-10"
        >
          <span className="material-symbols-outlined text-base">arrow_back</span>
          All posts
        </Link>

        <header className="mb-10">
          <h1 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900 dark:text-white mb-3">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-500 dark:text-slate-400">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            {post.tags?.length > 0 && (
              <span className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </span>
            )}
          </div>
        </header>

        <article
          className="prose prose-slate dark:prose-invert max-w-none prose-headings:scroll-mt-24
            prose-pre:bg-slate-900 prose-pre:text-slate-100 dark:prose-pre:bg-slate-950"
        >
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
        </article>
      </main>
      <Footer />
    </>
  );
}
