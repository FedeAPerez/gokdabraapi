var MessagesContentAPI = require('./src/MessagesContentAPI');

console.log(MessagesContentAPI.getMessageContentFromId("footer-hint"));

var ProspectsAPI = require('./src/ProspectsAPI');

ProspectsAPI.postProspectFrom("vergamarico", "mailcachondo@gmail.com")
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log(err);
});