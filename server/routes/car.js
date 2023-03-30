const express = require("express");
const router = express.Router();
const car = require("../controllers/car");
router.get("/getallcar", car.getAllcar);
router.post("/addcar", car.addCar);
router.put("/editcar", car.editCar);
router.delete("/deletecar", car.deleteCar);

module.exports = router;