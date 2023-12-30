export async function GET(request: Request) {
  return new Response('GET -> hi')
}

export async function POST(request: Request) {
  return new Response('POST -> hi')
}
