"use client";
import { useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default function LoginPage() {
  const supabase = createClientComponentClient();
  const [email, setEmail] = useState("");

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: { emailRedirectTo: "http://localhost:3000" },
    });
    if (error) {
      alert(error.message);
    } else {
      alert("確認メールを送信しました。");
    }
  };

  return (
    <div>
      <h1>ログイン</h1>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="メールアドレス"
      />
      <button onClick={handleLogin}>ログインリンク送信</button>
    </div>
  );
}
