(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{364:function(s,t,a){s.exports=a.p+"assets/img/UMajs.69973084.png"},397:function(s,t,a){"use strict";a.r(t);var n=a(42),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"框架介绍"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#框架介绍"}},[s._v("#")]),s._v(" 框架介绍")]),s._v(" "),n("p",[n("img",{attrs:{src:a(364),alt:"image"}})]),s._v(" "),n("p",[s._v("Uma 是基于 Koa2 使用 TypeScript 开发、通过装饰器使用大部分功能的 Web 框架。")]),s._v(" "),n("h2",{attrs:{id:"特性"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#特性"}},[s._v("#")]),s._v(" 特性")]),s._v(" "),n("ul",[n("li",[s._v("基于 Koa2，兼容 middleware")]),s._v(" "),n("li",[s._v("装饰器 (decorator)，代码组织更优雅方便")]),s._v(" "),n("li",[s._v("依赖注入 (IOC)，模块依赖不再需要引入和实例化")]),s._v(" "),n("li",[s._v("面向切面 (AOP)，基于装饰器的 AOP 可以很方便的使用在各种方法上")]),s._v(" "),n("li",[s._v("统一返回 (Result) 让编码更简单清晰")]),s._v(" "),n("li",[s._v("自定义装饰器 (createArgDecorator) 可以快速的扩展参数装饰器，用于参数校验、参数转换、参数聚合等。")]),s._v(" "),n("li",[s._v("插件、切面形式让中间件使用更优雅")]),s._v(" "),n("li",[s._v("高稳定高性能，单元测试覆盖全")]),s._v(" "),n("li",[s._v("路由分层，优化路由寻址")]),s._v(" "),n("li",[s._v("推荐 TS 开发，开发维护更清晰，对于依赖注入的方法使用也更便捷")]),s._v(" "),n("li",[s._v("统一约束和规范")])]),s._v(" "),n("h2",{attrs:{id:"特性展示"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#特性展示"}},[s._v("#")]),s._v(" 特性展示")]),s._v(" "),n("p",[s._v("下面代码展示了一下几个特性：")]),s._v(" "),n("blockquote",[n("p",[s._v("1、通过 "),n("code",[s._v("createArgDecorator")]),s._v(" 创建参数装饰器，对 "),n("code",[s._v("age")]),s._v(" 参数进行校验和类型转换")]),s._v(" "),n("p",[s._v("2、controller 通过框架提供的 "),n("code",[s._v("Result")]),s._v(" 简单的响应数据")]),s._v(" "),n("p",[s._v("3、"),n("code",[s._v("Aspect")]),s._v(" 通过 "),n("code",[s._v("around")]),s._v(" 方法进行方法的拦截，对方法的 "),n("code",[s._v("参数")]),s._v(" 进行校验, 对 "),n("code",[s._v("返回值")]),s._v(" 进行校验/修改")])]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" AgeCheck "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("createArgDecorator")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("ctx"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" IContext"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" ageKey"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" string")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" age "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" ctx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("query"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("ageKey"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("age "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("undefined")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" Result"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("json")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        code"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        msg"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'请加上 age 参数'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    age "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("age"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Number"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("isNaN")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("age"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" age "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" age "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("120")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" Result"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("json")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        code"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        msg"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'请传入正确的 age 参数'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" age"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// index.controller.ts")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" Method "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'method.aspect'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n@"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("Aspect")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Method"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 可以装饰在方法上对单一方法进行装饰")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("extends")]),s._v("  BaseController "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n    @"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("Path")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/hello'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("index")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("@"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("Query")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'name'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" name"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" string"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" @"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("AgeCheck")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'age'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" age"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" number "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" Result"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("json")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            age"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br")])]),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// method.aspect.ts")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" IAspect"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" IProceedJoinPoint "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'@umajs/core'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("implements")]),s._v(" IAspect "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("async")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("around")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("proceedPoint"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" IProceedJoinPoint")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" proceed"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" args "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" proceedPoint"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 校验参数")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("args"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!==")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Umajs'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" Result"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("send")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'name 必须为 Umajs'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" result "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("await")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("proceed")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v("args"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("result"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("type "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'json'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 为 JSON 返回值加上时间戳")]),s._v("\n            result"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("data"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("time "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Date")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" result"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);