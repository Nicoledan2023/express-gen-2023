const db = require('../config/db');

module.exports = {


	'getPage': async function (key) { // key ==> care
		let conn = await db.getConnection();
		key = key.toLowerCase();


		const result = await conn.query("select page_id,title,content,`key` from page where `key` = ?", [key]);



		let status = conn.end();


		let ret;
		if (result.length < 1) {

			return {
				'row': null,
				'status': false
			}
		} else {

			return {
				'row': result[0],
				'status': true
			};
		}


	},
	'getMenuItems': async function () {
		let conn = await db.getConnection();
		const result = await conn.query("select page_id,title,`key` from page where menu_order is not null order by menu_order");
		conn.end();
		return result;
	},
	'updatePage': async function (key, title, content) {
		let conn = await db.getConnection();
		key = key.toLowerCase();
		const result = await conn.query(
			"update page set title = ?, content = ? where `key` = ?",
			[title, content, key]);
		conn.end();
		return result;
	},
	'addPage': async function (key, title, content, menu_order = 1) {
		let conn = await db.getConnection();
		key = key.toLowerCase();
		const result = await conn.query(
			"insert into page (`key`,title,content,menu_order) values (?,?,?,?)",
			[key, title, content, menu_order]);
		conn.end();
		return result;
	}
};
