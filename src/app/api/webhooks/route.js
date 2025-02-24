import { createClient } from '@supabase/supabase-js'

export async function POST(req) {
  try {
    // Log that we received the webhook
    console.log('Webhook received!')
    
    // Get the data from Clerk with better naming
    const clerkData = await req.json()
    console.log('Data received from Clerk:', clerkData)
    
    // If it's a user.created event, insert into Supabase
    if (clerkData.type === 'user.created') {
      const userId = clerkData.data.id
      const userEmail = clerkData.data.email_addresses[0].email_address
      console.log('User ID to insert:', userId)
      console.log('User email to log is: ', userEmail)
      
      // Create Supabase client
      const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL,
        process.env.SUPABASE_SERVICE_ROLE_KEY
      )
      
      // Insert the user ID into your table
      const { data: insertData, error } = await supabase
        .from('markaide_db')
        .insert({
          user_id: userId,
          email_address: userEmail
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