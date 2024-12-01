import Link from "next/link";

export default function HomePage() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>未来無駄スキル冒険譚</h1>
      <p>あなたの選択が未来を作ります！</p>
      <Link href="/adventure/">
        <button style={{ fontSize: "20px", padding: "10px 20px" }}>
          次へ進む
        </button>
      </Link>
    </div>
  );
}
