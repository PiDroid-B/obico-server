(function(t){function e(e){for(var a,o,s=e[0],c=e[1],u=e[2],p=0,d=[];p<s.length;p++)o=s[p],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);l&&l(e);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,s=1;s<n.length;s++){var c=n[s];0!==r[c]&&(a=!1)}a&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},r={octoprint_tunnel:0},i=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/static/frontend/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=c;i.push([6,"chunk-vendors"]),n()})({"034a":function(t,e,n){"use strict";var a=n("3b0f"),r=n.n(a);r.a},1807:function(t,e,n){"use strict";n("99af"),n("a15b");var a=n("0b49"),r=n.n(a),i=n("dd61"),o=n.n(i);e["a"]={printShotFeedback:function(t,e){return"/api/v1/printshotfeedbacks/".concat(t,"/?print_id=").concat(e)},print:function(t){return"/api/v1/prints/".concat(t,"/")},prints:function(){return"/api/v1/prints/"},printsBulkDelete:function(){return"/api/v1/prints/bulk_delete/"},printAlertOverwrite:function(t){return"/api/v1/prints/".concat(t,"/alert_overwrite/")},printers:function(){return"/api/v1/printers/"},printer:function(t){return"/api/v1/printers/".concat(t,"/")},printerAction:function(t,e){return"/api/v1/printers/".concat(t).concat(e)},pubPrinter:function(){return"/api/v1p/printer/"},gcodes:function(t,e){return"/api/v1/gcodes/?page=".concat(t,"&page_size=").concat(e||24)},gcode:function(t){return"/api/v1/gcodes/".concat(t,"/")},tunnels:function(){return"/api/v1/tunnels/"},tunnel:function(t){return"/api/v1/tunnels/".concat(t,"/")},tunnelUsage:function(){return"/api/v1/tunnelusage/"},verificationCode:function(){return"/api/v1/onetimeverificationcodes/"},user:function(){return"/api/v1/users/me/"},sharedResources:function(t){return"/api/v1/sharedresources/?"+o()(r()(t),(function(t){return t.join("=")})).join("&")},sharedResource:function(t){return"/api/v1/sharedresources/".concat(t,"/")},printerDiscovery:function(){return"/api/v1/printer_discovery/"},printerControl:function(t){return"/printers/".concat(t,"/control/")},printerWebSocket:function(t){return"/ws/web/".concat(t,"/")},printerSharedWebSocket:function(t){return"/ws/share_token/web/".concat(t,"/")},printerWizard:function(t){return"/printers/wizard/?printerId=".concat(t)}}},"3b0f":function(t,e,n){},"3c33":function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return i}));var a=n("90b9"),r=function(t,e){var n=Object(a["a"])()?localStorage.getItem(t):null,r=n||e;try{return JSON.parse(r)}catch(i){return r}},i=function(t,e){Object(a["a"])()&&localStorage.setItem(t,e)}},"4f95":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"a",(function(){return r})),n.d(e,"d",(function(){return i})),n.d(e,"c",(function(){return o}));var a=function(){return JSON.parse(document.querySelector("#app-platform-json").text)["platform"]},r=function(){return""!==a()},i=function(){return JSON.parse(document.querySelector("#user-json").text)},o=function(){return JSON.parse(document.querySelector("#settings-json").text)}},"502a":function(t,e,n){"use strict";n.d(e,"c",(function(){return p})),n.d(e,"b",(function(){return d})),n.d(e,"d",(function(){return h})),n.d(e,"a",(function(){return f}));n("caad"),n("2532");var a=n("f3f3"),r=n("c1df"),i=n.n(r),o=n("9b02"),s=n.n(o),c=n("49d5"),u=n.n(c),l=function(t){return t?i()(t):null},p=function(t){return t.ended_at=l(t.cancelled_at||t.finished_at),t.started_at=l(t.started_at),t.uploaded_at=l(t.uploaded_at),t.has_alerts=Boolean(t.alerted_at),t},d=function(t){return t.created_at=l(t.created_at),t.updated_at=l(t.updated_at),t.deleted=l(t.deleted),t.filesize=u()(t.num_bytes),t},h=function(t,e){var n={createdAt:function(){return l(this.created_at)},isOffline:function(){return null===s()(this,"status",null)},isPaused:function(){return s()(this,"status.state.flags.paused",!1)},isIdle:function(){return"Operational"===s()(this,"status.state.text","")},isDisconnected:function(){return s()(this,"status.state.flags.closedOrError",!0)},isPrinting:function(){return!this.isDisconnected()&&"Operational"!==s()(this,"status.state.text","")},inTransientState:function(){return!this.hasError()&&s()(this,"status.state.text","").includes("ing")&&!s()(this,"status.state.text","").includes("Printing")},hasError:function(){return s()(this,"status.state.flags.error")||s()(this,"status.state.text","").toLowerCase().includes("error")},alertUnacknowledged:function(){return s()(this,"current_print.alerted_at")&&i()(s()(this,"current_print.alerted_at")).isAfter(i()(s()(this,"current_print.alert_acknowledged_at")||0))}};return e?(s()(e,"status._ts",-1)>s()(t,"status._ts",s()(e,"status._ts",0))&&delete t.status,Object(a["a"])(Object(a["a"])(Object(a["a"])({},e),t),n)):Object(a["a"])(Object(a["a"])({},t),n)},f=function(t,e,n){var a=Math.round(t.length*e),r=n?"p":"fields.normalized_p";return s()(t[a],"".concat(r),0)}},6:function(t,e,n){t.exports=n("6368")},6368:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("a026"),r=n("f357"),i=n("785f"),o=n("b1ef"),s=n("5f5b"),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-container",[n("b-row",{staticClass:"justify-content-center"},[t.user?n("b-col",{staticClass:"mt-3",attrs:{lg:"8"}},[0===t.printersToShow.length?n("div",{staticClass:"wizard-container full-on-mobile"},[n("b-container",[n("b-row",[n("h1",{staticClass:"mx-auto"},[t._v("Welcome To")])]),n("b-row",[n("div",{staticClass:"col-sm-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3"},[n("svg",{staticClass:"logo-img",attrs:{viewBox:"0 0 1965 240"}},[n("use",{attrs:{href:"#svg-navbar-brand"}})])])]),n("b-row",[n("b-col",[n("hr")])],1),t.isEnt&&t.trialDaysLeft>0?n("b-row",[t.trialDaysLeft>=29?n("h3",{staticClass:"mx-auto pt-3 text-center"},[t._v("Your 30-Day "),n("a",{staticClass:"link",attrs:{target:"_blank",href:"https://www.thespaghettidetective.com/docs/upgrade-to-pro/"}},[t._v("Pro Plan")]),t._v(" Free Trial Has Started!")]):n("h3",{staticClass:"mx-auto pt-3 text-center"},[t._v(t._s(t.trialDaysLeft)+" Days Left on Your "),n("a",{staticClass:"link",attrs:{target:"_blank",href:"https://www.thespaghettidetective.com/docs/upgrade-to-pro/"}},[t._v("Pro Plan ")]),t._v("Free Trial!")]),n("div",{staticClass:"mt-3 col-sm-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3"},[n("div",{staticClass:"pb-1"},[n("i",{staticClass:"feature-check fas fa-check-circle"}),n("span",{staticClass:"feature-text"},[t._v("Unlimited Secure Tunneling to your OctoPrint")])]),n("div",{staticClass:"pb-1"},[n("i",{staticClass:"feature-check fas fa-check-circle"}),n("span",{staticClass:"feature-text"},[t._v("Premium 25fps Webcam Streaming")])]),n("div",{staticClass:"pb-1"},[n("i",{staticClass:"feature-check fas fa-check-circle"}),n("span",{staticClass:"feature-text"},[t._v("250 Print Hours Watched by The Detective")])]),n("div",{staticClass:"pb-1"},[n("i",{staticClass:"feature-check fas fa-check-circle"}),n("span",{staticClass:"feature-text"},[t._v("G-Code Remote Upload and Printing")])])])]):t._e(),n("b-row",[n("div",{staticClass:"col-sm-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3 d-flex flex-column align-center justify-content-center"},[n("p",{staticClass:"lead mt-5"},[t._v("OctoPrint has not been linked to your The Spaghetti Detective account.")]),n("div",[n("a",{staticClass:"btn btn-primary btn-block mx-auto btn-lg",attrs:{href:t.wizardUrl}},[t._v("Link OctoPrint Now")])]),n("div",[n("div",{staticClass:"text-muted mx-auto text-center font-weight-light"},[t._v("It's as easy as 1-2-3.")])])])])],1)],1):n("div",[n("div",{staticClass:"text-center"},[n("svg",{attrs:{viewBox:"0 0 1965 240",width:"232",height:"28.34"}},[n("use",{attrs:{href:"#svg-navbar-brand"}})])]),n("div",[n("h4",{staticClass:"text-center my-5"},[t._v("OctoPrint Tunnel Access Authorization")]),n("p",{staticClass:"lead"},[n("span",{staticClass:"font-weight-bold"},[t._v(t._s(t.appName))]),t._v(" is requesting to access the OctoPrint Tunnel.")]),n("p",{staticClass:"text-muted"},[n("a",{attrs:{href:"https://www.thespaghettidetective.com/docs/octoprint-tunneling/",target:"_blank"}},[t._v("OctoPrint Tunnel")]),t._v(" is a secure way provided by The Spaghetti Detective to securely access your OctoPrint. With the OctoPrint Tunnel, you can use "+t._s(t.appName)+" to access your OctoPrint from anywhere.")]),t.user.is_pro?t._e():n("b-alert",{staticClass:"my-3",attrs:{variant:"warning",dismissible:"",show:""}},[n("div",[n("i",{staticClass:"fas fa-exclamation-triangle"}),t._v(" Tunnel usage of a free account is "),n("a",{attrs:{href:"https://www.thespaghettidetective.com/docs/octoprint-tunneling/#why-is-the-limit-on-free-account-only-50mb",target:"_blank"}},[t._v("capped at 50MB per month")]),t._v(". You can "),n("a",{attrs:{href:"http://app.thespaghettidetective.com/ent/pricing/",target:"_blank"}},[t._v("upgrade to The Spaghetti Detective Pro plan for 1 Starbucks a month")]),t._v(" to enjoy unlimited tunnel usage. ")])]),t.user.is_pro&&t.trialDaysLeft>0?n("b-alert",{staticClass:"my-3",attrs:{variant:"warning",dismissible:"",show:""}},[n("div",[n("i",{staticClass:"fas fa-exclamation-triangle"}),t._v(" After the Free trial expires, tunnel data usage will be "),n("a",{attrs:{href:"https://www.thespaghettidetective.com/docs/octoprint-tunneling/#why-is-the-limit-on-free-account-only-50mb",target:"_blank"}},[t._v("capped at 50MB per month")]),t._v(". You can "),n("a",{attrs:{href:"http://app.thespaghettidetective.com/ent/pricing/",target:"_blank"}},[t._v("upgrade to The Spaghetti Detective Pro plan for 1 Starbucks a month")]),t._v(" to continue enjoying unlimited tunnel usage. ")])]):t._e(),n("div",{staticClass:"mt-5"},[n("p",{staticClass:"lead"},[t._v("Tunnel access by "),n("span",{staticClass:"font-weight-bold"},[t._v(t._s(t.appName))]),t._v(" (make sure you trust it): ")]),0===t.printersToShow.length?n("h5",[t._v("You have 0 active printers")]):1===t.printersToShow.length?n("h5",{staticClass:"font-weight-bold"},[t._v(t._s(t.printersToShow[0].name))]):t.printersToShow.length>1?n("select",{directives:[{name:"model",rawName:"v-model",value:t.printerToAuthorize,expression:"printerToAuthorize"}],staticClass:"custom-select",on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.printerToAuthorize=e.target.multiple?n:n[0]}}},[n("option",{attrs:{selected:"",disabled:""},domProps:{value:null}},[t._v("Please select a printer")]),t._l(t.printersToShow,(function(e){return n("option",{key:e.id,domProps:{value:e.id}},[t._v(" "+t._s(e.name)+" ")])}))],2):t._e(),t.printersToShow.length?n("div",{staticClass:"d-flex mt-4 mb-3"},[n("button",{staticClass:"btn btn-primary",staticStyle:{flex:"1"},attrs:{disabled:!t.printerToAuthorize||t.performingAuthRequest},on:{click:t.authorize}},[t.performingAuthRequest?n("b-spinner",{attrs:{small:"",label:"Loading..."}}):n("span",[t._v("Authorize")])],1),n("a",{staticClass:"btn btn-outline-secondary ml-2",staticStyle:{flex:"1"},attrs:{href:"/user_preferences/#/authorized_apps"}},[t._v("Manage Apps")])]):t._e()])],1),n("div",{staticClass:"mt-4"},[n("p",{staticClass:"text-muted small mb-1"},[t._v(" Security notes: ")]),n("ul",{staticClass:"text-muted small pl-4"},[n("li",[t._v("The app can only access the tunnel, not your The Spaghetti Detective account info such as your email address.")]),n("li",[t._v("The access remains valid until explicitly revoked. You can revoke the access by going to Preferences -> Authorized Apps.")])])])])]):n("b-col",{staticClass:"mt-5"},[n("div",[n("b-container",[n("b-row",[n("div",{staticClass:"col-sm-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3"},[n("svg",{staticClass:"logo-img",attrs:{viewBox:"0 0 1965 240"}},[n("use",{attrs:{href:"#svg-navbar-brand"}})])])]),n("b-row",[n("h5",{staticClass:"mx-auto"},[t._v("FOR")])]),n("b-row",[n("h1",{staticClass:"mx-auto"},[t._v(t._s(t.appName))])]),n("b-row",{staticClass:"justify-content-center"},[n("p",{staticClass:"text-muted mt-5"},[t._v("The Spaghetti Detective provides "),n("a",{attrs:{href:"https://www.thespaghettidetective.com/docs/octoprint-tunneling/",target:"_blank"}},[t._v("free and secure remote access to your OctoPrint")]),t._v(".")]),n("p",{staticClass:"text-muted"},[t._v("With The Spaghetti Detective, you can now use "+t._s(t.appName)+" to control and monitor your printer from anywhere.")])]),n("b-row",[n("div",{staticClass:"my-5 w-100"},[n("a",{staticClass:"btn btn-primary btn-block",attrs:{href:t.loginUrl}},[t._v("SIGN IN ")]),n("div",{staticClass:"text-center pt-3 w-100"},[n("div",{staticClass:"font-weight-light text-muted"},[t._v("- OR -")]),n("a",{staticClass:"btn",attrs:{href:t.signupUrl}},[t._v("SIGN UP")])])])])],1)],1)])],1)],1)},u=[],l=(n("99af"),n("4de4"),n("4160"),n("d3b7"),n("ac1f"),n("3ca3"),n("5319"),n("841c"),n("159b"),n("ddb0"),n("2b3d"),n("bc3a")),p=n.n(l),d=n("c1df"),h=n.n(d),f=n("1807"),g=n("502a"),b=n("4f95"),v={name:"NewOctoPrintTunnelPage",components:{},data:function(){return{user:null,printers:[],printerId:null,printerToAuthorize:null,performingAuthRequest:!1}},created:function(){this.user=Object(b["d"])();var t=Object(b["c"])(),e=t.IS_ENT;this.isEnt=!!e,this.printerId=new URLSearchParams(window.location.search).get("printer_id"),this.user&&this.fetchPrinters()},computed:{printersToShow:function(){var t=this;return this.printerId?this.printers.filter((function(e){return e.id==t.printerId})):this.printers},loginUrl:function(){return"/accounts/login/?hide_navbar=true&next=".concat(encodeURIComponent(window.location.pathname+window.location.search))},signupUrl:function(){return"/accounts/signup/?hide_navbar=true&next=".concat(encodeURIComponent(window.location.pathname+window.location.search))},wizardUrl:function(){return"/printers/wizard/?redirectToTunnelCreation=".concat(encodeURIComponent(window.location.pathname+window.location.search))},appName:function(){return new URLSearchParams(window.location.search).get("app")||"Unknown App"},trialDaysLeft:function(){var t,e;return"pro-trial"!==(null===(t=this.user)||void 0===t||null===(e=t.subscription)||void 0===e?void 0:e.plan_id)?-1:h()(this.user.subscription.expired_at).diff(h()(),"days")+1}},methods:{fetchPrinters:function(){var t=this;return p.a.get(f["a"].printers()).then((function(e){e.data.forEach((function(e){t.printers.push(Object(g["d"])(e))})),1==t.printersToShow.length&&(t.printerToAuthorize=t.printersToShow[0].id)}))},authorize:function(){var t=this;this.printersToShow.length&&(this.performingAuthRequest=!0,p.a.post(f["a"].tunnels(),{app_name:this.appName,target_printer_id:this.printerToAuthorize||this.printersToShow[0].id}).then((function(t){var e=t.data.tunnel_endpoint,n=new URLSearchParams(window.location.search).get("success_redirect_url")||"/tunnels/succeeded/";window.location.replace("".concat(n,"?tunnel_endpoint=").concat(e))})).catch((function(e){t.performingAuthRequest=!1,t.$swal.Reject.fire({title:"Oops",text:e.message})})))}}},m=v,_=(n("034a"),n("2877")),w=Object(_["a"])(m,c,u,!1,null,"14a7b30e",null),y=w.exports,O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[!t.isPro&&t.usageFetched?n("div",{staticClass:"floating-panel text-center pb-2"},[t._m(0),n("div",{class:t.usageClass},[t._v(t._s(t.usageMTD)+"/"+t._s(t.humanizedUsageCap))]),t.overage?n("div",[t._v("Your month-to-date tunneling usage is over the Free plan limit. "),n("a",{staticClass:"btn btn-sm btn-primary",attrs:{type:"button",href:"/ent_pub/pricing/"}},[t._v("Get Unlimited Tunneling")])]):t._e()]):t._e(),t.showV1Warning?n("div",[n("center",[n("h1",[t._v("Plugin Version No Longer Supported")]),n("hr"),n("h3",[t._v(" The Spaghetti Detective plugin version is lower than 1.8.4. ")]),n("h3",{staticStyle:{color:"red"}},[t._v(" Please upgrade to the latest plugin version before February 1st, 2022! ")]),n("button",{staticClass:"button",on:{click:t.v1WarningClicked}},[t._v("Got it!")])])],1):t._e(),t.showV1Warning?t._e():n("div",[t.printerId?n("iframe",{staticClass:"tunnel-iframe",attrs:{src:t.iframeUrl()+"#temp"}}):t._e()])])},j=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-muted"},[t._v("Month-To-Date Usage/Free Limit("),n("a",{attrs:{href:"https://www.thespaghettidetective.com/docs/octoprint-tunneling/#is-octoprint-tunneling-free-to-all-users",target:"_blank"}},[t._v("?")]),t._v(")")])}],k=(n("fb6a"),n("6625")),C=n.n(k),x=n("49d5"),S=n.n(x),T=n("90b9"),D={name:"OctoPrintTunnelPage",components:{},props:{isV1:{type:Boolean,required:!0}},data:function(){return{gotV1Warning:!1,bytesMTD:null,usageCap:null,usageFetched:!1,isPro:!0,printerId:null}},computed:{showV1Warning:function(){return this.isV1&&!this.gotV1Warning},usageClass:function(){return{"text-success":this.bytesMTD<.8*this.usageCap,"text-warning":this.bytesMTD>=.8*this.usageCap&&this.bytesMTD<this.usageCap,"text-danger":this.bytesMTD>=this.usageCap}},usageMTD:function(){return S()(this.bytesMTD)},humanizedUsageCap:function(){return S()(this.usageCap)},overage:function(){return this.bytesMTD>=this.usageCap}},created:function(){this.isPro=Object(b["d"])().is_pro,this.printerId=C()(window.location.pathname,"/").slice(-2,-1).pop()},mounted:function(){var t=Object(T["a"])()?localStorage.getItem("skip-tunneling-warning"):null;"yes"!==t&&(this.$swal.Prompt.fire({html:'\n          <h4 class="text-center p-2">\n            <svg class="menu-icon" fill="currentColor" viewBox="0 0 346.26 368.59" style="height: 1.1em;margin-right: 0.75em;">\n              <use href="#svg-octoprint-tunneling" />\n            </svg>\n            OctoPrint Secure Tunnel\n          </h4>\n          <div class="p-1">\n            It may take long time for OctoPrint page to load as it is securely tunneled via The Spaghetti Detective server.\n          </div>\n          <div class="p-1">\n            <a target="_blank" href="https://www.thespaghettidetective.com/docs/octoprint-tunneling/#is-octoprint-tunneling-free-to-all-users">\n            Learn more about OctoPrint Tunneling\'s security and page load speed.\n            <i class="fas fa-external-link-alt"></i>\n          </a>\n        </div>\n        ',input:"checkbox",inputPlaceholder:"Don't show again"},"octoprint-tunnel.warning").then((function(t){t.isConfirmed&&t.value&&Object(T["a"])()&&localStorage.setItem("skip-tunneling-warning","yes")})),window.matchMedia("(pointer:none), (pointer:coarse)")&&document.querySelector(".swal2-popup").classList.add("x150"));var e=this,n=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];p.a.get(f["a"].tunnelUsage()).then((function(n){e.bytesMTD=n.data.total,e.usageCap=n.data.monthly_cap,t&&(e.usageFetched=!0)}))};setInterval(n,15e3),setTimeout((function(){n(!0)}),4e3)},methods:{iframeUrl:function(){return"/octoprint/".concat(this.printerId,"/")},v1WarningClicked:function(){this.gotV1Warning=!0}}},P=D,L=(n("696b"),n("e345"),Object(_["a"])(P,O,j,!1,null,"53a553a4",null)),I=L.exports;Object(o["c"])(),Object(i["a"])(a["default"]),a["default"].use(r["a"]),a["default"].use(s["a"]),document.getElementById("new-octoprint-tunnel-mount")&&new a["default"]({components:{NewOctoPrintTunnelPage:y}}).$mount("#new-octoprint-tunnel-mount"),document.getElementById("octoprint-tunnel-mount")&&new a["default"]({components:{OctoPrintTunnelPage:I}}).$mount("#octoprint-tunnel-mount")},"696b":function(t,e,n){"use strict";var a=n("dc48"),r=n.n(a);r.a},"785f":function(t,e,n){"use strict";n("99af"),n("fb6a"),n("b0c0"),n("d3b7"),n("ac1f"),n("25f0"),n("5319");var a=n("0122"),r=/(?:^|[-_/])(\w)/g,i="root",o="anonymous component",s=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^/]+?|)(\.[^./]*|))(?:[/]*)$/,c=function(t){var e=s.exec(t);return e?e.slice(1):[]},u=function(t,e){var n=c(t)[2];return e&&n.substr(-1*e.length)===e&&(n=n.substr(0,n.length-e.length)),n},l=function(t){if(!t)return o;if(t.$root===t)return i;if(!t.$options)return o;if(t.$options.name)return t.$options.name;if(t.$options._componentTag)return t.$options._componentTag;if(t.$options.__file){var e=t.$options.__file.replace(/^[a-zA-Z]:/,"").replace(/\\/g,"/"),n=u(e,".vue");return n.replace(r,(function(t,e){return e?e.toUpperCase():""}))}return o},p=function t(e,n,r,i,o,s){var c=0;for(var u in n){if(c+=1,c>s)break;"object"==Object(a["a"])(n[u])?o>i&&t(e,n[u],r+"."+u,i+1,o,s):e[r+"."+u]=n[u]}},d=function(t){var e=t.config.errorHandler;t.config.errorHandler=function(n,a,r){if(window.Sentry){var i={},o=a;if(a._original&&(o=a._original),o)try{i.componentName=l(o),p(i,JSON.parse(JSON.stringify(o.$options.propsData)),"props",0,2,10)}catch(s){console.log("Unable to extract metadata from Vue component.")}r&&(i.lifecycleHook=r),setTimeout((function(){window.Sentry.getCurrentHub().withScope((function(t){t.setContext("vue",i),window.Sentry.getCurrentHub().captureException(n)}))}))}"function"===typeof e&&e.call(t,n,a,r),t.util&&t.util.warn("Error in ".concat(r,': "').concat(n.toString(),'"'),a),console.error(n)}};e["a"]=d},"90b9":function(t,e,n){"use strict";function a(){try{var t="__random_key_we_are_not_going_to_use__";return localStorage.setItem(t,t),localStorage.removeItem(t),!0}catch(e){return!1}}n.d(e,"a",(function(){return a}))},ad56:function(t,e,n){},b1ef:function(t,e,n){"use strict";n.d(e,"a",(function(){return N})),n.d(e,"e",(function(){return R})),n.d(e,"b",(function(){return q})),n.d(e,"c",(function(){return F})),n.d(e,"d",(function(){return V}));n("4160"),n("b0c0"),n("d3b7"),n("159b"),n("ddb0");var a,r,i,o,s,c,u,l,p,d,h,f,g,b,v,m,_,w,y,O,j,k,C,x,S,T,D,P,L,I,A,U,$=n("fc11"),z=n("a026"),M=n("90b9"),N={Light:"Light",Dark:"Dark",System:"System"},E=[{name:"primary-hover",values:(a={},Object($["a"])(a,N.Light,"rgb(178 137 248)"),Object($["a"])(a,N.Dark,"rgb(154 106 239)"),a)},{name:"primary",values:(r={},Object($["a"])(r,N.Light,"rgb(153 101 244)"),Object($["a"])(r,N.Dark,"rgb(165 123 238)"),r)},{name:"on-primary",values:(i={},Object($["a"])(i,N.Light,"rgb(255 255 255)"),Object($["a"])(i,N.Dark,"rgb(255 255 255)"),i)},{name:"secondary",values:(o={},Object($["a"])(o,N.Light,"rgb(40 48 58)"),Object($["a"])(o,N.Dark,"rgb(235 235 235)"),o)},{name:"on-secondary",values:(s={},Object($["a"])(s,N.Light,"rgb(235 235 235)"),Object($["a"])(s,N.Dark,"rgb(40 48 58)"),s)},{name:"success",values:(c={},Object($["a"])(c,N.Light,"rgb(92 184 92)"),Object($["a"])(c,N.Dark,"rgb(92 184 92)"),c)},{name:"success-hover",values:(u={},Object($["a"])(u,N.Light,"rgb(76 174 76)"),Object($["a"])(u,N.Dark,"rgb(76 174 76)"),u)},{name:"on-success",values:(l={},Object($["a"])(l,N.Light,"rgb(255 255 255)"),Object($["a"])(l,N.Dark,"rgb(255 255 255)"),l)},{name:"danger",values:(p={},Object($["a"])(p,N.Light,"rgb(217 83 79)"),Object($["a"])(p,N.Dark,"rgb(217 83 79)"),p)},{name:"danger-hover",values:(d={},Object($["a"])(d,N.Light,"rgb(194 65 61)"),Object($["a"])(d,N.Dark,"rgb(194 65 61)"),d)},{name:"on-danger",values:(h={},Object($["a"])(h,N.Light,"rgb(255 255 255)"),Object($["a"])(h,N.Dark,"rgb(255 255 255)"),h)},{name:"warning",values:(f={},Object($["a"])(f,N.Light,"rgb(240 173 78)"),Object($["a"])(f,N.Dark,"rgb(240 173 78)"),f)},{name:"warning-hover",values:(g={},Object($["a"])(g,N.Light,"rgb(219 154 63)"),Object($["a"])(g,N.Dark,"rgb(219 154 63)"),g)},{name:"on-warning",values:(b={},Object($["a"])(b,N.Light,"rgb(255 255 255)"),Object($["a"])(b,N.Dark,"rgb(255 255 255)"),b)},{name:"on-warning-2",values:(v={},Object($["a"])(v,N.Light,"rgb(0 0 0)"),Object($["a"])(v,N.Dark,"rgb(0 0 0)"),v)},{name:"background",values:(m={},Object($["a"])(m,N.Light,"rgb(235 235 235)"),Object($["a"])(m,N.Dark,"rgb(35 49 65)"),m)},{name:"surface-primary",values:(_={},Object($["a"])(_,N.Light,"rgb(255 255 255)"),Object($["a"])(_,N.Dark,"rgb(72 91 113)"),_)},{name:"surface-secondary",values:(w={},Object($["a"])(w,N.Light,"rgb(245 245 245)"),Object($["a"])(w,N.Dark,"rgb(45 62 79)"),w)},{name:"overlay",values:(y={},Object($["a"])(y,N.Light,"rgb(245 245 245 / .8)"),Object($["a"])(y,N.Dark,"rgb(0 0 0 / .8)"),y)},{name:"hover",values:(O={},Object($["a"])(O,N.Light,"rgb(102 102 102 / .075)"),Object($["a"])(O,N.Dark,"rgb(255 255 255 / .075)"),O)},{name:"divider",values:(j={},Object($["a"])(j,N.Light,"rgb(171 182 194)"),Object($["a"])(j,N.Dark,"rgb(106 123 138)"),j)},{name:"text-primary",values:(k={},Object($["a"])(k,N.Light,"rgb(40 48 58)"),Object($["a"])(k,N.Dark,"rgb(235 235 235)"),k)},{name:"text-secondary",values:(C={},Object($["a"])(C,N.Light,"rgb(138 148 162)"),Object($["a"])(C,N.Dark,"rgb(170 172 176)"),C)},{name:"text-help",values:(x={},Object($["a"])(x,N.Light,"rgb(76 155 232)"),Object($["a"])(x,N.Dark,"rgb(76 155 232)"),x)},{name:"input-background",values:(S={},Object($["a"])(S,N.Light,"rgb(226 232 237)"),Object($["a"])(S,N.Dark,"rgb(66 86 107)"),S)},{name:"input-placeholder",values:(T={},Object($["a"])(T,N.Light,"rgb(40 48 58 / .5)"),Object($["a"])(T,N.Dark,"rgb(235 235 235 / .5)"),T)},{name:"table-accent",values:(D={},Object($["a"])(D,N.Light,"rgb(227 227 227)"),Object($["a"])(D,N.Dark,"rgb(40 56 72)"),D)},{name:"icon-tunneling-1",values:(P={},Object($["a"])(P,N.Light,"rgb(78 93 108)"),Object($["a"])(P,N.Dark,"rgb(234 234 234)"),P)},{name:"icon-tunneling-2",values:(L={},Object($["a"])(L,N.Light,"rgb(29 41 53)"),Object($["a"])(L,N.Dark,"rgb(205 205 205)"),L)}],W=[{name:"logo-bg",values:(I={},Object($["a"])(I,N.Light,'url("/static/img/logo-bg/logo-bg_light.svg")'),Object($["a"])(I,N.Dark,'url("/static/img/logo-bg/logo-bg_dark.svg")'),I)},{name:"tail-spin",values:(A={},Object($["a"])(A,N.Light,'url("/static/img/tail-spin/tail-spin_light.svg")'),Object($["a"])(A,N.Dark,'url("/static/img/tail-spin/tail-spin_dark.svg")'),A)}],B=[{name:"top-nav",values:(U={},Object($["a"])(U,N.Light,"0px 2px 10px rgb(0 0 0 / .1)"),Object($["a"])(U,N.Dark,"0px 2px 10px rgb(0 0 0 / .3)"),U)}],R=z["default"].observable({value:(Object(M["a"])()?localStorage.getItem("colorTheme"):N.Dark)||N.Dark});function q(){return R.value===N.System?"not all"!==window.matchMedia("(prefers-color-scheme)").media&&window.matchMedia("(prefers-color-scheme: light)").matches?N.Light:N.Dark:R.value}function F(){var t=q();E.forEach((function(e){if(document.documentElement.style.setProperty("--color-".concat(e.name),e.values[t]),"surface-secondary"===e.name){var n=document.querySelector('meta[name="theme-color"]');n.content=e.values[t]}})),W.forEach((function(e){document.documentElement.style.setProperty("--url-".concat(e.name),e.values[t])})),B.forEach((function(e){document.documentElement.style.setProperty("--shadow-".concat(e.name),e.values[t])}))}function V(t){R.value=t,Object(M["a"])()&&localStorage.setItem("colorTheme",R.value),F()}},dc48:function(t,e,n){},e345:function(t,e,n){"use strict";var a=n("ad56"),r=n.n(a);r.a},f357:function(t,e,n){"use strict";var a=n("f3f3"),r=n("a026"),i=n("5886"),o=n("3c33"),s=function(t,e,n){var i=document.createElement("div"),o=new r["default"]({render:function(n){return n(t,{props:e})}}).$mount(i);return r["default"].swal(Object(a["a"])(Object(a["a"])({},n),{},{customClass:{container:"dark-backdrop"},html:'<div id="replace-here">Placeholder</div>',onBeforeOpen:function(t){t.querySelector("#replace-here").replaceWith(o.$el)},onDestroy:function(){o.$destroy(),i.remove()}}))},c=function(t,e,n){return r["default"].swal(Object(a["a"])(Object(a["a"])({},n),{},{customClass:{container:"dark-backdrop"},html:'<div id="replace-here">Placeholder</div>',onBeforeOpen:function(e){e.querySelector("#replace-here").replaceWith(t)}}))},u=function(t,e){t.use(i["a"],e);var n=t.swal.mixin({title:"Are you sure?",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"No",customClass:{container:"dark-backdrop"}}),r=t.swal.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:5e3}),u=t.swal.mixin({icon:"error",customClass:{container:"dark-backdrop"}}),l=t.swal.mixin({customClass:{container:"dark-backdrop"}}),p=function(e,n){if(!Object(o["a"])(n,!1)){var r=Object(a["a"])(Object(a["a"])({},e),{},{position:"top-end",confirmButtonText:"Gotcha! Don't show this again."});return t.swal(r).then((function(t){t.value&&(Object(o["b"])(n,!0),console.log(t))}))}};t.prototype.$swal["openModalWithComponent"]=s,t.prototype.$swal["openModalWithElement"]=c,t.prototype.$swal["Confirm"]=n,t.prototype.$swal["Toast"]=r,t.prototype.$swal["DismissableToast"]=p,t.prototype.$swal["Reject"]=u,t.prototype.$swal["Prompt"]=l};e["a"]={install:u}}});
//# sourceMappingURL=octoprint_tunnel.js.map