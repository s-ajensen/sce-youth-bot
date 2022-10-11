const contactService = require('../services/contactService');
var express = require('express');
var router = express.Router();

router.post('/:uid', (req, res, next) => {
    const uid = req.params.uid;
    const message = JSON.parse(req.body).message;

    try {
        contactService.addMessage(uid, message);
        res.send(contactService.get(uid));
    } catch (err) {
        res.status(500).send(err.message);
    }
});

module.exports = router;