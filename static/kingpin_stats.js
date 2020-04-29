(function(){
	"use strict";
	window.addEventListener("load", init);
	let btn;
	var content = {username:''};
	
	
	function init(){

			btn = document.getElementById("search_btn").addEventListener("click", function(){//when the button is clicked this stuff will happen
			
				let search_tag = document.getElementById("search_box").value;//gets value that is in the search bar
				content.username = search_tag;
			
				get_table_data(content);//will search database for this tag
			
			});

			
		initialize_table();
	}
	function get_table_data(username){//function to get data from php file
		let URL = "kingpin_stats.php";
		//{method:'post', 'Content-Type':'application/json', body:JSON.stringify(content)}
		fetch(URL)
			.then(checkStatus)
			.then(JSON.parse)
			.then(initalize_table)//this will send the data to "initialize_table" function if there are no errors 
			.catch(console.log);
		
	}
	
	function lalaland(stats){
		console.log(stats);
		//console.log(stats.0.0);
	
	}
	
	function initialize_table(stats){//function to create and fill table with data	(remember to put have parameter variable)
		let gameNum = Object.keys(stats).length; //number of games 
		let table = document.createElement("table");//creates table and adds it to html body
		table.setAttribute("id", "data_table");
		document.body.appendChild(table);
		 if (stats[5]!=null){
 			 sessionStorage.setItem("firstGame", stats[1]);
 			 sessionStorage.setItem("secondGame", stats[2]);
  			 sessionStorage.setItem("thirdGame", stats[3]);
  			 sessionStorage.setItem("fourthGame", stats[4]);
			 sessionStorage.setItem("fifthGame", stats[5]);
 			 }
		
		for(let i = 0; i < gameNum; i++){//this will change. First row in table will need to get title of each column from php data. 
			let row = document.createElement("tr");// creates the rows of the table
			for(let j = 1; j < 10; j++){// will put data onto table cells 
				let table_part;//I'm pretty sure there is a better way to do this but idc right now since its midnight
				if(i === 0){//first row will be bold
					let col = document.createElement("th");//the first row will show the frame
					let txt = document.createTextNode(j+1);
					
					col.appendChild(txt);//appends both col and row to the table
					row.appendChild(col);
				}
				else{ 				// stats.gameID.FrameNumber.throw
					table_part = "td";
				
					let col = document.createElement("td");
					let txt = document.createTextNode(stats[i-1][j][0]+ " " + stats[i-1][j][1]);//this is the score for the frame
			
					col.appendChild(txt);//appends both col and row to the table
					row.appendChild(col);
				}
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
