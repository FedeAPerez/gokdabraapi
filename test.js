var MessagesContentAPI = require('./src/MessagesContentAPI');

console.log(MessagesContentAPI.getMessageContentFromId("footer-hint"));

var ProspectsAPI = require('./src/ProspectsAPI');

ProspectsAPI.postProspectFrom("vergamarico", "mailcachondo@gmail.com")
.then((res) => {
    console.log(res.status);
})
.catch((err) => {
    console.log(err);
});

var GUIDAPI = require('./src/GUIDAPI');

console.log(GUIDAPI.guid());

var BusinessAPI = require('./src/BusinessAPI');

console.log(BusinessAPI.getBusinessByName("doers"));


var IntentAPI = require('./src/IntentAPI');

IntentAPI.getIntentFromText("en qué horarios trabajás")
.then((res) => {
    console.log(res.data.intent);
})
.catch((err) => {

});

var MessagesAPI = require('./src/MessagesAPI');
console.log(MessagesAPI.getFirstMessage().message);