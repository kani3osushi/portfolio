import { Button } from "@/components/ui/Button";
import { merriweather } from "./layout";
import LogoGallery from "@/components/ui/LogoGallary";
import StepsSection from "@/components/ui/StepSection";
import Image from "next/image";
import Link from "next/link";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth();
  if (!session?.user) {
    redirect("/sign-in");
  }

  return (
    <>
      {/* Hero Section */}
      <section
        className="w-full bg-cover text-primary bg-no-repeat py-16 sm:py-20 -mt-24"
        style={{ backgroundImage: "url('/mv02.jpg')" }}
      >
        <div className="w-full max-w-4xl px-4 sm:px-8 lg:max-w-7xl mx-auto">
          <h1
            className={`pt-24 sm:pt-40 text-5xl sm:text-7xl lg:text-8xl font-bold tracking-wider leading-tight ${merriweather.className}`}
          >
            Made with
            <br />
            Next.js and Coffee
          </h1>
          <p className="pt-6 sm:pt-8 pb-6 sm:pb-10 text-lg sm:text-2xl">
            コードの世界に、ホット一息。
          </p>
          <Link href="/techbeans">
            <Button className="text-center" variant="default">
              <Image src="/arrow.png" alt="arrow icon" width={32} height={32} />
              Start the Demo
            </Button>
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="w-full py-16 sm:py-20 bg-secondary-background">
        <div className="w-full max-w-4xl px-4 sm:px-8 lg:max-w-7xl mx-auto">
          <div className="flex flex-col gap-8 sm:flex-row sm:gap-12 justify-around">
            <h2
              className={`text-4xl sm:text-6xl lg:text-7xl font-bold tracking-wider leading-tight ${merriweather.className}`}
            >
              About
              <br />
              Services
            </h2>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold">
                今日の一杯、どの技術にしますか？
              </h3>
              <p className="pt-6 sm:pt-9 text-base sm:text-lg font-bold leading-loose">
                当店の棚には、ReactやTypeScriptといった技術の“豆”が並んでいます。
                <br />
                それぞれの豆には特徴や魅力が詰まっていて、
                <br />
                クリック一つでその詳細を体験することができます。
                <br />
                お気に入りに追加すれば、あとでじっくり見返すことも可能です。
              </p>
              <p className="pt-4 sm:pt-6 text-lg sm:text-xl font-bold">
                技術の味わいを知る、そんな楽しいひとときをどうぞ。
              </p>
            </div>
          </div>
        </div>

        {/* Logo Gallery Section */}
        <div className="w-full max-w-4xl px-4 sm:px-8 lg:max-w-7xl mx-auto pt-16 sm:pt-24">
          <h2
            className={`text-center text-3xl sm:text-5xl font-bold tracking-wider leading-tight ${merriweather.className}`}
          >
            Discover the Blend
          </h2>
          <LogoGallery />
        </div>
      </section>

      {/* Steps Section */}
      <section className="w-full py-16 sm:py-20">
        <div className="w-full max-w-4xl px-4 sm:px-8 lg:max-w-7xl mx-auto">
          <h2
            className={`text-center text-3xl sm:text-5xl font-bold tracking-wider leading-tight ${merriweather.className}`}
          >
            “Select, Favorite, Enjoy”
          </h2>
          <p className="text-center pt-6 sm:pt-10 text-base sm:text-lg font-bold leading-loose">
            気になる技術豆を選んで、お気に入りに加えるだけ。
            <br />
            あとはゆっくり味わいながら、あなたのスキルブレンドを楽しもう。
          </p>
          <StepsSection />
        </div>
      </section>

      {/* Final Call to Action Section */}
      <section className="w-full py-16 sm:py-20 bg-secondary-background">
        <div className="w-full max-w-4xl px-4 sm:px-8 lg:max-w-7xl mx-auto">
          <h2
            className={`text-center text-3xl sm:text-5xl font-bold tracking-wider leading-tight ${merriweather.className}`}
          >
            Discover Your Perfect Tech Blend!
          </h2>
          <p className="text-center pt-6 sm:pt-10 pb-8 sm:pb-12 text-base sm:text-lg font-bold leading-loose">
            React、GraphQL、Tailwind…一粒一粒こだわりの“技術豆”を揃えました。
            <br />
            デモで実際に体験して、あなたのスキルにぴったりの技術を見つけてください。
          </p>
          <Link href="/techbeans">
            <Button className="flex justify-center" variant="default">
              <Image src="/arrow.png" alt="arrow icon" width={32} height={32} />
              Start the Demo
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
