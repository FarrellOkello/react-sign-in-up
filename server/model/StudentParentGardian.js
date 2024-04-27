const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentParentGardianSchema = new Schema({
  regNo: {
    type: String,
    required: true,
  },
  parentId: {
    type: String,
    required: true,
  },
  relationship: {
    type: String,
    required: true,
  },
});
const StudentParentGardian = mongoose.model("studentParentGardian", studentParentGardianSchema);
module.exports = StudentParentGardian;
