var express = require('express');
var router = express.Router();
const axios = require('axios');
/* GET users listing. */
const apikey = '7a2d2218';

router.get('/search', function(req, res, next) {
    const search = req.query.title;
    const url = 'http://www.omdbapi.com/?apikey=' + apikey + '&s=' + search;
    axios.get(url)
        .then(function(response) {
            // handle success
            res.send(response.data);
        })
        .catch(function(error) {
            // handle error
            res.send(error);
        })


});
router.get('/result/:imdbid', function(req, res, next) {
    const id = req.params.imdbid;
    const url = 'http://www.omdbapi.com/?apikey=' + apikey + '&i=' + id;
    axios.get(url)
        .then(function(response) {
            // handle success
            res.send(response.data);
        })
        .catch(function(error) {
            // handle error
            res.send(error);
        })

});

module.exports = router;