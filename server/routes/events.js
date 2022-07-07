const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json([
        {
            event: 'world end 2012'
        },
        {
            event: 'hell weeks 2022'
        },
        {
            event: 'Nibiru attack'
        },
        {
            event: 'corona pandemic'
        }
    ])
});
module.exports = router;
