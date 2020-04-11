const express = require('express');
const router = express.Router();

const { check, validationResult } = require('express-validator/check');
// https://express-validator.github.io/docs/

// @route POST api/users
// @desc Register user
// @access Public
router.post(
	'/',
	[
		check('name', 'Votre nom est requis').not().isEmpty(),
		check('email', 'S.V.P, veuillez saisir un E-mail valide').isEmail(),
		check(
			'password',
			'S.V.P, veuillez saisir un password avec minimum 6 caractères'
		).isLength({
			min: 6,
		}),
	],
	(req, res) => {
		// console.log('req :', req);
		console.log('req.body :', req.body);

		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({
				errors: errors.array(),
			});
		}

		res.send('User route POST');
	}
);

module.exports = router;
