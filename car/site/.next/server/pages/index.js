/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"Home_container__bCOhY\",\n\t\"main\": \"Home_main__nLjiQ\",\n\t\"footer\": \"Home_footer____T7K\",\n\t\"title\": \"Home_title__T09hD\",\n\t\"description\": \"Home_description__41Owk\",\n\t\"code\": \"Home_code__suPER\",\n\t\"grid\": \"Home_grid__GxQ85\",\n\t\"card\": \"Home_card___LpL1\",\n\t\"logo\": \"Home_logo__27_tb\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3NpdGUvLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzP2IxNzAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiSG9tZV9jb250YWluZXJfX2JDT2hZXCIsXG5cdFwibWFpblwiOiBcIkhvbWVfbWFpbl9fbkxqaVFcIixcblx0XCJmb290ZXJcIjogXCJIb21lX2Zvb3Rlcl9fX19UN0tcIixcblx0XCJ0aXRsZVwiOiBcIkhvbWVfdGl0bGVfX1QwOWhEXCIsXG5cdFwiZGVzY3JpcHRpb25cIjogXCJIb21lX2Rlc2NyaXB0aW9uX180MU93a1wiLFxuXHRcImNvZGVcIjogXCJIb21lX2NvZGVfX3N1UEVSXCIsXG5cdFwiZ3JpZFwiOiBcIkhvbWVfZ3JpZF9fR3hRODVcIixcblx0XCJjYXJkXCI6IFwiSG9tZV9jYXJkX19fTHBMMVwiLFxuXHRcImxvZ29cIjogXCJIb21lX2xvZ29fXzI3X3RiXCJcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./styles/Home.module.css\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _services_socketio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/socketio */ \"./services/socketio.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_socketio__WEBPACK_IMPORTED_MODULE_2__]);\n_services_socketio__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\nfunction Home() {\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        _services_socketio__WEBPACK_IMPORTED_MODULE_2__[\"default\"].on(\"carrinho\", (data)=>{\n            console.log(data);\n        });\n    }, []);\n    function sendSocket(comando) {\n        console.log(comando);\n        _services_socketio__WEBPACK_IMPORTED_MODULE_2__[\"default\"].emit(\"comando\", comando);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Create Next App\"\n                    }, void 0, false, {\n                        fileName: \"/home/laranja/Documents/PIC2HWSW/car/site/pages/index.js\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/home/laranja/Documents/PIC2HWSW/car/site/pages/index.js\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/home/laranja/Documents/PIC2HWSW/car/site/pages/index.js\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/laranja/Documents/PIC2HWSW/car/site/pages/index.js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                onMouseMove: ()=>console.log(\"INDO\")\n                ,\n                children: \"TESTE\"\n            }, void 0, false, {\n                fileName: \"/home/laranja/Documents/PIC2HWSW/car/site/pages/index.js\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>sendSocket([\n                                \"F\",\n                                \"F\"\n                            ])\n                        ,\n                        children: \"FRENTE\"\n                    }, void 0, false, {\n                        fileName: \"/home/laranja/Documents/PIC2HWSW/car/site/pages/index.js\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>sendSocket([\n                                \"T\",\n                                \"T\"\n                            ])\n                        ,\n                        children: \"TR\\xc1S\"\n                    }, void 0, false, {\n                        fileName: \"/home/laranja/Documents/PIC2HWSW/car/site/pages/index.js\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>sendSocket([\n                                \"F\",\n                                \"P\"\n                            ])\n                        ,\n                        children: \"DIREITA\"\n                    }, void 0, false, {\n                        fileName: \"/home/laranja/Documents/PIC2HWSW/car/site/pages/index.js\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>sendSocket([\n                                \"P\",\n                                \"F\"\n                            ])\n                        ,\n                        children: \"ESQUERDA\"\n                    }, void 0, false, {\n                        fileName: \"/home/laranja/Documents/PIC2HWSW/car/site/pages/index.js\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>sendSocket([\n                                \"P\",\n                                \"P\"\n                            ])\n                        ,\n                        children: \"Para\"\n                    }, void 0, false, {\n                        fileName: \"/home/laranja/Documents/PIC2HWSW/car/site/pages/index.js\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/laranja/Documents/PIC2HWSW/car/site/pages/index.js\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/laranja/Documents/PIC2HWSW/car/site/pages/index.js\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, this);\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBNkI7QUFDa0I7QUFDTDtBQUNSO0FBRW5CLFNBQVNJLElBQUksR0FBRztJQUM3QkQsZ0RBQVMsQ0FBQyxJQUFNO1FBQ2RELDZEQUFTLENBQUMsVUFBVSxFQUFFLENBQUNJLElBQUksR0FBSztZQUM5QkMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLElBQUksQ0FBQyxDQUFDO1NBQ25CLENBQUMsQ0FBQztLQUNKLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFUCxTQUFTRyxVQUFVLENBQUNDLE9BQU8sRUFBRTtRQUMzQkgsT0FBTyxDQUFDQyxHQUFHLENBQUNFLE9BQU8sQ0FBQyxDQUFDO1FBQ3JCUiwrREFBVyxDQUFDLFNBQVMsRUFBRVEsT0FBTyxDQUFDLENBQUM7S0FDakM7SUFFRCxxQkFDRSw4REFBQ0UsS0FBRztRQUFDQyxTQUFTLEVBQUVaLDBFQUFnQjs7MEJBQzlCLDhEQUFDRCxrREFBSTs7a0NBQ0gsOERBQUNlLE9BQUs7a0NBQUMsaUJBQWU7Ozs7OzRCQUFRO2tDQUM5Qiw4REFBQ0MsTUFBSTt3QkFBQ0MsSUFBSSxFQUFDLGFBQWE7d0JBQUNDLE9BQU8sRUFBQyw4QkFBOEI7Ozs7OzRCQUFHO2tDQUNsRSw4REFBQ0MsTUFBSTt3QkFBQ0MsR0FBRyxFQUFDLE1BQU07d0JBQUNDLElBQUksRUFBQyxjQUFjOzs7Ozs0QkFBRzs7Ozs7O29CQUNsQzswQkFhUCw4REFBQ1QsS0FBRztnQkFBQ1UsV0FBVyxFQUFFLElBQU1mLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLE1BQU0sQ0FBQztnQkFBQTswQkFBRSxPQUFLOzs7OztvQkFBTTswQkFFeEQsOERBQUNJLEtBQUc7Z0JBQUNDLFNBQVMsRUFBRVoscUVBQVc7O2tDQUN6Qiw4REFBQ3VCLFFBQU07d0JBQUNDLE9BQU8sRUFBRSxJQUFNaEIsVUFBVSxDQUFDO2dDQUFDLEdBQUc7Z0NBQUUsR0FBRzs2QkFBQyxDQUFDO3dCQUFBO2tDQUFFLFFBQU07Ozs7OzRCQUFTO2tDQUM5RCw4REFBQ2UsUUFBTTt3QkFBQ0MsT0FBTyxFQUFFLElBQU1oQixVQUFVLENBQUM7Z0NBQUMsR0FBRztnQ0FBRSxHQUFHOzZCQUFDLENBQUM7d0JBQUE7a0NBQUUsU0FBSTs7Ozs7NEJBQVM7a0NBQzVELDhEQUFDZSxRQUFNO3dCQUFDQyxPQUFPLEVBQUUsSUFBTWhCLFVBQVUsQ0FBQztnQ0FBQyxHQUFHO2dDQUFFLEdBQUc7NkJBQUMsQ0FBQzt3QkFBQTtrQ0FBRSxTQUFPOzs7Ozs0QkFBUztrQ0FDL0QsOERBQUNlLFFBQU07d0JBQUNDLE9BQU8sRUFBRSxJQUFNaEIsVUFBVSxDQUFDO2dDQUFDLEdBQUc7Z0NBQUUsR0FBRzs2QkFBQyxDQUFDO3dCQUFBO2tDQUFFLFVBQVE7Ozs7OzRCQUFTO2tDQUNoRSw4REFBQ2UsUUFBTTt3QkFBQ0MsT0FBTyxFQUFFLElBQU1oQixVQUFVLENBQUM7Z0NBQUMsR0FBRztnQ0FBRSxHQUFHOzZCQUFDLENBQUM7d0JBQUE7a0NBQUUsTUFBSTs7Ozs7NEJBQVM7Ozs7OztvQkFDeEQ7Ozs7OztZQUNGLENBQ047Q0FDSCIsInNvdXJjZXMiOlsid2VicGFjazovL3NpdGUvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBzb2NrZXQgZnJvbSBcIi4uL3NlcnZpY2VzL3NvY2tldGlvXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzb2NrZXQub24oXCJjYXJyaW5ob1wiLCAoZGF0YSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgfSk7XG4gIH0sIFtdKTtcblxuICBmdW5jdGlvbiBzZW5kU29ja2V0KGNvbWFuZG8pIHtcbiAgICBjb25zb2xlLmxvZyhjb21hbmRvKTtcbiAgICBzb2NrZXQuZW1pdChcImNvbWFuZG9cIiwgY29tYW5kbyk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+Q3JlYXRlIE5leHQgQXBwPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkdlbmVyYXRlZCBieSBjcmVhdGUgbmV4dCBhcHBcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIHsvKiA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZW5kU29ja2V0KFtcIkVcIiwgXCJGXCJdKX0+ZGlyZWl0byBob3JhcmlvPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2VuZFNvY2tldChbXCJFXCIsIFwiVFwiXSl9PlxuICAgICAgICAgIGRpcmVpdG8gYW50aWhvcmFyaW9cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2VuZFNvY2tldChbXCJEXCIsIFwiRlwiXSl9PmVzcXVlcmRvIGhvcmFyaW88L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZW5kU29ja2V0KFtcIkRcIiwgXCJUXCJdKX0+XG4gICAgICAgICAgZXNxdWVyZG8gYW50aWhvcmFyaW9cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2VuZFNvY2tldChbXCJQXCIsIFwiUFwiXSl9PlBhcmE8L2J1dHRvbj5cbiAgICAgIDwvbWFpbj4gKi99XG4gICAgICA8ZGl2IG9uTW91c2VNb3ZlPXsoKSA9PiBjb25zb2xlLmxvZyhcIklORE9cIil9PlRFU1RFPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2VuZFNvY2tldChbXCJGXCIsIFwiRlwiXSl9PkZSRU5URTwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNlbmRTb2NrZXQoW1wiVFwiLCBcIlRcIl0pfT5UUsOBUzwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNlbmRTb2NrZXQoW1wiRlwiLCBcIlBcIl0pfT5ESVJFSVRBPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2VuZFNvY2tldChbXCJQXCIsIFwiRlwiXSl9PkVTUVVFUkRBPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2VuZFNvY2tldChbXCJQXCIsIFwiUFwiXSl9PlBhcmE8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkhlYWQiLCJzdHlsZXMiLCJzb2NrZXQiLCJ1c2VFZmZlY3QiLCJIb21lIiwib24iLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInNlbmRTb2NrZXQiLCJjb21hbmRvIiwiZW1pdCIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiLCJvbk1vdXNlTW92ZSIsIm1haW4iLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./services/socketio.js":
/*!******************************!*\
  !*** ./services/socketio.js ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! socket.io-client */ \"socket.io-client\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([socket_io_client__WEBPACK_IMPORTED_MODULE_0__]);\nsocket_io_client__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"localhost:4000\");\n// const socket = socketIOClient(\"server-telemeapp.herokuapp.com\");\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (socket);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2aWNlcy9zb2NrZXRpby5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUE4QztBQUU5QyxNQUFNQyxNQUFNLEdBQUdELDREQUFjLENBQUMsZ0JBQWdCLENBQUM7QUFDL0MsbUVBQW1FO0FBRW5FLGlFQUFlQyxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaXRlLy4vc2VydmljZXMvc29ja2V0aW8uanM/MWE4OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc29ja2V0SU9DbGllbnQgZnJvbSBcInNvY2tldC5pby1jbGllbnRcIjtcblxuY29uc3Qgc29ja2V0ID0gc29ja2V0SU9DbGllbnQoXCJsb2NhbGhvc3Q6NDAwMFwiKTtcbi8vIGNvbnN0IHNvY2tldCA9IHNvY2tldElPQ2xpZW50KFwic2VydmVyLXRlbGVtZWFwcC5oZXJva3VhcHAuY29tXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBzb2NrZXQ7XG4iXSwibmFtZXMiOlsic29ja2V0SU9DbGllbnQiLCJzb2NrZXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./services/socketio.js\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "socket.io-client":
/*!***********************************!*\
  !*** external "socket.io-client" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = import("socket.io-client");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();