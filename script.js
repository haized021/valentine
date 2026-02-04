const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const card = document.getElementById("card");

// Function to move the NO button
function moveButton() {
  const x = Math.random() * 240 - 120;
  const y = Math.random() * 240 - 120;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

// NO button runs away when CLICKED
noBtn.addEventListener("click", (e) => {
  e.preventDefault();
  moveButton();
});

// YES button
yesBtn.addEventListener("click", () => {
  card.innerHTML = `
    <h1>Hehe Thank you bubby 💕😗</h1>
    <p>Here's some flowers 4 u bubby💐💐💐</p>
    <img src="Flowers.png" class="cute-img">
  `;
});



