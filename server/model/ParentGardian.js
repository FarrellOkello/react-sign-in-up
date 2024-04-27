const mongoose = require("mongoose");
const dayjs = require("dayjs");
const Schema = mongoose.Schema;

const parentGardianSchema = new Schema({
  parentName: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    required: true,
  },
  student: {
    type: Schema.Types.ObjectId,
    ref: "Student",
    // required: true,
  },
});
const ParentGardian = mongoose.model("parentGardian", parentGardianSchema);
module.exports = ParentGardian;

/* Student.find().populate('parent').exec(function (err, students) {
  if (err) return handleError(err);
  console.log(students);
}); */