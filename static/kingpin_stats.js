(function(){
	"use strict";
	window.addEventListener("load", init);
	let btn, cArea;
	var content = {username:''};
	
	
	function init(){
			cArea = document.getElementById("canvasArea");
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
			.then(initialize_table)//this will send the data to "initialize_table" function if there are no errors 
			.catch(console.log);
		
	}
	function frameAvgChart(stats){
		var f1Avg= 0;
		
		var ctx = document.getElementById('frameAvgChart').getContext('2d');
Chart.defaults.global.defaultFontColor = 'black';
var frameAvgChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['1st Frame', '2nd Frame', '3rd Frame', '4th Frame',
		'5th Frame', '6th Frame', '7th Frame', '8th Frame', '9th Frame', '10th Frame'], // lables for all of the x asix 
        datasets: [{
           	 label: '# of Pins',
			barThickness: 50,
           	 data: [	   (scoreToInteger(stats[1][1][0])+scoreToInteger(stats[1][1][1])+
				   scoreToInteger(stats[2][1][0])+scoreToInteger(stats[2][1][1])+
				   scoreToInteger(stats[3][1][0])+scoreToInteger(stats[3][1][1])+
				   scoreToInteger(stats[4][1][0])+scoreToInteger(stats[4][1][1])+
				   scoreToInteger(stats[5][1][0])+scoreToInteger(stats[5][1][1]))/5,
		
				   (scoreToInteger(stats[1][2][0])+scoreToInteger(stats[1][2][1])+
				   scoreToInteger(stats[2][2][0])+scoreToInteger(stats[2][2][1])+
				   scoreToInteger(stats[3][2][0])+scoreToInteger(stats[3][2][1])+
				   scoreToInteger(stats[4][2][0])+scoreToInteger(stats[4][2][1])+
				   scoreToInteger(stats[5][2][0])+scoreToInteger(stats[5][2][1]))/5,
		
				   (scoreToInteger(stats[1][3][0])+scoreToInteger(stats[1][3][1])+
				   scoreToInteger(stats[2][3][0])+scoreToInteger(stats[2][3][1])+
				   scoreToInteger(stats[3][3][0])+scoreToInteger(stats[3][3][1])+
				   scoreToInteger(stats[4][3][0])+scoreToInteger(stats[4][3][1])+
				   scoreToInteger(stats[5][3][0])+scoreToInteger(stats[5][3][1]))/5,
		//frame3 average
				   (scoreToInteger(stats[1][4][0])+scoreToInteger(stats[1][4][1])+
				   scoreToInteger(stats[2][4][0])+scoreToInteger(stats[2][4][1])+
				   scoreToInteger(stats[3][4][0])+scoreToInteger(stats[3][4][1])+
				   scoreToInteger(stats[4][4][0])+scoreToInteger(stats[4][4][1])+
				   scoreToInteger(stats[5][4][0])+scoreToInteger(stats[5][4][1]))/5,
		//frame4 average
				   (scoreToInteger(stats[1][5][0])+scoreToInteger(stats[1][5][1])+
				   scoreToInteger(stats[2][5][0])+scoreToInteger(stats[2][5][1])+
				   scoreToInteger(stats[3][5][0])+scoreToInteger(stats[3][5][1])+
				   scoreToInteger(stats[4][5][0])+scoreToInteger(stats[4][5][1])+
				   scoreToInteger(stats[5][5][0])+scoreToInteger(stats[5][5][1]))/5,
		//frame5 average
				   (scoreToInteger(stats[1][6][0])+scoreToInteger(stats[1][6][1])+
				   scoreToInteger(stats[2][6][0])+scoreToInteger(stats[2][6][1])+
				   scoreToInteger(stats[3][6][0])+scoreToInteger(stats[3][6][1])+
				   scoreToInteger(stats[4][6][0])+scoreToInteger(stats[4][6][1])+
				   scoreToInteger(stats[5][6][0])+scoreToInteger(stats[5][6][1]))/5,
		//frame6 average
				   (scoreToInteger(stats[1][7][0])+scoreToInteger(stats[1][7][1])+
				   scoreToInteger(stats[2][7][0])+scoreToInteger(stats[2][7][1])+
				   scoreToInteger(stats[3][7][0])+scoreToInteger(stats[3][7][1])+
				   scoreToInteger(stats[4][7][0])+scoreToInteger(stats[4][7][1])+
				   scoreToInteger(stats[5][7][0])+scoreToInteger(stats[5][7][1]))/5,
		//frame7 average
				   (scoreToInteger(stats[1][8][0])+scoreToInteger(stats[1][8][1])+
				   scoreToInteger(stats[2][8][0])+scoreToInteger(stats[2][8][1])+
				   scoreToInteger(stats[3][8][0])+scoreToInteger(stats[3][8][1])+
				   scoreToInteger(stats[4][8][0])+scoreToInteger(stats[4][8][1])+
				   scoreToInteger(stats[5][8][0])+scoreToInteger(stats[5][8][1]))/5,
		//frame8 average
				   (scoreToInteger(stats[1][9][0])+scoreToInteger(stats[1][9][1])+
				   scoreToInteger(stats[2][9][0])+scoreToInteger(stats[2][9][1])+
				   scoreToInteger(stats[3][9][0])+scoreToInteger(stats[3][9][1])+
				   scoreToInteger(stats[4][9][0])+scoreToInteger(stats[4][9][1])+
				   scoreToInteger(stats[5][9][0])+scoreToInteger(stats[5][9][1]))/5,
		//frame9 average
				   (scoreToInteger(stats[1][10][0])+scoreToInteger(stats[1][10][1])+
				   scoreToInteger(stats[2][10][0])+scoreToInteger(stats[2][10][1])+
				   scoreToInteger(stats[3][10][0])+scoreToInteger(stats[3][10][1])+
				   scoreToInteger(stats[4][10][0])+scoreToInteger(stats[4][10][1])+
				   scoreToInteger(stats[5][10][0])+scoreToInteger(stats[5][10][1]))/5,
		//frame10 average
			],
            backgroundColor: [
                
            ],
            borderColor: [
                'rgba(0, 0, 0, 1)',
                'rgba(255, 0, 0, 1)',
				'rgba(0, 0, 0, 1)',
				'rgba(255, 0, 0, 1)',
				'rgba(0, 0, 0, 1)',
                'rgba(255, 0, 0, 1)',
				'rgba(0, 0, 0, 1)',
				'rgba(255, 0, 0, 1)',
				'rgba(0, 0, 0, 1)',
				'rgba(255, 0, 0, 1)'
            ],
            borderWidth: 2
        }]
    },
    options: {
		responsive: false,
        scales: {
            yAxes: [{
            	ticks: {
                	beginAtZero: true
            	},
   			 scaleLabel:{
   				 display: true,
   				 labelString: 'Score',
				 fontSize:16
   			 },
        	}],

			xAxes: [{
            	ticks: {
                	beginAtZero: false
            	},
   			 scaleLabel:{
   				 display: true,
   				 labelString: 'Frame',
				 fontSize:16
   			 },
        	}]
			
        },
		title: {
            display: true,
            text: 'Frame Averages',
			fontSize:24
        },
		legend: {
            display: false,
            position: 'left',
			align: 'center'
			
			
        }
    }
	
});
	}
	function lastScoreChart(stats){		
		var ctx = document.getElementById('lastScoreChart').getContext('2d');
Chart.defaults.global.defaultFontColor = 'black';
var lastScoreChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: ['1st Frame', '2nd Frame', '3rd Frame', '4th Frame',
		'5th Frame', '6th Frame', '7th Frame', '8th Frame', '9th Frame', '10th Frame'], // lables for all of the x asix 
        datasets: [{
            label: '# of Pins',
			barThickness: 10,
            data: [		   scoreToInteger(stats[3][1][0])+scoreToInteger(stats[3][1][1]),//frame1 average
				   scoreToInteger(stats[3][2][0])+scoreToInteger(stats[3][2][1]),//frame2 average
				   scoreToInteger(stats[3][3][0])+scoreToInteger(stats[3][3][1]),//frame3 average
				   scoreToInteger(stats[3][4][0])+scoreToInteger(stats[3][4][1]),//frame4 average
				   scoreToInteger(stats[3][5][0])+scoreToInteger(stats[3][5][1]),//frame5 average
				   scoreToInteger(stats[3][6][0])+scoreToInteger(stats[3][6][1]),//frame6 average
				   scoreToInteger(stats[3][7][0])+scoreToInteger(stats[3][7][1]),//frame7 average
				   scoreToInteger(stats[3][8][0])+scoreToInteger(stats[3][8][1]),//frame8 average
				   scoreToInteger(stats[3][9][0])+scoreToInteger(stats[3][9][1]),//frame9 average
				   scoreToInteger(stats[3][10][0])+scoreToInteger(stats[3][10][1]),//frame10 average
			],
            backgroundColor: [
                
            ],
            borderColor: [
                'rgba(0, 0, 255, 1)',
                'rgba(255, 0, 0, 1)',
				'rgba(0, 0, 255, 1)',
				'rgba(255, 0, 0, 1)',
				'rgba(0, 0, 255, 1)',
                'rgba(255, 0, 0, 1)',
				'rgba(0, 0, 255, 1)',
				'rgba(255, 0, 0, 1)',
				'rgba(0, 0, 255, 1)',
				'rgba(255, 0, 0, 1)'
            ],
            borderWidth: 2
        }]
    },
    options: {
		responsive: false,
        scales: {
            yAxes: [{
            	ticks: {
                	beginAtZero: true
            	},
   			 scaleLabel:{
   				 display: true,
   				 labelString: 'Frame',
				 fontSize:16
   			 },
        	}],

			xAxes: [{
            	ticks: {
                	beginAtZero: true
            	},
   			 scaleLabel:{
   				 display: true,
   				 labelString: 'Score',
				 fontSize:16
   			 },
        	}]
			
        },
		title: {
            display: true,
            text: 'Most Recent Game',
			fontSize:24
        },
		legend: {
            display: false,
            position: 'left',
			align: 'center'
			
			
        }
    }
	
});
	}
	function lineChart(stats){		
		var ctx = document.getElementById('donutChart').getContext('2d');
Chart.defaults.global.defaultFontColor = 'black';
var lineChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Game 1', 'Game 2', 'Game 3', 'Game 4',
        'Game 5'],
		fontColor: '#000'	,	// lables for all of the x asix 
        datasets: [{
            data: [156,//game1 total
                   254,
                   300,
                   200,
                   241,
            ],
			backgroundColor: ['rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'],
			borderColor: [
                'rgba(0, 0, 0, .7)'
            ],
            fill: false,
			lineTension: 0,
			pointRadius: 6
        }]
    },
    options: {
		responsive: false,

        scales: {
			
            yAxes: [{
                ticks: {
                    beginAtZero: false
                },
				scaleLabel:{
					display: true,
					labelString: 'Total Score',
					fontColor: '#000'
				},
            }],
			xAxes:[{
				scaleLabel:{
					display: true,
					labelString: 'Games',
					fontColor: '#000'
			},
        }],
        },
        title: {
            display: true,
            text: 'Last 5 Game Average',
			fontSize: 24,
			fontColor: '#000'
        },
		legend:{
		display: false
		},
		
		
		
    }

});
	}


	function donutChart(stats){
		
	var a,b,c,d,f =0;
for( let x = 1; x<=3; x++){
	if((scoreToInteger(stats[x][0])<=300) && (scoreToInteger(stats[x][0])>=250)){
		a+=1;
	}else if((scoreToInteger(stats[x][0])<=249) && (scoreToInteger(stats[x][0])>=200)){
		b+=1;
	}else if((scoreToInteger(stats[x][0])<=199) && (scoreToInteger(stats[x][0])>=150)){
		c+=1;
	}else if((scoreToInteger(stats[x][0])<=149) && (scoreToInteger(stats[x][0])>=100)){
		d+=1;
	}else{
		f+=1;
	}
}	

		console.log(stats[3][0]);
		var ctx = document.getElementById('lineChart').getContext('2d');
Chart.defaults.global.defaultFontColor = 'black';
var donutChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['250-300','200-249' , '150-199', '100-149', '100 or lower'],// lables for all of the x asix 
			
        datasets: [{
            data: [a,//250-300
                   b,//200-249
                   c,//150-199
                   d,//100-149
		   f//100 or lower
                  
            ],
			backgroundColor: ['rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
		'rgba(16, 233, 85)'],
			
            
		
		
        }]
    },
    options: {
		responsive: false,

        scales: {
			
            yAxes: [{
				display: false,
                ticks: {
                   // beginAtZero: true
                },
				scaleLabel:{
					display: false,
					
				},
				gridLines:{
					display: false
				},
            }],
			xAxes:[{
				display:false,
				scaleLabel:{
					display: false,
					
					
			},
				gridLines:{
					display: false
				},
			
        }],
        },
        title: {
            display: true,
            text: 'Total Score Grouping',
			fontSize: 24,
			fontColor: '#000'
        },
		legend:{
			
			display: true,
			text:'300-250'
		},
		
		
		
    }

});
	}
	
	function scoreToInteger(String){
	if(String=='f')
		return 0;
	if(String=='-')
		return 0;
	if(String=='/')
		return 0;
	if(String=='x'||String=='X')
		return 10;
	if(String=="None")
		return 0;
		return parseInt(String);
	}
	
	function initialize_table(stats){//function to create and fill table with data	(remember to put have parameter variable)
		let gameNum = stats[0]; //number of games 
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
		
		for(let i = 0; i <= gameNum; i++){//this will change. First row in table will need to get title of each column from php data. 
			let row = document.createElement("tr");// creates the rows of the table
			for(let j = 1; j <= 10; j++){// will put data onto table cells 
				let table_part;//I'm pretty sure there is a better way to do this but idc right now since its midnight
				if(i === 0){//first row will be bold
					let col = document.createElement("th");//the first row will show the frame
					let txt = document.createTextNode(j);
					
					col.appendChild(txt);//appends both col and row to the table
					row.appendChild(col);
				}
				else{ 				// stats.gameID.FrameNumber.throw
					table_part = "td";
				
					let col = document.createElement("td");
					let txt = document.createTextNode(stats[i][j][0]+ " " + stats[i][j][1]);//this is the score for the frame
			
					col.appendChild(txt);//appends both col and row to the table
					row.appendChild(col);
				}
			}
			document.getElementById("data_table").appendChild(row);
			frameAvgChart(stats);//calling function
			lastScoreChart(stats);//calling function
			donutChart(stats); //calling function
			lineChart(stats); //calling function
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
