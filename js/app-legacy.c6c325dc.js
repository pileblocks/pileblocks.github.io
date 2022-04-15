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
const GENESIS_ADDRESS = "0:f2ff16460f846733744e017c598cd62454e7071f3bd788f91256645d45061da1";
const TOKEN_ROOT_ADDRESS = "0:dbba0028173f5b8d09eb597e0cca88cb41a4875efdf8a1815bb31292f150f800";
const SALE_TOKEN = "0:dfbf5ac007b15f8b5eeb2f29873c432719d907119abbd7d659e468df71ce04e5";
const HOST_ADDRESS = "0:3933ef00447b2fba64dff6171bb027ecd0bdc1d17e6159e4afd11bea74031d0e";
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
      "name": "isNextGameEmpty",
      "inputs": [],
      "outputs": [{
        "name": "value0",
        "type": "bool"
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
  codeHash: "4b6794908e2492edb5d2086748598b62c490656dd4e6daacf875d421dc5349d8"
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
  codeHash: "5b753404089d4c6f80ea7d016949151fa8e8f624431787e84df56d4d6c5f047c"
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
  code: "te6ccgECVAEAEbgABCSK7VMg4wMgwP/jAiDA/uMC8gtRAgFTBMbtRNDXScMB+GaJ+Gkh2zzTAAGOHYECANcYIPkBAdMAAZTT/wMBkwL4QuIg+GX5EPKoldMAAfJ64tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAfgjvPK50x8B2zxb2zxJRQRMBHDtRNDXScMB+GYi0NMD+kAw+GmpOAD4RH9vcYIImJaAb3Jtb3Nwb3T4ZOMCIccA4wIh1w0fjoDfIU5NSwMDEOMDAds8W9s8TQRMAiggghBajsy3u+MCIIIQf+7MT7vjAhEFAiggghB822c1u+MCIIIQf+7MT7rjAggGA/Yw+Eby4Ez4Qm7jANMf+ERYb3X4ZNIA0ds8IY4mI9DTAfpAMDHIz4cgzo0EAAAAAAAAAAAAAAAAD/7sxPjPFsoAyXCOL/hEIG8TIW8S+ElVAm8RyHLPQMoAc89AzgH6AvQAgGrPQPhEbxXPCx/KAMn4RG8U4vsAMNs88gBQB08ATvhN+kJvE9cL/8MA+E34SccFsPLj6Phw+ERwb3KAQG90cG9x+GT4UARQIIIQYR8AZLrjAiCCEGZdzp+64wIgghB8TtXPuuMCIIIQfNtnNbrjAg8NCwkD8jD4RvLgTPhCbuMA0x/4RFhvdfhk0ds8IY4mI9DTAfpAMDHIz4cgzo0EAAAAAAAAAAAAAAAAD822c1jPFsoAyXCOL/hEIG8TIW8S+ElVAm8RyHLPQMoAc89AzgH6AvQAgGrPQPhEbxXPCx/KAMn4RG8U4vsAMNs88gBQCk8AUPhN+kJvE9cL/8MA+E34SccFsPLj6H/4cvhEcG9ygEBvdHBvcfhk+FID8DD4RvLgTPhCbuMA0x/4RFhvdfhk0ds8IY4mI9DTAfpAMDHIz4cgzo0EAAAAAAAAAAAAAAAAD8TtXPjPFsoAyXCOL/hEIG8TIW8S+ElVAm8RyHLPQMoAc89AzgH6AvQAgGrPQPhEbxXPCx/KAMn4RG8U4vsA4wDyAFAMNwAg+ERwb3KAQG90cG9x+GT4UgPsMPhG8uBM+EJu4wDTH/hEWG91+GTR2zwhjiUj0NMB+kAwMcjPhyDOjQQAAAAAAAAAAAAAAAAOZdzp+M8WzMlwji74RCBvEyFvEvhJVQJvEchyz0DKAHPPQM4B+gL0AIBqz0D4RG8VzwsfzMn4RG8U4vsA4wDyAFAONwAg+ERwb3KAQG90cG9x+GT4TgPwMPhG8uBM+EJu4wDTH/hEWG91+GTR2zwhjiYj0NMB+kAwMcjPhyDOjQQAAAAAAAAAAAAAAAAOEfAGSM8Wy3/JcI4v+EQgbxMhbxL4SVUCbxHIcs9AygBzz0DOAfoC9ACAas9A+ERvFc8LH8t/yfhEbxTi+wDjAPIAUBA3ACD4RHBvcoBAb3Rwb3H4ZPhPBFAgghAZK1Gxu+MCIIIQIOvHbbvjAiCCEDZbsFm74wIgghBajsy3u+MCMiQbEgRQIIIQOifqG7rjAiCCEE7haH+64wIgghBTHsd8uuMCIIIQWo7Mt7rjAhkXFRMD8jD4RvLgTPhCbuMA0x/4RFhvdfhk0ds8IY4mI9DTAfpAMDHIz4cgzo0EAAAAAAAAAAAAAAAADajsy3jPFsoAyXCOL/hEIG8TIW8S+ElVAm8RyHLPQMoAc89AzgH6AvQAgGrPQPhEbxXPCx/KAMn4RG8U4vsAMNs88gBQFE8AUPhN+kJvE9cL/8MA+E34SccFsPLj6H/4cfhEcG9ygEBvdHBvcfhk+FED8DD4RvLgTPhCbuMA0x/4RFhvdfhk0ds8IY4mI9DTAfpAMDHIz4cgzo0EAAAAAAAAAAAAAAAADTHsd8jPFssHyXCOL/hEIG8TIW8S+ElVAm8RyHLPQMoAc89AzgH6AvQAgGrPQPhEbxXPCx/LB8n4RG8U4vsA4wDyAFAWNwAg+ERwb3KAQG90cG9x+GT4TAPwMPhG8uBM+EJu4wDTH/hEWG91+GTR2zwhjiYj0NMB+kAwMcjPhyDOjQQAAAAAAAAAAAAAAAAM7haH+M8WygDJcI4v+EQgbxMhbxL4SVUCbxHIcs9AygBzz0DOAfoC9ACAas9A+ERvFc8LH8oAyfhEbxTi+wDjAPIAUBg3ACD4RHBvcoBAb3Rwb3H4ZPhRA/Aw+Eby4Ez4Qm7jANMf+ERYb3X4ZNHbPCGOJiPQ0wH6QDAxyM+HIM6NBAAAAAAAAAAAAAAAAAuifqG4zxbKAMlwji/4RCBvEyFvEvhJVQJvEchyz0DKAHPPQM4B+gL0AIBqz0D4RG8VzwsfygDJ+ERvFOL7AOMA8gBQGjcAIPhEcG9ygEBvdHBvcfhk+FAEUCCCECwWBUW64wIgghAx7dTHuuMCIIIQMgTsKbrjAiCCEDZbsFm64wIiIB4cA+Iw+Eby4Ez4Qm7jANMf+ERYb3X4ZNHbPCGOHSPQ0wH6QDAxyM+HIM5xzwthAcjPktluwWbOzclwjjH4RCBvEyFvEvhJVQJvEchyz0DKAHPPQM4B+gL0AHHPC2kByPhEbxXPCx/Ozcn4RG8U4vsA4wDyAFAdNwAg+ERwb3KAQG90cG9x+GT4TQP0MPhG8uBM+EJu4wDTH/hEWG91+GTTH9HbPCGOJiPQ0wH6QDAxyM+HIM6NBAAAAAAAAAAAAAAAAAsgTsKYzxbKAMlwji/4RCBvEyFvEvhJVQJvEchyz0DKAHPPQM4B+gL0AIBqz0D4RG8VzwsfygDJ+ERvFOL7AOMA8gBQHzcAmPhEcG9ygEBvdHBvcfhkIIIQMgTsKbohghBDcdjtuiKCEAsf0mO6I4IQGPfM5LokggiVsvq6JYIQRckmVLpVBYIQHfOFxrqxsbGxsbED+DD4RvLgTPhCbuMA0x/4RFhvdfhkIZPU0dDe+kDTf9HbPCGOHSPQ0wH6QDAxyM+HIM5xzwthAcjPkse3Ux7OzclwjjH4RCBvEyFvEvhJVQJvEchyz0DKAHPPQM4B+gL0AHHPC2kByPhEbxXPCx/Ozcn4RG8U4vsAMNs88gBQIU8DTiH6Qm8T1wv/8uP92zxw+wIB2zwB+EnbPPhEcG9ygQCAb3Rwb3H4ZC9DQQPyMPhG8uBM+EJu4wDTH/hEWG91+GQhk9TR0N76QNHbPCGOHSPQ0wH6QDAxyM+HIM5xzwthAcjPkrBYFRbOzclwjjH4RCBvEyFvEvhJVQJvEchyz0DKAHPPQM4B+gL0AHHPC2kByPhEbxXPCx/Ozcn4RG8U4vsA4wDyAFAjNwE2IPpCbxPXC//y4/34RHBvcoBAb3Rwb3H4ZNs8OwRQIIIQGYQERrrjAiCCEB3zhca64wIgghAgv7O4uuMCIIIQIOvHbbrjAjAqJyUDNDD4RvLgTPhCbuMAIZPU0dDe+kDR2zzjAPIAUCY3AVr4TfpCbxPXC//DAPhN+EnHBbDy4+jbPHD7AsjPhQjOgG/PQMmBAICmArUH+wBEA04w+Eby4Ez4Qm7jACGT1NHQ3tN/+kDTf9TR0PpA0gDU0ds8MNs88gBQKE8DaPhN+kJvE9cL/8MA+E34SccFsPLj6IEINNs88vQlwgDy5Bok+kJvE9cL//LkBts8cPsC2zwpLz8ABvhSswNEMPhG8uBM+EJu4wAhk9TR0N76QNTR0PpA9ATR2zww2zzyAFArTwR++E36Qm8T1wv/wwD4TfhJxwWw8uPo2zxw+wL4TVUC+G1tWCCBAQv0gpNtXyDjDZMibrOOgOhfBCL6Qm8T1wv/Ly4tLACkjk0gbo4SIsjPhQjOgG/PQMmBAICmArUHjjJfIG7yfyP4TVNFcMjPhYDKAHPPQM5xzwtuVTDIz5HUqs3ezlUgyM5ZyM7Mzc3NyYEAgOL7AN5fAwG4IfpCbxPXC/+OQlNhxwWUIG8RNY42IG8RJ/hNU4NvECZwyM+FgMoAc89AzgH6AnHPC2pVMMjPkdSqzd7OVSDIzlnIzszNzc3JcfsA4t5TI4EBC/R0k21fIOMNbDMuABAgWNN/1NFvAgEe+CdvEGim/mChtX/bPLYJRAPsMPhG8uBM+EJu4wDTH/hEWG91+GTR2zwhjiUj0NMB+kAwMcjPhyDOjQQAAAAAAAAAAAAAAAAJmEBEaM8WzMlwji74RCBvEyFvEvhJVQJvEchyz0DKAHPPQM4B+gL0AIBqz0D4RG8VzwsfzMn4RG8U4vsA4wDyAFAxNwAg+ERwb3KAQG90cG9x+GT4SgRQIIIQCiPmnLrjAiCCEAyYaCy64wIgghAXgoSduuMCIIIQGStRsbrjAjw5NjMDUDD4RvLgTPhCbuMAIZPU0dDe03/6QNTR0PpA1NHQ+kDU0ds8MNs88gBQNE8C7IEImNs88vT4SSTbPMcF8uRM+CdvEGim/mChtX9y+wL4TyWhtX/4byH6Qm8T1wv/ji1TAvhJVHZ0cMjPhYDKAHPPQM5xzwtuVUDIz5GgIjZuy3/OVSDIzlnIzszNzc2aIsjPhQjOgG/PQOLJgQCApgK1B/sAXwU1OwAG+FCzA+ww+Eby4Ez4Qm7jANMf+ERYb3X4ZNHbPCGOJSPQ0wH6QDAxyM+HIM6NBAAAAAAAAAAAAAAAAAl4KEnYzxbMyXCOLvhEIG8TIW8S+ElVAm8RyHLPQMoAc89AzgH6AvQAgGrPQPhEbxXPCx/MyfhEbxTi+wDjAPIAUDg3ACjtRNDT/9M/MfhDWMjL/8s/zsntVAAg+ERwb3KAQG90cG9x+GT4SwNQMPhG8uBM+EJu4wAhk9TR0N7Tf/pA1NHQ+kDU0dD6QNTR2zww2zzyAFA6TwG0+E36Qm8T1wv/wwD4TfhJxwWw8uPogQii+FGz8vQkwgDy5Boj+kJvE9cL//Lj/VUCXiHbPH/Iz4WAygBzz0DOcc8LblUwyM+QML/INst/zlnIzszNzcmAQPsAOwEa2zz5AMjPigBAy//J0EMC/jD4Qm7jAPhG8nMhk9TR0N76QNN/03/SANIA0gDU0dD6QNH4RSBukjBw3o4f+EUgbpIwcN74QrognDD4VPpCbxPXC//AAN7y4/z4AI4s+FT6Qm8T1wv/wwD4SfhUxwWwII4TMPhU+kJvE9cL/8AA+En4TccFsN/y4/zicPhvVQJFPQOK+HJY+HEB+HDbPHD7AiP6Qm8T1wv/wwAjwwCwjoCOHyD6Qm8T1wv/jhQgyM+FCM6Ab89AyYEAgKYCtQf7AN7iXwTbPPIARD5PAhBUcjEjcIjbPFM/A5ZVA9s8iSXCAI6AnCH5AMjPigBAy//J0OIx+E8noLV/+G8QVl4xf8jPhYDKAHPPQM5xzwtuVTDIz5EOE8piy3/OygDMzcmBAID7AFtDSUABClRxVNs8QQFuMAEg+QDIz4oAQMv/ydACIsjPhYjOAfoCi9AAAAAAAAAAAAAAAAAHzxYh2zzMz5DRar5/yXH7AEIANNDSAAGT0gQx3tIAAZPSATHe9AT0BPQE0V8DAFRwyMv/cG2AQPRD+ChxWIBA9BYBcliAQPQWyPQAyfhOyM+EgPQA9ADPgckADIIQO5rKAAIW7UTQ10nCAY6A4w1GUARocO1E0PQFcSGAQPQPjoDfciKAQPQPjoDfcyOAQPQOk9cLB5Fw4nQkgED0Do6A33UlgED0D0pKSEcCgI6A33BfMHYqgED0DpPXC/+RcOJ3K4BA9A6OgN/4dPhz+HL4cfhw+G/4bvht+Gz4a/hqgED0DvK91wv/+GJw+GNKSAECiUkAQ4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABABAohTAQow2zzyAEwCGPhG8uBM+EJu4wDbPFBPAAr4RvLgTAJSIdYfMfhG8uBM+EJu4wAg0x8yghBDhPKYupsg038y+E+itX/4b94w2zxQTwBy+FT4U/hS+FH4UPhP+E74TfhM+Ev4SvhD+ELIy//LP8+DzMzLB87MVVDIy3/KAMoAygDL/87Nye1UAHbtRNDT/9M/0wAx1NTTB/pA1NTR0NN/0gDSANIA0//6QNH4dPhz+HL4cfhw+G/4bvht+Gz4a/hq+GP4YgIK9KQg9KFTUgAUc29sIDAuNTcuMAAA",
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

/***/ 2610:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm.js
var vue_runtime_esm = __webpack_require__(144);
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App.vue?vue&type=template&id=c8635de8&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[(this.$store.state.Ever.isLoading)?_c('div',{staticClass:"overlay"},[_c('img',{staticClass:"img-fluid",attrs:{"src":__webpack_require__(9574),"alt":""}}),_c('b-spinner',{attrs:{"variant":"primary"}})],1):_vm._e(),_c('div',[_c('div',{staticClass:"color-1",attrs:{"id":"color-1"}}),_c('div',{staticClass:"color-2",attrs:{"id":"color-2"}}),_c('div',{staticClass:"color-3",attrs:{"id":"color-3"}}),_c('div',{staticClass:"color-4",attrs:{"id":"color-4"}}),_c('div',{staticClass:"color-5",attrs:{"id":"color-5"}}),_c('ever-loader')],1),(!_vm.gamePending && _vm.providerLoaded && !this.$store.state.Ever.isLoading)?_c('div',{staticClass:"game-container"},[_c('top-menu',{staticClass:"stat-block",attrs:{"id":"top-menu"}}),_c('div',{attrs:{"id":"field"}},[_c('router-view')],1),_c('bottom-menu',{attrs:{"id":"bottom-menu"}}),_c('toast-manager')],1):_vm._e(),(!_vm.gamePending && !_vm.providerLoaded && !this.$store.state.Ever.isLoading)?_c('div',{staticClass:"game-container"},[_vm._m(0)]):_vm._e(),(_vm.gamePending && !this.$store.state.Ever.isLoading)?_c('div',{staticClass:"game-container"},[_c('game-countdown')],1):_vm._e()])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"game-error-notification"},[_c('div',{staticClass:"fancy-font stat-block text-center"},[_vm._v("Install the EVER wallet or update the permissions")])])}]


;// CONCATENATED MODULE: ./src/App.vue?vue&type=template&id=c8635de8&

;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/BottomMenu.vue?vue&type=template&id=26dd9306&scoped=true&
var BottomMenuvue_type_template_id_26dd9306_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"bottom-menu"}},[(_vm.isBalancePositive && !_vm.isGameCompleted)?_c('div',{attrs:{"id":"pile-colors"}},_vm._l((5),function(item){return _c('div',{key:item},[_c('bottom-menu-color',{attrs:{"btn-color":item}})],1)}),0):_vm._e(),(_vm.isBalancePositive && !_vm.isGameCompleted)?_c('div',{attrs:{"id":"claim-tiles"}},[(!_vm.tilesArePut)?_c('div',[_c('b-button',{attrs:{"size":"lg","variant":"primary"},on:{"click":_vm.claimTiles}},[_c('span',{directives:[{name:"show",rawName:"v-show",value:(!_vm.isLoading),expression:"!isLoading"}]},[_vm._v("Claim "),_c('small',[_vm._v(_vm._s(this.$store.state.PlayerInfo.claimableTiles))])]),_c('b-spinner',{directives:[{name:"show",rawName:"v-show",value:(_vm.isLoading),expression:"isLoading"}]})],1)],1):_vm._e(),(_vm.tilesArePut && !_vm.isMainScreen)?_c('div',{staticClass:"d-flex flex-column mt-1"},[_c('b-button',{attrs:{"size":"lg","variant":"primary"},on:{"click":_vm.putTiles}},[_c('span',{directives:[{name:"show",rawName:"v-show",value:(!_vm.isLoading),expression:"!isLoading"}]},[_vm._v("Put "),_c('small',[_vm._v(_vm._s(this.$store.state.Game.tilesToPut.length))])]),_c('b-spinner',{directives:[{name:"show",rawName:"v-show",value:(_vm.isLoading),expression:"isLoading"}]})],1),_c('b-button',{directives:[{name:"show",rawName:"v-show",value:(!_vm.isLoading),expression:"!isLoading"}],staticClass:"mt-1",attrs:{"size":"sm","variant":"secondary"},on:{"click":_vm.cancelPut}},[_vm._v("Cancel "),_c('i',{staticClass:"bi bi-x-circle"})])],1):_vm._e()]):_vm._e(),(_vm.isGameCompleted)?_c('div',{staticClass:"claim-reward"},[_c('b-button',{directives:[{name:"show",rawName:"v-show",value:(!_vm.isReceived),expression:"!isReceived"}],attrs:{"size":"lg","variant":"primary"},on:{"click":_vm.claimReward}},[_c('span',{directives:[{name:"show",rawName:"v-show",value:(!_vm.isLoading),expression:"!isLoading"}]},[_vm._v("Get Reward "),_c('small',[_vm._v(_vm._s(_vm._f("fixed")(this.$store.getters["Game/getReward"])))])]),_c('b-spinner',{directives:[{name:"show",rawName:"v-show",value:(_vm.isLoading),expression:"isLoading"}]})],1)],1):_vm._e()])}
var BottomMenuvue_type_template_id_26dd9306_scoped_true_staticRenderFns = []


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
        });
        return;
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
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/BottomMenu.vue?vue&type=style&index=0&id=26dd9306&scoped=true&lang=css&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/BottomMenu.vue?vue&type=style&index=0&id=26dd9306&scoped=true&lang=css&

;// CONCATENATED MODULE: ./src/components/BottomMenu.vue



;


/* normalize component */

var BottomMenu_component = (0,componentNormalizer/* default */.Z)(
  components_BottomMenuvue_type_script_lang_js_,
  BottomMenuvue_type_template_id_26dd9306_scoped_true_render,
  BottomMenuvue_type_template_id_26dd9306_scoped_true_staticRenderFns,
  false,
  null,
  "26dd9306",
  null
  
)

/* harmony default export */ var BottomMenu = (BottomMenu_component.exports);
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/ToastManager.vue?vue&type=template&id=7e529f86&scoped=true&
var ToastManagervue_type_template_id_7e529f86_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('b-toast',{attrs:{"id":"wrong-color","auto-hide-delay":"3000","variant":"secondary","solid":"","toaster":"b-toaster-top-center"},scopedSlots:_vm._u([{key:"toast-title",fn:function(){return [_c('div',[_vm._v("Choose Another Color! ")])]},proxy:true}])},[_vm._v(" Please choose color "),_c('div',{class:_vm._getColorClassByNum(this.correctColorNum)},[_vm._v(_vm._s(_vm.correctColorNum))]),_vm._v(" from the bottom menu. ")]),_c('b-toast',{attrs:{"id":"zero-tiles-left","auto-hide-delay":"5000","variant":"secondary","solid":"","toaster":"b-toaster-top-center"},scopedSlots:_vm._u([{key:"toast-title",fn:function(){return [_c('div',[_vm._v("Use Another Color! ")])]},proxy:true}])},[_vm._v(" Unfortunately, "),_c('b',[_vm._v("0 tiles")]),_vm._v(" of color "),_c('div',{class:_vm._getColorClassByNum(this.correctColorNum)},[_vm._v(_vm._s(_vm.correctColorNum))]),_vm._v(" left."),_c('br'),_vm._v(" Please "),_c('b',[_vm._v("choose")]),_vm._v(" another color from the bottom menu"),_c('br'),_c('br'),_c('img',{attrs:{"src":__webpack_require__(2923),"width":"131","height":"53","alt":""}}),_c('br'),_vm._v(" or "),_c('b',[_vm._v("CLAIM")]),_vm._v(" more tiles. ")]),_c('b-toast',{attrs:{"id":"50-tiles-put","auto-hide-delay":"3000","variant":"secondary","solid":"","toaster":"b-toaster-top-center"},scopedSlots:_vm._u([{key:"toast-title",fn:function(){return [_c('div',[_vm._v("Tiles Limit Reached! ")])]},proxy:true}])},[_vm._v(" You have already reached the limit of "),_c('b',[_vm._v("50 tiles")]),_vm._v(", please submit them before putting more tiles. ")]),_c('b-toast',{attrs:{"id":"zero-balance","auto-hide-delay":"2000","variant":"secondary","solid":"","toaster":"b-toaster-top-center"},scopedSlots:_vm._u([{key:"toast-title",fn:function(){return [_c('div',[_vm._v("Your Balance is 0 PILE! ")])]},proxy:true}])},[_vm._v(" Your balance is "),_c('b',[_vm._v("0 PILE")]),_vm._v(". Please top-up your balance by clicking the "),_c('span',{staticClass:"dark-box p-1"},[_c('i',{staticClass:"bi bi-cart-check-fill color-primary"})]),_vm._v(" icon. ")]),_c('b-toast',{attrs:{"id":"zero-claim","auto-hide-delay":"10000","variant":"secondary","solid":"","toaster":"b-toaster-top-center"},scopedSlots:_vm._u([{key:"toast-title",fn:function(){return [_c('div',[_vm._v("You have "),_c('b',[_vm._v("0 tiles")]),_vm._v(" to claim! ")])]},proxy:true}])},[_c('p',[_vm._v("Please wait for 15 minutes or so to get the first color tiles.")]),_c('p',[_c('b',[_vm._v("NOTE:")]),_vm._v("The more you wait, the "),_c('b',[_vm._v("more")]),_vm._v(" you receive!")])]),_c('b-toast',{attrs:{"id":"not-enough-pile-to-put","auto-hide-delay":"10000","variant":"secondary","solid":"","toaster":"b-toaster-top-center"},scopedSlots:_vm._u([{key:"toast-title",fn:function(){return [_c('div',[_vm._v("Your PILE balance is not enough to put! ")])]},proxy:true}])},[_c('p',[_vm._v("Currently you have "),_c('i',[_vm._v(_vm._s(_vm.balance)+" PILE")]),_vm._v(", and the put operation costs "),_c('b',[_vm._v(_vm._s(_vm.payPerMove)+" PILE")]),_vm._v(".")]),_c('p',[_vm._v("Please top-up your balance!")])])],1)}
var ToastManagervue_type_template_id_7e529f86_scoped_true_staticRenderFns = []


;// CONCATENATED MODULE: ./src/components/ToastManager.vue?vue&type=template&id=7e529f86&scoped=true&

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
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/ToastManager.vue?vue&type=style&index=0&id=7e529f86&scoped=true&lang=css&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/ToastManager.vue?vue&type=style&index=0&id=7e529f86&scoped=true&lang=css&

;// CONCATENATED MODULE: ./src/components/ToastManager.vue



;


/* normalize component */

var ToastManager_component = (0,componentNormalizer/* default */.Z)(
  components_ToastManagervue_type_script_lang_js_,
  ToastManagervue_type_template_id_7e529f86_scoped_true_render,
  ToastManagervue_type_template_id_7e529f86_scoped_true_staticRenderFns,
  false,
  null,
  "7e529f86",
  null
  
)

/* harmony default export */ var components_ToastManager = (ToastManager_component.exports);
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/TopMenu.vue?vue&type=template&id=101bd7c0&scoped=true&
var TopMenuvue_type_template_id_101bd7c0_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{attrs:{"id":"top-menu-logo"}},[_c('b-modal',{attrs:{"id":"standings-table","hide-footer":"","title":"Standings"}},[_c('b-container',{staticClass:"p-0",attrs:{"fluid":""}},[_c('b-row',[_c('b-col',{staticClass:"font-weight-bold",attrs:{"cols":"3"}},[_vm._v("Place")]),_c('b-col',{staticClass:"font-weight-bold",attrs:{"cols":"3"}},[_vm._v("Wallet")]),_c('b-col',{staticClass:"font-weight-bold",attrs:{"cols":"3"}},[_vm._v("Captured")]),_c('b-col',{staticClass:"font-weight-bold",attrs:{"cols":"3"}},[_vm._v("Reward")])],1),_vm._l((_vm.$store.state.Game.standings),function(player,index){return _c('b-row',{key:player.playerAddress,class:{active: _vm.isCurrentPlayer(player.playerAddress)}},[_c('b-col',{staticClass:"text-center"},[_vm._v(_vm._s(index + 1)+" ")]),_c('b-col',{staticClass:"text-left"},[_vm._v(_vm._s(_vm._f("short")(player.playerAddress)))]),_c('b-col',{staticClass:"text-center p-0"},[_vm._v(_vm._s(player.captured)+" "),_c('i',{directives:[{name:"show",rawName:"v-show",value:(player.isLast),expression:"player.isLast"}],staticClass:"bi bi-star-fill gold-star small"}),_c('i',{directives:[{name:"show",rawName:"v-show",value:(player.isPrelast),expression:"player.isPrelast"}],staticClass:"bi bi-star gold-star small"})]),_c('b-col',[_vm._v(_vm._s(_vm._f("fixed")(player.reward)))])],1)}),_c('b-row',[_c('b-col',{staticClass:"mt-2"},[(_vm.gameActive)?_c('p',{staticClass:"small"},[_c('b',[_vm._v("Note: ")]),_vm._v("Until the game is completed, rewards for the last (10%) and pre-last (5%) tiles are excluded from the calculation.")]):_vm._e(),(!_vm.gameActive)?_c('p',{staticClass:"small"},[_c('i',{staticClass:"bi bi-star-fill gold-star"}),_vm._v(" = Player claimed the last tile"),_c('br'),_c('i',{staticClass:"bi bi-star gold-star"}),_vm._v(" = Player claimed the pre-last tile ")]):_vm._e()])],1)],2)],1),_c('b-modal',{attrs:{"id":"sale-token","hide-footer":"","title":"Get PILE Tokens!"}},[_c('p',[_vm._v("To get PILE tokens, simply send EVERs to the following address (minimum: 1 EVER)."),_c('br')]),_c('b-input-group',{scopedSlots:_vm._u([{key:"append",fn:function(){return [_c('b-button',{attrs:{"variant":"primary"},on:{"click":_vm.copyAddress}},[_vm._v("Copy")])]},proxy:true}])},[_c('b-form-input',{ref:"tsAddress",attrs:{"value":_vm.saleTokenAddress,"readonly":""},on:{"focus":function($event){return $event.target.select()}}})],1),_c('p',{staticClass:"mt-3"},[_vm._v("You will receive "),_c('b',[_vm._v("X10")]),_vm._v(" PILE tokens. For example, if you send 10 EVER, you will receive 100 PILE. The exchange is automatic, so it won't take longer than 1 minute.")]),_c('p',[_c('b',[_vm._v("NOTE:")]),_vm._v(" The more PILE you have, the "),_c('b',[_vm._v("quicker")]),_vm._v(" you'll farm colored tiles.")])],1),_c('img',{staticClass:"logo-img",attrs:{"src":__webpack_require__(9574),"alt":"PileBlocks"}})],1),_c('div',{attrs:{"id":"top-menu-player-info"}},[_c('p',{staticClass:"mb-0"},[_c('span',{staticClass:"text-faded"},[_vm._v("Balance: ")]),_c('fancy-number',{attrs:{"value":this.$store.getters["PlayerInfo/getBalance"]}}),_c('i',{staticClass:"bi bi-cart-check-fill color-primary pl-1",on:{"click":function($event){return _vm.$bvModal.show('sale-token')}}})],1),_c('div',{staticClass:"reward-grid"},[_vm._m(0),_c('div',{staticClass:"reward-value"},[_c('div',{staticClass:"d-inline-block position-absolute"},[_c('fancy-number',{attrs:{"value":this.$store.getters["Game/getReward"]}}),_vm._v(" ("),_c('span',{class:_vm.rewardProcentClass()},[_vm._v(_vm._s(_vm.rewardProcent)+"%")]),_vm._v(") "),_c('div',{class:_vm.setAnimationClass},[_vm._v(_vm._s(_vm.animatedReward))])],1)])])]),_c('div',{attrs:{"id":"top-menu-game-stats"}},[_c('b-button',{attrs:{"size":"sm","variant":"primary"},on:{"click":function($event){return _vm.$bvModal.show('standings-table')}}},[_c('i',{staticClass:"bi bi-person-lines-fill"}),_vm._v(" "+_vm._s(_vm.$store.state.Game.standings.length)+" ")])],1),_c('div',{attrs:{"id":"top-menu-game-reload"}},[_c('b-button',{attrs:{"size":"sm","variant":"primary"}},[_c('i',{directives:[{name:"show",rawName:"v-show",value:(!_vm.isLoading),expression:"!isLoading"}],staticClass:"bi bi-arrow-clockwise",on:{"click":_vm.reloadGame}}),_c('b-spinner',{directives:[{name:"show",rawName:"v-show",value:(_vm.isLoading),expression:"isLoading"}],attrs:{"small":""}})],1)],1)])}
var TopMenuvue_type_template_id_101bd7c0_scoped_true_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"reward-label"},[_c('span',{staticClass:"text-faded pr-1"},[_vm._v("Your Reward: ")])])}]


;// CONCATENATED MODULE: ./src/components/TopMenu.vue?vue&type=template&id=101bd7c0&scoped=true&

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
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/TopMenu.vue?vue&type=style&index=0&id=101bd7c0&scoped=true&lang=css&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/TopMenu.vue?vue&type=style&index=0&id=101bd7c0&scoped=true&lang=css&

;// CONCATENATED MODULE: ./src/components/TopMenu.vue



;


/* normalize component */

var TopMenu_component = (0,componentNormalizer/* default */.Z)(
  components_TopMenuvue_type_script_lang_js_,
  TopMenuvue_type_template_id_101bd7c0_scoped_true_render,
  TopMenuvue_type_template_id_101bd7c0_scoped_true_staticRenderFns,
  false,
  null,
  "101bd7c0",
  null
  
)

/* harmony default export */ var TopMenu = (TopMenu_component.exports);
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/EverLoader.vue?vue&type=template&id=62c857dd&scoped=true&
var EverLoadervue_type_template_id_62c857dd_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div')}
var EverLoadervue_type_template_id_62c857dd_scoped_true_staticRenderFns = []


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
    getTiles: async function (walletContract) {
      const result = await walletContract.methods.showTiles({}).call();
      return parseInt(result.value0);
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

          if (!(await EverAPI.host.isNextGameEmpty(host))) {
            currentGameId -= 1;
          }
        }

        const gameIndexAddress = await EverAPI.host._getIndexAddress(host, currentGameId - 1);
        const gameIndex = new ever.Contract(GameIndex.GameIndexContract.abi, gameIndexAddress);
        const currentGameAddress = await EverAPI.index.getGameAddress(gameIndex);
        console.log(`Game address: ${currentGameAddress}`);
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
  EverLoadervue_type_template_id_62c857dd_scoped_true_render,
  EverLoadervue_type_template_id_62c857dd_scoped_true_staticRenderFns,
  false,
  null,
  "62c857dd",
  null
  
)

/* harmony default export */ var EverLoader = (EverLoader_component.exports);
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/GameCountdown.vue?vue&type=template&id=2cd7ddec&scoped=true&
var GameCountdownvue_type_template_id_2cd7ddec_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"game-error-notification fancy-font stat-block"},[_vm._m(0),_c('div',{staticClass:"d-flex width-100 justify-content-evenly mb-4"},[_c('div',{staticClass:"time-cell d-flex flex-column"},[_c('div',{staticClass:"text-center countdown-value"},[_vm._v(_vm._s(_vm.rDate.rDays))]),_c('div',{staticClass:"text-uppercase"},[_vm._v("days")])]),_c('div',{staticClass:"time-cell d-flex flex-column"},[_c('div',{staticClass:"text-center countdown-value"},[_vm._v(_vm._s(_vm.rDate.rHours))]),_c('div',{staticClass:"text-uppercase"},[_vm._v("hours")])]),_c('div',{staticClass:"time-cell d-flex flex-column"},[_c('div',{staticClass:"text-center countdown-value"},[_vm._v(_vm._s(_vm.rDate.rMinutes))]),_c('div',{staticClass:"text-uppercase"},[_vm._v("min")])]),_c('div',{staticClass:"time-cell d-flex flex-column"},[_c('div',{staticClass:"text-center countdown-value"},[_vm._v(_vm._s(_vm.rDate.rSeconds))]),_c('div',{staticClass:"text-uppercase"},[_vm._v("sec")])])]),_c('div',{staticClass:"text-center"},[_vm._v(" Please reload the page once ready.")])])}
var GameCountdownvue_type_template_id_2cd7ddec_scoped_true_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"text-center lead mb-4"},[_vm._v(" The new game "),_c('span',{staticClass:"emphasis"},[_vm._v("starts")]),_vm._v(" in:")])}]


;// CONCATENATED MODULE: ./src/components/GameCountdown.vue?vue&type=template&id=2cd7ddec&scoped=true&

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
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/GameCountdown.vue?vue&type=style&index=0&id=2cd7ddec&scoped=true&lang=css&
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
 //import {GAME_STATUS_COMPLETED} from "@/AppConst";

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
      }); // if (state.status === GAME_STATUS_COMPLETED) {
      //     return;
      // }

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
      let player = state.standings.find(player => player.playerAddress === rootState.PlayerInfo.playerAddress);

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
      let player = state.standings.find(player => player.playerAddress === rootState.PlayerInfo.playerAddress);
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
      const player = state.standings.find(player => player.playerAddress === rootState.PlayerInfo.playerAddress);
      return player ? player.captured : 0;
    },

    getReward(state, getters, rootState) {
      const player = state.standings.find(player => player.playerAddress === rootState.PlayerInfo.playerAddress);
      return player ? player.reward : 0;
    },

    isReceivedReward(state, getters, rootState) {
      const player = state.standings.find(player => player.playerAddress === rootState.PlayerInfo.playerAddress);
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
        tmpPlayer.reward = rootState.Game.cachedReward; // We cannot use it right away since the reward calculation is asynchronous, so we would need another status to just collect
        // the result of the blockchain calculation. Thankfully, the client-side calc works good as well.
        // if (tmpPlayer.playerAddress === rootState.PlayerInfo.playerAddress && rootState.Game.status !== GAME_STATUS_COMPLETED) {
        //     tmpPlayer.reward = rootState.Game.cachedReward;
        // } else {
        //     tmpPlayer.reward = new BigNumber(player[1].reward).dividedBy(1e9).toNumber();
        // }

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
      await EverAPI.wallet.claimTiles(wallet, rootState.PlayerInfo.playerAddress, state.game.address.toString(), AppConst/* GENESIS_ADDRESS */.je);
    },

    async putTiles({
      state,
      rootState
    }) {
      const ever = rootState.Ever.api;
      const walletAddress = new dist.Address(rootState.PlayerInfo.walletAddress);
      const wallet = new ever.Contract(TokenWallet.TokenWalletContract.abi, walletAddress);
      const tilesPayload = await EverAPI.game.packTiles(state.game, rootState.Game.tilesToPut);
      await EverAPI.wallet.putTiles(wallet, rootState.Game.payPerMove * 1e9, state.game.address.toString(), rootState.PlayerInfo.playerAddress, tilesPayload);
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [998], function() { return __webpack_require__(2610); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;