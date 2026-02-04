const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

function moveNoButton() {
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
}

// Move on hover (PC)
noBtn.addEventListener("mouseover", moveNoButton);

// Move on touch (Mobile)
noBtn.addEventListener("touchstart", moveNoButton);

// YES button effect
yesBtn.addEventListener("click", () => {
  document.body.innerHTML = `
    <div style="text-align:center">
      <h1>YAY!! 💖🥰</h1>
      <p>I knew it 😘</p>
      <img src="https://media.tenor.com/8GZNOvQ4pPAAAAAC/love-bear.gif" width="250">
    </div>
  `;
});
