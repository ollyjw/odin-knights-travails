/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
    background-color: #111827;
}

.container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: center;  
    font-family: sans-serif;
}

.gameboard {
    display: grid;
    grid-template-columns: 0.5fr repeat(8, 105px);
    grid-template-rows: repeat(8, 105px) 0.5fr;    
    gap: 7.5px;
    margin-top: 60px;
}

.square {
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 34px;
    text-transform: capitalize;
}

.square-black {
    background-color: #737373;
}

.square-white {
    background-color: #fdffcb;
}

.legend {
    background-color: #eee;
    display: flex;
    justify-content: center;
    align-items: center;
    
}

.row {
    width: 30px;
}

.col {
    height: 30px;
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,eAAe;IACf,uBAAuB;IACvB,mBAAmB;IACnB,qBAAqB;IACrB,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,6CAA6C;IAC7C,0CAA0C;IAC1C,UAAU;IACV,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;IACf,0BAA0B;AAC9B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,sBAAsB;IACtB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;;AAEvB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,YAAY;AAChB","sourcesContent":["body {\r\n    background-color: #111827;\r\n}\r\n\r\n.container {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    align-items: center;\r\n    align-content: center;  \r\n    font-family: sans-serif;\r\n}\r\n\r\n.gameboard {\r\n    display: grid;\r\n    grid-template-columns: 0.5fr repeat(8, 105px);\r\n    grid-template-rows: repeat(8, 105px) 0.5fr;    \r\n    gap: 7.5px;\r\n    margin-top: 60px;\r\n}\r\n\r\n.square {\r\n    padding: 20px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    font-size: 34px;\r\n    text-transform: capitalize;\r\n}\r\n\r\n.square-black {\r\n    background-color: #737373;\r\n}\r\n\r\n.square-white {\r\n    background-color: #fdffcb;\r\n}\r\n\r\n.legend {\r\n    background-color: #eee;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    \r\n}\r\n\r\n.row {\r\n    width: 30px;\r\n}\r\n\r\n.col {\r\n    height: 30px;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/board.js":
/*!**********************!*\
  !*** ./src/board.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayBoard: () => (/* binding */ displayBoard),
/* harmony export */   genBoard: () => (/* binding */ genBoard)
/* harmony export */ });
/* harmony import */ var _knightMoves__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./knightMoves */ "./src/knightMoves.js");


// Generate board and assign co-ordinates to each square
function genBoard() {
    const chessBoard = [];    
    for (let i = 0; i < 8; i++) { // ROW i.e nums
        // gen 8 row arrays each containing each coord in row
        const rowArray = [];
        let rowCoord = i + 1;
        for (let j = 0; j < 8; j++) { // COL i.e. letters
            const colCoord = String.fromCharCode(65 + j); // convert to letters;
            const coordinate = `${rowCoord}${colCoord}`;            
            rowArray.push(coordinate);           
        }
        chessBoard.push(rowArray); // access coords by [rowIndex][colIndex]
    }
    console.log("chessboard array is:");
    console.log(chessBoard);
    console.log(`Row index 0 & col index 0 is: ${chessBoard[0][0]}, Row 7 & col 7 is: ${chessBoard[7][7]}`);
    return chessBoard;
}

function displayBoard() {
    const container = document.createElement('div');
    container.classList.add('container');
    document.body.appendChild(container);

    const gameboard = document.createElement('div');
    gameboard.classList.add('gameboard');
    
    for (let i = _knightMoves__WEBPACK_IMPORTED_MODULE_0__.board.length - 1; i >= 0; i--) { // ROW i.e nums
        const row = _knightMoves__WEBPACK_IMPORTED_MODULE_0__.board[i];
        //console.log(row);
        let rowCoord = i + 1;
        for (let j = 0; j < row.length; j++) {             
            const colCoord = String.fromCharCode(65 + j); // convert to letters;
            const coordinate = `${rowCoord}${colCoord}`;
            if (j === 0) {
                const rowLegend = document.createElement("div");                
                rowLegend.classList.add("legend", "row");
                rowLegend.textContent = i + 1;
                gameboard.append(rowLegend);
            }
            const square = document.createElement('div');
            square.id = coordinate;
            square.textContent = coordinate;
            square.classList.add('square');
            gameboard.appendChild(square);
            if ((i + j) % 2 == 0) {
                square.classList.add('square-black');
            } else {
                square.classList.add('square-white');
            }            
        }
    }
    for (let i = 0; i < 9; i++) {
        const colLegend = document.createElement("div");
        colLegend.classList.add("legend", "col");
        colLegend.textContent = String.fromCharCode(64 + i);
        if (i === 0) {
            colLegend.textContent = "";
        }
        gameboard.append(colLegend);
    }
    container.appendChild(gameboard);
}

/***/ }),

/***/ "./src/knightMoves.js":
/*!****************************!*\
  !*** ./src/knightMoves.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Knight: () => (/* binding */ Knight),
/* harmony export */   board: () => (/* binding */ board),
/* harmony export */   knightMoves: () => (/* binding */ knightMoves)
/* harmony export */ });
/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board */ "./src/board.js");


const board = (0,_board__WEBPACK_IMPORTED_MODULE_0__.genBoard)();
(0,_board__WEBPACK_IMPORTED_MODULE_0__.displayBoard)();

class Knight {
    constructor(row, col) {
        this.row = row;
        this.col = col;
    }
    getCoord() {
        return board[this.row][this.col];
    }
    getPossibleMoves() { //two steps forward and one step to the side.
        // Make 2 arrays, one containing all possible moves from a given coord (calculations of row/col indeces) & another to store the new coords
        const result = [];
        const moves = [
            [
                this.row - 2,
                this.col - 1,
            ],
            [
                this.row - 2,
                this.col + 1,
            ],
            [
                this.row - 1,
                this.col - 2,
            ],
            [
                this.row - 1,
                this.col + 2,
            ],
            [
                this.row + 2,
                this.col - 1,
            ],
            [
                this.row + 2,
                this.col + 1,
            ],
            [
                this.row + 1,
                this.col - 2,
            ],
            [
                this.row + 1,
                this.col + 2,
            ],
        ];
        moves.forEach(possibleMove => {
            // for each item in moves array check possible move coords are within boundaries
            if (isWithinBoard(...possibleMove)) {
                // then create new knight node, add these coordinates to it's row & col properties and add each knight node to result array
                result.push(new Knight(...possibleMove));
            }
        })
        return result;
    }    
}

function isWithinBoard(i, j) {
    return (i >= 0 && i <= 7 && j >= 0 && j <= 7);
}

// Use the chosen search algorithm to find the shortest path between the starting square (or node) and the ending square. Output what that full path looks like, e.g.:
//   > knightMoves([3,3],[4,3])
//   => You made it in 3 moves!  Here's your path:
//     [3,3]
//     [4,5]
//     [2,4]
//     [4,3]
function knightMoves(currentLocation, destination) {    
    // Create queue that will keep track of what nodes need to be searched
    const queueArray = [];
    const levelOrderArray = [];    
    // set first el to knight node's given current location
    queueArray.push(new Knight(...currentLocation));

    // create a while loop that will run as long as the queue is not empty. In other words, it will run as long we still have nodes to traverse.
    // while the currentLocation & destination coords aren't equal - queueArray items are knights, destin items will be xy coords
    while ((queueArray[0].row !== destination[0]) || (queueArray[0].col !== destination[1])) {
        //we need to remove the first knight node in the queue and store in 'currentKnight'
        const currentKnight = queueArray.shift();
        // Store knight's possible moves in var
        const possibleMoves = currentKnight.getPossibleMoves(); // 8 poss knight objs
        
        // Take the current knight, loop through all possible moves on the board it can make and add parent prop to it's children - as new current knights are created from possibles moves they will be assigned parent prop linking to their parent's coords
        possibleMoves.forEach(possibleMove => {
            possibleMove.parent = currentKnight;
        })

        // Add possible moves (knight objs) to queue
        queueArray.push(...possibleMoves);
        
        // we need to make sure the current node is not null - If the node is null, we know we've reached the end of a branch
        if (currentKnight === null) continue;
            // (continue statement terminates execution of the statements in the current iteration of the current or labeled loop, and continues execution of the loop with the next iteration).
    } 

    // Remove & store first el from queue array (should be destination)
    let knightDestination = queueArray.shift();
    //console.log(knightDestination);
    let counter = 0;
    // While knights have a parent property (currentLocation input at end of queue will not have a parent prop)
    while(knightDestination.parent) {
        // add knights props to front of LO array
        levelOrderArray.unshift([knightDestination.row, knightDestination.col]);
        // Assign each knight the values of it's parent property
        knightDestination = knightDestination.parent;
        //console.log(`LO ARRAY: ${levelOrderArray}`);
        counter ++;
    }
    // add knights props to array outside of loop to return currentLocation coords
    levelOrderArray.unshift([knightDestination.row, knightDestination.col]);

    console.log("LO array is:");
    console.log(levelOrderArray);    
    levelOrderArray.forEach(row => console.log(row.join(',')));

    const result = `You made it in ${counter} moves! Knight moves from ${currentLocation}(${currentLocation[0] + 1}${String.fromCharCode(65 + currentLocation[1])}) to ${destination}(${destination[0] + 1}${String.fromCharCode(65 + destination[1])}) will be: ${levelOrderArray}`;

    return result;
}

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _knightMoves__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./knightMoves */ "./src/knightMoves.js");
// import './chess-knight.png';



// A knight in chess can move to any square on the standard 8x8 chess board from any other square on the board, given enough turns. Its basic move is two steps forward and one step to the side.

// Determine the shortest possible way to get from one square to another by outputting all squares the knight will stop on along the way

// Assign co-ordinates to each square
// Knight also has current coordinates plus array of (max 8) possible destinations
// Compare knight's coordinates to each square

//Treat all possible moves the knight could make as children in a tree. Don’t allow any moves to go off the board.

// Use Breadth first search - the chessboard is most accurately represented as a 64-node graph. It's not really a tree since there are multiple ways to reach any particular node.


// const testKnight = new Knight(3,3); //5D
// console.log(testKnight);
// console.log(testKnight.getPossibleMoves());
// knightMoves([3,3],[4,3]);
// console.log(`Knight moves from 5D to 4D will be: ${knightMoves([3,3],[4,3])}`);
console.log((0,_knightMoves__WEBPACK_IMPORTED_MODULE_1__.knightMoves)([3,3],[4,3]));

console.log((0,_knightMoves__WEBPACK_IMPORTED_MODULE_1__.knightMoves)([0,0],[7,7]));
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8saUZBQWlGLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxjQUFjLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLGdDQUFnQyxrQ0FBa0MsS0FBSyxvQkFBb0Isc0JBQXNCLHdCQUF3QixnQ0FBZ0MsNEJBQTRCLGdDQUFnQyxnQ0FBZ0MsS0FBSyxvQkFBb0Isc0JBQXNCLHNEQUFzRCx1REFBdUQsbUJBQW1CLHlCQUF5QixLQUFLLGlCQUFpQixzQkFBc0Isc0JBQXNCLGdDQUFnQyw0QkFBNEIsd0JBQXdCLG1DQUFtQyxLQUFLLHVCQUF1QixrQ0FBa0MsS0FBSyx1QkFBdUIsa0NBQWtDLEtBQUssaUJBQWlCLCtCQUErQixzQkFBc0IsZ0NBQWdDLDRCQUE0QixhQUFhLGNBQWMsb0JBQW9CLEtBQUssY0FBYyxxQkFBcUIsS0FBSyxtQkFBbUI7QUFDOTlDO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDM0QxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBb0c7QUFDcEc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyx1RkFBTzs7OztBQUk4QztBQUN0RSxPQUFPLGlFQUFlLHVGQUFPLElBQUksdUZBQU8sVUFBVSx1RkFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDbkZhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2JzQztBQUN0QztBQUNBO0FBQ087QUFDUDtBQUNBLG9CQUFvQixPQUFPLE9BQU87QUFDbEM7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLE9BQU8sT0FBTztBQUN0QywwREFBMEQ7QUFDMUQsa0NBQWtDLFNBQVMsRUFBRSxTQUFTO0FBQ3REO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0EsaURBQWlELGlCQUFpQixzQkFBc0IsaUJBQWlCO0FBQ3pHO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsK0NBQUssYUFBYSxRQUFRLE9BQU87QUFDbEQsb0JBQW9CLCtDQUFLO0FBQ3pCO0FBQ0E7QUFDQSx3QkFBd0IsZ0JBQWdCO0FBQ3hDLDBEQUEwRDtBQUMxRCxrQ0FBa0MsU0FBUyxFQUFFLFNBQVM7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqRWlEO0FBQ2pEO0FBQ08sY0FBYyxnREFBUTtBQUM3QixvREFBWTtBQUNaO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRUFBZ0U7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsZ0JBQWdCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxTQUFTLDJCQUEyQixnQkFBZ0IsR0FBRyx1QkFBdUIsRUFBRSw2Q0FBNkMsT0FBTyxZQUFZLEdBQUcsbUJBQW1CLEVBQUUseUNBQXlDLGFBQWEsZ0JBQWdCO0FBQ25SO0FBQ0E7QUFDQTs7Ozs7O1VDM0hBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFDc0I7QUFDOEI7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBO0FBQ0E7QUFDQSxzREFBc0QseUJBQXlCO0FBQy9FLFlBQVkseURBQVc7QUFDdkI7QUFDQSxZQUFZLHlEQUFXLGUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2tuaWdodHMtdHJhdmFpbHMvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL2tuaWdodHMtdHJhdmFpbHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2tuaWdodHMtdHJhdmFpbHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy8uL3NyYy9ib2FyZC5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzLy4vc3JjL2tuaWdodE1vdmVzLmpzIiwid2VicGFjazovL2tuaWdodHMtdHJhdmFpbHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2tuaWdodHMtdHJhdmFpbHMvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2tuaWdodHMtdHJhdmFpbHMvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGJvZHkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzExMTgyNztcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyOyAgXHJcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmdhbWVib2FyZCB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjVmciByZXBlYXQoOCwgMTA1cHgpO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoOCwgMTA1cHgpIDAuNWZyOyAgICBcclxuICAgIGdhcDogNy41cHg7XHJcbiAgICBtYXJnaW4tdG9wOiA2MHB4O1xyXG59XHJcblxyXG4uc3F1YXJlIHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAzNHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn1cclxuXHJcbi5zcXVhcmUtYmxhY2sge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzczNzM3MztcclxufVxyXG5cclxuLnNxdWFyZS13aGl0ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRmZmNiO1xyXG59XHJcblxyXG4ubGVnZW5kIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgXHJcbn1cclxuXHJcbi5yb3cge1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbn1cclxuXHJcbi5jb2wge1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDZDQUE2QztJQUM3QywwQ0FBMEM7SUFDMUMsVUFBVTtJQUNWLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1COztBQUV2Qjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMTE4Mjc7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7ICBcXHJcXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbi5nYW1lYm9hcmQge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuNWZyIHJlcGVhdCg4LCAxMDVweCk7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDgsIDEwNXB4KSAwLjVmcjsgICAgXFxyXFxuICAgIGdhcDogNy41cHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDYwcHg7XFxyXFxufVxcclxcblxcclxcbi5zcXVhcmUge1xcclxcbiAgICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAzNHB4O1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnNxdWFyZS1ibGFjayB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3MzczNzM7XFxyXFxufVxcclxcblxcclxcbi5zcXVhcmUtd2hpdGUge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRmZmNiO1xcclxcbn1cXHJcXG5cXHJcXG4ubGVnZW5kIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4ucm93IHtcXHJcXG4gICAgd2lkdGg6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5jb2wge1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGJvYXJkIH0gZnJvbSBcIi4va25pZ2h0TW92ZXNcIjtcclxuXHJcbi8vIEdlbmVyYXRlIGJvYXJkIGFuZCBhc3NpZ24gY28tb3JkaW5hdGVzIHRvIGVhY2ggc3F1YXJlXHJcbmV4cG9ydCBmdW5jdGlvbiBnZW5Cb2FyZCgpIHtcclxuICAgIGNvbnN0IGNoZXNzQm9hcmQgPSBbXTsgICAgXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDg7IGkrKykgeyAvLyBST1cgaS5lIG51bXNcclxuICAgICAgICAvLyBnZW4gOCByb3cgYXJyYXlzIGVhY2ggY29udGFpbmluZyBlYWNoIGNvb3JkIGluIHJvd1xyXG4gICAgICAgIGNvbnN0IHJvd0FycmF5ID0gW107XHJcbiAgICAgICAgbGV0IHJvd0Nvb3JkID0gaSArIDE7XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCA4OyBqKyspIHsgLy8gQ09MIGkuZS4gbGV0dGVyc1xyXG4gICAgICAgICAgICBjb25zdCBjb2xDb29yZCA9IFN0cmluZy5mcm9tQ2hhckNvZGUoNjUgKyBqKTsgLy8gY29udmVydCB0byBsZXR0ZXJzO1xyXG4gICAgICAgICAgICBjb25zdCBjb29yZGluYXRlID0gYCR7cm93Q29vcmR9JHtjb2xDb29yZH1gOyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICByb3dBcnJheS5wdXNoKGNvb3JkaW5hdGUpOyAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNoZXNzQm9hcmQucHVzaChyb3dBcnJheSk7IC8vIGFjY2VzcyBjb29yZHMgYnkgW3Jvd0luZGV4XVtjb2xJbmRleF1cclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKFwiY2hlc3Nib2FyZCBhcnJheSBpczpcIik7XHJcbiAgICBjb25zb2xlLmxvZyhjaGVzc0JvYXJkKTtcclxuICAgIGNvbnNvbGUubG9nKGBSb3cgaW5kZXggMCAmIGNvbCBpbmRleCAwIGlzOiAke2NoZXNzQm9hcmRbMF1bMF19LCBSb3cgNyAmIGNvbCA3IGlzOiAke2NoZXNzQm9hcmRbN11bN119YCk7XHJcbiAgICByZXR1cm4gY2hlc3NCb2FyZDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlCb2FyZCgpIHtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xyXG5cclxuICAgIGNvbnN0IGdhbWVib2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZ2FtZWJvYXJkLmNsYXNzTGlzdC5hZGQoJ2dhbWVib2FyZCcpO1xyXG4gICAgXHJcbiAgICBmb3IgKGxldCBpID0gYm9hcmQubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHsgLy8gUk9XIGkuZSBudW1zXHJcbiAgICAgICAgY29uc3Qgcm93ID0gYm9hcmRbaV07XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhyb3cpO1xyXG4gICAgICAgIGxldCByb3dDb29yZCA9IGkgKyAxO1xyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgcm93Lmxlbmd0aDsgaisrKSB7ICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCBjb2xDb29yZCA9IFN0cmluZy5mcm9tQ2hhckNvZGUoNjUgKyBqKTsgLy8gY29udmVydCB0byBsZXR0ZXJzO1xyXG4gICAgICAgICAgICBjb25zdCBjb29yZGluYXRlID0gYCR7cm93Q29vcmR9JHtjb2xDb29yZH1gO1xyXG4gICAgICAgICAgICBpZiAoaiA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgcm93TGVnZW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICByb3dMZWdlbmQuY2xhc3NMaXN0LmFkZChcImxlZ2VuZFwiLCBcInJvd1wiKTtcclxuICAgICAgICAgICAgICAgIHJvd0xlZ2VuZC50ZXh0Q29udGVudCA9IGkgKyAxO1xyXG4gICAgICAgICAgICAgICAgZ2FtZWJvYXJkLmFwcGVuZChyb3dMZWdlbmQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IHNxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBzcXVhcmUuaWQgPSBjb29yZGluYXRlO1xyXG4gICAgICAgICAgICBzcXVhcmUudGV4dENvbnRlbnQgPSBjb29yZGluYXRlO1xyXG4gICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnc3F1YXJlJyk7XHJcbiAgICAgICAgICAgIGdhbWVib2FyZC5hcHBlbmRDaGlsZChzcXVhcmUpO1xyXG4gICAgICAgICAgICBpZiAoKGkgKyBqKSAlIDIgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ3NxdWFyZS1ibGFjaycpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ3NxdWFyZS13aGl0ZScpO1xyXG4gICAgICAgICAgICB9ICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA5OyBpKyspIHtcclxuICAgICAgICBjb25zdCBjb2xMZWdlbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGNvbExlZ2VuZC5jbGFzc0xpc3QuYWRkKFwibGVnZW5kXCIsIFwiY29sXCIpO1xyXG4gICAgICAgIGNvbExlZ2VuZC50ZXh0Q29udGVudCA9IFN0cmluZy5mcm9tQ2hhckNvZGUoNjQgKyBpKTtcclxuICAgICAgICBpZiAoaSA9PT0gMCkge1xyXG4gICAgICAgICAgICBjb2xMZWdlbmQudGV4dENvbnRlbnQgPSBcIlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBnYW1lYm9hcmQuYXBwZW5kKGNvbExlZ2VuZCk7XHJcbiAgICB9XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZ2FtZWJvYXJkKTtcclxufSIsImltcG9ydCB7IGdlbkJvYXJkLCBkaXNwbGF5Qm9hcmQgfSBmcm9tICcuL2JvYXJkJztcclxuXHJcbmV4cG9ydCBjb25zdCBib2FyZCA9IGdlbkJvYXJkKCk7XHJcbmRpc3BsYXlCb2FyZCgpO1xyXG5cclxuZXhwb3J0IGNsYXNzIEtuaWdodCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihyb3csIGNvbCkge1xyXG4gICAgICAgIHRoaXMucm93ID0gcm93O1xyXG4gICAgICAgIHRoaXMuY29sID0gY29sO1xyXG4gICAgfVxyXG4gICAgZ2V0Q29vcmQoKSB7XHJcbiAgICAgICAgcmV0dXJuIGJvYXJkW3RoaXMucm93XVt0aGlzLmNvbF07XHJcbiAgICB9XHJcbiAgICBnZXRQb3NzaWJsZU1vdmVzKCkgeyAvL3R3byBzdGVwcyBmb3J3YXJkIGFuZCBvbmUgc3RlcCB0byB0aGUgc2lkZS5cclxuICAgICAgICAvLyBNYWtlIDIgYXJyYXlzLCBvbmUgY29udGFpbmluZyBhbGwgcG9zc2libGUgbW92ZXMgZnJvbSBhIGdpdmVuIGNvb3JkIChjYWxjdWxhdGlvbnMgb2Ygcm93L2NvbCBpbmRlY2VzKSAmIGFub3RoZXIgdG8gc3RvcmUgdGhlIG5ldyBjb29yZHNcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBbXTtcclxuICAgICAgICBjb25zdCBtb3ZlcyA9IFtcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3cgLSAyLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5jb2wgLSAxLFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdyAtIDIsXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbCArIDEsXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIHRoaXMucm93IC0gMSxcclxuICAgICAgICAgICAgICAgIHRoaXMuY29sIC0gMixcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3cgLSAxLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5jb2wgKyAyLFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdyArIDIsXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbCAtIDEsXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIHRoaXMucm93ICsgMixcclxuICAgICAgICAgICAgICAgIHRoaXMuY29sICsgMSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3cgKyAxLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5jb2wgLSAyLFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdyArIDEsXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbCArIDIsXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgXTtcclxuICAgICAgICBtb3Zlcy5mb3JFYWNoKHBvc3NpYmxlTW92ZSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGZvciBlYWNoIGl0ZW0gaW4gbW92ZXMgYXJyYXkgY2hlY2sgcG9zc2libGUgbW92ZSBjb29yZHMgYXJlIHdpdGhpbiBib3VuZGFyaWVzXHJcbiAgICAgICAgICAgIGlmIChpc1dpdGhpbkJvYXJkKC4uLnBvc3NpYmxlTW92ZSkpIHtcclxuICAgICAgICAgICAgICAgIC8vIHRoZW4gY3JlYXRlIG5ldyBrbmlnaHQgbm9kZSwgYWRkIHRoZXNlIGNvb3JkaW5hdGVzIHRvIGl0J3Mgcm93ICYgY29sIHByb3BlcnRpZXMgYW5kIGFkZCBlYWNoIGtuaWdodCBub2RlIHRvIHJlc3VsdCBhcnJheVxyXG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gobmV3IEtuaWdodCguLi5wb3NzaWJsZU1vdmUpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH0gICAgXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzV2l0aGluQm9hcmQoaSwgaikge1xyXG4gICAgcmV0dXJuIChpID49IDAgJiYgaSA8PSA3ICYmIGogPj0gMCAmJiBqIDw9IDcpO1xyXG59XHJcblxyXG4vLyBVc2UgdGhlIGNob3NlbiBzZWFyY2ggYWxnb3JpdGhtIHRvIGZpbmQgdGhlIHNob3J0ZXN0IHBhdGggYmV0d2VlbiB0aGUgc3RhcnRpbmcgc3F1YXJlIChvciBub2RlKSBhbmQgdGhlIGVuZGluZyBzcXVhcmUuIE91dHB1dCB3aGF0IHRoYXQgZnVsbCBwYXRoIGxvb2tzIGxpa2UsIGUuZy46XHJcbi8vICAgPiBrbmlnaHRNb3ZlcyhbMywzXSxbNCwzXSlcclxuLy8gICA9PiBZb3UgbWFkZSBpdCBpbiAzIG1vdmVzISAgSGVyZSdzIHlvdXIgcGF0aDpcclxuLy8gICAgIFszLDNdXHJcbi8vICAgICBbNCw1XVxyXG4vLyAgICAgWzIsNF1cclxuLy8gICAgIFs0LDNdXHJcbmV4cG9ydCBmdW5jdGlvbiBrbmlnaHRNb3ZlcyhjdXJyZW50TG9jYXRpb24sIGRlc3RpbmF0aW9uKSB7ICAgIFxyXG4gICAgLy8gQ3JlYXRlIHF1ZXVlIHRoYXQgd2lsbCBrZWVwIHRyYWNrIG9mIHdoYXQgbm9kZXMgbmVlZCB0byBiZSBzZWFyY2hlZFxyXG4gICAgY29uc3QgcXVldWVBcnJheSA9IFtdO1xyXG4gICAgY29uc3QgbGV2ZWxPcmRlckFycmF5ID0gW107ICAgIFxyXG4gICAgLy8gc2V0IGZpcnN0IGVsIHRvIGtuaWdodCBub2RlJ3MgZ2l2ZW4gY3VycmVudCBsb2NhdGlvblxyXG4gICAgcXVldWVBcnJheS5wdXNoKG5ldyBLbmlnaHQoLi4uY3VycmVudExvY2F0aW9uKSk7XHJcblxyXG4gICAgLy8gY3JlYXRlIGEgd2hpbGUgbG9vcCB0aGF0IHdpbGwgcnVuIGFzIGxvbmcgYXMgdGhlIHF1ZXVlIGlzIG5vdCBlbXB0eS4gSW4gb3RoZXIgd29yZHMsIGl0IHdpbGwgcnVuIGFzIGxvbmcgd2Ugc3RpbGwgaGF2ZSBub2RlcyB0byB0cmF2ZXJzZS5cclxuICAgIC8vIHdoaWxlIHRoZSBjdXJyZW50TG9jYXRpb24gJiBkZXN0aW5hdGlvbiBjb29yZHMgYXJlbid0IGVxdWFsIC0gcXVldWVBcnJheSBpdGVtcyBhcmUga25pZ2h0cywgZGVzdGluIGl0ZW1zIHdpbGwgYmUgeHkgY29vcmRzXHJcbiAgICB3aGlsZSAoKHF1ZXVlQXJyYXlbMF0ucm93ICE9PSBkZXN0aW5hdGlvblswXSkgfHwgKHF1ZXVlQXJyYXlbMF0uY29sICE9PSBkZXN0aW5hdGlvblsxXSkpIHtcclxuICAgICAgICAvL3dlIG5lZWQgdG8gcmVtb3ZlIHRoZSBmaXJzdCBrbmlnaHQgbm9kZSBpbiB0aGUgcXVldWUgYW5kIHN0b3JlIGluICdjdXJyZW50S25pZ2h0J1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRLbmlnaHQgPSBxdWV1ZUFycmF5LnNoaWZ0KCk7XHJcbiAgICAgICAgLy8gU3RvcmUga25pZ2h0J3MgcG9zc2libGUgbW92ZXMgaW4gdmFyXHJcbiAgICAgICAgY29uc3QgcG9zc2libGVNb3ZlcyA9IGN1cnJlbnRLbmlnaHQuZ2V0UG9zc2libGVNb3ZlcygpOyAvLyA4IHBvc3Mga25pZ2h0IG9ianNcclxuICAgICAgICBcclxuICAgICAgICAvLyBUYWtlIHRoZSBjdXJyZW50IGtuaWdodCwgbG9vcCB0aHJvdWdoIGFsbCBwb3NzaWJsZSBtb3ZlcyBvbiB0aGUgYm9hcmQgaXQgY2FuIG1ha2UgYW5kIGFkZCBwYXJlbnQgcHJvcCB0byBpdCdzIGNoaWxkcmVuIC0gYXMgbmV3IGN1cnJlbnQga25pZ2h0cyBhcmUgY3JlYXRlZCBmcm9tIHBvc3NpYmxlcyBtb3ZlcyB0aGV5IHdpbGwgYmUgYXNzaWduZWQgcGFyZW50IHByb3AgbGlua2luZyB0byB0aGVpciBwYXJlbnQncyBjb29yZHNcclxuICAgICAgICBwb3NzaWJsZU1vdmVzLmZvckVhY2gocG9zc2libGVNb3ZlID0+IHtcclxuICAgICAgICAgICAgcG9zc2libGVNb3ZlLnBhcmVudCA9IGN1cnJlbnRLbmlnaHQ7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgLy8gQWRkIHBvc3NpYmxlIG1vdmVzIChrbmlnaHQgb2JqcykgdG8gcXVldWVcclxuICAgICAgICBxdWV1ZUFycmF5LnB1c2goLi4ucG9zc2libGVNb3Zlcyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gd2UgbmVlZCB0byBtYWtlIHN1cmUgdGhlIGN1cnJlbnQgbm9kZSBpcyBub3QgbnVsbCAtIElmIHRoZSBub2RlIGlzIG51bGwsIHdlIGtub3cgd2UndmUgcmVhY2hlZCB0aGUgZW5kIG9mIGEgYnJhbmNoXHJcbiAgICAgICAgaWYgKGN1cnJlbnRLbmlnaHQgPT09IG51bGwpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAvLyAoY29udGludWUgc3RhdGVtZW50IHRlcm1pbmF0ZXMgZXhlY3V0aW9uIG9mIHRoZSBzdGF0ZW1lbnRzIGluIHRoZSBjdXJyZW50IGl0ZXJhdGlvbiBvZiB0aGUgY3VycmVudCBvciBsYWJlbGVkIGxvb3AsIGFuZCBjb250aW51ZXMgZXhlY3V0aW9uIG9mIHRoZSBsb29wIHdpdGggdGhlIG5leHQgaXRlcmF0aW9uKS5cclxuICAgIH0gXHJcblxyXG4gICAgLy8gUmVtb3ZlICYgc3RvcmUgZmlyc3QgZWwgZnJvbSBxdWV1ZSBhcnJheSAoc2hvdWxkIGJlIGRlc3RpbmF0aW9uKVxyXG4gICAgbGV0IGtuaWdodERlc3RpbmF0aW9uID0gcXVldWVBcnJheS5zaGlmdCgpO1xyXG4gICAgLy9jb25zb2xlLmxvZyhrbmlnaHREZXN0aW5hdGlvbik7XHJcbiAgICBsZXQgY291bnRlciA9IDA7XHJcbiAgICAvLyBXaGlsZSBrbmlnaHRzIGhhdmUgYSBwYXJlbnQgcHJvcGVydHkgKGN1cnJlbnRMb2NhdGlvbiBpbnB1dCBhdCBlbmQgb2YgcXVldWUgd2lsbCBub3QgaGF2ZSBhIHBhcmVudCBwcm9wKVxyXG4gICAgd2hpbGUoa25pZ2h0RGVzdGluYXRpb24ucGFyZW50KSB7XHJcbiAgICAgICAgLy8gYWRkIGtuaWdodHMgcHJvcHMgdG8gZnJvbnQgb2YgTE8gYXJyYXlcclxuICAgICAgICBsZXZlbE9yZGVyQXJyYXkudW5zaGlmdChba25pZ2h0RGVzdGluYXRpb24ucm93LCBrbmlnaHREZXN0aW5hdGlvbi5jb2xdKTtcclxuICAgICAgICAvLyBBc3NpZ24gZWFjaCBrbmlnaHQgdGhlIHZhbHVlcyBvZiBpdCdzIHBhcmVudCBwcm9wZXJ0eVxyXG4gICAgICAgIGtuaWdodERlc3RpbmF0aW9uID0ga25pZ2h0RGVzdGluYXRpb24ucGFyZW50O1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coYExPIEFSUkFZOiAke2xldmVsT3JkZXJBcnJheX1gKTtcclxuICAgICAgICBjb3VudGVyICsrO1xyXG4gICAgfVxyXG4gICAgLy8gYWRkIGtuaWdodHMgcHJvcHMgdG8gYXJyYXkgb3V0c2lkZSBvZiBsb29wIHRvIHJldHVybiBjdXJyZW50TG9jYXRpb24gY29vcmRzXHJcbiAgICBsZXZlbE9yZGVyQXJyYXkudW5zaGlmdChba25pZ2h0RGVzdGluYXRpb24ucm93LCBrbmlnaHREZXN0aW5hdGlvbi5jb2xdKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIkxPIGFycmF5IGlzOlwiKTtcclxuICAgIGNvbnNvbGUubG9nKGxldmVsT3JkZXJBcnJheSk7ICAgIFxyXG4gICAgbGV2ZWxPcmRlckFycmF5LmZvckVhY2gocm93ID0+IGNvbnNvbGUubG9nKHJvdy5qb2luKCcsJykpKTtcclxuXHJcbiAgICBjb25zdCByZXN1bHQgPSBgWW91IG1hZGUgaXQgaW4gJHtjb3VudGVyfSBtb3ZlcyEgS25pZ2h0IG1vdmVzIGZyb20gJHtjdXJyZW50TG9jYXRpb259KCR7Y3VycmVudExvY2F0aW9uWzBdICsgMX0ke1N0cmluZy5mcm9tQ2hhckNvZGUoNjUgKyBjdXJyZW50TG9jYXRpb25bMV0pfSkgdG8gJHtkZXN0aW5hdGlvbn0oJHtkZXN0aW5hdGlvblswXSArIDF9JHtTdHJpbmcuZnJvbUNoYXJDb2RlKDY1ICsgZGVzdGluYXRpb25bMV0pfSkgd2lsbCBiZTogJHtsZXZlbE9yZGVyQXJyYXl9YDtcclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiLy8gaW1wb3J0ICcuL2NoZXNzLWtuaWdodC5wbmcnO1xyXG5pbXBvcnQgJy4vc3R5bGVzLmNzcyc7XHJcbmltcG9ydCB7IEtuaWdodCwga25pZ2h0TW92ZXMgfSBmcm9tICcuL2tuaWdodE1vdmVzJztcclxuXHJcbi8vIEEga25pZ2h0IGluIGNoZXNzIGNhbiBtb3ZlIHRvIGFueSBzcXVhcmUgb24gdGhlIHN0YW5kYXJkIDh4OCBjaGVzcyBib2FyZCBmcm9tIGFueSBvdGhlciBzcXVhcmUgb24gdGhlIGJvYXJkLCBnaXZlbiBlbm91Z2ggdHVybnMuIEl0cyBiYXNpYyBtb3ZlIGlzIHR3byBzdGVwcyBmb3J3YXJkIGFuZCBvbmUgc3RlcCB0byB0aGUgc2lkZS5cclxuXHJcbi8vIERldGVybWluZSB0aGUgc2hvcnRlc3QgcG9zc2libGUgd2F5IHRvIGdldCBmcm9tIG9uZSBzcXVhcmUgdG8gYW5vdGhlciBieSBvdXRwdXR0aW5nIGFsbCBzcXVhcmVzIHRoZSBrbmlnaHQgd2lsbCBzdG9wIG9uIGFsb25nIHRoZSB3YXlcclxuXHJcbi8vIEFzc2lnbiBjby1vcmRpbmF0ZXMgdG8gZWFjaCBzcXVhcmVcclxuLy8gS25pZ2h0IGFsc28gaGFzIGN1cnJlbnQgY29vcmRpbmF0ZXMgcGx1cyBhcnJheSBvZiAobWF4IDgpIHBvc3NpYmxlIGRlc3RpbmF0aW9uc1xyXG4vLyBDb21wYXJlIGtuaWdodCdzIGNvb3JkaW5hdGVzIHRvIGVhY2ggc3F1YXJlXHJcblxyXG4vL1RyZWF0IGFsbCBwb3NzaWJsZSBtb3ZlcyB0aGUga25pZ2h0IGNvdWxkIG1ha2UgYXMgY2hpbGRyZW4gaW4gYSB0cmVlLiBEb27igJl0IGFsbG93IGFueSBtb3ZlcyB0byBnbyBvZmYgdGhlIGJvYXJkLlxyXG5cclxuLy8gVXNlIEJyZWFkdGggZmlyc3Qgc2VhcmNoIC0gdGhlIGNoZXNzYm9hcmQgaXMgbW9zdCBhY2N1cmF0ZWx5IHJlcHJlc2VudGVkIGFzIGEgNjQtbm9kZSBncmFwaC4gSXQncyBub3QgcmVhbGx5IGEgdHJlZSBzaW5jZSB0aGVyZSBhcmUgbXVsdGlwbGUgd2F5cyB0byByZWFjaCBhbnkgcGFydGljdWxhciBub2RlLlxyXG5cclxuXHJcbi8vIGNvbnN0IHRlc3RLbmlnaHQgPSBuZXcgS25pZ2h0KDMsMyk7IC8vNURcclxuLy8gY29uc29sZS5sb2codGVzdEtuaWdodCk7XHJcbi8vIGNvbnNvbGUubG9nKHRlc3RLbmlnaHQuZ2V0UG9zc2libGVNb3ZlcygpKTtcclxuLy8ga25pZ2h0TW92ZXMoWzMsM10sWzQsM10pO1xyXG4vLyBjb25zb2xlLmxvZyhgS25pZ2h0IG1vdmVzIGZyb20gNUQgdG8gNEQgd2lsbCBiZTogJHtrbmlnaHRNb3ZlcyhbMywzXSxbNCwzXSl9YCk7XHJcbmNvbnNvbGUubG9nKGtuaWdodE1vdmVzKFszLDNdLFs0LDNdKSk7XHJcblxyXG5jb25zb2xlLmxvZyhrbmlnaHRNb3ZlcyhbMCwwXSxbNyw3XSkpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==