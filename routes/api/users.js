const express = require('express');

const { check, validationResult } = require('express-validator');
// https://express-validator.github.io/docs/

const gravatar = require('gravatar');
const bcrypt = require('bcrypt');
const User = require('../../models/User');

const router = express.Router();

// @route POST api/users
// @desc Register user
// @access Public
router.post(
	'/',
	[
		check('name', 'Le champ "Nom" est requis').not().isEmpty(),
		check('email', 'Veuillez saisir un "E-mail" valide').isEmail(),
		check(
			'password',
			'Veuillez saisir un "mot de passe" avec au minimum 6 caractères'
		).isLength({
			min: 6,
		}),
	],
	async (req, res) => {
		const errors = validationResult(req);

		// Si le tableau d'erreur n'est pas vide alors on définira un status 400
		if (!errors.isEmpty()) {
			return res.status(400).json({
				errors: errors.array(),
			});
		}

		// Destructuring
		const { name, email, password } = req.body;

		console.log("Avant d'avoir crypté le password");
		console.table([req.body.name, req.body.email, req.body.password]);

		try {
			// Etape 1 - On regarde si l'utilisateur est enregistré
			// Si il existe un user on définit un message d'erreur aveec un status 400

			let user = User.findOne({ email: email });

			if (user) {
				return res.status(400).json({
					errors: [
						{
							msg:
								'Désolé, cet utilisateur déjà enregistré sur cette application.',
						},
					],
				});
			}

			// Etape 2 - On récupère l'avatar de l'utilisateur
			const avatar = gravatar.url(email, {
				s: '200', // Taille de l'image
				r: 'pg', // Read
				d: 'mm', // Default "mm" correspond à l'image par défaut de l'utilisateur. On peut y mettre "404"
			});

			user = new User({
				name,
				email,
				avatar,
				pasword,
			});

			// Etape 3 - On va encrypter le password avec bxrypt
			const salt = await bcrypt.genSalt(10);
			user.password = await bcrypt.hash(password, salt);
			await user.save();

			console.log('Après avoir crypté le password');
			console.table([req.body.name, req.body.email, req.body.password]);

			// Etape 4 - On terminera par un retour du jsonwebtoken
			// code à venir dans la leçon suivante.

			res.send("L'utilisateur à bien été enregistré");
		} catch (error) {
			console.error(error.message);
			return res
				.status(500)
				.send(
					"Désolé, le serveur rencontre une erreur. Rassurez-vous, vous n'y êtes pour rien"
				);
		}

		res.send('User route POST');
	}
);

module.exports = router;
