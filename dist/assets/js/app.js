webpackJsonp([0],[
/* 0 */,
/* 1 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate
    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);


__WEBPACK_IMPORTED_MODULE_0_axios___default.a.defaults.baseURL = 'https://api.fullstackweekly.com';

__WEBPACK_IMPORTED_MODULE_0_axios___default.a.interceptors.request.use(function (config) {
  if (typeof window === 'undefined') {
    return config;
  }
  var token = window.localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = 'Bearer ' + token;
  }

  return config;
});

var appService = {
  getPosts: function getPosts(categoryId) {
    return new Promise(function (resolve) {
      __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('' + ('/wp-json/wp/v2/posts?categories=' + categoryId + '&per_page=5')).then(function (response) {
        resolve(response.data);
      });
    });
  },
  getProfile: function getProfile() {
    return new Promise(function (resolve) {
      __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('/services/profile.php').then(function (response) {
        resolve(response.data);
      });
    });
  },
  login: function login(credentials) {
    return new Promise(function (resolve, reject) {
      __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post('/services/auth.php', credentials).then(function (response) {
        resolve(response.data);
      }).catch(function (response) {
        reject(response.status);
      });
    });
  }
};

/* harmony default export */ __webpack_exports__["a"] = (appService);

/***/ }),
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app__ = __webpack_require__(15);

__WEBPACK_IMPORTED_MODULE_0__app__["b" /* router */].onReady(function () {
  __WEBPACK_IMPORTED_MODULE_0__app__["a" /* app */].$mount('#app');
});

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return app; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vuex_index_js__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__theme_Layout_vue__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__router__ = __webpack_require__(48);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__router__["a"]; });
/* unused harmony reexport store */
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };






var app = new __WEBPACK_IMPORTED_MODULE_0_vue__["default"](_extends({
  router: __WEBPACK_IMPORTED_MODULE_3__router__["a" /* default */]
}, __WEBPACK_IMPORTED_MODULE_2__theme_Layout_vue__["a" /* default */], {
  store: __WEBPACK_IMPORTED_MODULE_1__vuex_index_js__["a" /* default */]
}));



/***/ }),
/* 16 */,
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__posts__ = __webpack_require__(36);





__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vuex__["default"]);
var state = {
  isAuthenticated: false
};

var store = new __WEBPACK_IMPORTED_MODULE_1_vuex__["default"].Store({
  modules: {
    postsModule: __WEBPACK_IMPORTED_MODULE_3__posts__["a" /* default */]
  },
  state: state,
  getters: {
    isAuthenticated: function isAuthenticated(state) {
      return state.isAuthenticated;
    }
  },
  actions: {
    logout: function logout(context) {
      context.commit('logout');
    },
    login: function login(context, credentials) {
      return new Promise(function (resolve) {
        __WEBPACK_IMPORTED_MODULE_2__app_service_js__["a" /* default */].login(credentials).then(function (data) {
          context.commit('login', data);

          resolve();
        }).catch(function () {
          return window.alert('could not login!');
        });
      });
    }
  },
  mutations: {
    logout: function logout(state) {
      if (typeof window !== 'undefined') {
        window.localStorage.setItem('token', null);
        window.localStorage.setItem('tokenExpiration', null);
      }
      state.isAuthenticated = false;
    },
    login: function login(state, token) {
      if (typeof window !== 'undefined') {
        window.localStorage.setItem('token', token.token);
        window.localStorage.setItem('tokenExpiration', token.expiration);
      }
      state.isAuthenticated = true;
    }
  }
});

if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', function (event) {
    var expiration = window.localStorage.getItem('tokenExpiration');
    var unixTimestamp = new Date().getTime() / 1000;
    if (expiration !== null && parseInt(expiration) - unixTimestamp > 0) {
      store.state.isAuthenticated = true;
    }
  });
}

/* harmony default export */ __webpack_exports__["a"] = (store);

/***/ }),
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_service_js__ = __webpack_require__(6);


var defaultState = {
  posts: [],
  categoryId: 0
};
var inBrowser = typeof window !== 'undefined';
var state = inBrowser && window.__INITIAL_STATE__ ? window.__INITIAL_STATE__.postsModule : defaultState;

var getters = {
  posts: function posts(state) {
    return state.posts;
  }
};

var actions = {
  updateCategory: function updateCategory(context, categoryId) {
    return __WEBPACK_IMPORTED_MODULE_0__app_service_js__["a" /* default */].getPosts(categoryId).then(function (data) {
      context.commit('updateCategory', { categoryId: categoryId, posts: data });
    });
  }
};

var mutations = {
  updateCategory: function updateCategory(state, category) {
    state.categoryId = category.categoryId;
    state.posts = category.posts;
  }
};

/* harmony default export */ __webpack_exports__["a"] = ({
  namespaced: true,
  state: state,
  getters: getters,
  actions: actions,
  mutations: mutations
});

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Layout_vue__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5a2a069b_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_Layout_vue__ = __webpack_require__(47);
function injectStyle (ssrContext) {
  __webpack_require__(38)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Layout_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5a2a069b_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_Layout_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 38 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AppHeader_vue__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AppFooter_vue__ = __webpack_require__(43);
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
  components: {
    'app-header': __WEBPACK_IMPORTED_MODULE_0__AppHeader_vue__["a" /* default */],
    'app-footer': __WEBPACK_IMPORTED_MODULE_1__AppFooter_vue__["a" /* default */]
  }
});

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_AppHeader_vue__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5272ef2d_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_AppHeader_vue__ = __webpack_require__(42);
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_AppHeader_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5272ef2d_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_AppHeader_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(3);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
  computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapGetters"])(['isAuthenticated']))
});

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('nav', {
    staticClass: "nav has-shadow"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('router-link', {
    attrs: {
      "to": "/"
    }
  }, [_c('img', {
    attrs: {
      "src": "http://bit.ly/vue-img",
      "alt": "VueSPA"
    }
  })]), _vm._v(" "), _c('router-link', {
    staticClass: "nav-item is-tab",
    attrs: {
      "to": "/game"
    }
  }, [_vm._v("Game")]), _vm._v(" "), _c('router-link', {
    staticClass: "nav-item is-tab",
    attrs: {
      "to": "/category/front-end"
    }
  }, [_vm._v("Front-end")]), _vm._v(" "), _c('router-link', {
    staticClass: "nav-item is-tab",
    attrs: {
      "to": "/about"
    }
  }, [_vm._v("About")]), _vm._v(" "), _c('router-link', {
    staticClass: "nav-item is-tab",
    attrs: {
      "to": {
        name: 'category',
        params: {
          id: 'mobile'
        }
      }
    }
  }, [_vm._v("Mobile")]), _vm._v(" "), _c('router-link', {
    staticClass: "nav-item is-tab",
    attrs: {
      "to": "/login"
    }
  }, [(_vm.isAuthenticated) ? _c('span', [_vm._v("Logout")]) : _c('span', [_vm._v("Login")])])], 1)])
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_AppFooter_vue__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_AppFooter_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_AppFooter_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_31408b3b_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_AppFooter_vue__ = __webpack_require__(46);
function injectStyle (ssrContext) {
  __webpack_require__(44)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_AppFooter_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_31408b3b_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_AppFooter_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 44 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 45 */
/***/ (function(module, exports) {

//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('footer', [_c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "content has-text-centered"
  }, [_vm._v("\n      Follow us on\n      "), _c('a', {
    attrs: {
      "href": "https://twitter.com/mickwhite247",
      "target": "_blank"
    }
  }, [_vm._v("7wi77er")])])])])
}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [_c('app-header'), _vm._v(" "), _c('section', {
    staticClass: "main-section section"
  }, [_c('div', {
    staticClass: "container content"
  }, [_c('router-view')], 1)]), _vm._v(" "), _c('app-footer')], 1)
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__theme_Login_vue__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__theme_About_vue__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__theme_Game_vue__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__theme_Category_vue__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__theme_NotFound_vue__ = __webpack_require__(66);








// const Category = () => System.import('./theme/Category.vue')
// const Login = () => System.import('./theme/Login.vue')
// const NotFound = () => System.import('./theme/NotFound.vue')

__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["default"]);

var router = new __WEBPACK_IMPORTED_MODULE_1_vue_router__["default"]({
  mode: 'history',
  linkActiveClass: 'is-active',
  scrollBehaviour: function scrollBehaviour(to, from, savedPosition) {
    return { y: 0 };
  },
  routes: [{ path: '/login', component: __WEBPACK_IMPORTED_MODULE_2__theme_Login_vue__["a" /* default */] }, { path: '/about', component: __WEBPACK_IMPORTED_MODULE_3__theme_About_vue__["a" /* default */] }, { path: '/game', component: __WEBPACK_IMPORTED_MODULE_4__theme_Game_vue__["a" /* default */] }, { path: '/category/:id', name: 'category', component: __WEBPACK_IMPORTED_MODULE_5__theme_Category_vue__["a" /* default */] }, { path: '/', redirect: '/game' }, { path: '*', component: __WEBPACK_IMPORTED_MODULE_6__theme_NotFound_vue__["a" /* default */] }]
});

/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Login_vue__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_51632888_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_Login_vue__ = __webpack_require__(51);
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Login_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_51632888_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_Login_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(3);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      username: '',
      password: ''
    };
  },

  computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapGetters"])(['isAuthenticated'])),
  methods: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapActions"])({
    logout: 'logout'
  }), {
    login: function login() {
      var _this = this;

      this.$store.dispatch('login', { username: this.username, password: this.password }).then(function () {
        _this.username = '';
        _this.password = '';
      });
    }
  })
});

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "content"
  }, [(_vm.isAuthenticated) ? _c('div', [_vm._v("\n    Hello Authenticted User!\n    "), _c('button', {
    staticClass: "button is-primary",
    on: {
      "click": function($event) {
        _vm.logout()
      }
    }
  }, [_vm._v("\n      Logout\n    ")])]) : _c('div', [_c('h2', [_vm._v("Login")]), _vm._v(" "), _c('div', {
    staticClass: "field is-horizontal"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "field-body"
  }, [_c('div', {
    staticClass: "field"
  }, [_c('div', {
    staticClass: "control"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.username),
      expression: "username"
    }],
    staticClass: "input",
    attrs: {
      "type": "text",
      "placeholder": "Your username"
    },
    domProps: {
      "value": (_vm.username)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.username = $event.target.value
      }
    }
  })])])])]), _vm._v(" "), _c('div', {
    staticClass: "field is-horizontal"
  }, [_vm._m(1), _vm._v(" "), _c('div', {
    staticClass: "field-body"
  }, [_c('div', {
    staticClass: "field"
  }, [_c('div', {
    staticClass: "control"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.password),
      expression: "password"
    }],
    staticClass: "input",
    attrs: {
      "type": "password",
      "placeholder": "Your password"
    },
    domProps: {
      "value": (_vm.password)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.password = $event.target.value
      }
    }
  })])])])]), _vm._v(" "), _c('div', {
    staticClass: "field is-horizontal"
  }, [_c('div', {
    staticClass: "field-label"
  }), _vm._v(" "), _c('div', {
    staticClass: "field-body"
  }, [_c('div', {
    staticClass: "field"
  }, [_c('div', {
    staticClass: "control"
  }, [_c('button', {
    staticClass: "button is-primary",
    on: {
      "click": function($event) {
        _vm.login()
      }
    }
  }, [_vm._v("\n              Login\n            ")])])])])])])])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "field-label is-normal"
  }, [_c('label', {
    staticClass: "label"
  }, [_vm._v("Username")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "field-label is-normal"
  }, [_c('label', {
    staticClass: "label"
  }, [_vm._v("Password")])])
}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_About_vue__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_About_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_About_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6803aaac_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_About_vue__ = __webpack_require__(54);
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_About_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6803aaac_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_About_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 53 */
/***/ (function(module, exports) {

//
//
//
//
//

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "content"
  })
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Game_vue__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_117d54ba_hasScoped_true_node_modules_vue_loader_lib_selector_type_template_index_0_Game_vue__ = __webpack_require__(58);
function injectStyle (ssrContext) {
  __webpack_require__(56)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-117d54ba"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Game_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_117d54ba_hasScoped_true_node_modules_vue_loader_lib_selector_type_template_index_0_Game_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 56 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      totalImages: 8,
      countT: 1,
      countM: 1,
      countB: 1,
      path: '/assets/images/',
      img: '/image',
      type: '.png',
      collection: 'Animals'
    };
  },
  methods: {
    Tincrement: function Tincrement() {
      this.countT < this.totalImages ? this.countT++ : this.countT = 1;
    },
    Tdecrement: function Tdecrement() {
      this.countT > 1 ? this.countT-- : this.countT = this.totalImages;
    },
    Mincrement: function Mincrement() {
      this.countM < this.totalImages ? this.countM++ : this.countM = 1;
    },
    Mdecrement: function Mdecrement() {
      this.countM > 1 ? this.countM-- : this.countM = this.totalImages;
    },
    Bincrement: function Bincrement() {
      this.countB < this.totalImages ? this.countB++ : this.countB = 1;
    },
    Bdecrement: function Bdecrement() {
      this.countB > 1 ? this.countB-- : this.countB = this.totalImages;
    }
  }
});

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "content",
    attrs: {
      "id": "top"
    }
  }, [_c('div', {
    staticClass: "filter"
  }, [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.collection),
      expression: "collection"
    }],
    attrs: {
      "name": "basic-dropdown"
    },
    on: {
      "change": function($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function(o) {
          return o.selected
        }).map(function(o) {
          var val = "_value" in o ? o._value : o.value;
          return val
        });
        _vm.collection = $event.target.multiple ? $$selectedVal : $$selectedVal[0]
      }
    }
  }, [_c('option', [_vm._v("People")]), _vm._v(" "), _c('option', [_vm._v("Animals")])])]), _vm._v(" "), _c('div', {
    staticClass: "image-part T"
  }, [_c('button', {
    staticClass: "btn btn-primary btn-left",
    attrs: {
      "type": "button"
    },
    on: {
      "click": function($event) {
        $event.preventDefault();
        _vm.Tdecrement($event)
      }
    }
  }, [_vm._v("prev")]), _vm._v(" "), _c('div', {
    staticClass: "out"
  }, [_c('img', {
    staticClass: "top",
    attrs: {
      "src": _vm.path + _vm.collection + _vm.img + _vm.countT + _vm.type
    }
  })]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-primary btn-right",
    attrs: {
      "type": "button"
    },
    on: {
      "click": function($event) {
        $event.preventDefault();
        _vm.Tincrement($event)
      }
    }
  }, [_vm._v("next")])]), _vm._v(" "), _c('div', {
    staticClass: "image-part M"
  }, [_c('button', {
    staticClass: "btn btn-secondary btn-left",
    attrs: {
      "type": "button"
    },
    on: {
      "click": function($event) {
        $event.preventDefault();
        _vm.Mdecrement($event)
      }
    }
  }, [_vm._v("prev")]), _vm._v(" "), _c('div', {
    staticClass: "out"
  }, [_c('img', {
    staticClass: "middle",
    attrs: {
      "src": _vm.path + _vm.collection + _vm.img + _vm.countM + _vm.type
    }
  })]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-secondary btn-right",
    attrs: {
      "type": "button"
    },
    on: {
      "click": function($event) {
        $event.preventDefault();
        _vm.Mincrement($event)
      }
    }
  }, [_vm._v("next")])]), _vm._v(" "), _c('div', {
    staticClass: "image-part B"
  }, [_c('button', {
    staticClass: "btn btn-tertiary btn-left",
    attrs: {
      "type": "button"
    },
    on: {
      "click": function($event) {
        $event.preventDefault();
        _vm.Bdecrement($event)
      }
    }
  }, [_vm._v("prev")]), _vm._v(" "), _c('div', {
    staticClass: "out"
  }, [_c('img', {
    staticClass: "bottom",
    attrs: {
      "src": _vm.path + _vm.collection + _vm.img + _vm.countB + _vm.type
    }
  })]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-tertiary btn-right",
    attrs: {
      "type": "button"
    },
    on: {
      "click": function($event) {
        $event.preventDefault();
        _vm.Bincrement($event)
      }
    }
  }, [_vm._v("next")])])])
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Category_vue__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5facac2f_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_Category_vue__ = __webpack_require__(65);
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Category_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5facac2f_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_Category_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Post_vue__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(3);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//



var fetchInitialData = function fetchInitialData(store, route) {
  var categoryId = 2;
  if (route.params.id === 'mobile') {
    categoryId = 11;
  }
  return store.dispatch('postsModule/updateCategory', categoryId);
};
/* harmony default export */ __webpack_exports__["a"] = ({
  asyncData: function asyncData(store, route) {
    return fetchInitialData(store, route);
  },

  components: {
    'app-post': __WEBPACK_IMPORTED_MODULE_0__Post_vue__["a" /* default */]
  },
  computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["mapGetters"])('postsModule', ['posts'])),
  methods: {
    loadPosts: function loadPosts() {
      fetchInitialData(this.$store, this.$route);
    }
  },
  watch: {
    '$route': function $route(to, from) {
      this.loadPosts();
    }
  },
  created: function created() {
    this.loadPosts();
  }
});

/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Post_vue__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_e458c95e_hasScoped_true_node_modules_vue_loader_lib_selector_type_template_index_0_Post_vue__ = __webpack_require__(64);
function injectStyle (ssrContext) {
  __webpack_require__(62)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-e458c95e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Post_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_e458c95e_hasScoped_true_node_modules_vue_loader_lib_selector_type_template_index_0_Post_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 62 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  props: ['link']
});

/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-content"
  }, [_vm._t("title"), _vm._v(" "), _vm._t("content")], 2), _vm._v(" "), _c('footer', {
    staticClass: "card-footer"
  }, [_c('a', {
    staticClass: "card-footer-item",
    attrs: {
      "href": _vm.link,
      "target": "_blank"
    }
  }, [_vm._v("Read More")])])])
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "columns"
  }, _vm._l((_vm.posts), function(post, title) {
    return _c('div', {
      key: post.id,
      staticClass: "column is-one-third"
    }, [_c('app-post', {
      attrs: {
        "link": post.link
      }
    }, [_c('h3', {
      domProps: {
        "innerHTML": _vm._s(post.title.rendered)
      },
      slot: "title"
    }), _vm._v(" "), _c('span', {
      domProps: {
        "innerHTML": _vm._s(post.excerpt.rendered)
      },
      slot: "content"
    })])], 1)
  }))
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_58fa9720_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_NotFound_vue__ = __webpack_require__(67);
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = null
/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_58fa9720_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_NotFound_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_vm._v("Oops! Not Found")])
}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })
],[14]);