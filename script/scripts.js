// var modal = document.getElementById("questionnaireModal");

// var btn = document.getElementById("openQuestionnaireBtn");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks the button, open the modal
// btn.onclick = function () {
//   modal.style.display = "flex";
// };

// span.onclick = function () {
//   modal.style.display = "none";
// };

// window.onclick = function (event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// };

// document
//   .getElementById("questionnaireForm")
//   .addEventListener("submit", function (event) {
//     event.preventDefault();
//     modal.style.display = "none";
//   });

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
    const page1Rect = page1.getBoundingClientRect();
    if (page1Rect.bottom <= window.innerHeight) {
      arrowButton.classList.add("hidden");
    } else {
      arrowButton.classList.remove("hidden");
    }
  }

  // Scroll to next page when arrow is clicked
  arrowButton.addEventListener("click", scrollToNextPage);

  // Check scroll position on page load and on scroll
  window.addEventListener("scroll", checkScroll);
  window.addEventListener("load", checkScroll);
});
