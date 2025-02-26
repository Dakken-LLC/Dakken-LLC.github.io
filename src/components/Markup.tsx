import "highlight.js/styles/github.min.css"; // `rehype-highlight` does not import the CSS for me
import "katex/dist/katex.min.css"; // `rehype-katex` does not import the CSS for me
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import rehypeKatex from "rehype-katex";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import { Prose } from "./ui/prose";

export default function Markup({ markdownText }: { markdownText: string }) {
  return (
    <Prose>
      <Markdown
        remarkPlugins={[remarkGfm, remarkMath]}
        rehypePlugins={[rehypeKatex, rehypeRaw, rehypeHighlight]}
      >
        {markdownText}
      </Markdown>
    </Prose>
  );
}
