const quizData = [
  {
    question: 'When I last talked to him, he ___ English.',
    a: 'studies',
    b: 'study',
    c: 'was studying',
    d: 'studied',
    correct: 'c'
  },
  {
    question: 'I met her at yesterday\'s party, but I ___ her by sight for years before that.',
    a: 'had known',
    b: 'have known',
    c: 'will have known',
    d: 'had been known',
    correct: 'a'
  },
  {
    question: 'By 2050, scientists surely ___ a cure for cancer.',
    a: 'are discovering',
    b: 'have been discovered',
    c: 'will have discovered',
    d: 'had discovered',
    correct: 'c'
  },
  {
    question: 'Since the day he ___ ill he ___ a lot of reading.',
    a: 'was / had done',
    b: 'is / has done',
    c: 'was / has done',
    d: 'is / has been done',
    correct: 'c'
  },
  {
    question: 'He ___ in the library every night for the last two months.',
    a: 'would be studying',
    b: 'will have studied',
    c: 'has been studied',
    d: 'has been studying',
    correct: 'd'
  }
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
  answerEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected() {
  let answer;

  answerEls.forEach(answerEl => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  })
  return answer;
}

submitBtn.addEventListener('click', () => {
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
      <h2>You answered ${score} / ${quizData.length} questions correctly.</h2>

      <button onclick = 'location.reload()'>Reload</button>
      `
    }
  }
})


