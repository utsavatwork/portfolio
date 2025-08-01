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

/***/ "./src/components/Canvas.ts":
/*!**********************************!*\
  !*** ./src/components/Canvas.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Canvas: () => (/* binding */ Canvas)\n/* harmony export */ });\nclass Canvas extends HTMLElement {\n    constructor() {\n        var _a, _b;\n        super();\n        this.attachShadow({ mode: 'open' });\n        const style = document.createElement('style');\n        style.textContent = `\n      #container {\n        position: relative;\n        width: 300vw;\n        height: 300vh;\n        overflow: 'hidden';\n      }\n      .grid-item {\n        position: absolute;\n        width: 100vw;\n        height: 100vh;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        justify-content: center;\n      }\n      .watermarked-container {\n        width: 300px;\n        height: 300px;\n        background-image: url(\"/images/watermark.png\");\n        background-repeat: no-repeat;\n        background-position: center;\n        background-size: contain; /* Adjust size */\n        opacity: 0.3; /* Fades the watermark */\n      }\n    `;\n        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(style);\n        const viewportWidth = window.innerWidth;\n        const viewportHeight = window.innerHeight;\n        (_b = document.getElementById('container')) === null || _b === void 0 ? void 0 : _b.scrollTo({\n            top: viewportHeight,\n            left: viewportWidth,\n            behavior: \"smooth\",\n        });\n    }\n    init() {\n        const container = document.createElement('div');\n        container.id = 'container';\n        for (let i = 0; i < 9; i++) {\n            const row = Math.floor(i / 3);\n            const col = i % 3;\n            const div = document.createElement(\"div\");\n            div.className = \"grid-item\";\n            div.style.top = `${row * 100}vh`;\n            div.style.left = `${col * 100}vw`;\n            if (row === 1 && col === 1) {\n                div.innerHTML = `<home-page></home-page>`;\n            }\n            else if (row === 0 && col === 0) {\n                const edu = document.createElement('education-section');\n                div.appendChild(edu);\n            }\n            else {\n                div.innerHTML = `<in-progress-card></in-progress-card>`;\n            }\n            container.appendChild(div);\n        }\n        return container;\n    }\n    connectedCallback() {\n        var _a;\n        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(this.init());\n    }\n}\n\n\n//# sourceURL=webpack://portfolio/./src/components/Canvas.ts?");

/***/ }),

/***/ "./src/components/MiniMap.ts":
/*!***********************************!*\
  !*** ./src/components/MiniMap.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MiniMap: () => (/* binding */ MiniMap)\n/* harmony export */ });\nclass MiniMap extends HTMLElement {\n    constructor() {\n        super();\n        this.isOpen = false;\n        this.activeSection = { row: 1, col: 1 };\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n        window.addEventListener(\"scroll\", this.handleScroll.bind(this));\n    }\n    disconnectedCallback() {\n        window.removeEventListener(\"scroll\", this.handleScroll.bind(this));\n    }\n    handleScroll() {\n        const scrollX = window.scrollX;\n        const scrollY = window.scrollY;\n        const viewportWidth = window.innerWidth;\n        const viewportHeight = window.innerHeight;\n        this.activeSection = {\n            row: Math.round(scrollY / viewportHeight),\n            col: Math.round(scrollX / viewportWidth),\n        };\n        this.render();\n    }\n    handleClick(row, col) {\n        const viewportWidth = window.innerWidth;\n        const viewportHeight = window.innerHeight;\n        window.scrollTo({\n            top: row * viewportHeight,\n            left: col * viewportWidth,\n            behavior: \"smooth\",\n        });\n    }\n    toggleOpen() {\n        this.isOpen = !this.isOpen;\n        this.render();\n    }\n    attachEventListeners() {\n        var _a;\n        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelectorAll(\".grid-cell\").forEach(cell => {\n            const row = Number(cell.getAttribute(\"data-row\"));\n            const col = Number(cell.getAttribute(\"data-col\"));\n            console.log(row + \"  \" + col);\n            cell.addEventListener(\"click\", () => this.handleClick(row, col));\n        });\n    }\n    render() {\n        if (!this.shadowRoot)\n            return;\n        this.shadowRoot.innerHTML = `\n      <style>\n        :host {\n          position: fixed;\n          bottom: 1.5rem;\n          right: 1.5rem;\n          z-index: 50;\n        }\n        .button {\n          width: 7rem;\n          height: 7rem;\n          background: white;\n          display: flex;\n          align-items: center;\n          justify-content: center;\n          box-shadow: 0 5px 8px rgba(0,0,0,0.15);\n          border: none;\n          cursor: pointer;\n          border-radius: 12px;\n        }\n        #minimap-container {\n          width: 25vw;\n          height: 25vh;\n          position: fixed;\n          bottom: 3vh;\n          right: 2vw;\n          box-shadow: 0 4px 10px rgba(0,0,0,0.2);\n          z-index: 50;\n          border-radius: 16px;\n          overflow: hidden;\n        }\n        .close-btn {\n          position: absolute;\n          top: 0.5rem;\n          right: 0.5rem;\n          width: 1rem;\n          height: 1rem;\n          border-radius: 4px;\n          border: none;\n          cursor: pointer;\n        }\n        .grid {\n          display: grid;\n          grid-template-columns: repeat(3, 1fr);\n          grid-template-rows: repeat(3, 1fr);\n          width: 100%;\n          height: 100%;\n        }\n        .grid-cell {\n          /* border: 1px solid #ccc; */\n          cursor: pointer;\n        }\n        .active {\n          background-color: #efefef; \n          opacity: 0.8;\n        }\n        #mini-canvas {\n          position: absolute;\n          top: 0;\n          left: 0;\n          width: 100%;\n          height: 100%;\n          transform: scale(0.0833);\n          transform-origin: top left;\n          pointer-events: none;\n        }\n      </style>\n\n      ${this.isOpen ? `\n        <div id=\"minimap-container\">\n          <button class=\"close-btn\" onclick=\"this.getRootNode().host.toggleOpen()\">\n            <i class=\"ri-close-line\"></i>\n          </button>\n          <div class=\"grid\">\n            ${[0, 1, 2].map(row => [0, 1, 2].map(col => `<div data-row=\"${row}\" data-col=\"${col}\" class=\"grid-cell ${this.activeSection.row === row && this.activeSection.col === col ? 'active' : ''}\"></div>`).join(\"\")).join(\"\")}\n          </div>\n\n          <app-canvas id='mini-canvas'></app-canvas>\n        </div>\n      ` : `\n        <button id=\"minimapBtn\" class=\"button\" onclick=\"this.getRootNode().host.toggleOpen()\">\n          <img src=\"public/my-navigation.png\" alt=\"Open MiniMap\" style=\"width: 5rem; height: 5rem;\">\n        </button>\n      `}\n    `;\n        this.attachEventListeners();\n    }\n}\n\n\n//# sourceURL=webpack://portfolio/./src/components/MiniMap.ts?");

/***/ }),

/***/ "./src/components/home-page.ts":
/*!*************************************!*\
  !*** ./src/components/home-page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   HomePage: () => (/* binding */ HomePage)\n/* harmony export */ });\nclass HomePage extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: 'open' });\n        if (!this.shadowRoot) {\n            throw new Error('Something went wrong. Could not render HomePage component.');\n        }\n        this.shadowDom = this.shadowRoot;\n    }\n    connectedCallback() {\n        this.rerender();\n    }\n    rerender() {\n        this.shadowDom.innerHTML = `\n      <style>${HomePage.styling}</style>\n      <div class=\"container\">\n        <img src=\"/public/me.jpg\" />\n        <div>\n          <h1>Utsav Tayde</h1>\n          <p>\n            <strong>Software Engineer</strong><br>\n            <i class='ri-map-pin-fill'></i>Pune, India\n          </p>\n        </div>\n      </div>\n    `;\n    }\n}\nHomePage.styling = `\n    .container {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      height: 100%;\n      gap: 4vw;\n    }\n    img {\n      border-radius: 50%;\n      width: 20vw;\n      height: auto;\n    }\n  `;\n\n\n//# sourceURL=webpack://portfolio/./src/components/home-page.ts?");

/***/ }),

/***/ "./src/components/in-progress-card.ts":
/*!********************************************!*\
  !*** ./src/components/in-progress-card.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   InProgressCard: () => (/* binding */ InProgressCard)\n/* harmony export */ });\nclass InProgressCard extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: 'open' });\n        if (!this.shadowRoot) {\n            throw new Error('Something went wrong. Could not render InProgressCard component.');\n        }\n        this.shadowDom = this.shadowRoot;\n    }\n    connectedCallback() {\n        this.rerender();\n    }\n    rerender() {\n        this.shadowDom.innerHTML = `<div>\n      <h1>This section is under progress.</h1>\n    </div>`;\n    }\n}\n\n\n//# sourceURL=webpack://portfolio/./src/components/in-progress-card.ts?");

/***/ }),

/***/ "./src/components/sections/education-section.ts":
/*!******************************************************!*\
  !*** ./src/components/sections/education-section.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   EducationSection: () => (/* binding */ EducationSection)\n/* harmony export */ });\nclass EducationSection extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: 'open' });\n        if (!this.shadowRoot) {\n            throw new Error('Something went wrong. Could not render HomePage component.');\n        }\n        this.shadowDom = this.shadowRoot;\n    }\n    connectedCallback() {\n        this.rerender();\n    }\n    rerender() {\n        this.shadowDom.innerHTML = `\n      <style>${EducationSection.styling}</style>\n      <div class=\"container\" style=\"width: 70vw; height: 100vh;\">\n        <h1>Education</h1>\n        <div>\n          <table>\n            <tr>\n              <th>Degree</th>\n              <th>Institution</th>\n              <th>Year</th>\n            </tr>\n            <tr>\n              <td>Bachelor of Engineering in Computer Engineering</td>\n              <td>MIT College of Engineering, Pune</td>\n              <td>2016 - 2020</td>\n            </tr>\n            <tr>\n              <td>Higher Secondary Certificate (HSC)</td>\n              <td>New English School, Pune</td>\n              <td>2014 - 2016</td>\n            </tr>\n            <tr>\n              <td>Secondary School Certificate (SSC)</td>\n              <td>New English School, Pune</td>\n              <td>2013 - 2014</td>\n            </tr>\n          </table>\n        </div>\n      </div>\n    `;\n    }\n}\nEducationSection.styling = `\n    .container {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\n      height: 100%;\n    }\n  `;\n\n\n//# sourceURL=webpack://portfolio/./src/components/sections/education-section.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_Canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Canvas */ \"./src/components/Canvas.ts\");\n/* harmony import */ var _components_home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/home-page */ \"./src/components/home-page.ts\");\n/* harmony import */ var _components_in_progress_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/in-progress-card */ \"./src/components/in-progress-card.ts\");\n/* harmony import */ var _components_MiniMap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/MiniMap */ \"./src/components/MiniMap.ts\");\n/* harmony import */ var _components_sections_education_section__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/sections/education-section */ \"./src/components/sections/education-section.ts\");\n\n\n\n\n\nwindow.addEventListener('DOMContentLoaded', () => {\n    customElements.define('in-progress-card', _components_in_progress_card__WEBPACK_IMPORTED_MODULE_2__.InProgressCard);\n    customElements.define('home-page', _components_home_page__WEBPACK_IMPORTED_MODULE_1__.HomePage);\n    customElements.define('education-section', _components_sections_education_section__WEBPACK_IMPORTED_MODULE_4__.EducationSection);\n    customElements.define('app-canvas', _components_Canvas__WEBPACK_IMPORTED_MODULE_0__.Canvas);\n    customElements.define(\"mini-map\", _components_MiniMap__WEBPACK_IMPORTED_MODULE_3__.MiniMap);\n    const root = document.getElementById('root');\n    if (!root) {\n        throw new Error('Something went wrong. Could not render page.');\n    }\n    const canvas = document.createElement('app-canvas');\n    const miniMap = document.createElement('mini-map');\n    root.append(canvas, miniMap);\n    window.scrollTo({\n        top: window.innerHeight,\n        left: window.innerWidth,\n        behavior: 'auto',\n    });\n});\n\n\n//# sourceURL=webpack://portfolio/./src/index.ts?");

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;