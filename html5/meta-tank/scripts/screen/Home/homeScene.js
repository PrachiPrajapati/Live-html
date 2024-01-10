
var signinbtn;
var metamaskbtn;
var trustwalletbtn;
var coinbasebtn;
var walletbg;
var walleteinstruction;
var closebtn;
var isLaunch =false;// flag for check scene launch......
// console.log("HomeScreen");

class HomeScene extends Phaser.Scene
{
    constructor()
    {
        super({key:'homeScene'});
    }

    editorPreload() {

		this.load.pack("asset-pack", "assets/assets.json");
	}

    preload(){
        //Progrssbar-------------------------
        var width = this.cameras.main.width;
        var height = this.cameras.main.height;
        var progressBar = this.add.graphics();
        var progressBox = this.add.graphics();
        progressBox.fillStyle(0x222222, 0.8);
        progressBox.fillRect(width/2-150, height/2, 320, 50);
        
       
        var loadingText = this.make.text({
            x: width / 2,
            y: height / 2 - 50,
            text: 'Loading...',
            style: {
                font: '20px monospace',
                fill: '#ffffff'
            }
        });
        loadingText.setOrigin(0.5, 0.5);
        
        var percentText = this.make.text({
            x: width / 2,
            y: height / 2 - 10,
            text: '0%',
            style: {
                font: '18px monospace',
                fill: '#ffffff'
            }
        });
        percentText.setOrigin(0.5, 0.5);
        
        var assetText = this.make.text({
            x: width / 2,
            y: height / 2 + 50,
            text: '',
            style: {
                font: '18px monospace',
                fill: '#ffffff'
            }
        });
        assetText.setOrigin(0.5, 0.5);
        
        this.load.on('progress', function (value) {
            percentText.setText(parseInt(value * 100) + '%');
            progressBar.clear();
            progressBar.fillStyle(0xffffff, 1);
            progressBar.fillRect(width/2-150, height/2+10, 300 * value, 30);
        });
        
        this.load.on('fileprogress', function (file) {
          //  assetText.setText('Loading asset: ' + file.key);
        });
        this.load.on('complete', function () {
            progressBar.destroy();
            progressBox.destroy();
            loadingText.destroy();
            percentText.destroy();
            assetText.destroy();
        });
         //Progrssbar-------------------------
         this.editorPreload();
         
        // this.load.image('reginionbanner',"assets/images/regionbackground.png");
        // this.load.image('borderimg',"assets/images/battleframeimg.png");
        // this.load.image('signin','assets/images/sign_in.png');
        // this.load.image('homebanner',"assets/images/banner-img.png");
        // this.load.image('walletbg',"assets/images/wallete-bg.png");
        // this.load.image('coninbasebtn',"assets/images/coin-base-btn.png");
        // this.load.image('trustbasbtn',"assets/images/trust-wallet-btn.png");
        // this.load.image('metamaskbtn',"assets/images/metamask-btn.png");

       
        
    }
    create(){
        this.add.image(960,540,'homebanner');
        this.oSoundManager = new SoundManager(this);

        signinbtn = this.add.image(960,800,'signin')
            .setInteractive({ useHandCursor: true })
            .setScale(1)
            .on('pointerdown', () => { 
                this.oSoundManager.playSound(this.oSoundManager.clickSound, false);
                oApiHandler.callEntryFeeAPI(); 
                game.scene.stop('homeScene');
                game.scene.start('gameLogin');
                // closebtn.setScale(1);
                // metamaskbtn.setScale(1);
                // trustwalletbtn.setScale(1);
                // coinbasebtn.setScale(1);
                // walleteinstruction.setScale(1);
                // walletbg.setScale(1);
            } );

        // walletbg = this.add.image(960,540,'walletbg');
        // metamaskbtn = this.add.image(960,350,'metamaskbtn')
        //     .setInteractive({ useHandCursor: true })
        //     .setScale(1)
        //     .on('pointerdown', () => { 
        //         this.oSoundManager.playSound(this.oSoundManager.clickSound, false);
        //         oApiHandler.callEntryFeeAPI();
        //        // game.scene.stop('homeScene');
        //         //game.scene.start('playScene');
        //     } );

        // trustwalletbtn = this.add.image(960,530,'trustbasbtn')
        //     .setInteractive({ useHandCursor: true })
        //     .setScale(1)
        //     .on('pointerdown', () => { 
        //         this.oSoundManager.playSound(this.oSoundManager.clickSound, false);
        //         oApiHandler.callEntryFeeAPI();
        //        // game.scene.stop('homeScene');
        //        // game.scene.start('playScene');
        //     } );

        // coinbasebtn = this.add.image(960,710,'coninbasebtn')
        //     .setInteractive({ useHandCursor: true })
        //     .setScale(1)
        //     .on('pointerdown', () => { 
        //         this.oSoundManager.playSound(this.oSoundManager.clickSound, false);
        //         oApiHandler.callEntryFeeAPI();
        //         //game.scene.stop('homeScene');
        //         //game.scene.start('playScene');
        //     } );

        // walleteinstruction = this.add.text(960,850,"please select to connect with this app",{ fontSize:'20px', fill:'#fff',fontFamily: 'Normandia' }).setOrigin(0.5);

        // closebtn = this.add.text(1350,155,"X", { fontSize:'40px', fill:'#000000',fontFamily: 'Normandia' })
        //             .setOrigin(0.5)
        //             .setInteractive({ useHandCursor: true })
        //             .setScale(1)
        //             .on('pointerdown', () => { 
        //                 this.oSoundManager.playSound(this.oSoundManager.clickSound, false);
        //                 closebtn.setScale(0);
        //                 metamaskbtn.setScale(0);
        //                 trustwalletbtn.setScale(0);
        //                 coinbasebtn.setScale(0);
        //                 walleteinstruction.setScale(0);
        //                 walletbg.setScale(0);
        //             } );
        // closebtn.setScale(0);
        // metamaskbtn.setScale(0);
        // trustwalletbtn.setScale(0);
        // coinbasebtn.setScale(0);
        // walleteinstruction.setScale(0);
        // walletbg.setScale(0);

        

        
    }

    update(){
        

    }
    // callEntryFeeAPI(){
    //     console.log("callEntryFeeAPI");
    //     var settings = {
    //         "url": APIUrl+"/setting",
    //         "method": "GET",
    //         "timeout": 0,
           
    //       };
    
    //     $.ajax(settings).done((response)=> {
    //              nEntryFee=response.data.nEntryFee;
    //              this.oRewardData=response.data.oReward;
    //              game.scene.stop('homeScene');
    //              game.scene.start('playScene');
                 
    //    });
       
    
   //}
     
    
    
}
