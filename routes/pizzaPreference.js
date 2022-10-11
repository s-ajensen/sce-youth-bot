const contactService = require('../services/contactService');
var express = require('express');
var router = express.Router();

router.post('/:uid', (req, res, next) => {
    const uid = req.params.uid;
    const preference = req.body.pizzaPreference;

    try {
        contactService.setPizzaPreference(uid, preference);
        res.send(contactService.get(uid));
    } catch (err) {
        res.status(500).send(err.message);
    }
});

module.exports = router;