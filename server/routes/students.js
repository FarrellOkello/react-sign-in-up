const express = require("express");
const router = express.Router();
const studentsController = require("../controllers/studentsController");
const ROLES_LIST = require("../config/rolesList");
const verifyRoles = require("../middleware/verifyRoles");
const verifyJWT = require("../middleware/verifyJWT");

router
  .route("/")
  .get(verifyJWT, studentsController.getAllStudents)
  // .post(verifyJWT, verifyRoles(ROLES_LIST.Admin), studentsController.createNewStudent);
  .post(verifyJWT, verifyRoles(ROLES_LIST.Admin), studentsController.createNewStudentAndParent);

router
  .route("/:id")
  .get(verifyJWT, studentsController.getOneStudent)
  .put(verifyJWT, verifyRoles(ROLES_LIST.Editor, ROLES_LIST.Admin), studentsController.updateStudent)
  .delete(verifyJWT, verifyRoles(ROLES_LIST.Admin), studentsController.deleteOneStudent);

module.exports = router;
