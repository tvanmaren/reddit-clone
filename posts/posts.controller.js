(function () {

  'use strict';

  angular
    .module("app", [])
    .component('post', {
      controller: postController,
      controllerAs: '$ctrl',
      templateUrl: '/posts/posts.template.html'
    });

  function postController() {
    const vm=this;

  }

}());
