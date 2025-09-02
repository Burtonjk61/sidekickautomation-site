import { MDXRemote } from "next-mdx-remote";
import { getAllPosts, getPostBySlug } from "../../lib/posts";
import { mdxSerialize } from "../../lib/mdx";

export default function PostPage({ frontMatter, mdxSource }) {
  return (
    <main style={{maxWidth: '800px', margin: '0 auto', padding: '2rem 1rem'}}>
      <h1 style={{fontSize:'2rem', fontWeight:800, marginBottom:'0.25rem'}}>{frontMatter.title}</h1>
      <div style={{color:'#888', fontSize:'0.9rem', marginBottom:'1.25rem'}}>
        {new Date(frontMatter.date).toLocaleDateString()}
      </div>
      <article>
        <MDXRemote {...mdxSource} />
      </article>
    </main>
  );
}

export async function getStaticPaths() {
  const slugs = getAllPosts().map(p => ({ params: { slug: p.slug } }));
  return { paths: slugs, fallback: false };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const { frontMatter, content } = getPostBySlug(slug);
  const mdxSource = await mdxSerialize(content);
  return { props: { frontMatter, mdxSource } };
}
