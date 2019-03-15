angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.service('BlankService', [function(){

}])
.service('ApiService',function($http){

  this.getRequest = function(url){
    console.log(url);
    return $http.get(url).then(function(res){
      console.log(res.data);
      return res.data;
    })
  }

});
