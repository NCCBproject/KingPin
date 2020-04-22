// somewhere we have to put npm install chart.js --save

<canvas id="myChart" width="400" height="400"></canvas>
<script>
//this chart should show the average scores over the last five games entered
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['1st Frame', '2nd Frame', '3rd Frame', '4th Frame',
		'5th Frame', '6th Frame', '7th Frame', '8th Frame', '9th Frame', '10th Frame'], // lables for all of the x asix 
        datasets: [{
            label: '# of Pins',
            data: [(Frame11-game1+Frame12-game1+Frame11-game2 
			+Frame12-game2+Frame11-game3+Frame12-game3+Frame11-game4+
			Frame12-game4+Frame11-game5+Frame12-game5)/5,//frame1 average
			
			(Frame21-game1+Frame22-game1+Frame21-game2
			+Frame22-game2+Frame21-game3+Frame22-game3+Frame21-game4+
			Frame22-game4+Frame21-game5+Frame22-game5)/5,//frame2 average
			
			(Frame31-game1+Frame32-game1+Frame31-game2
			+Frame32-game2+Frame31-game3+Frame32-game3+Frame31-game4+
			Frame32-game4+Frame31-game5+Frame32-game5)/5,//frame3 average,
			
			(Frame41-game1+Frame42-game1+Frame41-game2
			+Frame42-game2+Frame41-game3+Frame42-game3+Frame41-game4+
			Frame42-game4+Frame41-game5+Frame42-game5)/5,//frame4 average,
			
			(Frame51-game1+Frame52-game1+Frame51-game2
			+Frame52-game2+Frame51-game3+Frame52-game3+Frame51-game4+
			Frame52-game4+Frame51-game5+Frame52-game5)/5,//frame5 average,
			
			(Frame61-game1+Frame62-game1+Frame61-game2
			+Frame62-game2+Frame61-game3+Frame62-game3+Frame61-game4+
			Frame62-game4+Frame61-game5+Frame62-game5)/5,//frame6 average,
			
			(Frame71-game1+Frame72-game1+Frame71-game2
			+Frame72-game2+Frame71-game3+Frame72-game3+Frame71-game4+
			Frame72-game4+Frame71-game5+Frame72-game5)/5,//frame7 average, 
			
			(Frame81-game1+Frame82-game1+Frame81-game2
			+Frame82-game2+Frame81-game3+Frame82-game3+Frame81-game4+
			Frame82-game4+Frame81-game5+Frame82-game5)/5,//frame8 average, 
			
			(Frame91-game1+Frame92-game1+Frame91-game2
			+Frame92-game2+Frame91-game3+Frame92-game3+Frame91-game4+
			Frame92-game4+Frame91-game5+Frame92-game5)/5,//frame9 average, 
			
			(Frame01-game1+Frame02-game1+Frame03-game1+
			Frame01-game2+Frame02-game2+Frame03-game2+
			Frame01-game3+Frame02-game3+Frame03-game3+
			Frame01-game4+Frame02-game4+Frame03-game4+
			Frame01-game5+Frame02-game5+Frame03-game5+)/5,//frame10 average, 
			],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
</script>
