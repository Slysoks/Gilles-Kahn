const fetchData = async () => {
  const response = await fetch('./info.json');
  const data = await response.json();
  return data;
};

const renderData = async (data) => {
  const main = document.querySelector('main');
  data.forEach((item) => {
    const section = document.createElement('section');
    section.innerHTML = `
      <div class="imageWrapper">
        <img src="${item.image}" alt="${item.name}" class="sideImage" />
      </div>
      <div class="description">
        <div>
          <h2>
            ${item.title}
          </h2>
          <p>
            ${item.content}
          </p>
        </div>
      </div>
    `;
    main.appendChild(section);
  });
}

const main = async () => {
  const data = await fetchData();
  console.log(data);
  renderData(data);
};

main();