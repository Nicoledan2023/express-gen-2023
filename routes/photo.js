const router = require('express').Router();


const photo = require('../model/photo');
router.get('/', async (req, res) => {
    const photos = await photo.getPhotos();
    res.render('photos',photos.rows);
});

router.get('/:photoid([1-9][0-9]?)', async (req, res) => {
    const photos = await photo.getPhoto(req.params.photoid);
    res.render('photo',photos.rows);
});


module.exports = router;

