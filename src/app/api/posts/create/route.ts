import db from '@/modules/db'

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const content = body.content

    if (!content) {
      return new Response(JSON.stringify({ message: 'Invalid content' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    const post = await db.post.create({
      data: {
        content,
      },
    })

    const resp = new Response(JSON.stringify(post), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    })

    return resp
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}
