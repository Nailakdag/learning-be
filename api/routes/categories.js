const express = require('express');
const router = express.Router();

const isAuthenticated = false

router.all('*', function(req, res, next) {
    if(isAuthenticated){
        next()
    }else{
        res.sendStatus(401)
    }
})

router.get('/', function(req, res, next) {
    res.json({success: true})
})

module.exports = router