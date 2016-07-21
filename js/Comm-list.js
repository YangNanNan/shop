	function related(){
		var x_Reli=document.getElementById("x_Relatedplist").getElementsByTagName("li");
		var x_Reli2=document.getElementById("x_Relatedplist2").getElementsByTagName("li");
		x_Reli[0].style.border="none";
		x_Reli2[0].style.border="none";
	}
	
	
	//品牌选择
	function brand(){
		var s_lists=document.getElementById("s_lists");
		var spans=s_lists.getElementsByTagName("span");
		var ems=s_lists.getElementsByTagName("em");
		for(var i=0; i<spans.length; i++){
			spans[i].index=i;
			spans[i].onclick=function(){		
				var now=this.index;
				var state=ems[now].className;
				if(state=="dowp"){
					ems[now].className="";
				}
				else{
					ems[now].className="dowp";
				}
			}
		}
	}
	

	//展开收起
	function Pack(){
		var z_btn=document.getElementById("z_btn");
		var x_brScreening=document.getElementById("x_brScreening");
		var a=0;
		z_btn.onclick=function(){			
			if(a%2==1){
				x_brScreening.style.height="95px";
				this.style.background="url(images/an.jpg)";
			}else{
				x_brScreening.style.height="auto";	
				this.style.background="url(images/pack_up.jpg)";	
			}
			a++;
		}
	}
	
	//排序
	function sorting(){
		var sorting=document.getElementById("sorting").getElementsByTagName("a");
		for(var j=0; j<sorting.length; j++){
			sorting[j].index=j;
			sorting[j].onclick=function(){
				for(var k=0; k<sorting.length; k++){
					sorting[k].className="";
				}
				sorting[this.index].className="abrg";
			}
		}
	}
	
	//筛选
	function screening(){
		var screening=document.getElementById("screening");
		var p1=screening.getElementsByTagName("p");
		var sem=screening.getElementsByTagName("em");
		var s1=screening.getElementsByTagName("s");
		
			for(var i=0;i<sem.length;i++){
				p1[i].index=i;
				p1[i].onclick = function(){
					var now=this.index;
					var state=sem[now].className;
					if(state=="emdowp"){
						sem[now].className="";
					}
					else{
						sem[now].className="emdowp";
					}
				}
			}
			for(var m=sem.length;m<p1.length;m++){
				p1[m].index=m;
				p1[m].onclick = function(){
					var now=this.index;
					for(var j=0;j<s1.length;j++){
						s1[j].className="";
					}
					s1[now-sem.length].className="sdowp";
				}
			}
	}
	
		


	//数量加减
	function lift(){
		var x_show=document.getElementById("x_show");
		var x_icon=x_show.getElementsByTagName("s");
		var inp1=x_show.getElementsByTagName("input");
		for(var h=0; h<x_icon.length; h++){
			x_icon[h].index=h;
			x_icon[h].onclick=function(){
				var dex=parseInt(this.index/2);
				var num;
				if(this.index%2==0){
					num=Number(inp1[dex].value)		
					num++;
					inp1[dex].value=String(num);
					if(num > 1){
						x_icon[this.index+1].className="x_s3";
					}
				}else{			
					num=Number(inp1[dex].value)
					if(num > 1){
						num--;
						inp1[dex].value=String(num);
					}
					if(num == 1){
						inp1[dex].value="1";
						this.className="x_s2";
					}
				}
			}
		}
	}
	

	// 加入购物车的弹框
	function shopcart(){
		var x_body=document.getElementById("x_body");
		var x_box = document.getElementById("x_box");
		var sem1 = x_show.getElementsByTagName("em");
		var sem2 = x_box.getElementsByTagName("em");
		var sa1 = x_box.getElementsByTagName("a");
		for(var i=0; i<sem1.length;i++){
			sem1[i].index=i;
				sem1[i].onclick =function(){
					function move(){  //小窗口的位置
						var top1=document.documentElement.clientHeight/2-x_box.clientHeight/2;
						var left1=document.body.offsetWidth/2-x_box.clientWidth/2;
						x_body.style.height=window.screen.availHeight+"px";
						x_box.style.left=left1+"px";
						x_box.style.top=top1+"px";
					}
					window.onresize=function(){   //浏览器窗口发生变化是小窗口的位置依然在中间
						move();
					}
					move();
				if(this.index%2 == 0){
					x_body.style.visibility="visible";
				}
			}
		}
		sem2[0].onclick = function(){
			x_body.style.visibility="hidden";
		}
		sa1[0].onclick = function(){
			x_body.style.visibility="hidden";
		}
	}
	function y_common2(){
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
		//导航
		function l_nav(ele){
			var l_nav=document.getElementById(ele);
			var y_nav=document.getElementById("left_nav")
			var y_lis=document.getElementById(ele).getElementsByTagName("li");
			var y_divs=document.getElementById(ele).getElementsByTagName("div");
			y_nav.onmouseover=function(){
				l_nav.style.display="block";
			}
			y_nav.onmouseout=function(){
				for(var j=0; j<y_lis.length; j++){
					y_lis[j].className="";
					y_divs[j].className="";
				}
			}
			for(var h=0; h<y_lis.length; h++){
				y_lis[h].index=h;
				y_lis[h].onmouseover=function(){
					for(var j=0; j<y_lis.length; j++){
						y_lis[j].className="";
						y_divs[j].className="";
					}
					y_divs[this.index].className="show";
					y_lis[this.index].className="cur";
				}
			}
		}
	l_nav("l_nav2");
	}
	function all(){
		var all=document.getElementById("all");
		var t_lists=document.getElementById("t_lists").getElementsByTagName("dl")[1];
		var i=0;
		all.onclick=function(){
			if(i%2==0){
				t_lists.style.height="auto";
				i+=1;
			}else{
				t_lists.style.height="23px";
				i+=1;
			}
		}
	}
/*商户首页*/
	function banner2(ele1,obj1,btn){
		var dVisual=document.getElementById(obj1);
		var dBtn=document.getElementById(ele1).getElementsByTagName("p");
		var t1=null;
		var t2=null;
		var num=0;
		function moveTo(start,end){
			clearInterval(t1);
			var step=0;
			var everyStep = (end-start)/150;
			t1=setInterval(move,10);
			function move(){
				start+=everyStep;
				step++;
				if(step==150){
					clearInterval(t1);
				}
				dVisual.scrollLeft=start;	
			}
		}
		function sportMove(){
			clearInterval(t2);
			t2=setInterval(function(){
				num==2?num=0:num++;
				moveTo(dVisual.scrollLeft,num*750);
			},4000)
		}
		sportMove();

		dBtn[0].onclick=function(){
			clearInterval(t2);
			num==0?num=2:num--;
			moveTo(dVisual.scrollLeft,num*750);
			sportMove();
		}
		dBtn[1].onclick=function(){
			clearInterval(t2);
			num==2?num=0:num++;
			moveTo(dVisual.scrollLeft,num*750);
			sportMove();
		}

	}