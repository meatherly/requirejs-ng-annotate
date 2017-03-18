define(function(require) {
  var sampleController = require('nga!app/controllers/sampleController');

  return angular.module('sample.app', [])
    .controller('sampleController', sampleController)
    .name;
});