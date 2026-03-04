const mockQuestions = [
  {
    id: 1,
    question: "Which of the following describes a 'Closure' in JavaScript?",
    options: [
      "A variable that cannot be reassigned.",
      "A function bundled together with its lexical environment.",
      "A way to close a browser tab programmatically.",
      "An asynchronous event loop mechanism."
    ],
    correctAnswer: 1,
    difficulty: "Medium"
  },
  {
    id: 2,
    question: "What is the time complexity of a Binary Search algorithm?",
    options: [
      "O(n)",
      "O(n log n)",
      "O(log n)",
      "O(1)"
    ],
    correctAnswer: 2,
    difficulty: "Easy"
  },
  {
    id: 3,
    question: "Which CSS property is used to create a glassmorphism effect using blur?",
    options: [
      "filter: blur()",
      "backdrop-filter: blur()",
      "glass-filter: apply()",
      "opacity: 0.5"
    ],
    correctAnswer: 1,
    difficulty: "Easy"
  }
];

let currentQuestionIndex = 0;
let score = 0;
let timeRemaining = 300; // 5 minutes in seconds
let timerInterval = null;
let userAnswers = [];

export const MockTest = {
  render: () => {
    // Reset state on render
    currentQuestionIndex = 0;
    score = 0;
    timeRemaining = 300;
    userAnswers = [];
    clearInterval(timerInterval);

    return `
      <div class="container section">
        <div class="test-header flex justify-between items-center" style="margin-bottom: var(--spacing-lg);">
          <h2 class="section-title">Mock Test: Full Stack Basics</h2>
          <div class="timer glass" style="padding: 0.5rem 1rem; border-radius: var(--radius-md); font-weight: bold; color: var(--primary-color);">
            <i class="fas fa-clock"></i> <span id="time-display">05:00</span>
          </div>
        </div>
        
        <div class="progress-bar-container" style="width: 100%; height: 8px; background: var(--border-color); border-radius: var(--radius-full); margin-bottom: var(--spacing-xl); overflow: hidden;">
          <div id="progress-bar" style="height: 100%; width: 0%; background: var(--primary-color); transition: width 0.3s ease;"></div>
        </div>

        <div id="quiz-container" class="glass" style="padding: var(--spacing-xl); border-radius: var(--radius-lg);">
          <!-- Dynamic Content goes here -->
        </div>
      </div>
    `;
  },
  
  after_render: () => {
    MockTest.startTimer();
    MockTest.renderQuestion();
  },

  startTimer: () => {
    const timeDisplay = document.getElementById('time-display');
    timerInterval = setInterval(() => {
      timeRemaining--;
      const minutes = String(Math.floor(timeRemaining / 60)).padStart(2, '0');
      const seconds = String(timeRemaining % 60).padStart(2, '0');
      timeDisplay.innerText = `${minutes}:${seconds}`;
      
      if (timeRemaining <= 0) {
        clearInterval(timerInterval);
        MockTest.finishTest();
      }
    }, 1000);
  },

  renderQuestion: () => {
    const quizContainer = document.getElementById('quiz-container');
    if (!quizContainer) return;

    if (currentQuestionIndex >= mockQuestions.length) {
      MockTest.finishTest();
      return;
    }

    const question = mockQuestions[currentQuestionIndex];
    const progressPerc = (currentQuestionIndex / mockQuestions.length) * 100;
    document.getElementById('progress-bar').style.width = `${progressPerc}%`;

    let optionsHtml = question.options.map((opt, idx) => `
      <button class="btn btn-outline opt-btn" style="width: 100%; text-align: left; justify-content: flex-start; margin-bottom: var(--spacing-sm); padding: 1rem;" data-idx="${idx}">
        ${String.fromCharCode(65 + idx)}. ${opt}
      </button>
    `).join('');

    quizContainer.innerHTML = `
      <div style="display: flex; justify-content: space-between; margin-bottom: var(--spacing-md); color: var(--text-muted);">
        <span>Question ${currentQuestionIndex + 1} of ${mockQuestions.length}</span>
        <span class="badge" style="background: var(--background-alt); padding: 0.2rem 0.6rem; border-radius: var(--radius-md); font-size: 0.8rem;">${question.difficulty}</span>
      </div>
      <h3 style="font-size: 1.5rem; margin-bottom: var(--spacing-lg);">${question.question}</h3>
      <div class="options-grid" style="display: flex; flex-direction: column;">
        ${optionsHtml}
      </div>
    `;

    // Bind events to the dynamically created buttons
    const optBtns = quizContainer.querySelectorAll('.opt-btn');
    optBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const selectedIdx = parseInt(e.currentTarget.getAttribute('data-idx'), 10);
        MockTest.handleAnswer(selectedIdx);
      });
    });
  },

  handleAnswer: (selectedIdx) => {
    const question = mockQuestions[currentQuestionIndex];
    const isCorrect = selectedIdx === question.correctAnswer;
    
    userAnswers.push({
      question: question.question,
      selected: question.options[selectedIdx],
      correct: question.options[question.correctAnswer],
      isCorrect: isCorrect
    });

    if (isCorrect) score++;
    
    currentQuestionIndex++;
    MockTest.renderQuestion();
  },

  finishTest: () => {
    clearInterval(timerInterval);
    const quizContainer = document.getElementById('quiz-container');
    if (!quizContainer) return;

    document.getElementById('progress-bar').style.width = '100%';
    
    let resultsHtml = `
      <div class="text-center">
        <h2 class="section-title">Test Completed!</h2>
        <div style="font-size: 4rem; color: var(--primary-color); font-weight: bold; margin: var(--spacing-md) 0;">
          ${score} / ${mockQuestions.length}
        </div>
        <p class="section-subtitle">Your performance has been recorded. Review your answers below.</p>
      </div>
      <div style="margin-top: var(--spacing-xl);">
    `;

    userAnswers.forEach((ans, i) => {
      resultsHtml += `
        <div style="margin-bottom: var(--spacing-md); padding: var(--spacing-md); border-left: 4px solid ${ans.isCorrect ? 'var(--secondary-color)' : '#ef4444'}; background: var(--background-alt); border-radius: 0 var(--radius-md) var(--radius-md) 0;">
          <p style="font-weight: 600; margin-bottom: 0.5rem;">Q${i+1}. ${ans.question}</p>
          <p style="color: ${ans.isCorrect ? 'var(--secondary-color)' : '#ef4444'};"><i class="fas ${ans.isCorrect ? 'fa-check-circle' : 'fa-times-circle'}"></i> Your Answer: ${ans.selected}</p>
          ${!ans.isCorrect ? `<p style="color: var(--secondary-color); margin-top: 0.2rem;"><i class="fas fa-check-circle"></i> Correct Answer: ${ans.correct}</p>` : ''}
        </div>
      `;
    });

    resultsHtml += `
      </div>
      <div class="text-center" style="margin-top: var(--spacing-xl);">
        <a href="#/dashboard" class="btn btn-primary">Go to Dashboard</a>
        <button id="retry-btn" class="btn btn-outline" style="margin-left: 1rem;">Retry Test</button>
      </div>
    `;

    quizContainer.innerHTML = resultsHtml;
    
    // Bind retry button
    const retryBtn = document.getElementById('retry-btn');
    if (retryBtn) {
      retryBtn.addEventListener('click', () => {
        MockTest.render();
        const appContainer = document.getElementById('page-content');
        appContainer.innerHTML = MockTest.render();
        MockTest.after_render();
      });
    }
  }
};
