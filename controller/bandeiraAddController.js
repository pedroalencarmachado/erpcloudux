'use strict';
app.controller('bandeiraAddController', function bandeiraAddController($scope, $routeParams) {
  $('#topoSearch').hide();
  $('#btnADD').hide();
  $('#spnBreadCrump').text('');
  $('#spnBreadCrump').append('<a href="#/listbandeira" class="txtlink" >Bandeira de Cartão </a>');
  $('#spnBreadCrump').append(' > Incluir');
  
  $scope.textFields = {
  	lastName: ''
  };
  
  	/*$('#wfPrincipal').addClass('wfconteudo');  	
  	$('#wfPrincipal').detach().prependTo('#div90');
	$('#wfCabecalho').detach().prependTo('#div90');
	$('#wfCabecalho').addClass('wfReajusteCabecalho');
	$('#principalList').hide();
	$('#principalForm').show();
	$('#borderPrincipal').show();*/
	/*$('#wfPrincipal').addClass('wfconteudo');
	$('#wfPrincipal').detach().prependTo('#div90');
	$('#wfCabecalho').detach().prependTo('#div90');
	$('#wfCabecalho').addClass('wfReajusteCabecalho');
	$('#wfPrincipal').removeClass('wfReajusteCabecalho');

	if($('#wfTaxa').hasClass('wfconteudo')){
		$('#wfTaxa').addClass('wfReajusteCabecalho');
	}

	$('#wfTaxa').removeClass('wfconteudo');

	if($('#wfAutorizadora').hasClass('wfconteudo')){
		$('#wfAutorizadora').addClass('wfReajusteCabecalho');
	}

	$('#wfAutorizadora').removeClass('wfconteudo');
	$('#wfAutorizadora').removeClass('wfconteudo');

	$('#principalList').hide();
	$('#principalForm').show();
	$('#borderPrincipal').show();
	$('#borderTaxas').hide();
	$('#borderAutorizadora').hide();

	$('#taxaForm').hide();
	$('#taxaList').show();

	$('#inputBandeira').focus();*/
	    	
})  