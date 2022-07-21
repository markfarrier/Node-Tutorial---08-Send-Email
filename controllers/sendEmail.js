const nodemailer = require('nodemailer');

const sendEmail = async (req, res) => {
	let testAccount = await nodemailer.createTestAccount();

	const transporter = nodemailer.createTransport({
		host: 'smtp.ethereal.email',
		port: 587,
		auth: {
			user: 'nicola.sanford96@ethereal.email',
			pass: 'tzpAnKP5dyWg39qSNd',
		},
	});

	let info = await transporter.sendMail({
		from: '"Mark Farrier" <mark.farrier@gmail.com>',
		to: 'bar@example.com',
		subject: 'Hello',
		html: '<h2>Sending Emails With Node.js</h2>',
	});

	res.json(info);
};

module.exports = sendEmail;
