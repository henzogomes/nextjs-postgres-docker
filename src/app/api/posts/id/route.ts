import db from '@/modules/db'

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const postId = body.id

    if (!postId) {
      return new Response(JSON.stringify({ message: 'Invalid Post ID' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    const post = await db.post.findUnique({
      where: { id: postId },
    })

    // Check if the post exists
    if (!post) {
      return new Response(JSON.stringify({ message: 'Post not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    const resp = new Response(JSON.stringify(post), {
      status: 200,
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
