const homeController = require('../controllers/homeController');
const aboutController = require('../controllers/aboutController');
const loginController = require('../controllers/loginController');
const productsController = require('../controllers/productsController');
const registerController = require('../controllers/registerController');
const dashboardController = require('../controllers/dashboardController');
const userlistController = require('../controllers/userlistController');


module.exports = function(app){
    app.get('/', homeController);
    app.get('/about', aboutController);
    app.get('/login', loginController.index);
    app.post('/login', loginController.submit);
    app.get('/register', registerController.index);
    app.post('/register', registerController.submit);
    app.get('/product', productsController.index);
    app.get('/product/create', productsController.create);
    app.post('/product/create', productsController.doCreate);
    app.get('/product-details', productsController.details);
    app.get('/dashboard', dashboardController);

    //task
    app.get('/user/list', userlistController.index);
    app.get('/user/:userId', userlistController.view);
    app.post('/user/:userId/update', userlistController.update);
}
