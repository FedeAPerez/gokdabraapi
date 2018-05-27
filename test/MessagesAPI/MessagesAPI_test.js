var MessagesAPI = require('../../src/MessagesAPI/');
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
chai.should();
var expect = chai.expect;

process.on('unhandledRejection', (err, p) => {
  console.error('unhandledRejection', err.stack, p)
})

describe('MessagesAPI', function() {
  describe('Get Message', function() {
    it('Debería retornar un mensaje de negocio de KDABRA\n\t'+
     ' - Con id_option'+
     ' - Respondiendo con propiedad id_message, message_title, message, class_used, id_business, sender_show, intent, scroll\n\t',
      (done) => {
        MessagesAPI.getMessageByIntent2({
          "id_business":"kdabra",
          "id_option":"contact"
        }).should.be.fulfilled.then((res) => {
          res.data.status_code.should.equal(200);
          res.data.should.have.property("id_message");
          res.data.should.have.property("message_title");
          res.data.should.have.property("message");
          res.data.should.have.property("class_used");
          res.data.should.have.property("id_business");
          res.data.should.have.property("sender_show");
          res.data.should.have.property("intent");
          res.data.should.have.property("scroll");
        }).should.notify(done);
      }
    );

  });

  describe('Add Business', function() {

  });
    
});