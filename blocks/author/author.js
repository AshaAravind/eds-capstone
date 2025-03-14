export default function decorate(block) {
  const mainDiv = block.querySelector('div');
  const image = block.querySelector('.author p picture');
  const newImgWrapper = document.createElement('div');
  newImgWrapper.classList.add('author-image');
  newImgWrapper.append(image);
  block.append(newImgWrapper);

  const author = block.querySelector('.author h3');
  const authorTitle = block.querySelector('.author h6');
  const authorTitleDiv = document.createElement('div');
  authorTitleDiv.classList.add('author-title');
  authorTitleDiv.append(author);
  authorTitleDiv.append(authorTitle);
  block.append(authorTitleDiv);

  const icons = block.querySelectorAll('.author span.icon');
  const newButtons = document.createElement('div');
  newButtons.classList.add('author-links');
  icons.forEach((button) => {
    const parentDiv = document.createElement('p');
    parentDiv.append(button);
    newButtons.append(parentDiv);
  });
  block.append(newButtons);
  block.removeChild(mainDiv);
}
