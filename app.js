
const express = require("express");

const app = express();

app.use(express.json());

// Home route
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Node.js CI/CD Pipeline Application",
    status: "Running",
  });
});

// Health check route
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "healthy",
  });
});

// Addition API
app.post("/add", (req, res) => {
  const { a, b } = req.body;

  if (typeof a !== "number" || typeof b !== "number") {
    return res.status(400).json({
      error: "Please provide two numeric values: a and b",
    });
  }

  res.status(200).json({
    result: a + b,
  });
});

// Start server only when this file is run directly
if (require.main === module) {
  const PORT = process.env.PORT || 3000;

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;
