// 트윗리스트를 만들 트윗 데이터를 가지고 있는 코드
export let DATA = [
  {
    user: "장한국",
    message: "코드스테이츠에 오신걸 환영합니다! #codestate",
    created_at: "2022-04-25 12:30:20"
  },
  {
    user: "조영현",
    message: "백엔드 개발자 24주 커리큘럼!! #SEB_BE_40",
    created_at: "2022-04-26 18:30:20"
  },
  {
    user: "김요환",
    message: "프로그래밍을 함께하는 페어프로그래밍!~ #work #hard",
    created_at: "2022-04-27 07:30:20"
  },
  {
    user: "나태웅",
    message:
      "코드스테이츠의 자체 개발 코딩 문제 풀이 플랫폼, 코플릿! #Algorism",
    created_at: "2022-04-28 12:30:20"
  },
  {
    user: "이정민",
    message: "궁금한게 있으면 Coittler를 통해서~~ #Coittler",
    created_at: "2022-04-29 18:30:20"
  }
];

export let randomUser = [
  "장한국",
  "황국화",
  "김요한",
  "나태웅",
  "이정민",
  "조영현"
];
export let randomMessage = [
  "컴퓨터(노트북)는 꼭 애플 제품이어야 하나요?",
  "프로덕트 매니저는 어떤 일을 하나요?",
  "프론트엔드와 백엔드 파트 중에서 뭐가 더 재미있나요?",
  "반드시 정해진 수강시간에 학습을 해야 하나요?",
  "수강생 선발 기준이 있나요?",
  "공휴일에도 안 쉬고 코스가 진행되나요?",
  "과정 중간에 배고프면 어떻게 해야하나요?",
  "교육장에 헬스장이 있나요?",
  "열심히 공부하면 코드스테이츠 직원이 될 수 있나요?"
];

export function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export function generateNewTweet() {
  let tweet = {};
  tweet.user = randomUser[getRandomInt(0, randomUser.length)];
  tweet.message = randomMessage[getRandomInt(0, randomMessage.length)];
  tweet.created_at = new Date().format();
  return tweet;
}
