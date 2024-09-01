// document
//   .getElementById("emailForm")
//   .addEventListener("submit", function (event) {
//     event.preventDefault();

//     const emailInput = document.getElementById("email");
//     const errorMessage = document.getElementById("error-message");
//     const email = emailInput.value;
//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     if (emailPattern.test(email)) {
//       errorMessage.textContent = "";
//       //   alert("Email is valid!");
//     } else {
//       errorMessage.textContent = "Please enter a valid email address.";
//     }
//   });

const notifyMe = document.getElementById("notify-me");

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
      arrowButton.style.display = "none";
    } else {
      arrowButton.style.display = "block";
    }
  }

  // Scroll to next page when arrow is clicked
  arrowButton.addEventListener("click", scrollToNextPage);

  // Check scroll position on page load and on scroll
  window.addEventListener("scroll", checkScroll);
  window.addEventListener("resize", checkScroll);
  checkScroll();

  notifyMe.addEventListener("click", function () {
    event.preventDefault();

    const errorMessage = document.getElementById("error-message");
    const successMessage = document.getElementById("successMessage");
    const email = document.getElementById("email").value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      errorMessage.textContent = "Please enter a valid email address.";
      return;
    } else {
      errorMessage.textContent = "";
    }

    let questionSecond = form.querySelectorAll(
      'input[name="question-2"]:checked'
    );
    let questionThird = form.querySelectorAll(
      'input[name="question-3"]:checked'
    );
    let questionFourth = form.querySelectorAll(
      'input[name="question-4"]:checked'
    );
    let questionFifth = form.querySelectorAll(
      'input[name="question-5"]:checked'
    );
    questionSecond = Array.from(questionSecond)
      .map((el) => el.value)
      .join(",");
    questionThird = Array.from(questionThird)
      .map((el) => el.value)
      .join(",");
    questionFourth = Array.from(questionFourth)
      .map((el) => el.value)
      .join(",");
    questionFifth = Array.from(questionFifth)
      .map((el) => el.value)
      .join(",");
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        email: email,
        responseData: {
          question1: form["question-1"]["value"],
          question2: questionSecond,
          question3: questionThird,
          question4: questionFourth,
          question5: questionFifth,
        },
      }),
    };

    // Call the API using fetch
    fetch(apiUrl, options)
      .then((data) => {
        console.log(data);
        successMessage.textContent =
          "  Your response has been submitted successfully!";
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  });
  // window.addEventListener("load", checkScroll);
});

const apiUrl = "https://api.colourchalk.com/api/v0/survey";

const form = document.querySelector(".form-container");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const errorMessage = document.getElementById("error-message");
  const successMessage = document.getElementById("successMessage");
  const email = document.getElementById("email").value;
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailPattern.test(email)) {
    errorMessage.textContent = "Please enter a valid email address.";
    return;
  } else {
    errorMessage.textContent = "";
  }

  let questionSecond = form.querySelectorAll(
    'input[name="question-2"]:checked'
  );
  let questionThird = form.querySelectorAll('input[name="question-3"]:checked');
  let questionFourth = form.querySelectorAll(
    'input[name="question-4"]:checked'
  );
  let questionFifth = form.querySelectorAll('input[name="question-5"]:checked');
  questionSecond = Array.from(questionSecond)
    .map((el) => el.value)
    .join(",");
  questionThird = Array.from(questionThird)
    .map((el) => el.value)
    .join(",");
  questionFourth = Array.from(questionFourth)
    .map((el) => el.value)
    .join(",");
  questionFifth = Array.from(questionFifth)
    .map((el) => el.value)
    .join(",");
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      email: email,
      responseData: {
        question1: form["question-1"]["value"],
        question2: questionSecond,
        question3: questionThird,
        question4: questionFourth,
        question5: questionFifth,
      },
    }),
  };

  // Call the API using fetch
  fetch(apiUrl, options)
    .then((data) => {
      console.log(data);
      successMessage.textContent =
        "  Your response has been submitted successfully!";
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
});
