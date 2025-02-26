export default function decorate(block) {
  const rows = [...block.children];
  if (rows.length === 2) {
    rows[0].classList.add('teaser-image');
    rows[1].classList.add('teaser-text');
  }
}
