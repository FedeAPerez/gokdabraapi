'use strict';
var axios = require ('axios');
const optionsServiceUrl = process.env.REACT_APP_BACK_URL.trim() + '/options';

var  OptionsAPI = function() {

    var _getAllOptions = function() {
      return axios(
        {
          method: 'get',
          url: optionsServiceUrl,
          headers: {'Content-Type': 'application/json'}
        }
      );
    }

    var _getOptionsByBusiness = function(obj){
      return axios(
          {
            method: 'post',
            url: optionsServiceUrl,
            headers: {'Content-Type': 'application/json'},
            data: obj
          }
      );
    }

    return {
      getAllOptions : _getAllOptions,
      getOptionsByBusiness : _getOptionsByBusiness
    }
  }();
  
  module.exports = OptionsAPI;