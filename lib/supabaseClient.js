import { createClient } from '@supabase/supabase-js';
// Function to create a Supabase client with Clerk authentication
export function createClerkSupabaseClient(session) {  
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_KEY,
    {
      global: {
        fetch: async (url, options = {}) => {
          const clerkToken = await session?.getToken({
            template: "enter-your-jwt-clerk-template-name",
          });
          const headers = new Headers(options?.headers);
          headers.set("Authorization", `Bearer ${clerkToken}`);
          return fetch(url, { ...options, headers });
        },
      },
    }
  );
}