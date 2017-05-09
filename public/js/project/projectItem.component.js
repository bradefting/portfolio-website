(function() {
 'use strict';

 angular.module('app')
   .component('projectItem', {
     controller: projectItemController,
     templateUrl: '/js/project/projectItem.template.html'
   });

   projectItemController.$inject = ['$http', '$stateParams', '$state'];

   function projectItemController($http, $stateParams, $state){

     const vm = this;

     vm.$onInit = $onInit;

     function $onInit() {
       scrollTo(0,0);
       
       $http.get(`/projects/${$stateParams.id}`)
         .then((response) => {
           vm.project = response.data;
         });
     }
   }

}());
