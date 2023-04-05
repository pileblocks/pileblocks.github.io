/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 7976:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ GameNavigation; }
});

;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/GameNavigation.vue?vue&type=template&id=fb62b394&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"d-flex justify-content-center align-items-end"},[_c('button',{staticClass:"btn btn-nav",attrs:{"type":"button","disabled":this.$store.state.Game.gameId <= 1},on:{"click":_vm.loadPrevGame}},[_c('img',{staticClass:"button-icon",attrs:{"src":__webpack_require__(6158),"alt":""}}),_vm._m(0)]),_c('p',{staticClass:"season-slogan fancy-font branded-main-text pl-5 pr-5"},[_vm._v("GAME "+_vm._s(this.$store.state.Game.gameId)+": "+_vm._s(this.$store.state.Game.name))]),_c('button',{staticClass:"btn btn-nav",attrs:{"type":"button","disabled":this.$store.state.Game.gameId >= this.$store.state.Game.lastGameId},on:{"click":_vm.loadNextGame}},[_c('img',{staticClass:"button-icon",attrs:{"src":__webpack_require__(9066),"alt":""}}),_vm._m(1)])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"btn__inner btn__inner-nav"},[_c('span',{staticClass:"btn__inner-shadow"}),_c('span',{staticClass:"btn__inner-rect"})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"btn__inner btn__inner-nav"},[_c('span',{staticClass:"btn__inner-shadow"}),_c('span',{staticClass:"btn__inner-rect"})])}]


;// CONCATENATED MODULE: ./src/components/GameNavigation.vue?vue&type=template&id=fb62b394&scoped=true&

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/GameNavigation.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var GameNavigationvue_type_script_lang_js_ = ({
  name: "GameNavigation",
  methods: {
    loadPrevGame: function () {
      window.location.href = `/game/${this.$store.state.Game.gameId - 1}`;
    },
    loadNextGame: function () {
      window.location.href = `/game/${this.$store.state.Game.gameId + 1}`;
    }
  }
});
;// CONCATENATED MODULE: ./src/components/GameNavigation.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_GameNavigationvue_type_script_lang_js_ = (GameNavigationvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1001);
;// CONCATENATED MODULE: ./src/components/GameNavigation.vue





/* normalize component */
;
var component = (0,componentNormalizer/* default */.Z)(
  components_GameNavigationvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "fb62b394",
  null
  
)

/* harmony default export */ var GameNavigation = (component.exports);

/***/ }),

/***/ 8270:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$L": function() { return /* binding */ OP_CHANGE_FARM_SPEED; },
/* harmony export */   "I8": function() { return /* binding */ OP_PLUS_CAPTURED_TILES; },
/* harmony export */   "K$": function() { return /* binding */ GAME_STATUS_COMPLETED; },
/* harmony export */   "Mq": function() { return /* binding */ LOADING_STATUS_GAME_PENDING; },
/* harmony export */   "Ro": function() { return /* binding */ LOADING_STATUS_PROVIDER_LOADED; },
/* harmony export */   "eu": function() { return /* binding */ OP_SET_BLOCK_COLOR; },
/* harmony export */   "h_": function() { return /* binding */ LOADING_STATUS_NO_PERMISSIONS; },
/* harmony export */   "mk": function() { return /* binding */ EMPTY_CELL; },
/* harmony export */   "nr": function() { return /* binding */ OP_MINUS_CAPTURED_TILES; },
/* harmony export */   "qd": function() { return /* binding */ OP_MINUS_COLORS; },
/* harmony export */   "rr": function() { return /* binding */ LOADING_STATUS_PROVIDER_NOT_LOADED; },
/* harmony export */   "u2": function() { return /* binding */ SELF_PUT_OFFSET; },
/* harmony export */   "u3": function() { return /* binding */ LOADING_STATUS_EMPTY_GAME_LIST; }
/* harmony export */ });
const SELF_PUT_OFFSET = 1000;
const EMPTY_CELL = "te6ccgEBAgEABQABAAEAAA==";
const LOADING_STATUS_PROVIDER_NOT_LOADED = 1;
const LOADING_STATUS_PROVIDER_LOADED = 2;
const LOADING_STATUS_NO_PERMISSIONS = 3;
const LOADING_STATUS_GAME_PENDING = 4;
const LOADING_STATUS_EMPTY_GAME_LIST = 5;
const GAME_STATUS_COMPLETED = 3;
const OP_SET_BLOCK_COLOR = 1;
const OP_CHANGE_FARM_SPEED = 2;
const OP_MINUS_CAPTURED_TILES = 3;
const OP_PLUS_CAPTURED_TILES = 4;
const OP_MINUS_COLORS = 5;

/***/ }),

/***/ 319:
/***/ (function(module) {

const CollectionContract = {
  abi: {
    "ABI version": 2,
    "version": "2.2",
    "header": ["pubkey", "time", "expire"],
    "functions": [{
      "name": "constructor",
      "inputs": [{
        "name": "codeNft",
        "type": "cell"
      }, {
        "name": "codeIndex",
        "type": "cell"
      }, {
        "name": "codeIndexBasis",
        "type": "cell"
      }, {
        "name": "ownerPubkey",
        "type": "uint256"
      }, {
        "name": "json",
        "type": "string"
      }, {
        "name": "mintingFee",
        "type": "uint128"
      }],
      "outputs": []
    }, {
      "name": "mintNft",
      "inputs": [{
        "name": "json",
        "type": "string"
      }],
      "outputs": []
    }, {
      "name": "withdraw",
      "inputs": [{
        "name": "dest",
        "type": "address"
      }, {
        "name": "value",
        "type": "uint128"
      }],
      "outputs": []
    }, {
      "name": "onTokenBurned",
      "inputs": [{
        "name": "id",
        "type": "uint256"
      }, {
        "name": "owner",
        "type": "address"
      }, {
        "name": "manager",
        "type": "address"
      }],
      "outputs": []
    }, {
      "name": "setRemainOnNft",
      "inputs": [{
        "name": "remainOnNft",
        "type": "uint128"
      }],
      "outputs": []
    }, {
      "name": "setMintingFee",
      "inputs": [{
        "name": "mintingFee",
        "type": "uint128"
      }],
      "outputs": []
    }, {
      "name": "mintingFee",
      "inputs": [{
        "name": "answerId",
        "type": "uint32"
      }],
      "outputs": [{
        "name": "value0",
        "type": "uint128"
      }]
    }, {
      "name": "setNftParams",
      "inputs": [{
        "name": "nftAddress",
        "type": "address"
      }, {
        "name": "_paramType",
        "type": "uint8"
      }, {
        "name": "_paramIndex",
        "type": "uint128"
      }, {
        "name": "_paramValue",
        "type": "uint128"
      }, {
        "name": "_paramArray",
        "type": "uint8[]"
      }, {
        "name": "_applyNumTimes",
        "type": "uint8"
      }],
      "outputs": []
    }, {
      "name": "setMintAddress",
      "inputs": [{
        "name": "_mintAddress",
        "type": "address"
      }],
      "outputs": []
    }, {
      "name": "setJson",
      "inputs": [{
        "name": "nftAddress",
        "type": "address"
      }, {
        "name": "json",
        "type": "string"
      }],
      "outputs": []
    }, {
      "name": "nftOwnerCodeHash",
      "inputs": [{
        "name": "_nftOwner",
        "type": "address"
      }],
      "outputs": [{
        "name": "codeHash",
        "type": "string"
      }]
    }, {
      "name": "owner",
      "inputs": [{
        "name": "answerId",
        "type": "uint32"
      }],
      "outputs": [{
        "name": "pubkey",
        "type": "uint256"
      }]
    }, {
      "name": "transferOwnership",
      "inputs": [{
        "name": "newOwner",
        "type": "uint256"
      }],
      "outputs": []
    }, {
      "name": "indexBasisCode",
      "inputs": [{
        "name": "answerId",
        "type": "uint32"
      }],
      "outputs": [{
        "name": "code",
        "type": "cell"
      }]
    }, {
      "name": "indexBasisCodeHash",
      "inputs": [{
        "name": "answerId",
        "type": "uint32"
      }],
      "outputs": [{
        "name": "hash",
        "type": "uint256"
      }]
    }, {
      "name": "resolveIndexBasis",
      "inputs": [{
        "name": "answerId",
        "type": "uint32"
      }],
      "outputs": [{
        "name": "indexBasis",
        "type": "address"
      }]
    }, {
      "name": "indexCode",
      "inputs": [{
        "name": "answerId",
        "type": "uint32"
      }],
      "outputs": [{
        "name": "code",
        "type": "cell"
      }]
    }, {
      "name": "indexCodeHash",
      "inputs": [{
        "name": "answerId",
        "type": "uint32"
      }],
      "outputs": [{
        "name": "hash",
        "type": "uint256"
      }]
    }, {
      "name": "getJson",
      "inputs": [{
        "name": "answerId",
        "type": "uint32"
      }],
      "outputs": [{
        "name": "json",
        "type": "string"
      }]
    }, {
      "name": "totalSupply",
      "inputs": [{
        "name": "answerId",
        "type": "uint32"
      }],
      "outputs": [{
        "name": "count",
        "type": "uint128"
      }]
    }, {
      "name": "nftCode",
      "inputs": [{
        "name": "answerId",
        "type": "uint32"
      }],
      "outputs": [{
        "name": "code",
        "type": "cell"
      }]
    }, {
      "name": "nftCodeHash",
      "inputs": [{
        "name": "answerId",
        "type": "uint32"
      }],
      "outputs": [{
        "name": "codeHash",
        "type": "uint256"
      }]
    }, {
      "name": "nftAddress",
      "inputs": [{
        "name": "answerId",
        "type": "uint32"
      }, {
        "name": "id",
        "type": "uint256"
      }],
      "outputs": [{
        "name": "nft",
        "type": "address"
      }]
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
      "name": "mintAddress",
      "inputs": [],
      "outputs": [{
        "name": "mintAddress",
        "type": "address"
      }]
    }],
    "data": [{
      "key": 1,
      "name": "_nonce",
      "type": "uint64"
    }],
    "events": [{
      "name": "OwnershipTransferred",
      "inputs": [{
        "name": "oldOwner",
        "type": "uint256"
      }, {
        "name": "newOwner",
        "type": "uint256"
      }],
      "outputs": []
    }, {
      "name": "NftCreated",
      "inputs": [{
        "name": "id",
        "type": "uint256"
      }, {
        "name": "nft",
        "type": "address"
      }, {
        "name": "owner",
        "type": "address"
      }, {
        "name": "manager",
        "type": "address"
      }, {
        "name": "creator",
        "type": "address"
      }],
      "outputs": []
    }, {
      "name": "NftBurned",
      "inputs": [{
        "name": "id",
        "type": "uint256"
      }, {
        "name": "nft",
        "type": "address"
      }, {
        "name": "owner",
        "type": "address"
      }, {
        "name": "manager",
        "type": "address"
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
      "name": "_supportedInterfaces",
      "type": "optional(cell)"
    }, {
      "name": "_codeNft",
      "type": "cell"
    }, {
      "name": "_totalSupply",
      "type": "uint128"
    }, {
      "name": "_json",
      "type": "string"
    }, {
      "name": "_codeIndex",
      "type": "cell"
    }, {
      "name": "_codeIndexBasis",
      "type": "cell"
    }, {
      "name": "_indexDeployValue",
      "type": "uint128"
    }, {
      "name": "_indexDestroyValue",
      "type": "uint128"
    }, {
      "name": "_deployIndexBasisValue",
      "type": "uint128"
    }, {
      "name": "_owner",
      "type": "uint256"
    }, {
      "name": "_remainOnNft",
      "type": "uint128"
    }, {
      "name": "_lastTokenId",
      "type": "uint128"
    }, {
      "name": "_mintingFee",
      "type": "uint128"
    }, {
      "name": "_nonce",
      "type": "uint64"
    }, {
      "name": "mintAddress",
      "type": "address"
    }]
  },
  tvc: "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",
  code: "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",
  codeHash: "a6ad23df98eb3b3aab206401d7005e46e6e522f4d1ebcc68cf1e494ddd6da7a1"
};
module.exports = {
  CollectionContract
};

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
        "name": "value0",
        "type": "address"
      }, {
        "name": "amount",
        "type": "uint128"
      }, {
        "name": "sender",
        "type": "address"
      }, {
        "name": "value3",
        "type": "address"
      }, {
        "name": "value4",
        "type": "address"
      }, {
        "name": "value5",
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
      "name": "setFarmingSpeed",
      "inputs": [{
        "name": "newSpeed",
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
      "name": "farmingSpeed",
      "inputs": [],
      "outputs": [{
        "name": "farmingSpeed",
        "type": "uint128"
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
      "name": "FARMING_DEPLOY_VALUE",
      "type": "uint128"
    }, {
      "name": "DEPLOY_VALUE",
      "type": "uint128"
    }, {
      "name": "MIN_BALANCE",
      "type": "uint128"
    }, {
      "name": "MESSAGE_VALUE",
      "type": "uint128"
    }, {
      "name": "MIN_MESSAGE",
      "type": "uint128"
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
      "name": "farmingSpeed",
      "type": "uint128"
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
  codeHash: "6d1eb32dba14a75770d50da654dc3b4fca1099ce3105621a156394fe942e7900"
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
      "name": "setGameMap",
      "inputs": [{
        "name": "_gameMap",
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
      "inputs": [],
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
      "name": "setGameStatus",
      "inputs": [{
        "name": "gameAddress",
        "type": "address"
      }, {
        "name": "newStatus",
        "type": "uint8"
      }],
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
      "name": "onWinnerSet",
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
      }, {
        "name": "winnerAddress",
        "type": "address"
      }],
      "outputs": []
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
    }, {
      "name": "isQueueFinished",
      "inputs": [],
      "outputs": [{
        "name": "isQueueFinished",
        "type": "bool"
      }]
    }, {
      "name": "gameMap",
      "inputs": [],
      "outputs": [{
        "name": "gameMap",
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
      "name": "FARMING_DEPLOY_VALUE",
      "type": "uint128"
    }, {
      "name": "DEPLOY_VALUE",
      "type": "uint128"
    }, {
      "name": "MIN_BALANCE",
      "type": "uint128"
    }, {
      "name": "MESSAGE_VALUE",
      "type": "uint128"
    }, {
      "name": "MIN_MESSAGE",
      "type": "uint128"
    }, {
      "name": "_randomNonce",
      "type": "uint64"
    }, {
      "name": "currentGameId",
      "type": "uint32"
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
      "name": "queueAddress",
      "type": "address"
    }, {
      "name": "isQueueFinished",
      "type": "bool"
    }, {
      "name": "gameMap",
      "type": "address"
    }]
  },
  tvc: "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",
  code: "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",
  codeHash: "cbed903dc00307ad8ebaa7881bc1733218e4a02de0003dbc79d2a56bf2c29b42"
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
      "name": "FARMING_DEPLOY_VALUE",
      "type": "uint128"
    }, {
      "name": "DEPLOY_VALUE",
      "type": "uint128"
    }, {
      "name": "MIN_BALANCE",
      "type": "uint128"
    }, {
      "name": "MESSAGE_VALUE",
      "type": "uint128"
    }, {
      "name": "MIN_MESSAGE",
      "type": "uint128"
    }, {
      "name": "gameAddress",
      "type": "address"
    }, {
      "name": "gameId",
      "type": "uint32"
    }]
  },
  tvc: "te6ccgECFwEAArEAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAgaK2zUWBAQkiu1TIOMDIMD/4wIgwP7jAvILEwYFFQPE7UTQ10nDAfhmifhpIds80wABjh2BAgDXGCD5AQHTAAGU0/8DAZMC+ELiIPhl+RDyqJXTAAHyeuLTPwH4QyG58rQg+COBA+iogggbd0CgufK0+GPTHwH4I7zyudMfAds88jwPDQcDUu1E0NdJwwH4ZiLQ0wP6QDD4aak4ANwhxwDjAiHXDR/yvCHjAwHbPPI8EhIHAiggghBD06QduuMCIIIQR1ZU3LrjAhAIBHAw+EJu4wD4RvJzIZPU0dDe+kDR+EGIyM+OK2zWzM7J2zwgbvJ/0PpAMPhJxwXy4+v4APhv2zzyAA0WCgkAWPhQ+E/4TvhN+Ez4S/hK+EP4QsjL/8s/z4PLf8t/y3/Lf8t/WcjOyx/Nye1UAhjQIIs4rbNYxwWKiuILDAEK103Q2zwMAELXTNCLL0pA1yb0BDHTCTGLL0oY1yYg10rCAZLXTZIwbeICFu1E0NdJwgGOgOMNDhEBtnDtRND0BXBfQIlxJ4BA9A6T1wsfkXDi+HD4b/hu+G34bPhr+GqAQPQO8r3XC//4YnD4Y4IQF9eEAPhqghAR4aMA+GuCEAvrwgD4bIIQC+vCAPhtghAF9eEA+G4PAEOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAU4w0ds8+E8hjhuNBHAAAAAAAAAAAAAAAAAw9OkHYMjOzslw+wDe8gARAFztRNDT/9M/0wAx03/Tf9N/03/Tf9TR0PpA0x/R+HD4b/hu+G34bPhr+Gr4Y/hiAAr4RvLgTAIK9KQg9KEVFAAUc29sIDAuNTguMQAAAAwg+GHtHtk=",
  code: "te6ccgECFAEAAoQAAgaK2zUTAQQkiu1TIOMDIMD/4wIgwP7jAvILEAMCEgPE7UTQ10nDAfhmifhpIds80wABjh2BAgDXGCD5AQHTAAGU0/8DAZMC+ELiIPhl+RDyqJXTAAHyeuLTPwH4QyG58rQg+COBA+iogggbd0CgufK0+GPTHwH4I7zyudMfAds88jwMCgQDUu1E0NdJwwH4ZiLQ0wP6QDD4aak4ANwhxwDjAiHXDR/yvCHjAwHbPPI8Dw8EAiggghBD06QduuMCIIIQR1ZU3LrjAg0FBHAw+EJu4wD4RvJzIZPU0dDe+kDR+EGIyM+OK2zWzM7J2zwgbvJ/0PpAMPhJxwXy4+v4APhv2zzyAAoTBwYAWPhQ+E/4TvhN+Ez4S/hK+EP4QsjL/8s/z4PLf8t/y3/Lf8t/WcjOyx/Nye1UAhjQIIs4rbNYxwWKiuIICQEK103Q2zwJAELXTNCLL0pA1yb0BDHTCTGLL0oY1yYg10rCAZLXTZIwbeICFu1E0NdJwgGOgOMNCw4BtnDtRND0BXBfQIlxJ4BA9A6T1wsfkXDi+HD4b/hu+G34bPhr+GqAQPQO8r3XC//4YnD4Y4IQF9eEAPhqghAR4aMA+GuCEAvrwgD4bIIQC+vCAPhtghAF9eEA+G4MAEOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAU4w0ds8+E8hjhuNBHAAAAAAAAAAAAAAAAAw9OkHYMjOzslw+wDe8gAOAFztRNDT/9M/0wAx03/Tf9N/03/Tf9TR0PpA0x/R+HD4b/hu+G34bPhr+Gr4Y/hiAAr4RvLgTAIK9KQg9KESEQAUc29sIDAuNTguMQAAAAwg+GHtHtk=",
  codeHash: "e5b082b62a3cae41e39b8bc7e10380cb8125fabfda847df64d56c753fc619a32"
};
module.exports = {
  GameIndexContract
};

/***/ }),

/***/ 7894:
/***/ (function(module) {

const NftContract = {
  abi: {
    "ABI version": 2,
    "version": "2.2",
    "header": ["pubkey", "time", "expire"],
    "functions": [{
      "name": "constructor",
      "inputs": [{
        "name": "owner",
        "type": "address"
      }, {
        "name": "gameManager",
        "type": "address"
      }, {
        "name": "sendGasTo",
        "type": "address"
      }, {
        "name": "remainOnNft",
        "type": "uint128"
      }, {
        "name": "json",
        "type": "string"
      }, {
        "name": "indexDeployValue",
        "type": "uint128"
      }, {
        "name": "indexDestroyValue",
        "type": "uint128"
      }, {
        "name": "codeIndex",
        "type": "cell"
      }],
      "outputs": []
    }, {
      "name": "getJson",
      "inputs": [{
        "name": "answerId",
        "type": "uint32"
      }],
      "outputs": [{
        "name": "json",
        "type": "string"
      }]
    }, {
      "name": "setParams",
      "inputs": [{
        "name": "_paramType",
        "type": "uint8"
      }, {
        "name": "_paramIndex",
        "type": "uint128"
      }, {
        "name": "_paramValue",
        "type": "uint128"
      }, {
        "name": "_paramArray",
        "type": "uint8[]"
      }, {
        "name": "_applyNumTimes",
        "type": "uint8"
      }],
      "outputs": []
    }, {
      "name": "setJson",
      "inputs": [{
        "name": "json",
        "type": "string"
      }],
      "outputs": []
    }, {
      "name": "getParams",
      "inputs": [],
      "outputs": [{
        "name": "_paramType",
        "type": "uint8"
      }, {
        "name": "_paramIndex",
        "type": "uint128"
      }, {
        "name": "_paramValue",
        "type": "uint128"
      }, {
        "name": "_paramArray",
        "type": "uint8[]"
      }, {
        "name": "_applyNumTimes",
        "type": "uint8"
      }]
    }, {
      "name": "burn",
      "inputs": [{
        "name": "dest",
        "type": "address"
      }],
      "outputs": []
    }, {
      "name": "applyNft",
      "inputs": [{
        "name": "_gameAddress",
        "type": "address"
      }, {
        "name": "_targetPlayerAddress",
        "type": "address"
      }],
      "outputs": []
    }, {
      "name": "indexCode",
      "inputs": [{
        "name": "answerId",
        "type": "uint32"
      }],
      "outputs": [{
        "name": "code",
        "type": "cell"
      }]
    }, {
      "name": "indexCodeHash",
      "inputs": [{
        "name": "answerId",
        "type": "uint32"
      }],
      "outputs": [{
        "name": "hash",
        "type": "uint256"
      }]
    }, {
      "name": "resolveIndex",
      "inputs": [{
        "name": "answerId",
        "type": "uint32"
      }, {
        "name": "collection",
        "type": "address"
      }, {
        "name": "owner",
        "type": "address"
      }],
      "outputs": [{
        "name": "index",
        "type": "address"
      }]
    }, {
      "name": "transfer",
      "inputs": [{
        "name": "to",
        "type": "address"
      }, {
        "name": "sendGasTo",
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
      "name": "changeOwner",
      "inputs": [{
        "name": "newOwner",
        "type": "address"
      }, {
        "name": "sendGasTo",
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
      "name": "changeManager",
      "inputs": [{
        "name": "newManager",
        "type": "address"
      }, {
        "name": "sendGasTo",
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
      "name": "getInfo",
      "inputs": [{
        "name": "answerId",
        "type": "uint32"
      }],
      "outputs": [{
        "name": "id",
        "type": "uint256"
      }, {
        "name": "owner",
        "type": "address"
      }, {
        "name": "manager",
        "type": "address"
      }, {
        "name": "collection",
        "type": "address"
      }]
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
    }],
    "data": [{
      "key": 1,
      "name": "_id",
      "type": "uint256"
    }],
    "events": [{
      "name": "NftCreated",
      "inputs": [{
        "name": "id",
        "type": "uint256"
      }, {
        "name": "owner",
        "type": "address"
      }, {
        "name": "manager",
        "type": "address"
      }, {
        "name": "collection",
        "type": "address"
      }],
      "outputs": []
    }, {
      "name": "OwnerChanged",
      "inputs": [{
        "name": "oldOwner",
        "type": "address"
      }, {
        "name": "newOwner",
        "type": "address"
      }],
      "outputs": []
    }, {
      "name": "ManagerChanged",
      "inputs": [{
        "name": "oldManager",
        "type": "address"
      }, {
        "name": "newManager",
        "type": "address"
      }],
      "outputs": []
    }, {
      "name": "NftBurned",
      "inputs": [{
        "name": "id",
        "type": "uint256"
      }, {
        "name": "owner",
        "type": "address"
      }, {
        "name": "manager",
        "type": "address"
      }, {
        "name": "collection",
        "type": "address"
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
      "name": "_supportedInterfaces",
      "type": "optional(cell)"
    }, {
      "name": "_id",
      "type": "uint256"
    }, {
      "name": "_collection",
      "type": "address"
    }, {
      "name": "_owner",
      "type": "address"
    }, {
      "name": "_manager",
      "type": "address"
    }, {
      "name": "_json",
      "type": "string"
    }, {
      "name": "_indexDeployValue",
      "type": "uint128"
    }, {
      "name": "_indexDestroyValue",
      "type": "uint128"
    }, {
      "name": "_codeIndex",
      "type": "cell"
    }, {
      "name": "FARMING_DEPLOY_VALUE",
      "type": "uint128"
    }, {
      "name": "DEPLOY_VALUE",
      "type": "uint128"
    }, {
      "name": "MIN_BALANCE",
      "type": "uint128"
    }, {
      "name": "MESSAGE_VALUE",
      "type": "uint128"
    }, {
      "name": "MIN_MESSAGE",
      "type": "uint128"
    }, {
      "name": "paramType",
      "type": "uint8"
    }, {
      "name": "paramIndex",
      "type": "uint128"
    }, {
      "name": "paramValue",
      "type": "uint128"
    }, {
      "name": "paramArray",
      "type": "uint8[]"
    }, {
      "name": "applyNumTimes",
      "type": "uint8"
    }]
  },
  tvc: "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",
  code: "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",
  codeHash: "60fb122509a0697940d949544e2e0b83d4f992986e5607bf6f241af85897f248"
};
module.exports = {
  NftContract
};

/***/ }),

/***/ 682:
/***/ (function(module) {

const IndexContract = {
  abi: {
    "ABI version": 2,
    "version": "2.2",
    "header": ["time"],
    "functions": [{
      "name": "constructor",
      "inputs": [{
        "name": "collection",
        "type": "address"
      }],
      "outputs": []
    }, {
      "name": "getInfo",
      "inputs": [{
        "name": "answerId",
        "type": "uint32"
      }],
      "outputs": [{
        "name": "collection",
        "type": "address"
      }, {
        "name": "owner",
        "type": "address"
      }, {
        "name": "nft",
        "type": "address"
      }]
    }, {
      "name": "destruct",
      "inputs": [{
        "name": "gasReceiver",
        "type": "address"
      }],
      "outputs": []
    }],
    "data": [{
      "key": 1,
      "name": "_nft",
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
      "name": "_nft",
      "type": "address"
    }, {
      "name": "_collection",
      "type": "address"
    }, {
      "name": "_owner",
      "type": "address"
    }]
  }
};
module.exports = {
  IndexContract
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
      "name": "setOracleAddress",
      "inputs": [{
        "name": "_oracleAddress",
        "type": "address"
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
          "name": "farmingSpeed",
          "type": "uint128"
        }, {
          "name": "blockColorsProbability",
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
        "name": "value0",
        "type": "address"
      }, {
        "name": "amount",
        "type": "uint128"
      }, {
        "name": "sender",
        "type": "address"
      }, {
        "name": "value3",
        "type": "address"
      }, {
        "name": "value4",
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
      "inputs": [],
      "outputs": []
    }, {
      "name": "deployFarmingWallet",
      "inputs": [],
      "outputs": []
    }, {
      "name": "askFarmingSpeed",
      "inputs": [{
        "name": "walletOwner",
        "type": "address"
      }],
      "outputs": []
    }, {
      "name": "runNftAction",
      "inputs": [{
        "name": "nftId",
        "type": "uint256"
      }, {
        "name": "opData",
        "type": "cell"
      }],
      "outputs": []
    }, {
      "name": "onVerifyNft",
      "inputs": [{
        "name": "isNftVerified",
        "type": "bool"
      }, {
        "name": "callbackData",
        "type": "cell"
      }],
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
      "name": "drawNFT",
      "inputs": [],
      "outputs": []
    }, {
      "name": "oracleAddress",
      "inputs": [],
      "outputs": [{
        "name": "oracleAddress",
        "type": "address"
      }]
    }, {
      "name": "blockColors",
      "inputs": [],
      "outputs": [{
        "name": "blockColors",
        "type": "uint8[]"
      }]
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
      "name": "FARMING_DEPLOY_VALUE",
      "type": "uint128"
    }, {
      "name": "DEPLOY_VALUE",
      "type": "uint128"
    }, {
      "name": "MIN_BALANCE",
      "type": "uint128"
    }, {
      "name": "MESSAGE_VALUE",
      "type": "uint128"
    }, {
      "name": "MIN_MESSAGE",
      "type": "uint128"
    }, {
      "name": "mSortablePlayers",
      "type": "optional(cell)"
    }, {
      "name": "oracleAddress",
      "type": "address"
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
      "name": "farmingSpeed",
      "type": "uint128"
    }, {
      "name": "blockColorsProbability",
      "type": "uint8"
    }, {
      "name": "blockColors",
      "type": "uint8[]"
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
  codeHash: "e5322b605e5b1b0d22464f238c84605c077fb655e5d98d096050214c76994047"
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
  codeHash: "e34d09807ef5576caaa5a21546cdc92ac0d699ade27bc336a5330345354728d7"
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
  codeHash: "3824795e30bac2c37b0a5e5c175078b51d4d32580f28c7234a96a05cafba6603"
};
module.exports = {
  TokenWalletContract
};

/***/ }),

/***/ 2784:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm.js
var vue_runtime_esm = __webpack_require__(144);
// EXTERNAL MODULE: ./node_modules/vue-i18n/dist/vue-i18n.esm.js
var vue_i18n_esm = __webpack_require__(7152);
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App.vue?vue&type=template&id=3e9cc052&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[(this.$store.state.Ever.isLoading)?_c('div',{staticClass:"overlay overlay-background"},[_c('b-spinner',{attrs:{"variant":"primary"}})],1):_vm._e(),_c('div',[_c('div',{staticClass:"color-1",attrs:{"id":"color-1"}}),_c('div',{staticClass:"color-2",attrs:{"id":"color-2"}}),_c('div',{staticClass:"color-3",attrs:{"id":"color-3"}}),_c('div',{staticClass:"color-4",attrs:{"id":"color-4"}}),_c('div',{staticClass:"color-5",attrs:{"id":"color-5"}}),_c('ever-loader')],1),(!_vm.noGames && !_vm.gamePending && _vm.providerLoaded && !this.$store.state.Ever.isLoading)?_c('div',{staticClass:"game-container"},[_c('div',{staticClass:"game-container-wrapper"},[_c('top-menu',{staticClass:"stat-block pt-1 position-relative",attrs:{"id":"top-menu"}}),_c('div',{staticClass:"branded-bg",attrs:{"id":"field"}},[_c('div',{attrs:{"id":"field-bg-overlay"}},[_c('router-view')],1)]),_c('bottom-menu',{attrs:{"id":"bottom-menu"}})],1)]):_vm._e(),(!_vm.noGames && !_vm.gamePending && !_vm.providerLoaded && !this.$store.state.Ever.isLoading)?_c('div',{staticClass:"game-container"},[_vm._m(0)]):_vm._e(),(!_vm.noGames && _vm.gamePending && !this.$store.state.Ever.isLoading)?_c('div',{staticClass:"game-container-timer"},[_c('game-countdown')],1):_vm._e(),(_vm.noGames && !this.$store.state.Ever.isLoading)?_c('div',{staticClass:"game-container-timer"},[_c('game-list-empty')],1):_vm._e()])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"game-error-notification"},[_c('div',{staticClass:"p-4 stat-block text-center"},[_vm._v("PileBlocks requires the EVER wallet to launch. Please install the "),_c('span',{staticClass:"color-primary"},[_c('u',[_c('a',{attrs:{"href":"https://l1.broxus.com/","target":"_blank"}},[_vm._v("EVER wallet")])])]),_vm._v(" or update the permissions")])])}]


;// CONCATENATED MODULE: ./src/App.vue?vue&type=template&id=3e9cc052&

;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/BottomMenu.vue?vue&type=template&id=2e2886ad&scoped=true&
var BottomMenuvue_type_template_id_2e2886ad_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"bottom-menu"}},[(_vm.isBalancePositive && !_vm.isGameCompleted)?_c('div',{attrs:{"id":"pile-colors"}},[_vm._l((5),function(item){return _c('div',{key:item},[_c('bottom-menu-color',{attrs:{"btn-color":item}})],1)}),_c('button',{staticClass:"btn btn-menu",attrs:{"type":"button","disabled":_vm.isLoading},on:{"click":_vm.showNftMenu}},[_c('span',{staticClass:"span p-1"},[_vm._v(_vm._s(_vm.$t('bottomMenu.nft')))]),_vm._m(0),_vm._m(1)])],2):_vm._e(),(_vm.isBalancePositive && !_vm.isGameCompleted)?_c('div',{attrs:{"id":"claim-tiles"}},[(!_vm.tilesArePut)?_c('div',{staticClass:"d-flex flex-sm-column flex-md-row"},[(this.$store.state.PlayerInfo.isFarmingActive)?_c('button',{staticClass:"btn btn-menu mt-2 claim-btn",attrs:{"type":"button"},on:{"click":_vm.claimTiles}},[_c('span',{directives:[{name:"show",rawName:"v-show",value:(!_vm.isLoading),expression:"!isLoading"}],staticClass:"span"},[_vm._v(_vm._s(_vm.$t('bottomMenu.claim'))+" "),_c('small',{directives:[{name:"show",rawName:"v-show",value:(this.tempClaimableTiles > 0),expression:"this.tempClaimableTiles > 0"}],class:_vm.setAnimationClass},[_c('br'),_vm._v(_vm._s(this.tempClaimableTiles))])]),_c('b-spinner',{directives:[{name:"show",rawName:"v-show",value:(_vm.isLoading),expression:"isLoading"}],staticClass:"span button-spinner",attrs:{"small":""}}),_vm._m(2),_vm._m(3)],1):_vm._e(),(this.$store.state.PlayerInfo.isFarmingActive)?_c('button',{staticClass:"btn btn-menu mt-2",attrs:{"type":"button"},on:{"click":_vm.showFarmingSettings}},[_c('img',{attrs:{"src":__webpack_require__(9706),"alt":"Farming Settings"}}),_vm._m(4),_vm._m(5)]):_vm._e(),(!this.$store.state.PlayerInfo.isFarmingActive)?_c('button',{staticClass:"btn btn-menu",attrs:{"type":"button"},on:{"click":_vm.joinGame}},[_c('span',{directives:[{name:"show",rawName:"v-show",value:(!_vm.isLoading),expression:"!isLoading"}],staticClass:"span p-2"},[_vm._v(_vm._s(_vm.$t('bottomMenu.join')))]),_c('b-spinner',{directives:[{name:"show",rawName:"v-show",value:(_vm.isLoading),expression:"isLoading"}],staticClass:"span button-spinner",attrs:{"small":""}}),_vm._m(6),_vm._m(7)],1):_vm._e()]):_vm._e(),(_vm.tilesArePut && !_vm.isMainScreen)?_c('div',{staticClass:"d-flex flex-column mt-1"},[_c('button',{staticClass:"btn btn-menu",attrs:{"type":"button"},on:{"click":_vm.putTiles}},[_c('span',{directives:[{name:"show",rawName:"v-show",value:(!_vm.isLoading),expression:"!isLoading"}],staticClass:"span"},[_vm._v(_vm._s(_vm.$t('bottomMenu.put'))),_c('small',[_vm._v(_vm._s(this.$store.state.Game.tilesToPut.length))])]),_c('b-spinner',{directives:[{name:"show",rawName:"v-show",value:(_vm.isLoading),expression:"isLoading"}],staticClass:"span button-spinner",attrs:{"small":""}}),_vm._m(8),_vm._m(9)],1),_c('button',{directives:[{name:"show",rawName:"v-show",value:(!_vm.isLoading),expression:"!isLoading"}],staticClass:"btn btn-menu",attrs:{"type":"button"},on:{"click":_vm.cancelPut}},[_c('span',{directives:[{name:"show",rawName:"v-show",value:(!_vm.isLoading),expression:"!isLoading"}],staticClass:"span"},[_vm._v(_vm._s(_vm.$t('bottomMenu.cancel')))]),_vm._m(10),_vm._m(11)])]):_vm._e()]):_vm._e(),(_vm.isGameCompleted)?_c('div',{staticClass:"claim-reward"},[(this.$store.state.PlayerInfo.isFarmingActive)?_c('button',{staticClass:"btn btn-menu claim-btn",attrs:{"type":"button"},on:{"click":_vm.showFarmingSettings}},[_c('img',{attrs:{"src":__webpack_require__(9706),"alt":"Farming Settings"}}),_vm._m(12),_vm._m(13)]):_vm._e()]):_vm._e(),_c('b-modal',{attrs:{"id":"farming-settings","hide-footer":"","title":_vm.$t('bottomMenu.farmingSettings.title')},scopedSlots:_vm._u([{key:"modal-header-close",fn:function(){return [_c('img',{attrs:{"src":__webpack_require__(3583)}})]},proxy:true}])},[_c('p',[_vm._v(_vm._s(_vm.$t('bottomMenu.farmingSettings.p1')))]),_c('p',[_vm._v(_vm._s(_vm.$t('bottomMenu.farmingSettings.p2'))),_c('b',[_vm._v(_vm._s(_vm._f("fixed")(this.$store.state.PlayerInfo.balance)))]),_vm._v(" PILE")]),_c('p',[_vm._v(_vm._s(_vm.$t('bottomMenu.farmingSettings.p3'))),_c('b',[_vm._v(_vm._s(_vm._f("fixed")(this.$store.state.PlayerInfo.farmingBalance)))]),_vm._v(" PILE "),_c('span',{staticClass:"pr-1",on:{"click":_vm.releaseFarming}},[_c('i',{staticClass:"bi bi-x-circle-fill btn-reject"})])]),_c('p',[_vm._v(_vm._s(_vm.$t('bottomMenu.farmingSettings.p4')))]),_c('b-input-group',{attrs:{"size":"sm"}},[_c('b-form-input',{ref:"farmingSettingsInput",attrs:{"placeholder":_vm.$t('bottomMenu.farmingSettings.placeholderBalance'),"size":"sm","state":_vm.validateAddBalance()},on:{"focus":function($event){return $event.target.select()}},model:{value:(_vm.tokensToAdd),callback:function ($$v) {_vm.tokensToAdd=$$v},expression:"tokensToAdd"}})],1),_c('b-form-invalid-feedback',{attrs:{"state":_vm.validateAddBalance()}},[_c('span',[_vm._v(_vm._s(_vm.$t('bottomMenu.farmingSettings.error')))])]),_c('p',[_vm._v(_vm._s(_vm.$t('bottomMenu.farmingSettings.youGet'))),_c('br'),_vm._v(" "),_c('b',[_vm._v(_vm._s(_vm.farmingEstimation))]),_vm._v(" "+_vm._s(_vm.$t('bottomMenu.farmingSettings.tileMin')))]),_c('div',{staticClass:"d-flex justify-content-end"},[_c('button',{staticClass:"btn btn-menu",attrs:{"type":"button","disabled":isNaN(_vm.tokensToAdd) || _vm.tokensToAdd.length === 0 || _vm.tokensToAdd === 0},on:{"click":_vm.putFarming}},[_c('span',{staticClass:"span p-2"},[_vm._v(_vm._s(_vm.$t('bottomMenu.farmingSettings.addToFarming')))]),_c('span',{staticClass:"btn__border"},[_c('span',{staticClass:"btn__border-top"}),_c('span',{staticClass:"btn__border-bot"})]),_c('span',{staticClass:"btn__inner btn__inner-main"},[_c('span',{staticClass:"btn__inner-shadow"}),_c('span',{staticClass:"btn__inner-rect"})])])])],1),_c('b-modal',{attrs:{"id":"nft-menu","hide-footer":"","title":_vm.$t('bottomMenu.nftMenu.title')},scopedSlots:_vm._u([{key:"modal-header-close",fn:function(){return [_c('img',{attrs:{"src":__webpack_require__(3583)}})]},proxy:true}])},[_c('nft-menu')],1)],1)}
var BottomMenuvue_type_template_id_2e2886ad_scoped_true_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"btn__border"},[_c('span',{staticClass:"btn__border-top"}),_c('span',{staticClass:"btn__border-bot"})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"btn__inner btn__inner-main"},[_c('span',{staticClass:"btn__inner-shadow"}),_c('span',{staticClass:"btn__inner-rect"})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"btn__border"},[_c('span',{staticClass:"btn__border-top"}),_c('span',{staticClass:"btn__border-bot"})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"btn__inner btn__inner-main"},[_c('span',{staticClass:"btn__inner-shadow"}),_c('span',{staticClass:"btn__inner-rect"})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"btn__border"},[_c('span',{staticClass:"btn__border-top"}),_c('span',{staticClass:"btn__border-bot"})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"btn__inner btn__inner-main"},[_c('span',{staticClass:"btn__inner-shadow"}),_c('span',{staticClass:"btn__inner-rect"})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"btn__border"},[_c('span',{staticClass:"btn__border-top"}),_c('span',{staticClass:"btn__border-bot"})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"btn__inner btn__inner-main"},[_c('span',{staticClass:"btn__inner-shadow"}),_c('span',{staticClass:"btn__inner-rect"})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"btn__border"},[_c('span',{staticClass:"btn__border-top"}),_c('span',{staticClass:"btn__border-bot"})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"btn__inner btn__inner-main"},[_c('span',{staticClass:"btn__inner-shadow"}),_c('span',{staticClass:"btn__inner-rect"})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"btn__border"},[_c('span',{staticClass:"btn__border-top"}),_c('span',{staticClass:"btn__border-bot"})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"btn__inner btn__inner-danger"},[_c('span',{staticClass:"btn__inner-shadow"})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"btn__border"},[_c('span',{staticClass:"btn__border-top"}),_c('span',{staticClass:"btn__border-bot"})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"btn__inner btn__inner-main"},[_c('span',{staticClass:"btn__inner-shadow"}),_c('span',{staticClass:"btn__inner-rect"})])}]


;// CONCATENATED MODULE: ./src/components/BottomMenu.vue?vue&type=template&id=2e2886ad&scoped=true&

;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/BottomMenuColor.vue?vue&type=template&id=8457a640&scoped=true&
var BottomMenuColorvue_type_template_id_8457a640_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ml-0 mt-md-2 mt-1"},[_c('div',{staticClass:"btn balance-menu",on:{"click":_vm.setActiveColor}},[_c('div',{staticClass:"d-flex"},[_c('div',{class:_vm.colorClass},[_vm._v(_vm._s(this.btnColor))]),_c('span',{staticClass:"xxs-text span"},[_vm._v(_vm._s(_vm.paddedColorNum))])]),_vm._m(0),_c('span',{staticClass:"btn__inner-menu",class:{'btn__inner-menu-active': _vm.isActive==='primary'}})])])}
var BottomMenuColorvue_type_template_id_8457a640_scoped_true_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"btn__border"},[_c('span',{staticClass:"btn__border-top"}),_c('span',{staticClass:"btn__border-bot"})])}]


;// CONCATENATED MODULE: ./src/components/BottomMenuColor.vue?vue&type=template&id=8457a640&scoped=true&

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/BottomMenuColor.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
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
      let basicClass = "span color-span d-inline-block mr-2 small no-outline ";

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
  BottomMenuColorvue_type_template_id_8457a640_scoped_true_render,
  BottomMenuColorvue_type_template_id_8457a640_scoped_true_staticRenderFns,
  false,
  null,
  "8457a640",
  null
  
)

/* harmony default export */ var BottomMenuColor = (component.exports);
// EXTERNAL MODULE: ./src/AppConst.js
var AppConst = __webpack_require__(8270);
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/NftMenu.vue?vue&type=template&id=7b9eadb2&scoped=true&
var NftMenuvue_type_template_id_7b9eadb2_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"d-flex justify-content-center flex-wrap"},[_vm._l((this.$store.state.Nft.nfts),function(nft){return _c('div',{directives:[{name:"show",rawName:"v-show",value:(!_vm.isLocalLoading),expression:"!isLocalLoading"}],key:nft.id},[_c('nft-item',{attrs:{"nft":nft}})],1)}),_c('b-spinner',{directives:[{name:"show",rawName:"v-show",value:(_vm.isLocalLoading),expression:"isLocalLoading"}],staticClass:"span button-spinner",attrs:{"small":""}}),(this.$store.state.Nft.nfts.length === 0)?_c('p',[_vm._v(" "+_vm._s(_vm.$t('bottomMenu.nftMenu.noNfts'))),_c('a',{attrs:{"href":"https://t.me/pileblocks_group","target":"_blank"}},[_vm._v(_vm._s(_vm.$t('bottomMenu.nftMenu.ourTgGroup')))])]):_vm._e()],2)}
var NftMenuvue_type_template_id_7b9eadb2_scoped_true_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/NftItem.vue?vue&type=template&id=2e98a05e&scoped=true&
var NftItemvue_type_template_id_2e98a05e_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"card__overlay m-1"},[_c('img',{staticClass:"card__img m-1",class:{'card__img__disabled': _vm.isLoading},attrs:{"src":_vm.nft.preview.source}}),_c('div',{staticClass:"d-flex justify-content-center"},[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.selectedPlayer),expression:"selectedPlayer"},{name:"show",rawName:"v-show",value:(_vm.nft.nftType !== _vm.OP_SET_BLOCK_COLOR),expression:"nft.nftType !== OP_SET_BLOCK_COLOR"}],attrs:{"aria-label":"Default select example","disabled":_vm.isLoading},on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.selectedPlayer=$event.target.multiple ? $$selectedVal : $$selectedVal[0]}}},_vm._l((_vm.$store.state.Game.standings),function(player){return _c('option',{key:player.playerAddress,domProps:{"value":player.playerAddress}},[_vm._v(_vm._s(_vm._f("short")(player.playerAddress)))])}),0),_c('button',{staticClass:"btn btn-menu ml-2",attrs:{"type":"button","disabled":_vm.isLoading},on:{"click":_vm.applyNft}},[_c('span',{staticClass:"span p-1"},[_vm._v(_vm._s(_vm.$t('bottomMenu.nftMenu.apply')))]),_vm._m(0),_vm._m(1)])])])}
var NftItemvue_type_template_id_2e98a05e_scoped_true_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"btn__border"},[_c('span',{staticClass:"btn__border-top"}),_c('span',{staticClass:"btn__border-bot"})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"btn__inner btn__inner-main"},[_c('span',{staticClass:"btn__inner-shadow"}),_c('span',{staticClass:"btn__inner-rect"})])}]


;// CONCATENATED MODULE: ./src/components/NftItem.vue?vue&type=template&id=2e98a05e&scoped=true&

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/NftItem.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var NftItemvue_type_script_lang_js_ = ({
  name: "NftItem",
  data: function () {
    return {
      selectedPlayer: '',
      OP_SET_BLOCK_COLOR: AppConst/* OP_SET_BLOCK_COLOR */.eu
    };
  },
  props: ['nft'],
  methods: {
    applyNft: async function () {
      let applyTarget = this.selectedPlayer === '' ? this.$store.state.PlayerInfo.playerAddress : this.selectedPlayer;

      try {
        this.$store.commit('Ever/isOpInProgress', true);
        await this.$store.dispatch('Ever/applyNft', {
          nftAddress: this.nft.nftAddress,
          targetPlayer: applyTarget
        });
      } catch (e) {
        this.$store.commit('Ever/isOpInProgress', false);
        console.log(e);
      }
    }
  },
  computed: {
    isLoading: function () {
      //return true
      return this.$store.state.Ever.operationInProgress;
    }
  },

  async mounted() {
    console.log(this.nft);
  }

});
;// CONCATENATED MODULE: ./src/components/NftItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_NftItemvue_type_script_lang_js_ = (NftItemvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/NftItem.vue?vue&type=style&index=0&id=2e98a05e&scoped=true&lang=css&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/NftItem.vue?vue&type=style&index=0&id=2e98a05e&scoped=true&lang=css&

;// CONCATENATED MODULE: ./src/components/NftItem.vue



;


/* normalize component */

var NftItem_component = (0,componentNormalizer/* default */.Z)(
  components_NftItemvue_type_script_lang_js_,
  NftItemvue_type_template_id_2e98a05e_scoped_true_render,
  NftItemvue_type_template_id_2e98a05e_scoped_true_staticRenderFns,
  false,
  null,
  "2e98a05e",
  null
  
)

/* harmony default export */ var NftItem = (NftItem_component.exports);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/NftMenu.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var NftMenuvue_type_script_lang_js_ = ({
  name: "NftMenu",
  data: function () {
    return {
      isLocalLoading: false
    };
  },
  components: {
    NftItem: NftItem
  },
  methods: {},
  computed: {},

  async mounted() {
    this.isLocalLoading = true;
    await this.$store.dispatch('Ever/reloadNft', this.everx);
    this.isLocalLoading = false;
  }

});
;// CONCATENATED MODULE: ./src/components/NftMenu.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_NftMenuvue_type_script_lang_js_ = (NftMenuvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/NftMenu.vue?vue&type=style&index=0&id=7b9eadb2&scoped=true&lang=css&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/NftMenu.vue?vue&type=style&index=0&id=7b9eadb2&scoped=true&lang=css&

;// CONCATENATED MODULE: ./src/components/NftMenu.vue



;


/* normalize component */

var NftMenu_component = (0,componentNormalizer/* default */.Z)(
  components_NftMenuvue_type_script_lang_js_,
  NftMenuvue_type_template_id_7b9eadb2_scoped_true_render,
  NftMenuvue_type_template_id_7b9eadb2_scoped_true_staticRenderFns,
  false,
  null,
  "7b9eadb2",
  null
  
)

/* harmony default export */ var NftMenu = (NftMenu_component.exports);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/BottomMenu.vue?vue&type=script&lang=js&



/* harmony default export */ var BottomMenuvue_type_script_lang_js_ = ({
  name: "BottomMenu",
  components: {
    NftMenu: NftMenu,
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
        this.tempClaimableTiles = 0;
      } catch (e) {
        this.$store.commit('Ever/isOpInProgress', false);
        this.errorHandler(e);
        console.log(e);
      }
    },
    putTiles: async function () {
      if (this.$store.state.PlayerInfo.balance * 10 ** 9 < this.$store.state.Game.payPerMove) {
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
        await this.$store.dispatch('Ever/getLockedInFarming');
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
        await this.$store.dispatch('Ever/getLockedInFarming');
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
    showFarmingSettings: function () {
      this.$bvModal.show('farming-settings');
      this.$store.dispatch('Ever/updateFarmingEstimation', {
        time: 60,
        balance: (parseInt(this.tokensToAdd) + this.$store.state.PlayerInfo.farmingBalance) * 1e9
      });
    },
    showNftMenu: function () {
      this.$bvModal.show('nft-menu');
    }
  },
  watch: {
    claimableTilesWatcher: async function (newReward, oldReward) {
      console.log(`NEW VALUE:${newReward}, OLD VALUE: ${oldReward}`);

      if (newReward > oldReward + 10) {
        this.tempClaimableTiles = newReward;
        return;
      }

      if (newReward < oldReward) {
        this.tempClaimableTiles = 0;
        return;
      }

      if (newReward === 0) {
        this.tempClaimableTiles = 0;
        return;
      }

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

      for (let i = oldReward; i <= newReward; i++) {
        chain = chain.then(() => changeValue(i)).then(() => sleep(50));
      }

      await chain;
    },
    tokensToAdd: async function (newValue) {
      if (parseInt(newValue) >= 0 && parseInt(newValue) + this.$store.state.PlayerInfo.farmingBalance > 0) {
        await this.$store.dispatch('Ever/updateFarmingEstimation', {
          time: 60,
          balance: (parseInt(this.tokensToAdd) + this.$store.state.PlayerInfo.farmingBalance) * 1e9
        });
      }
    }
  },
  computed: {
    claimableTilesWatcher: function () {
      return this.$store.state.PlayerInfo.claimableTiles;
    },
    farmingEstimation: function () {
      return this.$store.state.PlayerInfo.farmingEstimation;
    },
    farmingBalanceWatcher: function () {
      return this.$store.state.PlayerInfo.farmingBalance;
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
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/BottomMenu.vue?vue&type=style&index=0&id=2e2886ad&scoped=true&lang=css&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/BottomMenu.vue?vue&type=style&index=0&id=2e2886ad&scoped=true&lang=css&

;// CONCATENATED MODULE: ./src/components/BottomMenu.vue



;


/* normalize component */

var BottomMenu_component = (0,componentNormalizer/* default */.Z)(
  components_BottomMenuvue_type_script_lang_js_,
  BottomMenuvue_type_template_id_2e2886ad_scoped_true_render,
  BottomMenuvue_type_template_id_2e2886ad_scoped_true_staticRenderFns,
  false,
  null,
  "2e2886ad",
  null
  
)

/* harmony default export */ var BottomMenu = (BottomMenu_component.exports);
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/TopMenu.vue?vue&type=template&id=b67c05bc&scoped=true&
var TopMenuvue_type_template_id_b67c05bc_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{attrs:{"id":"top-menu-player-info"}},[_c('div',{staticClass:"btn balance-menu"},[_c('div',{staticClass:"d-flex flex-column"},[_c('div',{staticClass:"span"},[_c('img',{staticClass:"coin-logo",attrs:{"src":__webpack_require__(3811),"alt":"PileBlocks Token Logo"}}),_c('fancy-number',{attrs:{"value":this.$store.getters["PlayerInfo/getBalance"]}})],1),_c('span',{staticClass:"span text-left small-text"},[_vm._v(_vm._s(_vm.$t('topMenu.yourPlace'))+_vm._s(_vm.playerPosition))])]),_vm._m(0),_c('span',{staticClass:"btn__inner-menu"}),_c('img',{staticClass:"balance-info-popup",attrs:{"src":__webpack_require__(214),"alt":""},on:{"click":function($event){return _vm.$bvModal.show('sale-token')}}})])]),_c('div',{attrs:{"id":"top-menu-game-stats"}},[_c('button',{staticClass:"btn btn-menu",attrs:{"type":"button"},on:{"click":function($event){return _vm.$bvModal.show('standings-table')}}},[_c('div',[_c('img',{staticClass:"button-icon",attrs:{"src":__webpack_require__(8107),"alt":"Reload"}}),_c('span',{staticClass:"span pl-1"},[_vm._v(_vm._s(_vm.$store.state.Game.standings.length))])]),_vm._m(1),_vm._m(2)])]),_c('div',{attrs:{"id":"top-menu-game-reload"}},[_c('button',{staticClass:"btn btn-menu",attrs:{"type":"button","disabled":_vm.isOpInProgress},on:{"click":_vm.reloadGame}},[_c('img',{directives:[{name:"show",rawName:"v-show",value:(!_vm.isLoading),expression:"!isLoading"}],staticClass:"button-icon",attrs:{"src":__webpack_require__(6021),"alt":"Reload"}}),_c('b-spinner',{directives:[{name:"show",rawName:"v-show",value:(_vm.isLoading),expression:"isLoading"}],staticClass:"span button-spinner",attrs:{"small":""}}),_vm._m(3),_vm._m(4)],1)]),_c('div',{attrs:{"id":"top-menu-game-lang"}},[_c('button',{staticClass:"btn btn-menu",attrs:{"type":"button"}},[(_vm.$i18n.locale !== 'en')?_c('img',{staticClass:"button-icon",attrs:{"src":__webpack_require__(7244),"alt":""},on:{"click":function($event){return _vm.changeLocale('en')}}}):_vm._e(),(_vm.$i18n.locale !== 'kr')?_c('img',{staticClass:"button-icon",attrs:{"src":__webpack_require__(9597),"alt":""},on:{"click":function($event){return _vm.changeLocale('kr')}}}):_vm._e(),_vm._m(5),_vm._m(6)]),_c('b-modal',{attrs:{"id":"standings-table","hide-footer":"","title":_vm.$t('topMenu.standings.title')},scopedSlots:_vm._u([{key:"modal-header-close",fn:function(){return [_c('img',{attrs:{"src":__webpack_require__(3583)}})]},proxy:true}])},[_c('b-container',{staticClass:"p-0 mb-4",attrs:{"fluid":""}},[_c('b-row',[_c('b-col',{staticClass:"font-weight-bold text-right"},[_vm._v(_vm._s(_vm.$t('topMenu.standings.place')))]),_c('b-col',{staticClass:"font-weight-bold text-center"},[_vm._v(_vm._s(_vm.$t('topMenu.standings.wallet')))]),_c('b-col',{staticClass:"font-weight-bold text-center"},[_vm._v(_vm._s(_vm.$t('topMenu.standings.points')))]),(_vm.$store.state.Game.totalReward > 0)?_c('b-col',{staticClass:"font-weight-bold"},[_vm._v(_vm._s(_vm.$t('topMenu.standings.reward')))]):_vm._e()],1),_vm._l((_vm.$store.state.Game.standings),function(player,index){return _c('b-row',{key:player.playerAddress,class:{active: _vm.isCurrentPlayer(player.playerAddress)}},[_c('b-col',{staticClass:"text-right"},[(player.nft)?_c('span',{staticClass:"nft"},[_c('a',{attrs:{"href":'https://everscan.io/accounts/'+player.playerAddress,"target":"_blank"}},[_vm._v("win")])]):_vm._e(),_vm._v(" "+_vm._s(index + 1)+" ")]),_c('b-col',{staticClass:"text-center"},[_vm._v(_vm._s(_vm._f("short")(player.playerAddress)))]),_c('b-col',{staticClass:"text-center p-0"},[_vm._v(_vm._s(player.captured)+" "),(player.stars > 0)?_c('span',[_vm._v(" ("+_vm._s(player.stars)),_c('i',{staticClass:"bi bi-star-fill small"}),_vm._v(") ")]):_vm._e()]),(_vm.$store.state.Game.totalReward > 0)?_c('b-col',{staticClass:"text-center"},[_vm._v(_vm._s(_vm._f("fixed")(player.reward)))]):_vm._e()],1)})],2)],1),_c('b-modal',{attrs:{"id":"sale-token","hide-footer":"","title":_vm.$t('topMenu.getTokens.title')},scopedSlots:_vm._u([{key:"modal-header-close",fn:function(){return [_c('img',{attrs:{"src":__webpack_require__(3583)}})]},proxy:true}])},[_c('p',[_vm._v(_vm._s(_vm.$t('topMenu.getTokens.p1')))]),_c('p',[_c('a',{attrs:{"href":"https://app.octusbridge.io/bridge","target":"_blank"}},[_vm._v(_vm._s(_vm.$t('topMenu.getTokens.p2')))])]),_c('p',[_vm._v(_vm._s(_vm.$t('topMenu.getTokens.p3')))]),_c('p',[_c('a',{attrs:{"href":"https://app.flatqube.io/tokens/0:dbba0028173f5b8d09eb597e0cca88cb41a4875efdf8a1815bb31292f150f800","target":"_blank"}},[_vm._v(_vm._s(_vm.$t('topMenu.getTokens.p4')))])])])],1),_c('toast-list')],1)}
var TopMenuvue_type_template_id_b67c05bc_scoped_true_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"btn__border"},[_c('span',{staticClass:"btn__border-top"}),_c('span',{staticClass:"btn__border-bot"})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"btn__border"},[_c('span',{staticClass:"btn__border-top"}),_c('span',{staticClass:"btn__border-bot"})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"btn__inner btn__inner-main"},[_c('span',{staticClass:"btn__inner-shadow"}),_c('span',{staticClass:"btn__inner-rect"})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"btn__border"},[_c('span',{staticClass:"btn__border-top"}),_c('span',{staticClass:"btn__border-bot"})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"btn__inner btn__inner-main"},[_c('span',{staticClass:"btn__inner-shadow"}),_c('span',{staticClass:"btn__inner-rect"})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"btn__border"},[_c('span',{staticClass:"btn__border-top"}),_c('span',{staticClass:"btn__border-bot"})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"btn__inner btn__inner-main"},[_c('span',{staticClass:"btn__inner-shadow"}),_c('span',{staticClass:"btn__inner-rect"})])}]


;// CONCATENATED MODULE: ./src/components/TopMenu.vue?vue&type=template&id=b67c05bc&scoped=true&

// EXTERNAL MODULE: ./node_modules/bignumber.js/bignumber.js
var bignumber = __webpack_require__(4431);
var bignumber_default = /*#__PURE__*/__webpack_require__.n(bignumber);
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/FancyNumber.vue?vue&type=template&id=191f2c3a&scoped=true&
var FancyNumbervue_type_template_id_191f2c3a_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"d-inline"},[_vm._v(" "+_vm._s(_vm.valueInt)),_c('small',[_vm._v("."+_vm._s(_vm.valueFloat))])])}
var FancyNumbervue_type_template_id_191f2c3a_scoped_true_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/FancyNumber.vue?vue&type=script&lang=js&
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
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/ToastList.vue?vue&type=template&id=3fe2d266&scoped=true&
var ToastListvue_type_template_id_3fe2d266_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"notification-div"},[_c('img',{attrs:{"src":__webpack_require__(7311),"alt":""}}),_c('div',{staticClass:"notification-content"},[_c('button',{class:_vm.setAnimationClass,attrs:{"type":"button","disabled":_vm.$store.state.Toast.messagesNumber === 0},on:{"click":_vm.openNotifications}},[(_vm.$store.state.Toast.hasNewItems)?_c('img',{staticClass:"button-icon",attrs:{"src":__webpack_require__(7000),"alt":"Existing notifications"}}):_vm._e(),(!_vm.$store.state.Toast.hasNewItems)?_c('img',{staticClass:"button-icon",attrs:{"src":__webpack_require__(6872),"alt":"No notifications"}}):_vm._e(),(_vm.$store.state.Toast.hasNewItems)?_c('img',{staticClass:"pl-1",attrs:{"src":__webpack_require__(3794),"alt":"New notificatoins"}}):_vm._e(),_vm._m(0),_vm._m(1)])])]),_c('b-modal',{attrs:{"id":"show-notifications","hide-footer":"","title":_vm.$t('toastList.popupTitle')},scopedSlots:_vm._u([{key:"modal-header-close",fn:function(){return [_c('img',{attrs:{"src":__webpack_require__(3583)}})]},proxy:true}])},[_vm._l((this.$store.state.Toast.messages.slice().reverse()),function(message,index){return _c('div',{key:index},[(message.payload.toastName === 'wrong-color')?_c('div',[_c('div',{staticClass:"small"},[_vm._v(" "+_vm._s(new Date(message.received).toLocaleTimeString())+" ")]),_c('div',[_vm._v(" "+_vm._s(_vm.$t('toast.anotherColorText1'))),_c('div',{class:_vm._getColorClassByNum(message.payload.data.colorNumber)},[_vm._v(_vm._s(message.payload.data.colorNumber))]),_vm._v(" "+_vm._s(_vm.$t('toast.anotherColorText2'))+" ")]),_c('hr')]):_vm._e(),(message.payload.toastName === 'zero-tiles-left')?_c('div',[_c('div',{staticClass:"small"},[_vm._v(" "+_vm._s(new Date(message.received).toLocaleTimeString())+" ")]),_c('div',[_vm._v(" "+_vm._s(_vm.$t('toast.noColorLeftText1'))),_c('div',{class:_vm._getColorClassByNum(message.payload.data.colorNumber)},[_vm._v(_vm._s(message.payload.data.colorNumber))]),_vm._v(_vm._s(_vm.$t('toast.noColorLeftText2'))),_c('br'),_c('p',{domProps:{"innerHTML":_vm._s(_vm.$t('toast.noColorLeftText3'))}}),_c('img',{attrs:{"src":__webpack_require__(2923),"width":"131","height":"53","alt":""}}),_c('br'),_c('br'),_c('p',{domProps:{"innerHTML":_vm._s(_vm.$t('toast.noColorLeftText4'))}})]),_c('hr')]):_vm._e(),(message.payload.toastName === '50-tiles-put')?_c('div',[_c('div',{staticClass:"small"},[_vm._v(" "+_vm._s(new Date(message.received).toLocaleTimeString())+" ")]),_c('div',[_c('div',[_vm._v(_vm._s(_vm.$t('toast.tilesLimitReachedTitle'))+" ")])]),_c('hr')]):_vm._e(),(message.payload.toastName === 'zero-balance')?_c('div',[_c('div',{staticClass:"small"},[_vm._v(" "+_vm._s(new Date(message.received).toLocaleTimeString())+" ")]),_c('div',[_c('p',{domProps:{"innerHTML":_vm._s(_vm.$t('toast.zeroBalanceText1'))}})]),_c('hr')]):_vm._e(),(message.payload.toastName === 'zero-claim')?_c('div',[_c('div',{staticClass:"small"},[_vm._v(" "+_vm._s(new Date(message.received).toLocaleTimeString())+" ")]),_c('div',[_c('p',{domProps:{"innerHTML":_vm._s(_vm.$t('toast.noTilesToClaimText1'))}}),_c('p',{domProps:{"innerHTML":_vm._s(_vm.$t('toast.noTilesToClaimText2'))}})]),_c('hr')]):_vm._e(),(message.payload.toastName === 'not-enough-pile-to-put')?_c('div',[_c('div',{staticClass:"small"},[_vm._v(" "+_vm._s(new Date(message.received).toLocaleTimeString())+" ")]),_c('div',[_c('p',{domProps:{"innerHTML":_vm._s(_vm.$t('toast.putBalanceNotEnoughText1', {'balance': message.payload.data.balance, 'payPerMove': message.payload.data.payPerMove}))}})]),_c('hr')]):_vm._e(),(message.payload.toastName === 'op-in-progress')?_c('div',[_c('div',{staticClass:"small"},[_vm._v(" "+_vm._s(new Date(message.received).toLocaleTimeString())+" ")]),_c('div',[_vm._v(" "+_vm._s(_vm.$t('toast.operationInProgressText1'))+" ")]),_c('hr')]):_vm._e(),(message.payload.toastName === 'message-expired')?_c('div',[_c('div',{staticClass:"small"},[_vm._v(" "+_vm._s(new Date(message.received).toLocaleTimeString())+" ")]),_c('div',[_vm._v(" "+_vm._s(_vm.$t('toast.operationFailedText1'))+" ")]),_c('hr')]):_vm._e(),(message.payload.toastName === 'on-put-tiles')?_c('div',[_c('div',{staticClass:"small"},[_vm._v(" "+_vm._s(new Date(message.received).toLocaleTimeString())+" ")]),_c('div',[_c('p',{domProps:{"innerHTML":_vm._s(_vm.$t('toast.activityDetectedPut', {putValue: message.payload.data.putValue}))}})]),_c('hr')]):_vm._e(),(message.payload.toastName === 'on-claim-tiles')?_c('div',[_c('div',{staticClass:"small"},[_vm._v(" "+_vm._s(new Date(message.received).toLocaleTimeString())+" ")]),_c('div',[_c('p',{domProps:{"innerHTML":_vm._s(_vm.$t('toast.activityDetectedClaim', {claimValue: message.payload.data.claimValue}))}})]),_c('hr')]):_vm._e(),(message.payload.toastName === 'star-claimed')?_c('div',[_c('div',{staticClass:"small"},[_vm._v(" "+_vm._s(new Date(message.received).toLocaleTimeString())+" ")]),_c('div',[_c('p',{domProps:{"innerHTML":_vm._s(_vm.$t('toast.starReceivedText1', {pointsGained: message.payload.data.pointsGained}))}})]),_c('hr')]):_vm._e(),(message.payload.toastName === 'on-nft-applied')?_c('div',[_c('div',{staticClass:"small"},[_vm._v(" "+_vm._s(new Date(message.received).toLocaleTimeString())+" ")]),_c('div',[_c('p',{domProps:{"innerHTML":_vm._s(_vm.$t('toast.nftAppliedText1', {nftType: _vm.resolveNftType(message.payload.data.nftType)}))}})]),_c('hr')]):_vm._e()])}),_c('button',{staticClass:"btn btn-menu",attrs:{"type":"button"},on:{"click":_vm.clearNotifications}},[_c('span',{staticClass:"span p-2"},[_vm._v(_vm._s(_vm.$t('toastList.clearNotifications')))]),_c('span',{staticClass:"btn__border"},[_c('span',{staticClass:"btn__border-top"}),_c('span',{staticClass:"btn__border-bot"})]),_c('span',{staticClass:"btn__inner btn__inner-main"},[_c('span',{staticClass:"btn__inner-shadow"})])])],2)],1)}
var ToastListvue_type_template_id_3fe2d266_scoped_true_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"btn__border"},[_c('span',{staticClass:"btn__border-top"}),_c('span',{staticClass:"btn__border-bot"})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"btn__inner btn__inner-main"},[_c('span',{staticClass:"btn__inner-shadow"}),_c('span',{staticClass:"btn__inner-rect"})])}]


;// CONCATENATED MODULE: ./src/components/ToastList.vue?vue&type=template&id=3fe2d266&scoped=true&

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/ToastList.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var ToastListvue_type_script_lang_js_ = ({
  name: "ToastList",

  data() {
    return {
      setAnimationClassDefault: "btn btn-menu",
      setAnimationClass: "btn btn-menu"
    };
  },

  methods: {
    _getColorClassByNum(colorNum) {
      return `color-span color-${colorNum} d-inline-block text-center height-16`;
    },

    openNotifications: function () {
      this.$store.commit('Toast/readAll');
      this.$bvModal.show('show-notifications');
    },
    clearNotifications: function () {
      this.$store.commit('Toast/clearAll');
    },
    resolveNftType: function (nftType) {
      switch (nftType) {
        case AppConst/* OP_SET_BLOCK_COLOR */.eu:
          return this.$t('toast.nftType.trap');

        case AppConst/* OP_CHANGE_FARM_SPEED */.$L:
          return this.$t('toast.nftType.farmSpeed');

        case AppConst/* OP_MINUS_CAPTURED_TILES */.nr:
        case AppConst/* OP_PLUS_CAPTURED_TILES */.I8:
          return this.$t('toast.nftType.points');

        case AppConst/* OP_MINUS_COLORS */.qd:
          return this.$t('toast.nftType.colorTiles');
      }
    }
  },
  computed: {
    newItems: function () {
      return this.$store.state.Toast.messages;
    }
  },
  watch: {
    newItems: function () {
      this.setAnimationClass = this.setAnimationClassDefault + " color-change-2x";
      setTimeout(() => {
        this.setAnimationClass = this.setAnimationClassDefault;
      }, 2000);
    }
  }
});
;// CONCATENATED MODULE: ./src/components/ToastList.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ToastListvue_type_script_lang_js_ = (ToastListvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/ToastList.vue?vue&type=style&index=0&id=3fe2d266&scoped=true&lang=css&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/ToastList.vue?vue&type=style&index=0&id=3fe2d266&scoped=true&lang=css&

;// CONCATENATED MODULE: ./src/components/ToastList.vue



;


/* normalize component */

var ToastList_component = (0,componentNormalizer/* default */.Z)(
  components_ToastListvue_type_script_lang_js_,
  ToastListvue_type_template_id_3fe2d266_scoped_true_render,
  ToastListvue_type_template_id_3fe2d266_scoped_true_staticRenderFns,
  false,
  null,
  "3fe2d266",
  null
  
)

/* harmony default export */ var ToastList = (ToastList_component.exports);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/TopMenu.vue?vue&type=script&lang=js&




/* harmony default export */ var TopMenuvue_type_script_lang_js_ = ({
  name: "TopMenu",
  components: {
    FancyNumber: FancyNumber,
    ToastList: ToastList
  },
  data: function () {
    return {
      animatedReward: "",
      setAnimationClass: "reward-base ",
      isLoading: false,
      saleTokenAddress: "0:dbba0028173f5b8d09eb597e0cca88cb41a4875efdf8a1815bb31292f150f800",
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
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/TopMenu.vue?vue&type=style&index=0&id=b67c05bc&scoped=true&lang=css&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/TopMenu.vue?vue&type=style&index=0&id=b67c05bc&scoped=true&lang=css&

;// CONCATENATED MODULE: ./src/components/TopMenu.vue



;


/* normalize component */

var TopMenu_component = (0,componentNormalizer/* default */.Z)(
  components_TopMenuvue_type_script_lang_js_,
  TopMenuvue_type_template_id_b67c05bc_scoped_true_render,
  TopMenuvue_type_template_id_b67c05bc_scoped_true_staticRenderFns,
  false,
  null,
  "b67c05bc",
  null
  
)

/* harmony default export */ var TopMenu = (TopMenu_component.exports);
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/EverLoader.vue?vue&type=template&id=138d281a&scoped=true&
var EverLoadervue_type_template_id_138d281a_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div')}
var EverLoadervue_type_template_id_138d281a_scoped_true_staticRenderFns = []


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
      console.log("API getWallet call run");
      return result.value0.toString();
    }
  },
  calc: {
    calcFarming: async function (calcContract, time, tokenBalance) {
      const result = await calcContract.methods.calcFarming({
        time: time,
        tokenBalance: tokenBalance
      }).call();
      console.log("API calcFarming call run");
      return parseInt(result.farmValue);
    }
  },
  host: {
    getCurrentGameId: async function (gHost) {
      const result = await gHost.methods.currentGameId({}).call();
      console.log("API getCurrentGameId call run");
      return parseInt(result.currentGameId);
    },
    isQueueFinished: async function (gHost) {
      const result = await gHost.methods.isQueueFinished({}).call();
      console.log("API isNextGameEmpty call run");
      return result.value0;
    },
    _getIndexAddress: async function (gHost, gameId) {
      const result = await gHost.methods.getIndexAddress({
        _gameId: gameId
      }).call();
      console.log("API _getIndexAddress call run");
      return result.value0;
    },
    getRewardPerGame: async function (gHost) {
      const result = await gHost.methods.getRewardPerGame({}).call();
      console.log("API getRewardPerGame call run");
      return parseInt(result.value0 / 1e9);
    }
  },
  index: {
    getGameAddress: async function (gameIndex) {
      const result = await gameIndex.methods.gameAddress({}).call();
      console.log("API getGameAddress call run");
      return result.gameAddress;
    }
  },
  game: {
    getGameInfo: async function (game) {
      const result = await game.methods.getInfo({}).call();
      console.log("API getGameInfo call run");
      return result.value0;
    },
    getGameExtraSettings: async function (game) {
      const result = await game.methods.getGameExtraSettings({}).call();
      console.log("API getGameExtraSettings call run");
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
      console.log("API getFarmingAddress call run");
      return result.value0;
    },
    deployFarmingWallet: async function (game, playerAddress) {
      const pAddress = new dist.Address(playerAddress);
      await game.methods.deployFarmingWallet({}).send({
        from: pAddress,
        amount: '1000000000',
        bounce: true
      });
    },
    getField: async function (game) {
      const result = await game.methods.field({}).call();
      console.log("API getField call run");
      return result.field;
    },
    getTemplate: async function (game) {
      const result = await game.methods.template({}).call();
      console.log("API getTemplate call run");
      return result.template;
    },
    getPlayers: async function (game) {
      const result = await game.methods.players({}).call();
      console.log("API getPlayers call run");
      return result.players;
    },
    getColors: async function (game) {
      const result = await game.methods.playerColors({}).call();
      console.log("API getColors call run");
      return result.playerColors;
    },
    packTiles: async function (gameContract, tiles) {
      const result = await gameContract.methods.packTiles({
        tiles: tiles
      }).call();
      console.log("API packTiles call run");
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
      console.log("API getBalance call run");
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
      console.log("API getTiles call run");
      return parseInt(result.value0);
    },
    getLockedInFarming: async function (walletContract) {
      const result = await walletContract.methods._balance({}).call();
      console.log("API getLockedInFarming call run");
      return parseInt(result._balance) / 1e9;
    },
    calcFarming: async function (walletContract, time, tokenBalance) {
      const result = await walletContract.methods.calcFarming({
        time: time,
        tokenBalance: tokenBalance
      }).call();
      console.log("API calcFarming call run");
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
  },
  nftCollection: {
    nftOwnerCodeHash: async function (collectionContract, playerAddress) {
      const result = await collectionContract.methods.nftOwnerCodeHash({
        _nftOwner: playerAddress
      }).call();
      console.log("API nftOwnerCodeHash call run");
      return result.codeHash;
    }
  },
  nftIndex: {
    getNftAddress: async function (nftIndexContract) {
      const result = await nftIndexContract.methods.getInfo({
        answerId: 1
      }).call();
      console.log("API getNftAddress call run");
      return result.nft._address;
    },
    getPlayerNftIndexes: async function (everx, ownerHash) {
      let queryString = `query {
                accounts(
                    filter: {
                      code_hash: {eq: "${ownerHash}"
                      }
                    }
                ) {id}
            }`;
      let response = await everx.net.query({
        "query": queryString
      });
      return response.result.data.accounts.map(item => item['id']);
    }
  },
  nft: {
    getNftJson: async function (nftContract) {
      const result = await nftContract.methods.getJson({
        answerId: 1
      }).call();
      console.log("API getNftAddress call run");
      return JSON.parse(result.json);
    },
    applyNft: async function (nftContract, playerAddress, gameAddress, targetPlayerAddress) {
      const pAddress = new dist.Address(playerAddress);
      await nftContract.methods.applyNft({
        _gameAddress: gameAddress,
        _targetPlayerAddress: targetPlayerAddress
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
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/EverLoader.vue?vue&type=script&lang=js&









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
      const tokenRootAddress = new dist.Address("0:dbba0028173f5b8d09eb597e0cca88cb41a4875efdf8a1815bb31292f150f800");
      const tokenRoot = new ever.Contract(TokenRoot.TokenRootContract.abi, tokenRootAddress);
      this.$store.commit("Ever/updateTokenRoot", tokenRoot);
    },
    initHost: function (ever) {
      const hostAddress = new dist.Address("0:d5c7d73aefb8056f0fac4239b04346cb0e1ee2dcd5f5511f223887907cd98575");
      const host = new ever.Contract(GameHost.GameHostContract.abi, hostAddress);
      this.$store.commit("Ever/updateHost", host);
    },
    initGame: async function (ever) {
      let host = this.$store.state.Ever.host;
      let updateLastGameId = parseInt(await EverAPI.host.getCurrentGameId(host)) - 1;
      this.$store.commit("Game/updateLastGameId", updateLastGameId);

      if (host !== null) {
        let currentGameId = 0;

        if (this.$route.name === "Game") {
          currentGameId = parseInt(this.$route.params.id) + 1;
        } else {
          currentGameId = await EverAPI.host.getCurrentGameId(host);
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
        await this.$store.dispatch('Ever/reloadNft', this.everx);
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

          case "nftApplied":
            this.$store.commit('Toast/sendToast', {
              toastName: "on-nft-applied",
              data: {
                nftType: parseInt(op.value)
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
    const ever = new dist.ProviderRpcClient({});

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
    this.setGameId(gameInfo);

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
      if (this.$store.state.PlayerInfo.isFarmingActive && !this.$store.state.Ever.operationInProgress && this.$store.state.PlayerInfo.farmingBalance > 0) {
        this.$store.dispatch('Ever/setClaimTiles');
      }

      if (this.$store.state.PlayerInfo.farmingBalance === 0) {
        this.$store.commit('PlayerInfo/updateClaimableTiles', 0);
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
  EverLoadervue_type_template_id_138d281a_scoped_true_render,
  EverLoadervue_type_template_id_138d281a_scoped_true_staticRenderFns,
  false,
  null,
  "138d281a",
  null
  
)

/* harmony default export */ var EverLoader = (EverLoader_component.exports);
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/GameCountdown.vue?vue&type=template&id=4fe44b64&scoped=true&
var GameCountdownvue_type_template_id_4fe44b64_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"game-error-notification fancy-font stat-block"},[_vm._m(0),_c('div',{staticClass:"d-flex width-100 justify-content-center mb-4 countdown-box align-items-center"},[_c('div',{staticClass:"btn"},[_c('div',{staticClass:"time-cell d-flex flex-column span"},[_c('div',{staticClass:"text-center countdown-value"},[_vm._v(_vm._s(_vm.rDate.rDays))]),_c('div',{staticClass:"text-uppercase"},[_vm._v("days")])]),_vm._m(1),_c('span',{staticClass:"btn__inner-menu"})]),_c('div',{staticClass:"btn"},[_c('div',{staticClass:"time-cell d-flex flex-column span"},[_c('div',{staticClass:"text-center countdown-value"},[_vm._v(_vm._s(_vm.rDate.rHours))]),_c('div',{staticClass:"text-uppercase"},[_vm._v("hrs")])]),_vm._m(2),_c('span',{staticClass:"btn__inner-menu"})]),_c('div',{staticClass:"btn"},[_c('div',{staticClass:"time-cell d-flex flex-column span"},[_c('div',{staticClass:"text-center countdown-value"},[_vm._v(_vm._s(_vm.rDate.rMinutes))]),_c('div',{staticClass:"text-uppercase"},[_vm._v("min")])]),_vm._m(3),_c('span',{staticClass:"btn__inner-menu"})]),_c('div',{staticClass:"btn"},[_c('div',{staticClass:"time-cell d-flex flex-column span"},[_c('div',{staticClass:"text-center countdown-value"},[_vm._v(_vm._s(_vm.rDate.rSeconds))]),_c('div',{staticClass:"text-uppercase"},[_vm._v("sec")])]),_vm._m(4),_c('span',{staticClass:"btn__inner-menu"})])]),_c('div',{staticClass:"text-center mb-5"},[_vm._v(" Please reload the page once ready.")]),_c('game-navigation')],1)}
var GameCountdownvue_type_template_id_4fe44b64_scoped_true_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"text-center lead mb-4"},[_vm._v(" The new game "),_c('span',{staticClass:"emphasis"},[_vm._v("starts")]),_vm._v(" in:")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"btn__border"},[_c('span',{staticClass:"btn__border-top"}),_c('span',{staticClass:"btn__border-bot"})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"btn__border"},[_c('span',{staticClass:"btn__border-top"}),_c('span',{staticClass:"btn__border-bot"})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"btn__border"},[_c('span',{staticClass:"btn__border-top"}),_c('span',{staticClass:"btn__border-bot"})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"btn__border"},[_c('span',{staticClass:"btn__border-top"}),_c('span',{staticClass:"btn__border-bot"})])}]


;// CONCATENATED MODULE: ./src/components/GameCountdown.vue?vue&type=template&id=4fe44b64&scoped=true&

// EXTERNAL MODULE: ./src/components/GameNavigation.vue + 4 modules
var GameNavigation = __webpack_require__(7976);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/GameCountdown.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    GameNavigation: GameNavigation/* default */.Z
  },
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
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/GameCountdown.vue?vue&type=style&index=0&id=4fe44b64&scoped=true&lang=css&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/GameCountdown.vue?vue&type=style&index=0&id=4fe44b64&scoped=true&lang=css&

;// CONCATENATED MODULE: ./src/components/GameCountdown.vue



;


/* normalize component */

var GameCountdown_component = (0,componentNormalizer/* default */.Z)(
  components_GameCountdownvue_type_script_lang_js_,
  GameCountdownvue_type_template_id_4fe44b64_scoped_true_render,
  GameCountdownvue_type_template_id_4fe44b64_scoped_true_staticRenderFns,
  false,
  null,
  "4fe44b64",
  null
  
)

/* harmony default export */ var GameCountdown = (GameCountdown_component.exports);
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/GameListEmpty.vue?vue&type=template&id=1ffc1301&scoped=true&
var GameListEmptyvue_type_template_id_1ffc1301_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var GameListEmptyvue_type_template_id_1ffc1301_scoped_true_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"game-error-notification fancy-font stat-block"},[_c('div',{staticClass:"text-center lead mb-4"},[_vm._v("There are "),_c('span',{staticClass:"emphasis"},[_vm._v("No")]),_vm._v(" active games currently!")]),_c('div',{staticClass:"d-flex width-100 justify-content-evenly mb-4"},[_c('img',{attrs:{"src":__webpack_require__(2118)}})]),_c('div',{staticClass:"text-center"},[_vm._v(" Join our "),_c('a',{attrs:{"href":"https://t.me/pileblocks_group"}},[_c('span',{staticClass:"emphasis"},[_vm._v("@Telegram Channel")])]),_vm._v(" to get informed about the new games")])])}]


;// CONCATENATED MODULE: ./src/components/GameListEmpty.vue?vue&type=template&id=1ffc1301&scoped=true&

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/GameListEmpty.vue?vue&type=script&lang=js&
//
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
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/GameListEmpty.vue?vue&type=style&index=0&id=1ffc1301&scoped=true&lang=css&
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
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    ToastList: ToastList,
    GameListEmpty: GameListEmpty,
    GameCountdown: GameCountdown,
    EverLoader: EverLoader,
    TopMenu: TopMenu,
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
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/views/GamePic.vue?vue&type=template&id=69f8caf7&scoped=true&
var GamePicvue_type_template_id_69f8caf7_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"d-flex justify-content-center mt-2"},[_c('div',_vm._l((_vm.FIRST_FRAGMENT),function(f){return _c('div',{key:_vm.genKey(f, 0, 0),staticClass:"d-flex flex-column"},_vm._l((_vm.Y),function(y){return _c('div',{key:_vm.genKey(f, y, 0),staticClass:"d-flex"},_vm._l((_vm.X),function(x){return _c('div',{key:_vm.genKey(f, y, x),class:_vm.getClassByElement(x, y, f)})}),0)}),0)}),0),_c('div',_vm._l((_vm.SECOND_FRAGMENT),function(f){return _c('div',{key:_vm.genKey(f, 0, 0),staticClass:"d-flex flex-column"},_vm._l((_vm.Y),function(y){return _c('div',{key:_vm.genKey(f, y, 0),staticClass:"d-flex"},_vm._l((_vm.X),function(x){return _c('div',{key:_vm.genKey(f, y, x),class:_vm.getClassByElement(x, y, f)})}),0)}),0)}),0)])}
var GamePicvue_type_template_id_69f8caf7_scoped_true_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/views/GamePic.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
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
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/views/GamePic.vue?vue&type=style&index=0&id=69f8caf7&scoped=true&lang=css&
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

const Home = () => __webpack_require__.e(/* import() */ 37).then(__webpack_require__.bind(__webpack_require__, 37));

const FieldTilesPart = () => __webpack_require__.e(/* import() */ 686).then(__webpack_require__.bind(__webpack_require__, 9686));

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
  routes: routes,
  mode: 'history'
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
    columns: 0,
    lastGameId: 0
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

    updateLastGameId(state, newGameId) {
      state.lastGameId = newGameId;
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
    farmingBalance: 0,
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
    messages: [],
    messagesNumber: 0,
    hasNewItems: false
  },
  mutations: {
    sendToast(state, payload) {
      state.messages.push({
        received: Date.now(),
        payload: payload
      });
      state.messagesNumber += 1;
      state.hasNewItems = true;

      if (state.messagesNumber > 5) {
        state.messages.splice(0, 1);
        state.messagesNumber -= 1;
      }
    },

    readAll(state) {
      state.hasNewItems = false;
    },

    clearAll(state) {
      state.messages = [];
      state.messagesNumber = 0;
    }

  },
  actions: {},
  getters: {}
};
// EXTERNAL MODULE: ./src/contract_wrappers/TokenWallet.js
var TokenWallet = __webpack_require__(332);
// EXTERNAL MODULE: ./src/contract_wrappers/Nft.js
var Nft = __webpack_require__(7894);
// EXTERNAL MODULE: ./src/contract_wrappers/Collection.js
var Collection = __webpack_require__(319);
// EXTERNAL MODULE: ./src/contract_wrappers/NftIndex.js
var NftIndex = __webpack_require__(682);
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
      await dispatch('updateColors');
      await dispatch('setField');
    },

    async claimTiles({
      rootState
    }) {
      const wallet = rootState.PlayerInfo.farmingContract;
      await EverAPI.farmingWallet.claimTiles(wallet, rootState.PlayerInfo.playerAddress, "0:f2ff16460f846733744e017c598cd62454e7071f3bd788f91256645d45061da1");
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
    },

    async applyNft({
      state,
      rootState
    }, {
      nftAddress,
      targetPlayer
    }) {
      const ever = rootState.Ever.api;
      const nftContract = new ever.Contract(Nft.NftContract.abi, nftAddress);
      await EverAPI.nft.applyNft(nftContract, rootState.PlayerInfo.playerAddress, state.game._address.toString(), targetPlayer);
    },

    async reloadNft({
      rootState,
      commit
    }, everx) {
      const ever = rootState.Ever.api;

      async function getNftByIndex(nftIndexAddresses) {
        let nftAddresses = [];

        for (let indexAddress of nftIndexAddresses) {
          const nftIndexContract = new ever.Contract(NftIndex.IndexContract.abi, indexAddress);
          nftAddresses.push(await EverAPI.nftIndex.getNftAddress(nftIndexContract));
        }

        return nftAddresses;
      }

      async function getNftJson(nftAddress) {
        const nftContract = new ever.Contract(Nft.NftContract.abi, nftAddress);
        return await EverAPI.nft.getNftJson(nftContract);
      }

      async function getNftJsons(nftAddresses) {
        const nftJsons = [];

        for (const nftAddress of nftAddresses) {
          let nftJson = await getNftJson(nftAddress);
          nftJson["nftAddress"] = nftAddress;
          nftJsons.push(nftJson);
        }

        return nftJsons;
      }

      const nftCollectionContract = new ever.Contract(Collection.CollectionContract.abi, "0:507d46537d8e007949a7c4eec637c22a2fe27b1afbb09f1e0dfc6dfd37967ef3");
      const playerHash = await EverAPI.nftCollection.nftOwnerCodeHash(nftCollectionContract, rootState.PlayerInfo.playerAddress);
      const nftIndexAddresses = await EverAPI.nftIndex.getPlayerNftIndexes(everx, playerHash);
      const nftAddresses = await getNftByIndex(nftIndexAddresses);
      const nftJsons = await getNftJsons(nftAddresses);
      commit("Nft/updateNfts", nftJsons, {
        root: true
      });
    }

  },
  getters: {}
};
;// CONCATENATED MODULE: ./src/store/modules/Nft.js
const Nft_Nft = {
  namespaced: true,
  state: {
    nfts: []
  },
  mutations: {
    updateNfts(state, newNftsArray) {
      state.nfts = newNftsArray;
    }

  },
  actions: {},
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
    Ever: Ever,
    Nft: Nft_Nft
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
      nft: "NFT",
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
      },
      nftMenu: {
        title: "Your NFTs",
        apply: "Play",
        noNfts: "It seems that you do not own any NFTs yet. Please check out our Telegram group for options. ",
        ourTgGroup: "Our Telegram group"
      }
    },
    home: {
      remainingTiles: "Remaining:",
      yourPoints: "Your Points:",
      totalReward: "Total Reward:",
      previousGame: "Previous Game",
      nextGame: "Next Game"
    },
    toastList: {
      popupTitle: "Notifications",
      clearNotifications: "Clear All"
    },
    topMenu: {
      balance: "Balance: ",
      yourPlace: "place:",
      standings: {
        place: "Place",
        wallet: "Wallet",
        points: "Points",
        reward: "Reward",
        title: "Standings"
      },
      getTokens: {
        title: "Get PILE Tokens!",
        p1: "1. If you have crypto on ETH, BNB, Polygon or other blockchains, use OctusBridge to move your coins to Everscale and exchange them to EVER.",
        p2: "Go to OctusBridge",
        p3: "2. To get PILE tokens, visit FlatQube (our official DEX) and exchange EVER -> PILE.",
        p4: "Go to FlatQube"
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
      noColorLeftText4: "or <b>JOIN/CLAIM</b> more tiles.",
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
      starReceivedText1: "This ⭐star⭐ gives you  <b>+{pointsGained}</b> points!.",
      nftAppliedText1: "Someone has applied his ⭐NFT⭐, type  <b>{nftType}</b>!",
      nftType: {
        trap: "Trap",
        farmSpeed: "Farm Speed",
        points: "Points",
        colorTiles: "Color Tiles"
      }
    }
  }
});
;// CONCATENATED MODULE: ./i18n/kr.js
/* harmony default export */ var kr = ({
  kr: {
    bottomMenu: {
      nft: "NFT",
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
      },
      nftMenu: {
        title: "Your NFTs",
        apply: "Apply"
      }
    },
    home: {
      remainingTiles: "남은:",
      yourPoints: "귀하의 포인트:",
      totalReward: "총 보상:",
      previousGame: "이전 게임",
      nextGame: "다음 게임"
    },
    toastList: {
      popupTitle: "알림"
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
// EXTERNAL MODULE: ./node_modules/@tonclient/core/dist/index.js
var core_dist = __webpack_require__(3872);
;// CONCATENATED MODULE: ./src/api/EverX.js


const EverX = {
  install: function () {
    const client = new core_dist.TonClient({
      network: {
        endpoints: ["mainnet.evercloud.dev/98920ec24db6476981519b358f1401ce"]
      }
    });
    vue_runtime_esm["default"].prototype.everx = client;
  }
};
// EXTERNAL MODULE: ./node_modules/@tonclient/lib-web/index.js
var lib_web = __webpack_require__(9959);
;// CONCATENATED MODULE: ./src/main.js














core_dist.TonClient.useBinaryLibrary(lib_web/* libWeb */.v);
vue_runtime_esm["default"].config.productionTip = false; // Make BootstrapVue available throughout your project

vue_runtime_esm["default"].use(esm/* BootstrapVue */.XG7); // Optionally install the BootstrapVue icon components plugin

vue_runtime_esm["default"].use(icons_plugin/* IconsPlugin */.A7);
vue_runtime_esm["default"].use(toast/* ToastPlugin */.m$);
vue_runtime_esm["default"].use(vue_i18n_esm/* default */.Z);
vue_runtime_esm["default"].use(EverX);
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

/***/ 214:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "img/balance-information-popup.100cd780.svg";

/***/ }),

/***/ 3811:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "img/coin-logo.0044ef90.svg";

/***/ }),

/***/ 7244:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "img/gb_flag.b250ad6c.svg";

/***/ }),

/***/ 7000:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "img/icon-envelope.85532219.svg";

/***/ }),

/***/ 9706:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "img/icon-farming-settings.7b5532ac.svg";

/***/ }),

/***/ 9066:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "img/icon-nav-next.a92775a6.svg";

/***/ }),

/***/ 6158:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "img/icon-nav-prev.3a3f4e3f.svg";

/***/ }),

/***/ 3794:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "img/icon-new-envelope.fedd7812.svg";

/***/ }),

/***/ 6872:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "img/icon-notifications-read.2e99cdd4.svg";

/***/ }),

/***/ 6021:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "img/icon-reload.a1349670.svg";

/***/ }),

/***/ 8107:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "img/icon-standings.7152560c.svg";

/***/ }),

/***/ 7311:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "img/icon-top-menu-notifications.db32b012.svg";

/***/ }),

/***/ 9597:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "img/kr_flag.431aa92d.svg";

/***/ }),

/***/ 3583:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "img/popup-close-button.cd0a9e04.svg";

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
/******/ 			return "js/" + chunkId + "." + {"37":"f784dd21","686":"d6aca97e"}[chunkId] + ".js";
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.miniCssF = function(chunkId) {
/******/ 			// return url for filenames based on template
/******/ 			return "css/" + chunkId + "." + {"37":"947ae0e7","686":"d50b0083"}[chunkId] + ".css";
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
/******/ 			var cssChunks = {"37":1,"686":1};
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [998], function() { return __webpack_require__(2784); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;