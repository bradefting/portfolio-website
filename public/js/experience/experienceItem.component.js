(function() {
 'use strict';

 angular.module('app')
   .component('experienceItem', {
     controller: experienceItemController,
     templateUrl: '/js/experience/experienceItem.template.html'
   });

   experienceItemController.$inject = ['$http', '$stateParams', '$state', 'projectService'];

   function experienceItemController($http, $stateParams, $state, projectService){

     const vm = this;

     vm.$onInit = $onInit;
     vm.projectService = projectService;

     function $onInit() {
       scrollTo(0,0);

       projectService.getExperience($stateParams.id)
         .then((experience) => {
           vm.item = experience;
         });

      //  $http.get(`/experience/${$stateParams.id}`)
      //    .then((response) => {
      //      vm.item = response.data;
      //    });
     }

   }

}());
