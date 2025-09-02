import Link from "next/link";
import { getAllPosts } from "../../lib/posts";

export default function BlogIndex({ posts }) {
  return (
    <main style={{maxWidth: '800px', margin: '0 auto', padding: '2rem 1rem'}}>
      <h1 style={{fontSize: '2rem', fontWeight: 800, marginBottom: '0.5rem'}}>Insights</h1>
      <p style={{color:'#666', marginBottom:'1.5rem'}}>Practical AI & automation tips for small businesses.</p>
      <ul style={{listStyle:'none', padding:0}}>
        {posts.map(({ slug, frontMatter }) => (
          <li key={slug} style={{borderBottom:'1px solid #222', padding:'1rem 0'}}>
            <Link href={`/blog/${slug}`} style={{fontSize:'1.25rem', fontWeight:700}}>
              {frontMatter.title}
            </Link>
            <div style={{color:'#888', fontSize:'0.9rem'}}>
              {new Date(frontMatter.date).toLocaleDateString()}
            </div>
            {frontMatter.description && (
              <p style={{marginTop:'0.5rem', color:'#ccc'}}>{frontMatter.description}</p>
            )}
          </li>
        ))}
      </ul>
    </main>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts();
  return { props: { posts } };
}
