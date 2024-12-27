import { Button } from "@/components/ui/Button";
import { merriweather } from "./layout";

export default async function Home() {
  return (
    <>
      <section
        className="h-screen w-full bg-cover text-primary"
        style={{ backgroundImage: "url('/mv-02.jpg')" }}
      >
        <h1
          className={`text-8xl font-bold tracking-wider leading-none ${merriweather.className}`}
        >
          Made with
          <br />
          Next.js and Coffee
        </h1>
        <p className="pt-8 pb-10 text-2xl ">コードの世界に、ホット一息。</p>
        <Button>Start the Demo</Button>
      </section>
    </>
  );
}
