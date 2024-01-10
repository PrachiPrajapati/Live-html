var history_btn;
var popup_btn;
var close_btn;
var button1;
var button2;
var button3;
var placebet_btn;
var timeString;
var timeText;
var popup_title;
var popup_subtitle_left;
var popup_subtitle_right;
var list_left_txt1;
var list_left_txt2;
var list_left_txt3;
var list_left_txt4;
var list_left_txt5;
var list_left_txt6;
var list_right_txt1;
var list_right_txt2;
var list_right_txt3;
var list_right_txt4;
var list_right_txt5;
var list_right_txt6;
var defaultAmount = 800;
var betAmount = (Math.floor(defaultAmount * 100) / 100).toFixed(2);
var halfBet, flipButton, betText, betValueBg, betValue, minmaxText;
var x2text;
var dividetext;
var minbuttontext;
var maxbuttontext;
var helpButton;
var minimumButton;
var divideButton;
var multiplyButton;
var maximumButton;



class GameScene extends Phaser.Scene
{
    constructor()
    {
        super({key:'gameScene'});
        
    }
    preload(){
    
    this.load.image('bg-panel', 'assets/images/main-panel.png');  
    this.load.image('icon-bg', 'assets/images/timer:history-common-button.png'); 
    
    this.load.image('history-icon', 'assets/images/history-icon.png'); 
    this.load.image('logo', 'assets/images/logo.png'); 
    this.load.image('homeicon', 'assets/images/home-icon.png');

    this.load.image('title-txt', 'assets/images/select-number-text.png');
    // this.load.image('number-box', 'assets/images/number-box.png'); 
    this.load.image('one-box', 'assets/images/1.png'); 
    this.load.image('two-box', 'assets/images/2.png'); 
    this.load.image('three-box', 'assets/images/3.png'); 

    this.load.image('bet-number-panel', 'assets/images/bet-number:amount-panel.png.png'); 

    this.load.image('number-box', 'assets/images/number-box.png'); 

    this.load.image('buttons-panel', 'assets/images/buttons-panel.png');  
    this.load.image('amount-button', 'assets/images/amount-button.png'); 
    this.load.image('place-bet', 'assets/images/place-bet.png');  
    this.load.image('popup', 'assets/images/common-popup.png');  
    this.load.image('popupbghorizonatl', 'assets/images/common-popup-horizontal.png');  
    this.load.image('close', 'assets/images/close.png');  

    this.load.image('footerPanel','assets/images/ui-panel.png');
    this.load.image('helpButton','assets/images/help.png');
    this.load.image('squareButton','assets/images/square.png');
    this.load.image('circleButton','assets/images/circle.png');
    this.load.image('rectangleButton','assets/images/rectangle.png');
    this.load.image('soundOn','assets/images/sound-on.png');
    this.load.image('soundOff','assets/images/sound-off.png');
    this.load.image('glow','assets/images/glow.png');
    this.load.image('mobile-panel','assets/images/mobile-panel.png');
    this.load.image('recentbeticon','assets/images/recent-bet-btn.png');
     
    }
    create(){


    // background panel
    var panelbg = this.add.image(710, 600, 'bg-panel');
    this.add.image(1600, 600, 'bet-number-panel');

    // adding two icons
    var history_icon_bg =this.add.image(210, 340, 'icon-bg');
    
    popup_btn = this.add.image(700,600,'popup');
    popup_btn.setScale(0);
    

    




    // close button
    close_btn = this.add.image(1070,230,'close').setInteractive({  cursor: 'pointer' })
    .on('pointerdown', () => { popup_btn.setScale(0)
        popup_btn.setDepth(0)
        close_btn.setScale(0)
        close_btn.setDepth(0)
        popup_title.setScale(0)
        popup_subtitle_left.setScale(0)
        popup_subtitle_right.setScale(0)
        list_left_txt1.setScale(0);
        list_left_txt2.setScale(0);
        list_left_txt3.setScale(0);
        list_left_txt4.setScale(0);
        list_left_txt5.setScale(0);
        list_left_txt6.setScale(0);
        list_right_txt1.setScale(0);
        list_right_txt2.setScale(0);
        list_right_txt3.setScale(0);
        list_right_txt4.setScale(0);
        list_right_txt5.setScale(0);
        list_right_txt6.setScale(0);
    });
    close_btn.setScale(0);
    history_btn = this.add.image(210, 340, 'history-icon').setInteractive({  cursor: 'pointer' })
    .on('pointerdown', () =>  history_popup_wrap());

    // popup body start
    popup_title = this.add.text(590, 270, 'Winners', {
        color: "#000",
        fontSize: 60,
        fontFamily: "AllerDisplay" });
   

    popup_subtitle_left = this.add.text(430, 350, 'Date', {
        color: "#000",
        fontSize: 40,
        fontFamily: "AllerDisplay" });
    
    popup_subtitle_right = this.add.text(820, 350, 'Number', {
        color: "#000",
        fontSize: 40,
        fontFamily: "AllerDisplay" });

    list_left_txt1 = this.add.text(430, 430, '01/01/2022', {color: "#000", fontSize: 35, fontFamily: "AllerDisplay" });
    list_left_txt2 = this.add.text(430, 500, '04/01/2022', {color: "#000", fontSize: 35, fontFamily: "AllerDisplay" });
    list_left_txt3 = this.add.text(430, 570, '06/01/2022', {color: "#000", fontSize: 35, fontFamily: "AllerDisplay" });
    list_left_txt4 = this.add.text(430, 640, '01/01/2022', {color: "#000", fontSize: 35, fontFamily: "AllerDisplay" });
    list_left_txt5 = this.add.text(430, 710, '04/01/2022', {color: "#000", fontSize: 35, fontFamily: "AllerDisplay" });
    list_left_txt6 = this.add.text(430, 780, '06/01/2022', {color: "#000", fontSize: 35, fontFamily: "AllerDisplay" });
    
    list_right_txt1 = this.add.text(830, 430, '03', {color: "#000", fontSize: 35, fontFamily: "AllerDisplay" });
    list_right_txt2 = this.add.text(830, 500, '01', {color: "#000", fontSize: 35, fontFamily: "AllerDisplay" });
    list_right_txt3 = this.add.text(830, 570, '02', {color: "#000", fontSize: 35, fontFamily: "AllerDisplay" });
    list_right_txt4 = this.add.text(830, 640, '03', {color: "#000", fontSize: 35, fontFamily: "AllerDisplay" });
    list_right_txt5 = this.add.text(830, 710, '01', {color: "#000", fontSize: 35, fontFamily: "AllerDisplay" });
    list_right_txt6 = this.add.text(830, 780, '02', {color: "#000", fontSize: 35, fontFamily: "AllerDisplay" });

    popup_title.setScale(0);
    popup_subtitle_left.setScale(0);
    popup_subtitle_right.setScale(0);
    list_left_txt1.setScale(0);
    list_left_txt2.setScale(0);
    list_left_txt3.setScale(0);
    list_left_txt4.setScale(0);
    list_left_txt5.setScale(0);
    list_left_txt6.setScale(0);
    list_right_txt1.setScale(0);
    list_right_txt2.setScale(0);
    list_right_txt3.setScale(0);
    list_right_txt4.setScale(0);
    list_right_txt5.setScale(0);
    list_right_txt6.setScale(0);



    // popup body part ends here


    // logo
    var logo = this.add.image(710, 150, 'logo');
    var home = this.add.image(80,150, 'homeicon');


    // title text
    var selectnumtitle = this.add.image(710, 340, 'title-txt');
    

    var resulttext = this.add.text(970,300,"Result will be declare at",{ fontSize: '20px', fill: '#fff', fontFamily: "AllerDisplay" })
    var resulttexttime = this.add.text(1080,350,"5 PM",{ fontSize: '40px', fill: '#fff', fontFamily: "AllerDisplay" }).setOrigin(0.5);
    // number boxes
    var button1glow = this.add.image(310,500,'glow').setScale(0);
    var button2glow = this.add.image(710,500,'glow').setScale(0);
    var button3glow = this.add.image(1100,500,'glow').setScale(0);
    button1 = this.add.image(310, 500, 'one-box').setInteractive({  cursor: 'pointer' })
                .on('pointerdown', () =>{
                    button1.setScale(1.1)
                    button1glow.setScale(1.03);
                    button2glow.setScale(0);
                    button3glow.setScale(0);
                } )
                .on('pointerup', () => button1.setScale(1));
    button2 = this.add.image(710, 500, 'two-box').setInteractive({  cursor: 'pointer' })
                .on('pointerdown', () => {
                    button2.setScale(1.1);
                    button1glow.setScale(0);
                    button2glow.setScale(1.03);
                    button3glow.setScale(0);
                })
                .on('pointerup', () => button2.setScale(1));
    button3 = this.add.image(1100, 500, 'three-box').setInteractive({  cursor: 'pointer' })
                .on('pointerdown', () => {
                    button3.setScale(1.1);
                    button1glow.setScale(0);
                    button2glow.setScale(0);
                    button3glow.setScale(1.03);
                })
                .on('pointerup', () => button3.setScale(1));

    
    placebet_btn = this.add.image(710, 680, 'place-bet').setInteractive({  cursor: 'pointer' })
                    .on('pointerdown', () => {
                        placebet_btn.setScale(1.1);
                        thankyoucloseicon.setScale(1);
                       thankyoutext.setScale(1);
                       popup_img.setScale(1);
                    })
                .on('pointerup', () => placebet_btn.setScale(1));
                if (getWidth() < 1050) {

                }
                else{
                    
                }
                

    var footerpanel = this.add.image(723, 840, 'footerPanel').setScale(0.75);
    var footerpanel2= this.add.image(370,1100, 'footerPanel').setScale(0); 


    //Minimum Button
    minimumButton = this.add.image(373, 840, 'squareButton')
    .setInteractive({   useHandCursor: true });

    minimumButton.on('pointerdown', () => {
        minimumButton.setScale(0.93);
        betAmount = 0.01;
        betValue.setText(betAmount.toFixed(2)); 
    });

    minimumButton.on('pointerup', () => {
        minimumButton.setScale(1); 
    });

    //Divide by 2
    divideButton = this.add.image(511, 840, 'circleButton')
    .setInteractive({   useHandCursor: true });

    divideButton.on('pointerdown', () => {
        divideButton.setScale(0.93);
        betAmount = betAmount / 2;
        betValue.setText(betAmount.toFixed(2)); 
    });

    divideButton.on('pointerup', () => {
        divideButton.setScale(1); 
    });

    //Bet Amount - Not Interactable
    var footerractanglebg = this.add.image(723, 840, 'rectangleButton');
     betValue = this.add.text(716, 840, betAmount, { fontSize: '63px', fill: '#014156', fontFamily: "AllerDisplay" });        
        betValue.setOrigin(0.5);
    
    //Multiply by 2
    multiplyButton = this.add.image(935, 840, 'circleButton')
    .setInteractive({   useHandCursor: true });

    multiplyButton.on('pointerdown', () => {
        multiplyButton.setScale(0.93);
        betAmount = betAmount * 2;
        betValue.setText(betAmount.toFixed(2)); 
    });

    multiplyButton.on('pointerup', () => {
        multiplyButton.setScale(1);
    });

    //Maximum Button
    maximumButton = this.add.image(1073, 840, 'squareButton')
    .setInteractive({   useHandCursor: true });

    maximumButton.on('pointerdown', () => {
        maximumButton.setScale(0.93); 
        betAmount = 1000;
        betValue.setText(betAmount);
    });

    maximumButton.on('pointerup', () => {
        maximumButton.setScale(1);
    });
    x2text = this.add.text(935, 840, "X2",{ fontSize: '45px', fill: '#014156', fontFamily: "AllerDisplay" }).setOrigin(0.5);
    dividetext = this.add.text(511, 840, "/2",{ fontSize: '45px', fill: '#014156', fontFamily: "AllerDisplay" }).setOrigin(0.5);
    minbuttontext = this.add.text(373, 840, "MIN",{ fontSize: '40px', fill: '#014156', fontFamily: "AllerDisplay" }).setOrigin(0.5);
    maxbuttontext = this.add.text(1073, 840, "MAX",{ fontSize: '40px', fill: '#014156', fontFamily: "AllerDisplay" }).setOrigin(0.5);
                

    // var btn_txt = this.add.text( 710, 840, 'PLACE BET');
    var mobilepopup = this.add.image(370,640,'popup').setScale(0)
    var betheading1 = this.add.text( 1400, 335, '      BET\n NUMBER' , {color: "#000", fontSize: 35, fontFamily: "AllerDisplay" });
    var betheading2 = this.add.text( 1610, 350, 'AMOUNT', {color: "#000",fontSize: 40,fontFamily: "AllerDisplay" });

    var betnumber1 = this.add.text( 1455, 450, '1' , {color: "#000", fontSize: 40, fontFamily: "AllerDisplay" });
    var betnumber2 = this.add.text( 1455, 520, '3', {color: "#000", fontSize: 40, fontFamily: "AllerDisplay" });
    var betnumber3 = this.add.text( 1455, 590, '2', {color: "#000", fontSize: 40, fontFamily: "AllerDisplay" });
    var betnumber4 = this.add.text( 1455, 660, '1' , {color: "#000", fontSize: 40, fontFamily: "AllerDisplay" });
    var betnumber5 = this.add.text( 1455, 730, '3', {color: "#000", fontSize: 40, fontFamily: "AllerDisplay" });
    var betnumber6 = this.add.text( 1455, 800, '2', {color: "#000", fontSize: 40, fontFamily: "AllerDisplay" });


    var betamount1 = this.add.text( 1650, 450, '1000' , {color: "#000", fontSize: 40, fontFamily: "AllerDisplay" });
    var betamount2 = this.add.text( 1650, 520, '500', {color: "#000", fontSize: 40, fontFamily: "AllerDisplay" });
    var betamount3 = this.add.text(1660, 590, '100', {color: "#000", fontSize: 40, fontFamily: "AllerDisplay" });
    var betamount4 = this.add.text( 1650, 660, '1000' , {color: "#000", fontSize: 40, fontFamily: "AllerDisplay" });
    var betamount5 = this.add.text( 1650, 730, '500', {color: "#000", fontSize: 40, fontFamily: "AllerDisplay" });
    var betamount6 = this.add.text(1660, 800, '100', {color: "#000", fontSize: 40, fontFamily: "AllerDisplay" });

    var historyclose_btn = this.add.image(660,320,'close').setScale(0).setInteractive({  cursor: 'pointer' })
    .on('pointerdown', () => { mobilepopup.setScale(0)
        mobilepopup.setDepth(0)
        historyclose_btn.setScale(0)
        historyclose_btn.setDepth(0)
        popup_title.setScale(0)
        betheading1.setScale(0)
        betheading2.setScale(0)
        betnumber1.setScale(0);
        betnumber2.setScale(0);
        betnumber3.setScale(0);
        betnumber4.setScale(0);
        betnumber5.setScale(0);
        betnumber6.setScale(0);
        betamount1.setScale(0);
        betamount2.setScale(0);
        betamount3.setScale(0);
        betamount4.setScale(0);
        betamount5.setScale(0);
        betamount6.setScale(0);
    });

    var popup_img = this.add.image(700,600,'popupbghorizonatl').setScale(0);
    var thankyoutext = this.add.text(530,470,"THANK \n  YOU",{ fontSize: '120px', fill: '#014156', fontFamily: "AllerDisplay" }).setScale(0);
    var thankyoucloseicon = this.add.image(1170,320,'close').setInteractive({  cursor: 'pointer' }).setScale(0)
    
    .on('pointerdown', () => { 
       thankyoucloseicon.setScale(0);
       thankyoutext.setScale(0);
       popup_img.setScale(0);
    });

    if (getWidth() < 1050) {
        logo.setScale(0.55);
        logo.setPosition(290,100);
        home.setPosition(120, 105);
        history_btn.setPosition(480,100);
        history_icon_bg.setPosition(480,100);
        panelbg.setPosition(380, 570);
        panelbg.setScale(0.85)
        panelbg.setTexture("mobile-panel");
        button1.setScale(0.7)
        button2.setScale(0.7)
        button3.setScale(0.7)
        button1.setPosition(250,450);
        button2.setPosition(520,450);
        button3.setPosition(390,630);
        button1glow.setPosition(250,450);
        button2glow.setPosition(520,450);
        button3glow.setPosition(390,630);
        button1.on('pointerdown', () =>{
                    button1.setScale(0.8)
                    button1glow.setScale(0.75);
                    button2glow.setScale(0);
                    button3glow.setScale(0);
                } )
                .on('pointerup', () => button1.setScale(0.7));
        button2.on('pointerdown', () =>{
                    button2.setScale(0.8)
                    button1glow.setScale(0);
                    button2glow.setScale(0.75);
                    button3glow.setScale(0);
                } )
                .on('pointerup', () => button2.setScale(0.7));
        button3.on('pointerdown', () =>{
                    button3.setScale(0.8)
                    button1glow.setScale(0);
                    button2glow.setScale(0);
                    button3glow.setScale(0.75);
                } )
                .on('pointerup', () => button3.setScale(0.7));
        selectnumtitle.setScale(0.5);
        selectnumtitle.setPosition(370,330)
        footerpanel.setPosition(370,990);
        footerpanel.setScale(0.45);
        footerpanel2.setScale(0.45)
        minimumButton.setScale(0.7);
        minimumButton.setPosition(220,1105);
        minimumButton.on('pointerdown', () => {
            minimumButton.setScale(0.65);
        });
        minimumButton.on('pointerup', () => {
            minimumButton.setScale(0.7); 
        });
        divideButton.setScale(0.75);
        divideButton.setPosition(320,1105);
        divideButton.on('pointerdown', () => {
            divideButton.setScale(0.7);
        });
        divideButton.on('pointerup', () => {
            divideButton.setScale(0.75); 
        });
        multiplyButton.setScale(0.75);
        multiplyButton.setPosition(420,1105);
        multiplyButton.on('pointerdown', () => {
            multiplyButton.setScale(0.7);
        });
        multiplyButton.on('pointerup', () => {
            multiplyButton.setScale(0.75); 
        });
        maximumButton.setScale(0.75);
        maximumButton.setPosition(520,1105);
        maximumButton.on('pointerdown', () => {
            maximumButton.setScale(0.7);
        });
        maximumButton.on('pointerup', () => {
            maximumButton.setScale(0.75); 
        });
        minbuttontext.setPosition(220,1105);
        dividetext.setPosition(320,1105);
        x2text.setPosition(420,1105);
        maxbuttontext.setPosition(520,1105);
        minbuttontext.setStyle({fontSize: '30px'});
        dividetext.setStyle({fontSize: '35px'});
        x2text.setStyle({fontSize: '35px'});
        maxbuttontext.setStyle({fontSize: '35px'});
        footerractanglebg.setPosition(370,990);
        footerractanglebg.setScale(0.8);
        betValue.setPosition(370,990);
        betValue.setStyle({fontSize: '50px'});
        placebet_btn.setPosition(370,820);
        placebet_btn.setScale(0.9);
        popup_btn.setPosition(380,620);
        popup_btn.setScale(0)
        popup_img.setPosition(400,600)
        thankyoutext.setPosition(250,500)
        thankyoutext.setStyle({fontSize: '95px'});
        thankyoucloseicon.setPosition(660,450)
        placebet_btn.on('pointerup', () => {
            popup_img.setScale(0.6);

        });
        
        close_btn.setPosition(660,320);
        popup_subtitle_left.setPosition(130,420);
        list_left_txt1.setPosition(130,490);
        list_left_txt2.setPosition(130,560);
        list_left_txt3.setPosition(130,630);
        list_left_txt4.setPosition(130,700);
        list_left_txt5.setPosition(130,770);
        list_left_txt6.setPosition(130,840);

        popup_subtitle_right.setPosition(470,420);
        list_right_txt1.setPosition(530,490);
        list_right_txt2.setPosition(530,560);
        list_right_txt3.setPosition(530,630);
        list_right_txt4.setPosition(530,700);
        list_right_txt5.setPosition(530,770);
        list_right_txt6.setPosition(530,840);
        popup_title.setPosition(270,350);

        mobilepopup.setScale(0)
        mobilepopup.setDepth(0)
        historyclose_btn.setScale(0)
        historyclose_btn.setDepth(0)
        popup_title.setScale(0)
        betheading1.setScale(0)
        betheading2.setScale(0)
        betnumber1.setScale(0);
        betnumber2.setScale(0);
        betnumber3.setScale(0);
        betnumber4.setScale(0);
        betnumber5.setScale(0);
        betnumber6.setScale(0);
        betamount1.setScale(0);
        betamount2.setScale(0);
        betamount3.setScale(0);
        betamount4.setScale(0);
        betamount5.setScale(0);
        betamount6.setScale(0);


        var recentbeticon = this.add.image(610,100,'recentbeticon').setScale(1.05)

        .setInteractive({   useHandCursor: true })
        .on('pointerup', () => {
            mobilepopup.setScale(0.8)
            historyclose_btn.setScale(1)
            historyclose_btn.setDepth(1)
            popup_title.setScale(1)
            betheading1.setScale(1)
            betheading2.setScale(1)
            betnumber1.setScale(1);
            betnumber2.setScale(1);
            betnumber3.setScale(1);
            betnumber4.setScale(1);
            betnumber5.setScale(1);
            betnumber6.setScale(1);
            betamount1.setScale(1);
            betamount2.setScale(1);
            betamount3.setScale(1);
            betamount4.setScale(1);
            betamount5.setScale(1);
            betamount6.setScale(1);
        });

        betnumber1.setPosition(185,490);
        betnumber2.setPosition(185,560);
        betnumber3.setPosition(185,630);
        betnumber4.setPosition(185,700);
        betnumber5.setPosition(185,770);
        betnumber6.setPosition(185,840);

        betamount1.setPosition(510,490);
        betamount2.setPosition(510,560);
        betamount3.setPosition(510,630);
        betamount4.setPosition(510,700);
        betamount5.setPosition(510,770);
        betamount6.setPosition(510,840);
        betheading1.setPosition(130,390);
        betheading2.setPosition(460,410);



    }
}

    

    update(){
        if (betAmount >= 1000) {
            minimumButton.input.enabled = true;
            divideButton.input.enabled = true;
            minimumButton.setAlpha(1);
            divideButton.setAlpha(1);
            maximumButton.input.enabled = false;
            multiplyButton.input.enabled = false;
            maximumButton.setAlpha(0.7);
            multiplyButton.setAlpha(0.7);
            betAmount = 1000;
            betValue.setText(betAmount);
        }
        else if (betAmount <= 0.01) {
            maximumButton.input.enabled = true;
            multiplyButton.input.enabled = true;
            maximumButton.setAlpha(1);
            multiplyButton.setAlpha(1);
            minimumButton.input.enabled = false;
            divideButton.input.enabled = false;
            minimumButton.setAlpha(0.7);
            divideButton.setAlpha(0.7);
            betAmount = 0.01;
            betValue.setText(betAmount);
        }
        else {
            maximumButton.input.enabled = true;
            multiplyButton.input.enabled = true;
            maximumButton.setAlpha(1);
            multiplyButton.setAlpha(1);
            minimumButton.input.enabled = true;
            divideButton.input.enabled = true;
            minimumButton.setAlpha(1);
            divideButton.setAlpha(1);
        }

    }

}

function history_popup_wrap()
{
    if (getWidth() < 1050){
        popup_btn.setScale(0.8);
    }
    else{
        popup_btn.setScale(1)
    }    
    popup_btn.setDepth(1) 
    close_btn.setScale(1)
    close_btn.setDepth(1)
    popup_title.setScale(1);
    popup_subtitle_left.setScale(1);
    popup_subtitle_right.setScale(1);
    list_left_txt1.setScale(1);
    list_left_txt2.setScale(1);
    list_left_txt3.setScale(1);
    list_left_txt4.setScale(1);
    list_left_txt5.setScale(1);
    list_left_txt6.setScale(1);
    list_right_txt1.setScale(1);
    list_right_txt2.setScale(1);
    list_right_txt3.setScale(1);
    list_right_txt4.setScale(1);
    list_right_txt5.setScale(1);
    list_right_txt6.setScale(1);
    popup_title.setDepth(1);
    popup_subtitle_left.setDepth(1);
    popup_subtitle_right.setDepth(1);
    list_left_txt1.setDepth(1);
    list_left_txt2.setDepth(1);
    list_left_txt3.setDepth(1);
    list_left_txt4.setDepth(1);
    list_left_txt5.setDepth(1);
    list_left_txt6.setDepth(1);
    list_right_txt1.setDepth(1);
    list_right_txt2.setDepth(1);
    list_right_txt3.setDepth(1);
    list_right_txt4.setDepth(1);
    list_right_txt5.setDepth(1);
    list_right_txt6.setDepth(1);  

}

