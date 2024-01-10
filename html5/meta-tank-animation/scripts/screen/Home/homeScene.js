var signinbtn;
var metamaskbtn;
var trustwalletbtn;
var coinbasebtn;
var walletbg;
var walleteinstruction;
var closebtn;



class HomeScene extends Phaser.Scene
{
    constructor()
    {
        super({key:'homeScene'});
    }
    preload(){
        
        this.load.image('signin','assets/images/sign_in.png');
        this.load.image('homebanner',"assets/images/banner-img.png");
        this.load.image('walletbg',"assets/images/wallete-bg.png");
        this.load.image('coninbasebtn',"assets/images/coin-base-btn.png");
        this.load.image('trustbasbtn',"assets/images/trust-wallet-btn.png");
        this.load.image('metamaskbtn',"assets/images/metamask-btn.png");

        
        
    }
    create(){
        this.add.image(960,540,'homebanner');

        signinbtn = this.add.image(960,800,'signin')
            .setInteractive({ useHandCursor: true })
            .setScale(1)
            .on('pointerdown', () => { 
                closebtn.setScale(1);
                metamaskbtn.setScale(1);
                trustwalletbtn.setScale(1);
                coinbasebtn.setScale(1);
                walleteinstruction.setScale(1);
                walletbg.setScale(1);
            } );

        walletbg = this.add.image(960,540,'walletbg');
        metamaskbtn = this.add.image(960,350,'metamaskbtn')
            .setInteractive({ useHandCursor: true })
            .setScale(1)
            .on('pointerdown', () => { 
                game.scene.stop('homeScene');
                game.scene.start('playScene');
            } );

        trustwalletbtn = this.add.image(960,530,'trustbasbtn')
            .setInteractive({ useHandCursor: true })
            .setScale(1)
            .on('pointerdown', () => { 
                game.scene.stop('homeScene');
                game.scene.start('playScene');
            } );

        coinbasebtn = this.add.image(960,710,'coninbasebtn')
            .setInteractive({ useHandCursor: true })
            .setScale(1)
            .on('pointerdown', () => { 
                game.scene.stop('homeScene');
                game.scene.start('playScene');
            } );

        walleteinstruction = this.add.text(960,850,"please select to connect with this app",{ fontSize:'20px', fill:'#fff',fontFamily: 'Normandia' }).setOrigin(0.5);

        closebtn = this.add.text(1350,155,"X", { fontSize:'40px', fill:'#454237',fontFamily: 'Normandia' })
                    .setOrigin(0.5)
                    .setInteractive({ useHandCursor: true })
                    .setScale(1)
                    .on('pointerdown', () => { 
                        closebtn.setScale(0);
                        metamaskbtn.setScale(0);
                        trustwalletbtn.setScale(0);
                        coinbasebtn.setScale(0);
                        walleteinstruction.setScale(0);
                        walletbg.setScale(0);
                    } );
        closebtn.setScale(0);
        metamaskbtn.setScale(0);
        trustwalletbtn.setScale(0);
        coinbasebtn.setScale(0);
        walleteinstruction.setScale(0);
        walletbg.setScale(0);

        

        
    }

    update(){
        

    }
     
    
    
}
