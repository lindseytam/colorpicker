(this["webpackJsonpshapely-colorpicker"]=this["webpackJsonpshapely-colorpicker"]||[]).push([[0],{19:function(e,t,n){},20:function(e,t,n){},21:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var o,r=n(1),c=n.n(r),i=n(10),a=n.n(i),h=(n(19),n(3)),u=(n(20),n(21),n(5)),l=n(4),s=n(2),d=n(0),b=s.b.input.attrs({type:"color"})(o||(o=Object(l.a)(["\n    height: ","px;\n    width: ","px;\n    background: ",";\n    position: relative;\n    // left: ",'px;\n    box-sizing: border-box;\n  \n  &:before, &:after {\n    content: "";\n    position: absolute;\n    height: 0;\n    width:  0;\n    top:  0;\n    border-top: ',"px solid transparent; \n    border-bottom: ","px solid transparent; \n  }\n  &:before {\n    left: -","px;\n    border-right: ","px solid ",";\n  }\n  &:after {\n    right: -","px;\n    border-left: ","px solid ",";\n  }         \n"])),(function(e){return e.theme.height}),(function(e){return 2/3*e.theme.height}),(function(e){return e.theme.color}),(function(e){return.25*e.theme.height}),(function(e){return.5*e.theme.height}),(function(e){return.5*e.theme.height}),(function(e){return.25*e.theme.height}),(function(e){return.25*e.theme.height}),(function(e){return e.theme.color}),(function(e){return.25*e.theme.height}),(function(e){return.25*e.theme.height}),(function(e){return e.theme.color}));b.defaultProps={theme:{color:"#000000",height:100}};var j,f=function(e){var t=e.height,n=e.defaultColor,o=e.onChange,c=Object(r.useState)(n),i=Object(h.a)(c,2),a=i[0],l=i[1],j=Object(r.useState)({color:n,height:t}),f=Object(h.a)(j,2),g=f[0],p=f[1];return Object(r.useEffect)((function(){o(a)}),[a]),Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(s.a,{theme:g,children:Object(d.jsx)(b,{"data-testid":"hexagon",value:a,onInput:function(e){l(e.target.value);var t=Object(u.a)(Object(u.a)({},g),{},{color:e.target.value});p(t)}})})})},g=s.b.input.attrs({type:"color"})(j||(j=Object(l.a)(["\n    border: 0;\n    border-radius: 50%;\n    overflow: hidden;\n    background: ",";\n    color: ",";\n    height: ","px;\n    width: ","px;\n"])),(function(e){return e.theme.color}),(function(e){return e.theme.color}),(function(e){return e.theme.height}),(function(e){return e.theme.height}));g.defaultProps={theme:{color:"#000000",height:100}};var p,x=function(e){var t=e.height,n=e.defaultColor,o=e.onChange,c=Object(r.useState)(n),i=Object(h.a)(c,2),a=i[0],u=i[1],l={color:a,height:t};return Object(r.useEffect)((function(){o(a)}),[a]),Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(s.a,{theme:l,children:Object(d.jsx)(g,{"data-testid":"circle",value:a,onInput:function(e){u(e.target.value)}})})})},m=function(e){var t=e.height,n=e.defaultColor,o=e.onChange,c=Object(r.useState)(n),i=Object(h.a)(c,2),a=i[0],l=i[1],s=Object(r.useState)({color:n,height:t}),b=Object(h.a)(s,2),j=b[0],f=b[1];return Object(r.useEffect)((function(){o(a)}),[a]),Object(d.jsx)("input",{"data-testid":"square",value:a,type:"color",style:{height:t,width:t},onInput:function(e){l(e.target.value);var t=Object(u.a)(Object(u.a)({},j),{},{color:e.target.value});f(t)}})},O=function(e){var t=e.height,n=void 0===t?100:t,o=e.shape,r=void 0===o?"square":o,c=e.defaultColor,i=void 0===c?"#14E298":c,a=e.onChange,h=function(e){a(e)};return Object(d.jsxs)(d.Fragment,{children:["circle"===r&&Object(d.jsx)(x,{height:n,defaultColor:i,onChange:h}),"square"===r&&Object(d.jsx)(m,{defaultColor:i,height:n,onChange:h}),"hexagon"===r&&Object(d.jsx)(f,{height:n,defaultColor:i,onChange:h})]})},v=n(14),C=n.n(v),k=s.b.div(p||(p=Object(l.a)(["\n    height: 30px;\n    width: 30px;\n    background: ",";\n    margin: 0 auto;\n"])),(function(e){return e.theme.color}));k.defaultProps={theme:{color:"#000000"}};var w,y=function(e){var t=e.defaultColor,n=e.isActive,o={color:void 0!==n&&n?"white":t};return Object(d.jsx)(s.a,{theme:o,children:Object(d.jsx)(k,{})})},S=s.b.div(w||(w=Object(l.a)(["\n    height: 30px;\n    width: 30px;\n    border-radius: 50%;\n    overflow: hidden;\n    background: ",";\n    margin: 0 auto;\n"])),(function(e){return e.theme.color}));S.defaultProps={theme:{color:"#000000"}};var N,P=function(e){var t=e.defaultColor,n=e.isActive,o={color:void 0!==n&&n?"white":t};return Object(d.jsx)(s.a,{theme:o,children:Object(d.jsx)(S,{})})},A=s.b.div(N||(N=Object(l.a)(["\n    height: ","px;\n    width: ","px;\n    background: ",";\n    position: relative;\n    // left: ",'px;\n    box-sizing: border-box;\n  &:before, &:after {\n    content: "";\n    position: absolute;\n    height: 0;\n    width:  0;\n    top:  0;\n    border-top: ',"px solid transparent; \n    border-bottom: ","px solid transparent; \n  }\n  &:before {\n    left: -","px;\n    border-right: ","px solid ",";\n  }\n  &:after {\n    right: -","px;\n    border-left: ","px solid ",";\n  }         \n"])),(function(e){return e.theme.height}),(function(e){return 2/3*e.theme.height}),(function(e){return e.theme.color}),(function(e){return 1*e.theme.height}),(function(e){return.5*e.theme.height}),(function(e){return.5*e.theme.height}),(function(e){return.25*e.theme.height}),(function(e){return.25*e.theme.height}),(function(e){return e.theme.color}),(function(e){return.25*e.theme.height}),(function(e){return.25*e.theme.height}),(function(e){return e.theme.color}));A.defaultProps={theme:{color:"#000000",height:50}};var F=function(e){var t=e.defaultColor,n=e.isActive,o={color:void 0!==n&&n?"white":t,height:30};return Object(d.jsx)(s.a,{theme:o,children:Object(d.jsx)(A,{})})},E=function(e){var t=e.shape,n=e.defaultColor,o=e.isActive,r=void 0!==o&&o,c=function(){return Object(d.jsxs)(d.Fragment,{children:["square"===t&&Object(d.jsx)(y,{defaultColor:n,isActive:r}),"circle"===t&&Object(d.jsx)(P,{defaultColor:n,isActive:r}),"hexagon"===t&&Object(d.jsx)(F,{defaultColor:n,isActive:r})]})};return Object(d.jsx)("div",{className:"button internal",style:{backgroundColor:r?n:"white"},children:r?c():Object(d.jsx)("div",{className:"button ring",style:{backgroundColor:n},children:Object(d.jsx)("div",{className:"button ring-inner",style:{backgroundColor:"white"},children:c()})})})},I=function(e,t,n){return"import ColorPicker from 'shapely-colorpicker';\n\nconst [color, setColor] = useState(\"".concat(t,'")\n\nconst handleChange = (change) => {\n    setColor(change)\n}\n\n<ColorPicker  \n    shape="').concat(e,'" \n    defaultColor="').concat(t,'" \n    height={').concat(n,"}\n    onChange={handleChange}\n/>\n")},q=function(e){var t=e.shape,n=e.color,o=e.height,r=[{section:"Snippet",id:"snippet",codes:[I(t,n,o)]},{section:"Installation",id:"install-code",codes:["npm install shapely-colorpicker"]}],c=function(e){var t=document.getElementById("".concat(e.target.id,"-value"));t.select(),t.setSelectionRange(0,99999),navigator.clipboard.writeText(t.value),alert("Copied!")},i=function(e){for(var t="",n=0;n<e.codes.length;n++)t+=e.codes[n]+"\n";return Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:e.section}),Object(d.jsxs)("div",{className:"sample-code",children:[Object(d.jsx)("input",{id:"".concat(e.id,"-value"),value:t}),Object(d.jsx)("i",{id:e.id,onClick:c,className:"far fa-clipboard"}),e.codes.map((function(e,t){return function(e,t){return Object(d.jsx)("pre",{children:Object(d.jsx)("code",{children:t})},e)}(t,e)}))]})]},e.section)};return Object(d.jsx)("div",{className:"code-container",children:r.map((function(e){return i(e)}))})};var T=function(){var e=Object(r.useState)("circle"),t=Object(h.a)(e,2),n=t[0],o=t[1],c=Object(r.useState)("#14E298"),i=Object(h.a)(c,2),a=i[0],u=i[1];return Object(d.jsxs)("div",{className:"colorpicker-container",children:[Object(d.jsx)(C.a,{repo:"https://github.com/lindseytam/colorpicker",colorBackground:a}),Object(d.jsx)("h1",{children:"Shapely Color Picker"}),Object(d.jsx)("div",{className:"button-container",children:["circle","square","hexagon"].map((function(e){return function(e){return Object(d.jsx)("button",{id:e,"data-testid":"".concat(e,"-button"),onClick:function(){o(e)},children:Object(d.jsx)(E,{shape:e,defaultColor:a,isActive:e===n})},e)}(e)}))}),Object(d.jsx)("div",{className:"input-container",children:Object(d.jsx)(O,{height:200,defaultColor:a,shape:n,onChange:function(e){u(e)}})}),Object(d.jsx)(q,{shape:n,color:a,height:200}),Object(d.jsxs)("div",{className:"about-container",children:[Object(d.jsx)("h2",{children:"About"}),Object(d.jsx)("p",{className:"about-text",children:"This package makes it easy for users to set the shape, default color, and height of a color picker application for their react app. This colorpicker is designed to handle changes immediately."})]})]})},B=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,28)).then((function(t){var n=t.getCLS,o=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),o(e),r(e),c(e),i(e)}))};a.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(T,{})}),document.getElementById("root")),B()}},[[27,1,2]]]);
//# sourceMappingURL=main.971b28f0.chunk.js.map