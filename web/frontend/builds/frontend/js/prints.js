(function(t){function e(e){for(var i,s,o=e[0],l=e[1],c=e[2],u=0,p=[];u<o.length;u++)s=o[u],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&p.push(r[s][0]),r[s]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);d&&d(e);while(p.length)p.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],i=!0,o=1;o<n.length;o++){var l=n[o];0!==r[l]&&(i=!1)}i&&(a.splice(e--,1),t=s(s.s=n[0]))}return t}var i={},r={prints:0},a=[];function s(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=i,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(n,i,function(e){return t[e]}.bind(null,i));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/static/frontend/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var d=l;a.push([5,"chunk-vendors"]),n()})({0:function(t,e){},"0d29":function(t,e,n){t.exports=n.p+"img/detective-hour-inverse.png"},1807:function(t,e,n){"use strict";n("99af"),n("a15b");var i=n("0b49"),r=n.n(i),a=n("dd61"),s=n.n(a);e["a"]={printShotFeedback:function(t,e){return"/api/v1/printshotfeedbacks/".concat(t,"/?print_id=").concat(e)},print:function(t){return"/api/v1/prints/".concat(t,"/")},prints:function(){return"/api/v1/prints/"},printsBulkDelete:function(){return"/api/v1/prints/bulk_delete/"},printAlertOverwrite:function(t){return"/api/v1/prints/".concat(t,"/alert_overwrite/")},printers:function(){return"/api/v1/printers/"},printer:function(t){return"/api/v1/printers/".concat(t,"/")},printerAction:function(t,e){return"/api/v1/printers/".concat(t).concat(e)},pubPrinter:function(){return"/api/v1p/printer/"},gcodes:function(){return"/api/v1/gcodes/"},tunnelUsage:function(){return"/api/v1/tunnelusage/"},verificationCode:function(){return"/api/v1/onetimeverificationcodes/"},user:function(){return"/api/v1/users/me/"},sharedResources:function(t){return"/api/v1/sharedresources/?"+s()(r()(t),(function(t){return t.join("=")})).join("&")},sharedResource:function(t){return"/api/v1/sharedresources/".concat(t,"/")},printerControl:function(t){return"/printers/".concat(t,"/control/")},printerWebSocket:function(t){return"/ws/web/".concat(t,"/")},printerSharedWebSocket:function(t){return"/ws/share_token/web/".concat(t,"/")},printerWizard:function(t){return"/printers/wizard/?printerId=".concat(t)}}},"1e2d":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("a026"),r=n("f357"),a=n("5f5b"),s=n("c0eb"),o=n("2ead"),l=n.n(o);n("4de4");i["default"].filter("floor",(function(t){return Math.floor(t)}));var c=n("785f"),d=n("8ffe"),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"timelapse",attrs:{"sticky-container":""}},[n("div",{directives:[{name:"sticky",rawName:"v-sticky"}],staticClass:"menu-bar px-sm-4 d-flex justify-content-between",attrs:{"sticky-offset":"{top: 0, bottom: 30}","sticky-side":"both","on-stick":"onMenuStick"}},[t._m(0),n("div",[n("b-dropdown",{attrs:{"toggle-class":"text-decoration-none no-corner no-border no-shadow",variant:t.filterBtnVariant,"no-caret":""},scopedSlots:t._u([{key:"button-content",fn:function(){return[n("i",{staticClass:"fas fa-filter"})]},proxy:!0}])},[n("b-dropdown-item",{on:{click:function(e){return t.onFilterClick("none")}}},[n("i",{staticClass:"fas fa-check",style:{visibility:"none"===t.filter?"visible":"hidden"}}),t._v("All ")]),n("b-dropdown-divider"),n("b-dropdown-item",{on:{click:function(e){return t.onFilterClick("finished")}}},[n("i",{staticClass:"fas fa-check",style:{visibility:"finished"===t.filter?"visible":"hidden"}}),t._v("Finished ")]),n("b-dropdown-item",{on:{click:function(e){return t.onFilterClick("cancelled")}}},[n("i",{staticClass:"fas fa-check",style:{visibility:"cancelled"===t.filter?"visible":"hidden"}}),t._v("Cancelled ")]),n("b-dropdown-item",{on:{click:function(e){return t.onFilterClick("need_alert_overwrite")}}},[n("i",{staticClass:"fas fa-check",style:{visibility:"need_alert_overwrite"===t.filter?"visible":"hidden"}}),t._v("Review needed ")]),n("b-dropdown-item",{on:{click:function(e){return t.onFilterClick("need_print_shot_feedback")}}},[n("i",{staticClass:"fas fa-check",style:{visibility:"need_print_shot_feedback"===t.filter?"visible":"hidden"}}),t._v("Focused-review needed ")])],1),n("b-dropdown",{attrs:{"toggle-class":"text-decoration-none no-corner no-border no-shadow",variant:"outline-secondary","no-caret":""},scopedSlots:t._u([{key:"button-content",fn:function(){return[n("i",{staticClass:"fas",class:t.sortingBtnClasses})]},proxy:!0}])},[n("b-dropdown-item",{on:{click:function(e){return t.onSortingClick("date_desc")}}},[n("i",{staticClass:"fas fa-check",style:{visibility:"date_desc"===t.sorting?"visible":"hidden"}}),t._v("Newest to oldest ")]),n("b-dropdown-item",{on:{click:function(e){return t.onSortingClick("date_asc")}}},[n("i",{staticClass:"fas fa-check",style:{visibility:"date_asc"===t.sorting?"visible":"hidden"}}),t._v("Oldest to newest ")])],1),n("button",{staticClass:"btn ml-3",class:{"btn-light":!t.anyPrintsSelected,"btn-danger":t.anyPrintsSelected},attrs:{type:"button",disabled:!t.anyPrintsSelected},on:{click:t.onDeleteBtnClick}},[n("i",{staticClass:"fas fa-trash-alt"}),t._v(" Delete "+t._s(t.anyPrintsSelected?" ("+t.selectedPrintIds.size+")":"")+" ")])],1)]),n("div",{staticClass:"row"},t._l(t.prints,(function(e){return n("print-card",{key:e.id,attrs:{print:e},on:{selectedChanged:t.onSelectedChanged,printDeleted:t.onPrintDeleted,printDataChanged:t.printDataChanged,fullscreen:t.openFullScreen}})})),1),n("mugen-scroll",{staticClass:"text-center p-4",attrs:{handler:t.fetchMoreData,"should-handle":!t.loading}},[t.noMoreData?n("div",{staticClass:"text-center p-2"},[t._v("End of your time-lapse list.")]):t._e(),t.noMoreData?t._e():n("b-spinner",{attrs:{label:"Loading..."}})],1),n("b-modal",{attrs:{id:"tl-fullscreen-modal",size:"full",hideHeader:!0,hideFooter:!0},on:{hidden:t.fullScreenClosed}},[n("FullScreenPrintCard",{attrs:{print:t.fullScreenPrint,videoUrl:t.fullScreenPrintVideoUrl,autoplay:!0}})],1)],1)},p=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"btn btn-outline-primary",attrs:{role:"button",href:"/prints/upload/"}},[n("i",{staticClass:"fas fa-upload fa-lg mx-2"})])}],f=(n("4160"),n("a630"),n("d81d"),n("d3b7"),n("6062"),n("3ca3"),n("159b"),n("ddb0"),n("d0ff")),h=n("bc3a"),v=n.n(h),m=n("51f5"),g=n.n(m),b=n("996c"),_=n.n(b),w=n("1807"),C=n("502a"),y=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"col-sm-12 col-md-6 col-lg-4 pt-3"},[i("div",{staticClass:"card vld-parent"},[i("div",{staticClass:"card-header"},[i("div",{style:{visibility:t.hasSelectedChangedListener?"visible":"hidden"}},[i("b-form-checkbox",{staticClass:"text-decoration-none",attrs:{size:"lg"},on:{change:t.onSelectedChange},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1),i("b-form-radio-group",{attrs:{buttons:"","button-variant":"outline-primary",name:"radio-btn-outline"},model:{value:t.selectedCardView,callback:function(e){t.selectedCardView=e},expression:"selectedCardView"}},[i("b-form-radio",{staticClass:"no-corner no-shadow",attrs:{value:"detective",disabled:!t.canShowDetectiveView}},[i("img",{staticClass:"seg-control-icon",attrs:{src:n("fbc4")}})]),i("b-form-radio",{staticClass:"no-corner no-shadow",attrs:{value:"info"}},[i("img",{staticClass:"seg-control-icon",attrs:{src:n("8f11")}})])],1),i("div",{staticClass:"dropdown"},[t._m(0),i("div",{staticClass:"dropdown-menu dropdown-menu-right",attrs:{"aria-labelledby":"dropdownMenuButton"}},[this.print.video_url?i("a",{staticClass:"dropdown-item",attrs:{href:this.print.video_url,target:"_blank"}},[i("i",{staticClass:"fas fa-download"}),t._v("Download Original Time-lapse ")]):t._e(),this.print.tagged_video_url?i("a",{staticClass:"dropdown-item",attrs:{href:this.print.tagged_video_url,target:"_blank"}},[i("i",{staticClass:"fas fa-download"}),t._v("Download Detective Time-lapse ")]):t._e(),i("div",{staticClass:"dropdown-divider"}),i("a",{staticClass:"dropdown-item text-danger",on:{click:t.deleteVideo}},[i("i",{staticClass:"fas fa-trash-alt"}),t._v("Delete ")])])])],1),i("div",[t.videoUrl?i("video-box",{attrs:{videoUrl:t.videoUrl,posterUrl:t.print.poster_url,fluid:!0,fullscreenBtn:t.hasFullscreenListener},on:{timeupdate:t.onTimeUpdate,fullscreen:function(e){return t.$emit("fullscreen",t.print.id,t.videoUrl)}}}):i("div",[i("detective-working")],1),i("div",{directives:[{name:"show",rawName:"v-show",value:"info"==t.cardView,expression:"cardView == 'info'"}]},[i("div",{staticClass:"card-body"},[i("div",{staticClass:"container"},[i("div",{staticClass:"row"},[t._m(1),i("div",{staticClass:"col-8"},[t._v(t._s(t.print.filename))])]),i("div",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"row",attrs:{title:this.humanizedPrintedOrUploadedTime(t.longFormat=!0)}},[i("div",{staticClass:"text-muted col-4"},[t._v(" "+t._s(t.wasTimelapseUploaded?"Uploaded":"Printed")+" "),i("span",{staticClass:"float-right"},[t._v(":")])]),i("div",{staticClass:"col-8"},[t._v(t._s(this.humanizedPrintedOrUploadedTime())+" "+t._s(t.endStatus))])]),!t.wasTimelapseUploaded&&t.duration?i("div",{staticClass:"row",attrs:{id:"dur-"+t.print.id}},[i("b-tooltip",{attrs:{target:"dur-"+t.print.id,triggers:"hover"}},[t._v(" "+t._s(t._f("floor")(t._f("duration")(t.duration,"asHours")))+":"+t._s(t._f("duration")(t.duration,"minutes"))+":"+t._s(t._f("duration")(t.duration,"seconds"))+" ")]),t._m(2),i("div",{staticClass:"col-8"},[t._v(t._s(t.duration.humanize()))])],1):t._e()])])]),i("div",{directives:[{name:"show",rawName:"v-show",value:"detective"==t.cardView,expression:"cardView == 'detective'"}]},[t.print.prediction_json_url?i("gauge",{attrs:{normalizedP:t.normalizedP}}):t._e(),i("div",{staticClass:"feedback-section"},[i("div",{staticClass:"text-center py-2 px-3"},[i("div",{staticClass:"lead",class:[t.print.alerted_at?"text-danger":"text-success"]},[t._v(t._s(t.print.alerted_at?"The Detective found spaghetti":"The Detective found nothing fishy"))]),i("div",{staticClass:"py-2"},[t._v(" Did she get it right? "),i("b-button",{staticClass:"mx-2 btn-sm",attrs:{variant:t.thumbedUp?"primary":"outline"},on:{click:t.onThumbUpClick}},[t.inflightAlertOverwrite?i("b-spinner",{attrs:{type:"grow",small:""}}):i("i",{staticClass:"fas fa-thumbs-up"})],1),i("b-button",{staticClass:"mx-2 btn-sm",attrs:{variant:t.thumbedDown?"primary":"outline"},on:{click:t.onThumbDownClick}},[t.inflightAlertOverwrite?i("b-spinner",{attrs:{type:"grow",small:""}}):i("i",{staticClass:"fas fa-thumbs-down"})],1)],1),i("transition",{attrs:{name:"bounce"}},[t.focusedFeedbackEligible?i("div",{staticClass:"pt-2"},[i("a",{staticClass:"btn btn-sm btn-outline-primary px-4",attrs:{role:"button",href:t.focusedFeedbackLink}},[t._v(" F "),i("i",{staticClass:"fas fa-search focused-feedback-icon"}),t._v("CUSED FEEDBACK "),t.focusedFeedbackCompleted?t._e():i("img",{staticClass:"seg-control-icon ml-1",attrs:{src:n("b639")}})])]):t._e()])],1),i("div",{staticClass:"text-muted py-2 px-3 help-text"},[t.focusedFeedbackEligible?i("small",[t.focusedFeedbackCompleted?i("span",[t._v("Thank you for completing the Focused Feedback for The Detective. You have earned 2 non-expirable Detective Hours. You can click the botton again to change your feedback.")]):i("span",[t._v(" With Focused Feedback, you can tell The Detective exactly where she got it wrong. This is the most effective way to help her improve. "),i("a",{attrs:{href:"https://www.thespaghettidetective.com/docs/how-does-credits-work/#you-earn-detective-hours-for-giving-focused-feedback"}},[t._v("You will earn 2 Detective Hours once you finish the Focused Feedback")]),t._v(". ")])]):i("small",[t._v(" Every time you give The Detective feedback, "),i("a",{attrs:{href:"https://www.thespaghettidetective.com/docs/help-the-detective-improve/"}},[t._v("you help her get better at detecting spaghetti")]),t._v(". ")])])])],1)],1)])])},k=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"btn icon-btn",attrs:{type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-label":"Controls"}},[n("i",{staticClass:"fas fa-ellipsis-v"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-muted col-4"},[t._v(" File "),n("span",{staticClass:"float-right"},[t._v(":")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-muted col-4"},[t._v(" Duration "),n("span",{staticClass:"float-right"},[t._v(":")])])}],x=n("c1df"),S=n.n(x),D=n("9380"),P=n.n(D),O=n("c1ee"),T=n("6868"),$=n("5237"),j={name:"PrintCard",components:{VideoBox:O["a"],Gauge:T["a"],DetectiveWorking:$["a"]},data:function(){return{currentPosition:0,predictions:[],selectedCardView:"detective",selected:!1,inflightAlertOverwrite:null}},props:{print:Object},computed:{wasTimelapseUploaded:function(){return null!==this.print.uploaded_at},endStatus:function(){return this.print.cancelled_at?"(Cancelled)":""},duration:function(){return this.print.ended_at&&this.print.started_at?S.a.duration(this.print.ended_at.diff(this.print.started_at)):null},canShowDetectiveView:function(){return null!==this.print.prediction_json_url&&null!==this.print.tagged_video_url||!!(this.print.ended_at&&S()().diff(this.print.ended_at,"hours")<24||this.print.uploaded_at&&S()().diff(this.print.uploaded_at,"hours")<24)},cardView:function(){return this.canShowDetectiveView?this.selectedCardView:"info"},videoUrl:function(){return"info"==this.cardView?this.print.video_url:this.print.tagged_video_url},thumbedUp:function(){return!!this.print.alert_overwrite&&this.print.has_alerts^"NOT_FAILED"===this.print.alert_overwrite},thumbedDown:function(){return!!this.print.alert_overwrite&&this.print.has_alerts^"FAILED"===this.print.alert_overwrite},focusedFeedbackEligible:function(){return this.print.printshotfeedback_set.length>0&&this.print.alert_overwrite},focusedFeedbackCompleted:function(){return this.print.printshotfeedback_set.length>0&&0==P()(this.print.printshotfeedback_set,(function(t){return!t.answered_at})).length},focusedFeedbackLink:function(){return"/prints/shot-feedback/".concat(this.print.id,"/")},hasSelectedChangedListener:function(){return Boolean(this.$listeners&&this.$listeners.selectedChanged)},hasFullscreenListener:function(){return Boolean(this.$listeners&&this.$listeners.fullscreen)},normalizedP:function(){return Object(C["a"])(this.predictions,this.currentPosition)}},methods:{onTimeUpdate:function(t){this.currentPosition=t},onSelectedChange:function(){this.$emit("selectedChanged",this.print.id,!this.selected)},deleteVideo:function(){var t=this;v.a.delete(w["a"].print(this.print.id)).then((function(){t.$emit("printDeleted",t.print.id)}))},onThumbUpClick:function(){this.inflightAlertOverwrite=this.print.has_alerts?"FAILED":"NOT_FAILED",this.alertOverwrite(this.inflightAlertOverwrite)},onThumbDownClick:function(){this.inflightAlertOverwrite=this.print.has_alerts?"NOT_FAILED":"FAILED",this.alertOverwrite(this.inflightAlertOverwrite)},alertOverwrite:function(t){var e=this;v.a.post(w["a"].printAlertOverwrite(this.print.id),{value:t}).then((function(t){e.$emit("printDataChanged",t.data),e.inflightAlertOverwrite=null}))},fetchPredictions:function(){var t=this;v.a.get(this.print.prediction_json_url).then((function(e){t.predictions=e.data}))},humanizedPrintedOrUploadedTime:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(!this.print.uploaded_at&&!this.print.ended_at)return"-";var e=this.wasTimelapseUploaded?this.print.uploaded_at:this.print.ended_at;return t?e.format("LLLL"):e.fromNow()}},mounted:function(){this.print.prediction_json_url&&this.fetchPredictions(),this.print.tagged_video_url||(this.selectedCardView="info")}},E=j,U=(n("48fd"),n("2877")),B=Object(U["a"])(E,y,k,!1,null,"54670e30",null),F=B.exports,N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("video-box",{attrs:{videoUrl:t.videoUrl,posterUrl:t.print.poster_url,fluid:!1,autoplay:t.autoplay,fullScreenBtn:!1},on:{timeupdate:t.onTimeUpdate}}),n("gauge",{attrs:{normalizedP:t.normalizedP}})],1)},V=[],A=(n("a9e3"),{name:"FullScreenPrintCard",components:{VideoBox:O["a"],Gauge:T["a"]},props:{print:{type:Object,required:!0},videoUrl:{type:String,required:!0},initialPosition:{type:Number,default:function(){return 0}},autoplay:{type:Boolean,default:function(){return!1}}},data:function(){return{currentPosition:0,predictions:[]}},computed:{normalizedP:function(){return Object(C["a"])(this.predictions,this.currentPosition)}},methods:{onTimeUpdate:function(t){this.currentPosition=t},fetchPredictions:function(){var t=this;v.a.get(this.print.prediction_json_url).then((function(e){t.predictions=e.data}))}},mounted:function(){this.print.prediction_json_url&&this.fetchPredictions()}}),z=A,I=Object(U["a"])(z,N,V,!1,null,"569d8700",null),L=I.exports,M={name:"PrintsPage",components:{MugenScroll:_.a,PrintCard:F,FullScreenPrintCard:L},data:function(){return{prints:[],selectedPrintIds:new Set,loading:!1,noMoreData:!1,filter:"none",sorting:"date_desc",fullScreenPrint:null,fullScreenPrintVideoUrl:null}},computed:{filterBtnVariant:function(){return"none"===this.filter?"outline-secondary":"outline-primary"},sortingBtnClasses:function(){return"date_asc"===this.sorting?" fa-sort-amount-up":"fa-sort-amount-down"},anyPrintsSelected:function(){return this.selectedPrintIds.size>0}},methods:{fetchMoreData:function(){var t=this;this.noMoreData||(this.loading=!0,v.a.get(w["a"].prints(),{params:{start:this.prints.length,limit:6,filter:this.filter,sorting:this.sorting}}).then((function(e){var n;t.loading=!1,t.noMoreData=e.data.length<6,(n=t.prints).push.apply(n,Object(f["a"])(e.data.map((function(t){return Object(C["b"])(t)}))))})))},refetchData:function(){this.prints=[],this.selectedPrintIds=[],this.noMoreData=!1,this.fetchMoreData()},onSelectedChanged:function(t,e){var n=new Set(this.selectedPrintIds);e?n.add(t):n.delete(t),this.selectedPrintIds=n},onMenuStick:function(t){console.log(t)},onFilterClick:function(t){this.filter=t,this.refetchData()},onSortingClick:function(t){this.sorting=t,this.refetchData()},onDeleteBtnClick:function(){var t=this,e=Array.from(this.selectedPrintIds);this.$swal({title:"Are you sure?",text:"Delete ".concat(this.selectedPrintIds.size," print(s)? This action can not be undone."),showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"No"}).then((function(n){n.isConfirmed&&v.a.post(w["a"].printsBulkDelete(),{print_ids:e}).then((function(){e.forEach((function(e){return t.onPrintDeleted(e,!1)})),t.$swal.Toast.fire({title:"".concat(e.length," time-lapse(s) deleted!")}),t.selectedPrintIds=[]}))}))},onPrintDeleted:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=g()(this.prints,(function(e){return e.id==t})),i=this.prints[n];this.$delete(this.prints,n),e&&this.$swal.Toast.fire({title:"Time-lapse ".concat(i.filename," deleted!")})},printDataChanged:function(t){var e=g()(this.prints,(function(e){return e.id==t.id}));this.$set(this.prints,e,Object(C["b"])(t))},openFullScreen:function(t,e){var n=g()(this.prints,(function(e){return e.id==t}));-1!=n&&(this.fullScreenPrint=this.prints[n],this.fullScreenPrintVideoUrl=e,this.$bvModal.show("tl-fullscreen-modal"))},fullScreenClosed:function(){this.fullScreenPrint=null,this.fullScreenPrintVideoUrl=null}}},W=M,G=(n("d2ad"),Object(U["a"])(W,u,p,!1,null,null,null)),H=G.exports,R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mt-2 mb-5"},[n("div",{staticClass:"row justify-content-center"},[t.print?n("print-card",{attrs:{print:t.print},on:{printDeleted:t.onPrintDeleted,printDataChanged:t.printDataChanged}}):t._e()],1)])},q=[],J={name:"PrintPage",components:{PrintCard:F},props:{config:Object},data:function(){return{print:null}},mounted:function(){this.fetchData()},methods:{fetchData:function(){var t=this;v.a.get(w["a"].print(this.config.printId)).then((function(e){t.print=Object(C["b"])(e.data)}))},onPrintDeleted:function(){window.location.href="/prints/"},printDataChanged:function(){this.fetchData()}}},Y=J,K=Object(U["a"])(Y,R,q,!1,null,"28537294",null),X=K.exports,Z=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t._m(0),t._m(1),i("div",{staticClass:"row justify-content-center"},[i("div",{staticClass:"col-sm-12 col-lg-8"},[i("vue-dropzone",{staticClass:"upload-box",attrs:{id:"dropzone",options:t.dropzoneOptions,useCustomSlot:!0},on:{"vdropzone-success":t.printUploadSuccess}},[i("div",{staticClass:"dz-message needsclick"},[i("i",{staticClass:"fas fa-upload fa-2x"}),t._v(" "),i("br"),t._v(" Drop files here or click to upload."),i("br"),t._v(" *.mp4 or *.mpg files only. Up to 200MB each. ")])])],1)]),i("div",{staticClass:"row justify-content-center py-5"},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.uploaded,expression:"uploaded"}],staticClass:"col-sm-12 col-lg-8 text-center",attrs:{id:"tl-uploaded"}},[i("img",{staticStyle:{height:"auto",width:"12rem"},attrs:{src:n("6e05")}}),t._m(2)])])])},Q=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row justify-content-center pt-5 pb-2"},[n("div",{staticClass:"col-sm-12 col-lg-8 text-center"},[n("h1",[t._v("Upload Time-lapse")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row justify-content-center pb-2"},[n("div",{staticClass:"col-sm-12 col-lg-8  text-center"},[n("p",[t._v("Upload time-lapse videos to see if The Detective can correctly tell the bad prints from the good ones.")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"py-2 text-center"},[n("div",{staticClass:"py-2"},[t._v("The Detective is busy looking at the time-lapse video(s) you uploaded.")]),n("div",[t._v("We will send you email when she is done.")]),n("a",{attrs:{href:"/prints/"}},[t._v("Check status now >>>")])])}],tt=n("92c3"),et=n.n(tt),nt=(n("1e3f"),{name:"UploadPrintPage",components:{vueDropzone:et.a},props:{csrf:{type:String,requeired:!0}},data:function(){return{dropzoneOptions:{withCredentials:!0,maxFilesize:200,timeout:36e5,acceptedFiles:"video/mp4, video/mpeg",url:"?",headers:{"X-CSRFToken":this.csrf}},uploaded:!1}},methods:{printUploadSuccess:function(t){console.log(t),this.uploaded=!0}}}),it=nt,rt=Object(U["a"])(it,Z,Q,!1,null,null,null),at=rt.exports;Object(c["a"])(i["default"]),i["default"].use(a["a"]),i["default"].use(r["a"]),i["default"].use(s["a"]),i["default"].use(l.a),document.getElementById("navbar-mount")&&new i["default"]({components:{Navbar:d["a"]}}).$mount("#navbar-mount"),document.getElementById("prints-mount")&&new i["default"]({components:{PrintsPage:H}}).$mount("#prints-mount"),document.getElementById("print-mount")&&new i["default"]({components:{PrintPage:X}}).$mount("#print-mount"),document.getElementById("upload-print-mount")&&new i["default"]({components:{UploadPrintPage:at}}).$mount("#upload-print-mount")},3477:function(t,e,n){},"3c33":function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return r}));var i=function(t,e){var n=localStorage.getItem(t)||e;try{return JSON.parse(n)}catch(i){return n}},r=function(t,e){return localStorage.setItem(t,e)}},"48fd":function(t,e,n){"use strict";var i=n("b967"),r=n.n(i);r.a},5:function(t,e,n){t.exports=n("1e2d")},"502a":function(t,e,n){"use strict";n.d(e,"b",(function(){return l})),n.d(e,"c",(function(){return c})),n.d(e,"a",(function(){return d}));n("caad"),n("b0c0"),n("d3b7"),n("25f0"),n("2532");var i=n("c1df"),r=n.n(i),a=n("9b02"),s=n.n(a),o=function(t){return t?r()(t):null},l=function(t){return t.ended_at=o(t.cancelled_at||t.finished_at),t.started_at=o(t.started_at),t.uploaded_at=o(t.uploaded_at),t.has_alerts=Boolean(t.alerted_at),t},c=function(t){return t.name=t.name||"Printer #"+t.id.toString(),t.created_at=o(t.created_at),t.isOffline=null===s()(t,"status",null),t.isPaused=s()(t,"status.state.flags.paused",!1),t.isIdle="Operational"===s()(t,"status.state.text",""),t.isDisconnected=s()(t,"status.state.flags.closedOrError",!0),t.isPrinting=!t.isDisconnected&&"Operational"!==s()(t,"status.state.text",""),t.hasError=s()(t,"status.state.flags.error")||s()(t,"status.state.text","").toLowerCase().includes("error"),t.alertUnacknowledged=s()(t,"current_print.alerted_at")&&r()(s()(t,"current_print.alerted_at")).isAfter(r()(s()(t,"current_print.alert_acknowledged_at")||0)),t},d=function(t,e){var n=Math.round(t.length*e);return s()(t[n],"fields.normalized_p",0)}},5237:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"card bg-dark text-white"},[i("img",{staticClass:"card-img",attrs:{src:n("6e05"),alt:"The Detective is still working"}}),t._m(0)])},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card-img-overlay",staticStyle:{"background-color":"rgba(0,0,0,0.6)"}},[n("h5",{staticClass:"card-title text-center",staticStyle:{padding:"70px 0"}},[t._v("The Detective is still busy working on your time-lapse")])])}],a={name:"DetectiveWorking"},s=a,o=n("2877"),l=Object(o["a"])(s,i,r,!1,null,null,null);e["a"]=l.exports},6295:function(t,e,n){"use strict";var i=n("3477"),r=n.n(i);r.a},6868:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tsd-gauge-container"},[n("span",{style:{color:t.titleColor},attrs:{id:"title"}},[t._v(t._s(t.titleText))]),n("div",{staticClass:"tsd-gauge"},[n("radial-gauge",{attrs:{value:t.value,options:t.options}})],1),n("hr")])},r=[],a=(n("a9e3"),n("7489")),s={name:"Gauge",components:{RadialGauge:a["a"]},data:function(){return{}},props:{normalizedP:{type:Number},options:{type:Object,default:function(){return{valueDec:0,valueInt:0,width:240,height:240,units:!1,box:!1,minValue:0,maxValue:100,majorTicks:["","","",""],minorTicks:4,highlights:[{from:0,to:33,color:"#5cb85c"},{from:33,to:67,color:"#f0ad4e"},{from:67,to:100,color:"#d9534f"}],colorPlate:"rgba(255,255,255,.0)",colorTitle:"#5cb85c",colorStrokeTicks:"#EBEBEB",colorNeedleStart:"rgba(240, 128, 128, 1)",colorNneedleEnd:"rgba(255, 160, 122, .9)",valueBox:!1,animationRule:"bounce",animationDuration:500,animatedValue:!0,startAngle:90,ticksAngle:180,borders:!1}}}},computed:{value:function(){return 100*this.normalizedP},titleText:function(){switch(this.level()){case 0:return"Looking Good";case 1:return"Fishy...";case 2:return"Failing!";default:return"Looking Good"}},titleColor:function(){switch(this.level()){case 0:return"#5cb85c";case 1:return"#f0ad4e";case 2:return"#d9534f";default:return"#5cb85c"}}},methods:{level:function(){return this.value>66?2:this.value>33?1:0}}},o=s,l=(n("6295"),n("2877")),c=Object(l["a"])(o,i,r,!1,null,"38f5df61",null);e["a"]=c.exports},"6e05":function(t,e,n){t.exports=n.p+"img/detective-working.gif"},"785f":function(t,e,n){"use strict";n("99af"),n("fb6a"),n("b0c0"),n("d3b7"),n("ac1f"),n("25f0"),n("5319");var i=n("0122"),r=/(?:^|[-_/])(\w)/g,a="root",s="anonymous component",o=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^/]+?|)(\.[^./]*|))(?:[/]*)$/,l=function(t){var e=o.exec(t);return e?e.slice(1):[]},c=function(t,e){var n=l(t)[2];return e&&n.substr(-1*e.length)===e&&(n=n.substr(0,n.length-e.length)),n},d=function(t){if(!t)return s;if(t.$root===t)return a;if(!t.$options)return s;if(t.$options.name)return t.$options.name;if(t.$options._componentTag)return t.$options._componentTag;if(t.$options.__file){var e=t.$options.__file.replace(/^[a-zA-Z]:/,"").replace(/\\/g,"/"),n=c(e,".vue");return n.replace(r,(function(t,e){return e?e.toUpperCase():""}))}return s},u=function t(e,n,r,a,s,o){var l=0;for(var c in n){if(l+=1,l>o)break;"object"==Object(i["a"])(n[c])?s>a&&t(e,n[c],r+"."+c,a+1,s,o):e[r+"."+c]=n[c]}},p=function(t){var e=t.config.errorHandler;t.config.errorHandler=function(n,i,r){if(window.Sentry){var a={},s=i;if(i._original&&(s=i._original),s)try{a.componentName=d(s),u(a,JSON.parse(JSON.stringify(s.$options.propsData)),"props",0,2,10)}catch(o){console.log("Unable to extract metadata from Vue component.")}r&&(a.lifecycleHook=r),setTimeout((function(){window.Sentry.getCurrentHub().withScope((function(t){t.setContext("vue",a),window.Sentry.getCurrentHub().captureException(n)}))}))}"function"===typeof e&&e.call(t,n,i,r),t.util&&t.util.warn("Error in ".concat(r,': "').concat(n.toString(),'"'),i),console.error(n)}};e["a"]=p},"7a8a":function(t,e,n){"use strict";var i=n("c8fe"),r=n.n(i);r.a},"8a45":function(t,e,n){t.exports=n.p+"img/logo-inverted.png"},"8f11":function(t,e,n){t.exports=n.p+"img/info-inverted.png"},"8ffe":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-dark static-top flex-column"},[i("div",{staticClass:"container"},[i("a",{staticClass:"navbar-brand",attrs:{href:"/printers/"}},[i("img",{staticStyle:{height:"32px"},attrs:{src:n("8a45"),alt:"The Spaghetti Detective"}})]),i("button",{ref:"mobileDropdown",staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarResponsive","aria-controls":"navbarResponsive","aria-expanded":"false","aria-label":"Toggle navigation"}},[i("span",{staticClass:"navbar-toggler-icon"})]),i("div",{ref:"mobileDropdownContent",staticClass:"collapse navbar-collapse",attrs:{id:"navbarResponsive"}},[i("ul",{staticClass:"navbar-nav"},[t.user?i("li",{staticClass:"nav-item",class:{active:t.viewName.includes("printers")}},[i("a",{staticClass:"nav-link",attrs:{href:"/printers/"}},[t._v("Printer ")])]):t._e(),t.user?i("li",{staticClass:"nav-item",class:{active:t.viewName.includes("prints")}},[i("a",{staticClass:"nav-link",attrs:{href:"/prints/"}},[t._v("Time-lapse ")])]):t._e(),t.user?i("li",{staticClass:"nav-item",class:{active:t.viewName.includes("gcodes")}},[i("a",{staticClass:"nav-link",attrs:{href:"/gcodes/"}},[t._v("G-Code ")])]):t._e(),t.user?t._e():i("li",{staticClass:"nav-item",class:{active:"publictimelapse_list"===t.viewName}},[i("a",{staticClass:"nav-link glowing",attrs:{href:"/publictimelapses/"}},[t._v("Spaghetti Gallery")])]),t.isEnt?i("li",{staticClass:"nav-item",class:{active:"pricing"===t.viewName}},[i("a",{staticClass:"nav-link",attrs:{href:"/ent/pricing/"}},[t._v("Pricing")])]):t._e(),t._m(0),t._m(1)]),i("ul",{staticClass:"navbar-nav ml-auto"},[t.user?t._e():i("li",{staticClass:"nav-item"},[i("a",{staticClass:"nav-link",attrs:{href:"/accounts/login/"}},[t._v("Sign In")])]),!t.user&&t.allowSignUp?i("li",{staticClass:"nav-item"},[i("a",{staticClass:"nav-link",attrs:{href:"/accounts/signup/"}},[t._v("Sign up")])]):t._e(),t.isEnt?i("li",{staticClass:"nav-item"},[i("a",{staticClass:"nav-link badge-btn",attrs:{href:"/ent/subscription/#detective-hour-balance"}},[i("img",{attrs:{src:n("0d29")}}),i("span",{staticClass:"badge badge-light",attrs:{id:"user-credits"}},[t._v(t._s(t.dhBadgeNum))]),i("span",{staticClass:"sr-only"},[t._v("Detective Hours")])])]):t._e(),t.user?i("li",{ref:"accountDropdown",staticClass:"nav-item dropdown"},[i("a",{staticClass:"nav-link dropdown-toggle user-menu",attrs:{"data-toggle":"dropdown",href:"#",id:t.user.id,"aria-expanded":"false"}},[t._v(" "+t._s(t.user.first_name||t.user.email)+" "),i("span",{staticClass:"caret"})]),i("div",{ref:"accountDropdownContent",staticClass:"dropdown-menu dropdown-menu-right",attrs:{"aria-labelledby":"themes"}},[t._m(2),t.isEnt?i("a",{staticClass:"dropdown-item",attrs:{href:"/ent/subscription/"}},[i("i",{staticClass:"far fa-user-circle"}),t._v("Account")]):t._e(),i("div",{staticClass:"dropdown-divider"}),t._m(3)])]):t._e()])])])]),t.needsEmailVerification?i("div",{staticClass:"alert alert-warning text-center",attrs:{role:"alert"}},[t._v(" You will not get notified by email on print failure, as your primary email address is not verified. "),i("a",{attrs:{href:"/accounts/email/"}},[t._v("Verify your email address.")])]):t._e()])},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"nav-item"},[n("a",{staticClass:"nav-link",attrs:{href:"https://www.thespaghettidetective.com/help"}},[t._v("Help")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"nav-item"},[n("a",{staticClass:"nav-link",attrs:{href:"https://discord.gg/hsMwGpD"}},[t._v("Forum")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"dropdown-item",attrs:{href:"/user_preferences/"}},[n("i",{staticClass:"fas fa-sliders-h"}),t._v("Preferences")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"dropdown-item",attrs:{href:"/accounts/logout/"}},[n("i",{staticClass:"fas fa-sign-out-alt"}),t._v("Log out")])}],a=n("c1df"),s=n.n(a),o={name:"Navbar",data:function(){return{user:null,allowSignUp:!1,isEnt:!1}},props:{viewName:{default:function(){return""},type:String}},created:function(){var t=JSON.parse(document.querySelector("#settings-json").text),e=t.ACCOUNT_ALLOW_SIGN_UP,n=t.IS_ENT;this.allowSignUp=!!e,this.isEnt=!!n,this.user=JSON.parse(document.querySelector("#user-json").text)},computed:{dhBadgeNum:function(){return this.user&&this.user.is_dh_unlimited?"∞":Math.round(this.user.dh_balance)},needsEmailVerification:function(){var t=s()(this.user.date_joined).isBefore(s()().subtract(15,"days"));return this.isEnt&&!this.user.is_primary_email_verified&&t}},methods:{hideDropdowns:function(){var t=this.$refs.accountDropdown;t.classList.contains("show")&&(t.classList.remove("show"),this.$refs.accountDropdownContent.classList.remove("show"));var e=this.$refs.mobileDropdown;e.getAttribute("aria-expanded")&&(e.classList.add("collapsed"),this.$refs.mobileDropdownContent.classList.remove("show"))}}},l=o,c=(n("b98d"),n("2877")),d=Object(c["a"])(l,i,r,!1,null,"0a3b2bd2",null);e["a"]=d.exports},"9e23":function(t,e,n){},a396:function(t,e,n){},b639:function(t,e,n){t.exports=n.p+"img/detective-hour-2-primary.png"},b967:function(t,e,n){},b98d:function(t,e,n){"use strict";var i=n("a396"),r=n.n(i);r.a},c1ee:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card-img-top"},[n("video-player",{ref:"videoPlayer",staticClass:"vjs-default-skin vjs-big-play-centered",attrs:{options:t.playerOptions,playsinline:!0},on:{timeupdate:t.onTimeUpdate}}),t.fullscreenBtn?n("a",{staticClass:"fullscreen-btn",attrs:{role:"button"},on:{click:function(e){return t.$emit("fullscreen")}}},[n("i",{staticClass:"fa fa-expand fa-2x",attrs:{"aria-hidden":"true"}})]):t._e()],1)},r=[],a=n("d6d3"),s={name:"VideoBox",components:{videoPlayer:a["videoPlayer"]},props:{videoUrl:String,posterUrl:String,fullscreenBtn:{default:function(){return!0},type:Boolean},fluid:{type:Boolean,default:function(){return!0}},autoplay:{type:Boolean,default:function(){return!1}}},computed:{playerOptions:function(){return{muted:!0,preload:"none",language:"en",playbackRates:[.5,1,1.5,2],fluid:this.fluid,fill:!this.fluid,autoplay:this.autoplay,sources:[{type:"video/mp4",src:this.videoUrl}],controlBar:{fullscreenToggle:!1},poster:this.posterUrl}}},methods:{onTimeUpdate:function(t){this.$emit("timeupdate",t.currentTime()/t.duration())}}},o=s,l=(n("7a8a"),n("2877")),c=Object(l["a"])(o,i,r,!1,null,"2ae6d05e",null);e["a"]=c.exports},c8fe:function(t,e,n){},d2ad:function(t,e,n){"use strict";var i=n("9e23"),r=n.n(i);r.a},f357:function(t,e,n){"use strict";var i=n("f3f3"),r=n("a026"),a=n("5886"),s=n("3c33"),o=function(t,e,n){var a=document.createElement("div"),s=new r["default"]({render:function(n){return n(t,{props:e})}}).$mount(a);return r["default"].swal(Object(i["a"])(Object(i["a"])({},n),{},{customClass:{container:"dark-backdrop"},html:'<div id="replace-here">Placeholder</div>',onBeforeOpen:function(t){t.querySelector("#replace-here").replaceWith(s.$el)},onDestroy:function(){s.$destroy(),a.remove()}}))},l=function(t,e,n){return r["default"].swal(Object(i["a"])(Object(i["a"])({},n),{},{customClass:{container:"dark-backdrop"},html:'<div id="replace-here">Placeholder</div>',onBeforeOpen:function(e){e.querySelector("#replace-here").replaceWith(t)}}))},c=function(t,e){t.use(a["a"],e);var n=t.swal.mixin({title:"Are you sure?",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"No",customClass:{container:"dark-backdrop"}}),r=t.swal.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:5e3}),c=function(e,n){if(!Object(s["a"])(n,!1)){var r=Object(i["a"])(Object(i["a"])({},e),{},{position:"top-end",confirmButtonText:"Gotcha! Don't show this again."});return t.swal(r).then((function(t){t.value&&(Object(s["b"])(n,!0),console.log(t))}))}};t.prototype.$swal["openModalWithComponent"]=o,t.prototype.$swal["openModalWithElement"]=l,t.prototype.$swal["Confirm"]=n,t.prototype.$swal["Toast"]=r,t.prototype.$swal["DismissableToast"]=c};e["a"]={install:c}},fbc4:function(t,e,n){t.exports=n.p+"img/logo-square-inverted.png"}});
//# sourceMappingURL=prints.js.map