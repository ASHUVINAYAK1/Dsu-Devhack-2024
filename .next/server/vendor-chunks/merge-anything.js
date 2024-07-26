"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/merge-anything";
exports.ids = ["vendor-chunks/merge-anything"];
exports.modules = {

/***/ "(ssr)/./node_modules/merge-anything/dist/index.esm.js":
/*!*******************************************************!*\
  !*** ./node_modules/merge-anything/dist/index.esm.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   concatArrays: () => (/* binding */ concatArrays),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   merge: () => (/* binding */ merge)\n/* harmony export */ });\n/* harmony import */ var is_what__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! is-what */ \"(ssr)/./node_modules/is-what/dist/index.esm.js\");\n\n/*! *****************************************************************************\r\nCopyright (c) Microsoft Corporation. All rights reserved.\r\nLicensed under the Apache License, Version 2.0 (the \"License\"); you may not use\r\nthis file except in compliance with the License. You may obtain a copy of the\r\nLicense at http://www.apache.org/licenses/LICENSE-2.0\r\n\r\nTHIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\r\nKIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED\r\nWARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,\r\nMERCHANTABLITY OR NON-INFRINGEMENT.\r\n\r\nSee the Apache Version 2.0 License for specific language governing permissions\r\nand limitations under the License.\r\n***************************************************************************** */ function __spreadArrays() {\n    for(var s = 0, i = 0, il = arguments.length; i < il; i++)s += arguments[i].length;\n    for(var r = Array(s), k = 0, i = 0; i < il; i++)for(var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)r[k] = a[j];\n    return r;\n}\nfunction assignProp(carry, key, newVal, originalObject) {\n    var propType = originalObject.propertyIsEnumerable(key) ? \"enumerable\" : \"nonenumerable\";\n    if (propType === \"enumerable\") carry[key] = newVal;\n    if (propType === \"nonenumerable\") {\n        Object.defineProperty(carry, key, {\n            value: newVal,\n            enumerable: false,\n            writable: true,\n            configurable: true\n        });\n    }\n}\nfunction mergeRecursively(origin, newComer, extensions) {\n    // work directly on newComer if its not an object\n    if (!(0,is_what__WEBPACK_IMPORTED_MODULE_0__.isPlainObject)(newComer)) {\n        // extend merge rules\n        if (extensions && (0,is_what__WEBPACK_IMPORTED_MODULE_0__.isArray)(extensions)) {\n            extensions.forEach(function(extend) {\n                newComer = extend(origin, newComer);\n            });\n        }\n        return newComer;\n    }\n    // define newObject to merge all values upon\n    var newObject = {};\n    if ((0,is_what__WEBPACK_IMPORTED_MODULE_0__.isPlainObject)(origin)) {\n        var props_1 = Object.getOwnPropertyNames(origin);\n        var symbols_1 = Object.getOwnPropertySymbols(origin);\n        newObject = __spreadArrays(props_1, symbols_1).reduce(function(carry, key) {\n            // @ts-ignore\n            var targetVal = origin[key];\n            if (!(0,is_what__WEBPACK_IMPORTED_MODULE_0__.isSymbol)(key) && !Object.getOwnPropertyNames(newComer).includes(key) || (0,is_what__WEBPACK_IMPORTED_MODULE_0__.isSymbol)(key) && !Object.getOwnPropertySymbols(newComer).includes(key)) {\n                assignProp(carry, key, targetVal, origin);\n            }\n            return carry;\n        }, {});\n    }\n    var props = Object.getOwnPropertyNames(newComer);\n    var symbols = Object.getOwnPropertySymbols(newComer);\n    var result = __spreadArrays(props, symbols).reduce(function(carry, key) {\n        // re-define the origin and newComer as targetVal and newVal\n        var newVal = newComer[key];\n        var targetVal = (0,is_what__WEBPACK_IMPORTED_MODULE_0__.isPlainObject)(origin) ? origin[key] : undefined;\n        // extend merge rules\n        if (extensions && (0,is_what__WEBPACK_IMPORTED_MODULE_0__.isArray)(extensions)) {\n            extensions.forEach(function(extend) {\n                newVal = extend(targetVal, newVal);\n            });\n        }\n        // When newVal is an object do the merge recursively\n        if (targetVal !== undefined && (0,is_what__WEBPACK_IMPORTED_MODULE_0__.isPlainObject)(newVal)) {\n            newVal = mergeRecursively(targetVal, newVal, extensions);\n        }\n        assignProp(carry, key, newVal, newComer);\n        return carry;\n    }, newObject);\n    return result;\n}\n/**\r\n * Merge anything recursively.\r\n * Objects get merged, special objects (classes etc.) are re-assigned \"as is\".\r\n * Basic types overwrite objects or other basic types.\r\n *\r\n * @param {(IConfig | any)} origin\r\n * @param {...any[]} newComers\r\n * @returns the result\r\n */ function merge(origin) {\n    var newComers = [];\n    for(var _i = 1; _i < arguments.length; _i++){\n        newComers[_i - 1] = arguments[_i];\n    }\n    var extensions = null;\n    var base = origin;\n    if ((0,is_what__WEBPACK_IMPORTED_MODULE_0__.isPlainObject)(origin) && origin.extensions && Object.keys(origin).length === 1) {\n        base = {};\n        extensions = origin.extensions;\n    }\n    return newComers.reduce(function(result, newComer) {\n        return mergeRecursively(result, newComer, extensions);\n    }, base);\n}\nfunction concatArrays(originVal, newVal) {\n    if ((0,is_what__WEBPACK_IMPORTED_MODULE_0__.isArray)(originVal) && (0,is_what__WEBPACK_IMPORTED_MODULE_0__.isArray)(newVal)) {\n        // concat logic\n        return originVal.concat(newVal);\n    }\n    return newVal; // always return newVal as fallback!!\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (merge);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbWVyZ2UtYW55dGhpbmcvZGlzdC9pbmRleC5lc20uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUEyRDtBQUUzRDs7Ozs7Ozs7Ozs7Ozs4RUFhOEUsR0FFOUUsU0FBU0c7SUFDTCxJQUFLLElBQUlDLElBQUksR0FBR0MsSUFBSSxHQUFHQyxLQUFLQyxVQUFVQyxNQUFNLEVBQUVILElBQUlDLElBQUlELElBQUtELEtBQUtHLFNBQVMsQ0FBQ0YsRUFBRSxDQUFDRyxNQUFNO0lBQ25GLElBQUssSUFBSUMsSUFBSUMsTUFBTU4sSUFBSU8sSUFBSSxHQUFHTixJQUFJLEdBQUdBLElBQUlDLElBQUlELElBQ3pDLElBQUssSUFBSU8sSUFBSUwsU0FBUyxDQUFDRixFQUFFLEVBQUVRLElBQUksR0FBR0MsS0FBS0YsRUFBRUosTUFBTSxFQUFFSyxJQUFJQyxJQUFJRCxLQUFLRixJQUMxREYsQ0FBQyxDQUFDRSxFQUFFLEdBQUdDLENBQUMsQ0FBQ0MsRUFBRTtJQUNuQixPQUFPSjtBQUNYO0FBRUEsU0FBU00sV0FBV0MsS0FBSyxFQUFFQyxHQUFHLEVBQUVDLE1BQU0sRUFBRUMsY0FBYztJQUNsRCxJQUFJQyxXQUFXRCxlQUFlRSxvQkFBb0IsQ0FBQ0osT0FDN0MsZUFDQTtJQUNOLElBQUlHLGFBQWEsY0FDYkosS0FBSyxDQUFDQyxJQUFJLEdBQUdDO0lBQ2pCLElBQUlFLGFBQWEsaUJBQWlCO1FBQzlCRSxPQUFPQyxjQUFjLENBQUNQLE9BQU9DLEtBQUs7WUFDOUJPLE9BQU9OO1lBQ1BPLFlBQVk7WUFDWkMsVUFBVTtZQUNWQyxjQUFjO1FBQ2xCO0lBQ0o7QUFDSjtBQUNBLFNBQVNDLGlCQUFpQkMsTUFBTSxFQUFFQyxRQUFRLEVBQUVDLFVBQVU7SUFDbEQsaURBQWlEO0lBQ2pELElBQUksQ0FBQy9CLHNEQUFhQSxDQUFDOEIsV0FBVztRQUMxQixxQkFBcUI7UUFDckIsSUFBSUMsY0FBYzlCLGdEQUFPQSxDQUFDOEIsYUFBYTtZQUNuQ0Es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aW5nL2Rpc3QvaW5kZXguZXNtLmpzPzljNjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNQbGFpbk9iamVjdCwgaXNBcnJheSwgaXNTeW1ib2wgfSBmcm9tICdpcy13aGF0JztcblxuLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcclxudGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcclxuTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcblRISVMgQ09ERSBJUyBQUk9WSURFRCBPTiBBTiAqQVMgSVMqIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcclxuS0lORCwgRUlUSEVSIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIFdJVEhPVVQgTElNSVRBVElPTiBBTlkgSU1QTElFRFxyXG5XQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgVElUTEUsIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLFxyXG5NRVJDSEFOVEFCTElUWSBPUiBOT04tSU5GUklOR0VNRU5ULlxyXG5cclxuU2VlIHRoZSBBcGFjaGUgVmVyc2lvbiAyLjAgTGljZW5zZSBmb3Igc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zXHJcbmFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuXHJcbmZ1bmN0aW9uIF9fc3ByZWFkQXJyYXlzKCkge1xyXG4gICAgZm9yICh2YXIgcyA9IDAsIGkgPSAwLCBpbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBpbDsgaSsrKSBzICs9IGFyZ3VtZW50c1tpXS5sZW5ndGg7XHJcbiAgICBmb3IgKHZhciByID0gQXJyYXkocyksIGsgPSAwLCBpID0gMDsgaSA8IGlsOyBpKyspXHJcbiAgICAgICAgZm9yICh2YXIgYSA9IGFyZ3VtZW50c1tpXSwgaiA9IDAsIGpsID0gYS5sZW5ndGg7IGogPCBqbDsgaisrLCBrKyspXHJcbiAgICAgICAgICAgIHJba10gPSBhW2pdO1xyXG4gICAgcmV0dXJuIHI7XHJcbn1cblxuZnVuY3Rpb24gYXNzaWduUHJvcChjYXJyeSwga2V5LCBuZXdWYWwsIG9yaWdpbmFsT2JqZWN0KSB7XHJcbiAgICB2YXIgcHJvcFR5cGUgPSBvcmlnaW5hbE9iamVjdC5wcm9wZXJ0eUlzRW51bWVyYWJsZShrZXkpXHJcbiAgICAgICAgPyAnZW51bWVyYWJsZSdcclxuICAgICAgICA6ICdub25lbnVtZXJhYmxlJztcclxuICAgIGlmIChwcm9wVHlwZSA9PT0gJ2VudW1lcmFibGUnKVxyXG4gICAgICAgIGNhcnJ5W2tleV0gPSBuZXdWYWw7XHJcbiAgICBpZiAocHJvcFR5cGUgPT09ICdub25lbnVtZXJhYmxlJykge1xyXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjYXJyeSwga2V5LCB7XHJcbiAgICAgICAgICAgIHZhbHVlOiBuZXdWYWwsXHJcbiAgICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICB3cml0YWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gbWVyZ2VSZWN1cnNpdmVseShvcmlnaW4sIG5ld0NvbWVyLCBleHRlbnNpb25zKSB7XHJcbiAgICAvLyB3b3JrIGRpcmVjdGx5IG9uIG5ld0NvbWVyIGlmIGl0cyBub3QgYW4gb2JqZWN0XHJcbiAgICBpZiAoIWlzUGxhaW5PYmplY3QobmV3Q29tZXIpKSB7XHJcbiAgICAgICAgLy8gZXh0ZW5kIG1lcmdlIHJ1bGVzXHJcbiAgICAgICAgaWYgKGV4dGVuc2lvbnMgJiYgaXNBcnJheShleHRlbnNpb25zKSkge1xyXG4gICAgICAgICAgICBleHRlbnNpb25zLmZvckVhY2goZnVuY3Rpb24gKGV4dGVuZCkge1xyXG4gICAgICAgICAgICAgICAgbmV3Q29tZXIgPSBleHRlbmQob3JpZ2luLCBuZXdDb21lcik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3Q29tZXI7XHJcbiAgICB9XHJcbiAgICAvLyBkZWZpbmUgbmV3T2JqZWN0IHRvIG1lcmdlIGFsbCB2YWx1ZXMgdXBvblxyXG4gICAgdmFyIG5ld09iamVjdCA9IHt9O1xyXG4gICAgaWYgKGlzUGxhaW5PYmplY3Qob3JpZ2luKSkge1xyXG4gICAgICAgIHZhciBwcm9wc18xID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMob3JpZ2luKTtcclxuICAgICAgICB2YXIgc3ltYm9sc18xID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvcmlnaW4pO1xyXG4gICAgICAgIG5ld09iamVjdCA9IF9fc3ByZWFkQXJyYXlzKHByb3BzXzEsIHN5bWJvbHNfMSkucmVkdWNlKGZ1bmN0aW9uIChjYXJyeSwga2V5KSB7XHJcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICAgICAgdmFyIHRhcmdldFZhbCA9IG9yaWdpbltrZXldO1xyXG4gICAgICAgICAgICBpZiAoKCFpc1N5bWJvbChrZXkpICYmICFPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhuZXdDb21lcikuaW5jbHVkZXMoa2V5KSkgfHxcclxuICAgICAgICAgICAgICAgIChpc1N5bWJvbChrZXkpICYmICFPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG5ld0NvbWVyKS5pbmNsdWRlcyhrZXkpKSkge1xyXG4gICAgICAgICAgICAgICAgYXNzaWduUHJvcChjYXJyeSwga2V5LCB0YXJnZXRWYWwsIG9yaWdpbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGNhcnJ5O1xyXG4gICAgICAgIH0sIHt9KTtcclxuICAgIH1cclxuICAgIHZhciBwcm9wcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKG5ld0NvbWVyKTtcclxuICAgIHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhuZXdDb21lcik7XHJcbiAgICB2YXIgcmVzdWx0ID0gX19zcHJlYWRBcnJheXMocHJvcHMsIHN5bWJvbHMpLnJlZHVjZShmdW5jdGlvbiAoY2FycnksIGtleSkge1xyXG4gICAgICAgIC8vIHJlLWRlZmluZSB0aGUgb3JpZ2luIGFuZCBuZXdDb21lciBhcyB0YXJnZXRWYWwgYW5kIG5ld1ZhbFxyXG4gICAgICAgIHZhciBuZXdWYWwgPSBuZXdDb21lcltrZXldO1xyXG4gICAgICAgIHZhciB0YXJnZXRWYWwgPSAoaXNQbGFpbk9iamVjdChvcmlnaW4pKVxyXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgICAgID8gb3JpZ2luW2tleV1cclxuICAgICAgICAgICAgOiB1bmRlZmluZWQ7XHJcbiAgICAgICAgLy8gZXh0ZW5kIG1lcmdlIHJ1bGVzXHJcbiAgICAgICAgaWYgKGV4dGVuc2lvbnMgJiYgaXNBcnJheShleHRlbnNpb25zKSkge1xyXG4gICAgICAgICAgICBleHRlbnNpb25zLmZvckVhY2goZnVuY3Rpb24gKGV4dGVuZCkge1xyXG4gICAgICAgICAgICAgICAgbmV3VmFsID0gZXh0ZW5kKHRhcmdldFZhbCwgbmV3VmFsKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFdoZW4gbmV3VmFsIGlzIGFuIG9iamVjdCBkbyB0aGUgbWVyZ2UgcmVjdXJzaXZlbHlcclxuICAgICAgICBpZiAodGFyZ2V0VmFsICE9PSB1bmRlZmluZWQgJiYgaXNQbGFpbk9iamVjdChuZXdWYWwpKSB7XHJcbiAgICAgICAgICAgIG5ld1ZhbCA9IG1lcmdlUmVjdXJzaXZlbHkodGFyZ2V0VmFsLCBuZXdWYWwsIGV4dGVuc2lvbnMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhc3NpZ25Qcm9wKGNhcnJ5LCBrZXksIG5ld1ZhbCwgbmV3Q29tZXIpO1xyXG4gICAgICAgIHJldHVybiBjYXJyeTtcclxuICAgIH0sIG5ld09iamVjdCk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcbi8qKlxyXG4gKiBNZXJnZSBhbnl0aGluZyByZWN1cnNpdmVseS5cclxuICogT2JqZWN0cyBnZXQgbWVyZ2VkLCBzcGVjaWFsIG9iamVjdHMgKGNsYXNzZXMgZXRjLikgYXJlIHJlLWFzc2lnbmVkIFwiYXMgaXNcIi5cclxuICogQmFzaWMgdHlwZXMgb3ZlcndyaXRlIG9iamVjdHMgb3Igb3RoZXIgYmFzaWMgdHlwZXMuXHJcbiAqXHJcbiAqIEBwYXJhbSB7KElDb25maWcgfCBhbnkpfSBvcmlnaW5cclxuICogQHBhcmFtIHsuLi5hbnlbXX0gbmV3Q29tZXJzXHJcbiAqIEByZXR1cm5zIHRoZSByZXN1bHRcclxuICovXHJcbmZ1bmN0aW9uIG1lcmdlKG9yaWdpbikge1xyXG4gICAgdmFyIG5ld0NvbWVycyA9IFtdO1xyXG4gICAgZm9yICh2YXIgX2kgPSAxOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICBuZXdDb21lcnNbX2kgLSAxXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICB9XHJcbiAgICB2YXIgZXh0ZW5zaW9ucyA9IG51bGw7XHJcbiAgICB2YXIgYmFzZSA9IG9yaWdpbjtcclxuICAgIGlmIChpc1BsYWluT2JqZWN0KG9yaWdpbikgJiYgb3JpZ2luLmV4dGVuc2lvbnMgJiYgT2JqZWN0LmtleXMob3JpZ2luKS5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICBiYXNlID0ge307XHJcbiAgICAgICAgZXh0ZW5zaW9ucyA9IG9yaWdpbi5leHRlbnNpb25zO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5ld0NvbWVycy5yZWR1Y2UoZnVuY3Rpb24gKHJlc3VsdCwgbmV3Q29tZXIpIHtcclxuICAgICAgICByZXR1cm4gbWVyZ2VSZWN1cnNpdmVseShyZXN1bHQsIG5ld0NvbWVyLCBleHRlbnNpb25zKTtcclxuICAgIH0sIGJhc2UpO1xyXG59XG5cbmZ1bmN0aW9uIGNvbmNhdEFycmF5cyhvcmlnaW5WYWwsIG5ld1ZhbCkge1xyXG4gICAgaWYgKGlzQXJyYXkob3JpZ2luVmFsKSAmJiBpc0FycmF5KG5ld1ZhbCkpIHtcclxuICAgICAgICAvLyBjb25jYXQgbG9naWNcclxuICAgICAgICByZXR1cm4gb3JpZ2luVmFsLmNvbmNhdChuZXdWYWwpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5ld1ZhbDsgLy8gYWx3YXlzIHJldHVybiBuZXdWYWwgYXMgZmFsbGJhY2shIVxyXG59XG5cbmV4cG9ydCBkZWZhdWx0IG1lcmdlO1xuZXhwb3J0IHsgY29uY2F0QXJyYXlzLCBtZXJnZSB9O1xuIl0sIm5hbWVzIjpbImlzUGxhaW5PYmplY3QiLCJpc0FycmF5IiwiaXNTeW1ib2wiLCJfX3NwcmVhZEFycmF5cyIsInMiLCJpIiwiaWwiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJyIiwiQXJyYXkiLCJrIiwiYSIsImoiLCJqbCIsImFzc2lnblByb3AiLCJjYXJyeSIsImtleSIsIm5ld1ZhbCIsIm9yaWdpbmFsT2JqZWN0IiwicHJvcFR5cGUiLCJwcm9wZXJ0eUlzRW51bWVyYWJsZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJlbnVtZXJhYmxlIiwid3JpdGFibGUiLCJjb25maWd1cmFibGUiLCJtZXJnZVJlY3Vyc2l2ZWx5Iiwib3JpZ2luIiwibmV3Q29tZXIiLCJleHRlbnNpb25zIiwiZm9yRWFjaCIsImV4dGVuZCIsIm5ld09iamVjdCIsInByb3BzXzEiLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwic3ltYm9sc18xIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwicmVkdWNlIiwidGFyZ2V0VmFsIiwiaW5jbHVkZXMiLCJwcm9wcyIsInN5bWJvbHMiLCJyZXN1bHQiLCJ1bmRlZmluZWQiLCJtZXJnZSIsIm5ld0NvbWVycyIsIl9pIiwiYmFzZSIsImtleXMiLCJjb25jYXRBcnJheXMiLCJvcmlnaW5WYWwiLCJjb25jYXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/merge-anything/dist/index.esm.js\n");

/***/ })

};
;