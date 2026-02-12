const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const card = document.getElementById("card");

let yesScale = 1;

// Envelope open
function openEnvelope() {
  const envelope = document.querySelector(".envelope");
  envelope.classList.add("open");

  setTimeout(() => {
    document.getElementById("envelopeScreen").style.display = "none";
    card.classList.remove("hidden");
  }, 800);
}

// NO hover / tap
function growYesButton() {
  yesScale += 0.15;
  yesBtn.style.transform = `scale(${yesScale})`;

  const x = Math.random() * 120 - 60;
  const y = Math.random() * 120 - 60;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

// Desktop
noBtn.addEventListener("mouseover", growYesButton);

// Mobile
noBtn.addEventListener("touchstart", growYesButton);

// YES click
yesBtn.addEventListener("click", () => {
  card.innerHTML = `
    <h1>Hehe Thank you babi 💖😘</h1>
    <p>Here's some flowers 4 u babi 🌸💐🌷</p>
    <img src="flowers.png" class="cute-img">
  `;
});
