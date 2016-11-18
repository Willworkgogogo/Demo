require.config({
    paths: {
        echarts: 'static/js/echarts/build/dist'
    }
})
require(
    [   
        'echarts',
        'echarts/chart/map'
    ],function(echarts) {
    	//header_nav
		var map = {
			$map_subnav_title_li : $('.map_subnav_title>li'),
			$map_subnav_title_subnav_li : $('.map_subnav_title_subnav').find('li'),
			$listItem_info : $('.listItem_info'),
			$listItem_compare : $('.listItem_compare'),
			$listInfo_wrap : $('.listInfo_wrap'),
			$listCompare_wrap : $('.listCompare_wrap'),
			$smm_map_rightCompare : $('.smm_map_rightCompare'),
			$smm_map_listTitle_listFirst:$('.smm_map_listTitle .list_first'),
			$contentInput : $('.smm_map_content_innerWrap .list_first input'),
			rightBtn : $('.rightButtonToggle'),
			listInfo_output : $('.listInfo_sortBtnBox1'),  //产量
			listInfo_capacity : $('.listInfo_sortBtnBox2') //产能
		}
		map.$map_subnav_title_li.on({
			'mouseover': function(){
				$(this).children('ul').css({'display': 'block', 'width': $(this).innerWidth()-1+'px'});
			},
			'mouseout': function(){
				$(this).children('ul').css({'display': 'none'});
			}
		})

		/*echats*/
		var smm_charts = echarts.init(document.getElementById('smm_map_echarts'))
		var option = {
			    title : {
			        text: 'SMM上海有色网——新能源',
			        subtext: 'SMM调研数据',
			        x:'center'
			    },
			   
			    tooltip : {
			        trigger: 'item'
			    },
			    dataRange: {
			        min: 0,
			        max: 1000,
			        x: 'left',
			        y: 'bottom',
			        text:['高','低'],           // 文本，默认为数值文本
			        calculable : true
			    },
			    toolbox: {
			        show: true,
			        orient : 'vertical',
			        x: 'right',
			        y: 'center',
			        feature : {
			            mark : {show: true},
			            dataView : {show: true, readOnly: false},
			            restore : {show: true},
			            saveAsImage : {show: true}
			        }
			    },
			    roamController: {
			        show: true,
			        x: 'right',
			        mapTypeControl: {
			            'china': true
			        }
			    },
			    series : [
			        {
			            name: '铜',
			            type: 'map',
			            mapType: 'china',
			            roam: false,
			            selectedMode : 'single',
			            itemStyle:{
			                normal:{label:{show:true}},
			                emphasis:{label:{show:true}}
			            },
			            data:
			            [
			                {name: '北京',value: Math.round(Math.random()*1000)},
			                {name: '天津',value: Math.round(Math.random()*1000)},
			                {name: '上海',value: Math.round(Math.random()*1000)},
			                {name: '重庆',value: Math.round(Math.random()*1000)},
			                {name: '河北',value: Math.round(Math.random()*1000)},
			                {name: '河南',value: Math.round(Math.random()*1000)},
			                {name: '云南',value: Math.round(Math.random()*1000)},
			                {name: '辽宁',value: Math.round(Math.random()*1000)},
			                {name: '黑龙江',value: Math.round(Math.random()*1000)},
			                {name: '湖南',value: Math.round(Math.random()*1000)},
			                {name: '安徽',value: Math.round(Math.random()*1000)},
			                {name: '山东',value: Math.round(Math.random()*1000)},
			                {name: '新疆',value: Math.round(Math.random()*1000)},
			                {name: '江苏',value: Math.round(Math.random()*1000)},
			                {name: '浙江',value: Math.round(Math.random()*1000)},
			                {name: '江西',value: Math.round(Math.random()*1000)},
			                {name: '湖北',value: Math.round(Math.random()*1000)},
			                {name: '广西',value: Math.round(Math.random()*1000)},
			                {name: '甘肃',value: Math.round(Math.random()*1000)},
			                {name: '山西',value: Math.round(Math.random()*1000)},
			                {name: '内蒙古',value: Math.round(Math.random()*1000)},
			                {name: '陕西',value: Math.round(Math.random()*1000)},
			                {name: '吉林',value: Math.round(Math.random()*1000)},
			                {name: '福建',value: Math.round(Math.random()*1000)},
			                {name: '贵州',value: Math.round(Math.random()*1000)},
			                {name: '广东',value: Math.round(Math.random()*1000)},
			                {name: '青海',value: Math.round(Math.random()*1000)},
			                {name: '西藏',value: Math.round(Math.random()*1000)},
			                {name: '四川',value: Math.round(Math.random()*1000)},
			                {name: '宁夏',value: Math.round(Math.random()*1000)},
			                {name: '海南',value: Math.round(Math.random()*1000)},
			                {name: '台湾',value: Math.round(Math.random()*1000)},
			                {name: '香港',value: Math.round(Math.random()*1000)},
			                {name: '澳门',value: Math.round(Math.random()*1000)}
			            ]
			        }
			    ]
			};//option
		smm_charts.setOption(option);


		var ecConfig = require('echarts/config');
		myChart.on(ecConfig.EVENT.MAP_SELECTED, function (param){
		    // var selected = param.selected;
		    // var str = '当前选择： ';
		    // for (var p in selected) {
		    //     if (selected[p]) {
		    //         str += p + ' ';
		    //     }
		    // }
		    console.log(param)
		})


		/*列表*/
		map.$listItem_info.on('click', function(){
			map.$smm_map_listTitle_listFirst.css('display', 'block');
			map.$listInfo_wrap.css('display', 'block');
			map.$listCompare_wrap.css('display', 'none');
			$(this).addClass('listItem_selected');
			map.$listItem_compare.removeClass('listItem_selected');
		})
		map.$listItem_compare.on('click', function(){
			map.$smm_map_listTitle_listFirst.css('display', 'none');
			map.$listInfo_wrap.css('display', 'none');
			map.$listCompare_wrap.css('display', 'block');
			$(this).addClass('listItem_selected');
			map.$listItem_info.removeClass('listItem_selected');
		})

		/*==========================事件请求===============================*/
		
		//二级菜单
		map.$map_subnav_title_li.each(function(index, el) {
			// console.log($(this).children('span').text() == '矿和盐')
			if ($(this).children('span').text() == '矿和盐') {
				$(this).click(function(event) {
					$.ajax({
						url:'test.json',
						type:'GET',
						success:function(res){
							refreshMap(res)
						}
					})
				});
			} else if($(this).children('span').text() == '电池材料'){
				$(this).click(function(event) {
					
				});
			}else if($(this).children('span').text() == '电池'){
				$(this).click(function(event) {
					
				});
			}else if($(this).children('span').text() == '终端'){
				$(this).click(function(event) {
					
				});
			}
		});

		/*=========================================================*/

	/*右侧对比栏列表*/
		//初始定位高度
		$('.rightCompare_wrap').css({'top': $('.smm_map_listItem').offset().top+'px','display':'block'});
		$('.rightCompare_toggle').on('click', function(){
			map.$smm_map_rightCompare.fadeOut('fast');
		})
		
		//
		var onOff = 1;
		$('.rightButtonToggle').on('click', function(){
			if (onOff == 1) {
				map.$smm_map_rightCompare.stop(true,true).animate({'left': 0}, 500, function(){
					map.rightBtn.css('background','url(./static/img/button_arrow.png) -12px 0 no-repeat');
				});
				onOff = 2;
			} else {
				map.$smm_map_rightCompare.stop(true,true).animate({'left': 162}, 500, function(){
					map.rightBtn.css('background','url(./static/img/button_arrow.png) no-repeat');
				});
				onOff = 1;
			}

		})
	/*全局数组，存放企业名称*/
		var map_company = [];
		var map_compareImg = [
				'static/img/compare1.png',
				'static/img/compare2.png',
				'static/img/compare3.png',
				'static/img/compare4.png',
				'static/img/compare5.png'
			];
		map.$contentInput.each(function(index, el) {
			$(this).removeAttr('checked');
		});	

	/*页面刷新隔行变色*/
		oddEven();
	/*对比栏删除按钮功能实现*/
		$('.smm_map_rightCompare_innerWrap').on('click', function(event){

			//删除按钮
			if ($(event.target).text() == '删除') {
				for (var i = 0; i < map_company.length; i++) {
					// map_company[i].name == $(event.target).parent().siblings('.rightCompare_listItems_content').text()
					if(map_company[i].name == $(event.target).parent().siblings('.rightCompare_listItems_content').text()){
						
						//对应复选框改为未勾选

						$('.smm_map_content_listUl').each(function() {
							if($(this).attr('hello') == map_company[i].id){
								$(this).find('.list_first input').removeAttr('checked');
							}
						});
						
						//从数组中删除该元素；
						map_company.splice(i, 1);
						
					}
				}
				if (onOff == 2 && map_company.length == 0) {
					map.$smm_map_rightCompare.stop(true,true).animate({'left': 162}, 500, function(){
						map.rightBtn.css('background','url(./static/img/button_arrow.png) no-repeat')
					});
					onOff = 1;
				}
			refreshCompare();
			refreshComparePage();
			oddEvenCompare();
			}

			//对比
			if ($(event.target).text() == '对比') {
				//样式重置
				map.$smm_map_listTitle_listFirst.css('display', 'none');
				map.$listInfo_wrap.css('display', 'none');
				map.$listCompare_wrap.css('display', 'block');
				map.$listItem_compare.addClass('listItem_selected');
				map.$listItem_info.removeClass('listItem_selected');
				refreshComparePage();
				oddEvenCompare();
			}

			//清空对比栏
			if ($(event.target).text() == '清空对比栏') {
				map_company = [];
				refreshCompare();
				checkboxReset();
				refreshComparePage();
				if (onOff == 2 && map_company.length == 0) {
					map.$smm_map_rightCompare.stop(true,true).animate({'left': 162}, 500, function(){
						map.rightBtn.css('background','url(./static/img/button_arrow.png) no-repeat')	
					});
					onOff = 1;
				}
			}
			checkboxCheck();
		})
		// 隐藏按钮
		$('.rightCompare_hide').on('click', function(){
			map.$smm_map_rightCompare.stop(true,true).animate({'left': 162}, 500, function(){
				map.rightBtn.css('background','url(./static/img/button_arrow.png) no-repeat')
			});
			onOff = 1;
		})
	/*列表勾选*/
		$('.smm_map_content_listUl').on('click', function(event){

			if($(event.target).is(':checked')){
				var map01 = {};
				var html = '';
				map01.id = $(event.target).parent().parent().attr('hello');//获取企业唯一id
				map01.name = $(event.target).parent().siblings('.list_third').find('.listItems_subwrap div').text();//企业名称
				html = $(event.target).parent().parent().prop('outerHTML');
				map01.ul = html;//ul
				var arrayNum = map_company.push(map01);

				if (onOff == 1) {
					$('.smm_map_rightCompare').stop(true,true).animate({'left': 0}, 500, function(){
						$('.rightButtonToggle').css('background','url(./static/img/button_arrow.png) -12px 0 no-repeat');			
					});
					onOff = 2;
				}
			}else{
				for (var i = 0; i < map_company.length; i++) {
					if(map_company[i].id == $(event.target).parent().parent().attr('hello')){
						map_company.splice(i, 1);
					}
				}

				if (onOff == 2 && map_company.length == 0) {
					$('.smm_map_rightCompare').stop(true,true).animate({'left': 162}, 500, function(){
						$('.rightButtonToggle').css('background','url(./static/img/button_arrow.png) no-repeat')	
					});
					onOff = 1;
				}
			}	
			checkboxCheck();
			refreshCompare();
		})


		// refreshCompare()刷新对比栏
		function refreshCompare(){
			if (map_company != []) {
				for (var i = 0; i < map_company.length; i++) {
					$('.smm_map_rightCompare_innerWrap')
						.find('.rightCompare_listItems')
						.eq(i)
						.html('<div class="rightCompare_listItems_content">'+ map_company[i].name +'</div>'
							+'<div class="rightCompare_btnDelete"><button>删除</button></div>');
				};		
			}
			for (var i = map_company.length; i < 5; i++) {
				$('.smm_map_rightCompare_innerWrap')
					.find('.rightCompare_listItems')
					.eq(i)
					.html('<img src="'+ map_compareImg[i] +'">');			
			}	
		}

		//checkboxReset复选框重置
		function checkboxReset() {
			if (map_company.length == 0) {
				$('.smm_map_content_listUl').each(function() {
					$(this).find('.list_first input').removeAttr('checked');
				});
			} else {
				for (var i = 0; i < map_company.length; i++) {
					$('.smm_map_content_listUl').each(function() {
						if($(this).attr('hello') == map_company[i].id){
							$(this).find('.list_first input').attr('checked');
						}else{
							$(this).find('.list_first input').removeAttr('checked');
						}
					});
				}
			}	
		}

		//refreshComparePage 对比页刷新
		function refreshComparePage() {
			
			//添加对比内容到对比页
			var html = '';
			for (var i = 0; i < map_company.length; i++) {
				html += map_company[i].ul
			};
			$('.listCompare_content').html(html);
			$('.listCompare_content .list_first').remove();
		}

		//checkboxCheck() 检查复选框，大于5个，其余禁选
		function checkboxCheck() {
			var checkNum = 0;
			map.$contentInput.each(function(index, el) {
				if($(this)[0].checked){
					checkNum++;
				};		
			});
			if (checkNum >= 5) {
				map.$contentInput.each(function(index, el) {
					if(!$(this)[0].checked){
						$(this).attr('disabled','disabled');
					};		
				});
			}else{
				map.$contentInput.each(function(index, el) {
					$(this).removeAttr('disabled');
				});
			};
		}

		//隔行变色
		function oddEven(){
			$('.smm_map_content_listUl:even').css('background', '#fff');
			$('.smm_map_content_listUl:odd').css('background', '#fafafa');
		}
		//对比页隔行变色
		function oddEvenCompare(){
			$('.listCompare_content .smm_map_content_listUl:even').css('background', '#fff');
			$('.listCompare_content .smm_map_content_listUl:odd').css('background', '#fafafa');
		}
	/*分页部分*/
	$(".paginationWrap").createPage({
        pageCount:100,
        current:1,
        backFn:function(p){
            console.log(p);
        }
    });

	//map 刷新
	// option.title.subtext = 'SMM调研数据'
	// option.dataRange.max = 1000
	// option.series[0].name = 
	// option.series[0].data = 
	function refreshMap(res){
		option.title.subtext = res.catogary;
		option.dataRange.max = res.max;
		option.series[0].name = res.catogary;
		option.series[0].data = res.data;
		smm_charts.setOption(option);
	}
    /*排序功能*/
    //listInfo
    map.listInfo_output.on('click', function(event){
    	// if($(event.target).hasClass('btnTop')){
    	// 	alert(1)
    	// }else{
    	// 	alert(2)
    	// }
    	console.log(event.target)
    })
    });


