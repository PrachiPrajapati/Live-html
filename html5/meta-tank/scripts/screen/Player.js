// console.log("Player");
 class Player {
    constructor(oGameObj,playerData) {
          //console.log("Player",playerData);
          this.setData(playerData);
    }
    setData(playerData){
       this._id=playerData._id;
       this.nAttack=playerData._id;
       this.sUrl=playerData.sUrl;
       this.nCurrentHp=playerData.nCurrentHp;
    }
 }