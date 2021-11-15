const {product_model} = require('../models');

getAllProducts =(req, res) => {
    product_model.find().exec((error, products) => {
        if(error) return res.status(500).json({error: true, mensaje: error});
        res.json({products});
    }); 
}



addProducts =(req, res) => {
    const new_product = new product_model(req.body);

    new_product.save((error, products) => {
        if(error) return res.status(500).json({error: true, mensaje: error});
        res.json({mensaje: "Producto guardado correctamente "});
    });
}

deleteProduct = async(req, res) => {
    const product_delete = await product_model.findByIdAndDelete({_id: req.params.id})

    try{
        if(product_delete) return res.json({mensaje: product_delete.description + " eliminado correctamente"})
        else return res.status(500).json({error: true, mensaje: "falla al eliminar"});
    }catch(error){
        return res.status(500).json({error: true, mensaje: error});
    }
}

updateProduct = async(req, res) => {
    try{
        const product_update = await product_model.findByIdAndUpdate({_id: req.body._id}, req.body, {useFindAndModify: false});
        if(product_update) return res.json({mensaje: "Producto actualizado correctamente "});
        else return res.status(400).json({error: true, mensaje: "falla al actualizar"});
    }catch(error){
        return res.status(500).json({error: true, mensaje: error});
    }
}

module.exports = Object.freeze({
    getAllProducts,
    addProducts,
    deleteProduct,
    updateProduct
})