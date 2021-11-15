const router = require('express').Router();
const {user_controller} = require('../controllers');
const {user_middleware} = require('../middlewares');

router.get('/list', user_controller.getAllUsers);
router.post ('/add', user_middleware.verifyTypes, user_middleware.verifyBarcode , user_controller.addUsers);
router.put('/update', user_middleware.verifyTypes,  user_controller.updateUser);
router.delete ('/delete/:id', user_controller.deleteUser);

module.exports = router;