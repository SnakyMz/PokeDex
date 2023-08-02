/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Edu+SA+Beginner:wght@400;500;600;700&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n  font-family: 'Edu SA Beginner', cursive;\r\n}\r\n\r\nbody {\r\n  background-color: firebrick;\r\n}\r\n\r\n.heading {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  flex-wrap: wrap;\r\n  width: 100%;\r\n  align-items: center;\r\n  gap: 1rem;\r\n  font-size: 25px;\r\n  margin: 0;\r\n  padding: 20px;\r\n}\r\n\r\n.nav__list {\r\n  list-style: none;\r\n  margin-right: 1rem;\r\n}\r\n\r\n.nav__item {\r\n  text-decoration: none;\r\n  font-weight: 900;\r\n  color: whitesmoke;\r\n}\r\n\r\n/* Pokemon Cards */\r\n.cards {\r\n  position: relative;\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\r\n  gap: 1.5rem;\r\n  padding: 2rem;\r\n}\r\n\r\n.card {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 0.5rem;\r\n  width: 100%;\r\n  background-color: white;\r\n  border-radius: 1rem;\r\n  text-align: center;\r\n  transition: transform 0.5s;\r\n  box-shadow: 0.2rem 0.2rem 0 black;\r\n}\r\n\r\n.card .pokemon-img {\r\n  background: radial-gradient(rgb(156, 156, 156) 30%, white 10%);\r\n  background-size: 10px 10px;\r\n  border-radius: 1rem 1rem 0 0;\r\n}\r\n\r\n.card:hover {\r\n  transform: scale(1.05);\r\n}\r\n\r\n.likeBtn {\r\n  transition: transform 0.5s;\r\n}\r\n\r\n.likeBtn:hover {\r\n  transform: scale(1.25);\r\n}\r\n\r\n.card .card-title {\r\n  display: flex;\r\n  padding: 0 1rem;\r\n}\r\n\r\n.card .card-title img {\r\n  margin-left: auto;\r\n  gap: 1rem;\r\n  cursor: pointer;\r\n}\r\n\r\n.card .like-count {\r\n  align-self: flex-end;\r\n  margin-bottom: 0.7rem;\r\n  margin-right: 0.5vw;\r\n  font-weight: bold;\r\n}\r\n\r\n.card .buttons button {\r\n  font-size: 1rem;\r\n  font-weight: 700;\r\n  padding: 0.3rem 0.9rem;\r\n  margin: 5px;\r\n  margin-bottom: 2vh;\r\n  border-radius: 0.4rem;\r\n  background-color: white;\r\n  cursor: pointer;\r\n  box-shadow: 0.2rem 0.2rem 0 black;\r\n}\r\n\r\n.card .buttons button:hover {\r\n  color: #fff;\r\n  background-color: firebrick;\r\n}\r\n\r\n.card .buttons button:active {\r\n  transform: scale(0.95);\r\n}\r\n\r\n.overlay {\r\n  display: none;\r\n  position: fixed;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  background-color: dimgray;\r\n  mix-blend-mode: multiply;\r\n}\r\n\r\n.popContainer {\r\n  display: fixed;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.popup {\r\n  display: flex;\r\n  height: 90vh;\r\n  flex-direction: column;\r\n  overflow-y: scroll;\r\n  background-color: antiquewhite;\r\n  z-index: 2;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  position: fixed;\r\n  width: 80%;\r\n  border-radius: 1rem 0 0 1rem;\r\n  box-shadow: 0.2rem 0.2rem 0 black;\r\n}\r\n\r\n.tabHead {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: right;\r\n}\r\n\r\n.tabImage {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.popImg {\r\n  max-width: 200px;\r\n}\r\n\r\n.closeBtn {\r\n  right: 0;\r\n  width: 3rem;\r\n  height: 3rem;\r\n  padding: 0.5rem;\r\n}\r\n\r\n.closeBtn:hover {\r\n  animation: rotation 1s linear;\r\n}\r\n\r\n@keyframes rotation {\r\n  from {\r\n    transform: rotate(0deg);\r\n  }\r\n\r\n  to {\r\n    transform: rotate(180deg);\r\n  }\r\n}\r\n\r\n.tabDetail {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.popHead {\r\n  font-size: 3rem;\r\n}\r\n\r\n.popDetail {\r\n  display: grid;\r\n  width: 100%;\r\n  grid-template-columns: 1fr 1fr;\r\n  grid-template-rows: 1fr 1fr;\r\n  text-align: center;\r\n  padding: 5%;\r\n}\r\n\r\n.popDetail p {\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.tabComments {\r\n  display: flex;\r\n  flex-direction: column;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  align-items: center;\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.comments {\r\n  padding: 1rem 0.5rem 1rem 1.5rem;\r\n  font-size: 1rem;\r\n}\r\n\r\n.commentForm {\r\n  font-size: 1.5rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 100%;\r\n}\r\n\r\n.commentForm input,\r\n.commentForm textarea {\r\n  padding: 2% 3%;\r\n  margin: 2%;\r\n  width: 70%;\r\n  font-size: 1rem;\r\n  font-weight: 700;\r\n  border-radius: 0.5rem;\r\n}\r\n\r\n#formSubmit {\r\n  padding: 2% 3%;\r\n  font-weight: 700;\r\n  margin-bottom: 3%;\r\n  font-size: 1rem;\r\n  box-shadow: 5px 5px 2px -1px rgba(0, 0, 0, 0.75);\r\n  -webkit-box-shadow: 5px 5px 2px -1px rgba(0, 0, 0, 0.75);\r\n  -moz-box-shadow: 5px 5px 2px -1px rgba(0, 0, 0, 0.75);\r\n  border-radius: 1rem;\r\n  background-color: whitesmoke;\r\n  cursor: pointer;\r\n}\r\n\r\n#formSubmit:hover {\r\n  color: #fff;\r\n  background-color: firebrick;\r\n}\r\n\r\n#formSubmit:active {\r\n  transform: scale(0.95);\r\n}\r\n\r\n.footer {\r\n  text-align: center;\r\n  padding: 2rem;\r\n  color: whitesmoke;\r\n}\r\n\r\n.footer a {\r\n  text-decoration: none;\r\n  color: whitesmoke;\r\n}\r\n\r\n@media screen and (min-width: 768px) {\r\n  .cards {\r\n    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\r\n  }\r\n\r\n  .popHead {\r\n    font-size: 4rem;\r\n  }\r\n\r\n  .popDetail p {\r\n    font-size: 2rem;\r\n  }\r\n\r\n  .popImg {\r\n    max-width: 500px;\r\n  }\r\n\r\n  .popup h4 {\r\n    font-size: 2rem;\r\n  }\r\n\r\n  .comments,\r\n  .commentForm input,\r\n  .commentForm textarea,\r\n  #formSubmit {\r\n    font-size: 1.5rem;\r\n  }\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://module-2-capstone/./src/index.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://module-2-capstone/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://module-2-capstone/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./src/index.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://module-2-capstone/./src/index.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://module-2-capstone/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://module-2-capstone/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://module-2-capstone/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://module-2-capstone/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://module-2-capstone/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://module-2-capstone/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./src/index.css\");\n/* harmony import */ var _images_cancel_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/cancel.png */ \"./src/images/cancel.png\");\n/* harmony import */ var _modules_header_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/header.js */ \"./src/modules/header.js\");\n/* harmony import */ var _modules_likes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/likes.js */ \"./src/modules/likes.js\");\n\r\n\r\n\r\n\r\n\r\n(0,_modules_header_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n  (0,_modules_likes_js__WEBPACK_IMPORTED_MODULE_3__.likeGet)()\r\n    .then((data) => {\r\n      data.forEach((element) => {\r\n        const targetItem = element[1].item_id.split('likeId').slice(1);\r\n        const targetElement = document.querySelector(`#like-count${targetItem[0]}`);\r\n        if (targetElement) {\r\n          targetElement.innerHTML = `${element[1].likes} Likes`;\r\n        }\r\n      });\r\n    });\r\n\r\n  document.body.addEventListener('click', (e) => {\r\n    if (e.target && e.target.className === 'likeBtn') {\r\n      (0,_modules_likes_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(e.target);\r\n      (0,_modules_likes_js__WEBPACK_IMPORTED_MODULE_3__.likeGet)();\r\n      const targetId = (e.target.id).split('likeId').slice(1);\r\n      const targetHeart = document.querySelector(`#like-count${targetId}`).innerHTML.split(' ');\r\n      document.querySelector(`#like-count${targetId}`).innerHTML = `${(Number(targetHeart[0])) + 1} Likes`;\r\n    }\r\n  });\r\n});\n\n//# sourceURL=webpack://module-2-capstone/./src/index.js?");

/***/ }),

/***/ "./src/modules/api-data.js":
/*!*********************************!*\
  !*** ./src/modules/api-data.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ API)\n/* harmony export */ });\nclass API {\r\n  constructor() {\r\n    this.urls = {\r\n      pokemons: 'https://pokeapi.co/api/v2/pokemon/',\r\n      likes: 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/0YSAdjw9FalqCv0vGDYS/likes',\r\n      comments: 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/L3cd5MnXmz3nt1juQH1n/comments',\r\n    };\r\n  }\r\n\r\n  async get(url) {\r\n    this.url = url;\r\n    const response = await fetch(url);\r\n    return response.json();\r\n  }\r\n\r\n  async post(url, data) {\r\n    this.url = url;\r\n    const response = await fetch(url, {\r\n      method: 'POST',\r\n      headers: {\r\n        'Content-type': 'application/json',\r\n        'Access-Control-Allow-Origin': '*',\r\n      },\r\n      body: JSON.stringify(data),\r\n    });\r\n    const res = await response;\r\n    return res;\r\n  }\r\n}\n\n//# sourceURL=webpack://module-2-capstone/./src/modules/api-data.js?");

/***/ }),

/***/ "./src/modules/header.js":
/*!*******************************!*\
  !*** ./src/modules/header.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_International_Pok_mon_logo_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/International_Pokémon_logo.svg */ \"./src/images/International_Pokémon_logo.svg\");\n/* harmony import */ var _pokemon_data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pokemon-data.js */ \"./src/modules/pokemon-data.js\");\n\r\n\r\n\r\nconst headingLogo = document.querySelector('.heading__logo');\r\nconst logo = document.createElement('img');\r\nlogo.setAttribute('src', _images_International_Pok_mon_logo_svg__WEBPACK_IMPORTED_MODULE_0__);\r\nlogo.setAttribute('alt', 'Pokemon Logo');\r\nheadingLogo.appendChild(logo);\r\n\r\nconst navList = document.querySelector('.nav__list');\r\n\r\nconst createHeader = () => {\r\n  const header = document.querySelector('.heading');\r\n  const listItems = ['Pokemon', 'Planet', 'Race'];\r\n\r\n  for (let i = 0; i < listItems.length; i += 1) {\r\n    const navItems = document.createElement('li');\r\n\r\n    navItems.setAttribute('class', 'nav__item');\r\n    navItems.innerText = `${listItems[i]}`;\r\n\r\n    if (listItems[i] === 'Pokemon') {\r\n      (0,_pokemon_data_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0')\r\n        .then((response) => {\r\n          navItems.classList.add('active');\r\n          navItems.innerText = `${listItems[i]}(${response})`;\r\n        });\r\n    } else {\r\n      navItems.classList.remove('active');\r\n    }\r\n\r\n    navList.appendChild(navItems);\r\n  }\r\n\r\n  header.appendChild(navList);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHeader);\n\n//# sourceURL=webpack://module-2-capstone/./src/modules/header.js?");

/***/ }),

/***/ "./src/modules/likes.js":
/*!******************************!*\
  !*** ./src/modules/likes.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   likeGet: () => (/* binding */ likeGet)\n/* harmony export */ });\n/* harmony import */ var _images_like_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/like.png */ \"./src/images/like.png\");\n/* harmony import */ var _api_data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api-data.js */ \"./src/modules/api-data.js\");\n\r\n\r\n\r\nconst api = new _api_data_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\nconst likeURL = api.urls.likes;\r\n\r\nconst likeGet = async () => {\r\n  const data = fetch(likeURL)\r\n    .then((response) => response.json())\r\n    .then((obj) => Object.entries(obj))\r\n    .catch((err) => {\r\n      throw ('Failed to Get likes ', err);\r\n    });\r\n  return data;\r\n};\r\n\r\nconst likesPost = async (target) => {\r\n  fetch(likeURL, {\r\n\r\n    method: 'POST',\r\n    body: JSON.stringify({\r\n      item_id: target.id,\r\n    }),\r\n    headers: {\r\n      'Content-type': 'application/json; charset=UTF-8',\r\n    },\r\n\r\n  })\r\n    .catch((err) => {\r\n      throw ('Failed to Post likes ', err);\r\n    });\r\n  target.src = _images_like_png__WEBPACK_IMPORTED_MODULE_0__;\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (likesPost);\n\n//# sourceURL=webpack://module-2-capstone/./src/modules/likes.js?");

/***/ }),

/***/ "./src/modules/pokemon-data.js":
/*!*************************************!*\
  !*** ./src/modules/pokemon-data.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_unlike_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/unlike.png */ \"./src/images/unlike.png\");\n/* harmony import */ var _popup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popup.js */ \"./src/modules/popup.js\");\n/* harmony import */ var _likes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./likes.js */ \"./src/modules/likes.js\");\n\r\n\r\n\r\n\r\nconst cards = document.body.querySelector('.cards');\r\n\r\nconst pokemons = async (url) => {\r\n  const response = await fetch(url);\r\n  const data = await response.json();\r\n  data.results.forEach((result) => {\r\n    fetch(result.url)\r\n      .then((response) => response.json())\r\n      .then((pokemon) => {\r\n        const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);\r\n        const image = pokemon.sprites.other['official-artwork'].front_default;\r\n        const { height } = pokemon;\r\n        const { weight } = pokemon;\r\n        const ability = pokemon.abilities[0].ability.name;\r\n        const type = pokemon.types[0].type.name;\r\n        const { id } = pokemon;\r\n        const card = document.createElement('div');\r\n        card.className = 'card';\r\n        card.innerHTML = `\r\n            <img class=\"pokemon-img\" id=${id} src=\"${image}\" alt=\"${name}\">\r\n            <div class=\"card-title\">\r\n            <h2>${name}</h2>\r\n            <img id=\"likeId${id}\" class=\"likeBtn\" src=${_images_unlike_png__WEBPACK_IMPORTED_MODULE_0__} alt=\"like_icon\">\r\n            </div> \r\n            <p class=\"like-count\" id=\"like-count${id}\">0 Likes</p>\r\n            `;\r\n        const buttons = document.createElement('div');\r\n        buttons.className = 'buttons';\r\n        const button = document.createElement('button');\r\n        button.type = 'button';\r\n        button.id = id;\r\n        button.className = 'comment';\r\n        button.innerHTML = 'Comments';\r\n        button.addEventListener('click', () => {\r\n          (0,_popup_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(name, image, height, weight, ability, type, id);\r\n        });\r\n        buttons.appendChild(button);\r\n        card.appendChild(buttons);\r\n        cards.appendChild(card);\r\n      });\r\n  });\r\n  return data.results.length;\r\n};\r\n\r\n(0,_likes_js__WEBPACK_IMPORTED_MODULE_2__.likeGet)();\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pokemons);\n\n//# sourceURL=webpack://module-2-capstone/./src/modules/pokemon-data.js?");

/***/ }),

/***/ "./src/modules/popup.js":
/*!******************************!*\
  !*** ./src/modules/popup.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ popup)\n/* harmony export */ });\n/* harmony import */ var _api_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-data.js */ \"./src/modules/api-data.js\");\n\r\n\r\nconst api = new _api_data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n\r\nfunction popup(name, image, height, weight, ability, type, id) {\r\n  const overlay = document.querySelector('.overlay');\r\n  const container = document.querySelector('.popContainer');\r\n  container.innerHTML = '';\r\n  const tab = document.createElement('div');\r\n  tab.className = 'popup';\r\n\r\n  const tabHead = document.createElement('div');\r\n  tabHead.className = 'tabHead';\r\n  const popClose = document.createElement('img');\r\n  popClose.className = 'closeBtn';\r\n  popClose.src = './images/cancel.png';\r\n  popClose.alt = 'Close button';\r\n  popClose.addEventListener('click', () => {\r\n    container.removeChild(tab);\r\n    overlay.style.display = 'none';\r\n    document.body.style.overflow = 'scroll';\r\n  });\r\n  tabHead.appendChild(popClose);\r\n\r\n  const tabImage = document.createElement('div');\r\n  tabImage.className = 'tabImage';\r\n  const popImg = document.createElement('img');\r\n  popImg.className = 'popImg';\r\n  popImg.src = image;\r\n  popImg.alt = name;\r\n  tabImage.appendChild(popImg);\r\n\r\n  const tabDetail = document.createElement('div');\r\n  tabDetail.className = 'tabDetail';\r\n  const popHead = document.createElement('h3');\r\n  popHead.className = 'popHead';\r\n  popHead.innerHTML = name;\r\n  const popDetail = document.createElement('div');\r\n  popDetail.className = 'popDetail';\r\n  const popHeight = document.createElement('p');\r\n  popHeight.innerHTML = `height: ${height}`;\r\n  const popWeight = document.createElement('p');\r\n  popWeight.innerHTML = `weight: ${weight}`;\r\n  const popAbilities = document.createElement('p');\r\n  popAbilities.innerHTML = `ability: ${ability}`;\r\n  const popSpecies = document.createElement('p');\r\n  popSpecies.innerHTML = `type: ${type}`;\r\n  tabDetail.appendChild(popHead);\r\n  popDetail.appendChild(popHeight);\r\n  popDetail.appendChild(popWeight);\r\n  popDetail.appendChild(popAbilities);\r\n  popDetail.appendChild(popSpecies);\r\n  tabDetail.appendChild(popDetail);\r\n\r\n  const tabComments = document.createElement('div');\r\n  tabComments.className = 'tabComments';\r\n  const commentsHead = document.createElement('h4');\r\n  const comments = document.createElement('ul');\r\n  comments.className = 'comments';\r\n  const loadComments = async () => {\r\n    comments.innerHTML = '';\r\n    await fetch(`${api.urls.comments}?item_id=${id}`)\r\n      .then((response) => response.json())\r\n      .then((data) => {\r\n        if (Array.isArray(data)) {\r\n          data.forEach((com) => {\r\n            const li = document.createElement('li');\r\n            li.innerHTML = `${com.creation_date} ${com.username}: ${com.comment}`;\r\n            comments.appendChild(li);\r\n            commentsHead.innerHTML = `Comments(${comments.childElementCount})`;\r\n          });\r\n        }\r\n      });\r\n  };\r\n  loadComments();\r\n  tabComments.appendChild(commentsHead);\r\n  tabComments.appendChild(comments);\r\n\r\n  const form = document.createElement('form');\r\n  form.className = 'commentForm';\r\n  const formHead = document.createElement('h4');\r\n  formHead.innerHTML = 'Add a comment';\r\n  const formName = document.createElement('input');\r\n  formName.type = 'text';\r\n  formName.name = 'Username';\r\n  formName.id = 'formName';\r\n  formName.placeholder = 'Your name';\r\n  const formText = document.createElement('textarea');\r\n  formText.name = 'UserComment';\r\n  formText.id = 'formText';\r\n  formText.placeholder = 'Your insights';\r\n  formText.rows = '10';\r\n  formText.cols = '30';\r\n  const formSubmit = document.createElement('button');\r\n  formSubmit.type = 'submit';\r\n  formSubmit.id = 'formSubmit';\r\n  formSubmit.innerHTML = 'Submit';\r\n  form.appendChild(formHead);\r\n  form.appendChild(formName);\r\n  form.appendChild(formText);\r\n  form.appendChild(formSubmit);\r\n  form.addEventListener('submit', async (event) => {\r\n    event.preventDefault();\r\n    await fetch(api.urls.comments, {\r\n      method: 'POST',\r\n      body: JSON.stringify({\r\n        item_id: id,\r\n        username: formName.value,\r\n        comment: formText.value,\r\n      }),\r\n      headers: {\r\n        'Content-type': 'application/json; charset=UTF-8',\r\n      },\r\n    });\r\n    loadComments();\r\n    form.reset();\r\n  });\r\n\r\n  tab.appendChild(tabHead);\r\n  tab.appendChild(tabImage);\r\n  tab.appendChild(tabDetail);\r\n  tab.appendChild(tabComments);\r\n  tab.appendChild(form);\r\n\r\n  container.appendChild(tab);\r\n  overlay.style.display = 'flex';\r\n  document.body.style.overflow = 'hidden';\r\n}\n\n//# sourceURL=webpack://module-2-capstone/./src/modules/popup.js?");

/***/ }),

/***/ "./src/images/International_Pokémon_logo.svg":
/*!***************************************************!*\
  !*** ./src/images/International_Pokémon_logo.svg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/International_Pokémon_logo.svg\";\n\n//# sourceURL=webpack://module-2-capstone/./src/images/International_Pok%C3%A9mon_logo.svg?");

/***/ }),

/***/ "./src/images/cancel.png":
/*!*******************************!*\
  !*** ./src/images/cancel.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/cancel.png\";\n\n//# sourceURL=webpack://module-2-capstone/./src/images/cancel.png?");

/***/ }),

/***/ "./src/images/like.png":
/*!*****************************!*\
  !*** ./src/images/like.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/like.png\";\n\n//# sourceURL=webpack://module-2-capstone/./src/images/like.png?");

/***/ }),

/***/ "./src/images/unlike.png":
/*!*******************************!*\
  !*** ./src/images/unlike.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/unlike.png\";\n\n//# sourceURL=webpack://module-2-capstone/./src/images/unlike.png?");

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
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;