(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"+r1y":function(r,e,o){"use strict";Number.prototype.addPxUnit=function(){return"".concat(this,"px")}},Q3IO:function(r,e,o){"use strict";o.r(e);var t=o("q1tI"),n=o.n(t),p=o("R/WZ"),a=o("KQm4"),i=o("wx14"),c=(o("17x9"),o("bv9d"));var s=function(r){var e=function(e){var o=r(e);return e.css?Object(i.a)(Object(i.a)({},Object(c.a)(o,r(Object(i.a)({theme:e.theme},e.css)))),function(r,e){var o={};return Object.keys(r).forEach((function(t){-1===e.indexOf(t)&&(o[t]=r[t])})),o}(e.css,[r.filterProps])):o};return e.propTypes={},e.filterProps=["css"].concat(Object(a.a)(r.filterProps)),e};var l=function(){for(var r=arguments.length,e=new Array(r),o=0;o<r;o++)e[o]=arguments[o];var t=function(r){return e.reduce((function(e,o){var t=o(r);return t?Object(c.a)(e,t):e}),{})};return t.propTypes={},t.filterProps=e.reduce((function(r,e){return r.concat(e.filterProps)}),[]),t},u=o("rePB"),f=o("LybE");function d(r,e){return e&&"string"===typeof e?e.split(".").reduce((function(r,e){return r&&r[e]?r[e]:null}),r):null}var m=function(r){var e=r.prop,o=r.cssProperty,t=void 0===o?r.prop:o,n=r.themeKey,p=r.transform,a=function(r){if(null==r[e])return null;var o=r[e],a=d(r.theme,n)||{};return Object(f.a)(r,o,(function(r){var e;return"function"===typeof a?e=a(r):Array.isArray(a)?e=a[r]||r:(e=d(a,r)||r,p&&(e=p(e))),!1===t?e:Object(u.a)({},t,e)}))};return a.propTypes={},a.filterProps=[e],a};function b(r){return"number"!==typeof r?r:"".concat(r,"px solid")}var y=l(m({prop:"border",themeKey:"borders",transform:b}),m({prop:"borderTop",themeKey:"borders",transform:b}),m({prop:"borderRight",themeKey:"borders",transform:b}),m({prop:"borderBottom",themeKey:"borders",transform:b}),m({prop:"borderLeft",themeKey:"borders",transform:b}),m({prop:"borderColor",themeKey:"palette"}),m({prop:"borderRadius",themeKey:"shape"})),h=l(m({prop:"displayPrint",cssProperty:!1,transform:function(r){return{"@media print":{display:r}}}}),m({prop:"display"}),m({prop:"overflow"}),m({prop:"textOverflow"}),m({prop:"visibility"}),m({prop:"whiteSpace"})),g=l(m({prop:"flexBasis"}),m({prop:"flexDirection"}),m({prop:"flexWrap"}),m({prop:"justifyContent"}),m({prop:"alignItems"}),m({prop:"alignContent"}),m({prop:"order"}),m({prop:"flex"}),m({prop:"flexGrow"}),m({prop:"flexShrink"}),m({prop:"alignSelf"}),m({prop:"justifyItems"}),m({prop:"justifySelf"})),v=l(m({prop:"gridGap"}),m({prop:"gridColumnGap"}),m({prop:"gridRowGap"}),m({prop:"gridColumn"}),m({prop:"gridRow"}),m({prop:"gridAutoFlow"}),m({prop:"gridAutoColumns"}),m({prop:"gridAutoRows"}),m({prop:"gridTemplateColumns"}),m({prop:"gridTemplateRows"}),m({prop:"gridTemplateAreas"}),m({prop:"gridArea"})),x=l(m({prop:"position"}),m({prop:"zIndex",themeKey:"zIndex"}),m({prop:"top"}),m({prop:"right"}),m({prop:"bottom"}),m({prop:"left"})),O=l(m({prop:"color",themeKey:"palette"}),m({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette"})),j=m({prop:"boxShadow",themeKey:"shadows"});function w(r){return r<=1?"".concat(100*r,"%"):r}var P=m({prop:"width",transform:w}),N=m({prop:"maxWidth",transform:w}),T=m({prop:"minWidth",transform:w}),K=m({prop:"height",transform:w}),k=m({prop:"maxHeight",transform:w}),A=m({prop:"minHeight",transform:w}),S=(m({prop:"size",cssProperty:"width",transform:w}),m({prop:"size",cssProperty:"height",transform:w}),l(P,N,T,K,k,A,m({prop:"boxSizing"}))),C=o("+Hmc"),E=l(m({prop:"fontFamily",themeKey:"typography"}),m({prop:"fontSize",themeKey:"typography"}),m({prop:"fontStyle",themeKey:"typography"}),m({prop:"fontWeight",themeKey:"typography"}),m({prop:"letterSpacing"}),m({prop:"lineHeight"}),m({prop:"textAlign"})),I=o("Ff2n"),R=o("iuhU"),B=o("2mql"),F=o.n(B),z=o("RD7I");function U(r,e){var o={};return Object.keys(r).forEach((function(t){-1===e.indexOf(t)&&(o[t]=r[t])})),o}var D=o("cNwE"),H=function(r){var e=function(r){return function(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=o.name,p=Object(I.a)(o,["name"]);var a,c=t,s="function"===typeof e?function(r){return{root:function(o){return e(Object(i.a)({theme:r},o))}}}:{root:e},l=Object(z.a)(s,Object(i.a)({Component:r,name:t||r.displayName,classNamePrefix:c},p));e.filterProps&&(a=e.filterProps,delete e.filterProps),e.propTypes&&(e.propTypes,delete e.propTypes);var u=n.a.forwardRef((function(e,o){var t=e.children,p=e.className,c=e.clone,s=e.component,u=Object(I.a)(e,["children","className","clone","component"]),f=l(e),d=Object(R.a)(f.root,p),m=u;if(a&&(m=U(m,a)),c)return n.a.cloneElement(t,Object(i.a)({className:Object(R.a)(t.props.className,d)},m));if("function"===typeof t)return t(Object(i.a)({className:d},m));var b=s||r;return(n.a.createElement(b,Object(i.a)({ref:o,className:d},m),t))}));return F()(u,r),u}}(r);return function(r,o){return e(r,Object(i.a)({defaultTheme:D.a},o))}},W=s(l(y,h,g,v,x,O,j,S,C.b,E)),_=H("div")(W,{name:"MuiBox"}),G=o("ofer"),V=o("hlie"),q=n.a.createElement,M=(o("+r1y"),n.a.createElement),L=Object(p.a)((function(r){return{root:{marginBlockStart:r.spacing(2).addPxUnit()},box:{marginBlockStart:r.spacing(2).addPxUnit()},spacer:{marginBlockEnd:r.spacing(2).addPxUnit()},"@global":{".MuiTypography-body1":{marginInlineStart:r.spacing(2).addPxUnit()}}}})),Q=[{title:"Arcaea\u306e\u3084\u3064",href:"https://scoretool.koffein.dev",description:"Typescript(React/Material UI)/Firebase\n    \u30b9\u30b3\u30a2\u30c4\u30fc\u30eb\u3067\u3059\n    API\u304c\u516c\u958b\u3055\u308c\u3066\u306a\u3044\u306e\u3067\u30b9\u30b3\u30a2\u306f\u624b\u6253\u3061\u3057\u3066\u306d"}];e.default=function(){var r=L();return M(_,{className:r.root},Q.map((function(e){return M(n.a.Fragment,null,M(_,{className:r.box},M(G.a,{variant:"h6"},"undefined"!==typeof e.href?M(V.a,{href:e.href,color:"secondary"},e.title):e.title)),M(G.a,{variant:"body1"},e.description.split("\n").map((function(r,e){return q("span",{key:e},r,q("br",null))}))))})))}},at7P:function(r,e,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/works",function(){return o("Q3IO")}])},hlie:function(r,e,o){"use strict";var t=o("wx14"),n=o("Ff2n"),p=o("q1tI"),a=(o("17x9"),o("iuhU")),i=o("NqtD"),c=o("H2TA"),s=o("G7As"),l=o("bfFb"),u=o("ofer"),f=p.forwardRef((function(r,e){var o=r.classes,c=r.className,f=r.color,d=void 0===f?"primary":f,m=r.component,b=void 0===m?"a":m,y=r.onBlur,h=r.onFocus,g=r.TypographyClasses,v=r.underline,x=void 0===v?"hover":v,O=r.variant,j=void 0===O?"inherit":O,w=Object(n.a)(r,["classes","className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"]),P=Object(s.a)(),N=P.isFocusVisible,T=P.onBlurVisible,K=P.ref,k=p.useState(!1),A=k[0],S=k[1],C=Object(l.a)(e,K);return p.createElement(u.a,Object(t.a)({className:Object(a.a)(o.root,o["underline".concat(Object(i.a)(x))],c,A&&o.focusVisible,"button"===b&&o.button),classes:g,color:d,component:b,onBlur:function(r){A&&(T(),S(!1)),y&&y(r)},onFocus:function(r){N(r)&&S(!0),h&&h(r)},ref:C,variant:j},w))}));e.a=Object(c.a)({root:{},underlineNone:{textDecoration:"none"},underlineHover:{textDecoration:"none","&:hover":{textDecoration:"underline"}},underlineAlways:{textDecoration:"underline"},button:{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle","-moz-appearance":"none","-webkit-appearance":"none","&::-moz-focus-inner":{borderStyle:"none"},"&$focusVisible":{outline:"auto"}},focusVisible:{}},{name:"MuiLink"})(f)}},[["at7P",0,1,2]]]);