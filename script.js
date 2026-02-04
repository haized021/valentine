const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const card = document.getElementById("card");

let yesScale = 1;

// When NO is hovered or touched
function growYesButton() {
  yesScale += 0.15;
  yesBtn.style.transform = `scale(${yesScale})`;

  // Optional: move NO slightly
  const x = Math.random() * 120 - 60;
  const y = Math.random() * 120 - 60;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

// Desktop
noBtn.addEventListener("mouseover", growYesButton);

// Mobile
noBtn.addEventListener("touchstart", growYesButton);

// YES button
yesBtn.addEventListener("click", () => {
  card.innerHTML = `
    <h1>Hehe Thank you bubby 💕😗</h1>
    <p>Here's some flowers 4 u bubby💐💐💐</p>
    <img src="Flowers.png" class="cute-img">
  `;
});







