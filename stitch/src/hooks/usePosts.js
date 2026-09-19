import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

export function usePosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase
      .from('posts')
      .select('*')
      .order('created_at', { ascending: false })
      .then(({ data, error }) => {
        if (!error && data) setPosts(data);
        setLoading(false);
      });
  }, []);

  return { posts, loading };
}

export function usePost(slug) {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) {
      setLoading(false);
      return;
    }
    supabase
      .from('posts')
      .select('*')
      .eq('slug', slug)
      .single()
      .then(({ data, error }) => {
        if (!error && data) setPost(data);
        setLoading(false);
      });
  }, [slug]);

  async function incrementLikes() {
    if (!post) return;
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
