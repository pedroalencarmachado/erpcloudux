'use strict';
app.controller('indexController', function indexController($scope, $routeParams, $timeout, $mdSidenav, $log) {
	$scope.topo = "ERP Cloud";

	$scope.toggleLeft = function() {
    $mdSidenav('left').toggle()
                      .then(function(){
                          $log.debug("toggle left is done");
                      });
  };
  	$scope.toggleRight = function() {
    $mdSidenav('right').toggle()
                        .then(function(){
                          $log.debug("toggle RIGHT is done");
                        });
  };

  $scope.mouseHoverAddBand = function(){
    $('#addBand').show();
  }

  $scope.mouseLeaveAddBand = function(){
    $('#addBand').hide();
  }


  $scope.mouseHoverAddProd = function(){
    $('#addProd').show();
  }

  $scope.mouseLeaveAddProd = function(){
    $('#addProd').hide();
  }



})
.controller('LeftCtrl', function($scope, $timeout, $mdSidenav, $log) {
  $scope.close = function() {
    $mdSidenav('left').close()
                      .then(function(){
                        $log.debug("close LEFT is done");
                      });
  };
})
.controller('RightCtrl', function($scope, $timeout, $mdSidenav, $log) {
  $scope.close = function() {
    $mdSidenav('right').close()
                        .then(function(){
                          $log.debug("close RIGHT is done");
                        });
  };

});