const name = document.getElementById("name").value;
const phone = document.getElementById("phone").value;
const date = document.getElementById("date").value;
const time = document.getElementById("time").value;
const number = document.getElementById("people").value;
const comment = document.getElementById("comment").value;
import fs from "fs-extra";
// Get the values from the input fields

// Create a JSON object with the reservation data
const reservation = {
  name,
  phone,
  date,
  time,
  number,
  comment,
};

// Convert the JSON object to a JSON string
const jsonData = JSON.stringify(reservation, null, 2);

// Write the JSON data to a file using fs-extra
fs.writeJSON("data.json", reservation, { spaces: 2 })
  .then(() => {
    console.log("Data written successfully");
  })
  .catch((error) => {
    console.error("Error writing data:", error);
  });
