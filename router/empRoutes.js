const express = require('express');
const empController = require('../controller/empController');

// create router
const router = express.Router();

// routes
router
    .route('/employee-onboard')
    .post(empController.addEmployee)
    .get(empController.getAllEmployee)

router
    .route('/get-employee-by-id')
    .post(empController.getEmployeeById)

router
    .route('/get-left-assets')
    .get(empController.getAssets)

router
    .route('/assign-asset')
    .post(empController.assignAsset)

router
    .route('/get-assign-assets')
    .post(empController.getAssignAssets)

router
    .route('/dis-assign-asset')
    .post(empController.disAssignAsset)

router
    .route('/role')
    .post(empController.addRole)
    .get(empController.getRole)

router.route('/emp-role-update').post(empController.empRoleUpdate)

router
    .route('/awards')
    .post(empController.addAwards)
    .get(empController.getAwards)

router
    .route('/emp-awards-update')
    .post(empController.empAwardsUpdate)

router
    .route('/transfer')
    .post(empController.empTransfer)

router
    .route('/promotion')
    .post(empController.empPromotion)



module.exports = router;