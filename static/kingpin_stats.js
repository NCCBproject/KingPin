(function(){
	"use strict";
	window.addEventListener("load", init);
	let btn;
	function init(){
		btn = document.getElementById("search_btn").addEventListener("click", function(){//when the button is clicked this stuff will happen
			
			let search_tag = document.getElementById("search_box").value;//gets value that is in the search bar
			get_table_data(search_tag);//will search database for this tag
		});
		//get_table_data(); // uncomment when there is a database to use
		initialize_table();
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
		
		let table = document.createElement("table");//creates table and adds it to html body
		table.setAttribute("id", "data_table");
		document.body.appendChild(table);
		
		for(let i = 0; i < 10; i++){//this will change. First row in table will need to get title of each column from php data. 
			let row = document.createElement("tr");// creates the rows of the table
			for(let j = 0; j < 10; j++){// will put data onto table cells 
				let table_part;//I'm pretty sure there is a better way to do this but idc right now since its midnight
				if(i === 0)//first row will be bold
					table_part = "th";
				else 
					table_part = "td";
				let col = document.createElement(table_part);
				let txt = document.createTextNode(j+1);//this is where the text will be set for the cell
			
				col.appendChild(txt);//appends both col and row to the table
				row.appendChild(col);
			}
			document.getElementById("data_table").appendChild(row);
		}		
	}
	
	function checkStatus(response) {//function is used when an error occurs between js and php
		if (response.status >= 200 && response.status < 300 || response.status === 0) {
		return response.text();
    } else {
		return Promise.reject(new Error(response.status + ": " + response.statusText));
    }
  }

})();