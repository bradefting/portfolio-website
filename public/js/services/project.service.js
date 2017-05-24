"use strict";

(function() {

  angular
    .module('app')
    .service('projectService', service);

  function service($http) {

    this.getProjects =() => {
      return $http.get('/projects')
        .then((response) => {
          return response.data;
        });
    };

    this.getProject =(id) => {
      return $http.get(`/projects/${id}`)
        .then((response) => {
          return response.data;
        });
    };

    this.getExperiences =() => {
      return $http.get('/experience')
        .then((response) => {
          return response.data;
        });
    };

    this.getExperience =(id) => {
      return $http.get(`/experience/${id}`)
        .then((response) => {
          return response.data;
        });
    };

  }


}());
