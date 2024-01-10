var backtohomebtn;
var sliderimg;
var slidetitle;
var slidetitledata;
var slidedescdata;
var slidedesc;
var img2;
var img3;
var img4
var selectslidebtn;
var nextslidebtn;
var prevslidebtn;
let sliderimgdata;
var i=0;
var sliderimagelength;

class RegionScene extends Phaser.Scene
{
    constructor()
    {
        super({key:'regionScene'});
    }
    preload(){
        
        this.load.image('reginionbanner',"assets/images/regionbackground.png");
        this.load.image('borderimg',"assets/images/battleframeimg.png");
        this.load.image('napolisimg',"assets/images/napolis-img.png");
        this.load.image('temp1',"assets/images/temp1.jpg");
        this.load.image('temp2',"assets/images/temp2.jpg");
        this.load.image('temp3',"assets/images/temp3.jpg");
        this.load.image('selectbtnimg',"assets/images/select-btn.png");
        this.load.image('slideprevbtn',"assets/images/slideprevbtn.png");
        this.load.image('slidenextbtn',"assets/images/slidenextbtn.png");
        this.load.image('backbtn',"assets/images/back-btn.png");
        this.load.image('nextbtn',"assets/images/next-btn.png");
        
        

         
    }
    create(){
        this.add.image(960,540,'reginionbanner');
        var backBtn = this.add.image(120, 30, 'backbtn')
        .setInteractive({ useHandCursor: true })
        .setScale(1)
        .on('pointerdown', () => { 
            game.scene.stop('regionScene');
            game.scene.start('playScene');
        } );

        var nextBtn = this.add.image(1785, 30, 'nextbtn')
        .setInteractive({ useHandCursor: true })
        .setScale(1)
        .on('pointerdown', () => { 
            game.scene.stop('regionScene');
            game.scene.start('troopScene');
        } );

         sliderimgdata = ['napolisimg', 'temp1', 'temp2', 'temp3'];
         slidetitledata = ['NAPOLIS', 'Test1', 'Test2', 'Test3'];
         slidedescdata = ['Lorem ipsum dolor sit amet, consectetur adipisicing elit, ipsum dolor sit amet,\n consectetur, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, ipsum dolor sit amet,\n consectetur, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, ipsum dolor sit amet,\n consectetur, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, ipsum dolor sit amet, \nconsectetur, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'];

        sliderimagelength = sliderimgdata.length;
        this.add.image(960,540,'borderimg');
        sliderimg = this.add.image(960,540,sliderimgdata[i]);
        selectslidebtn = this.add.image(960,900,'selectbtnimg')
                        .setInteractive({ useHandCursor: true })
                        .setScale(1)
                        .on('pointerdown', () => { 
                            game.scene.stop('regionScene');
                            game.scene.start('troopScene');
                        } );
        nextslidebtn = this.add.image(1180,900,'slidenextbtn')
                        .setInteractive({ useHandCursor: true })
                        .setScale(1)
                        .on('pointerdown', () => { 
                            i += 1;
                            sliderimg.setTexture(sliderimgdata[i]);
                            slidetitle.setText(slidetitledata[i]);
                            slidedesc.setText(slidedescdata[i]);
                            
                            
                        } );

        prevslidebtn = this.add.image(740,900,'slideprevbtn')
                        .setInteractive({ useHandCursor: true })
                        .setScale(1)
                        .on('pointerdown', () => { 
                            i -= 1;
                            sliderimg.setTexture(sliderimgdata[i]);
                            slidetitle.setText(slidetitledata[i]);
                            slidedesc.setText(slidedescdata[i]);

                        } );
        slidetitle = this.add.text(560,650,slidetitledata[0], { fontSize: '38px', fill: '#fff', fontFamily: 'Normandia'});
        slidedesc = this.add.text(560,700,slidedescdata[0], { fontSize: '18px', fill: '#fff', fontFamily: 'GothamMedium'});
        






        
        
    }

    update(){

       if (i == sliderimagelength - 1) {
            nextslidebtn.setAlpha(0.5);
            nextslidebtn.input.enabled = false;
       }
       else if (i == 0) {
            prevslidebtn.setAlpha(0.5);
            prevslidebtn.input.enabled = false;
       }
       else {
            nextslidebtn.setAlpha(1);
            nextslidebtn.input.enabled = true;
            prevslidebtn.setAlpha(1);
            prevslidebtn.input.enabled = true;
       }

    }
    checkslide(){
      
    }
    
    
}