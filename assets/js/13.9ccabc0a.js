(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{174:function(a,t,s){"use strict";s.r(t);var e=s(20),r=Object(e.a)({},function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"controller"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#controller","aria-hidden":"true"}},[a._v("#")]),a._v(" Controller")]),a._v(" "),s("h2",{attrs:{id:"什么是控制器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是控制器","aria-hidden":"true"}},[a._v("#")]),a._v(" 什么是控制器")]),a._v(" "),s("p",[a._v("控制器负责解析用户输入，并向用户返回处理结果。")]),a._v(" "),s("p",[a._v("在控制器中，我们可以指定什么时候（"),s("strong",[a._v("路由")]),a._v("）去响应，怎么样（"),s("strong",[a._v("服务")]),a._v("）去返回结果。")]),a._v(" "),s("h2",{attrs:{id:"控制器加载与编写"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#控制器加载与编写","aria-hidden":"true"}},[a._v("#")]),a._v(" 控制器加载与编写")]),a._v(" "),s("h3",{attrs:{id:"加载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#加载","aria-hidden":"true"}},[a._v("#")]),a._v(" 加载")]),a._v(" "),s("p",[a._v("控制器也是通过约定的策略进行加载：默认加载"),s("code",[a._v("app/controller")]),a._v("下所有"),s("code",[a._v("*.controller")]),a._v("文件。")]),a._v(" "),s("h3",{attrs:{id:"控制器编写"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#控制器编写","aria-hidden":"true"}},[a._v("#")]),a._v(" 控制器编写")]),a._v(" "),s("p",[s("code",[a._v("Ursa")]),a._v("的控制器需要通过类的继承的方式实现，方法必须都返回框架内置的 Result 静态方法，如下代码")]),a._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" Controller "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("from")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'@ursajs/core'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("export")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("default")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Index")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("extends")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Controller")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("index")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 等同于 return Result.send('this is index router');")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("send")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'this is index router'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br")])]),s("p",[a._v("命中路由规则的控制器，在请求时会被实例化，以下属性可以通过"),s("code",[a._v("this")]),a._v("获取：")]),a._v(" "),s("ol",[s("li",[s("code",[a._v("ctx")]),a._v(":  当前请求上下文")]),a._v(" "),s("li",[s("code",[a._v("req")]),a._v(": "),s("code",[a._v("Request")]),a._v("实例")]),a._v(" "),s("li",[s("code",[a._v("res")]),a._v(": "),s("code",[a._v("Response")]),a._v("实例")])]),a._v(" "),s("h2",{attrs:{id:"获取请求参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#获取请求参数","aria-hidden":"true"}},[a._v("#")]),a._v(" 获取请求参数")]),a._v(" "),s("h3",{attrs:{id:"query和路由参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#query和路由参数","aria-hidden":"true"}},[a._v("#")]),a._v(" query和路由参数")]),a._v(" "),s("p",[a._v("详见Router#@Param、@Query修饰器")]),a._v(" "),s("h3",{attrs:{id:"header"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#header","aria-hidden":"true"}},[a._v("#")]),a._v(" header")]),a._v(" "),s("p",[a._v("获取header参数可以用"),s("code",[a._v("this.header(name)")]),a._v("方法获取。")]),a._v(" "),s("h3",{attrs:{id:"cookie"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cookie","aria-hidden":"true"}},[a._v("#")]),a._v(" cookie")]),a._v(" "),s("p",[a._v("在控制器中，可以通过"),s("code",[a._v("this.ctx.cookies.get")]),a._v("方法获取cookie。")]),a._v(" "),s("h3",{attrs:{id:"session"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#session","aria-hidden":"true"}},[a._v("#")]),a._v(" session")]),a._v(" "),s("p",[a._v("默认情况下，"),s("code",[a._v("Ursa")]),a._v("的Session插件通过cookie存储session，详细的配置和用法可以通过Plugin#Session获取。")]),a._v(" "),s("p",[a._v("在控制器中，可以通过"),s("code",[a._v("this.ctx.session")]),a._v("对象获取相应的session值。")]),a._v(" "),s("h3",{attrs:{id:"body和上传文件的获取"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#body和上传文件的获取","aria-hidden":"true"}},[a._v("#")]),a._v(" body和上传文件的获取")]),a._v(" "),s("h2",{attrs:{id:"发送响应"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#发送响应","aria-hidden":"true"}},[a._v("#")]),a._v(" 发送响应")]),a._v(" "),s("h3",{attrs:{id:"status"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#status","aria-hidden":"true"}},[a._v("#")]),a._v(" status")]),a._v(" "),s("p",[a._v("正确的设置http的状态码，可以增强请求的语义性。可以通过"),s("code",[a._v("this.status = code")]),a._v("设置返回的状态码。")]),a._v(" "),s("h3",{attrs:{id:"header-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#header-2","aria-hidden":"true"}},[a._v("#")]),a._v(" header")]),a._v(" "),s("p",[a._v("通过"),s("code",[a._v("this.header.header(name, value)")]),a._v("可以增加响应头，请注意，如果请求已返回，将无法正常返回新设置的响应头。")]),a._v(" "),s("h3",{attrs:{id:"body"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#body","aria-hidden":"true"}},[a._v("#")]),a._v(" body")]),a._v(" "),s("p",[a._v("返回的数据都可以通过"),s("code",[a._v("this.ctx.body")]),a._v("来设置。"),s("code",[a._v("Ursa")]),a._v("也内置了一些处理返回的内置方法，方便使用。")]),a._v(" "),s("h4",{attrs:{id:"this-send-val-status"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#this-send-val-status","aria-hidden":"true"}},[a._v("#")]),a._v(" "),s("code",[a._v("this.send(val, status)")])]),a._v(" "),s("p",[a._v("用于快捷返回文本内容，第二个参数为返回状态码。")]),a._v(" "),s("h4",{attrs:{id:"this-json-data"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#this-json-data","aria-hidden":"true"}},[a._v("#")]),a._v(" "),s("code",[a._v("this.json(data)")])]),a._v(" "),s("p",[a._v("返回json数据，并将"),s("code",[a._v("content-type")]),a._v("设置为"),s("code",[a._v("application/json")]),a._v("。")]),a._v(" "),s("h4",{attrs:{id:"this-jsonp-data-callback"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#this-jsonp-data-callback","aria-hidden":"true"}},[a._v("#")]),a._v(" "),s("code",[a._v("this.jsonp(data, callback)")])]),a._v(" "),s("p",[a._v("以jsonp的形式返回数据。")]),a._v(" "),s("h4",{attrs:{id:"this-view-templatepath-data"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#this-view-templatepath-data","aria-hidden":"true"}},[a._v("#")]),a._v(" "),s("code",[a._v("this.view(templatePath, data)")])]),a._v(" "),s("p",[a._v("通过渲染模板的方式将数据返回。")])])},[],!1,null,null,null);t.default=r.exports}}]);