let yesScale = 1;

function openEnvelope() {
  const envelope = document.querySelector(".envelope");
  envelope.style.transform = "scale(0)";
  envelope.style.opacity = "0";

  setTimeout(() => {
    document.getElementById("envelopeScreen").style.display = "none";
    document.getElementById("mainCard").style.display = "block";
  }, 500);
}

function growYesButton() {
  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");

  yesScale += 0.12;
  yesBtn.style.transform = `scale(${yesScale})`;

  const maxX = 60;
  const maxY = 40;

  const x = Math.random() * maxX * 2 - maxX;
  const y = Math.random() * maxY * 2 - maxY;

  noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

function sayYes() {
  document.querySelector(".card").innerHTML = `
    <h2>YAYYY 💕</h2>
    <img src="YES.png" class="cute-img" alt="Happy">
    <p>See you on Valentine's Day! 💘</p>
  `;
}
