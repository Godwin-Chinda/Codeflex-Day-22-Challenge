document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const password = document.getElementById("password").value;
    const birthdate = document.getElementById("birthdate").value;
    const gender = document.getElementById("gender").value;

    if (!name || !email || !phone || !password || !birthdate || !gender) {
      showCustomAlert("Please fill all the required fields!", "error");
    } else {
      showCustomAlert("Form submitted successfully!", "success");
      contactForm.reset();
    }
  });

  function showCustomAlert(message, type) {
    const alertContainer = document.createElement("div");
    alertContainer.classList.add("custom-alert", type);

    alertContainer.textContent = message;

    document.body.prepend(alertContainer);

    setTimeout(() => {
      alertContainer.classList.add("show");
    }, 10);

    setTimeout(() => {
      alertContainer.classList.remove("show");
      setTimeout(() => {
        alertContainer.remove();
      }, 300);
    }, 3000);
  }
});
