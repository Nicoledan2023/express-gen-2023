
const router = require('express').Router();
const page = require('../model/page');

/* GET home page. */
router.get('/', function (req, res, next) {
	loadPage('index', 'welcome', req, res, next);
});

router.get('/:key/edit', async function (req, res, next) {
	loadPage('editPage', req.params.key, req, res, next);
});

router.get('/addpage', async function (req, res, next) {

	const menuItems = await page.getMenuItems(); // retrieve the menu items

	res.render('addPage', { 
		menu: menuItems,
		login: req.login,
		redirect: req.baseUrl + req.path
	});

});

router.post('/addpage', async function (req, res, next) {

	if (req.login.loggedIn) {
		let title = req.body.title;
		let content = req.body.content;
		let key = req.body.key.toLowerCase().replace(/s/g, '');
		page.addPage(key, title, content);
	}

	res.redirect('/');
});
router.post('/:key/edit', async function (req, res, next) {

	if (req.login.loggedIn) {
		let title = req.body.title;
		let content = req.body.content;
		let key = req.body.key;
		page.updatePage(key, title, content);
	}

	res.redirect('/' + req.params.key);
});

router.get('/:key', async function (req, res, next) {
	loadPage('index', req.params.key, req, res, next);
});


let loadPage = async function (template, key, req, res, next) {

	const pg = await page.getPage(key); 
	if (pg.status == false) {
		next();
	} else {
		const menuItems = await page.getMenuItems(); 
		
		res.render(template, { 
			menu: menuItems,
			title: pg.row.title,
			key: pg.row.key,
			login: req.login,
			content: pg.row.content,
			redirect: req.baseUrl + req.path
		});
	}
}

module.exports = router;
