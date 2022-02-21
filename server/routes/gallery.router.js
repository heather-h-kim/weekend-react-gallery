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

// DELETE Route
router.delete('/delete/:id', (req, res) => {
    console.log('in Delete route');
    const valueArray = [req.params.id];
    const sqlText = `
    DELETE FROM "images"
    WHERE "id" = $1;
    `;

    pool.query(sqlText, valueArray)
    .then((result) => {
        console.log('Image deleted');
        res.sendStatus(200);     
    }).catch((error) => {
        console.log('Error making delete query', error);
    })
});

//POST Route
router.post('/', (req, res) => {
    console.log('in POST route');
    console.log('req.body is', req.body);
    const valueArray = [req.body.path, req.body.description, req.body.likes]
    const sqlText =`
    INSERT INTO "images" ("path", "description", "likes")
    VALUES ($1, $2, $3);
    `;
    
    pool.query(sqlText, valueArray)
    .then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log('Error in Post route', error);
        res.sendStatus(500);
    })
});

module.exports = router;