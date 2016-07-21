function address(){
	//管理地址
	var y_add=document.getElementById("y_add");
	var add_area=document.getElementById("add_area");
	var close=document.getElementById("close");
	var address=document.getElementById("address");
	var num=address.getElementsByTagName("em");
	var delete2=address.getElementsByTagName("button");	
	y_add.onclick=function(){
		add_area.style.display="block";
	}
	close.onclick=function(){
		add_area.style.display="none";
	}
	for(var i=0; i<delete2.length; i++){
		delete2[i].onclick=function(){
			address.removeChild(this.parentNode.parentNode);
			for(var i=0; i<delete2.length; i++){
				num[i].innerText=i+1;
			}
		}
	}
}
//浏览历史
function y_history(){
	var history2=document.getElementById("history");
	var h_clear=document.getElementById("h_clear");
	var h_lists=document.getElementById("h_lists");
	var no_list=document.getElementById("no-list");
	var flip=document.getElementById("flip");
	var h_btn=history2.getElementsByTagName("button");
	var dls=history2.getElementsByTagName("dl");
	dls[dls.length-1].style.border=0;
	for(var i=0; i<h_btn.length; i++){
		h_btn[i].onclick=function(){
			h_lists.removeChild(this.parentNode.parentNode);
			if(h_btn.length==0){
				no_list.style.display="block";
				flip.style.display="none";
			}
		}
	}
	h_clear.onclick=function(){
		h_lists.innerHTML="";
		no_list.style.display="block";
		flip.style.display="none";
	}
}
//个人信息
function y_info(){
	var tab=document.getElementById("tab").getElementsByTagName("a");
	var tab_cn=document.getElementById("tab_cn").getElementsByTagName("form");
	for(var i=0; i<tab.length; i++){
		tab[i].index=i;
		tab[i].onclick=function(){
			for(var j=0; j<tab.length; j++){
				tab[j].className="";
				tab_cn[j].className="";	
			}
			tab[this.index].className="on";
			tab_cn[this.index].className="show";
		}
	}
}
//我的收藏
function y_save(){
	var save=document.getElementById("save");
	var h_lists=document.getElementById("h_lists");
	var flip=document.getElementById("flip");
	var search=document.getElementById("search").getElementsByTagName("strong");
	var title=save.getElementsByTagName("h2")[0];
	var h_btn=save.getElementsByTagName("button");
	var dls=save.getElementsByTagName("dl");
	dls[dls.length-1].style.border=0;
	for(var i=0; i<h_btn.length; i++){
		h_btn[i].onclick=function(){
			h_lists.removeChild(this.parentNode.parentNode);
			var num=h_btn.length;
				search[0].innerHTML=num;
			if(h_btn.length==0){
				flip.style.display="none";
				title.style.display="none";
			}
		}
	}
}

function car(){
	//购物车
	var y_car=document.getElementById("y_car");
	var c_lists=document.getElementById("c_lists");
	y_car.onmouseover=function(){
		c_lists.style.display="block";
	}
	y_car.onmouseout=function(){
		c_lists.style.display="none";
	}
}
//所有头部相同的js 
function y_common(){
	car();
//头部广告隐藏
	var y_close=document.getElementById("y_close");
	y_close.onclick=function(){
		this.parentNode.style.display="none";
	}
	//导航
	var l_nav=document.getElementById("l_nav");
	var y_nav=document.getElementById("left_nav")
	var y_lis=document.getElementById("l_nav").getElementsByTagName("li");
	var y_divs=document.getElementById("l_nav").getElementsByTagName("div");
	y_nav.onmouseover=function(){
		l_nav.style.display="block";
	}
	y_nav.onmouseout=function(){
		l_nav.style.display="none";
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
//tab切换	
	function tab(tab,cn){
		var y_name=document.getElementById(tab).getElementsByTagName("li");
		var y_group=document.getElementById(cn).children;
		for(var i=0; i<y_name.length; i++){
			y_name[i].index=i;
			y_name[i].onclick=function(){
				for(var j=0; j<y_name.length; j++){
					y_name[j].className="";
					y_group[j].className="class_list";
					}
				y_name[this.index].className="cur";
				y_group[this.index].className="show";
			}		
		}
	}
//购买组合
	function buy(ele,price){
		var price=document.getElementById(price);
		var y_dls=document.getElementById(ele).getElementsByTagName("dl");
		var y_inputs=document.getElementById(ele).getElementsByTagName("input");
		var bs=document.getElementById(ele).getElementsByTagName("b");
		for(var i=0; i<y_inputs.length; i++){
			y_inputs[i].index=i;		
			for(var j=0; j<y_inputs.length;j++){
				y_inputs[j].onclick=function(){
					var next=Number(bs[this.index].innerText);
					var num=Number(price.innerText);
					  if(this.checked==true){
				       	num+=next;
				       	price.innerText=num;
				      }else{
				      	num-=next;
				      	price.innerText=num;
				      }
				}
			}		
		}
	}
//王晓丽
// 编辑头像
function eidt_img(){
	var x_bodybg=document.getElementById("x_bodybg");
	var edit_ava = document.getElementById("edit_ava");
	var set_img = document.getElementById("set_img");
	var x_cloes = document.getElementById("x_cloes");
	function move(){
		var top1=document.documentElement.clientHeight/2-edit_ava.clientHeight/2;
		var left1=document.body.offsetWidth/2-edit_ava.clientWidth/2;
		x_bodybg.style.height=window.screen.availHeight+"px";
		edit_ava.style.left=left1+"px";
		edit_ava.style.top=top1+"px";
	}
	window.onresize = function(){
		move();
	}
	move();
	set_img.onclick = function(){
		x_bodybg.style.visibility="visible";
	}
	x_cloes.onclick = function(){
		x_bodybg.style.visibility="hidden";
	}
}
// TAB切换
function tabswitch( x_tab,x_li,x_div,x_liclass,x_divclass){
	var x_lis="";
	var x_box="";
	x_lis= document.getElementById(x_tab).getElementsByTagName(x_li);
	x_box = document.getElementById(x_tab).getElementsByTagName(x_div);
	for(var i=0; i<x_lis.length; i++){
		x_lis[i].index = i;
		x_lis[i].onclick = function(){
			for(var j=0;j<x_lis.length; j++){
				x_lis[j].className="";
				x_box[j].className="";
			}
			this.className=x_liclass;
			x_box[this.index].className=x_divclass;
		}
	}
}

//优惠券的使用（表格的奇偶行背景）
function color(id){
	var table1=document.getElementById(id).getElementsByTagName("table");
	for(var j=0;j<table1[0].tBodies[0].rows.length;j++){
		if(j%2 == 0){
			table1[0].tBodies[0].rows[j].style.background="#fff";
		}
	}
}

	

	
