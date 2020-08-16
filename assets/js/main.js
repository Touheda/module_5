
	$(function(){
		$(".navbar-toggler").blur (function (event){
			var screenWidth = window.innerWidth;
			if(screenWidth < 768){
				$(".navbar-collapse").collapse('hide');
			}

		});

	});
		
		
	(function (global){

		var ta = {};

		var mainContent = "snippet/main-content.html";

		var allCategoriesUrl = "categories.json";

		var categoriesTitleHtml = "snippet/categories-title.html";
		var categoryHtml = "snippet/categories-snippet.html";
		//convenience function for inserting innerHTML for 'select'

		var insertHtml = function(selector , html){
			var targetElement = document.querySelector(selector);
			targetElement.innerHTML = html;
		};

		//show loading icon inside element Identified by id 'selector'
		var showLoading = function (selector){
			var html ="<div class='text-center'>";
			html += "<img src='assets/img/ajax-loader.gif' alt='assets/img/images.jpg'></div>";
			insertHtml(selector ,html);
		};


		//return substitue of {propname}

		//with propvalue in given string

			var insertProperty = function (string, propName, propValue) {
			var propToReplace = "{{" + propName + "}}";
			string = string
			.replace(new RegExp(propToReplace, "g"), propValue);
			return string;
			};
			// Remove the class 'active' from home and switch to Menu button
			// //var switchMenuToActive = function () {
			//   // Remove 'active' from home button
			//   var classes = document.querySelector("#navHomeButton").className;
			//   classes = classes.replace(new RegExp("active", "g"), "");
			//   document.querySelector("#navHomeButton").className = classes;

			//   // Add 'active' to menu button if not already there
			//   classes = document.querySelector("#navMenuButton").className;
			//   if (classes.indexOf("active") === -1) {
			//     classes += " active";
			//     document.querySelector("#navMenuButton").className = classes;
			//   }
			// };//

		//On page load  (before images or css)

		document.addEventListener("DOMContentLoaded" ,function(event){

		//on First load ,show home view

			showLoading("#main-content");
			
			$.ajax({
			    url: 'snippet/main-content.html',
			    type: 'GET',
			    data:({
			        id: 0
			    }),
			    success:function(results) {
			        $("#main-content").html(results);
			    }
			});

			
		
});
	

	
		global.$ta = ta;
	})(window);	