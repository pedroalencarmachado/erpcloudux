'use strict';
app.controller('produtoAddController', function produtoAddController($scope, $routeParams, $timeout, $mdSidenav, $log, $mdDialog, $mdToast, $animate) {
  $('#topoSearch').hide();
  $('#btnADD').hide();
  $('#spnBreadCrump').text('');
  $('#spnBreadCrump').append('<a href="#/listprod" class="txtlink" >Produto </a>');
  $('#spnBreadCrump').append(' > Incluir');


  	$scope.closeToast = function() {
    	$mdToast.hide();
  	};

   $scope.toastPosition = {
    bottom: false,
    top: true,
    left: false,
    right: true
  };
  $scope.getToastPosition = function() {
    return Object.keys($scope.toastPosition)
      .filter(function(pos) { return $scope.toastPosition[pos]; })
      .join(' ');
  };
  $scope.showCustomToast = function() {
    $mdToast.show({
      controller: 'ToastCtrl',
      templateUrl: 'toast-template.html',
      hideDelay: 6000,
      position: $scope.getToastPosition()
    });
  };
  $scope.showSimpleToast = function() {
    $mdToast.show(
      $mdToast.simple()
        .content('Simple Toast!')
        .position($scope.getToastPosition())
        .hideDelay(3000)
    );
  };
  $scope.showActionToast = function() {
    var toast = $mdToast.simple()
          .content('Action Toast!')
          .action('OK')
          .highlightAction(false)
          .position($scope.getToastPosition());
    $mdToast.show(toast).then(function() {
      alert('You clicked \'OK\'.');
    });
  };


  $scope.showAlert = function(ev) {
    $mdDialog.show(
      $mdDialog.alert()
        .title('This is an alert title')
        .content('You can specify some description text in here.')
        .ariaLabel('Password notification')
        .ok('Got it!')
        .targetEvent(ev)
    );
  };

  $scope.showConfirm = function(ev) {
    var confirm = $mdDialog.confirm()
      .title('Would you like to delete your debt?')
      .content('All of the banks have agreed to forgive you your debts.')
      .ariaLabel('Lucky day')
      .ok('Please do it!')
      .cancel('Sounds like a scam')
      .targetEvent(ev);
    $mdDialog.show(confirm).then(function() {
      $scope.alert = 'You decided to get rid of your debt.';
    }, function() {
      $scope.alert = 'You decided to keep your debt.';
    });
  };


	function exibeLoad() {
		
		var alturaTela = $(document).height();
		var larguraTela = '100%';
		$('#mascara').css({
			'width' : larguraTela,
			'height' : alturaTela
		});
		$('#mascara').fadeIn(100);
		
		var left = ($(window).width() / 2)
				
		var top = ($(window).height() / 2);		
	}

  $scope.showAdvanced = function(ev) {  	
    $mdDialog.show({
      controller: DialogController,
      templateUrl: '/web/pages/dialog.tmpl.html',
      targetEvent: ev,
    })
    .then(function(answer) {
      $scope.alert = 'You said the information was "' + answer + '".';
      $("#mascara").hide();
      
    }, function() {
      $scope.alert = 'You cancelled the dialog.';
      $("#mascara").hide();      
    });
    exibeLoad();   
   // alert();
  };

  $scope.produto ={
	isprincipal: '',
  	principal : '',
  	ativo: true,
  	codigo: '',
  	descricao : '',
  	descComplementar: '',
  	descResumida: '',
  	codBarra: '',
  	ncm:'',
  	extipi: '',
  	embEntrada: '',
  	gramEntrada: '',
  	embSaida: '',
  	gramSaida:'',
  	subgrupo:'',
  	grupo:'',
  	secao:'',
  	divisao:'',
  	marca:'',
  	infNutri:'',
  	tpItem:'',
  	cadeia:'',
  	pesavel:'',
  	diaValidade:'',
  	cestaBasica:'',
  	vendaSemEstoque:'',
  	auxDiaValidade: '',
  	empresa1Ativo: true,
  	precoEmpresa1: '',
  	lucroEmpresa1: '',
  	descMaximoEmpresa1: '',
  	inativoCompraEmpresa1: '',
  	inativoVendaEmpresa1: '',
  	empresa2Ativo: true,
  	precoEmpresa2: '',
  	lucroEmpresa2: '',
  	descMaximoEmpresa2: '',
  	inativoCompraEmpresa2: '',
  	inativoVendaEmpresa2: '',
  	empresa3Ativo: true,
  	precoEmpresa3: '',
  	lucroEmpresa3: '',
  	descMaximoEmpresa3: '',
  	inativoCompraEmpresa3: '',
  	inativoVendaEmpresa3: ''
  }
	
	$scope.people = [
	    { name: 'Adam',      email: 'Havaiana',      age: 10 },	    
	    { name: 'Amalie',    email: 'Suco em pó Tang',    age: 12 },
	    { name: 'Wladimir',  email: 'Gelatina Royal',  age: 30 },
	    { name: 'Samantha',  email: 'Achocolatado Toddy',  age: 31 },
	    { name: 'Estefanía', email: 'Achocolotado Nescau', age: 16 },	    
	    { name: 'Nicole',    email: 'Escova Dental',    age: 43 },
	    { name: 'Adrian',    email: 'Iogurte Activia',    age: 21 }
	];

	$scope.selectedPersons = [$scope.people[2], $scope.people[4]];

	$scope.embalagem = [
	    { descricao: 'Caixa', sigla: 'CX' },
	    { descricao: 'Unidade', sigla: 'UN' },
	    { descricao: 'Peça', sigla: 'PÇ' },
	    { descricao: 'Grama', sigla: 'GR' },
	    { descricao: 'Quilograma', sigla: 'KG' },
	    { descricao: 'Metro', sigla: 'M' },
	    { descricao: 'Pote', sigla: 'PT' }
	   
	];

	$scope.cbSelectProdutoPrincipal = {
	    exec: function(newValue, oldValue){
	        $scope.produto.principal = newValue.newValue.descricao;	
	        if(newValue != ''){	        	
	        	$('#chkPrincipal').removeClass('md-checked');	        	   
	        }else{
	        	$('#chkPrincipal').addClass('md-checked');     
	        }
	    }
	};

	$scope.selectEmbalagem = [$scope.embalagem[2], $scope.embalagem[4]];

	$scope.subgrupo = [
	    { descricao: 'Chinelos'},	  
	    { descricao: 'Frios'},
	    { descricao: 'Creme Dental'},
	    { descricao: 'Fio Dental'},
	    { descricao: 'Exaguante Bucal'}
	];

	$scope.selectSubGrupo = [$scope.subgrupo[2], $scope.subgrupo[4]];

	$scope.cbSelectSubGrupo = {
	    exec: function(newValue, oldValue){
	        $scope.produto.subgrupo = newValue.newValue.descricao;	        
	    }
	};

	$scope.grupo = [
	    { descricao: 'Calçados'},	  
	    { descricao: 'Bucal'},
	    { descricao: 'Macarrão'},
	    { descricao: 'Sopas'},
	    { descricao: 'Tortas'},
	    { descricao: 'Carnes'}
	];

	$scope.selectGrupo = [$scope.grupo[2], $scope.grupo[4]];

	$scope.cbSelectGrupo = {
	    exec: function(newValue, oldValue){
	        $scope.produto.grupo = newValue.newValue.descricao;
	    }
	};
	
	$scope.secao = [
	    { descricao: 'Utensílios Pessoais'},	  
	    { descricao: 'Higiene'},
	    { descricao: 'Massas'},
	    { descricao: 'Frios'},
	    { descricao: 'Padaria Doce'}	    
	];

	$scope.selectSecao = [$scope.secao[2], $scope.secao[3]];

	$scope.cbSelectSecao = {
	    exec: function(newValue, oldValue){
	        $scope.produto.secao = newValue.newValue.descricao;
	    }
	};


	$scope.divisao = [
	    { descricao: 'Alimentos'},	  
	    { descricao: 'Não Alimentos'} 	   
	];

	$scope.selectDivisao = [$scope.divisao[2], $scope.divisao[3]];

	$scope.cbSelectDivisao = {
	    exec: function(newValue, oldValue){
	        $scope.produto.divisao = newValue.newValue.descricao;
	    }
	};
	
	$scope.marca = [
	    { descricao: 'Sorriso'},	  
	    { descricao: 'Nestlé'},	  
	    { descricao: 'Garoto'},	  
	    { descricao: 'OMO'},	  
	    { descricao: 'Parati'},	  
	    { descricao: 'Renata'},	  
	    { descricao: 'Coca-Cola'},	  
	    { descricao: 'PeG'},	  
	    { descricao: 'Seda'}, 	   
	    { descricao: 'Colgate'},
	    { descricao: 'Royal'}	    
	];

	$scope.selectMarca = [$scope.marca[2], $scope.marca[3]];

	$scope.cbSelectMarca = {
	    exec: function(newValue, oldValue){
	        $scope.produto.marca = newValue.newValue.descricao;
	    }
	};

	$scope.infNutri = [
	    { descricao: 'Bolo de Baunilha'},	  
	    { descricao: 'Bolo de Fuba'},	  
	    { descricao: 'Cuca caseira'},	  
	    { descricao: 'Pão Francês'},	  
	    { descricao: 'Torta de Morango e chocolate'},	  
	    { descricao: 'Pé de moleque chocolate'},	  
	    { descricao: 'Biscoito de chocolate amanteigado'}	     
	];

	$scope.selectedInformacaoNutricional = [$scope.infNutri[2], $scope.infNutri[3]];

	$scope.tpItem = [
	    { descricao: '00 – Mercadoria para Revenda'},	  
	    { descricao: '01 – Matéria-Prima'},	  
	    { descricao: '02 – Embalagem'},	  
	    { descricao: '03 – Produto em Processo'},	  
	    { descricao: '04 – Produto Acabado'},	  
	    { descricao: '05 – Subproduto'},	  
	    { descricao: '06 – Produto Intermediário'},	     
	    { descricao: '07 – Material de Uso e Consumo'},
	    { descricao: '08 – Ativo Imobilizado'},
	    { descricao: '09 – Serviços'},
	    { descricao: '10 – Outros insumos'},
	    { descricao: '99 – Outras'}
	];

	$scope.selectedTipoItem = [$scope.tpItem[2], $scope.tpItem[3]];

	$scope.cbSelectTipoItem = {
	    exec: function(newValue, oldValue){
	        $scope.produto.tpItem = newValue.newValue.descricao;
	    }
	};

	$scope.cadeia = [
	    { descricao: 'Havaianas'},	  
	    { descricao: 'Gelatinas Royal'},	  
	    { descricao: 'Pudins Royal'},	  
	    { descricao: 'Suco Tang'},	  
	    { descricao: 'Esmaltes Risqué Lançamentos'},	  
	    { descricao: 'Esmaltes Risqué Tradicionais'}	   
	];

	$scope.selectCadeiaPreco = [$scope.cadeia[2], $scope.cadeia[3]];

	$scope.cbSelectCadeiraPreco = {
	    exec: function(newValue, oldValue){
	        $scope.produto.cadeia = newValue.newValue.descricao;
	    }
	};
	
	$scope.chProd = {
	    exec: function(newValue, oldValue){
	        alert('');
	    }
	};

	$scope.montaDefinicoes = function(){
		if($('#diasValidade').val() != ''){
			$scope.produto.auxDiaValidade = ' com ' + $('#diasValidade').val() + ' dia(s) para validade ';
		}else{
			$scope.produto.auxDiaValidade = '';
		}
	};

	$scope.montaDefinicoesCodBarAdd = function(){

		if($('#txtDataValidade').val()!= ''){
			$('#txtDtValidadeAddWFFechado').val($('#txtDataValidade').val());
		}else{
			$('#txtDtValidadeAddWFFechado').val('');
		}


		if($('#txtPerDescAdd').val()!= ''){
			$('#txtPerDescAddWFFechado').val($('#txtPerDescAdd').val());			
		}else{
			$('#txtPerDescAddWFFechado').val('');
		}

		if($('#txtPerAcreAdd').val()!= ''){
			$('#txtPerAcreAddWFFechado').val($('#txtPerAcreAdd').val());			
		}else{
			$('#txtPerAcreAddWFFechado').val('');
		}

		if($('#txtPrecoAdd').val()!= ''){
			$('#txtPrecoAddWFFechado').val($('#txtPrecoAdd').val());			
		}else{
			$('#txtPrecoAddWFFechado').val('');
		}

		if($('#txtQtdAdd').val()!= ''){
			$('#txtQtdAddWFFechado').val($('#txtQtdAdd').val());				
		}else{
			$('#txtQtdAddWFFechado').val('');
		}

		if($('#txtCodBarAdd').val()!= ''){
			$('#txtCodBarAddWFFechado').val($('#txtCodBarAdd').val());			
		}else{
			$('#txtCodBarAddWFFechado').val('');
		}				
	};
});

function DialogController($scope, $mdDialog) {
  $scope.hide = function() {
    $mdDialog.hide();
  };
  $scope.cancel = function() {
    $mdDialog.cancel();
  };
  $scope.answer = function(answer) {
    $mdDialog.hide(answer);
  };
}
