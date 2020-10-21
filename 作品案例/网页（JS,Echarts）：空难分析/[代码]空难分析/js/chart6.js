var dom = document.getElementById("chart6");
var myChart = echarts.init(dom);
var app = {};
option = null;
// Generate data
var line_data = [841.57,850.77,560.07,869.47,878.98,888.59,898.3,908.12,918.05,928.09,928.23,948.49,958.86,969.34,979.94,990.65];
var bar_data = [877,814,466,764,809,223,1066,337,890,707,1007,611,1090,1422,1109,1385];



// option
option = {
    backgroundColor: '#020d22',
    title: [{
        text: '灰色马尔可夫SCGM(1,1)_C模型的空难人数预测',
        left: '35%',
        top: '5%',
        textStyle: {
            color: '#FFFFFF'
        }
    }
    ],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['line', 'bar'],
        top: '10%',
        textStyle: {
            color: '#ccc'
        }
    },
    xAxis: {
        data:["1989","1990","1991","1992","1993","1994","1995","1996","1997","1998","1999","2000","2001","2002","2003","2004"],
        axisLine: {
            lineStyle: {
                color: '#ccc'
            }
        }
    },
    yAxis: {
        splitLine: {show: false},
        axisLine: {
            lineStyle: {
                color: '#ccc'
            }
        }
    },
    series: [{
        name: 'line',
        type: 'line',
        smooth: true,
        showAllSymbol: true,
        symbol: 'emptyCircle',
        symbolSize: 15,
        data: line_data
    }, {
        name: 'bar',
        type: 'bar',
        barWidth: 10,
        itemStyle: {
            normal: {
                barBorderRadius: 5,
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                        {offset: 0, color: '#14c8d4'},
                        {offset: 1, color: '#43eec6'}
                    ]
                )
            }
        },
        data: bar_data
    }, {
        name: 'line',
        type: 'bar',
        barGap: '-100%',
        barWidth: 10,
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                        {offset: 0, color: 'rgba(20,200,212,0.5)'},
                        {offset: 0.2, color: 'rgba(20,200,212,0.2)'},
                        {offset: 1, color: 'rgba(20,200,212,0)'}
                    ]
                )
            }
        },
        z: -12,
        data: line_data
    }, {
        name: 'dotted',
        type: 'pictorialBar',
        symbol: 'rect',
        itemStyle: {
            normal: {
                color: '#0f375f'
            }
        },
        symbolRepeat: true,
        symbolSize: [12, 4],
        symbolMargin: 1,
        z: -10,
        data: line_data
    }]
};;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}