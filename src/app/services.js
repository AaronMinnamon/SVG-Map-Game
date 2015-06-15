'use strict';

angular.module('svgMap')
  .factory('CountryService', function ($http) {
   
    var CountryServiceAPI = {};
    CountryServiceAPI.getList = function(){
      return $http({
        method: 'JSONP', 
        url: 'http://localhost:3000/assets/JSON/countries.json?callback=JSON_CALLBACK'
      });
    }

    return CountryServiceAPI;


   });

