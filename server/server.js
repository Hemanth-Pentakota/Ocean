const express = require("express");

const cors = require("cors");

const app = express();

require("dotenv").config();

const Bottle = require("./models/Bottle");

const connectDB = require("./config/db");

connectDB();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Ocean Server Running 🌊");
});

app.post("/api/bottle", async (req, res) => {
  try {
    const bottle = await Bottle.create({
      message: req.body.message,
    });

    res.json({
      success: true,
      bottle,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
    });
  }
});

app.get("/api/bottle/random", async (req, res) => {
  try {
    const exclude = req.query.exclude;

    let query = {};

    if (exclude) {
      query = {
        _id: { $ne: exclude },
      };
    }

    const count = await Bottle.countDocuments(query);

    const random = Math.floor(
      Math.random() * count
    );

    const bottle = await Bottle.findOne(query)
      .skip(random);

    res.json(bottle);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
    });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server running on port 5000");
}); 