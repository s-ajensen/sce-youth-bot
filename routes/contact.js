const contactService = require('../services/contactService');
var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
    res.send(contactService.get());
});

router.get('/:uid', (req, res, next) => {
    const uid = req.params.uid;
    var target = contactService.get(uid);

    if (target) {
        res.send(target);
    } else {
        res.status(404).send("Contact not found.");
    }
});

module.exports = router;
