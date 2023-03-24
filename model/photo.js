const db = require('../config/db');

let photo = {
	'getPhotos': async function () {

		let conn = await db.getConnection();
		const result = await conn.query("select photoid, filename, description,date_modified from photo order by date_modified desc");

		let status = conn.end();

		let ret = {
			'rows': result,
			'status': status
		};

		return ret;
	},
	'getPhoto': async function (id) {
		let conn = await db.getConnection();
		const result = await conn.query("select photoid, filename, description,date_modified from photo where photoid = ?", [id]);

		let status = conn.end();

		let ret = {
			'row': result[0],
			'status': status
		};

		return ret;
	}

};




module.exports = photo;