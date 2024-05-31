const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "/")));

app.post("/reserve", (req, res) => {
  const reservationData = req.body;

  // Path to the JSON file
  const filePath = path.join(__dirname, "reservations.json");

  // Read the existing data
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      return res.status(500).send("Server Error");
    }

    let reservations = [];

    if (data) {
      reservations = JSON.parse(data);
    }

    // Add the new reservation
    reservations.push(reservationData);

    fs.writeFile(filePath, JSON.stringify(reservations, null, 2), (err) => {
      if (err) {
        console.error("Error writing file:", err);
        return res.status(500).send("Server Error");
      }

      res.send("Reservation saved successfully");
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
