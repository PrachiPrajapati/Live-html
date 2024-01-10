// console.log("Soket done...");
 class SocketHandler {
    constructor() {
        // Socket conenction with namespace with Table
    }


    onReceived(data,oGameObj) {
        var en = data.sEventName;
        var data = data.oData;
        console.log("data onReceived: " + data);
        switch (en) {
            case "resUserJoined":
                break;
            case "resSelectPower":
               // this.oGameObj.showPowerTimer(data);
                break;
            case "resPlayerTurn":
               oGameObj.setPlayerTurn(data);
                break;
            case "resAttack":
                    oGameObj.setPlayerAttack(data);
                break;
            case "resDeclareResult":
                oGameObj.setResult(data);
                break;
            case "resPowerUp":
                oGameObj.setOppPower(data);
                break;
            
           
        }
    }
    joinRoom(iTableId,oGameObj){
        console.log("Join Room init");
        socket.emit("reqJoinTable", {iTableId}, (error, data)=> {
            // console.log('data from server :: ', data,error);
            oGameObj.setPlayerData(data.oData);
            socket.on(iTableId, (data) => {
            console.log("joinRoom: ", data);
            this.onReceived(data,oGameObj);
            });
        });
    }
}
const oSocket=new SocketHandler();
