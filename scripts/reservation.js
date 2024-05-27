document.getElementById("popupBtn").addEventListener("click", function () {
  var popupMenu = document.getElementById("popupMenu");
  popupMenu.style.display =
    popupMenu.style.display === "none" ? "block" : "none";
});

const data = {
  reservations: [
    {
      id: 1,
      name: "John Doe",
      phone: "+79991234567",
      date: "2022-05-15",
      time: "18:00",
      number: 2,
      comment: "I would like to try the vegetarian dish.",
    },
    // Add more reservations here...
  ],
};

const jsonData = JSON.stringify(data, null, 2);

const popupForm = document.getElementById("popupForm");
popupForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // Get the form values
  const name = document.getElementById("name").value;
  const text = document.getElementById("text").value;
  const phone = document.getElementById("phone").value;

  // You can now use the form values to send data to your server or save them in a JSON file.
  console.log(`Name: ${name}`);
  console.log(`text: ${text}`);
  console.log(`Phone: ${phone}`);

  // Hide the popup
  popup.style.display = "none";
});
fetch("db.json", {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  },
  body: jsonData,
})
  .then((response) => {
    if (response.ok) {
      console.log("Data written successfully");
    } else {
      console.error("Error writing data:", response.statusText);
    }
  })
  .catch((error) => {
    console.error("Error writing data:", error);
  });
