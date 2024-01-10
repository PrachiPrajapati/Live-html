const COLOR_PRIMARY = 0x4e342e;
const COLOR_LIGHT = 0x937d2e;
const COLOR_DARK = 0x260e04;

var commonwhiteract1;
var commonwhiteract2;
var commonwhiteract3;
var commonwhiteract4;

var strangthract;
var attckpowerract;
var damageract;
var defenceract;

var strangthvalue;
var attckvalue;
var damagevalue;
var defencevalue;

var selectedtank1;
var selectedtank2;
var selectedtank3;

var troop1img

class TroopScene extends Phaser.Scene
{
    constructor()
    {
        super({key:'troopScene'});
    }
    preload(){
        
        this.load.image('troopsframe',"assets/images/troopsframe.png");
        this.load.image('temp11',"assets/images/temp1.jpg");
        this.load.image('temp22',"assets/images/temp2.jpg");
        this.load.image('temp33',"assets/images/temp3.jpg");
        this.load.image('allbtn','assets/images/all-btn.png');
        this.load.image('common-btn','assets/images/common-btn.png');
        this.load.image('legendary-btn','assets/images/legendary-btn.png');
        this.load.image('rare-btn','assets/images/rare-btn.png');
        this.load.image('commontankbg','assets/images/commontankbg.png');
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

        this.load.image('plus-img',"assets/images/plus-img.png");
        this.load.image('privew-frame',"assets/images/privew-frame.png");
        this.load.image('stats',"assets/images/stats.png");
        this.load.image('selectbtnimg',"assets/images/select-btn.png");
        this.load.image('backtohome',"assets/images/back-to-home-btn.png");
        this.load.image('selectteam',"assets/images/select-team-btn.png");
        this.load.image('troopsbg',"assets/images/troops-bg.png");
        this.load.image('scrollframe',"assets/images/scroll-frame.png");
        this.load.image('mytroopsbtn',"assets/images/mytroops-btn.png");

        this.load.scenePlugin({
            key: 'rexuiplugin',
            url: 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexuiplugin.min.js',
            sceneKey: 'rexUI'
        });
         
    }
    create(){
        this.add.image(960,540,'troopsframe');
        // this.add.image(940,270,'plus-img');
        // this.add.image(1280,270,'plus-img');
        // this.add.image(1625,270,'plus-img');
        this.add.image(345,450,'privew-frame');
        // this.add.image(345,830,'stats');

        var priviewimg = this.add.image(345,450,'tank1');
        
        var troopsbg = this.add.image(1270,780,'troopsbg').setScale(1.5)
        var scrollframe = this.add.image(1800,782,'scrollframe').setScale(1,1.43)

        var mytroopsbtn = this.add.image(1270,510,'mytroopsbtn').setScale(1.2);

        var strengthlabel = this.add.text(260,788,"STRENGTH",{ fontSize: '20px', fill: '#fff', fontFamily: 'Normandia'}).setOrigin(1);
        var attacklabel = this.add.text(260,818,"ATTACK POWER",{ fontSize: '20px', fill: '#fff', fontFamily: 'Normandia'}).setOrigin(1);
        var damagelabel = this.add.text(260,848,"DAMAGE",{ fontSize: '20px', fill: '#fff', fontFamily: 'Normandia'}).setOrigin(1);
        var defencelabel = this.add.text(260,878,"DEFENSE",{ fontSize: '20px', fill: '#fff', fontFamily: 'Normandia'}).setOrigin(1);
        
        commonwhiteract1 = this.add.rectangle(430, 780, 300, 15, 0xffffff);
        commonwhiteract2 = this.add.rectangle(430, 810, 300, 15, 0xffffff);
        commonwhiteract3 = this.add.rectangle(430, 840, 300, 15, 0xffffff);
        commonwhiteract4 = this.add.rectangle(430, 870, 300, 15, 0xffffff);

        strangthvalue = 70;
        attckvalue = 60;
        damagevalue = 80;
        defencevalue = 65;


        strangthract = this.add.rectangle(280, 772, 3*strangthvalue , 15, 0xa1cf00).setOrigin(0);
        attckpowerract = this.add.rectangle(280, 802, 3*attckvalue, 15, 0xa1cf00).setOrigin(0);
        damageract = this.add.rectangle(280, 832, 3*damagevalue, 15, 0xa1cf00).setOrigin(0);
        defenceract = this.add.rectangle(280, 862, 3*defencevalue, 15, 0xa1cf00).setOrigin(0);

        selectedtank1 = this.add.image(940,270,'plus-img')
        selectedtank2 = this.add.image(1280,270,'plus-img')
        selectedtank3 = this.add.image(1625,270,'plus-img')


        var selecttoropbtn = this.add.image(350,960,'selectbtnimg')
                    .setInteractive({ useHandCursor: true })
                    .setScale(0.7)
                    .on('pointerdown', () => { 
                        selectedtank1.setTexture(troop1img);
                        selectedtank1.setScale(0.55);
                    } );

        var backtohome = this.add.image(170, 40, 'backtohome')
                        .setInteractive({ useHandCursor: true })
                        .setScale(1)
                        .on('pointerdown', () => { 
                            game.scene.stop('troopScene');
                            game.scene.start('playScene');
                        } );
        var selectteambtn = this.add.image(1730, 40, 'selectteam')
                        .setInteractive({ useHandCursor: true })
                        .setScale(1.4)
                        .on('pointerdown', () => { 
                            game.scene.stop('troopScene');
                            game.scene.start('gameScene');
                        } );

        selecttoropbtn.setAlpha(0.5);
        selecttoropbtn.input.enabled = false;

        var scrollablePanel = this.rexUI.add.scrollablePanel({
            x: 1270,
            y: 780,
            width: 1100,
            height: 430,

            scrollMode: 0,

            background: this.rexUI.add.roundRectangle(0, 0, 2, 2, 10),

            panel: {
                child: createGrid(this),
                mask: {
                    mask: true,
                    padding: 1,
                }
            },

            slider: {
                track: this.rexUI.add.roundRectangle(0, 0, 20, 10, 10),
                thumb: this.rexUI.add.roundRectangle(0, 0, 16, 60, 3, COLOR_LIGHT),
                // position: 'left'
            },

            mouseWheelScroller: {
                focus: false,
                speed: 0.1
            },

            space: {
                left: 10,
                right: 10,
                top: 10,
                bottom: 10,

                panel: 10,
            }
        })
        .layout()

        var print = this.add.text(0, 0, '');

        scrollablePanel
        .setChildrenInteractive()
        .on('child.click', function (child, pointer, event) {
            // print.text += `Click ${child.text}\n`;
            priviewimg.setTexture('tank'+`${child.text}`);
            troop1img= "tank"+ `${child.text}`;
            selecttoropbtn.setAlpha(1);
            selecttoropbtn.input.enabled = true;
        })
        .on('child.pressstart', function (child, pointer, event) {
            print.text += `Press ${child.text}\n`;
        })

    }

    update(){

    } 
    
}
var createGrid = function (scene) {
    // Create table body
    var sizer = scene.rexUI.add.fixWidthSizer({
        space: {
            left: 3,
            right: 3,
            top: 3,
            bottom: 3,
            item: 8,
            line: 8,
        },
    })
        .addBackground(scene.rexUI.add.roundRectangle(0, 0, 10, 10, 0))

    for (var i = 1; i <= 30; i++) {
        sizer.add(scene.rexUI.add.label({
            width: 200, height: 200,

            background: scene.add.image(0, 0,'commontankbg'),
            icon: scene.add.image(0,0,'tank'+i).setScale(0.4).setInteractive({ useHandCursor: true }),

            text: scene.add.text(0, 0, `${i}`, {
                fontSize: 0
            }),
            align: 'center',
            space: {
                left: 10,
                right: 10,
                top: 10,
                bottom: 10,
            }
        }));
    }
    return sizer;
}

