document
  .getElementById("emailForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const emailInput = document.getElementById("email");
    const errorMessage = document.getElementById("error-message");
    const email = emailInput.value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailPattern.test(email)) {
      errorMessage.textContent = "";
      //   alert("Email is valid!");
    } else {
      errorMessage.textContent = "Please enter a valid email address.";
    }
  });

document.addEventListener("DOMContentLoaded", function () {
  const arrowButton = document.getElementById("navigateButton");
  const page1 = document.getElementById("container-section");
  const page2 = document.getElementById("questionnaire");

  function scrollToNextPage() {
    window.scrollTo({
      top: page2.offsetTop,
      behavior: "smooth",
    });
  }

  function checkScroll() {
    const arrowButton = document.getElementById("navigateButton");
    var scrollPosition = window.scrollY;
    const page1 = document.querySelector(".container-section").offsetHeight;

    if (scrollPosition >= page1) {
      arrowButton.style.opacity = "0";
    } else {
      arrowButton.style.opacity = "1";
    }
  }

  // Scroll to next page when arrow is clicked
  arrowButton.addEventListener("click", scrollToNextPage);

  // Check scroll position on page load and on scroll
  window.addEventListener("scroll", checkScroll);
  window.addEventListener("resize", checkScroll);
  checkScroll();
  // window.addEventListener("load", checkScroll);
});
