// ASDI
// Term 1308
// Banchop Ben Kangdouangnhot

/*
$(function() {
	$('#clickme').click(function() {
				
		$.ajax({
			url: 'json.json',
			dataType: 'json',
			success: function(data){

			var items = [];
		
			$.each(data, function(key, val) {
		
			items.push('<li id="' + key + '">' + val + '</li>');
			
			 });
	 
			 $('<ul/>', {
			 	'class': 'interest-list',
			 	html: items.join('') 	
			}).appendTo('body'); 
				
			}, 
			statusCode: {
				404: function(){
				alert('There was problem with the server, please try again later');
				}
			}
		});
		
	});

}); */

// Calling JSON
$(document).ready(function(){

  $("#clickme").click(function(){
    $.getJSON("json.json",function(result){
      $.each(result, function(i, field){
     
     
     $("#jason").append('<li id= " " >' + i + ":" + " " + field +  '</li>' );   //Working 
   //   $("#jason").append('<li id= " " >' + i + ":" + " " + field +  '</li>' );   //Working
   	  // $("#jason").append('<li id="' + i + '" >' + field +  '</li>');   //string only
      //	$("#jason").append('<li id="' + field + '" >' + i + "" + '</li>');  //id only
      //  $("#jason").append(field + " ");  //does one at a time
      });
    });
  });
});




$('#button').click(function() {
	var name = $('#name').val();
	var string = $('#string').val();
	alert(string);

	//$.post('php/reverse.php', { input: string }, function(data) {
	$.post('php/reverse.php', { string: string, name: name }, function(data) {
		$('#feedback').html(data);
	
	}).error(function() {
		$('#messages').text("error occurred");
	}).complete(function() {
		$('#messages').text("Request complete");
	}).success(function() {
		$('#messages').text("Request successful");
	
	});
 });



$('#buttons').click(function() {
	$.ajax({
		url: 'page.html',
		success: function(datas) {
			$('#content').html(datas);
		
		}
	
	
	});


});

// AJAX and PHP
$('#buttons').click(function() {
	var names = $('#names').val();
	
	$.ajax({
		url: 'php/page.php',
		data: 'names=' +names,
		success: function(data) {
			$('#content').html(data);	
		}
	}).error(function() {
		alert("error occurred!");

	});


});



var xmlHttp= createXmlHttpRequestObject();
 
function createXmlHttpRequestObject(){
   var xmlHttp;
   
   if(window.ActiveXObject){
      try{
         xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
         }catch(e){
            xmlHttp =false;
            }
      }else{
         try{
            xmlHttp= new XMLHttpRequest();
            }catch(e){
               xmlHttp =false;
               }
         }
      if(!xmlHttp)
            alert("cant create that object!");
      else
            return xmlHttp;
   }
   
function process(){   
    if(xmlHttp.readyState==0 || xmlHttp.readyState==4){
      food=encodeURIComponent(document.getElementById("userInput").value );
      xmlHttp.open("GET", "php/tickets.php?food="+food, true);
      xmlHttp.onreadystatechange = handleServerResponse;
      xmlHttp.send(null);
      }else{
         setTimeout('process()', 1000);
         }
   }
   
   
function handleServerResponse(){
   if(xmlHttp.readyState==4){
            if(xmlHttp.status==200){
               xmlResponse=xmlHttp.responseXML;
               xmlDocumentElement=xmlResponse.documentElement;
               message=xmlDocumentElement.firstChild.data;
               document.getElementById('underInput').innerHTML='<span style="color:blue">' +message + '</span>';
               setTimeout('process()', 1000);
         }else{
            alert('No sever connected!');
            }
      }
   }




// JQM form validation

$('#homes').on('pageinit', function(){

	var rbform = $('#recordform');	// calling form
    var FEerror = $('#formerrorlink'); // calling error dialog 
	
	rbform.validate({
		invalidHandler: function(form, validator){
			FEerror.click(); // taget error anchor tag
			//console.log(validator.submitted);
			
			var html = "";
			
			
			for(var key in validator.submitted){  //Looping through keys
				var label = $('label[for^="'+ key +'"]'); // finding label thats start with 'for'
				//console.log(label.text());
				var legend = label.closest('fieldset').find('.ui-controlgroup-label').not(); // getting radios
				var fieldName = legend.length ? legend.text() :label.text();
				//console.log(fieldName);
				
				
				html += '<li>' + fieldName + '</li>'; //Strings added to dialog by targeting
			};
			$('#formErrors ul').html(html);
		
		},
		
		    submitHandler: function(){
			var data = rbform.serializeArray();
			
			getData();
			console.log(data);
			
		}
		
	});
		


});
  
 // Save and Edit to local storage via JS  
	// getElementById function
	function main ( x) {
		var elements = document.getElementById( x );
		return elements ;
}

/*
	// Create drop down elements from js
	function dropDownList ( ) {
		var formTag = document.getElementsByTagName("form");  //form tags are an array
		var selector = main('moretickets');
		makeSelection = document.createElement('select');
		makeSelection.setAttribute("id", "mStuff");   // used for idGetter function
			for ( var i = 0, j= addStuff.length; i<j; i++) {
	 		var makeOpt = document.createElement('option');
	 		var opt = addStuff[i];
	 		makeOpt.setAttribute("value", opt);
	 		makeOpt.innerHTML = opt;
	 		makeSelection.appendChild(makeOpt);
		 }
	  	   selector.appendChild(makeSelection);
}
*/
/*
	// Find values of selected radio buttons
	function getRadios() {
		var setRadios = document.forms.addform.seasons;
		for ( var i=0; i<setRadios.length; i++) {
			if(setRadios[i].checked) {
				seasonValue = setRadios[i].value;
			}
	 }
} 
 

	function getToggle(){
	
		var setTogg =  document.forms.addform.switches;  //main('toGG');
		
		for(i = 0; i<setTogg; i++){
			if(setTogg[i].value === "off"){
				setToggle = setTogg[i].value
			}else if(setTogg[i].value === "on"){
				setToggle = setTogg[i].value
			}
		
		}
		
	}	
	
*/
	// get random number
	function getData( key ) {  // passing in "edit" item from tutorial 3.6
	// if there is no key, this means this is a brand new item and need a new key.
		
		if(!key){
			var getId =  Math.floor(Math.random()*100000001);
		}else{
			getId = key;
		
		}
		
	//	getRadios();
	//	getToggle();
		

		var item		= {};
		//item.List	= ["Drop down list: ", $('#mStuff').val()]; 
		item.fullname	= ["Name: ", $('#fullname').val()];
		item.email	= ["Email: ", $('#email').val()]; 
		//item.number	= ["Number: ", $('#ssn').val()]; 
		//item.toggles = ["Toggle", $('#toGG').val()];
		//item.zip	= ["Zip Code: ", $('#zip').val()];
		//item.range = ["Range: ",$('#ranges').val()];
		//item.date = ["Date: ", $('#aDate').val()];
		//item.season = ["Season: ", seasonValue];
		item.concerns = ["Concerns", $('#concerns').val()];
		
		// save data to local storage! use Stringify to convert our object to a string
		localStorage.setItem( getId, JSON.stringify(item) );
		alert("Data has been saved!");
		//console.log('#fullname');
}




var clearData = function(){
    if (localStorage.length === 0) {
        alert("Local Storage is Empty...");
    } else {
        localStorage.clear();
        alert("All Data has been Deleted!");
        window.location.reload();
        return false;
    }
};


		//var setToggle;
		
		//var seasonValue; 

		//var addStuff = ["Sports", "NFC", "NBA", "MLB" ];

		//dropDownList();

		var clearStorage = main("clearLocal");
		clearStorage.addEventListener("click", clearData);
