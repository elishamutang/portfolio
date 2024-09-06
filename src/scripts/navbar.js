class HeaderDiv extends HTMLElement {
  constructor() {
    super();

    const allAnchorTags = this.getElementsByTagName("a");

    Array.from(allAnchorTags).forEach((tag) => {
      tag.addEventListener("click", (e) => {
        this.updateClass(e.target);
      });
    });
  }

  updateClass(elem) {
    console.log(elem);
    elem.classList.add("active");
  }
}

customElements.define("astro-navbar", HeaderDiv);
