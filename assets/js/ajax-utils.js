(function(global){

	//setup a namespace of our utility
	var ajaxUtilities = {};

	//return of HTTP request object
	function getRequestObject() {
		if (window.XMLHttpRequest){
			return (new XMLHttpRequest());
		}else if(window.ActiveXObject){
			//for every old browser IE
			return (new ActiveXObject("Microdoft.XMLHttp"));
		}else{
			global.alert("ajax is not supported");
			return(null);
		}

	} 
	

})(window);