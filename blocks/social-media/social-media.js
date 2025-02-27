export default function decorate(block) {
  const socialMediaParentDiv = block.querySelector('div');
  socialMediaParentDiv.classList.add('social-media-parent');

  const socialMedia = socialMediaParentDiv.querySelector('div');
  socialMedia.classList.add('social-media-icons');

  const followUs = document.createElement('div');
  followUs.innerHTML = '<p>Follow Us </p>';
  followUs.classList.add('social-media-prefix');

  socialMediaParentDiv.prepend(followUs);
}
