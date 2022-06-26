/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 8270:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K$": function() { return /* binding */ GAME_STATUS_COMPLETED; },
/* harmony export */   "Mq": function() { return /* binding */ LOADING_STATUS_GAME_PENDING; },
/* harmony export */   "Ro": function() { return /* binding */ LOADING_STATUS_PROVIDER_LOADED; },
/* harmony export */   "_H": function() { return /* binding */ TOKEN_ROOT_ADDRESS; },
/* harmony export */   "h_": function() { return /* binding */ LOADING_STATUS_NO_PERMISSIONS; },
/* harmony export */   "je": function() { return /* binding */ GENESIS_ADDRESS; },
/* harmony export */   "mk": function() { return /* binding */ EMPTY_CELL; },
/* harmony export */   "rb": function() { return /* binding */ HOST_ADDRESS; },
/* harmony export */   "rr": function() { return /* binding */ LOADING_STATUS_PROVIDER_NOT_LOADED; },
/* harmony export */   "u2": function() { return /* binding */ SELF_PUT_OFFSET; },
/* harmony export */   "u3": function() { return /* binding */ LOADING_STATUS_EMPTY_GAME_LIST; }
/* harmony export */ });
/* unused harmony export SALE_TOKEN */
const SELF_PUT_OFFSET = 1000;
const GENESIS_ADDRESS = "0:f2ff16460f846733744e017c598cd62454e7071f3bd788f91256645d45061da1";
const TOKEN_ROOT_ADDRESS = "0:dbba0028173f5b8d09eb597e0cca88cb41a4875efdf8a1815bb31292f150f800";
const SALE_TOKEN = "0:4ff60d4428f7c4fb04ab3b02e1be16ca20fe459003ce78b416ce6fb18b9b1374";
const HOST_ADDRESS = "0:2c2ee44ef85ec5b1f25c5ac293c422465343368d65ece7ab81671d7926eea276";
const EMPTY_CELL = "te6ccgEBAgEABQABAAEAAA==";
const LOADING_STATUS_PROVIDER_NOT_LOADED = 1;
const LOADING_STATUS_PROVIDER_LOADED = 2;
const LOADING_STATUS_NO_PERMISSIONS = 3;
const LOADING_STATUS_GAME_PENDING = 4;
const LOADING_STATUS_EMPTY_GAME_LIST = 5;
const GAME_STATUS_COMPLETED = 3;

/***/ }),

/***/ 4226:
/***/ (function(module) {

const FarmingWalletContract = {
  abi: {
    "ABI version": 2,
    "version": "2.2",
    "header": ["pubkey", "time", "expire"],
    "functions": [{
      "name": "constructor",
      "inputs": [],
      "outputs": []
    }, {
      "name": "onDeploy",
      "inputs": [{
        "name": "gWallet",
        "type": "address"
      }],
      "outputs": []
    }, {
      "name": "onAcceptTokensTransfer",
      "inputs": [{
        "name": "tokenRoot",
        "type": "address"
      }, {
        "name": "amount",
        "type": "uint128"
      }, {
        "name": "sender",
        "type": "address"
      }, {
        "name": "senderWallet",
        "type": "address"
      }, {
        "name": "remainingGasTo",
        "type": "address"
      }, {
        "name": "payload",
        "type": "cell"
      }],
      "outputs": []
    }, {
      "name": "releaseTokens",
      "inputs": [{
        "name": "amount",
        "type": "uint128"
      }],
      "outputs": []
    }, {
      "name": "calcFarming",
      "inputs": [{
        "name": "time",
        "type": "uint128"
      }, {
        "name": "tokenBalance",
        "type": "uint128"
      }],
      "outputs": [{
        "name": "value0",
        "type": "uint128"
      }]
    }, {
      "name": "showTiles",
      "inputs": [],
      "outputs": [{
        "name": "value0",
        "type": "uint16"
      }]
    }, {
      "name": "claimTiles",
      "inputs": [{
        "name": "genesis",
        "type": "address"
      }],
      "outputs": []
    }, {
      "name": "tokenWallet",
      "inputs": [],
      "outputs": [{
        "name": "tokenWallet",
        "type": "address"
      }]
    }, {
      "name": "_balance",
      "inputs": [],
      "outputs": [{
        "name": "_balance",
        "type": "uint128"
      }]
    }, {
      "name": "tilesNum",
      "inputs": [],
      "outputs": [{
        "name": "tilesNum",
        "type": "uint128"
      }]
    }, {
      "name": "tilesChangeTime",
      "inputs": [],
      "outputs": [{
        "name": "tilesChangeTime",
        "type": "uint128"
      }]
    }],
    "data": [{
      "key": 1,
      "name": "game",
      "type": "address"
    }, {
      "key": 2,
      "name": "owner",
      "type": "address"
    }, {
      "key": 3,
      "name": "tokenRootAddress",
      "type": "address"
    }],
    "events": [{
      "name": "OperationCompleted",
      "inputs": [{
        "name": "name",
        "type": "string"
      }, {
        "name": "player",
        "type": "address"
      }, {
        "name": "gameStatus",
        "type": "uint8"
      }, {
        "name": "timestamp",
        "type": "uint64"
      }, {
        "name": "value",
        "type": "uint128"
      }],
      "outputs": []
    }, {
      "name": "RewardsCalculated",
      "inputs": [{
        "name": "timestamp",
        "type": "uint64"
      }],
      "outputs": []
    }, {
      "name": "GameBattleEvent",
      "inputs": [{
        "name": "name",
        "type": "string"
      }, {
        "name": "player",
        "type": "address"
      }, {
        "name": "timestamp",
        "type": "uint64"
      }, {
        "name": "value",
        "type": "uint128"
      }],
      "outputs": []
    }],
    "fields": [{
      "name": "_pubkey",
      "type": "uint256"
    }, {
      "name": "_timestamp",
      "type": "uint64"
    }, {
      "name": "_constructorFlag",
      "type": "bool"
    }, {
      "name": "game",
      "type": "address"
    }, {
      "name": "owner",
      "type": "address"
    }, {
      "name": "tokenRootAddress",
      "type": "address"
    }, {
      "name": "tokenWallet",
      "type": "address"
    }, {
      "name": "_balance",
      "type": "uint128"
    }, {
      "name": "tilesNum",
      "type": "uint128"
    }, {
      "name": "tilesChangeTime",
      "type": "uint128"
    }]
  },
  tvc: "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",
  code: "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",
  codeHash: "821f3d465a319543cab7d07e8d0daa1f2416a99ead430e6efc2b9bb42f14ebc7"
};
module.exports = {
  FarmingWalletContract
};

/***/ }),

/***/ 9577:
/***/ (function(module) {

const GameHostContract = {
  abi: {
    "ABI version": 2,
    "version": "2.2",
    "header": ["pubkey", "time", "expire"],
    "functions": [{
      "name": "constructor",
      "inputs": [{
        "name": "_indexCode",
        "type": "cell"
      }, {
        "name": "_walletCode",
        "type": "cell"
      }, {
        "name": "_tokenRootAddress",
        "type": "address"
      }],
      "outputs": []
    }, {
      "name": "onDeploy",
      "inputs": [{
        "name": "gameWallet",
        "type": "address"
      }],
      "outputs": []
    }, {
      "name": "onGetWalletAddress",
      "inputs": [{
        "name": "_walletAddress",
        "type": "address"
      }],
      "outputs": []
    }, {
      "name": "getGameCode",
      "inputs": [],
      "outputs": [{
        "name": "value0",
        "type": "cell"
      }]
    }, {
      "name": "getGameHash",
      "inputs": [{
        "name": "gameId",
        "type": "uint32"
      }],
      "outputs": [{
        "name": "value0",
        "type": "uint256"
      }]
    }, {
      "name": "setGameCode",
      "inputs": [{
        "name": "_gameCode",
        "type": "cell"
      }],
      "outputs": []
    }, {
      "name": "setFarmingCode",
      "inputs": [{
        "name": "_farmingCode",
        "type": "cell"
      }],
      "outputs": []
    }, {
      "name": "deployGame",
      "inputs": [{
        "name": "answerId",
        "type": "uint32"
      }, {
        "name": "_renderSettings",
        "type": "uint24[]"
      }, {
        "name": "_gameName",
        "type": "string"
      }, {
        "name": "_gameStartTime",
        "type": "uint64"
      }],
      "outputs": [{
        "name": "value0",
        "type": "address"
      }]
    }, {
      "name": "runGameInQueue",
      "inputs": [],
      "outputs": []
    }, {
      "name": "onGetNextGame",
      "inputs": [{
        "name": "newGameAddress",
        "type": "address"
      }],
      "outputs": []
    }, {
      "name": "onGameCompleted",
      "inputs": [{
        "components": [{
          "name": "tokenRootAddress",
          "type": "address"
        }, {
          "name": "created",
          "type": "uint64"
        }, {
          "name": "imageOwner",
          "type": "address"
        }, {
          "name": "gameId",
          "type": "uint32"
        }, {
          "name": "gameWallet",
          "type": "address"
        }, {
          "name": "remainingTiles",
          "type": "uint16"
        }, {
          "name": "gameHost",
          "type": "address"
        }, {
          "name": "renderConfig",
          "type": "uint24[]"
        }, {
          "name": "status",
          "type": "uint8"
        }, {
          "name": "gameName",
          "type": "string"
        }, {
          "name": "gameStartTime",
          "type": "uint64"
        }],
        "name": "gameInfo",
        "type": "tuple"
      }],
      "outputs": []
    }, {
      "name": "onGetNextGameAfterComplete",
      "inputs": [{
        "name": "newGameAddress",
        "type": "address"
      }],
      "outputs": []
    }, {
      "name": "setRewardPerGame",
      "inputs": [{
        "name": "newRewardPerGame",
        "type": "uint128"
      }],
      "outputs": []
    }, {
      "name": "getRewardPerGame",
      "inputs": [],
      "outputs": [{
        "name": "value0",
        "type": "uint128"
      }]
    }, {
      "name": "getGameAddress",
      "inputs": [{
        "components": [{
          "name": "tokenRootAddress",
          "type": "address"
        }, {
          "name": "created",
          "type": "uint64"
        }, {
          "name": "imageOwner",
          "type": "address"
        }, {
          "name": "gameId",
          "type": "uint32"
        }, {
          "name": "gameWallet",
          "type": "address"
        }, {
          "name": "remainingTiles",
          "type": "uint16"
        }, {
          "name": "gameHost",
          "type": "address"
        }, {
          "name": "renderConfig",
          "type": "uint24[]"
        }, {
          "name": "status",
          "type": "uint8"
        }, {
          "name": "gameName",
          "type": "string"
        }, {
          "name": "gameStartTime",
          "type": "uint64"
        }],
        "name": "gameInfo",
        "type": "tuple"
      }],
      "outputs": [{
        "name": "value0",
        "type": "address"
      }]
    }, {
      "name": "getIndexAddress",
      "inputs": [{
        "name": "_gameId",
        "type": "uint32"
      }],
      "outputs": [{
        "name": "value0",
        "type": "address"
      }]
    }, {
      "name": "isNextGameEmpty",
      "inputs": [],
      "outputs": [{
        "name": "value0",
        "type": "bool"
      }]
    }, {
      "name": "setQueueAddress",
      "inputs": [{
        "name": "_queueAddress",
        "type": "address"
      }],
      "outputs": []
    }, {
      "name": "drain",
      "inputs": [{
        "name": "receiver",
        "type": "address"
      }],
      "outputs": []
    }, {
      "name": "drainGame",
      "inputs": [{
        "name": "gameAddress",
        "type": "address"
      }],
      "outputs": []
    }, {
      "name": "drainTokens",
      "inputs": [{
        "name": "value",
        "type": "uint128"
      }, {
        "name": "receiver",
        "type": "address"
      }],
      "outputs": []
    }, {
      "name": "drainGameTokens",
      "inputs": [{
        "name": "gameAddress",
        "type": "address"
      }, {
        "name": "value",
        "type": "uint128"
      }],
      "outputs": []
    }, {
      "name": "currentGameId",
      "inputs": [],
      "outputs": [{
        "name": "currentGameId",
        "type": "uint32"
      }]
    }, {
      "name": "indexCode",
      "inputs": [],
      "outputs": [{
        "name": "indexCode",
        "type": "cell"
      }]
    }, {
      "name": "queueAddress",
      "inputs": [],
      "outputs": [{
        "name": "queueAddress",
        "type": "address"
      }]
    }],
    "data": [{
      "key": 1,
      "name": "_randomNonce",
      "type": "uint64"
    }],
    "events": [],
    "fields": [{
      "name": "_pubkey",
      "type": "uint256"
    }, {
      "name": "_timestamp",
      "type": "uint64"
    }, {
      "name": "_constructorFlag",
      "type": "bool"
    }, {
      "name": "_randomNonce",
      "type": "uint64"
    }, {
      "name": "currentGameId",
      "type": "uint32"
    }, {
      "name": "nextGameAddress",
      "type": "address"
    }, {
      "name": "indexCode",
      "type": "cell"
    }, {
      "name": "gameCode",
      "type": "cell"
    }, {
      "name": "farmingCode",
      "type": "cell"
    }, {
      "name": "walletCode",
      "type": "cell"
    }, {
      "name": "tokenRootAddress",
      "type": "address"
    }, {
      "name": "walletAddress",
      "type": "address"
    }, {
      "name": "rewardPerGame",
      "type": "uint128"
    }, {
      "name": "queueAddress",
      "type": "address"
    }]
  },
  tvc: "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",
  code: "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",
  codeHash: "ffc14ab6a78bb3fb83966b239926250f15c92688528854e2515164f3a16266b4"
};
module.exports = {
  GameHostContract
};

/***/ }),

/***/ 1811:
/***/ (function(module) {

const GameIndexContract = {
  abi: {
    "ABI version": 2,
    "version": "2.2",
    "header": ["pubkey", "time", "expire"],
    "functions": [{
      "name": "constructor",
      "inputs": [{
        "name": "_gameAddress",
        "type": "address"
      }],
      "outputs": []
    }, {
      "name": "gameAddress",
      "inputs": [],
      "outputs": [{
        "name": "gameAddress",
        "type": "address"
      }]
    }],
    "data": [{
      "key": 1,
      "name": "gameId",
      "type": "uint32"
    }],
    "events": [],
    "fields": [{
      "name": "_pubkey",
      "type": "uint256"
    }, {
      "name": "_timestamp",
      "type": "uint64"
    }, {
      "name": "_constructorFlag",
      "type": "bool"
    }, {
      "name": "gameAddress",
      "type": "address"
    }, {
      "name": "gameId",
      "type": "uint32"
    }]
  },
  tvc: "te6ccgECFwEAAksAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAgaK2zUWBAQkiu1TIOMDIMD/4wIgwP7jAvILEwYFFQO+7UTQ10nDAfhmifhpIds80wABjhqBAgDXGCD5AQHTAAGU0/8DAZMC+ELi+RDyqJXTAAHyeuLTPwH4QyG58rQg+COBA+iogggbd0CgufK0+GPTHwH4I7zyudMfAds88jwPDQcDUu1E0NdJwwH4ZiLQ0wP6QDD4aak4ANwhxwDjAiHXDR/yvCHjAwHbPPI8EhIHAiggghBD06QduuMCIIIQR1ZU3LrjAhAIBHAw+EJu4wD4RvJzIZPU0dDe+kDR+EGIyM+OK2zWzM7J2zwgbvJ/0PpAMPhJxwXy4+v4APhq2zzyAA0WCgkAKvhL+Er4Q/hCyMv/yz/Pg87LH8ntVAIY0CCLOK2zWMcFioriCwwBCtdN0Ns8DABC10zQiy9KQNcm9AQx0wkxiy9KGNcmINdKwgGS102SMG3iAhbtRNDXScIBjoDjDQ4RAUxw7UTQ9AWJcSKAQPQOk9cLH5Fw4vhr+GqAQPQO8r3XC//4YnD4Yw8AQ4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABABTjDR2zz4SiGOG40EcAAAAAAAAAAAAAAAADD06QdgyM7OyXD7AN7yABEALu1E0NP/0z/TADH6QNMf0fhr+Gr4Y/hiAAr4RvLgTAIK9KQg9KEVFAAUc29sIDAuNTcuMAAAAAwg+GHtHtk=",
  code: "te6ccgECFAEAAh4AAgaK2zUTAQQkiu1TIOMDIMD/4wIgwP7jAvILEAMCEgO+7UTQ10nDAfhmifhpIds80wABjhqBAgDXGCD5AQHTAAGU0/8DAZMC+ELi+RDyqJXTAAHyeuLTPwH4QyG58rQg+COBA+iogggbd0CgufK0+GPTHwH4I7zyudMfAds88jwMCgQDUu1E0NdJwwH4ZiLQ0wP6QDD4aak4ANwhxwDjAiHXDR/yvCHjAwHbPPI8Dw8EAiggghBD06QduuMCIIIQR1ZU3LrjAg0FBHAw+EJu4wD4RvJzIZPU0dDe+kDR+EGIyM+OK2zWzM7J2zwgbvJ/0PpAMPhJxwXy4+v4APhq2zzyAAoTBwYAKvhL+Er4Q/hCyMv/yz/Pg87LH8ntVAIY0CCLOK2zWMcFioriCAkBCtdN0Ns8CQBC10zQiy9KQNcm9AQx0wkxiy9KGNcmINdKwgGS102SMG3iAhbtRNDXScIBjoDjDQsOAUxw7UTQ9AWJcSKAQPQOk9cLH5Fw4vhr+GqAQPQO8r3XC//4YnD4YwwAQ4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABABTjDR2zz4SiGOG40EcAAAAAAAAAAAAAAAADD06QdgyM7OyXD7AN7yAA4ALu1E0NP/0z/TADH6QNMf0fhr+Gr4Y/hiAAr4RvLgTAIK9KQg9KESEQAUc29sIDAuNTcuMAAAAAwg+GHtHtk=",
  codeHash: "016ef267610c95ac26e6981c079b9516508851b91623623c56a04d941dc1bf16"
};
module.exports = {
  GameIndexContract
};

/***/ }),

/***/ 2175:
/***/ (function(module) {

const PBGameContract = {
  abi: {
    "ABI version": 2,
    "version": "2.2",
    "header": ["pubkey", "time", "expire"],
    "functions": [{
      "name": "constructor",
      "inputs": [{
        "name": "_renderSettings",
        "type": "uint24[]"
      }, {
        "name": "_gameName",
        "type": "string"
      }, {
        "name": "_gameStartTime",
        "type": "uint64"
      }],
      "outputs": []
    }, {
      "name": "onDeploy",
      "inputs": [{
        "name": "gWallet",
        "type": "address"
      }],
      "outputs": []
    }, {
      "name": "setGameId",
      "inputs": [{
        "name": "_gameId",
        "type": "uint32"
      }],
      "outputs": []
    }, {
      "name": "saveImageFragment",
      "inputs": [{
        "name": "fragmentNum",
        "type": "uint8"
      }, {
        "name": "tiles",
        "type": "uint8[][]"
      }],
      "outputs": []
    }, {
      "name": "setImageForReview",
      "inputs": [],
      "outputs": []
    }, {
      "name": "setGameStatus",
      "inputs": [{
        "name": "newStatus",
        "type": "uint8"
      }],
      "outputs": []
    }, {
      "name": "setGameExtraSettings",
      "inputs": [{
        "name": "_gameExtraSettings",
        "type": "uint128[]"
      }],
      "outputs": []
    }, {
      "name": "getGameExtraSettings",
      "inputs": [],
      "outputs": [{
        "components": [{
          "name": "maxStars",
          "type": "uint8"
        }, {
          "name": "scorePerStar",
          "type": "uint16"
        }, {
          "name": "currentStars",
          "type": "uint8"
        }, {
          "name": "percentOfReward",
          "type": "uint8"
        }],
        "name": "value0",
        "type": "tuple"
      }]
    }, {
      "name": "notifyBalanceChange",
      "inputs": [{
        "name": "ownerAddress",
        "type": "address"
      }, {
        "name": "tokenBalance",
        "type": "uint128"
      }],
      "outputs": []
    }, {
      "name": "onClaimTilesFarming",
      "inputs": [{
        "name": "ownerAddress",
        "type": "address"
      }, {
        "name": "tilesNum",
        "type": "uint16"
      }],
      "outputs": []
    }, {
      "name": "onAcceptTokensTransfer",
      "inputs": [{
        "name": "tokenRoot",
        "type": "address"
      }, {
        "name": "amount",
        "type": "uint128"
      }, {
        "name": "sender",
        "type": "address"
      }, {
        "name": "senderWallet",
        "type": "address"
      }, {
        "name": "remainingGasTo",
        "type": "address"
      }, {
        "name": "payload",
        "type": "cell"
      }],
      "outputs": []
    }, {
      "name": "putTiles",
      "inputs": [{
        "components": [{
          "name": "f",
          "type": "uint8"
        }, {
          "name": "x",
          "type": "uint8"
        }, {
          "name": "y",
          "type": "uint8"
        }, {
          "name": "color",
          "type": "uint8"
        }],
        "name": "tiles",
        "type": "tuple[]"
      }, {
        "name": "ownerAddress",
        "type": "address"
      }],
      "outputs": []
    }, {
      "name": "postPutTiles",
      "inputs": [{
        "name": "ownerAddress",
        "type": "address"
      }, {
        "name": "tilesQty",
        "type": "uint128"
      }],
      "outputs": []
    }, {
      "name": "packTiles",
      "inputs": [{
        "components": [{
          "name": "f",
          "type": "uint8"
        }, {
          "name": "x",
          "type": "uint8"
        }, {
          "name": "y",
          "type": "uint8"
        }, {
          "name": "color",
          "type": "uint8"
        }],
        "name": "tiles",
        "type": "tuple[]"
      }],
      "outputs": [{
        "name": "value0",
        "type": "cell"
      }]
    }, {
      "name": "completeGame",
      "inputs": [{
        "name": "_totalReward",
        "type": "uint128"
      }],
      "outputs": []
    }, {
      "name": "claimReward",
      "inputs": [],
      "outputs": []
    }, {
      "name": "deployFarmingWallet",
      "inputs": [],
      "outputs": []
    }, {
      "name": "drainByHost",
      "inputs": [],
      "outputs": []
    }, {
      "name": "drainTokens",
      "inputs": [{
        "name": "value",
        "type": "uint128"
      }],
      "outputs": []
    }, {
      "name": "isImageComplete",
      "inputs": [],
      "outputs": [{
        "name": "value0",
        "type": "bool"
      }]
    }, {
      "name": "getFarmingAddress",
      "inputs": [{
        "name": "walletOwner",
        "type": "address"
      }],
      "outputs": [{
        "name": "value0",
        "type": "address"
      }]
    }, {
      "name": "getInfo",
      "inputs": [],
      "outputs": [{
        "components": [{
          "name": "tokenRootAddress",
          "type": "address"
        }, {
          "name": "created",
          "type": "uint64"
        }, {
          "name": "imageOwner",
          "type": "address"
        }, {
          "name": "gameId",
          "type": "uint32"
        }, {
          "name": "gameWallet",
          "type": "address"
        }, {
          "name": "remainingTiles",
          "type": "uint16"
        }, {
          "name": "gameHost",
          "type": "address"
        }, {
          "name": "renderConfig",
          "type": "uint24[]"
        }, {
          "name": "status",
          "type": "uint8"
        }, {
          "name": "gameName",
          "type": "string"
        }, {
          "name": "gameStartTime",
          "type": "uint64"
        }],
        "name": "value0",
        "type": "tuple"
      }]
    }, {
      "name": "fillSortable",
      "inputs": [{
        "name": "startPlayerAddress",
        "type": "address"
      }],
      "outputs": []
    }, {
      "name": "distributeRewards",
      "inputs": [{
        "components": [{
          "name": "value",
          "type": "uint16"
        }, {
          "name": "created",
          "type": "int64"
        }],
        "name": "startPlayerSortable",
        "type": "tuple"
      }],
      "outputs": []
    }, {
      "name": "drawNFT",
      "inputs": [],
      "outputs": []
    }, {
      "name": "players",
      "inputs": [],
      "outputs": [{
        "components": [{
          "name": "walletAddress",
          "type": "address"
        }, {
          "name": "captured",
          "type": "uint16"
        }, {
          "name": "stars",
          "type": "uint16"
        }, {
          "name": "lastPutTime",
          "type": "uint64"
        }, {
          "name": "reward",
          "type": "uint128"
        }, {
          "name": "isReceived",
          "type": "bool"
        }, {
          "name": "nft",
          "type": "bool"
        }],
        "name": "players",
        "type": "map(address,tuple)"
      }]
    }, {
      "name": "playerColors",
      "inputs": [],
      "outputs": [{
        "name": "playerColors",
        "type": "map(address,uint16[])"
      }]
    }, {
      "name": "playerBalances",
      "inputs": [],
      "outputs": [{
        "name": "playerBalances",
        "type": "map(address,uint128)"
      }]
    }, {
      "name": "field",
      "inputs": [],
      "outputs": [{
        "name": "field",
        "type": "map(uint8,uint8[][])"
      }]
    }, {
      "name": "template",
      "inputs": [],
      "outputs": [{
        "name": "template",
        "type": "map(uint8,uint8[][])"
      }]
    }],
    "data": [{
      "key": 1,
      "name": "walletCode",
      "type": "cell"
    }, {
      "key": 2,
      "name": "tokenRootAddress",
      "type": "address"
    }, {
      "key": 3,
      "name": "farmingCode",
      "type": "cell"
    }, {
      "key": 4,
      "name": "created",
      "type": "uint64"
    }, {
      "key": 5,
      "name": "imageOwner",
      "type": "address"
    }],
    "events": [{
      "name": "OperationCompleted",
      "inputs": [{
        "name": "name",
        "type": "string"
      }, {
        "name": "player",
        "type": "address"
      }, {
        "name": "gameStatus",
        "type": "uint8"
      }, {
        "name": "timestamp",
        "type": "uint64"
      }, {
        "name": "value",
        "type": "uint128"
      }],
      "outputs": []
    }, {
      "name": "RewardsCalculated",
      "inputs": [{
        "name": "timestamp",
        "type": "uint64"
      }],
      "outputs": []
    }, {
      "name": "GameBattleEvent",
      "inputs": [{
        "name": "name",
        "type": "string"
      }, {
        "name": "player",
        "type": "address"
      }, {
        "name": "timestamp",
        "type": "uint64"
      }, {
        "name": "value",
        "type": "uint128"
      }],
      "outputs": []
    }],
    "fields": [{
      "name": "_pubkey",
      "type": "uint256"
    }, {
      "name": "_timestamp",
      "type": "uint64"
    }, {
      "name": "_constructorFlag",
      "type": "bool"
    }, {
      "name": "totalReward",
      "type": "uint128"
    }, {
      "name": "mSortablePlayers",
      "type": "optional(cell)"
    }, {
      "name": "walletCode",
      "type": "cell"
    }, {
      "name": "tokenRootAddress",
      "type": "address"
    }, {
      "name": "farmingCode",
      "type": "cell"
    }, {
      "name": "created",
      "type": "uint64"
    }, {
      "name": "imageOwner",
      "type": "address"
    }, {
      "name": "gameWallet",
      "type": "address"
    }, {
      "name": "remainingTiles",
      "type": "uint16"
    }, {
      "name": "gameId",
      "type": "uint32"
    }, {
      "name": "gameHost",
      "type": "address"
    }, {
      "name": "status",
      "type": "uint8"
    }, {
      "name": "vertFragments",
      "type": "uint8"
    }, {
      "name": "horizFragments",
      "type": "uint8"
    }, {
      "name": "maxColors",
      "type": "uint8"
    }, {
      "name": "renderSettings",
      "type": "uint24[]"
    }, {
      "name": "tokensPerPut",
      "type": "uint128"
    }, {
      "name": "gameName",
      "type": "string"
    }, {
      "name": "gameStartTime",
      "type": "uint64"
    }, {
      "name": "maxStars",
      "type": "uint8"
    }, {
      "name": "scorePerStar",
      "type": "uint16"
    }, {
      "name": "currentStars",
      "type": "uint8"
    }, {
      "name": "percentOfReward",
      "type": "uint8"
    }, {
      "components": [{
        "name": "walletAddress",
        "type": "address"
      }, {
        "name": "captured",
        "type": "uint16"
      }, {
        "name": "stars",
        "type": "uint16"
      }, {
        "name": "lastPutTime",
        "type": "uint64"
      }, {
        "name": "reward",
        "type": "uint128"
      }, {
        "name": "isReceived",
        "type": "bool"
      }, {
        "name": "nft",
        "type": "bool"
      }],
      "name": "players",
      "type": "map(address,tuple)"
    }, {
      "name": "playerColors",
      "type": "map(address,uint16[])"
    }, {
      "name": "playerBalances",
      "type": "map(address,uint128)"
    }, {
      "name": "field",
      "type": "map(uint8,uint8[][])"
    }, {
      "name": "template",
      "type": "map(uint8,uint8[][])"
    }]
  },
  tvc: "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",
  code: "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",
  codeHash: "34207cafad1449a92f05a81f84070de7d7a126f6a03cb9ba7d43147725abb777"
};
module.exports = {
  PBGameContract
};

/***/ }),

/***/ 2841:
/***/ (function(module) {

const TokenRootContract = {
  abi: {
    "ABI version": 2,
    "version": "2.2",
    "header": ["pubkey", "time", "expire"],
    "functions": [{
      "name": "constructor",
      "inputs": [{
        "name": "initialSupplyTo",
        "type": "address"
      }, {
        "name": "initialSupply",
        "type": "uint128"
      }, {
        "name": "deployWalletValue",
        "type": "uint128"
      }, {
        "name": "mintDisabled",
        "type": "bool"
      }, {
        "name": "burnByRootDisabled",
        "type": "bool"
      }, {
        "name": "burnPaused",
        "type": "bool"
      }, {
        "name": "remainingGasTo",
        "type": "address"
      }],
      "outputs": []
    }, {
      "name": "supportsInterface",
      "inputs": [{
        "name": "answerId",
        "type": "uint32"
      }, {
        "name": "interfaceID",
        "type": "uint32"
      }],
      "outputs": [{
        "name": "value0",
        "type": "bool"
      }]
    }, {
      "name": "disableMint",
      "inputs": [{
        "name": "answerId",
        "type": "uint32"
      }],
      "outputs": [{
        "name": "value0",
        "type": "bool"
      }]
    }, {
      "name": "mintDisabled",
      "inputs": [{
        "name": "answerId",
        "type": "uint32"
      }],
      "outputs": [{
        "name": "value0",
        "type": "bool"
      }]
    }, {
      "name": "burnTokens",
      "inputs": [{
        "name": "amount",
        "type": "uint128"
      }, {
        "name": "walletOwner",
        "type": "address"
      }, {
        "name": "remainingGasTo",
        "type": "address"
      }, {
        "name": "callbackTo",
        "type": "address"
      }, {
        "name": "payload",
        "type": "cell"
      }],
      "outputs": []
    }, {
      "name": "disableBurnByRoot",
      "inputs": [{
        "name": "answerId",
        "type": "uint32"
      }],
      "outputs": [{
        "name": "value0",
        "type": "bool"
      }]
    }, {
      "name": "burnByRootDisabled",
      "inputs": [{
        "name": "answerId",
        "type": "uint32"
      }],
      "outputs": [{
        "name": "value0",
        "type": "bool"
      }]
    }, {
      "name": "burnPaused",
      "inputs": [{
        "name": "answerId",
        "type": "uint32"
      }],
      "outputs": [{
        "name": "value0",
        "type": "bool"
      }]
    }, {
      "name": "setBurnPaused",
      "inputs": [{
        "name": "answerId",
        "type": "uint32"
      }, {
        "name": "paused",
        "type": "bool"
      }],
      "outputs": [{
        "name": "value0",
        "type": "bool"
      }]
    }, {
      "name": "transferOwnership",
      "inputs": [{
        "name": "newOwner",
        "type": "address"
      }, {
        "name": "remainingGasTo",
        "type": "address"
      }, {
        "components": [{
          "name": "value",
          "type": "uint128"
        }, {
          "name": "payload",
          "type": "cell"
        }],
        "name": "callbacks",
        "type": "map(address,tuple)"
      }],
      "outputs": []
    }, {
      "name": "name",
      "inputs": [{
        "name": "answerId",
        "type": "uint32"
      }],
      "outputs": [{
        "name": "value0",
        "type": "string"
      }]
    }, {
      "name": "symbol",
      "inputs": [{
        "name": "answerId",
        "type": "uint32"
      }],
      "outputs": [{
        "name": "value0",
        "type": "string"
      }]
    }, {
      "name": "decimals",
      "inputs": [{
        "name": "answerId",
        "type": "uint32"
      }],
      "outputs": [{
        "name": "value0",
        "type": "uint8"
      }]
    }, {
      "name": "totalSupply",
      "inputs": [{
        "name": "answerId",
        "type": "uint32"
      }],
      "outputs": [{
        "name": "value0",
        "type": "uint128"
      }]
    }, {
      "name": "walletCode",
      "inputs": [{
        "name": "answerId",
        "type": "uint32"
      }],
      "outputs": [{
        "name": "value0",
        "type": "cell"
      }]
    }, {
      "name": "rootOwner",
      "inputs": [{
        "name": "answerId",
        "type": "uint32"
      }],
      "outputs": [{
        "name": "value0",
        "type": "address"
      }]
    }, {
      "name": "walletOf",
      "inputs": [{
        "name": "answerId",
        "type": "uint32"
      }, {
        "name": "walletOwner",
        "type": "address"
      }],
      "outputs": [{
        "name": "value0",
        "type": "address"
      }]
    }, {
      "name": "deployWallet",
      "inputs": [{
        "name": "answerId",
        "type": "uint32"
      }, {
        "name": "walletOwner",
        "type": "address"
      }, {
        "name": "deployWalletValue",
        "type": "uint128"
      }],
      "outputs": [{
        "name": "tokenWallet",
        "type": "address"
      }]
    }, {
      "name": "mint",
      "inputs": [{
        "name": "amount",
        "type": "uint128"
      }, {
        "name": "recipient",
        "type": "address"
      }, {
        "name": "deployWalletValue",
        "type": "uint128"
      }, {
        "name": "remainingGasTo",
        "type": "address"
      }, {
        "name": "notify",
        "type": "bool"
      }, {
        "name": "payload",
        "type": "cell"
      }],
      "outputs": []
    }, {
      "name": "acceptBurn",
      "id": "0x192B51B1",
      "inputs": [{
        "name": "amount",
        "type": "uint128"
      }, {
        "name": "walletOwner",
        "type": "address"
      }, {
        "name": "remainingGasTo",
        "type": "address"
      }, {
        "name": "callbackTo",
        "type": "address"
      }, {
        "name": "payload",
        "type": "cell"
      }],
      "outputs": []
    }, {
      "name": "sendSurplusGas",
      "inputs": [{
        "name": "to",
        "type": "address"
      }],
      "outputs": []
    }],
    "data": [{
      "key": 1,
      "name": "name_",
      "type": "string"
    }, {
      "key": 2,
      "name": "symbol_",
      "type": "string"
    }, {
      "key": 3,
      "name": "decimals_",
      "type": "uint8"
    }, {
      "key": 4,
      "name": "rootOwner_",
      "type": "address"
    }, {
      "key": 5,
      "name": "walletCode_",
      "type": "cell"
    }, {
      "key": 6,
      "name": "randomNonce_",
      "type": "uint256"
    }, {
      "key": 7,
      "name": "deployer_",
      "type": "address"
    }],
    "events": [],
    "fields": [{
      "name": "_pubkey",
      "type": "uint256"
    }, {
      "name": "_timestamp",
      "type": "uint64"
    }, {
      "name": "_constructorFlag",
      "type": "bool"
    }, {
      "name": "name_",
      "type": "string"
    }, {
      "name": "symbol_",
      "type": "string"
    }, {
      "name": "decimals_",
      "type": "uint8"
    }, {
      "name": "rootOwner_",
      "type": "address"
    }, {
      "name": "walletCode_",
      "type": "cell"
    }, {
      "name": "totalSupply_",
      "type": "uint128"
    }, {
      "name": "burnPaused_",
      "type": "bool"
    }, {
      "name": "burnByRootDisabled_",
      "type": "bool"
    }, {
      "name": "mintDisabled_",
      "type": "bool"
    }, {
      "name": "randomNonce_",
      "type": "uint256"
    }, {
      "name": "deployer_",
      "type": "address"
    }]
  },
  tvc: "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",
  code: "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",
  codeHash: "a34b46fecd7b43e79901894cbfd2d3314eb7a48f0101b549d7316ab3199b145f"
};
module.exports = {
  TokenRootContract
};

/***/ }),

/***/ 332:
/***/ (function(module) {

const TokenWalletContract = {
  abi: {
    "ABI version": 2,
    "version": "2.2",
    "header": ["pubkey", "time", "expire"],
    "functions": [{
      "name": "constructor",
      "inputs": [],
      "outputs": []
    }, {
      "name": "supportsInterface",
      "inputs": [{
        "name": "answerId",
        "type": "uint32"
      }, {
        "name": "interfaceID",
        "type": "uint32"
      }],
      "outputs": [{
        "name": "value0",
        "type": "bool"
      }]
    }, {
      "name": "claimTiles",
      "inputs": [{
        "name": "gameAddress",
        "type": "address"
      }, {
        "name": "genesis",
        "type": "address"
      }],
      "outputs": []
    }, {
      "name": "destroy",
      "inputs": [{
        "name": "remainingGasTo",
        "type": "address"
      }],
      "outputs": []
    }, {
      "name": "burnByRoot",
      "inputs": [{
        "name": "amount",
        "type": "uint128"
      }, {
        "name": "remainingGasTo",
        "type": "address"
      }, {
        "name": "callbackTo",
        "type": "address"
      }, {
        "name": "payload",
        "type": "cell"
      }],
      "outputs": []
    }, {
      "name": "burn",
      "inputs": [{
        "name": "amount",
        "type": "uint128"
      }, {
        "name": "remainingGasTo",
        "type": "address"
      }, {
        "name": "callbackTo",
        "type": "address"
      }, {
        "name": "payload",
        "type": "cell"
      }],
      "outputs": []
    }, {
      "name": "balance",
      "inputs": [{
        "name": "answerId",
        "type": "uint32"
      }],
      "outputs": [{
        "name": "value0",
        "type": "uint128"
      }]
    }, {
      "name": "owner",
      "inputs": [{
        "name": "answerId",
        "type": "uint32"
      }],
      "outputs": [{
        "name": "value0",
        "type": "address"
      }]
    }, {
      "name": "root",
      "inputs": [{
        "name": "answerId",
        "type": "uint32"
      }],
      "outputs": [{
        "name": "value0",
        "type": "address"
      }]
    }, {
      "name": "walletCode",
      "inputs": [{
        "name": "answerId",
        "type": "uint32"
      }],
      "outputs": [{
        "name": "value0",
        "type": "cell"
      }]
    }, {
      "name": "transfer",
      "inputs": [{
        "name": "amount",
        "type": "uint128"
      }, {
        "name": "recipient",
        "type": "address"
      }, {
        "name": "deployWalletValue",
        "type": "uint128"
      }, {
        "name": "remainingGasTo",
        "type": "address"
      }, {
        "name": "notify",
        "type": "bool"
      }, {
        "name": "payload",
        "type": "cell"
      }],
      "outputs": []
    }, {
      "name": "transferToWallet",
      "inputs": [{
        "name": "amount",
        "type": "uint128"
      }, {
        "name": "recipientTokenWallet",
        "type": "address"
      }, {
        "name": "remainingGasTo",
        "type": "address"
      }, {
        "name": "notify",
        "type": "bool"
      }, {
        "name": "payload",
        "type": "cell"
      }],
      "outputs": []
    }, {
      "name": "acceptTransfer",
      "id": "0x67A0B95F",
      "inputs": [{
        "name": "amount",
        "type": "uint128"
      }, {
        "name": "sender",
        "type": "address"
      }, {
        "name": "remainingGasTo",
        "type": "address"
      }, {
        "name": "notify",
        "type": "bool"
      }, {
        "name": "payload",
        "type": "cell"
      }],
      "outputs": []
    }, {
      "name": "acceptMint",
      "id": "0x4384F298",
      "inputs": [{
        "name": "amount",
        "type": "uint128"
      }, {
        "name": "remainingGasTo",
        "type": "address"
      }, {
        "name": "notify",
        "type": "bool"
      }, {
        "name": "payload",
        "type": "cell"
      }],
      "outputs": []
    }, {
      "name": "sendSurplusGas",
      "inputs": [{
        "name": "to",
        "type": "address"
      }],
      "outputs": []
    }, {
      "name": "showTiles",
      "inputs": [],
      "outputs": [{
        "name": "value0",
        "type": "uint16"
      }]
    }],
    "data": [{
      "key": 1,
      "name": "root_",
      "type": "address"
    }, {
      "key": 2,
      "name": "owner_",
      "type": "address"
    }],
    "events": [],
    "fields": [{
      "name": "_pubkey",
      "type": "uint256"
    }, {
      "name": "_timestamp",
      "type": "uint64"
    }, {
      "name": "_constructorFlag",
      "type": "bool"
    }, {
      "name": "root_",
      "type": "address"
    }, {
      "name": "owner_",
      "type": "address"
    }, {
      "name": "balance_",
      "type": "uint128"
    }, {
      "name": "tilesNum",
      "type": "uint128"
    }, {
      "name": "tilesChangeTime",
      "type": "uint128"
    }]
  },
  tvc: "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",
  code: "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",
  codeHash: "9bfd83014ac841e44a01844b9cf712ebe5153a741aa9006d5000e8aca0e1de99"
};
module.exports = {
  TokenWalletContract
};

/***/ }),

/***/ 3518:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm.js
var vue_runtime_esm = __webpack_require__(144);
// EXTERNAL MODULE: ./node_modules/vue-i18n/dist/vue-i18n.esm.js
var vue_i18n_esm = __webpack_require__(7152);
;// CONCATENATED MODULE: ../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"50d3a65f-vue-loader-template"}!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/cache-loader/dist/cjs.js??ruleSet[0].rules[0].use[0]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App.vue?vue&type=template&id=bbc54140&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[(this.$store.state.Ever.isLoading)?_c('div',{staticClass:"overlay"},[_c('img',{staticClass:"img-fluid",attrs:{"src":__webpack_require__(9574),"alt":""}}),_c('b-spinner',{attrs:{"variant":"primary"}})],1):_vm._e(),_c('div',[_c('div',{staticClass:"color-1",attrs:{"id":"color-1"}}),_c('div',{staticClass:"color-2",attrs:{"id":"color-2"}}),_c('div',{staticClass:"color-3",attrs:{"id":"color-3"}}),_c('div',{staticClass:"color-4",attrs:{"id":"color-4"}}),_c('div',{staticClass:"color-5",attrs:{"id":"color-5"}}),_c('ever-loader')],1),(!_vm.noGames && !_vm.gamePending && _vm.providerLoaded && !this.$store.state.Ever.isLoading)?_c('div',{staticClass:"game-container"},[_c('top-menu',{staticClass:"stat-block",attrs:{"id":"top-menu"}}),_c('div',{attrs:{"id":"field"}},[_c('router-view')],1),_c('bottom-menu',{attrs:{"id":"bottom-menu"}}),_c('toast-manager')],1):_vm._e(),(!_vm.noGames && !_vm.gamePending && !_vm.providerLoaded && !this.$store.state.Ever.isLoading)?_c('div',{staticClass:"game-container"},[_vm._m(0)]):_vm._e(),(!_vm.noGames && _vm.gamePending && !this.$store.state.Ever.isLoading)?_c('div',{staticClass:"game-container"},[_c('game-countdown')],1):_vm._e(),(_vm.noGames && !this.$store.state.Ever.isLoading)?_c('div',{staticClass:"game-container"},[_c('game-list-empty')],1):_vm._e()])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"game-error-notification"},[_c('div',{staticClass:"fancy-font stat-block text-center"},[_vm._v("Install the "),_c('span',{staticClass:"color-primary"},[_c('u',[_c('a',{attrs:{"href":"https://l1.broxus.com/","target":"_blank"}},[_vm._v("EVER wallet")])])]),_vm._v(" or update the permissions")])])}]


;// CONCATENATED MODULE: ./src/App.vue?vue&type=template&id=bbc54140&

;// CONCATENATED MODULE: ../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"50d3a65f-vue-loader-template"}!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/cache-loader/dist/cjs.js??ruleSet[0].rules[0].use[0]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/BottomMenu.vue?vue&type=template&id=73ceca8c&scoped=true&
var BottomMenuvue_type_template_id_73ceca8c_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"bottom-menu"}},[(_vm.isBalancePositive && !_vm.isGameCompleted)?_c('div',{attrs:{"id":"pile-colors"}},_vm._l((5),function(item){return _c('div',{key:item},[_c('bottom-menu-color',{attrs:{"btn-color":item}})],1)}),0):_vm._e(),(_vm.isBalancePositive && !_vm.isGameCompleted)?_c('div',{attrs:{"id":"claim-tiles"}},[(!_vm.tilesArePut)?_c('div',[(this.$store.state.PlayerInfo.isFarmingActive)?_c('b-button',{staticClass:"mr-2 color-primary",attrs:{"size":"sm","variant":"secondary"},on:{"click":function($event){return _vm.$bvModal.show('farming-settings')}}},[_c('i',{staticClass:"bi bi-gear-fill"})]):_vm._e(),(this.$store.state.PlayerInfo.isFarmingActive)?_c('b-button',{attrs:{"size":"md","variant":"primary"},on:{"click":_vm.claimTiles}},[_c('span',{directives:[{name:"show",rawName:"v-show",value:(!_vm.isLoading && this.tempClaimableTiles === 0),expression:"!isLoading && this.tempClaimableTiles === 0"}]},[_vm._v(_vm._s(_vm.$t('bottomMenu.claim'))),_c('br'),(this.$store.state.PlayerInfo.claimableTiles > 0)?_c('small',[_vm._v(_vm._s(this.$store.state.PlayerInfo.claimableTiles))]):_vm._e()]),_c('span',{directives:[{name:"show",rawName:"v-show",value:(!_vm.isLoading && this.tempClaimableTiles > 0),expression:"!isLoading && this.tempClaimableTiles > 0"}]},[_vm._v(_vm._s(_vm.$t('bottomMenu.claim'))),_c('br'),_c('small',{class:_vm.setAnimationClass},[_vm._v(_vm._s(this.tempClaimableTiles))])]),_c('b-spinner',{directives:[{name:"show",rawName:"v-show",value:(_vm.isLoading),expression:"isLoading"}]})],1):_vm._e(),(!this.$store.state.PlayerInfo.isFarmingActive)?_c('b-button',{attrs:{"size":"lg","variant":"primary"},on:{"click":_vm.joinGame}},[_c('span',{directives:[{name:"show",rawName:"v-show",value:(!_vm.isLoading),expression:"!isLoading"}]},[_vm._v(_vm._s(_vm.$t('bottomMenu.join')))]),_c('b-spinner',{directives:[{name:"show",rawName:"v-show",value:(_vm.isLoading),expression:"isLoading"}]})],1):_vm._e()],1):_vm._e(),(_vm.tilesArePut && !_vm.isMainScreen)?_c('div',{staticClass:"d-flex flex-column mt-1"},[_c('b-button',{attrs:{"size":"lg","variant":"primary"},on:{"click":_vm.putTiles}},[_c('span',{directives:[{name:"show",rawName:"v-show",value:(!_vm.isLoading),expression:"!isLoading"}]},[_vm._v(_vm._s(_vm.$t('bottomMenu.put'))),_c('small',[_vm._v(_vm._s(this.$store.state.Game.tilesToPut.length))])]),_c('b-spinner',{directives:[{name:"show",rawName:"v-show",value:(_vm.isLoading),expression:"isLoading"}]})],1),_c('b-button',{directives:[{name:"show",rawName:"v-show",value:(!_vm.isLoading),expression:"!isLoading"}],staticClass:"mt-1",attrs:{"size":"sm","variant":"secondary"},on:{"click":_vm.cancelPut}},[_vm._v(_vm._s(_vm.$t('bottomMenu.cancel'))+" "),_c('i',{staticClass:"bi bi-x-circle"})])],1):_vm._e()]):_vm._e(),(_vm.isGameCompleted)?_c('div',{staticClass:"claim-reward"},[(this.$store.state.PlayerInfo.isFarmingActive)?_c('b-button',{staticClass:"mr-2 color-primary",attrs:{"size":"sm","variant":"secondary"},on:{"click":function($event){return _vm.$bvModal.show('farming-settings')}}},[_c('i',{staticClass:"bi bi-gear-fill"})]):_vm._e(),_c('b-button',{directives:[{name:"show",rawName:"v-show",value:(!_vm.isReceived & _vm.isInRoaster & _vm.$store.state.Game.totalReward > 0),expression:"!isReceived & isInRoaster & $store.state.Game.totalReward > 0"}],attrs:{"size":"lg","variant":"primary"},on:{"click":_vm.claimReward}},[_c('span',{directives:[{name:"show",rawName:"v-show",value:(!_vm.isLoading),expression:"!isLoading"}]},[_vm._v(_vm._s(_vm.$t('bottomMenu.getReward'))),_c('small',[_vm._v(_vm._s(_vm._f("fixed")(this.$store.getters["Game/getReward"])))])]),_c('b-spinner',{directives:[{name:"show",rawName:"v-show",value:(_vm.isLoading),expression:"isLoading"}]})],1)],1):_vm._e(),_c('b-modal',{attrs:{"id":"farming-settings","hide-footer":"","title":_vm.$t('bottomMenu.farmingSettings.title')}},[_c('p',[_vm._v(_vm._s(_vm.$t('bottomMenu.farmingSettings.p1')))]),_c('p',[_vm._v(_vm._s(_vm.$t('bottomMenu.farmingSettings.p2'))),_c('b',[_vm._v(_vm._s(_vm._f("fixed")(this.$store.state.PlayerInfo.balance)))]),_vm._v(" PILE")]),_c('p',[_vm._v(_vm._s(_vm.$t('bottomMenu.farmingSettings.p3'))),_c('b',[_vm._v(_vm._s(_vm._f("fixed")(this.$store.state.PlayerInfo.farmingBalance)))]),_vm._v(" PILE "),_c('span',{staticClass:"pr-1",on:{"click":_vm.releaseFarming}},[_c('i',{staticClass:"bi bi-x-circle-fill"})])]),_c('p',[_vm._v(_vm._s(_vm.$t('bottomMenu.farmingSettings.p4')))]),_c('b-input-group',{attrs:{"size":"sm"}},[_c('b-form-input',{attrs:{"placeholder":_vm.$t('bottomMenu.farmingSettings.placeholderBalance'),"size":"sm","state":_vm.validateAddBalance()},model:{value:(_vm.tokensToAdd),callback:function ($$v) {_vm.tokensToAdd=$$v},expression:"tokensToAdd"}})],1),_c('b-form-invalid-feedback',{attrs:{"state":_vm.validateAddBalance()}},[_c('span',[_vm._v(_vm._s(_vm.$t('bottomMenu.farmingSettings.error')))])]),_c('p',[_vm._v(_vm._s(_vm.$t('bottomMenu.farmingSettings.youGet'))),_c('br'),_vm._v(" "),_c('b',[_vm._v(_vm._s(_vm.calcFarming()))]),_vm._v(" "+_vm._s(_vm.$t('bottomMenu.farmingSettings.tileMin')))]),_c('div',{staticClass:"d-flex justify-content-end"},[_c('b-button',{attrs:{"disabled":isNaN(_vm.tokensToAdd) || _vm.tokensToAdd.length === 0 || _vm.tokensToAdd === 0},on:{"click":_vm.putFarming}},[_vm._v(_vm._s(_vm.$t('bottomMenu.farmingSettings.addToFarming')))])],1)],1)],1)}
var BottomMenuvue_type_template_id_73ceca8c_scoped_true_staticRenderFns = []


;// CONCATENATED MODULE: ../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"50d3a65f-vue-loader-template"}!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/cache-loader/dist/cjs.js??ruleSet[0].rules[0].use[0]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/BottomMenuColor.vue?vue&type=template&id=627c8f4b&scoped=true&
var BottomMenuColorvue_type_template_id_627c8f4b_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ml-2 mt-2"},[_c('b-button',{attrs:{"size":"sm","variant":_vm.isActive},on:{"click":_vm.setActiveColor}},[_c('div',{class:_vm.colorClass},[_vm._v(_vm._s(this.btnColor))]),_c('span',{staticClass:"small"},[_vm._v(_vm._s(_vm.paddedColorNum))])])],1)}
var BottomMenuColorvue_type_template_id_627c8f4b_scoped_true_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[1]!../node_modules/cache-loader/dist/cjs.js??ruleSet[0].rules[0].use[0]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/BottomMenuColor.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
/* harmony default export */ var BottomMenuColorvue_type_script_lang_js_ = ({
  name: "BottomMenuColor",
  props: {
    btnColor: Number
  },
  methods: {
    setActiveColor: function () {
      this.$store.commit('PlayerInfo/setCurrentColor', this.btnColor);
    }
  },
  computed: {
    isActive: function () {
      return this.btnColor === this.$store.state.PlayerInfo.currentColor ? "primary" : "secondary";
    },
    colorClass: function () {
      let basicClass = "fancy-font color-span d-inline-block mr-2 ";

      if ([4, 5].includes(this.btnColor)) {
        basicClass += "light-border ";
      }

      basicClass += `color-${this.btnColor}`;
      return basicClass;
    },
    paddedColorNum: function () {
      return this.$store.state.PlayerInfo.colors[this.btnColor - 1];
    }
  }
});
;// CONCATENATED MODULE: ./src/components/BottomMenuColor.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_BottomMenuColorvue_type_script_lang_js_ = (BottomMenuColorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1001);
;// CONCATENATED MODULE: ./src/components/BottomMenuColor.vue





/* normalize component */
;
var component = (0,componentNormalizer/* default */.Z)(
  components_BottomMenuColorvue_type_script_lang_js_,
  BottomMenuColorvue_type_template_id_627c8f4b_scoped_true_render,
  BottomMenuColorvue_type_template_id_627c8f4b_scoped_true_staticRenderFns,
  false,
  null,
  "627c8f4b",
  null
  
)

/* harmony default export */ var BottomMenuColor = (component.exports);
// EXTERNAL MODULE: ./src/AppConst.js
var AppConst = __webpack_require__(8270);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[1]!../node_modules/cache-loader/dist/cjs.js??ruleSet[0].rules[0].use[0]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/BottomMenu.vue?vue&type=script&lang=js&


/* harmony default export */ var BottomMenuvue_type_script_lang_js_ = ({
  name: "BottomMenu",
  components: {
    BottomMenuColor: BottomMenuColor
  },
  data: function () {
    return {
      tokensToAdd: 0,
      tempClaimableTiles: 0,
      setAnimationClass: ""
    };
  },
  methods: {
    setActiveColor: function (newColor) {
      this.$store.commit('PlayerInfo/setCurrentColor', newColor);
    },
    setActive: function (btnColor) {
      return btnColor === this.$store.state.PlayerInfo.currentColor ? "primary" : "secondary";
    },
    cancelPut: async function () {
      await this.$store.dispatch('Ever/reloadGame');
    },
    joinGame: async function () {
      try {
        this.$store.commit('Ever/isOpInProgress', true);
        await this.$store.dispatch('Ever/joinGame');
      } catch (e) {
        this.$store.commit('Ever/isOpInProgress', false);
        this.errorHandler(e);
        console.log(e);
      }
    },
    claimTiles: async function () {
      if (this.$store.state.PlayerInfo.claimableTiles === 0) {
        this.$store.commit('Toast/sendToast', {
          toastName: "zero-claim"
        });
        return;
      }

      try {
        this.$store.commit('Ever/isOpInProgress', true);
        await this.$store.dispatch('Ever/claimTiles');
      } catch (e) {
        this.$store.commit('Ever/isOpInProgress', false);
        this.errorHandler(e);
        console.log(e);
      }
    },
    putTiles: async function () {
      if (this.$store.state.PlayerInfo.balance < this.$store.state.Game.payPerMove) {
        this.$store.commit('Toast/sendToast', {
          toastName: "not-enough-pile-to-put",
          data: {
            payPerMove: this.$store.state.Game.payPerMove,
            balance: this.$store.state.PlayerInfo.balance
          }
        });
        return;
      }

      try {
        this.$store.commit('Ever/isOpInProgress', true);
        await this.$store.dispatch('Ever/putTiles');
      } catch (e) {
        this.$store.commit('Ever/isOpInProgress', false);
        this.errorHandler(e);
        console.log(e);
      }
    },
    putFarming: async function () {
      try {
        this.$store.commit('Ever/isOpInProgress', true);
        await this.$store.dispatch('Ever/putFarmingTiles', this.tokensToAdd * 1e9);
        this.tokensToAdd = 0;
        await this.$store.dispatch('Ever/updateFarmingEstimation', {
          time: 60,
          balance: (parseInt(this.tokensToAdd) + this.$store.state.PlayerInfo.farmingBalance) * 1e9
        });
      } catch (e) {
        this.$store.commit('Ever/isOpInProgress', false);
        this.errorHandler(e);
        console.log(e);
      }
    },
    releaseFarming: async function () {
      try {
        this.$store.commit('Ever/isOpInProgress', true);
        await this.$store.dispatch('Ever/releaseFarmingTiles', {
          playerAddress: this.$store.state.PlayerInfo.playerAddress,
          tokensToRelease: this.$store.state.PlayerInfo.farmingBalance * 1e9
        });
      } catch (e) {
        this.$store.commit('Ever/isOpInProgress', false);
        this.errorHandler(e);
        console.log(e);
      }
    },
    claimReward: async function () {
      try {
        this.$store.commit('Ever/isOpInProgress', true);
        await this.$store.dispatch('Ever/claimReward');
      } catch (e) {
        this.$store.commit('Ever/isOpInProgress', false);
        this.errorHandler(e);
        console.log(e);
      }
    },
    errorHandler: function (e) {
      if ('code' in e && e.code === 0) {
        this.$store.commit('Toast/sendToast', {
          toastName: "message-expired"
        });
      }
    },
    validateAddBalance: function () {
      return parseInt(this.tokensToAdd) >= 0 && parseInt(this.tokensToAdd) + 1 <= this.$store.state.PlayerInfo.balance;
    },
    calcFarming: function () {
      if (parseInt(this.tokensToAdd) + this.$store.state.PlayerInfo.farmingBalance > 0) {
        this.$store.dispatch('Ever/updateFarmingEstimation', {
          time: 60,
          balance: (parseInt(this.tokensToAdd) + this.$store.state.PlayerInfo.farmingBalance) * 1e9
        });
        return this.$store.state.PlayerInfo.farmingEstimation;
      }

      return 0;
    }
  },
  watch: {
    claimableTilesWatcher: async function (newReward, oldReward) {
      this.setAnimationClass += "font-weight-bold ";
      setTimeout(() => {
        this.setAnimationClass = "";
      }, 900);

      let sleep = duration => new Promise(resolve => setTimeout(resolve, duration));

      let changeValue = value => new Promise(resolve => {
        this.tempClaimableTiles = value;
        resolve(value);
      });

      let chain = changeValue(oldReward);

      for (let i = oldReward; i < newReward; i++) {
        chain = chain.then(() => changeValue(i)).then(() => sleep(50));
      }

      await chain;
    }
  },
  computed: {
    claimableTilesWatcher: function () {
      return this.$store.state.PlayerInfo.claimableTiles;
    },
    tilesArePut: function () {
      return this.$store.state.Game.tilesToPut.length > 0;
    },
    isMainScreen: function () {
      return this.$store.state.Game.isMainScreen;
    },
    isBalancePositive: function () {
      return this.$store.state.PlayerInfo.balance > 0;
    },
    isGameCompleted: function () {
      return this.$store.state.Game.status === AppConst/* GAME_STATUS_COMPLETED */.K$;
    },
    isReceived: function () {
      return this.$store.getters["Game/isReceivedReward"];
    },
    isLoading: function () {
      return this.$store.state.Ever.operationInProgress;
    },
    isInRoaster: function () {
      return this.$store.getters["Game/isInRoaster"];
    }
  }
});
;// CONCATENATED MODULE: ./src/components/BottomMenu.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_BottomMenuvue_type_script_lang_js_ = (BottomMenuvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../node_modules/cache-loader/dist/cjs.js??ruleSet[0].rules[0].use[0]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/BottomMenu.vue?vue&type=style&index=0&id=73ceca8c&scoped=true&lang=css&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/BottomMenu.vue?vue&type=style&index=0&id=73ceca8c&scoped=true&lang=css&

;// CONCATENATED MODULE: ./src/components/BottomMenu.vue



;


/* normalize component */

var BottomMenu_component = (0,componentNormalizer/* default */.Z)(
  components_BottomMenuvue_type_script_lang_js_,
  BottomMenuvue_type_template_id_73ceca8c_scoped_true_render,
  BottomMenuvue_type_template_id_73ceca8c_scoped_true_staticRenderFns,
  false,
  null,
  "73ceca8c",
  null
  
)

/* harmony default export */ var BottomMenu = (BottomMenu_component.exports);
;// CONCATENATED MODULE: ../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"50d3a65f-vue-loader-template"}!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/cache-loader/dist/cjs.js??ruleSet[0].rules[0].use[0]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/ToastManager.vue?vue&type=template&id=5a6c43a0&
var ToastManagervue_type_template_id_5a6c43a0_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('b-toast',{attrs:{"id":"wrong-color","auto-hide-delay":"3000","variant":"secondary","solid":"","toaster":"b-toaster-top-center"},scopedSlots:_vm._u([{key:"toast-title",fn:function(){return [_c('div',[_vm._v(_vm._s(_vm.$t('toast.anotherColorTitle'))+" ")])]},proxy:true}])},[_vm._v(" "+_vm._s(_vm.$t('toast.anotherColorText1'))),_c('div',{class:_vm._getColorClassByNum(this.correctColorNum)},[_vm._v(_vm._s(_vm.correctColorNum))]),_vm._v(" "+_vm._s(_vm.$t('toast.anotherColorText2'))+" ")]),_c('b-toast',{attrs:{"id":"zero-tiles-left","auto-hide-delay":"5000","variant":"secondary","solid":"","toaster":"b-toaster-top-center"},scopedSlots:_vm._u([{key:"toast-title",fn:function(){return [_c('div',[_vm._v(_vm._s(_vm.$t('toast.noColorLeftTitle'))+" ")])]},proxy:true}])},[_vm._v(" "+_vm._s(_vm.$t('toast.noColorLeftText1'))),_c('div',{class:_vm._getColorClassByNum(this.correctColorNum)},[_vm._v(_vm._s(_vm.correctColorNum))]),_vm._v(_vm._s(_vm.$t('toast.noColorLeftText2'))),_c('br'),_c('p',{domProps:{"innerHTML":_vm._s(_vm.$t('toast.noColorLeftText3'))}}),_c('img',{attrs:{"src":__webpack_require__(2923),"width":"131","height":"53","alt":""}}),_c('br'),_c('br'),_c('p',{domProps:{"innerHTML":_vm._s(_vm.$t('toast.noColorLeftText4'))}})]),_c('b-toast',{attrs:{"id":"50-tiles-put","auto-hide-delay":"3000","variant":"secondary","solid":"","toaster":"b-toaster-top-center"},scopedSlots:_vm._u([{key:"toast-title",fn:function(){return [_c('div',[_vm._v(_vm._s(_vm.$t('toast.tilesLimitReachedTitle'))+" ")])]},proxy:true}])},[_c('p',{domProps:{"innerHTML":_vm._s(_vm.$t('toast.tilesLimitReachedText1'))}})]),_c('b-toast',{attrs:{"id":"zero-balance","auto-hide-delay":"2000","variant":"secondary","solid":"","toaster":"b-toaster-top-center"},scopedSlots:_vm._u([{key:"toast-title",fn:function(){return [_c('div',[_vm._v(_vm._s(_vm.$t('toast.zeroBalanceTitle'))+" ")])]},proxy:true}])},[_c('p',{domProps:{"innerHTML":_vm._s(_vm.$t('toast.zeroBalanceText1'))}})]),_c('b-toast',{attrs:{"id":"zero-claim","auto-hide-delay":"60000","variant":"secondary","solid":"","toaster":"b-toaster-top-center"},scopedSlots:_vm._u([{key:"toast-title",fn:function(){return [_c('div',[_vm._v(_vm._s(_vm.$t('toast.noTilesToClaimTitle'))+" ")])]},proxy:true}])},[_c('p',{domProps:{"innerHTML":_vm._s(_vm.$t('toast.noTilesToClaimText1'))}}),_c('p',{domProps:{"innerHTML":_vm._s(_vm.$t('toast.noTilesToClaimText2'))}})]),_c('b-toast',{attrs:{"id":"not-enough-pile-to-put","auto-hide-delay":"10000","variant":"secondary","solid":"","toaster":"b-toaster-top-center"},scopedSlots:_vm._u([{key:"toast-title",fn:function(){return [_c('div',[_vm._v(_vm._s(_vm.$t('toast.putBalanceNotEnoughTitle'))+" ")])]},proxy:true}])},[_c('p',{domProps:{"innerHTML":_vm._s(_vm.$t('toast.putBalanceNotEnoughText1', {'balance': _vm.balance, 'payPerMove': _vm.payPerMove}))}})]),_c('b-toast',{attrs:{"id":"op-in-progress","auto-hide-delay":"2000","variant":"secondary","solid":"","toaster":"b-toaster-top-center"},scopedSlots:_vm._u([{key:"toast-title",fn:function(){return [_c('div',[_vm._v(_vm._s(_vm.$t('toast.operationInProgressTitle'))+" ")])]},proxy:true}])},[_vm._v(" "+_vm._s(_vm.$t('toast.operationInProgressText1'))+" ")]),_c('b-toast',{attrs:{"id":"message-expired","auto-hide-delay":"20000","variant":"secondary","solid":"","toaster":"b-toaster-top-center"},scopedSlots:_vm._u([{key:"toast-title",fn:function(){return [_c('div',[_vm._v(_vm._s(_vm.$t('toast.operationFailedTitle'))+" ")])]},proxy:true}])},[_vm._v(" "+_vm._s(_vm.$t('toast.operationFailedText1'))+" ")]),_c('b-toast',{attrs:{"id":"on-claim-tiles","auto-hide-delay":"3000","variant":"secondary","solid":"","toaster":"b-toaster-top-center"},scopedSlots:_vm._u([{key:"toast-title",fn:function(){return [_c('div',[_vm._v(_vm._s(_vm.$t('toast.activityDetectedTitle'))+" ")])]},proxy:true}])},[_c('p',{domProps:{"innerHTML":_vm._s(_vm.$t('toast.activityDetectedClaim', {claimValue: _vm.claimValue}))}})]),_c('b-toast',{attrs:{"id":"on-put-tiles","auto-hide-delay":"3000","variant":"secondary","solid":"","toaster":"b-toaster-top-center"},scopedSlots:_vm._u([{key:"toast-title",fn:function(){return [_c('div',[_vm._v(_vm._s(_vm.$t('toast.activityDetectedTitle'))+" ")])]},proxy:true}])},[_c('p',{domProps:{"innerHTML":_vm._s(_vm.$t('toast.activityDetectedPut', {putValue: _vm.putValue}))}})]),_c('b-toast',{attrs:{"id":"star-claimed","auto-hide-delay":"5000","variant":"secondary","solid":"","toaster":"b-toaster-top-center"},scopedSlots:_vm._u([{key:"toast-title",fn:function(){return [_c('div',[_vm._v(_vm._s(_vm.$t('toast.starReceivedTitle'))+" ")])]},proxy:true}])},[_c('p',{domProps:{"innerHTML":_vm._s(_vm.$t('toast.starReceivedText1', {pointsGained: _vm.pointsGained}))}})])],1)}
var ToastManagervue_type_template_id_5a6c43a0_staticRenderFns = []


;// CONCATENATED MODULE: ./src/components/ToastManager.vue?vue&type=template&id=5a6c43a0&

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[1]!../node_modules/cache-loader/dist/cjs.js??ruleSet[0].rules[0].use[0]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/ToastManager.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
const ToastManager = {
  name: "ToastManager",
  data: function () {
    return {
      correctColorNum: 0,
      balance: 0,
      payPerMove: 0,
      claimValue: 0,
      putValue: 0,
      pointsGained: 0
    };
  },
  methods: {
    _getColorClassByNum(colorNum) {
      return `color-span color-${colorNum} d-inline-block text-center fancy-font`;
    }

  },
  computed: {
    toastListener() {
      return this.$store.state.Toast.received;
    }

  },
  watch: {
    toastListener: function () {
      const payload = this.$store.state.Toast.payload;

      switch (payload.toastName) {
        case "wrong-color":
          this.correctColorNum = payload.data.colorNumber;
          break;

        case "zero-tiles-left":
          this.correctColorNum = payload.data.colorNumber;
          break;

        case "not-enough-pile-to-put":
          this.balance = payload.data.balance;
          this.payPerMove = payload.data.payPerMove;
          break;

        case "on-put-tiles":
          this.putValue = payload.data.putValue;
          break;

        case "on-claim-tiles":
          this.claimValue = payload.data.claimValue;
          break;

        case "star-claimed":
          this.pointsGained = payload.data.pointsGained;
          break;
      }

      this.$bvToast.show(payload.toastName);
    }
  }
};
/* harmony default export */ var ToastManagervue_type_script_lang_js_ = (ToastManager);
;// CONCATENATED MODULE: ./src/components/ToastManager.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ToastManagervue_type_script_lang_js_ = (ToastManagervue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../node_modules/cache-loader/dist/cjs.js??ruleSet[0].rules[0].use[0]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/ToastManager.vue?vue&type=style&index=0&lang=css&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/ToastManager.vue?vue&type=style&index=0&lang=css&

;// CONCATENATED MODULE: ./src/components/ToastManager.vue



;


/* normalize component */

var ToastManager_component = (0,componentNormalizer/* default */.Z)(
  components_ToastManagervue_type_script_lang_js_,
  ToastManagervue_type_template_id_5a6c43a0_render,
  ToastManagervue_type_template_id_5a6c43a0_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var components_ToastManager = (ToastManager_component.exports);
;// CONCATENATED MODULE: ../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"50d3a65f-vue-loader-template"}!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/cache-loader/dist/cjs.js??ruleSet[0].rules[0].use[0]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/TopMenu.vue?vue&type=template&id=f6a549c8&scoped=true&
var TopMenuvue_type_template_id_f6a549c8_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{attrs:{"id":"top-menu-logo"}},[_c('b-modal',{attrs:{"id":"standings-table","hide-footer":"","title":_vm.$t('topMenu.standings.title')}},[_c('b-container',{staticClass:"p-0 mb-4",attrs:{"fluid":""}},[_c('b-row',[_c('b-col',{staticClass:"font-weight-bold text-right"},[_vm._v(_vm._s(_vm.$t('topMenu.standings.place')))]),_c('b-col',{staticClass:"font-weight-bold text-center"},[_vm._v(_vm._s(_vm.$t('topMenu.standings.wallet')))]),_c('b-col',{staticClass:"font-weight-bold text-center"},[_vm._v(_vm._s(_vm.$t('topMenu.standings.points')))]),(_vm.$store.state.Game.totalReward > 0)?_c('b-col',{staticClass:"font-weight-bold"},[_vm._v(_vm._s(_vm.$t('topMenu.standings.reward')))]):_vm._e()],1),_vm._l((_vm.$store.state.Game.standings),function(player,index){return _c('b-row',{key:player.playerAddress,class:{active: _vm.isCurrentPlayer(player.playerAddress)}},[_c('b-col',{staticClass:"text-right"},[(player.nft)?_c('span',{staticClass:"nft"},[_vm._v("nft")]):_vm._e(),_vm._v(" "+_vm._s(index + 1)+" ")]),_c('b-col',{staticClass:"text-center"},[_vm._v(_vm._s(_vm._f("short")(player.playerAddress)))]),_c('b-col',{staticClass:"text-center p-0"},[_vm._v(_vm._s(player.captured)+" "),(player.stars > 0)?_c('span',[_vm._v(" ("+_vm._s(player.stars)),_c('i',{staticClass:"bi bi-star-fill small"}),_vm._v(") ")]):_vm._e()]),(_vm.$store.state.Game.totalReward > 0)?_c('b-col',{staticClass:"text-center"},[_vm._v(_vm._s(_vm._f("fixed")(player.reward)))]):_vm._e()],1)})],2)],1),_c('b-modal',{attrs:{"id":"sale-token","hide-footer":"","title":_vm.$t('topMenu.getTokens.title')}},[_c('p',[_vm._v(_vm._s(_vm.$t('topMenu.getTokens.p1'))),_c('br')]),_c('b-input-group',{scopedSlots:_vm._u([{key:"append",fn:function(){return [_c('b-button',{attrs:{"variant":"primary"},on:{"click":_vm.copyAddress}},[_vm._v("Copy")])]},proxy:true}])},[_c('b-form-input',{ref:"tsAddress",attrs:{"value":_vm.saleTokenAddress,"readonly":""},on:{"focus":function($event){return $event.target.select()}}})],1),_c('p',{staticClass:"mt-3"},[_vm._v(_vm._s(_vm.$t('topMenu.getTokens.p2'))),_c('b',[_vm._v(_vm._s(_vm._f("short")(_vm.$store.state.PlayerInfo.playerAddress)))]),_c('br'),_vm._v(_vm._s(_vm.$t('topMenu.getTokens.p3')))]),_c('p',{staticClass:"mt-1"},[_vm._v(_vm._s(_vm.$t('topMenu.getTokens.p4'))),_c('a',{attrs:{"href":"https://youtu.be/1ZBE9qspn7k","target":"_blank"}},[_vm._v("https://youtu.be/1ZBE9qspn7k")]),_vm._v(".")])],1),_c('img',{staticClass:"logo-img",attrs:{"src":__webpack_require__(9574),"alt":"PileBlocks"}})],1),_c('div',{attrs:{"id":"top-menu-player-info"}},[_c('p',{staticClass:"mb-0"},[_c('span',{staticClass:"text-faded"},[_vm._v(_vm._s(_vm.$t('topMenu.balance')))]),_c('fancy-number',{attrs:{"value":this.$store.getters["PlayerInfo/getBalance"]}}),_c('i',{staticClass:"bi bi-cart-check-fill color-success pl-1",on:{"click":function($event){return _vm.$bvModal.show('sale-token')}}})],1),_c('div',{staticClass:"reward-grid"},[_c('div',{staticClass:"reward-label"},[_c('span',{staticClass:"text-faded pr-1"},[_vm._v(_vm._s(_vm.$t('topMenu.yourPlace')))])]),_c('div',{staticClass:"reward-value"},[_c('div',{staticClass:"d-inline-block position-absolute"},[_c('div',[_vm._v(_vm._s(_vm.playerPosition)+" "),(_vm.playerPosition === 1)?_c('span',[_c('i',{staticClass:"bi bi-trophy-fill first-place"})]):_vm._e(),(_vm.playerPosition === 2)?_c('span',[_c('i',{staticClass:"bi bi-trophy-fill second-place"})]):_vm._e(),(_vm.playerPosition === 3)?_c('span',[_c('i',{staticClass:"bi bi-trophy-fill third-place"})]):_vm._e()]),_c('div',{class:_vm.setAnimationClass},[_vm._v(_vm._s(_vm.animatedReward))])])])])]),_c('div',{attrs:{"id":"top-menu-game-stats"}},[_c('b-button',{attrs:{"size":"sm","variant":"primary"},on:{"click":function($event){return _vm.$bvModal.show('standings-table')}}},[_c('i',{staticClass:"bi bi-person-lines-fill"}),_vm._v(" "+_vm._s(_vm.$store.state.Game.standings.length)+" ")])],1),_c('div',{attrs:{"id":"top-menu-game-reload"}},[_c('b-button',{attrs:{"size":"sm","variant":"primary","disabled":_vm.isOpInProgress},on:{"click":_vm.reloadGame}},[_c('i',{directives:[{name:"show",rawName:"v-show",value:(!_vm.isLoading),expression:"!isLoading"}],staticClass:"bi bi-arrow-clockwise"}),_c('b-spinner',{directives:[{name:"show",rawName:"v-show",value:(_vm.isLoading),expression:"isLoading"}],attrs:{"small":""}})],1)],1),_c('div',{staticClass:"d-flex flex-column",attrs:{"id":"top-menu-game-lang"}},[(_vm.$i18n.locale !== 'en')?_c('img',{attrs:{"src":__webpack_require__(7244),"width":"30","height":"30","alt":""},on:{"click":function($event){return _vm.changeLocale('en')}}}):_vm._e(),(_vm.$i18n.locale !== 'kr')?_c('img',{attrs:{"src":__webpack_require__(9597),"width":"30","height":"30","alt":""},on:{"click":function($event){return _vm.changeLocale('kr')}}}):_vm._e()])])}
var TopMenuvue_type_template_id_f6a549c8_scoped_true_staticRenderFns = []


;// CONCATENATED MODULE: ./src/components/TopMenu.vue?vue&type=template&id=f6a549c8&scoped=true&

// EXTERNAL MODULE: ./node_modules/bignumber.js/bignumber.js
var bignumber = __webpack_require__(4431);
var bignumber_default = /*#__PURE__*/__webpack_require__.n(bignumber);
;// CONCATENATED MODULE: ../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"50d3a65f-vue-loader-template"}!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/cache-loader/dist/cjs.js??ruleSet[0].rules[0].use[0]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/FancyNumber.vue?vue&type=template&id=191f2c3a&scoped=true&
var FancyNumbervue_type_template_id_191f2c3a_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"d-inline"},[_vm._v(" "+_vm._s(_vm.valueInt)),_c('small',[_vm._v("."+_vm._s(_vm.valueFloat))])])}
var FancyNumbervue_type_template_id_191f2c3a_scoped_true_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[1]!../node_modules/cache-loader/dist/cjs.js??ruleSet[0].rules[0].use[0]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/FancyNumber.vue?vue&type=script&lang=js&
//
//
//
//
//
//

/* harmony default export */ var FancyNumbervue_type_script_lang_js_ = ({
  name: "FancyNumber",
  props: {
    value: Number
  },
  computed: {
    valueInt: function () {
      return new (bignumber_default())(new (bignumber_default())(this.value).toFixed(2).split('.')[0]).toFormat(0);
    },
    valueFloat: function () {
      return new (bignumber_default())(this.value).toFixed(2).split('.')[1];
    }
  }
});
;// CONCATENATED MODULE: ./src/components/FancyNumber.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_FancyNumbervue_type_script_lang_js_ = (FancyNumbervue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./src/components/FancyNumber.vue





/* normalize component */
;
var FancyNumber_component = (0,componentNormalizer/* default */.Z)(
  components_FancyNumbervue_type_script_lang_js_,
  FancyNumbervue_type_template_id_191f2c3a_scoped_true_render,
  FancyNumbervue_type_template_id_191f2c3a_scoped_true_staticRenderFns,
  false,
  null,
  "191f2c3a",
  null
  
)

/* harmony default export */ var FancyNumber = (FancyNumber_component.exports);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[1]!../node_modules/cache-loader/dist/cjs.js??ruleSet[0].rules[0].use[0]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/TopMenu.vue?vue&type=script&lang=js&




/* harmony default export */ var TopMenuvue_type_script_lang_js_ = ({
  name: "TopMenu",
  components: {
    FancyNumber: FancyNumber
  },
  data: function () {
    return {
      animatedReward: "",
      setAnimationClass: "reward-base ",
      isLoading: false,
      saleTokenAddress: AppConst/* TOKEN_ROOT_ADDRESS */._H,
      farmingTime: 0,
      farmingBalance: 0,
      farmingResult: 0
    };
  },
  methods: {
    animateReward: function (isRaising) {
      this.animatedReward = new (bignumber_default())(this.$store.getters["Game/getPosition"]).toFixed(0);
      this.setAnimationClass += "reward-animation ";

      if (!isRaising) {
        this.setAnimationClass += "reward-raise ";
      } else {
        this.setAnimationClass += "reward-decline ";
      }

      setTimeout(() => {
        this.setAnimationClass = "reward-base ";
        this.animatedReward = "";
      }, 900);
    },
    isCurrentPlayer: function (playerAddress) {
      return playerAddress === this.$store.state.PlayerInfo.playerAddress;
    },
    reloadGame: async function () {
      this.isLoading = true;
      await this.$store.dispatch('Ever/reloadGame');
      this.isLoading = false;
    },
    copyAddress: function () {
      this.$refs.tsAddress.focus();
      document.execCommand('copy');
    },
    changeLocale: function (lang) {
      this.$i18n.locale = lang;
    }
  },
  watch: {
    playerPosition: function (newReward, oldReward) {
      if (oldReward !== 0) {
        this.animateReward(newReward > oldReward);
      }
    }
  },
  computed: {
    playerPosition: function () {
      return this.$store.getters["Game/getPosition"];
    },
    gameActive: function () {
      return this.$store.state.Game.status !== AppConst/* GAME_STATUS_COMPLETED */.K$;
    },
    isOpInProgress: function () {
      return this.$store.state.Ever.operationInProgress;
    }
  },

  mounted() {
    this.$store.commit('Game/calculateRewards');
  }

});
;// CONCATENATED MODULE: ./src/components/TopMenu.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_TopMenuvue_type_script_lang_js_ = (TopMenuvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../node_modules/cache-loader/dist/cjs.js??ruleSet[0].rules[0].use[0]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/TopMenu.vue?vue&type=style&index=0&id=f6a549c8&scoped=true&lang=css&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/TopMenu.vue?vue&type=style&index=0&id=f6a549c8&scoped=true&lang=css&

;// CONCATENATED MODULE: ./src/components/TopMenu.vue



;


/* normalize component */

var TopMenu_component = (0,componentNormalizer/* default */.Z)(
  components_TopMenuvue_type_script_lang_js_,
  TopMenuvue_type_template_id_f6a549c8_scoped_true_render,
  TopMenuvue_type_template_id_f6a549c8_scoped_true_staticRenderFns,
  false,
  null,
  "f6a549c8",
  null
  
)

/* harmony default export */ var TopMenu = (TopMenu_component.exports);
;// CONCATENATED MODULE: ../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"50d3a65f-vue-loader-template"}!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/cache-loader/dist/cjs.js??ruleSet[0].rules[0].use[0]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/EverLoader.vue?vue&type=template&id=5be58275&scoped=true&
var EverLoadervue_type_template_id_5be58275_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div')}
var EverLoadervue_type_template_id_5be58275_scoped_true_staticRenderFns = []


// EXTERNAL MODULE: ./node_modules/everscale-inpage-provider/dist/index.js
var dist = __webpack_require__(8511);
// EXTERNAL MODULE: ./src/contract_wrappers/PBGame.js
var PBGame = __webpack_require__(2175);
// EXTERNAL MODULE: ./src/contract_wrappers/TokenRoot.js
var TokenRoot = __webpack_require__(2841);
// EXTERNAL MODULE: ./src/contract_wrappers/FarmingWallet.js
var FarmingWallet = __webpack_require__(4226);
;// CONCATENATED MODULE: ./src/api/ever.js



const EverAPI = {
  isWorking: async function (ever) {
    if (await ever.hasProvider()) {
      return AppConst/* LOADING_STATUS_PROVIDER_LOADED */.Ro;
    }

    return AppConst/* LOADING_STATUS_PROVIDER_NOT_LOADED */.rr;
  },
  initWallet: async function (ever) {
    const {
      accountInteraction
    } = await ever.requestPermissions({
      permissions: ['basic', 'accountInteraction']
    });

    if (accountInteraction == null) {
      return "";
    }

    return accountInteraction.address.toString();
  },
  isActiveContract: async function (ever, contractAddress) {
    return JSON.stringify(await ever.getFullContractState({
      address: contractAddress
    })) !== "{}";
  },
  tokenRoot: {
    getWallet: async function (tRoot, playerAddress) {
      const result = await tRoot.methods.walletOf({
        answerId: 1,
        walletOwner: playerAddress
      }).call();
      return result.value0.toString();
    }
  },
  calc: {
    calcFarming: async function (calcContract, time, tokenBalance) {
      const result = await calcContract.methods.calcFarming({
        time: time,
        tokenBalance: tokenBalance
      }).call();
      return parseInt(result.farmValue);
    }
  },
  host: {
    getCurrentGameId: async function (gHost) {
      const result = await gHost.methods.currentGameId({}).call();
      return parseInt(result.currentGameId);
    },
    isNextGameEmpty: async function (gHost) {
      const result = await gHost.methods.isNextGameEmpty({}).call();
      return result.value0;
    },
    _getIndexAddress: async function (gHost, gameId) {
      const result = await gHost.methods.getIndexAddress({
        _gameId: gameId
      }).call();
      return result.value0;
    },
    getRewardPerGame: async function (gHost) {
      const result = await gHost.methods.getRewardPerGame({}).call();
      return parseInt(result.value0 / 1e9);
    }
  },
  index: {
    getGameAddress: async function (gameIndex) {
      const result = await gameIndex.methods.gameAddress({}).call();
      return result.gameAddress;
    }
  },
  game: {
    getGameInfo: async function (game) {
      const result = await game.methods.getInfo({}).call();
      return result.value0;
    },
    getGameExtraSettings: async function (game) {
      const result = await game.methods.getGameExtraSettings({}).call();
      return {
        maxStars: parseInt(result.value0.maxStars),
        scorePerStar: parseInt(result.value0.scorePerStar),
        currentStars: parseInt(result.value0.currentStars),
        percentOfReward: parseInt(result.value0.percentOfReward)
      };
    },
    getFarmingAddress: async function (game, playerAddress) {
      const result = await game.methods.getFarmingAddress({
        walletOwner: playerAddress
      }).call();
      return result.value0;
    },
    deployFarmingWallet: async function (game, playerAddress) {
      const pAddress = new dist.Address(playerAddress);
      await game.methods.deployFarmingWallet({}).send({
        from: pAddress,
        amount: '500000000',
        bounce: true
      });
    },
    getField: async function (game) {
      const result = await game.methods.field({}).call();
      return result.field;
    },
    getTemplate: async function (game) {
      const result = await game.methods.template({}).call();
      return result.template;
    },
    getPlayers: async function (game) {
      const result = await game.methods.players({}).call();
      return result.players;
    },
    getColors: async function (game) {
      const result = await game.methods.playerColors({}).call();
      return result.playerColors;
    },
    claimReward: async function (gameContract, playerAddress) {
      const pAddress = new dist.Address(playerAddress);
      await gameContract.methods.claimReward({}).send({
        from: pAddress,
        amount: '500000000',
        bounce: true
      });
    },
    packTiles: async function (gameContract, tiles) {
      const result = await gameContract.methods.packTiles({
        tiles: tiles
      }).call();
      return result.value0;
    }
  },
  wallet: {
    getState: async function (ever, walletAddress) {
      return await ever.getFullContractState({
        address: new dist.Address(walletAddress)
      });
    },
    getBalance: async function (walletContract) {
      const result = await walletContract.methods.balance({
        answerId: 1
      }).call();
      return parseInt(result.value0) / 1e9;
    },
    putTiles: async function (walletContract, payPerMove, gameAddress, playerAddress, tilesPayload) {
      const pAddress = new dist.Address(playerAddress);
      await walletContract.methods.transfer({
        amount: payPerMove,
        recipient: gameAddress,
        deployWalletValue: 0,
        remainingGasTo: playerAddress,
        notify: true,
        payload: tilesPayload
      }).send({
        from: pAddress,
        amount: '2000000000',
        bounce: true
      });
    },
    claimTiles: async function (walletContract, playerAddress, gameAddress, genesisAddress) {
      const pAddress = new dist.Address(playerAddress);
      await walletContract.methods.claimTiles({
        gameAddress: gameAddress,
        genesis: genesisAddress
      }).send({
        from: pAddress,
        amount: '1000000000',
        bounce: true
      });
    }
  },
  farmingWallet: {
    getTiles: async function (walletContract) {
      const result = await walletContract.methods.showTiles({}).call();
      return parseInt(result.value0);
    },
    getLockedInFarming: async function (walletContract) {
      const result = await walletContract.methods._balance({}).call();
      return parseInt(result._balance) / 1e9;
    },
    calcFarming: async function (walletContract, time, tokenBalance) {
      const result = await walletContract.methods.calcFarming({
        time: time,
        tokenBalance: tokenBalance
      }).call();
      return parseInt(result.value0);
    },
    releaseTokens: async function (walletContract, playerAddress, amount) {
      const pAddress = new dist.Address(playerAddress);
      await walletContract.methods.releaseTokens({
        amount: amount
      }).send({
        from: pAddress,
        amount: '500000000',
        bounce: true
      });
    },
    claimTiles: async function (walletContract, playerAddress, genesisAddress) {
      const pAddress = new dist.Address(playerAddress);
      await walletContract.methods.claimTiles({
        genesis: genesisAddress
      }).send({
        from: pAddress,
        amount: '1000000000',
        bounce: true
      });
    }
  }
};
// EXTERNAL MODULE: ./src/contract_wrappers/GameHost.js
var GameHost = __webpack_require__(9577);
// EXTERNAL MODULE: ./src/contract_wrappers/GameIndex.js
var GameIndex = __webpack_require__(1811);
;// CONCATENATED MODULE: ./src/utils.js
function _dataToNumbers(rawData, newData) {
  for (const packedFragment of rawData) {
    for (const col in packedFragment[1]) {
      for (let row in packedFragment[1][col]) {
        packedFragment[1][col][row] = parseInt(packedFragment[1][col][row]);
      }
    }

    newData[packedFragment[0]] = packedFragment[1];
  }
}
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[1]!../node_modules/cache-loader/dist/cjs.js??ruleSet[0].rules[0].use[0]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/EverLoader.vue?vue&type=script&lang=js&








 //import {EverscaleStandaloneClient} from "everscale-standalone-client";

/* harmony default export */ var EverLoadervue_type_script_lang_js_ = ({
  name: "EverLoader",
  data: function () {
    return {};
  },
  methods: {
    initProvider: async function (ever) {
      let loadingStatus = await EverAPI.isWorking(ever);

      if (loadingStatus === AppConst/* LOADING_STATUS_PROVIDER_LOADED */.Ro) {
        await ever.ensureInitialized();
        this.$store.commit("Ever/updateApi", ever);

        try {
          await EverAPI.initWallet(ever);
        } catch (e) {
          loadingStatus = AppConst/* LOADING_STATUS_NO_PERMISSIONS */.h_;
        }
      }

      this.$store.commit("Ever/updateLoadingStatus", loadingStatus);
      return loadingStatus;
    },
    initTokenRoot: function (ever) {
      const tokenRootAddress = new dist.Address(AppConst/* TOKEN_ROOT_ADDRESS */._H);
      const tokenRoot = new ever.Contract(TokenRoot.TokenRootContract.abi, tokenRootAddress);
      this.$store.commit("Ever/updateTokenRoot", tokenRoot);
    },
    initHost: function (ever) {
      const hostAddress = new dist.Address(AppConst/* HOST_ADDRESS */.rb);
      const host = new ever.Contract(GameHost.GameHostContract.abi, hostAddress);
      this.$store.commit("Ever/updateHost", host);
    },
    initGame: async function (ever) {
      let host = this.$store.state.Ever.host;

      if (host !== null) {
        let currentGameId = 0;

        if (this.$route.name === "Game") {
          currentGameId = parseInt(this.$route.params.id) + 1;
        } else {
          currentGameId = await EverAPI.host.getCurrentGameId(host);

          if (!(await EverAPI.host.isNextGameEmpty(host))) {
            currentGameId -= 1;
          }
        }

        const gameIndexAddress = await EverAPI.host._getIndexAddress(host, currentGameId - 1);

        if (!(await EverAPI.isActiveContract(ever, gameIndexAddress))) {
          return false;
        }

        const gameIndex = new ever.Contract(GameIndex.GameIndexContract.abi, gameIndexAddress);
        const currentGameAddress = await EverAPI.index.getGameAddress(gameIndex);
        console.log(`Game address: ${currentGameAddress}`);
        const game = new ever.Contract(PBGame.PBGameContract.abi, currentGameAddress);
        this.$store.commit("Ever/updateGame", game);
      }

      return true;
    },
    initSubscription: async function (ever) {
      const subscription = new ever.Subscriber();
      subscription.transactions(this.$store.state.Ever.game.address).on(async data => {
        for (const tr of data.transactions) {
          const transactionEvents = await this.$store.state.Ever.game.decodeTransactionEvents({
            transaction: tr
          });

          for (const trEvent of transactionEvents) {
            switch (trEvent.event) {
              case "OperationCompleted":
                await this.operationCompletedHandler(trEvent.data);
                break;

              case "RewardsCalculated":
                await this.rewardsCalculatedHandler();
                break;

              case "GameBattleEvent":
                await this.gameBattleHandler(trEvent.data);
                break;
            }
          }
        }
      });
      const farmingContract = new ever.Contract(FarmingWallet.FarmingWalletContract.abi, this.$store.state.PlayerInfo.farmingAddress);
      subscription.transactions(this.$store.state.PlayerInfo.farmingAddress).on(async data => {
        for (const tr of data.transactions) {
          const transactionEvents = await farmingContract.decodeTransactionEvents({
            transaction: tr
          });

          for (const trEvent of transactionEvents) {
            switch (trEvent.event) {
              case "OperationCompleted":
                await this.operationCompletedHandler(trEvent.data);
                break;
            }
          }
        }
      });
    },
    gameBattleHandler: async function (op) {
      switch (op.name) {
        case "starClaimed":
          if (op.player.toString() === this.$store.state.PlayerInfo.playerAddress) {
            this.$store.commit('Toast/sendToast', {
              toastName: "star-claimed",
              data: {
                pointsGained: op.value
              }
            });
          }

          break;
      }
    },
    operationCompletedHandler: async function (op) {
      if (op.player.toString() === this.$store.state.PlayerInfo.playerAddress) {
        await this.$store.dispatch('Ever/reloadGame');
        this.$store.commit('Ever/isOpInProgress', false);
      } else {
        switch (op.name) {
          case "onClaimTiles":
            this.$store.commit('Toast/sendToast', {
              toastName: "on-claim-tiles",
              data: {
                claimValue: op.value
              }
            });
            break;

          case "onAcceptTokensTransfer":
            this.$store.commit('Toast/sendToast', {
              toastName: "on-put-tiles",
              data: {
                putValue: op.value
              }
            });
            break;
        }
      }
    },
    rewardsCalculatedHandler: async function () {
      await this.$store.dispatch('Ever/reloadGame');
      this.$store.commit('Ever/isOpInProgress', false);
    },
    setTemplate: async function () {
      let rawTemplate = await EverAPI.game.getTemplate(this.$store.state.Ever.game);
      let newTemplate = {};

      _dataToNumbers(rawTemplate, newTemplate);

      this.$store.commit("Game/updateTemplate", newTemplate);
    },
    setGameColors: function (renderConfig) {
      function calcLight(r, g, b) {
        return (Math.min(r, g, b) + Math.max(r, g, b)) / (2 * 255);
      }

      let sheet = document.createElement('style'); //renderConfig = [0, 0, 0, 0, '16777215', '16050112', '9693951', '12624775', '31942'];

      for (let i = 0; i < 5; i++) {
        let intColor = parseInt(renderConfig[i + 4]);
        let color = intColor.toString(16).padStart(6, '0');
        let r = intColor >> 16 & 255;
        let g = intColor >> 8 & 255;
        let b = intColor >> 0 & 255;
        if (calcLight(r, g, b) > 0.5) sheet.innerHTML += `.color-${i + 1} {background-color: #${color} !important; color: #1e2228} `;else sheet.innerHTML += `.color-${i + 1} {background-color: #${color} !important; color: #fefefe} `;
      }

      document.body.appendChild(sheet);
    },
    setGameName: function (gameInfo) {
      this.$store.commit("Game/updateName", gameInfo.gameName);
    },
    setGameId: function (gameInfo) {
      this.$store.commit("Game/updateId", parseInt(gameInfo.gameId));
    },
    setGameInitConfig: function (gameInfo) {
      this.$store.commit("Game/updateInitConfig", {
        payPerMove: parseInt(gameInfo.renderConfig[2])
      });
    },
    setRewardPerGame: async function () {
      let totalReward = this.$store.state.Game.totalFieldFragments * 128 * this.$store.state.Game.payPerMove * this.$store.state.Game.extraSettings.percentOfReward / 100 / 50;
      this.$store.commit("Game/updateTotalReward", {
        totalReward: totalReward
      });
    },
    setTotalFieldFragments: function (renderConfig) {
      let totalFragments = parseInt(renderConfig[0]) * parseInt(renderConfig[1]);
      this.$store.commit('Game/updateTotalFieldFragments', totalFragments);
      this.$store.commit('Game/updateColumns', parseInt(renderConfig[1]));
    },
    setRemainingTiles: function (gameInfo) {
      this.$store.commit("Game/updateRemainingTiles", gameInfo.remainingTiles);
    },
    setPlayerAddress: async function () {
      const playerAddress = await EverAPI.initWallet(this.$store.state.Ever.api);
      this.$store.commit("PlayerInfo/updatePlayerAddress", playerAddress);
    },
    setPlayerWallet: async function () {
      if (this.$store.state.Ever.tokenRoot !== null && this.$store.state.PlayerInfo.playerAddress !== "") {
        const wallet = await EverAPI.tokenRoot.getWallet(this.$store.state.Ever.tokenRoot, this.$store.state.PlayerInfo.playerAddress);
        this.$store.commit("PlayerInfo/updateWalletAddress", wallet);
      }
    },
    setFarmingWallet: async function () {
      if (this.$store.state.Ever.tokenRoot !== null && this.$store.state.PlayerInfo.playerAddress !== "") {
        const farmingAddress = (await EverAPI.game.getFarmingAddress(this.$store.state.Ever.game, this.$store.state.PlayerInfo.playerAddress)).toString();
        const wallet = new this.$store.state.Ever.api.Contract(FarmingWallet.FarmingWalletContract.abi, farmingAddress);
        this.$store.commit("PlayerInfo/updateFarmingAddress", farmingAddress);
        this.$store.commit("PlayerInfo/updateFarmingContract", wallet);
      }
    },
    setGameStartTime: function (gameInfo) {
      this.$store.commit("Game/updateGameStartTime", parseInt(gameInfo.gameStartTime));
      return parseInt(gameInfo.gameStartTime);
    },
    setExtraSettings: async function () {
      let settings = await EverAPI.game.getGameExtraSettings(this.$store.state.Ever.game);
      this.$store.commit("Game/updateExtraSettings", settings);
    }
  },

  async mounted() {
    const ever = new dist.ProviderRpcClient({// fallback: () =>
      //     EverscaleStandaloneClient.create({
      //         connection: 'local',
      //     }),
    });

    if ((await this.initProvider(ever)) in [AppConst/* LOADING_STATUS_PROVIDER_NOT_LOADED */.rr, AppConst/* LOADING_STATUS_NO_PERMISSIONS */.h_]) {
      this.$store.commit('Ever/toggleLoading', false);
      return;
    }

    this.initTokenRoot(ever);
    this.initHost(ever);

    if (!(await this.initGame(ever))) {
      this.$store.commit('Ever/updateLoadingStatus', AppConst/* LOADING_STATUS_EMPTY_GAME_LIST */.u3);
      this.$store.commit('Ever/toggleLoading', false);
      return;
    }

    const gameInfo = await EverAPI.game.getGameInfo(this.$store.state.Ever.game);

    if (this.setGameStartTime(gameInfo) > new Date().getTime() / 1000) {
      this.$store.commit('Ever/updateLoadingStatus', AppConst/* LOADING_STATUS_GAME_PENDING */.Mq);
      this.$store.commit('Ever/toggleLoading', false);
      return;
    } //renderSettings [VERT_FRAGMENTS, HORIZ_FRAGMENTS, TOKENS_PER_PUT, MAX_COLORS, 0xfefefe, 0xaab0bc, 0x60697b, 0x2f353a, 0x1e2228]


    await this.setTemplate();
    this.setGameColors(gameInfo.renderConfig);
    this.setTotalFieldFragments(gameInfo.renderConfig);
    this.setRemainingTiles(gameInfo);
    this.setGameName(gameInfo);
    this.setGameId(gameInfo);
    this.setGameInitConfig(gameInfo);
    await this.setExtraSettings();
    await this.setRewardPerGame();
    await this.setPlayerAddress();
    await this.setPlayerWallet();
    await this.setFarmingWallet();
    await this.$store.dispatch('Ever/checkFarmingWalletActive');
    await this.initSubscription(ever);

    let sleep = duration => new Promise(resolve => setTimeout(resolve, duration));

    let poll = (promiseFn, duration) => promiseFn().then(sleep(duration).then(() => poll(promiseFn, duration)));

    poll(() => new Promise(() => {
      if (this.$store.state.PlayerInfo.isFarmingActive) {
        this.$store.dispatch('Ever/setClaimTiles');
      }
    }), 5000);
    await this.$store.dispatch('Ever/reloadGame');
    this.$store.commit('Ever/toggleLoading', false);
  }

});
;// CONCATENATED MODULE: ./src/components/EverLoader.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_EverLoadervue_type_script_lang_js_ = (EverLoadervue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./src/components/EverLoader.vue





/* normalize component */
;
var EverLoader_component = (0,componentNormalizer/* default */.Z)(
  components_EverLoadervue_type_script_lang_js_,
  EverLoadervue_type_template_id_5be58275_scoped_true_render,
  EverLoadervue_type_template_id_5be58275_scoped_true_staticRenderFns,
  false,
  null,
  "5be58275",
  null
  
)

/* harmony default export */ var EverLoader = (EverLoader_component.exports);
;// CONCATENATED MODULE: ../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"50d3a65f-vue-loader-template"}!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/cache-loader/dist/cjs.js??ruleSet[0].rules[0].use[0]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/GameCountdown.vue?vue&type=template&id=2cd7ddec&scoped=true&
var GameCountdownvue_type_template_id_2cd7ddec_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"game-error-notification fancy-font stat-block"},[_vm._m(0),_c('div',{staticClass:"d-flex width-100 justify-content-evenly mb-4"},[_c('div',{staticClass:"time-cell d-flex flex-column"},[_c('div',{staticClass:"text-center countdown-value"},[_vm._v(_vm._s(_vm.rDate.rDays))]),_c('div',{staticClass:"text-uppercase"},[_vm._v("days")])]),_c('div',{staticClass:"time-cell d-flex flex-column"},[_c('div',{staticClass:"text-center countdown-value"},[_vm._v(_vm._s(_vm.rDate.rHours))]),_c('div',{staticClass:"text-uppercase"},[_vm._v("hours")])]),_c('div',{staticClass:"time-cell d-flex flex-column"},[_c('div',{staticClass:"text-center countdown-value"},[_vm._v(_vm._s(_vm.rDate.rMinutes))]),_c('div',{staticClass:"text-uppercase"},[_vm._v("min")])]),_c('div',{staticClass:"time-cell d-flex flex-column"},[_c('div',{staticClass:"text-center countdown-value"},[_vm._v(_vm._s(_vm.rDate.rSeconds))]),_c('div',{staticClass:"text-uppercase"},[_vm._v("sec")])])]),_c('div',{staticClass:"text-center"},[_vm._v(" Please reload the page once ready.")])])}
var GameCountdownvue_type_template_id_2cd7ddec_scoped_true_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"text-center lead mb-4"},[_vm._v(" The new game "),_c('span',{staticClass:"emphasis"},[_vm._v("starts")]),_vm._v(" in:")])}]


;// CONCATENATED MODULE: ./src/components/GameCountdown.vue?vue&type=template&id=2cd7ddec&scoped=true&

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[1]!../node_modules/cache-loader/dist/cjs.js??ruleSet[0].rules[0].use[0]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/GameCountdown.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var GameCountdownvue_type_script_lang_js_ = ({
  name: "GameCountdown",
  data: function () {
    return {
      rDate: {
        rDays: 0,
        rHours: 0,
        rMinutes: 0,
        rSeconds: 0
      }
    };
  },
  computed: {
    gameStartTime: function () {
      return this.$store.state.Game.gameStartTime;
    }
  },
  methods: {
    calculateRemainingDate() {
      let now = Math.floor(Date.now() / 1000);

      if (now > this.gameStartTime) {
        this.rDate.rDays = 0;
        this.rDate.rHours = 0;
        this.rDate.rMinutes = 0;
        this.rDate.rSeconds = 0;
        return;
      }

      this.rDate.rDays = Math.floor((this.gameStartTime - now) / (60 * 60 * 24));
      this.rDate.rHours = Math.floor((this.gameStartTime - now - this.rDate.rDays * 60 * 60 * 24) / (60 * 60));
      this.rDate.rMinutes = Math.floor((this.gameStartTime - now - this.rDate.rDays * 60 * 60 * 24 - this.rDate.rHours * 60 * 60) / 60);
      this.rDate.rSeconds = Math.floor(this.gameStartTime - now - this.rDate.rDays * 60 * 60 * 24 - this.rDate.rHours * 60 * 60 - this.rDate.rMinutes * 60);
    }

  },

  mounted() {
    setInterval(this.calculateRemainingDate, 1000);
  }

});
;// CONCATENATED MODULE: ./src/components/GameCountdown.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_GameCountdownvue_type_script_lang_js_ = (GameCountdownvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../node_modules/cache-loader/dist/cjs.js??ruleSet[0].rules[0].use[0]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/GameCountdown.vue?vue&type=style&index=0&id=2cd7ddec&scoped=true&lang=css&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/GameCountdown.vue?vue&type=style&index=0&id=2cd7ddec&scoped=true&lang=css&

;// CONCATENATED MODULE: ./src/components/GameCountdown.vue



;


/* normalize component */

var GameCountdown_component = (0,componentNormalizer/* default */.Z)(
  components_GameCountdownvue_type_script_lang_js_,
  GameCountdownvue_type_template_id_2cd7ddec_scoped_true_render,
  GameCountdownvue_type_template_id_2cd7ddec_scoped_true_staticRenderFns,
  false,
  null,
  "2cd7ddec",
  null
  
)

/* harmony default export */ var GameCountdown = (GameCountdown_component.exports);
;// CONCATENATED MODULE: ../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"50d3a65f-vue-loader-template"}!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/cache-loader/dist/cjs.js??ruleSet[0].rules[0].use[0]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/GameListEmpty.vue?vue&type=template&id=1ffc1301&scoped=true&
var GameListEmptyvue_type_template_id_1ffc1301_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var GameListEmptyvue_type_template_id_1ffc1301_scoped_true_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"game-error-notification fancy-font stat-block"},[_c('div',{staticClass:"text-center lead mb-4"},[_vm._v("There are "),_c('span',{staticClass:"emphasis"},[_vm._v("No")]),_vm._v(" active games currently!")]),_c('div',{staticClass:"d-flex width-100 justify-content-evenly mb-4"},[_c('img',{attrs:{"src":__webpack_require__(2118)}})]),_c('div',{staticClass:"text-center"},[_vm._v(" Join our "),_c('a',{attrs:{"href":"https://t.me/pileblocks_group"}},[_c('span',{staticClass:"emphasis"},[_vm._v("@Telegram Channel")])]),_vm._v(" to get informed about the new games")])])}]


;// CONCATENATED MODULE: ./src/components/GameListEmpty.vue?vue&type=template&id=1ffc1301&scoped=true&

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[1]!../node_modules/cache-loader/dist/cjs.js??ruleSet[0].rules[0].use[0]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/GameListEmpty.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var GameListEmptyvue_type_script_lang_js_ = ({
  name: "GameListEmpty"
});
;// CONCATENATED MODULE: ./src/components/GameListEmpty.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_GameListEmptyvue_type_script_lang_js_ = (GameListEmptyvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../node_modules/cache-loader/dist/cjs.js??ruleSet[0].rules[0].use[0]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/GameListEmpty.vue?vue&type=style&index=0&id=1ffc1301&scoped=true&lang=css&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/GameListEmpty.vue?vue&type=style&index=0&id=1ffc1301&scoped=true&lang=css&

;// CONCATENATED MODULE: ./src/components/GameListEmpty.vue



;


/* normalize component */

var GameListEmpty_component = (0,componentNormalizer/* default */.Z)(
  components_GameListEmptyvue_type_script_lang_js_,
  GameListEmptyvue_type_template_id_1ffc1301_scoped_true_render,
  GameListEmptyvue_type_template_id_1ffc1301_scoped_true_staticRenderFns,
  false,
  null,
  "1ffc1301",
  null
  
)

/* harmony default export */ var GameListEmpty = (GameListEmpty_component.exports);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[1]!../node_modules/cache-loader/dist/cjs.js??ruleSet[0].rules[0].use[0]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







const App = {
  name: 'App',
  components: {
    GameListEmpty: GameListEmpty,
    GameCountdown: GameCountdown,
    EverLoader: EverLoader,
    TopMenu: TopMenu,
    ToastManager: components_ToastManager,
    BottomMenu: BottomMenu
  },
  computed: {
    providerLoaded: function () {
      return !(this.$store.state.Ever.loadingStatus in [AppConst/* LOADING_STATUS_PROVIDER_NOT_LOADED */.rr, AppConst/* LOADING_STATUS_NO_PERMISSIONS */.h_]);
    },
    gamePending: function () {
      return this.$store.state.Ever.loadingStatus === AppConst/* LOADING_STATUS_GAME_PENDING */.Mq;
    },
    noGames: function () {
      return this.$store.state.Ever.loadingStatus === AppConst/* LOADING_STATUS_EMPTY_GAME_LIST */.u3;
    }
  },
  data: function () {
    return {};
  }
};
/* harmony default export */ var Appvue_type_script_lang_js_ = (App);
;// CONCATENATED MODULE: ./src/App.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_Appvue_type_script_lang_js_ = (Appvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../node_modules/cache-loader/dist/cjs.js??ruleSet[0].rules[0].use[0]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App.vue?vue&type=style&index=0&lang=css&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/App.vue?vue&type=style&index=0&lang=css&

;// CONCATENATED MODULE: ./src/App.vue



;


/* normalize component */

var App_component = (0,componentNormalizer/* default */.Z)(
  src_Appvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var src_App = (App_component.exports);
// EXTERNAL MODULE: ./node_modules/bootstrap-vue/esm/index.js + 245 modules
var esm = __webpack_require__(8905);
// EXTERNAL MODULE: ./node_modules/bootstrap-vue/esm/icons/plugin.js + 1 modules
var icons_plugin = __webpack_require__(3017);
// EXTERNAL MODULE: ./node_modules/bootstrap-vue/esm/components/toast/index.js + 3 modules
var toast = __webpack_require__(8793);
// EXTERNAL MODULE: ./node_modules/vue-router/dist/vue-router.esm.js
var vue_router_esm = __webpack_require__(8345);
;// CONCATENATED MODULE: ../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"50d3a65f-vue-loader-template"}!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/cache-loader/dist/cjs.js??ruleSet[0].rules[0].use[0]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/views/GamePic.vue?vue&type=template&id=69f8caf7&scoped=true&
var GamePicvue_type_template_id_69f8caf7_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"d-flex justify-content-center mt-2"},[_c('div',_vm._l((_vm.FIRST_FRAGMENT),function(f){return _c('div',{key:_vm.genKey(f, 0, 0),staticClass:"d-flex flex-column"},_vm._l((_vm.Y),function(y){return _c('div',{key:_vm.genKey(f, y, 0),staticClass:"d-flex"},_vm._l((_vm.X),function(x){return _c('div',{key:_vm.genKey(f, y, x),class:_vm.getClassByElement(x, y, f)})}),0)}),0)}),0),_c('div',_vm._l((_vm.SECOND_FRAGMENT),function(f){return _c('div',{key:_vm.genKey(f, 0, 0),staticClass:"d-flex flex-column"},_vm._l((_vm.Y),function(y){return _c('div',{key:_vm.genKey(f, y, 0),staticClass:"d-flex"},_vm._l((_vm.X),function(x){return _c('div',{key:_vm.genKey(f, y, x),class:_vm.getClassByElement(x, y, f)})}),0)}),0)}),0)])}
var GamePicvue_type_template_id_69f8caf7_scoped_true_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[1]!../node_modules/cache-loader/dist/cjs.js??ruleSet[0].rules[0].use[0]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/views/GamePic.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var GamePicvue_type_script_lang_js_ = ({
  name: "GamePic",
  data: function () {
    return {
      FIRST_FRAGMENT: [],
      SECOND_FRAGMENT: [],
      X: [],
      Y: []
    };
  },

  mounted() {
    function getRange(start, qty) {
      let arr = [];

      for (let i = start; i < start + qty; i++) {
        arr.push(i);
      }

      return arr;
    }

    let hFragments = this.$store.state.Game.totalFieldFragments / this.$store.state.Game.columns;
    this.FIRST_FRAGMENT = getRange(0, hFragments);
    this.SECOND_FRAGMENT = getRange(this.$store.state.Game.totalFieldFragments - hFragments, this.$store.state.Game.totalFieldFragments - hFragments);
    this.X = getRange(0, 16);
    this.Y = getRange(0, 8);
  },

  methods: {
    getClassByElement: function (x, y, f) {
      if (this.$store.state.Game.template[f][y][x] < 5) {
        return `filled-tile pb-tile color-${this.$store.state.Game.template[f][y][x]}`;
      }

      return `filled-tile-light pb-tile color-${this.$store.state.Game.template[f][y][x]}`;
    },
    genKey: function (x, y, z) {
      return parseInt(x) * 1000 + parseInt(y) * 100 + parseInt(z);
    }
  }
});
;// CONCATENATED MODULE: ./src/views/GamePic.vue?vue&type=script&lang=js&
 /* harmony default export */ var views_GamePicvue_type_script_lang_js_ = (GamePicvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../node_modules/cache-loader/dist/cjs.js??ruleSet[0].rules[0].use[0]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/views/GamePic.vue?vue&type=style&index=0&id=69f8caf7&scoped=true&lang=css&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/views/GamePic.vue?vue&type=style&index=0&id=69f8caf7&scoped=true&lang=css&

;// CONCATENATED MODULE: ./src/views/GamePic.vue



;


/* normalize component */

var GamePic_component = (0,componentNormalizer/* default */.Z)(
  views_GamePicvue_type_script_lang_js_,
  GamePicvue_type_template_id_69f8caf7_scoped_true_render,
  GamePicvue_type_template_id_69f8caf7_scoped_true_staticRenderFns,
  false,
  null,
  "69f8caf7",
  null
  
)

/* harmony default export */ var GamePic = (GamePic_component.exports);
;// CONCATENATED MODULE: ./src/router/index.js


 //import FieldTilesPart from '../views/FieldTilesPart'

const Home = () => __webpack_require__.e(/* import() */ 805).then(__webpack_require__.bind(__webpack_require__, 6805));

const FieldTilesPart = () => __webpack_require__.e(/* import() */ 701).then(__webpack_require__.bind(__webpack_require__, 9701));

vue_runtime_esm["default"].use(vue_router_esm/* default */.Z);
const routes = [{
  path: '/',
  name: 'Home',
  component: Home
}, {
  path: '/field/fragments/:items*',
  name: 'FieldTilesPart',
  component: FieldTilesPart,

  props(route) {
    if (Array.isArray(route.params.items)) {
      return {
        items: route.params.items
      };
    } else {
      return {
        items: route.params.items.split("/").map(item => parseInt(item))
      };
    }
  }

}, {
  path: '/game/:id',
  name: 'Game',
  component: Home
}, {
  path: '/gamepic/',
  name: 'GamePic',
  component: GamePic
}];
const router = new vue_router_esm/* default */.Z({
  routes
});
/* harmony default export */ var src_router = (router);
// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(629);
;// CONCATENATED MODULE: ./src/store/modules/Game.js

const Game = {
  namespaced: true,
  state: {
    totalFieldFragments: 0,
    totalReward: 0,
    payPerMove: 0,
    remainingTiles: 0,
    isMainScreen: true,
    field: {},
    template: {},
    standings: [],
    tilesToPut: [],
    name: "",
    status: 1,
    gameStartTime: 0,
    extraSettings: null,
    gameId: 0,
    columns: 0
  },
  mutations: {
    addTile(state, tilePlusColor) {
      state.tilesToPut.push(tilePlusColor);
    },

    removeTile(state, tilePlusColor) {
      const removeIndex = state.tilesToPut.findIndex(item => {
        return item.color === tilePlusColor.color && item.x === tilePlusColor.x && item.y === tilePlusColor.y && item.f === tilePlusColor.f;
      });

      if (removeIndex >= 0) {
        state.tilesToPut.splice(removeIndex, 1);
      }
    },

    putTile(state, coordinates) {
      vue_runtime_esm["default"].set(state.field[coordinates.f.toString()][coordinates.y], coordinates.x, coordinates.color);
    },

    updateGameStartTime(state, newStartTime) {
      state.gameStartTime = newStartTime;
    },

    updateField(state, newField) {
      state.field = newField;
    },

    updateTemplate(state, newTemplate) {
      state.template = newTemplate;
    },

    updateStandings(state, newStandings) {
      state.standings = newStandings;
    },

    updateName(state, newName) {
      state.name = newName;
    },

    updateId(state, newId) {
      state.gameId = newId;
    },

    updateInitConfig(state, {
      payPerMove
    }) {
      state.payPerMove = payPerMove;
    },

    updateTotalReward(state, {
      totalReward
    }) {
      state.totalReward = totalReward;
    },

    updateStatus(state, newStatus) {
      state.status = newStatus;
    },

    updateTotalFieldFragments(state, totalFieldFragments) {
      state.totalFieldFragments = totalFieldFragments;
    },

    updateColumns(state, newColumns) {
      state.columns = newColumns;
    },

    updateRemainingTiles(state, remainingTiles) {
      state.remainingTiles = remainingTiles;
    },

    cancelPut(state) {
      state.tilesToPut = [];
    },

    updateIsMainScreen(state, isMainScreen) {
      state.isMainScreen = isMainScreen;
    },

    updateExtraSettings(state, settings) {
      state.extraSettings = settings;
    },

    calculateRewards(state) {
      state.standings.sort(function (first, second) {
        if (first.captured > second.captured || first.captured < second.captured) {
          return second.captured - first.captured;
        }

        if (first.captured === second.captured) {
          return first.lastPutTime - second.lastPutTime;
        }
      });
      let position = 1;

      for (let player of state.standings) {
        player.position = position;
        position += 1;
      } // if (state.status === GAME_STATUS_COMPLETED) {
      //     return;
      // }


      let rewardPercentArray = [45, 25, 15, 10, 5];
      let rewardArray = rewardPercentArray.map(item => item * state.totalReward / 100);

      for (let i = 0; i < Math.min(state.standings.length, 5); i++) {
        state.standings[i].reward = rewardArray[i];
      }
    }

  },
  actions: {
    addTileAction({
      commit,
      state,
      rootState
    }, tilePlusColor) {
      state.remainingTiles -= 1;
      commit('addTile', tilePlusColor);
      let player = state.standings.find(player => player.playerAddress === rootState.PlayerInfo.playerAddress);

      if (!player) {
        const newPlayer = {
          playerAddress: rootState.PlayerInfo.playerAddress,
          walletAddress: rootState.PlayerInfo.walletAddress,
          captured: 1,
          reward: 0,
          stars: 0,
          lastPutTime: Date.now(),
          isReceived: false,
          nft: false
        };
        state.standings.push(newPlayer);
      } else {
        player.captured += 1;
      }

      commit('calculateRewards');
    },

    removeTileAction({
      commit,
      state,
      rootState
    }, tilePlusColor) {
      state.remainingTiles += 1;
      commit('removeTile', tilePlusColor);
      let player = state.standings.find(player => player.playerAddress === rootState.PlayerInfo.playerAddress);
      player.captured -= 1;
      commit('calculateRewards');
    }

  },
  getters: {
    getCapturedTiles(state, getters, rootState) {
      const player = state.standings.find(player => player.playerAddress === rootState.PlayerInfo.playerAddress);
      return player ? player.captured : 0;
    },

    getPosition(state, getters, rootState) {
      const player = state.standings.find(player => player.playerAddress === rootState.PlayerInfo.playerAddress);
      return player ? player.position : 0;
    },

    getReward(state, getters, rootState) {
      const player = state.standings.find(player => player.playerAddress === rootState.PlayerInfo.playerAddress);
      return player ? player.reward : 0;
    },

    isReceivedReward(state, getters, rootState) {
      const player = state.standings.find(player => player.playerAddress === rootState.PlayerInfo.playerAddress);
      return player ? player.isReceived : false;
    },

    isInRoaster(state, getters, rootState) {
      return state.standings.find(player => player.playerAddress === rootState.PlayerInfo.playerAddress) !== undefined;
    }

  }
};
;// CONCATENATED MODULE: ./src/store/modules/PlayerInfo.js

const PlayerInfo = {
  namespaced: true,
  state: {
    playerAddress: "",
    walletAddress: "",
    colors: [0, 0, 0, 0, 0],
    currentColor: 1,
    balance: 0,
    claimableTiles: 0,
    farmingAddress: null,
    farmingContract: null,
    isFarmingActive: false,
    tokensToAdd: 0,
    farmingEstimation: 0
  },
  mutations: {
    updateFarmingContract(state, newContract) {
      state.farmingContract = newContract;
    },

    updateColors(state, newColors) {
      state.colors = newColors;
    },

    updateWalletAddress(state, newWalletAddress) {
      state.walletAddress = newWalletAddress;
    },

    updateFarmingAddress(state, newFarmingAddress) {
      state.farmingAddress = newFarmingAddress;
    },

    updateFarmingActive(state, isFarmingActive) {
      state.isFarmingActive = isFarmingActive;
    },

    updatePlayerAddress(state, newPlayerAddress) {
      state.playerAddress = newPlayerAddress;
    },

    setCurrentColor(state, newColor) {
      state.currentColor = newColor;
    },

    updateColorQty(state, {
      colorNumber,
      qty
    }) {
      if (state.colors[colorNumber - 1] >= -qty) {
        vue_runtime_esm["default"].set(state.colors, colorNumber - 1, state.colors[colorNumber - 1] + qty);
      }
    },

    updateBalance(state, newBalance) {
      state.balance = newBalance;
    },

    updateClaimableTiles(state, newTiles) {
      state.claimableTiles = newTiles;
    },

    updateLockedInFarming(state, farmingBalance) {
      state.farmingBalance = farmingBalance;
    },

    updateFarmingEstimation(state, newEstimation) {
      state.farmingEstimation = newEstimation;
    }

  },
  actions: {},
  getters: {
    getBalance(state) {
      return state.balance;
    }

  }
};
;// CONCATENATED MODULE: ./src/store/modules/Toast.js
const Toast = {
  namespaced: true,
  state: {
    received: 0,
    payload: {}
  },
  mutations: {
    sendToast(state, payload) {
      state.received = Date.now();
      state.payload = payload;
    }

  },
  actions: {},
  getters: {}
};
// EXTERNAL MODULE: ./src/contract_wrappers/TokenWallet.js
var TokenWallet = __webpack_require__(332);
;// CONCATENATED MODULE: ./src/store/modules/Ever.js





const Ever = {
  namespaced: true,
  state: {
    api: null,
    isLoading: true,
    loadingStatus: 0,
    operationInProgress: false,
    tokenRoot: null,
    host: null,
    game: null
  },
  mutations: {
    updateApi(state, newApi) {
      state.api = newApi;
    },

    toggleLoading(state, isLoading) {
      state.isLoading = isLoading;
    },

    updateLoadingStatus(state, newStatus) {
      state.loadingStatus = newStatus;
    },

    isOpInProgress(state, newOpStatus) {
      state.operationInProgress = newOpStatus;
    },

    updateTokenRoot(state, tokenRoot) {
      state.tokenRoot = tokenRoot;
    },

    updateHost(state, host) {
      state.host = host;
    },

    updateGame(state, game) {
      state.game = game;
    }

  },
  actions: {
    async setField({
      commit,
      rootState
    }) {
      let rawField = await EverAPI.game.getField(rootState.Ever.game);
      let newField = {};

      _dataToNumbers(rawField, newField);

      commit("Game/updateField", newField, {
        root: true
      });
    },

    async setStandings({
      commit,
      rootState
    }) {
      let standings = [];
      let rawPlayers = await EverAPI.game.getPlayers(rootState.Ever.game);

      for (const player of rawPlayers) {
        let tmpPlayer = {};
        tmpPlayer.playerAddress = player[0].toString();
        tmpPlayer.captured = parseInt(player[1].captured);
        tmpPlayer.stars = parseInt(player[1].stars);
        tmpPlayer.reward = parseInt(player[1].reward);
        tmpPlayer.lastPutTime = parseInt(player[1].lastPutTime);
        tmpPlayer.walletAddress = player[1].walletAddress.toString();
        tmpPlayer.isReceived = player[1].isReceived;
        tmpPlayer.nft = player[1].nft;
        standings.push(tmpPlayer);
      }

      commit("Game/updateStandings", standings, {
        root: true
      });
    },

    async isWalletDeployed({
      rootState
    }) {
      let ever = rootState.Ever.api;
      let state = await EverAPI.wallet.getState(ever, rootState.PlayerInfo.walletAddress);
      return JSON.stringify(state) !== "{}";
    },

    async setWalletBalance({
      commit,
      rootState,
      dispatch
    }) {
      let ever = rootState.Ever.api;
      let isDeployed = await dispatch('isWalletDeployed');

      if (!isDeployed) {
        commit("PlayerInfo/updateBalance", 0, {
          root: true
        });
        return;
      }

      const walletAddress = new dist.Address(rootState.PlayerInfo.walletAddress);
      const wallet = new ever.Contract(TokenWallet.TokenWalletContract.abi, walletAddress);
      commit("PlayerInfo/updateBalance", await EverAPI.wallet.getBalance(wallet), {
        root: true
      });
    },

    async setRemainingTiles({
      commit,
      rootState
    }) {
      const gameInfo = await EverAPI.game.getGameInfo(rootState.Ever.game);
      commit("Game/updateRemainingTiles", parseInt(gameInfo.remainingTiles), {
        root: true
      });
    },

    async setClaimTiles({
      commit,
      rootState
    }) {
      let ever = rootState.Ever.api;

      if (await EverAPI.isActiveContract(ever, rootState.PlayerInfo.farmingAddress)) {
        commit("PlayerInfo/updateClaimableTiles", await EverAPI.farmingWallet.getTiles(rootState.PlayerInfo.farmingContract), {
          root: true
        });
      }
    },

    async getLockedInFarming({
      commit,
      rootState
    }) {
      let ever = rootState.Ever.api;

      if (await EverAPI.isActiveContract(ever, rootState.PlayerInfo.farmingAddress)) {
        commit("PlayerInfo/updateLockedInFarming", await EverAPI.farmingWallet.getLockedInFarming(rootState.PlayerInfo.farmingContract), {
          root: true
        });
      }
    },

    async reloadGame({
      dispatch,
      commit
    }) {
      commit('Game/cancelPut', null, {
        root: true
      });
      await dispatch('checkFarmingWalletActive');
      await dispatch('getLockedInFarming');
      await dispatch('updateGameStatus');
      await dispatch('setStandings');
      commit('Game/calculateRewards', null, {
        root: true
      });
      await dispatch('setRemainingTiles');
      await dispatch('setWalletBalance');
      await dispatch('setClaimTiles');
      await dispatch('updateColors');
      await dispatch('setField');
    },

    async claimTiles({
      rootState
    }) {
      const wallet = rootState.PlayerInfo.farmingContract;
      await EverAPI.farmingWallet.claimTiles(wallet, rootState.PlayerInfo.playerAddress, AppConst/* GENESIS_ADDRESS */.je);
    },

    async joinGame({
      state,
      rootState
    }) {
      await EverAPI.game.deployFarmingWallet(state.game, rootState.PlayerInfo.playerAddress);
    },

    async checkFarmingWalletActive({
      commit,
      rootState
    }) {
      const isFarmingActive = await EverAPI.isActiveContract(rootState.Ever.api, rootState.PlayerInfo.farmingAddress);
      commit("PlayerInfo/updateFarmingActive", isFarmingActive, {
        root: true
      });
    },

    async putTiles({
      state,
      rootState
    }) {
      const ever = rootState.Ever.api;
      const walletAddress = new dist.Address(rootState.PlayerInfo.walletAddress);
      const wallet = new ever.Contract(TokenWallet.TokenWalletContract.abi, walletAddress);
      const tilesPayload = await EverAPI.game.packTiles(state.game, rootState.Game.tilesToPut);
      await EverAPI.wallet.putTiles(wallet, rootState.Game.payPerMove, state.game.address.toString(), rootState.PlayerInfo.playerAddress, tilesPayload);
    },

    async putFarmingTiles({
      rootState
    }, tokensToPut) {
      const ever = rootState.Ever.api;
      const walletAddress = new dist.Address(rootState.PlayerInfo.walletAddress);
      const wallet = new ever.Contract(TokenWallet.TokenWalletContract.abi, walletAddress);
      await EverAPI.wallet.putTiles(wallet, tokensToPut, rootState.PlayerInfo.farmingAddress, rootState.PlayerInfo.playerAddress, AppConst/* EMPTY_CELL */.mk);
    },

    async releaseFarmingTiles({
      rootState
    }, {
      playerAddress,
      tokensToRelease
    }) {
      const wallet = rootState.PlayerInfo.farmingContract;
      await EverAPI.farmingWallet.releaseTokens(wallet, playerAddress, tokensToRelease);
    },

    async updateColors({
      commit,
      rootState
    }) {
      const game = rootState.Ever.game;
      const playerColors = await EverAPI.game.getColors(game);
      const colors = playerColors.find(item => item[0].toString() === rootState.PlayerInfo.playerAddress);

      if (colors !== undefined) {
        commit('PlayerInfo/updateColors', colors[1].map(item => parseInt(item)), {
          root: true
        });
      }
    },

    async updateGameStatus({
      commit,
      state
    }) {
      const gameInfo = await EverAPI.game.getGameInfo(state.game);
      commit("Game/updateStatus", parseInt(gameInfo.status), {
        root: true
      });
    },

    async claimReward({
      state,
      rootState
    }) {
      await EverAPI.game.claimReward(state.game, rootState.PlayerInfo.playerAddress);
    },

    async updateFarmingEstimation({
      commit,
      rootState
    }, {
      time,
      balance
    }) {
      const wallet = rootState.PlayerInfo.farmingContract;

      if (wallet !== null && (await EverAPI.isActiveContract(rootState.Ever.api, rootState.PlayerInfo.farmingAddress))) {
        commit('PlayerInfo/updateFarmingEstimation', await EverAPI.farmingWallet.calcFarming(wallet, time, balance), {
          root: true
        });
      }
    }

  },
  getters: {}
};
;// CONCATENATED MODULE: ./src/store/index.js






vue_runtime_esm["default"].use(vuex_esm/* default */.ZP);
/* harmony default export */ var store = (new vuex_esm/* default.Store */.ZP.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    Game: Game,
    PlayerInfo: PlayerInfo,
    Toast: Toast,
    Ever: Ever
  }
}));
;// CONCATENATED MODULE: ./src/AppFilters.js


vue_runtime_esm["default"].filter('short', function (value) {
  return value.slice(0, 4) + '...' + value.slice(-4);
});
vue_runtime_esm["default"].filter('fixed', function (value) {
  return new (bignumber_default())(value).toFixed(2);
});
;// CONCATENATED MODULE: ./i18n/en.js
/* harmony default export */ var en = ({
  en: {
    bottomMenu: {
      join: "Join",
      claim: "Claim",
      put: "Put ",
      cancel: "Cancel ",
      getReward: "Get Reward",
      farmingSettings: {
        title: "Farming Settings",
        p1: "Add PILE from your balance to farming. In return, you will start receiving tiles. The more PILE you lock, the more tiles you receive. You can always release tokens from farming by clicking the (x) icon.",
        p2: "Current balance: ",
        p3: "In farming: ",
        p4: "Add this amount of PILE to farming:",
        placeholderBalance: "Your balance",
        error: "Please leave 1 PILE on balance for put operations. Additionally, the value should be less than your balance value.",
        youGet: "Then you'll farm approximately:",
        tileMin: "tiles/minute.",
        addToFarming: "Add to Farming"
      }
    },
    home: {
      remainingTiles: "Remaining:",
      yourPoints: "Your Points:",
      totalReward: "Total Reward:"
    },
    topMenu: {
      balance: "Balance: ",
      yourPlace: "Your Place: ",
      standings: {
        place: "Place",
        wallet: "Wallet",
        points: "Points",
        reward: "Reward",
        title: "Standings"
      },
      getTokens: {
        title: "Get PILE Tokens!",
        p1: "To get PILE tokens, add the PILE token root address to FlatQube and swap for WEVER.",
        p2: "Your connected wallet is: ",
        p3: "Keep PILE only in this wallet to use them within the game!",
        p4: "For the guide on how to import the PILE token, see "
      }
    },
    toast: {
      anotherColorTitle: "Choose Another Color!",
      anotherColorText1: "Please choose color ",
      anotherColorText2: "from the bottom menu.",
      noColorLeftTitle: "Use Another Color!",
      noColorLeftText1: "Unfortunately, 0 tiles of color ",
      noColorLeftText2: " left.",
      noColorLeftText3: "Please <b>choose</b> another color from the bottom menu<br/>",
      noColorLeftText4: "or <b>CLAIM</b> more tiles.",
      tilesLimitReachedTitle: "Tiles Limit Reached!",
      tilesLimitReachedText1: "You have already reached the limit of <b>50 tiles</b>, please submit them before putting more tiles.",
      putBalanceNotEnoughTitle: "Your PILE balance is not enough to put!",
      putBalanceNotEnoughText1: "Currently you have <i>{balance} PILE</i>, and the put operation costs <b>{payPerMove} PILE</b>.<br/>Please top-up your balance!",
      noTilesToClaimTitle: "You have 0 tiles to claim!",
      noTilesToClaimText1: "Please click the <span class=\"p-1\"><i class=\"bi bi-gear-fill dark-box color-primary\"></i></span> and add a few PILE tokens to farming.",
      noTilesToClaimText2: "<b>NOTE:</b> The more PILE you put to farming, the <b>more</b> you receive!",
      zeroBalanceTitle: "Your Balance is 0 PILE!",
      zeroBalanceText1: "Your balance is <b>0 PILE</b>. Please top-up your balance by clicking the <span class=\"dark-box p-1\"><i class=\"bi bi-cart-check-fill color-success\"></i></span> icon.",
      operationInProgressTitle: "Operation in Progress!",
      operationInProgressText1: "Please wait until the app completes the claim or put operation.",
      operationFailedTitle: "Operation Didn't Succeed!",
      operationFailedText1: "The operation could not be completed, please try again.",
      activityDetectedTitle: "👾 Activity Detected!",
      activityDetectedPut: "Somebody has just put <b>{putValue} tiles</b>.",
      activityDetectedClaim: "Somebody has just claimed <b>{claimValue} tiles</b>.",
      starReceivedTitle: "⭐ You've Received a STAR! ⭐",
      starReceivedText1: "This ⭐star⭐ gives you  <b>+{pointsGained}</b> points!."
    }
  }
});
;// CONCATENATED MODULE: ./i18n/kr.js
/* harmony default export */ var kr = ({
  kr: {
    bottomMenu: {
      join: "가입하다",
      claim: "청구",
      put: "놓다 ",
      cancel: "취소 ",
      getReward: "보상 받다",
      farmingSettings: {
        title: "파밍 설정",
        p1: "저울에서 파밍 PILE을 추가하십시오. 그 대가로 타일을 받기 시작합니다. 더 많은 PILE을 잠글수록 더 많은 타일을 받습니다. (x) 아이콘을 클릭하면 언제든지 농사에서 토큰을 해제할 수 있습니다.",
        p2: "현재의 균형: ",
        p3: "파밍에서: ",
        p4: "이 양의 PILE을 파밍 추가합니다:",
        placeholderBalance: "잔액",
        error: "풋 작업을 위해 1개의 PILE을 잔고에 남겨두십시오. 또한 값은 잔액 값보다 작아야 합니다.",
        youGet: "그러면 대략 다음과 같이 농사를 짓게 됩니다:",
        tileMin: "타일/분.",
        addToFarming: "파밍에 추가"
      }
    },
    home: {
      remainingTiles: "남은:",
      yourPoints: "귀하의 포인트:",
      totalReward: "총 보상:"
    },
    topMenu: {
      balance: "균형: ",
      yourPlace: "장소: ",
      standings: {
        place: "장소",
        wallet: "지갑",
        points: "포인트",
        reward: "보상",
        title: "순위"
      },
      getTokens: {
        title: "PILE 토큰을 받으세요!",
        p1: "PILE 토큰을 얻으려면 PILE 토큰 루트 주소를 FlatQube에 추가하고 WEVER로 바꾸십시오.",
        p2: "연결된 지갑은 다음과 같습니다: ",
        p3: "게임 내에서 사용하려면 이 지갑에만 PILE을 보관하세요!",
        p4: "PILE 토큰을 가져오는 방법에 대한 가이드는 다음을 참조하세요."
      }
    },
    toast: {
      anotherColorTitle: "다른 색상을 선택하십시오!",
      anotherColorText1: "색상을 선택해주세요 ",
      anotherColorText2: "하단 메뉴에서.",
      noColorLeftTitle: "다른 색상을 사용하십시오!",
      noColorLeftText1: "불행히도 0 타일 ",
      noColorLeftText2: " 왼쪽.",
      noColorLeftText3: "하단 메뉴에서 다른 색상을 <b>선택</b>하십시오<br>",
      noColorLeftText4: "또는 더 많은 타일을 <b>클레임</b>하세요.",
      tilesLimitReachedTitle: "타일 제한에 도달했습니다!",
      tilesLimitReachedText1: "이미 <b>50개의 타일</b> 한도에 도달했습니다. 타일을 추가하기 전에 제출하십시오.",
      putBalanceNotEnoughTitle: "PILE 잔액이 부족합니다!",
      putBalanceNotEnoughText1: "현재 <i>{balance} PILE</i>이(가) 있으며 풋 작업 비용은 <b>{payPerMove} PILE</b>입니다.<br/>잔액을 충전하세요!",
      noTilesToClaimTitle: "주장할 타일이 0개 있습니다!",
      noTilesToClaimText1: "를 <span class=\"p-1\"><i class=\"bi bi-gear-fill dark-box color-primary\"></i></span> 클릭하고 몇 가지 PILE 토큰을 파밍에 추가하십시오.",
      noTilesToClaimText2: "<b>참고:</b> PILE을 파밍에 더 많이 투자할수록 <b>더 많이</b> 받게 됩니다!",
      zeroBalanceTitle: "귀하의 잔액은 0PILE입니다!",
      zeroBalanceText1: "잔액이 <b>0 PILE</b>입니다. <span class=\"dark-box p-1\"><i class=\"bi bi-cart-check-fill color-success\"></i></span> 아이콘을 클릭하여 잔액을 충전하십시오.",
      operationInProgressTitle: "작업 진행 중!",
      operationInProgressText1: "앱이 클레임 또는 넣기 작업을 완료할 때까지 기다리십시오.",
      operationFailedTitle: "작업이 성공하지 못했습니다!",
      operationFailedText1: "작업을 완료할 수 없습니다. 다시 시도하십시오.",
      activityDetectedTitle: "👾 활동이 감지되었습니다!",
      activityDetectedPut: "누군가가 방금 <b>{putValue} 타일</b>을 넣었습니다.",
      activityDetectedClaim: "누군가가 방금 <b>{claimValue} 타일</b>에 대한 소유권을 주장했습니다.",
      starReceivedTitle: "⭐ 별을 받았습니다! ⭐",
      starReceivedText1: "이 ⭐별⭐은 <b>+{pointsGained}</b> 포인트를 제공합니다!"
    }
  }
});
;// CONCATENATED MODULE: ./src/main.js











vue_runtime_esm["default"].config.productionTip = false; // Make BootstrapVue available throughout your project

vue_runtime_esm["default"].use(esm/* BootstrapVue */.XG7); // Optionally install the BootstrapVue icon components plugin

vue_runtime_esm["default"].use(icons_plugin/* IconsPlugin */.A7);
vue_runtime_esm["default"].use(toast/* ToastPlugin */.m$);
vue_runtime_esm["default"].use(vue_i18n_esm/* default */.Z);
const i18n = new vue_i18n_esm/* default */.Z({
  locale: 'en',
  messages: { ...en,
    ...kr
  }
});
new vue_runtime_esm["default"]({
  i18n,
  router: src_router,
  store: store,
  render: h => h(src_App)
}).$mount('#app');

/***/ }),

/***/ 7244:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "img/gb_flag.b250ad6c.svg";

/***/ }),

/***/ 9597:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "img/kr_flag.431aa92d.svg";

/***/ }),

/***/ 9574:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "img/logo.c7005e48.svg";

/***/ }),

/***/ 2118:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "img/sandwatch.f68ff8f2.svg";

/***/ }),

/***/ 2923:
/***/ (function(module) {

"use strict";
module.exports = "data:image/png;base64,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";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	!function() {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = function(chunkId) {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce(function(promises, key) {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = function(chunkId) {
/******/ 			// return url for filenames based on template
/******/ 			return "js/" + chunkId + "." + {"701":"a2a980aa","805":"fb580bd0"}[chunkId] + ".js";
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.miniCssF = function(chunkId) {
/******/ 			// return url for filenames based on template
/******/ 			return "css/" + chunkId + "." + {"701":"dcedd473","805":"9ce6fa47"}[chunkId] + ".css";
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	!function() {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "pileblocks:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = function(url, done, key, chunkId) {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = function(prev, event) {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach(function(fn) { return fn(event); });
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "/";
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/css loading */
/******/ 	!function() {
/******/ 		var createStylesheet = function(chunkId, fullhref, resolve, reject) {
/******/ 			var linkTag = document.createElement("link");
/******/ 		
/******/ 			linkTag.rel = "stylesheet";
/******/ 			linkTag.type = "text/css";
/******/ 			var onLinkComplete = function(event) {
/******/ 				// avoid mem leaks.
/******/ 				linkTag.onerror = linkTag.onload = null;
/******/ 				if (event.type === 'load') {
/******/ 					resolve();
/******/ 				} else {
/******/ 					var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 					var realHref = event && event.target && event.target.href || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + realHref + ")");
/******/ 					err.code = "CSS_CHUNK_LOAD_FAILED";
/******/ 					err.type = errorType;
/******/ 					err.request = realHref;
/******/ 					linkTag.parentNode.removeChild(linkTag)
/******/ 					reject(err);
/******/ 				}
/******/ 			}
/******/ 			linkTag.onerror = linkTag.onload = onLinkComplete;
/******/ 			linkTag.href = fullhref;
/******/ 		
/******/ 			document.head.appendChild(linkTag);
/******/ 			return linkTag;
/******/ 		};
/******/ 		var findStylesheet = function(href, fullhref) {
/******/ 			var existingLinkTags = document.getElementsByTagName("link");
/******/ 			for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 				var tag = existingLinkTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 				if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return tag;
/******/ 			}
/******/ 			var existingStyleTags = document.getElementsByTagName("style");
/******/ 			for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 				var tag = existingStyleTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href");
/******/ 				if(dataHref === href || dataHref === fullhref) return tag;
/******/ 			}
/******/ 		};
/******/ 		var loadStylesheet = function(chunkId) {
/******/ 			return new Promise(function(resolve, reject) {
/******/ 				var href = __webpack_require__.miniCssF(chunkId);
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				if(findStylesheet(href, fullhref)) return resolve();
/******/ 				createStylesheet(chunkId, fullhref, resolve, reject);
/******/ 			});
/******/ 		}
/******/ 		// object to store loaded CSS chunks
/******/ 		var installedCssChunks = {
/******/ 			143: 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.miniCss = function(chunkId, promises) {
/******/ 			var cssChunks = {"701":1,"805":1};
/******/ 			if(installedCssChunks[chunkId]) promises.push(installedCssChunks[chunkId]);
/******/ 			else if(installedCssChunks[chunkId] !== 0 && cssChunks[chunkId]) {
/******/ 				promises.push(installedCssChunks[chunkId] = loadStylesheet(chunkId).then(function() {
/******/ 					installedCssChunks[chunkId] = 0;
/******/ 				}, function(e) {
/******/ 					delete installedCssChunks[chunkId];
/******/ 					throw e;
/******/ 				}));
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		// no hmr
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			143: 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = function(chunkId, promises) {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise(function(resolve, reject) { installedChunkData = installedChunks[chunkId] = [resolve, reject]; });
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = function(event) {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkpileblocks"] = self["webpackChunkpileblocks"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [998], function() { return __webpack_require__(3518); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;