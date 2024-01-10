var defaultAmount = 0.02;
var betAmount = (Math.floor(defaultAmount * 100) / 100).toFixed(2);
var gameBg;
var outputData = [];
var scoreFlag = "true"
var logo,home;
var gameBoard;
var headText, tailText;
var outputImg;
var totalBet;
var audioButton;
var minButton, maxButton;
var halfBet, flipButton, betText, betValueBg, betValue, minmaxText;
var historyBox, historytableTitle, hashText, cashText;
var twoMultiplier;
var outputData1, outputData2, outputData3, outputData4, outputData5, outputData6, outputData7;
var card1;
var card2;
var card3;
var card4;
var score, closeIcon;
var clubIcon, diamondIcon, heartIcon, spadeIcon;
var leftTop, leftBottom, rightTop, rightBottom;
var timeline;
var glowCard1, glowCard2, glowCard3, glowCard4;
var mobilegameBoard, mobilebetBox, mobhistoryBox, mobhistoryTitle;

class GameScene extends Phaser.Scene {
    constructor() {
        super({ key: 'gameScene' });
    }

    preload() {
        this.load.image('closeicon', 'assets/images/close.png');
        this.load.image('logo', 'assets/images/logo.png');
        this.load.image('gameboard', 'assets/images/main-panel.png');

        this.load.image('mainCard', 'assets/images/card.png');

        this.load.image('glowcard', 'assets/images/glow-card.png');
        this.load.image('card1', 'assets/images/card/card-01.png');
        this.load.image('card2', 'assets/images/card/card-02.png');
        this.load.image('card3', 'assets/images/card/card-03.png');
        this.load.image('card4', 'assets/images/card/card-04.png');

        this.load.image('club', 'assets/images/clubs.png');
        this.load.image('diamond', 'assets/images/diamond.png');
        this.load.image('heart', 'assets/images/heart.png');
        this.load.image('spade', 'assets/images/spades.png');
        this.load.image('homeicon', 'assets/images/aces-home-icon.png');

        this.load.image('lefttop', 'assets/images/left-t.png');
        this.load.image('leftbottom', 'assets/images/left-b.png');
        this.load.image('righttop', 'assets/images/right-t.png');
        this.load.image('rightbottom', 'assets/images/right-b.png');

        this.load.image('audio', 'assets/images/sound-on.png');
        this.load.image('scorebutton', 'assets/images/score.png');
        this.load.image('mobilegameboard', 'assets/images/mob-main-panel.png');
        this.load.image('minbox', 'assets/images/min-max-box.png');
        this.load.image('halfbet', 'assets/images/half-double-bet.png');
        this.load.image('totalbet', 'assets/images/total-bet-box.png');
        this.load.image('bettitle', 'assets/images/total-bet-text.png');
        this.load.image('betbg', 'assets/images/bet-value-bg.png');
        this.load.image('multipliericon', 'assets/images/half-double-bet.png');
        this.load.image('maxbox', 'assets/images/min-max-box.png');
        this.load.image('cardbox', 'assets/images/card-icon-box.png');

        this.load.image('mobhistorybox', 'assets/images/mob-history-box.png');
        this.load.image('mobhistorytitle', 'assets/images/mob-history-title.png');
        // this.load.image('provablyfair', 'assets/images/provably-fair.png');
        // this.load.image('copycode', 'assets/images/copy-code.png');
        this.load.image('historybox', 'assets/images/history-bet-box.png');
    }

    create() {
        // game board
        gameBoard = this.add.image(720, 470, 'gameboard');

        mobilegameBoard = this.add.image(360, 490, 'mobilegameboard').setScale(0);

        logo = this.add.image(725, 125, 'logo').setScale(0.95);
        home = this.add.image(60,120, 'homeicon');

        glowCard1 = this.add.image(260, 510, 'glowcard').setScale(0);
        card1 = this.add.image(260, 510, 'mainCard')
            .setInteractive({ useHandCursor: true })
            .setOrigin(0.5)
            .on('pointerover', () => {
                glowCard1.setScale(1.05);
            })

            .on('pointerout', () => {
                glowCard1.setScale(0);
            })

            .on('pointerdown', () => {
                card1.input.enabled = false;
                card2.input.enabled = false;
                card3.input.enabled = false;
                card4.input.enabled = false;
                game.scene.scenes[0].flip1(card1);
                glowCard1.setScale(0);

                setTimeout(function () {
                    game.scene.scenes[0].flip2(card2);
                    game.scene.scenes[0].flip3(card3);
                    game.scene.scenes[0].flip4(card4);
                }, 2000);

                setTimeout(function () {
                    game.scene.scenes[0].flip1(card1);
                    game.scene.scenes[0].flip2(card2);
                    game.scene.scenes[0].flip3(card3);
                    game.scene.scenes[0].flip4(card4);
                }, 3500);

                setTimeout(function () {
                    game.scene.scenes[0].anim()
                }, 5500);

                setTimeout(function () {
                    card1.input.enabled = true;
                    card2.input.enabled = true;
                    card3.input.enabled = true;
                    card4.input.enabled = true;
                }, 8500);
            })

        glowCard2 = this.add.image(565, 510, 'glowcard').setScale(0);
        card2 = this.add.image(565, 510, 'mainCard')
            .setInteractive({ useHandCursor: true })
            .setOrigin(0.5)
            .on('pointerover', () => {
                glowCard2.setScale(1.05);
            })
            .on('pointerout', () => {
                glowCard2.setScale(0);
            })
            .on('pointerdown', () => {
                card1.input.enabled = false;
                card2.input.enabled = false;
                card3.input.enabled = false;
                card4.input.enabled = false;
                game.scene.scenes[0].flip2(card2);
                glowCard2.setScale(0);
                setTimeout(function () {
                    game.scene.scenes[0].flip1(card1);
                    game.scene.scenes[0].flip3(card3);
                    game.scene.scenes[0].flip4(card4);
                }, 2000);

                setTimeout(function () {
                    game.scene.scenes[0].flip1(card1);
                    game.scene.scenes[0].flip2(card2);
                    game.scene.scenes[0].flip3(card3);
                    game.scene.scenes[0].flip4(card4);
                }, 3500);

                setTimeout(function () {
                    game.scene.scenes[0].anim()
                }, 5500);

                setTimeout(function () {
                    card1.input.enabled = true;
                    card2.input.enabled = true;
                    card3.input.enabled = true;
                    card4.input.enabled = true;
                }, 8500);
            })


        glowCard3 = this.add.image(870, 510, 'glowcard').setScale(0);
        card3 = this.add.image(870, 510, 'mainCard')
            .setInteractive({ useHandCursor: true })
            .setOrigin(0.5)
            .on('pointerover', () => {
                glowCard3.setScale(1.05);
            })
            .on('pointerout', () => {
                glowCard3.setScale(0);
            })
            .on('pointerdown', () => {
                card1.input.enabled = false;
                card2.input.enabled = false;
                card3.input.enabled = false;
                card4.input.enabled = false;
                game.scene.scenes[0].flip3(card3);
                glowCard3.setScale(0);

                setTimeout(function () {
                    game.scene.scenes[0].flip1(card1);
                    game.scene.scenes[0].flip2(card2);
                    game.scene.scenes[0].flip4(card4);
                }, 2000);

                setTimeout(function () {

                    game.scene.scenes[0].flip1(card1);
                    game.scene.scenes[0].flip2(card2);
                    game.scene.scenes[0].flip3(card3);
                    game.scene.scenes[0].flip4(card4);
                }, 3500);

                setTimeout(function () {
                    game.scene.scenes[0].anim()
                }, 5500);

                setTimeout(function () {
                    card1.input.enabled = true;
                    card2.input.enabled = true;
                    card3.input.enabled = true;
                    card4.input.enabled = true;
                }, 8500);

            })


        glowCard4 = this.add.image(1175, 510, 'glowcard').setScale(0);
        card4 = this.add.image(1175, 510, 'mainCard')
            .setInteractive({ useHandCursor: true })
            .setOrigin(0.5)
            .on('pointerover', () => {
                glowCard4.setScale(1.05);
            })
            .on('pointerout', () => {
                glowCard4.setScale(0);
            })
            .on('pointerdown', () => {
                card1.input.enabled = false;
                card2.input.enabled = false;
                card3.input.enabled = false;
                card4.input.enabled = false;
                game.scene.scenes[0].flip4(card4);
                glowCard4.setScale(0);

                setTimeout(function () {
                    game.scene.scenes[0].flip1(card1);
                    game.scene.scenes[0].flip2(card2);
                    game.scene.scenes[0].flip3(card3);
                }, 2000);

                setTimeout(function () {
                    game.scene.scenes[0].flip1(card1);
                    game.scene.scenes[0].flip2(card2);
                    game.scene.scenes[0].flip3(card3);
                    game.scene.scenes[0].flip4(card4);
                }, 3500);

                setTimeout(function () {
                    game.scene.scenes[0].anim()
                }, 5500);

                setTimeout(function () {
                    card1.input.enabled = true;
                    card2.input.enabled = true;
                    card3.input.enabled = true;
                    card4.input.enabled = true;
                }, 8500);
            })

        // game text 
        cashText = this.add.text(120, 812, 'CASH: 100000', { fontSize: '24px', fill: '#FFCE8A', fontFamily: "AllerDisplay" });

        // total bet box
        totalBet = this.add.image(720, 940, 'totalbet');
        mobilebetBox = this.add.image(360, 985, 'totalbet').setScale(0);

        // this.sound.add('music');
        audioButton = this.add.image(205, 940, 'audio')
            .setInteractive({ useHandCursor: true })
            .setOrigin(0.5)
            .on('pointerdown', () => {
            });

        halfBet = this.add.image(500, 940, 'halfbet')
            .setInteractive({ useHandCursor: true })
            .setOrigin(0.5)
            .on('pointerdown', () => {
                betAmount = betAmount / 2;
                betValue.setText(betAmount.toFixed(2));
            });

        var halfbetText = this.add.text(500, 940, "/2", { fontSize: '48px', fill: '#7D3300', fontFamily: 'AllerDisplay' });
        halfbetText.setOrigin(0.5);

        minButton = this.add.image(370, 940, 'minbox')
            .setInteractive({ useHandCursor: true })
            .setOrigin(0.5)
            .on('pointerdown', () => {
                betAmount = 0.01;
                betValue.setText(betAmount.toFixed(2));
            });

        var minbtnText = this.add.text(370, 940, "MIN", { fontSize: '36px', fill: '#7D3300', fontFamily: 'AllerDisplay' });
        minbtnText.setOrigin(0.5);

        betValueBg = this.physics.add.image(715, 940, 'betbg');

        betValue = this.add.text(716, 937, betAmount, { fontSize: '63px', fill: '#7D3300', fontFamily: "AllerDisplay" });
        betValue.setOrigin(0.5);

        betText = this.add.image(710, 855, 'bettitle').setScale(0.9);

        maxButton = this.add.image(1060, 940, 'maxbox')
            .setInteractive({ useHandCursor: true })
            .setOrigin(0.5)
            .on('pointerdown', () => {
                betAmount = 1000;
                betValue.setText(betAmount);
            });
        var maxbtnText = this.add.text(1061, 940, "MAX", { fontSize: '36px', fill: '#7D3300', fontFamily: 'AllerDisplay' });
        maxbtnText.setOrigin(0.5);

        twoMultiplier = this.add.image(930, 940, 'multipliericon')
            .setInteractive({ useHandCursor: true })
            .setOrigin(0.5)
            .on('pointerdown', () => {
                betAmount = betAmount * 2;
                betValue.setText(betAmount.toFixed(2));
            });
        var twoMultiplierText = this.add.text(930, 935, "x2", { fontSize: '48px', fill: '#7D3300', fontFamily: 'AllerDisplay' });
        twoMultiplierText.setOrigin(0.5);

        flipButton = this.add.image(1290, 940, 'cardbox');
        rightTop = this.add.image(1333, 900, 'righttop').setScale(0);
        rightBottom = this.add.image(1333, 980, 'rightbottom').setScale(0);
        leftTop = this.add.image(1248, 900, 'lefttop').setScale(0);
        leftBottom = this.add.image(1248, 980, 'leftbottom').setScale(0);

        // outputData.push("club");
        clubIcon = this.add.image(1255, 905, 'club')
            .setInteractive({ useHandCursor: true })
            .setOrigin(0.5)
            .on('pointerdown', () => {
                let index = outputData.indexOf("club");
                if (index > -1) {
                    outputData.splice(index, 1);
                    leftTop.setScale(0);
                }
                else {
                    if (outputData.length < 3) {
                        outputData.push("club");
                        if (window.innerWidth < 1050) {
                            leftTop.setScale(0.7);
                        }
                        else {
                            leftTop.setScale(1);
                        }
                    }
                }
            });

        diamondIcon = this.add.image(1322, 905, 'diamond')
            .setInteractive({ useHandCursor: true })
            .setOrigin(0.5)
            .on('pointerdown', () => {

                let index = outputData.indexOf("diamond");
                if (index > -1) {
                    outputData.splice(index, 1);
                    rightTop.setScale(0);
                }
                else {
                    if (outputData.length < 3) {
                        outputData.push("diamond");

                        if (window.innerWidth < 1050) {
                            rightTop.setScale(0.7);
                        }
                        else {
                            rightTop.setScale(1);
                        }
                    }
                }
            });

        spadeIcon = this.add.image(1322, 970, 'spade')
            .setInteractive({ useHandCursor: true })
            .setOrigin(0.5)
            .on('pointerdown', () => {
                let index = outputData.indexOf("spade");
                if (index > -1) {
                    outputData.splice(index, 1);
                    rightBottom.setScale(0);
                }
                else {
                    if (outputData.length < 3) {
                        outputData.push("spade");
                        rightBottom.setScale(1);
                        if (window.innerWidth < 1050) {
                            rightBottom.setScale(0.7);
                        }
                        else {
                            rightBottom.setScale(1);
                        }
                    }
                }
            });

        heartIcon = this.add.image(1254, 970, 'heart')
            .setInteractive({ useHandCursor: true })
            .setOrigin(0.5)
            .on('pointerdown', () => {
                let index = outputData.indexOf("heart");
                if (index > -1) {
                    outputData.splice(index, 1);
                    leftBottom.setScale(0);
                }
                else {
                    if (outputData.length < 3) {
                        outputData.push("heart");
                        if (window.innerWidth < 1050) {
                            leftBottom.setScale(0.7);
                        }
                        else {
                            leftBottom.setScale(1);
                        }
                    }
                }
            });

        minmaxText = this.add.text(600, 1015, 'MIN 0.01 - MAX 1000', { fontSize: '25px', fill: '#7D3300', fontFamily: "AllerDisplay" });

        // Provably block
        // provablyFair = this.physics.add.image(1670, 150, 'provablyfair').setScale(0.98);
        // hashText = this.add.text(1520, 146, 'HASH: b3c61e4135', { fontSize: '31px', fill: '#FFCE8A', fontFamily: "AllerDisplay" });
        // copyCode = this.add.image(1810, 166, 'copycode')
        //     .setInteractive({ useHandCursor: true })
        //     .setOrigin(0.5);

        mobhistoryBox = this.add.image(360, 530, 'mobhistorybox').setScale(0);
        mobhistoryTitle = this.add.image(360, 255, 'mobhistorytitle').setScale(0);

        // history block
        historyBox = this.physics.add.image(1670, 620, 'historybox').setScale(0.98);
        historytableTitle = this.add.text(1520, 340, 'GAME        BET        PROFIT', { fontSize: '24px', fill: '#7D3300', fontFamily: "AllerDisplay" });

        // outputData1 = this.add.text(1520, 390, '', { fontSize: '24px', fill: '#262C3F', fontFamily: "AllerDisplay" });

        // coin static value
        var coinValue1 = this.add.text(1520, 390, 'Head', { fontSize: '24px', fill: '#7D3300', fontFamily: "AllerDisplay" });
        var coinValue2 = this.add.text(1520, 430, 'Tail', { fontSize: '24px', fill: '#7D3300', fontFamily: "AllerDisplay" });
        var coinValue3 = this.add.text(1520, 470, 'Head', { fontSize: '24px', fill: '#7D3300', fontFamily: "AllerDisplay" });
        var coinValue4 = this.add.text(1520, 510, 'Tail', { fontSize: '24px', fill: '#7D3300', fontFamily: "AllerDisplay" });
        var coinValue5 = this.add.text(1520, 550, 'Head', { fontSize: '24px', fill: '#7D3300', fontFamily: "AllerDisplay" });
        var coinValue6 = this.add.text(1520, 590, 'Tail', { fontSize: '24px', fill: '#7D3300', fontFamily: "AllerDisplay" });
        var coinValue7 = this.add.text(1520, 630, 'Tail', { fontSize: '24px', fill: '#7D3300', fontFamily: "AllerDisplay" });
        var coinValue8 = this.add.text(1520, 670, 'Head', { fontSize: '24px', fill: '#7D3300', fontFamily: "AllerDisplay" });
        var coinValue9 = this.add.text(1520, 710, 'Tail', { fontSize: '24px', fill: '#7D3300', fontFamily: "AllerDisplay" });
        var coinValue10 = this.add.text(1520, 750, 'Tail', { fontSize: '24px', fill: '#7D3300', fontFamily: "AllerDisplay" });

        // bet static value
        var betValue1 = this.add.text(1648, 390, '800', { fontSize: '24px', fill: '#7D3300', fontFamily: "AllerDisplay" }).setOrigin(0.5, 0);
        var betValue2 = this.add.text(1648, 430, '0.01', { fontSize: '24px', fill: '#7D3300', fontFamily: "AllerDisplay" }).setOrigin(0.5, 0);
        var betValue3 = this.add.text(1648, 470, '400', { fontSize: '24px', fill: '#7D3300', fontFamily: "AllerDisplay" }).setOrigin(0.5, 0);
        var betValue4 = this.add.text(1648, 510, '200.00', { fontSize: '24px', fill: '#7D3300', fontFamily: "AllerDisplay" }).setOrigin(0.5, 0);
        var betValue5 = this.add.text(1648, 550, '400.00', { fontSize: '24px', fill: '#7D3300', fontFamily: "AllerDisplay" }).setOrigin(0.5, 0);
        var betValue6 = this.add.text(1648, 590, '200', { fontSize: '24px', fill: '#7D3300', fontFamily: "AllerDisplay" }).setOrigin(0.5, 0);
        var betValue7 = this.add.text(1648, 630, '600', { fontSize: '24px', fill: '#7D3300', fontFamily: "AllerDisplay" }).setOrigin(0.5, 0);
        var betValue8 = this.add.text(1648, 670, '800', { fontSize: '24px', fill: '#7D3300', fontFamily: "AllerDisplay" }).setOrigin(0.5, 0);
        var betValue9 = this.add.text(1648, 710, '6.25', { fontSize: '24px', fill: '#7D3300', fontFamily: "AllerDisplay" }).setOrigin(0.5, 0);
        var betValue10 = this.add.text(1648, 750, '12.50', { fontSize: '24px', fill: '#7D3300', fontFamily: "AllerDisplay" }).setOrigin(0.5, 0);

        // profit static value
        var profitValue1 = this.add.text(1740, 390, '1', { fontSize: '24px', fill: '#7D3300', fontFamily: "AllerDisplay" });
        var profitValue2 = this.add.text(1740, 430, '1', { fontSize: '24px', fill: '#7D3300', fontFamily: "AllerDisplay" });
        var profitValue3 = this.add.text(1740, 470, '1', { fontSize: '24px', fill: '#7D3300', fontFamily: "AllerDisplay" });
        var profitValue4 = this.add.text(1740, 510, '1', { fontSize: '24px', fill: '#7D3300', fontFamily: "AllerDisplay" });
        var profitValue5 = this.add.text(1740, 550, '1', { fontSize: '24px', fill: '#7D3300', fontFamily: "AllerDisplay" });
        var profitValue6 = this.add.text(1740, 590, '1', { fontSize: '24px', fill: '#7D3300', fontFamily: "AllerDisplay" });
        var profitValue7 = this.add.text(1740, 630, '1', { fontSize: '24px', fill: '#7D3300', fontFamily: "AllerDisplay" });
        var profitValue8 = this.add.text(1740, 670, '1', { fontSize: '24px', fill: '#7D3300', fontFamily: "AllerDisplay" });
        var profitValue9 = this.add.text(1740, 710, '1', { fontSize: '24px', fill: '#7D3300', fontFamily: "AllerDisplay" });
        var profitValue10 = this.add.text(1740, 750, '1', { fontSize: '24px', fill: '#7D3300', fontFamily: "AllerDisplay" });

        if (window.innerWidth < 1050) {

            home.setPosition(100, 70);
            logo.setScale(0.65);
            logo.setPosition(350, 70);
            mobilegameBoard.setScale(1, 0.9);
            gameBoard.setScale(0);

            mobilebetBox.setScale(0.5);
            totalBet.setScale(0.5);
            totalBet.setPosition(360, 1125);
            cashText.setPosition(55, 905);
            cashText.setScale(0.85);
            cashText.setColor('#FFCE86');
            audioButton.setPosition(120, 985);
            minmaxText.setPosition(225, 1048);
            minmaxText.setColor('#FFCE86');
            minmaxText.setScale(1);
            minButton.setPosition(155, 1125);
            minButton.setScale(0.9);
            maxButton.setPosition(560, 1125);
            maxButton.setScale(0.9);
            halfBet.setPosition(290, 1125);
            halfBet.setScale(0.9);
            betValueBg.setPosition(350, 985);
            betValueBg.setScale(0.9, 0.9);
            betText.setScale(0.95);
            betText.setPosition(350, 910);
            betValue.setScale(0.75);
            betValue.setPosition(350, 985);
            betValue.setOrigin(0.5);
            twoMultiplier.setPosition(420, 1125);
            twoMultiplier.setScale(0.9);
            flipButton.setScale(0.7);
            flipButton.setPosition(620, 980);

            leftBottom.setPosition(590, 1008);
            leftTop.setPosition(590, 952);
            rightTop.setPosition(650, 952);
            rightBottom.setPosition(650, 1008);

            clubIcon.setScale(0.7);
            clubIcon.setPosition(595, 958);
            diamondIcon.setScale(0.7);
            diamondIcon.setPosition(645, 958);
            spadeIcon.setScale(0.7);
            spadeIcon.setPosition(645, 1000);
            heartIcon.setScale(0.7);
            heartIcon.setPosition(595, 1000);

            halfbetText.setPosition(290, 1125);
            minbtnText.setPosition(155, 1125);
            maxbtnText.setPosition(560, 1125);
            twoMultiplierText.setPosition(422, 1122);

            card1.setScale(0.8);
            card1.setPosition(230, 330)
                .on('pointerover', () => {
                    glowCard1.setScale(0.82);
                })
            card2.setScale(0.8);
            card2.setPosition(490, 330)
                .on('pointerover', () => {
                    glowCard2.setScale(0.82);
                })
            card3.setScale(0.8);
            card3.setPosition(230, 690)
                .on('pointerover', () => {
                    glowCard3.setScale(0.82);
                })
            card4.setScale(0.8);
            card4.setPosition(490, 690)
                .on('pointerover', () => {
                    glowCard4.setScale(0.82);
                })

            glowCard1.setPosition(230, 330);
            glowCard2.setPosition(490, 330);
            glowCard3.setPosition(230, 690);
            glowCard4.setPosition(490, 690);

            // provablyFair.setScale(0);
            // provablyFair.setPosition(360,300);
            // hashText.setScale(0);
            // hashText.setPosition(230,300);
            // copyCode.setScale(0);
            // copyCode.setPosition(470,315);

            // history block
            historyBox.setScale(0);

            historytableTitle.setScale(0);
            historytableTitle.setText('GAME                     BET                     PROFIT');
            historytableTitle.setPosition(160, 305);
            // outputData1.setScale(0);
            // outputData1.setPosition(240,498);

            coinValue1.setPosition(165, 360);
            coinValue2.setPosition(165, 400);
            coinValue3.setPosition(165, 440);
            coinValue4.setPosition(165, 480);
            coinValue5.setPosition(165, 520);
            coinValue6.setPosition(165, 560);
            coinValue7.setPosition(165, 600);
            coinValue8.setPosition(165, 640);
            coinValue9.setPosition(165, 680);
            coinValue10.setPosition(165, 720);
            coinValue1.setScale(0);
            coinValue2.setScale(0);
            coinValue3.setScale(0);
            coinValue4.setScale(0);
            coinValue5.setScale(0);
            coinValue6.setScale(0);
            coinValue7.setScale(0);
            coinValue8.setScale(0);
            coinValue9.setScale(0);
            coinValue10.setScale(0);
            betValue1.setPosition(350, 360);
            betValue2.setPosition(350, 400);
            betValue3.setPosition(350, 440);
            betValue4.setPosition(350, 480);
            betValue5.setPosition(350, 520);
            betValue6.setPosition(350, 560);
            betValue7.setPosition(350, 600);
            betValue8.setPosition(350, 640);
            betValue9.setPosition(350, 680);
            betValue10.setPosition(350, 720);
            betValue1.setScale(0);
            betValue2.setScale(0);
            betValue3.setScale(0);
            betValue4.setScale(0);
            betValue5.setScale(0);
            betValue6.setScale(0);
            betValue7.setScale(0);
            betValue8.setScale(0);
            betValue9.setScale(0);
            betValue10.setScale(0);
            profitValue1.setPosition(515, 360);
            profitValue2.setPosition(515, 400);
            profitValue3.setPosition(515, 440);
            profitValue4.setPosition(515, 480);
            profitValue5.setPosition(515, 520);
            profitValue6.setPosition(515, 560);
            profitValue7.setPosition(515, 600);
            profitValue8.setPosition(515, 640);
            profitValue9.setPosition(515, 680);
            profitValue10.setPosition(515, 720);
            profitValue1.setScale(0);
            profitValue2.setScale(0);
            profitValue3.setScale(0);
            profitValue4.setScale(0);
            profitValue5.setScale(0);
            profitValue6.setScale(0);
            profitValue7.setScale(0);
            profitValue8.setScale(0);
            profitValue9.setScale(0);
            profitValue10.setScale(0);

            closeIcon = this.add.image(630, 270, 'closeicon').setScale(0)
                .setInteractive({ useHandCursor: true })
                .setOrigin(0.5)
                .on('pointerdown', () => {
                    scoreFlag = "false"

                    mobhistoryTitle.setScale(0);
                    mobhistoryBox.setScale(0);
                    historyBox.setScale(0);
                    historytableTitle.setScale(0);
                    // outputData1.setScale(0);
                    coinValue1.setScale(0);
                    coinValue2.setScale(0);
                    coinValue3.setScale(0);
                    coinValue4.setScale(0);
                    coinValue5.setScale(0);
                    coinValue6.setScale(0);
                    coinValue7.setScale(0);
                    coinValue8.setScale(0);
                    coinValue9.setScale(0);
                    coinValue10.setScale(0);
                    betValue1.setScale(0);
                    betValue2.setScale(0);
                    betValue3.setScale(0);
                    betValue4.setScale(0);
                    betValue5.setScale(0);
                    betValue6.setScale(0);
                    betValue7.setScale(0);
                    betValue8.setScale(0);
                    betValue9.setScale(0);
                    betValue10.setScale(0);
                    profitValue1.setScale(0);
                    profitValue2.setScale(0);
                    profitValue3.setScale(0);
                    profitValue4.setScale(0);
                    profitValue5.setScale(0);
                    profitValue6.setScale(0);
                    profitValue7.setScale(0);
                    profitValue8.setScale(0);
                    profitValue9.setScale(0);
                    profitValue10.setScale(0);
                    closeIcon.setScale(0);
                });

            score = this.add.image(600, 70, 'scorebutton').setScale(1.2)
                .setInteractive({ useHandCursor: true })
                .setOrigin(0.5)
                .on('pointerdown', () => {
                    scoreFlag = "true"
                    // provablyFair.setScale(0.8);
                    // hashText.setScale(0.8);
                    // copyCode.setScale(0.8);
                    // historyBox.setScale(0.8);

                    mobhistoryTitle.setScale(1.3);
                    mobhistoryBox.setScale(1, 0.9);

                    historytableTitle.setScale(1);
                    //outputData1.setScale(0.8);
                    coinValue1.setScale(1.1);
                    coinValue2.setScale(1.1);
                    coinValue3.setScale(1.1);
                    coinValue4.setScale(1.1);
                    coinValue5.setScale(1.1);
                    coinValue6.setScale(1.1);
                    coinValue7.setScale(1.1);
                    coinValue8.setScale(1.1);
                    coinValue9.setScale(1.1);
                    coinValue10.setScale(1.1);
                    betValue1.setScale(1.1);
                    betValue2.setScale(1.1);
                    betValue3.setScale(1.1);
                    betValue4.setScale(1.1);
                    betValue5.setScale(1.1);
                    betValue6.setScale(1.1);
                    betValue7.setScale(1.1);
                    betValue8.setScale(1.1);
                    betValue9.setScale(1.1);
                    betValue10.setScale(1.1);
                    profitValue1.setScale(1.1);
                    profitValue2.setScale(1.1);
                    profitValue3.setScale(1.1);
                    profitValue4.setScale(1.1);
                    profitValue5.setScale(1.1);
                    profitValue6.setScale(1.1);
                    profitValue7.setScale(1.1);
                    profitValue8.setScale(1.1);
                    profitValue9.setScale(1.1);
                    profitValue10.setScale(1.1);
                    closeIcon.setScale(0.7);
                });
        }
    }

    anim() {
        if (window.innerWidth < 1050) {
            var tween1 = this.tweens.add({
                targets: card1,
                props: {
                    x: { value: '230', duration: 200, ease: 'Power1' },
                    y: { value: '690', duration: 200, ease: 'Power1' }
                },
                delay: 0,
                onComplete: function () {
                    var tween2 = game.scene.scenes[0].tweens.add({
                        targets: card1,
                        props: {
                            x: { value: '490', duration: 200, ease: 'Power1' },
                            y: { value: '690', duration: 200, ease: 'Power1' }
                        },
                        onComplete: function () {
                            var tween3 = game.scene.scenes[0].tweens.add({
                                targets: card1,
                                props: {
                                    x: { value: '490', duration: 200, ease: 'Power1' },
                                    y: { value: '330', duration: 200, ease: 'Power1' }
                                },
                            });
                        }
                    });
                }
            });
            glowCard1.setPosition(490, 330);

            var tween11 = this.tweens.add({
                targets: card2,
                props: {
                    x: { value: '230', duration: 200, ease: 'Power1' },
                    y: { value: '330', duration: 200, ease: 'Power1' }
                },
                delay: 0,
                onComplete: function () {
                    var tween12 = game.scene.scenes[0].tweens.add({
                        targets: card2,
                        props: {
                            x: { value: '230', duration: 200, ease: 'Power1' },
                            y: { value: '690', duration: 200, ease: 'Power1' }
                        },
                        onComplete: function () {
                            var tween13 = game.scene.scenes[0].tweens.add({
                                targets: card2,
                                props: {
                                    x: { value: '490', duration: 200, ease: 'Power1' },
                                    y: { value: '690', duration: 200, ease: 'Power1' }
                                },
                            });
                        }
                    });
                }
            });
            glowCard2.setPosition(490, 690);

            var tween21 = this.tweens.add({
                targets: card3,
                props: {
                    x: { value: '490', duration: 200, ease: 'Power1' },
                    y: { value: '690', duration: 200, ease: 'Power1' }
                },
                delay: 0,
                onComplete: function () {
                    var tween22 = game.scene.scenes[0].tweens.add({
                        targets: card3,
                        props: {
                            x: { value: '490', duration: 200, ease: 'Power1' },
                            y: { value: '330', duration: 200, ease: 'Power1' }
                        },
                        onComplete: function () {
                            var tween23 = game.scene.scenes[0].tweens.add({
                                targets: card3,
                                props: {
                                    x: { value: '230', duration: 200, ease: 'Power1' },
                                    y: { value: '330', duration: 200, ease: 'Power1' }
                                },
                            });
                        }
                    });
                }
            });
            glowCard3.setPosition(230, 330);

            var tween25 = this.tweens.add({
                targets: card4,
                props: {
                    x: { value: '490', duration: 200, ease: 'Power1' },
                    y: { value: '330', duration: 200, ease: 'Power1' }
                },
                delay: 0,
                onComplete: function () {
                    var tween26 = game.scene.scenes[0].tweens.add({
                        targets: card4,
                        props: {
                            x: { value: '230', duration: 200, ease: 'Power1' },
                            y: { value: '330', duration: 200, ease: 'Power1' }
                        },
                        onComplete: function () {
                            var tween27 = game.scene.scenes[0].tweens.add({
                                targets: card4,
                                props: {
                                    x: { value: '230', duration: 200, ease: 'Power1' },
                                    y: { value: '690', duration: 200, ease: 'Power1' }
                                },
                            });
                        }
                    });
                }
            });
            glowCard4.setPosition(230, 690);
        }
        else {
            var tween1 = this.tweens.add({
                targets: card1,
                props: {
                    x: { value: '870', duration: 200, ease: 'Power1' },
                    y: { value: '510', duration: 200, ease: 'Power1' }
                },
                delay: 0,
                onComplete: function () {
                    var tween2 = game.scene.scenes[0].tweens.add({
                        targets: card1,
                        props: {
                            x: { value: '1175', duration: 200, ease: 'Power1' },
                            y: { value: '510', duration: 200, ease: 'Power1' }
                        },
                        onComplete: function () {
                            var tween3 = game.scene.scenes[0].tweens.add({
                                targets: card1,
                                props: {
                                    x: { value: '565', duration: 200, ease: 'Power1' },
                                    y: { value: '510', duration: 200, ease: 'Power1' }
                                },
                                onComplete: function () {
                                    var tween4 = game.scene.scenes[0].tweens.add({
                                        targets: card1,
                                        props: {
                                            x: { value: '870', duration: 200, ease: 'Power1' },
                                            y: { value: '510', duration: 200, ease: 'Power1' }
                                        },
                                    });
                                }
                            });
                        }
                    });
                }
            });
            glowCard1.setPosition(870, 510);

            var tween11 = this.tweens.add({
                targets: card2,
                props: {
                    x: { value: '260', duration: 200, ease: 'Power1' },
                    y: { value: '510', duration: 200, ease: 'Power1' }
                },
                delay: 0,
                onComplete: function () {
                    var tween12 = game.scene.scenes[0].tweens.add({
                        targets: card2,
                        props: {
                            x: { value: '870', duration: 200, ease: 'Power1' },
                            y: { value: '510', duration: 200, ease: 'Power1' }
                        },
                        onComplete: function () {
                            var tween13 = game.scene.scenes[0].tweens.add({
                                targets: card2,
                                props: {
                                    x: { value: '1175', duration: 200, ease: 'Power1' },
                                    y: { value: '510', duration: 200, ease: 'Power1' }
                                },
                                onComplete: function () {
                                    var tween14 = game.scene.scenes[0].tweens.add({
                                        targets: card2,
                                        props: {
                                            x: { value: '260', duration: 200, ease: 'Power1' },
                                            y: { value: '510', duration: 200, ease: 'Power1' }
                                        },
                                    });
                                }
                            });
                        }
                    });
                }
            });
            glowCard2.setPosition(260, 510);

            var tween21 = this.tweens.add({
                targets: card3,
                props: {
                    x: { value: '1175', duration: 200, ease: 'Power1' },
                    y: { value: '510', duration: 200, ease: 'Power1' }
                },
                delay: 0,
                onComplete: function () {
                    var tween22 = game.scene.scenes[0].tweens.add({
                        targets: card3,
                        props: {
                            x: { value: '565', duration: 200, ease: 'Power1' },
                            y: { value: '510', duration: 200, ease: 'Power1' }
                        },
                        onComplete: function () {
                            var tween23 = game.scene.scenes[0].tweens.add({
                                targets: card3,
                                props: {
                                    x: { value: '260', duration: 200, ease: 'Power1' },
                                    y: { value: '510', duration: 200, ease: 'Power1' }
                                },
                                onComplete: function () {
                                    var tween24 = game.scene.scenes[0].tweens.add({
                                        targets: card3,
                                        props: {
                                            x: { value: '1175', duration: 200, ease: 'Power1' },
                                            y: { value: '510', duration: 200, ease: 'Power1' }
                                        },
                                    });
                                }
                            });
                        }
                    });
                }
            });
            glowCard3.setPosition(1175, 510);

            var tween25 = this.tweens.add({
                targets: card4,
                props: {
                    x: { value: '565', duration: 200, ease: 'Power1' },
                    y: { value: '510', duration: 200, ease: 'Power1' }
                },
                delay: 0,
                onComplete: function () {
                    var tween26 = game.scene.scenes[0].tweens.add({
                        targets: card4,
                        props: {
                            x: { value: '260', duration: 200, ease: 'Power1' },
                            y: { value: '510', duration: 200, ease: 'Power1' }
                        },
                        onComplete: function () {
                            var tween27 = game.scene.scenes[0].tweens.add({
                                targets: card4,
                                props: {
                                    x: { value: '870', duration: 200, ease: 'Power1' },
                                    y: { value: '510', duration: 200, ease: 'Power1' }
                                },
                                onComplete: function () {
                                    var tween28 = game.scene.scenes[0].tweens.add({
                                        targets: card4,
                                        props: {
                                            x: { value: '565', duration: 200, ease: 'Power1' },
                                            y: { value: '510', duration: 200, ease: 'Power1' }
                                        },
                                    });
                                }
                            });
                        }
                    });
                }
            });
            glowCard4.setPosition(565, 510);
        }
    }


    flip1(card1) {


        if (window.innerWidth < 1050) {
            timeline = this.tweens.timeline({
                onComplete: () => {
                    timeline.destroy()
                }
            })

            timeline.add({
                targets: card1,
                scale: 0.75,
                duration: 300,
            })

            timeline.add({
                targets: card1,
                scaleX: 0,
                duration: 300,
                delay: 0,
                onComplete: () => {
                    if (card1.texture.key === 'mainCard') {
                        card1.setTexture('card1')
                    }
                    else {
                        card1.setTexture('mainCard')
                    }
                }
            })

            timeline.add({
                targets: card1,
                scaleX: 0.75,
                duration: 300
            })

            timeline.add({
                targets: card1,
                scale: 0.8,
                duration: 300
            })

            timeline.play()
        }
        else {
            timeline = this.tweens.timeline({
                onComplete: () => {
                    timeline.destroy()
                }
            })

            timeline.add({
                targets: card1,
                scale: 1.01,
                duration: 300,
            })

            timeline.add({
                targets: card1,
                scaleX: 0,
                duration: 300,
                delay: 0,
                onComplete: () => {
                    if (card1.texture.key === 'mainCard') {
                        card1.setTexture('card1')
                    }
                    else {
                        card1.setTexture('mainCard')
                    }
                }
            })

            timeline.add({
                targets: card1,
                scaleX: 1.01,
                duration: 300
            })

            timeline.add({
                targets: card1,
                scale: 1,
                duration: 300
            })

            timeline.play()
        }
    }

    flip2(card2) {

        if (window.innerWidth < 1050) {
            timeline = this.tweens.timeline({
                onComplete: () => {
                    timeline.destroy()
                }
            })

            timeline.add({
                targets: card2,
                scale: 0.75,
                duration: 300,
            })

            timeline.add({
                targets: card2,
                scaleX: 0,
                duration: 300,
                delay: 0,
                onComplete: () => {
                    if (card2.texture.key === 'mainCard') {
                        card2.setTexture('card2')
                    }
                    else {
                        card2.setTexture('mainCard')
                    }
                }
            })

            timeline.add({
                targets: card2,
                scaleX: 0.75,
                duration: 300
            })

            timeline.add({
                targets: card2,
                scale: 0.8,
                duration: 300
            })

            timeline.play()
        }

        else {
            timeline = this.tweens.timeline({
                onComplete: () => {
                    timeline.destroy()
                }
            })

            timeline.add({
                targets: card2,
                scale: 1.01,
                duration: 300,
            })

            timeline.add({
                targets: card2,
                scaleX: 0,
                duration: 300,
                delay: 0,
                onComplete: () => {
                    if (card2.texture.key === 'mainCard') {
                        card2.setTexture('card2')
                    }
                    else {
                        card2.setTexture('mainCard')
                    }
                }
            })

            timeline.add({
                targets: card2,
                scaleX: 1.01,
                duration: 300
            })

            timeline.add({
                targets: card2,
                scale: 1,
                duration: 300
            })

            timeline.play()
        }
    }

    flip3(card3) {

        if (window.innerWidth < 1050) {
            timeline = this.tweens.timeline({
                onComplete: () => {
                    timeline.destroy()
                }
            })

            timeline.add({
                targets: card3,
                scale: 0.75,
                duration: 300,
            })

            timeline.add({
                targets: card3,
                scaleX: 0,
                duration: 300,
                delay: 0,
                onComplete: () => {
                    if (card3.texture.key === 'mainCard') {
                        card3.setTexture('card3')
                    }
                    else {
                        card3.setTexture('mainCard')
                    }
                }
            })

            timeline.add({
                targets: card3,
                scaleX: 0.75,
                duration: 300
            })

            timeline.add({
                targets: card3,
                scale: 0.8,
                duration: 300
            })

            timeline.play()
        }
        else {
            timeline = this.tweens.timeline({
                onComplete: () => {
                    timeline.destroy()
                }
            })

            timeline.add({
                targets: card3,
                scale: 1.01,
                duration: 300,
            })

            timeline.add({
                targets: card3,
                scaleX: 0,
                duration: 300,
                delay: 0,
                onComplete: () => {
                    if (card3.texture.key === 'mainCard') {
                        card3.setTexture('card3')
                    }
                    else {
                        card3.setTexture('mainCard')
                    }
                }
            })

            timeline.add({
                targets: card3,
                scaleX: 1.01,
                duration: 300
            })

            timeline.add({
                targets: card3,
                scale: 1,
                duration: 300
            })

            timeline.play()
        }
    }

    flip4(card4) {

        if (window.innerWidth < 1050) {
            timeline = this.tweens.timeline({
                onComplete: () => {
                    timeline.destroy()
                }
            })

            timeline.add({
                targets: card4,
                scale: 0.75,
                duration: 300,
            })

            timeline.add({
                targets: card4,
                scaleX: 0,
                duration: 300,
                delay: 0,
                onComplete: () => {
                    if (card4.texture.key === 'mainCard') {
                        card4.setTexture('card4')
                    }
                    else {
                        card4.setTexture('mainCard')
                    }
                }
            })

            timeline.add({
                targets: card4,
                scaleX: 0.75,
                duration: 300
            })

            timeline.add({
                targets: card4,
                scale: 0.8,
                duration: 300
            })

            timeline.play()
        }
        else {
            timeline = this.tweens.timeline({
                onComplete: () => {
                    timeline.destroy()
                }
            })

            timeline.add({
                targets: card4,
                scale: 1.01,
                duration: 300,
            })

            timeline.add({
                targets: card4,
                scaleX: 0,
                duration: 300,
                delay: 0,
                onComplete: () => {
                    if (card4.texture.key === 'mainCard') {
                        card4.setTexture('card4')
                    }
                    else {
                        card4.setTexture('mainCard')
                    }
                }
            })

            timeline.add({
                targets: card4,
                scaleX: 1.01,
                duration: 300
            })

            timeline.add({
                targets: card4,
                scale: 1,
                duration: 300
            })

            timeline.play()
        }
    }

    update() {

        if (betAmount >= 1000) {
            minButton.input.enabled = true;
            halfBet.input.enabled = true;
            minButton.setAlpha(1);
            halfBet.setAlpha(1);
            maxButton.input.enabled = false;
            twoMultiplier.input.enabled = false;
            maxButton.setAlpha(0.7);
            twoMultiplier.setAlpha(0.7);
            betAmount = 1000;
            betValue.setText(betAmount);
        }
        else if (betAmount <= 0.01) {
            maxButton.input.enabled = true;
            twoMultiplier.input.enabled = true;
            maxButton.setAlpha(1);
            twoMultiplier.setAlpha(1);
            minButton.input.enabled = false;
            halfBet.input.enabled = false;
            minButton.setAlpha(0.7);
            halfBet.setAlpha(0.7);
            betAmount = 0.01;
            betValue.setText(betAmount);
        }
        else {
            maxButton.input.enabled = true;
            twoMultiplier.input.enabled = true;
            maxButton.setAlpha(1);
            twoMultiplier.setAlpha(1);
            minButton.input.enabled = true;
            halfBet.input.enabled = true;
            minButton.setAlpha(1);
            halfBet.setAlpha(1);
        }

    }
}