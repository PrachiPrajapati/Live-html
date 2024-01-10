var homebtn;
var popuphandler = false;

var strangthvaluesquad = 50;
var attckvaluesquad = 40;
var damagevaluesquad = 10;
var defencevaluesquad = 35;

const color_PRIMARY = 0x4e342e;
const color_LIGHT = 0x937d2e;
const color_DARK = 0x260e04;

class SquadScene extends Phaser.Scene {
    constructor() {
        super({ key: 'squadScene' });
    }
    preload() {
        this.load.image('sqaudframe', "assets/images/mysqaud-bg.png");
        this.load.image('homeicon', "assets/images/homeicon.png");
        this.load.image('troopsbg', "assets/images/troops-bg.png");
        this.load.image('troopslistbg', "assets/images/troopslistbg.png");
        this.load.image('troopPopupBg', "assets/images/troopPopupBg.png");
        this.load.image('shareTwitterBtn', "assets/images/shareTwitterBtn.png");
        // this.load.image('closeBtn', "assets/images/closeBtn.png");
        this.load.image('troopImage', "assets/images/troopImage.png");
    }
    create() {
        oApiHandler.callTankAPI(this);
        this.isMoved = false;
       
        // console.log("create.....",tankDataArray);
        this.add.image(960, 540, 'temp1').setScale(1.25);
        this.oSoundManager = new SoundManager(this);
        
        this.add.image(960, 540, 'sqaudframe').setScale(1.25);
        this.add.image(960, 570, 'troopsbg').setScale(2.03, 2.50);
        homebtn = this.add.image(300, 140, 'homeicon').setScale(1.25)
            .setInteractive({ useHandCursor: true })
            .on('pointerdown', () => {
                this.oSoundManager.playSound(this.oSoundManager.clickSound, false);
                // this.resetSquad();
                // Comments Below
                this.scene.stop('squadScene');
                popuphandler = false;
                isLaunch = true;
                this.scene.start('playScene');
                // viewTroopGroup.setVisible(true);
                // this.viewTroopShareTwitter();
            });


        this.tankContainer = this.add.container(250, 230);
         if(isLaunch){
            this.tankContainer1 = this.add.container(250, 230);
         }
        this.scrollBar = this.add.rectangle(1680, 260, 20, 100, 0xffffff).setScale(1);
        this.setOpenCardPannel();
        this.scrollBar.setInteractive();
        this.input.setDraggable(this.scrollBar);

        this.input.on('gameobjectdown', function (pointer, gameObject, event) {
            console.log(gameObject.name);
            for (var i = 0; i <= this.tankBg.length; i++)
            {
                if(gameObject == this.tankBg[i] && popuphandler == false)
                {
                    this.viewTroopShareTwitter(gameObject.name);
                }
            }
        }, this);

        this.viewTroopGroup = this.add.group();
        this.troopPopupBg = this.viewTroopGroup.create(960, 540, 'troopPopupBg').setScale(0.75, 1);
        var shareTwitter = this.add.image(960, 850, 'shareTwitterBtn').setScale(1)
        .setInteractive({ useHandCursor: true })
        .on('pointerdown', () => {
            this.oSoundManager.playSound(this.oSoundManager.clickSound, false);
            this.viewTroopGroup.setVisible(false);
            popuphandler = false;
            window.open("http://twitter.com/share?text=Hello World! I am Sharing on Twitter!%0A%0A&url="+this.troopsImageUrl+"%0A%0A&hashtags=google,harsh,metatanks");
        });
        this.troopsImage = this.add.image(960, 500, 'troopImage').setScale(1.9);
        
        closebtn = this.add.text(1370,180,"X", { fontSize:'40px', fill:'#000000',fontFamily: 'Normandia' })
            .setOrigin(0.5)
            .setInteractive({ useHandCursor: true })
            .on('pointerdown', () => { 
                this.oSoundManager.playSound(this.oSoundManager.clickSound, false);
                this.viewTroopGroup.setVisible(false);
                popuphandler = false;
        } );
        this.viewTroopGroup.add(shareTwitter);
        this.viewTroopGroup.add(closebtn);
        this.viewTroopGroup.add(this.troopsImage);
        this.viewTroopGroup.setVisible(false);
    }

    viewTroopShareTwitter(tankIndex) {
        popuphandler = true;
        this.viewTroopGroup.setVisible(true);
        this.troopPopupBg.setInteractive();
        this.troopsImage.setTexture('pTank'+tankIndex).setScale(0.65);
        this.troopsImageUrl = this.imageUrl[tankIndex];
    }

    callTween() {
        var tween2 = this.tweens.add({
            targets: this.tankContainer,
            y: 230,
            ease: 'Linear',
            duration: 100,
            repeat: 0,
            yoyo: false
        });

    }
    setOpenCardPannel() {
        var graphics = this.make.graphics();
        graphics.fillStyle(0xffffff);
        graphics.fillRect(250, 230, 1700, 700);//x,y,w,h
        var mask = new Phaser.Display.Masks.GeometryMask(this, graphics);
        this.tankContainer.setMask(mask);
        // this.zone = this.add.zone(200, 230, 1300, 700).setOrigin(0).setInteractive();
        // this.zone.on('pointermove', function (pointer) {
        //     this.isMoved = true;
        //     if(!this.isMoved) {
        //         this.zone.disableInteractive();
        //         console.log("not moved",this.isMoved);
        //     }
        //     if (pointer.isDown) {
        //         console.log("pointer isDown; isMoved", this.isMoved);
        //         this.tankContainer.y += (pointer.velocity.y / 10);
        //         this.tankContainer.y = Phaser.Math.Clamp(this.tankContainer.y, this.tankContainer.y, 300);
        //         this.scrollBar.y -= (pointer.velocity.y / 10);
        //         this.scrollBar.y = Phaser.Math.Clamp(this.scrollBar.y, this.scrollBar.y, 300);
        //         if (this.tankContainer.y > 500 || this.tankContainer.y < -344) {
        //             this.callTween();
        //             this.tankContainer.y = 230;
        //         }

        //         if (this.scrollBar.y < 274) {
        //             this.scrollBar.y = 260;
        //         } else if (this.scrollBar.y > 850) {
        //             this.scrollBar.y = 260;
        //         }
        //     }
        // }, this);

        this.input.on('wheel', function (pointer, gameObjects, deltaY) {
            this.tankContainer.y -= pointer.deltaY * 0.5;
            this.scrollBar.y += pointer.deltaY * 0.5;
            if (this.tankContainer.y > 300 || this.tankContainer.y < -344) {
                this.callTween();
                this.tankContainer.y = 230;
            }
            if (this.scrollBar.y < 274) {
                this.scrollBar.y = 260;
            } else if (this.scrollBar.y > 850) {
                this.scrollBar.y = 260;
            }
        }, this);

        this.input.on('drag', function (pointer, gameObject, dragX, dragY) {
            if (gameObject == this.scrollBar) {
                this.isDraged = true;
                gameObject.y = dragY;
                if (pointer.isDown && gameObject.y >= 296 && gameObject.y <= 862) {
                    this.tankContainer.y -= (pointer.velocity.y / 10);
                    this.tankContainer.y = Phaser.Math.Clamp(this.tankContainer.y, this.tankContainer.y, 300);
                    if (this.tankContainer.y > 500 || this.tankContainer.y < -344) {
                        this.callTween();
                        this.tankContainer.y = 230;
                    }
                }
                if (gameObject.y <= 296) {
                    gameObject.y = 296;
                }
                if (gameObject.y >= 862) {
                    gameObject.y = 862;
                }
            }
        }, this);
    }
    loadTankSprits() {
        this.imageUrl = [];
        for (var i = 0; i < tankDataArray.length; i++) {
            this.load.image('pTank' + i, tankDataArray[i].sUrl + "?cacheblock=true");
            this.imageUrl[i] = tankDataArray[i].sUrl;
        }
        this.load.once('complete', this.addTankScrollbar, this);
        this.load.start();
    }
    addTankScrollbar() {
        // console.log("addTankScrollbar");
        this.lastX = 150;
        this.lastY = 150;
        var cardCounter = 0;
        this.tank = [];
        this.tankBg = [];
        this.tankDataCon = [];
        this.commonwhiteract1 = [];
        this.commonwhiteract2 = [];
        this.commonwhiteract3 = [];
        this.commonwhiteract4 = [];
        this.strangthract = [];
        this.attckpowerract = [];
        this.damageract = [];
        this.defenceract = [];
        this.strengthlabel = [];
        this.attacklabel = [];
        //this.damagelabel = [];
        this.defencelabel = [];
        for (var n = 0; n < tankDataArray.length; n++) {
            
            attckvaluesquad = tankDataArray[n].nAttack;
            defencevaluesquad = tankDataArray[n].nDefence;
            strangthvaluesquad = tankDataArray[n].nStrength;
            if (cardCounter % 5 == 0 && cardCounter != 0) {
                this.lastX = 150;
                this.lastY += 350;
               
            }

            this.tankBg[n] = this.add.image(0, 0, 'troopslistbg').setOrigin(0.5).setScale(1.25);
            this.tankBg[n].name = n;
            this.tank[n] = this.add.image(0, -70, 'pTank' + n).setOrigin(0.5).setScale(0.20);
            this.tankBg[n].setInteractive({ useHandCursor: true })
            .on('pointerdown', () => {
                this.oSoundManager.playSound(this.oSoundManager.clickSound, false);
                // console.log("iii", this.tankBg.name);
            });
            
            this.setProgressBar(n);

            this.tankDataCon[n] = this.add.container(this.lastX, this.lastY);
            this.tankDataCon[n].add(this.tankBg[n]);
            this.tankDataCon[n].add(this.tank[n]);
            this.tankContainer.add(this.tankDataCon[n]);
            
            this.tankDataCon[n].add(this.strengthlabel[n]);
            this.tankDataCon[n].add(this.commonwhiteract1[n]);
            this.tankDataCon[n].add(this.strangthract[n]);

            this.tankDataCon[n].add(this.attacklabel[n]);
            this.tankDataCon[n].add(this.commonwhiteract2[n]);
            this.tankDataCon[n].add(this.attckpowerract[n]);

            //this.tankDataCon[n].add(this.damagelabel[n]);
            //this.tankDataCon[n].add(this.commonwhiteract3[n]);
            //this.tankDataCon[n].add(this.damageract[n]);

            this.tankDataCon[n].add(this.defencelabel[n]);
            this.tankDataCon[n].add(this.commonwhiteract4[n]);
            this.tankDataCon[n].add(this.defenceract[n]);
            this.lastX += 270;
            cardCounter++;
        }

     


    }
    

    setProgressBar(n) {
        // console.log("setProgressBar");
        var i = n;
        this.strengthlabel[n] = this.add.text(-23, this.tank[n].y + 124, "STRENGTH", { fontSize: '12px', fill: '#fff', fontFamily: 'Normandia' }).setOrigin(1);
        this.commonwhiteract1[n] = this.add.rectangle(45, this.tank[n].y + 120, 120, 10, 0xffffff);
        this.strangthract[n] = this.add.rectangle(-14, this.tank[n].y + 115, 12 * strangthvaluesquad, 10, 0xa1cf00).setOrigin(0);

        this.attacklabel[n] = this.add.text(-23, this.tank[n].y + 144, "ATTACK", { fontSize: '12px', fill: '#fff', fontFamily: 'Normandia' }).setOrigin(1);
        this.commonwhiteract2[n] = this.add.rectangle(45, this.tank[n].y + 140, 120, 10, 0xffffff);
        this.attckpowerract[n] = this.add.rectangle(-14, this.tank[n].y + 135, 12 * attckvaluesquad, 10, 0xa1cf00).setOrigin(0);

        // this.damagelabel[n] = this.add.text(-23, this.tank[n].y + 164, "DAMAGE", { fontSize: '12px', fill: '#fff', fontFamily: 'Normandia' }).setOrigin(1);
        // this.commonwhiteract3[n] = this.add.rectangle(45, this.tank[n].y + 160, 120, 10, 0xffffff);
        // this.damageract[n] = this.add.rectangle(-14, this.tank[n].y + 155, 1.2 * damagevaluesquad, 10, 0xa1cf00).setOrigin(0);

        this.defencelabel[n] = this.add.text(-23, this.tank[n].y + 164, "DEFENSE", { fontSize: '12px', fill: '#fff', fontFamily: 'Normandia' }).setOrigin(1);
        this.commonwhiteract4[n] = this.add.rectangle(45, this.tank[n].y + 160, 120, 10, 0xffffff);
        this.defenceract[n] = this.add.rectangle(-14, this.tank[n].y + 155, 12 * defencevaluesquad, 10, 0xa1cf00).setOrigin(0);
    }
    resetSquad(){
        // console.log("resetSquad");
        for (let n = 0; n < tankDataArray.length; n++) {
            // this.tankBg[n]
            // this.tank[n]
            
            

            this.tankDataCon[n].destroy();
            this.tankContainer.destroy();
            // this.tankDataCon[n].add(this.strengthlabel[n]);
            // this.tankDataCon[n].add(this.commonwhiteract1[n]);
            // this.tankDataCon[n].add(this.strangthract[n]);

            // this.tankDataCon[n].add(this.attacklabel[n]);
            // this.tankDataCon[n].add(this.commonwhiteract2[n]);
            // this.tankDataCon[n].add(this.attckpowerract[n]);

            // this.tankDataCon[n].add(this.damagelabel[n]);
            // this.tankDataCon[n].add(this.commonwhiteract3[n]);
            // this.tankDataCon[n].add(this.damageract[n]);

            // this.tankDataCon[n].add(this.defencelabel[n]);
            // this.tankDataCon[n].add(this.commonwhiteract4[n]);
            // this.tankDataCon[n].add(this.defenceract[n]);
        }
    }
    // callTankAPI(APIUrl, authorization){
    //     console.log("!!!!!");
    //     var self=this;
    //     tankDataArray=[];
    //     var settings = {
    //         "url": APIUrl + "/game/getTanks ",
    //         "method": "POST",
    //         "timeout": 0,
    //         "headers": {
    //             authorization
    //         },
    //         "data":{
    //             aTokenId:[8,9,15,35,36]
    //         },
    //     };
    //     $.ajax(settings).done(function (response) {
    //         console.log(response);
    //         for (var i = 0; i < response.data.length; i++) {
    //             tankDataArray.push(response.data[i]);
    
    //         }
    //         console.log(tankDataArray);
    //         self.loadTanksprits();
    //     });
    // }
    update() {
       
        

    }

}



