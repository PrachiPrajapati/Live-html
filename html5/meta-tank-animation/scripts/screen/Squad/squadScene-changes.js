var homebtn;

var commonwhiteract1;
var commonwhiteract2;
var commonwhiteract3;
var commonwhiteract4;
var commonwhiteract5;
var commonwhiteract6;
var commonwhiteract7;
var commonwhiteract8;
var commonwhiteract9;
var commonwhiteract10;
var commonwhiteract11;
var commonwhiteract12;
var commonwhiteract13;
var commonwhiteract14;
var commonwhiteract15;
var commonwhiteract16;
var commonwhiteract17;
var commonwhiteract18;
var commonwhiteract19;
var commonwhiteract20;
var commonwhiteract21;
var commonwhiteract22;
var commonwhiteract23;
var commonwhiteract24;
var commonwhiteract25;
var commonwhiteract26;
var commonwhiteract27;
var commonwhiteract28;
var commonwhiteract29;
var commonwhiteract30;
var commonwhiteract31;
var commonwhiteract32;
var commonwhiteract33;
var commonwhiteract34;
var commonwhiteract35;
var commonwhiteract36;
var commonwhiteract37;
var commonwhiteract38;
var commonwhiteract39;
var commonwhiteract40;
var commonwhiteract41;
var commonwhiteract42;
var commonwhiteract43;
var commonwhiteract44;
var commonwhiteract45;
var commonwhiteract46;
var commonwhiteract47;
var commonwhiteract48;
var commonwhiteract49;
var commonwhiteract50;
var commonwhiteract51;
var commonwhiteract52;
var commonwhiteract53;
var commonwhiteract54;
var commonwhiteract55;
var commonwhiteract56;
var commonwhiteract57;
var commonwhiteract58;
var commonwhiteract59;
var commonwhiteract60;

var strangthvalue1;
var attckvalue1;
var damagevalue1;
var defencevalue1;
var strangthvalue2;
var attckvalue2;
var damagevalue2;
var defencevalue2;
var strangthvalue3;
var attckvalue3;
var damagevalue3;
var defencevalue3;

var strangthvalue4;
var attckvalue4;
var damagevalue4;
var defencevalue4;
var strangthvalue5;
var attckvalue5;
var damagevalue5;
var defencevalue5;

var strangthvalue6;
var attckvalue6;
var damagevalue6;
var defencevalue6;
var strangthvalue7;
var attckvalue7;
var damagevalue7;
var defencevalue7;
var strangthvalue8;
var attckvalue8;
var damagevalue8;
var defencevalue8;
var strangthvalue9;
var attckvalue9;
var damagevalue9;
var defencevalue9;
var strangthvalue10;
var attckvalue10;
var damagevalue10;
var defencevalue10;
var strangthvalue11;
var attckvalue11;
var damagevalue11;
var defencevalue11;
var strangthvalue12;
var attckvalue12;
var damagevalue12;
var defencevalue12;
var strangthvalue13;
var attckvalue13;
var damagevalue13;
var defencevalue13;
var strangthvalue14;
var attckvalue14;
var damagevalue14;
var defencevalue14;
var strangthvalue15;
var attckvalue15;
var damagevalue15;
var defencevalue15;



var strangthract;
var attckpowerract;
var damageract;
var defenceract;
var strangthract1;
var attckpowerract1;
var damageract1;
var defenceract1;
var strangthract2;
var attckpowerract2;
var damageract2;
var defenceract2;
var strangthract3;
var attckpowerract3;
var damageract3;
var defenceract3;
var strangthract4;
var attckpowerract4;
var damageract4;
var defenceract4;
var strangthract5;
var attckpowerract5;
var damageract5;
var defenceract5;
var strangthract6;
var attckpowerract6;
var damageract6;
var defenceract6;
var strangthract7;
var attckpowerract7;
var damageract7;
var defenceract7;
var strangthract8;
var attckpowerract8;
var damageract8;
var defenceract8;
var strangthract9;
var attckpowerract9;
var damageract9;
var defenceract9;
var strangthract10;
var attckpowerract10;
var damageract10;
var defenceract10;
var strangthract11;
var attckpowerract11;
var damageract11;
var defenceract11;
var strangthract12;
var attckpowerract12;
var damageract12;
var defenceract12;
var strangthract13;
var attckpowerract13;
var damageract13;
var defenceract13;
var strangthract14;
var attckpowerract14;
var damageract14;
var defenceract14;

var strengthlabel;
var attacklabel;
var damagelabel;
var defencelabel;
var strengthlabel1;
var attacklabel1;
var damagelabel1;
var defencelabel1;
var strengthlabel2;
var attacklabel2;
var damagelabel2;
var defencelabel2;
var strengthlabel3;
var attacklabel3;
var damagelabel3;
var defencelabel3;
var strengthlabel4;
var attacklabel4;
var damagelabel4;
var defencelabel4;
var strengthlabel5;
var attacklabel5;
var damagelabel5;
var defencelabel5;
var strengthlabel6;
var attacklabel6;
var damagelabel6;
var defencelabel6;
var strengthlabel7;
var attacklabel7;
var damagelabel7;
var defencelabel7;
var strengthlabel8;
var attacklabel8;
var damagelabel8;
var defencelabel8;
var strengthlabel9;
var attacklabel9;
var damagelabel9;
var defencelabel9;
var strengthlabel10;
var attacklabel10;
var damagelabel10;
var defencelabel10;
var strengthlabel11;
var attacklabel11;
var damagelabel11;
var defencelabel11;
var strengthlabel12;
var attacklabel12;
var damagelabel12;
var defencelabel12;
var strengthlabel13;
var attacklabel13;
var damagelabel13;
var defencelabel13;
var strengthlabel14;
var attacklabel14;
var damagelabel14;
var defencelabel14;

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
            
           
            // var x = 290;
            // var y = 260;
            // for (var i = 1; i <= 15; i++) {
                
            //     this.add.image(x,y,'troopslistbg').setOrigin(0,0);
            //     x += 280;

            //     for(j=0; j == 5; j++){
            //         if(i == 5){
            //             console.log("helllo");
            //             y += 350;
            //             x = 290;
            //         }
            //     }
            // }

            var tankbg1 = this.add.image(0,10,'troopslistbg').setOrigin(0,0).setScale(1.25);  
            var tank1 = this.add.image(50,50,'tank22').setOrigin(0,0).setScale(0.45); 
            this.scrollContent1(175,230,175,250,175,270,175,290,115,225,115,245,115,265,115,285,110,235,110,255,110,275,110,295); 

            var tankbg2 = this.add.image(280,10,'troopslistbg').setOrigin(0,0).setScale(1.25); 
            var tank2 = this.add.image(330,50,'tank22').setOrigin(0,0).setScale(0.45);  
            this.scrollContent2(455,230,455,250,455,270,455,290,395,225,395,245,395,265,395,285,390,235,390,255,390,275,390,295); 

            var tankbg3 = this.add.image(560,10,'troopslistbg').setOrigin(0,0).setScale(1.25); 
            var tank3 = this.add.image(610,50,'tank22').setOrigin(0,0).setScale(0.45);   
            this.scrollContent3(735,230,735,250,735,270,735,290,675,225,675,245,675,265,675,285,670,235,670,255,670,275,670,295);
            
            var tankbg4 = this.add.image(840,10,'troopslistbg').setOrigin(0,0).setScale(1.25);  
            var tank4 = this.add.image(890,50,'tank22').setOrigin(0,0).setScale(0.45);    
            this.scrollContent4(1015,230,1015,250,1015,270,1015,290,955,225,955,245,955,265,955,285,950,235,950,255,950,275,950,295);
            
            var tankbg5 = this.add.image(1120,10,'troopslistbg').setOrigin(0,0).setScale(1.25);  
            var tank5 = this.add.image(1170,50,'tank22').setOrigin(0,0).setScale(0.45);    
            this.scrollContent5(1295,230,1295,250,1295,270,1295,290,1235,225,1235,245,1235,265,1235,285,1230,235,1230,255,1230,275,1230,295);

            var tankbg6 = this.add.image(0,360,'troopslistbg').setOrigin(0,0).setScale(1.25);  
            var tank6 = this.add.image(50,400,'tank22').setOrigin(0,0).setScale(0.45);   
            this.scrollContent6(175,580,175,600,175,620,175,640,115,575,115,595,115,615,115,635,110,585,110,605,110,625,110,645); 

            var tankbg7 = this.add.image(280,360,'troopslistbg').setOrigin(0,0).setScale(1.25);  
            var tank7 = this.add.image(330,400,'tank22').setOrigin(0,0).setScale(0.45); 
            this.scrollContent7(455,580,455,600,455,620,455,640,395,575,395,595,395,615,395,635,390,585,390,605,390,625,390,645); 

            var tankbg8 = this.add.image(560,360,'troopslistbg').setOrigin(0,0).setScale(1.25);  
            var tank8 = this.add.image(610,400,'tank22').setOrigin(0,0).setScale(0.45);
            this.scrollContent8(735,580,735,600,735,620,735,640,675,575,675,595,675,615,675,635,670,585,670,605,670,625,670,645); 

            var tankbg9 = this.add.image(840,360,'troopslistbg').setOrigin(0,0).setScale(1.25);  
            var tank9 = this.add.image(890,400,'tank22').setOrigin(0,0).setScale(0.45); 
            this.scrollContent9(1015,580,1015,600,1015,620,1015,640,955,575,955,595,955,615,955,635,950,585,950,605,950,625,950,645); 

            var tankbg10 = this.add.image(1120,360,'troopslistbg').setOrigin(0,0).setScale(1.25);
            var tank10 = this.add.image(1170,400,'tank22').setOrigin(0,0).setScale(0.45); 
            this.scrollContent10(1295,580,1295,600,1295,620,1295,640,1235,575,1235,595,1235,615,1235,635,1230,585,1230,605,1230,625,1230,645); 

            var tankbg11 = this.add.image(0,710,'troopslistbg').setOrigin(0,0).setScale(1.25); 
            var tank11 = this.add.image(50,750,'tank22').setOrigin(0,0).setScale(0.45); 
            this.scrollContent11(175,930,175,950,175,970,175,990,115,925,115,945,115,965,115,985,110,935,110,955,110,975,110,995); 

            var tankbg12 = this.add.image(280,710,'troopslistbg').setOrigin(0,0).setScale(1.25);  
            var tank12 = this.add.image(330,750,'tank22').setOrigin(0,0).setScale(0.45);  
            this.scrollContent12(455,930,455,950,455,970,455,990,395,925,395,945,395,965,395,985,390,935,390,955,390,975,390,995); 

            var tankbg13 = this.add.image(560,710,'troopslistbg').setOrigin(0,0).setScale(1.25);  
            var tank13 = this.add.image(610,750,'tank22').setOrigin(0,0).setScale(0.45);    
            this.scrollContent13(735,930,735,950,735,970,735,990,675,925,675,945,675,965,675,985,670,935,670,955,670,975,670,995); 

            var tankbg14 = this.add.image(840,710,'troopslistbg').setOrigin(0,0).setScale(1.25);  
            var tank14 = this.add.image(890,750,'tank22').setOrigin(0,0).setScale(0.45);    
            this.scrollContent14(1015,930,1015,950,1015,970,1015,990,955,925,955,945,955,965,955,985,950,935,950,955,950,975,950,995); 

            var tankbg15 = this.add.image(1120,710,'troopslistbg').setOrigin(0,0).setScale(1.25);  
            var tank15 = this.add.image(1170,750,'tank22').setOrigin(0,0).setScale(0.45);    
            this.scrollContent15(1295,930,1295,950,1295,970,1295,990,1235,925,1235,945,1235,965,1235,985,1230,935,1230,955,1230,975,1230,995); 

            this.tankContainer.add(tankbg1);
            this.tankContainer.add(tankbg2);
            this.tankContainer.add(tankbg3);
            this.tankContainer.add(tankbg4);
            this.tankContainer.add(tankbg5);
            this.tankContainer.add(tankbg6);
            this.tankContainer.add(tankbg7);
            this.tankContainer.add(tankbg8);
            this.tankContainer.add(tankbg9);
            this.tankContainer.add(tankbg10);
            this.tankContainer.add(tankbg11);
            this.tankContainer.add(tankbg12);
            this.tankContainer.add(tankbg13);
            this.tankContainer.add(tankbg14);
            this.tankContainer.add(tankbg15);
            this.tankContainer.add(tank1);
            this.tankContainer.add(tank2);
            this.tankContainer.add(tank3);
            this.tankContainer.add(tank4);
            this.tankContainer.add(tank5);
            this.tankContainer.add(tank6);
            this.tankContainer.add(tank7);
            this.tankContainer.add(tank8);
            this.tankContainer.add(tank9);
            this.tankContainer.add(tank10);
            this.tankContainer.add(tank11);
            this.tankContainer.add(tank12);
            this.tankContainer.add(tank13);
            this.tankContainer.add(tank14);
            this.tankContainer.add(tank15);
            
            this.tankContainer.add(commonwhiteract1);
            this.tankContainer.add(commonwhiteract2);
            this.tankContainer.add(commonwhiteract3);
            this.tankContainer.add(commonwhiteract4);
            this.tankContainer.add(commonwhiteract5);
            this.tankContainer.add(commonwhiteract6);
            this.tankContainer.add(commonwhiteract7);
            this.tankContainer.add(commonwhiteract8);
            this.tankContainer.add(commonwhiteract9);
            this.tankContainer.add(commonwhiteract10);
            this.tankContainer.add(commonwhiteract11);
            this.tankContainer.add(commonwhiteract12);
            this.tankContainer.add(commonwhiteract13);
            this.tankContainer.add(commonwhiteract14);
            this.tankContainer.add(commonwhiteract15);
            this.tankContainer.add(commonwhiteract16);
            this.tankContainer.add(commonwhiteract17);
            this.tankContainer.add(commonwhiteract18);
            this.tankContainer.add(commonwhiteract19);
            this.tankContainer.add(commonwhiteract20);
            this.tankContainer.add(commonwhiteract21);
            this.tankContainer.add(commonwhiteract22);
            this.tankContainer.add(commonwhiteract23);
            this.tankContainer.add(commonwhiteract24);
            this.tankContainer.add(commonwhiteract25);
            this.tankContainer.add(commonwhiteract26);
            this.tankContainer.add(commonwhiteract27);
            this.tankContainer.add(commonwhiteract28);
            this.tankContainer.add(commonwhiteract29);
            this.tankContainer.add(commonwhiteract30);
            this.tankContainer.add(commonwhiteract31);
            this.tankContainer.add(commonwhiteract32);
            this.tankContainer.add(commonwhiteract33);
            this.tankContainer.add(commonwhiteract34);
            this.tankContainer.add(commonwhiteract35);
            this.tankContainer.add(commonwhiteract36);
            this.tankContainer.add(commonwhiteract37);
            this.tankContainer.add(commonwhiteract38);
            this.tankContainer.add(commonwhiteract39);
            this.tankContainer.add(commonwhiteract40);
            this.tankContainer.add(commonwhiteract41);
            this.tankContainer.add(commonwhiteract42);
            this.tankContainer.add(commonwhiteract43);
            this.tankContainer.add(commonwhiteract44);
            this.tankContainer.add(commonwhiteract45);
            this.tankContainer.add(commonwhiteract46);
            this.tankContainer.add(commonwhiteract47);
            this.tankContainer.add(commonwhiteract48);
            this.tankContainer.add(commonwhiteract49);
            this.tankContainer.add(commonwhiteract50);
            this.tankContainer.add(commonwhiteract51);
            this.tankContainer.add(commonwhiteract52);
            this.tankContainer.add(commonwhiteract53);
            this.tankContainer.add(commonwhiteract54);
            this.tankContainer.add(commonwhiteract55);
            this.tankContainer.add(commonwhiteract56);
            this.tankContainer.add(commonwhiteract57);
            this.tankContainer.add(commonwhiteract58);
            this.tankContainer.add(commonwhiteract59);
            this.tankContainer.add(commonwhiteract60);

            this.tankContainer.add(strangthract);
            this.tankContainer.add(attckpowerract);
            this.tankContainer.add(damageract);
            this.tankContainer.add(defenceract);
            this.tankContainer.add(strangthract1);
            this.tankContainer.add(attckpowerract1);
            this.tankContainer.add(damageract1);
            this.tankContainer.add(defenceract1);
            this.tankContainer.add(strangthract2);
            this.tankContainer.add(attckpowerract2);
            this.tankContainer.add(damageract2);
            this.tankContainer.add(defenceract2);
            this.tankContainer.add(strangthract3);
            this.tankContainer.add(attckpowerract3);
            this.tankContainer.add(damageract3);
            this.tankContainer.add(defenceract3);
            this.tankContainer.add(strangthract4);
            this.tankContainer.add(attckpowerract4);
            this.tankContainer.add(damageract4);
            this.tankContainer.add(defenceract4);
            this.tankContainer.add(strangthract5);
            this.tankContainer.add(attckpowerract5);
            this.tankContainer.add(damageract5);
            this.tankContainer.add(defenceract5);
            this.tankContainer.add(strangthract6);
            this.tankContainer.add(attckpowerract6);
            this.tankContainer.add(damageract6);
            this.tankContainer.add(defenceract6);
            this.tankContainer.add(strangthract7);
            this.tankContainer.add(attckpowerract7);
            this.tankContainer.add(damageract7);
            this.tankContainer.add(defenceract7);
            this.tankContainer.add(strangthract8);
            this.tankContainer.add(attckpowerract8);
            this.tankContainer.add(damageract8);
            this.tankContainer.add(defenceract8);
            this.tankContainer.add(strangthract9);
            this.tankContainer.add(attckpowerract9);
            this.tankContainer.add(damageract9);
            this.tankContainer.add(defenceract9);
            this.tankContainer.add(strangthract10);
            this.tankContainer.add(attckpowerract10);
            this.tankContainer.add(damageract10);
            this.tankContainer.add(defenceract10);
            this.tankContainer.add(strangthract11);
            this.tankContainer.add(attckpowerract11);
            this.tankContainer.add(damageract11);
            this.tankContainer.add(defenceract11);
            this.tankContainer.add(strangthract12);
            this.tankContainer.add(attckpowerract12);
            this.tankContainer.add(damageract12);
            this.tankContainer.add(defenceract12);
            this.tankContainer.add(strangthract13);
            this.tankContainer.add(attckpowerract13);
            this.tankContainer.add(damageract13);
            this.tankContainer.add(defenceract13);
            this.tankContainer.add(strangthract14);
            this.tankContainer.add(attckpowerract14);
            this.tankContainer.add(damageract14);
            this.tankContainer.add(defenceract14);

            this.tankContainer.add(strengthlabel);
            this.tankContainer.add(attacklabel);
            this.tankContainer.add(damagelabel);
            this.tankContainer.add(defencelabel);
            this.tankContainer.add(strengthlabel1);
            this.tankContainer.add(attacklabel1);
            this.tankContainer.add(damagelabel1);
            this.tankContainer.add(defencelabel1);
            this.tankContainer.add(strengthlabel2);
            this.tankContainer.add(attacklabel2);
            this.tankContainer.add(damagelabel2);
            this.tankContainer.add(defencelabel2);
            this.tankContainer.add(strengthlabel3);
            this.tankContainer.add(attacklabel3);
            this.tankContainer.add(damagelabel3);
            this.tankContainer.add(defencelabel3);
            this.tankContainer.add(strengthlabel4);
            this.tankContainer.add(attacklabel4);
            this.tankContainer.add(damagelabel4);
            this.tankContainer.add(defencelabel4);
            this.tankContainer.add(strengthlabel5);
            this.tankContainer.add(attacklabel5);
            this.tankContainer.add(damagelabel5);
            this.tankContainer.add(defencelabel5);
            this.tankContainer.add(strengthlabel6);
            this.tankContainer.add(attacklabel6);
            this.tankContainer.add(damagelabel6);
            this.tankContainer.add(defencelabel6);
            this.tankContainer.add(strengthlabel7);
            this.tankContainer.add(attacklabel7);
            this.tankContainer.add(damagelabel7);
            this.tankContainer.add(defencelabel7);
            this.tankContainer.add(strengthlabel8);
            this.tankContainer.add(attacklabel8);
            this.tankContainer.add(damagelabel8);
            this.tankContainer.add(defencelabel8);
            this.tankContainer.add(strengthlabel9);
            this.tankContainer.add(attacklabel9);
            this.tankContainer.add(damagelabel9);
            this.tankContainer.add(defencelabel9);
            this.tankContainer.add(strengthlabel10);
            this.tankContainer.add(attacklabel10);
            this.tankContainer.add(damagelabel10);
            this.tankContainer.add(defencelabel10);
            this.tankContainer.add(strengthlabel11);
            this.tankContainer.add(attacklabel11);
            this.tankContainer.add(damagelabel11);
            this.tankContainer.add(defencelabel11);
            this.tankContainer.add(strengthlabel12);
            this.tankContainer.add(attacklabel12);
            this.tankContainer.add(damagelabel12);
            this.tankContainer.add(defencelabel12);
            this.tankContainer.add(strengthlabel13);
            this.tankContainer.add(attacklabel13);
            this.tankContainer.add(damagelabel13);
            this.tankContainer.add(defencelabel13);
            this.tankContainer.add(strengthlabel14);
            this.tankContainer.add(attacklabel14);
            this.tankContainer.add(damagelabel14);
            this.tankContainer.add(defencelabel14);

            this.tankContainer.add(strangthvalue1);
            this.tankContainer.add(attckvalue1);
            this.tankContainer.add(damagevalue1);
            this.tankContainer.add(defencevalue1);
            this.tankContainer.add(strangthvalue2);
            this.tankContainer.add(attckvalue2);
            this.tankContainer.add(damagevalue2);
            this.tankContainer.add(defencevalue2);
            this.tankContainer.add(strangthvalue3);
            this.tankContainer.add(attckvalue3);
            this.tankContainer.add(damagevalue3);
            this.tankContainer.add(defencevalue3);
            this.tankContainer.add(strangthvalue4);
            this.tankContainer.add(attckvalue4);
            this.tankContainer.add(damagevalue4);
            this.tankContainer.add(defencevalue4);
            this.tankContainer.add(strangthvalue5);
            this.tankContainer.add(attckvalue5);
            this.tankContainer.add(damagevalue5);
            this.tankContainer.add(defencevalue5);
            this.tankContainer.add(strangthvalue6);
            this.tankContainer.add(attckvalue6);
            this.tankContainer.add(damagevalue6);
            this.tankContainer.add(defencevalue6);
            this.tankContainer.add(strangthvalue7);
            this.tankContainer.add(attckvalue7);
            this.tankContainer.add(damagevalue7);
            this.tankContainer.add(defencevalue7);
            this.tankContainer.add(strangthvalue8);
            this.tankContainer.add(attckvalue8);
            this.tankContainer.add(damagevalue8);
            this.tankContainer.add(defencevalue8);
            this.tankContainer.add(strangthvalue9);
            this.tankContainer.add(attckvalue9);
            this.tankContainer.add(damagevalue9);
            this.tankContainer.add(defencevalue9);
            this.tankContainer.add(strangthvalue10);
            this.tankContainer.add(attckvalue10);
            this.tankContainer.add(damagevalue10);
            this.tankContainer.add(defencevalue10);
            this.tankContainer.add(strangthvalue11);
            this.tankContainer.add(attckvalue11);
            this.tankContainer.add(damagevalue11);
            this.tankContainer.add(defencevalue11);
            this.tankContainer.add(strangthvalue12);
            this.tankContainer.add(attckvalue12);
            this.tankContainer.add(damagevalue12);
            this.tankContainer.add(defencevalue12);
            this.tankContainer.add(strangthvalue13);
            this.tankContainer.add(attckvalue13);
            this.tankContainer.add(damagevalue13);
            this.tankContainer.add(defencevalue13);
            this.tankContainer.add(strangthvalue14);
            this.tankContainer.add(attckvalue14);
            this.tankContainer.add(damagevalue14);
            this.tankContainer.add(defencevalue14);
            this.tankContainer.add(strangthvalue15);
            this.tankContainer.add(attckvalue15);
            this.tankContainer.add(damagevalue15);
            this.tankContainer.add(defencevalue15);
           
            this.setOpenCardPannel();

    }


    scrollContent1(x1,y1,x2,y2,x3,y3,x4,y4,x5,y5,x6,y6,x7,y7,x8,y8,a1,b1,a2,b2,a3,b3,a4,b4){
        strengthlabel = this.add.text(a1,b1,"STRENGTH",{ fontSize: '12px', fill: '#fff', fontFamily: 'Normandia'}).setOrigin(1);
        attacklabel = this.add.text(a2,b2,"ATTACK POWER",{ fontSize: '12px', fill: '#fff', fontFamily: 'Normandia'}).setOrigin(1);
        damagelabel = this.add.text(a3,b3,"DAMAGE",{ fontSize: '12px', fill: '#fff', fontFamily: 'Normandia'}).setOrigin(1);
        defencelabel = this.add.text(a4,b4,"DEFENSE",{ fontSize: '12px', fill: '#fff', fontFamily: 'Normandia'}).setOrigin(1);
        
        commonwhiteract1 = this.add.rectangle(x1, y1, 120, 10, 0xffffff);
        commonwhiteract2 = this.add.rectangle(x2, y2, 120, 10, 0xffffff);
        commonwhiteract3 = this.add.rectangle(x3, y3, 120, 10, 0xffffff);
        commonwhiteract4 = this.add.rectangle(x4, y4, 120, 10, 0xffffff);

        
        strangthvalue1 = 50;
        attckvalue1 = 40;
        damagevalue1 = 10;
        defencevalue1 = 35;

        strangthract = this.add.rectangle(x5, y5, 2*strangthvalue1 , 10, 0xa1cf00).setOrigin(0);
        attckpowerract = this.add.rectangle(x6, y6, 2*attckvalue1, 10, 0xa1cf00).setOrigin(0);
        damageract = this.add.rectangle(x7, y7, 2*damagevalue1, 10, 0xa1cf00).setOrigin(0);
        defenceract = this.add.rectangle(x8, y8, 2*defencevalue1, 10, 0xa1cf00).setOrigin(0);
    }

    scrollContent2(x1,y1,x2,y2,x3,y3,x4,y4,x5,y5,x6,y6,x7,y7,x8,y8,a1,b1,a2,b2,a3,b3,a4,b4){
        strengthlabel1 = this.add.text(a1,b1,"STRENGTH",{ fontSize: '12px', fill: '#fff', fontFamily: 'Normandia'}).setOrigin(1);
        attacklabel1 = this.add.text(a2,b2,"ATTACK POWER",{ fontSize: '12px', fill: '#fff', fontFamily: 'Normandia'}).setOrigin(1);
        damagelabel1 = this.add.text(a3,b3,"DAMAGE",{ fontSize: '12px', fill: '#fff', fontFamily: 'Normandia'}).setOrigin(1);
        defencelabel1 = this.add.text(a4,b4,"DEFENSE",{ fontSize: '12px', fill: '#fff', fontFamily: 'Normandia'}).setOrigin(1);
        
        commonwhiteract5 = this.add.rectangle(x1, y1, 120, 10, 0xffffff);
        commonwhiteract6 = this.add.rectangle(x2, y2, 120, 10, 0xffffff);
        commonwhiteract7 = this.add.rectangle(x3, y3, 120, 10, 0xffffff);
        commonwhiteract8 = this.add.rectangle(x4, y4, 120, 10, 0xffffff);

        strangthvalue2 = 50;
        attckvalue2 = 40;
        damagevalue2 = 10;
        defencevalue2 = 35;

        strangthract1 = this.add.rectangle(x5, y5, 2*strangthvalue2 , 10, 0xa1cf00).setOrigin(0);
        attckpowerract1 = this.add.rectangle(x6, y6, 2*attckvalue2, 10, 0xa1cf00).setOrigin(0);
        damageract1 = this.add.rectangle(x7, y7, 2*damagevalue2, 10, 0xa1cf00).setOrigin(0);
        defenceract1 = this.add.rectangle(x8, y8, 2*defencevalue2, 10, 0xa1cf00).setOrigin(0);
    }

    scrollContent3(x1,y1,x2,y2,x3,y3,x4,y4,x5,y5,x6,y6,x7,y7,x8,y8,a1,b1,a2,b2,a3,b3,a4,b4){
        strengthlabel2 = this.add.text(a1,b1,"STRENGTH",{ fontSize: '12px', fill: '#fff', fontFamily: 'Normandia'}).setOrigin(1);
        attacklabel2 = this.add.text(a2,b2,"ATTACK POWER",{ fontSize: '12px', fill: '#fff', fontFamily: 'Normandia'}).setOrigin(1);
        damagelabel2 = this.add.text(a3,b3,"DAMAGE",{ fontSize: '12px', fill: '#fff', fontFamily: 'Normandia'}).setOrigin(1);
        defencelabel2 = this.add.text(a4,b4,"DEFENSE",{ fontSize: '12px', fill: '#fff', fontFamily: 'Normandia'}).setOrigin(1);
        
        commonwhiteract9 = this.add.rectangle(x1, y1, 120, 10, 0xffffff);
        commonwhiteract10 = this.add.rectangle(x2, y2, 120, 10, 0xffffff);
        commonwhiteract11 = this.add.rectangle(x3, y3, 120, 10, 0xffffff);
        commonwhiteract12 = this.add.rectangle(x4, y4, 120, 10, 0xffffff);

        strangthvalue3 = 50;
        attckvalue3 = 40;
        damagevalue3 = 10;
        defencevalue3 = 35;

        strangthract2 = this.add.rectangle(x5, y5, 2*strangthvalue3 , 10, 0xa1cf00).setOrigin(0);
        attckpowerract2 = this.add.rectangle(x6, y6, 2*attckvalue3, 10, 0xa1cf00).setOrigin(0);
        damageract2 = this.add.rectangle(x7, y7, 2*damagevalue3, 10, 0xa1cf00).setOrigin(0);
        defenceract2 = this.add.rectangle(x8, y8, 2*defencevalue3, 10, 0xa1cf00).setOrigin(0);
    }

    scrollContent4(x1,y1,x2,y2,x3,y3,x4,y4,x5,y5,x6,y6,x7,y7,x8,y8,a1,b1,a2,b2,a3,b3,a4,b4){
        strengthlabel3 = this.add.text(a1,b1,"STRENGTH",{ fontSize: '12px', fill: '#fff', fontFamily: 'Normandia'}).setOrigin(1);
        attacklabel3 = this.add.text(a2,b2,"ATTACK POWER",{ fontSize: '12px', fill: '#fff', fontFamily: 'Normandia'}).setOrigin(1);
        damagelabel3 = this.add.text(a3,b3,"DAMAGE",{ fontSize: '12px', fill: '#fff', fontFamily: 'Normandia'}).setOrigin(1);
        defencelabel3 = this.add.text(a4,b4,"DEFENSE",{ fontSize: '12px', fill: '#fff', fontFamily: 'Normandia'}).setOrigin(1);
        
        commonwhiteract13 = this.add.rectangle(x1, y1, 120, 10, 0xffffff);
        commonwhiteract14 = this.add.rectangle(x2, y2, 120, 10, 0xffffff);
        commonwhiteract15 = this.add.rectangle(x3, y3, 120, 10, 0xffffff);
        commonwhiteract16 = this.add.rectangle(x4, y4, 120, 10, 0xffffff);

        strangthvalue4 = 50;
        attckvalue4 = 40;
        damagevalue4 = 10;
        defencevalue4 = 35;

        strangthract3 = this.add.rectangle(x5, y5, 2*strangthvalue4 , 10, 0xa1cf00).setOrigin(0);
        attckpowerract3 = this.add.rectangle(x6, y6, 2*attckvalue4, 10, 0xa1cf00).setOrigin(0);
        damageract3 = this.add.rectangle(x7, y7, 2*damagevalue4, 10, 0xa1cf00).setOrigin(0);
        defenceract3 = this.add.rectangle(x8, y8, 2*defencevalue4, 10, 0xa1cf00).setOrigin(0);
    }

    scrollContent5(x1,y1,x2,y2,x3,y3,x4,y4,x5,y5,x6,y6,x7,y7,x8,y8,a1,b1,a2,b2,a3,b3,a4,b4){
        strengthlabel4 = this.add.text(a1,b1,"STRENGTH",{ fontSize: '12px', fill: '#fff', fontFamily: 'Normandia'}).setOrigin(1);
        attacklabel4 = this.add.text(a2,b2,"ATTACK POWER",{ fontSize: '12px', fill: '#fff', fontFamily: 'Normandia'}).setOrigin(1);
        damagelabel4 = this.add.text(a3,b3,"DAMAGE",{ fontSize: '12px', fill: '#fff', fontFamily: 'Normandia'}).setOrigin(1);
        defencelabel4 = this.add.text(a4,b4,"DEFENSE",{ fontSize: '12px', fill: '#fff', fontFamily: 'Normandia'}).setOrigin(1);
        
        commonwhiteract17 = this.add.rectangle(x1, y1, 120, 10, 0xffffff);
        commonwhiteract18 = this.add.rectangle(x2, y2, 120, 10, 0xffffff);
        commonwhiteract19 = this.add.rectangle(x3, y3, 120, 10, 0xffffff);
        commonwhiteract20 = this.add.rectangle(x4, y4, 120, 10, 0xffffff);

        strangthvalue5 = 50;
        attckvalue5 = 40;
        damagevalue5 = 10;
        defencevalue5 = 35;

        strangthract4 = this.add.rectangle(x5, y5, 2*strangthvalue5 , 10, 0xa1cf00).setOrigin(0);
        attckpowerract4 = this.add.rectangle(x6, y6, 2*attckvalue5, 10, 0xa1cf00).setOrigin(0);
        damageract4 = this.add.rectangle(x7, y7, 2*damagevalue5, 10, 0xa1cf00).setOrigin(0);
        defenceract4 = this.add.rectangle(x8, y8, 2*defencevalue5, 10, 0xa1cf00).setOrigin(0);
    }

    scrollContent6(x1,y1,x2,y2,x3,y3,x4,y4,x5,y5,x6,y6,x7,y7,x8,y8,a1,b1,a2,b2,a3,b3,a4,b4){
        strengthlabel5 = this.add.text(a1,b1,"STRENGTH",{ fontSize: '12px', fill: '#fff', fontFamily: 'Normandia'}).setOrigin(1);
        attacklabel5 = this.add.text(a2,b2,"ATTACK POWER",{ fontSize: '12px', fill: '#fff', fontFamily: 'Normandia'}).setOrigin(1);
        damagelabel5 = this.add.text(a3,b3,"DAMAGE",{ fontSize: '12px', fill: '#fff', fontFamily: 'Normandia'}).setOrigin(1);
        defencelabel5 = this.add.text(a4,b4,"DEFENSE",{ fontSize: '12px', fill: '#fff', fontFamily: 'Normandia'}).setOrigin(1);
        
        commonwhiteract21 = this.add.rectangle(x1, y1, 120, 10, 0xffffff);
        commonwhiteract22 = this.add.rectangle(x2, y2, 120, 10, 0xffffff);
        commonwhiteract23 = this.add.rectangle(x3, y3, 120, 10, 0xffffff);
        commonwhiteract24 = this.add.rectangle(x4, y4, 120, 10, 0xffffff);

        strangthvalue6 = 50;
        attckvalue6 = 40;
        damagevalue6 = 10;
        defencevalue6 = 35;

        strangthract5 = this.add.rectangle(x5, y5, 2*strangthvalue6 , 10, 0xa1cf00).setOrigin(0);
        attckpowerract5 = this.add.rectangle(x6, y6, 2*attckvalue6, 10, 0xa1cf00).setOrigin(0);
        damageract5 = this.add.rectangle(x7, y7, 2*damagevalue6, 10, 0xa1cf00).setOrigin(0);
        defenceract5 = this.add.rectangle(x8, y8, 2*defencevalue6, 10, 0xa1cf00).setOrigin(0);
    }

    scrollContent7(x1,y1,x2,y2,x3,y3,x4,y4,x5,y5,x6,y6,x7,y7,x8,y8,a1,b1,a2,b2,a3,b3,a4,b4){
        strengthlabel6 = this.add.text(a1,b1,"STRENGTH",{ fontSize: '12px', fill: '#fff', fontFamily: 'Normandia'}).setOrigin(1);
        attacklabel6 = this.add.text(a2,b2,"ATTACK POWER",{ fontSize: '12px', fill: '#fff', fontFamily: 'Normandia'}).setOrigin(1);
        damagelabel6 = this.add.text(a3,b3,"DAMAGE",{ fontSize: '12px', fill: '#fff', fontFamily: 'Normandia'}).setOrigin(1);
        defencelabel6 = this.add.text(a4,b4,"DEFENSE",{ fontSize: '12px', fill: '#fff', fontFamily: 'Normandia'}).setOrigin(1);
        
        commonwhiteract25 = this.add.rectangle(x1, y1, 120, 10, 0xffffff);
        commonwhiteract26 = this.add.rectangle(x2, y2, 120, 10, 0xffffff);
        commonwhiteract27 = this.add.rectangle(x3, y3, 120, 10, 0xffffff);
        commonwhiteract28 = this.add.rectangle(x4, y4, 120, 10, 0xffffff);

        strangthvalue7 = 50;
        attckvalue7 = 40;
        damagevalue7 = 10;
        defencevalue7 = 35;

        strangthract6 = this.add.rectangle(x5, y5, 2*strangthvalue7 , 10, 0xa1cf00).setOrigin(0);
        attckpowerract6 = this.add.rectangle(x6, y6, 2*attckvalue7, 10, 0xa1cf00).setOrigin(0);
        damageract6 = this.add.rectangle(x7, y7, 2*damagevalue7, 10, 0xa1cf00).setOrigin(0);
        defenceract6 = this.add.rectangle(x8, y8, 2*defencevalue7, 10, 0xa1cf00).setOrigin(0);
    }

    scrollContent8(x1,y1,x2,y2,x3,y3,x4,y4,x5,y5,x6,y6,x7,y7,x8,y8,a1,b1,a2,b2,a3,b3,a4,b4){
        strengthlabel7 = this.add.text(a1,b1,"STRENGTH",{ fontSize: '12px', fill: '#fff', fontFamily: 'Normandia'}).setOrigin(1);
        attacklabel7 = this.add.text(a2,b2,"ATTACK POWER",{ fontSize: '12px', fill: '#fff', fontFamily: 'Normandia'}).setOrigin(1);
        damagelabel7 = this.add.text(a3,b3,"DAMAGE",{ fontSize: '12px', fill: '#fff', fontFamily: 'Normandia'}).setOrigin(1);
        defencelabel7 = this.add.text(a4,b4,"DEFENSE",{ fontSize: '12px', fill: '#fff', fontFamily: 'Normandia'}).setOrigin(1);
        
        commonwhiteract29 = this.add.rectangle(x1, y1, 120, 10, 0xffffff);
        commonwhiteract30 = this.add.rectangle(x2, y2, 120, 10, 0xffffff);
        commonwhiteract31 = this.add.rectangle(x3, y3, 120, 10, 0xffffff);
        commonwhiteract32 = this.add.rectangle(x4, y4, 120, 10, 0xffffff);

        strangthvalue8 = 50;
        attckvalue8 = 40;
        damagevalue8 = 10;
        defencevalue8 = 35;

        strangthract7 = this.add.rectangle(x5, y5, 2*strangthvalue8 , 10, 0xa1cf00).setOrigin(0);
        attckpowerract7 = this.add.rectangle(x6, y6, 2*attckvalue8, 10, 0xa1cf00).setOrigin(0);
        damageract7 = this.add.rectangle(x7, y7, 2*damagevalue8, 10, 0xa1cf00).setOrigin(0);
        defenceract7 = this.add.rectangle(x8, y8, 2*defencevalue8, 10, 0xa1cf00).setOrigin(0);
    }

    scrollContent9(x1,y1,x2,y2,x3,y3,x4,y4,x5,y5,x6,y6,x7,y7,x8,y8,a1,b1,a2,b2,a3,b3,a4,b4){
        strengthlabel8 = this.add.text(a1,b1,"STRENGTH",{ fontSize: '12px', fill: '#fff', fontFamily: 'Normandia'}).setOrigin(1);
        attacklabel8 = this.add.text(a2,b2,"ATTACK POWER",{ fontSize: '12px', fill: '#fff', fontFamily: 'Normandia'}).setOrigin(1);
        damagelabel8 = this.add.text(a3,b3,"DAMAGE",{ fontSize: '12px', fill: '#fff', fontFamily: 'Normandia'}).setOrigin(1);
        defencelabel8 = this.add.text(a4,b4,"DEFENSE",{ fontSize: '12px', fill: '#fff', fontFamily: 'Normandia'}).setOrigin(1);
        
        commonwhiteract33 = this.add.rectangle(x1, y1, 120, 10, 0xffffff);
        commonwhiteract34 = this.add.rectangle(x2, y2, 120, 10, 0xffffff);
        commonwhiteract35 = this.add.rectangle(x3, y3, 120, 10, 0xffffff);
        commonwhiteract36 = this.add.rectangle(x4, y4, 120, 10, 0xffffff);
        
        strangthvalue9 = 50;
        attckvalue9 = 40;
        damagevalue9 = 10;
        defencevalue9 = 35;

        strangthract8 = this.add.rectangle(x5, y5, 2*strangthvalue9 , 10, 0xa1cf00).setOrigin(0);
        attckpowerract8 = this.add.rectangle(x6, y6, 2*attckvalue9, 10, 0xa1cf00).setOrigin(0);
        damageract8 = this.add.rectangle(x7, y7, 2*damagevalue9, 10, 0xa1cf00).setOrigin(0);
        defenceract8 = this.add.rectangle(x8, y8, 2*defencevalue9, 10, 0xa1cf00).setOrigin(0);
    }

    scrollContent10(x1,y1,x2,y2,x3,y3,x4,y4,x5,y5,x6,y6,x7,y7,x8,y8,a1,b1,a2,b2,a3,b3,a4,b4){
        strengthlabel9 = this.add.text(a1,b1,"STRENGTH",{ fontSize: '12px', fill: '#fff', fontFamily: 'Normandia'}).setOrigin(1);
        attacklabel9 = this.add.text(a2,b2,"ATTACK POWER",{ fontSize: '12px', fill: '#fff', fontFamily: 'Normandia'}).setOrigin(1);
        damagelabel9 = this.add.text(a3,b3,"DAMAGE",{ fontSize: '12px', fill: '#fff', fontFamily: 'Normandia'}).setOrigin(1);
        defencelabel9 = this.add.text(a4,b4,"DEFENSE",{ fontSize: '12px', fill: '#fff', fontFamily: 'Normandia'}).setOrigin(1);
        
        commonwhiteract37 = this.add.rectangle(x1, y1, 120, 10, 0xffffff);
        commonwhiteract38 = this.add.rectangle(x2, y2, 120, 10, 0xffffff);
        commonwhiteract39 = this.add.rectangle(x3, y3, 120, 10, 0xffffff);
        commonwhiteract40 = this.add.rectangle(x4, y4, 120, 10, 0xffffff);

        strangthvalue10 = 50;
        attckvalue10 = 40;
        damagevalue10 = 10;
        defencevalue10 = 35;

        strangthract9 = this.add.rectangle(x5, y5, 2*strangthvalue10 , 10, 0xa1cf00).setOrigin(0);
        attckpowerract9 = this.add.rectangle(x6, y6, 2*attckvalue10, 10, 0xa1cf00).setOrigin(0);
        damageract9 = this.add.rectangle(x7, y7, 2*damagevalue10, 10, 0xa1cf00).setOrigin(0);
        defenceract9 = this.add.rectangle(x8, y8, 2*defencevalue10, 10, 0xa1cf00).setOrigin(0);
    }

    scrollContent11(x1,y1,x2,y2,x3,y3,x4,y4,x5,y5,x6,y6,x7,y7,x8,y8,a1,b1,a2,b2,a3,b3,a4,b4){
        strengthlabel10 = this.add.text(a1,b1,"STRENGTH",{ fontSize: '12px', fill: '#fff', fontFamily: 'Normandia'}).setOrigin(1);
        attacklabel10 = this.add.text(a2,b2,"ATTACK POWER",{ fontSize: '12px', fill: '#fff', fontFamily: 'Normandia'}).setOrigin(1);
        damagelabel10 = this.add.text(a3,b3,"DAMAGE",{ fontSize: '12px', fill: '#fff', fontFamily: 'Normandia'}).setOrigin(1);
        defencelabel10 = this.add.text(a4,b4,"DEFENSE",{ fontSize: '12px', fill: '#fff', fontFamily: 'Normandia'}).setOrigin(1);
        
        commonwhiteract41 = this.add.rectangle(x1, y1, 120, 10, 0xffffff);
        commonwhiteract42 = this.add.rectangle(x2, y2, 120, 10, 0xffffff);
        commonwhiteract43 = this.add.rectangle(x3, y3, 120, 10, 0xffffff);
        commonwhiteract44 = this.add.rectangle(x4, y4, 120, 10, 0xffffff);

        strangthvalue11 = 50;
        attckvalue11 = 40;
        damagevalue11 = 10;
        defencevalue11 = 35;

        strangthract10 = this.add.rectangle(x5, y5, 2*strangthvalue11 , 10, 0xa1cf00).setOrigin(0);
        attckpowerract10 = this.add.rectangle(x6, y6, 2*attckvalue11, 10, 0xa1cf00).setOrigin(0);
        damageract10 = this.add.rectangle(x7, y7, 2*damagevalue11, 10, 0xa1cf00).setOrigin(0);
        defenceract10 = this.add.rectangle(x8, y8, 2*defencevalue11, 10, 0xa1cf00).setOrigin(0);
    }

    scrollContent12(x1,y1,x2,y2,x3,y3,x4,y4,x5,y5,x6,y6,x7,y7,x8,y8,a1,b1,a2,b2,a3,b3,a4,b4){
        strengthlabel11 = this.add.text(a1,b1,"STRENGTH",{ fontSize: '12px', fill: '#fff', fontFamily: 'Normandia'}).setOrigin(1);
        attacklabel11 = this.add.text(a2,b2,"ATTACK POWER",{ fontSize: '12px', fill: '#fff', fontFamily: 'Normandia'}).setOrigin(1);
        damagelabel11 = this.add.text(a3,b3,"DAMAGE",{ fontSize: '12px', fill: '#fff', fontFamily: 'Normandia'}).setOrigin(1);
        defencelabel11 = this.add.text(a4,b4,"DEFENSE",{ fontSize: '12px', fill: '#fff', fontFamily: 'Normandia'}).setOrigin(1);
        
        commonwhiteract45 = this.add.rectangle(x1, y1, 120, 10, 0xffffff);
        commonwhiteract46 = this.add.rectangle(x2, y2, 120, 10, 0xffffff);
        commonwhiteract47 = this.add.rectangle(x3, y3, 120, 10, 0xffffff);
        commonwhiteract48 = this.add.rectangle(x4, y4, 120, 10, 0xffffff);

        strangthvalue12 = 50;
        attckvalue12 = 40;
        damagevalue12 = 10;
        defencevalue12 = 35;

        strangthract11 = this.add.rectangle(x5, y5, 2*strangthvalue12 , 10, 0xa1cf00).setOrigin(0);
        attckpowerract11 = this.add.rectangle(x6, y6, 2*attckvalue12, 10, 0xa1cf00).setOrigin(0);
        damageract11 = this.add.rectangle(x7, y7, 2*damagevalue12, 10, 0xa1cf00).setOrigin(0);
        defenceract11 = this.add.rectangle(x8, y8, 2*defencevalue12, 10, 0xa1cf00).setOrigin(0);
    }

    scrollContent13(x1,y1,x2,y2,x3,y3,x4,y4,x5,y5,x6,y6,x7,y7,x8,y8,a1,b1,a2,b2,a3,b3,a4,b4){
        strengthlabel12 = this.add.text(a1,b1,"STRENGTH",{ fontSize: '12px', fill: '#fff', fontFamily: 'Normandia'}).setOrigin(1);
        attacklabel12 = this.add.text(a2,b2,"ATTACK POWER",{ fontSize: '12px', fill: '#fff', fontFamily: 'Normandia'}).setOrigin(1);
        damagelabel12 = this.add.text(a3,b3,"DAMAGE",{ fontSize: '12px', fill: '#fff', fontFamily: 'Normandia'}).setOrigin(1);
        defencelabel12 = this.add.text(a4,b4,"DEFENSE",{ fontSize: '12px', fill: '#fff', fontFamily: 'Normandia'}).setOrigin(1);
        
        commonwhiteract49 = this.add.rectangle(x1, y1, 120, 10, 0xffffff);
        commonwhiteract50 = this.add.rectangle(x2, y2, 120, 10, 0xffffff);
        commonwhiteract51 = this.add.rectangle(x3, y3, 120, 10, 0xffffff);
        commonwhiteract52 = this.add.rectangle(x4, y4, 120, 10, 0xffffff);

        strangthvalue13 = 50;
        attckvalue13 = 40;
        damagevalue13 = 10;
        defencevalue13 = 35;

        strangthract12 = this.add.rectangle(x5, y5, 2*strangthvalue13 , 10, 0xa1cf00).setOrigin(0);
        attckpowerract12 = this.add.rectangle(x6, y6, 2*attckvalue13, 10, 0xa1cf00).setOrigin(0);
        damageract12 = this.add.rectangle(x7, y7, 2*damagevalue13, 10, 0xa1cf00).setOrigin(0);
        defenceract12 = this.add.rectangle(x8, y8, 2*defencevalue13, 10, 0xa1cf00).setOrigin(0);
    }

    scrollContent14(x1,y1,x2,y2,x3,y3,x4,y4,x5,y5,x6,y6,x7,y7,x8,y8,a1,b1,a2,b2,a3,b3,a4,b4){
        strengthlabel13 = this.add.text(a1,b1,"STRENGTH",{ fontSize: '12px', fill: '#fff', fontFamily: 'Normandia'}).setOrigin(1);
        attacklabel13 = this.add.text(a2,b2,"ATTACK POWER",{ fontSize: '12px', fill: '#fff', fontFamily: 'Normandia'}).setOrigin(1);
        damagelabel13 = this.add.text(a3,b3,"DAMAGE",{ fontSize: '12px', fill: '#fff', fontFamily: 'Normandia'}).setOrigin(1);
        defencelabel13 = this.add.text(a4,b4,"DEFENSE",{ fontSize: '12px', fill: '#fff', fontFamily: 'Normandia'}).setOrigin(1);
        
        commonwhiteract53 = this.add.rectangle(x1, y1, 120, 10, 0xffffff);
        commonwhiteract54 = this.add.rectangle(x2, y2, 120, 10, 0xffffff);
        commonwhiteract55 = this.add.rectangle(x3, y3, 120, 10, 0xffffff);
        commonwhiteract56 = this.add.rectangle(x4, y4, 120, 10, 0xffffff);

        strangthvalue14 = 50;
        attckvalue14 = 40;
        damagevalue14 = 10;
        defencevalue14 = 35;

        strangthract13 = this.add.rectangle(x5, y5, 2*strangthvalue14 , 10, 0xa1cf00).setOrigin(0);
        attckpowerract13 = this.add.rectangle(x6, y6, 2*attckvalue14, 10, 0xa1cf00).setOrigin(0);
        damageract13 = this.add.rectangle(x7, y7, 2*damagevalue14, 10, 0xa1cf00).setOrigin(0);
        defenceract13 = this.add.rectangle(x8, y8, 2*defencevalue14, 10, 0xa1cf00).setOrigin(0);
    }

    scrollContent15(x1,y1,x2,y2,x3,y3,x4,y4,x5,y5,x6,y6,x7,y7,x8,y8,a1,b1,a2,b2,a3,b3,a4,b4){
        strengthlabel14 = this.add.text(a1,b1,"STRENGTH",{ fontSize: '12px', fill: '#fff', fontFamily: 'Normandia'}).setOrigin(1);
        attacklabel14 = this.add.text(a2,b2,"ATTACK POWER",{ fontSize: '12px', fill: '#fff', fontFamily: 'Normandia'}).setOrigin(1);
        damagelabel14 = this.add.text(a3,b3,"DAMAGE",{ fontSize: '12px', fill: '#fff', fontFamily: 'Normandia'}).setOrigin(1);
        defencelabel14 = this.add.text(a4,b4,"DEFENSE",{ fontSize: '12px', fill: '#fff', fontFamily: 'Normandia'}).setOrigin(1);
        
        commonwhiteract57 = this.add.rectangle(x1, y1, 120, 10, 0xffffff);
        commonwhiteract58 = this.add.rectangle(x2, y2, 120, 10, 0xffffff);
        commonwhiteract59 = this.add.rectangle(x3, y3, 120, 10, 0xffffff);
        commonwhiteract60 = this.add.rectangle(x4, y4, 120, 10, 0xffffff);
        
        strangthvalue15 = 50;
        attckvalue15 = 40;
        damagevalue15 = 10;
        defencevalue15 = 35;

        strangthract14 = this.add.rectangle(x5, y5, 2*strangthvalue15 , 10, 0xa1cf00).setOrigin(0);
        attckpowerract14 = this.add.rectangle(x6, y6, 2*attckvalue15, 10, 0xa1cf00).setOrigin(0);
        damageract14 = this.add.rectangle(x7, y7, 2*damagevalue15, 10, 0xa1cf00).setOrigin(0);
        defenceract14 = this.add.rectangle(x8, y8, 2*defencevalue15, 10, 0xa1cf00).setOrigin(0);
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



