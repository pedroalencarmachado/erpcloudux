'use strict';
app.controller('produtoListController', function produtoListController($scope, $routeParams, $timeout, $mdSidenav, $log) {
	$('#topoSearch').show();
 	$('#btnADD').show();  	
	$('#btnAddHref').prop('href','#/addproduto');
	$('#spnBreadCrump').text('Produto');
});