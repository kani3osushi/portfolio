import { supabase } from "@/utils/supabaseClient";

export default async function ResultPage() {
  const { data: sessionData } = await supabase.auth.getSession();
  const userId = sessionData.session?.user.id;

  if (!userId) {
    return <div>ログインしてください</div>;
  }

  const { data: userSkills } = await supabase
    .from("user_skills")
    .select("skill_id")
    .eq("user_id", userId);

  const skillIds = userSkills?.map((us) => us.skill_id) || [];

  // 全エンディング取得（実際は条件に応じてフィルタリング）
  const { data: endings } = await supabase.from("endings").select("*");

  let bestEnding = endings?.find((e) => {
    // required_skill_idsを満たすか確認
    const required = e.required_skill_ids || [];
    return required.every((reqId: number) => skillIds.includes(reqId));
  });

  if (!bestEnding) {
    // デフォルトエンディング
    bestEnding = endings?.find(
      (e) => (e.required_skill_ids || []).length === 0
    );
  }

  return (
    <div>
      <h1>エンディング</h1>
      {bestEnding ? (
        <>
          <h2>{bestEnding.name}</h2>
          <p>{bestEnding.description}</p>
        </>
      ) : (
        <p>エンディングが見つかりませんでした</p>
      )}
    </div>
  );
}
