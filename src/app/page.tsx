import BlogList from "@/components/BlogList";
import Hero from "@/components/hero";
import { getEntries } from "@/lib/contentfull";

export default async function Home() {
  const blogs = await getEntries();
  if (!blogs) {
    return;
  }

  return (
    <>
      <Hero />
      <BlogList blogs={blogs} />
    </>
  );
}
