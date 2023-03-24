const router = require('express').Router();
const photo = require('../model/photo');
const page = require('../model/page');

router.get('/', async (req, res) => {

	const photos = await photo.getPhotos();
	const menuItems = await page.getMenuItems();

	//console.log(photos.rows);
	// render template 'index.hbs', send the menu items as "menu", photo records as "data"
	res.render('photos', { menu: menuItems, data: photos.rows });

});
router.get('/:photoid([1-9][0-9]?)', async (req, res) => {

	const img = await photo.getPhoto(req.params.photoid);
	const photos = await photo.getPhotos();
	const menuItems = await page.getMenuItems();
	//console.log(photos.row);
	res.render('photo', { data: img.row, menu: menuItems, photos: photos.rows });

});



module.exports = router;