(function() {
 'use strict';

 angular.module('app')
   .component('projectList', {
     controller: projectListController,
     templateUrl: '/js/projectList/projectList.template.html'
   });

   projectItemController.$inject = ['$http', '$stateParams', '$state'];

   function projectListController($http, $stateParams, $state){

     const vm = this;

     vm.$onInit = $onInit;

     function $onInit() {
       scrollTo(0,0);

       $http.get('/projects/')
         .then((response) => {
           vm.project = response.data;
         });
     }
   }

}());
