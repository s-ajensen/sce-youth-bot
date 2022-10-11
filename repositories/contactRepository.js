const fs = require('fs');
const FILEPATH = 'contacts.json'

function getContacts() {
    return JSON.parse(fs.readFileSync(FILEPATH)).contacts;
}

function getContact(uid) {
    return getContacts().find(c => c.uid === uid);
}

function addMessage(uid, message) {
    var contacts = getContacts();
    var contact = contacts.find(c => c.uid === uid) ?? (() => {
        var newContact = { "uid": uid, "messages": [], "pizza-preference": null }
        contacts.push(newContact);
        return newContact;
    }).call();
    contact.messages.push(message);
    
    fs.writeFileSync(FILEPATH, JSON.stringify({ "contacts": contacts }));
}

function setPizzaPreference(uid, preference) {
    var contacts = getContacts();
    var contact = contacts.find(c => c.uid === uid) ?? (() => {
        var newContact = { "uid": uid, "messages": [], "pizza-preference": null }
        contacts.push(newContact);
        return newContact;
    });
    contact.pizzaPreference = preference;
    
    fs.writeFileSync(FILEPATH, JSON.stringify({ "contacts": contacts }));
}

module.exports = {
    getContacts,
    getContact,
    addMessage,
    setPizzaPreference
}