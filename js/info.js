//放大镜
	var imgArr=["y_m1.jpg","y_m21.jpg","y_m31.jpg"];
	var bimgArr=["y_b1.jpg","y_b21.jpg","y_b31.jpg"];
	var mimgArr=["y_m1.jpg","y_m2.jpg","y_m3.jpg","y_m4.jpg","y_m21.jpg","y_m22.jpg","y_m23.jpg",]
	var b2imgArr=["y_b1.jpg","y_b2.jpg","y_b3.jpg","y_b4.jpg","y_b21.jpg","y_b22.jpg","y_b23.jpg"]
	var select=document.getElementById("select").getElementsByTagName("a");
	var jqzoom=document.getElementById("jqzoom")
	var y_preview=document.getElementById("y_preview")
	var middle=document.getElementById("middle");
	var big=document.getElementById("big");
	var wrap=document.getElementById("wrap");
	var filter=document.getElementById("filter");
	var inner=document.getElementById("inner").getElementsByTagName("img");
	var inn=document.getElementById("inner");
	var ln=inner.length;
	var sWidth=ln*(inner[0].offsetWidth+10);
	inn.style.width=sWidth+"px";
	for(var i=0; i<select.length; i++){
		select[i].index=i;
		select[i].onclick=function(){
			for(var i=0; i<select.length; i++){
				select[i].className="";
			}
			select[this.index].className="cur";
			middle.src="images/"+imgArr[this.index];
			big.src="images/"+bimgArr[this.index];
		}
	}
	for(var i=0; i<inner.length; i++){
		inner[i].index=i;
		inner[i].onmouseover=function(){
			for(var i=0; i<inner.length; i++){
				inner[i].className="";
			}
			inner[this.index].className="cur";
			middle.src="images/"+mimgArr[this.index];
			big.src="images/"+b2imgArr[this.index];
		}
	}
	jqzoom.onmouseover=function(){
		filter.style.display="block";
	}
	jqzoom.onmousemove=function(e){
		var scrollTop2 =document.documentElement.scrollTop || document.body.scrollTop;  
		var e=e || window.event;
		var left1=e.clientX-y_preview.offsetLeft-filter.offsetWidth/2;
		var top1=e.clientY-y_preview.offsetTop+scrollTop2-filter.offsetHeight/2;
		filter.style.left=left1+"px";
		filter.style.top=top1+"px";
		if(filter.offsetLeft<=0){
			filter.style.left=0;
		}
		if(filter.offsetLeft>=jqzoom.offsetWidth-filter.offsetWidth){
			filter.style.left=jqzoom.offsetWidth-filter.offsetWidth+"px";
		}			
		if(filter.offsetTop<=0){
			filter.style.top=0;
		}
		if(filter.offsetTop>=jqzoom.offsetHeight-filter.offsetHeight){
			filter.style.top=jqzoom.offsetHeight-filter.offsetHeight+"px";
		}

		wrap.style.display="block";
		var num=big.offsetWidth/middle.offsetWidth;
		wrap.scrollLeft=filter.offsetLeft*num;
		wrap.scrollTop=filter.offsetTop*num;
	}
	jqzoom.onmouseout=function(){
		wrap.style.display="none";
		filter.style.display="none";
	}
	var outer=document.getElementById("outer");
	var prev=document.getElementById("prev");
	var next=document.getElementById("next");
	var maxWidth=document.getElementById("inner").offsetWidth;
	var max2Width=document.getElementById("outer").offsetWidth;
	if(ln<5){
		prev.className="prevdis";
		next.className="nextdis";
	}else{
		// prev.className="prev";
		next.className="next";
	}
	next.onclick=function(){
		prev.className="prev";
		outer.scrollLeft+=74;
		if(outer.scrollLeft>=maxWidth-max2Width){
			this.className="nextdis";
		}
	}
	prev.onclick=function(){
		next.className="next";
		outer.scrollLeft-=74;
		if(outer.scrollLeft<=0){
			this.className="prevdis";
		}
	}
	//放入购物车数量
	var num_sel=document.getElementById("num_sel");
	var ems=num_sel.getElementsByTagName("em");
	var inp1=num_sel.getElementsByTagName("input");
	var num;
	for(var h=0; h<ems.length; h++){
		ems[h].index=h;
		ems[h].onclick=function(){
			if(this.index==0){
				num=Number(inp1[0].value);
				num++;
				inp1[0].value=String(num);
			}else{
				num=Number(inp1[0].value)
				if(num > 1){
					num--;
					inp1[0].value=String(num);
				}
				if(num == 1){
					inp1[0].value="1";
				}
			}
		}
	}