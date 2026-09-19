import { useState, useEffect, useCallback } from 'react';
import { supabase } from '../lib/supabase';

export function usePhotos() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!supabase) { setLoading(false); return; }
    supabase
      .from('photos')
      .select('*')
      .order('created_at', { ascending: false })
      .then(({ data, error }) => {
        if (!error && data) setPhotos(data);
        setLoading(false);
      });
  }, []);

  const addLike = useCallback(async (photoId) => {
    if (!supabase) return;
    const photo = photos.find((p) => p.id === photoId);
    if (!photo) return;
    const newCount = (photo.likes || 0) + 1;
    const { error } = await supabase
      .from('photos')
      .update({ likes: newCount })
      .eq('id', photoId);
    if (!error) {
      setPhotos((prev) =>
        prev.map((p) => (p.id === photoId ? { ...p, likes: newCount } : p))
      );
    }
  }, [photos]);

  return { photos, loading, addLike };
}
