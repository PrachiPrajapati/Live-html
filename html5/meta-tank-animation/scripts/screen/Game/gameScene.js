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

var opponentLife;
var opponentBomb;
var opponentShield;

var opponentimg1;
var opponentimg2;
var opponentimg3;

var player1arrow;
var player2arrow;
var player3arrow;

var opponent1arrow;
var opponent2arrow;
var opponent3arrow;

var player1progressract;
var player2progressract;
var player3progressract;

var player1progress = 50;
var player2progress = 60;
var player3progress = 70;

var player1progresstext;
var player2progresstext;
var player3progresstext;

var oponent1progresstext;
var oponent2progresstext;
var oponent3progresstext;

var fire;
var glowCard1,glowCard2,glowCard3,glowCard4,glowCard5,glowCard6, activeHighlight;
var brokenImg, explodeImg;
var checkPlayerFlag;
var checkOponentFlag;
var fireStartX;
var fireStartY;
var fireEndX;
var fireEndY;
var tween1,tween2;
var targetshakevalue;
var shield;
var shoot,explosion,powerup;
var checkFlag;
var sparkleImg;
var bomb;
var bombFlag;
var shieldFlag;
var lifeFlag;
var playerGlow,Opponentglow;

class GameScene extends Phaser.Scene
{
    constructor()
    {
        super({key:'gameScene'});
    }
    preload(){
        
        
        this.load.image('gamebg',"assets/images/gamebg.png");
        this.load.image('wallet',"assets/images/wallet.png");
        // this.load.image('settings',"assets/images/settings-icon.png");
        this.load.image('settingbtn',"assets/images/settings-icon.png");
        this.load.image('tank1','assets/images/tank1.png');
        this.load.image('tank2','assets/images/tank2.png');
        this.load.image('tank3','assets/images/tank3.png');
        this.load.image('whitearrow','assets/images/white-arrow.png');
        this.load.image('redarrow','assets/images/red-arrow.png');

        this.load.image('popupframe',"assets/images/popup-frame.png");
        this.load.image('loading',"assets/images/loading-bar.png");
        this.load.image('slideindicator',"assets/images/slide-indicator.png");
        this.load.image('soundicon',"assets/images/sound-icon.png");
        this.load.image('musicicon',"assets/images/music-icon.png");
        this.load.image('settingclose',"assets/images/settings-close.png");
        this.load.image('homeicon',"assets/images/homeicon.png");

        this.load.image('popuptank1',"assets/images/popup-tank1.png");
        this.load.image('popuptank2',"assets/images/popup-tank2.png");
        this.load.image('popuptank3',"assets/images/popup-tank3.png");

        this.load.image('lifebtn',"assets/images/life-btn.jpg");
        this.load.image('bombbtn',"assets/images/bomb-btn.jpg");
        this.load.image('shieldbtn',"assets/images/shield-btn.jpg");

        this.load.image('glowcard', 'assets/images/glow-card.png');
        this.load.image('redglow', 'assets/images/red-glow.png');
        this.load.image('highlight', 'assets/images/active-highlight.png');
        this.load.image('fire', 'assets/images/fire.png');
        this.load.image('broken', 'assets/images/broken.png');

        this.load.image('explode1', 'assets/images/explode-1.png');
        this.load.image('explode2', 'assets/images/explode-2.png');
        this.load.image('explode3', 'assets/images/explode-3.png');

        this.load.image('shield', 'assets/images/shield.png');
        this.load.image('sparkle', 'assets/images/sparkle.png');
        this.load.image('bomb', 'assets/images/bomb.png');

        this.load.audio('shoot', 'assets/sounds/shoot.mp3');
        this.load.audio('explosion', 'assets/sounds/explosion.mp3');
        this.load.audio('powerup', 'assets/sounds/powerup.mp3');

         
        this.load.scenePlugin({
            key: 'rexuiplugin',
            url: 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexuiplugin.min.js',
            sceneKey: 'rexUI'
        });     
    }
    create(){
        this.add.image(960,540,'gamebg').setScale(1.25);
        this.add.image(465,150,'wallet');
        this.add.image(1450,150,'wallet');
        this.add.image(950,150,'wallet').setScale(0.3,1);
        this.add.image(950,210,'wallet').setScale(1.3,1);
        // this.add.image(1630,150,'settings');
        this.add.image(1615,150,'settingbtn')
        .setInteractive({ useHandCursor: true })
        .setScale(1)
        .on('pointerdown', () => { 
            rangeslidegrp.setVisible(true);
        });

        homebtn = this.add.image(300,150,'homeicon').setScale(1.4)
            .setInteractive({ useHandCursor: true })
            .on('pointerdown', () => { 
                game.scene.stop('gameScene');
                game.scene.start('playScene');
        });;

        activeHighlight = this.add.image(289,261, 'highlight').setScale(0);
        shield = this.add.image(650,300,'shield').setScale(0);
        playerBomb = this.add.image(290,260,'bombbtn').setScale(1.1).setAlpha(0.7)
        .setInteractive({ useHandCursor: true })
        .on('pointerdown', () => { 
            shieldFlag = false;   
            lifeFlag = false;
            bombFlag = true;     
            console.log("1");    
            activeHighlight.setScale(0.9,0.85);
        });

        playerShield = this.add.image(355,260,'shieldbtn').setScale(1.1).setAlpha(0.7)
        .setInteractive({ useHandCursor: true })
        .on('pointerdown', () => { 
            bombFlag = false;      
            lifeFlag = false;
            shieldFlag = true;
            console.log("2");    
            activeHighlight.setScale(0.9,0.85);
            if(checkPlayerFlag == 1){
                shield.setPosition(650,370);
                this.tweens.add({
                    targets: shield,
                    y: 410,
                    alpha:1,
                    duration: 1000,
                    ease: 'Power2',
                    yoyo: false
                });
                
            }
            else if(checkPlayerFlag == 2){
                shield.setPosition(400,520);
                this.tweens.add({
                    targets: shield,
                    y: 560,
                    alpha:1,
                    duration: 1000,
                    ease: 'Power2',
                    yoyo: false
                });
               
            }
            else if(checkPlayerFlag == 3){
                shield.setPosition(650,720);
                this.tweens.add({
                    targets: shield,
                    y: 760,
                    alpha:1,
                    duration: 1000,
                    ease: 'Power2',
                    yoyo: false
                });
                console.log("check");
            }
            
            shield.setAlpha(0.1);
            powerup.play();
            glowCard1.setScale(0);
            glowCard2.setScale(0);
            glowCard3.setScale(0);
            shield.setScale(1.15);
          
        });
        
        playerLife = this.add.image(420,260,'lifebtn').setScale(1.1).setAlpha(0.7)
        .setInteractive({ useHandCursor: true })
        .on('pointerdown', () => { 
            bombFlag = false;            
            shieldFlag = false;
            lifeFlag = true;
            console.log("3");    
            activeHighlight.setScale(0.9,0.85);
            if(checkPlayerFlag == 1){
                player1progress = 100;
                player1progressract.fillRoundedRect(570, 510, player1progress * 1.62, 27, 10);
                player1progresstext.setText("HP: " + player1progress + "/100");
            }
            else if(checkPlayerFlag == 2){
                player2progress = 50;
                player2progressract.fillRoundedRect(320, 670, player2progress * 1.62, 27, 10);
                player2progresstext.setText("HP: " + player2progress + "/100");
            }
            else if(checkPlayerFlag == 3){
                player3progress = 70;
                player3progressract.fillRoundedRect(570,860, player3progress * 1.62, 27, 10);
                player3progresstext.setText("HP: " + player3progress + "/100");
            }
           
        });

        playerBomb.input.enabled = false;
        playerShield.input.enabled = false;
        playerLife.input.enabled = false;

        opponentBomb = this.add.image(1510,260,'bombbtn').setScale(1.1).setAlpha(0.7);
        opponentShield = this.add.image(1575,260,'shieldbtn').setScale(1.1).setAlpha(0.7);
        opponentLife = this.add.image(1640,260,'lifebtn').setScale(1.1).setAlpha(0.7);

        opponentname = this.add.text(1450,150,"ROBERT FOX",{ fontSize: '24px', fill: '#fff', fontFamily: 'Normandia'}).setOrigin(0.5)
        playername = this.add.text(465,150,"JONE COPPER",{ fontSize: '24px', fill: '#fff', fontFamily: 'Normandia'}).setOrigin(0.5)
        playerturn = this.add.text(950,150,"1",{ fontSize: '40px', fill: '#fff', fontFamily: 'GothamMedium'}).setOrigin(0.5)
        playerturntext = this.add.text(950,210,"Player Turn",{ fontSize: '30px', fill: '#fff', fontFamily: 'GothamMedium'}).setOrigin(0.5);

        glowCard1 = this.add.image(650, 400, 'glowcard').setScale(0);

        shoot = this.sound.add('shoot', {volume:1});
        powerup = this.sound.add('powerup', {volume:1});
        explosion = game.scene.scenes[0].sound.add('explosion', {volume:1});

        playerimg1 = this.add.image(650,400,'tank1').setScale(0.6)
        .setInteractive({ useHandCursor: true })
        .setOrigin(0.5)
        .on('pointerdown', () => {
            checkPlayerFlag = 1;
            glowCard1.setScale(1.25);
            glowCard2.setScale(0);
            glowCard3.setScale(0);
            checkFlag = 1; 

            playerGlow = game.scene.scenes[0].tweens.add({
                targets :glowCard1,
                scale: 1.05,
                ease: 'Linear',
                duration: 500,
                repeat: 0,
                yoyo: false
            });
            
        })

        glowCard2 = this.add.image(400, 550, 'glowcard').setScale(0);
        playerimg2 = this.add.image(400,550,'tank2').setScale(0.6)
        .setInteractive({ useHandCursor: true })
        .setOrigin(0.5)
        .on('pointerdown', () => {
            checkPlayerFlag = 2;
            glowCard2.setScale(1.25);
            glowCard1.setScale(0);
            glowCard3.setScale(0);
            checkFlag = 1;

            playerGlow = game.scene.scenes[0].tweens.add({
                targets :glowCard2,
                scale: 1.05,
                ease: 'Linear',
                duration: 500,
                repeat: 0,
                yoyo: false
            });
        })

        glowCard3 = this.add.image(650, 750, 'glowcard').setScale(0);
        playerimg3 = this.add.image(650,750,'tank3').setScale(0.6)
        .setInteractive({ useHandCursor: true })
        .setOrigin(0.5)
        .on('pointerdown', () => {
            checkPlayerFlag = 3;
            glowCard3.setScale(1.25);
            glowCard1.setScale(0);
            glowCard2.setScale(0);
            checkFlag = 1;   
            
            playerGlow = game.scene.scenes[0].tweens.add({
                targets :glowCard3,
                scale: 1.05,
                ease: 'Linear',
                duration: 500,
                repeat: 0,
                yoyo: false
            });
            
        })

        glowCard4 = this.add.image(1450, 400, 'redglow').setScale(0);
        opponentimg1 = this.add.image(1450,400,'tank1').setScale(0.6)
            .setInteractive({ useHandCursor: true })
            .setOrigin(0.5)
            .on('pointerdown', () => {
                checkOponentFlag = 1;
                glowCard4.setScale(1.25);
                
                Opponentglow = game.scene.scenes[0].tweens.add({
                    targets :glowCard4,
                    scale: 1,
                    ease: 'Linear',
                    duration: 500,
                    repeat: 0,
                    yoyo: false
                });

                setTimeout(() => {

                    shoot.play(); 
                    fire.setScale(1);
                    checkFlag = 0;
                    targetshakevalue = opponentimg1;
                    if(checkPlayerFlag == 1){
                       fireStartX = 770;     
                       fireStartY = 400;   
                       fire.setPosition(770, 400);
                       fire.angle = -25;  
                    }
                    else if(checkPlayerFlag == 2){
                        fireStartX = 510;     
                        fireStartY = 550;  
                        fire.setPosition(510, 550);
                        fire.angle = -40; 
                    }
                    else if(checkPlayerFlag == 3){
                        fireStartX = 790;     
                        fireStartY = 730;   
                        fire.setPosition(790,730);
                        fire.angle = -45;
                    }
    
                    if(checkOponentFlag == 1){
                        fireEndX = 1450;     
                        fireEndY = 400; 
                    }
                    else if(checkOponentFlag == 2){
                        fireEndX = 1100;     
                        fireEndY = 535;   
                    }
                    else if(checkOponentFlag == 3){
                        fireEndX = 1450;     
                        fireEndY = 750;   
                    }
                    
                    glowCard5.setScale(0);
                    glowCard6.setScale(0);
    
                    if(checkPlayerFlag == 1 && bombFlag == true){
                        fireStartX = 745;     
                        fireStartY = 390;   
                        fire.setPosition(745, 390);
                    }
                    else if(checkPlayerFlag == 2 && bombFlag == true){
                        fireStartX = 480;     
                        fireStartY = 550;  
                        fire.setPosition(480, 550);
                    }
                    else if(checkPlayerFlag == 3 && bombFlag == true){
                        fireStartX = 745;     
                        fireStartY = 734;   
                        fire.setPosition(745, 734);
                    }

                    tween1 = this.tweens.add({
                        targets: fire,
                        props: {
                            x: { value: fireEndX, duration: 200, ease: 'Power1' },
                            y: { value: fireEndY, duration: 200, ease: 'Power1' }
                        },
                        delay: 0,
                        onComplete: function () {                     
                            brokenImg = game.scene.scenes[0].add.image(1450,420, 'broken').setScale(1.35);
                            explodeImg = game.scene.scenes[0].add.image(1450,440, 'explode1').setScale(0);
                            sparkleImg = game.scene.scenes[0].add.image(1450,440, 'sparkle').setScale(0);
                            explosion.play();                
                            game.scene.scenes[0].tweens.add({
                                targets: explodeImg,
                                alpha:0.9,
                                yoyo: true,
                                y: 400,
                                duration: 1000,
                            });
                            
                            game.scene.scenes[0].tweens.add({
                                targets: sparkleImg,
                                yoyo: true,
                                y: 420,
                                alpha:0.9,
                                duration: 1000,
                            });
                            
                            setTimeout(() => {
                                brokenImg.setScale(0);
                            }, 400);
    
                            setTimeout(() => {
                                explodeImg.setScale(1.1);   
                                sparkleImg.setScale(0.45);
                            }, 410);
    
                            setTimeout(() => {
                                explodeImg.setScale(0);
                                sparkleImg.setScale(0);
                            }, 1000);
                            
                            fire.setScale(0);
                            bombFlag = false;
                            shield.setScale(0);
                            shieldFlag = false;
                            lifeFlag = false;
                            activeHighlight.setScale(0);
                            glowCard4.setScale(0);
    
                            var shaketween1 = game.scene.scenes[0].tweens.add({
                                targets :targetshakevalue,
                                props: {
                                    x: { value: 1460, duration: 200, ease: 'Power1' },
                                },
                                ease: 'Linear',
                                duration: 50,
                                repeat: 0,
                                yoyo: true,
                                onComplete:function(){shaketween1.remove()}
                            });
    
                        
                            glowCard3.setScale(0);
                            glowCard1.setScale(0);
                            glowCard2.setScale(0);
                            glowCard4.setScale(0);
                            glowCard5.setScale(0);
                            glowCard6.setScale(0);
    
                        }
                    });
                }, 700);
                
            })

        glowCard5 = this.add.image(1200, 550, 'redglow').setScale(0);
        opponentimg2 = this.add.image(1200,550,'tank2').setScale(0.6)
        .setInteractive({ useHandCursor: true })
            .setOrigin(0.5)
            .on('pointerdown', () => {
                checkOponentFlag = 2;
                glowCard5.setScale(1.25);
                
                Opponentglow = game.scene.scenes[0].tweens.add({
                    targets :glowCard5,
                    scale: 1,
                    ease: 'Linear',
                    duration: 500,
                    repeat: 0,
                    yoyo: false
                });

                setTimeout(() => {
                    shoot.play(); 
                    fire.setScale(1);
                    checkFlag = 0;
                    targetshakevalue = opponentimg2;
                    
                    if(checkPlayerFlag == 1){
                        fireStartX = 785;     
                        fireStartY = 430;   
                        fire.setPosition(785, 430);
                        fire.angle = 0;  
                    }
                    else if(checkPlayerFlag == 2){
                        fireStartX = 530;     
                        fireStartY = 560;  
                        fire.setPosition(530, 560);
                        fire.angle = -25; 
                    }
                    else if(checkPlayerFlag == 3){
                        fireStartX = 795;     
                        fireStartY = 710;   
                        fire.setPosition(795, 710);
                        fire.angle = -55;
                    }
                    

                    if(checkOponentFlag == 1){
                        fireEndX = 1450;     
                        fireEndY = 400; 
                    }
                    else if(checkOponentFlag == 2){
                        fireEndX = 1100;     
                        fireEndY = 535;    
                    }
                    else if(checkOponentFlag == 3){
                        fireEndX = 1450;     
                        fireEndY = 750;   
                    }
                
                    glowCard4.setScale(0);
                    glowCard6.setScale(0);

                    if(checkPlayerFlag == 1 && bombFlag == true){
                        fireStartX = 745;     
                        fireStartY = 390;   
                        fire.setPosition(745, 390);
                    }
                    else if(checkPlayerFlag == 2 && bombFlag == true){
                        fireStartX = 480;     
                        fireStartY = 550;  
                        fire.setPosition(480, 550);
                    }
                    else if(checkPlayerFlag == 3 && bombFlag == true){
                        fireStartX = 745;     
                        fireStartY = 725;   
                        fire.setPosition(745, 725);
                    }

                    tween1 = this.tweens.add({
                        targets: fire,
                        props: {
                            x: { value: fireStartX, duration: 200, ease: 'Power1' },
                            y: { value: fireStartY, duration: 200, ease: 'Power1' }
                        },
                        delay: 0,
                        onComplete: function () {
                            tween2 = game.scene.scenes[0].tweens.add({
                                targets: fire,                        
                                props: {
                                    x: { value: fireEndX, duration: 200, ease: 'Power1' },
                                    y: { value: fireEndY, duration: 200, ease: 'Power1' }
                                },
                            
                                onComplete: function () {
    
                                    brokenImg = game.scene.scenes[0].add.image(1190,570, 'broken').setScale(1.35);
                                    explodeImg = game.scene.scenes[0].add.image(1190,590, 'explode2').setScale(0);
                                    sparkleImg = game.scene.scenes[0].add.image(1190,590, 'sparkle').setScale(0);
                                    explosion.play();
                                    game.scene.scenes[0].tweens.add({
                                        targets: explodeImg,
                                        alpha:0.7,
                                        yoyo: true,
                                        y: 550,
                                        duration: 1000,
                                    });

                                    game.scene.scenes[0].tweens.add({
                                        targets: sparkleImg,
                                        yoyo: true,
                                        y: 570,
                                        alpha:0.9,
                                        duration: 1000,
                                    });
                                
                                    setTimeout(() => {
                                        brokenImg.setScale(0);
                                    }, 400);

                                    setTimeout(() => {
                                        explodeImg.setScale(1.1);   
                                        sparkleImg.setScale(0.45);
                                    }, 410);
            
                                    setTimeout(() => {
                                        explodeImg.setScale(0);
                                        sparkleImg.setScale(0);
                                    }, 1000);
                                
                                    fire.setScale(0);
                                    bombFlag = false;
                                    shield.setScale(0);
                                    shieldFlag = false;
                                    lifeFlag = false;
                                    activeHighlight.setScale(0);

                                    var shaketween1 = game.scene.scenes[0].tweens.add({
                                        targets :targetshakevalue,
                                        props: {
                                            x: { value: 1210, duration: 200, ease: 'Power1' },
                                        },
                                        ease: 'Linear',
                                        duration: 50,
                                        repeat: 0,
                                        yoyo: true,
                                        onComplete:function(){shaketween1.remove()}
                                    });

                                glowCard3.setScale(0);
                                glowCard1.setScale(0);
                                glowCard2.setScale(0);
                                glowCard4.setScale(0);
                                glowCard5.setScale(0);
                                glowCard6.setScale(0);
                                }
                            });
                        }
                    });
                }, 700);
                
            })

        glowCard6 = this.add.image(1450, 750, 'redglow').setScale(0);
        opponentimg3 = this.add.image(1450,750,'tank3').setScale(0.6)
        .setInteractive({ useHandCursor: true })
            .setOrigin(0.5)
            .on('pointerdown', () => {
                checkOponentFlag = 3;
                glowCard6.setScale(1.25);
                
                Opponentglow = game.scene.scenes[0].tweens.add({
                    targets :glowCard6,
                    scale: 1,
                    ease: 'Linear',
                    duration: 500,
                    repeat: 0,
                    yoyo: false
                });

                setTimeout(() => {

                    fire.setScale(1);
                    shoot.play();
                    targetshakevalue = opponentimg3;
                    checkFlag = 0;
                    if(checkPlayerFlag == 1){
                        fireStartX = 785;     
                        fireStartY = 430;   
                        fire.setPosition(785, 430);
                        fire.angle = 0;  
                    }
                    else if(checkPlayerFlag == 2){
                        fireStartX = 525;     
                        fireStartY = 575;  
                        fire.setPosition(525, 575);
                        fire.angle = -10; 
                    }
                    else if(checkPlayerFlag == 3){
                        fireStartX = 790;     
                        fireStartY = 745;   
                        fire.setPosition(790, 745);
                        fire.angle = -25;
                    }
    
                    if(checkOponentFlag == 1){
                        fireEndX = 1450;     
                        fireEndY = 400; 
                    }
                    else if(checkOponentFlag == 2){
                        fireEndX = 1100;     
                        fireEndY = 535;   
                    }
                    else if(checkOponentFlag == 3){
                        fireEndX = 1450;     
                        fireEndY = 750;   
                    }
                    glowCard5.setScale(0);
                    glowCard4.setScale(0);
    
                    if(checkPlayerFlag == 1 && bombFlag == true){
                        fireStartX = 745;     
                        fireStartY = 390;   
                        fire.setPosition(745, 390);
                    }
                    else if(checkPlayerFlag == 2 && bombFlag == true){
                        fireStartX = 480;     
                        fireStartY = 550;  
                        fire.setPosition(480, 550);
                    }
                    else if(checkPlayerFlag == 3 && bombFlag == true){
                        fireStartX = 745;     
                        fireStartY = 730;   
                        fire.setPosition(745, 730);
                    }
                                     
                    tween1 = this.tweens.add({
                        targets: fire,
                        props: {
                            x: { value: fireStartX, duration: 200, ease: 'Power1' },
                            y: { value: fireStartY, duration: 200, ease: 'Power1' }
                        },
                        delay: 0,
                        onComplete: function () {
                            tween2 = game.scene.scenes[0].tweens.add({
                                targets: fire,                        
                                props: {
                                    x: { value: fireEndX, duration: 200, ease: 'Power1' },
                                    y: { value: fireEndY, duration: 200, ease: 'Power1' }
                                },
                               
                                onComplete: function () {
    
                                    brokenImg = game.scene.scenes[0].add.image(1450,760, 'broken').setScale(1.35);
                                    explodeImg = game.scene.scenes[0].add.image(1450,780, 'explode3').setScale(0);
                                    sparkleImg = game.scene.scenes[0].add.image(1450,780, 'sparkle').setScale(0);
                                    explosion.play();
                                    game.scene.scenes[0].tweens.add({
                                        targets: explodeImg,
                                        alpha:0.9,
                                        yoyo: true,
                                        y: 740,
                                        duration: 1000,
                                    });
    
                                    game.scene.scenes[0].tweens.add({
                                        targets: sparkleImg,
                                        yoyo: true,
                                        y: 760,
                                        alpha:0.9,
                                        duration: 1000,
                                    });
                                    
                                    setTimeout(() => {
                                        brokenImg.setScale(0);
                                    }, 400);
    
                                    setTimeout(() => {
                                        explodeImg.setScale(1.2);   
                                        sparkleImg.setScale(0.45);
                                    }, 410);
            
                                    setTimeout(() => {
                                        explodeImg.setScale(0);
                                        sparkleImg.setScale(0);
                                    }, 1000);
    
                                    fire.setScale(0);
                                    bombFlag = false;
                                    shield.setScale(0);
                                    shieldFlag = false;
                                    lifeFlag = false;
                                    activeHighlight.setScale(0);
                                    
                                    var shaketween1 = game.scene.scenes[0].tweens.add({
                                        targets :targetshakevalue,
                                        props: {
                                            x: { value: 1460, duration: 200, ease: 'Power1' },
                                        },
                                        ease: 'Linear',
                                        duration: 50,
                                        repeat: 0,
                                        yoyo: true,
                                        onComplete:function(){shaketween1.remove()}
                                    });
                                glowCard3.setScale(0);
                                glowCard1.setScale(0);
                                glowCard2.setScale(0);
                                glowCard4.setScale(0);
                                glowCard5.setScale(0);
                                glowCard6.setScale(0);
                                }
    
                            });
                        }
                    });
                }, 700);
            })

        opponentimg1.flipX = true; 
        opponentimg2.flipX = true; 
        opponentimg3.flipX = true; 

        // player1arrow = this.add.image(650,270,'whitearrow');
        // player2arrow = this.add.image(400,420,'whitearrow');
        // player3arrow = this.add.image(650,620,'whitearrow');

        // opponent1arrow = this.add.image(1450,270,'redarrow');
        // opponent2arrow = this.add.image(1200,420,'redarrow');
        // opponent3arrow = this.add.image(1450,620,'redarrow');
        
        fire = this.add.image(785, 415, 'fire').setScale(0);
        bomb = this.add.image(745, 390, 'bomb').setScale(0);
        
        var greenract = this.add.graphics();
        greenract.fillStyle(0x356f0b, 1);
        greenract.fillRoundedRect(570, 510, 162, 27, 10);
        greenract.fillRoundedRect(1370, 510, 162, 27, 10);
        greenract.fillRoundedRect(320, 670, 162, 27, 10);
        greenract.fillRoundedRect(1120, 670, 162, 27, 10);
        greenract.fillRoundedRect(570, 860, 162, 27, 10);
        greenract.fillRoundedRect(1370, 860, 162, 27, 10);

        player1progressract = this.add.graphics();
        player1progressract.fillStyle(0xabb837, 1);
        player1progressract.fillRoundedRect(570, 510, player1progress * 1.62, 27, 10);

        player2progressract = this.add.graphics();
        player2progressract.fillStyle(0xabb837, 1);
        player2progressract.fillRoundedRect(320, 670, player2progressract * 1.62, 27, 10);

        player3progressract = this.add.graphics();
        player3progressract.fillStyle(0xabb837, 1);
        player3progressract.fillRoundedRect(570, 860, player3progressract * 1.62, 27, 10);

        player1progresstext = this.add.text(650,522,"HP: 40/100",{ fontSize: '18px', fill: '#fff', fontFamily: 'GothamMedium'}).setOrigin(0.5);
        player2progresstext = this.add.text(400,682,"HP: 0/100",{ fontSize: '18px', fill: '#fff', fontFamily: 'GothamMedium'}).setOrigin(0.5);
        player3progresstext = this.add.text(650,872,"HP: 0/100",{ fontSize: '18px', fill: '#fff', fontFamily: 'GothamMedium'}).setOrigin(0.5);

        oponent1progresstext = this.add.text(1450,522,"HP: 0/100",{ fontSize: '18px', fill: '#fff', fontFamily: 'GothamMedium'}).setOrigin(0.5);
        oponent2progresstext = this.add.text(1200,682,"HP: 0/100",{ fontSize: '18px', fill: '#fff', fontFamily: 'GothamMedium'}).setOrigin(0.5);
        oponent3progresstext = this.add.text(1450,872,"HP: 0/100",{ fontSize: '18px', fill: '#fff', fontFamily: 'GothamMedium'}).setOrigin(0.5);

        var rangeslidegrp = this.add.group();
        rangeslidegrp.create(960, 540, 'popupframe').setScale(0.8)
        
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
            },
        })
            .layout();
            audioslide.setValue(55, 0, 100);
            

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
            },
        })
            .layout();
            musicslide.setValue(25, 0, 100);


        closebtn = this.add.image(1240,350,'settingclose').setScale(0.65)
        .setOrigin(0.5)
        .setInteractive({ useHandCursor: true })
        .on('pointerdown', () => { 
            rangeslidegrp.setVisible(false);
            } );
        rangeslidegrp.add(closebtn);
        rangeslidegrp.add(soundicon);
        rangeslidegrp.add(audioslide);
        rangeslidegrp.add(musicicon);
        rangeslidegrp.add(musicslide);
        rangeslidegrp.setVisible(false);

        // win lose popup design
        // var recrutsgrp = this.add.image(960, 540, 'popupframe').setScale(1.15)
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

    }

    shake1(){
            var shaketween2 = this.tweens.add({
            targets :targetshakevalue,
            angle : -15,
            ease: 'Linear',
            duration: 50,
            repeat: 0,
            yoyo: false,
            onComplete:function(){shaketween2.remove(),game.scene.scenes[0].shake2()}
        });
    }
    shake2(){
            var shaketween3 = this.tweens.add({
            targets :targetshakevalue,
            angle : 5,
            ease: 'Linear',
            duration: 50,
            repeat: 0,
            yoyo: false,
            onComplete:function(){shaketween3.remove(),game.scene.scenes[0].shake3()}
        });
    }
    shake3(){
        var shaketween4 = this.tweens.add({
           targets :targetshakevalue,
           angle : 0,
           ease: 'Linear',
           duration: 50,
           repeat: 0,
           yoyo: false,
       });
    }

    

    update(){
        if(checkFlag == 1){
            opponentimg1.input.enabled = true;
            opponentimg2.input.enabled = true;
            opponentimg3.input.enabled = true;

            playerBomb.input.enabled = true;
            playerShield.input.enabled = true;
            playerLife.input.enabled = true;

            playerBomb.setAlpha(1);
            playerShield.setAlpha(1);
            playerLife.setAlpha(1);
        }
        
        else {
            opponentimg1.input.enabled = false;
            opponentimg2.input.enabled = false;
            opponentimg3.input.enabled = false;

            playerBomb.input.enabled = false;
            playerShield.input.enabled = false;
            playerLife.input.enabled = false;

            playerBomb.setAlpha(0.7);
            playerShield.setAlpha(0.7);
            playerLife.setAlpha(0.7);
        }

        // if(checkFlag == 0){
        //     playerimg1.input.enabled = true;
        //     playerimg2.input.enabled = true;
        //     playerimg3.input.enabled = true;
        // }
        
        // else {
        //     playerimg1.input.enabled = false;
        //     playerimg2.input.enabled = false;
        //     playerimg3.input.enabled = false;           
        // }

        if(bombFlag == true){
            activeHighlight.setPosition(289,261);
            fire.setTexture('bomb');  
        }

        else if(shieldFlag == true) {
            activeHighlight.setPosition(355,260); 
        }
  
        else if(lifeFlag == true) {
            activeHighlight.setPosition(420,260);
        }

        else if(bombFlag == false){
            fire.setTexture('fire');  
        }
       
    }
}

