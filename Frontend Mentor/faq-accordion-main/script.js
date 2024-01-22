// script file for the FAQ Accordion
document.addEventListener("DOMContentLoaded", function () {
  const accordionItems = document.querySelectorAll(".accordion-item");

  accordionItems.forEach((item) => {
    const button = item.querySelector(".accordion-header");
    const content = item.querySelector(".accordion-content");
    const icon1 = item.querySelector(".icon-1");
    const icon2 = item.querySelector(".icon-2");

    button.addEventListener("click", function () {
      // Close all other accordion items
      accordionItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem
            .querySelector(".accordion-content")
            .classList.remove("open");
          otherItem
            .querySelector(".accordion-header")
            .classList.remove("active");
          otherItem.querySelector(".icon-1").style.display = "inline";
          otherItem.querySelector(".icon-2").style.display = "none";
        }
      });
      // Toggle the visibility of the content
      content.classList.toggle("open");

      // Toggle the active state of the button
      button.classList.toggle("active");

      // Toggle the display of icons
      icon1.style.display = content.classList.contains("open")
        ? "none"
        : "inline";
      icon2.style.display = content.classList.contains("open")
        ? "inline"
        : "none";
    });
  });
});
