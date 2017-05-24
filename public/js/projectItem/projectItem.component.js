(function() {
 'use strict';

 angular.module('app')
   .component('projectItem', {
     controller: projectItemController,
     templateUrl: '/js/projectItem/projectItem.template.html'
   });

   projectItemController.$inject = ['$http', '$stateParams', '$state', 'projectService'];

   function projectItemController($http, $stateParams, $state, projectService){

     const vm = this;

     vm.$onInit = $onInit;
     vm.projectService = projectService;

     function $onInit() {
       scrollTo(0,0);

       projectService.getProject($stateParams.id)
         .then((project) => {
           vm.project = project;
         });

       //  $http.get(`/projects/${$stateParams.id}`)
       //    .then((response) => {
       //      vm.project = response.data;
       //    });

     }
   }

}());
