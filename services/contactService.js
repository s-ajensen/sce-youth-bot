const contactRepository = require('../repositories/contactRepository');

function get(uid = null) {
    if (!uid) {
        return contactRepository.getContacts();
    } else {
        return contactRepository.getContact(uid);
    }
}

function addMessage(uid, message) {
    contactRepository.addMessage(uid, message);
}

function setPizzaPreference(uid, preference) {
    contactRepository.setPizzaPreference(uid, preference);
}

module.exports = {
    get,
    addMessage,
    setPizzaPreference
}