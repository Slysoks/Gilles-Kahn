const body = document.querySelector("body");
const cursor = document.getElementById("cursor");
const checkpoints = document.querySelectorAll(".checkpoint");

body.style.cursor = "none";

cursor.style.width = "60px";
cursor.style.height = "60px";
cursor.style.backgroundColor = "var(--gray)";
cursor.style.mixBlendMode = "difference";
cursor.style.borderRadius = "50%";
cursor.style.position = "fixed";
cursor.style.zIndex = "998";
cursor.style.transition = "background-color 0.3s ease, width 0.3s ease, height 0.3s ease";
cursor.style.transformOrigin = "30px 30px";

let mouseX = 0;
let mouseY = 0;

body.addEventListener("mousemove", (e) => {
  mouseX = e.clientX - 30; // Center the cursor
  mouseY = e.clientY - 30; // Center the cursor
});

function updateCursor() {
  cursor.style.top = `${mouseY}px`;
  cursor.style.left = `${mouseX}px`;
  requestAnimationFrame(updateCursor);
}

updateCursor(); // Start the animation loop

body.addEventListener("mouseenter", () => {
  cursor.style.width = "60px";
  cursor.style.height = "60px";
  cursor.style.backgroundColor = "#F0F0F0";
});

body.addEventListener("mouseleave", () => {
  cursor.style.width = "0";
  cursor.style.height = "0";
  cursor.style.backgroundColor = "transparent";
});

checkpoints.forEach((checkpoint) => {
  checkpoint.addEventListener("mouseenter", () => {
    cursor.style.width = "100px";
    cursor.style.height = "100px";
    cursor.style.backgroundColor = "#F0F0F0";
  });

  checkpoint.addEventListener("mouseleave", () => {
    cursor.style.width = "60px";
    cursor.style.height = "60px";
    cursor.style.backgroundColor = "#F0F0F0";
  });
});