class SoundManager
{
    constructor(oSceneObj) {
        this.oSceneObj = oSceneObj;
        this.clickSound = this.oSceneObj.sound.add('clickSound');
        this.bombArtillery = this.oSceneObj.sound.add('bombArtillerySound');
        this.healTank = this.oSceneObj.sound.add('healTank');
        this.winSound = this.oSceneObj.sound.add('winSound');
        this.loseSound = this.oSceneObj.sound.add('loseSound');
        this.shieldTank = this.oSceneObj.sound.add('shieldTank');
        this.shootTank = this.oSceneObj.sound.add('shootTank');
        this.explosion = this.oSceneObj.sound.add('explosion');
        this.ingameSound = this.oSceneObj.sound.add('ingameSound');
        this.soundArray = [this.clickSound, this.bombArtillery, this.healTank, this.shieldTank, this.winSound, this.loseSound, this.shootTank, this.explosion];
    }

    playSound(key, loop)
    {
        key.play();
        key.loop=loop;
        console.log("PlaySound!", key.isPlaying);
    }

    pauseSound(key)
    {
        key.pause();
    }

    resumeSound(key)
    {
        key.resume();
    }

    stopSound(key, loop)
    {
        key.stop();
        key.loop = loop;
    }

    setSoundsVolume(volume)
    {
        for(var i = 0; i < this.soundArray.length; i++)
        {
            this.soundArray[i].volume = volume;
        }
        
    }
    setBackgroundVolume(volume)
    {
        this.ingameSound.setVolume(volume);
    }
}