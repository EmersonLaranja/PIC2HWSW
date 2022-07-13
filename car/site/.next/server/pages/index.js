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
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _services_socketio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/socketio */ \"./services/socketio.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_socketio__WEBPACK_IMPORTED_MODULE_2__]);\n_services_socketio__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\nfunction Home() {\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        _services_socketio__WEBPACK_IMPORTED_MODULE_2__[\"default\"].on(\"carrinho\", (data)=>{\n            console.log(data);\n        });\n    }, []);\n    function sendSocket(comando) {\n        console.log(comando);\n        _services_socketio__WEBPACK_IMPORTED_MODULE_2__[\"default\"].emit(\"comando\", comando);\n    }\n    let intervalRef = null;\n    function onMouseDown(p1, p2) {\n        intervalRef = setInterval(()=>{\n            // console.log(e.type);\n            sendSocket([\n                p1,\n                p2\n            ]);\n        }, 50);\n    }\n    function onMouseUp(e) {\n        if (intervalRef != null) {\n            clearInterval(intervalRef);\n            sendSocket([\n                \"P\",\n                \"P\"\n            ]);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Create Next App\"\n                    }, void 0, false, {\n                        fileName: \"/home/laranja/Documents/PIC2HWSW/car/site/pages/index.js\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/home/laranja/Documents/PIC2HWSW/car/site/pages/index.js\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/home/laranja/Documents/PIC2HWSW/car/site/pages/index.js\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/laranja/Documents/PIC2HWSW/car/site/pages/index.js\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onMouseDown: ()=>onMouseDown(\"F\", \"F\")\n                        ,\n                        onMouseUp: onMouseUp,\n                        children: \"FRENTE\"\n                    }, void 0, false, {\n                        fileName: \"/home/laranja/Documents/PIC2HWSW/car/site/pages/index.js\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onMouseDown: ()=>onMouseDown(\"T\", \"T\")\n                        ,\n                        onMouseUp: onMouseUp,\n                        children: \"TR\\xc1S\"\n                    }, void 0, false, {\n                        fileName: \"/home/laranja/Documents/PIC2HWSW/car/site/pages/index.js\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onMouseDown: ()=>onMouseDown(\"F\", \"P\")\n                        ,\n                        onMouseUp: onMouseUp,\n                        children: \"DIREITA\"\n                    }, void 0, false, {\n                        fileName: \"/home/laranja/Documents/PIC2HWSW/car/site/pages/index.js\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onMouseDown: ()=>onMouseDown(\"P\", \"F\")\n                        ,\n                        onMouseUp: onMouseUp,\n                        children: \"ESQUERDA\"\n                    }, void 0, false, {\n                        fileName: \"/home/laranja/Documents/PIC2HWSW/car/site/pages/index.js\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>sendSocket([\n                                \"P\",\n                                \"P\"\n                            ])\n                        ,\n                        children: \"Para\"\n                    }, void 0, false, {\n                        fileName: \"/home/laranja/Documents/PIC2HWSW/car/site/pages/index.js\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/laranja/Documents/PIC2HWSW/car/site/pages/index.js\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/laranja/Documents/PIC2HWSW/car/site/pages/index.js\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, this);\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUE2QjtBQUNrQjtBQUNMO0FBQ1I7QUFFbkIsU0FBU0ksSUFBSSxHQUFHO0lBQzdCRCxnREFBUyxDQUFDLElBQU07UUFDZEQsNkRBQVMsQ0FBQyxVQUFVLEVBQUUsQ0FBQ0ksSUFBSSxHQUFLO1lBQzlCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsSUFBSSxDQUFDLENBQUM7U0FDbkIsQ0FBQyxDQUFDO0tBQ0osRUFBRSxFQUFFLENBQUMsQ0FBQztJQUVQLFNBQVNHLFVBQVUsQ0FBQ0MsT0FBTyxFQUFFO1FBQzNCSCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0UsT0FBTyxDQUFDLENBQUM7UUFDckJSLCtEQUFXLENBQUMsU0FBUyxFQUFFUSxPQUFPLENBQUMsQ0FBQztLQUNqQztJQUVELElBQUlFLFdBQVcsR0FBRyxJQUFJO0lBRXRCLFNBQVNDLFdBQVcsQ0FBQ0MsRUFBRSxFQUFFQyxFQUFFLEVBQUU7UUFDM0JILFdBQVcsR0FBR0ksV0FBVyxDQUFDLElBQU07WUFDOUIsdUJBQXVCO1lBQ3ZCUCxVQUFVLENBQUM7Z0JBQUNLLEVBQUU7Z0JBQUVDLEVBQUU7YUFBQyxDQUFDLENBQUM7U0FDdEIsRUFBRSxFQUFFLENBQUMsQ0FBQztLQUNSO0lBRUQsU0FBU0UsU0FBUyxDQUFDQyxDQUFDLEVBQUU7UUFDcEIsSUFBSU4sV0FBVyxJQUFJLElBQUksRUFBRTtZQUN2Qk8sYUFBYSxDQUFDUCxXQUFXLENBQUMsQ0FBQztZQUMzQkgsVUFBVSxDQUFDO2dCQUFDLEdBQUc7Z0JBQUUsR0FBRzthQUFDLENBQUMsQ0FBQztTQUN4QjtLQUNGO0lBRUQscUJBQ0UsOERBQUNXLEtBQUc7UUFBQ0MsU0FBUyxFQUFFcEIsMEVBQWdCOzswQkFDOUIsOERBQUNELGtEQUFJOztrQ0FDSCw4REFBQ3VCLE9BQUs7a0NBQUMsaUJBQWU7Ozs7OzRCQUFRO2tDQUM5Qiw4REFBQ0MsTUFBSTt3QkFBQ0MsSUFBSSxFQUFDLGFBQWE7d0JBQUNDLE9BQU8sRUFBQyw4QkFBOEI7Ozs7OzRCQUFHO2tDQUNsRSw4REFBQ0MsTUFBSTt3QkFBQ0MsR0FBRyxFQUFDLE1BQU07d0JBQUNDLElBQUksRUFBQyxjQUFjOzs7Ozs0QkFBRzs7Ozs7O29CQUNsQzswQkFjUCw4REFBQ1QsS0FBRztnQkFBQ0MsU0FBUyxFQUFFcEIscUVBQVc7O2tDQUN6Qiw4REFBQzhCLFFBQU07d0JBQUNsQixXQUFXLEVBQUUsSUFBTUEsV0FBVyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7d0JBQUE7d0JBQUVJLFNBQVMsRUFBRUEsU0FBUztrQ0FBRSxRQUV4RTs7Ozs7NEJBQVM7a0NBQ1QsOERBQUNjLFFBQU07d0JBQUNsQixXQUFXLEVBQUUsSUFBTUEsV0FBVyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7d0JBQUE7d0JBQUVJLFNBQVMsRUFBRUEsU0FBUztrQ0FBRSxTQUV4RTs7Ozs7NEJBQVM7a0NBQ1QsOERBQUNjLFFBQU07d0JBQUNsQixXQUFXLEVBQUUsSUFBTUEsV0FBVyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7d0JBQUE7d0JBQUVJLFNBQVMsRUFBRUEsU0FBUztrQ0FBRSxTQUV4RTs7Ozs7NEJBQVM7a0NBQ1QsOERBQUNjLFFBQU07d0JBQUNsQixXQUFXLEVBQUUsSUFBTUEsV0FBVyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7d0JBQUE7d0JBQUVJLFNBQVMsRUFBRUEsU0FBUztrQ0FBRSxVQUV4RTs7Ozs7NEJBQVM7a0NBQ1QsOERBQUNjLFFBQU07d0JBQUNDLE9BQU8sRUFBRSxJQUFNdkIsVUFBVSxDQUFDO2dDQUFDLEdBQUc7Z0NBQUUsR0FBRzs2QkFBQyxDQUFDO3dCQUFBO2tDQUFFLE1BQUk7Ozs7OzRCQUFTOzs7Ozs7b0JBQ3hEOzs7Ozs7WUFDRixDQUNOO0NBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaXRlLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgc29ja2V0IGZyb20gXCIuLi9zZXJ2aWNlcy9zb2NrZXRpb1wiO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc29ja2V0Lm9uKFwiY2FycmluaG9cIiwgKGRhdGEpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgZnVuY3Rpb24gc2VuZFNvY2tldChjb21hbmRvKSB7XG4gICAgY29uc29sZS5sb2coY29tYW5kbyk7XG4gICAgc29ja2V0LmVtaXQoXCJjb21hbmRvXCIsIGNvbWFuZG8pO1xuICB9XG5cbiAgbGV0IGludGVydmFsUmVmID0gbnVsbDtcblxuICBmdW5jdGlvbiBvbk1vdXNlRG93bihwMSwgcDIpIHtcbiAgICBpbnRlcnZhbFJlZiA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGUudHlwZSk7XG4gICAgICBzZW5kU29ja2V0KFtwMSwgcDJdKTtcbiAgICB9LCA1MCk7XG4gIH1cblxuICBmdW5jdGlvbiBvbk1vdXNlVXAoZSkge1xuICAgIGlmIChpbnRlcnZhbFJlZiAhPSBudWxsKSB7XG4gICAgICBjbGVhckludGVydmFsKGludGVydmFsUmVmKTtcbiAgICAgIHNlbmRTb2NrZXQoW1wiUFwiLCBcIlBcIl0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5DcmVhdGUgTmV4dCBBcHA8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiR2VuZXJhdGVkIGJ5IGNyZWF0ZSBuZXh0IGFwcFwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgey8qIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNlbmRTb2NrZXQoW1wiRVwiLCBcIkZcIl0pfT5kaXJlaXRvIGhvcmFyaW88L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZW5kU29ja2V0KFtcIkVcIiwgXCJUXCJdKX0+XG4gICAgICAgICAgZGlyZWl0byBhbnRpaG9yYXJpb1xuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZW5kU29ja2V0KFtcIkRcIiwgXCJGXCJdKX0+ZXNxdWVyZG8gaG9yYXJpbzwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNlbmRTb2NrZXQoW1wiRFwiLCBcIlRcIl0pfT5cbiAgICAgICAgICBlc3F1ZXJkbyBhbnRpaG9yYXJpb1xuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZW5kU29ja2V0KFtcIlBcIiwgXCJQXCJdKX0+UGFyYTwvYnV0dG9uPlxuICAgICAgPC9tYWluPiAqL31cblxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgPGJ1dHRvbiBvbk1vdXNlRG93bj17KCkgPT4gb25Nb3VzZURvd24oXCJGXCIsIFwiRlwiKX0gb25Nb3VzZVVwPXtvbk1vdXNlVXB9PlxuICAgICAgICAgIEZSRU5URVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBvbk1vdXNlRG93bj17KCkgPT4gb25Nb3VzZURvd24oXCJUXCIsIFwiVFwiKX0gb25Nb3VzZVVwPXtvbk1vdXNlVXB9PlxuICAgICAgICAgIFRSw4FTXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIG9uTW91c2VEb3duPXsoKSA9PiBvbk1vdXNlRG93bihcIkZcIiwgXCJQXCIpfSBvbk1vdXNlVXA9e29uTW91c2VVcH0+XG4gICAgICAgICAgRElSRUlUQVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBvbk1vdXNlRG93bj17KCkgPT4gb25Nb3VzZURvd24oXCJQXCIsIFwiRlwiKX0gb25Nb3VzZVVwPXtvbk1vdXNlVXB9PlxuICAgICAgICAgIEVTUVVFUkRBXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNlbmRTb2NrZXQoW1wiUFwiLCBcIlBcIl0pfT5QYXJhPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJIZWFkIiwic3R5bGVzIiwic29ja2V0IiwidXNlRWZmZWN0IiwiSG9tZSIsIm9uIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJzZW5kU29ja2V0IiwiY29tYW5kbyIsImVtaXQiLCJpbnRlcnZhbFJlZiIsIm9uTW91c2VEb3duIiwicDEiLCJwMiIsInNldEludGVydmFsIiwib25Nb3VzZVVwIiwiZSIsImNsZWFySW50ZXJ2YWwiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwibWFpbiIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

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