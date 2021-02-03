(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{16:function(e,t,c){},18:function(e,t,c){},19:function(e,t,c){},20:function(e,t,c){},21:function(e,t,c){},22:function(e,t,c){},45:function(e,t,c){},46:function(e,t,c){},47:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c(0),o=c.n(r),a=c(4),s=c.n(a),i=(c(16),c(3)),u=c(7);c(17),c(18),c(19);function l(e){var t=e.onSubmit,c=Object(r.useState)(""),o=Object(i.a)(c,2),a=o[0],s=o[1];return Object(n.jsx)("header",{className:"Searchbar",children:Object(n.jsxs)("form",{className:"SearchForm",onSubmit:function(e){e.preventDefault(),""!==a.trim()?(t(a),s("")):u.b.error("Write your request,please")},children:[Object(n.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(n.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(n.jsx)("input",{className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:a,onChange:function(e){s(e.currentTarget.value.toLowerCase())}})]})})}var j=c(9);var b={fetchPictures:function(e,t){return fetch("".concat("https://pixabay.com/api/","?image_type=photo&orientation=horizontal&q=").concat(e,"&page=").concat(t,"&per_page=12&key=").concat("18616543-61f088c3928fc4bac834774e6")).then((function(e){return e.ok?e.json():Promise.reject(new Error("Something is wrong, please try again"))}))}},m=(c(20),c(21),document.querySelector("#modal-root"));function d(e){var t=e.src,c=e.alt,o=e.onClose;Object(r.useEffect)((function(){return window.addEventListener("keydown",s),function(){window.removeEventListener("keydown",s)}}));var s=function(e){"Escape"===e.code&&o()};return Object(a.createPortal)(Object(n.jsx)("div",{className:"Overlay",onClick:function(e){e.currentTarget===e.target&&o()},children:Object(n.jsx)("div",{className:"Modal",children:Object(n.jsx)("img",{src:t,alt:c})})}),m)}c(22);function h(e){var t=e.src,c=e.alt,o=e.largePicture,a=Object(r.useState)(!1),s=Object(i.a)(a,2),u=s[0],l=s[1],j=function(){l((function(e){return!e}))};return Object(n.jsxs)("li",{className:"ImageGalleryItem",children:[Object(n.jsx)("img",{onClick:j,src:t,alt:c,className:"ImageGalleryItemImage"}),u&&Object(n.jsx)(d,{onClose:j,src:o,alt:c})]})}function f(e){var t=e.pictures;return Object(n.jsx)("ul",{className:"ImageGallery",children:t.map((function(e,t){return Object(n.jsx)(h,{src:e.webformatURL,alt:e.tags,largePicture:e.largeImageURL},t)}))})}function O(e){var t=e.message;return Object(n.jsx)("div",{role:"alert",children:Object(n.jsx)("p",{children:t})})}c(23);var g=c(10),p=c.n(g);c(45);function v(){return Object(n.jsx)(p.a,{className:"Loader",type:"Circles",color:"#00BFFF",height:100,width:100,timeout:3e3})}c(46);function x(e){var t=e.onClick;return Object(n.jsx)("button",{onClick:function(){t()},type:"button",className:"Button",children:"Load more"})}function S(e){var t=e.searchQuery,c=Object(r.useState)([]),o=Object(i.a)(c,2),a=o[0],s=o[1],u=Object(r.useState)(1),l=Object(i.a)(u,2),m=l[0],d=l[1],h=Object(r.useState)(null),g=Object(i.a)(h,2),p=g[0],S=g[1],y=Object(r.useState)("idle"),w=Object(i.a)(y,2),k=w[0],C=w[1];Object(r.useEffect)((function(){console.log("First render"),t&&(C("pending"),b.fetchPictures(t,m).then((function(e){return 0!==e.total?(s((function(t){return[].concat(Object(j.a)(t),Object(j.a)(e.hits))}),C("resolved")),console.log("fetch pictures in Api Service"),void window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})):Promise.reject(new Error("Invalid request"))})).catch((function(e){S(e),C("rejected")})))}),[m,t]);return"idle"===k?Object(n.jsx)("h1",{children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0432\u043e\u0439 \u0437\u0430\u043f\u0440\u043e\u0441"}):"pending"===k?Object(n.jsx)(v,{}):"rejected"===k?Object(n.jsx)(O,{message:p.message}):"resolved"===k?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(f,{pictures:a}),Object(n.jsx)(x,{onClick:function e(){console.log("\u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u043c \u043a\u0430\u0440\u0442\u0438\u043d\u043e\u043a :",e),d((function(e){return e+1})),console.log("+1 page:",d)},page:m})]}):void 0}function y(){var e=Object(r.useState)(""),t=Object(i.a)(e,2),c=t[0],o=t[1];return Object(n.jsxs)("div",{children:[Object(n.jsx)(l,{onSubmit:o}),Object(n.jsx)(S,{searchQuery:c}),Object(n.jsx)(u.a,{autoClose:2e3})]})}s.a.render(Object(n.jsx)(o.a.StrictMode,{children:Object(n.jsx)(y,{})}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.d806de37.chunk.js.map