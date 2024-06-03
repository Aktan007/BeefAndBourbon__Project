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
          // You can add additional code here to display a success message or clear the form fields
        } else {
          console.error("Error sending email:", response.statusText);
          // You can add additional code here to display an error message or handle the failure
        }
      })
      .catch(function (error) {
        console.error("Error:", error);
        // You can add additional code here to display an error message or handle the failure
      });
  });
