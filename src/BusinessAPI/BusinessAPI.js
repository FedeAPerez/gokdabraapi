'use strict';
var  BusinessAPI = function() {
    var business = [
      { number: 1, business_name: "Doers", },
      { number: 2, business_name: "KDABRA" },
      { number: 3, business_name: "eColitas" },
      { number: 4, business_name: "fotoflasheventos" },
      { number: 5, business_name: "dexter" },
      { number: 6, business_name: "prune" }
    ]

    var all = function() {
      return business;
    }

    var getBusinessByName = function(name) {
      const isBusiness = p => p.business_name.toLowerCase() === name.toLowerCase();
      return business.find(isBusiness);
    }

    return {
      getBusinessByName : getBusinessByName,
      all : all
    }
  }();
  
  module.exports = BusinessAPI;