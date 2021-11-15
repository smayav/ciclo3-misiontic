const {vending_model} = require('../models');
const joi = require('@hapi/joi');

verifyTypes = (req, res, next) => {
    const vending_joi = joi.object({
      _id: joi.optional(),
      barcode:  joi.number().required(),
      total_cost:  joi.number().required(),
      cant:  joi.number().required(),
      unit_cost: joi.number().required(),
      date: joi.date().required(),
      id_client: joi.number().required(),
      name_client: joi.string().required(),
      seller: joi.string().required(),
      state: joi.string().optional()
    });

    const {error} = vending_joi.validate(req.body);
    if(error) return res.status(400).json({error: true, mensaje: error.details[0].message});
    next();

}

verifyBarcode = (req, res, next) => {
    vending_model.findOne({barcode: req.body.barcode}).exec((error, vending) => {
      if(error) return res.status(500).json({error: true, mensaje: error});
      if(vending) return res.status(400).json({error: true, mensaje: " Venta ya registrada"});
      next();
    });
  }

module.exports = Object.freeze({
    verifyTypes,
    verifyBarcode
    
});