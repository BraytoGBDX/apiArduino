import { model, Schema } from "mongoose";

const sensorSchema = new Schema({
    type : String, 
    name : String,
    brand : String,
    model : String,
    specifications : [],
    location : String,
    status : String,
    initialDate : {
        type: Date,
        default: Date.now,
        require:false
    },
    owner : String,
   
    readings : []
})  

export default model('Sensor', sensorSchema);