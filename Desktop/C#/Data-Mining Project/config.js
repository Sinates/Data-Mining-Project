function chartData(){
console.log(trainingSet());
    return { 
        datasets:
    [
        {
    label: "Dispute data for Ethiopia. South: black. North: green", 
    
    data: trainingSet().map((point)=>{ 
        return {x:point.YEAR, y: point.FATALITIES}
    
    }), 
    pointBackgroundColor: trainingSet().map((point)=>{ return point.HEMISPHERE=='Southern part of Ethiopia' ? 'black': 'green' }),
    showLine: false,
    
    pointRadius: 5.5, backgroundColor: 'red'
    
    }
]
    }
    
    }
    
    function chartOptions() { 
        return { 
            maintainAspectRatio: false,
    
    legend:
    {
    labels:
    {
        fontSize:0

    }},

    responsive: true,
    
    scales:
    {
    xAxes:
    [
    {
    display: true, 
    scaleLabel:
    {
    display: true, 
    labelString: 'YEAR',
    fontSize: 20
    },
    ticks:
    {
    fontSize: 28,
    
    max: 10,
    
    min:0
    }
    }
],
yAxes:
    [
    {
    display: true, 
    scaleLabel:
    
    {
    
    display: true, 
    labelString: 'FATALITIES',
    fontSize: 20
    },
    ticks:
    {
    fontSize: 28,
    
    max: 10,
    
    min:0
    }
    }
]
}
        }
    }