'use strict';
var  BusinessAPI = function() {
    var _getBusiness = function() {
      var business = [
      { number: 1, business_name: "Doers", },
      { number: 2, business_name: "KDABRA" },
      { number: 3, business_name: "eColitas" },
      { number: 4, business_name: "fotoflasheventos" },
      { number: 5, business_name: "dexter" },
      { number: 6, business_name: "prune" }
      ]
      return business;
    }

    var all = function() {
      return _getBusiness;
    }

    var getBusinessByName = function(name) {
      return _getBusiness().find(function(business_name){
        return business_name.toLowerCase() == name.toLowerCase();
      });
    }

    return {
      getBusinessByName : getBusinessByName,
      all : all
    }
  }();
  
  module.exports = BusinessAPI;