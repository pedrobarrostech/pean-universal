const ClientCtrl = require('./controller');
const router = require('express').Router();
const validate = require ('express-validation');
const paramValidation = require('../../config/param-validation');
const expressJwt = require('express-jwt');
const config: any = require('../../config/localConfig');
const jwtAuth = expressJwt({ secret: config.jwtSecret });
var models = require('../../models/index');

// get all todos
router.get('/todos', function(req, res) {
  models.Todo.findAll({}).then(function(todos) {
    res.json(todos);
  });
});





/** Load client when API with clientId route parameter is hit */
//router.param('clientId', ClientCtrl.load);

export = router;