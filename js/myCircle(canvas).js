/**
 * Created by zu166 on 2017/6/21.
 */
function myCircle(option){
    this._init(option);
}

myCircle.prototype = {
    _init: function(option){
        this.x = option.x || 0; //x�����
        this.y = option.y || 0;  //y�����
        this.innerRadius = option.innerRadius || 0;  //��Բ�뾶
        this.outerRadius = option.outerRadius || 0;   //��Բ�뾶
        this.innerFill = option.innerFill || '#1596f5';  //��Բ���ɫ
        this.outerFill = option.outerFill || '#e7f4fd';   //��Բ���ɫ
        this.innerOpacity = option.innerOpacity || 1;       //��Բ͸����
        this.outerOpacity = option.outerOpacity || .8;      //��Բ͸����
        this.text = option.text || 'huazi';             //Բ������
        this.text_size = option.text_size || 17;        //Բ�����ִ�С
        this.text_color = option.text_color || '#ccc';  //Բ��������ɫ

        //��������Ҫ��һ����
       this.group = new Konva.Group({
           x: this.x,
           y: this.y
       });

        //������Բ
        var innerCircle = new Konva.Circle({
            x: 0,
            y: 0,
            fill: this.innerFill,
            radius: this.innerRadius,
            opacity: this.innerOpacity
        });
        this.group.add(innerCircle);

        //�����ⲿԲ��
        var outRing = new Konva.Ring({
            x: 0,
            y: 0,
            innerRadius: this.innerRadius,
            outerRadius: this.outerRadius,
            fill: this.outerFill,
            opacity: this.outerOpacity
        });
        this.group.add(outRing);

        //���Բ������
        var text = new Konva.Text({
            x: -this.outerRadius,
            y: -this.text_size/2,
            width: this.outerRadius * 2,
            text: this.text,
            fontSize: this.text_size,
            align: 'center',
            fontStyle: 'bold',
            fill: this.text_color
        });
        this.group.add(text);
    },
    addToLayer: function(layer){
        layer.add(this.group);
    }
};