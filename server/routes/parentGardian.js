const express = require("express");
const router = express.Router();
const parentGardiansController = require("../controllers/parentGardiansController");
const ROLES_LIST = require("../config/rolesList");
const verifyRoles = require("../middleware/verifyRoles");
const verifyJWT = require("../middleware/verifyJWT");

router
  .route("/")
  .get(verifyJWT, parentGardiansController.getAllParents)
  .post(
    verifyJWT,
    verifyRoles(ROLES_LIST.Admin),
    parentGardiansController.createNewParent
  );

router
  .route("/:id")
  .get(verifyJWT, parentGardiansController.getOneParent)
  .put(
    verifyJWT,
    verifyRoles(ROLES_LIST.Editor, ROLES_LIST.Admin),
    parentGardiansController.updateParent
  )
  .delete(
    verifyJWT,
    verifyRoles(ROLES_LIST.Admin),
    parentGardiansController.deleteOneParent
  );

module.exports = router;
