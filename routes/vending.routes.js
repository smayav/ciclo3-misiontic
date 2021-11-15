const router = require('express').Router();
const {vending_controller} = require('../controllers');
const {vending_middleware} = require('../middlewares');

router.get('/list', vending_controller.getAllVendings);
router.post ('/add', vending_middleware.verifyTypes, vending_middleware.verifyBarcode , vending_controller.addVendings);
router.put('/update', vending_middleware.verifyTypes,  vending_controller.updateVending);
router.delete ('/delete/:id', vending_controller.deleteVending);

module.exports = router;