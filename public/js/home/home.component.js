(function() {
  'use strict';

  angular.module('app')
    .component('home', {
      controller: homeController,
      templateUrl: '/js/home/home.template.html'
    });

    homeController.$inject = ['$http', '$scope', '$location', '$anchorScroll'];

    function homeController($http, $scope, $location, $anchorScroll){
      const vm = this;

      vm.$onInit = $onInit;

      function $onInit(){
        scrollTo(0,0);

        $http.get('/projects')
          .then((response) => {
            vm.projects = response.data;
          });

        $http.get('/experience')
          .then((result) => {
            vm.experiences = result.data;
          });
      }

    }

}());
