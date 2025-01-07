import Image from "next/image";

type Logo = {
  src: string;
  alt: string;
  bgColor: string; // 背景色を指定するプロパティを追加
};

const logos: Logo[] = [
  { src: "/tech/react.svg", alt: "React logo", bgColor: "#3E2723" }, // Reactの背景色
  { src: "/tech/go.svg", alt: "Go logo", bgColor: "#4E342E" }, // Goの背景色
  { src: "/tech/ts-logo.svg", alt: "TypeScript logo", bgColor: "#3E2723" }, // TypeScriptの背景色
  {
    src: "/tech/github-mark-white.svg",
    alt: "GitHub logo",
    bgColor: "#6D4C41",
  }, // GitHubの背景色
  { src: "/tech/vue.svg", alt: "Vue logo", bgColor: "#6D4C41" }, // Vueの背景色
  { src: "/tech/cpp_logo.svg", alt: "C++ logo", bgColor: "#4E342E" }, // C++の背景色
  { src: "/tech/nextjs.svg", alt: "Next.js logo", bgColor: "#6D4C41" }, // Next.jsの背景色
];

const LogoGallery = () => {
  return (
    <div className="flex flex-wrap gap-x-24 gap-y-9 justify-center pt-16">
      {logos.map((logo, index) => (
        <div
          key={index}
          className="flex items-center justify-center w-48 h-48 rounded-full border border-primary"
        >
          <div
            className="flex items-center justify-center w-40 h-40 rounded-full"
            style={{ backgroundColor: logo.bgColor }} // 動的に背景色を指定
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={105}
              height={105}
              className="flex items-center justify-center object-contain"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default LogoGallery;
