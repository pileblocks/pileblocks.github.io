/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 7297:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": function() { return /* binding */ SALE_TOKEN; },
/* harmony export */   "K$": function() { return /* binding */ GAME_STATUS_COMPLETED; },
/* harmony export */   "Mq": function() { return /* binding */ LOADING_STATUS_GAME_PENDING; },
/* harmony export */   "Ro": function() { return /* binding */ LOADING_STATUS_PROVIDER_LOADED; },
/* harmony export */   "_H": function() { return /* binding */ TOKEN_ROOT_ADDRESS; },
/* harmony export */   "h_": function() { return /* binding */ LOADING_STATUS_NO_PERMISSIONS; },
/* harmony export */   "je": function() { return /* binding */ GENESIS_ADDRESS; },
/* harmony export */   "rb": function() { return /* binding */ HOST_ADDRESS; },
/* harmony export */   "rr": function() { return /* binding */ LOADING_STATUS_PROVIDER_NOT_LOADED; },
/* harmony export */   "u2": function() { return /* binding */ SELF_PUT_OFFSET; }
/* harmony export */ });
const SELF_PUT_OFFSET = 1000;
const GENESIS_ADDRESS = "0:5354e68fc7a2c501f6c6ad75d5505fdafa8c08ce65a6223970acd1dcb28a19b7";
const TOKEN_ROOT_ADDRESS = "0:f6497ed90964270a312c12d6052c766634ae54abaefd943f92f5e02ffbcf7eb3";
const SALE_TOKEN = "0:a872b330cedb47486e38f297ea30d557d2c9c1e8d46cd9ecc207077b23202c17";
const HOST_ADDRESS = "0:e093de6431036877ae481f45e9903971a4a7664588f2bdf9b39a5022c1184816";
const LOADING_STATUS_PROVIDER_NOT_LOADED = 1;
const LOADING_STATUS_PROVIDER_LOADED = 2;
const LOADING_STATUS_NO_PERMISSIONS = 3;
const LOADING_STATUS_GAME_PENDING = 4;
const GAME_STATUS_COMPLETED = 3;

/***/ }),

/***/ 3479:
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
        "name": "_gameCode",
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
      "inputs": [{
        "name": "gameId",
        "type": "uint32"
      }],
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
      "name": "activateGame",
      "inputs": [{
        "name": "gameAddress",
        "type": "address"
      }],
      "outputs": []
    }, {
      "name": "runGame",
      "inputs": [],
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
    }]
  },
  tvc: "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",
  code: "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",
  codeHash: "578c4747f2b4e21558306a308be5d280fb8438d1df0d8bc1cd97422a99637fd8"
};
module.exports = {
  GameHostContract
};

/***/ }),

/***/ 4338:
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

/***/ 9860:
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
      "name": "onClaimTiles",
      "inputs": [{
        "name": "ownerAddress",
        "type": "address"
      }, {
        "name": "tilesNum",
        "type": "uint16"
      }],
      "outputs": []
    }, {
      "name": "onPutTiles",
      "inputs": [{
        "name": "ownerAddress",
        "type": "address"
      }, {
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
        "name": "tokensNum",
        "type": "uint128"
      }],
      "outputs": []
    }, {
      "name": "completeGame",
      "inputs": [{
        "name": "totalReward",
        "type": "uint128"
      }],
      "outputs": []
    }, {
      "name": "claimReward",
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
          "name": "isLast",
          "type": "bool"
        }, {
          "name": "isPrelast",
          "type": "bool"
        }, {
          "name": "lastPutTime",
          "type": "uint64"
        }, {
          "name": "reward",
          "type": "uint128"
        }, {
          "name": "isReceived",
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
      "name": "created",
      "type": "uint64"
    }, {
      "key": 4,
      "name": "imageOwner",
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
      "name": "mSortablePlayers",
      "type": "optional(cell)"
    }, {
      "name": "rewardCoeff",
      "type": "uint128"
    }, {
      "name": "lastTile",
      "type": "uint16"
    }, {
      "name": "numberOfTiles",
      "type": "uint16"
    }, {
      "name": "walletCode",
      "type": "cell"
    }, {
      "name": "tokenRootAddress",
      "type": "address"
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
      "components": [{
        "name": "walletAddress",
        "type": "address"
      }, {
        "name": "captured",
        "type": "uint16"
      }, {
        "name": "isLast",
        "type": "bool"
      }, {
        "name": "isPrelast",
        "type": "bool"
      }, {
        "name": "lastPutTime",
        "type": "uint64"
      }, {
        "name": "reward",
        "type": "uint128"
      }, {
        "name": "isReceived",
        "type": "bool"
      }],
      "name": "players",
      "type": "map(address,tuple)"
    }, {
      "name": "playerColors",
      "type": "map(address,uint16[])"
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
  codeHash: "431bf371da2953eb6c691c907756befb335de66d7369e593453a53ac286af0fd"
};
module.exports = {
  PBGameContract
};

/***/ }),

/***/ 2326:
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

/***/ 9126:
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
      }],
      "outputs": []
    }, {
      "name": "putTiles",
      "inputs": [{
        "name": "genesis",
        "type": "address"
      }, {
        "name": "gameHost",
        "type": "address"
      }, {
        "name": "gameAddress",
        "type": "address"
      }, {
        "name": "tokensNum",
        "type": "uint128"
      }, {
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
    }, {
      "name": "prevBalance",
      "type": "uint128"
    }, {
      "name": "totalTime",
      "type": "uint128"
    }]
  },
  tvc: "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",
  code: "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",
  codeHash: "42e8cc02d5e1bfa702d020d5da53621f7066f77278d1841ce401b7546e6d685a"
};
module.exports = {
  TokenWalletContract
};

/***/ }),

/***/ 2824:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm.js
var vue_runtime_esm = __webpack_require__(144);
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App.vue?vue&type=template&id=c8635de8&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[(this.$store.state.Ever.isLoading)?_c('div',{staticClass:"overlay"},[_c('img',{staticClass:"img-fluid",attrs:{"src":__webpack_require__(9574),"alt":""}}),_c('b-spinner',{attrs:{"variant":"primary"}})],1):_vm._e(),_c('div',[_c('div',{staticClass:"color-1",attrs:{"id":"color-1"}}),_c('div',{staticClass:"color-2",attrs:{"id":"color-2"}}),_c('div',{staticClass:"color-3",attrs:{"id":"color-3"}}),_c('div',{staticClass:"color-4",attrs:{"id":"color-4"}}),_c('div',{staticClass:"color-5",attrs:{"id":"color-5"}}),_c('ever-loader')],1),(!_vm.gamePending && _vm.providerLoaded && !this.$store.state.Ever.isLoading)?_c('div',{staticClass:"game-container"},[_c('top-menu',{staticClass:"stat-block",attrs:{"id":"top-menu"}}),_c('div',{attrs:{"id":"field"}},[_c('router-view')],1),_c('bottom-menu',{attrs:{"id":"bottom-menu"}}),_c('toast-manager')],1):_vm._e(),(!_vm.gamePending && !_vm.providerLoaded && !this.$store.state.Ever.isLoading)?_c('div',{staticClass:"game-container"},[_vm._m(0)]):_vm._e(),(_vm.gamePending && !this.$store.state.Ever.isLoading)?_c('div',{staticClass:"game-container"},[_c('game-countdown')],1):_vm._e()])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"game-error-notification"},[_c('div',{staticClass:"fancy-font stat-block text-center"},[_vm._v("Install the EVER wallet or update the permissions")])])}]


;// CONCATENATED MODULE: ./src/App.vue?vue&type=template&id=c8635de8&

;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/BottomMenu.vue?vue&type=template&id=9ccd9d46&scoped=true&
var BottomMenuvue_type_template_id_9ccd9d46_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"bottom-menu"}},[(_vm.isBalancePositive && !_vm.isGameCompleted)?_c('div',{attrs:{"id":"pile-colors"}},_vm._l((5),function(item){return _c('div',{key:item},[_c('bottom-menu-color',{attrs:{"btn-color":item}})],1)}),0):_vm._e(),(_vm.isBalancePositive && !_vm.isGameCompleted)?_c('div',{attrs:{"id":"claim-tiles"}},[(!_vm.tilesArePut)?_c('div',[_c('b-button',{attrs:{"size":"lg","variant":"primary"},on:{"click":_vm.claimTiles}},[_c('span',{directives:[{name:"show",rawName:"v-show",value:(!_vm.isLoading),expression:"!isLoading"}]},[_vm._v("Claim "),_c('small',[_vm._v(_vm._s(this.$store.state.PlayerInfo.claimableTiles))])]),_c('b-spinner',{directives:[{name:"show",rawName:"v-show",value:(_vm.isLoading),expression:"isLoading"}]})],1)],1):_vm._e(),(_vm.tilesArePut && !_vm.isMainScreen)?_c('div',{staticClass:"d-flex flex-column mt-1"},[_c('b-button',{attrs:{"size":"lg","variant":"primary"},on:{"click":_vm.putTiles}},[_c('span',{directives:[{name:"show",rawName:"v-show",value:(!_vm.isLoading),expression:"!isLoading"}]},[_vm._v("Put "),_c('small',[_vm._v(_vm._s(this.$store.state.Game.tilesToPut.length))])]),_c('b-spinner',{directives:[{name:"show",rawName:"v-show",value:(_vm.isLoading),expression:"isLoading"}]})],1),_c('b-button',{directives:[{name:"show",rawName:"v-show",value:(!_vm.isLoading),expression:"!isLoading"}],staticClass:"mt-1",attrs:{"size":"sm","variant":"secondary"},on:{"click":_vm.cancelPut}},[_vm._v("Cancel "),_c('i',{staticClass:"bi bi-x-circle"})])],1):_vm._e()]):_vm._e(),(_vm.isGameCompleted)?_c('div',{staticClass:"claim-reward"},[_c('b-button',{directives:[{name:"show",rawName:"v-show",value:(!_vm.isReceived),expression:"!isReceived"}],attrs:{"size":"lg","variant":"primary"},on:{"click":_vm.claimReward}},[_c('span',{directives:[{name:"show",rawName:"v-show",value:(!_vm.isLoading),expression:"!isLoading"}]},[_vm._v("Get Reward "),_c('small',[_vm._v(_vm._s(_vm._f("fixed")(this.$store.getters["Game/getReward"])))])]),_c('b-spinner',{directives:[{name:"show",rawName:"v-show",value:(_vm.isLoading),expression:"isLoading"}]})],1)],1):_vm._e()])}
var BottomMenuvue_type_template_id_9ccd9d46_scoped_true_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/BottomMenuColor.vue?vue&type=template&id=627c8f4b&scoped=true&
var BottomMenuColorvue_type_template_id_627c8f4b_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ml-2 mt-2"},[_c('b-button',{attrs:{"size":"sm","variant":_vm.isActive},on:{"click":_vm.setActiveColor}},[_c('div',{class:_vm.colorClass},[_vm._v(_vm._s(this.btnColor))]),_c('span',{staticClass:"small"},[_vm._v(_vm._s(_vm.paddedColorNum))])])],1)}
var BottomMenuColorvue_type_template_id_627c8f4b_scoped_true_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[0]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/BottomMenuColor.vue?vue&type=script&lang=js&
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
var AppConst = __webpack_require__(7297);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[0]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/BottomMenu.vue?vue&type=script&lang=js&


/* harmony default export */ var BottomMenuvue_type_script_lang_js_ = ({
  name: "BottomMenu",
  components: {
    BottomMenuColor: BottomMenuColor
  },
  data: function () {
    return {
      isLoading: false
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
    claimTiles: async function () {
      if (this.$store.state.PlayerInfo.claimableTiles === 0) {
        this.$store.commit('Toast/sendToast', {
          toastName: "zero-claim"
        }); //return;
      }

      this.isLoading = true;

      try {
        await this.$store.dispatch('Ever/claimTiles');
        await this.$store.dispatch('Ever/reloadGame');
      } catch (e) {
        console.log(e);
      }

      this.isLoading = false;
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

      this.isLoading = true;

      try {
        await this.$store.dispatch('Ever/putTiles');
        await this.$store.dispatch('Ever/reloadGame');
      } catch (e) {
        console.log(e);
      }

      this.isLoading = false;
    },
    claimReward: async function () {
      this.isLoading = true;

      try {
        await this.$store.dispatch('Ever/claimReward');
        await this.$store.dispatch('Ever/reloadGame');
      } catch (e) {
        console.log(e);
      }

      this.isLoading = false;
    }
  },
  computed: {
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
    }
  }
});
;// CONCATENATED MODULE: ./src/components/BottomMenu.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_BottomMenuvue_type_script_lang_js_ = (BottomMenuvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/BottomMenu.vue?vue&type=style&index=0&id=9ccd9d46&scoped=true&lang=css&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/BottomMenu.vue?vue&type=style&index=0&id=9ccd9d46&scoped=true&lang=css&

;// CONCATENATED MODULE: ./src/components/BottomMenu.vue



;


/* normalize component */

var BottomMenu_component = (0,componentNormalizer/* default */.Z)(
  components_BottomMenuvue_type_script_lang_js_,
  BottomMenuvue_type_template_id_9ccd9d46_scoped_true_render,
  BottomMenuvue_type_template_id_9ccd9d46_scoped_true_staticRenderFns,
  false,
  null,
  "9ccd9d46",
  null
  
)

/* harmony default export */ var BottomMenu = (BottomMenu_component.exports);
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/ToastManager.vue?vue&type=template&id=6abacf25&scoped=true&
var ToastManagervue_type_template_id_6abacf25_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('b-toast',{attrs:{"id":"wrong-color","auto-hide-delay":"3000","variant":"secondary","solid":"","toaster":"b-toaster-top-center"},scopedSlots:_vm._u([{key:"toast-title",fn:function(){return [_c('div',[_vm._v("Choose Another Color! ")])]},proxy:true}])},[_vm._v(" Please choose color "),_c('div',{class:_vm._getColorClassByNum(this.correctColorNum)},[_vm._v(_vm._s(_vm.correctColorNum))]),_vm._v(" from the bottom menu. ")]),_c('b-toast',{attrs:{"id":"zero-tiles-left","auto-hide-delay":"5000","variant":"secondary","solid":"","toaster":"b-toaster-top-center"},scopedSlots:_vm._u([{key:"toast-title",fn:function(){return [_c('div',[_vm._v("Use Another Color! ")])]},proxy:true}])},[_vm._v(" Unfortunately, "),_c('b',[_vm._v("0 tiles")]),_vm._v(" of color "),_c('div',{class:_vm._getColorClassByNum(this.correctColorNum)},[_vm._v(_vm._s(_vm.correctColorNum))]),_vm._v(" left."),_c('br'),_vm._v(" Please "),_c('b',[_vm._v("choose")]),_vm._v(" another color from the bottom menu"),_c('br'),_c('video',{attrs:{"autoplay":"true","width":"118","height":"53"}},[_c('source',{attrs:{"src":"/assets/video/zero_tiles_left.mp4","type":"video/mp4"}}),_c('source',{attrs:{"src":"/assets/video/zero_tiles_left.webm","type":"video/webm"}}),_c('source',{attrs:{"src":"/assets/video/zero_tiles_left.ogv","type":"video/ogg"}})]),_c('br'),_vm._v(" or "),_c('b',[_vm._v("CLAIM")]),_vm._v(" more tiles. ")]),_c('b-toast',{attrs:{"id":"50-tiles-put","auto-hide-delay":"3000","variant":"secondary","solid":"","toaster":"b-toaster-top-center"},scopedSlots:_vm._u([{key:"toast-title",fn:function(){return [_c('div',[_vm._v("Tiles Limit Reached! ")])]},proxy:true}])},[_vm._v(" You have already reached the limit of "),_c('b',[_vm._v("50 tiles")]),_vm._v(", please submit them before putting more tiles. ")]),_c('b-toast',{attrs:{"id":"zero-balance","auto-hide-delay":"2000","variant":"secondary","solid":"","toaster":"b-toaster-top-center"},scopedSlots:_vm._u([{key:"toast-title",fn:function(){return [_c('div',[_vm._v("Your Balance is 0 PILE! ")])]},proxy:true}])},[_vm._v(" Your balance is "),_c('b',[_vm._v("0 PILE")]),_vm._v(". Please top-up your balance by clicking the "),_c('span',{staticClass:"dark-box p-1"},[_c('i',{staticClass:"bi bi-cart-check-fill color-primary"})]),_vm._v(" icon. ")]),_c('b-toast',{attrs:{"id":"zero-claim","auto-hide-delay":"10000","variant":"secondary","solid":"","toaster":"b-toaster-top-center"},scopedSlots:_vm._u([{key:"toast-title",fn:function(){return [_c('div',[_vm._v("You have "),_c('b',[_vm._v("0 tiles")]),_vm._v(" to claim! ")])]},proxy:true}])},[_c('p',[_vm._v("Please wait for 15 minutes or so to get the first color tiles.")]),_c('p',[_c('b',[_vm._v("NOTE:")]),_vm._v("The more you wait, the "),_c('b',[_vm._v("more")]),_vm._v(" you receive!")])]),_c('b-toast',{attrs:{"id":"not-enough-pile-to-put","auto-hide-delay":"10000","variant":"secondary","solid":"","toaster":"b-toaster-top-center"},scopedSlots:_vm._u([{key:"toast-title",fn:function(){return [_c('div',[_vm._v("Your PILE balance is not enough to put! ")])]},proxy:true}])},[_c('p',[_vm._v("Currently you have "),_c('i',[_vm._v(_vm._s(_vm.balance)+" PILE")]),_vm._v(", and the put operation costs "),_c('b',[_vm._v(_vm._s(_vm.payPerMove)+" PILE")]),_vm._v(".")]),_c('p',[_vm._v("Please top-up your balance!")])])],1)}
var ToastManagervue_type_template_id_6abacf25_scoped_true_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[0]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/ToastManager.vue?vue&type=script&lang=js&
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
      payPerMove: 0
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
      }

      this.$bvToast.show(payload.toastName);
    }
  }
};
/* harmony default export */ var ToastManagervue_type_script_lang_js_ = (ToastManager);
;// CONCATENATED MODULE: ./src/components/ToastManager.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ToastManagervue_type_script_lang_js_ = (ToastManagervue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/ToastManager.vue?vue&type=style&index=0&id=6abacf25&scoped=true&lang=css&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/ToastManager.vue?vue&type=style&index=0&id=6abacf25&scoped=true&lang=css&

;// CONCATENATED MODULE: ./src/components/ToastManager.vue



;


/* normalize component */

var ToastManager_component = (0,componentNormalizer/* default */.Z)(
  components_ToastManagervue_type_script_lang_js_,
  ToastManagervue_type_template_id_6abacf25_scoped_true_render,
  ToastManagervue_type_template_id_6abacf25_scoped_true_staticRenderFns,
  false,
  null,
  "6abacf25",
  null
  
)

/* harmony default export */ var components_ToastManager = (ToastManager_component.exports);
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/TopMenu.vue?vue&type=template&id=e49b09d2&scoped=true&
var TopMenuvue_type_template_id_e49b09d2_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{attrs:{"id":"top-menu-logo"}},[_c('b-modal',{attrs:{"id":"standings-table","hide-footer":"","title":"Standings"}},[_c('b-container',{staticClass:"p-0",attrs:{"fluid":""}},[_c('b-row',[_c('b-col',{staticClass:"font-weight-bold",attrs:{"cols":"3"}},[_vm._v("Place")]),_c('b-col',{staticClass:"font-weight-bold",attrs:{"cols":"3"}},[_vm._v("Wallet")]),_c('b-col',{staticClass:"font-weight-bold",attrs:{"cols":"3"}},[_vm._v("Captured")]),_c('b-col',{staticClass:"font-weight-bold",attrs:{"cols":"3"}},[_vm._v("Reward")])],1),_vm._l((_vm.$store.state.Game.standings),function(player,index){return _c('b-row',{key:player.playerAddress,class:{active: _vm.isCurrentPlayer(player.playerAddress)}},[_c('b-col',{staticClass:"text-center"},[_vm._v(_vm._s(index + 1)+" ")]),_c('b-col',{staticClass:"text-left"},[_vm._v(_vm._s(_vm._f("short")(player.playerAddress)))]),_c('b-col',[_vm._v(_vm._s(player.captured)+" "),_c('i',{directives:[{name:"show",rawName:"v-show",value:(player.isLast),expression:"player.isLast"}],staticClass:"bi bi-star-fill gold-star small"}),_c('i',{directives:[{name:"show",rawName:"v-show",value:(player.isPrelast),expression:"player.isPrelast"}],staticClass:"bi bi-star gold-star small"})]),_c('b-col',[_vm._v(_vm._s(_vm._f("fixed")(player.reward)))])],1)}),_c('b-row',[_c('b-col',{staticClass:"mt-2"},[(_vm.gameActive)?_c('p',{staticClass:"small"},[_c('b',[_vm._v("Note: ")]),_vm._v("Until the game is completed, rewards for the last (10%) and pre-last (5%) tiles are excluded from the calculation.")]):_vm._e(),(!_vm.gameActive)?_c('p',{staticClass:"small"},[_c('i',{staticClass:"bi bi-star-fill gold-star"}),_vm._v(" = Player claimed the last tile"),_c('br'),_c('i',{staticClass:"bi bi-star gold-star"}),_vm._v(" = Player claimed the pre-last tile ")]):_vm._e()])],1)],2)],1),_c('b-modal',{attrs:{"id":"sale-token","hide-footer":"","title":"Get PILE Tokens!"}},[_c('p',[_vm._v("To get PILE tokens, simply send EVERs to the following address (minimum: 1 EVER)."),_c('br')]),_c('b-input-group',{scopedSlots:_vm._u([{key:"append",fn:function(){return [_c('b-button',{attrs:{"variant":"primary"},on:{"click":_vm.copyAddress}},[_vm._v("Copy")])]},proxy:true}])},[_c('b-form-input',{ref:"tsAddress",attrs:{"value":_vm.saleTokenAddress,"readonly":""},on:{"focus":function($event){return $event.target.select()}}})],1),_c('p',{staticClass:"mt-3"},[_vm._v("You will receive "),_c('b',[_vm._v("X10")]),_vm._v(" PILE tokens. For example, if you send 10 EVER, you will receive 100 PILE. The exchange is automatic, so it won't take longer than 1 minute.")]),_c('p',[_c('b',[_vm._v("NOTE:")]),_vm._v(" The more PILE you have, the "),_c('b',[_vm._v("quicker")]),_vm._v(" you'll farm colored tiles.")])],1),_c('img',{staticClass:"logo-img",attrs:{"src":__webpack_require__(9574),"alt":"PileBlocks"}})],1),_c('div',{attrs:{"id":"top-menu-player-info"}},[_c('p',{staticClass:"mb-0"},[_c('span',{staticClass:"text-faded"},[_vm._v("Balance: ")]),_c('fancy-number',{attrs:{"value":this.$store.getters["PlayerInfo/getBalance"]}}),_c('i',{staticClass:"bi bi-cart-check-fill color-primary pl-1",on:{"click":function($event){return _vm.$bvModal.show('sale-token')}}})],1),_c('div',{staticClass:"reward-grid"},[_vm._m(0),_c('div',{staticClass:"reward-value"},[_c('div',{staticClass:"d-inline-block position-absolute"},[_c('fancy-number',{attrs:{"value":this.$store.getters["Game/getReward"]}}),_vm._v(" ("),_c('span',{class:_vm.rewardProcentClass()},[_vm._v(_vm._s(_vm.rewardProcent)+"%")]),_vm._v(") "),_c('div',{class:_vm.setAnimationClass},[_vm._v(_vm._s(_vm.animatedReward))])],1)])])]),_c('div',{attrs:{"id":"top-menu-game-stats"}},[_c('b-button',{attrs:{"size":"sm","variant":"primary"},on:{"click":function($event){return _vm.$bvModal.show('standings-table')}}},[_c('i',{staticClass:"bi bi-person-lines-fill"}),_vm._v(" "+_vm._s(_vm.$store.state.Game.standings.length)+" ")])],1),_c('div',{attrs:{"id":"top-menu-game-reload"}},[_c('b-button',{attrs:{"size":"sm","variant":"primary"}},[_c('i',{directives:[{name:"show",rawName:"v-show",value:(!_vm.isLoading),expression:"!isLoading"}],staticClass:"bi bi-arrow-clockwise",on:{"click":_vm.reloadGame}}),_c('b-spinner',{directives:[{name:"show",rawName:"v-show",value:(_vm.isLoading),expression:"isLoading"}],attrs:{"small":""}})],1)],1)])}
var TopMenuvue_type_template_id_e49b09d2_scoped_true_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"reward-label"},[_c('span',{staticClass:"text-faded pr-1"},[_vm._v("Your Reward: ")])])}]


;// CONCATENATED MODULE: ./src/components/TopMenu.vue?vue&type=template&id=e49b09d2&scoped=true&

// EXTERNAL MODULE: ./node_modules/bignumber.js/bignumber.js
var bignumber = __webpack_require__(4431);
var bignumber_default = /*#__PURE__*/__webpack_require__.n(bignumber);
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/FancyNumber.vue?vue&type=template&id=191f2c3a&scoped=true&
var FancyNumbervue_type_template_id_191f2c3a_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"d-inline"},[_vm._v(" "+_vm._s(_vm.valueInt)),_c('small',[_vm._v("."+_vm._s(_vm.valueFloat))])])}
var FancyNumbervue_type_template_id_191f2c3a_scoped_true_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[0]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/FancyNumber.vue?vue&type=script&lang=js&
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
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[0]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/TopMenu.vue?vue&type=script&lang=js&




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
      saleTokenAddress: AppConst/* SALE_TOKEN */.G
    };
  },
  methods: {
    animateReward: function (isRaising) {
      this.animatedReward = new (bignumber_default())(this.$store.getters["Game/getReward"]).toFixed(2);
      this.setAnimationClass += "reward-animation ";

      if (isRaising) {
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
    rewardProcentClass: function () {
      const rewardProcent = parseFloat(this.rewardProcent);

      switch (true) {
        case rewardProcent < 5:
          return "low-procent";

        case rewardProcent < 10:
          return "medium-procent";
      }

      return "high-procent";
    },
    reloadGame: async function () {
      this.isLoading = true;
      await this.$store.dispatch('Ever/reloadGame');
      this.isLoading = false;
    },
    copyAddress: function () {
      this.$refs.tsAddress.focus();
      document.execCommand('copy');
    }
  },
  watch: {
    rewardChange: function (newReward, oldReward) {
      if (oldReward !== 0) {
        this.animateReward(newReward > oldReward);
      }
    }
  },
  computed: {
    rewardChange: function () {
      return this.$store.getters["Game/getReward"];
    },
    rewardProcent: function () {
      if (this.$store.state.Game.status !== AppConst/* GAME_STATUS_COMPLETED */.K$) {
        return new (bignumber_default())(this.$store.getters["Game/getReward"] * 100 / this.$store.state.Game.totalRewardDynamic).toFixed(1);
      } else {
        return new (bignumber_default())(this.$store.getters["Game/getReward"] * 100 / this.$store.state.Game.totalReward).toFixed(1);
      }
    },
    gameActive: function () {
      return this.$store.state.Game.status !== AppConst/* GAME_STATUS_COMPLETED */.K$;
    }
  },

  mounted() {
    this.$store.commit('Game/calculateRewards');
  }

});
;// CONCATENATED MODULE: ./src/components/TopMenu.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_TopMenuvue_type_script_lang_js_ = (TopMenuvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/TopMenu.vue?vue&type=style&index=0&id=e49b09d2&scoped=true&lang=css&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/TopMenu.vue?vue&type=style&index=0&id=e49b09d2&scoped=true&lang=css&

;// CONCATENATED MODULE: ./src/components/TopMenu.vue



;


/* normalize component */

var TopMenu_component = (0,componentNormalizer/* default */.Z)(
  components_TopMenuvue_type_script_lang_js_,
  TopMenuvue_type_template_id_e49b09d2_scoped_true_render,
  TopMenuvue_type_template_id_e49b09d2_scoped_true_staticRenderFns,
  false,
  null,
  "e49b09d2",
  null
  
)

/* harmony default export */ var TopMenu = (TopMenu_component.exports);
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/EverLoader.vue?vue&type=template&id=1f6b5d34&scoped=true&
var EverLoadervue_type_template_id_1f6b5d34_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div')}
var EverLoadervue_type_template_id_1f6b5d34_scoped_true_staticRenderFns = []


// EXTERNAL MODULE: ./node_modules/everscale-inpage-provider/dist/index.js
var dist = __webpack_require__(8511);
// EXTERNAL MODULE: ./src/contract_wrappers/PBGame.js
var PBGame = __webpack_require__(9860);
// EXTERNAL MODULE: ./src/contract_wrappers/TokenRoot.js
var TokenRoot = __webpack_require__(2326);
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
  tokenRoot: {
    getWallet: async function (tRoot, playerAddress) {
      const result = await tRoot.methods.walletOf({
        answerId: 1,
        walletOwner: playerAddress
      }).call();
      return result.value0.toString();
    }
  },
  host: {
    getCurrentGameId: async function (gHost) {
      const result = await gHost.methods.currentGameId({}).call();
      return parseInt(result.currentGameId);
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
    getTiles: async function (walletContract) {
      const result = await walletContract.methods.showTiles({}).call();
      return parseInt(result.value0);
    },
    putTiles: async function (walletContract, genesis, gameHost, gameAddress, payPerMove, playerAddress, tiles) {
      const pAddress = new dist.Address(playerAddress);
      await walletContract.methods.putTiles({
        genesis: genesis,
        gameHost: gameHost,
        gameAddress: gameAddress,
        tokensNum: payPerMove,
        tiles: tiles
      }).send({
        from: pAddress,
        amount: '2000000000',
        bounce: true
      });
    },
    claimTiles: async function (walletContract, playerAddress, gameAddress) {
      const pAddress = new dist.Address(playerAddress);
      await walletContract.methods.claimTiles({
        gameAddress: gameAddress
      }).send({
        from: pAddress,
        amount: '1000000000',
        bounce: true
      });
    }
  }
};
// EXTERNAL MODULE: ./src/contract_wrappers/GameHost.js
var GameHost = __webpack_require__(3479);
// EXTERNAL MODULE: ./src/contract_wrappers/GameIndex.js
var GameIndex = __webpack_require__(4338);
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
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[0]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/EverLoader.vue?vue&type=script&lang=js&







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
        }

        const gameIndexAddress = await EverAPI.host._getIndexAddress(host, currentGameId - 1);
        const gameIndex = new ever.Contract(GameIndex.GameIndexContract.abi, gameIndexAddress);
        const currentGameAddress = await EverAPI.index.getGameAddress(gameIndex);
        const game = new ever.Contract(PBGame.PBGameContract.abi, currentGameAddress);
        this.$store.commit("Ever/updateGame", game);
      }
    },
    setTemplate: async function () {
      let rawTemplate = await EverAPI.game.getTemplate(this.$store.state.Ever.game);
      let newTemplate = {};

      _dataToNumbers(rawTemplate, newTemplate);

      this.$store.commit("Game/updateTemplate", newTemplate);
    },
    setGameColors: function (renderConfig) {
      let sheet = document.createElement('style');

      for (let i = 0; i < 5; i++) {
        let color = parseInt(renderConfig[i + 4]).toString(16);
        if (i === 0) sheet.innerHTML += `.color-${i + 1} {background-color: #${color} !important; color: #1e2228} `;else sheet.innerHTML += `.color-${i + 1} {background-color: #${color} !important; color: #fefefe} `;
      }

      document.body.appendChild(sheet);
    },
    setGameName: function (gameInfo) {
      this.$store.commit("Game/updateName", gameInfo.gameName);
    },
    setGameInitConfig: function (gameInfo) {
      this.$store.commit("Game/updateInitConfig", {
        payPerMove: parseInt(gameInfo.renderConfig[2])
      });
    },
    setRewardPerGame: async function () {
      let totalReward = await EverAPI.host.getRewardPerGame(this.$store.state.Ever.host);
      let totalRewardDynamic = totalReward * 85 / 100;
      this.$store.commit("Game/updateTotalReward", {
        totalReward: totalReward,
        totalRewardDynamic: totalRewardDynamic
      });
    },
    setTotalFieldFragments: function (renderConfig) {
      let totalFragments = parseInt(renderConfig[0]) * parseInt(renderConfig[1]);
      this.$store.commit('Game/updateTotalFieldFragments', totalFragments);
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
    setGameStartTime: function (gameInfo) {
      this.$store.commit("Game/updateGameStartTime", parseInt(gameInfo.gameStartTime));
      return parseInt(gameInfo.gameStartTime);
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
    await this.initGame(ever);
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
    this.setGameInitConfig(gameInfo);
    await this.setRewardPerGame();
    await this.setPlayerAddress();
    await this.setPlayerWallet();
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
  EverLoadervue_type_template_id_1f6b5d34_scoped_true_render,
  EverLoadervue_type_template_id_1f6b5d34_scoped_true_staticRenderFns,
  false,
  null,
  "1f6b5d34",
  null
  
)

/* harmony default export */ var EverLoader = (EverLoader_component.exports);
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/GameCountdown.vue?vue&type=template&id=03b7f5fa&scoped=true&
var GameCountdownvue_type_template_id_03b7f5fa_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"game-error-notification fancy-font stat-block"},[_vm._m(0),_c('div',{staticClass:"d-flex width-100 justify-content-evenly mb-4"},[_c('div',{staticClass:"time-cell d-flex flex-column"},[_c('div',{staticClass:"text-center countdown-value"},[_vm._v(_vm._s(_vm.rDate.rDays))]),_c('div',{staticClass:"text-uppercase"},[_vm._v("days")])]),_c('div',{staticClass:"time-cell d-flex flex-column"},[_c('div',{staticClass:"text-center countdown-value"},[_vm._v(_vm._s(_vm.rDate.rHours))]),_c('div',{staticClass:"text-uppercase"},[_vm._v("hours")])]),_c('div',{staticClass:"time-cell d-flex flex-column"},[_c('div',{staticClass:"text-center countdown-value"},[_vm._v(_vm._s(_vm.rDate.rMinutes))]),_c('div',{staticClass:"text-uppercase"},[_vm._v("min")])]),_c('div',{staticClass:"time-cell d-flex flex-column"},[_c('div',{staticClass:"text-center countdown-value"},[_vm._v(_vm._s(_vm.rDate.rSeconds))]),_c('div',{staticClass:"text-uppercase"},[_vm._v("sec")])])]),_c('div',{staticClass:"text-center"},[_vm._v(" Please reload the page once ready.")])])}
var GameCountdownvue_type_template_id_03b7f5fa_scoped_true_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"text-center lead mb-4"},[_vm._v(" The new game will "),_c('span',{staticClass:"emphasis"},[_vm._v("start")]),_vm._v(" in:")])}]


;// CONCATENATED MODULE: ./src/components/GameCountdown.vue?vue&type=template&id=03b7f5fa&scoped=true&

;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[0]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/GameCountdown.vue?vue&type=script&lang=js&
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
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/GameCountdown.vue?vue&type=style&index=0&id=03b7f5fa&scoped=true&lang=css&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/GameCountdown.vue?vue&type=style&index=0&id=03b7f5fa&scoped=true&lang=css&

;// CONCATENATED MODULE: ./src/components/GameCountdown.vue



;


/* normalize component */

var GameCountdown_component = (0,componentNormalizer/* default */.Z)(
  components_GameCountdownvue_type_script_lang_js_,
  GameCountdownvue_type_template_id_03b7f5fa_scoped_true_render,
  GameCountdownvue_type_template_id_03b7f5fa_scoped_true_staticRenderFns,
  false,
  null,
  "03b7f5fa",
  null
  
)

/* harmony default export */ var GameCountdown = (GameCountdown_component.exports);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[0]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App.vue?vue&type=script&lang=js&
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
    }
  },
  data: function () {
    return {};
  }
};
/* harmony default export */ var Appvue_type_script_lang_js_ = (App);
;// CONCATENATED MODULE: ./src/App.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_Appvue_type_script_lang_js_ = (Appvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App.vue?vue&type=style&index=0&lang=css&
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
;// CONCATENATED MODULE: ./src/router/index.js

 //import Home from '../views/Home'
//import FieldTilesPart from '../views/FieldTilesPart'

const Home = () => __webpack_require__.e(/* import() */ 625).then(__webpack_require__.bind(__webpack_require__, 9625));

const FieldTilesPart = () => __webpack_require__.e(/* import() */ 518).then(__webpack_require__.bind(__webpack_require__, 6518));

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
    totalRewardDynamic: 0,
    remainingTiles: 0,
    isMainScreen: true,
    field: {},
    template: {},
    standings: [],
    tilesToPut: [],
    name: "",
    cachedReward: 0,
    status: 1,
    gameStartTime: 0 //   field: {'0': [[4, 4, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [4, 4, 4, 4, 1, 1, 3, 3, 1, 1, 1, 3, 3, 3, 1, 3], [4, 4, 4, 1, 1, 1, 3, 1, 3, 1, 1, 3, 1, 3, 1, 1], [4, 1, 1, 1, 1, 1, 5, 3, 1, 1, 5, 3, 3, 3, 1, 1], [4, 1, 1, 1, 1, 1, 3, 1, 3, 1, 3, 1, 1, 3, 1, 1], [4, 1, 1, 1, 1, 1, 3, 1, 3, 1, 3, 1, 1, 3, 1, 3], [4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]], '1': [[1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1], [1, 1, 1, 1, 1, 1, 1, 2, 1, 5, 5, 1, 1, 1, 1, 1], [1, 1, 2, 1, 1, 1, 1, 2, 1, 5, 1, 4, 1, 1, 1, 1], [1, 1, 1, 1, 1, 2, 1, 2, 1, 5, 1, 4, 2, 2, 2, 2], [1, 1, 1, 1, 1, 1, 1, 2, 1, 5, 5, 4, 2, 2, 2, 2], [1, 1, 2, 1, 2, 1, 1, 2, 2, 5, 1, 4, 2, 2, 2, 2], [1, 1, 1, 1, 1, 1, 1, 1, 2, 5, 1, 4, 2, 2, 2, 2], [1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 5, 5, 2, 2, 2, 2]], '2': [[1, 1, 2, 1, 1, 3, 1, 1, 1, 2, 5, 5, 4, 2, 2, 2], [1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 5, 4, 2, 2, 2], [1, 1, 1, 1, 1, 2, 1, 3, 1, 2, 2, 5, 4, 2, 2, 2], [1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 2, 5, 5, 5, 2, 5], [1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 5, 4, 5], [1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2, 5, 5, 5], [4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 5, 5, 5], [4, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 5, 5]], '3': [[4, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 5, 5], [4, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 3, 1, 2, 5, 5], [4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 4, 1], [4, 4, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5], [4, 4, 4, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 2, 1, 1], [4, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2], [4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1]], '4': [[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 5], [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 2, 2, 2, 4, 5], [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 3, 5, 5, 4, 5], [2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 5], [2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 4, 4], [2, 2, 2, 3, 4, 5, 3, 5, 5, 5, 5, 5, 5, 5, 4, 4], [2, 2, 2, 5, 3, 5, 5, 3, 1, 1, 4, 1, 5, 5, 4, 4], [2, 2, 4, 5, 5, 5, 1, 5, 1, 5, 1, 1, 5, 1, 5, 4]], '5': [[2, 2, 2, 5, 5, 5, 5, 4, 3, 4, 5, 5, 5, 1, 4, 5], [2, 2, 2, 5, 5, 4, 5, 4, 4, 5, 5, 5, 4, 1, 5, 4], [2, 2, 4, 4, 5, 3, 5, 5, 4, 3, 5, 3, 4, 5, 4, 5], [2, 2, 5, 4, 4, 4, 4, 5, 3, 4, 4, 5, 4, 3, 3, 5], [2, 3, 5, 2, 1, 1, 1, 1, 3, 5, 5, 5, 3, 5, 5, 4], [2, 4, 5, 1, 1, 1, 1, 1, 1, 2, 5, 5, 5, 4, 4, 5], [2, 4, 2, 1, 1, 1, 1, 1, 1, 3, 4, 5, 4, 4, 4, 5], [2, 5, 1, 1, 1, 1, 1, 1, 1, 4, 5, 4, 5, 5, 4, 4]], '6': [[2, 3, 4, 1, 1, 1, 1, 3, 3, 4, 3, 4, 5, 4, 3, 3], [2, 3, 4, 1, 1, 5, 5, 5, 4, 5, 2, 2, 4, 3, 5, 5], [2, 4, 3, 4, 1, 4, 4, 4, 4, 5, 5, 4, 1, 2, 5, 4], [2, 5, 5, 3, 1, 1, 3, 4, 5, 4, 4, 2, 4, 1, 5, 4], [2, 1, 3, 1, 1, 1, 1, 4, 4, 5, 2, 1, 4, 1, 5, 3], [2, 1, 1, 1, 1, 1, 1, 1, 3, 1, 5, 5, 4, 1, 5, 5], [2, 1, 3, 1, 1, 1, 1, 1, 3, 1, 2, 1, 5, 3, 5, 4], [2, 1, 4, 3, 1, 1, 1, 1, 3, 1, 1, 1, 1, 4, 4, 4]], '7': [[2, 2, 3, 3, 3, 2, 1, 1, 3, 1, 1, 1, 1, 5, 4, 5], [2, 2, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 3, 4, 4, 5], [2, 2, 1, 3, 3, 1, 1, 1, 1, 1, 1, 3, 3, 4, 3, 5], [2, 2, 2, 3, 3, 4, 3, 1, 1, 1, 1, 3, 3, 4, 5, 5], [2, 2, 2, 3, 4, 5, 1, 1, 1, 1, 3, 4, 3, 4, 4, 5], [2, 2, 2, 1, 1, 1, 1, 1, 3, 3, 3, 5, 4, 4, 4, 5], [2, 2, 2, 1, 1, 1, 1, 3, 2, 5, 4, 4, 4, 4, 3, 5], [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 4, 3, 4, 5, 5]], '8': [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4], [3, 3, 3, 1, 1, 3, 1, 1, 3, 3, 1, 1, 1, 4, 4, 4], [1, 3, 1, 1, 3, 1, 3, 1, 3, 1, 3, 1, 1, 1, 4, 4], [3, 1, 1, 1, 3, 1, 3, 1, 3, 3, 1, 1, 1, 1, 1, 4], [3, 1, 1, 1, 3, 1, 3, 1, 3, 1, 3, 1, 1, 1, 1, 4], [3, 3, 3, 1, 1, 3, 1, 1, 3, 1, 3, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1]], '9': [[1, 1, 2, 1, 1, 1, 5, 5, 5, 5, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 5, 5, 1, 5, 5, 5, 1, 1, 2, 1, 1], [1, 1, 1, 1, 5, 5, 5, 1, 5, 5, 5, 1, 1, 1, 1, 1], [2, 2, 2, 2, 5, 5, 5, 5, 5, 5, 5, 2, 1, 1, 2, 1], [2, 2, 2, 5, 5, 5, 5, 5, 5, 2, 2, 2, 1, 1, 1, 1], [2, 2, 2, 5, 5, 4, 4, 4, 2, 2, 2, 1, 1, 1, 1, 1], [2, 2, 5, 5, 4, 4, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1], [2, 4, 5, 4, 4, 2, 2, 2, 2, 1, 1, 3, 1, 2, 1, 1]], '10': [[2, 5, 5, 4, 5, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1], [5, 5, 4, 4, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 3, 1], [5, 5, 4, 2, 2, 2, 3, 1, 3, 1, 1, 1, 1, 1, 1, 1], [5, 4, 5, 2, 2, 1, 1, 3, 1, 1, 1, 2, 1, 1, 1, 1], [5, 5, 2, 2, 3, 1, 1, 1, 1, 3, 1, 3, 1, 1, 1, 1], [5, 4, 2, 2, 1, 1, 3, 1, 1, 2, 1, 1, 1, 2, 1, 1], [4, 4, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4], [4, 2, 2, 1, 1, 1, 1, 3, 1, 1, 1, 2, 1, 1, 1, 4]], '11': [[4, 2, 2, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4], [4, 2, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 1, 4], [2, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4], [5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4], [1, 1, 1, 2, 1, 1, 3, 1, 1, 1, 1, 2, 1, 4, 4, 4], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4], [1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4]], '12': [[5, 5, 5, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], [5, 5, 5, 5, 5, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], [5, 5, 5, 5, 5, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], [5, 5, 5, 5, 4, 4, 5, 2, 2, 2, 2, 2, 2, 2, 2, 2], [3, 4, 4, 5, 5, 5, 5, 5, 2, 2, 2, 2, 2, 2, 2, 2], [4, 4, 4, 3, 4, 5, 4, 5, 4, 2, 2, 2, 2, 2, 2, 2], [5, 4, 3, 5, 3, 3, 5, 5, 5, 5, 2, 2, 2, 2, 2, 2], [3, 5, 4, 3, 4, 4, 5, 3, 4, 4, 2, 2, 2, 2, 2, 2]], '13': [[4, 5, 5, 5, 5, 4, 4, 5, 3, 3, 2, 2, 2, 2, 2, 2], [4, 5, 4, 5, 5, 5, 5, 3, 3, 4, 4, 2, 2, 2, 2, 2], [5, 4, 5, 3, 4, 3, 3, 4, 4, 3, 5, 2, 2, 2, 2, 2], [4, 4, 4, 3, 4, 3, 3, 5, 3, 5, 4, 5, 2, 2, 2, 2], [3, 4, 3, 4, 5, 4, 4, 3, 4, 4, 4, 3, 4, 2, 3, 4], [5, 4, 4, 4, 4, 4, 4, 3, 4, 3, 5, 4, 4, 3, 4, 4], [5, 5, 5, 4, 5, 3, 4, 3, 4, 3, 3, 2, 4, 3, 4, 5], [4, 5, 3, 4, 5, 5, 3, 5, 4, 4, 3, 5, 1, 1, 1, 5]], '14': [[5, 4, 4, 5, 4, 4, 5, 4, 4, 4, 4, 5, 5, 5, 5, 5], [3, 4, 5, 3, 4, 5, 3, 3, 3, 3, 3, 3, 3, 4, 4, 2], [4, 4, 5, 4, 5, 3, 4, 3, 3, 4, 4, 5, 5, 5, 5, 2], [4, 5, 5, 4, 5, 5, 3, 5, 3, 3, 5, 5, 4, 4, 3, 3], [5, 3, 3, 4, 5, 5, 3, 5, 3, 4, 5, 3, 3, 2, 2, 2], [2, 4, 4, 3, 4, 3, 4, 5, 3, 5, 3, 3, 5, 2, 2, 2], [4, 5, 5, 3, 5, 4, 4, 3, 4, 4, 3, 5, 2, 2, 2, 2], [1, 4, 3, 1, 3, 4, 4, 5, 5, 5, 2, 3, 2, 2, 2, 2]], '15': [[1, 4, 3, 1, 4, 5, 5, 5, 5, 5, 2, 2, 2, 2, 2, 2], [1, 4, 3, 1, 5, 5, 4, 3, 5, 2, 2, 2, 2, 2, 2, 2], [1, 4, 3, 1, 4, 5, 5, 5, 5, 2, 2, 2, 2, 2, 2, 2], [1, 4, 3, 1, 5, 3, 5, 5, 2, 2, 2, 2, 2, 2, 2, 2], [4, 5, 5, 5, 5, 5, 5, 2, 2, 2, 2, 2, 2, 2, 2, 2], [5, 5, 5, 5, 4, 5, 5, 3, 4, 4, 3, 4, 2, 2, 2, 2], [5, 5, 5, 5, 4, 5, 5, 5, 5, 5, 5, 3, 1, 2, 2, 2], [5, 5, 2, 5, 5, 5, 5, 5, 4, 2, 1, 1, 5, 2, 2, 2]]}

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

    updateInitConfig(state, {
      payPerMove
    }) {
      state.payPerMove = payPerMove;
    },

    updateTotalReward(state, {
      totalReward,
      totalRewardDynamic
    }) {
      state.totalReward = totalReward;
      state.totalRewardDynamic = totalRewardDynamic;
    },

    updateStatus(state, newStatus) {
      state.status = newStatus;
    },

    updateTotalFieldFragments(state, totalFieldFragments) {
      state.totalFieldFragments = totalFieldFragments;
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

    calculateRewards(state) {
      state.standings.sort(function (first, second) {
        if (first.captured > second.captured || first.captured < second.captured) {
          return second.captured - first.captured;
        }

        if (first.captured === second.captured) {
          return first.lastPutTime - second.lastPutTime;
        }
      });

      if (state.status === AppConst/* GAME_STATUS_COMPLETED */.K$) {
        return;
      }

      let numberOfTiles = 0;
      let rewardCoeff = 0;

      if (state.standings.length > 0) {
        numberOfTiles = state.standings.map(player => player.captured).reduce((total, item) => total + item);

        if (numberOfTiles > 1) {
          rewardCoeff = state.totalRewardDynamic * 2 / (numberOfTiles - 1);
        }
      }

      let lastTile = 0;
      const lastTileReward = state.totalReward / 10;
      const prelastTileReward = state.totalReward / 20;

      for (let playerStat of state.standings) {
        playerStat.reward = 0;

        if (playerStat.isLast) {
          playerStat.reward += lastTileReward;
        }

        if (playerStat.isPrelast) {
          playerStat.reward += prelastTileReward;
        }

        playerStat.reward += playerStat.captured * (numberOfTiles * 2 - (playerStat.captured + 1 + 2 * lastTile)) * (rewardCoeff / (numberOfTiles * 2));
        lastTile += playerStat.captured;
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
      let player = state.standings.find(player => player.walletAddress === rootState.PlayerInfo.walletAddress);

      if (!player) {
        const newPlayer = {
          playerAddress: rootState.PlayerInfo.playerAddress,
          walletAddress: rootState.PlayerInfo.walletAddress,
          captured: 1,
          reward: 0,
          isLast: state.remainingTiles === 0,
          isPrelast: state.remainingTiles === 1,
          lastPutTime: Date.now(),
          isReceived: false
        };
        state.standings.push(newPlayer);
      } else {
        player.captured += 1;
        player.isLast = state.remainingTiles === 0;
        player.isPrelast = state.remainingTiles === 1;
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
      let player = state.standings.find(player => player.walletAddress === rootState.PlayerInfo.walletAddress);
      player.captured -= 1;
      commit('calculateRewards');
    },

    updateRewardCache({
      state,
      rootState
    }) {
      for (let playerStat of state.standings) {
        if (playerStat.playerAddress === rootState.PlayerInfo.playerAddress) {
          state.cachedReward = playerStat.reward;
        }
      }
    }

  },
  getters: {
    getCapturedTiles(state, getters, rootState) {
      const player = state.standings.find(player => player.walletAddress === rootState.PlayerInfo.walletAddress);
      return player ? player.captured : 0;
    },

    getReward(state, getters, rootState) {
      const player = state.standings.find(player => player.walletAddress === rootState.PlayerInfo.walletAddress);
      return player ? player.reward : 0;
    },

    isReceivedReward(state, getters, rootState) {
      const player = state.standings.find(player => player.walletAddress === rootState.PlayerInfo.walletAddress);
      return player ? player.isReceived : false;
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
    claimableTiles: 0
  },
  mutations: {
    updateColors(state, newColors) {
      state.colors = newColors;
    },

    updateWalletAddress(state, newWalletAddress) {
      state.walletAddress = newWalletAddress;
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
var TokenWallet = __webpack_require__(9126);
;// CONCATENATED MODULE: ./src/store/modules/Ever.js






const Ever = {
  namespaced: true,
  state: {
    api: null,
    isLoading: true,
    loadingStatus: 0,
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
        tmpPlayer.isLast = player[1].isLast;

        if (tmpPlayer.playerAddress === rootState.PlayerInfo.playerAddress && rootState.Game.status !== AppConst/* GAME_STATUS_COMPLETED */.K$) {
          tmpPlayer.reward = rootState.Game.cachedReward;
        } else {
          tmpPlayer.reward = new (bignumber_default())(player[1].reward).dividedBy(1e9).toNumber();
        }

        tmpPlayer.isPrelast = player[1].isPrelast;
        tmpPlayer.lastPutTime = parseInt(player[1].lastPutTime);
        tmpPlayer.walletAddress = player[1].walletAddress.toString();
        tmpPlayer.isReceived = player[1].isReceived;
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
      dispatch,
      rootState
    }) {
      let ever = rootState.Ever.api;
      let isDeployed = await dispatch('isWalletDeployed');

      if (isDeployed) {
        const walletAddress = new dist.Address(rootState.PlayerInfo.walletAddress);
        const wallet = new ever.Contract(TokenWallet.TokenWalletContract.abi, walletAddress);
        commit("PlayerInfo/updateClaimableTiles", await EverAPI.wallet.getTiles(wallet), {
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
      await dispatch('updateGameStatus');
      await dispatch('setStandings');
      await dispatch('setRemainingTiles');
      await dispatch('setWalletBalance');
      await dispatch('setClaimTiles');
      await dispatch('updateColors');
      commit('Game/calculateRewards', null, {
        root: true
      });
      await dispatch('Game/updateRewardCache', null, {
        root: true
      });
      await dispatch('setField');
    },

    async claimTiles({
      state,
      rootState
    }) {
      const ever = rootState.Ever.api;
      const walletAddress = new dist.Address(rootState.PlayerInfo.walletAddress);
      const wallet = new ever.Contract(TokenWallet.TokenWalletContract.abi, walletAddress);
      await EverAPI.wallet.claimTiles(wallet, rootState.PlayerInfo.playerAddress, state.game.address.toString());
    },

    async putTiles({
      state,
      rootState
    }) {
      const ever = rootState.Ever.api;
      const walletAddress = new dist.Address(rootState.PlayerInfo.walletAddress);
      const wallet = new ever.Contract(TokenWallet.TokenWalletContract.abi, walletAddress);
      await EverAPI.wallet.putTiles(wallet, AppConst/* GENESIS_ADDRESS */.je, AppConst/* HOST_ADDRESS */.rb, state.game.address.toString(), rootState.Game.payPerMove * 1e9, rootState.PlayerInfo.playerAddress, rootState.Game.tilesToPut);
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
;// CONCATENATED MODULE: ./src/main.js








vue_runtime_esm["default"].config.productionTip = false; // Make BootstrapVue available throughout your project

vue_runtime_esm["default"].use(esm/* BootstrapVue */.XG7); // Optionally install the BootstrapVue icon components plugin

vue_runtime_esm["default"].use(icons_plugin/* IconsPlugin */.A7);
vue_runtime_esm["default"].use(toast/* ToastPlugin */.m$);
new vue_runtime_esm["default"]({
  router: src_router,
  store: store,
  render: h => h(src_App)
}).$mount('#app');

/***/ }),

/***/ 9574:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "img/logo.c7005e48.svg";

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
/******/ 			return "js/" + chunkId + "-legacy." + {"518":"2c88d5f9","625":"9c53d0e2"}[chunkId] + ".js";
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.miniCssF = function(chunkId) {
/******/ 			// return url for filenames based on template
/******/ 			return "css/" + chunkId + "." + {"518":"18800b94","625":"5258cb8c"}[chunkId] + ".css";
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
/******/ 			var cssChunks = {"518":1,"625":1};
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [998], function() { return __webpack_require__(2824); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;