class GameLogin extends Phaser.Scene
{
    constructor()
    {
        super({key:'gameLogin'});
    }

    preload()
    {
        this.load.html('loginform', 'scripts/screen/Login/game-login.html');
        this.load.image('pic', 'scripts/screen/Login/images/hero-banner.jpg');
    }
    create()
    {
        this.add.image(400, 300, 'pic').setScale(2);

        var element = this.add.dom(960, 540).createFromCache('loginform').setScale(1.5);

        element.setPerspective(1920);

        element.addListener('click');

        element.on('click', function (event) {

            if (event.target.name === 'loginButton')
            {
                var sEmail = this.getChildByName('username').value;
                var sPassword = this.getChildByName('password').value;

                //  Have they entered anything?
                if (sEmail !== '' && sPassword !== '')
                {
                    oApiHandler.callLoginHandler(sEmail, sPassword);
                }
                else
                {
                    //  Flash the prompt
                    this.scene.tweens.add({ targets: text, alpha: 0.1, duration: 200, ease: 'Power3', yoyo: true });
                }
            }
        });
    }
}