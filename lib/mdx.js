import { serialize } from "next-mdx-remote/serialize";
import remarkGfm from "remark-gfm";

export async function mdxSerialize(source) {
  return serialize(source, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: []
    }
  });
}
