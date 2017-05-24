(function() {
  'use strict';

  angular.module('app')
    .component('home', {
      controller: homeController,
      templateUrl: '/js/home/home.template.html'
    });

    homeController.$inject = ['$http', '$scope', '$location', 'projectService'];

    function homeController($http, $scope, $location, projectService){
      const vm = this;

      vm.$onInit = $onInit;
      vm.projectService = projectService;

      function $onInit(){
        scrollTo(0,0);

        projectService.getProjects()
          .then((projects) => {
            vm.projects = projects;
          });

        // $http.get('/projects')
        //   .then((response) => {
        //     vm.projects = response.data;
        //   });

        projectService.getExperiences()
          .then((experiences) => {
            vm.experiences = experiences;
          });

        // $http.get('/experience')
        //   .then((result) => {
        //     vm.experiences = result.data;
        //   });
      }

    }

}());
