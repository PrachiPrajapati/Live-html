var homebtn;

var strangthvaluesquad = 50;
var attckvaluesquad = 40;
var damagevaluesquad = 10;
var defencevaluesquad = 35;



const color_PRIMARY = 0x4e342e;
const color_LIGHT = 0x937d2e;
const color_DARK = 0x260e04;

class SquadScene extends Phaser.Scene
{
    constructor()
    {
        super({key:'squadScene'});
    }
    preload(){
        this.load.image('sqaudframe',"assets/images/mysqaud-bg.png");
        this.load.image('homeicon',"assets/images/homeicon.png");
        this.load.image('troopsbg',"assets/images/troops-bg.png");
        this.load.image('troopslistbg',"assets/images/troopslistbg.png");

        this.load.image('tank1','assets/images/tank1.png');
        this.load.image('tank2','assets/images/tank2.png');
        this.load.image('tank3','assets/images/tank3.png');

        this.load.image('tank4','assets/images/tank1.png');
        this.load.image('tank5','assets/images/tank2.png');
        this.load.image('tank6','assets/images/tank3.png');

        this.load.image('tank7','assets/images/tank1.png');
        this.load.image('tank8','assets/images/tank2.png');
        this.load.image('tank9','assets/images/tank3.png');

        this.load.image('tank10','assets/images/tank1.png');
        this.load.image('tank11','assets/images/tank2.png');
        this.load.image('tank12','assets/images/tank3.png');

        this.load.image('tank13','assets/images/tank1.png');
        this.load.image('tank14','assets/images/tank2.png');
        this.load.image('tank15','assets/images/tank3.png');

        this.load.image('tank16','assets/images/tank1.png');
        this.load.image('tank17','assets/images/tank2.png');
        this.load.image('tank18','assets/images/tank3.png');

        this.load.image('tank19','assets/images/tank1.png');
        this.load.image('tank20','assets/images/tank2.png');
        this.load.image('tank21','assets/images/tank3.png');

        this.load.image('tank22','assets/images/tank1.png');
        this.load.image('tank23','assets/images/tank2.png');
        this.load.image('tank24','assets/images/tank3.png');

        this.load.image('tank25','assets/images/tank1.png');
        this.load.image('tank26','assets/images/tank2.png');
        this.load.image('tank27','assets/images/tank3.png');

        this.load.image('tank28','assets/images/tank1.png');
        this.load.image('tank29','assets/images/tank2.png');
        this.load.image('tank30','assets/images/tank3.png');
        // this.load.image('scrollBar','assets/images/tank3.png');
 
         
    }
    create(){
        this.add.image(960,540,'sqaudframe').setScale(1.25);
        this.add.image(960,570,'troopsbg').setScale(2.03,2.50);
        homebtn = this.add.image(300,140,'homeicon').setScale(1.25)
            .setInteractive({ useHandCursor: true })
            .on('pointerdown', () => { 
                game.scene.stop('squadScene');
                game.scene.start('playScene');
            } );;

            
            this.tankContainer = this.add.container(250,230);
            this.scrollBar = this.add.rectangle(1680, 260, 20, 100, 0xffffff).setScale(0);

            var x = 0;
            var y = 10;
            var a = 175;
            var b = 230;
            var tank = [];
            var tankbg = [];
            var strengthlabel = [];
            var attacklabel = [];
            var damagelabel = [];
            var defencelabel = [];
            var commonwhiteract1 = [];
            var commonwhiteract2 = [];
            var commonwhiteract3 = [];
            var commonwhiteract4 = [];
            var strangthract = [];
            var attckpowerract =[];
            var damageract=[];
            var defenceract=[];


            var a1 = 110;
            var b1 = 235;
            var a2 = 110;
            var b2 = 255;
            var a3 = 110;
            var b3 = 275;
            var a4 = 110;
            var b4 = 295;

            var x1 = 175; 
            var y1 = 230; 
            var x2 = 175;
            var y2 = 250;
            var x3 = 175;
            var y3 = 270;
            var x4 = 175;
            var y4 = 290;

            var x5 = 115;
            var y5 = 225;
            var x6 = 115;
            var y6 = 245;
            var x7 = 115;
            var y7 = 265;
            var x8 = 115;
            var y8 = 285;

            function isMultipleof5 (i)
            {
                while (i > 0)
                    i = i - 5;
             
                if (i == 0)
                    return true;
             
                return false;
            }
            for (var i = 1; i <= 15; i++) { 
                // i=2  x=280
                // i=3  x=560
                // i=4  x=840
                // i=5  x=1120
                // i=6  x=0 y=370
                tankbg[i] =this.add.image(x,y,'troopslistbg').setOrigin(0,0).setScale(1.25)
                tank[i] = this.add.image(x+50,y+40,'tank'+i).setOrigin(0,0).setScale(0.45);

                strengthlabel[i] = this.add.text(a1,b1,"STRENGTH",{ fontSize: '12px', fill: '#fff', fontFamily: 'Normandia'}).setOrigin(1);
                attacklabel[i] = this.add.text(a2,b2,"ATTACK POWER",{ fontSize: '12px', fill: '#fff', fontFamily: 'Normandia'}).setOrigin(1);
                damagelabel[i] = this.add.text(a3,b3,"DAMAGE",{ fontSize: '12px', fill: '#fff', fontFamily: 'Normandia'}).setOrigin(1);
                defencelabel[i] = this.add.text(a4,b4,"DEFENSE",{ fontSize: '12px', fill: '#fff', fontFamily: 'Normandia'}).setOrigin(1);
                
                commonwhiteract1[i] = this.add.rectangle(x1, y1, 120, 10, 0xffffff);
                commonwhiteract2[i] = this.add.rectangle(x2, y2, 120, 10, 0xffffff);
                commonwhiteract3[i] = this.add.rectangle(x3, y3, 120, 10, 0xffffff);
                commonwhiteract4[i] = this.add.rectangle(x4, y4, 120, 10, 0xffffff);

                strangthract[i] = this.add.rectangle(x5, y5, 1.2*strangthvaluesquad , 10, 0xa1cf00).setOrigin(0);
                attckpowerract[i] = this.add.rectangle(x6, y6, 1.2*attckvaluesquad, 10, 0xa1cf00).setOrigin(0);
                damageract[i] = this.add.rectangle(x7, y7, 1.2*damagevaluesquad, 10, 0xa1cf00).setOrigin(0);
                defenceract[i] = this.add.rectangle(x8, y8, 1.2*defencevaluesquad, 10, 0xa1cf00).setOrigin(0);

                x += 280;
                a += 280;
                a1 += 280;
                a2 += 280;
                a3 += 280;
                a4 += 280;

                x1 += 280;
                x2 += 280;
                x3 += 280;
                x4 += 280;

                x5 += 280;
                x6 += 280;
                x7 += 280;
                x8 += 280;
                if (isMultipleof5(i) == true){
                    y+=360;
                    x=0;
                    b1+=350;
                    b2+=350;
                    b3+=350;
                    b4+=350;
                    a1 = 110;
                    a2 = 110;
                    a3 = 110;
                    a4 = 110;

                    y1+=350;
                    y2+=350;
                    y3+=350;
                    y4+=350;

                    x1 = 175;
                    x2 = 175;
                    x3 = 175;
                    x4 = 175;

                    y5 += 350;
                    y6 += 350;
                    y7 += 350;
                    y8 += 350;

                    x5 = 115;
                    x6 = 115;
                    x7 = 115;
                    x8 = 115;

                }
                this.tankContainer.add(tankbg[i]);
                this.tankContainer.add(tank[i]);
                this.tankContainer.add(strengthlabel[i]);
                this.tankContainer.add(attacklabel[i]);
                this.tankContainer.add(damagelabel[i]);
                this.tankContainer.add(defencelabel[i]);
                this.tankContainer.add(commonwhiteract1[i]);
                this.tankContainer.add(commonwhiteract2[i]);
                this.tankContainer.add(commonwhiteract3[i]);
                this.tankContainer.add(commonwhiteract4[i]);
                this.tankContainer.add(strangthract[i]);
                this.tankContainer.add(attckpowerract[i]);
                this.tankContainer.add(damageract[i]);
                this.tankContainer.add(defenceract[i]);
            }
            this.setOpenCardPannel();

    }


    

    callTween() {
        console.log("check tween");
        var tween2 = this.tweens.add({
            targets: this.tankContainer,
            y: 230,
            ease: 'Linear',
            duration: 100,
            repeat: 0,
            yoyo: false
            //onComplete:
        });
    
    }

    setOpenCardPannel() {
		var graphics = this.make.graphics();
		graphics.fillStyle(0xffffff);
		graphics.fillRect(250,230, 1700, 700);//x,y,w,h
		var mask = new Phaser.Display.Masks.GeometryMask(this, graphics);
		this.tankContainer.setMask(mask);
		this.zone = this.add.zone(200,230, 1300, 700).setOrigin(0).setInteractive();
		//this.opneDeckCardPannel.add(zone);
		// this.zone.disableInteractive();
		this.zone.on('pointermove', function (pointer) {
			console.log("pointermove");
			if (pointer.isDown) {
				console.log("pointer.isDown");
				this.tankContainer.y += (pointer.velocity.y / 10);
				this.tankContainer.y = Phaser.Math.Clamp(this.tankContainer.y, this.tankContainer.y, 300);
                this.scrollBar.y -= (pointer.velocity.y / 10);
				this.scrollBar.y = Phaser.Math.Clamp(this.scrollBar.y, this.scrollBar.y, 300);

				if (this.tankContainer.y > 0) {
					//this.cardContainer.y = -77;
					this.callTween();
				}
                if (this.tankContainer.y > 300 || this.tankContainer.y < -344) {
                    this.callTween();
                    this.tankContainer.y = 230;
                }
                console.log("check");
				if (this.scrollBar.y < 274) {
                    this.scrollBar.y = 260;
                } else if (this.scrollBar.y > 850) {
                    this.scrollBar.y = 260;
                }
			}

		}, this);

        this.input.on('wheel', function (pointer, gameObjects, deltaY) {
			this.tankContainer.y += pointer.deltaY * 0.5;
			this.scrollBar.y -= pointer.deltaY * 0.5;
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

        
		// this.scrollBar.setInteractive().on("pointermove", function (pointer) {
		// 	if (pointer.isDown) {
        //         console.log("click scrollbar");
		// 		this.scrollBar.y -= (pointer.velocity.y / 10);
		// 		this.scrollBar.y = Phaser.Math.Clamp(this.scrollBar.y, this.scrollBar.y, 100);
        //         console.log(this.scrollBar.y);
		// 		// if (this.scrollBar.y < 274) {
        //         //     this.scrollBar.y = 260;
        //         // } else if (this.scrollBar.y > 850) {
        //         //     this.scrollBar.y = 260;
        //         // }
		// 	}
		// }, this)
	}

    update(){


    } 
    
}



