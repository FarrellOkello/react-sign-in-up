const express = require("express");
const router = express.Router();
const AcademicPerformanceController = require("../controllers/academicPerformanceController");
const ROLES_LIST = require("../config/rolesList");
const verifyRoles = require("../middleware/verifyRoles");
const verifyJWT = require("../middleware/verifyJWT");

router
  .route("/")
  .get(verifyJWT, AcademicPerformanceController.getAllAcademicPerformances)
  .post(
    verifyJWT,
    verifyRoles(ROLES_LIST.Admin),AcademicPerformanceController.createNewAcademicPerformance
  );

router
  .route("/:id")
  .get(verifyJWT, AcademicPerformanceController.getOneAcademicPerformance)
  .put(
    verifyJWT,
    verifyRoles(ROLES_LIST.Editor, ROLES_LIST.Admin),
    AcademicPerformanceController.updateAcademicPerformance
  )
  .delete(
    verifyJWT,
    verifyRoles(ROLES_LIST.Admin),
    AcademicPerformanceController.deleteOneAcademicPerformance
  );

module.exports = router;
