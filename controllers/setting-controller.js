
var Services = require('../services');

module.exports.create = function(req, res){
		Services.SettingSrvc.create(req.body)
		.then(function(result){
			res.json(result);
		});
}

module.exports.list = function(req, res){

	Services.SettingSrvc.list()
	.then(function(results){
		res.json(results);
	});
}

module.exports.detail = function(req, res){

	Services.SettingSrvc.detail(req.params.id)
	.then(function(result){
		res.json(result);
	});
}

module.exports.update = function (req, res) {

  	//req.body.tags = req.body.tags.repide(/\s/g , '').split(",");

    Services.SettingSrvc.update(req.params.id, req.body)
    .then(function (result) {
      res.json(result);
    });
}

module.exports.delete = function (req, res) {
    Services.SettingSrvc.remove(req.params.id)
    .then(function () {
      res.json();
    });
}
