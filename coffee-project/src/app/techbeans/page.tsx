import Card from "@/components/ui/Card";
import { merriweather } from "../layout";
import Image from "next/image";

export default function page() {
  return (
    <>
      <section className="w-full bg-cover text-primary bg-no-repeat py-20 -mt-24">
        <div className="w-full max-w-7xl m-auto">
          <h1
            className={`pt-10 text-center text-5xl font-bold tracking-wider leading-none ${merriweather.className}`}
          >
            Select TechBeans
          </h1>
          <Image
            src="/kv.png"
            alt="select beans"
            className="mt-16 m-auto"
            width={560}
            height={330}
          ></Image>
        </div>
      </section>
      <section className="w-full py-20 bg-secondary-background">
        <div className="w-full max-w-7xl m-auto">
          <Card />
        </div>
      </section>
    </>
  );
}
