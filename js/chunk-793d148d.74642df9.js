(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-793d148d"],{"0e50":function(e,t,s){},"1d80":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"flex flex-col items-center justify-center"},[s("div",{staticClass:"sm:rounded-sm bg-white shadow p-6 w-105 shadow-lg"},[s("h1",{staticClass:"text-center mb-6 font-normal font-body text-2xl"},[e._v("Get Started for Free")]),s("div",{staticClass:"mb-6"},[s("div",[e._m(0),s("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"h-10 flex-1 block w-full border border-gray-400 placeholder-gray-400 rounded-sm mb-4",attrs:{type:"email",name:"email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),e._m(1),s("password",{on:{changecolor:e.changeIcon}}),e._m(2),s("input",{directives:[{name:"model",rawName:"v-model",value:e.password_verify,expression:"password_verify"}],staticClass:"h-10 flex-1 block w-full border border-gray-400 placeholder-gray-400 rounded-sm mb-6",attrs:{type:"password",name:"password_verify"},domProps:{value:e.password_verify},on:{input:function(t){t.target.composing||(e.password_verify=t.target.value)}}}),s("button",{staticClass:"inline-flex items-center justify-center font-mono uppercase transition ease-in duration-200 hover:no-underline active:shadow-inner focus:outline-none rounded-sm h-10 px-4 text-sm border text-white shadow hover:shadow-hover hover:border-transparent active:border-transparent bg-black border-black hover:text-pink w-full",on:{click:e.register}},[e._v("Sign Up\n              ")])],1),s("div")]),s("div",{staticClass:"text-center text-sm"},[e._v("Signing up signifies you have read and agree to the "),s("a",{on:{click:e.toTerms}},[e._v("Terms of Service")]),e._v(" and "),s("a",{on:{click:e.toPolicy}},[e._v("Privacy Policy")])])]),s("div",{staticClass:"text-center p-6"},[s("p",{staticClass:"text-white text-sm"},[e._v("Already have an account?"),s("a",{staticClass:"text-white underline hover:text-black",on:{click:e.toLogin}},[e._v("Log In")])])])])},r=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"flex flex-wrap justify-between"},[s("label",{staticClass:"pr-2 mb-2"},[e._v("Email"),s("span",{staticClass:"text-pink"},[e._v("*")])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"flex flex-wrap justify-between"},[s("label",{staticClass:"pr-2 mb-2"},[e._v("Password"),s("span",{staticClass:"text-pink"},[e._v("*")])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"flex flex-wrap justify-between"},[s("label",{staticClass:"pr-2 mb-2"},[e._v("Password Confirm"),s("span",{staticClass:"text-pink"},[e._v("*")])])])}],i=s("365c"),n=s("4624"),o=s("9a67"),l=s("61f7"),c=s("99f2"),d={name:"register",mixins:[n["a"]],components:{Password:c["a"]},data:function(){return{email:null,password:null,password_verify:null,errorType:[]}},methods:{changeIcon:function(e){this.$set(this,"errorType",e.type),this.password=e.new_password},register:function(){var e=this,t=this.email,s=this.password,a=this.password_verify,r={email:t,password:s,password_verify:a},n=this.errorType.filter((function(e){return e>0}));n.length<4?o["a"].tip("Please make sure the password is correct.","error"):(this.validResult=l["a"].isRequiredCheck(r),this.validResult.valid?i["a"].loginApi.register(r).then((function(t){t.success?(o["a"].tip("Register successfully !"),setTimeout((function(){e.$router.push("/loginRegister/login")}),1e3)):t.error.email?o["a"].tip(t.error.email[0],"error"):o["a"].tip("Please fill in the correct registration information.","error")})):o["a"].tip(this.validResult.msg,"error"))}}},p=d,u=s("2877"),f=Object(u["a"])(p,a,r,!1,null,null,null);t["default"]=f.exports},"5cb0":function(e,t,s){},"61f7":function(e,t,s){"use strict";var a=function(e){var t={valid:!0,msg:""};for(var s in e)if(e.hasOwnProperty(s)){var a=e[s];if(""===a||void 0===a||!a||0===a.length||null===a)return t={valid:!1,msg:"".concat(s," is required")},t;if("email"===s){var r=/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;if(!r.test(e[s]))return{valid:!1,msg:"email address is wrong"}}if(e.hasOwnProperty("new_password")){if(e.password_verify!==e.new_password)return{valid:!1,msg:"Please keep the same password as your password for confirmation"}}else if("password_verify"===s&&e.password_verify!==e.password)return{valid:!1,msg:"Please keep the same password as your password for confirmation"}}return t};t["a"]={isRequiredCheck:a}},"6e64":function(e,t,s){"use strict";s("5cb0")},"99f2":function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"container"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.new_password,expression:"new_password"}],staticClass:"h-10 flex-1 block w-full border border-gray-400 placeholder-gray-400 rounded-sm mb-6",attrs:{name:"new_password",type:"password",autocomplete:"off"},domProps:{value:e.new_password},on:{keydown:e.changeIcon,input:function(t){t.target.composing||(e.new_password=t.target.value)}}}),s("div",{staticClass:"w-1/2 -mt-2 relative"},[s("div",{staticClass:"tips"},[s("span",{staticClass:"bg-gray-400",class:{"bg-pink":1===e.msgText||2===e.msgText,"bg-orange-500":3===e.msgText,"bg-green-500":4===e.msgText}}),s("span",{staticClass:"bg-gray-400",class:{"bg-pink":2===e.msgText,"bg-orange-500":3===e.msgText,"bg-green-500":4===e.msgText}}),s("span",{staticClass:"bg-gray-400",class:{"bg-orange-500":3===e.msgText,"bg-green-500":4===e.msgText}}),s("span",{staticClass:"bg-gray-400",class:{"bg-green-500":4===e.msgText}})]),e.isShowTips?s("div",{staticClass:"w-80 tooltip__body tooltip__body--right tipsZtop"},[e._m(0),s("section",{staticClass:"p-4 text-sm"},[s("ul",[s("li",[e.type[0]?s("i",{staticClass:"fa fa-check-square text-green-500"}):s("i",{staticClass:"fa fa-times-circle-o text-red-500"}),e._v("\n            At least 8 characters in length\n          ")]),s("li",[e.type[1]?s("i",{staticClass:"fa fa-check-square text-green-500"}):s("i",{staticClass:"fa fa-times-circle-o text-red-500"}),e._v("\n            At least one numerical character\n          ")]),s("li",[e.type[2]?s("i",{staticClass:"fa fa-check-square text-green-500"}):s("i",{staticClass:"fa fa-times-circle-o text-red-500"}),e._v("\n            Contain upper and lower case characters\n          ")]),s("li",[e.type[3]?s("i",{staticClass:"fa fa-check-square text-green-500"}):s("i",{staticClass:"fa fa-times-circle-o text-red-500"}),e._v("\n            At least one special character\n          ")])])])]):e._e()])])},r=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("header",{staticClass:"border-b border-gray-700 py-2 px-4"},[s("span",{staticClass:"text-gray-500 text-sm"},[e._v("Password Strength")])])}],i={name:"registerpassword",data:function(){return{new_password:"",msgText:0,type:[0,0,0,0]}},computed:{isShowTips:function(){var e=this.type.filter((function(e){return e>0}));return this.new_password.length>0&&e.length<4}},methods:{checkStrong:function(e){var t=0;return e.length<1||(e.length>=8?(this.type[0]=1,t+=1):this.type[0]=0,/\d/.test(e)?(t+=1,this.type[1]=1):this.type[1]=0,/[a-z]/.test(e)&&/[A-Z]/.test(e)?(t+=1,this.type[2]=1):this.type[2]=0,/\W/.test(e)?(t+=1,this.type[3]=1):this.type[3]=0),t},changeIcon:function(){this.$emit("changecolor",{type:this.type,new_password:this.new_password})}},watch:{new_password:function(e){this.msgText=this.checkStrong(e),this.$emit("changecolor",{type:this.type,new_password:e})}}},n=i,o=(s("6e64"),s("2877")),l=Object(o["a"])(n,a,r,!1,null,"1d23b9b6",null);t["a"]=l.exports},"9a67":function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"z-50 fixed inset-0 flex items-start justify-center px-4 py-8 pointer-events-none sm:p-6",attrs:{id:"layer"}},[s("div",{staticClass:"max-w-lg w-full pointer-events-auto transform ease-out duration-300 transition-all translate-y-0 opacity-100"},[s("div",{staticClass:"rounded-sm transition ease-in duration-200 p-6 leading-5 shadow-lg text-white  my-2 shadow-lg",class:{"bg-teal-500":!e.type,"bg-red-500":"error"===e.type},attrs:{"data-testid":"flash-message"}},[s("div",{staticClass:"flex items-center justify-between flex-wrap flex-1"},[s("div",{staticClass:"w-0 flex-1 flex items-center"},[s("div",{staticClass:"text-4xl"},[e.type?"error"===e.type?s("i",{staticClass:"fa fa-close"}):e._e():s("i",{staticClass:"fa fa-check-square-o"})]),s("div",{staticClass:"ml-6 flex flex-1 text-base"},[e._v(e._s(e.msg))])])])])])])},r=[],i={name:"TipLayer",data:function(){return{msg:null,type:null}}},n=i,o=(s("9c81"),s("2877")),l=Object(o["a"])(n,a,r,!1,null,"1246e238",null),c=l.exports,d=s("2b0e"),p=d["a"].extend(c);t["a"]={tip:function(e,t,s){var a=new p;a.msg=e,a.type=t;var r=document.createElement("div");r.setAttribute("id","layerBrdr"),document.body.appendChild(r),a.$mount("#layerBrdr"),setTimeout((function(){var e=document.getElementById("layer");return a.$destroy(),e.parentNode.removeChild(e),s?s():null}),3e3)}}},"9c81":function(e,t,s){"use strict";s("0e50")}}]);
//# sourceMappingURL=chunk-793d148d.74642df9.js.map