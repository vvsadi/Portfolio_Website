import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

export function usePosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!supabase) { setLoading(false); return; }
    supabase
      .from('posts')
      .select('*')
      .order('created_at', { ascending: false })
      .then(({ data, error }) => {
        if (error) console.error('usePosts error:', error);
        if (!error && data) setPosts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('usePosts catch:', err);
        setLoading(false);
      });
  }, []);

  return { posts, loading };
}

export function usePost(slug) {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug || !supabase) {
      setLoading(false);
      return;
    }
    supabase
      .from('posts')
      .select('*')
      .eq('slug', slug)
      .single()
      .then(({ data, error }) => {
        if (error) console.error('usePost error:', error);
        if (!error && data) setPost(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('usePost catch:', err);
        setLoading(false);
      });
  }, [slug]);

  async function incrementLikes() {
    if (!post || !supabase) return;
    const { data } = await supabase
      .from('posts')
      .update({ likes: post.likes + 1 })
      .eq('id', post.id)
      .select()
      .single();
    if (data) setPost(data);
  }

  return { post, loading, incrementLikes };
}
