(function () {

  'use strict';

  angular
    .module("app", [])
    .component('post', {
      controller: postController,
      controllerAs: '$ctrl',
      templateUrl: './post.template.Url'
    });

  function postController() {
    const vm=this;
    
  }

}());
