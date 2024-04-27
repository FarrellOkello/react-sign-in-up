const StudentParentGardian = require("../model/StudentParentGardian");

const getAllStudentParentGardians = async (req, res) => {
  try {
    const response = await StudentParentGardian.find();

    return res.status(200).send(response);
  } catch (err) {
    res.status(500).send({ error: "server error" });
  }
};

const getOneStudentParentGardian = async (req, res) => {
  const id = req.params.id;

  try {
    const response = await StudentParentGardian.findById(id);

    res.status(200).send(response);
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteOneStudentParentGardian = async (req, res) => {
  const id = req.params.id;

  try {
    const response = await StudentParentGardian.findByIdAndDelete(id);

    res.status(200).send(response);
  } catch (error) {
    res.status(500).send(error);
  }
};

const createNewStudentParentGardian = async (req, res) => {
  const { regNo, parentId, relationship } = req.body;

  if (!regNo || !parentId|| !relationship) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    await StudentParentGardian.create({
      regNo,
      parentId,
      relationship,
    });

    res.status(201).send({ message: "New Student Parent Gardian has been added" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const updateStudentParentGardian = async (req, res) => {
  const id = req.params.id;

  const updatedData = {
    regNo: req.body.regNo,
    parentId: req.body.parentId,
    relationship: req.body.relationship,
  };

  try {
    const response = await StudentParentGardian.findByIdAndUpdate(id, updatedData);

    res.status(200).send(response);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  getAllStudentParentGardians,
  getOneStudentParentGardian,
  createNewStudentParentGardian,
  updateStudentParentGardian,
  deleteOneStudentParentGardian,
};
