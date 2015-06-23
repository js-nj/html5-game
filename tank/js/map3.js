
//以画布的左上角为原点（0,0），横向为x轴，纵向为y轴
//basehamX , basehamY  home左侧墙的左下角坐标
//var hamperLength=17,hamperHeight=10;
var home_right = new HamperBlock(basehamX,basehamY,1,1,7,0);
home_right.SetBlock();
var home_top = new HamperBlock(basehamX+hamBlockLen*1,basehamY-hamBlockHei*5,1,3,2,7);
home_top.SetBlock();
var home_left = new HamperBlock(basehamX+hamBlockLen*4,basehamY,1,1,7,13);
home_left.SetBlock();

var block_1 = new HamperBlock(576,320,2,2,2,160);   //右侧冰墙
block_1.SetBlock();
var block_2 = new HamperBlock(1,320,2,29,2,164);     //左侧冰墙
block_2.SetBlock();
var block_3 = new HamperBlock(382,100,1,10,5,50);    //右上侧砖墙
block_3.SetBlock();
var block_4 = new HamperBlock(30,61,1,10,2,20);     //左上侧砖墙
block_4.SetBlock();
var block_5 = new HamperBlock(212,186,1,10,2,40);   //正中间砖墙
block_5.SetBlock();
var block_6 = new HamperBlock(90,496,1,2,15,100);    //左下侧砖墙
block_6.SetBlock();
var block_7 = new HamperBlock(342,297,1,15,2,130);  //右侧中间砖墙
block_7.SetBlock();

function HamperBlock(a,b,c,d,e,f){
    this.start_x = a;
    this.start_y = b;
    this.hamperStyle = c;
    this.length_x = d;
    this.length_y = e;
    this.hamperNum = f;
    this.SetBlock = function(){
        for (var ham_x = 0; ham_x < this.length_x; ham_x++) {
            for (var ham_y = 0; ham_y < this.length_y; ham_y++) {
                hampers[this.hamperNum] = new Hamper(this.start_x,this.start_y,this.hamperStyle);
                this.start_y -=(hamperHeight+1);
                this.hamperNum++;
            }
            this.start_y = b;
            this.start_x +=(hamperLength+1);
        }
    }
}
function Hamper(a, b, c) {  //设置障碍样式函数
    this.x = a;
    this.y = b;
    this.style = c;
    this.Draw = function() {
        switch (this.style) {
        case 1:
            cxt.drawImage(brike,this.x, this.y, hamperLength, hamperHeight);
            break;
        case 2:
            cxt.drawImage(ice,this.x, this.y, hamperLength, hamperHeight);
            break;
        case 3:
            break;
        case 4:
            break;
        }
    }
}
