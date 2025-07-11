const questions = [
  {
    question: "What's my comfort movie?",
    choices: [
      "To All the Boys I've Loved Before",
      "How to Lose a Guy in 10 Days",
      "Work It",
      "Tangled"
    ],
    answer: 0
  },
  {
    question: "Choose my (most) favourite singer:",
    choices: ["Harry Styles", "Lana Del Rey", "Billie Eilish", "Conan Gray"],
    answer: 0
  },
  {
    question: "What’s my ideal type in guys?",
    choices: [
      "Gym type and curly hair",
      "Nerdy and curly hair",
      "Tattooed and bad guy vibes",
      "Nerdy and tattooed"
    ],
    answer: 1
  },
  {
    question: "Pick my fav flower:",
    choices: ["Rose", "Sunflower", "Lily", "Peony"],
    answer: 1
  },
  {
    question: "Favorite ice cream flavour:",
    choices: ["Butterscotch", "Mango", "Strawberry", "Vanilla"],
    answer: 3
  }
];

let current = 0;
let score = 0;
let selected = null;

const questionEl = document.getElementById("question");
const choicesEl = document.getElementById("choices");
const nextBtn = document.getElementById("nextBtn");
const resultContainer = document.getElementById("resultContainer");
const resultText = document.getElementById("resultText");
const retryBtn = document.getElementById("retryBtn");
const continueBtn = document.getElementById("continueBtn");

function loadQuestion() {
  selected = null;
  nextBtn.disabled = true;
  const q = questions[current];
  questionEl.innerText = q.question;
  choicesEl.innerHTML = "";

  q.choices.forEach((choice, i) => {
    const btn = document.createElement("button");
    btn.className =
      "choice-btn w-full bg-white/10 px-4 py-2 my-1 rounded-full hover:bg-white/20 transition-all";
    btn.innerText = choice;
    btn.onclick = () => {
      document.querySelectorAll(".choice-btn").forEach(b =>
        b.classList.remove("selected")
      );
      btn.classList.add("selected");
      selected = i;
      nextBtn.disabled = false;
    };
    choicesEl.appendChild(btn);
  });
}

nextBtn.addEventListener("click", () => {
  if (selected === questions[current].answer) {
    score++;
  }

  current++;
  if (current < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
});

function showResult() {
  document.getElementById("quizContainer").style.display = "none";
  resultContainer.classList.remove("hidden");

  const nameSection = document.getElementById("nameSection");
  const guestName = document.getElementById("guestName");

  if (score >= 3) {
    resultText.innerText = `🎉 You passed with ${score}/5! Well you earned it!`;

    nameSection.classList.remove("hidden");
    guestName.value = "";

    continueBtn.style.display = "inline-block";
    continueBtn.disabled = true;

    guestName.addEventListener("input", () => {
      continueBtn.disabled = guestName.value.trim() === "";
    });

    retryBtn.style.display = "none";
  } else {
    resultText.innerText = `😢 You scored ${score}/5. Do you even know me?!`;
    nameSection.classList.add("hidden");
    continueBtn.style.display = "none";
    retryBtn.style.display = "inline-block";
  }
}


retryBtn.addEventListener("click", () => {
  current = 0;
  score = 0;
  resultContainer.classList.add("hidden");
  document.getElementById("quizContainer").style.display = "block";
  loadQuestion();
});

continueBtn.addEventListener("click", () => {
  window.location.href = "final.html"; // replace with next page (e.g., spin.html)
});

window.onload = loadQuestion;
continueBtn.addEventListener("click", () => {
  const guestName = document.getElementById("guestName").value;
  localStorage.setItem("guestName", guestName);
  window.location.href = "spin.html"; // or your next fun page
});
