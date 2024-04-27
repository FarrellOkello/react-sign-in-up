const AcademicPerformance = require("../model/AcademicPerformance");

const getAllAcademicPerformances = async (req, res) => {
  try {
    const response = await AcademicPerformance.find();

    return res.status(200).send(response);
  } catch (err) {
    res.status(500).send({ error: "server error" });
  }
};

const getOneAcademicPerformance = async (req, res) => {
  const id = req.params.id;

  try {
    const response = await AcademicPerformance.findById(id);

    res.status(200).send(response);
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteOneAcademicPerformance = async (req, res) => {
  const id = req.params.id;

  try {
    const response = await AcademicPerformance.findByIdAndDelete(id);

    res.status(200).send(response);
  } catch (error) {
    res.status(500).send(error);
  }
};

const createNewAcademicPerformance = async (req, res) => {
  const { regNo, year, cgpa, pleResult, uceResult, uaceResult } = req.body;

  if (!regNo|| !year|| !cgpa|| !pleResult|| !uceResult|| !uaceResult) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    await AcademicPerformance.create({
      regNo,
      year,
      cgpa,
      pleResult,
      uceResult,
      uaceResult,
    });

    res.status(201).send({ message: "New AcademicPerformance has been added" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const updateAcademicPerformance = async (req, res) => {
  const id = req.params.id;

  const updatedData = {
    regNo: req.body.regNo,
    year: req.body.year,
    cgpa: req.body.cgpa,
    pleResult: req.body.pleResult,
    uceResult: req.body.uceResult,
    uaceResult: req.body.uaceResult,
  };

  try {
    const response = await AcademicPerformance.findByIdAndUpdate(id, updatedData);

    res.status(200).send(response);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  getAllAcademicPerformances,
  getOneAcademicPerformance,
  createNewAcademicPerformance,
  updateAcademicPerformance,
  deleteOneAcademicPerformance,
};
