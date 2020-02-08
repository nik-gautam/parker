import mongoose = require("mongoose");

const geoSchema = new mongoose.Schema({
    type: {
        type: String,
        default: "Point"
    },
    coordinates: {
        type: [Number],
        index: "2dsphere"
    }
});

const parkingSchema = new mongoose.Schema({
    parking_name: {
        type: String,
        required: true
    },
    geometry: geoSchema,
    max: {
        type: Number,
        required: true
    },
    parking: [
        [
            {
                uid: {
                    type: String,
                    required: true
                },
                arrival: {
                    type: String,
                    required: true
                },
                depart: {
                    type: String,
                    required: true
                }, 
                datetime: {
                    type: String,
                    required: true
                }
            }
        ]
    ]
});

const Parking = mongoose.model('Parking', parkingSchema);
export default Parking;

// if(parking[i].length == 0)
// else {
//    7 -> all full
// if(person_after == null)-> 
//  user_arr > depart->person_before && user_dapart < arrival->person_after
//}
// Parking.find({parking_name: name})