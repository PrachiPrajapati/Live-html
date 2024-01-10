class ApiHandler {
    constructor() {

        // Socket conenction with namespace with Table
    }
    callEntryFeeAPI() {
        // console.log("callEntryFeeAPI");
        var settings = {
            "url": APIUrl + "/setting",
            "method": "GET",
            "timeout": 0,
        };

        $.ajax(settings).done((response) => {
            console.log("hhh",response);
            this.nEntryFee = response.data.nEntryFee;
            this.oRewardData = response.data.oReward;
            // console.log("callEntryFeeAPI",response);
            game.scene.stop('homeScene');
            game.scene.start('playScene');

        });
    }
    callTankAPI(oScene) {
        if (tankDataArray.length > 0) {
            tankDataArray = []
        }

        var settings1 = {
            "url": APIUrl + "/game/getTanks",
            "method": "POST",
            "timeout": 0,
            "headers": {
                authorization,
                "Content-Type": "application/json"
            },
            "data": JSON.stringify({
                "aTokenId": [8, 9, 15, 35, 36]
            }),
        };

        $.ajax(settings1).done((response) => {
            // console.log("1111", response);
            for (var i = 0; i < response.data.length; i++) {
                tankDataArray.push(response.data[i]);
            }
            // console.log(tankDataArray,oScene);
            oScene.loadTankSprits();

        });

    }
    sendTankData(selectedTankArray, sRegion, oScene) {
        // console.log('selectedTankArray',selectedTankArray);
        var loginObj = $.ajax({
            url: APIUrl + "/game/join",
            type: 'POST',
            dataType: 'json',
            data: JSON.stringify({ "aTankId": selectedTankArray, "sRegion": sRegion }),

            headers: {
                authorization
            },
            contentType: 'application/json; charset=utf-8',
            success: (result) => {
                if (result.message == "success") {
                    oScene.sTableId = result.data.iTableId;
                    oScene.startGamePlay(authorization, oScene.sTableId);
                }
            },
            error: function (error) {
                // console.log(error);
            }
        });
    }
    callLoginHandler(sEmail, sPassword) {
        game.scene.stop('gameLogin');
        game.scene.start('playScene');
        var settings = {
            "url": APIUrl + "/auth/login/simple",
            "method": "POST",
            "timeout": 0,
            "headers": {
                "Content-Type": "application/json"
            },
            "data": JSON.stringify({ "sEmail": sEmail, "sPassword": sPassword }),
        };

        // $.ajax(settings).done(function (response) {
            // window.authorization = response.data.authorization;
        // });
    }
}
const oApiHandler = new ApiHandler();