(self.webpackChunkcheesepens=self.webpackChunkcheesepens||[]).push([[737],{398:function(e,t,a){"use strict";a.d(t,{Z:function(){return _}});var l=a(7294),c=a(5444),r="layout-module--header__module--1E49Q",n="layout-module--logo--C-Wen",o="layout-module--navLink--1y5rc",s=function(e){e.siteTitle,e.header;var t=e.boxShadow;return l.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light "+r+" ",style:{boxShadow:t?"3px 3px 3px lightgrey":""}},l.createElement("div",{className:"container"},l.createElement(c.Link,{className:"navbar-brand",to:"/"},l.createElement("img",{src:"/logo.png",className:"img-fluid "+n})),l.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.createElement("span",{className:"navbar-toggler-icon"})),l.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.createElement("ul",{className:"navbar-nav ms-auto mb-2 mb-lg-0"},l.createElement("li",{class:"nav-item dropdown"},l.createElement(c.Link,{className:"nav-link "+o,to:"/products"},"Products")),l.createElement("li",{className:"nav-item"},l.createElement(c.Link,{className:"nav-link "+o,to:"/superrainbow"},"Superrainbow")),l.createElement("li",{className:"nav-item"},l.createElement(c.Link,{className:"nav-link "+o,to:"/about"},"About")),l.createElement("li",{className:"nav-item"},l.createElement(c.Link,{className:"nav-link "+o,to:"/contact"},"Contact"))))))},m="footer-module--__footer__container--1rU3S",i="footer-module--__footer__parentCompany--aU3lZ",u="footer-module--__footer__span--uWsTQ",d="footer-module--__footer__logo--3dVa2",p=function(e){e.siteTitle,e.header;var t=e.marginTop,a=e.padding;return l.createElement("div",{className:m+" text-center",style:{marginTop:t||"350px",padding:a||"100px 0px"}},l.createElement("p",null,l.createElement("span",{className:i},"nikita writing instruments")),l.createElement("span",{className:u},"presents"),l.createElement("p",null,l.createElement("img",{src:"/logo.png",className:"img-fluid "+d})),l.createElement("p",{style:{fontSize:"23px"}},"© cheesepens.com ",(new Date).getFullYear()))},_=function(e){var t=e.children,a=e.boxShadow,c=e.marginTop,r=e.padding;return l.createElement("div",null,l.createElement(s,{boxShadow:a||!1}),t,l.createElement(p,{marginTop:c||!1,padding:r||!1}))}},64:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return s}});var l=a(7294),c=a(398),r=a(5444),n=a(3725),o=function(e){var t=e.title,a=e.description,c=e.features,r=e.price,o=e.isInLeft;return l.createElement(l.Fragment,null,l.createElement("div",{className:"row align-items-center "+n.Z.__row},o?l.createElement(l.Fragment,null,l.createElement("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3 align-items-center"},l.createElement("img",{src:"/"+t+".png",className:n.Z.__left+" "+n.Z.__productImage})),l.createElement("div",{class:"col-xs-12 col-sm-12 col-md-12 col-lg-8 col-xl-8 col-xxl-8"},l.createElement("h2",{className:""+n.Z.__productTitle},t),l.createElement("span",{className:""+n.Z.__productPrice}," MRP : ₹ ",r,"/- "),l.createElement("div",null,l.createElement("p",{className:n.Z.__productDescription},a),l.createElement("span",{className:n.Z.__productFeaturesTitle},"Features"),c.map((function(e){return l.createElement("li",{className:n.Z.listItem},e)}))))):l.createElement(l.Fragment,null,l.createElement("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3 "+n.Z.SmImage+" align-items-center"},l.createElement("img",{src:"/"+t+".png",className:"img-fluid "+n.Z.__productImage})),l.createElement("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-8 col-xl-8 col-xxl-8"},l.createElement("h2",{className:""+n.Z.__productTitle},t),l.createElement("span",{className:""+n.Z.__productPrice}," MRP : ₹ ",r,"/- "),l.createElement("div",null,l.createElement("p",{className:n.Z.__productDescription},a),l.createElement("span",{className:n.Z.__productFeaturesTitle},"Features"),c.map((function(e){return l.createElement("li",{className:n.Z.listItem},e)})))),l.createElement("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3 "+n.Z.notSmImage},l.createElement("img",{src:"/"+t+".png",className:n.Z.__productImage+" "+n.Z.__right})))))},s=function(){var e=(0,r.useStaticQuery)("1101143797");console.log(e);var t=!1;return l.createElement(c.Z,{boxShadow:!0,marginTop:"150px"},l.createElement("div",{className:"products"},l.createElement("div",{className:"container"},l.createElement("h2",{className:"text-center "+n.Z.__h2},"Our Products"),e.allMarkdownRemark.edges.map((function(e){var a=e.node;t=!t,console.log("isInLeft",t);var c=a.frontmatter;return l.createElement(o,Object.assign({},c,{isInLeft:t}))})))))}},3725:function(e,t){"use strict";t.Z={__h2:"products-module--__h2--5TrDZ",__productImage:"products-module--__productImage--2-ZXk",__row:"products-module--__row--3OnDT",__productTitle:"products-module--__productTitle--3VWjR",__productPrice:"products-module--__productPrice--3-GDb",__productDescription:"products-module--__productDescription--3nvkD",__productFeaturesTitle:"products-module--__productFeaturesTitle--1RoMy",listItem:"products-module--listItem--76tR1",notSmImage:"products-module--notSmImage--14uOg",__border:"products-module--__border--uAPrs",__mainImg:"products-module--__mainImg--1pggk",__h1:"products-module--__h1--1cyK2",__left:"products-module--__left--2sb_o",__right:"products-module--__right--IVfjV",SmImage:"products-module--SmImage--39vnp",buttons:"products-module--buttons--2XSXE",__contact__social:"products-module--__contact__social--2jRn5"}}}]);
//# sourceMappingURL=component---src-pages-products-js-ef230d28f039d1b383ca.js.map