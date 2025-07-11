const prompts = [
  "When was the moment you knew I mattered to you?",
"Write your favorite memory or day we spent together with me",
"What reminds you of me?",
"What's something I do when I'm upset that I think I’m hiding well?",
"One song that reminds you of me",
"One thing you'd never want me to change",
"Something I love a lot — a product, a food, or anything. Do describe",
"Something you wanna do with me together"
];

const spinBtn = document.getElementById("spinBtn");
const promptOverlay = document.getElementById("promptOverlay");
const promptText = document.getElementById("promptText");
const answerBtn = document.getElementById("answerBtn");

spinBtn.addEventListener("click", () => {
  const randomPrompt = prompts[Math.floor(Math.random() * prompts.length)];
  promptText.textContent = randomPrompt;
  promptOverlay.classList.remove("hidden");
});

answerBtn.addEventListener("click", () => {
  window.location.href = "memory-upload.html"; // next step: form page
});
