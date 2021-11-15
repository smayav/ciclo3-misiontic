const mongoose = require('mongoose');

const vending_schema = new mongoose.Schema({
    barcode:{
        type:Number,
        required: true,
        min: 1
    },

    total_cost:{
        type: Number,
        required: true
    },

    cant:{
        type: Number,
        required: true
    },

    unit_cost:{
        type: Number,
        required: true
    },

    date:{
        type: Date,
        required: true
    },

    id_client:{
        type:Number,
        required: true,
        min: 1
    },

    name_client:{
        type: String,
        required: true,
        min: 1
    },

    seller:{
        type: String,
        required: true,
        min: 1
    },

    state:{
        type: String,
        required: true
        //en proceso, cancelada, entregada
    }
});



module.exports = mongoose.model("vending", vending_schema);