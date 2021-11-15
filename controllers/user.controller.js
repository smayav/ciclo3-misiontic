const {user_model} = require('../models');


getAllUsers =(req, res) => {
    user_model.find().exec((error, users) => {
        if(error) return res.status(500).json({error: true, mensaje: error});
        res.json({users});
    }); 
}

addUsers =(req, res) => {
    const new_user = new user_model(req.body);

    new_user.save((error, users) => {
        if(error) return res.status(500).json({error: true, mensaje: error});
        res.json({mensaje: "Usuario guardado correctamente "});
    });
}

deleteUser = async(req, res) => {
    const user_delete = await user_model.findByIdAndDelete({_id: req.params.id})

    try{
        if(user_delete) return res.json({mensaje: user_delete.name_user + " eliminado correctamente"})
        else return res.status(500).json({error: true, mensaje: "falla al eliminar"});
    }catch(error){
        return res.status(500).json({error: true, mensaje: error});
    }
}

updateUser = async(req, res) => {
    try{
        const user_update = await user_model.findByIdAndUpdate({_id: req.body._id}, req.body, {useFindAndModify: false});
        if(user_update) return res.json({mensaje: "Usuario actualizado correctamente "});
        else return res.status(400).json({error: true, mensaje: "falla al actualizar"});
    }catch(error){
        return res.status(500).json({error: true, mensaje: error});
    }
}

module.exports = Object.freeze({
    getAllUsers,
    addUsers,
    deleteUser,
    updateUser
})