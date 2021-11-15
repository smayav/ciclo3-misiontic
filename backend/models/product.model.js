const mongoose = require('mongoose');

const product_schema = new mongoose.Schema({
    barcode:{
        type:Number,
        required: true,
        min: 1
    },

    description:{
        type: String,
        required: true,
        min: 1
    },

    unit_cost:{
        type: Number,
        required: true
    },

    state:{
        type: Boolean,
        default: true
    }
});



module.exports = mongoose.model("product", product_schema);