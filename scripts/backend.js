// Import the required modules
import express from "express";
import fs from "fs-extra";

// Create an Express app
const app = express();

// Parse the request body as JSON
app.use(express.json());

// Define a POST endpoint for handling form submissions
app.post("/submit", (req, res) => {
  const { name, phone, date, time, number, comment } = req.body;

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
  fs.ensureDir("data")
    .then(() => {
      // Generate a unique filename for the JSON file
      const fileName = `data/reservation-${Date.now()}.json`;

      // Write the JSON data to a file using fs-extra
      fs.writeJSON(fileName, reservation, { spaces: 2 })
        .then(() => {
          console.log("Data written successfully");
          res.status(200).json({ message: "Data written successfully" });
        })
        .catch((error) => {
          console.error("Error writing data:", error);
          res.status(500).json({ message: "Error writing data" });
        });
    })
    .catch((error) => {
      console.error("Error creating data directory:", error);
      res.status(500).json({ message: "Error creating data directory" });
    });
});

// Start the server
const PORT = process.env.PORT || 5003;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
