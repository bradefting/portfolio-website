(function() {
  'use strict';

  angular.module('app')
    .component('projectList', {
      controller: projectListController,
      templateUrl: '/js/project/projectList.template.html'
    });

    projectListController.$inject = ['$http'];

    function projectListController($http){
      const vm = this;

      vm.$onInit = $onInit;

      function $onInit(){
        $http.get('/projects')
          .then((response) => {
            vm.projects = response.data;
            console.log(response.data);
          });
      }
    }

}());
