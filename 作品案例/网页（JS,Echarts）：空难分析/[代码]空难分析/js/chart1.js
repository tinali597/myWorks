var dom = document.getElementById("chart1");
var myChart = echarts.init(dom);
var app = {};
option = null;
option = {
    backgroundColor: "#020d22",
    color: ['#63B8FF', '#40E0D0', '#008B8B'],

    title: [{
        text: '2012-2016商用航班的遇难人数与事故次数',
        left: '20%',
        top: '5%',
        textStyle: {
            color: '#FFFFFF'
        }
    }, {
        text: '飞行阶段与飞行失事概率的关系（黑色10分钟）',
        left: '83%',
        top: '5%',
        textAlign: 'center',
        textStyle: {
            color: '#FFFFFF'
        }
    }],
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        x: 300,
        top: '10%',
        left: '30%',
        textStyle: {
            color: '#FFFFFF',
        },
        data: ['事故次数', '遇难人数']
    },
    grid: {
        left: '1%',
        right: '35%',
        top: '16%',
        bottom: '6%',
        containLabel: true
    },
    toolbox: {
        "show": false,
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        "axisLine": {
            lineStyle: {
                color: '#68838B'
            }
        },
        "axisTick": {
            "show": false
        },
        axisLabel: {
            textStyle: {
                color: '#68838B'
            }
        },
        boundaryGap: false,
        data: ["2012","2013","2014","2015","2016"]
    },
    yAxis: {
        "axisLine": {
            lineStyle: {
                color: '#68838B'
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#68838B'
            }
        },
        "axisTick": {
            "show": false
        },
        axisLabel: {
            textStyle: {
                color: '#68838B'
            }
        },
        type: 'value'
    },
    series: [{
        name: '事故次数',
        smooth: true,
        type: 'line',
		label: {
                normal: {
                    show: true
                }
            },
        symbolSize: 8,
      	symbol: 'circle',
        data: [98,90,97,92,75]
		
    }, {
        name: '遇难人数',
        smooth: true,
        type: 'line',
		label: {
                normal: {
                    show: true
                }
            },
        symbolSize: 8,
      	symbol: 'circle',
        data: [386,173,911,474,182],
    }, 
    {
        type: 'pie',
        center: ['83%', '33%'],
        radius: ['25%', '30%'],
        label: {
            normal: {
                position: 'center',
				show:true
            }
        },
        data: [{
            value: 10,
            name: '6%',
            itemStyle: {
                normal: {
                    color: '#00FFFF'
					
                }
            },
            label: {
                normal: {
					show:true,
                    textStyle: {
                        color: '#63B8FF',
                        fontSize: 20
						

                    }
                }
            }
        }, {
            value: 180,
            name: '占位',
            tooltip: {
                show: false
            },
            itemStyle: {
                normal: {
                    color: '#63B8FF'
                }
            },
            label: {
                normal: {
					show:true,
                    textStyle: {
                        color: '#00FFFF',
                    },
                    formatter: '\n起落时间占总飞行时间'
                }
            }
        }]
    },


    {
        type: 'pie',
        center: ['83%', '72%'],
        radius: ['25%', '30%'],
        label: {
            normal: {
                position: 'center'
            }
        },
        data: [{
            value: 435,
            name: '68.3％',
            itemStyle: {
                normal: {
                    color: '#63B8FF'
                }
            },
            label: {
                normal: {
                    formatter: '{d} %',
                    textStyle: {
                        color: '#40E0D0',
                        fontSize: 20

                    }
                }
            }
        }, {
            value: 200,
            name: '占位',
            tooltip: {
                show: false
            },
            itemStyle: {
                normal: {
                    color: '#40E0D0'


                }
            },
            label: {
                normal: {
                    textStyle: {
                        color: '#40E0D0',
                    },
                    formatter: '\n在起落时发生事故的概率'
                }
            }
        }]
    }]
}

if (option && typeof option === "object") {
    myChart.setOption(option, true);
}