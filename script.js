const image = document.getElementById('image');

image.addEventListener('mousemove', (e) => {
  // Rotate the image according to the position of the mouse on the image
  const ratio = 50;
  const { offsetX, offsetY } = e;
  const { width, height } = image;
  const x = (offsetX / width) * ratio - ratio/2;
  const y = (offsetY / height) * ratio - ratio/2;
  console.log(x, y);
  image.style.transform = `rotateX(${y}deg) rotateY(${x}deg)`;
});

image.addEventListener('mouseleave', () => {
  // Reset the rotation of the image
  image.style.transform = 'rotateX(0deg) rotateY(0deg)';
});
