import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

const isConfigured = supabaseUrl.startsWith('http');

if (!isConfigured) {
  console.warn('Supabase credentials missing — check VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY');
}

export const supabase = isConfigured
  ? createClient(supabaseUrl, supabaseKey)
  : null;
