var dom = document.getElementById("chart4");
var myChart = echarts.init(dom);
var app = {};
option = null;
var placeHolderStyle = {
    normal: {
        label: {
            show: false
        },
        labelLine: {
            show: false
        },
        color: "rgba(0,0,0,0)",
        borderWidth: 0
    },
    emphasis: {
        color: "rgba(0,0,0,0)",
        borderWidth: 0
    }
};


var dataStyle = {
    normal: {
        formatter: '{c}%',
        position: 'center',
        show: true,
        textStyle: {
            fontSize: '28',
            fontWeight: 'normal',
            color: '#fff'
        }
    }
};


option = {
    backgroundColor: '#020d22',
    title: [
        {
        text: '空难遇难者获取赔偿方式',
        left:'45%',
        x: '20',
        y: '20',
        textStyle: {
            color: '#fff',
            fontSize: 20
        }
    },{
        text: '航空公司承担的赔偿',
        left: '29.8%',
        top: '60%',
        textAlign: 'center',
        textStyle: {
            fontWeight: 'normal',
            fontSize: '16',
            color: '#fff',
            textAlign: 'center',
        },
    }, {
        text: '保险公司承担的赔偿',
        left: '70%',
        top: '60%',
        textAlign: 'center',
        textStyle: {
            color: '#fff',
            fontWeight: 'normal',
            fontSize: '16',
            textAlign: 'center',
        },
    }],
    series: [{
            type: 'pie',
            hoverAnimation: false, //鼠标经过的特效
            radius: ['25%', '31%'],
            center: ['30%', '50%'],
            startAngle: 225,
            labelLine: {
                normal: {
                    show: false
                }
            },
            label: {
                normal: {
                    position: 'center'
                }
            },
            data: [{
                    value: 71,
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#99da69'
                            }, {
                                offset: 1,
                                color: '#01babc'
                            }]),
                        }
                    },
                    label: dataStyle,
                }, {
                    value: 20,
                    itemStyle: placeHolderStyle,
                },

            ]
        },
        {
            type: 'pie',
            hoverAnimation: false,
            radius: ['25%', '31%'],
            center: ['70%', '50%'],
            startAngle: 225,
            labelLine: {
                normal: {
                    show: false
                }
            },
            label: {
                normal: {
                    position: 'center'
                }
            },
            data: [{
                    value: 29,
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#9f3edd'
                            }, {
                                offset: 1,
                                color: '#4897f6'
                            }]),
                        }
                    },
                    label: dataStyle,
                }, {
                    value: 80,
                    itemStyle: placeHolderStyle,
                },

            ]
        },
        
        //外圈的边框
        {
            // name: '总人数',
            type: 'pie',
            hoverAnimation: false, //鼠标经过的特效
            radius: ['31%', '32%'],
            center: ['30%', '50%'],
            startAngle: 225,
            labelLine: {
                normal: {
                    show: false
                }
            },
            label: {
                normal: {
                    position: 'center'
                }
            },
            data: [{
                    value: 75,
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#01babc'
                            }, {
                                offset: 1,
                                color: '#99da69'
                            }]),
                        }
                    },
                }, {
                    value: 25,
                    itemStyle: placeHolderStyle,
                },

            ]
        },
        {
            type: 'pie',
            hoverAnimation: false,
            radius: ['31%', '32%'],
            center: ['70%', '50%'],
            startAngle: 225,
            labelLine: {
                normal: {
                    show: false
                }
            },
            label: {
                normal: {
                    position: 'center'
                }
            },
            data: [{
                    value: 75,
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#4897f6'
                            }, {
                                offset: 1,
                                color: '#9f3edd'
                            }]),
                        }
                    },
                }, {
                    value: 25,
                    itemStyle: placeHolderStyle,
                },

            ]
        },
    ]
};
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}