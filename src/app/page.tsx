import db from '@/modules/db'

export default async function Home() {
  const posts = await db.post.findMany({ orderBy: { createdAt: 'desc' } })

  return (
    <main className="flex min-h-screen flex-col p-24">
      <h1>Post list</h1>
      <span>-----</span>

      {posts.map((post) => (
        <div key={post.id}> {post.content}</div>
      ))}
    </main>
  )
}
