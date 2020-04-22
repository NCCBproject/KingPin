// somewhere we have to put npm install chart.js --save

<canvas id="myChart" width="400" height="400"></canvas>
<script>
var gamesUnder100
var gamesUnder200
var gamesUnder300
var myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data:data = {
    datasets: [{
        data: [gamesUnder100, gamesUnder200, gamesUnder300]
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
        'Games under 100',
        'Games under 200',
        'Games under 300'
    ]
};
    options: options
});
<\script>
