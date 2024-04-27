const ParentGardian = require("../model/ParentGardian");

const getAllParents = async (req, res) => {
  try {
    const response = await ParentGardian.find();

    return res.status(200).send(response);
  } catch (err) {
    res.status(500).send({ error: "server error" });
  }
};

const getOneParent = async (req, res) => {
  const id = req.params.id;

  try {
    const response = await ParentGardian.findById(id);

    res.status(200).send(response);
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteOneParent = async (req, res) => {
  const id = req.params.id;

  try {
    const response = await ParentGardian.findByIdAndDelete(id);

    res.status(200).send(response);
  } catch (error) {
    res.status(500).send(error);
  }
};

const createNewParent = async (req, res) => {
  const { parentName, contact, status } = req.body;

  if (!parentName || !contact|| !status) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    await ParentGardian.create({
      parentName,
      contact,
      status: 1,
    });

    res.status(201).send({ message: "New Parent or Gardian has been added" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const updateParent = async (req, res) => {
  const id = req.params.id;

  const updatedData = {
    parentName: req.body.parentName,
    contact: req.body.contact,
    status: req.body.status,
  };

  try {
    const response = await ParentGardian.findByIdAndUpdate(id, updatedData);

    res.status(200).send(response);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  getAllParents,
  getOneParent,
  createNewParent,
  updateParent,
  deleteOneParent,
};
