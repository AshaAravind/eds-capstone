export default function decorate() {
  const pageTitle = document.querySelector('.hero-container h1');
  const breadcrumb = document.querySelector('.breadcrumb');
  pageTitle.insertAdjacentElement('beforebegin', breadcrumb);
}
