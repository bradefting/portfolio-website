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
    //  vm.project = project;

    //  function $onInit() {
    //    $http.get(`/projects/${$stateParams.id}`)
    //      .then((response) => {
    //        console.log(response.data);
    //        vm.project = response.data;
    //      });
    //  }

     //if adding a service
    // function $onInit() {
    //   itemService.getItem(`${$stateParams.id}`)
    //    .then((item) => {
    //      vm.project = item;
    //    });
    // }

   }

}());
