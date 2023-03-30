const Booking = require('../module/bookingCar')
exports.bookingCar =  async(req,res)=>{
    try {
        const newbooking = new Booking(req.body)
        await newbooking.save()
        
        const car = await Car.findOne({_id: req.body.car})
        car.bookedTimeSlots.push(req.body.bookedTimeSlots)
        await car.save()
        res.send("Your Booking is successfull")        
    } catch (error) {
        console.log(error)
        return res.json(error) 
    }
}


exports.getallbookings =  async(req,res)=>{
    try {
        const bookings = await Booking.find().populate('car')
        res.send(bookings)

        
    } catch (error) {
        return res.json(error)        
    }
}


