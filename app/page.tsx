import Tiptap from "@/components/editor";

export default function Home() {
  return (
    <main className="flex flex-col md:container">
      <section>
        <h1 className="flex justify-center text-xl lg:text-4xl font-bold text-black mb-10 mt-10 ">
          Tiptap + NextJs + Shadcn
        </h1>
      </section>
      <section>
        <Tiptap />
      </section>
    </main>
  );
}
