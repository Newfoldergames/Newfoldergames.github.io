/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + chunkId + ".bootstrap.js"
/******/ 	}
/******/
/******/ 	// object to store loaded and loading wasm modules
/******/ 	var installedWasmModules = {};
/******/
/******/ 	function promiseResolve() { return Promise.resolve(); }
/******/
/******/ 	var wasmImportObjects = {
/******/ 		"../pkg/lights_out_bg.wasm": function() {
/******/ 			return {
/******/ 				"./lights_out_bg.js": {
/******/ 					"__wbindgen_object_drop_ref": function(p0i32) {
/******/ 						return installedModules["../pkg/lights_out_bg.js"].exports["__wbindgen_object_drop_ref"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_object_clone_ref": function(p0i32) {
/******/ 						return installedModules["../pkg/lights_out_bg.js"].exports["__wbindgen_object_clone_ref"](p0i32);
/******/ 					},
/******/ 					"__wbg_new_59cb74e423758ede": function() {
/******/ 						return installedModules["../pkg/lights_out_bg.js"].exports["__wbg_new_59cb74e423758ede"]();
/******/ 					},
/******/ 					"__wbg_stack_558ba5917b466edd": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/lights_out_bg.js"].exports["__wbg_stack_558ba5917b466edd"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_error_4bb6c2a97407129a": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/lights_out_bg.js"].exports["__wbg_error_4bb6c2a97407129a"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_instanceof_Window_11e25482011fc506": function(p0i32) {
/******/ 						return installedModules["../pkg/lights_out_bg.js"].exports["__wbg_instanceof_Window_11e25482011fc506"](p0i32);
/******/ 					},
/******/ 					"__wbg_document_5aff8cd83ef968f5": function(p0i32) {
/******/ 						return installedModules["../pkg/lights_out_bg.js"].exports["__wbg_document_5aff8cd83ef968f5"](p0i32);
/******/ 					},
/******/ 					"__wbg_localStorage_b787eb9a4418c2b1": function(p0i32) {
/******/ 						return installedModules["../pkg/lights_out_bg.js"].exports["__wbg_localStorage_b787eb9a4418c2b1"](p0i32);
/******/ 					},
/******/ 					"__wbg_atob_538ba8a4f988466a": function(p0i32,p1i32,p2i32,p3i32) {
/******/ 						return installedModules["../pkg/lights_out_bg.js"].exports["__wbg_atob_538ba8a4f988466a"](p0i32,p1i32,p2i32,p3i32);
/******/ 					},
/******/ 					"__wbg_btoa_4ca2c6408d4af109": function(p0i32,p1i32,p2i32,p3i32) {
/******/ 						return installedModules["../pkg/lights_out_bg.js"].exports["__wbg_btoa_4ca2c6408d4af109"](p0i32,p1i32,p2i32,p3i32);
/******/ 					},
/******/ 					"__wbg_createElement_ac65a6ce60c4812c": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/lights_out_bg.js"].exports["__wbg_createElement_ac65a6ce60c4812c"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_getElementById_b180ea4ada06a837": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/lights_out_bg.js"].exports["__wbg_getElementById_b180ea4ada06a837"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_setclassName_09e9074a6eb1e2cb": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/lights_out_bg.js"].exports["__wbg_setclassName_09e9074a6eb1e2cb"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_classList_bbb57a7d3cc23c85": function(p0i32) {
/******/ 						return installedModules["../pkg/lights_out_bg.js"].exports["__wbg_classList_bbb57a7d3cc23c85"](p0i32);
/******/ 					},
/******/ 					"__wbg_setinnerHTML_bd5b74e3148c235e": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/lights_out_bg.js"].exports["__wbg_setinnerHTML_bd5b74e3148c235e"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_lastElementChild_c1da6bc4d3733388": function(p0i32) {
/******/ 						return installedModules["../pkg/lights_out_bg.js"].exports["__wbg_lastElementChild_c1da6bc4d3733388"](p0i32);
/******/ 					},
/******/ 					"__wbg_childElementCount_4bbbf24d3dda5ff4": function(p0i32) {
/******/ 						return installedModules["../pkg/lights_out_bg.js"].exports["__wbg_childElementCount_4bbbf24d3dda5ff4"](p0i32);
/******/ 					},
/******/ 					"__wbg_setAttribute_27ca65e30a1c3c4a": function(p0i32,p1i32,p2i32,p3i32,p4i32) {
/******/ 						return installedModules["../pkg/lights_out_bg.js"].exports["__wbg_setAttribute_27ca65e30a1c3c4a"](p0i32,p1i32,p2i32,p3i32,p4i32);
/******/ 					},
/******/ 					"__wbg_remove_5cd9814fbc0988da": function(p0i32) {
/******/ 						return installedModules["../pkg/lights_out_bg.js"].exports["__wbg_remove_5cd9814fbc0988da"](p0i32);
/******/ 					},
/******/ 					"__wbg_append_cacbb068cbd5ff1f": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/lights_out_bg.js"].exports["__wbg_append_cacbb068cbd5ff1f"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_prepend_58048c0095e73010": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/lights_out_bg.js"].exports["__wbg_prepend_58048c0095e73010"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_instanceof_HtmlElement_835072e813858ac0": function(p0i32) {
/******/ 						return installedModules["../pkg/lights_out_bg.js"].exports["__wbg_instanceof_HtmlElement_835072e813858ac0"](p0i32);
/******/ 					},
/******/ 					"__wbg_setonclick_020a4ab155fe4406": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/lights_out_bg.js"].exports["__wbg_setonclick_020a4ab155fe4406"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_add_3b4cecc512643e9f": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/lights_out_bg.js"].exports["__wbg_add_3b4cecc512643e9f"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_contains_c5b36ec90d80e696": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/lights_out_bg.js"].exports["__wbg_contains_c5b36ec90d80e696"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_remove_c15603553c81dc31": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/lights_out_bg.js"].exports["__wbg_remove_c15603553c81dc31"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_toggle_c38a545c99cf708d": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/lights_out_bg.js"].exports["__wbg_toggle_c38a545c99cf708d"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_getItem_1c87352132d0b415": function(p0i32,p1i32,p2i32,p3i32) {
/******/ 						return installedModules["../pkg/lights_out_bg.js"].exports["__wbg_getItem_1c87352132d0b415"](p0i32,p1i32,p2i32,p3i32);
/******/ 					},
/******/ 					"__wbg_setItem_103b1e46491c9b0e": function(p0i32,p1i32,p2i32,p3i32,p4i32) {
/******/ 						return installedModules["../pkg/lights_out_bg.js"].exports["__wbg_setItem_103b1e46491c9b0e"](p0i32,p1i32,p2i32,p3i32,p4i32);
/******/ 					},
/******/ 					"__wbg_call_ba36642bd901572b": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/lights_out_bg.js"].exports["__wbg_call_ba36642bd901572b"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_newnoargs_9fdd8f3961dd1bee": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/lights_out_bg.js"].exports["__wbg_newnoargs_9fdd8f3961dd1bee"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_self_bb69a836a72ec6e9": function() {
/******/ 						return installedModules["../pkg/lights_out_bg.js"].exports["__wbg_self_bb69a836a72ec6e9"]();
/******/ 					},
/******/ 					"__wbg_window_3304fc4b414c9693": function() {
/******/ 						return installedModules["../pkg/lights_out_bg.js"].exports["__wbg_window_3304fc4b414c9693"]();
/******/ 					},
/******/ 					"__wbg_globalThis_e0d21cabc6630763": function() {
/******/ 						return installedModules["../pkg/lights_out_bg.js"].exports["__wbg_globalThis_e0d21cabc6630763"]();
/******/ 					},
/******/ 					"__wbg_global_8463719227271676": function() {
/******/ 						return installedModules["../pkg/lights_out_bg.js"].exports["__wbg_global_8463719227271676"]();
/******/ 					},
/******/ 					"__wbindgen_is_undefined": function(p0i32) {
/******/ 						return installedModules["../pkg/lights_out_bg.js"].exports["__wbindgen_is_undefined"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_debug_string": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/lights_out_bg.js"].exports["__wbindgen_debug_string"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_throw": function(p0i32,p1i32) {
/******/ 						return installedModules["../pkg/lights_out_bg.js"].exports["__wbindgen_throw"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_closure_wrapper319": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../pkg/lights_out_bg.js"].exports["__wbindgen_closure_wrapper319"](p0i32,p1i32,p2i32);
/******/ 					}
/******/ 				}
/******/ 			};
/******/ 		},
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/
/******/ 		// Fetch + compile chunk loading for webassembly
/******/
/******/ 		var wasmModules = {"0":["../pkg/lights_out_bg.wasm"]}[chunkId] || [];
/******/
/******/ 		wasmModules.forEach(function(wasmModuleId) {
/******/ 			var installedWasmModuleData = installedWasmModules[wasmModuleId];
/******/
/******/ 			// a Promise means "currently loading" or "already loaded".
/******/ 			if(installedWasmModuleData)
/******/ 				promises.push(installedWasmModuleData);
/******/ 			else {
/******/ 				var importObject = wasmImportObjects[wasmModuleId]();
/******/ 				var req = fetch(__webpack_require__.p + "" + {"../pkg/lights_out_bg.wasm":"c449e5623dd58889bd55"}[wasmModuleId] + ".module.wasm");
/******/ 				var promise;
/******/ 				if(importObject instanceof Promise && typeof WebAssembly.compileStreaming === 'function') {
/******/ 					promise = Promise.all([WebAssembly.compileStreaming(req), importObject]).then(function(items) {
/******/ 						return WebAssembly.instantiate(items[0], items[1]);
/******/ 					});
/******/ 				} else if(typeof WebAssembly.instantiateStreaming === 'function') {
/******/ 					promise = WebAssembly.instantiateStreaming(req, importObject);
/******/ 				} else {
/******/ 					var bytesPromise = req.then(function(x) { return x.arrayBuffer(); });
/******/ 					promise = bytesPromise.then(function(bytes) {
/******/ 						return WebAssembly.instantiate(bytes, importObject);
/******/ 					});
/******/ 				}
/******/ 				promises.push(installedWasmModules[wasmModuleId] = promise.then(function(res) {
/******/ 					return __webpack_require__.w[wasmModuleId] = (res.instance || res).exports;
/******/ 				}));
/******/ 			}
/******/ 		});
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	// object with all WebAssembly.instance exports
/******/ 	__webpack_require__.w = {};
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./bootstrap.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./bootstrap.js":
/*!**********************!*\
  !*** ./bootstrap.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// A dependency graph that contains any wasm must all be imported\n// asynchronously. This `bootstrap.js` file does the single async import, so\n// that no one else needs to worry about it again.\n__webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./index.js */ \"./index.js\"))\n  .catch(e => console.error(\"Error importing `index.js`:\", e));\n\n\n//# sourceURL=webpack:///./bootstrap.js?");

/***/ })

/******/ });