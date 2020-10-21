var dom = document.getElementById("chart3");
var myChart = echarts.init(dom);
var app = {};
option = null;

option = {
    backgroundColor: "#020d22",	
    title: [{
        text: '空难原因',
        left: '1%',
        top: '6%',
        textStyle: {
            color: '#FFFFFF'
        }
    }],
    radar: [
        {
            indicator: [
                { text: '飞行员驾驶失误等人为因素' },
                { text: '机械故障' },
                { text: '极端天气' },
                { text: '恐怖破坏' }
            ],
            center: ['25%', '50%'],
            radius: 200,
            startAngle: 90,
            splitNumber: 4,
            shape: 'circle',
            name: {
                formatter:'{value}',
                textStyle: {
                    color:'#72ACD1'
                }
            },
            splitArea: {
                areaStyle: {
                    color: ['rgba(114, 172, 209, 0.2)',
                    'rgba(114, 172, 209, 0.4)', 'rgba(114, 172, 209, 0.6)',
                    'rgba(114, 172, 209, 0.8)', 'rgba(114, 172, 209, 1)'],
                    shadowColor: 'rgba(0, 0, 0, 0.3)',
                    shadowBlur: 10
                }
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(255, 255, 255, 0.5)'
                }
            },
            splitLine: {
                lineStyle: {
                    color: 'rgba(255, 255, 255, 0.5)'
                }
            }
        },
        {
            indicator: [
                { text: '用哪国法律解决赔偿问题', max: 500 },
                { text: '赔偿标准是否取决于乘客的国籍', max: 500 },
                { text: '是否所有机上人员都能获得赔偿', max: 500 },
                { text: '根据公约赔偿多少金额', max: 500 },
                { text: '对行李和货物的赔偿规定', max: 500 },
                { text: '保险公司赔偿规定', max: 500 },
				{ text: '工伤赔偿', max: 500 },
				{ text: '空难死亡赔偿金是否属于遗产', max: 500 },
				{ text: '索赔人应该在哪索赔', max: 500 },
				{ text: '诉讼时效', max: 500 }
            ],
            center: ['75%', '50%'],
            radius: 200
        }
    ],
    series: [
        {
            name: '雷达图',
            type: 'radar',
            itemStyle: {
                emphasis: {
                    // color: 各异,
                    lineStyle: {
                        width: 4
                    }
                }
            },
            data: [
                {
                    value:[28,31,25,7],
                    name: '图一',
                    symbol: 'rect',
                    symbolSize: 5,
                    lineStyle: {
                        normal: {
                            type: 'dashed'
                        }
                    }
                },
                {
                    value:[28/2,31/2,25/2,7/2] ,
                    name: '图二',
                    areaStyle: {
                        normal: {
                            color: 'rgba(255, 255, 255, 0.5)'
                        }
                    }
                }
            ]
        },
        {
            name: '成绩单',
            type: 'radar',
            radarIndex: 1,
            data: [
                {
                    value: [335, 310, 274, 235, 110, 174,135,300],
                    name: '张三',
                    label: {
                        normal: {
                            show: true,
                            formatter:function(params) {
                                return params.value;
                            }
                        }
                    }
                },
                {
                    value: [335/2, 310/2, 274/2, 235/2, 110/2, 174/2,135/2,300/2],
                    name: '李四',
                    areaStyle: {
                        normal: {
                            opacity: 0.9,
                            color: new echarts.graphic.RadialGradient(0.5, 0.5, 1, [
                                {
                                    color: '#B8D3E4',
                                    offset: 0
                                },
                                {
                                    color: '#72ACD1',
                                    offset: 1
                                }
                            ])
                        }
                    }
                }
            ]
        }
    ]
}
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}