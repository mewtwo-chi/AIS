var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
	res.render('users', {title:'A.I.S自动化工作系统'});
});

module.exports = router;