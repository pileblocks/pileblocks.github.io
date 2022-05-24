"use strict";
(self["webpackChunkpileblocks"] = self["webpackChunkpileblocks"] || []).push([[669],{

/***/ 669:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ views_FieldTilesPart; }
});

;// CONCATENATED MODULE: ../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7a05bb75-vue-loader-template"}!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/cache-loader/dist/cjs.js??ruleSet[0].rules[0].use[0]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/views/FieldTilesPart.vue?vue&type=template&id=ec125886&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"d-flex mb-2 justify-content-center mt-2 mb-2"},[_c('b-button',{attrs:{"size":"sm","to":{ name: 'Home'}}},[_c('i',{staticClass:"bi bi-arrow-left"})]),_c('p',{staticClass:"lead fragment-number mb-0 ml-2",on:{"click":_vm.updateFlag}},[_vm._v(_vm._s(_vm.currentFragment())+" of "+_vm._s(_vm.totalFragments))])],1),_vm._l((this.items),function(fragment){return _c('div',{key:fragment},_vm._l((_vm._getFieldFragment(fragment)),function(row,rowindex){return _c('div',{key:_vm.genIndex(fragment, rowindex, 0),staticClass:"pb-container"},_vm._l((row),function(col,colindex){return _c('div',{key:_vm.genIndex(fragment, rowindex, colindex),staticClass:"d-inline"},[_c('tile',{attrs:{"color":_vm._getColor(fragment, rowindex, colindex),"isPut":_vm._checkIfPut(fragment, rowindex, colindex),"coordinates":{f: fragment, x:colindex, y:rowindex}}})],1)}),0)}),0)})],2)}
var staticRenderFns = []


;// CONCATENATED MODULE: ../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7a05bb75-vue-loader-template"}!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/cache-loader/dist/cjs.js??ruleSet[0].rules[0].use[0]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/Tile.vue?vue&type=template&id=66327f44&scoped=true&
var Tilevue_type_template_id_66327f44_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"d-inline-block pb-tile",class:_vm.getColorClass,on:{"click":function($event){return _vm.toggleColor()}}},[_vm._v(_vm._s(_vm.computedColor)+" ")])}
var Tilevue_type_template_id_66327f44_scoped_true_staticRenderFns = []


// EXTERNAL MODULE: ./src/AppConst.js
var AppConst = __webpack_require__(8270);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[1]!../node_modules/cache-loader/dist/cjs.js??ruleSet[0].rules[0].use[0]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/Tile.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//

const Tile = {
  name: "Tile",
  props: {
    color: Number,
    isPut: Boolean,
    coordinates: Object,
    lastModified: Number
  },
  data: function () {
    return {
      filled: false,
      computedColor: 1
    };
  },
  methods: {
    toggleColor: function () {
      if (!this.isPut) {
        //claim / put operation in progress
        if (this.$store.state.Ever.operationInProgress) {
          this.$store.commit('Toast/sendToast', {
            toastName: "op-in-progress"
          });
          return;
        } // Zero balance


        if (this.$store.state.PlayerInfo.balance === 0) {
          this.$store.commit('Toast/sendToast', {
            toastName: "zero-balance"
          });
          return;
        } // Incorrect color picked


        if (this.computedColor !== this.$store.state.PlayerInfo.currentColor) {
          this.$store.commit('Toast/sendToast', {
            toastName: "wrong-color",
            data: {
              colorNumber: this.computedColor
            }
          });
          return;
        } // Player already filled this tile


        if (this.filled) {
          this.$store.commit('PlayerInfo/updateColorQty', {
            colorNumber: this.computedColor,
            qty: 1
          });
          this.$store.dispatch('Game/removeTileAction', {
            color: this.computedColor,
            ...this.coordinates
          });
          this.$store.commit('Game/putTile', {
            color: 0,
            ...this.coordinates
          });
        } else {
          // more than 50 tiles put, only for not filled
          if (this.$store.state.Game.tilesToPut.length > 49) {
            this.$store.commit('Toast/sendToast', {
              toastName: "50-tiles-put"
            });
            return;
          }

          if (this.$store.state.PlayerInfo.colors[this.computedColor - 1] > 0) {
            this.$store.commit('PlayerInfo/updateColorQty', {
              colorNumber: this.computedColor,
              qty: -1
            });
            this.$store.dispatch('Game/addTileAction', {
              color: this.computedColor,
              ...this.coordinates
            });
            this.$store.commit('Game/putTile', {
              color: this.computedColor + AppConst/* SELF_PUT_OFFSET */.u2,
              ...this.coordinates
            });
          } // Not enough tiles
          else {
            this.$store.commit('Toast/sendToast', {
              toastName: "zero-tiles-left",
              data: {
                colorNumber: this.computedColor
              }
            });
            return;
          }
        }

        this.filled = !this.filled;
        navigator.vibrate(10);
      }
    }
  },
  computed: {
    getColorClass: function () {
      if (this.filled) {
        if (this.computedColor === 5) return "filled-tile filled-tile-light color-" + this.computedColor;
        return "filled-tile color-" + this.computedColor;
      } else {
        return "";
      }
    },
    currentFieldCell: function () {
      return this.$store.state.Game.field[this.coordinates.f.toString()][this.coordinates.y][this.coordinates.x];
    }
  },
  watch: {
    currentFieldCell: function (newValue) {
      if (newValue < AppConst/* SELF_PUT_OFFSET */.u2) {
        this.filled = this.isPut;
      }
    }
  },

  mounted() {
    if (this.color < AppConst/* SELF_PUT_OFFSET */.u2) {
      this.filled = this.isPut;
      this.computedColor = this.color;
    } else {
      //fill the self-put tile
      this.filled = true;
      this.computedColor = this.color - AppConst/* SELF_PUT_OFFSET */.u2;
    }
  }

};
/* harmony default export */ var Tilevue_type_script_lang_js_ = (Tile);
;// CONCATENATED MODULE: ./src/components/Tile.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Tilevue_type_script_lang_js_ = (Tilevue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../node_modules/cache-loader/dist/cjs.js??ruleSet[0].rules[0].use[0]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/Tile.vue?vue&type=style&index=0&id=66327f44&scoped=true&lang=css&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/Tile.vue?vue&type=style&index=0&id=66327f44&scoped=true&lang=css&

// EXTERNAL MODULE: ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1001);
;// CONCATENATED MODULE: ./src/components/Tile.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.Z)(
  components_Tilevue_type_script_lang_js_,
  Tilevue_type_template_id_66327f44_scoped_true_render,
  Tilevue_type_template_id_66327f44_scoped_true_staticRenderFns,
  false,
  null,
  "66327f44",
  null
  
)

/* harmony default export */ var components_Tile = (component.exports);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[1]!../node_modules/cache-loader/dist/cjs.js??ruleSet[0].rules[0].use[0]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/views/FieldTilesPart.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


const FieldTilesPart = {
  name: "FieldTilesPart",
  data: function () {
    return {
      lastModified: 0
    };
  },
  props: {
    items: Array //Array<number>

  },
  methods: {
    genIndex: function (fragment, row, col) {
      return fragment * 1000 + row * 100 + col;
    },
    updateFlag: function () {
      this.items = [0, 2];
    },
    _getFieldFragment: function (fragment) {
      return this.$store.state.Game.field[fragment.toString()];
    },
    _getColor: function (fragment, row, col) {
      if (this.$store.state.Game.field[fragment.toString()][row][col] > AppConst/* SELF_PUT_OFFSET */.u2) {
        return this.$store.state.Game.field[fragment.toString()][row][col];
      }

      return this.$store.state.Game.template[fragment.toString()][row][col];
    },
    currentFragment: function () {
      return Math.ceil(this.items[1] / 2);
    },

    _checkIfPut(fragment, row, col) {
      return this.$store.state.Game.field[fragment.toString()][row][col] !== 0 && this.$store.state.Game.field[fragment.toString()][row][col] < AppConst/* SELF_PUT_OFFSET */.u2;
    }

  },
  components: {
    Tile: components_Tile
  },

  mounted() {
    this.$store.commit('Game/updateIsMainScreen', false);
  },

  computed: {
    totalFragments: function () {
      return this.$store.state.Game.totalFieldFragments / 2;
    }
  }
};
/* harmony default export */ var FieldTilesPartvue_type_script_lang_js_ = (FieldTilesPart);
;// CONCATENATED MODULE: ./src/views/FieldTilesPart.vue?vue&type=script&lang=js&
 /* harmony default export */ var views_FieldTilesPartvue_type_script_lang_js_ = (FieldTilesPartvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../node_modules/cache-loader/dist/cjs.js??ruleSet[0].rules[0].use[0]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/views/FieldTilesPart.vue?vue&type=style&index=0&id=ec125886&scoped=true&lang=css&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/views/FieldTilesPart.vue?vue&type=style&index=0&id=ec125886&scoped=true&lang=css&

;// CONCATENATED MODULE: ./src/views/FieldTilesPart.vue



;


/* normalize component */

var FieldTilesPart_component = (0,componentNormalizer/* default */.Z)(
  views_FieldTilesPartvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "ec125886",
  null
  
)

/* harmony default export */ var views_FieldTilesPart = (FieldTilesPart_component.exports);

/***/ })

}]);