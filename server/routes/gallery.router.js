const express = require('express');
const router = express.Router();
// const galleryItems = require('../modules/gallery.data');
const pool = require('../modules/pool');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    console.log('in PUT route');
    console.log(req.params);
    const valueArray = [req.params.id]
    const sqlText = `
    UPDATE "images"
    SET "likes" = "likes" + 1
    WHERE "id" = $1
    `;

    pool.query(sqlText, valueArray)
    .then( (result) => {
        res.sendStatus(200);
    })
    .catch((error) => {
        console.log('Error updating likes', error);
        res.sendStatus(500);
    })
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    const sqlText = `SELECT * FROM "images" ORDER BY "id";`;
    pool.query(sqlText)
    .then((result) => {
        res.send(result.rows);
    })
    .catch((error) => {
        console.log('Error getting images', error);
        res.sendStatus(500);
    })
    // res.send(galleryItems);
}); // END GET Route

module.exports = router;p