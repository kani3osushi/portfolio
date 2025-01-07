import Image from "next/image";

type Steps = {
  id: number;
  icon: string;
  title: string;
  description: string;
};

const steps: Steps[] = [
  {
    id: 1,
    icon: "/bean-icon.png", // 適切なアイコン画像パスを指定
    title: "豆を選ぶ",
    description:
      "好きな「豆」（＝技術スタック）をストアから選び出すステップです。ユーザーはカテゴリや検索を通じて自分の味に合った豆をピックアップできます。",
  },
  {
    id: 2,
    icon: "/favorite-icon.png",
    title: "お気に入りに追加",
    description:
      "選んだ豆を「お気に入りリスト」に登録するステップです。これによって、気になる豆を簡単に比較したり、比較結果をメモすることができます。",
  },
  {
    id: 3,
    icon: "/favorites-list-icon.png",
    title: "お気に入り一覧で確認",
    description:
      "お気に入りに追加した豆を一覧で確認するステップです。ここで、気になった技術について再度確認したり、特定の情報へアクセスしたりすることで、より深い理解や次のアクションに繋げることができます。",
  },
];

const StepsSection = () => {
  return (
    <div className="container mx-auto py-16">
      <div className="flex flex-col md:flex-row gap-4 justify-center">
        {steps.map((step, index) => (
          <div
            key={step.id}
            className="step-card w-[240px] flex flex-col items-center text-center rounded-lg flex-1 relative"
          >
            <div
              className={`step-card object-contain relative ${
                index !== steps.length - 1 ? "arrow" : ""
              }`}
            >
              <Image
                src={step.icon}
                alt={`${step.title} icon`}
                width={240}
                height={240}
              />
            </div>
            <h3 className="text-xl font-bold mt-7 mb-5">{step.title}</h3>
            <p className="text-base font-bold leading-relaxed tracking-wide px-8">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepsSection;
