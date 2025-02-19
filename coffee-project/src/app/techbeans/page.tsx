import { merriweather } from "../layout";
import Image from "next/image";
import TechList from "@/components/ui/TechList";
import { getTechData } from "@/lib/getTechData";
import { auth } from "@/lib/auth";

export default async function page() {
  const data = await getTechData();
  const techData = data.techData;
  const session = await auth();

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
          />
        </div>
      </section>
      <section className="w-full py-20 bg-secondary-background">
        <div className="container mx-auto">
          <TechList data={techData} />
        </div>
      </section>
    </>
  );
}
