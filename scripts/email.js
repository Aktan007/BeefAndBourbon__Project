document
  .querySelector(".footer__form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission from refreshing the page

    let email = document.querySelector(
      '.footer__form input[type="email"]'
    ).value;

    fetch("https://gmail.googleapis.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email }),
    })
      .then(function (response) {
        if (response.ok) {
          console.log("Email sent successfully");
        } else {
          console.error("Error sending email:", response.statusText);
        }
      })
      .catch(function (error) {
        console.error("Error:", error);
      });
  });
