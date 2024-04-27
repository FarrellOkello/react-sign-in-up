const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const academicPerformanceSchema = new Schema({
  regNo: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  cgpa: {
    type: String,
    required: true,
  },
  pleResult: {
    type: String,
    required: true,
  },
  uceResult: {
    type: String,
    required: true,
  },
  uaceResult: {
    type: String,
    required: true,
  },
});

const AcademicPerformance = mongoose.model("academicPerformance", academicPerformanceSchema);
module.exports = AcademicPerformance;
