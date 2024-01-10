var playnowbtn;
var walletbalamnce;
var rewardbtn;
var myquadbtn
var storybtn;
var storyimg;
var skipbtn;
var nextbtn;
var storyflag = 1;
var tankDataArray = [];
var nEntryFee;
var staminaText;
class PlayScene extends Phaser.Scene
{
    constructor()
    {
        super({key:'playScene'});
    }
    editorPreload() {
        this.load.pack("asset-pack", "assets/assets.json");
    }

    preload(){
       //this.callEntryFeeAPI(); 
        // this.load.image('welcomebanner',"assets/images/welcomescreen.png");
        // this.load.image('playnowbtn',"assets/images/playnow.png");
        // this.load.image('inventorybtn',"assets/images/inventory-img.png");
        // this.load.image('settingbtn',"assets/images/settings-icon.png");
        // this.load.image('recurtbtn',"assets/images/recruit-btn.png");
        // this.load.image('wallet',"assets/images/wallet.png");
        // this.load.image('rewardicon',"assets/images/reward-icon.png");
        // this.load.image('popupbg',"assets/images/popupbg.jpg");
        // this.load.image('popupframe',"assets/images/popup-frame.png");
        // this.load.image('loading',"assets/images/loading-bar.png");
        // this.load.image('slideindicator',"assets/images/slide-indicator.png");
        // this.load.image('soundicon',"assets/images/sound-icon.png");
        // this.load.image('musicicon',"assets/images/music-icon.png");
        // this.load.image('settingclose',"assets/images/settings-close.png");
        
        // this.load.image('circlebg',"assets/images/circle-bg.png");
        // this.load.image('cupimg',"assets/images/cup-img.png");
        // this.load.image('storyicon',"assets/images/story-icon.jpg");
        // this.load.image('storyscene1',"assets/images/storyscene1.png");
        // this.load.image('storyscene2',"assets/images/storyscene2.png");
        // this.load.image('storyscene3',"assets/images/storyscene3.png");
        this.editorPreload();
        this.load.image('stamina', 'assets/images/btn.png');
        this.load.image('stamina-symbol', 'assets/images/staminaSymbol.png');
        this.load.scenePlugin({
            key: 'rexuiplugin',
            url: 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexuiplugin.min.js',
            sceneKey: 'rexUI'
        });     
    }
    init(){
       
    }
    
    create(){
        // oApiHandler.callEntryFeeAPI(); 
       // game.scene.stop('homeScene');
        this.scale.refresh();
        this.add.image(960,540,'welcomebanner');
        this.oSoundManager = new SoundManager(this);
        if(this.oSoundManager.ingameSound){
            this.oSoundManager.stopSound(this.oSoundManager.ingameSound, true);
        }
        this.oSoundManager.playSound(this.oSoundManager.ingameSound, true);

        myquadbtn = this.add.image(180,910,'inventorybtn')
                    .setInteractive({ useHandCursor: true })
                    .on('pointerdown', () => {
                        this.oSoundManager.playSound(this.oSoundManager.clickSound, false);
                       // this.callTankAPI(APIUrl,authorization);
                       self.scene.stop('playScene');    
                       self.scene.start('squadScene');
                        
                         
                    } );
        this.add.image(1830,80,'settingbtn')
                    .setInteractive({ useHandCursor: true })
                    .setScale(1)
                    .on('pointerdown', () => { 
                        this.oSoundManager.playSound(this.oSoundManager.clickSound, false);
                        rangeslidegrp.setVisible(true);
                    } );;

        this.add.image(1640,80,'recurtbtn');

        this.add.image(200,80,'wallet');
        rewardbtn = this.add.image(1820,200,'rewardicon')
                    .setInteractive({ useHandCursor: true })
                    .setScale(1)
                    .on('pointerdown', () => { 
                        this.oSoundManager.playSound(this.oSoundManager.clickSound, false);
                        this.rewardtconsumed.text="Rewards Consumed: "+oApiHandler.oRewardData.nConsumedReward;
                        this.rewardamount.text=oApiHandler.oRewardData.nBonanza;
                        rewardsgrp.setVisible(true);
                        
                    } );
        playnowbtn = this.add.image(960,850,'playnowbtn')
                    .setInteractive({ useHandCursor: true })
                    .setScale(1)
                    .on('pointerdown', () => { 
                        this.oSoundManager.playSound(this.oSoundManager.clickSound, false);
                        game.scene.stop('playScene');
                        // console.log("this.nEntryFee",nEntryFee)
                        game.scene.start('regionScene',{nEntryFee:nEntryFee});
                    } );
        
        this.add.image(1660, 950, 'stamina').setScale(2, 1.8);
        this.add.image(1515, 950, 'stamina-symbol').setScale(0.55);
        staminaText = this.add.text(1680, 950, "Stamina: 1/10",  { fontSize:'34px', fill:'#fff',fontFamily: 'Normandia' }).setOrigin(0.5).setInteractive({ useHandCursor: false }).setScale(1);
        
        // Story Button Remove requested by Client
        // storybtn = this.add.image(1780,910,'storyicon')
        //             .setInteractive({ useHandCursor: true })
        //             .setScale(1.4)
        //             .on('pointerdown', () => { 
        //                 this.oSoundManager.playSound(this.oSoundManager.clickSound, false);
        //                 storyimg.setScale(1.15);
        //                 skipbtn.setScale(1);
        //                 nextbtn.setScale(1);
        //                 storyimg.setTexture('storyscene1');
        //                 nextbtn.setText("NEXT");
        //                 storyflag=1
        //             } );
        // storyimg= this.add.image(960,540,'storyscene1').setScale(0);
        // skipbtn= this.add.text(1530,135, "SKIP",  { fontSize:'40px', fill:'#fff',fontFamily: 'Normandia' }).setOrigin(0.5).setInteractive({ useHandCursor: true }).setScale(0);
        // nextbtn= this.add.text(1530,925, "NEXT",  { fontSize:'40px', fill:'#fff',fontFamily: 'Normandia' }).setOrigin(0.5).setInteractive({ useHandCursor: true }).setScale(0);
        // skipbtn.on('pointerdown', () => { 
        //     this.oSoundManager.playSound(this.oSoundManager.clickSound, false);
        //     storyimg.setScale(0);
        //     skipbtn.setScale(0);
        //     nextbtn.setScale(0);
        // } );
        // nextbtn.on('pointerdown', () => { 
        //     this.oSoundManager.playSound(this.oSoundManager.clickSound, false);
        //     storyflag = storyflag + 1;
        //     if (storyflag == 3) {
        //         nextbtn.setText("CLOSE");
        //         skipbtn.setScale(0);
        //     }
        //     if (storyflag > 3) {
        //         storyimg.setScale(0);
        //         nextbtn.setScale(0);
        //     }
        //     storyimg.setTexture('storyscene'+storyflag);
        // } );

        walletbalamnce = this.add.text(200,80,"2000",{ fontSize:'24px', fill:'#fff',fontFamily: 'Normandia' }).setOrigin(0.5);
        this.rewardBtnText=this.add.text(1820,222,"META \n   REWARD \n  BONANZA",{ fontSize:'19px', fill:'#fff',fontFamily: 'Normandia' }).setOrigin(0.5);
        this.rewardBtnText.text= "REWARD \n      POT"
        
        // setting popup

        var rangeslidegrp = this.add.group();
        rangeslidegrp.create(960, 540, 'popupframe').setScale(0.8)
        
        var self = this;
        var soundicon = this.add.image(760,470,'soundicon');
      
        var audioslide = this.rexUI.add.slider({
            x: 1010,
            y: 470,
            width: 380,
            height: 24,
            orientation: 'x',

            track: this.rexUI.add.roundRectangle(0, 0, 0, 0, 10, 0x7B7B7B),
            indicator: this.add.image(0,0,'loading').setScale(0.7),
            thumb: this.add.image(0,0,'slideindicator'),

            input: 'click', // 'drag'|'click'

            valuechangeCallback: function (value, oldValue, audioslide) {
                audioslide.text = Math.round(Phaser.Math.Linear(0, 100, value));
                self.oSoundManager.setSoundsVolume(audioslide.text/100);
            },
        })
            .layout();
            audioslide.setValue(23, 0, 100);

        var musicicon = this.add.image(760,580,'musicicon');
        var musicslide = this.rexUI.add.slider({
            x: 1010,
            y: 580,
            width: 380,
            height: 24,
            orientation: 'x',

            track: this.rexUI.add.roundRectangle(0, 0, 0, 0, 10, 0x7B7B7B),
           
            indicator: this.add.image(0,0,'loading').setScale(0.7),
            thumb: this.add.image(0,0,'slideindicator'),

            input: 'click', // 'drag'|'click'

            valuechangeCallback: function (value, oldValue, musicslide) {
                musicslide.text = Math.round(Phaser.Math.Linear(0, 100, value));
                self.oSoundManager.setBackgroundVolume(musicslide.text/100);
            },
        })
            .layout();
            musicslide.setValue(13, 0, 100);


        closebtn = this.add.image(1240,350,'settingclose').setScale(0.65)
        .setOrigin(0.5)
        .setInteractive({ useHandCursor: true })
        .on('pointerdown', () => { 
            this.oSoundManager.playSound(this.oSoundManager.clickSound, false);
            rangeslidegrp.setVisible(false);
            } );
        rangeslidegrp.add(closebtn);
        rangeslidegrp.add(soundicon);
        rangeslidegrp.add(audioslide);
        rangeslidegrp.add(musicicon);
        rangeslidegrp.add(musicslide);
        rangeslidegrp.setVisible(false);

        // reward popup
        var rewardsgrp = this.add.group();
        rewardsgrp.create(960, 540, 'popupbg').setScale(1.9)
                
        var rewardtitle = this.add.text(960,350,"Total Reward Per Day",{ fontSize:'60px', fill:'#fff',fontFamily: 'Normandia' }).setOrigin(0.5);
        this.rewardtconsumed = this.add.text(960,680,"Rewards consumed: 1000",{ fontSize:'60px', fill:'#fff',fontFamily: 'Normandia' }).setOrigin(0.5);
       
        var cupimg = this.add.image(840,520,'cupimg').setScale(1.8);
        //var rewardbg = this.add.image(1030,520,'circlebg').setScale(1.8);
        this.rewardamount = this.add.text(1030,520,"5000",{ fontSize:'55px', fill:'#fff',fontFamily: 'Normandia' }).setOrigin(0.5);
        
        closebtn = this.add.text(1510,250,"X", { fontSize:'40px', fill:'#000000',fontFamily: 'Normandia' })
            .setOrigin(0.5)
            .setInteractive({ useHandCursor: true })
            .on('pointerdown', () => { 
                this.oSoundManager.playSound(this.oSoundManager.clickSound, false);
                    rewardsgrp.setVisible(false);
                } );
        rewardsgrp.add(rewardtitle);
        rewardsgrp.add(this.rewardtconsumed);
        rewardsgrp.add(this.rewardamount);
        rewardsgrp.add(closebtn);
       // rewardsgrp.add(rewardbg);
        rewardsgrp.add(cupimg);
        rewardsgrp.setVisible(false);

    }
    // callEntryFeeAPI(){
    //         console.log("callEntryFeeAPI");
    //         var settings = {
    //             "url": APIUrl+"/setting",
    //             "method": "GET",
    //             "timeout": 0,
               
    //           };
        
    //         $.ajax(settings).done((response)=> {
    //                  nEntryFee=response.data.nEntryFee;
    //                  this.oRewardData=response.data.oReward;
                    
    //                  console.log(response,this.oRewardData);
    //        });
           
        
    // }
    callTankAPI(APIUrl, authorization){
        // console.log("!!!!!");
        var self=this;
        tankDataArray=[];
        var settings = {
            "url": APIUrl + "/game/getTanks",
            "method": "POST",
            "timeout": 0,
            "headers": {
                authorization
            },
            "data":{
                aTokenId:[8,9,15,35,36]
            },
        };
    
        $.ajax(settings).done(function (response) {
            // console.log(response);
            for (var i = 0; i < response.data.length; i++) {
                tankDataArray.push(response.data[i]);
    
            }
            self.scene.stop('playScene');    
            self.scene.start('squadScene');
            // console.log(tankDataArray);
        });
    }

    update(){
        
        
        

    }
    
    
}