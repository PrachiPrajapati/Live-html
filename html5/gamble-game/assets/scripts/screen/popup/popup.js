var betText;
var lovelyText;
var betText;
var betvalue= 14;
var winTextTitle;
var winTextdata;
var pinkcards;
var bluecards

class PopupScene extends Phaser.Scene
{
    constructor()
    {
        super({key:'PopupScene'});
    }

    preload(){
    
        this.load.image('bg', 'assets/img/bg.jpg');
        this.load.image('title', 'assets/img/title.png');
        this.load.image('greencard', 'assets/img/green_card.png');
        this.load.image('pinkcard', 'assets/img/pink_card.png');
        this.load.image('bluecard', 'assets/img/blue_card.png');
        this.load.image('greenbtn', 'assets/img/green_button.png');
        this.load.image('pinkbtn', 'assets/img/pink_button.png');
        this.load.image('minusbg', 'assets/img/minus.png');
        this.load.image('plusbg', 'assets/img/plus.png');
        this.load.image('introtext', 'assets/img/intro-text.png');
        this.load.image('cards', 'assets/img/green-sprite-img.png');
         
    }
    
    create(){

        var bgimage= this.add.image(800, 400, 'bg');
        this.add.image(800, 110, 'title');
        // this.add.image(530, 260, 'greencard');
        // this.add.image(710, 260, 'pinkcard');
        // this.add.image(890, 260, 'greencard');
        // this.add.image(1070, 260, 'pinkcard');
        // pinkcards = this.add.image(800, 550, 'pinkcard');
        // pinkcards.scaleX = 0;
        // bluecards = this.add.image(800, 550, 'bluecard');
        // this.add.image(800, 410, 'introtext');


        // betText = this.add.text(400, 450, 'Place Your Bet', { fontSize: '22px', fill: '#fff', fontFamily: 'Times, serif'});
        // lovelyText = this.add.text(425, 550, 'LOVELY', { fontSize: '18px', fill: '#fff', fontFamily: 'Times, serif'});

        // betText = this.add.text(410, 490, betvalue, { fontSize: '24px', fill: '#fff', backgroundColor: '#0060ef', fontFamily: 'Times, serif'}).setPadding(40, 10);

        // winTextTitle = this.add.text(950, 500, 'WIN',{fontSize: '24px',backgroundColor: '#0c54a0',fill: '#fff'}).setPadding(15,30,200,30);
        // winTextTitle = this.add.text(1025, 510, '28 LOVELY',{fontSize: '22px',backgroundColor: '#091f34',fill: '#fff'}).setPadding(20,20,30,20);

        // this.add.text(100, 110, 'Phaser', style).setPadding(64, 16);
  
    }

    
}