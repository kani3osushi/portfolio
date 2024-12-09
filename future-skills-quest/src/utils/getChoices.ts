import { supabase } from './supabaseClient';

export async function getChoices(userId: string, choiceGroupId: number) {
  // ユーザーが持っているスキルを取得
  const { data: userSkillsData } = await supabase
    .from('user_skills')
    .select('skill_id')
    .eq('user_id', userId);

  const userSkills = userSkillsData?.map(s => s.skill_id) || [];

  // デフォルトのchoices取得
  const { data: choicesData } = await supabase
    .from('choices')
    .select('id, text, skill_id, next_choice_group_id')
    .eq('choice_group_id', choiceGroupId);

  if (!choicesData) return [];

  // 例: 特定のskill_id(たとえば1)を持っている場合のみ表示されるchoiceを追加するなど
  // 実際にはchoicesテーブルに「required_skill_id」カラムを追加するのも手。
  const filteredChoices = choicesData.filter(choice => {
    // 必要なスキルがある選択肢の場合、ユーザーが持っていなければ除外する処理が可能
    // 今回は例として skill_id:2 の選択肢は skill_id:1 を持っていないと表示されない、とする（あくまで例）
    if (choice.skill_id === 2 && !userSkills.includes(1)) {
      return false;
    }
    return true;
  });

  return filteredChoices;
}
