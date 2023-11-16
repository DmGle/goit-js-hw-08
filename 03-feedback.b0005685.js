var e,t,n,i,r,o,a,u;e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},null==(i=e.parcelRequired7c6)&&((i=function(e){if(e in t)return t[e].exports;if(e in n){var i=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,i.call(r.exports,r,r.exports),r.exports}var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},e.parcelRequired7c6=i),(r=i.register)("dCfNN",function(t,n){/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 *//** Used as the `TypeError` message for "Functions" methods. */var r=i("6aBn7"),o="Expected a function",a=0/0,u=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,s=/^0o[0-7]+$/i,c=parseInt,d="object"==typeof e&&e&&e.Object===Object&&e,m="object"==typeof self&&self&&self.Object===Object&&self,v=d||m||Function("return this")(),p=Object.prototype.toString,g=Math.max,b=Math.min,y=function(){return v.Date.now()};/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */function O(e){var t=void 0===e?"undefined":(0,r._)(e);return!!e&&("object"==t||"function"==t)}/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */function x(e){if("number"==typeof e)return e;if((void 0===(t=e)?"undefined":(0,r._)(t))=="symbol"||t&&"object"==typeof t&&"[object Symbol]"==p.call(t))return a;if(O(e)){var t,n="function"==typeof e.valueOf?e.valueOf():e;e=O(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(u,"");var i=l.test(e);return i||s.test(e)?c(e.slice(2),i?2:8):f.test(e)?a:+e}t.exports=/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */function(e,t,n){var i=!0,r=!0;if("function"!=typeof e)throw TypeError(o);return O(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */function(e,t,n){var i,r,a,u,f,l,s=0,c=!1,d=!1,m=!0;if("function"!=typeof e)throw TypeError(o);function v(t){var n=i,o=r;return i=r=void 0,s=t,u=e.apply(o,n)}function p(e){var n=e-l,i=e-s;// Either this is the first call, activity has stopped and we're at the
// trailing edge, the system time has gone backwards and we're treating
// it as the trailing edge, or we've hit the `maxWait` limit.
return void 0===l||n>=t||n<0||d&&i>=a}function j(){var e,n,i,r=y();if(p(r))return h(r);// Restart the timer.
f=setTimeout(j,(e=r-l,n=r-s,i=t-e,d?b(i,a-n):i))}function h(e){return(// Only invoke if we have `lastArgs` which means `func` has been
// debounced at least once.
(f=void 0,m&&i)?v(e):(i=r=void 0,u))}function S(){var e,n=y(),o=p(n);if(i=arguments,r=this,l=n,o){if(void 0===f)return(// Reset any `maxWait` timer.
s=e=l,// Start the timer for the trailing edge.
f=setTimeout(j,t),c?v(e):u);if(d)return(// Handle invocations in a tight loop.
f=setTimeout(j,t),v(l))}return void 0===f&&(f=setTimeout(j,t)),u}return t=x(t)||0,O(n)&&(c=!!n.leading,a=(d="maxWait"in n)?g(x(n.maxWait)||0,t):a,m="trailing"in n?!!n.trailing:m),S.cancel=function(){void 0!==f&&clearTimeout(f),s=0,i=l=r=f=void 0},S.flush=function(){return void 0===f?u:h(y())},S}(e,t,{leading:i,maxWait:t,trailing:r})}}),r("6aBn7",function(e,t){function n(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e}Object.defineProperty(e.exports,"_",{get:function(){return n},set:void 0,enumerable:!0,configurable:!0})}),o=i("dCfNN"),a=document.querySelector(".feedback-form"),u="feedback-form-state",// Відстеження події input та збереження значень полів у локальне сховище
a.addEventListener("input",(o&&o.__esModule?o.default:o)(function(){var e={email:a.elements.email.value,message:a.elements.message.value};localStorage.setItem(u,JSON.stringify(e))},500)),// Заповнення полів форми зі збереженими значеннями під час завантаження сторінки
document.addEventListener("DOMContentLoaded",function(){var e=localStorage.getItem(u);if(e){var t=JSON.parse(e);a.elements.email.value=t.email,a.elements.message.value=t.message}}),// Очищення сховища та виведення даних форми під час сабміту
a.addEventListener("submit",function(e){e.preventDefault(),console.log("Form Data:",{email:a.elements.email.value,message:a.elements.message.value}),// Очистка сховища та полів форми
localStorage.removeItem(u),a.reset()});//# sourceMappingURL=03-feedback.b0005685.js.map

//# sourceMappingURL=03-feedback.b0005685.js.map
