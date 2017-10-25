$(document).ready(function(){

	var nowPage = 0,starTime = 0,endTime = 0,pageNum = 0;
	var pageCounts = $('.section').length;
  	$('.sections ').on('mousewheel DOMMouseScroll',function(e){
  		var delta = e.originalEvent.wheelDelta || -e.originalEvent.detail;
  		//console.log(this);
  		starTime = new Date().getTime();
		if(endTime - starTime < -500){
			scrollPage(delta);
		}
		endTime = new Date().getTime();
  	});



  	function scrollPage(delta,fn){
  		//获取页面的高度
  		var sectionH = $('.section').innerHeight();

  		if(delta < 0  && pageNum < pageCounts-1){ //小于0，说明向下滚动
  			nowPage = nowPage + sectionH;
		  	$('.sections').css({'transform':'translateY(-'+nowPage+'px)'});
		  	pageNum++;

		}else if(delta > 0 && pageNum > 0){//向上滚动
			nowPage = nowPage - sectionH;
			$('.sections').css({'transform':'translateY(-'+nowPage+'px)'});
			pageNum--;
  		}
  		flag = true;
  	}

 
});