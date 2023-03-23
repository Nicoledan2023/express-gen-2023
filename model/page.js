const db = require('../config/db');

module.exports = {
    'getPage': async function (key) { 
        let conn = await db.getConnection();
        key = key.toLowerCase();
        const result = await conn.query("SELECT page_id,title,content,keyw from page where keyw=?",[key]);
        let status = conn.end();
        console.log(result.length);
        let ret;
        if (result.length < 1) {
            ret = {
                'rows': null,
                'status': false
            }
        } else {
            ret = {
                'rows': result[0],
                'status': true
            }
           
        }
        return ret;
    }
}