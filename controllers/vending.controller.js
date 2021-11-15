const {vending_model} = require('../models');

getAllVendings =(req, res) => {
    vending_model.find().exec((error, vending) => {
        if(error) return res.status(500).json({error: true, mensaje: error});
        res.json({vending});
    }); 
}

addVendings =(req, res) => {
    const new_vending = new vending_model(req.body);

    new_vending.save((error, vending) => {
        if(error) return res.status(500).json({error: true, mensaje: error});
        res.json({mensaje: "Venta guardada correctamente "});
    });
}

deleteVending = async(req, res) => {
    const vending_delete = await vending_model.findByIdAndDelete({_id: req.params.id})

    try{
        if(vending_delete) return res.json({mensaje: " eliminado correctamente"})
        else return res.status(500).json({error: true, mensaje: "falla al eliminar"});
    }catch(error){
        return res.status(500).json({error: true, mensaje: error});
    }
}

updateVending = async(req, res) => {
    try{
        const vending_update = await vending_model.findByIdAndUpdate({_id: req.body._id}, req.body, {useFindAndModify: false});
        if(vending_update) return res.json({mensaje: "Venta actualizada correctamente "});
        else return res.status(400).json({error: true, mensaje: "falla al actualizar"});
    }catch(error){
        return res.status(500).json({error: true, mensaje: error});
    }
}

module.exports = Object.freeze({
    getAllVendings,
    addVendings,
    deleteVending,
    updateVending
})