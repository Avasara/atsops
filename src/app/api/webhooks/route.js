import { createClient } from '@supabase/supabase-js'

export async function POST(req) {
  try {
    // Log that we received the webhook
    console.log('Webhook received!')
    
    // Get the data from Clerk
    const data = await req.json()
    console.log('Data received:', data)
    
    // If it's a user.created event, insert into Supabase
    if (data.type === 'user.created') {
      const userId = data.data.id
      console.log('User ID to insert:', userId)
      
      // Create Supabase client
      const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL,
        process.env.SUPABASE_SERVICE_ROLE_KEY  // Important: Use service role key, not public key
      )
      
      // Insert the user ID into your table
      const { data: insertData, error } = await supabase
        .from('atsops_db')  // Your table name
        .insert({
          user_id: userId
        })
      
      if (error) {
        console.log('Supabase insert error:', error)
        return new Response('Database error', { status: 500 })
      }
      
      console.log('Successfully added user to Supabase!')
    }
    
    return new Response('ok', { status: 200 })
  } catch (error) {
    console.log('Error in webhook:', error)
    return new Response('error', { status: 500 })
  }
}