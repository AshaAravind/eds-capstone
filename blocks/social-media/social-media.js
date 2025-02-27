export default function decorate(block) {
  console.log(block);
  let socialMediaParentDiv = block.querySelector("div");
  socialMediaParentDiv.classList.add("social-media-parent");

  let socialMedia = socialMediaParentDiv.querySelector("div");
  socialMedia.classList.add("social-media-icons");

  let followUs = document.createElement("div");
  followUs.innerHTML = "<p>Follow Us </p>"
  followUs.classList.add("social-media-prefix");

  socialMediaParentDiv.prepend(followUs);



}
