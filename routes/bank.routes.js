const Router = require("express");
const router = new Router();
const bankController = require("../controller/bank.controller");

router.post("/bank", bankController.createBank);
router.get("/bank", bankController.getBank);
router.get("/bank/:id", bankController.getOneBank);
router.put("/bank", bankController.updateBank);
router.delete("/bank/:id", bankController.deleteBank);

module.exports = router;
