//首页导航----------------------------------------------------------------------------------------
	function l_nav(ele){
			var l_nav=document.getElementById(ele);
			var y_nav=document.getElementById("left_nav");
			var y_lis=document.getElementById(ele).getElementsByTagName("li");
			var y_divs=document.getElementById(ele).getElementsByTagName("div");
			var back=document.getElementById("w_back");
			var right=document.getElementById("right");
			var arr=["back1.png","back2.png","back3.png","back4.png","back5.png","back6.png","back7.png","back8.png","back9.png","back10.png","back11.png","back12.png","back13.png","back14.png"];
			var arr2=["con_righttu1.png","con_righttu2.png","con_righttu3.png","con_righttu4.png","con_righttu5.png","con_righttu6.png","con_righttu7.png","con_righttu8.png","con_righttu9.png","con_righttu10.png","con_righttu11.png","con_righttu12.png","con_righttu13.png","con_righttu14.png"];
			y_nav.onmouseover=function(){
				l_nav.style.display="block";
			};
			y_nav.onmouseout=function(){
				for(var j=0; j<y_lis.length; j++){
					y_lis[j].className="";
					y_divs[j].className="";
				}
			};
			for(var h=0; h<y_lis.length; h++){
				y_lis[h].index=h;
				y_lis[h].onmouseover=function(){
					for(var j=0; j<y_lis.length; j++){
						y_lis[j].className="";
						y_divs[j].className="";
					}
					y_divs[this.index].className="show";
					y_lis[this.index].className="cur";
					back.style.background="url(images/"+arr[this.index]+")";
					right.src="images/"+arr2[this.index];
				}
			}
		}
	l_nav("l_nav2");


//商品轮播-------------------------------------------------------------------------------------------
//****1***********
	function banner1(ele1,obj1,btn,class_name){
		var dVisual=document.getElementById(ele1);	
		var dBtn=document.getElementById(btn).getElementsByTagName("p");
		var	dLi = document.getElementById(obj1).getElementsByTagName("li");
		var t1=null;
		var t2=null;
		var num=0;
		function moveTo(start,end){
			clearInterval(t1);
			var step=0;
			var everyStep = (end-start)/100;
			t1=setInterval(move,10);
			function move(){
				start+=everyStep;
				step++;
				if(step==100){
					clearInterval(t1);
				}
				dVisual.scrollLeft=start;			
			}
		}
		// moveTo();

		function sportMove(){
			clearInterval(t2);
			t2=setInterval(function(){
				num==4?num=0:num++;
				moveTo(dVisual.scrollLeft,num*872);
				colorMove();
			},4000)
		}
		sportMove();

		dBtn[0].onclick=function(){
			clearInterval(t2);
			num==0?num=4:num--;
			moveTo(dVisual.scrollLeft,num*872);
			sportMove();
			colorMove();
		};
		dBtn[1].onclick=function(){
			clearInterval(t2);
			num==4?num=0:num++;
			moveTo(dVisual.scrollLeft,num*872);
			sportMove();
			colorMove();
		};


		for(var i = 0; i< dLi.length; i++){
			dLi[i].onclick=function(){
				for (var j = 0; j<dLi.length; j++) {
					if(this==dLi[j]){
						clearInterval(t2);
						num=j;
						moveTo(dVisual.scrollLeft,num*872);
						sportMove();
						colorMove();
					}
				}
			}
		}
		function colorMove(){
			for (var i = 0 ; i <dLi.length; i++) {
				dLi[i].className="";

			}
			dLi[num].className=class_name;
	}

	}
	banner1("w_con_down_1_visual","w_con_down_1_ul","w_con_down_1","select1");
	banner1("w_con_down_2_visual","w_con_down_2_ul","w_con_down_2","select2");
//切换------------------------------------------------------------------------------------
	var downLi=document.getElementById('w_con_down_3_inul').getElementsByTagName('li');
	var downDiv=document.getElementById('w_con_down_3_in').getElementsByTagName('div');
	for (var i = 0 ; i<downLi.length; i++){
		downLi[i].index=i;
		downLi[i].onclick=function(){
			for (var j = 0; j <downLi.length ; j++) {
				downLi[j].className="";
				downDiv[j].style.display="none";

			};
			this.className="cur";
			downDiv[this.index].style.display="block";

		}
	};

//返回顶部--------------------------------------------------------------------------------
	var Arrow = document.getElementById('w_arrow');
	var Abnt = document.getElementById('w_arrow').getElementsByTagName('a');
	var time1=null;
	window.onscroll=function(){
		var Top1=document.documentElement.scrollTop||document.body.scrollTop;
		if(Top1==0){
		 		clearInterval(time1)
		 	}
		if(Top1>=300){
			Arrow.style.display="block";
		}else{
			Arrow.style.display="none";
		}
	}
	Abnt[1].onclick=function(){
		clearInterval(time1)
		time1=setInterval(move,10);
		function move(){
			document.body.scrollTop-=10;
			document.documentElement.scrollTop-=10;
		}
	}
	//头部广告隐藏
	var y_close=document.getElementById("y_close");
	y_close.onclick=function(){
		this.parentNode.style.display="none";
	}
	//购物车
	var y_car=document.getElementById("y_car");
	var c_lists=document.getElementById("c_lists");
	y_car.onmouseover=function(){
		c_lists.style.display="block";
	}
	y_car.onmouseout=function(){
		c_lists.style.display="none";
	}
	//头部广告隐藏
	var y_close=document.getElementById("y_close");
	y_close.onclick=function(){
		this.parentNode.style.display="none";
	}