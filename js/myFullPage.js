
function fullPage(option) {
	this._init(option);
}

fullPage.prototype ={
	//进行初始化
	//初始化DOM结构、布局、分页以及绑定事件
	_init :function(option){
		
	},
	//获取页面的总数量
	pagesCount : function(){},
	//获取每次滑动的高度（竖屏）、或者宽度（横屏）
	switchLength :function(){},
	//针对横屏情况进行页面布局
	_initLayout : function(){},
	//实现分页按钮的DOM结构以及CSS布局
	_initPageBar : function(){},
	//初始化插件事件
	_initEvent : function(){}
};