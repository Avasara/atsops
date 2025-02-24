export async function POST(req) {
  try {
    // Log that we received the webhook
    console.log('Webhook received!')
    
    // Get the data from Clerk
    const data = await req.json()
    console.log('Data received:', data)
    
    // If it's a user.created event, let's log the user ID
    if (data.type === 'user.created') {
      console.log('User ID:', data.data.id)
    }
    
    return new Response('ok', { status: 200 })
  } catch (error) {
    console.log('Error:', error)
    return new Response('error', { status: 500 })
  }
}