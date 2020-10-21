
var datas=
[
"#期待续集,54.8#推荐熟人,53.9#关注新闻,39.9#重读原著,37.3#参与讨论,31#多次观赏,20.2#买原著,16.1#无任何参与,9",
"#明星偶像,51#观众海选,43.3#老戏骨,39.4#小鲜肉,33.9#网络红人,14.1#作者本人,8.5#其他,2.9",
"#电视剧,95.3#电影,60.9#漫画,26#游戏,21.3#有声书,11.8",
"#可以适当改编剧情,66#可以适当改编角色,18.1#可以适当改编结局,17.2#可以随意改编,0.7",
"#看过IP改编作品,70.1#没看过IP改编作品,29.9",
"#玄幻,47.4#穿越,40.9#仙侠,40.2#言情,39.1#校园,35.4#科幻,29.5#历史,23.8#惊悚,23#都市,21.8#游戏,11.6",
]
var options=[];
var myChart = echarts.init(document.getElementById('pie'));
for(var j=0;j<datas.length;j++){
	var dataset=[];
	var data=datas[j];
	rows=data.split("#");
	for(var i = 0;i<rows.length;i++){
		var colum=rows[i].split(",");
		var a=colum[0];
		var b=colum[1];
		var dataObject={value:b,name:a};
		dataset.push(dataObject);
	}
	// 指定图表的配置项和数据
var itemStyle = {
    normal: {
        opacity: 1,
        color: '#DE3C3C',
        borderWidth: 4,
        borderColor: '#F7B32D'
    }
};
option = {
    title: {
        textStyle: {
            color: '#F7B32D'
        }
    },
    tooltip: {},
    series: [{
        name: '',
        type: 'pie',
        selectedMode: 'single',
        selectedOffset: 30,
        clockwise: true,
        roseType: 'angle',//将输出形式设置为南丁格尔图,没有这句将输出饼状图
        label: {
            normal: {
                textStyle: {
                    fontSize: 18,
                    color: '#F7B32D'
                }
            }
        },
        labelLine: {
            normal: {
                lineStyle: {
                    color: '#F7B32D'
                }
            }
        },
        data:dataset,
        itemStyle: itemStyle
    }]
};
	options.push(option);
}
// 使用刚指定的配置项和数据显示图表。

num=[1,2,3,4,5,6];
myChart.setOption(options[0]);
titleCells=d3.selectAll(".title").data(num)
			.on("click",function(d,i){
				d3.select("#selected").attr("id","");
				d3.select(this).attr("id","selected");
				myChart.setOption(options[i]);
			});

