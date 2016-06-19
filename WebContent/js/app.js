
var mainApp = angular.module('mainApp',['ngRoute']); 


mainApp.config(
    function($routeProvider){
		$routeProvider.
		  when('/',{
			  templateUrl: 'partials/login.html',
			  controller: 'LoginCtrl',
			  controllerAs: 'login'
		  }).
		  when('/services',{
			  templateUrl: 'partials/services.html',
			  controller: 'ServicesCtrl',
			  controllerAs: 'services'
		  }). 	   
		  otherwise({
			  redirectTo:'partials/test.html'
		  });
});

mainApp.controller('LoginCtrl', function(){
	var login = this
	login.userName='wes';
	
	login.submitForm = function(){
		if(this.user == 'oracle' && this.password == 'Welcome1'){
			alert("Login successful");
		} else {
			alert("Login unsuccessful");
		}
		login.userName=this.user;
		window.location = "#/services";
		 
	}
});

mainApp.controller('ServicesCtrl', function($scope){
	var services = this;
	services.operations = [
	                       {name: 'Add Account Disposition'},
	                       {name: 'Remove Account Disposition'} 
	                       ]
	
	
})
