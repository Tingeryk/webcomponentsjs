(function(){'use strict';var aa=new Set("annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" "));function g(b){var a=aa.has(b);b=/^[a-z][.0-9_a-z]*-[\-.0-9_a-z]*$/.test(b);return!a&&b}function n(b){var a=b.isConnected;if(void 0!==a)return a;for(;b&&!(b.__CE_isImportDocument||b instanceof Document);)b=b.parentNode||(window.ShadowRoot&&b instanceof ShadowRoot?b.host:void 0);return!(!b||!(b.__CE_isImportDocument||b instanceof Document))}
function p(b,a){for(;a&&a!==b&&!a.nextSibling;)a=a.parentNode;return a&&a!==b?a.nextSibling:null}
function q(b,a,c){c=void 0===c?new Set:c;for(var d=b;d;){if(d.nodeType===Node.ELEMENT_NODE){var e=d;a(e);var f=e.localName;if("link"===f&&"import"===e.getAttribute("rel")){d=e.import;if(d instanceof Node&&!c.has(d))for(c.add(d),d=d.firstChild;d;d=d.nextSibling)q(d,a,c);d=p(b,e);continue}else if("template"===f){d=p(b,e);continue}if(e=e.__CE_shadowRoot)for(e=e.firstChild;e;e=e.nextSibling)q(e,a,c)}d=d.firstChild?d.firstChild:p(b,d)}}function t(b,a,c){b[a]=c};function u(){this.a=new Map;this.o=new Map;this.f=[];this.b=!1}function ba(b,a,c){b.a.set(a,c);b.o.set(c.constructor,c)}function v(b,a){b.b=!0;b.f.push(a)}function w(b,a){b.b&&q(a,function(a){return x(b,a)})}function x(b,a){if(b.b&&!a.__CE_patched){a.__CE_patched=!0;for(var c=0;c<b.f.length;c++)b.f[c](a)}}function y(b,a){var c=[];q(a,function(b){return c.push(b)});for(a=0;a<c.length;a++){var d=c[a];1===d.__CE_state?b.connectedCallback(d):z(b,d)}}
function A(b,a){var c=[];q(a,function(b){return c.push(b)});for(a=0;a<c.length;a++){var d=c[a];1===d.__CE_state&&b.disconnectedCallback(d)}}
function B(b,a,c){c=void 0===c?{}:c;var d=c.v||new Set,e=c.s||function(a){return z(b,a)},f=[];q(a,function(a){if("link"===a.localName&&"import"===a.getAttribute("rel")){var c=a.import;c instanceof Node&&(c.__CE_isImportDocument=!0,c.__CE_hasRegistry=!0);c&&"complete"===c.readyState?c.__CE_documentLoadHandled=!0:a.addEventListener("load",function(){var c=a.import;if(!c.__CE_documentLoadHandled){c.__CE_documentLoadHandled=!0;var f=new Set(d);f.delete(c);B(b,c,{v:f,s:e})}})}else f.push(a)},d);if(b.b)for(a=
0;a<f.length;a++)x(b,f[a]);for(a=0;a<f.length;a++)e(f[a])}
function z(b,a){if(void 0===a.__CE_state){var c=a.ownerDocument;if(c.defaultView||c.__CE_isImportDocument&&c.__CE_hasRegistry)if(c=b.a.get(a.localName)){c.constructionStack.push(a);var d=c.constructor;try{try{if(new d!==a)throw Error("The custom element constructor did not produce the element being upgraded.");}finally{c.constructionStack.pop()}}catch(m){throw a.__CE_state=2,m;}a.__CE_state=1;a.__CE_definition=c;if(c.attributeChangedCallback)for(c=c.observedAttributes,d=0;d<c.length;d++){var e=c[d],
f=a.getAttribute(e);null!==f&&b.attributeChangedCallback(a,e,null,f,null)}n(a)&&b.connectedCallback(a)}}}u.prototype.connectedCallback=function(b){var a=b.__CE_definition;a.connectedCallback&&a.connectedCallback.call(b)};u.prototype.disconnectedCallback=function(b){var a=b.__CE_definition;a.disconnectedCallback&&a.disconnectedCallback.call(b)};
u.prototype.attributeChangedCallback=function(b,a,c,d,e){var f=b.__CE_definition;f.attributeChangedCallback&&-1<f.observedAttributes.indexOf(a)&&f.attributeChangedCallback.call(b,a,c,d,e)};function C(b){var a=document;this.c=b;this.a=a;this.b=void 0;B(this.c,this.a);"loading"===this.a.readyState&&(this.b=new MutationObserver(this.f.bind(this)),this.b.observe(this.a,{childList:!0,subtree:!0}))}function D(b){b.b&&b.b.disconnect()}C.prototype.f=function(b){var a=this.a.readyState;"interactive"!==a&&"complete"!==a||D(this);for(a=0;a<b.length;a++)for(var c=b[a].addedNodes,d=0;d<c.length;d++)B(this.c,c[d])};function ca(){var b=this;this.b=this.a=void 0;this.f=new Promise(function(a){b.b=a;b.a&&a(b.a)})}function E(b){if(b.a)throw Error("Already resolved.");b.a=void 0;b.b&&b.b(void 0)};function F(b){this.i=!1;this.c=b;this.m=new Map;this.j=function(b){return b()};this.g=!1;this.l=[];this.u=new C(b)}
F.prototype.a=function(b,a){var c=this;if(!(a instanceof Function))throw new TypeError("Custom element constructors must be functions.");if(!g(b))throw new SyntaxError("The element name '"+b+"' is not valid.");if(this.c.a.get(b))throw Error("A custom element with name '"+b+"' has already been defined.");if(this.i)throw Error("A custom element is already being defined.");this.i=!0;try{var d=function(b){var a=e[b];if(void 0!==a&&!(a instanceof Function))throw Error("The '"+b+"' callback must be a function.");
return a},e=a.prototype;if(!(e instanceof Object))throw new TypeError("The custom element constructor's prototype is not an object.");var f=d("connectedCallback");var m=d("disconnectedCallback");var l=d("adoptedCallback");var h=d("attributeChangedCallback");var k=a.observedAttributes||[]}catch(r){return}finally{this.i=!1}a={localName:b,constructor:a,connectedCallback:f,disconnectedCallback:m,adoptedCallback:l,attributeChangedCallback:h,observedAttributes:k,constructionStack:[]};ba(this.c,b,a);this.l.push(a);
this.g||(this.g=!0,this.j(function(){return da(c)}))};function da(b){if(!1!==b.g){b.g=!1;for(var a=b.l,c=[],d=new Map,e=0;e<a.length;e++)d.set(a[e].localName,[]);B(b.c,document,{s:function(a){if(void 0===a.__CE_state){var e=a.localName,f=d.get(e);f?f.push(a):b.c.a.get(e)&&c.push(a)}}});for(e=0;e<c.length;e++)z(b.c,c[e]);for(;0<a.length;){var f=a.shift();e=f.localName;f=d.get(f.localName);for(var m=0;m<f.length;m++)z(b.c,f[m]);(e=b.m.get(e))&&E(e)}}}F.prototype.get=function(b){if(b=this.c.a.get(b))return b.constructor};
F.prototype.b=function(b){if(!g(b))return Promise.reject(new SyntaxError("'"+b+"' is not a valid custom element name."));var a=this.m.get(b);if(a)return a.f;a=new ca;this.m.set(b,a);this.c.a.get(b)&&!this.l.some(function(a){return a.localName===b})&&E(a);return a.f};F.prototype.f=function(b){D(this.u);var a=this.j;this.j=function(c){return b(function(){return a(c)})}};window.CustomElementRegistry=F;F.prototype.define=F.prototype.a;F.prototype.get=F.prototype.get;F.prototype.whenDefined=F.prototype.b;
F.prototype.polyfillWrapFlushCallback=F.prototype.f;var G=window.Document.prototype.createElement,ea=window.Document.prototype.createElementNS,fa=window.Document.prototype.importNode,ha=window.Document.prototype.prepend,ia=window.Document.prototype.append,ja=window.DocumentFragment.prototype.prepend,ka=window.DocumentFragment.prototype.append,H=window.Node.prototype.cloneNode,I=window.Node.prototype.appendChild,J=window.Node.prototype.insertBefore,K=window.Node.prototype.removeChild,L=window.Node.prototype.replaceChild,M=Object.getOwnPropertyDescriptor(window.Node.prototype,
"textContent"),N=window.Element.prototype.attachShadow,O=Object.getOwnPropertyDescriptor(window.Element.prototype,"innerHTML"),P=window.Element.prototype.getAttribute,Q=window.Element.prototype.setAttribute,R=window.Element.prototype.removeAttribute,S=window.Element.prototype.getAttributeNS,T=window.Element.prototype.setAttributeNS,la=window.Element.prototype.removeAttributeNS,ma=window.Element.prototype.insertAdjacentElement,na=window.Element.prototype.prepend,oa=window.Element.prototype.append,
U=window.Element.prototype.before,pa=window.Element.prototype.after,qa=window.Element.prototype.replaceWith,ra=window.Element.prototype.remove,sa=window.HTMLElement,V=Object.getOwnPropertyDescriptor(window.HTMLElement.prototype,"innerHTML"),ta=window.HTMLElement.prototype.insertAdjacentElement;var ua=new function(){};function va(){var b=W;window.HTMLElement=function(){function a(){var a=this.constructor,d=b.o.get(a);if(!d)throw Error("The custom element being constructed was not registered with `customElements`.");var e=d.constructionStack;if(0===e.length)return e=G.call(document,d.localName),Object.setPrototypeOf(e,a.prototype),e.__CE_state=1,e.__CE_definition=d,x(b,e),e;d=e.length-1;var f=e[d];if(f===ua)throw Error("The HTMLElement constructor was either called reentrantly for this constructor or called multiple times.");
e[d]=ua;Object.setPrototypeOf(f,a.prototype);x(b,f);return f}a.prototype=sa.prototype;return a}()};function X(b,a,c){function d(a){return function(d){for(var c=[],e=0;e<arguments.length;++e)c[e-0]=arguments[e];e=[];for(var f=[],k=0;k<c.length;k++){var r=c[k];r instanceof Element&&n(r)&&f.push(r);if(r instanceof DocumentFragment)for(r=r.firstChild;r;r=r.nextSibling)e.push(r);else e.push(r)}a.apply(this,c);for(c=0;c<f.length;c++)A(b,f[c]);if(n(this))for(c=0;c<e.length;c++)f=e[c],f instanceof Element&&y(b,f)}}void 0!==c.h&&(a.prepend=d(c.h));void 0!==c.append&&(a.append=d(c.append))};function wa(){var b=W;t(Document.prototype,"createElement",function(a){if(this.__CE_hasRegistry){var c=b.a.get(a);if(c)return new c.constructor}a=G.call(this,a);x(b,a);return a});t(Document.prototype,"importNode",function(a,c){a=fa.call(this,a,c);this.__CE_hasRegistry?B(b,a):w(b,a);return a});t(Document.prototype,"createElementNS",function(a,c){if(this.__CE_hasRegistry&&(null===a||"http://www.w3.org/1999/xhtml"===a)){var d=b.a.get(c);if(d)return new d.constructor}a=ea.call(this,a,c);x(b,a);return a});
X(b,Document.prototype,{h:ha,append:ia})};function xa(){var b=W;function a(a,d){Object.defineProperty(a,"textContent",{enumerable:d.enumerable,configurable:!0,get:d.get,set:function(a){if(this.nodeType===Node.TEXT_NODE)d.set.call(this,a);else{var c=void 0;if(this.firstChild){var e=this.childNodes,l=e.length;if(0<l&&n(this)){c=Array(l);for(var h=0;h<l;h++)c[h]=e[h]}}d.set.call(this,a);if(c)for(a=0;a<c.length;a++)A(b,c[a])}}})}t(Node.prototype,"insertBefore",function(a,d){if(a instanceof DocumentFragment){var c=Array.prototype.slice.apply(a.childNodes);
a=J.call(this,a,d);if(n(this))for(d=0;d<c.length;d++)y(b,c[d]);return a}c=n(a);d=J.call(this,a,d);c&&A(b,a);n(this)&&y(b,a);return d});t(Node.prototype,"appendChild",function(a){if(a instanceof DocumentFragment){var d=Array.prototype.slice.apply(a.childNodes);a=I.call(this,a);if(n(this))for(var c=0;c<d.length;c++)y(b,d[c]);return a}d=n(a);c=I.call(this,a);d&&A(b,a);n(this)&&y(b,a);return c});t(Node.prototype,"cloneNode",function(a){a=H.call(this,a);this.ownerDocument.__CE_hasRegistry?B(b,a):w(b,a);
return a});t(Node.prototype,"removeChild",function(a){var d=n(a),c=K.call(this,a);d&&A(b,a);return c});t(Node.prototype,"replaceChild",function(a,d){if(a instanceof DocumentFragment){var c=Array.prototype.slice.apply(a.childNodes);a=L.call(this,a,d);if(n(this))for(A(b,d),d=0;d<c.length;d++)y(b,c[d]);return a}c=n(a);var f=L.call(this,a,d),m=n(this);m&&A(b,d);c&&A(b,a);m&&y(b,a);return f});M&&M.get?a(Node.prototype,M):v(b,function(b){a(b,{enumerable:!0,configurable:!0,get:function(){for(var a=[],b=
0;b<this.childNodes.length;b++)a.push(this.childNodes[b].textContent);return a.join("")},set:function(a){for(;this.firstChild;)K.call(this,this.firstChild);I.call(this,document.createTextNode(a))}})})};function ya(b){var a=Element.prototype;function c(a){return function(d){for(var c=[],e=0;e<arguments.length;++e)c[e-0]=arguments[e];e=[];for(var l=[],h=0;h<c.length;h++){var k=c[h];k instanceof Element&&n(k)&&l.push(k);if(k instanceof DocumentFragment)for(k=k.firstChild;k;k=k.nextSibling)e.push(k);else e.push(k)}a.apply(this,c);for(c=0;c<l.length;c++)A(b,l[c]);if(n(this))for(c=0;c<e.length;c++)l=e[c],l instanceof Element&&y(b,l)}}void 0!==U&&(a.before=c(U));void 0!==U&&(a.after=c(pa));void 0!==qa&&
t(a,"replaceWith",function(a){for(var c=[],d=0;d<arguments.length;++d)c[d-0]=arguments[d];d=[];for(var m=[],l=0;l<c.length;l++){var h=c[l];h instanceof Element&&n(h)&&m.push(h);if(h instanceof DocumentFragment)for(h=h.firstChild;h;h=h.nextSibling)d.push(h);else d.push(h)}l=n(this);qa.apply(this,c);for(c=0;c<m.length;c++)A(b,m[c]);if(l)for(A(b,this),c=0;c<d.length;c++)m=d[c],m instanceof Element&&y(b,m)});void 0!==ra&&t(a,"remove",function(){var a=n(this);ra.call(this);a&&A(b,this)})};function za(){var b=W;function a(a,c){Object.defineProperty(a,"innerHTML",{enumerable:c.enumerable,configurable:!0,get:c.get,set:function(a){var d=this,e=void 0;n(this)&&(e=[],q(this,function(a){a!==d&&e.push(a)}));c.set.call(this,a);if(e)for(var f=0;f<e.length;f++){var k=e[f];1===k.__CE_state&&b.disconnectedCallback(k)}this.ownerDocument.__CE_hasRegistry?B(b,this):w(b,this);return a}})}function c(a,c){t(a,"insertAdjacentElement",function(a,d){var e=n(d);a=c.call(this,a,d);e&&A(b,d);n(a)&&y(b,d);
return a})}N&&t(Element.prototype,"attachShadow",function(a){return this.__CE_shadowRoot=a=N.call(this,a)});O&&O.get?a(Element.prototype,O):V&&V.get?a(HTMLElement.prototype,V):v(b,function(b){a(b,{enumerable:!0,configurable:!0,get:function(){return H.call(this,!0).innerHTML},set:function(a){var b="template"===this.localName,c=b?this.content:this,d=G.call(document,this.localName);for(d.innerHTML=a;0<c.childNodes.length;)K.call(c,c.childNodes[0]);for(a=b?d.content:d;0<a.childNodes.length;)I.call(c,
a.childNodes[0])}})});t(Element.prototype,"setAttribute",function(a,c){if(1!==this.__CE_state)return Q.call(this,a,c);var d=P.call(this,a);Q.call(this,a,c);c=P.call(this,a);b.attributeChangedCallback(this,a,d,c,null)});t(Element.prototype,"setAttributeNS",function(a,c,f){if(1!==this.__CE_state)return T.call(this,a,c,f);var d=S.call(this,a,c);T.call(this,a,c,f);f=S.call(this,a,c);b.attributeChangedCallback(this,c,d,f,a)});t(Element.prototype,"removeAttribute",function(a){if(1!==this.__CE_state)return R.call(this,
a);var c=P.call(this,a);R.call(this,a);null!==c&&b.attributeChangedCallback(this,a,c,null,null)});t(Element.prototype,"removeAttributeNS",function(a,c){if(1!==this.__CE_state)return la.call(this,a,c);var d=S.call(this,a,c);la.call(this,a,c);var e=S.call(this,a,c);d!==e&&b.attributeChangedCallback(this,c,d,e,a)});ta?c(HTMLElement.prototype,ta):ma?c(Element.prototype,ma):console.warn("Custom Elements: `Element#insertAdjacentElement` was not patched.");X(b,Element.prototype,{h:na,append:oa});ya(b)};/*

 Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 Code distributed by Google as part of the polymer project is also
 subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
var Y=window.customElements;if(!Y||Y.forcePolyfill||"function"!=typeof Y.define||"function"!=typeof Y.get){var W=new u;va();wa();X(W,DocumentFragment.prototype,{h:ja,append:ka});xa();za();document.__CE_hasRegistry=!0;var customElements=new F(W);Object.defineProperty(window,"customElements",{configurable:!0,enumerable:!0,value:customElements})};/*

 Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
 This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 Code distributed by Google as part of the polymer project is also
 subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
var Z=window.document;window.WebComponents=window.WebComponents||{};function Aa(){requestAnimationFrame(function(){window.WebComponents.ready=!0;window.document.dispatchEvent(new CustomEvent("WebComponentsReady",{bubbles:!0}))})}function Ba(){Aa();Z.removeEventListener("readystatechange",Ba)}"loading"!==Z.readyState?Aa():Z.addEventListener("readystatechange",Ba);/*

Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
}).call(this);

//# sourceMappingURL=webcomponents-ce.js.map
