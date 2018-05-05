var express = require('express');
var router = express.Router();

router.get('/:resource', function(req, res, next) {
	var resource = req.params.resource

	if(resource == 'historic-preservation'){
		console.log('historic-preservation  ')
		// res.json({
		// 	confirmation: 'success',
		// 	resource: resource
		// });
		res.render('historic-preservation')

	};
});

module.exports = router;
