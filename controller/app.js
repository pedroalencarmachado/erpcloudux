'use strict';
var app = angular.module('myModule', ['lumx','ngRoute','ngMaterial']).config(
	function($routeProvider, $locationProvider) {

		$routeProvider.when('/listbandeira', {
			templateUrl : 'pages/listbandeira.html',
			controller : 'bandeiraListController'
		});	
	
		$routeProvider.when('/addbandeira', {
			templateUrl : 'pages/addbandeira.html',
			controller : 'bandeiraAddController'
		});	

		$routeProvider.when('/listprod', {
			templateUrl : 'pages/listproduto.html',
			controller : 'produtoListController'
		});	

		$routeProvider.when('/addproduto', {
			templateUrl : 'pages/addproduto.html',
			controller : 'produtoAddController'
		});	

		$routeProvider.otherwise({
			redirectTo : '/index.html'
				
		});	
	}
);
