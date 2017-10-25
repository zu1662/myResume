$(document).ready(function(){


//绘制技能圆环
 	 //创建舞台
        var stage = new Konva.Stage({
            container: 'skillCircle',
            width: $('#section2 .container').innerWidth()/2,
            height: $('#section2 .container').innerHeight()/3*2
        });

        //中心点的坐标
        var cenX = stage.width()/2;
        var cenY = stage.height()/2;

         var bgLayer = new Konva.Layer();
        var animateLayer = new Konva.Layer({
            x: cenX,
            y: cenY
        });
        stage.add(bgLayer);
        stage.add(animateLayer);

        //创建背景 的内环虚线
        var innerCircle = new Konva.Circle({
            x: cenX,
            y: cenY,
            radius: cenX/100*30,
            dash: [10,4],
            stroke: '#ccc'
        });
        bgLayer.add(innerCircle);
        //创建背景 的外环虚线
        var outerCircle = new Konva.Circle({
            x: cenX,
            y: cenY,
            radius: cenX/100*60,
            dash: [10,4],
            stroke: '#ccc'
        });
        bgLayer.add(outerCircle);

        //创建内部固定圆
        var cenCircle = new myCircle({
            x: cenX,
            y: cenY,
            innerRadius: cenX/100*13,
            outerRadius: cenX/100*14,
            text: 'web全栈',
            text_size: 15,
            text_color: '#fff'
        });
        cenCircle.addToLayer(bgLayer);


        var group1 = new Konva.Group();
        //创建二环圆1
        var x2_1 = cenX/100*30 * Math.cos(240 * Math.PI / 180);
        var y2_1 = cenX/100*30 * Math.sin(240 * Math.PI / 180);
        var l2Circle1 = new myCircle({
            x: x2_1,
            y: y2_1,
            innerRadius: cenX/100*11,
            outerRadius: cenX/100*12,
            text: 'MongoDB',
            text_size: 10,
            text_color: '#fff',
            innerFill: '#01AAED',
            outerFill: '#E1E1E1'
        });
        l2Circle1.addToLayer(group1);

        //创建二环圆2
        var x2_2 = cenX/100*30 * Math.cos(120 * Math.PI / 180);
        var y2_2 = cenX/100*30 * Math.sin(120 * Math.PI / 180);
        var l2Circle2 = new myCircle({
            x: x2_2,
            y: y2_2,
            innerRadius: cenX/100*11,
            outerRadius: cenX/100*12,
            text: 'Node.js',
            text_size: 8,
            text_color: '#fff',
            innerFill: '#2F4056',
            outerFill: '#E1E1E1'
        });
        l2Circle2.addToLayer(group1);
       

         //创建二环圆3
        var x2_3 = cenX/100*30 * Math.cos(0 * Math.PI / 180);
        var y2_3 = cenX/100*30 * Math.sin(0 * Math.PI / 180);
        var l2Circle3 = new myCircle({
            x: x2_3,
            y: y2_3,
            innerRadius: cenX/100*11,
            outerRadius: cenX/100*12,
            text: 'Express',
            text_size: 8,
            text_color: '#fff',
            innerFill: '#009688',
            outerFill: '#E1E1E1'
        });
        l2Circle3.addToLayer(group1);
        animateLayer.add(group1);



        var group2 = new Konva.Group();
        //创建三环圆1
        var x3_1 = cenX/100*60 * Math.cos(0 * Math.PI / 180);
        var y3_1 = cenX/100*60 * Math.sin(0 * Math.PI / 180);
        var l3Circle1 = new myCircle({
            x: x3_1,
            y: y3_1,
            innerRadius: cenX/100*12,
            outerRadius: cenX/100*13,
            text: 'HTML(5)',
            text_size:12,
            text_color: '#fff',
            innerFill: '#91BFF8',
            outerFill: '#E1E1E1'
        });
        l3Circle1.addToLayer(group2);
        animateLayer.add(group2);

   //创建三环圆2
        var x3_2 = cenX/100*60 * Math.cos(60 * Math.PI / 180);
        var y3_2 = cenX/100*60 * Math.sin(60 * Math.PI / 180);
        var l3Circle2 = new myCircle({
            x: x3_2,
            y: y3_2,
            innerRadius: cenX/100*12,
            outerRadius: cenX/100*13,
            text: 'CSS(3)',
            text_size:12,
            text_color: '#fff',
            innerFill: '#1E9FFF',
            outerFill: '#E1E1E1'
        });
        l3Circle2.addToLayer(group2);


        //创建三环圆3
        var x3_3 = cenX/100*60 * Math.cos(120 * Math.PI / 180);
        var y3_3 = cenX/100*60 * Math.sin(120 * Math.PI / 180);
        var l3Circle3 = new myCircle({
            x: x3_3,
            y: y3_3,
            innerRadius: cenX/100*12,
            outerRadius: cenX/100*13,
            text: 'Bootstrap',
            text_size:12,
            text_color: '#fff',
            innerFill: '#336666',
            outerFill: '#E1E1E1'
        });
        l3Circle3.addToLayer(group2);
        
   //创建三环圆4
        var x3_4 = cenX/100*60 * Math.cos(180 * Math.PI / 180);
        var y3_4 = cenX/100*60 * Math.sin(180 * Math.PI / 180);
        var l3Circle4 = new myCircle({
            x: x3_4,
            y: y3_4,
            innerRadius: cenX/100*12,
            outerRadius: cenX/100*13,
            text: 'Konva',
            text_size:12,
            text_color: '#fff',
            innerFill: '#999966',
            outerFill: '#E1E1E1'
        });
        l3Circle4.addToLayer(group2);


   //创建三环圆5
        var x3_5 = cenX/100*60 * Math.cos(240 * Math.PI / 180);
        var y3_5 = cenX/100*60 * Math.sin(240 * Math.PI / 180);
        var l3Circle5 = new myCircle({
            x: x3_5,
            y: y3_5,
            innerRadius: cenX/100*12,
            outerRadius: cenX/100*13,
            text: 'js/jQuery',
            text_size:12,
            text_color: '#fff',
            innerFill: '#cccc33',
            outerFill: '#E1E1E1'
        });
        l3Circle5.addToLayer(group2);


   //创建三环圆4
        var x3_6 = cenX/100*60 * Math.cos(300 * Math.PI / 180);
        var y3_6 = cenX/100*60 * Math.sin(300 * Math.PI / 180);
        var l3Circle6 = new myCircle({
            x: x3_6,
            y: y3_6,
            innerRadius: cenX/100*12,
            outerRadius: cenX/100*13,
            text: 'ajax',
            text_size:12,
            text_color: '#fff',
            innerFill: '#cc3333',
            outerFill: '#E1E1E1'
        });
        l3Circle6.addToLayer(group2);
        animateLayer.add(group2);
        


        //创建动画进行渲染
        var angleSpeed = 40;
        var anim = new Konva.Animation(function(frame){
            var angleDiff = angleSpeed * frame.timeDiff / 1000;
            group1.rotate(angleDiff);
            group1.getChildren().each(function(e,i){
                e.rotate(-angleDiff);
            });
            group2.rotate(-angleDiff);
            group2.getChildren().each(function(e,i){
                e.rotate(angleDiff);
            });
        },animateLayer);

        //鼠标进入、出来事件
        animateLayer.on('mouseover',function(){
            angleSpeed = 20;
        });
        animateLayer.on('mouseout',function(){
            angleSpeed = 40;
        });

        anim.start();
        animateLayer.draw();
        stage.draw();
});
