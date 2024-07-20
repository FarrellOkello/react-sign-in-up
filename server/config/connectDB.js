const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://conraddyel:0W4KB5vsk6Lyt2hM@farrell.fj0swny.mongodb.net/?retryWrites=true&w=majority&appName=farrell", {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;

// mongodb+srv://conraddyel:0W4KB5vsk6Lyt2hM@farrell.fj0swny.mongodb.net/?retryWrites=true&w=majority&appName=farrell

// mongodb://localhost:27017/cashback