(function() {
 'use strict';

 angular.module('app')
   .component('experienceItem', {
     controller: experienceItemController,
     templateUrl: '/js/experience/experienceItem.template.html'
   });

   experienceItemController.$inject = ['$http', '$stateParams', '$state'];

   function experienceItemController($http, $stateParams, $state){
     const vm = this;

     vm.$onInit = $onInit;

     function $onInit() {
       scrollTo(0,0);
       
       $http.get(`/experience/${$stateParams.id}`)
         .then((response) => {
           vm.item = response.data;
         });
     }

   }

}());
