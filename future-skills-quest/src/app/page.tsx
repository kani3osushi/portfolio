// src/app/page.tsx
import Link from "next/link";

export default function HomePage() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>スキルマスターの世界へようこそ！</h1>
      <p>
        このアプリでは、キャラクターを作成し、スキルを獲得しながら進化を楽しめます。
      </p>

      <nav style={{ marginTop: "2rem" }}>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          <li style={{ marginBottom: "1rem" }}>
            <Link
              href="/characters"
              style={{ textDecoration: "none", color: "blue" }}
            >
              キャラクター一覧を見る
            </Link>
          </li>
          <li style={{ marginBottom: "1rem" }}>
            <Link
              style={{ textDecoration: "none", color: "blue" }}
              href="/skills"
            >
              スキル図鑑を見る
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none", color: "blue" }}
              href="/timeline"
            >
              タイムラインを見る
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
