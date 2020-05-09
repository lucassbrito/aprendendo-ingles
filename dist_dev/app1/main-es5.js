function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _topo_topo_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./topo/topo.component */
    "./src/app/topo/topo.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _painel_painel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./painel/painel.component */
    "./src/app/painel/painel.component.ts");

    function AppComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-painel", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("encerrarJogo", function AppComponent_div_1_Template_app_painel_encerrarJogo_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.encerrarJogo($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_ng_template_2_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Fim de jogo, infelizmente voc\xEA perdeu :S");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_ng_template_2_div_0_Template_button_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r8.reiniciarJogo();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Jogar Novamente");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_ng_template_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppComponent_ng_template_2_div_0_Template, 8, 0, "div", 4);
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.tipoEncerramento === "derrota")("ngIfElse", _r3);
      }
    }

    function AppComponent_ng_template_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Fim de jogo, voc\xEA ganhou :D");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_ng_template_4_Template_button_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r10.reiniciarJogo();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Jogar Novamente");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.jogoEmAndamento = true;
      }

      _createClass(AppComponent, [{
        key: "encerrarJogo",
        value: function encerrarJogo(tipo) {
          this.jogoEmAndamento = false;
          this.tipoEncerramento = tipo;
        }
      }, {
        key: "reiniciarJogo",
        value: function reiniciarJogo() {
          this.jogoEmAndamento = true;
          this.tipoEncerramento = undefined;
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 6,
      vars: 2,
      consts: [[4, "ngIf", "ngIfElse"], ["fimDeJogo", ""], ["fimDeJogoVitoria", ""], [3, "encerrarJogo"], ["class", "container mt-5", 4, "ngIf", "ngIfElse"], [1, "container", "mt-5"], [1, "row"], [1, "col"], [1, "d-flex", "justify-content-center", 2, "color", "red"], [1, "d-flex", "justify-content-center"], [1, "btn", "btn-primary", "mt-5", "btn-lg", 3, "click"], [1, "d-flex", "justify-content-center", 2, "color", "green"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-topo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_div_1_Template, 2, 0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_ng_template_2_Template, 1, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppComponent_ng_template_4_Template, 8, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.jogoEmAndamento)("ngIfElse", _r1);
        }
      },
      directives: [_topo_topo_component__WEBPACK_IMPORTED_MODULE_1__["TopoComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _painel_painel_component__WEBPACK_IMPORTED_MODULE_3__["PainelComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _topo_topo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./topo/topo.component */
    "./src/app/topo/topo.component.ts");
    /* harmony import */


    var _painel_painel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./painel/painel.component */
    "./src/app/painel/painel.component.ts");
    /* harmony import */


    var _progresso_progresso_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./progresso/progresso.component */
    "./src/app/progresso/progresso.component.ts");
    /* harmony import */


    var _tentativas_tentativas_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./tentativas/tentativas.component */
    "./src/app/tentativas/tentativas.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _topo_topo_component__WEBPACK_IMPORTED_MODULE_3__["TopoComponent"], _painel_painel_component__WEBPACK_IMPORTED_MODULE_4__["PainelComponent"], _progresso_progresso_component__WEBPACK_IMPORTED_MODULE_5__["ProgressoComponent"], _tentativas_tentativas_component__WEBPACK_IMPORTED_MODULE_6__["TentativasComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _topo_topo_component__WEBPACK_IMPORTED_MODULE_3__["TopoComponent"], _painel_painel_component__WEBPACK_IMPORTED_MODULE_4__["PainelComponent"], _progresso_progresso_component__WEBPACK_IMPORTED_MODULE_5__["ProgressoComponent"], _tentativas_tentativas_component__WEBPACK_IMPORTED_MODULE_6__["TentativasComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/painel/frases-mock.ts":
  /*!***************************************!*\
    !*** ./src/app/painel/frases-mock.ts ***!
    \***************************************/

  /*! exports provided: FRASES */

  /***/
  function srcAppPainelFrasesMockTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FRASES", function () {
      return FRASES;
    });

    var FRASES = [{
      fraseEng: 'I like to learn',
      frasePtBr: 'Eu gosto de aprender'
    }, {
      fraseEng: 'I watch tv',
      frasePtBr: 'Eu assisto tv'
    }, {
      fraseEng: 'How are you?',
      frasePtBr: 'Como vai você?'
    }, {
      fraseEng: 'I eat bread',
      frasePtBr: 'Eu como pão'
    }];
    /***/
  },

  /***/
  "./src/app/painel/painel.component.ts":
  /*!********************************************!*\
    !*** ./src/app/painel/painel.component.ts ***!
    \********************************************/

  /*! exports provided: PainelComponent */

  /***/
  function srcAppPainelPainelComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PainelComponent", function () {
      return PainelComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _frases_mock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./frases-mock */
    "./src/app/painel/frases-mock.ts");
    /* harmony import */


    var _progresso_progresso_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../progresso/progresso.component */
    "./src/app/progresso/progresso.component.ts");
    /* harmony import */


    var _tentativas_tentativas_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../tentativas/tentativas.component */
    "./src/app/tentativas/tentativas.component.ts");

    var PainelComponent =
    /*#__PURE__*/
    function () {
      function PainelComponent() {
        _classCallCheck(this, PainelComponent);

        this.instrucao = 'Traduza esta frase: ';
        this.frases = _frases_mock__WEBPACK_IMPORTED_MODULE_1__["FRASES"];
        this.resposta = '';
        this.rodada = 0;
        this.progresso = 0;
        this.tentativas = 3;
        this.encerrarJogo = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.atualizaRodada();
      }

      _createClass(PainelComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "atualizaResposta",
        value: function atualizaResposta(resposta) {
          this.resposta = resposta.target.value;
        }
      }, {
        key: "verificaResposta",
        value: function verificaResposta() {
          console.log(this.tentativas);

          if (this.rodadaFrase.frasePtBr == this.resposta.trim()) {
            if (this.rodada < this.frases.length) {
              this.rodada++;
              this.atualizaRodada();
            }

            this.progresso = this.progresso + 100 / this.frases.length;

            if (this.rodada === 4) {
              this.encerrarJogo.emit('vitoria');
            }
          } else {
            this.tentativas--;

            if (this.tentativas === -1) {
              this.encerrarJogo.emit('derrota');
            }
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          console.log("Componente painel destruído!");
        }
      }, {
        key: "atualizaRodada",
        value: function atualizaRodada() {
          this.rodadaFrase = this.frases[this.rodada];
          this.resposta = '';
        }
      }]);

      return PainelComponent;
    }();

    PainelComponent.ɵfac = function PainelComponent_Factory(t) {
      return new (t || PainelComponent)();
    };

    PainelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PainelComponent,
      selectors: [["app-painel"]],
      outputs: {
        encerrarJogo: "encerrarJogo"
      },
      decls: 25,
      vars: 5,
      consts: [[1, "container"], [1, "jumbotron"], [1, "row"], [1, "col-sm-6"], [3, "progresso"], [1, "d-flex", "justify-content-end"], [3, "tentativas"], [1, "col"], [1, "form-group"], ["id", "exampleFormControlTextarea1", "rows", "3", 1, "form-control", 3, "value", "input"], ["type", "button", 1, "btn", "btn-primary", 3, "click"]],
      template: function PainelComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-progresso", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-tentativas", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "textarea", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function PainelComponent_Template_textarea_input_19_listener($event) {
            return ctx.atualizaResposta($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PainelComponent_Template_button_click_23_listener() {
            return ctx.verificaResposta();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Verificar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("progresso", ctx.progresso);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tentativas", ctx.tentativas);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.instrucao);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.rodadaFrase.fraseEng);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.resposta);
        }
      },
      directives: [_progresso_progresso_component__WEBPACK_IMPORTED_MODULE_2__["ProgressoComponent"], _tentativas_tentativas_component__WEBPACK_IMPORTED_MODULE_3__["TentativasComponent"]],
      styles: [".jumbotron[_ngcontent-%COMP%] {\r\n    margin-top: 20px;\r\n    padding-top: 30px;\r\n    padding-bottom: 30px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFpbmVsL3BhaW5lbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixvQkFBb0I7QUFDeEIiLCJmaWxlIjoic3JjL2FwcC9wYWluZWwvcGFpbmVsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuanVtYm90cm9uIHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PainelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-painel',
          templateUrl: './painel.component.html',
          styleUrls: ['./painel.component.css']
        }]
      }], function () {
        return [];
      }, {
        encerrarJogo: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/progresso/progresso.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/progresso/progresso.component.ts ***!
    \**************************************************/

  /*! exports provided: ProgressoComponent */

  /***/
  function srcAppProgressoProgressoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProgressoComponent", function () {
      return ProgressoComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ProgressoComponent =
    /*#__PURE__*/
    function () {
      function ProgressoComponent() {
        _classCallCheck(this, ProgressoComponent);

        this.progresso = 0;
      }

      _createClass(ProgressoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProgressoComponent;
    }();

    ProgressoComponent.ɵfac = function ProgressoComponent_Factory(t) {
      return new (t || ProgressoComponent)();
    };

    ProgressoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProgressoComponent,
      selectors: [["app-progresso"]],
      inputs: {
        progresso: "progresso"
      },
      decls: 2,
      vars: 3,
      consts: [[1, "progress"]],
      template: function ProgressoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("progress-bar w-", ctx.progresso, "");
        }
      },
      styles: [".progress[_ngcontent-%COMP%] {\r\n    background: #EEF8DA;\r\n    border: solid 1px #99CE2B;\r\n}\r\n\r\n.progress-bar[_ngcontent-%COMP%] {\r\n    background: #99CE2B;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZ3Jlc3NvL3Byb2dyZXNzby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL3Byb2dyZXNzby9wcm9ncmVzc28uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9ncmVzcyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRUVGOERBO1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggIzk5Q0UyQjtcclxufVxyXG5cclxuLnByb2dyZXNzLWJhciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjOTlDRTJCO1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProgressoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-progresso',
          templateUrl: './progresso.component.html',
          styleUrls: ['./progresso.component.css']
        }]
      }], function () {
        return [];
      }, {
        progresso: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/coracao.model.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/coracao.model.ts ***!
    \*****************************************/

  /*! exports provided: Coracao */

  /***/
  function srcAppSharedCoracaoModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Coracao", function () {
      return Coracao;
    });

    var Coracao =
    /*#__PURE__*/
    function () {
      function Coracao(cheio) {
        var urlCoracaoCheio = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '/assets/coracao_cheio.png';
        var urlCoracaoVazio = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '/assets/coracao_vazio.png';

        _classCallCheck(this, Coracao);

        this.cheio = cheio;
        this.urlCoracaoCheio = urlCoracaoCheio;
        this.urlCoracaoVazio = urlCoracaoVazio;
      }

      _createClass(Coracao, [{
        key: "exibeCoracao",
        value: function exibeCoracao() {
          if (this.cheio) {
            return this.urlCoracaoCheio;
          } else {
            return this.urlCoracaoVazio;
          }
        }
      }]);

      return Coracao;
    }();
    /***/

  },

  /***/
  "./src/app/tentativas/tentativas.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/tentativas/tentativas.component.ts ***!
    \****************************************************/

  /*! exports provided: TentativasComponent */

  /***/
  function srcAppTentativasTentativasComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TentativasComponent", function () {
      return TentativasComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_coracao_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../shared/coracao.model */
    "./src/app/shared/coracao.model.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function TentativasComponent_img_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 1);
      }

      if (rf & 2) {
        var coracao_r13 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", coracao_r13.exibeCoracao(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    var TentativasComponent =
    /*#__PURE__*/
    function () {
      function TentativasComponent() {
        _classCallCheck(this, TentativasComponent);

        this.coracaoCheio = '/assets/coracao_cheio.png';
        this.coracaoVazio = '/assets/coracao_cheio.png';
        this.coracoes = [new _shared_coracao_model__WEBPACK_IMPORTED_MODULE_1__["Coracao"](true), new _shared_coracao_model__WEBPACK_IMPORTED_MODULE_1__["Coracao"](true), new _shared_coracao_model__WEBPACK_IMPORTED_MODULE_1__["Coracao"](true)];
      }

      _createClass(TentativasComponent, [{
        key: "ngOnChanges",
        value: function ngOnChanges() {
          if (this.coracoes.length !== this.tentativas) {
            var indice = this.coracoes.length - this.tentativas;
            this.coracoes[indice - 1].cheio = false;
          }

          console.log("Tentativas recebidas do painel:", this.tentativas);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TentativasComponent;
    }();

    TentativasComponent.ɵfac = function TentativasComponent_Factory(t) {
      return new (t || TentativasComponent)();
    };

    TentativasComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TentativasComponent,
      selectors: [["app-tentativas"]],
      inputs: {
        tentativas: "tentativas"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 1,
      vars: 1,
      consts: [[3, "src", 4, "ngFor", "ngForOf"], [3, "src"]],
      template: function TentativasComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TentativasComponent_img_0_Template, 1, 1, "img", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.coracoes);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlbnRhdGl2YXMvdGVudGF0aXZhcy5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TentativasComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-tentativas',
          templateUrl: './tentativas.component.html',
          styleUrls: ['./tentativas.component.css']
        }]
      }], function () {
        return [];
      }, {
        tentativas: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/topo/topo.component.ts":
  /*!****************************************!*\
    !*** ./src/app/topo/topo.component.ts ***!
    \****************************************/

  /*! exports provided: TopoComponent */

  /***/
  function srcAppTopoTopoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TopoComponent", function () {
      return TopoComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var TopoComponent = function TopoComponent() {
      _classCallCheck(this, TopoComponent);

      this.titulo = 'Aprendendo Inglês';
    };

    TopoComponent.ɵfac = function TopoComponent_Factory(t) {
      return new (t || TopoComponent)();
    };

    TopoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TopoComponent,
      selectors: [["app-topo"]],
      decls: 3,
      vars: 1,
      consts: [[1, "navbar", "navbar-inverse", "bg-faded"], [1, "navbar-brand", "mb-0", "h1"]],
      template: function TopoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.titulo);
        }
      },
      styles: [".navbar[_ngcontent-%COMP%] {\r\n    background: #1CB0F6;\r\n    color: white;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9wby90b3BvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL3RvcG8vdG9wby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMUNCMEY2O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TopoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-topo',
          templateUrl: './topo.component.html',
          styleUrls: ['./topo.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\lucas\OneDrive\Área de Trabalho\Projetos de Cursos\Angular 4\app1\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map