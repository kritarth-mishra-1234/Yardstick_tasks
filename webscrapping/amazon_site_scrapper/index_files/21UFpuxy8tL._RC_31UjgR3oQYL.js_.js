'use strict';mix_d("SBXGwentCards__lifestyle-image-v4-creative-desktop:lifestyle-image-v4-creative-desktop__A-KludIB/es3@index","exports tslib @c/metrics @c/scoped-dom @c/browser-operations @c/aui-bottom-sheet @c/aui-untrusted-ajax @c/dom".split(" "),function(b,g,p,I,J,K,L,M){function v(a){return a&&"object"===typeof a&&"default"in a?a:{"default":a}}var N=v(I),O=v(J),P=v(K),Q=v(L),z=v(M),D=function(a){return"adFeedbackBottomSheet_"+a},A=function(a,c){if(a&&"true"===a.toLowerCase())return 216;
a=c.adCreativeMetaData.adCreativeDetails;return 2>(a?a.length:0)?467:340},w=function(a,c){return a.querySelector("[class*="+c+"]")},E=function(a,c){return"."+a+" ."+c.replace(" ",".")},F=function(a,c,d){a=JSON.parse(a);a.adCreativeMetaData=c.adCreativeMetaData;a.feedbackFormContainerId=d;return encodeURI(JSON.stringify(a))},R=function(a,c,d,e){return g.__awaiter(void 0,void 0,void 0,function(){var f,h,m,n,k,t;return g.__generator(this,function(u){f=D(a);h=E(c.className,(null===(t=w(c,"ad-feedback-bottom-sheet-container"))||
void 0===t?void 0:t.className)||"");m=c.dataset.closeButtonAriaText;n={height:A(e,d),closeType:"icon",closeMessage:m};try{return k=P["default"].create(f,h,n),[2,k]}catch(q){throw p.count("adfeedback:cards:clientMobile:bottomSheetCreation:failure",1),Error("BottomSheet Creation Failed : "+q);}})})},S=function(a){a.on("afterHide",function(){return g.__awaiter(void 0,void 0,void 0,function(){return g.__generator(this,function(c){switch(c.label){case 0:return[4,a.render(function(d){return g.__awaiter(void 0,
void 0,void 0,function(){return g.__generator(this,function(e){for(;d.firstChild;)d.removeChild(d.firstChild);return[2]})})})];case 1:return c.sent(),[2]}})})})},V=function(a,c,d,e,f,h,m){var n="rtl"===document.getElementsByTagName("html")[0].dir?"ad-feedback-loading-spinnner-rtl":"ad-feedback-loading-spinnner";var k=w(z["default"].cardRoot,n);a.on("beforeShow",function(){return g.__awaiter(void 0,void 0,void 0,function(){var t,u,q;return g.__generator(this,function(x){switch(x.label){case 0:return t=
e(),u=A(m,t),[4,a.changeHeight(u)];case 1:return x.sent(),[4,a.render(function(l){return g.__awaiter(void 0,void 0,void 0,function(){return g.__generator(this,function(r){for(;l.firstChild;)l.removeChild(l.firstChild);return[2]})})})];case 2:return x.sent(),q=T(c,d,e),[4,a.render(function(l){var r="160px",y=e().adCreativeMetaData.adCreativeDetails;y&&2>y.length&&(r="210px");m&&"true"===m.toLowerCase()&&(r="90px");k.style.marginTop=r;l.innerHTML="";r=z["default"].createElement("div");U(k,r,f,q,h);
l.appendChild(r)})];case 3:return x.sent(),[2]}})})})},T=function(a,c,d){d=d();var e=d.adCreativeMetaData.adCreativeDetails;null===e||void 0===e?void 0:e.sort(function(f,h){return f.adCreativeIndex<h.adCreativeIndex?-1:1});return F(c,d,a)},U=function(a,c,d,e,f){c.appendChild(a);"function"==typeof p.uet&&p.uet("bb","adfeedback:cards:clientMobile:fetchFormContent:time",{wb:1});Q["default"].post("/af/multi-creative/feedback-form",{accepts:"application/json",contentType:"application/json",additionalHeaders:{"Accept-Language":""===
d?"en-US":d}},{pl:e,deviceType:"mobile"}).then(function(h){return g.__awaiter(void 0,void 0,void 0,function(){var m,n,k;return g.__generator(this,function(t){"function"==typeof p.uet&&p.uet("be","adfeedback:cards:clientMobile:fetchFormContent:time",{wb:1});p.count("adfeedback:cards:clientMobile:fetchFormContent:success",1);m=z["default"].createElement("div");m.innerHTML=String(h.responseBody);for(n=0;n<m.children.length;++n)k=m.children[n],"SCRIPT"===k.tagName?B("script",k,c):"LINK"===k.tagName?B("link",
k,c):B("div",k,c);c.removeChild(a);return[2]})})}).catch(function(){"function"==typeof p.uet&&p.uet("be","adfeedback:cards:clientMobile:fetchFormContent:time",{wb:1});p.count("adfeedback:cards:clientMobile:fetchFormContent:failure",1);c.innerHTML=f});"function"==typeof p.uex&&p.uex("ld","adfeedback:cards:clientMobile:fetchFormContent:time",{wb:1})},B=function(a,c,d){var e=z["default"].createElement(a);e.innerHTML=c.innerHTML;c.getAttributeNames().forEach(function(f){e.setAttribute(f,c.getAttribute(f)||
"")});d.appendChild(e)},G={},X=function(a,c){return g.__awaiter(void 0,void 0,void 0,function(){var d,e,f,h,m,n,k,t,u,q;return g.__generator(this,function(x){d=w(a,"ad-feedback-primary-link");e=c();f=e.adFeedbackLabelId;h=O["default"].setup();m="show-sheet"+f;n=e.adCreativeMetaData.adCreativeDetails;k=a.dataset;t=k.isDsaEnabled;u=k.weblabTreatment;q=t;"undefined"===q&&(q=n&&0<n.length?n[0].selectionSignals?"true":"false":"false");"true"===q&&"T1"!==u&&(q="false");h.attach(m,d);h.define(m,"click",
function(){return g.__awaiter(void 0,void 0,void 0,function(){var l;return g.__generator(this,function(r){switch(r.label){case 0:return(l=G[f])?[3,2]:[4,R(f,a,e,q)];case 1:var y=l=r.sent(),W=q,H=w(a,"ad-feedback-bottom-sheet-container"),C=a.dataset;V(y,H?H.id:"",C.adFeedbackPayload,c,C.currentLocale,C.formLoadErrorText,W);S(y);G[f]=l;r.label=2;case 2:return l.show(),[2]}})})});try{d.addEventListener("keydown",function(l){if(" "===l.key||"Enter"===l.key)l.preventDefault(),d.click()})}catch(l){console.log("Couldnt add keydown event listner")}return[2]})})};
b.PastActivity=void 0;(function(a){a[a.NONE=0]="NONE";a[a.STORE_ONLY=1]="STORE_ONLY";a[a.AMAZON_ONLY=2]="AMAZON_ONLY";a[a.AMAZON_AND_OTHER=3]="AMAZON_AND_OTHER"})(b.PastActivity||(b.PastActivity={}));b.AD_FEEDBACK_MAIN_COMPONENT=function(a){return"adFeedbackMainComponent_"+a};b.BB="bb";b.BE="be";b.BOTTOM_SHEET_CREATION_FAILURE="adfeedback:cards:clientMobile:bottomSheetCreation:failure";b.BOTTOM_SHEET_HEIGHT_FORM=467;b.BOTTOM_SHEET_HEIGHT_SELECTION_COMPONENT=340;b.BOTTOM_SHEET_NAME=D;b.DEFAULT_LOCALE=
"en-US";b.DEVICE_MOBILE="mobile";b.DSA_BOTTOM_SHEET_HEIGHT=216;b.ENABLE_AD_FEEDBACK_FAILURE="adfeedback:cards:clientMobile:enableAdFeedback:failure";b.FALSE_STRING="false";b.FETCH_FORM_CONTENT_FAILURE="adfeedback:cards:clientMobile:fetchFormContent:failure";b.FETCH_FORM_CONTENT_SUCCESS="adfeedback:cards:clientMobile:fetchFormContent:success";b.FETCH_FORM_CONTENT_TIME="adfeedback:cards:clientMobile:fetchFormContent:time";b.LD="ld";b.TEST_AD_FEEDBACK_LABEL_ID="adFeedbackLabelId_dummy";b.TEST_AD_FEEDBACK_MAIN_COMPONENT_CLASS_NAME=
"mainComponentClassName";b.TEST_BOTTOM_SHEET_CONTAINER_CLASS_NAME="bottomSheetContainerClassName";b.TEST_BOTTOM_SHEET_CONTAINER_ID="bottomSheetContainerId";b.TEST_BOTTOM_SHEET_ID="bottomSheetId";b.TEST_CLOSE_BUTTON_ARIA_TEXT="closeButtonAriaText";b.TEST_FORM_HEADER="formHeader";b.TEST_FORM_LOAD_ERROR_TEXT="formLoadErrorText";b.TEST_FRENCH_LOCALE="fr-FR";b.TEST_MODAL_CONTAINER_CLASS_NAME="modalContainerClassName";b.TEST_MODAL_ID="modalId";b.TEST_PAYLOAD_STRING="payloadString";b.TRUE_STRING="true";
b.UNDEFINED_STRING="undefined";b.WEBLAB_TREATMENT_T1="T1";b.enableAdFeedback=function(a){return g.__awaiter(void 0,void 0,void 0,function(){var c,d,e,f;return g.__generator(this,function(h){switch(h.label){case 0:return h.trys.push([0,2,,3]),c=a().adFeedbackLabelId,d=N["default"].cardRoot.getElementsByClassName("adFeedbackMainComponent_"+c)[0],e=d.dataset.isSponsoredLabelActive,"false"===(e||"false").toLowerCase()?[2]:[4,X(d,a)];case 1:return h.sent(),[3,3];case 2:throw f=h.sent(),p.count("adfeedback:cards:clientMobile:enableAdFeedback:failure",
1),Error("Failed to call enableAdFeedback for mobile client: "+f);case 3:return[2]}})})};b.generateAdFeedbackFormRenderingPayload=function(){var a=[],c=a.push,d=[];d.push({url:"xyz",width:30,height:40});c.call(a,{asin:"asin_dummy",campaignId:"campaignId_dummy",merchantCustomerID:"merchantCustomerID_dummy",merchantName:"merchantName_dummy",offerUrl:"",priceInfo:{amount:"10",currencyCode:"USD"},sku:"",title:"adCreativeTitle",adCreativeId:"adCreativeId_dummy",adId:"adId_dummy",adNetwork:"cs",adCreativeIndex:0,
adCreativeImage:{lowResolutionImage:{url:"abc",width:10,height:20},highResolutionImages:d},searchAlias:"searchAlias_dummy"});return{adCreativeMetaData:{adCreativeDetails:a},adFeedbackLabelId:"adFeedbackLabelId_dummy"}};b.getBottomSheetContainerSelector=E;b.getHtmlSubComponentByMixClass=w;b.getPayloadString=F;b.getSheetHeight=A});

/* ******** */
'use strict';mix_d("SBXGwentCards__lifestyle-image-v4-creative-desktop:lifestyle-image-v4-creative-desktop__A-KludIB/es3@index2","exports tslib @c/metrics @c/scoped-dom @c/browser-operations @c/aui-modal @c/aui-untrusted-ajax @c/dom".split(" "),function(b,p,q,K,L,M,N,O){function z(a){return a&&"object"===typeof a&&"default"in a?a:{"default":a}}var P=z(K),C=z(L),Q=z(M),R=z(N),w=z(O),D=function(a){return"adFeedbackModal_"+a},E=function(a){return"adFeedbackMainComponent_"+a},F=function(){return{amount:"10",
currencyCode:"USD"}},G=function(){var a=[];a.push({url:"xyz",width:30,height:40});return{lowResolutionImage:{url:"abc",width:10,height:20},highResolutionImages:a}},v=function(a,c){return a.querySelector("[class*="+c+"]")},H=function(a,c){return"."+a+" ."+c.replace(" ",".")},I=function(a,c,d){a=JSON.parse(a);a.adCreativeMetaData=c.adCreativeMetaData;a.feedbackFormContainerId=d;return encodeURI(JSON.stringify(a))},S=function(a,c,d){return p.__awaiter(void 0,void 0,void 0,function(){var e,f,g,h,n,l,
r;return p.__generator(this,function(t){e=D(a);f=H(c.className,(null===(r=v(c,"ad-feedback-modal-container"))||void 0===r?void 0:r.className)||"");h=(g=d().adCreativeMetaData.adCreativeDetails)?g.length:0;n={a11yOpenMessage:"",width:Math.max(560,125*h+130)};try{return l=Q["default"].create(e,f,n),[2,l]}catch(A){throw q.count("adfeedback:cards:clientDesktop:modalCreation:failure",1),Error("Modal Creation Failed : "+A);}})})},V=function(a,c,d,e,f,g,h){var n="rtl"===document.getElementsByTagName("html")[0].dir?
"ad-feedback-loading-spinnner-rtl":"ad-feedback-loading-spinnner";var l=v(w["default"].cardRoot,n);a.on("beforeShow",function(){return p.__awaiter(void 0,void 0,void 0,function(){var r,t;return p.__generator(this,function(A){switch(A.label){case 0:return r=T(a,c,d),[4,a.render(function(m){var u="250px",k=d().adCreativeMetaData.adCreativeDetails;k&&2>k.length&&(u="150px");l.style.marginTop=u;m.innerHTML="";u=m.appendChild;k=document.getElementsByTagName("html")[0].dir;var x=w["default"].createElement("div"),
y=w["default"].createElement("div");x.innerHTML=f;"rtl"===k?(x.setAttribute("style",'box-sizing: border-box; color: rgb(15, 17, 17); font-family: "Amazon Ember", Arial, sans-serif; font-size: 16px; font-weight: 700; line-height: 24px; margin-bottom: 0px; margin-left: 28px; margin-right: 0px; margin-top: 0px; min-height: 56px; padding-bottom: 16px; padding-left: 0px; padding-right: 25px; padding-top: 16px; text-align: right; text-rendering: optimizelegibility; visibility: visible;'),y.setAttribute("style",
'background-attachment: scroll; background-clip: border-box; background-color: rgb(240, 242, 242); background-image: linear-gradient(to left, #EFEFEF 66.72%, #FFFFFF); background-origin: padding-box; background-position: 0% 0%; background-position-x: 0%; background-position-y: 0%; background-repeat: repeat; background-size: auto; border-bottom-color: rgb(213, 217, 217); border-bottom-left-radius: 0px; border-bottom-right-radius: 0px; border-top-left-radius: 8px; border-top-right-radius: 8px; box-sizing: border-box; color: rgb(15, 17, 17); display: block; font-family: "Amazon Ember", Arial, sans-serif; font-size: 14px; line-height: 20px; margin-bottom: 0px; margin-left: 0px; margin-right: 0px; margin-top: 0px; padding-bottom: 0px; padding-left: 24px; padding-right: 24px; padding-top: 0px; position: relative; text-align: right; visibility: visible; z-index: 10;')):
(x.setAttribute("style",'box-sizing: border-box; color: rgb(15, 17, 17); font-family: "Amazon Ember", Arial, sans-serif; font-size: 16px; font-weight: 700; line-height: 24px; margin-bottom: 0px; margin-left: 0px; margin-right: 28px; margin-top: 0px; min-height: 56px; padding-bottom: 16px; padding-left: 25px; padding-right: 0px; padding-top: 16px; text-align: left; text-rendering: optimizelegibility; visibility: visible;'),y.setAttribute("style",'background-attachment: scroll; background-clip: border-box; background-color: rgb(240, 242, 242); background-image: linear-gradient(to right, #EFEFEF 66.72%, #FFFFFF); background-origin: padding-box; background-position: 0% 0%; background-position-x: 0%; background-position-y: 0%; background-repeat: repeat; background-size: auto; border-bottom-color: rgb(213, 217, 217); border-bottom-left-radius: 0px; border-bottom-right-radius: 0px; border-top-left-radius: 8px; border-top-right-radius: 8px; box-sizing: border-box; color: rgb(15, 17, 17); display: block; font-family: "Amazon Ember", Arial, sans-serif; font-size: 14px; line-height: 20px; margin-bottom: 0px; margin-left: 0px; margin-right: 0px; margin-top: 0px; padding-bottom: 0px; padding-left: 24px; padding-right: 24px; padding-top: 0px; position: relative; text-align: left; visibility: visible; z-index: 10;'));
y.appendChild(x);u.call(m,y);u=document.getElementsByTagName("html")[0].dir;k=w["default"].createElement("div");"rtl"===u?k.setAttribute("style","padding-bottom: 16px; padding-right: 50px ; padding-top: 16px; justify-content: center; align-items: center;"):k.setAttribute("style","padding-bottom: 16px; padding-left: 50px ; padding-top: 16px; justify-content: center; align-items: center;");U(l,k,e,r,g);m.appendChild(k)})];case 1:return A.sent(),(t=document.querySelector(".a-button-close"))&&t.setAttribute("aria-label",
h),[2]}})})})},T=function(a,c,d){d=d();var e=d.adCreativeMetaData.adCreativeDetails;null===e||void 0===e?void 0:e.sort(function(f,g){return f.adCreativeIndex<g.adCreativeIndex?-1:1});return I(c,d,a.id)},U=function(a,c,d,e,f){c.appendChild(a);"function"==typeof q.uet&&q.uet("bb","adfeedback:cards:clientDesktop:fetchFormContent:time",{wb:1});R["default"].post("/af/multi-creative/feedback-form",{accepts:"application/json",contentType:"application/json",additionalHeaders:{"Accept-Language":""===d?"en-US":
d}},{pl:e,deviceType:"desktop"}).then(function(g){return p.__awaiter(void 0,void 0,void 0,function(){var h,n,l;return p.__generator(this,function(r){"function"==typeof q.uet&&q.uet("be","adfeedback:cards:clientDesktop:fetchFormContent:time",{wb:1});q.count("adfeedback:cards:clientDesktop:fetchFormContent:success",1);h=w["default"].createElement("div");h.innerHTML=String(g.responseBody);for(n=0;n<h.children.length;++n)l=h.children[n],"SCRIPT"===l.tagName?B("script",l,c):"LINK"===l.tagName?B("link",
l,c):B("div",l,c);c.removeChild(a);return[2]})})}).catch(function(){"function"==typeof q.uet&&q.uet("be","adfeedback:cards:clientDesktop:fetchFormContent:time",{wb:1});q.count("adfeedback:cards:clientDesktop:fetchFormContent:failure",1);c.innerHTML=f});"function"==typeof q.uex&&q.uex("ld","adfeedback:cards:clientDesktop:fetchFormContent:time",{wb:1})},B=function(a,c,d){var e=w["default"].createElement(a);e.innerHTML=c.innerHTML;c.getAttributeNames().forEach(function(f){e.setAttribute(f,c.getAttribute(f)||
"")});d.appendChild(e)},J={},W=function(a,c){return p.__awaiter(void 0,void 0,void 0,function(){var d,e,f,g,h,n,l,r,t;return p.__generator(this,function(A){d=v(a,"ad-feedback-primary-link");e=c().adFeedbackLabelId;f=C["default"].setup();g="open-modal"+e;h=c().adCreativeMetaData.adCreativeDetails;n=a.dataset;l=n.isDsaEnabled;r=n.weblabTreatment;t=String(l);"undefined"===t&&(t=h&&0<h.length?h[0].selectionSignals?"true":"false":"false");"true"===t&&"T1"!==r&&(t="false");f.attach(g,d);f.define(g,"click",
function(){return p.__awaiter(void 0,void 0,void 0,function(){var m;return p.__generator(this,function(u){switch(u.label){case 0:return(m=J[e])?[3,2]:[4,S(e,a,c)];case 1:m=u.sent();var k=a.dataset,x=k.formHeaderText,y=k.dsaFormHeaderText;V(m,k.adFeedbackPayload,c,k.currentLocale,"true"===t?y:x,k.formLoadErrorText,k.closeButtonAriaText);J[e]=m;u.label=2;case 2:return m.show(),[2]}})})});try{d.addEventListener("keydown",function(m){if(" "===m.key||"Enter"===m.key)m.preventDefault(),d.click()})}catch(m){console.log("Couldnt add keydown event listner")}return[2]})})},
X=function(a,c){var d=C["default"].setup(),e="mouse-enter"+c;c="mouse-leave"+c;var f=v(a,"ad-feedback-primary-link"),g=v(a,"ad-feedback-text-desktop"),h=v(a,"ad-feedback-sprite");d.attach(e,f);d.define(e,"mouseenter",function(){h.style.backgroundPosition="0px -12px";g.style.color="#111111"});d.attach(c,f);d.define(c,"mouseleave",function(){h.style.backgroundPosition="0px 0px";g.style.color="#555"})};b.PastActivity=void 0;(function(a){a[a.NONE=0]="NONE";a[a.STORE_ONLY=1]="STORE_ONLY";a[a.AMAZON_ONLY=
2]="AMAZON_ONLY";a[a.AMAZON_AND_OTHER=3]="AMAZON_AND_OTHER"})(b.PastActivity||(b.PastActivity={}));b.AD_FEEDBACK_MAIN_COMPONENT=E;b.AD_FEEDBACK_SPRITE_DEFAULT_POSITION="0px 0px";b.AD_FEEDBACK_SPRITE_ON_HOVER_POSITION="0px -12px";b.AD_FEEDBACK_TEXT_DEFAULT_COLOR="#555";b.AD_FEEDBACK_TEXT_ON_HOVER_COLOR="#111111";b.BB="bb";b.BE="be";b.DEFAULT_LOCALE="en-US";b.DEVICE_DESKTOP="desktop";b.DEVICE_TABLET="tablet";b.DSA_MODAL_HEIGHT_MULTI_CREATIVE=810;b.DSA_MODAL_HEIGHT_SINGLE_CREATIVE=605;b.ENABLE_AD_FEEDBACK_FAILURE=
"adfeedback:cards:clientDesktop:enableAdFeedback:failure";b.FALSE_STRING="false";b.FETCH_FORM_CONTENT_FAILURE="adfeedback:cards:clientDesktop:fetchFormContent:failure";b.FETCH_FORM_CONTENT_SUCCESS="adfeedback:cards:clientDesktop:fetchFormContent:success";b.FETCH_FORM_CONTENT_TIME="adfeedback:cards:clientDesktop:fetchFormContent:time";b.LD="ld";b.MODAL_CONTENT_CONTAINER="padding-bottom: 16px; padding-left: 50px ; padding-top: 16px; justify-content: center; align-items: center;";b.MODAL_CONTENT_CONTAINER_RTL=
"padding-bottom: 16px; padding-right: 50px ; padding-top: 16px; justify-content: center; align-items: center;";b.MODAL_CREATION_FAILURE="adfeedback:cards:clientDesktop:modalCreation:failure";b.MODAL_HEADER_COMPONENT='background-attachment: scroll; background-clip: border-box; background-color: rgb(240, 242, 242); background-image: linear-gradient(to right, #EFEFEF 66.72%, #FFFFFF); background-origin: padding-box; background-position: 0% 0%; background-position-x: 0%; background-position-y: 0%; background-repeat: repeat; background-size: auto; border-bottom-color: rgb(213, 217, 217); border-bottom-left-radius: 0px; border-bottom-right-radius: 0px; border-top-left-radius: 8px; border-top-right-radius: 8px; box-sizing: border-box; color: rgb(15, 17, 17); display: block; font-family: "Amazon Ember", Arial, sans-serif; font-size: 14px; line-height: 20px; margin-bottom: 0px; margin-left: 0px; margin-right: 0px; margin-top: 0px; padding-bottom: 0px; padding-left: 24px; padding-right: 24px; padding-top: 0px; position: relative; text-align: left; visibility: visible; z-index: 10;';
b.MODAL_HEADER_COMPONENT_RTL='background-attachment: scroll; background-clip: border-box; background-color: rgb(240, 242, 242); background-image: linear-gradient(to left, #EFEFEF 66.72%, #FFFFFF); background-origin: padding-box; background-position: 0% 0%; background-position-x: 0%; background-position-y: 0%; background-repeat: repeat; background-size: auto; border-bottom-color: rgb(213, 217, 217); border-bottom-left-radius: 0px; border-bottom-right-radius: 0px; border-top-left-radius: 8px; border-top-right-radius: 8px; box-sizing: border-box; color: rgb(15, 17, 17); display: block; font-family: "Amazon Ember", Arial, sans-serif; font-size: 14px; line-height: 20px; margin-bottom: 0px; margin-left: 0px; margin-right: 0px; margin-top: 0px; padding-bottom: 0px; padding-left: 24px; padding-right: 24px; padding-top: 0px; position: relative; text-align: right; visibility: visible; z-index: 10;';
b.MODAL_HEADER_TEXT='box-sizing: border-box; color: rgb(15, 17, 17); font-family: "Amazon Ember", Arial, sans-serif; font-size: 16px; font-weight: 700; line-height: 24px; margin-bottom: 0px; margin-left: 0px; margin-right: 28px; margin-top: 0px; min-height: 56px; padding-bottom: 16px; padding-left: 25px; padding-right: 0px; padding-top: 16px; text-align: left; text-rendering: optimizelegibility; visibility: visible;';b.MODAL_HEADER_TEXT_RTL='box-sizing: border-box; color: rgb(15, 17, 17); font-family: "Amazon Ember", Arial, sans-serif; font-size: 16px; font-weight: 700; line-height: 24px; margin-bottom: 0px; margin-left: 28px; margin-right: 0px; margin-top: 0px; min-height: 56px; padding-bottom: 16px; padding-left: 0px; padding-right: 25px; padding-top: 16px; text-align: right; text-rendering: optimizelegibility; visibility: visible;';
b.MODAL_HEIGHT_MULTI_CREATIVE=645;b.MODAL_HEIGHT_SINGLE_CREATIVE=430;b.MODAL_NAME=D;b.MODAL_WIDTH=560;b.TABLET_MODAL_HEIGHT_MULTI_CREATIVE=775;b.TABLET_MODAL_HEIGHT_SINGLE_CREATIVE=545;b.TEST_AD_FEEDBACK_LABEL_ID="adFeedbackLabelId_dummy";b.TEST_AD_FEEDBACK_MAIN_COMPONENT_CLASS_NAME="mainComponentClassName";b.TEST_BOTTOM_SHEET_CONTAINER_CLASS_NAME="bottomSheetContainerClassName";b.TEST_BOTTOM_SHEET_CONTAINER_ID="bottomSheetContainerId";b.TEST_BOTTOM_SHEET_ID="bottomSheetId";b.TEST_CLOSE_BUTTON_ARIA_TEXT=
"closeButtonAriaText";b.TEST_FORM_HEADER="formHeader";b.TEST_FORM_LOAD_ERROR_TEXT="formLoadErrorText";b.TEST_FRENCH_LOCALE="fr-FR";b.TEST_MODAL_CONTAINER_CLASS_NAME="modalContainerClassName";b.TEST_MODAL_ID="modalId";b.TEST_PAYLOAD_STRING="payloadString";b.TRUE_STRING="true";b.UNDEFINED_STRING="undefined";b.WEBLAB_TREATMENT_T1="T1";b.enableAdFeedback=function(a){return p.__awaiter(void 0,void 0,void 0,function(){var c,d,e,f;return p.__generator(this,function(g){switch(g.label){case 0:return g.trys.push([0,
3,,4]),c=a(),d=P["default"].cardRoot.getElementsByClassName(E(c.adFeedbackLabelId))[0],e=d.dataset.isSponsoredLabelActive,"false"===(e||"false").toLowerCase()?[2]:[4,X(d,c.adFeedbackLabelId)];case 1:return g.sent(),[4,W(d,a)];case 2:return g.sent(),[3,4];case 3:throw f=g.sent(),q.count("adfeedback:cards:clientDesktop:enableAdFeedback:failure",1),Error("Failed to call enableAdFeedback for desktop client : "+f);case 4:return[2]}})})};b.generateAdFeedbackFormRenderingPayload=function(){var a=[];a.push({asin:"asin_dummy",
campaignId:"campaignId_dummy",merchantCustomerID:"merchantCustomerID_dummy",merchantName:"merchantName_dummy",offerUrl:"",priceInfo:F(),sku:"",title:"adCreativeTitle",adCreativeId:"adCreativeId_dummy",adId:"adId_dummy",adNetwork:"cs",adCreativeIndex:0,adCreativeImage:G(),searchAlias:"searchAlias_dummy"});a.push({asin:"asin_dummyy",campaignId:"campaignId_dummyy",merchantCustomerID:"merchantCustomerID_dummyy",merchantName:"merchantName_dummyy",offerUrl:"",priceInfo:F(),sku:"",title:"adCreativeTitle",
adCreativeId:"adCreativeId_dummyy",adId:"adId_dummyy",adNetwork:"cs",adCreativeIndex:1,adCreativeImage:G(),searchAlias:"searchAlias_dummyy"});return{adCreativeMetaData:{adCreativeDetails:a},adFeedbackLabelId:"adFeedbackLabelId_dummy"}};b.getDeviceType=function(a){return a.dataset.deviceType||"desktop"};b.getHtmlSubComponentByMixClass=v;b.getModalContainerSelector=H;b.getPayloadString=I});

/* ******** */