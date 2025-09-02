import fs from "fs";
import path from "path";
import matter from "gray-matter";

const POSTS_DIR = path.join(process.cwd(), "content", "posts");

export function getPostSlugs() {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs.readdirSync(POSTS_DIR).filter(f => f.endsWith(".md") || f.endsWith(".mdx"));
}

export function getPostBySlug(slug) {
  const realSlug = slug.replace(/\.mdx?$/, "");
  const mdxPath = path.join(POSTS_DIR, `${realSlug}.mdx`);
  const mdPath  = path.join(POSTS_DIR, `${realSlug}.md`);
  const filePath = fs.existsSync(mdxPath) ? mdxPath : mdPath;
  const file = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(file);
  return { slug: realSlug, frontMatter: data, content };
}

export function getAllPosts() {
  const slugs = getPostSlugs();
  const posts = slugs.map((s) => getPostBySlug(s))
    .filter(p => !p.frontMatter?.draft)
    .sort((a, b) => (a.frontMatter?.date > b.frontMatter?.date ? -1 : 1));
  return posts;
}
