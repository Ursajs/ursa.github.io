"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[315],{3438:(e,l,r)=>{r.r(l),r.d(l,{default:()=>Ae});var n=r(3168),a=r(6984),t=r(1518),s=r(1340);const o=(0,n._)("h1",{id:"uma-与-koa",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#uma-与-koa","aria-hidden":"true"},"#"),(0,n.Uk)(" Uma 与 Koa")],-1),i=(0,n._)("blockquote",null,[(0,n._)("p",null,"使用客户端与服务端通用开发语言的问题是一直是开发者需要面临的问题，而 NodeJs 的出现使得 JavaScript 一跃成为最流行的 web 开发语言。各类 node web 框架层出不穷，其中不乏著名的 Express、Koa......")],-1),c=(0,n._)("h2",{id:"koa",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#koa","aria-hidden":"true"},"#"),(0,n.Uk)(" Koa")],-1),p=(0,n.Uk)("Express 无疑是使用最广泛的 node 框架，从 github start 可以看出来其受欢迎的程度，但基于 ECMAScript 版本的变化，Express 很多功能受到 ES5 的约束，比如一直令人头疼的"),_={href:"http://callbackhell.com/",target:"_blank",rel:"noopener noreferrer"},u=(0,n.Uk)("Callback Hell"),d=(0,n.Uk)("。"),h=(0,n.Uk)("为解决一系列问题，"),m={href:"https://github.com/tj",target:"_blank",rel:"noopener noreferrer"},k=(0,n.Uk)("TJ"),b=(0,n.Uk)("发现对 Express 进行重构似乎更加困难，于是就有了现在的 Koa。"),U=(0,n._)("h3",{id:"架构设计",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#架构设计","aria-hidden":"true"},"#"),(0,n.Uk)(" 架构设计")],-1),g=(0,n.Uk)("Express 一体式的架构设计能够让开发者快速的搭建一个 node server，其自身集成了例如 "),y={href:"https://expressjs.com/en/starter/static-files.html",target:"_blank",rel:"noopener noreferrer"},D=(0,n.Uk)("static"),f=(0,n.Uk)("、 "),x={href:"https://expressjs.com/en/guide/routing.html",target:"_blank",rel:"noopener noreferrer"},C=(0,n.Uk)("router"),F=(0,n.Uk)("、 "),w={href:"https://expressjs.com/en/guide/using-template-engines.html",target:"_blank",rel:"noopener noreferrer"},v=(0,n.Uk)("views"),A=(0,n.Uk)(" 等功能，能够为开发者提供静态文件、路由方法、模板引擎等服务。庞大的社区也为其提供了众多中间件模块，其成熟稳定的生态环境是众多开发者选择的关键因素。但是这也使整个框架显得较为厚重，毕竟一部分功能开发者可能并不会使用到。"),E=(0,n._)("p",null,"而 Koa 则是摒弃了原有思想，致力于实现一个轻量级应用框架,事实上它确实非常轻巧，只有大约 550 行代码。它将原有功能进行拆分，分包成各个模块，因此拥有大量有用的方法但占用空间很小,开发者可以根据需要进行引用。",-1),K=(0,n._)("h3",{id:"middleware",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#middleware","aria-hidden":"true"},"#"),(0,n.Uk)(" Middleware")],-1),O=(0,n._)("p",null,"核心设计的不同也使得 Koa 与 Express 风格的中间件不兼容，大量原社区资源无法直接利用。",-1),S=(0,n._)("ul",null,[(0,n._)("li",null,[(0,n._)("strong",null,"模型")])],-1),j=(0,n._)("p",null,[(0,n.Uk)("相比 Express 中间件执行的线性流程，Koa 采用堆栈形式的先进后出，可以更全面的对 HTTP 流程做出响应，下图为 Koa 洋葱模型："),(0,n._)("br"),(0,n._)("img",{src:a,alt:"Koa onion"})],-1),P=(0,n.Uk)("Express 中间件只有两个参数 request 与 response，Koa 2.x 比 Express 增加了一个上下文的对象 "),W={href:"https://github.com/koajs/koa/blob/master/docs/api/context.md",target:"_blank",rel:"noopener noreferrer"},T=(0,n.Uk)("Context"),B=(0,n.Uk)("， 并且将 request 与 response 挂载在 context 上作为第一个参数传入。"),I=(0,n._)("p",null,"在 Koa 中开发者可以很方便地对 ctx 对象进行拓展，并且在所有中间件中进行共享。",-1),J=(0,n._)("h3",{id:"error-handling",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#error-handling","aria-hidden":"true"},"#"),(0,n.Uk)(" Error handling")],-1),M=(0,n._)("p",null,[(0,n.Uk)("Express 附带一个错误处理程序，但使用起来较为繁琐，对于异步代码需要手动调用 next 传递错误信息。"),(0,n._)("br"),(0,n.Uk)(" Koa 配合 "),(0,n._)("code",null,"try..catch.."),(0,n.Uk)(" 的错误处理方式便显得更加优雅。")],-1),z=(0,n._)("div",{class:"language-javascript ext-js line-numbers-mode"},[(0,n._)("pre",{class:"shiki",style:{"background-color":"#0d1117"}},[(0,n._)("code",null,[(0,n._)("span",{class:"line"},[(0,n._)("span",{style:{color:"#C9D1D9"}},"app."),(0,n._)("span",{style:{color:"#D2A8FF"}},"use"),(0,n._)("span",{style:{color:"#C9D1D9"}},"("),(0,n._)("span",{style:{color:"#FF7B72"}},"async"),(0,n._)("span",{style:{color:"#C9D1D9"}}," ("),(0,n._)("span",{style:{color:"#FFA657"}},"ctx"),(0,n._)("span",{style:{color:"#C9D1D9"}},", "),(0,n._)("span",{style:{color:"#FFA657"}},"next"),(0,n._)("span",{style:{color:"#C9D1D9"}},") "),(0,n._)("span",{style:{color:"#FF7B72"}},"=>"),(0,n._)("span",{style:{color:"#C9D1D9"}}," {")]),(0,n.Uk)("\n"),(0,n._)("span",{class:"line"},[(0,n._)("span",{style:{color:"#C9D1D9"}},"  "),(0,n._)("span",{style:{color:"#FF7B72"}},"try"),(0,n._)("span",{style:{color:"#C9D1D9"}}," {")]),(0,n.Uk)("\n"),(0,n._)("span",{class:"line"},[(0,n._)("span",{style:{color:"#C9D1D9"}},"    "),(0,n._)("span",{style:{color:"#FF7B72"}},"await"),(0,n._)("span",{style:{color:"#C9D1D9"}}," "),(0,n._)("span",{style:{color:"#D2A8FF"}},"next"),(0,n._)("span",{style:{color:"#C9D1D9"}},"()")]),(0,n.Uk)("\n"),(0,n._)("span",{class:"line"},[(0,n._)("span",{style:{color:"#C9D1D9"}},"  } "),(0,n._)("span",{style:{color:"#FF7B72"}},"catch"),(0,n._)("span",{style:{color:"#C9D1D9"}}," (err) {")]),(0,n.Uk)("\n"),(0,n._)("span",{class:"line"},[(0,n._)("span",{style:{color:"#C9D1D9"}},"    ctx.status "),(0,n._)("span",{style:{color:"#FF7B72"}},"="),(0,n._)("span",{style:{color:"#C9D1D9"}}," err.status "),(0,n._)("span",{style:{color:"#FF7B72"}},"||"),(0,n._)("span",{style:{color:"#C9D1D9"}}," "),(0,n._)("span",{style:{color:"#79C0FF"}},"500")]),(0,n.Uk)("\n"),(0,n._)("span",{class:"line"},[(0,n._)("span",{style:{color:"#C9D1D9"}},"    ctx.body "),(0,n._)("span",{style:{color:"#FF7B72"}},"="),(0,n._)("span",{style:{color:"#C9D1D9"}}," { info: "),(0,n._)("span",{style:{color:"#A5D6FF"}},"'error...'"),(0,n._)("span",{style:{color:"#C9D1D9"}}," }")]),(0,n.Uk)("\n"),(0,n._)("span",{class:"line"},[(0,n._)("span",{style:{color:"#C9D1D9"}},"    ctx.app."),(0,n._)("span",{style:{color:"#D2A8FF"}},"emit"),(0,n._)("span",{style:{color:"#C9D1D9"}},"("),(0,n._)("span",{style:{color:"#A5D6FF"}},"'error'"),(0,n._)("span",{style:{color:"#C9D1D9"}},", err, "),(0,n._)("span",{style:{color:"#79C0FF"}},"this"),(0,n._)("span",{style:{color:"#C9D1D9"}},")")]),(0,n.Uk)("\n"),(0,n._)("span",{class:"line"},[(0,n._)("span",{style:{color:"#C9D1D9"}},"  }")]),(0,n.Uk)("\n"),(0,n._)("span",{class:"line"},[(0,n._)("span",{style:{color:"#C9D1D9"}},"})")]),(0,n.Uk)("\n"),(0,n._)("span",{class:"line"})])]),(0,n._)("div",{class:"line-numbers"},[(0,n._)("span",{class:"line-number"},"1"),(0,n._)("br"),(0,n._)("span",{class:"line-number"},"2"),(0,n._)("br"),(0,n._)("span",{class:"line-number"},"3"),(0,n._)("br"),(0,n._)("span",{class:"line-number"},"4"),(0,n._)("br"),(0,n._)("span",{class:"line-number"},"5"),(0,n._)("br"),(0,n._)("span",{class:"line-number"},"6"),(0,n._)("br"),(0,n._)("span",{class:"line-number"},"7"),(0,n._)("br"),(0,n._)("span",{class:"line-number"},"8"),(0,n._)("br"),(0,n._)("span",{class:"line-number"},"9"),(0,n._)("br")])],-1),q=(0,n._)("h2",{id:"uma",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#uma","aria-hidden":"true"},"#"),(0,n.Uk)(" Uma")],-1),R=(0,n._)("p",null,"使用 Koa，你可以很快构建出性能出色的 Web 应用程序，不再被回调所困扰、更快的处理错误......但 Koa 作为一个轻量级框架它更多地只是提供一些基础性服务。",-1),G=(0,n._)("p",null,"Uma 在 Koa 2 的基础上对其进行了拓展，致力于为开发者提供一个更加强大、便捷、易于开发和维护的企业级 Web 应用框架。",-1),H=(0,n._)("h2",{id:"架构",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#架构","aria-hidden":"true"},"#"),(0,n.Uk)(" 架构")],-1),N=(0,n._)("p",null,[(0,n._)("img",{src:t,alt:"image"})],-1),L=(0,n._)("h2",{id:"流程图",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#流程图","aria-hidden":"true"},"#"),(0,n.Uk)(" 流程图")],-1),Z=(0,n._)("p",null,[(0,n._)("img",{src:s,alt:"image"})],-1),Y=(0,n._)("blockquote",null,[(0,n._)("p",null,"用户请求达到 router"),(0,n._)("p",null,"router 解析请求穿过 plugin 中的中间件，然后到达 controller"),(0,n._)("p",null,"controller 可以通过 IOC 调用 service 和 resource"),(0,n._)("p",null,"controller、service、resource 等可以通过 AOP 的 Around 进行切面开发"),(0,n._)("p",null,"controller 返回 Result，Umajs 解析 Result 按 Koa 框架格式返回数据"),(0,n._)("p",null,"AOP 可以对 controller、service、resource 进行切面开发，还可以将 middleware 封装成 Around 对 controller 进行切页面开发"),(0,n._)("p",null,"中间件（middleware）有提供两种形式使用，一种是插件配置(plugin.config.ts)，一种是封装成 Around 以装饰器形式使用"),(0,n._)("p",null,"Plugin 有两种形式进行扩展，一种中间件形式、一种复合形式")],-1),Q=(0,n._)("h2",{id:"特性",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#特性","aria-hidden":"true"},"#"),(0,n.Uk)(" 特性")],-1),V=(0,n._)("h3",{id:"typescript",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#typescript","aria-hidden":"true"},"#"),(0,n.Uk)(" TypeScript")],-1),X=(0,n.Uk)("如果你有过 Java 开发经验，那你一定体会过静态语言所带来的优势。 "),$={href:"https://www.typescriptlang.org/",target:"_blank",rel:"noopener noreferrer"},ee=(0,n.Uk)("TypeScript"),le=(0,n.Uk)(" 作为 JavaScript 的超集，使得 JS 能够实现静态类型检测，更加有利于构建复杂的大型项目。"),re=(0,n._)("p",null,[(0,n.Uk)("Uma 使用 TS 进行源码开发，我们强烈建议开发者配合使用 "),(0,n._)("code",null,"Uma"),(0,n.Uk)(" + "),(0,n._)("code",null,"TS"),(0,n.Uk)(" 。")],-1),ne=(0,n._)("ul",null,[(0,n._)("li",null,[(0,n._)("strong",null,"易于理解")])],-1),ae=(0,n._)("p",null,"代码中有函数参数类型、返回值类型、变量类型以及泛型约束这些类型信息作为辅助，能让生疏的代码更易于理解。这在接手新项目、阅读开源代码以及代码评审实践中都能带来很多便利。",-1),te=(0,n._)("ul",null,[(0,n._)("li",null,[(0,n._)("strong",null,"IDE 支持")])],-1),se=(0,n._)("p",null,"由于静态类型的原因，一些 IDE 能够为开发者提供比往常更多的预测性辅助功能，如智能补全与路径跟踪。如果你不想在运行时才发现一堆错误提示，那么 TS 将是一个很好的选择。",-1),oe=(0,n._)("ul",null,[(0,n._)("li",null,[(0,n._)("strong",null,"新特性与兼容")])],-1),ie=(0,n._)("p",null,"TS 较好的兼容了一些未来语法，你可以使用 ES6、ES7 及更高版本中的新功能，编译器会为你将他们转换为 ES5 或者你所指定的内容。",-1),ce=(0,n._)("h3",{id:"ioc-di",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#ioc-di","aria-hidden":"true"},"#"),(0,n.Uk)(" IOC / DI")],-1),pe=(0,n.Uk)("事实上 "),_e={href:"https://www.tutorialsteacher.com/ioc/inversion-of-control",target:"_blank",rel:"noopener noreferrer"},ue=(0,n.Uk)("控制反转"),de=(0,n.Uk)("与 "),he={href:"https://www.tutorialsteacher.com/ioc/dependency-injection",target:"_blank",rel:"noopener noreferrer"},me=(0,n.Uk)("依赖注入"),ke=(0,n.Uk)(" 是同一个概念，Uma 框架设计继承了这样的思想，你可以将与核心业务无关的代码抽离出去交给系统来为你寻找依赖，这对于代码解耦有着重要的意义。"),be=(0,n._)("p",null,"对于某几个类，你可以选择不使用 DI，但是对于一个大型项目来说依赖管理要复杂得多，而 Uma 框架可以很好的来帮助你管理你的依赖项和对象之间的交互。特别是在编写单元测试时，你可以独立于其他对象添加和测试对象，而不需要设置任何无关项。",-1),Ue=(0,n._)("h3",{id:"aop",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#aop","aria-hidden":"true"},"#"),(0,n.Uk)(" AOP")],-1),ge=(0,n._)("p",null,"AOP（面向切面编程）扩展了传统的 OOP（面向对象编程）模型，以改善跨不同对象层次结构的代码重用。AOP 基本概念是一个切面，这是一种常见的行为，通常分散在方法，类，对象层次结构甚至整个对象模型中。",-1),ye=(0,n._)("p",null,[(0,n.Uk)("例如：我们需要在代码中添加日志功能，但日志打印并不是我们核心业务需要关注的。"),(0,n._)("br"),(0,n.Uk)(" 在 AOP 中，日志功能作为横切关注点，会建议将其抽象化并封装到一个切面中去。")],-1),De=(0,n._)("p",null,"Uma 提供 @Around 装饰器作为 IOC 容器，你可以在 aspect 文件夹下新建自己的切面，实现5 类通知：",-1),fe=(0,n._)("ul",null,[(0,n._)("li",null,"前置通知：在目标方法之前执行"),(0,n._)("li",null,"后置通知：在目标方法之后执行"),(0,n._)("li",null,"异常通知：当执行目标方法出现异常时执行"),(0,n._)("li",null,"最终通知：当目标方法有返回值之后执行，在后置通知之后"),(0,n._)("li",null,"环绕通知：在最开始调用时执行，会将目标方法作为参数传入，对目标方法(proceed)及入参(args)、出参(result)进行拦截。")],-1),xe=(0,n._)("p",null,"开发者可以通过调用@Around(func)的方式在类或方法中织入切面。",-1),Ce=(0,n.Uk)("更多使用方式可查看"),Fe=(0,n.Uk)("AOP"),we=(0,n.Uk)("一节。"),ve={},Ae=(0,r(6215).Z)(ve,[["render",function(e,l){const r=(0,n.up)("OutboundLink"),a=(0,n.up)("RouterLink");return(0,n.wg)(),(0,n.iD)(n.HY,null,[o,i,c,(0,n._)("p",null,[p,(0,n._)("a",_,[u,(0,n.Wm)(r)]),d]),(0,n._)("p",null,[h,(0,n._)("a",m,[k,(0,n.Wm)(r)]),b]),U,(0,n._)("p",null,[g,(0,n._)("a",y,[D,(0,n.Wm)(r)]),f,(0,n._)("a",x,[C,(0,n.Wm)(r)]),F,(0,n._)("a",w,[v,(0,n.Wm)(r)]),A]),E,K,O,S,j,(0,n._)("p",null,[P,(0,n._)("a",W,[T,(0,n.Wm)(r)]),B]),I,J,M,z,q,R,G,H,N,L,Z,Y,Q,V,(0,n._)("p",null,[X,(0,n._)("a",$,[ee,(0,n.Wm)(r)]),le]),re,ne,ae,te,se,oe,ie,ce,(0,n._)("p",null,[pe,(0,n._)("a",_e,[ue,(0,n.Wm)(r)]),de,(0,n._)("a",he,[me,(0,n.Wm)(r)]),ke]),be,Ue,ge,ye,De,fe,xe,(0,n._)("p",null,[Ce,(0,n.Wm)(a,{to:"/development/AOP.html"},{default:(0,n.w5)((()=>[Fe])),_:1}),we])],64)}]])},7226:(e,l,r)=>{r.r(l),r.d(l,{data:()=>n});const n={key:"v-7b2f72fa",path:"/newbieGuide/Uma.html",title:"Uma 与 Koa",lang:"zh-CN",frontmatter:{head:[["meta",{property:"og:url",content:"/v2/newbieGuide/Uma.html"}],["meta",{property:"og:site_name",content:"UMajs"}],["meta",{property:"og:title",content:"Uma 与 Koa"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"og:locale:alternate",content:"en-US"}],["meta",{name:"twitter:card",content:"summary_large_image"}],["meta",{name:"twitter:image:alt",content:"UMajs"}],["meta",{property:"article:author",content:"wuba"}],["meta",{property:"og:restrictions:age",content:"3+"}]]},excerpt:"",headers:[{level:2,title:"Koa",slug:"koa",children:[{level:3,title:"架构设计",slug:"架构设计",children:[]},{level:3,title:"Middleware",slug:"middleware",children:[]},{level:3,title:"Error handling",slug:"error-handling",children:[]}]},{level:2,title:"Uma",slug:"uma",children:[]},{level:2,title:"架构",slug:"架构",children:[]},{level:2,title:"流程图",slug:"流程图",children:[]},{level:2,title:"特性",slug:"特性",children:[{level:3,title:"TypeScript",slug:"typescript",children:[]},{level:3,title:"IOC / DI",slug:"ioc-di",children:[]},{level:3,title:"AOP",slug:"aop",children:[]}]}],filePathRelative:"newbieGuide/Uma.md",git:{updatedTime:1634896538e3,contributors:[{name:"BubbleM",email:"bubblelm@163.com",commits:1},{name:"dazjean",email:"zunyi_zjj@163.com",commits:1}]}}},6215:(e,l)=>{l.Z=(e,l)=>{for(const[r,n]of l)e[r]=n;return e}},1518:(e,l,r)=>{e.exports=r.p+"assets/img/design.54cd7acb.png"},6984:(e,l,r)=>{e.exports=r.p+"assets/img/koaOnion.a948a3c5.png"},1340:(e,l,r)=>{e.exports=r.p+"assets/img/process.5866e38b.png"}}]);