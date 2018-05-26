'use strict';
var axios = require ('axios');
const optionsServiceUrl = process.env.REACT_APP_BACK_URL.trim() + '/optionsbusiness';

var  OptionsBusinessAPI = function() {

    var _getOptionsByBusiness = function(obj) {
      return axios(
          {
            method: 'get',
            url: optionsServiceUrl + '/' + obj.id_business,
            headers: {'Content-Type': 'application/json'}
          }
      );
    };

    var _saveOptionForBusiness = function(obj) {
      return axios(
        {
          method: 'post',
          url: optionsServiceUrl + '/' + obj.id_business + '/' + obj.id_option,
          headers: {'Content-Type': 'application/json'},
          data: obj
        }
      );
    }

    return {
      getOptionsByBusiness : _getOptionsByBusiness,
      saveOptionForBusiness : _saveOptionForBusiness
    }
  }();
  
  module.exports = OptionsBusinessAPI;