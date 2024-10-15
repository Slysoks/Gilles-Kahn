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
