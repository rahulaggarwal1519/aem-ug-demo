export default function decorate(block) {
  const rows = [...block.children];

  // First row: background image
  // Second row: content (heading, description, CTA)
  if (rows.length >= 2) {
    const [imageRow, contentRow] = rows;

    // Handle background image
    const picture = imageRow.querySelector('picture');
    if (picture) {
      block.classList.add('hero-has-image');
      const bgDiv = document.createElement('div');
      bgDiv.classList.add('hero-bg');
      bgDiv.append(picture);
      block.prepend(bgDiv);
      imageRow.remove();
    }

    // Handle content
    if (contentRow) {
      contentRow.classList.add('hero-content');

      // Style CTA links as buttons
      const links = contentRow.querySelectorAll('a');
      links.forEach((link) => {
        link.classList.add('hero-cta');
        const wrapper = link.closest('p');
        if (wrapper) {
          wrapper.classList.add('hero-cta-container');
        }
      });
    }
  } else if (rows.length === 1) {
    // Single row - treat as content only
    rows[0].classList.add('hero-content');
  }
}
