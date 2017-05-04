(function() {
  'use strict';

  angular.module('app')
    .component('projectList', {
      controller: projectListController,
      templateUrl: '/js/project/projectList.template.html'
    });

    // itemListController.$inject = ['$http', 'itemService'];

    function projectListController(){
      const vm = this;
    }

}());
