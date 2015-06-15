'use strict';

angular.module('svgMap')
  .controller('MainCtrl', function ($scope, CountryService,$animate,$timeout) {

  CountryService.getList().success(function (response) {
       $scope.countries = response;
       $scope.numberOfCountries = response.length;
  });

  $scope.items = [];


  $scope.$watch('countries', function(newCountries, oldCountries) {
     $scope.countries = newCountries;
     $scope.country = '';
 }, true);

  $scope.onInputChange = function(inputFromUser){
    angular.forEach($scope.countries,function(country){

      if (angular.lowercase(inputFromUser) == angular.lowercase(country.name)) {

        
       
        

        if (country.isShown == true) {
          console.log("COUNTRY ALREADY ENTERED");    

          $animate.addClass("body", 'warning').then(function() {
            $timeout(function(){
              $animate.removeClass("body", 'warning');
            }, 0);  
          });
        
        } else { 

          $scope.countriesEntered = $scope.items.length + 1;

          animateArea(country.code);
          
          country.isShown = true;
          
          $scope.items.push({
            name: country.name 
          });
        
        };
    




      };
    });
  };

  function animateArea(ID) {
    // Get the Object by ID
    var a = document.getElementById('svg1');
    // Get the SVG document inside the Object tag
    var svgDoc = a.contentDocument;
    // Get one of the SVG items by ID;
    console.log(ID);
    var svgItem = svgDoc.getElementById(ID);
    // Set the colour to something else
    var lengthOfItem = svgItem.getTotalLength();

    $(svgItem).attr('class','path');
    $(svgItem).css('stroke-dasharray',lengthOfItem);
    $(svgItem).css('stroke-dashoffset',lengthOfItem);

  };




});
