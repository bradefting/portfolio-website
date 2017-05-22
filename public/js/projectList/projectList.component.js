(function() {
 'use strict';

 angular.module('app')
   .component('projectList', {
     controller: projectListController,
     templateUrl: '/js/projectList/projectList.template.html'
   });

   projectListController.$inject = ['$http', '$stateParams', '$state'];

   function projectListController($http, $stateParams, $state){

     const vm = this;

     vm.$onInit = $onInit;

     function $onInit() {
       scrollTo(0,0);

       $http.get('/projects')
         .then((response) => {
           vm.projects = response.data;
           console.log(vm.projects);
         });
     }
   }

}());
