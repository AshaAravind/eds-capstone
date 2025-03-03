export async function fetchData(source) {
  const response = await fetch(source);
  if (!response.ok) {
    // eslint-disable-next-line no-console
    console.error('error loading API response', response);
    return null;
  }
  const json = await response.json();
  if (!json) {
    // eslint-disable-next-line no-console
    console.error('empty API response', source);
    return null;
  }
  return json.data;
}

export async function fetchMagazines(block) {
  const magazines = await fetchData('/query-index.json');
  const articlesContainer = document.createElement('div');
  articlesContainer.classList.add('articles-container');
  magazines.forEach((result) => {
    const { path } = result;
    if (path.startsWith('/magazine')) {
      const magazinecontainer = document.createElement('div');
      magazinecontainer.classList.add('magazine');
      const anchor = document.createElement('a');
      const magazineImg = document.createElement('img');
      magazineImg.src = result.image;
      anchor.append(magazineImg);
      anchor.href = result.path;
      const title = document.createElement('h4');
      title.textContent = result.title;
      anchor.append(title);
      magazinecontainer.append(anchor);
      const desc = document.createElement('p');
      desc.innerHTML = result.description;
      magazinecontainer.append(desc);
      articlesContainer.append(magazinecontainer);
    }
  });
  block.append(articlesContainer);
}

export default function decorate(block) {
  fetchMagazines(block);
}
