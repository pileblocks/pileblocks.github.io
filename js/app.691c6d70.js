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
/* harmony export */   "jl": function() { return /* binding */ CALC_ADDRESS; },
/* harmony export */   "rb": function() { return /* binding */ HOST_ADDRESS; },
/* harmony export */   "rr": function() { return /* binding */ LOADING_STATUS_PROVIDER_NOT_LOADED; },
/* harmony export */   "u2": function() { return /* binding */ SELF_PUT_OFFSET; }
/* harmony export */ });
/* unused harmony export SALE_TOKEN */
const SELF_PUT_OFFSET = 1000;
const GENESIS_ADDRESS = "0:f2ff16460f846733744e017c598cd62454e7071f3bd788f91256645d45061da1";
const TOKEN_ROOT_ADDRESS = "0:dbba0028173f5b8d09eb597e0cca88cb41a4875efdf8a1815bb31292f150f800";
const SALE_TOKEN = "0:4ff60d4428f7c4fb04ab3b02e1be16ca20fe459003ce78b416ce6fb18b9b1374";
const HOST_ADDRESS = "0:bcd0c13c727229d06a9f2e51ba73df318a184b27c252d6f740bef9c1d01e68ca";
const CALC_ADDRESS = "0:2cefd03c6bb7e205ea0f152cd7f230979f0f0e996a0f4792d8fd695f431c9978";
const LOADING_STATUS_PROVIDER_NOT_LOADED = 1;
const LOADING_STATUS_PROVIDER_LOADED = 2;
const LOADING_STATUS_NO_PERMISSIONS = 3;
const LOADING_STATUS_GAME_PENDING = 4;
const GAME_STATUS_COMPLETED = 3;

/***/ }),

/***/ 6448:
/***/ (function(module) {

const FarmingCalculatorContract = {
  abi: {
    "ABI version": 2,
    "version": "2.2",
    "header": ["time"],
    "functions": [{
      "name": "log_2",
      "inputs": [{
        "name": "x",
        "type": "uint128"
      }],
      "outputs": [{
        "name": "value0",
        "type": "uint128"
      }]
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
        "name": "farmValue",
        "type": "uint128"
      }]
    }, {
      "name": "constructor",
      "inputs": [],
      "outputs": []
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
    }]
  },
  tvc: "te6ccgECFAEAArEAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gsRBQQTAoTtRNDXScMB+GYh2zzTAAGfgQIA1xgg+QFY+EL5EPKo3tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAds88jwIBgNK7UTQ10nDAfhmItDXCwOpOADcIccA4wIh1w0f8rwh4wMB2zzyPBAQBgM8IIIQTkcKfbrjAiCCEGQxTt264wIgghBotV8/uuMCCwoHAiIw+EJu4wD4RvJz0fgA2zzyAAgMAVztRNDXScIBjiNw7UTQ9AVxIYBA9A6T1ws/kXDi+GqAQPQO8r3XC//4YnD4Y+MNCQAm7UTQ0//TP9MAMdM/0fhq+GP4YgJ6MPhG8uBM03/R2zwhjigj0NMB+kAwMcjPhyDOjQQAAAAAAAAAAAAAAAAOQxTt2M8Wy3/JcPsAkTDi4wDyAA4MAn4w+Eby4EzTf9N/0ds8IY4oI9DTAfpAMDHIz4cgzo0EAAAAAAAAAAAAAAAADORwp9jPFst/yXD7AJEw4uMA8gANDAAk+Er4Q/hCyMv/yz/Pg8s/ye1UAl4hcViCEDuaygCpBaC1f9s8qLV/IYEcIKC1f6kEpxO1f3FYgQOEqQSgtX/bPKi1fw4OAfwgwgDy4GRwIYJxAAAAAAAAAAAAAAAAAAAAAL6aIat/MoEAgKC1f94hgjEAAAAAAAAAAL6YIas/MqZAtX/eIYIRAAAAAL6YIasfMqYgtX/eIYIBAAC+mCGrDzKmELV/3iGBAQC+mCGrBzKmCLV/3iHCD5ghqwMypgS1f94hwgMPACSYIasBMqYCtX/eAcIBk6S1f94ACvhG8uBMAgr0pCD0oRMSABRzb2wgMC41Ny4wAAA=",
  code: "te6ccgECEQEAAoQABCSK7VMg4wMgwP/jAiDA/uMC8gsOAgEQAoTtRNDXScMB+GYh2zzTAAGfgQIA1xgg+QFY+EL5EPKo3tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAds88jwFAwNK7UTQ10nDAfhmItDXCwOpOADcIccA4wIh1w0f8rwh4wMB2zzyPA0NAwM8IIIQTkcKfbrjAiCCEGQxTt264wIgghBotV8/uuMCCAcEAiIw+EJu4wD4RvJz0fgA2zzyAAUJAVztRNDXScIBjiNw7UTQ9AVxIYBA9A6T1ws/kXDi+GqAQPQO8r3XC//4YnD4Y+MNBgAm7UTQ0//TP9MAMdM/0fhq+GP4YgJ6MPhG8uBM03/R2zwhjigj0NMB+kAwMcjPhyDOjQQAAAAAAAAAAAAAAAAOQxTt2M8Wy3/JcPsAkTDi4wDyAAsJAn4w+Eby4EzTf9N/0ds8IY4oI9DTAfpAMDHIz4cgzo0EAAAAAAAAAAAAAAAADORwp9jPFst/yXD7AJEw4uMA8gAKCQAk+Er4Q/hCyMv/yz/Pg8s/ye1UAl4hcViCEDuaygCpBaC1f9s8qLV/IYEcIKC1f6kEpxO1f3FYgQOEqQSgtX/bPKi1fwsLAfwgwgDy4GRwIYJxAAAAAAAAAAAAAAAAAAAAAL6aIat/MoEAgKC1f94hgjEAAAAAAAAAAL6YIas/MqZAtX/eIYIRAAAAAL6YIasfMqYgtX/eIYIBAAC+mCGrDzKmELV/3iGBAQC+mCGrBzKmCLV/3iHCD5ghqwMypgS1f94hwgMMACSYIasBMqYCtX/eAcIBk6S1f94ACvhG8uBMAgr0pCD0oRAPABRzb2wgMC41Ny4wAAA=",
  codeHash: "c5e0809a27685f11f3d20ad1f30ebf4bd23f9a30e98d630758d3cca6dc4e246f"
};
module.exports = {
  FarmingCalculatorContract
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
  codeHash: "fced00e61b4ff26304f187946e8b8e86ddd765cf0bcf4775d9a0f9679cb7cb03"
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
  codeHash: "75f22400d2312ddeb3d3d6d9edc1906fc4178cc33107c5a0cc16cbc9e11e8f98"
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
  code: "te6ccgECRgEADOUAAgaK2zVFAQQkiu1TIOMDIMD/4wIgwP7jAvILQgMCRAO+7UTQ10nDAfhmifhpIds80wABjhqBAgDXGCD5AQHTAAGU0/8DAZMC+ELi+RDyqJXTAAHyeuLTPwH4QyG58rQg+COBA+iogggbd0CgufK0+GPTHwH4I7zyudMfAds88jwSDwQEfO1E0NdJwwH4ZiLQ0wP6QDD4aak4APhEf29xggiYloBvcm1vc3BvdPhk4wIhxwDjAiHXDR/yvCHjAwHbPPI8MzIyBARQIIIQIOvHbbvjAiCCEERXQoS74wIgghBmXc6fu+MCIIIQc+IhQ7vjAicfFgUEUCCCEGeguV+64wIgghBotV8/uuMCIIIQbJjy+7rjAiCCEHPiIUO64wITDgwGA04w+Eby4Ez4Qm7jACGT1NHQ3tN/+kDTf9TR0PpA0gDU0ds8MNs88gBBBzUEbvhL+EnHBfLj6CXCAPLkGiX4TLvy5CQk+kJvE9cL/8MAJfhLxwWzsPLkBts8cPsCVQPbPIklwgA/FRIIAp6OgJwh+QDIz4oAQMv/ydDiMds8+EwnobV/+GxVIQL4S1UGVQR/yM+FgMoAc89AznHPC25VQMjPkZ6C5X7Lf85VIMjOygDMzc3JgQCA+wBbCTkBClRxVNs8CgF8MAEg+QD4KPpCbxLIz4ZAygfL/8nQAiLIz4WIzgH6AovQAAAAAAAAAAAAAAAAB88WIds8zM+Q0Wq+f8lx+wALADTQ0gABk9IEMd7SAAGT0gEx3vQE9AT0BNFfAwNAMPhG8uBM+EJu4wAhk9TR0N76QNTR0PpA0ds8MNs88gBBDTUB0PhL+EnHBfLj6PgnbxBopv5gobV/cPsC2zxw+G34I/huAcjPhYjOjQVOYloAAAAAAAAAAAAAAAAAAAAlwz5AzxbJcPsA+EtYcMjPhYDKAHPPQM5xzwtuWcjPkWipj6bOyw/NyYEAgPsAOgJAMPhCbuMA+Ebyc9H4QvLUEPhL+kJvE9cL//Lj/ds88gAPNQIW7UTQ10nCAY6A4w0QQQJmcO1E0PQFcSGAQPQOjoDfciKAQPQOjoDfcF8g+G74bfhs+Gv4aoBA9A7yvdcL//hicPhjEREBAokSAEOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQA0ow+Eby4Ez4Qm7jACGT1NHQ3tN/+kDU0dD6QNIA1NHbPDDbPPIAQRQ1AvT4SSTbPPkAyM+KAEDL/8nQxwXy5EzbPHL7AvhMlPgj+G7f+EwloLV/+GwBjjVTAfhJU1b4SvhLcMjPhYDKAHPPQM5xzwtuVVDIz5HDYn8mzst/VTDIzlUgyM5ZyM7Mzc3NzZohyM+FCM6Ab89A4smBAICmArUH+wBfBBU/AWhwyMv/cG2AQPRD+EpxWIBA9BYBcliAQPQWyPQAyfhBiMjPjits1szOycjPhID0APQAz4HJRQRQIIIQRqnX7LrjAiCCEElpWH+64wIgghBWJUituuMCIIIQZl3On7rjAh0bGRcD7DD4RvLgTPhCbuMA0x/4RFhvdfhk0ds8IY4lI9DTAfpAMDHIz4cgzo0EAAAAAAAAAAAAAAAADmXc6fjPFszJcI4u+EQgbxMhbxL4SVUCbxHIcs9AygBzz0DOAfoC9ACAas9A+ERvFc8LH8zJ+ERvFOL7AOMA8gBBGCsBNPhEcG9ygEBvdHBvcfhk+EGIyM+OK2zWzM7JRQNGMPhG8uBM+EJu4wAhk9TR0N7Tf/pA1NHQ+kDU0ds8MNs88gBBGjUBFvhL+EnHBfLj6Ns8MQPwMPhG8uBM+EJu4wDTH/hEWG91+GTR2zwhjiYj0NMB+kAwMcjPhyDOjQQAAAAAAAAAAAAAAAAMlpWH+M8Wy3/JcI4v+EQgbxMhbxL4SVUCbxHIcs9AygBzz0DOAfoC9ACAas9A+ERvFc8LH8t/yfhEbxTi+wDjAPIAQRwrACD4RHBvcoBAb3Rwb3H4ZPhMA0ow+Eby4Ez4Qm7jACGT1NHQ3tN/+kDU0dD6QNIA1NHbPDDbPPIAQR41AtD4S/hJxwXy4+gkwgDy5Bok+Ey78uQkI/pCbxPXC//DACT4KMcFs7Dy5AbbPHD7Ats8+EwlobV/+GwC+EtVE3/Iz4WAygBzz0DOcc8LblVAyM+RnoLlfst/zlUgyM7KAMzNzcmBAID7AD85BFAgghAyBOwpuuMCIIIQM5kl/LrjAiCCEEOE8pi64wIgghBEV0KEuuMCJSQiIAPiMPhG8uBM+EJu4wDTH/hEWG91+GTR2zwhjh0j0NMB+kAwMcjPhyDOcc8LYQHIz5MRXQoSzs3JcI4x+EQgbxMhbxL4SVUCbxHIcs9AygBzz0DOAfoC9ABxzwtpAcj4RG8Vzwsfzs3J+ERvFOL7AOMA8gBBISsAIPhEcG9ygEBvdHBvcfhk+EoDQDD4RvLgTPhCbuMAIZPU0dDe03/6QNIA1NHbPDDbPPIAQSM1AvT4SvhJxwXy4/LbPHL7Ats8+EwkoLV/+GwBjjJUcBL4SvhLcMjPhYDKAHPPQM5xzwtuVTDIz5Hqe3iuzst/WcjOzM3NyYEAgKYCtQf7AI4oIfpCbxPXC//DACL4KMcFs7COFCHIz4UIzoBvz0DJgQCApgK1B/sA3uJfAz85A4Aw+Eby4Ez4Qm7jANHbPCGOKCPQ0wH6QDAxyM+HIM6NBAAAAAAAAAAAAAAAAAs5kl/IzxbLD8lw+wCRMOLjAPIAQTorA/Qw+Eby4Ez4Qm7jANMf+ERYb3X4ZNMf0ds8IY4mI9DTAfpAMDHIz4cgzo0EAAAAAAAAAAAAAAAACyBOwpjPFsoAyXCOL/hEIG8TIW8S+ElVAm8RyHLPQMoAc89AzgH6AvQAgGrPQPhEbxXPCx/KAMn4RG8U4vsA4wDyAEEmKwCI+ERwb3KAQG90cG9x+GQgghAyBOwpuiGCEE9Hn6O6IoIQKkrEProjghBWJUituiSCEAwv8g26VQSCEA8CWKq6sbGxsbEEUCCCEAwv8g264wIgghAPAliquuMCIIIQHwEykbrjAiCCECDrx2264wIvLSooAzQw+Eby4Ez4Qm7jACGT1NHQ3vpA0ds84wDyAEEpKwFC+Ev4SccF8uPo2zxw+wLIz4UIzoBvz0DJgQCApgK1B/sAQAPiMPhG8uBM+EJu4wDTH/hEWG91+GTR2zwhjh0j0NMB+kAwMcjPhyDOcc8LYQHIz5J8BMpGzs3JcI4x+EQgbxMhbxL4SVUCbxHIcs9AygBzz0DOAfoC9ABxzwtpAcj4RG8Vzwsfzs3J+ERvFOL7AOMA8gBBLCsAKO1E0NP/0z8x+ENYyMv/yz/Oye1UACD4RHBvcoBAb3Rwb3H4ZPhLAzYw+Eby4Ez4Qm7jACGT1NHQ3vpA0ds8MNs88gBBLjUAQvhL+EnHBfLj6PhM8tQuyM+FCM6Ab89AyYEAgKYgtQf7AANGMPhG8uBM+EJu4wAhk9TR0N7Tf/pA1NHQ+kDU0ds8MNs88gBBMDUBFvhK+EnHBfLj8ts8MQKeI8IA8uQaI/hMu/LkJNs8cPsC2zz4TCShtX/4bAL4S1UD+Ep/yM+FgMoAc89AznHPC25VQMjPkGStRsbLf85VIMjOWcjOzM3NzcmBAID7AD85AAr4RvLgTARCIdYfMfhG8uBM+EJu4wDbPHL7AiDTHzIgghBnoLlfuo6AQT84NAIMjoDiW9s8NjUASPhO+E34TPhL+Er4Q/hCyMv/yz/Pg85VMMjOy3/Lf8t/zcntVAEWIIIQGStRsbqOgN43AW4h038z2zz4TCGgtX/4bPhK+EtwyM+FgMoAc89AznHPC25ZyM+QcMqCts7Lf83JgQCApgK1B/sAOQF+IdN/M9s8+EwhoLV/+Gz4SQH4SvhLcMjPhYDKAHPPQM5xzwtuVSDIz5CfQjemzst/AcjOzc3JgQCApgK1B/sAOQEQ2zz4bfgj+G46AiT4Tfgj+E6htX/4TNs8oLV/2zw8OwAaIIEEALyUMIEEAOC1DwJeIXFYghA7msoAqQWgtX/bPKi1fyGBHCCgtX+pBKcTtX9xWIEDhKkEoLV/2zyotX89PQH8IMIA8uBkcCGCcQAAAAAAAAAAAAAAAAAAAAC+miGrfzKBAICgtX/eIYIxAAAAAAAAAAC+mCGrPzKmQLV/3iGCEQAAAAC+mCGrHzKmILV/3iGCAQAAvpghqw8yphC1f94hgQEAvpghqwcypgi1f94hwg+YIasDMqYEtX/eIcIDPgAkmCGrATKmArV/3gHCAZOktX/eAR74J28QaKb+YKG1f9s8tglAAAyCEAX14QAATO1E0NP/0z/TADH6QNTR0PpA03/Tf9N/0fhu+G34bPhr+Gr4Y/hiAgr0pCD0oURDABRzb2wgMC41Ny4wAAAADCD4Ye0e2Q==",
  codeHash: "9bfd83014ac841e44a01844b9cf712ebe5153a741aa9006d5000e8aca0e1de99"
};
module.exports = {
  TokenWalletContract
};

/***/ }),

/***/ 3833:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm.js
var vue_runtime_esm = __webpack_require__(144);
;// CONCATENATED MODULE: ../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7a05bb75-vue-loader-template"}!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/cache-loader/dist/cjs.js??ruleSet[0].rules[0].use[0]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App.vue?vue&type=template&id=c8635de8&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[(this.$store.state.Ever.isLoading)?_c('div',{staticClass:"overlay"},[_c('img',{staticClass:"img-fluid",attrs:{"src":__webpack_require__(9574),"alt":""}}),_c('b-spinner',{attrs:{"variant":"primary"}})],1):_vm._e(),_c('div',[_c('div',{staticClass:"color-1",attrs:{"id":"color-1"}}),_c('div',{staticClass:"color-2",attrs:{"id":"color-2"}}),_c('div',{staticClass:"color-3",attrs:{"id":"color-3"}}),_c('div',{staticClass:"color-4",attrs:{"id":"color-4"}}),_c('div',{staticClass:"color-5",attrs:{"id":"color-5"}}),_c('ever-loader')],1),(!_vm.gamePending && _vm.providerLoaded && !this.$store.state.Ever.isLoading)?_c('div',{staticClass:"game-container"},[_c('top-menu',{staticClass:"stat-block",attrs:{"id":"top-menu"}}),_c('div',{attrs:{"id":"field"}},[_c('router-view')],1),_c('bottom-menu',{attrs:{"id":"bottom-menu"}}),_c('toast-manager')],1):_vm._e(),(!_vm.gamePending && !_vm.providerLoaded && !this.$store.state.Ever.isLoading)?_c('div',{staticClass:"game-container"},[_vm._m(0)]):_vm._e(),(_vm.gamePending && !this.$store.state.Ever.isLoading)?_c('div',{staticClass:"game-container"},[_c('game-countdown')],1):_vm._e()])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"game-error-notification"},[_c('div',{staticClass:"fancy-font stat-block text-center"},[_vm._v("Install the EVER wallet or update the permissions")])])}]


;// CONCATENATED MODULE: ./src/App.vue?vue&type=template&id=c8635de8&

;// CONCATENATED MODULE: ../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7a05bb75-vue-loader-template"}!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/cache-loader/dist/cjs.js??ruleSet[0].rules[0].use[0]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/BottomMenu.vue?vue&type=template&id=40d6d3d2&scoped=true&
var BottomMenuvue_type_template_id_40d6d3d2_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"bottom-menu"}},[(_vm.isBalancePositive && !_vm.isGameCompleted)?_c('div',{attrs:{"id":"pile-colors"}},_vm._l((5),function(item){return _c('div',{key:item},[_c('bottom-menu-color',{attrs:{"btn-color":item}})],1)}),0):_vm._e(),(_vm.isBalancePositive && !_vm.isGameCompleted)?_c('div',{attrs:{"id":"claim-tiles"}},[(!_vm.tilesArePut)?_c('div',[_c('b-button',{attrs:{"size":"lg","variant":"primary"},on:{"click":_vm.claimTiles}},[(this.$store.state.PlayerInfo.isJoined)?_c('span',{directives:[{name:"show",rawName:"v-show",value:(!_vm.isLoading),expression:"!isLoading"}]},[_vm._v("Claim "),_c('small',[_vm._v(_vm._s(this.$store.state.PlayerInfo.claimableTiles))])]):_vm._e(),(!this.$store.state.PlayerInfo.isJoined)?_c('span',{directives:[{name:"show",rawName:"v-show",value:(!_vm.isLoading),expression:"!isLoading"}]},[_vm._v("Join")]):_vm._e(),_c('b-spinner',{directives:[{name:"show",rawName:"v-show",value:(_vm.isLoading),expression:"isLoading"}]})],1)],1):_vm._e(),(_vm.tilesArePut && !_vm.isMainScreen)?_c('div',{staticClass:"d-flex flex-column mt-1"},[_c('b-button',{attrs:{"size":"lg","variant":"primary"},on:{"click":_vm.putTiles}},[_c('span',{directives:[{name:"show",rawName:"v-show",value:(!_vm.isLoading),expression:"!isLoading"}]},[_vm._v("Put "),_c('small',[_vm._v(_vm._s(this.$store.state.Game.tilesToPut.length))])]),_c('b-spinner',{directives:[{name:"show",rawName:"v-show",value:(_vm.isLoading),expression:"isLoading"}]})],1),_c('b-button',{directives:[{name:"show",rawName:"v-show",value:(!_vm.isLoading),expression:"!isLoading"}],staticClass:"mt-1",attrs:{"size":"sm","variant":"secondary"},on:{"click":_vm.cancelPut}},[_vm._v("Cancel "),_c('i',{staticClass:"bi bi-x-circle"})])],1):_vm._e()]):_vm._e(),(_vm.isGameCompleted)?_c('div',{staticClass:"claim-reward"},[_c('b-button',{directives:[{name:"show",rawName:"v-show",value:(!_vm.isReceived & _vm.isInRoaster),expression:"!isReceived & isInRoaster"}],attrs:{"size":"lg","variant":"primary"},on:{"click":_vm.claimReward}},[_c('span',{directives:[{name:"show",rawName:"v-show",value:(!_vm.isLoading),expression:"!isLoading"}]},[_vm._v("Get Reward "),_c('small',[_vm._v(_vm._s(_vm._f("fixed")(this.$store.getters["Game/getReward"])))])]),_c('b-spinner',{directives:[{name:"show",rawName:"v-show",value:(_vm.isLoading),expression:"isLoading"}]})],1)],1):_vm._e()])}
var BottomMenuvue_type_template_id_40d6d3d2_scoped_true_staticRenderFns = []


;// CONCATENATED MODULE: ../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7a05bb75-vue-loader-template"}!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/cache-loader/dist/cjs.js??ruleSet[0].rules[0].use[0]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/BottomMenuColor.vue?vue&type=template&id=627c8f4b&scoped=true&
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
    return {};
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
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../node_modules/cache-loader/dist/cjs.js??ruleSet[0].rules[0].use[0]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/BottomMenu.vue?vue&type=style&index=0&id=40d6d3d2&scoped=true&lang=css&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/BottomMenu.vue?vue&type=style&index=0&id=40d6d3d2&scoped=true&lang=css&

;// CONCATENATED MODULE: ./src/components/BottomMenu.vue



;


/* normalize component */

var BottomMenu_component = (0,componentNormalizer/* default */.Z)(
  components_BottomMenuvue_type_script_lang_js_,
  BottomMenuvue_type_template_id_40d6d3d2_scoped_true_render,
  BottomMenuvue_type_template_id_40d6d3d2_scoped_true_staticRenderFns,
  false,
  null,
  "40d6d3d2",
  null
  
)

/* harmony default export */ var BottomMenu = (BottomMenu_component.exports);
;// CONCATENATED MODULE: ../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7a05bb75-vue-loader-template"}!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/cache-loader/dist/cjs.js??ruleSet[0].rules[0].use[0]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/ToastManager.vue?vue&type=template&id=1b916f45&scoped=true&
var ToastManagervue_type_template_id_1b916f45_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('b-toast',{attrs:{"id":"wrong-color","auto-hide-delay":"3000","variant":"secondary","solid":"","toaster":"b-toaster-top-center"},scopedSlots:_vm._u([{key:"toast-title",fn:function(){return [_c('div',[_vm._v("Choose Another Color! ")])]},proxy:true}])},[_vm._v(" Please choose color "),_c('div',{class:_vm._getColorClassByNum(this.correctColorNum)},[_vm._v(_vm._s(_vm.correctColorNum))]),_vm._v(" from the bottom menu. ")]),_c('b-toast',{attrs:{"id":"zero-tiles-left","auto-hide-delay":"5000","variant":"secondary","solid":"","toaster":"b-toaster-top-center"},scopedSlots:_vm._u([{key:"toast-title",fn:function(){return [_c('div',[_vm._v("Use Another Color! ")])]},proxy:true}])},[_vm._v(" Unfortunately, "),_c('b',[_vm._v("0 tiles")]),_vm._v(" of color "),_c('div',{class:_vm._getColorClassByNum(this.correctColorNum)},[_vm._v(_vm._s(_vm.correctColorNum))]),_vm._v(" left."),_c('br'),_vm._v(" Please "),_c('b',[_vm._v("choose")]),_vm._v(" another color from the bottom menu"),_c('br'),_c('br'),_c('img',{attrs:{"src":__webpack_require__(2923),"width":"131","height":"53","alt":""}}),_c('br'),_vm._v(" or "),_c('b',[_vm._v("CLAIM")]),_vm._v(" more tiles. ")]),_c('b-toast',{attrs:{"id":"50-tiles-put","auto-hide-delay":"3000","variant":"secondary","solid":"","toaster":"b-toaster-top-center"},scopedSlots:_vm._u([{key:"toast-title",fn:function(){return [_c('div',[_vm._v("Tiles Limit Reached! ")])]},proxy:true}])},[_vm._v(" You have already reached the limit of "),_c('b',[_vm._v("50 tiles")]),_vm._v(", please submit them before putting more tiles. ")]),_c('b-toast',{attrs:{"id":"zero-balance","auto-hide-delay":"2000","variant":"secondary","solid":"","toaster":"b-toaster-top-center"},scopedSlots:_vm._u([{key:"toast-title",fn:function(){return [_c('div',[_vm._v("Your Balance is 0 PILE! ")])]},proxy:true}])},[_vm._v(" Your balance is "),_c('b',[_vm._v("0 PILE")]),_vm._v(". Please top-up your balance by clicking the "),_c('span',{staticClass:"dark-box p-1"},[_c('i',{staticClass:"bi bi-cart-check-fill color-primary"})]),_vm._v(" icon. ")]),_c('b-toast',{attrs:{"id":"zero-claim","auto-hide-delay":"10000","variant":"secondary","solid":"","toaster":"b-toaster-top-center"},scopedSlots:_vm._u([{key:"toast-title",fn:function(){return [_c('div',[_vm._v("You have "),_c('b',[_vm._v("0 tiles")]),_vm._v(" to claim! ")])]},proxy:true}])},[_c('p',[_vm._v("Please click the "),_c('span',{staticClass:"dark-box p-1"},[_c('i',{staticClass:"bi bi-cart-check-fill color-primary"})]),_vm._v(" and use "),_c('b',[_vm._v("Farming Calculator")]),_vm._v(" to learn when you receive your first tiles with your current PILE balance.")]),_c('p',[_c('b',[_vm._v("NOTE:")]),_vm._v("The more PILE balance you have and the more you wait, the "),_c('b',[_vm._v("more")]),_vm._v(" you receive!")])]),_c('b-toast',{attrs:{"id":"not-enough-pile-to-put","auto-hide-delay":"10000","variant":"secondary","solid":"","toaster":"b-toaster-top-center"},scopedSlots:_vm._u([{key:"toast-title",fn:function(){return [_c('div',[_vm._v("Your PILE balance is not enough to put! ")])]},proxy:true}])},[_c('p',[_vm._v("Currently you have "),_c('i',[_vm._v(_vm._s(_vm.balance)+" PILE")]),_vm._v(", and the put operation costs "),_c('b',[_vm._v(_vm._s(_vm.payPerMove)+" PILE")]),_vm._v(".")]),_c('p',[_vm._v("Please top-up your balance!")])]),_c('b-toast',{attrs:{"id":"op-in-progress","auto-hide-delay":"2000","variant":"secondary","solid":"","toaster":"b-toaster-top-center"},scopedSlots:_vm._u([{key:"toast-title",fn:function(){return [_c('div',[_vm._v("Operation in Progress! ")])]},proxy:true}])},[_vm._v(" Please wait until the app completes the claim or put operation. ")]),_c('b-toast',{attrs:{"id":"message-expired","auto-hide-delay":"20000","variant":"secondary","solid":"","toaster":"b-toaster-top-center"},scopedSlots:_vm._u([{key:"toast-title",fn:function(){return [_c('div',[_vm._v("Operation Didn't Succeed! ")])]},proxy:true}])},[_vm._v(" The operation could not be completed, please try again. ")]),_c('b-toast',{attrs:{"id":"on-claim-tiles","auto-hide-delay":"3000","variant":"secondary","solid":"","toaster":"b-toaster-top-center"},scopedSlots:_vm._u([{key:"toast-title",fn:function(){return [_c('div',[_vm._v("👾 Activity Detected! ")])]},proxy:true}])},[_vm._v(" Somebody has just claimed "),_c('b',[_vm._v(_vm._s(_vm.claimValue)+" tiles")]),_vm._v(". ")]),_c('b-toast',{attrs:{"id":"on-put-tiles","auto-hide-delay":"3000","variant":"secondary","solid":"","toaster":"b-toaster-top-center"},scopedSlots:_vm._u([{key:"toast-title",fn:function(){return [_c('div',[_vm._v("👾 Activity Detected! ")])]},proxy:true}])},[_vm._v(" Somebody has just put "),_c('b',[_vm._v(_vm._s(_vm.putValue)+" tiles")]),_vm._v(". ")])],1)}
var ToastManagervue_type_template_id_1b916f45_scoped_true_staticRenderFns = []


;// CONCATENATED MODULE: ./src/components/ToastManager.vue?vue&type=template&id=1b916f45&scoped=true&

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
const ToastManager = {
  name: "ToastManager",
  data: function () {
    return {
      correctColorNum: 0,
      balance: 0,
      payPerMove: 0,
      claimValue: 0,
      putValue: 0
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
      }

      this.$bvToast.show(payload.toastName);
    }
  }
};
/* harmony default export */ var ToastManagervue_type_script_lang_js_ = (ToastManager);
;// CONCATENATED MODULE: ./src/components/ToastManager.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ToastManagervue_type_script_lang_js_ = (ToastManagervue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../node_modules/cache-loader/dist/cjs.js??ruleSet[0].rules[0].use[0]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/ToastManager.vue?vue&type=style&index=0&id=1b916f45&scoped=true&lang=css&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/ToastManager.vue?vue&type=style&index=0&id=1b916f45&scoped=true&lang=css&

;// CONCATENATED MODULE: ./src/components/ToastManager.vue



;


/* normalize component */

var ToastManager_component = (0,componentNormalizer/* default */.Z)(
  components_ToastManagervue_type_script_lang_js_,
  ToastManagervue_type_template_id_1b916f45_scoped_true_render,
  ToastManagervue_type_template_id_1b916f45_scoped_true_staticRenderFns,
  false,
  null,
  "1b916f45",
  null
  
)

/* harmony default export */ var components_ToastManager = (ToastManager_component.exports);
;// CONCATENATED MODULE: ../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7a05bb75-vue-loader-template"}!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/cache-loader/dist/cjs.js??ruleSet[0].rules[0].use[0]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/TopMenu.vue?vue&type=template&id=7da33799&scoped=true&
var TopMenuvue_type_template_id_7da33799_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{attrs:{"id":"top-menu-logo"}},[_c('b-modal',{attrs:{"id":"standings-table","hide-footer":"","title":"Standings"}},[_c('b-container',{staticClass:"p-0",attrs:{"fluid":""}},[_c('b-row',[_c('b-col',{staticClass:"font-weight-bold",attrs:{"cols":"3"}},[_vm._v("Place")]),_c('b-col',{staticClass:"font-weight-bold",attrs:{"cols":"3"}},[_vm._v("Wallet")]),_c('b-col',{staticClass:"font-weight-bold",attrs:{"cols":"3"}},[_vm._v("Captured")]),_c('b-col',{staticClass:"font-weight-bold",attrs:{"cols":"3"}},[_vm._v("Reward")])],1),_vm._l((_vm.$store.state.Game.standings),function(player,index){return _c('b-row',{key:player.playerAddress,class:{active: _vm.isCurrentPlayer(player.playerAddress)}},[_c('b-col',{staticClass:"text-center"},[_vm._v(_vm._s(index + 1)+" ")]),_c('b-col',{staticClass:"text-left"},[_vm._v(_vm._s(_vm._f("short")(player.playerAddress)))]),_c('b-col',{staticClass:"text-center p-0"},[_vm._v(_vm._s(player.captured)+" "),_c('i',{directives:[{name:"show",rawName:"v-show",value:(player.isLast),expression:"player.isLast"}],staticClass:"bi bi-star-fill gold-star small"}),_c('i',{directives:[{name:"show",rawName:"v-show",value:(player.isPrelast),expression:"player.isPrelast"}],staticClass:"bi bi-star gold-star small"})]),_c('b-col',[_vm._v(_vm._s(_vm._f("fixed")(player.reward)))])],1)}),_c('b-row',[_c('b-col',{staticClass:"mt-2"},[(_vm.gameActive)?_c('p',{staticClass:"small"},[_c('b',[_vm._v("Note: ")]),_vm._v("Until the game is completed, rewards for the last (10%) and pre-last (5%) tiles are excluded from the calculation.")]):_vm._e(),(!_vm.gameActive)?_c('p',{staticClass:"small"},[_c('i',{staticClass:"bi bi-star-fill gold-star"}),_vm._v(" = Player claimed the last tile"),_c('br'),_c('i',{staticClass:"bi bi-star gold-star"}),_vm._v(" = Player claimed the pre-last tile ")]):_vm._e()])],1)],2)],1),_c('b-modal',{attrs:{"id":"sale-token","hide-footer":"","title":"Get PILE Tokens!"}},[_c('p',[_vm._v("To get PILE tokens, add the PILE token root address to FlatQube and swap for WEVER."),_c('br')]),_c('b-input-group',{scopedSlots:_vm._u([{key:"append",fn:function(){return [_c('b-button',{attrs:{"variant":"primary"},on:{"click":_vm.copyAddress}},[_vm._v("Copy")])]},proxy:true}])},[_c('b-form-input',{ref:"tsAddress",attrs:{"value":_vm.saleTokenAddress,"readonly":""},on:{"focus":function($event){return $event.target.select()}}})],1),_c('p',{staticClass:"mt-3"},[_vm._v("Your connected wallet is: "),_c('b',[_vm._v(_vm._s(_vm._f("short")(_vm.$store.state.PlayerInfo.playerAddress)))]),_c('br'),_vm._v("Keep PILE "),_c('b',[_vm._v("only")]),_vm._v(" in this wallet to use them within the game!")]),_c('p',{staticClass:"mt-1"},[_vm._v("For the guide on how to import the PILE token, see "),_c('a',{attrs:{"href":"https://youtu.be/1ZBE9qspn7k","target":"_blank"}},[_vm._v("https://youtu.be/1ZBE9qspn7k")]),_vm._v(".")]),_c('p',[_c('b',[_vm._v("Farming Calculator")])]),_c('p',[_vm._v("Use this calculator to approximate how many PILE to buy to have the expected amount of tiles farmed. For example, after 100 minutes with 100 PILE you receive 76 tiles.")]),_c('b-input-group',{attrs:{"prepend":"After this time (in min):","size":"sm"}},[_c('b-form-input',{attrs:{"placeholder":"Time in minutes"},model:{value:(_vm.farmingTime),callback:function ($$v) {_vm.farmingTime=$$v},expression:"farmingTime"}})],1),_c('b-input-group',{attrs:{"size":"sm","prepend":"If your balance is (PILE):"}},[_c('b-form-input',{attrs:{"placeholder":"Your balance","size":"sm"},model:{value:(_vm.farmingBalance),callback:function ($$v) {_vm.farmingBalance=$$v},expression:"farmingBalance"}}),_c('b-input-group-append',[_c('b-button',{on:{"click":_vm.calcFarming}},[_vm._v("Calculate")])],1)],1),_c('p',[_vm._v("You'll farm: "),_c('b',[_vm._v(_vm._s(_vm.farmingResult))]),_vm._v(" tiles")])],1),_c('img',{staticClass:"logo-img",attrs:{"src":__webpack_require__(9574),"alt":"PileBlocks"}})],1),_c('div',{attrs:{"id":"top-menu-player-info"}},[_c('p',{staticClass:"mb-0"},[_c('span',{staticClass:"text-faded"},[_vm._v("Balance: ")]),_c('fancy-number',{attrs:{"value":this.$store.getters["PlayerInfo/getBalance"]}}),_c('i',{staticClass:"bi bi-cart-check-fill color-primary pl-1",on:{"click":function($event){return _vm.$bvModal.show('sale-token')}}})],1),_c('div',{staticClass:"reward-grid"},[_vm._m(0),_c('div',{staticClass:"reward-value"},[_c('div',{staticClass:"d-inline-block position-absolute"},[_c('fancy-number',{attrs:{"value":this.$store.getters["Game/getReward"]}}),_vm._v(" ("),_c('span',{class:_vm.rewardProcentClass()},[_vm._v(_vm._s(_vm.rewardProcent)+"%")]),_vm._v(") "),_c('div',{class:_vm.setAnimationClass},[_vm._v(_vm._s(_vm.animatedReward))])],1)])])]),_c('div',{attrs:{"id":"top-menu-game-stats"}},[_c('b-button',{attrs:{"size":"sm","variant":"primary"},on:{"click":function($event){return _vm.$bvModal.show('standings-table')}}},[_c('i',{staticClass:"bi bi-person-lines-fill"}),_vm._v(" "+_vm._s(_vm.$store.state.Game.standings.length)+" ")])],1),_c('div',{attrs:{"id":"top-menu-game-reload"}},[_c('b-button',{attrs:{"size":"sm","variant":"primary","disabled":_vm.isOpInProgress},on:{"click":_vm.reloadGame}},[_c('i',{directives:[{name:"show",rawName:"v-show",value:(!_vm.isLoading),expression:"!isLoading"}],staticClass:"bi bi-arrow-clockwise"}),_c('b-spinner',{directives:[{name:"show",rawName:"v-show",value:(_vm.isLoading),expression:"isLoading"}],attrs:{"small":""}})],1)],1)])}
var TopMenuvue_type_template_id_7da33799_scoped_true_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"reward-label"},[_c('span',{staticClass:"text-faded pr-1"},[_vm._v("Your Reward: ")])])}]


;// CONCATENATED MODULE: ./src/components/TopMenu.vue?vue&type=template&id=7da33799&scoped=true&

// EXTERNAL MODULE: ./node_modules/bignumber.js/bignumber.js
var bignumber = __webpack_require__(4431);
var bignumber_default = /*#__PURE__*/__webpack_require__.n(bignumber);
;// CONCATENATED MODULE: ../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7a05bb75-vue-loader-template"}!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/cache-loader/dist/cjs.js??ruleSet[0].rules[0].use[0]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/FancyNumber.vue?vue&type=template&id=191f2c3a&scoped=true&
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
    },
    calcFarming: async function () {
      this.farmingResult = await this.$store.getters["Ever/calcFarming"](this.farmingTime * 60, this.farmingBalance * 1e9);
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
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../node_modules/cache-loader/dist/cjs.js??ruleSet[0].rules[0].use[0]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/TopMenu.vue?vue&type=style&index=0&id=7da33799&scoped=true&lang=css&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/TopMenu.vue?vue&type=style&index=0&id=7da33799&scoped=true&lang=css&

;// CONCATENATED MODULE: ./src/components/TopMenu.vue



;


/* normalize component */

var TopMenu_component = (0,componentNormalizer/* default */.Z)(
  components_TopMenuvue_type_script_lang_js_,
  TopMenuvue_type_template_id_7da33799_scoped_true_render,
  TopMenuvue_type_template_id_7da33799_scoped_true_staticRenderFns,
  false,
  null,
  "7da33799",
  null
  
)

/* harmony default export */ var TopMenu = (TopMenu_component.exports);
;// CONCATENATED MODULE: ../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7a05bb75-vue-loader-template"}!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/cache-loader/dist/cjs.js??ruleSet[0].rules[0].use[0]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/EverLoader.vue?vue&type=template&id=5525a90d&scoped=true&
var EverLoadervue_type_template_id_5525a90d_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div')}
var EverLoadervue_type_template_id_5525a90d_scoped_true_staticRenderFns = []


// EXTERNAL MODULE: ./node_modules/everscale-inpage-provider/dist/index.js
var dist = __webpack_require__(8511);
// EXTERNAL MODULE: ./src/contract_wrappers/PBGame.js
var PBGame = __webpack_require__(2175);
// EXTERNAL MODULE: ./src/contract_wrappers/TokenRoot.js
var TokenRoot = __webpack_require__(2841);
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
// EXTERNAL MODULE: ./src/contract_wrappers/FarmingCalculator.js
var FarmingCalculator = __webpack_require__(6448);
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
    initCalc: function (ever) {
      const calcAddress = new dist.Address(AppConst/* CALC_ADDRESS */.jl);
      const calc = new ever.Contract(FarmingCalculator.FarmingCalculatorContract.abi, calcAddress);
      this.$store.commit("Ever/updateCalc", calc);
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
            }
          }
        }
      });
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
    this.initCalc(ever);
    await this.initGame(ever);
    await this.initSubscription(ever);
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
  EverLoadervue_type_template_id_5525a90d_scoped_true_render,
  EverLoadervue_type_template_id_5525a90d_scoped_true_staticRenderFns,
  false,
  null,
  "5525a90d",
  null
  
)

/* harmony default export */ var EverLoader = (EverLoader_component.exports);
;// CONCATENATED MODULE: ../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7a05bb75-vue-loader-template"}!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/cache-loader/dist/cjs.js??ruleSet[0].rules[0].use[0]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/GameCountdown.vue?vue&type=template&id=2cd7ddec&scoped=true&
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
;// CONCATENATED MODULE: ./src/router/index.js

 //import Home from '../views/Home'
//import FieldTilesPart from '../views/FieldTilesPart'

const Home = () => __webpack_require__.e(/* import() */ 909).then(__webpack_require__.bind(__webpack_require__, 8909));

const FieldTilesPart = () => __webpack_require__.e(/* import() */ 669).then(__webpack_require__.bind(__webpack_require__, 669));

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
    gameStartTime: 0
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
          isLast: false,
          isPrelast: false,
          lastPutTime: Date.now(),
          isReceived: false
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
    isJoined: false
  },
  mutations: {
    updateJoined(state, joined) {
      state.isJoined = joined;
    },

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
    game: null,
    calc: null
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
    },

    updateCalc(state, calc) {
      state.calc = calc;
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
        commit('PlayerInfo/updateJoined', true, {
          root: true
        });
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
  getters: {
    calcFarming: function (state, getters, rootState) {
      return async function (time, balance) {
        return await EverAPI.calc.calcFarming(rootState.Ever.calc, time, balance);
      };
    }
  }
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
/******/ 			return "js/" + chunkId + "." + {"669":"985bfe34","909":"96ec86d0"}[chunkId] + ".js";
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.miniCssF = function(chunkId) {
/******/ 			// return url for filenames based on template
/******/ 			return "css/" + chunkId + "." + {"669":"dcedd473","909":"432bda46"}[chunkId] + ".css";
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
/******/ 			var cssChunks = {"669":1,"909":1};
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [998], function() { return __webpack_require__(3833); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;