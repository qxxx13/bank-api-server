const Router = require("express");
const router = new Router();
const operationsController = require("../controller/operations.controller");

router.post("/operations", operationsController.createOperation);
router.get("/operations", operationsController.getOneOperation);
router.get("/operations/:id", operationsController.getOneOperation);
router.put("/operations", operationsController.updateOperation);
router.delete("/operations/:id", operationsController.deleteOperation);

module.exports = router;
