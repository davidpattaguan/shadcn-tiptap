"use client";

import {
  Editor,
  EditorContent,
  EditorProvider,
  Extension,
  useCurrentEditor,
  useEditor,
} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

import { useState } from "react";
import Heading from "@tiptap/extension-heading";
import Paragraph from "@tiptap/extension-paragraph";
import Document from "@tiptap/extension-document";
import Text from "@tiptap/extension-text";
import { Toolbar } from "./toolbar";
// import Highlight from "@tiptap/extension-highlight";
// import Typography from "@tiptap/extension-typography";
// import { Card, CardContent, CardHeader } from "./ui/card";
// import { Toggle } from "./ui/toggle";
// import { Toolbar } from "./toolbar";

export default function Tiptap() {
  const extensions = [
    StarterKit.configure({
      bulletList: {
        keepMarks: true,
        keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
      },
      orderedList: {
        keepMarks: true,
        keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
      },
    }),
    Document,
    Paragraph,
    Text,
    // Typography,
    // Highlight,
    Heading.configure({
      levels: [1, 2, 3, 4, 5, 6],
    }),
  ];

  const onContentUpdate = (editor: Editor) => {
    // setRichText(editor.getHTML());
  };

  const editor = useEditor({
    extensions: extensions,
    content: `
    <h2>
  Hi there,
</h2>
<p>
  this is a <em>basic</em> example of <strong>tiptap</strong>. Sure, there are all kind of basic text styles you’d probably expect from a text editor. But wait until you see the lists:
</p>
<ul>
  <li>
    That’s a bullet list with one …
  </li>
  <li>
    … or two list items.
  </li>
</ul>
<p>
  Isn’t that great? And all of that is editable. But wait, there’s more. Let’s try a code block:
</p>
<pre><code class="language-css">body {
display: none;
}</code></pre>
<p>
  I know, I know, this is impressive. It’s only the tip of the iceberg though. Give it a try and click a little bit around. Don’t forget to check the other examples too.
</p>
<blockquote>
  Wow, that’s amazing. Good work, boy! 👏
  <br />
  — Mom
</blockquote>
    `,
    onUpdate({ editor }) {
      //   setRichText(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class: "prose prose-lg focus:outline-none p-5 w-screen",
      },
    },
  });

  return (
    <div>
      <div className="border">
        {" "}
        <Toolbar editor={editor} />
      </div>
      <div className="border">
        <EditorContent editor={editor} className="w-full" />
      </div>
    </div>
  );
}
