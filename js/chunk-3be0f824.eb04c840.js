(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3be0f824"],{"0e50":function(e,t,s){},2637:function(e,t,s){},"6f15":function(e,t,s){"use strict";s("2637")},"7f72":function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("main",{staticClass:"flex-1 relative z-0 overflow-y-auto focus:outline-none",attrs:{tabindex:"0"}},[s("section",{staticClass:"max-w-screen-lg md:w-5/6 m-auto py-8 px-4 sm:px-12 md:px-16 lg:pb-16"},[s("div",{staticClass:"mb-6 lg:mb-8"},[s("h4",{staticClass:"font-mono text-base uppercase text-black mb-6"},[e._v("Project\n        Details")]),s("div",{staticClass:"sm:rounded-sm bg-white shadow px-6 py-6"},[s("div",[e._m(0),s("input",{directives:[{name:"model",rawName:"v-model",value:e.project_name,expression:"project_name"}],staticClass:"h-10 flex-1 block w-full border border-gray-400 placeholder-gray-400 rounded-sm",attrs:{type:"text",name:"name"},domProps:{value:e.project_name},on:{input:function(t){t.target.composing||(e.project_name=t.target.value)}}}),s("div",{staticClass:"mt-6"},[s("button",{staticClass:"inline-flex items-center justify-center font-mono uppercase transition ease-in duration-200 hover:no-underline active:shadow-inner focus:outline-none rounded-sm h-10 px-4 text-sm border text-white shadow hover:shadow-hover hover:border-transparent active:border-transparent bg-black border-black hover:text-pink ",on:{click:e.saveChanges}},[e._v("Save Changes\n              ")])])])])]),s("div",{staticClass:"mb-6 lg:mb-8"},[s("h4",{staticClass:"font-mono text-base uppercase text-black mb-6"},[e._v("Keys")]),s("div",{staticClass:"sm:rounded-sm bg-white shadow p-6"},[s("div",{staticClass:"lg:grid lg:grid-cols-2 lg:gap-6 "},[s("div",{staticClass:"mb-6"},[e._m(1),s("div",[s("data",{staticClass:"break-all"},[e._v(e._s(e.project_id)+"\n                ")]),s("i",{staticClass:"fa fa-copy cursor-pointer text-green-500",on:{click:function(t){return e.copyId(e.project_id,"Project ID")}}})])]),s("div",{staticClass:"mb-2"},[e._m(2),s("div",[s("data",{staticClass:"project-cred break-all"},[e._v("\n                  "+e._s(e.project_secret)+"\n                ")]),s("i",{staticClass:"fa fa-copy cursor-pointer text-green-500",on:{click:function(t){return e.copyId(e.project_secret,"Project Secret")}}})])])]),s("div",[s("div",{staticClass:"mb-2 flex items-center"},[s("label",{staticClass:"text-black mr-4"},[e._v("Endpoints")]),s("div",{staticClass:"selectoption"},[s("select",{directives:[{name:"model",rawName:"v-model",value:e.EndpointType,expression:"EndpointType"}],on:{change:function(t){var s=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.EndpointType=t.target.multiple?s:s[0]}}},e._l(e.urls,(function(t){return s("option",{domProps:{value:t.name}},[e._v(e._s(t.name))])})),0)])]),e._l(e.selectedUrl,(function(t){return e.EndpointType?s("div",{staticClass:"mb-2"},[s("span",{staticClass:"break-all"},[e._v(e._s(t.url))]),e._v(" \n              "),s("i",{staticClass:"fa fa-copy cursor-pointer text-green-500",on:{click:function(s){return e.copyId(t.url,"Endpoints")}}})]):e._e()}))],2)])]),s("div",{staticClass:"mb-6 lg:mb-0"},[s("h4",{staticClass:"font-mono text-base uppercase text-black mb-6"},[e._v("Delete\n        Project")]),s("div",{staticClass:"sm:rounded-sm bg-white shadow px-4 py-4 md:grid md:grid-cols-5"},[s("p",{staticClass:"m-0 px-2 py-2 col-span-3"},[e._v("Any applications using this project’s keys will no longer\n          be able to access the Huobi eco chain API. This can not be undone.")]),s("div",{staticClass:"flex items-center justify-end col-span-2 px-2 py-2"},[s("delconfirm",{ref:"delconfirm",attrs:{project_id:e.project_id}}),s("button",{staticClass:"inline-flex items-center justify-center font-mono uppercase transition ease-in duration-200 hover:no-underline active:shadow-inner focus:outline-none rounded-sm h-10 px-4 text-sm border text-white shadow hover:shadow-hover hover:border-transparent active:border-transparent bg-red-500 border-red-500 hover:bg-red-300 active:bg-red-500 px-8",on:{click:e.delProject}},[e._v("Delete Project\n            ")])],1)])])])])},a=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"flex flex-wrap justify-between"},[s("label",{staticClass:"pr-2 mb-2"},[e._v("Name"),s("span",{staticClass:"text-pink"},[e._v("*")])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"mb-2"},[s("label",{staticClass:"text-black"},[e._v("Project ID")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"mb-2"},[s("label",{staticClass:"text-black"},[e._v("Project Secret"),s("span",{staticClass:"tooltip ml-2 text-base"},[s("i",{staticClass:"fa fa-external-link text-pink"}),s("div",{staticClass:"w-60 p-4 tooltip__body tooltip__body--right text-base font-body normal-case",staticStyle:{"margin-top":"-3.5rem"}},[e._v("Keep your project secret hidden."),s("br"),e._v("This should never be human-readable in your application.")])])])])}],i=(s("7f7f"),s("9a67")),r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.isConfirm?s("ConfirmLayer",{on:{closeLayer:e.cancelCreate}},[s("span",{attrs:{slot:"confirmtitle"},slot:"confirmtitle"},[e._v("DELETE PROJECT")]),s("div",{attrs:{slot:"confirmcontent"},slot:"confirmcontent"},[s("div",[s("p",{staticClass:"text-red-500 text-lg text-left mb-2"},[e._v("Are you sure you want to delete your\n      project?")]),s("p",{staticClass:"text-left mb-2"},[e._v("Deleting will remove access to Infura for this project\n        immediately. This cannot be undone.")]),s("div",{staticClass:"leading-10"},[s("div",{staticClass:"flex justify-end items-end flex-wrap mt-6 sm:flex-nowrap"},[s("a",{staticClass:"inline-flex items-center justify-center font-mono uppercase transition ease-in duration-200 hover:no-underline active:shadow-inner focus:outline-none rounded-sm h-10 px-4 text-sm border border-gray-400 text-gray-600 shadow-none hover:bg-gray-200 active:bg-gray-300 mr-4",on:{click:e.cancelCreate}},[e._v("Cancel")]),s("button",{staticClass:"inline-flex items-center justify-center font-mono uppercase transition ease-in duration-200 hover:no-underline active:shadow-inner focus:outline-none rounded-sm h-10 px-4 text-sm border text-white shadow hover:shadow-hover hover:border-transparent active:border-transparent bg-red-500 border-red-500 hover:bg-red-300 active:bg-red-500",attrs:{type:"submit","data-testid":"confirm-delete-project-button"},on:{click:e.deleteProject}},[e._v("Delete\n          ")])])])])])]):e._e()},o=[],c=s("4624"),l=s("8f00"),d=s("365c"),u={name:"createNew",mixins:[c["a"]],props:["project_id"],data:function(){return{project_name:""}},components:{ConfirmLayer:l["a"]},methods:{cancelCreate:function(){this.removeConfirm()},addProject:function(){this.addConfirm()},deleteProject:function(){var e=this,t={project_id:this.project_id};d["a"].projectApi.delete_project(t).then((function(t){t.success?(i["a"].tip("Delete project successfully !"),setTimeout((function(){e.cancelCreate(),e.$router.push("/dashboard/ethereum")}),1e3)):i["a"].tip(t.msg,"error")}))}},mounted:function(){}},p=u,m=s("2877"),f=Object(m["a"])(p,r,o,!1,null,"30a24ad8",null),v=f.exports,h={name:"setting",components:{Delconfirm:v},data:function(){return{ratelimit:"",pertotal:"",project_id:null,project_name:null,project_secret:null,urls:null,EndpointType:""}},methods:{copyId:function(e,t){var s=document.createElement("input");s.value=e,document.body.appendChild(s),s.select(),document.execCommand("Copy"),i["a"].tip("".concat(t," copied to clipboard."))},delProject:function(){this.$refs.delconfirm.addProject()},saveChanges:function(){if(this.project_name.length){var e={project_id:this.project_id,project_name:this.project_name};d["a"].projectApi.change_project(e).then((function(e){e.success?i["a"].tip("change project's name successfully !"):i["a"].tip(e.msg,"error")}))}}},computed:{selectedUrl:function(){var e=this;if(this.EndpointType){var t=[];return this.urls.map((function(s){s.name===e.EndpointType&&(t=s.urls)})),t}}},mounted:function(){var e=this.$route.query.item,t=e.project_id,s=e.project_name,n=e.project_secret,a=e.urls;this.project_id=t,this.project_name=s,this.project_secret=n,this.urls=a,this.EndpointType=a&&a[0]?a[0].name:""}},b=h,x=(s("6f15"),Object(m["a"])(b,n,a,!1,null,"243d5dd2",null));t["default"]=x.exports},"7f7f":function(e,t,s){var n=s("86cc").f,a=Function.prototype,i=/^\s*function ([^ (]*)/,r="name";r in a||s("9e1e")&&n(a,r,{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(e){return""}}})},"8f00":function(e,t,s){"use strict";var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"fixed z-40 inset-0 overflow-y-auto block"},[s("div",{staticClass:"flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"},[e._m(0),s("span",{staticClass:"hidden sm:inline-block sm:align-middle sm:h-screen"}),s("div",{staticClass:"inline-block align-bottom overflow-hidden duration-300 transform transition-all ease-in-out sm:my-8 sm:align-middle opacity-100 translate-y-0 sm:scale-100 shadow-xl sm:max-w-lg sm:w-full",attrs:{role:"dialog","aria-modal":"true","aria-labelledby":"modal-headline"}},[s("div",{staticClass:"sm:rounded-sm bg-white shadow"},[s("div",{staticClass:"text-black"},[s("div",{staticClass:"flex justify-between items-center flex-wrap p-2 border-b sm:flex-no-wrap"},[s("h3",{staticClass:"text-base font-mono uppercase px-4"},[e._t("confirmtitle")],2),s("button",{staticClass:"inline-flex items-center justify-center font-mono uppercase transition ease-in duration-200 hover:no-underline active:shadow-inner focus:outline-none rounded-sm h-10 px-4 text-sm border border-transparent text-gray-500 hover:text-gray-700 active:text-gray-900",on:{click:e.removeThisLayer}},[s("i",{staticClass:"fa fa-close"})])])]),s("div",{staticClass:"px-4 py-6 pb-6 sm:px-6"},[e._t("confirmcontent")],2)])])])])},a=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"fixed inset-0 duration-200 transition-opacity ease-in-out opacity-100"},[s("div",{staticClass:"absolute inset-0 bg-primary opacity-75"})])}],i={name:"ConfirmLayer",methods:{removeThisLayer:function(){this.$emit("closeLayer")}}},r=i,o=s("2877"),c=Object(o["a"])(r,n,a,!1,null,"5c642972",null);t["a"]=c.exports},"9a67":function(e,t,s){"use strict";var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"z-50 fixed inset-0 flex items-start justify-center px-4 py-8 pointer-events-none sm:p-6",attrs:{id:"layer"}},[s("div",{staticClass:"max-w-lg w-full pointer-events-auto transform ease-out duration-300 transition-all translate-y-0 opacity-100"},[s("div",{staticClass:"rounded-sm transition ease-in duration-200 p-6 leading-5 shadow-lg text-white  my-2 shadow-lg",class:{"bg-teal-500":!e.type,"bg-red-500":"error"===e.type},attrs:{"data-testid":"flash-message"}},[s("div",{staticClass:"flex items-center justify-between flex-wrap flex-1"},[s("div",{staticClass:"w-0 flex-1 flex items-center"},[s("div",{staticClass:"text-4xl"},[e.type?"error"===e.type?s("i",{staticClass:"fa fa-close"}):e._e():s("i",{staticClass:"fa fa-check-square-o"})]),s("div",{staticClass:"ml-6 flex flex-1 text-base"},[e._v(e._s(e.msg))])])])])])])},a=[],i={name:"TipLayer",data:function(){return{msg:null,type:null}}},r=i,o=(s("9c81"),s("2877")),c=Object(o["a"])(r,n,a,!1,null,"1246e238",null),l=c.exports,d=s("2b0e"),u=d["a"].extend(l);t["a"]={tip:function(e,t,s){var n=new u;n.msg=e,n.type=t;var a=document.createElement("div");a.setAttribute("id","layerBrdr"),document.body.appendChild(a),n.$mount("#layerBrdr"),setTimeout((function(){var e=document.getElementById("layer");return n.$destroy(),e.parentNode.removeChild(e),s?s():null}),3e3)}}},"9c81":function(e,t,s){"use strict";s("0e50")}}]);
//# sourceMappingURL=chunk-3be0f824.eb04c840.js.map