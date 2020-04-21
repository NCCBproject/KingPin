(function(){
	"use strict";
	window.addEventListener("load", init);
	let btn;
	function init(){
		btn = document.getElementById("search_btn").addEventListener("click", function(){//when the button is clicked this stuff will happen
			
			let search_tag = document.getElementById("search_box").value;//gets value that is in the search bar
			get_table_data(search_tag);//will search database for this tag
		});
		
		initialize_table(); // calls initialize table function
	}
	function get_table_data(){//function to get data from php file
		let URL = "kingpin_stats.php";
		fetch(URL)
			.then(checkStatus)
			.then(JSON.parse)
			.then(initialize_table)//this will send the data to "initialize_table" function if there are no errors 
			.catch(console.log);
		
	}
	function initialize_table(){//function to create and fill table with data	(remember to put have parameter variable)
				
	}
	
	function checkStatus(response) {//function is used when an error occurs between js and php
		if (response.status >= 200 && response.status < 300 || response.status === 0) {
		return response.text();
    } else {
		return Promise.reject(new Error(response.status + ": " + response.statusText));
    }
  }

})();
