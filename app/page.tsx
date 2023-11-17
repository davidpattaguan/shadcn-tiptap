import Tiptap from "@/components/editor";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col min-w-screen min-h-screen items-center ">
      <section>
        <h1 className="text-4xl font-bold text-black mb-10 mt-10">
          Tiptap + NextJs + Shadcn
        </h1>
      </section>
      <section className="mb-5">
        <Tiptap />
      </section>
    </main>
  );
}
