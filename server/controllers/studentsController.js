const ParentGardian = require("../model/ParentGardian");
const Student = require("../model/Student");

const getAllStudents = async (req, res) => {
  try {
    const response = await Student.find();

    return res.status(200).send(response);
  } catch (err) {
    res.status(500).send({ error: "server error" });
  }
};

const getOneStudent = async (req, res) => {
  const id = req.params.id;

  try {
    const response = await Student.findById(id);

    res.status(200).send(response);
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteOneStudent = async (req, res) => {
  const id = req.params.id;

  try {
    const response = await Student.findByIdAndDelete(id);

    res.status(200).send(response);
  } catch (error) {
    res.status(500).send(error);
  }
};

const createNewStudent = async (req, res) => {
  const {
    regNo,
    studentNo,
    name,
    course,
    homeDistrict,
    dob,
    telNumber,
    ninNumber,
    contactAddress,
    sex,
    date,
    yearOfsponsorship,
    reason,
    whoRecommendedYou,
  } = req.body;

  if (
    !name ||
    !regNo ||
    !studentNo ||
    !course ||
    !homeDistrict ||
    !dob ||
    !telNumber ||
    !ninNumber ||
    !contactAddress ||
    !sex ||
    !date ||
    !yearOfsponsorship ||
    !reason ||
    !whoRecommendedYou
  ) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    await Student.create({
      regNo,
      studentNo,
      name,
      course,
      homeDistrict,
      dob,
      telNumber,
      ninNumber,
      contactAddress,
      sex,
      date,
      yearOfsponsorship,
      reason,
      whoRecommendedYou,
    });
    res.status(201).send({ message: "New Student has been added" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const createNewStudentAndParent = async (req, res) => {
  const { studentData, parentData } = req.body;
  try {
    // Create Parent
    const parent = await ParentGardian.create(parentData);
    // Create Student with a reference to the parent
    const student = await Student.create({ ...studentData, parent_id: parent._id });
    // Send success response
    res.send('Student and parent registered successfully');
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Error registering student and parent');
  }  
};



const updateStudent = async (req, res) => {
  const id = req.params.id;
  const updatedData = {
    regNo: req.body.regNo,
    studentNo: req.body.studentNo,
    name: req.body.name,
    course: req.body.course,
    homeDistrict: req.body.homeDistrict,
    dob: req.body.dob,
    telNumber: req.body.telNumber,
    ninNumber: req.body.ninNumber,
    contactAddress: req.body.contactAddress,
    sex: req.body.sex,
    date: req.body.date,
    yearOfsponsorship: req.body.yearOfsponsorship,
    reason: req.body.reason,
    whoRecommendedYou: req.body.whoRecommendedYou,
  };

  try {
    const response = await Student.findByIdAndUpdate(id, updatedData);
    res.status(200).send(response);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  getAllStudents,
  getOneStudent,
  createNewStudent,
  updateStudent,
  deleteOneStudent,
  createNewStudentAndParent
};
