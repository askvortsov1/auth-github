module.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=5)}([function(t,e){t.exports=flarum.core.compat.app},,,,function(t,e){t.exports=flarum.core.compat["components/SettingsModal"]},function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r);var u=n(4),i=function(t){function e(){return t.apply(this,arguments)||this}!function(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}(e,t);var n=e.prototype;return n.className=function(){return"GithubSettingsModal Modal--small"},n.title=function(){return app.translator.trans("flarum-auth-github.admin.github_settings.title")},n.form=function(){return[m("div",{className:"Form-group"},m("label",null,app.translator.trans("flarum-auth-github.admin.github_settings.client_id_label")),m("input",{className:"FormControl",bidi:this.setting("flarum-auth-github.client_id")})),m("div",{className:"Form-group"},m("label",null,app.translator.trans("flarum-auth-github.admin.github_settings.client_secret_label")),m("input",{className:"FormControl",bidi:this.setting("flarum-auth-github.client_secret")}))]},e}(n.n(u).a);o.a.initializers.add("flarum-auth-github",function(){o.a.extensionSettings["flarum-auth-github"]=function(){return o.a.modal.show(new i)}})}]);
//# sourceMappingURL=admin.js.map