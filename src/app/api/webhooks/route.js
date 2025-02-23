import { createClient } from '@supabase/supabase-js'

export async function POST(req) {
  try {
    const data = await req.json()
    console.log('1. Webhook received data:', data)  // See what Clerk is sending
    
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.SUPABASE_SERVICE_ROLE_KEY
    )
    
    if (data.type === 'user.created') {
      console.log('2. User created event detected, user_id:', data.data.id)
      
      const { data: insertData, error } = await supabase
        .from('atsops_db')
        .insert({
          user_id: data.data.id
        })
      
      if (error) {
        console.log('3. Supabase insert error:', error)
        return new Response('Supabase insert failed', { status: 500 })
      }
      
      console.log('3. Successfully added to Supabase')
    }
    
    return new Response('ok', { status: 200 })
  } catch (error) {
    console.log('Error in webhook:', error)
    return new Response('Error', { status: 500 })
  }
}