(this.webpackJsonpproject_nurtown=this.webpackJsonpproject_nurtown||[]).push([[0],[,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(0),i=n(1),c=n.n(i),o=n(4),a=n.n(o),l=(n(11),n(12),n(13),n(14),n(15),n(2)),r=function(e){var t=e.styles,n=e.text;return Object(s.jsx)("div",{className:"text-header",style:t,children:n})},j=function(){return Object(s.jsxs)("section",{className:"slider-header",children:[Object(s.jsx)(r,{text:"PROJECT",styles:{lineHeight:"64px",fontSize:"64px",color:"#bdbdbd",fontStyle:"normal",fontWeight:"300"}}),Object(s.jsx)(r,{text:"NURTOWN",styles:{lineHeight:"64px",fontSize:"64px",color:"#333333",fontStyle:"normal",fontWeight:"bold"}})]})},d=function(e){var t=e.name,n=e.backgroundImage,i=e.onClick,c=e.content,o=void 0!==t?t:"button-image",a={background:void 0!==n?"url(".concat(n,") center no-repeat"):""};return Object(s.jsxs)("button",{className:o,style:a,onClick:i,children:[" ",c]})},g=n.p+"static/media/arrow-right.e4f8bee9.svg",x=n.p+"static/media/arrow-left.72dd72df.svg",b=function(e){var t=e.onChangeSlide,n=e.slideIndex,c=Object(i.useState)(n),o=Object(l.a)(c,2),a=o[0],r=o[1];return Object(s.jsxs)("section",{className:"slider-switch",children:[Object(s.jsx)(d,{backgroundImage:x,onClick:function(){console.log("\u041f\u0435\u0440\u0435\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u043d\u0430 \u043f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0438\u0439 \u0441\u043b\u0430\u0439\u0434");var e=t(a-1);r(e)}}),Object(s.jsx)(d,{backgroundImage:g,onClick:function(){console.log("\u041f\u0435\u0440\u0435\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u043d\u0430 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0441\u043b\u0430\u0439\u0434");var e=t(a+1);r(e)}})]})},h=n.p+"static/media/divideLine.08309943.svg",m=function(e){var t=e.leftNumber,n=e.rightNumber,i={background:"url(".concat(h,") center no-repeat")};return Object(s.jsxs)("div",{className:"slide-number-pad",children:[Object(s.jsx)("div",{className:"slide-number",children:t}),Object(s.jsx)("div",{className:"divide-icon",style:i}),Object(s.jsx)("div",{className:"slide-number",children:n})]})},u=function(e){var t=e.backgroundImage,n={background:void 0!==t?"url(".concat(t,") center no-repeat"):""};return Object(s.jsx)("div",{className:"icon",style:n})},p=function(e){var t=e.slideItem,n=function(e){return"url(".concat(t.imgCoverUrl,") center no-repeat")},c=Object(i.useState)(n(t.imgCoverUrl)),o=Object(l.a)(c,2),a=o[0],r=o[1];Object(i.useEffect)((function(){console.log("\u041e\u0431\u043d\u043e\u0432\u0430"),r(n(t.imgCoverUrl))}));var j=Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{className:"button__open-post-text",children:"\u0412\u0417\u0413\u041b\u042f\u041d\u0423\u0422\u042c"}),Object(s.jsx)(u,{backgroundImage:g})]});return Object(s.jsx)("div",{className:"slider-post",children:Object(s.jsx)("div",{className:"post-image",style:{background:a},children:Object(s.jsx)(d,{name:"button__open-post",content:j})})})},O=n(5),f=function e(t,n){Object(O.a)(this,e),this.imgCoverUrl=t,this.postLink=n},v=["/slides/2.jpg","/slides/1.svg","/slides/3.jpg","/slides/4.jpg","/slides/5.jpg","/slides/6.jpg"],N=function(){var e=[];v.forEach((function(t){e.push(new f("/ProjectNurtown"+t,"#"))}));var t=Object(i.useState)(e[0]),n=Object(l.a)(t,2),c=n[0],o=n[1],a=Object(i.useState)(0),r=Object(l.a)(a,2),d=r[0],g=r[1],x=function(e){return"0"+(e+1)};return Object(s.jsxs)("section",{className:"slider",children:[Object(s.jsx)(j,{}),Object(s.jsx)(b,{onChangeSlide:function(t){var n=0;n=t>e.length-1?0:t<0?e.length-1:t;var s=e[n];return o(s),g(n),n},slideIndex:d}),Object(s.jsx)(m,{leftNumber:x(d),rightNumber:x(e.length-1)}),Object(s.jsx)(p,{slideItem:c})]})},w=function(){return Object(s.jsx)("section",{className:"content",children:Object(s.jsx)(N,{})})},y=function(e){var t=e.className,n=e.width,i=e.height,c=e.margin,o=e.imageUrl,a={width:n,height:i,background:"url(".concat(o,") center no-repeat"),margin:c,backgroundRepeat:"no-repeat",display:"inline-block"};return Object(s.jsx)("div",{className:t,style:a})},k=function(e){var t=e.linkUrl,n=e.content;return Object(s.jsx)("a",{href:t,children:n})},L=function(){return Object(s.jsx)("div",{className:"menu",children:Object(s.jsxs)("ul",{children:[Object(s.jsx)("li",{children:Object(s.jsx)(k,{linkUrl:"./",content:"\u0413\u041b\u0410\u0412\u041d\u0410\u042f"})}),Object(s.jsx)("li",{children:Object(s.jsx)(k,{linkUrl:"./",content:"\u0413\u0410\u041b\u0415\u0420\u0415\u042f"})}),Object(s.jsx)("li",{children:Object(s.jsx)(k,{linkUrl:"./",content:"\u041f\u0420\u041e\u0415\u041a\u0422\u042b"})}),Object(s.jsx)("li",{children:Object(s.jsx)(k,{linkUrl:"./",content:"\u0421\u0415\u0420\u0422\u0418\u0424\u0418\u041a\u0410\u0422\u042b"})}),Object(s.jsx)("li",{children:Object(s.jsx)(k,{linkUrl:"./",content:"\u041a\u041e\u041d\u0422\u0410\u041a\u0422\u042b"})})]})})},S=n.p+"static/media/logo.a7af73d9.svg",U=function(){return Object(s.jsxs)("section",{className:"header",children:[Object(s.jsx)(y,{className:"siteLogo",width:"70px",height:"44px",imageUrl:S}),Object(s.jsx)(L,{})]})},C=n.p+"static/media/logo_white.7403a92b.svg",I=function(e){var t=e.classNameLogo,n=e.stylesText,i=e.stylesLogo,c=e.text;return Object(s.jsxs)("div",{className:"text-with-logo",children:[Object(s.jsx)(y,{className:t,width:"16px",height:"16px",imageUrl:i.imageUrl}),Object(s.jsx)("div",{className:"text",style:n,children:c})]})},_=n.p+"static/media/gps.709e7fcb.svg",W=n.p+"static/media/phone.3885308c.svg",z=n.p+"static/media/mail.4aba332e.svg",H=n.p+"static/media/twitter.d14ca36b.svg",T=n.p+"static/media/pininterest.7577cf83.svg",F=n.p+"static/media/linked_in.47be0d3a.svg",P=n.p+"static/media/facebook.e0b89ca8.svg",D=function(){return Object(s.jsxs)("section",{className:"footer",children:[Object(s.jsxs)("section",{className:"footer--bar",children:[Object(s.jsx)(y,{className:"siteLogo",width:"170px",height:"94px",margin:"0 0 0 116px",imageUrl:C}),Object(s.jsxs)("div",{className:"footer-menu",children:[Object(s.jsx)(r,{text:"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f",styles:{lineHeight:"20px",fontSize:"16px",color:"white",fontStyle:"normal",fontWeight:"bold"}}),Object(s.jsx)(L,{})]}),Object(s.jsxs)("div",{className:"contact-wrapper",children:[Object(s.jsx)(r,{text:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b",styles:{lineHeight:"20px",fontSize:"16px",color:"white",fontStyle:"normal",fontWeight:"bold"}}),Object(s.jsx)(I,{text:"100000, \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430  \u041a\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043d, <br />  \u0433. \u041a\u0430\u0440\u0430\u0433\u0430\u043d\u0434\u0430, \u0443\u043b. \u0422\u0435\u043b\u0435\u0432\u0438\u0437\u0438\u043e\u043d\u043d\u0430\u044f 10",stylesText:{lineHeight:"20px",fontSize:"16px",color:"white",fontStyle:"normal",fontWeight:"bold",marginLeft:"20px"},stylesLogo:{width:"70px",height:"44px",imageUrl:_},classNameLogo:"gpsLogo"}),Object(s.jsx)(I,{text:"+7 (701) 77 76 811",stylesText:{lineHeight:"20px",fontSize:"16px",color:"white",fontStyle:"normal",fontWeight:"bold",marginLeft:"20px"},stylesLogo:{width:"70px",height:"44px",imageUrl:W},classNameLogo:"phoneLogo"}),Object(s.jsx)(I,{text:"Galym.sultanov@mail.ru",stylesText:{lineHeight:"20px",fontSize:"16px",color:"white",fontStyle:"normal",fontWeight:"bold",marginLeft:"20px"},stylesLogo:{width:"70px",height:"44px",imageUrl:z},classNameLogo:"mailLogo"})]}),Object(s.jsxs)("div",{className:"social-wrapper",children:[Object(s.jsx)(r,{text:"\u0421\u043e\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0435 \u0441\u0435\u0442\u0438",styles:{lineHeight:"20px",fontSize:"16px",color:"white",fontStyle:"normal",fontWeight:"bold"}}),Object(s.jsxs)("div",{className:"social-panel",children:[Object(s.jsx)(y,{className:"facebookLogo",width:"20px",height:"20px",margin:"0 0 0 0",imageUrl:P}),Object(s.jsx)(y,{className:"twitterLogo",width:"20px",height:"20px",margin:"0 0 0 0",imageUrl:H}),Object(s.jsx)(y,{className:"linkedInLogo",width:"20px",height:"20px",margin:"0 0 0 0",imageUrl:F}),Object(s.jsx)(y,{className:"pininterestImageLogo",width:"20px",height:"20px",margin:"0 0 0 0",imageUrl:T})]})]})]}),Object(s.jsx)("section",{className:"footer--copyright",children:Object(s.jsxs)("p",{className:"footer--copyright__text",children:["\xa9 ",(new Date).getFullYear()," Digital Project || DepressingUtopian. \u0412\u0441\u0435 \u043f\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043d\u044b."]})})]})},E=function(){return Object(s.jsxs)("div",{className:"main",children:[Object(s.jsx)(U,{}),Object(s.jsx)(w,{}),Object(s.jsx)(D,{})]})},J=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,s=t.getFID,i=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),s(e),i(e),c(e),o(e)}))};a.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(E,{})}),document.getElementById("root")),J()}],[[16,1,2]]]);
//# sourceMappingURL=main.7d1a93aa.chunk.js.map