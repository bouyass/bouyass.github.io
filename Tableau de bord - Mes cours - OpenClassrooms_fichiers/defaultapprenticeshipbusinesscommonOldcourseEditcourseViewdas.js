(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{1195:function(e,t,n){"use strict";var r=n(3),o=n(31),a=n(19),i=n(1),l=n.n(i),c=n(370),u=n.n(c),s=n(3158),f=n(475);function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var d=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.needLogin=!1,this.isMobileFriendly=!0,this.link=null}var t,n,r;return t=e,(n=[{key:"matchCustomContentLink",value:function(e){return"A"===e.tagName&&!!e.href.match(new RegExp(this.link))}},{key:"substitute",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];e.parentNode.replaceChild(this.createSubstitutionElement(e,t),e)}},{key:"createSubstitutionElement",value:function(e,t){throw new Error("this methode must be override.")}}])&&p(t.prototype,n),r&&p(t,r),e}(),y=n(6),b=n.n(y),m=n(7),h=n.n(m),v=n(13),O=n(8),g=n.n(O),E=n(1358),w={DOMElem:Object(E.createPropType)(function(e){return e instanceof Element})},_=n(272),j=n(447),P=n.n(j),S={icon:h.a.string.isRequired,title:h.a.string.isRequired,className:h.a.string,isExpanded:h.a.bool,onExpand:h.a.func},k=function(e){var t=e.isExpanded,n=e.className,r=e.icon,o=e.title,a=e.onExpand,i=P()("extendBar__actionIcon",{"icon-compress":t,"icon-expand":!t});return l.a.createElement("div",{className:"extendBar ".concat(n)},l.a.createElement("i",{className:"extendBar__icon ".concat(r)}),l.a.createElement("span",{className:"extendBar__title"},o),a&&l.a.createElement("i",{className:i,onClick:a}))};k.defaultProps={className:"",onExpand:null,isExpanded:!1},k.propTypes=S;var C=k;function x(e){return(x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function T(e){return(T=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function N(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function R(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function I(e,t,n){return t&&R(e.prototype,t),n&&R(e,n),e}function A(e,t){return(A=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var B={children:h.a.element.isRequired,fullscreen:h.a.bool,icon:h.a.string,title:h.a.string,onExpand:h.a.func,onShrink:h.a.func},q=function(e){function t(e){var n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,(n=!(o=T(t).call(this,e))||"object"!==x(o)&&"function"!=typeof o?N(r):o).handleToggleExpand=n.handleToggleExpand.bind(N(n)),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&A(e,t)}(t,i["Component"]),I(t,null,[{key:"setBlockBodyScroll",value:function(e){r.a.document.body.style.overflow=e?"hidden":"auto"}}]),I(t,[{key:"handleToggleExpand",value:function(){this.props.fullscreen?(this.props.onShrink(),t.setBlockBodyScroll(!1)):(this.props.onExpand(),t.setBlockBodyScroll(!0))}},{key:"render",value:function(){var e=this.props,t=e.icon,n=e.title,r=e.children,o=e.fullscreen,a=P()("extendableContainer",{"extendableContainer--expanded":o}),i={className:P()(r.props.className,{extendableContainer__content:!0,"is-expanded":o})};return l.a.createElement("div",{className:a},l.a.createElement(C,{className:"extendableContainer__header",icon:t,title:n,onExpand:this.handleToggleExpand,isExpanded:o}),l.a.cloneElement(r,i))}}]),t}();q.propTypes=B,q.defaultProps={fullscreen:!1,icon:"icon-star",title:"",onExpand:function(){},onShrink:function(){}};var M=q;function D(e){return(D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function L(){return(L=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function W(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function U(e){return(U=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function F(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function G(e,t){return(G=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var H=function(e,t,n){var r,o,a,i=function(r){function o(e){var t,n,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),n=this,(t=!(r=U(o).call(this,e))||"object"!==D(r)&&"function"!=typeof r?F(n):r).state={fullscreen:!1},t.handleExpand=t.handleExpand.bind(F(t)),t.handleShrink=t.handleShrink.bind(F(t)),t}var a,i,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&G(e,t)}(o,l.a.Component),a=o,(i=[{key:"handleExpand",value:function(){this.setState({fullscreen:!0})}},{key:"handleShrink",value:function(){this.setState({fullscreen:!1})}},{key:"render",value:function(){var r=this.state.fullscreen;return l.a.createElement(M,{title:t(),icon:n,fullscreen:r,onExpand:this.handleExpand,onShrink:this.handleShrink},l.a.createElement(e,L({},this.props,{onExpand:this.handleExpand})))}}])&&W(a.prototype,i),c&&W(a,c),o}();return r=i,o="displayName",a="Extendable".concat(e.displayName||e.name),o in r?Object.defineProperty(r,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):r[o]=a,i},V=n(586),J=n(12),z={children:h.a.node,className:h.a.string},Y=function(e){var t=e.children,n=e.className;return l.a.createElement("div",{className:P()("lightPopin",n)},t)};Y.propTypes=z,Y.defaultProps={children:null,className:""};var Z=Y,K={isOnline:h.a.bool.isRequired},Q=function(e){var t=e.isOnline;return l.a.createElement("div",{className:P()("internetWarning",{"internetWarning--visible":!t})},l.a.createElement("div",{className:"internetWarning__overlay"}),l.a.createElement(Z,null,l.a.createElement("h5",{className:"internetWarning__title"},Object(J.translate)("codevolve.internet_ko.title")),l.a.createElement("i",{className:"internetWarning__icon icon-nowifi"}),l.a.createElement("div",{className:"internetWarning__text"},Object(J.translate)("codevolve.internet_ko.text"))))};Q.propTypes=K;var X=Q,$=500,ee={href:h.a.string,className:h.a.string,disabled:h.a.bool,height:h.a.number,isOnline:h.a.bool,id:h.a.string},te={href:null,className:"",height:$,disabled:!1,isOnline:!0,id:""};function ne(e){var t=e.href,n=e.className,r=e.disabled,o=e.height,a=e.isOnline,i=e.id;return r?l.a.createElement("div",{style:{height:$}}):l.a.createElement("div",{className:n},l.a.createElement("iframe",{title:"codevolve",src:t,height:o,width:"100%",frameBorder:"0",id:i}),l.a.createElement(X,{isOnline:a}))}ne.propTypes=ee,ne.defaultProps=te;var re=ne,oe=n(3182),ae=n(456);function ie(){return(ie=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var le={children:h.a.node.isRequired,type:h.a.string,onClick:h.a.func,href:h.a.string,classes:h.a.objectOf(h.a.string)};var ce=function(e){var t=e.onClick,n=e.type,r=e.children,o=e.href,a=e.classes;return l.a.createElement("div",{className:a.ctaContainer},"button"===n?function(e,t,n,r){var o=n?{href:n,Component:"a"}:{};return l.a.createElement(oe.a,ie({onClick:e},o,{className:r.ctaButton}),t)}(t,r,o,a):function(e,t,n){var r=n?{href:n,Component:"a"}:{};return l.a.createElement(oe.a,ie({onClick:e},r,{ocStyle:"alternative"}),t)}(t,r,o))};ce.propTypes=le,ce.defaultProps={onClick:null,type:"button",href:null,classes:{}};var ue=Object(ae.a)(function(){return{ctaContainer:{display:"block",textAlign:"center",margin:"1rem 0"},ctaButton:{"& span":{color:"white"}}}})(ce);function se(){return(se=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var fe=function(e){return l.a.createElement(ue,se({},e,{close:!0}))};function pe(){return(pe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var de=function(e){return l.a.createElement(ue,pe({},e,{goNext:!0}))},ye={children:h.a.node.isRequired,name:h.a.string,onClose:h.a.func,onGoNext:h.a.func},be=function(){},me={name:"",onClose:be,onGoNext:be},he=function(e){var t=e.name,n=e.children,r=e.onClose,o=e.onGoNext;return l.a.createElement(Z,null,l.a.createElement("div",{"data-name":t,className:"stepPanel"},l.a.Children.map(n,function(e){var t=e;if((e.type===fe||e.type===de)&&!e.props.onClick){var n;switch(e.type){case fe:n=r;break;case de:n=o;break;default:n=e.props.onClick}t=l.a.cloneElement(e,{onClick:n})}return t})))};he.propTypes=ye,he.defaultProps=me;var ve=he;function Oe(){return(Oe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function ge(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var Ee={icon:h.a.string,imgUrl:h.a.string},we=function(e){return e.icon?(t=e.icon,l.a.createElement("i",{className:"stepPanel__icon ".concat(t)})):e.imgUrl?function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return l.a.createElement("img",Oe({className:"stepPanel__image",src:e},t))}(e.imgUrl,ge(e,["imgUrl"])):null;var t};we.propTypes=Ee,we.defaultProps={icon:null,imgUrl:null};var _e=we,je={children:h.a.node.isRequired},Pe=function(e){var t=e.children;return l.a.createElement("h5",{className:"stepPanel__title"},t)};Pe.propTypes=je;var Se=Pe,ke={children:h.a.node.isRequired},Ce=function(e){var t=e.children;return l.a.createElement("div",{className:"stepPanel__text"},t)};Ce.propTypes=ke;var xe=Ce,Te=function(){return l.a.createElement(ve,{name:"anonymous"},l.a.createElement(Se,null,Object(J.translate)("tutorial.message.title")),l.a.createElement(_e,{icon:"icon-lock"}),l.a.createElement(xe,null,l.a.createElement("p",null,Object(J.translate)("codevolve.tutorial.connect.message.connect_incentive"))),l.a.createElement(ue,{type:"button",onClick:function(){_.b.sendToSegment({name:"Tried to log in from Codevolve"})},href:"/login"},Object(J.translate)("tutorial.action.connect")),l.a.createElement(ue,{type:"link",onClick:function(){_.b.sendToSegment({name:"Tried to sign up from Codevolve"})},href:"/register"},Object(J.translate)("tutorial.action.sign_up")))};function Ne(e){return(Ne="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Re(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Ie(e){return(Ie=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Ae(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Be(e,t){return(Be=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var qe={children:h.a.node,isOnline:h.a.bool,needConnectedUser:h.a.bool,onClosePanel:h.a.func,onEnd:h.a.func},Me=function(){},De={children:null,isOnline:!0,needConnectedUser:!1,onClosePanel:Me,onEnd:Me},Le=function(e){function t(e){var n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,(n=!(o=Ie(t).call(this,e))||"object"!==Ne(o)&&"function"!=typeof o?Ae(r):o).state=n.createInitialState(),n.handleClose=n.handleClose.bind(Ae(n)),n.handleNext=n.handleNext.bind(Ae(n)),n.handleRootMount=n.handleRootMount.bind(Ae(n)),n}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Be(e,t)}(t,l.a.Component),n=t,(r=[{key:"createInitialState",value:function(){var e={step:0,show:!0};return this.props.needConnectedUser&&!Object(o.b)()?e.stepPanels=[l.a.createElement(Te,null)]:this.props.children?e.stepPanels=l.a.Children.toArray(this.props.children):e.show=!1,e}},{key:"handleClose",value:function(){var e=this,t=this.getCurrentStepPanel();this.setState({show:!1}),setTimeout(function(){e.props.onEnd(t.props.name)},0)}},{key:"handleNext",value:function(){var e=this.state.stepPanels,t=this.getCurrentStepPanel(),n=this.state,r=n.step,o=n.show;r<e.length-1&&(r+=1),this.props.onClosePanel(t.props.name),this.setState({step:r,show:o})}},{key:"handleRootMount",value:function(e){e&&(e.parentElement.style.position="relative")}},{key:"getCurrentStepPanel",value:function(){var e=this.state.stepPanels[this.state.step];return l.a.cloneElement(e,{onClose:this.handleClose,onGoNext:this.handleNext})}},{key:"render",value:function(){var e=this.props.isOnline;if(!this.state.show)return null;var t=this.getCurrentStepPanel();return l.a.createElement("div",{className:P()("tutorial","js-tutorial-hook",{hidden:!e}),ref:this.handleRootMount},l.a.createElement("div",{className:"tutorial__overlay"}),t)}}])&&Re(n.prototype,r),a&&Re(n,a),t}();Le.propTypes=qe,Le.defaultProps=De;var We=Le,Ue={isOnline:h.a.bool,onEnd:h.a.func};function Fe(e){var t=e.isOnline,n=e.onEnd;return l.a.createElement(We,{needConnectedUser:!0,isOnline:t,onEnd:n},l.a.createElement(ve,{name:"first"},l.a.createElement(Se,null,Object(J.translate)("codevolve.tutorial.home.message.title")),l.a.createElement(_e,{icon:"icon-magic"}),l.a.createElement(xe,null,l.a.createElement("p",null,l.a.createElement("strong",null,Object(J.translate)("codevolve.tutorial.home.message.primary_message")),l.a.createElement("br",null),Object(J.translate)("codevolve.tutorial.home.message.secondary_message"))),l.a.createElement(fe,{type:"button"},Object(J.translate)("codevolve.tutorial.home.action.primary_action")),l.a.createElement(de,{type:"link"},Object(J.translate)("codevolve.tutorial.home.action.secondary_action"))),l.a.createElement(ve,{name:"not-now"},l.a.createElement(Se,null,Object(J.translate)("codevolve.tutorial.not_now.message.title")),l.a.createElement(_e,{imgUrl:"/images/codevolve/phonepool.svg",width:"300",height:"180"}),l.a.createElement(xe,null,l.a.createElement("p",null,l.a.createElement("strong",{dangerouslySetInnerHTML:{__html:Object(J.translate)("codevolve.tutorial.not_now.message.primary_message")}}),l.a.createElement("br",null),l.a.createElement("span",null,Object(J.translate)("codevolve.tutorial.not_now.message.secondary_message")))),l.a.createElement(fe,{type:"button"},Object(J.translate)("codevolve.tutorial.not_now.action.primary_action"))))}Fe.propTypes=Ue,Fe.defaultProps={isOnline:!0,onEnd:function(){}};var Ge=Fe;function He(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function Ve(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?He(n,!0).forEach(function(t){Je(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):He(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function Je(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var ze=function(e){return{name:"Practiced Interactive Code Exercises",data:Ve({},e)}},Ye=n(585),Ze=n(548),Ke=n.n(Ze);function Qe(e){return(Qe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Xe(e,t){return!t||"object"!==Qe(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function $e(e){return($e=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function et(e,t){return(et=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var tt=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),Xe(this,$e(t).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&et(e,t)}(t,Ke.a),t}();function nt(e){return(nt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function rt(e){return(rt=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ot(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function at(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function it(e,t,n){return t&&at(e.prototype,t),n&&at(e,n),e}function lt(e,t){return(lt=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function ct(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var ut=function(e){function t(e){var n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,(n=!(o=rt(t).call(this,e))||"object"!==nt(o)&&"function"!=typeof o?ot(r):o).state={isWatchedElementAboveViewPort:!1},n.handleScroll=n.handleScroll.bind(ot(n)),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&lt(e,t)}(t,i["Component"]),it(t,null,[{key:"isElementAboveViewPort",value:function(e){if(null===e)throw new tt;var t=e.getBoundingClientRect();return t.top+t.height<=0&&null!==e.offsetParent}}]),it(t,[{key:"componentDidMount",value:function(){r.a.window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){r.a.window.removeEventListener("scroll",this.handleScroll)}},{key:"handleScroll",value:function(){var e=this.props.elementToWatchSelector;this.setState({isWatchedElementAboveViewPort:t.isElementAboveViewPort(r.a.document.querySelector(e))})}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.disabled,r=e.isOnline,o=this.state.isWatchedElementAboveViewPort,a=P()("adviceReminder",{"adviceReminder--visible":o&&!n,hidden:!r}),i={className:P()(t.props.className,"adviceReminder__children")};return l.a.createElement("div",{className:a},l.a.createElement("div",{className:"adviceReminder__container"},l.a.cloneElement(t,i)))}}]),t}();ct(ut,"propTypes",{children:h.a.node.isRequired,elementToWatchSelector:h.a.string.isRequired,disabled:h.a.bool,isOnline:h.a.bool}),ct(ut,"defaultProps",{disabled:!1,isOnline:!0});var st=ut,ft={children:h.a.any.isRequired,className:h.a.string,icon:h.a.string,onClick:h.a.func,onClose:h.a.func},pt=function(e){var t=e.icon,n=e.children,r=e.onClose,o=e.onClick,a=e.className,i=P()(a,"shortMessageBox",{"shortMessageBox--clickable":o});return l.a.createElement("div",{className:i,onClick:o},t&&l.a.createElement("i",{className:"shortMessageBox__icon ".concat(t)}),l.a.createElement("div",{className:"shortMessageBox__title"},n),r&&l.a.createElement("i",{className:"shortMessageBox__closeIcon icon-close",onClick:function(e){e.stopPropagation(),r()}}))};pt.defaultProps={className:"",icon:null,onClick:null,onClose:null},pt.propTypes=ft;var dt=pt;function yt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function bt(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?yt(n,!0).forEach(function(t){mt(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):yt(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function mt(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var ht=function(e){return{name:"Closed Interactive Code Exercises Banner",data:bt({},e)}},vt=function(e){return{name:"Clicked On Interactive Code Exercises Banner",data:bt({},e)}};function Ot(e){return(Ot="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function gt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function Et(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function wt(e){return(wt=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _t(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function jt(e,t){return(jt=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Pt(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var St={},kt=".js-tutorial-hook",Ct=function(e){function t(e){var n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,o=wt(t).call(this,e),n=!o||"object"!==Ot(o)&&"function"!=typeof o?_t(r):o,Pt(_t(n),"state",{hasBeenClosed:!1}),Pt(_t(n),"handleClick",function(){n.scrollToTutorial()}),Pt(_t(n),"scrollToTutorial",function(){var e=document.querySelector(kt).getBoundingClientRect(),t=e.top+window.pageYOffset+e.height/2-window.innerHeight/2;Ye.b.scrollTo({smooth:!0,position:t}),_.b.sendToSegment(vt(n.getCourse()))}),Pt(_t(n),"handleClose",function(){n.setState({hasBeenClosed:!0}),n.closeAllOtherAdviceReminder(),_.b.sendToSegment(ht(n.getCourse()))}),St[e.codevolveElementId]=function(){n.setState({hasBeenClosed:!0})},n}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&jt(e,t)}(t,i["Component"]),n=t,(r=[{key:"getCourse",value:function(){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?gt(n,!0).forEach(function(t){Pt(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):gt(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({iframeLink:this.props.codevolveIframeLink},V.a.get())}},{key:"closeAllOtherAdviceReminder",value:function(){for(var e in St)e!==this.props.codevolveElementId&&St[e]()}},{key:"render",value:function(){var e=this.props,t=e.disabled,n=e.codevolveElementId,r=e.isOnline,o=this.state.hasBeenClosed;return l.a.createElement(st,{isOnline:r,disabled:t||o,elementToWatchSelector:"#".concat(n)},l.a.createElement(dt,{icon:"icon-arrow-up",onClose:this.handleClose,onClick:this.handleClick},l.a.createElement("div",{dangerouslySetInnerHTML:{__html:Object(J.translate)("codevolve.advice_reminder",{class:"codevolveAdviceReminder__link"})}})))}}])&&Et(n.prototype,r),o&&Et(n,o),t}();function xt(e){return(xt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Tt(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Nt(e){return(Nt=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Rt(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function It(e,t){return(It=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function At(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Pt(Ct,"propTypes",{codevolveElementId:h.a.string.isRequired,codevolveIframeLink:h.a.string.isRequired,disabled:h.a.bool.isRequired,isOnline:h.a.bool}),Pt(Ct,"defaultProps",{isOnline:!0});var Bt="codevolveIframe",qt="https://www.codevolve.com/api/v1/access_token/".concat("%accessToken%"),Mt=function(e){function t(){var e,n,r,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,i=new Array(a),l=0;l<a;l++)i[l]=arguments[l];return r=this,o=(e=Nt(t)).call.apply(e,[this].concat(i)),n=!o||"object"!==xt(o)&&"function"!=typeof o?Rt(r):o,At(Rt(n),"iFrameId",Bt+g.a.uniqueId()),At(Rt(n),"state",{tutorialFinished:!1,accessToken:null}),At(Rt(n),"handleOnEnd",function(){var e,t,r,o;return b.a.async(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,b.a.awrap(v.a.client.createGetRequest("/learning-activity/codevolve/token?contentId=".concat(n.getContentId())).execute());case 2:e=a.sent,t=e.body,r=t.accessToken,o=n.props.onExpand,_.b.sendToSegment(ze(V.a.get())),n.setState({tutorialFinished:!0,accessToken:r}),o();case 9:case"end":return a.stop()}})}),n}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&It(e,t)}(t,i["Component"]),n=t,(r=[{key:"getContentId",value:function(){var e=this.props.originalElement,t=new RegExp(/.*content_id=(.*)/);return e&&e.href&&e.href.match(t)?e.href.match(t)[1]:null}},{key:"getIframeUrl",value:function(){var e=this.state.accessToken;return e?qt.replace("%accessToken%",e):null}},{key:"render",value:function(){var e=this.props,t=e.originalElement,n=e.className,r=e.isOnline,o=this.state.tutorialFinished;return l.a.createElement("div",{className:n},l.a.createElement(re,{className:"js-codevolveIframe codevolve__iframe",id:this.iFrameId,href:this.getIframeUrl(),isOnline:r}),l.a.createElement(Ge,{isOnline:r,onEnd:this.handleOnEnd}),l.a.createElement(Ct,{isOnline:r,disabled:o,codevolveElementId:this.iFrameId,codevolveIframeLink:t.getAttribute("href")}))}}])&&Tt(n.prototype,r),o&&Tt(n,o),t}();At(Mt,"propTypes",{originalElement:w.DOMElem.isRequired,className:h.a.string,isOnline:h.a.bool,onExpand:h.a.func}),At(Mt,"defaultProps",{className:"",isOnline:!0,onExpand:function(){}});var Dt=H(Mt,function(){return Object(J.translate)("codevolve.title")},"icon-code2"),Lt=n(457),Wt=n(1354),Ut=function(e){return e[Wt.a].isOnline},Ft=Object(Lt.b)(function(e){return{isOnline:Ut(e)}})(Dt);function Gt(e){return(Gt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Ht(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Vt(e,t){return!t||"object"!==Gt(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function Jt(e){return(Jt=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function zt(e,t){return(zt=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var Yt="v1",Zt=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=Vt(this,Jt(t).call(this))).needLogin=!0,n.isMobileFriendly=!1,n.link="".concat(e).concat(Yt,"/publishable_key"),n}var n,o,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&zt(e,t)}(t,d),n=t,(o=[{key:"createSubstitutionElement",value:function(e){var t=r.a.document.createElement("div");return u.a.render(Object(f.e)(l.a.createElement(s.a,null,l.a.createElement(Ft,{originalElement:e}))),t),t}}])&&Ht(n.prototype,o),a&&Ht(n,a),t}();function Kt(e){return(Kt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Qt(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Xt(e,t){return!t||"object"!==Kt(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function $t(e){return($t=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function en(e,t){return(en=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var tn=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=Xt(this,$t(t).call(this))).needLogin=!1,e.isMobileFriendly=!0,e.link=/^(?!(https:\/\/openclassrooms|https:\/\/blog\.openclassrooms|https:\/\/info\.openclassrooms|https:\/\/exercices\.openclassrooms|https:\/\/stage|\/|\/en|\/fr|#))([a-zA-Z0-9:\/?#._-]+)/,e}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&en(e,t)}(t,d),n=t,(r=[{key:"createSubstitutionElement",value:function(e){var t=e;return t.setAttribute("target","_blank"),t.setAttribute("rel","noopener noreferrer nofollow"),t}}])&&Qt(n.prototype,r),o&&Qt(n,o),t}();function nn(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n.d(t,"c",function(){return on}),n.d(t,"a",function(){return an});var rn=[new Zt("https://www.codevolve.com/api/"),new Zt("https://api.codevolve.com/api/"),new Zt("https://api.next.tech/api/"),new tn];function on(e){return rn.some(function(t){return t.matchCustomContentLink(e)})}function an(){var e,t,n,i;e=".js-course-container",t=a.default.getCurrent(),n=t===a.default.SCREEN_WIDTH_SMALL||t===a.default.SCREEN_WIDTH_MEDIUM,(i=r.a.document.querySelector(e))&&rn.forEach(function(e){if(e.isMobileFriendly||!n){var t=!Object(o.b)()&&e.needLogin,r=nn(i.querySelectorAll("a[href]"));(r=r.filter(function(t){return!!t.href.match(e.link)}))&&nn(r).forEach(function(n){e.substitute(n,t)})}})}t.b=an},586:function(e,t,n){"use strict";var r=n(8),o=n.n(r);var a=function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.partId=null,this.partTitle=null,this.partSlug=null,this.courseId=null,this.courseTitle=null,this.courseSlug=null,this.courseLanguage=null,this.isIntroduction=null},i=n(548),l=n.n(i);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),u(this,s(t).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,l.a),t}();function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var y=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,r;return t=e,r=[{key:"get",value:function(){if(!function(){if("undefined"!=typeof App&&o.a.has(App,"data.currentCourse")){var e=App.data.currentCourse;if(void 0!==e.partId||void 0!==e.partTitle||void 0!==e.partSlug||void 0!==e.courseId||void 0!==e.courseTitle||void 0!==e.courseSlug||void 0!==e.courseLanguage||void 0!==e.isIntroduction)return!0}return!1}())throw new p;var e=new a;return o.a.assign(e,window.App.data.currentCourse),e}}],(n=null)&&d(t.prototype,n),r&&d(t,r),e}();t.a=y}}]);
//# sourceMappingURL=default~apprenticeship~business~commonOld~courseEdit~courseView~dashboard~funnel~jobGuarantee~mcqEdi~6f9fe121.46cb6ad4e1f222e80d4c.js.map