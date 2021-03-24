const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      unique: true,
      required: true
    }
  },
  { timestampes: true }
);

module.exports = mongoose.model("Category", categorySchema);
