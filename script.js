const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const card = document.getElementById("card");

// Move NO button
function moveNoButton() {
  const x = Math.random() * 240 - 120;
  const y = Math.random() * 240 - 120;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

// Escape on hover (desktop)
noBtn.addEventListener("mouseover", moveNoButton);

// Escape on touch (mobile)
noBtn.addEventListener("touchstart", moveNoButton);

// YES button
yesBtn.addEventListener("click", () => {
  card.innerHTML = `
    <h1>YAY!!! 💖🥰</h1>
    <p>I knew you’d say yes 😭💘</p>
    <img src="yes.png" class="cute-img">
    <p>You just made my day 💕</p>
  `;
});





