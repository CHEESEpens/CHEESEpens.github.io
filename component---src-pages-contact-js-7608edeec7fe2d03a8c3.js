(self.webpackChunkcheesepens=self.webpackChunkcheesepens||[]).push([[501],{398:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(7294),a=n(5444),o="layout-module--header__module--1E49Q",l="layout-module--logo--C-Wen",c="layout-module--navLink--1y5rc",i=function(e){e.siteTitle,e.header;var t=e.boxShadow;return r.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light "+o+" ",style:{boxShadow:t?"3px 3px 3px lightgrey":""}},r.createElement("div",{className:"container"},r.createElement(a.Link,{className:"navbar-brand",to:"/"},r.createElement("img",{src:"/logo.png",className:"img-fluid "+l})),r.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.createElement("span",{className:"navbar-toggler-icon"})),r.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.createElement("ul",{className:"navbar-nav ms-auto mb-2 mb-lg-0"},r.createElement("li",{class:"nav-item dropdown"},r.createElement(a.Link,{className:"nav-link "+c,to:"/products"},"Products")),r.createElement("li",{className:"nav-item"},r.createElement(a.Link,{className:"nav-link "+c,to:"/superrainbow"},"Superrainbow")),r.createElement("li",{className:"nav-item"},r.createElement(a.Link,{className:"nav-link "+c,to:"/about"},"About")),r.createElement("li",{className:"nav-item"},r.createElement(a.Link,{className:"nav-link "+c,to:"/contact"},"Contact"))))))},u="footer-module--__footer__container--1rU3S",s="footer-module--__footer__parentCompany--aU3lZ",p="footer-module--__footer__span--uWsTQ",f="footer-module--__footer__logo--3dVa2",m=function(e){e.siteTitle,e.header;var t=e.marginTop,n=e.padding;return r.createElement("div",{className:u+" text-center",style:{marginTop:t||"350px",padding:n||"100px 0px"}},r.createElement("p",null,r.createElement("span",{className:s},"nikita writing instruments")),r.createElement("span",{className:p},"presents"),r.createElement("p",null,r.createElement("img",{src:"/logo.png",className:"img-fluid "+f})),r.createElement("p",{style:{fontSize:"23px"}},"© cheesepens.com ",(new Date).getFullYear()))},d=function(e){var t=e.children,n=e.boxShadow,a=e.marginTop,o=e.padding;return r.createElement("div",null,r.createElement(i,{boxShadow:n||!1}),t,r.createElement(m,{marginTop:a||!1,padding:o||!1}))}},5404:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return H}});var r=n(7294),a=n(398),o="contact-module--__contact__h3--2xFQs",l="contact-module--__contact__p--12nuj",c="contact-module--__contact__socialmedia--3Dnej",i="contact-module--__contact_details--24luM",u="contact-module--__contact__map--1p45D",s="contact-module--__contact__row--3RWu-",p="contact-module--__contact__social--2kP2s";function f(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=n(2961);function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o=[],l=!0,c=!1;try{for(n=n.call(e);!(l=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);l=!0);}catch(i){c=!0,a=i}finally{try{l||null==n.return||n.return()}finally{if(c)throw a}}return o}}(e,t)||(0,m.Z)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var v=(0,r.createContext)(null),b=v.Provider;function g(){var e=(0,r.useContext)(v);if(null==e)throw new Error("No context provided: useLeafletContext() can only be used in a descendant of <MapContainer>");return e}var y=n(7678),E=["children","className","id","placeholder","style","whenCreated"];function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function w(e){var t=e.children,n=e.className,a=e.id,o=e.placeholder,l=e.style,c=e.whenCreated,i=f(e,E),u=(0,r.useRef)(null),s=function(e,t){var n=d((0,r.useState)(null),2),a=n[0],o=n[1];return(0,r.useEffect)((function(){if(null!==e.current&&null===a){var n=new y.Map(e.current,t);null!=t.center&&null!=t.zoom?n.setView(t.center,t.zoom):null!=t.bounds&&n.fitBounds(t.bounds,t.boundsOptions),null!=t.whenReady&&n.whenReady(t.whenReady),o(n)}}),[e,a,t]),a}(u,i),p=(0,r.useRef)(!1);(0,r.useEffect)((function(){null!=s&&!1===p.current&&null!=c&&(p.current=!0,c(s))}),[s,c]);var m=d((0,r.useState)({className:n,id:a,style:l}),1)[0],v=(0,r.useMemo)((function(){return s?{__version:1,map:s}:null}),[s]),g=v?r.createElement(b,{value:v},t):null!=o?o:null;return r.createElement("div",h({},m,{ref:u}),g)}var O=n(3935);function _(e,t){return null==t?function(t,n){return(0,r.useRef)(e(t,n))}:function(n,a){var o=(0,r.useRef)(e(n,a)),l=(0,r.useRef)(n),c=o.current.instance;return(0,r.useEffect)((function(){l.current!==n&&(t(c,n,l.current),l.current=n)}),[c,n,a]),o}}function x(e,t){var n=(0,r.useRef)(t);(0,r.useEffect)((function(){t!==n.current&&null!=e.attributionControl&&(null!=n.current&&e.attributionControl.removeAttribution(n.current),null!=t&&e.attributionControl.addAttribution(t)),n.current=t}),[e,t])}function N(e,t){var n=(0,r.useRef)();(0,r.useEffect)((function(){return null!=t&&e.instance.on(t),n.current=t,function(){null!=n.current&&e.instance.off(n.current),n.current=null}}),[e,t])}var j=n(6156);function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach((function(t){(0,j.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function C(e,t){var n,r=null!==(n=e.pane)&&void 0!==n?n:t.pane;return r?S(S({},e),{},{pane:r}):e}function P(e){return function(t){var n=g(),a=e(C(t,n),n);return x(n.map,t.attribution),N(a.current,t.eventHandlers),function(e,t){(0,r.useEffect)((function(){var n;return(null!==(n=t.layerContainer)&&void 0!==n?n:t.map).addLayer(e.instance),function(){var n;null==(n=t.layersControl)||n.removeLayer(e.instance),t.map.removeLayer(e.instance)}}),[t,e])}(a.current,n),a}}var D=["url"],I=function(e){function t(t,n){var a=e(t).current.instance;return(0,r.useImperativeHandle)(n,(function(){return a})),null}return(0,r.forwardRef)(t)}(P(_((function(e,t){var n=e.url,r=f(e,D);return{instance:new y.TileLayer(n,C(r,t)),context:t}}),(function(e,t,n){var r=t.opacity,a=t.zIndex;null!=r&&r!==n.opacity&&e.setOpacity(r),null!=a&&a!==n.zIndex&&e.setZIndex(a)})))),L=["position"];function R(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?R(Object(n),!0).forEach((function(t){(0,j.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):R(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var T=function(e,t){return function(e){function t(t,n){var a=e(t).current,o=a.instance,l=a.context;return(0,r.useImperativeHandle)(n,(function(){return o})),null==t.children?null:r.createElement(b,{value:l},t.children)}return(0,r.forwardRef)(t)}(P(_(e,t)))}((function(e,t){var n=e.position,r=f(e,L),a=new y.Marker(n,r);return{instance:a,context:z(z({},t),{},{overlayContainer:a})}}),(function(e,t,n){t.position!==n.position&&e.setLatLng(t.position),null!=t.icon&&t.icon!==n.icon&&e.setIcon(t.icon),null!=t.zIndexOffset&&t.zIndexOffset!==n.zIndexOffset&&e.setZIndexOffset(t.zIndexOffset),null!=t.opacity&&t.opacity!==n.opacity&&e.setOpacity(t.opacity),null!=e.dragging&&t.draggable!==n.draggable&&(!0===t.draggable?e.dragging.enable():e.dragging.disable())})),Z=function(e,t){return function(e){function t(t,n){var a=d((0,r.useState)(!1),2),o=a[0],l=a[1],c=e(t,l).current.instance;(0,r.useImperativeHandle)(n,(function(){return c})),(0,r.useEffect)((function(){o&&c.update()}),[c,o,t.children]);var i=c._contentNode;return i?(0,O.createPortal)(t.children,i):null}return(0,r.forwardRef)(t)}(function(e,t){return function(n,r){var a=g(),o=e(C(n,a),a);return x(a.map,n.attribution),N(o.current,n.eventHandlers),t(o.current,a,n,r),o}}(_(e),t))}((function(e,t){return{instance:new y.Popup(e,t.overlayContainer),context:t}}),(function(e,t,n,a){var o=n.onClose,l=n.onOpen,c=n.position;(0,r.useEffect)((function(){var n=e.instance;function r(e){e.popup===n&&(n.update(),a(!0),null==l||l())}function i(e){e.popup===n&&(a(!1),null==o||o())}return t.map.on({popupopen:r,popupclose:i}),null==t.overlayContainer?(null!=c&&n.setLatLng(c),n.openOn(t.map)):t.overlayContainer.bindPopup(n),function(){t.map.off({popupopen:r,popupclose:i}),t.map.removeLayer(n)}}),[e,t,a,o,l,c])})),H=function(){var e=(0,r.useState)(null),t=e[0],n=e[1];return(0,r.useEffect)((function(){"undefined"!=typeof window&&n(!0)}),[]),r.createElement(r.Fragment,null,r.createElement(a.Z,{marginTop:"150px"},r.createElement("div",{className:"container"},r.createElement("div",{className:"text-center"},r.createElement("h3",{className:""+o},"Contact Us")),r.createElement("p",{className:"text-center "+l+" "},"If you think we can help you or you want to say just hi!"),r.createElement("div",{class:"row "+s},r.createElement("div",{class:"col-lg-6 col=md-6 col-xl-12"},r.createElement("div",null,t&&w&&r.createElement(w,{center:[20.3205694,72.9687646],zoom:10,className:""+u,scrollWheelZoom:!1},r.createElement(I,{attribution:'© <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),r.createElement(T,{position:[20.3205694,72.9687646]},r.createElement(Z,null,"Shreeji Industrial Estate, Gala No.9, Demni Rd, Dadra, Dadra and Nagar Haveli and Daman and Diu 396193"))))),r.createElement("div",{class:"col-lg-6 col=md-6 col-xl-12 text-center"},r.createElement("div",{className:""+i},r.createElement("p",{className:l},r.createElement("address",null," ",r.createElement("i",{class:"bi bi-geo-alt-fill"})," Shreeji Industrial Estate, Gala No.9, Demni Rd, Dadra, Dadra and Nagar Haveli and Daman and Diu 396193")),r.createElement("p",{className:l},r.createElement("i",{class:"bi bi-envelope-fill"}),r.createElement("a",{href:"mailto:nikitawriting2017@gmail.com"}," nikitawriting2017@gmail.com ")),r.createElement("p",{className:l},r.createElement("i",{class:"bi bi-telephone-fill"})," ",r.createElement("a",{href:"tel:74879 84066"},"74879 84066")," | ",r.createElement("a",{href:"tel:87990 51145"},"87990 51145")," "),r.createElement("p",{className:""+c},r.createElement("a",{href:"https://www.instagram.com/cheese_pens/",target:"__blank"},r.createElement("i",{class:"bi bi-instagram "+p})),r.createElement("a",{href:"https://www.facebook.com/cheesepens/",target:"__blank"},r.createElement("i",{class:"bi bi-facebook "+p})),r.createElement("a",{href:"https://twitter.com/cheesepens",target:"__blank"},r.createElement("i",{class:"bi bi-twitter "+p})))))))))}}}]);
//# sourceMappingURL=component---src-pages-contact-js-7608edeec7fe2d03a8c3.js.map