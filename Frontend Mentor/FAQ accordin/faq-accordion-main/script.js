// script file for the FAQ Accordion
document.addEventListener("DOMContentLoaded", function () {
  const accordionItems = document.querySelectorAll(".accordion-item");

  accordionItems.forEach((item) => {
    const button = item.querySelector(".accordion-header");
    const content = item.querySelector(".accordion-content");

    button.addEventListener("click", function () {
      // Toggle the visibility of the content
      content.classList.toggle("open");

      // Toggle the active state of the button
      button.classList.toggle("active");
    });
  });
});
