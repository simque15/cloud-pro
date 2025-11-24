// 퀴즈 데이터
const quizzes = [
  {
    id: 1,
    question: "플라스틱 페트병은 어떻게 버려야 할까요?",
    options: [
      "라벨을 제거하고 찌그러뜨려서 뚜껑과 함께 배출",
      "그냥 일반 쓰레기로 배출",
      "라벨을 붙인 채로 배출",
      "뚜껑을 제거하지 않고 배출"
    ],
    correctAnswer: 0,
    explanation: "페트병은 라벨을 제거하고 압축한 후 뚜껑과 함께 배출해야 재활용이 잘 됩니다."
  },
  {
    id: 2,
    question: "비닐봉투는 어떻게 분리배출 해야 할까요?",
    options: [
      "일반 쓰레기로 배출",
      "깨끗이 씻어서 플라스틱으로 배출",
      "이물질을 제거하고 투명 비닐류로 배출",
      "종이류로 배출"
    ],
    correctAnswer: 2,
    explanation: "비닐봉투는 이물질을 제거하고 깨끗한 상태로 투명 비닐류로 분리배출해야 합니다."
  },
  {
    id: 3,
    question: "우유팩은 어떻게 배출해야 할까요?",
    options: [
      "일반 종이류로 배출",
      "내용물을 비우고 물로 헹군 뒤 펼쳐서 말려 배출",
      "그냥 일반 쓰레기로 배출",
      "플라스틱으로 배출"
    ],
    correctAnswer: 1,
    explanation: "우유팩은 고급 펄프로 만들어져 별도 재활용이 가능합니다. 헹구고 펼쳐서 말려 배출하세요."
  },
  {
    id: 4,
    question: "치킨 배달 용기는 어떻게 버려야 할까요?",
    options: [
      "기름기가 묻어도 종이류로 배출",
      "기름기를 제거하고 종이류로 배출",
      "기름기가 많이 묻었다면 일반 쓰레기로 배출",
      "플라스틱으로 배출"
    ],
    correctAnswer: 2,
    explanation: "음식물이나 기름기가 많이 묻은 종이는 재활용이 어려우므로 일반 쓰레기로 배출해야 합니다."
  },
  {
    id: 5,
    question: "유리병은 어떻게 배출해야 할까요?",
    options: [
      "색깔 구분 없이 한꺼번에 배출",
      "투명, 갈색, 녹색 등 색상별로 구분하여 배출",
      "깨뜨려서 배출",
      "뚜껑을 닫고 배출"
    ],
    correctAnswer: 1,
    explanation: "유리병은 색상별로 구분하고 내용물을 비우고 뚜껑을 분리하여 배출해야 합니다."
  },
  {
    id: 6,
    question: "스티로폼은 어떻게 배출해야 할까요?",
    options: [
      "일반 쓰레기로 배출",
      "이물질 제거 후 분리배출",
      "태워서 배출",
      "비닐과 함께 배출"
    ],
    correctAnswer: 1,
    explanation: "스티로폼은 테이프, 상표 등을 제거하고 깨끗한 상태로 분리배출해야 합니다."
  },
  {
    id: 7,
    question: "일회용 컵(플라스틱)은 어떻게 배출해야 할까요?",
    options: [
      "빨대와 함께 배출",
      "내용물을 비우고 물로 헹군 후 배출",
      "그냥 일반 쓰레기로 배출",
      "압축해서 배출"
    ],
    correctAnswer: 1,
    explanation: "일회용 컵은 내용물과 이물질을 제거하고 깨끗이 헹군 후 플라스틱류로 배출합니다."
  },
  {
    id: 8,
    question: "캔류는 어떻게 배출해야 할까요?",
    options: [
      "내용물을 비우지 않고 배출",
      "내용물을 비우고 압착하여 배출",
      "뚜껑을 달고 배출",
      "일반 쓰레기로 배출"
    ],
    correctAnswer: 1,
    explanation: "캔은 내용물을 비우고 물로 헹군 뒤 가능한 압착하여 배출하면 재활용이 용이합니다."
  },
  {
    id: 9,
    question: "종이상자(박스)는 어떻게 배출해야 할까요?",
    options: [
      "테이프, 스티커를 붙인 채로 배출",
      "테이프, 스티커를 제거하고 펼쳐서 배출",
      "찢어서 배출",
      "접은 채로 배출"
    ],
    correctAnswer: 1,
    explanation: "종이상자는 테이프, 스티커, 철핀 등을 제거하고 펼쳐서 배출해야 재활용이 가능합니다."
  },
  {
    id: 10,
    question: "음식물이 묻은 비닐은 어떻게 처리해야 할까요?",
    options: [
      "그대로 비닐류로 배출",
      "물로 깨끗이 씻어서 비닐류로 배출",
      "씻기 어려우면 일반 쓰레기로 배출",
      "태워서 처리"
    ],
    correctAnswer: 2,
    explanation: "음식물이나 이물질이 많이 묻어 씻기 어려운 비닐은 일반 쓰레기로 배출합니다."
  }
];

// 전역 변수
let totalPoints = 0;
let todayQuiz = null;
let selectedAnswer = null;
let isAnswered = false;

// DOM 요소
const quizContainer = document.getElementById('quizContainer');
const completedMessage = document.getElementById('completedMessage');
const totalPointsEl = document.getElementById('totalPoints');
const quizQuestionEl = document.getElementById('quizQuestion');
const quizOptionsEl = document.getElementById('quizOptions');
const submitButton = document.getElementById('submitButton');
const resultBox = document.getElementById('resultBox');
const nextQuizTimeEl = document.getElementById('nextQuizTime');

// 초기화
function init() {
  // 로컬 스토리지에서 데이터 불러오기
  const savedPoints = localStorage.getItem('recyclingPoints');
  const lastPlayedDate = localStorage.getItem('lastPlayedDate');
  const today = new Date().toDateString();

  if (savedPoints) {
    totalPoints = parseInt(savedPoints);
    totalPointsEl.textContent = totalPoints + ' P';
  }

  // 오늘 이미 퀴즈를 풀었는지 확인
  if (lastPlayedDate === today) {
    showCompletedMessage();
  } else {
    // 오늘의 퀴즈 선택 (날짜 기반으로 일관성 있게)
    const dateHash = new Date().getDate() + new Date().getMonth() * 31;
    const quizIndex = dateHash % quizzes.length;
    todayQuiz = quizzes[quizIndex];
    
    displayQuiz();
  }
}

// 퀴즈 표시
function displayQuiz() {
  quizContainer.classList.remove('hidden');
  completedMessage.classList.add('hidden');

  quizQuestionEl.textContent = todayQuiz.question;

  // 옵션 생성
  quizOptionsEl.innerHTML = '';
  todayQuiz.options.forEach((option, index) => {
    const optionDiv = document.createElement('div');
    optionDiv.className = 'quiz-option';
    optionDiv.onclick = () => selectOption(index);
    
    optionDiv.innerHTML = `
      <div class="option-number">${index + 1}</div>
      <div class="option-text">${option}</div>
    `;
    
    quizOptionsEl.appendChild(optionDiv);
  });
}

// 옵션 선택
function selectOption(index) {
  if (isAnswered) return;

  selectedAnswer = index;

  // 모든 옵션에서 selected 클래스 제거
  const options = document.querySelectorAll('.quiz-option');
  options.forEach(opt => opt.classList.remove('selected'));

  // 선택한 옵션에 selected 클래스 추가
  options[index].classList.add('selected');

  // 제출 버튼 활성화
  submitButton.classList.remove('disabled');
  submitButton.disabled = false;
}

// 정답 제출
function submitAnswer() {
  if (selectedAnswer === null || isAnswered) return;

  isAnswered = true;
  const isCorrect = selectedAnswer === todayQuiz.correctAnswer;

  // 옵션들 비활성화
  const options = document.querySelectorAll('.quiz-option');
  options.forEach((opt, index) => {
    opt.classList.add('disabled');
    
    if (index === todayQuiz.correctAnswer) {
      opt.classList.add('correct');
    } else if (index === selectedAnswer) {
      opt.classList.add('wrong');
    }
  });

  // 제출 버튼 숨기기
  submitButton.style.display = 'none';

  // 결과 표시
  displayResult(isCorrect);

  // 포인트 업데이트
  if (isCorrect) {
    totalPoints += 10;
    localStorage.setItem('recyclingPoints', totalPoints.toString());
    totalPointsEl.textContent = totalPoints + ' P';
  }

  // 오늘 날짜 저장
  const today = new Date().toDateString();
  localStorage.setItem('lastPlayedDate', today);

  // 5초 후 완료 메시지로 전환
  setTimeout(() => {
    showCompletedMessage();
  }, 5000);
}

// 결과 표시
function displayResult(isCorrect) {
  resultBox.classList.remove('hidden');
  resultBox.className = 'result-box ' + (isCorrect ? 'correct' : 'wrong');

  const icon = isCorrect ? '✅' : '❌';
  const title = isCorrect ? '정답입니다! 🎉' : '아쉽네요! 😢';
  const subtitle = isCorrect ? '+10 포인트 획득!' : '다음에 다시 도전하세요!';

  resultBox.innerHTML = `
    <div class="result-header">
      <div class="result-icon">${icon}</div>
      <div>
        <div class="result-title">${title}</div>
        <div class="result-subtitle">${subtitle}</div>
      </div>
    </div>
    <div class="explanation-box">
      <div class="explanation-title">💡 해설</div>
      <div class="explanation-text">${todayQuiz.explanation}</div>
    </div>
  `;
}

// 완료 메시지 표시
function showCompletedMessage() {
  quizContainer.classList.add('hidden');
  completedMessage.classList.remove('hidden');

  updateNextQuizTime();
  // 1분마다 시간 업데이트
  setInterval(updateNextQuizTime, 60000);
}

// 다음 퀴즈까지 남은 시간 계산
function updateNextQuizTime() {
  const now = new Date();
  const tomorrow = new Date(now);
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow.setHours(0, 0, 0, 0);
  
  const diff = tomorrow.getTime() - now.getTime();
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  
  nextQuizTimeEl.textContent = `다음 퀴즈까지 ${hours}시간 ${minutes}분 남았습니다.`;
}

// 제출 버튼 이벤트
submitButton.addEventListener('click', submitAnswer);

// 페이지 로드 시 초기화
init();