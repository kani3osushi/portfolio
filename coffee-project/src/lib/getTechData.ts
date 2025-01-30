import techData from '@/data/techData.json';

// asyncで返すが、内容はビルド時に決まっている
export async function getTechData() {
  return { techData };
}
