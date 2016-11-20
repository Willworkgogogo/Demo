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
    	$(document).ready(function($) {
    		var map = {
			selectedCatagory : '',
			selectedProvince : '',
			$map_subnav_title_li : $('.map_subnav_title>li'),
			$map_subnav_title_subnav_li : $('.map_subnav_title_subnav').find('li'),
			$listItem_info : $('.listItem_info'),
			$listItem_compare : $('.listItem_compare'),
			$listInfo_wrap : $('.listInfo_wrap'),
			$listCompare_wrap : $('.listCompare_wrap'),
			$smm_map_rightCompare : $('.smm_map_rightCompare'),
			$smm_map_listTitle_listFirst:$('.smm_map_listTitle .list_first'),
			$smm_map_content_innerWrap: $('.smm_map_content_innerWrap'),
			$smm_map_content_listUl: $('.smm_map_content_listUl'),
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
			            name: 'tong',
			            type: 'map',
			            mapType: 'china',
			            roam: false,
			            itemStyle:{
			                normal:{label:{show:true}},
			                emphasis:{label:{show:true}}
			            },
			            data: [
			                
			            ]  
			        }
			    ]
			};//option
		smm_charts.setOption(option);
		// clearTimeout(loadingTicket);
		// var loadingTicket = setTimeout(function (){
		//     smm_charts.hideLoading();
		//     smm_charts.setOption(option);
		// },1500);

		// var ecConfig = require('echarts/config');
		$.ajax({
				url : 'static/js/test4.json',
				type : 'GET',
				beforeSend : function(){
					setLoad($('.listInfo_wrap')); //list show loading
				},
				success:function(res){
					console.log(1)
					listRender(res); //list render
				},
				error:function(XMLHttpRequest, textStatus, errorThrown){
					console.log(errorThrown)
				},
				complete:function(){
					removeLoad();
				}
			})
		$.ajax({
				url : 'static/js/test.json',
				type : 'GET',
				beforeSend : function(){
					smm_charts.showLoading(); // map show loading
				},
				success:function(res){
					mapRender(res); //map render	
				},
				error:function(XMLHttpRequest, textStatus, errorThrown){
					console.log(errorThrown)
				},
				complete:function(){
					smm_charts.hideLoading();
				}
			})
		/*==========================事件请求===============================*/
		function mapAjax(provice, header){
			//列表数据请求
			$.ajax({
				url : 'catagory/' + map.selectedCatagory,
				type : 'GET',
				beforeSend : function(){
					setLoad($('.listInfo_wrap')); //list show loading
				},
				success:function(res){
					listRender(res); //list render
				},
				error:function(XMLHttpRequest, textStatus, errorThrown){
					console.log(errorThrown)
				},
				complete:function(){
					removeLoad();
				}
			});
			//map数据请求
			$.ajax({
				url : 'map/' + map.selectedCatagory,
				type : 'GET',
				beforeSend : function(){
					smm_charts.showLoading(); // map show loading
				},
				success:function(res){
					mapRender(res); //map render
				},
				error:function(XMLHttpRequest, textStatus, errorThrown){
					console.log(errorThrown)
				},
				complete:function(){
					smm_charts.hideLoading();
				}
			})
		}
		//二级菜单
		$('.map_subnav_title').on('click', function(event) {
			// console.log($(event.target).is('span'))
			if($(event.target).is('span')){
				map.selectedCatagory = $(event.target).text();
				// console.log(map.selectedCatagory)
				$.ajax({
					url : 'catagory/' + map.selectedCatagory,
					type : 'GET',
					beforeSend : function(){
						smm_charts.showLoading(); // map show loading
						setLoad($('.listInfo_wrap')); //list show loading
					},
					success:function(res){
						mapRender(res); //map render
						listRender(res); //list render
					},
					complete:function(){
						smm_charts.hideLoading();
						removeLoad();
					}
				})
			}
		})
		//三级菜单
		$('.map_subnav_title_subnav').on('click', function(event) {
			event.stopPropagation();
			if($(event.target).is('li')){
				map.selectedCatagory = $(event.target).text();
				console.log(map.selectedCatagory)
				$.ajax({
					url : 'catagory/map'+$(event.target).text(),
					type : 'GET',
					beforeSend : function(){
						smm_charts.showLoading(); // map show loading
						setLoad($('.listInfo_wrap')); //list show loading
					},
					success:function(res){
						mapRender(res); //map render
						listRender(res); //list render
					},
					complete:function(){
						smm_charts.hideLoading();
						removeLoad();
					}
				})
			}
		})
		


		//标签点击
		$('.map_subnav_tips').on('click', function(event) {
			if($(event.target).is('li')){
				//记录点击类目
				map.selectedCatagory = $(event.target).text(); 
				$.ajax({
					url : 'catagory/map'+$(event.target).text(),
					type : 'GET',
					beforeSend : function(){
						smm_charts.showLoading(); // map show loading
						setLoad($('.listInfo_wrap')); //list show loading
					},
					success:function(res){
						mapRender(res); //map render
						listRender(res); //list render
					},
					complete:function(){
						smm_charts.hideLoading();
						removeLoad();
					}
				})
			}
		})


		//地图省份点击
		smm_charts.on('click', function (param){
		    map.selectedProvince = param.name
		    $.ajax({
		    	url:'catagory/map'+map.selectedCatagory+param.name,
		    	type:'GET',
		    	success:function(res){
		    		listRender(res);
		    	}
		    })
		})
		/*=========================================================*/


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
				doTipBox();
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
		checkEvent();
		function checkEvent(){
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
		}
		
		/*地图 、 表格  渲染*/
		/*==============*/
		function mapRender(res) {
			option.dataRange.max = res.max;
			// option.series[0].name = map.selectedCatagory;
			option.series[0].data = res.data;
			smm_charts.setOption(option);
		}

		function listRender(res){
			var str = '';
			for (var i = 0; i < res.data.length; i++) {
				if (res.data[i].company_info.security_status == 0) {
					res.data[i].company_info.security_status = '未上市'
				} else if(res.data[i].company_info.mine_info == ''){
					res.data[i].company_info.mine_info = '-'
				} else if(res.data[i].product_infos[0].quantity == null){
					res.data[i].product_infos[0].quantity = 'N/A'
				}
				str += ''+'<ul class="smm_map_content_listUl" hello="'+res.data[i].company_info.id+'">'	
						 +'<li class="list_first"><input type="checkbox" name=""></li>'
						 +'<li class="list_second"><div><p>'+res.data[i].company_info.province+'</p><p>'+res.data[i].company_info.city+'</p></div></li>'
						 +'<li class="list_third"><div class="listItems_subwrap"><div>'+res.data[i].company_info.name+'</div></div></li>'
						 +'<li class="list_fourth"><div class="listItems_subwrap"><div>'+res.data[i].company_info.address+'</div></div></li>'
						 +'<li class="list_fifth"><div class="listItems_subwrap"><div><p>'+res.data[i].company_info.security_status+'</p><p>'+res.data[i].company_info.security_code+'</p></div></div></li>'
						 +'<li class="list_sixth"><div class="listItems_subwrap"><div>'+res.data[i].company_info.mine_info+'</div></div></li>'
						 +'<li class="list_seventh">'+(res.data[i].product_infos[0].quantity?res.data[i].product_infos[0].quantity:"N/A")+'</li>'
						 +'<li class="list_seventh_next"><div class="listItems_subwrap"><div>'+(res.data[i].product_infos[0].additional_info?res.data[i].product_infos[0].additional_info:"N/A")+'</div></div></li>'
						 +'<li class="list_eighth"><span>'+(res.data[i].product_infos[1].quantity?res.data[i].product_infos[1].quantity:"N/A")+'</span></li>'
						 +'<li class="list_eighth_next"><div class="listItems_subwrap"><div>'+(res.data[i].product_infos[1].additional_info?res.data[i].product_infos[1].additional_info:"N/A")+'</div></div></li>'
						 +'<li class="list_ninth"><span>'+(res.data[i].product_infos[2].additional_info?res.data[i].product_infos[2].additional_info:"N/A")+'</span></li>'
						 +'<li class="list_ten"><div class="listItems_subwrap"><div>'+(res.data[i].product_infos[3].additional_info?res.data[i].product_infos[3].additional_info:"N/A")+'</div></div></li>'
					     +'</ul>'
			}
			$('.smm_map_content_innerWrap').html(str);
			checkEvent(); //表格渲染，勾选框事件绑定
			oddEven();//隔行变色
			paginationInit(20);
			doTipBox();
		}
		/*==============*/

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
			var $contentInput = $('.smm_map_content_innerWrap .list_first input');
			if (map_company.length >= 5) {
				$contentInput.each(function(){
					if(!$(this)[0].checked){
						$(this).attr('disabled','disabled');
					};
				})
			}else{
				$contentInput.each(function() {
					$(this).removeAttr('disabled');
				});
			}
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
	refreshPagination();
	function refreshPagination(){
		$(".paginationWrap").createPage({
	        pageCount: 10/2,
	        current:1,
	        backFn:function(p){
	            console.log(p);
	        }
	    });		
	}
	function paginationInit(totalPage){
		$(".paginationWrap").createPage({
			pageCount: totalPage,
	        current:1
	    });
	}


	//map list pagination compare 同时刷新
	// function loadMapList(res){
	// 	refreshMap(res);
	// 	listRender(res);
	// 	var $contentInput = $('.smm_map_content_innerWrap .list_first input');
	// 	map.$smm_map_content_listUl = $('.smm_map_content_listUl');
	// 	// map.$contentInput = $('.smm_map_content_innerWrap .list_first input');
	// 	console.log(map.$smm_map_content_listUl)
	// 	refreshPagination();
	// 	oddEven();
	// 	checkEvent();
	// 	doTipBox();
	// }
	
	// setLoad(map.$smm_map_content_innerWrap)
	//loading
		//设置loding
		function setLoad(dom){
			var div = document.createElement('div');
			div.className = 'loadState';
			div.innerHTML = '&nbsp;&nbsp;&nbsp;&nbsp;加载中...';
			dom.append(div);
		}
		function removeLoad(){
			$('.loadState').remove();
		}
    /*排序功能*/
 
    $('#listCompare_seven_btnTop').on('click', function(event){
    	console.log(1)
    })

    //悬浮框
	
    function doTipBox() {
    	var listSeven = $('.smm_map_content_listUl .list_seventh_next');
    	var listEight = $('.smm_map_content_listUl .list_eighth_next');
    	listSeven.each(function(){
		    $(this).on({
		        'mouseover': function(){
		            tipBox($(this));
		            $(this).find('.tipBox').stop().show();
		            $('.tipBox').on('mouseover',function(event){
		                event.stopPropagation();
		            })
		        },
		        'mouseout': function(){
		            $(this).find('.tipBox').stop().css({'display':'none'},function(){
		                $(this).remove();
		            });
		        }
		    })
		})
    	listEight.each(function(){
		    $(this).on({
		        'mouseover': function(){
		            tipBox($(this));
		            $(this).find('.tipBox').stop().show();
		            $('.tipBox').on('mouseover',function(event){
		                event.stopPropagation();
		            })
		        },
		        'mouseout': function(){
		            $(this).find('.tipBox').stop().css({'display':'none'},function(){
		                $(this).remove();
		            });
		        }
		    })
		})
    }
    //悬浮框
    function tipBox(dom){
        var div = document.createElement('div');
	    var em = document.createElement('em');
	    var span = document.createElement('span');
	    div.className = 'tipBox';
	    $(div).text(dom.children('.listItems_subwrap').find('div').text());
	    em.innerHTML = '&#9670;';
	    span.innerHTML = '&#9670;';
	    $(em).appendTo(div);
	    $(span).appendTo(div);
	    $(div).appendTo(dom);	
    }
    	});
		
    });


