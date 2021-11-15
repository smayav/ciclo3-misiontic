const mongoose = require('mongoose');

const user_schema = new mongoose.Schema({
    barcode:{
        type:Number,
        required: true,
        min: 1
    },

    name_user:{
        type: String,
        required: true,
        min: 1
    },

    rol:{
        type: String,
        required: true,
        min: 1
        // usuario, administrador, vendedor
    },

    state:{
        type: String,
        required: true
        //pendiente, autorizado, no autorizado
    }
});



module.exports = mongoose.model("user", user_schema);