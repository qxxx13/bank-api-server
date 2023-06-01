const Router = require("express");
const router = new Router();
const ATMController = require("../controller/atm.controller");

router.post("/atm", ATMController.createATM);
router.get("/atm", ATMController.getATM);
router.get("/atm/:id", ATMController.getOneATM);
router.put("/atm", ATMController.updateATM);
router.delete("/atm/:id", ATMController.deleteATM);

module.exports = router;
