// Daniel Reyes
// ASDI 1304
// javaScript for GPeS app

$('#home').on('pageinit', function (){

	
	
	
});
// Store form values to Local Storage.
	var id			= Math.floor(Math.random()*100000001);
$('#surveyInfo').on('pageinit', function(){
	if(modernizr.localStorage){
		$('#message').text("Form is ready");
	}else{
		$('#message').text("Local Storage Not Supported");
	}
	$('#submit').click(function(){
		localStorage.setItem(id, $('#fname').val());
		localStorage.setItem(id, $('#lname').val());
		localStorage.setItem(id, $('#gValue').val());
		localStorage.setItem(id, $('#date').val());
		localStorage.setItem(id, $('#rating').val());
		localStorage.setItem(id, $('#callback').val());
	});
	
	function getRadio(){
		var radios = document.forms[0].gender;
		for(var i=0; i<radios.length; i++){
			if(radios[i].checked){
				gValue = radios[i].value;
			}
		}	
	}	
});
// Show store values from Local Storage
$('#survey').on('pageinit', function (){
	
	function showStoreValue(){
		var item = localStorage.getItem(id);
		if (item == null){
			item = 'Nothing in Storage';
		}else if(item.length === 0){
			item = 'Storage Contains Empty Value';
		}
		$('.storage').text(item)
	}
$('#survey').click(function(e){
	showStoreValue();
});
	
});