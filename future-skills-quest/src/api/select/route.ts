import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/utils/supabaseClient';

export async function POST(request: NextRequest) {
  try {
    const { userId, choiceId } = await request.json();

    // バリデーション
    if (!userId || !choiceId) {
      return NextResponse.json({ error: 'Invalid parameters' }, { status: 400 });
    }

    // choicesに存在するか確認
    const { data: choiceData, error: choiceError } = await supabase
      .from('choices')
      .select('id, skill_id, next_choice_group_id')
      .eq('id', choiceId)
      .single();

    if (choiceError || !choiceData) {
      return NextResponse.json({ error: 'Choice not found' }, { status: 404 });
    }

    // user_choicesに挿入
    const { error: insertError } = await supabase
      .from('user_choices')
      .insert({ user_id: userId, choice_id: choiceId });

    if (insertError) {
      return NextResponse.json({ error: insertError.message }, { status: 500 });
    }

    // スキル取得処理
    if (choiceData.skill_id) {
      // すでにスキルを持っているかチェック
      const { data: userSkillData } = await supabase
        .from('user_skills')
        .select('*')
        .eq('user_id', userId)
        .eq('skill_id', choiceData.skill_id);

      if (!userSkillData || userSkillData.length === 0) {
        await supabase.from('user_skills').insert({ user_id: userId, skill_id: choiceData.skill_id });
      }
    }

    return NextResponse.json({ success: true, next_choice_group_id: choiceData.next_choice_group_id });
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
