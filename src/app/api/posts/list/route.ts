import db from '@/modules/db'

export async function GET(request: Request) {
  try {
    // Get posts from the database
    const posts = await db.post.findMany({ orderBy: { createdAt: 'desc' } })

    const resp = new Response(JSON.stringify(posts), {
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
