const express = require("express");
const router = express.Router();
const StudentParentGardianController = require("../controllers/studentParentGardianController");
const ROLES_LIST = require("../config/rolesList");
const verifyRoles = require("../middleware/verifyRoles");
const verifyJWT = require("../middleware/verifyJWT");

router
  .route("/")
  .get(verifyJWT, StudentParentGardianController.getAllStudentParentGardians)
  .post(
    verifyJWT,
    verifyRoles(ROLES_LIST.Admin),
    StudentParentGardianController.createNewStudentParentGardian
  );

router
  .route("/:id")
  .get(verifyJWT, StudentParentGardianController.getOneStudentParentGardian)
  .put(
    verifyJWT,
    verifyRoles(ROLES_LIST.Editor, ROLES_LIST.Admin),
    StudentParentGardianController.updateStudentParentGardian
  )
  .delete(
    verifyJWT,
    verifyRoles(ROLES_LIST.Admin),
    StudentParentGardianController.deleteOneStudentParentGardian
  );

module.exports = router;
