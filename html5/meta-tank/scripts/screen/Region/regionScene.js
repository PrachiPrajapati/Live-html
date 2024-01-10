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
var regionCount=0;
var sliderimagelength;
// console.log("RegionScene");
//var APIUrl="http://184.73.111.236:3000/api/v1";
//var authString='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjM5NjEwZjE5ZWI0ZDExODQ0NTIwOTEiLCJpYXQiOjE2NDc5Mjc1Njd9.DxHIVmAqOOiTPjDglhNb-ThPwezRsuePsCY0OrfIUdE'

class RegionScene extends Phaser.Scene
{
    constructor()
    {
        super({key:'regionScene'});
    }
    init(data) {
        this.nEntryFee = data.nEntryFee;
    }
    preload(){
        
       // this.load.image('reginionbanner',"assets/images/regionbackground.png");
       // this.load.image('borderimg',"assets/images/battleframeimg.png");
        this.load.image('napolisimg',"assets/images/napolis-img.png");
        this.load.image('temp1',"assets/images/temp1.jpg");
        this.load.image('temp2',"assets/images/temp2.jpg");
        this.load.image('temp3',"assets/images/temp3.jpg");
       this.load.image('desertBg',"assets/images/Desert.png");
       this.load.image('grasslandBg',"assets/images/Grassland.png");
       this.load.image('snowBg',"assets/images/Snow.png");
        this.load.image('selectbtnimg',"assets/images/select-btn.png");
        this.load.image('slideprevbtn',"assets/images/slideprevbtn.png");
        this.load.image('slidenextbtn',"assets/images/slidenextbtn.png");
        this.load.image('backbtn',"assets/images/back-btn.png");
        this.load.image('nextbtn',"assets/images/next-btn.png");
        this.load.image('commonbtnbg','assets/images/common-btn-bg.png');
         
    }
    create(){
        this.oSoundManager = new SoundManager(this);
        this.add.image(960,540,'reginionbanner');
        var backBtn = this.add.image(120, 30, 'backbtn')
        .setInteractive({ useHandCursor: true })
        .setScale(1)
        .on('pointerdown', () => { 
            this.oSoundManager.playSound(this.oSoundManager.clickSound, false);
            game.scene.stop('regionScene');
            game.scene.start('playScene');
        } );

      
      
         sliderimgdata = ['desertBg', 'grasslandBg', 'snowBg'];
         slidetitledata = ['Al-Ain', 'Juninhos Farm #47', 'Alyásk'];
         slidedescdata = ['A subtropical Asili desert. Sacred land known for giving to those who know what they\n seek. Said to be inhospitable and perilous to outlanders.',
         'A seemingly ordinary farm on Terra Dexa, managed by business magnate, Juninho.\n Rumoured to be operated by Hound Corps elite.','Northern colony of Nunnehi, home to one of the fiercest tribes of Moonlight. A sparsely \n populated region that was once a popular settler base for ambitious Extractors.',
        ];
            
        sliderimagelength = sliderimgdata.length;
        
       // this.desertBg=this.add.image(960,540,'desertBg');
        //this.grasslandBg=this.add.image(960,540,'grasslandBg');
       // this.snowBg=this.add.image(960,540,'snowBg');

       this.sliderimg = this.add.image(960,540,sliderimgdata[regionCount]);
       this.sliderimg.setScale(0.7,0.62);
       var nextBtn = this.add.image(1785, 30, 'nextbtn')
       .setInteractive({ useHandCursor: true })
       .setScale(1)
       .on('pointerdown', () => { 
        this.oSoundManager.playSound(this.oSoundManager.clickSound, false);
        let sSelectedBg=sliderimgdata[regionCount]//selected bg key....
           game.scene.stop('regionScene');
           game.scene.start('troopScene',{sSelectedBg:sSelectedBg});
       } );
        selectslidebtn = this.add.image(960,880,'selectbtnimg')
                        .setInteractive({ useHandCursor: true })
                        .setScale(1)
                        .on('pointerdown', () => { 
                            this.oSoundManager.playSound(this.oSoundManager.clickSound, false);
                            let sSelectedBg=sliderimgdata[regionCount]//selected bg key....
                            game.scene.stop('regionScene');
                            game.scene.start('troopScene',{sSelectedBg:sSelectedBg});
                        } );
        nextslidebtn = this.add.image(1180,880,'slidenextbtn')
                        .setInteractive({ useHandCursor: true })
                        .setScale(1)
                        .on('pointerdown', () => { 
                            this.oSoundManager.playSound(this.oSoundManager.clickSound, false);
                            regionCount += 1;
                            this.sliderimg.setTexture(sliderimgdata[regionCount]);
                            slidetitle.setText(slidetitledata[regionCount]);
                            slidedesc.setText(slidedescdata[regionCount]);
                            
                            
                        } );

        prevslidebtn = this.add.image(740,880,'slideprevbtn')
                        .setInteractive({ useHandCursor: true })
                        .setScale(1)
                        .on('pointerdown', () => { 
                            this.oSoundManager.playSound(this.oSoundManager.clickSound, false);
                            regionCount -= 1;
                            this.sliderimg.setTexture(sliderimgdata[regionCount]);
                            slidetitle.setText(slidetitledata[regionCount]);
                            slidedesc.setText(slidedescdata[regionCount]);

                        } );
        this.add.image(960,540,'borderimg');
        slidetitle = this.add.text(560,650,slidetitledata[0], { fontSize: '38px', fill: '#fff', fontFamily: 'Normandia'});
        slidedesc = this.add.text(560,700,slidedescdata[0], { fontSize: '18px', fill: '#fff', fontFamily: 'GothamMedium'});
        
        this.add.text(680,970,"Entry Fees:", {fontSize: '35px', fill: '#fff', fontFamily: 'Normandia' })
        this.oEntryFee=this.add.text(910,970,"1000 Meta Tokens", {fontSize: '35px', fill: '#fbd203', fontFamily: 'Normandia' })
        this.oEntryFee.text=oApiHandler.nEntryFee +" Meta Tokens";




        
        
    }

    update(){

       if (regionCount == sliderimagelength - 1) {
            nextslidebtn.setAlpha(0.5);
            nextslidebtn.input.enabled = false;
       }
       else if (regionCount == 0) {
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