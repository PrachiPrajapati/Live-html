var recrutbtn;
var flag = "true"
var animflag;
var playername;
var opponentname;
var playerturn;
var playerturntext;
var playerimg1;
var playerimg2;
var playerimg3;
var homebtn;
var playerLife;
var playerBomb;
var playerShield;
var landSpeed = 0;

var opponentLife;
var opponentBomb;
var opponentShield;

var opponentimg1;
var opponentimg2;
var opponentimg3;

var player1arrow;
var player2arrow;
var player3arrow;
var greenract;
var opponent1arrow;
var opponent2arrow;
var opponent3arrow;

var player1progressract;
var player2progressract;
var player3progressract;

var opponent1progressract;
var opponent2progressract;
var opponent3progressract;

var player1progress = 100;
var player2progress = 100;
var player3progress = 100;

var opponent1progress = 100;
var opponent2progress = 100;
var opponent3progress = 100;

var player1progresstext;
var player2progresstext;
var player3progresstext;

var opponent1progresstext;
var opponent2progresstext;
var opponent3progresstext;

var fire, bombArtillery, bombArtilleryBlast;
var glowCard1, glowCard2, glowCard3, glowCard4, glowCard5, glowCard6, activeHighlight;
var initialImg = null;
var brokenImg = null;
var explodeImg = null;
var checkPlayerFlag;
var checkOponentFlag;
var fireStartX;
var fireStartY;
var fireEndX;
var fireEndY;
//var tween1,
var tween2;
var targetshakevalue;
var shield;
var shoot, explosion, powerup;
var checkFlag;
var sparkleImg;
var bomb;
var bombFlag;
var shieldOwnFlag, shieldOppFlag;
var lifeFlag;
var playerGlow, Opponentglow;

// For Bomb Animation


class GameScene extends Phaser.Scene {
    constructor() {
        super({ key: 'gameScene' });
        this.ownPlayer = new Map();
        this.oppPlayer = new Map();
        this.ownTankId = new Map();
        this.oppTankId = new Map();
        this.ownProgressObj = new Map();
        this.oppProgressObj = new Map();
        this.ownProgressTxt = new Map();
        this.oppProgressTxt = new Map();
        this.ownPower = new Map();
        this.oppPower = new Map();
        this.tankIdArray = [];
        this.tankOppIdArray = [];
        this.tweenArray = [];
        this.reqPowerArray = [];

        this.aPlayers = new Map();
        this.isDamageUsed = false;
        this.isShieldUsed = false;
        this.isLifeUsed = false;


    }
    init(data) {
        this.authorization = data.authorization;
        this.sTableId = data.sTableId;
        // console.log("this.sTableId", this.sTableId);
    }
    preload() {
        this.load.image('gamebg', "assets/images/gamebg.png");
        this.load.image('napolisimg', "assets/images/napolis-img.png");
        this.load.image('temp1', "assets/images/temp1.jpg");
        this.load.image('temp2', "assets/images/temp2.jpg");
        this.load.image('temp3', "assets/images/temp3.jpg");
        this.load.image('desertBg', "assets/images/Desert.png");
        this.load.image('grasslandBg', "assets/images/Grassland.png");
        this.load.image('snowBg', "assets/images/Snow.png");
        this.load.image('wallet', "assets/images/wallet.png");
        // this.load.image('settings',"assets/images/settings-icon.png");
        this.load.image('settingbtn', "assets/images/settings-icon.png");
        this.load.image('tank1', 'assets/images/tank1.png');
        this.load.image('tank2', 'assets/images/tank2.png');
        this.load.image('tank3', 'assets/images/tank3.png');
        this.load.image('whitearrow', 'assets/images/white-arrow.png');
        this.load.image('redarrow', 'assets/images/red-arrow.png');

        this.load.image('popupframe', "assets/images/popup-frame.png");
        // this.load.image('btnPlayAgain', "assets/images/btnplayAgain.png");
        this.load.image('btnHome', "assets/images/btnHome.png");
        this.load.image('loading', "assets/images/loading-bar.png");
        this.load.image('slideindicator', "assets/images/slide-indicator.png");
        this.load.image('soundicon', "assets/images/sound-icon.png");
        this.load.image('musicicon', "assets/images/music-icon.png");
        this.load.image('settingclose', "assets/images/settings-close.png");
        this.load.image('homeicon', "assets/images/homeicon.png");

        this.load.image('popuptank1', "assets/images/popup-tank1.png");
        this.load.image('popuptank2', "assets/images/popup-tank2.png");
        this.load.image('popuptank3', "assets/images/popup-tank3.png");

        this.load.image('lifebtn', "assets/images/life-btn.jpg");
        this.load.image('bombbtn', "assets/images/bomb-btn.png");
        this.load.image('shieldbtn', "assets/images/shield-btn.png");
        this.load.image('button', "assets/images/btn.png");

        this.load.image('glowcard', 'assets/images/glow-card.png');
        this.load.image('redglow', 'assets/images/red-glow.png');
        this.load.image('highlight', 'assets/images/active-highlight.png');
        this.load.image('fire', 'assets/images/fire.png');
        this.load.image('hit', 'assets/images/broken-0.png');
        this.load.image('broken', 'assets/images/broken.png');

        this.load.image('explode1', 'assets/images/explode-1.png');
        this.load.image('explode2', 'assets/images/explode-2.png');
        this.load.image('explode3', 'assets/images/explode-3.png');

        this.load.image('shield', 'assets/images/shield.png');
        this.load.image('sparkle', 'assets/images/sparkle.png');
        this.load.image('bomb', 'assets/images/bomb.png');

        // this.load.audio('shoot', 'assets/sounds/shoot.mp3');
        // this.load.audio('explosion', 'assets/sounds/explosion.mp3');
        // this.load.audio('powerup', 'assets/sounds/powerup.mp3');

        // this.load.image('damagetankoverlay','assets/images/damage-tank-overlay.png'); 
        // this.load.image('damagetankoverlayspakle','assets/images/damage-tank-overlay-sparkle.png');
        this.load.image('damagedtank', 'assets/images/damaged-tank.png');

        //For Healing
        this.load.image('healdrone', 'assets/images/droneheal.png');
        this.load.image('healflash', 'assets/images/healflash.png');

        //For Bomb Artillery
        this.load.image('bombArtillery', 'assets/images/bomb-artillery.png');
        this.load.image('bombArtilleryBlast', 'assets/images/bomb-artillery-blast.png');

        this.load.scenePlugin({
            key: 'rexuiplugin',
            url: 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexuiplugin.min.js',
            sceneKey: 'rexUI'
        });
    }
    create() {
        this.oSoundManager = new SoundManager(this);
        this.gamebg = this.add.image(960, 540, 'gamebg').setScale(1.25);
        this.gamebg.visible = false;

        this.napolisimg = this.add.image(960, 540, 'napolisimg').setScale(1.25);
        this.napolisimg.visible = false;
        this.napolisimg.name = "napolisimg";
        this.desertBg = this.add.image(960, 540, 'desertBg').setScale(1.25);
        this.desertBg.visible = false;
        this.desertBg.name = "desertBg";
        this.grasslandBg = this.add.image(960, 540, 'grasslandBg').setScale(1.25);
        this.grasslandBg.visible = false;
        this.grasslandBg.name = "temp2";
        this.snowBg = this.add.image(960, 540, 'snowBg').setScale(1.25);
        this.snowBg.visible = false;
        this.snowBg.name = "temp3";
        this.add.image(465, 150, 'wallet');
        this.add.image(1450, 150, 'wallet');
        this.add.image(950, 150, 'wallet').setScale(0.3, 1);
        this.add.image(950, 210, 'wallet').setScale(1.3, 1);
        this.add.image(1615, 150, 'settingbtn')
            .setInteractive({ useHandCursor: true })
            .setScale(1)
            .on('pointerdown', () => {
                rangeslidegrp.setVisible(true);
            });

        homebtn = this.add.image(300, 150, 'homeicon').setScale(1.4)
            .setInteractive({ useHandCursor: true })
            .on('pointerdown', () => {
                this.showLeaveGamePopup();
                // game.scene.stop('gameScene');
                //game.scene.start('playScene');
                //game.scene.launch("playScene");
            });

        activeHighlight = this.add.image(289, 261, 'highlight').setScale(0);
        this.ownShield = this.add.image(650, 300, 'shield').setScale(0);

        this.oppShield = this.add.image(650, 300, 'shield').setScale(0);
        var self = this;
        playerBomb = this.add.image(290, 260, 'bombbtn').setScale(1.1).setAlpha(0.7)
        playerBomb.name = "damage"


        playerShield = this.add.image(355, 260, 'shieldbtn').setScale(1.1).setAlpha(0.7)
        playerShield.name = "shield"


        playerLife = this.add.image(420, 260, 'lifebtn').setScale(1.1).setAlpha(0.7)
        playerLife.name = "healing"


        // playerBomb.input.enabled = false;
        // playerShield.input.enabled = false;
        // playerLife.input.enabled = false;
        // this.txtPowerTimer = this.add.text(500,250,"ROBERT FOX",{ fontSize: '24px', fill: '#fff', fontFamily: 'Normandia'}).setOrigin(0.5)
        opponentBomb = this.add.image(1510, 260, 'bombbtn').setScale(1.1).setAlpha(0.7);

        opponentShield = this.add.image(1575, 260, 'shieldbtn').setScale(1.1).setAlpha(0.7);
        opponentLife = this.add.image(1640, 260, 'lifebtn').setScale(1.1).setAlpha(0.7);

        this.oppPlayername = this.add.text(1450, 150, "ROBERT FOX", { fontSize: '24px', fill: '#fff', fontFamily: 'Normandia' }).setOrigin(0.5)
        this.ownPlayername = this.add.text(465, 150, "JONE COPPER", { fontSize: '24px', fill: '#fff', fontFamily: 'Normandia' }).setOrigin(0.5)
        this.playerturnTimerTxt = this.add.text(950, 150, "", { fontSize: '40px', fill: '#fff', fontFamily: 'GothamMedium' }).setOrigin(0.5)
        playerturntext = this.add.text(950, 210, "", { fontSize: '30px', fill: '#fff', fontFamily: 'GothamMedium' }).setOrigin(0.5);

        this.ownGlowCard = this.add.image(650, 400, 'glowcard').setScale(0);
        this.oppGlowCard = this.add.image(650, 400, 'redglow').setScale(0);

        // shoot = this.sound.add('shoot', { volume: 1 });
        // powerup = this.sound.add('powerup', { volume: 1 });
        // explosion = game.scene.scenes[5].sound.add('explosion', { volume: 1 });



        console.log("create 1111");
        playerimg1 = this.add.image(650, 400, 'tank1').setScale(0.25).setOrigin(0.5);

        playerimg1.visible = false;
        playerimg1.name = 'playerimg1';

        playerimg2 = this.add.image(400, 550, 'tank1').setScale(0.25).setOrigin(0.5);
        playerimg2.visible = false;

        playerimg3 = this.add.image(650, 750, 'tank1').setScale(0.25).setOrigin(0.5);
        playerimg3.visible = false;

        glowCard4 = this.add.image(1450, 400, 'redglow').setScale(0);
        opponentimg1 = this.add.image(1450, 400, 'tank1').setScale(0.6);

        glowCard5 = this.add.image(1200, 550, 'redglow').setScale(0);
        opponentimg2 = this.add.image(1200, 550, 'tank2').setScale(0.6);

        glowCard6 = this.add.image(1450, 750, 'redglow').setScale(0);
        opponentimg3 = this.add.image(1450, 750, 'tank3').setScale(0.6);
        this.oListOfPower = [playerBomb, playerLife, playerShield];
        this.oListOfOwnPlayer = [playerimg1, playerimg2, playerimg3];
        this.oListOfOppPlayer = [opponentimg1, opponentimg2, opponentimg3];

        for (let k = 0; k < this.oListOfPower.length; k++) {
            this.oListOfPower[k].disableInteractive();
        }


        for (let m = 0; m < this.oListOfOppPlayer.length; m++) {
            this.oListOfOppPlayer[m].disableInteractive();
            this.oListOfOppPlayer[m].visible = false;
            this.oListOfOppPlayer[m].flipX = true;
        }


        // this.oSocketConnection = new SocketHandler(this, this.authorization, this.sTableId, sRootUrl);
        oSocket.joinRoom(this.sTableId, this);
        fire = this.add.image(785, 415, 'fire').setScale(0).setOrigin(0.5);
        bombArtillery = this.add.image(960, 540, 'bombArtillery').setScale(0);
        bombArtilleryBlast = this.add.image(960, 540, 'bombArtilleryBlast').setScale(0).setAlpha(0);
        bomb = this.add.image(745, 390, 'bomb').setScale(0);

        greenract = this.add.graphics();
        greenract.fillStyle(0x356f0b, 1);
        //greenract.fillStyle(0xFF0000, 1);
        greenract.fillRoundedRect(570, 510, 162, 27, 10);
        greenract.fillRoundedRect(1370, 510, 162, 27, 10);
        greenract.fillRoundedRect(320, 670, 162, 27, 10);
        greenract.fillRoundedRect(1120, 670, 162, 27, 10);
        greenract.fillRoundedRect(570, 860, 162, 27, 10);
        greenract.fillRoundedRect(1370, 860, 162, 27, 10);
        greenract.visible = false;
        player1progressract = this.add.graphics();
        player1progressract.name = 'player1progressract';
        player1progressract.fillStyle(0xabb837, 1);
        player1progressract.fillRoundedRect(570, 510, player1progress * 1.62, 27, 10);/////
        player1progressract.visible = false;
        player2progressract = this.add.graphics();
        player2progressract.name = 'player2progressract';
        player2progressract.fillStyle(0xabb837, 1);
        player2progressract.fillRoundedRect(320, 670, player2progress * 1.62, 27, 10);
        player2progressract.visible = false;
        player3progressract = this.add.graphics();
        player3progressract.name = 'player3progressract'
        player3progressract.fillStyle(0xabb837, 1);
        player3progressract.fillRoundedRect(570, 860, player3progress * 1.62, 27, 10);
        player3progressract.visible = false;

        opponent1progressract = this.add.graphics();
        opponent1progressract.name = "opponent1progressract"
        opponent1progressract.fillStyle(0xabb837, 1);
        opponent1progressract.fillRoundedRect(1370, 510, opponent1progress * 1.62, 27, 10);
        opponent1progressract.visible = false;

        opponent2progressract = this.add.graphics();
        opponent2progressract.name = "opponent2progressract"
        opponent2progressract.fillStyle(0xabb837, 1);
        opponent2progressract.fillRoundedRect(1120, 670, opponent2progress * 1.62, 27, 10);
        opponent2progressract.visible = false;

        opponent3progressract = this.add.graphics();
        opponent3progressract.name = "opponent3progressract"
        opponent3progressract.fillStyle(0xabb837, 1);
        opponent3progressract.fillRoundedRect(1370, 860, opponent3progress * 1.62, 27, 10);
        opponent3progressract.visible = false;

        player1progresstext = this.add.text(650, 522, "HP: " + player1progress + "/100", { fontSize: '18px', fill: '#fff', fontFamily: 'GothamMedium' }).setOrigin(0.5);
        player1progresstext.visible = false;
        player2progresstext = this.add.text(400, 682, "HP: " + player2progress + "/100", { fontSize: '18px', fill: '#fff', fontFamily: 'GothamMedium' }).setOrigin(0.5);
        player2progresstext.visible = false;
        player3progresstext = this.add.text(650, 872, "HP: " + player3progress + "/100", { fontSize: '18px', fill: '#fff', fontFamily: 'GothamMedium' }).setOrigin(0.5);
        player3progresstext.visible = false;
        opponent1progresstext = this.add.text(1450, 522, "HP: " + opponent1progress + "/100", { fontSize: '18px', fill: '#fff', fontFamily: 'GothamMedium' }).setOrigin(0.5);
        opponent1progresstext.visible = false;
        opponent2progresstext = this.add.text(1200, 682, "HP: " + opponent2progress + "/100", { fontSize: '18px', fill: '#fff', fontFamily: 'GothamMedium' }).setOrigin(0.5);
        opponent2progresstext.visible = false;
        opponent3progresstext = this.add.text(1450, 872, "HP: " + opponent3progress + "/100", { fontSize: '18px', fill: '#fff', fontFamily: 'GothamMedium' }).setOrigin(0.5);
        opponent3progresstext.visible = false;
        this.ownProgTxtArray = [player1progresstext, player2progresstext, player3progresstext];
        this.ownProgRectArray = [player1progressract, player2progressract, player3progressract];
        this.oppProgTxtArray = [opponent1progresstext, opponent2progresstext, opponent3progresstext];
        this.oppProgRectArray = [opponent1progressract, opponent2progressract, opponent3progressract];
        initialImg = this.add.image(1200, 200, 'hit').setScale(1.25, 1.55);

        initialImg.visible = false;
        brokenImg = this.add.image(1450, 400, 'broken').setScale(1.25, 1.55);

        brokenImg.visible = false;
        explodeImg = this.add.image(1450, 400, 'explode1').setScale(1.25, 1.55);

        explodeImg.visible = false;
        sparkleImg = this.add.image(1450, 400, 'sparkle').setScale(1.1, 1.1);
        sparkleImg.visible = false;
        sparkleImg.visible = false;

        this.healDrone = this.add.image(1450, 400, 'healdrone').setScale(0);

        this.healFlash = this.add.image(1450, 400, 'healflash').setScale(0);

        this.leavePopupContainer = this.add.container(960, 540);

        this.leavePopupContainer.visible = false;
        this.leavePopup = this.add.image(0, 0, 'popupframe').setScale(1);
        //this.btnClose = this.add.image(0, 0, 'settingclose').setScale(1);

        // this.btnClose.setInteractive();

        this.leavePopupTxt = this.add.text(0, -60, "Leaving the Battlefield?", { fontSize: '38px', fill: '#fff', fontFamily: 'Normandia' }).setOrigin(0.5);
        this.yesButton = this.add.image(-100, 100, 'button').setScale(0.8, 1);
        this.leaveYesTxt = this.add.text(-100, 100, "Yes", { fontSize: '24px', fill: '#fff', fontFamily: 'Normandia' }).setOrigin(0.5);
        this.leaveYesTxt.setInteractive();
        this.noButton = this.add.image(100, 100, 'button').setScale(0.8, 1);
        this.leaveNoTxt = this.add.text(100, 100, "No", { fontSize: '24px', fill: '#fff', fontFamily: 'Normandia' }).setOrigin(0.5);
        this.leaveNoTxt.setInteractive();
        this.leavePopupContainer.add(this.leavePopup);
        this.leavePopupContainer.add(this.yesButton);
        this.leavePopupContainer.add(this.noButton);
        this.leavePopupContainer.add(this.leaveNoTxt);
        this.leavePopupContainer.add(this.leavePopupTxt);
        this.leavePopupContainer.add(this.leaveYesTxt);
        

        var rangeslidegrp = this.add.group();
        rangeslidegrp.create(960, 540, 'popupframe').setScale(0.8)

        var self = this;
        var soundicon = this.add.image(760, 470, 'soundicon');

        var audioslide = this.rexUI.add.slider({
            x: 1010,
            y: 470,
            width: 380,
            height: 24,
            orientation: 'x',

            track: this.rexUI.add.roundRectangle(0, 0, 0, 0, 10, 0x7B7B7B),
            indicator: this.add.image(0, 0, 'loading').setScale(0.7),
            thumb: this.add.image(0, 0, 'slideindicator'),

            input: 'click', // 'drag'|'click'

            valuechangeCallback: function (value, oldValue, audioslide) {
                audioslide.text = Math.round(Phaser.Math.Linear(0, 100, value));
                self.oSoundManager.setBackgroundVolume(audioslide.text / 100);
            },
        })
            .layout();
        audioslide.setValue(55, 0, 100);


        var musicicon = this.add.image(760, 580, 'musicicon');
        var musicslide = this.rexUI.add.slider({
            x: 1010,
            y: 580,
            width: 380,
            height: 24,
            orientation: 'x',

            track: this.rexUI.add.roundRectangle(0, 0, 0, 0, 10, 0x7B7B7B),

            indicator: this.add.image(0, 0, 'loading').setScale(0.7),
            thumb: this.add.image(0, 0, 'slideindicator'),

            input: 'click', // 'drag'|'click'

            valuechangeCallback: function (value, oldValue, musicslide) {
                musicslide.text = Math.round(Phaser.Math.Linear(0, 100, value));
            },
        })
            .layout();
        musicslide.setValue(25, 0, 100);


        closebtn = this.add.image(1240, 350, 'settingclose').setScale(0.65)
            .setOrigin(0.5)
            .setInteractive({ useHandCursor: true })
            .on('pointerdown', () => {
                rangeslidegrp.setVisible(false);
            });
        rangeslidegrp.add(closebtn);
        rangeslidegrp.add(soundicon);
        rangeslidegrp.add(audioslide);
        rangeslidegrp.add(musicicon);
        rangeslidegrp.add(musicslide);
        rangeslidegrp.setVisible(false);


        // win lose popup design
        this.resultContainer = this.add.container(960, 540);

        this.resultContainer.name = "resultContainer";
        this.resultContainer.visible = false;
        this.resultScreen = this.add.image(0, 0, 'popupframe').setScale(1.15);
        // this.btnPlayAgain = this.add.image(0, 170, 'btnPlayAgain').setScale(1.15);
        this.btnHome = this.add.image(0, 160, 'btnHome').setScale(1.15);
        // this.btnclose = this.add.image(0, 0, 'settingclose').setScale(1.15);
        this.resultTxt = this.add.text(0, -150, "Mission Completed", { fontSize: '50px', fill: '#fff', fontFamily: 'Normandia' }).setOrigin(0.5);
        this.congratesTxt = this.add.text(0, -50, "", { fontSize: '30px', fill: '#fff', fontFamily: 'Normandia' }).setOrigin(0.5);

        this.rewardTxt = this.add.text(0, 35, "", { fontSize: '30px', fill: '#fff', fontFamily: 'Normandia' }).setOrigin(0.5);

        this.resultContainer.add(this.resultScreen);
        this.resultContainer.add(this.btnHome);
        //this.resultContainer.add(this.btnclose);
        this.resultContainer.add(this.resultTxt);
        this.resultContainer.add(this.rewardTxt);
        this.resultContainer.add(this.congratesTxt);
        // var tankimg1 = this.add.image(960,490,'popuptank1').setScale(1.1);
        // var tankimg2 = this.add.image(820,590,'popuptank2').setScale(1);
        // var tankimg3 = this.add.image(1110,590,'popuptank3').setScale(1);

        // popup mission completed
        // var missioncompletetitle = this.add.text(960,320,"Mission Completed",{ fontSize:'50px', fill:'#fff',fontFamily: 'Normandia' }).setOrigin(0.5);
        // var salutetext = this.add.text(960,370,"Congrats, Soldier. We salute you",{ fontSize:'20px', fill:'#fff',fontFamily: 'GothamMedium' }).setOrigin(0.5);
        // var rewardtext = this.add.text(960,745,"Your Rewards: 1000 Meta Tokens",{ fontSize:'20px', fill:'#fff',fontFamily: 'Normandia' }).setOrigin(0.5);

        // popup mission failed
        // var missionfailtitle = this.add.text(960,320,"Mission Failed!",{ fontSize:'50px', fill:'#fff',fontFamily: 'Normandia' }).setOrigin(0.5);
        // var greettext = this.add.text(960,370,"Well get them next time, comrade",{ fontSize:'20px', fill:'#fff',fontFamily: 'GothamMedium' }).setOrigin(0.5);
        this.checkIsTabChanged();
        // this.add.image(600, 400, 'bombArtillery').setScale(1);
        // this.add.image(400, 400, 'bombArtilleryBlast').setScale(1);
        this.input.on('gameobjectdown', function (pointer, gameObject, event) {
            // console.log(gameObject, gameObject.name)
        }, this);
    }

    shake1() {
        var shaketween2 = this.tweens.add({
            targets: targetshakevalue,
            angle: -15,
            ease: 'Linear',
            duration: 50,
            repeat: 0,
            yoyo: false,
            onComplete: function () { shaketween2.remove(), game.scene.scenes[5].shake2() }
        });
    }
    shake2() {
        var shaketween3 = this.tweens.add({
            targets: targetshakevalue,
            angle: 5,
            ease: 'Linear',
            duration: 50,
            repeat: 0,
            yoyo: false,
            onComplete: function () { shaketween3.remove(), game.scene.scenes[5].shake3() }
        });
    }
    shake3() {
        var shaketween4 = this.tweens.add({
            targets: targetshakevalue,
            angle: 0,
            ease: 'Linear',
            duration: 50,
            repeat: 0,
            yoyo: false,
        });
    }



    update() {

        if (bombFlag == true) {
            activeHighlight.setPosition(289, 261);
            fire.setTexture('bomb');
        }

        else if (shieldOwnFlag == true) {
            activeHighlight.setPosition(355, 260);
        }

        else if (lifeFlag == true) {
            activeHighlight.setPosition(420, 260);
        }

        else if (bombFlag == false) {
            fire.setTexture('fire');
        }
    }
    setPlayerData(oData) {
        this.setBackground(oData.sRegion);
        this.sOwnPlayerID = oData.participant.iUserId;
        for (let k = 0; k < oData.aParticipant.length; k++) {
            if (oData.aParticipant[k].iUserId == this.sOwnPlayerID) {
                this.setOwnPlayerData(oData.aParticipant[k]);


            } else {
                this.setOppPlayerData(oData.aParticipant[k]);
            }
        }


    }
    setBackground(bgData) {
        switch (bgData) {
            case "napolisimg":
                this.napolisimg.visible = true;
                break;
            case "desertBg":
                this.desertBg.visible = true;
                break;
            case "grasslandBg":
                this.grasslandBg.visible = true;
                break;
            case "snowBg":
                this.snowBg.visible = true;
                break;


        }

    }
    setOwnPlayerData(ownPlayerData) {

        //for code resturctur................................
        for (let i = 0; i < ownPlayerData.aTank.length; i++) {
            var playerData = new Player(this, ownPlayerData.aTank[i]);
            this.aPlayers.set(ownPlayerData.aTank[i]._id, playerData);
            // console.log(playerData)
            ;
        }

        //for code resturctur................................



        this.ownPlayername.text = ownPlayerData.iUserId.substr(ownPlayerData.iUserId.length - 6);



        // console.log("My player Id", this.sOwnPlayerID);

        for (let j = 0; j < ownPlayerData.aTank.length; j++) {
            this.tankIdArray.push(ownPlayerData.aTank[j]);
        }
        console.log("222", this.tankIdArray);
        this.setOwnTankSprite();
    }
    setOppPlayerData(oppPlayerData) {
        this.oppPlayername.text = oppPlayerData.iUserId.substr(oppPlayerData.iUserId.length - 6);
        for (let i = 0; i < oppPlayerData.aTank.length; i++) {
            // this.addOppPlayerToList(oppPlayerData.aTank[i]._id,this.oListOfOppPlayer[i]);
        }
        for (let j = 0; j < oppPlayerData.aTank.length; j++) {
            this.tankOppIdArray.push(oppPlayerData.aTank[j]);
        }
        this.setOppTankSprite();
    }
    //for Own player tank sprite
    setOwnTankSprite() {
        this.load.image('nTank0', this.tankIdArray[0].sUrl + "?cacheblock=true");
        this.load.image('nTank1', this.tankIdArray[1].sUrl + "?cacheblock=true");
        this.load.image('nTank2', this.tankIdArray[2].sUrl + "?cacheblock=true");
        this.load.once('complete', this.showOwnTanks, this);
        this.load.start();
        for (let i = 0; i < this.tankIdArray.length; i++) {
            this.addOwnPlayerToList('nTank' + i, this.tankIdArray[i]);// add tank object key and tank data of backend
            this.addOWnTankIdToList(this.tankIdArray[i]._id, this.oListOfOwnPlayer[i]);// add tank id and tank object
            this.addOwnProgObjToList(this.tankIdArray[i]._id, this.ownProgRectArray[i]);// add ProgreObj  and tankId object
            let currentRect = this.getOwnProgObjFromList(this.tankIdArray[i]._id);

            let currentHp = this.tankIdArray[i].nCurrentHp;
            let totalHp = this.tankIdArray[i].nTotalHp;
            let rectWidth = currentHp / totalHp * 100;
            currentRect.width = rectWidth * 1.62;
            this.addOwnProgTxtToList(this.tankIdArray[i]._id, this.ownProgTxtArray[i]);// add ProgreTxt  and tankId object
            let currenttxt = this.getOwnProgTxtFromList(this.tankIdArray[i]._id);
            currenttxt.text = "HP: " + rectWidth + "/100";
        }

    }
    //for Opp player tank sprite
    setOppTankSprite() {
        // console.log("Tank 1: ", this.tankOppIdArray[0].sUrl, "\nTank 2: ", this.tankOppIdArray[1].sUrl, "\nTank 3: ", this.tankOppIdArray[2].sUrl);
        this.load.image('nOppTank0', this.tankOppIdArray[0].sUrl + "?cacheblock=true");
        this.load.image('nOppTank1', this.tankOppIdArray[1].sUrl + "?cacheblock=true");
        this.load.image('nOppTank2', this.tankOppIdArray[2].sUrl + "?cacheblock=true");
        this.load.once('complete', this.showOppTanks, this);
        this.load.start();
        for (let i = 0; i < this.tankOppIdArray.length; i++) {
            this.addOppPlayerToList('nOppTank' + i, this.tankOppIdArray[i]);
            this.addOppTankIdToList(this.tankOppIdArray[i]._id, this.oListOfOppPlayer[i]);// add tank id and tank object
            this.addOppProgObjToList(this.tankOppIdArray[i]._id, this.oppProgRectArray[i]);// add ProgreObj and tank object
            let currentRect = this.getOppProgObjFromList(this.tankOppIdArray[i]._id);
            let currentHp = this.tankOppIdArray[i].nCurrentHp;
            let totalHp = this.tankOppIdArray[i].nTotalHp;
            let rectWidth = currentHp / totalHp * 100;
            this.addOppProgTxtToList(this.tankOppIdArray[i]._id, this.oppProgTxtArray[i]);// add ProgreTxt  and tankId object
            let currenttxt = this.getOppProgTxtFromList(this.tankOppIdArray[i]._id);
            currenttxt.text = "HP: " + rectWidth + "/100";
            //console.log(this.tankOppIdArray[i]._id,);
        }

    }
    showOwnTanks() {
        greenract.visible = true;
        player1progressract.visible = true;
        player2progressract.visible = true;
        player3progressract.visible = true;
        opponent1progressract.visible = true;
        opponent2progressract.visible = true;
        opponent3progressract.visible = true;
        player1progresstext.visible = true
        player2progresstext.visible = true
        player3progresstext.visible = true
        opponent1progresstext.visible = true;
        opponent2progresstext.visible = true;
        opponent3progresstext.visible = true;

        playerimg1.setTexture('nTank0');
        playerimg1.visible = true;
        playerimg2.setTexture('nTank1');
        playerimg2.visible = true;
        playerimg2.disableInteractive();
        playerimg3.setTexture('nTank2')
        playerimg3.visible = true;
        playerimg3.disableInteractive();
        this.setClickableTank();
        this.setClickablePower();
    }
    showOppTanks() {
        opponentimg1.setTexture('nOppTank0').setScale(0.25).setOrigin(0.5);
        opponentimg1.visible = true;
        opponentimg1.disableInteractive();
        opponentimg2.setTexture('nOppTank1').setScale(0.25).setOrigin(0.5);
        opponentimg2.visible = true;
        opponentimg2.disableInteractive();
        opponentimg3.setTexture('nOppTank2').setScale(0.25).setOrigin(0.5);
        opponentimg3.visible = true;
        opponentimg3.disableInteractive();
        this.setOppTankClickableTank();
    }
    //for store tank data
    addOwnPlayerToList(tankKey, tankData) {
        this.ownPlayer.set(tankKey, tankData);
    }
    addOWnTankIdToList(tankId, tankObj) {
        this.ownTankId.set(tankId, tankObj);
    }
    getTankIdFromList(tankId) {
        return this.ownTankId.get(tankId);
    }
    addOppTankIdToList(tankId, tankObj) {
        this.oppTankId.set(tankId, tankObj);
    }
    getOppTankIdFromList(tankId) {
        return this.oppTankId.get(tankId);
    }
    //for get tank data
    getOwnPlayerFromList(tankKey) {
        return this.ownPlayer.get(tankKey);
    }
    //for store tank data
    addOppPlayerToList(tankKey, tankData) {
        this.oppPlayer.set(tankKey, tankData);
    }
    //for get tank data
    getOppPlayerFromList(tankKey) {
        return this.oppPlayer.get(tankKey);
    }
    //for save progress text obj
    addOwnProgObjToList(tankId, progObj) {
        this.ownProgressObj.set(tankId, progObj);
    }
    getOwnProgObjFromList(tankId) {
        return this.ownProgressObj.get(tankId);
    }
    //for save progress text obj
    addOppProgObjToList(tankId, progObj) {
        this.oppProgressObj.set(tankId, progObj);
    }
    getOppProgObjFromList(tankId) {
        return this.oppProgressObj.get(tankId);
    }
    // add progressText with ID
    addOwnProgTxtToList(tankId, progTxt) {
        this.ownProgressTxt.set(tankId, progTxt);
    }
    getOwnProgTxtFromList(tankId) {
        return this.ownProgressTxt.get(tankId);
    }
    addOppProgTxtToList(tankId, progTxt) {
        this.oppProgressTxt.set(tankId, progTxt);
    }
    getOppProgTxtFromList(tankId) {
        return this.oppProgressTxt.get(tankId);
    }
    // add Power with ID
    addOwnShieldToList(tankId, sPower) {
        this.ownPower.set(tankId, sPower);
    }
    getOwnShieldFromList(tankId) {
        return this.ownPower.get(tankId);
    }
    addOppPowerToList(tankId, sPower) {
        this.oppPower.set(tankId, sPower);
    }
    getOppPowerFromList(tankId) {
        return this.oppPower.get(tankId);
    }
    //for click activity on own player tanks
    setClickableTank() {
        // console.log("setClickableTank");

        playerimg1.setOrigin(0.5);
        playerimg1.on('pointerdown', () => {
            // console.log("Clicked...setClickableTank");
            checkPlayerFlag = 1;
            this.showGlowOnTank(playerimg1);
        })
        playerimg2.setOrigin(0.5);
        playerimg2.on('pointerdown', () => {
            checkPlayerFlag = 2;
            this.showGlowOnTank(playerimg2);

        })

        playerimg3.setOrigin(0.5)
        playerimg3.on('pointerdown', () => {
            checkPlayerFlag = 3;
            this.showGlowOnTank(playerimg3);
        })

    }
    setClickablePower() {
        var self = this;

        playerBomb.on('pointerdown', function () {
            self.reqPower(playerBomb);
            self.isDamageUsed = true;
            // console.log('playerBomb')
            shieldOwnFlag = false;
            lifeFlag = false;
            bombFlag = true;
            // console.log("1");
            activeHighlight.visible = true;
            activeHighlight.setScale(0.9, 0.85);
            self.disableAllPowerButtons();

        });

        playerShield.on('pointerdown', function () {
            self.reqPower(playerShield);
            self.isShieldUsed = true;
            self.ownShield.setAlpha(0.1);
            self.tankwithShield = self.ownSetectedTank.texture.key;
            // console.log('playerShield')
            bombFlag = false;
            lifeFlag = false;
            shieldOwnFlag = true;
            // console.log("2");
            activeHighlight.visible = true;
            activeHighlight.setScale(0.9, 0.85);
            self.disableAllPowerButtons();
            self.ownShield.setPosition(self.ownSetectedTank.x, self.ownSetectedTank.y);
            self.tweens.add({
                targets: self.ownShield,
                y: self.ownSetectedTank.y,
                alpha: 1,
                duration: 1000,
                ease: 'Power2',
                yoyo: false
            });

            // self.ownShield.setAlpha(0.1);
            self.oSoundManager.playSound(self.oSoundManager.shieldTank, false);
            // powerup.play();
            self.ownGlowCard.setScale(0);
            self.ownShield.setScale(1.15);
        });

        playerLife.on('pointerdown', function () {
            playerLife.setAlpha(0.7);
            self.reqPower(playerLife);
            activeHighlight.visible = true;
            activeHighlight.setScale(0.9, 0.85);
            self.disableAllPowerButtons();
            let progresstxt = self.getOwnProgTxtFromList(self.ownSelectedTankID);
            if (progresstxt._text == "HP: 100/100") return;
            self.isLifeUsed = true;
            bombFlag = false;
            //shieldFlag = false;
            lifeFlag = true;
            // console.log("3");
            activeHighlight.setScale(0.9, 0.85);
            if (checkPlayerFlag == 1) {
                player1progress = 100;
                player1progressract.fillRoundedRect(570, 510, player1progress * 1.62, 27, 10);
                player1progresstext.setText("HP: " + player1progress + "/100");
            }
            else if (checkPlayerFlag == 2) {
                player2progress = 100;
                player2progressract.fillRoundedRect(320, 670, player2progress * 1.62, 27, 10);
                player2progresstext.setText("HP: " + player2progress + "/100");
            }
            else if (checkPlayerFlag == 3) {
                player3progress = 100;
                player3progressract.fillRoundedRect(570, 860, player3progress * 1.62, 27, 10);
                player3progresstext.setText("HP: " + player3progress + "/100");
            }
            // console.log("setClickablePower>>>>>");
            self.setHealingAnimation(self.ownSetectedTank);
        });
    }

    disableAllPowerButtons() {
        playerShield.disableInteractive();
        playerBomb.disableInteractive();
        playerLife.disableInteractive();
    }
    //Healing AnimationG
    setHealingAnimation(selectedTank) {
        var self = this;
        if (lifeFlag == true) {
            // console.log("PlayerLife", selectedTank.x, selectedTank.y);

            self.healDrone.setPosition(selectedTank.x, selectedTank.y - 500).setScale(1.5);
            this.tween1 = self.tweens.add({
                targets: self.healDrone,
                y: selectedTank.y - 200,
                alpha: 1,
                duration: 2000,
                ease: 'Power2',
                yoyo: false,
                onComplete: function () {
                    self.oSoundManager.playSound(self.oSoundManager.healTank, false);
                    self.healFlash.setPosition(selectedTank.x, selectedTank.y - 25).setScale(1);
                    game.scene.scenes[5].tweens.add({
                        targets: self.healFlash,
                        alpha: 1,
                        yoyo: false,
                        ease: 'Power2',
                        duration: 1000,
                    });

                    setTimeout(() => {
                        self.healFlash.setAlpha(0);
                        self.healDrone.setAlpha(0);
                    }, 1200);
                    // self.setProgressBarForHeal(selectedTank);
                }
            });
        }
    }

    //Healing AnimationG
    setHealingAnimationForOpp(selectedTank, selectedTankId) {
        var self = this;
        let progresstxtOpp = this.getOppProgTxtFromList(selectedTankId);
        if (progresstxtOpp._text == "HP: 100/100") return;
        self.setProgressBarForHeal(selectedTank, selectedTankId);
        self.healDrone.setPosition(selectedTank.x, selectedTank.y - 500).setScale(1.5);
        this.tween1 = self.tweens.add({
            targets: self.healDrone,
            y: selectedTank.y - 200,
            alpha: 1,
            duration: 2000,
            ease: 'Power2',
            yoyo: false,
            onComplete: function () {
                self.oSoundManager.playSound(self.oSoundManager.healTank, false);
                self.healFlash.setPosition(selectedTank.x, selectedTank.y - 25).setScale(1);
                game.scene.scenes[5].tweens.add({
                    targets: self.healFlash,
                    alpha: 1,
                    yoyo: false,
                    ease: 'Power2',
                    duration: 1000,
                });
                setTimeout(() => {
                    self.healFlash.setAlpha(0);
                    self.healDrone.setAlpha(0);
                }, 1200);
                
            }
        });
        // }
    }

    setProgressBarForHeal(selectedTank, selectedTankId) {
        if (selectedTank.texture.key == 'nOppTank0') {
            opponent1progress = 100;
            opponent1progressract.fillRoundedRect(1370, 510, opponent1progress * 1.62, 27, 10);
            opponent1progresstext.setText("HP: " + opponent1progress + "/100");
        }
        else if (selectedTank.texture.key == 'nOppTank1') {
            opponent2progress = 100;
            opponent2progressract.fillRoundedRect(1120, 670, opponent2progress * 1.62, 27, 10);
            opponent2progresstext.setText("HP: " + opponent2progress + "/100");
        }
        else if (selectedTank.texture.key == 'nOppTank2') {
            opponent3progress = 100;
            opponent3progressract.fillRoundedRect(1370, 860, opponent3progress * 1.62, 27, 10);
            opponent3progresstext.setText("HP: " + opponent3progress + "/100");
        }
    }

    showGlowOnTank(selectedTank) {
        this.isOwnTankClicked = true;
        this.ownSetectedTank = selectedTank;
        //console.log("showGlowOnTank", this.ownSetectedTank.x, this.ownSetectedTank);
        this.ownSetectedTankKey = selectedTank.texture.key;
        this.ownSelectedTankID = this.getOwnPlayerFromList(this.ownSetectedTankKey)._id;
        this.ownGlowCard.setScale(1.25);
        this.ownGlowCard.x = selectedTank.x;
        this.ownGlowCard.y = selectedTank.y;
        var self = this;
        playerGlow = self.tweens.add({
            targets: self.ownGlowCard,
            scale: 1.05,
            ease: 'Linear',
            duration: 500,
            repeat: 0,
            yoyo: false,
            onComplete: function () {
                self.setOppTankClick();
            }
        });

        this.isPowerClicked = true;
        if (this.reqPowerArray.length == 0) {
            this.setPowerClick();
        } else {
            this.checkPower();
        }
        

        // playerBomb.setAlpha(1);
        // playerShield.setAlpha(1);
        // playerLife.setAlpha(1);
    }
    //for click activity on opp player tanks
    setOppTankClickableTank() {
        //.setInteractive({ useHandCursor: true })
        opponentimg1.setOrigin(0.5);
        opponentimg1.on('pointerdown', () => {
            // console.log("opponentimg1");
            checkOponentFlag = 1;
            this.clickOppTank(opponentimg1, checkOponentFlag);

        })

        // opponentimg2.setInteractive({ useHandCursor: true })
        opponentimg2.setOrigin(0.5)
        opponentimg2.on('pointerdown', () => {
            // console.log("opponentimg2");
            checkOponentFlag = 2;
            this.clickOppTank(opponentimg2, checkOponentFlag);
        })

        // opponentimg3.setInteractive({ useHandCursor: true })
        opponentimg3.setOrigin(0.5)
        opponentimg3.on('pointerdown', () => {
            // console.log("opponentimg2");
            checkOponentFlag = 3;
            this.clickOppTank(opponentimg3, checkOponentFlag);
        })
    }

    clickOppTank(selectedTank) {
        this.isClickable = false;
        this.setDisClickable(this.isClickable);
        this.oppSetectedTank = selectedTank.texture.key;
        this.oppGlowCard.x = selectedTank.x;
        this.oppGlowCard.y = selectedTank.y;
        this.oppGlowCard.setScale(1.25);
        var self = this;
        Opponentglow = game.scene.scenes[5].tweens.add({
            targets: self.oppGlowCard,
            scale: 1,
            ease: 'Linear',
            duration: 500,
            repeat: 0,
            yoyo: false
        });

        setTimeout(() => {
            this.oSoundManager.playSound(this.oSoundManager.shootTank, false);
            // shoot.play();


            playerBomb.disableInteractive();
            playerShield.disableInteractive();
            // playerLife.input.enabled = false;
            playerLife.disableInteractive();
            playerBomb.setAlpha(0.7);
            playerShield.setAlpha(0.7);
            playerLife.setAlpha(0.7);
            targetshakevalue = selectedTank;


            if (checkPlayerFlag == 1) {
                fire.angle = -30;
            }
            else if (checkPlayerFlag == 2) {
                fire.setPosition(fireStartX, fireStartY);
                fire.angle = -25;

            }
            else if (checkPlayerFlag == 3) {
                fire.angle = -45;
            }

            if (!bombFlag) {
                console.log("performing normal attack");
                fireStartX = this.ownSetectedTank.x + 25;
                fireStartY = this.ownSetectedTank.y - 25;
                fire.setPosition(fireStartX, fireStartY);
                fire.setScale(1);

                self.tween1 = this.tweens.add({
                    targets: fire,
                    props: {
                        x: { value: selectedTank.x, duration: 200, ease: 'Power1' },
                        y: { value: selectedTank.y, duration: 200, ease: 'Power1' }
                    },
                    delay: 0,
                    onComplete: function () {

                        initialImg.setScale(1.25, 1.55);
                        initialImg.x = selectedTank.x;
                        initialImg.y = selectedTank.y;
                        initialImg.visible = true;

                        brokenImg.setScale(1.25, 1.55);
                        brokenImg.x = selectedTank.x;
                        brokenImg.y = selectedTank.y;

                        explodeImg.setScale(1.25, 1.55);
                        explodeImg.x = selectedTank.x;
                        explodeImg.y = selectedTank.y;

                        sparkleImg.setScale(1.1, 1.1);
                        sparkleImg.x = selectedTank.x;
                        sparkleImg.y = selectedTank.y;

                        // explosion.play();
                        self.oSoundManager.playSound(self.oSoundManager.explosion, false);
                        game.scene.scenes[5].tweens.add({
                            targets: brokenImg,
                            alpha: 0.9,
                            yoyo: true,
                            duration: 1000,
                        });

                        game.scene.scenes[5].tweens.add({
                            targets: explodeImg,
                            alpha: 0.9,
                            yoyo: true,
                            y: selectedTank.y - 20,
                            duration: 1000,
                        });

                        game.scene.scenes[5].tweens.add({
                            targets: sparkleImg,
                            yoyo: true,
                            y: selectedTank.y - 20,
                            alpha: 0.9,
                            duration: 1000,
                        });

                        setTimeout(() => {
                            initialImg.setScale(0);
                            initialImg.visible = false;
                            brokenImg.visible = true;
                            brokenImg.setScale(1.4, 1.7);

                        }, 200);

                        setTimeout(() => {
                            brokenImg.setScale(0);
                            brokenImg.visible = false;
                            explodeImg.visible = true;
                        }, 450);

                        setTimeout(() => {
                            sparkleImg.visible = true;
                            explodeImg.setScale(1.4, 1.8);
                            sparkleImg.setScale(0.45);
                        }, 900);

                        setTimeout(() => {
                            explodeImg.setScale(0);
                            sparkleImg.setScale(0);
                            explodeImg.visible = false;
                            sparkleImg.visible = false;
                        }, 1200);

                        fire.setScale(0);



                        if (self.opptankwithShield == selectedTank.texture.key) {
                            self.oppShield.setScale(0);
                            shieldOppFlag = false;
                            lifeFlag = false;
                        }
                        activeHighlight.setScale(0);
                        self.ownGlowCard.setScale(0);
                        console.log("going inside shaketween1");
                        // self.findTankId();
                        var shaketween1 = game.scene.scenes[5].tweens.add({
                            targets: targetshakevalue,
                            props: {
                                x: { value: targetshakevalue.x + 10, duration: 200, ease: 'Power1' },
                            },
                            ease: 'Linear',
                            duration: 50,
                            repeat: 0,
                            yoyo: true,
                            onComplete: function () {
                                console.log('going to findTankId');
                                shaketween1.remove();
                                self.findTankId();
                            }
                        });
                        self.oppGlowCard.setScale(0);
                        self.ownGlowCard.setScale(0);
                    }
                });
            }
            else {
                console.log("performing bombArtillery attack");
                bombArtillery.setScale(1.5);

                bombArtilleryBlast.x = selectedTank.x;
                bombArtilleryBlast.y = selectedTank.y;
                // bombArtillery.setPosition(1200, 180);
                if (selectedTank.texture.key == "nOppTank0") {
                    bombArtillery.setPosition(1375,0);
                    landSpeed = 400;
                }
                else if (selectedTank.texture.key == "nOppTank1") {
                    bombArtillery.setPosition(975,0);
                    landSpeed = 395;
                }
                else if (selectedTank.texture.key == "nOppTank2") {
                    bombArtillery.setPosition(1175,0);
                    landSpeed = 390;
                }
                bombArtillery.setOrigin(0, 0.5);
                bombArtillery.setAngle((Math.atan2(selectedTank.y - bombArtillery.y, selectedTank.x - bombArtillery.x) * 180 / Math.PI) + 90);
                bombFlag = false;
                fire.setScale(0);

                self.grenadeBlast = this.tweens.add({
                    targets: bombArtillery,
                    props: {
                        x: { value: selectedTank.x, duration: landSpeed, ease: 'Power1' },
                        y: { value: selectedTank.y - 100, duration: landSpeed, ease: 'Power1' }
                    },
                    delay: 0,
                    onComplete: function () {
                        self.oSoundManager.playSound(self.oSoundManager.bombArtillery, false);
                        // console.log("BlastState: ", bombArtilleryBlast.visible);
                        bombArtilleryBlast.setScale(1.5, 0.8);
                        bombArtilleryBlast.x = selectedTank.x;
                        bombArtilleryBlast.y = selectedTank.y;
                        bombArtilleryBlast.visible = true;
                        explodeImg.setScale(1.25, 1.55);
                        explodeImg.x = selectedTank.x;
                        explodeImg.y = selectedTank.y;

                        sparkleImg.setScale(1.1, 1.1);
                        sparkleImg.x = selectedTank.x;
                        sparkleImg.y = selectedTank.y;

                        game.scene.scenes[5].tweens.add({
                            targets: bombArtilleryBlast,
                            alpha: 1,
                            yoyo: true,
                            duration: 1000,
                        });


                        game.scene.scenes[5].tweens.add({
                            targets: explodeImg,
                            alpha: 0.9,
                            yoyo: true,
                            y: targetshakevalue.y - 20,
                            duration: 1000,
                        });

                        game.scene.scenes[5].tweens.add({
                            targets: sparkleImg,
                            yoyo: true,
                            y: targetshakevalue.y - 20,
                            alpha: 0.9,
                            duration: 1000,
                        });

                        bombArtillery.setScale(0);
                        bombArtillery.visible = false;
                        setTimeout(() => {
                            bombArtilleryBlast.setScale(0);
                            bombArtilleryBlast.visible = false;
                            explodeImg.visible = true;
                            sparkleImg.visible = true;
                        }, 500);



                        setTimeout(() => {
                            explodeImg.setScale(1.4, 1.8);
                            sparkleImg.setScale(0.45);
                            self.oSoundManager.playSound(self.oSoundManager.explosion, false);
                        }, 600);

                        setTimeout(() => {
                            explodeImg.setScale(0);
                            sparkleImg.setScale(0);
                            explodeImg.visible = false;
                            sparkleImg.visible = false;

                        }, 1000);



                        activeHighlight.setScale(0);
                        self.ownGlowCard.setScale(0);
                        console.log("going inside shaketween1");
                        // self.findTankId();
                        var shaketween1 = game.scene.scenes[5].tweens.add({
                            targets: targetshakevalue,
                            props: {
                                x: { value: targetshakevalue.x + 10, duration: 200, ease: 'Power1' },
                            },
                            ease: 'Linear',
                            duration: 50,
                            repeat: 0,
                            yoyo: true,
                            onComplete: function () {
                                console.log('going to findTankId');
                                shaketween1.remove();
                                self.findTankId();
                            }
                        });
                        self.oppGlowCard.setScale(0);
                        self.ownGlowCard.setScale(0);
                    }
                });
            }
        }, 700);
    }
    setPlayerTurn(resPlayerTurn) {

        this.iUserTurn = resPlayerTurn.iUserId;
        this.ownGlowCard.setScale(0);
        this.playerturnTimerTxt.text = "";
        if (resPlayerTurn.iUserId == this.sOwnPlayerID) {
            this.isOwnPlayerTurn = true;
            this.isClickable = true;
            this.setDisClickable();
            playerturntext.text = "Your Turn";
            // console.log("our Player turn11111111111");
        }
        else {
            // console.log("opp Player turn");
            this.isOwnPlayerTurn = false;
            this.isClickable = false;
            this.setDisClickable();
            playerturntext.text = "Opponent Turn";
        }
        clearInterval(this.intervalID);
        this.setTimerForPlayer(resPlayerTurn.ttl);
        activeHighlight.visible = false;
    }
    setTimerForPlayer(time) {
        var totalTimer = 0;
        totalTimer = time / 1000;
        //totalTimer = Math.ceil(totalTimer);
        var self = this;
        self.intervalID = setInterval(function () {
            totalTimer--;

            if (totalTimer < 0) {
                clearInterval(self.intervalID);

                //self.removeResultScreen();
            } else {
                self.playerturnTimerTxt.text = totalTimer;
            }
        }, 1000);
    }


    showPowerTimer(resSelectPower) {
        this.startTimerPowerTimer(resSelectPower.ttl);
    }
    startTimerPowerTimer(time) {
        var totalTimer = 0;
        totalTimer = time / 1000;
        totalTimer = Math.ceil(totalTimer);
        var self = this;
        self.remainTime = totalTimer;
        self.intervalID = setInterval(function () {
            totalTimer--;
            self.remainTime = totalTimer;
            if (totalTimer <= 0) {
                clearInterval(self.intervalID);
            } else {
                self.txtPowerTimer.text = totalTimer;
            }
        }, 995);

    }
    // get tankId of both selected Tank..
    findTankId() {
        console.log("Find tankId");
        if (this.isOwnTankClicked) {
            this.iAttackerTankId = this.getOwnPlayerFromList(this.ownSetectedTankKey)._id;
            this.iOpponentTankId = this.getOppPlayerFromList(this.oppSetectedTank)._id;
            //  console.log("OwnID,OppId", this.iAttackerTankId, this.iOpponentTankId);
            console.log("Find tankId 11111");
            this.reqAttack(this.iAttackerTankId, this.iOpponentTankId);
            this.isOwnTankClicked = false;
        }
    }
    // sen request of attack tank Id..
    reqAttack(ownTankID, targetedTankID) {
        console.log("reqAttack", targetedTankID);
        socket.emit(this.sTableId, {
            sEventName: 'reqAttack',
            oData: { iAttackerTankId: ownTankID, iOpponentTankId: targetedTankID },
        }, (error, response) => {
            if (error) console.log('error :: ', error)
            console.log('response from server :: ', response)
            //this.oUserHand.updateHandCardData(response);
        });
    }
    setDisClickable() {
        // console.log("setDisClickable2111111111", this.isClickable);
        for (let l = 0; l < this.oListOfOppPlayer.length; l++) {
            if (!this.isClickable) {
                this.oListOfOppPlayer[l].disableInteractive();
            } else {
                this.oListOfOppPlayer[l].disableInteractive();
            }

        }
        if (this.oListOfOwnPlayer) {
            for (let n = 0; n < this.oListOfOwnPlayer.length; n++) {
                if (!this.isClickable) {
                    this.oListOfOwnPlayer[n].disableInteractive();
                } else {
                    this.oListOfOwnPlayer[n].setInteractive();
                }

            }
        }
    }
    setOppTankClick() {
        // console.log("setOppTankClick");
        for (let j = 0; j < this.oListOfOppPlayer.length; j++) {
            this.oListOfOppPlayer[j].setInteractive();
            //console.log("setOppTankClick", this.oListOfOppPlayer[j]);
        }
    }
    reqPower(sPower) {
        // console.log("reqPower");
        socket.emit(this.sTableId, {
            sEventName: 'reqPower',
            oData: { sPower: sPower.name, iTankId: this.ownSelectedTankID },
        }, (error, response) => {
            if (error) console.log('error :: ', error)
            // console.log('response from server :: ', response)
            this.updatePowerData(response);
        });

    }
    updatePowerData(powerData) {
        this.reqPowerArray = [];
        for (let n = 0; n < powerData.length; n++) {
            this.reqPowerArray.push(powerData[n]);
            if (this.reqPowerArray[n].eStatus == 'inUse') {
                if (this.oListOfPower[n].name == this.reqPowerArray[n].sPower) {
                    this.oListOfPower[n].setAlpha(0.7);
                    this.oListOfPower[n].input.enabled = false;
                }
            }
        }
    }
    setPlayerAttack(resAttack) {
        console.log('resattack: ', resAttack);
        clearInterval(this.intervalID);
        this.iAttackerId = resAttack.iAttackerId;
        if (this.sOwnPlayerID == resAttack.iOpponentId) {
            this.setOppAttack(resAttack.attackerTank, resAttack.opponentTank);
        } else {
            this.setOwnAttack(resAttack.attackerTank, resAttack.opponentTank);
        }
    }
    //for set all data from resArrack event when oppenent play
    setOppAttack(attackerData, targetData) {
        let attackTankId = attackerData._id;
        let targetTankId = targetData._id;
        var attackerTank = this.getOppTankIdFromList(attackTankId);
        var targetTank = this.getTankIdFromList(targetTankId);
        let currentProgOppTxt = this.getOppProgTxtFromList(attackTankId);
        let currentProgOwnTxt = this.getOwnProgTxtFromList(targetTankId);
        let currentProgOppObj = this.getOppProgObjFromList(attackTankId);
        let currentProgOwnObj = this.getOwnProgObjFromList(targetTankId);
        let currentHpOpp = attackerData.nCurrentHp / attackerData.nTotalHp * 100;
        let currentHpOppNumber = currentHpOpp.toFixed();
        let curHpOpp = "HP: " + currentHpOpp.toFixed() + "/100";
        let currentHpOwn = targetData.nCurrentHp / targetData.nTotalHp * 100;
        let currentHpOwnNumber = currentHpOwn.toFixed();
        let curHpOwn = "HP: " + currentHpOwn.toFixed() + "/100";
        this.startAnimForOpp(attackerTank, targetTank, currentProgOwnTxt, currentProgOppTxt, curHpOpp, curHpOwn, currentProgOppObj, currentProgOwnObj, currentHpOppNumber, currentHpOwnNumber);

    }
    //for set all data from resArrack event when own player play
    setOwnAttack(attackerData, targetData) {
        let attackTankId = attackerData._id;
        let targetTankId = targetData._id;
        var targetTank = this.getOppTankIdFromList(targetTankId);
        let currentProgOppTxt = this.getOppProgTxtFromList(targetTankId);
        let currentProgOwnTxt = this.getOwnProgTxtFromList(attackTankId);
        let currentProgOppObj = this.getOppProgObjFromList(targetTankId);
        let currentProgOwnObj = this.getOwnProgObjFromList(attackTankId);
        let currentHpOpp = targetData.nCurrentHp / targetData.nTotalHp * 100;
        let currentHpOppNumber = currentHpOpp.toFixed();
        let curHpOpp = "HP: " + currentHpOpp.toFixed() + "/100";
        let currentHpOwn = attackerData.nCurrentHp / attackerData.nTotalHp * 100;
        let currentHpOwnNumber = currentHpOwn.toFixed();
        let curHpOwn = "HP: " + currentHpOwn.toFixed() + "/100";
        currentProgOwnTxt.text = curHpOwn;
        //console.log("curHpOpp", curHpOpp);
        currentProgOppTxt.text = curHpOpp;
        this.setProgressBarForOwn(targetTank, currentProgOppObj, currentProgOwnObj, currentHpOppNumber, currentHpOwnNumber);
    }

    startAnimForOpp(attackerTank, targetTank, currentProgOwnTxt, currentProgOppTxt, currentHpOpp, currentHpOwn, currentProgOppObj, currentProgOwnObj, currentHpOppNumber, currentHpOwnNumber) {
        bombArtillery.setScale(0);
        bombArtillery.visible = true;
        var self = this;
        setTimeout(() => {
            self.oSoundManager.playSound(self.oSoundManager.shootTank, false);
            // shoot.play();

            targetshakevalue = targetTank;
            fireStartX = attackerTank.x - 25;
            fireStartY = attackerTank.y - 25;

            fire.setPosition(fireStartX, fireStartY);
            if (attackerTank.texture.key == 'nOppTank0') {
                if (targetTank.texture.key == 'nTank0') {
                    fire.angle = 155;
                }
                else if (targetTank.texture.key == 'nTank1') {
                    fire.angle = 140;
                }
                else if (targetTank.texture.key == 'nTank2') {
                    fire.angle = 135;
                }
            }
            else if (attackerTank.texture.key == 'nOppTank1') {
                if (targetTank.texture.key == 'nTank0') {
                    fire.angle = 180;
                }
                else if (targetTank.texture.key == 'nTank1') {
                    fire.angle = 155;
                }
                else if (targetTank.texture.key == 'nTank2') {
                    fire.angle = 125;
                }
            }
            else if (attackerTank.texture.key == 'nOppTank2') {
                if (targetTank.texture.key == 'nTank0') {
                    fire.angle = 180;
                }
                else if (targetTank.texture.key == 'nTank1') {
                    fire.angle = 170;
                }
                else if (targetTank.texture.key == 'nTank2') {
                    fire.angle = 155;
                }
            }
            if (!this.isOppDamage) {
                fire.setScale(1);

                self.tween1 = this.tweens.add({
                    targets: fire,
                    props: {
                        x: { value: targetTank.x, duration: 200, ease: 'Power1' },
                        y: { value: targetTank.y, duration: 200, ease: 'Power1' }
                    },
                    delay: 0,
                    onComplete: function () {

                        initialImg.x = targetTank.x;
                        initialImg.y = targetTank.y;
                        initialImg.visible = true;

                        brokenImg.setScale(1.25, 1.55);
                        brokenImg.x = targetTank.x;
                        brokenImg.y = targetTank.y;
                        // brokenImg.visible = true;


                        explodeImg.setScale(1.25, 1.55);
                        explodeImg.x = targetTank.x;
                        explodeImg.y = targetTank.y;
                        // explodeImg.visible = true;
                        sparkleImg.setScale(1.1, 1.1);
                        sparkleImg.x = targetTank.x;
                        sparkleImg.y = targetTank.y;
                        // sparkleImg.visible = true;
                        // explosion.play();
                        game.scene.scenes[5].tweens.add({
                            targets: brokenImg,
                            alpha: 0.9,
                            yoyo: true,
                            duration: 1000,
                        });

                        game.scene.scenes[5].tweens.add({
                            targets: explodeImg,
                            alpha: 0.9,
                            yoyo: true,
                            y: targetTank.y - 20,
                            duration: 1000,
                        });

                        game.scene.scenes[5].tweens.add({
                            targets: sparkleImg,
                            yoyo: true,
                            y: targetTank.y - 20,
                            alpha: 0.9,
                            duration: 1000,
                        });

                        setTimeout(() => {
                            initialImg.setScale(0);
                            initialImg.visible = false;
                            brokenImg.setScale(1.4, 1.7);
                            brokenImg.visible = true;
                        }, 200);

                        setTimeout(() => {
                            brokenImg.setScale(0);
                            brokenImg.visible = false;
                            explodeImg.visible = true;
                            sparkleImg.visible = true;
                        }, 450);

                        setTimeout(() => {
                            explodeImg.setScale(1.4, 1.8);
                            sparkleImg.setScale(0.45);
                            self.oSoundManager.playSound(self.oSoundManager.explosion, false);
                        }, 900);

                        setTimeout(() => {
                            explodeImg.setScale(0);
                            sparkleImg.setScale(0);
                            explodeImg.visible = false;
                            sparkleImg.visible = false;
                        }, 1200);

                        fire.setScale(0);
                        // console.log(targetTank.texture.key);
                        if (self.tankwithShield == targetTank.texture.key) {
                            // console.log("aaaaaa");
                            self.ownShield.setScale(0);
                            shieldOwnFlag = false;
                            lifeFlag = false;
                        }
                        var shaketween1 = game.scene.scenes[5].tweens.add({
                            targets: targetshakevalue,
                            props: {
                                x: { value: targetTank.x - 10, duration: 200, ease: 'Power1' },
                            },
                            ease: 'Linear',
                            duration: 50,
                            repeat: 0,
                            yoyo: true,
                            onComplete: function () {
                                shaketween1.remove();
                                currentProgOwnTxt.text = currentHpOwn;
                                currentProgOppTxt.text = currentHpOpp;
                                if (currentHpOwnNumber <= 0) {
                                    setTimeout(() => {
                                        explodeImg.setScale(1.1);
                                        sparkleImg.setScale(0.45);
                                        targetTank.setTexture("damagedtank");
                                        targetTank.flipX = true;
                                        targetTank.disableInteractive();
                                        targetTank.setScale(0.65);
                                        let ownIndex = self.oListOfOwnPlayer.indexOf(targetTank);
                                        self.oListOfOwnPlayer.splice(ownIndex, 1);
                                    }, 200);
                                    setTimeout(() => {
                                        explodeImg.setScale(0);
                                        sparkleImg.setScale(0);
                                    }, 400);
                                }
                                self.setProgressBar(currentProgOppObj, currentProgOwnObj, currentHpOppNumber, currentHpOwnNumber);
                            }
                        });
                    }
                });
            } else {
                self.isOppDamage = false;
                bombArtillery.setScale(1.5);
                bombArtilleryBlast.x = targetTank.x;
                bombArtilleryBlast.y = targetTank.y;
                // bombArtillery.setPosition(700, 180);
                if (targetTank.texture.key == "nTank0") {
                    bombArtillery.setPosition(740, 0);
                    landSpeed = 400;
                }
                else if (targetTank.texture.key == "nTank1") {
                    bombArtillery.setPosition(540, 0);
                    landSpeed = 395;
                }
                else if (targetTank.texture.key == "nTank2") {
                    bombArtillery.setPosition(940, 0);
                    landSpeed = 390;
                }
                bombArtillery.setOrigin(0, 0.5);
                bombArtillery.setAngle((Math.atan2(targetTank.y - bombArtillery.y, targetTank.x - bombArtillery.x) * 180 / Math.PI) + 90);
                self.tween1 = this.tweens.add({
                    targets: bombArtillery,
                    props: {
                        x: { value: targetTank.x, duration: landSpeed, ease: 'Power1' },
                        y: { value: targetTank.y, duration: landSpeed, ease: 'Power1' }
                    },
                    delay: 0,
                    onComplete: function () {
                        self.oSoundManager.playSound(self.oSoundManager.bombArtillery, false);
                        // console.log("BlastState: ", bombArtilleryBlast.visible);
                        bombArtilleryBlast.setScale(2, 1);
                        bombArtilleryBlast.x = targetTank.x;
                        bombArtilleryBlast.y = targetTank.y;

                        bombArtilleryBlast.visible = true;

                        explodeImg.setScale(1.25, 1.55);
                        explodeImg.x = targetTank.x;
                        explodeImg.y = targetTank.y;

                        sparkleImg.setScale(1.1, 1.1);
                        sparkleImg.x = targetTank.x;
                        sparkleImg.y = targetTank.y;

                        // explosion.play();
                        game.scene.scenes[5].tweens.add({
                            targets: bombArtilleryBlast,
                            alpha: 0.9,
                            yoyo: true,
                            duration: 1000,
                        });

                        game.scene.scenes[5].tweens.add({
                            targets: explodeImg,
                            alpha: 0.9,
                            yoyo: true,
                            y: targetTank.y - 20,
                            duration: 1000,
                        });

                        game.scene.scenes[5].tweens.add({
                            targets: sparkleImg,
                            yoyo: true,
                            y: targetTank.y - 20,
                            alpha: 0.9,
                            duration: 1000,
                        });

                        setTimeout(() => {
                            bombArtilleryBlast.setScale(0);
                            bombArtilleryBlast.visible = false;
                            explodeImg.visible = true;
                            sparkleImg.visible = true;
                        }, 500);
                        setTimeout(() => {
                            explodeImg.setScale(1.4, 1.8);
                            sparkleImg.setScale(0.45);
                            self.oSoundManager.playSound(self.oSoundManager.explosion, false);
                        }, 600);

                        setTimeout(() => {
                            explodeImg.setScale(0);
                            sparkleImg.setScale(0);
                            explodeImg.visible = false;
                            sparkleImg.visible = false;
                        }, 1000);


                        bombArtillery.setScale(0);
                        // console.log(targetTank.texture.key);
                        if (self.tankwithShield == targetTank.texture.key) {
                            self.ownShield.setScale(0);
                            shieldOwnFlag = false;
                            lifeFlag = false;
                        }
                        var shaketween1 = game.scene.scenes[5].tweens.add({
                            targets: targetshakevalue,
                            props: {
                                x: { value: targetTank.x - 10, duration: 200, ease: 'Power1' },
                            },
                            ease: 'Linear',
                            duration: 50,
                            repeat: 0,
                            yoyo: true,
                            onComplete: function () {
                                shaketween1.remove();
                                currentProgOwnTxt.text = currentHpOwn;
                                currentProgOppTxt.text = currentHpOpp;
                                if (currentHpOwnNumber <= 0) {
                                    setTimeout(() => {
                                        explodeImg.setScale(1.1);
                                        sparkleImg.setScale(0.45);
                                        targetTank.setTexture("damagedtank");
                                        targetTank.flipX = true;
                                        targetTank.disableInteractive();
                                        targetTank.setScale(0.65);
                                        let ownIndex = self.oListOfOwnPlayer.indexOf(targetTank);
                                        self.oListOfOwnPlayer.splice(ownIndex, 1);
                                    }, 200);
                                    setTimeout(() => {
                                        explodeImg.setScale(0);
                                        sparkleImg.setScale(0);
                                    }, 400);
                                }
                                self.setProgressBar(currentProgOppObj, currentProgOwnObj, currentHpOppNumber, currentHpOwnNumber);
                            }
                        });
                    }

                });
            }
        }, 700);
    }
    setResult(resDeclareResult) {
        // console.log("setResult");
        this.winnerId = resDeclareResult.iWinnerId;
        this.resultContainer.visible = true;
        if (this.winnerId == this.sOwnPlayerID) {
            this.resultTxt.text = "Mission Completed";
            this.congratesTxt.text = "Congrats, Soldier. We salute you.";
            this.rewardTxt.text = "Rewards Earned: " + resDeclareResult.nReward;
            //you have earn 50 reward points
            this.oSoundManager.playSound(this.oSoundManager.winSound, false);
        }
        else {
            this.resultTxt.text = "Mission Failed";
            this.congratesTxt.text = "We'll get them next time, Comrade.";
            this.rewardTxt.text = "Rewards Earned: " + resDeclareResult.nReward;
            this.oSoundManager.playSound(this.oSoundManager.loseSound, false);
        }
        this.btnHome.setInteractive({ useHandCursor: true })
            .setOrigin(0.5)
            .on('pointerdown', () => {
                console.log("resetGame: PointerDown Clicked");
                this.resetGame();
                game.scene.stop('gameScene');
                game.scene.start('homeScene');
            });
    }
    setProgressBar(currentProgOppObj, currentProgOwnObj, currentHpOpp, currentHpOwn) {
        // console.log("Entered Set Own Progress Bar", currentHpOwn, currentHpOpp);

        if (currentProgOwnObj.name == 'player1progressract') {
            var ownRectX = 570;
            var ownRectY = 510;
        } else if (currentProgOwnObj.name == 'player2progressract') {
            var ownRectX = 320;
            var ownRectY = 670;
        } else if (currentProgOwnObj.name == 'player3progressract') {
            var ownRectX = 570;
            var ownRectY = 860;
        }
        if (currentProgOppObj.name == 'opponent1progressract') {
            var oppRectX = 1370;
            var oppRectY = 510;
        } else if (currentProgOppObj.name == 'opponent2progressract') {
            var oppRectX = 1120;
            var oppRectY = 670;
        } else if (currentProgOppObj.name == 'opponent3progressract') {
            var oppRectX = 1370;
            var oppRectY = 860;
        }
        currentProgOwnObj.clear();
        // console.log("Own HP: ", currentHpOwn);
        // console.log("Opp HP: ", currentHpOpp);
        if (currentHpOwn == 0) {
            currentProgOwnObj.clear();
        }
        else {
            currentProgOwnObj.fillStyle(0xabb837, 1);
            currentProgOwnObj.fillRoundedRect(ownRectX, ownRectY, currentHpOwn * 1.62, 27, 10);
        }

        currentProgOppObj.clear();
        if (currentHpOpp == 0) {
            currentProgOppObj.clear();
        }
        else {
            currentProgOppObj.fillStyle(0xabb837, 1);
            currentProgOppObj.fillRoundedRect(oppRectX, oppRectY, currentHpOpp * 1.62, 27, 10);
        }
    }

    setProgressBarForOwn(targetTank, currentProgOppObj, currentProgOwnObj, currentHpOpp, currentHpOwn) {
        //  console.log("setProgressBarForOwn", currentHpOwn, currentHpOpp);

        if (currentProgOwnObj.name == 'player1progressract') {
            var ownRectX = 570;
            var ownRectY = 510;
        } else if (currentProgOwnObj.name == 'player2progressract') {
            var ownRectX = 320;
            var ownRectY = 670;
        } else if (currentProgOwnObj.name == 'player3progressract') {
            var ownRectX = 570;
            var ownRectY = 860;
        }
        if (currentProgOppObj.name == 'opponent1progressract') {
            var oppRectX = 1370;
            var oppRectY = 510;
        } else if (currentProgOppObj.name == 'opponent2progressract') {
            var oppRectX = 1120;
            var oppRectY = 670;
        } else if (currentProgOppObj.name == 'opponent3progressract') {
            var oppRectX = 1370;
            var oppRectY = 860;
        }
        currentProgOwnObj.clear();
        if (currentHpOwn == 0) {
            currentProgOwnObj.clear();
        }
        else {
            currentProgOwnObj.fillStyle(0xabb837, 1);
            currentProgOwnObj.fillRoundedRect(ownRectX, ownRectY, currentHpOwn * 1.62, 27, 10);
        }

        currentProgOppObj.clear();
        if (currentHpOpp == 0) {
            currentProgOppObj.clear();
            setTimeout(() => {
                explodeImg.setScale(1.1);
                sparkleImg.setScale(0.45);
                targetTank.setTexture("damagedtank");
                targetTank.flipX = false;
                targetTank.disableInteractive();
                targetTank.setScale(0.65);
                // console.log(this.oListOfOppPlayer);
                let index = this.oListOfOppPlayer.indexOf(targetTank);
                this.oListOfOppPlayer.splice(index, 1);
                //console.log(this.oListOfOppPlayer);
            }, 200);
            setTimeout(() => {
                explodeImg.setScale(0);
                sparkleImg.setScale(0);
            }, 400);

        }
        else {
            currentProgOppObj.fillStyle(0xabb837, 1);
            currentProgOppObj.fillRoundedRect(oppRectX, oppRectY, currentHpOpp * 1.62, 27, 10);
        }
    }
    resetGame() {
        console.log("resetGame");
      
        this.textures.remove('nTank0');
        this.textures.remove('nTank1');
        this.textures.remove('nTank2');
        this.textures.remove('nOppTank0');
        this.textures.remove('nOppTank1');
        this.textures.remove('nOppTank2');
        this.tankIdArray = [];
        this.tankOppIdArray = [];
        this.reqPowerArray = [];
        this.ownPlayer.clear();
        this.oppPlayer.clear();
        this.ownTankId.clear();
        this.oppTankId.clear();
        this.ownProgressObj.clear();
        this.oppProgressObj.clear();
        this.ownProgressTxt.clear();
        this.oppProgressTxt.clear();
        this.isPowerClicked = false;
        game.scene.scenes[3].allTank = new Map();
        game.scene.scenes[3].selectedTankArray = [];
        this.isDamageUsed = false;
        this.isShieldUsed = false;
        this.isLifeUsed = false;
    }
    checkIsTabChanged() {
        document.addEventListener("visibilitychange", (event) => {
            if (document.visibilityState == "visible") {
                // console.log("tab is active")
                fire.setScale(0);
                if (initialImg != null) {
                    initialImg.setScale(0);
                    // console.log("111111");
                }
                if (brokenImg != null) {
                    brokenImg.setScale(0);
                    // console.log("222222");
                } if (explodeImg != null) {
                    explodeImg.setScale(0);
                    // console.log("333333");
                } if (sparkleImg != null) {
                    sparkleImg.setScale(0);
                    // console.log("444444");
                }
                if (bombArtillery.visible) {
                    bombArtillery.visible = false;

                }

                if (this.iUserTurn !== this.iAttackerId && this.tween1) {
                    this.tween1.stop();
                }


            } else {

                // console.log("tab is inactive")
            }
        });
    }
    setPowerClick() {
        if (this.isPowerClicked) {
            this.isPowerClicked = false;
            for (let k = 0; k < this.oListOfPower.length; k++) {
                this.oListOfPower[k].setInteractive();
                this.oListOfPower[k].setAlpha(1);
            }
        } else {
            for (let k = 0; k < this.oListOfPower.length; k++) {
                this.oListOfPower[k].disableInteractive();
            }
        }

    }
    checkPower() {
        for (let k = 0; k < this.oListOfPower.length; k++) {
            if (this.reqPowerArray[k].eStatus == 'notUsed') {
                if (this.oListOfPower[k].name == this.reqPowerArray[k].sPower) {
                    this.oListOfPower[k].setAlpha(1);
                    this.oListOfPower[k].setInteractive();
                } else {
                    // console.log("checkPower", this.oListOfPower[k].name);
                    this.oListOfPower[k].setAlpha(0.7);
                    this.oListOfPower[k].disableInteractive();
                }

            }
        }
    }
    setOppPower(resPowerUp) {
        // console.log("resPowerUp", this.sOwnPlayerID !== resPowerUp.iUserId, resPowerUp.iUserId, this.sOwnPlayerID);
        if (this.sOwnPlayerID !== resPowerUp.iUserId) {
            // var a = this.getOppTankIdFromList(resPowerUp.iTankId);
            this.tankWithPower = this.getOppTankIdFromList(resPowerUp.iTankId);
            if (resPowerUp.sPower == 'shield') {
                this.opptankwithShield = this.tankWithPower;
                this.oppShield.setPosition(this.tankWithPower.x, this.tankWithPower.y);
                shieldOppFlag = true;
            }
            if (resPowerUp.sPower == 'healing') {
                this.setHealingAnimationForOpp(this.tankWithPower, resPowerUp.iTankId);
            }
            if (resPowerUp.sPower == 'damage') {
                // this.TankIdCheck(this.tankWithPower.texture.key);
                this.isOppDamage = true;
                // damage.setPosition(this.tankWithPower.x,this.tankWithPower.y);//set damage object starting position
            }
        }
    }
    // TankIdCheck(tankInfo) {
        
    // }
    showLeaveGamePopup() {
        // console.log("showLeaveGamePopup");
        this.leavePopupContainer.visible = true;
        this.leaveNoTxt.on('pointerdown', () => {
            this.hideLeaveGamePopup();
        });
        this.leaveYesTxt.on('pointerdown', () => {
            this.reqLeave();
        }, this);
    }
    hideLeaveGamePopup() {
        this.leavePopupContainer.visible = false;
    }
    reqLeave() {
        // console.log("reqAttack", targetedTankID);
       
        socket.emit(this.sTableId, {
            sEventName: 'reqLeave',
        }, (error, response) => {
            if (error) console.log('error :: ', error)
            // console.log('response from server :: ', response);
            clearInterval(this.intervalID);
            socket.off(this.sTableId);
            this.resetGame();
            game.scene.stop('gameScene');
            game.scene.start('playScene');
            //game.scene.launch("playScene");
        });
    }
}

