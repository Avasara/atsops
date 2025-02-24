
export async function POST(req) {
  console.log('Webhook received!')
  return new Response('ok', { status: 200 })
}