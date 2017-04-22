var express = require('express');
var router = express.Router();

router.get('/:resource', function(req, res, next) {
	var resource = req.params.resource

	if(resource == 'nam-wayne-storm-trooper-suit'){
		// console.log('nam?  ')
		// res.json({
		// 	confirmation: 'success',
		// 	resource: resource
		// });
		res.render('meet-nam')

	};
});

module.exports = router;
