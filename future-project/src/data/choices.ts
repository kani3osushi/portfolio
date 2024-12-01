import { StoryNode } from "@/types";

// export const storyNodes: StoryNode[] = [
//   {
//     id: 'start',
//     year: 0,
//     age: 18,
//     description: 'あなたは未来にどんな道を進みますか？',
//     choices: [
//       { id: "choice1", text: "フロントエンドエンジニアになる", nextId: "front-end" },
//       { id: "choice2", text: "バックエンドエンジニアになる", nextId: "back-end" },
//       { id: "choice3", text: "デザイナーになる", nextId: "designer" },
//     ],
//   },
//   {
//     id: 'front-end',
//     year: 1,
//     age: 19,
//     description: 'フロントエンジニアとして最初の1年が経過しました。次のステップは？',
//     choices: [
//       { id: 'css-master', text: 'CSSのプロになる', acquiredSkill: { id: 'css', name: 'CSSマスター', description: 'CSSの達人スキル' } },
//       { id: 'react-expert', text: 'Reactに特化する', acquiredSkill: { id: 'react', name: 'Reactエキスパート', description: 'Reactに熟達' } },
//       { id: 'job-change', text: '転職を考える' },
//     ],
//   },
//   {
//     id: 'css-master',
//     year: 2,
//     age: 20,
//     description: 'CSSのプロとしてさらに進化しました！次は？',
//     choices: [
//       { id: 'freelance', text: 'フリーランスになる' },
//       { id: 'manager', text: 'プロジェクトマネージャーに挑戦する' },
//       { id: 'startup', text: 'スタートアップを創業する' },
//     ],
//   },
// ];
export const storyNodes: StoryNode[] = [
  {
    "id": "start",
    "year": 0,
    "age": 18,
    "description": "あなたは未来にどんな道を進みますか？",
    "choices": [
      {
        "id": "front-end",
        "text": "フロントエンドエンジニアになる",
        "nextId": "front-end"
      },
      {
        "id": "back-end",
        "text": "バックエンドエンジニアになる",
        "nextId": "back-end"
      },
      {
        "id": "designer",
        "text": "デザイナーになる",
        "nextId": "designer"
      }
    ]
  },
  {
    "id": "front-end",
    "year": 1,
    "age": 19,
    "description": "フロントエンジニアとして最初の1年が経過しました。次のステップは？",
    "choices": [
      {
        "id": "css-master",
        "text": "CSSのプロになる",
        "acquiredSkill": {
          "id": "css",
          "name": "CSSマスター",
          "description": "CSSの達人スキル"
        }
      },
      {
        "id": "react-expert",
        "text": "Reactに特化する",
        "acquiredSkill": {
          "id": "react",
          "name": "Reactエキスパート",
          "description": "Reactに熟達"
        }
      },
      {
        "id": "job-change",
        "text": "転職を考える",
        "nextId": "job-change"
      }
    ]
  },
  {
    "id": "css-master",
    "year": 2,
    "age": 20,
    "description": "CSSのプロとしてさらに進化しました！次は？",
    "choices": [
      {
        "id": "freelance",
        "text": "フリーランスになる",
        "nextId": "freelance"
      },
      {
        "id": "manager",
        "text": "プロジェクトマネージャーに挑戦する",
        "nextId": "manager"
      },
      {
        "id": "startup",
        "text": "スタートアップを創業する",
        "nextId": "startup"
      }
    ]
  },
  {
    "id": "year-3",
    "year": 3,
    "age": 21,
    "description": "Year 3: 選択が未来を変える！次は？",
    "choices": [
      {
        "id": "choice-3-1",
        "text": "Option 1",
        "nextId": "year-4"
      },
      {
        "id": "choice-3-2",
        "text": "Option 2",
        "nextId": "year-4"
      },
      {
        "id": "choice-3-3",
        "text": "Option 3",
        "nextId": "year-4"
      }
    ]
  },
  {
    "id": "year-4",
    "year": 4,
    "age": 22,
    "description": "Year 4: 選択が未来を変える！次は？",
    "choices": [
      {
        "id": "choice-4-1",
        "text": "Option 1",
        "nextId": "year-5"
      },
      {
        "id": "choice-4-2",
        "text": "Option 2",
        "nextId": "year-5"
      },
      {
        "id": "choice-4-3",
        "text": "Option 3",
        "nextId": "year-5"
      }
    ]
  },
  {
    "id": "year-5",
    "year": 5,
    "age": 23,
    "description": "Year 5: 選択が未来を変える！次は？",
    "choices": [
      {
        "id": "choice-5-1",
        "text": "Option 1",
        "nextId": "year-6"
      },
      {
        "id": "choice-5-2",
        "text": "Option 2",
        "nextId": "year-6"
      },
      {
        "id": "choice-5-3",
        "text": "Option 3",
        "nextId": "year-6"
      }
    ]
  },
  {
    "id": "year-6",
    "year": 6,
    "age": 24,
    "description": "Year 6: 選択が未来を変える！次は？",
    "choices": [
      {
        "id": "choice-6-1",
        "text": "Option 1",
        "nextId": "year-7"
      },
      {
        "id": "choice-6-2",
        "text": "Option 2",
        "nextId": "year-7"
      },
      {
        "id": "choice-6-3",
        "text": "Option 3",
        "nextId": "year-7"
      }
    ]
  },
  {
    "id": "year-7",
    "year": 7,
    "age": 25,
    "description": "Year 7: 選択が未来を変える！次は？",
    "choices": [
      {
        "id": "choice-7-1",
        "text": "Option 1",
        "nextId": "year-8"
      },
      {
        "id": "choice-7-2",
        "text": "Option 2",
        "nextId": "year-8"
      },
      {
        "id": "choice-7-3",
        "text": "Option 3",
        "nextId": "year-8"
      }
    ]
  },
  {
    "id": "year-8",
    "year": 8,
    "age": 26,
    "description": "Year 8: 選択が未来を変える！次は？",
    "choices": [
      {
        "id": "choice-8-1",
        "text": "Option 1",
        "nextId": "year-9"
      },
      {
        "id": "choice-8-2",
        "text": "Option 2",
        "nextId": "year-9"
      },
      {
        "id": "choice-8-3",
        "text": "Option 3",
        "nextId": "year-9"
      }
    ]
  },
  {
    "id": "year-9",
    "year": 9,
    "age": 27,
    "description": "Year 9: 選択が未来を変える！次は？",
    "choices": [
      {
        "id": "choice-9-1",
        "text": "Option 1",
        "nextId": "year-10"
      },
      {
        "id": "choice-9-2",
        "text": "Option 2",
        "nextId": "year-10"
      },
      {
        "id": "choice-9-3",
        "text": "Option 3",
        "nextId": "year-10"
      }
    ]
  },
  {
    "id": "year-10",
    "year": 10,
    "age": 28,
    "description": "Year 10: 選択が未来を変える！次は？",
    "choices": [
      {
        "id": "choice-10-1",
        "text": "Option 1",
        "nextId": "year-11"
      },
      {
        "id": "choice-10-2",
        "text": "Option 2",
        "nextId": "year-11"
      },
      {
        "id": "choice-10-3",
        "text": "Option 3",
        "nextId": "year-11"
      }
    ]
  },
  {
    "id": "end",
    "year": 10,
    "age": 28,
    "description": "あなたの冒険が完結しました！集めたスキルと経験を振り返ってください。",
    "choices": []
  }
];
