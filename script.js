const navBar = document.querySelector('nav');
const checkpoints = document.querySelectorAll('.checkpoint');

checkpoints.forEach(checkpoint => {
  const element = document.createElement('a');
  element.href = `#${checkpoint.id}`;
  element.textContent = checkpoint.childNodes[1].childNodes[1].textContent;
  navBar.appendChild(element);
});