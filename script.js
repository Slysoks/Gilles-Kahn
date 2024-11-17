const timeline = document.querySelector('.timeline');

const data = fetch('./info.json')
  .then(response => response.json())
  .then(data => (
    data.forEach(item => {
      const div = document.createElement('div');
      div.classList.add('checkpoint');
      div.innerHTML = `
        <div>
          <h2>${item.title}</h2>
          <p>${item.content}</p>
        </div>
      `;
      timeline.appendChild(div);
    })
  ));

const body = document.querySelector('body');
const cursor = document.getElementById('cursor');

body.style.cursor = 'none';

cursor.style.width = '60px';
cursor.style.height = '60px';
cursor.style.backgroundColor = 'var(--white)';
borderRadius = '50%';

body.addEventListener('mousemove', (e) => {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
});
