const mongoose = require("mongoose");
const dayjs = require("dayjs");
const Schema = mongoose.Schema;

const studentSchema = new Schema({
  regNo: {
    type: String,
    required: true,
  },
  studentNo: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  course: {
    type: String,
    required: true,
  },
  homeDistrict: {
    type: String,
    required: true,
  },
  dob: {
    type: String,
    default: dayjs().format("YYYY-MM-DD"),
  },
  telNumber: {
    type: String,
    required: true,
  },
  ninNumber: {
    type: String,
    required: true,
  },
  contactAddress: {
    type: String,
    required: true,
  },
  sex: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    default: dayjs().format("YYYY-MM-DD hh:mm:ss"),
  },
  yearOfsponsorship: {
    type: String,
    required: true,
  },
  reason: {
    type: String,
    required: true,
  },
  whoRecommendedYou: {
    type: String,
    required: true,
  },
  parent_id: {
    type: String,
    required: true,
  },
  Parent: [{
    type: Schema.Types.ObjectId,
    ref: 'Parent'
 }]
});
const Student = mongoose.model("student", studentSchema);
module.exports = Student;
