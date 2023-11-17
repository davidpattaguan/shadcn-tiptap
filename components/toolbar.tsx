"use client";
import { useCurrentEditor, type Editor } from "@tiptap/react";
import {
  Bold,
  Strikethrough,
  Italic,
  List,
  ListOrdered,
  Heading2,
  Heading1,
  Heading3,
  BoldIcon,
  ItalicIcon,
  StrikethroughIcon,
  CodeIcon,
  Heading1Icon,
  Heading2Icon,
  Heading3Icon,
  Heading4Icon,
  Heading5Icon,
  Heading6,
  Heading6Icon,
  Code2,
  BlocksIcon,
  HardDrive,
  Undo,
  Redo,
  AxeIcon,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Toggle } from "@/components/ui/toggle";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import { DividerHorizontalIcon, ListBulletIcon } from "@radix-ui/react-icons";

type Props = {
  editor: Editor | null;
};

export function Toolbar({ editor }: Props) {
  if (!editor) {
    return null;
  }

  return (
    <div className="flex gap-2">
      <Toggle
        size="sm"
        variant={"default"}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        pressed={editor.isActive("bold")}
        onPressedChange={() => editor.chain().focus().toggleBold().run()}
      >
        <BoldIcon className="w-4 h-4 mr-1" />
      </Toggle>
      <Toggle
        size="sm"
        variant={"default"}
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        className={editor.isActive("italic") ? "is-active" : ""}
      >
        <ItalicIcon className="w-4 h-4 mr-1" />
      </Toggle>
      <Toggle
        size="sm"
        variant={"default"}
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={!editor.can().chain().focus().toggleStrike().run()}
        className={editor.isActive("strike") ? "is-active" : ""}
      >
        <StrikethroughIcon className="w-4 h-4 mr-1" />
      </Toggle>
      <Toggle
        size="sm"
        variant={"default"}
        onClick={() => editor.chain().focus().toggleCode().run()}
        disabled={!editor.can().chain().focus().toggleCode().run()}
        className={editor.isActive("code") ? "is-active" : ""}
      >
        <CodeIcon className="w-4 h-4 mr-1" />
      </Toggle>
      {/* <Toggle
        size="sm"
        variant={"default"}
        onClick={() => editor.chain().focus().unsetAllMarks().run()}
      >
        clear marks
      </Toggle> */}
      {/* <Toggle
        size="sm"
        variant={"default"}
        onClick={() => editor.chain().focus().clearNodes().run()}
      >
        clear nodes
      </Toggle> */}
      <Toggle
        size="sm"
        variant={"default"}
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={editor.isActive("paragraph") ? "is-active" : ""}
      >
        <AxeIcon className="w-4 h-4 mr-1" />
      </Toggle>
      <Toggle
        size="sm"
        variant={"default"}
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={editor.isActive("heading", { level: 1 }) ? "is-active" : ""}
      >
        <Heading1Icon className="w-4 h-4 mr-1" />
      </Toggle>
      <Toggle
        size="sm"
        variant={"default"}
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={editor.isActive("heading", { level: 2 }) ? "is-active" : ""}
      >
        <Heading2Icon className="w-4 h-4 mr-1" />
      </Toggle>
      <Toggle
        size="sm"
        variant={"default"}
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={editor.isActive("heading", { level: 3 }) ? "is-active" : ""}
      >
        <Heading3Icon className="w-4 h-4 mr-1" />
      </Toggle>
      <Toggle
        size="sm"
        variant={"default"}
        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
        className={editor.isActive("heading", { level: 4 }) ? "is-active" : ""}
      >
        <Heading4Icon className="w-4 h-4 mr-1" />
      </Toggle>
      <Toggle
        size="sm"
        variant={"default"}
        onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
        className={editor.isActive("heading", { level: 5 }) ? "is-active" : ""}
      >
        <Heading5Icon className="w-4 h-4 mr-1" />
      </Toggle>
      <Toggle
        size="sm"
        variant={"default"}
        onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
        className={editor.isActive("heading", { level: 6 }) ? "is-active" : ""}
      >
        <Heading6Icon className="w-4 h-4 mr-1" />
      </Toggle>
      <Toggle
        size="sm"
        variant={"default"}
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={editor.isActive("bulletList") ? "is-active" : ""}
      >
        <ListBulletIcon className="w-4 h-4 mr-1" />
      </Toggle>
      <Toggle
        size="sm"
        variant={"default"}
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={editor.isActive("orderedList") ? "is-active" : ""}
      >
        <ListOrdered className="w-4 h-4 mr-1" />
      </Toggle>
      <Toggle
        size="sm"
        variant={"default"}
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={editor.isActive("codeBlock") ? "is-active" : ""}
      >
        <Code2 className="w-4 h-4 mr-1" />
      </Toggle>
      <Toggle
        size="sm"
        variant={"default"}
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={editor.isActive("blockquote") ? "is-active" : ""}
      >
        <BlocksIcon className="w-4 h-4 mr-1" />
      </Toggle>
      <Toggle
        size="sm"
        variant={"default"}
        onClick={() => editor.chain().focus().setHorizontalRule().run()}
      >
        <DividerHorizontalIcon className="w-4 h-4 mr-1" />
      </Toggle>
      <Toggle
        size="sm"
        variant={"default"}
        onClick={() => editor.chain().focus().setHardBreak().run()}
      >
        <HardDrive className="w-4 h-4 mr-1" />
      </Toggle>
      <Toggle
        size="sm"
        variant={"default"}
        onClick={() => editor.chain().focus().undo().run()}
        disabled={!editor.can().chain().focus().undo().run()}
      >
        <Undo className="w-4 h-4 mr-1" />
      </Toggle>
      <Toggle
        size="sm"
        variant={"default"}
        onClick={() => editor.chain().focus().redo().run()}
        disabled={!editor.can().chain().focus().redo().run()}
      >
        <Redo className="w-4 h-4 mr-1" />
      </Toggle>
      {/* <Toggle
        size="sm"
        variant={"default"}
        onClick={() => editor.chain().focus().setColor("#958DF1").run()}
        className={
          editor.isActive("textStyle", { color: "#958DF1" }) ? "is-active" : ""
        }
      >
        purple
      </Toggle> */}
    </div>
  );
}
