const {user_model} = require('../models');
const joi = require('@hapi/joi');

verifyTypes = (req, res, next) => {
    const user_joi = joi.object({
      _id: joi.optional(),
      barcode:  joi.number().required(),
      name_user: joi.string().required(),
      rol: joi.string().required(),
      state: joi.string().required()
    });

    const {error} = user_joi.validate(req.body);
    if(error) return res.status(400).json({error: true, mensaje: error.details[0].message});
    next();

}

verifyBarcode = (req, res, next) => {
    user_model.findOne({barcode: req.body.barcode}).exec((error, user) => {
      if(error) return res.status(500).json({error: true, mensaje: error});
      if(user) return res.status(400).json({error: true, mensaje: "Usuario ya registrado"});
      next();
    });
  }

module.exports = Object.freeze({
    verifyTypes,
    verifyBarcode
});