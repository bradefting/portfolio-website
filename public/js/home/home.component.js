(function() {
  'use strict';

  angular.module('app')
    .component('home', {
      controller: homeController,
      templateUrl: '/js/home/home.template.html'
    });

    homeController.$inject = ['$http'];

    function homeController($http){
      const vm = this;

      vm.$onInit = $onInit;

      function $onInit(){
        $http.get('/projects')
          .then((response) => {
            vm.projects = response.data;
          });
      }
    }

}());
