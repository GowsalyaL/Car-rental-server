const express = require("express");
const router = express.Router();
const Booking = require("../controllers/bookingCar");
router.post("/bookingCar", Booking.bookingCar);
router.get("/Getbooking", Booking.getallbookings);
module.exports = router;