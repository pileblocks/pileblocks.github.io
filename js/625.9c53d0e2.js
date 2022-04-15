"use strict";
(self["webpackChunkpileblocks"] = self["webpackChunkpileblocks"] || []).push([[625],{

/***/ 9625:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ views_Home; }
});

;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/views/Home.vue?vue&type=template&id=fc04276a&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"field-parts-wrapper"}},[_c('div',{staticClass:"stat-block text-left field-stats mt-1 mb-1"},[_c('p',{staticClass:"mb-0",on:{"click":_vm.updateStandings}},[_c('small',[_vm._v("YOU CAPTURED:")]),_vm._v(" "+_vm._s(_vm.$store.getters["Game/getCapturedTiles"])+" ")]),_c('p',{staticClass:"mb-0"},[_c('small',[_vm._v("REMAINING:")]),_vm._v(" "+_vm._s(_vm.$store.state.Game.remainingTiles))]),_c('p',{staticClass:"mb-0"},[_c('small',[_vm._v("TOTAL REWARD:")]),_vm._v(" "+_vm._s(_vm.$store.state.Game.totalReward))])]),_c('div',{staticClass:"d-flex flex-row justify-content-center"},_vm._l((2),function(index){return _c('div',{key:index,staticClass:"d-grid"},_vm._l((_vm.getPartsArray(_vm.totalFieldFragments, index)),function(item){return _c('field-part',{key:_vm._genKey(item),attrs:{"fragmentNumbers":item,"fragmentsCount":1}})}),1)}),0),_c('p',{staticClass:"season-slogan fancy-font"},[_vm._v(_vm._s(this.$store.state.Game.name))])])}
var staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/FieldPart.vue?vue&type=template&id=303da82a&scoped=true&
var FieldPartvue_type_template_id_303da82a_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('router-link',{staticClass:"d-inline-flex",attrs:{"to":{ name: 'FieldTilesPart', params: {items: this.fragmentNumbers} }}},[_c('canvas',{ref:"fieldImage",staticClass:"field-part",attrs:{"width":"80","height":_vm.fragmentsCount * 80}})])}
var FieldPartvue_type_template_id_303da82a_scoped_true_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[0]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/FieldPart.vue?vue&type=script&lang=js&
//
//
//
//
//
//
const FieldPart = {
  name: "FieldPart",
  data: function () {
    return {
      field: null
    };
  },
  props: {
    fragmentNumbers: Array,
    fragmentsCount: Number
  },
  methods: {
    getColorByNumber(n) {
      function _getColorByName(name) {
        return window.getComputedStyle(document.getElementById(name), null).getPropertyValue("background-color");
      }

      switch (n) {
        case 1:
          return _getColorByName("color-1");

        case 2:
          return _getColorByName("color-2");

        case 3:
          return _getColorByName("color-3");
        //return '#be1119';

        case 4:
          return _getColorByName("color-4");

        case 5:
          return _getColorByName("color-5");
      }

      return "";
    }

  },
  mounted: function () {
    let colorArray = [];

    for (let i = 0; i < 5; i++) {
      colorArray[i] = this.getColorByNumber(i + 1);
    }

    this.template = this.$store.state.Game.template;
    let ctx = this.$refs.fieldImage.getContext("2d");
    let y = 0;

    for (const part of this.fragmentNumbers) {
      for (const i of this.template[part]) {
        for (const x in i) {
          ctx.fillStyle = colorArray[i[x] - 1];
          ctx.fillRect(5 * parseInt(x), 5 * y, 5, 5);
        }

        y += 1;
      }
    }
  }
};
/* harmony default export */ var FieldPartvue_type_script_lang_js_ = (FieldPart);
;// CONCATENATED MODULE: ./src/components/FieldPart.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_FieldPartvue_type_script_lang_js_ = (FieldPartvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/FieldPart.vue?vue&type=style&index=0&id=303da82a&scoped=true&lang=css&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/FieldPart.vue?vue&type=style&index=0&id=303da82a&scoped=true&lang=css&

// EXTERNAL MODULE: ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1001);
;// CONCATENATED MODULE: ./src/components/FieldPart.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.Z)(
  components_FieldPartvue_type_script_lang_js_,
  FieldPartvue_type_template_id_303da82a_scoped_true_render,
  FieldPartvue_type_template_id_303da82a_scoped_true_staticRenderFns,
  false,
  null,
  "303da82a",
  null
  
)

/* harmony default export */ var components_FieldPart = (component.exports);
;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40[0].rules[0].use[0]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/views/Home.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

const Home = {
  name: "FieldParts",
  data: function () {
    return {
      totalFieldFragments: 0
    };
  },
  methods: {
    _genKey: function (item) {
      return item.join("/");
    },
    updateStandings: function () {
      this.$store.commit('Game/calculateRewards');
    },
    getPartsArray: function (numberOfFragments, part) {
      let fragments = Array.from(Array(numberOfFragments).keys());
      let fragmentPairs = [[]];

      for (let i = 0; i < numberOfFragments - 1; i += 2) {
        fragmentPairs.push([fragments[i], fragments[i + 1]]);
      }

      if (part === 1) {
        fragmentPairs = fragmentPairs.filter(item => item[0] < fragments.length / 2);
      } else {
        fragmentPairs = fragmentPairs.filter(item => item[0] >= fragments.length / 2);
      }

      return fragmentPairs;
    }
  },
  components: {
    FieldPart: components_FieldPart
  },
  mounted: function () {
    this.totalFieldFragments = this.$store.state.Game.totalFieldFragments;
    this.$store.commit('Game/updateIsMainScreen', true);
  }
};
/* harmony default export */ var Homevue_type_script_lang_js_ = (Home);
;// CONCATENATED MODULE: ./src/views/Home.vue?vue&type=script&lang=js&
 /* harmony default export */ var views_Homevue_type_script_lang_js_ = (Homevue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/views/Home.vue?vue&type=style&index=0&id=fc04276a&scoped=true&lang=css&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/views/Home.vue?vue&type=style&index=0&id=fc04276a&scoped=true&lang=css&

;// CONCATENATED MODULE: ./src/views/Home.vue



;


/* normalize component */

var Home_component = (0,componentNormalizer/* default */.Z)(
  views_Homevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "fc04276a",
  null
  
)

/* harmony default export */ var views_Home = (Home_component.exports);

/***/ })

}]);