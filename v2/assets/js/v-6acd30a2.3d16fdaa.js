"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[319],{6963:(s,l,n)=>{n.r(l),n.d(l,{default:()=>v});var e=n(4386),a=n(5811);const o=(0,e._)("h1",{id:"面向切面-aop",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#面向切面-aop","aria-hidden":"true"},"#"),(0,e.Uk)(" 面向切面（AOP）")],-1),r=(0,e._)("p",null,"AOP(Aspect Oriented Programming)面向切面编程是与 OOP(Object Oriented Programming)面向对象编程并列的编程思想。相对于 IOC(依赖注入)而言，AOP 是一种可以在不修改源代码的情况下给程序动态添加功能的一种方式。",-1),t=(0,e._)("p",null,"使用 AOP 可以对业务逻辑的各个部分进行隔离，从而使得业务逻辑各部分之间的耦合度降低，提高程序的可重用性，同时提高了开发的效率。",-1),c=(0,e._)("h2",{id:"什么是切面-aspect",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#什么是切面-aspect","aria-hidden":"true"},"#"),(0,e.Uk)(" 什么是切面(Aspect)")],-1),_=(0,e._)("p",null,[(0,e.Uk)("AOP 称为"),(0,e._)("code",null,"面向切面编程"),(0,e.Uk)("，所以切面(Aspect)是 AOP 中一个很关键的点。")],-1),p=(0,e._)("p",null,"假设我们有一个订单系统，有如下两条线的功能，提交订单和查询订单，每个事件流都需要执行“验证用户信息”的操作，将这个功能框起来后，你可以把它当块板子，这块板子插入了一些控制流程，这块板子就可以当成是 AOP 中的一个切面。",-1),i=(0,e._)("p",null,[(0,e._)("img",{src:a,alt:"AOP"})],-1),u=(0,e._)("h2",{id:"通知",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#通知","aria-hidden":"true"},"#"),(0,e.Uk)(" 通知")],-1),y=(0,e._)("p",null,[(0,e._)("code",null,"通知"),(0,e.Uk)("是 AOP 中一个很重要的概念，所谓通知指的就是在拦截到方法之后要执行的代码。通知分为前置(before)、后置(after)、异常(afterThrowing)、最终(afterReturning)、环绕(around)通知五类。")],-1),d=(0,e._)("ul",null,[(0,e._)("li",null,"前置通知：在目标方法之前执行"),(0,e._)("li",null,"后置通知：在目标方法之后执行"),(0,e._)("li",null,"异常通知：当执行目标方法出现异常时调用"),(0,e._)("li",null,"最终通知：当目标方法有返回值之后执行，在后置通知之后"),(0,e._)("li",null,"环绕通知：在最开始调用时执行，会将目标方法作为参数传入，对目标方法(proceed)及入参(args)、出参(result)进行拦截，此方法必须返回 Result")],-1),F=(0,e._)("blockquote",null,[(0,e._)("p",null,[(0,e.Uk)("在 Uma 的 V1 版本我们实现了5个通知，在 V2 版本我们对通知进行了简化，减少用户对 AOP 理解的成本，保留了使用最多最灵活的 环绕"),(0,e._)("code",null,"around"),(0,e.Uk)("通知")])],-1),D=(0,e._)("h2",{id:"around-修饰器",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#around-修饰器","aria-hidden":"true"},"#"),(0,e.Uk)(" @Around 修饰器")],-1),m=(0,e._)("p",null,[(0,e.Uk)("在 Uma 中，可以通过修饰器"),(0,e._)("code",null,"@Around"),(0,e.Uk)("的方式为方法添加环绕通知，Around修饰器接收一个参数，作为通知方法")],-1),b=(0,e._)("p",null,[(0,e._)("strong",null,"类型声明")],-1),A=(0,e._)("div",{class:"language-typescript ext-ts line-numbers-mode"},[(0,e._)("pre",{class:"shiki",style:{"background-color":"#0d1117"}},[(0,e._)("code",null,[(0,e._)("span",{class:"line"},[(0,e._)("span",{style:{color:"#8B949E"}},"/**")]),(0,e.Uk)("\n"),(0,e._)("span",{class:"line"},[(0,e._)("span",{style:{color:"#8B949E"}}," * "),(0,e._)("span",{style:{color:"#FF7B72"}},"@param"),(0,e._)("span",{style:{color:"#8B949E"}}," "),(0,e._)("span",{style:{color:"#C9D1D9"}},"around"),(0,e._)("span",{style:{color:"#8B949E"}}," 要执行的通知方法，方法需要return Uma 提供的 Result结果")]),(0,e.Uk)("\n"),(0,e._)("span",{class:"line"},[(0,e._)("span",{style:{color:"#8B949E"}}," */")]),(0,e.Uk)("\n"),(0,e._)("span",{class:"line"},[(0,e._)("span",{style:{color:"#D2A8FF"}},"Around"),(0,e._)("span",{style:{color:"#C9D1D9"}},"(around: ("),(0,e._)("span",{style:{color:"#FFA657"}},"point"),(0,e._)("span",{style:{color:"#FF7B72"}},":"),(0,e._)("span",{style:{color:"#C9D1D9"}}," "),(0,e._)("span",{style:{color:"#FFA657"}},"IProceedJoinPoint"),(0,e._)("span",{style:{color:"#C9D1D9"}},") "),(0,e._)("span",{style:{color:"#FF7B72"}},"=>"),(0,e._)("span",{style:{color:"#C9D1D9"}}," "),(0,e._)("span",{style:{color:"#79C0FF"}},"Promise"),(0,e._)("span",{style:{color:"#FF7B72"}},"<"),(0,e._)("span",{style:{color:"#C9D1D9"}},"Result"),(0,e._)("span",{style:{color:"#FF7B72"}},"<"),(0,e._)("span",{style:{color:"#C9D1D9"}},"any"),(0,e._)("span",{style:{color:"#FF7B72"}},">>"),(0,e._)("span",{style:{color:"#C9D1D9"}},")")]),(0,e.Uk)("\n"),(0,e._)("span",{class:"line"})])]),(0,e._)("div",{class:"line-numbers"},[(0,e._)("span",{class:"line-number"},"1"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"2"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"3"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"4"),(0,e._)("br")])],-1),C=(0,e._)("p",null,[(0,e._)("strong",null,"示例")],-1),k=(0,e._)("div",{class:"language-javascript ext-js line-numbers-mode"},[(0,e._)("pre",{class:"shiki",style:{"background-color":"#0d1117"}},[(0,e._)("code",null,[(0,e._)("span",{class:"line"},[(0,e._)("span",{style:{color:"#FF7B72"}},"import"),(0,e._)("span",{style:{color:"#C9D1D9"}}," { BaseController, Result, Around } "),(0,e._)("span",{style:{color:"#FF7B72"}},"from"),(0,e._)("span",{style:{color:"#C9D1D9"}}," "),(0,e._)("span",{style:{color:"#A5D6FF"}},"'@umajs/core'"),(0,e._)("span",{style:{color:"#C9D1D9"}},";")]),(0,e.Uk)("\n"),(0,e._)("span",{class:"line"},[(0,e._)("span",{style:{color:"#FF7B72"}},"import"),(0,e._)("span",{style:{color:"#C9D1D9"}}," { method } "),(0,e._)("span",{style:{color:"#FF7B72"}},"from"),(0,e._)("span",{style:{color:"#C9D1D9"}}," "),(0,e._)("span",{style:{color:"#A5D6FF"}},"'../aspect/method.aspect'"),(0,e._)("span",{style:{color:"#C9D1D9"}},";")]),(0,e.Uk)("\n"),(0,e._)("span",{class:"line"}),(0,e.Uk)("\n"),(0,e._)("span",{class:"line"},[(0,e._)("span",{style:{color:"#FF7B72"}},"export"),(0,e._)("span",{style:{color:"#FFA657"}}," "),(0,e._)("span",{style:{color:"#FF7B72"}},"default"),(0,e._)("span",{style:{color:"#FFA657"}}," "),(0,e._)("span",{style:{color:"#FF7B72"}},"class"),(0,e._)("span",{style:{color:"#FFA657"}}," Index "),(0,e._)("span",{style:{color:"#FF7B72"}},"extends"),(0,e._)("span",{style:{color:"#FFA657"}}," "),(0,e._)("span",{style:{color:"#79C0FF"}},"BaseController"),(0,e._)("span",{style:{color:"#FFA657"}}," {")]),(0,e.Uk)("\n"),(0,e._)("span",{class:"line"},[(0,e._)("span",{style:{color:"#FFA657"}},"    "),(0,e._)("span",{style:{color:"#8B949E"}},"// 为index方法添加around修饰，method为对应要执行的around通知方法")]),(0,e.Uk)("\n"),(0,e._)("span",{class:"line"},[(0,e._)("span",{style:{color:"#FFA657"}},"    @"),(0,e._)("span",{style:{color:"#D2A8FF"}},"Around"),(0,e._)("span",{style:{color:"#FFA657"}},"("),(0,e._)("span",{style:{color:"#C9D1D9"}},"method"),(0,e._)("span",{style:{color:"#FFA657"}},")")]),(0,e.Uk)("\n"),(0,e._)("span",{class:"line"},[(0,e._)("span",{style:{color:"#FFA657"}},"    "),(0,e._)("span",{style:{color:"#D2A8FF"}},"index"),(0,e._)("span",{style:{color:"#FFA657"}},"() "),(0,e._)("span",{style:{color:"#C9D1D9"}},"{")]),(0,e.Uk)("\n"),(0,e._)("span",{class:"line"},[(0,e._)("span",{style:{color:"#C9D1D9"}},"      "),(0,e._)("span",{style:{color:"#FF7B72"}},"return"),(0,e._)("span",{style:{color:"#C9D1D9"}}," Result."),(0,e._)("span",{style:{color:"#D2A8FF"}},"send"),(0,e._)("span",{style:{color:"#C9D1D9"}},"("),(0,e._)("span",{style:{color:"#A5D6FF"}},"'ok'"),(0,e._)("span",{style:{color:"#C9D1D9"}},");")]),(0,e.Uk)("\n"),(0,e._)("span",{class:"line"},[(0,e._)("span",{style:{color:"#C9D1D9"}},"    }")]),(0,e.Uk)("\n"),(0,e._)("span",{class:"line"},[(0,e._)("span",{style:{color:"#FFA657"}},"}")]),(0,e.Uk)("\n"),(0,e._)("span",{class:"line"})])]),(0,e._)("div",{class:"line-numbers"},[(0,e._)("span",{class:"line-number"},"1"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"2"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"3"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"4"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"5"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"6"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"7"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"8"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"9"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"10"),(0,e._)("br")])],-1),h=(0,e._)("div",{class:"language-javascript ext-js line-numbers-mode"},[(0,e._)("pre",{class:"shiki",style:{"background-color":"#0d1117"}},[(0,e._)("code",null,[(0,e._)("span",{class:"line"},[(0,e._)("span",{style:{color:"#8B949E"}},"// /aspect/method.aspect.ts")]),(0,e.Uk)("\n"),(0,e._)("span",{class:"line"},[(0,e._)("span",{style:{color:"#FF7B72"}},"import"),(0,e._)("span",{style:{color:"#C9D1D9"}}," { IProceedJoinPoint } "),(0,e._)("span",{style:{color:"#FF7B72"}},"from"),(0,e._)("span",{style:{color:"#C9D1D9"}}," "),(0,e._)("span",{style:{color:"#A5D6FF"}},"'@umajs/core'"),(0,e._)("span",{style:{color:"#C9D1D9"}},";")]),(0,e.Uk)("\n"),(0,e._)("span",{class:"line"}),(0,e.Uk)("\n"),(0,e._)("span",{class:"line"},[(0,e._)("span",{style:{color:"#FF7B72"}},"export"),(0,e._)("span",{style:{color:"#C9D1D9"}}," "),(0,e._)("span",{style:{color:"#FF7B72"}},"async"),(0,e._)("span",{style:{color:"#C9D1D9"}}," "),(0,e._)("span",{style:{color:"#FF7B72"}},"function"),(0,e._)("span",{style:{color:"#C9D1D9"}}," "),(0,e._)("span",{style:{color:"#D2A8FF"}},"method"),(0,e._)("span",{style:{color:"#C9D1D9"}},"("),(0,e._)("span",{style:{color:"#FFA657"}},"proceedPoint"),(0,e._)("span",{style:{color:"#FF7B72"}},":"),(0,e._)("span",{style:{color:"#C9D1D9"}}," "),(0,e._)("span",{style:{color:"#FFA657"}},"IProceedJoinPoint"),(0,e._)("span",{style:{color:"#C9D1D9"}},"<"),(0,e._)("span",{style:{color:"#79C0FF"}},"any"),(0,e._)("span",{style:{color:"#C9D1D9"}},">) {")]),(0,e.Uk)("\n"),(0,e._)("span",{class:"line"},[(0,e._)("span",{style:{color:"#C9D1D9"}},"    "),(0,e._)("span",{style:{color:"#8B949E"}},"// 执行around before方法，即在被修饰方法执行前操作，当做一些前置校验的时候如果不满足可以直接return")]),(0,e.Uk)("\n"),(0,e._)("span",{class:"line"},[(0,e._)("span",{style:{color:"#C9D1D9"}},"    console."),(0,e._)("span",{style:{color:"#D2A8FF"}},"log"),(0,e._)("span",{style:{color:"#C9D1D9"}},"("),(0,e._)("span",{style:{color:"#A5D6FF"}},"'this is around'"),(0,e._)("span",{style:{color:"#C9D1D9"}},");")]),(0,e.Uk)("\n"),(0,e._)("span",{class:"line"}),(0,e.Uk)("\n"),(0,e._)("span",{class:"line"},[(0,e._)("span",{style:{color:"#C9D1D9"}},"    "),(0,e._)("span",{style:{color:"#8B949E"}},"// 执行被修饰的方法")]),(0,e.Uk)("\n"),(0,e._)("span",{class:"line"},[(0,e._)("span",{style:{color:"#C9D1D9"}},"    "),(0,e._)("span",{style:{color:"#FF7B72"}},"const"),(0,e._)("span",{style:{color:"#C9D1D9"}}," "),(0,e._)("span",{style:{color:"#79C0FF"}},"result"),(0,e._)("span",{style:{color:"#C9D1D9"}}," "),(0,e._)("span",{style:{color:"#FF7B72"}},"="),(0,e._)("span",{style:{color:"#C9D1D9"}}," "),(0,e._)("span",{style:{color:"#FF7B72"}},"await"),(0,e._)("span",{style:{color:"#C9D1D9"}}," proceedPoint."),(0,e._)("span",{style:{color:"#D2A8FF"}},"proceed"),(0,e._)("span",{style:{color:"#C9D1D9"}},"();")]),(0,e.Uk)("\n"),(0,e._)("span",{class:"line"},[(0,e._)("span",{style:{color:"#C9D1D9"}},"    ")]),(0,e.Uk)("\n"),(0,e._)("span",{class:"line"},[(0,e._)("span",{style:{color:"#C9D1D9"}},"    "),(0,e._)("span",{style:{color:"#8B949E"}},"// 执行around after方法，即在被修饰方法执行后操作")]),(0,e.Uk)("\n"),(0,e._)("span",{class:"line"},[(0,e._)("span",{style:{color:"#C9D1D9"}},"    console."),(0,e._)("span",{style:{color:"#D2A8FF"}},"log"),(0,e._)("span",{style:{color:"#C9D1D9"}},"("),(0,e._)("span",{style:{color:"#A5D6FF"}},"'this is around after'"),(0,e._)("span",{style:{color:"#C9D1D9"}},");")]),(0,e.Uk)("\n"),(0,e._)("span",{class:"line"}),(0,e.Uk)("\n"),(0,e._)("span",{class:"line"},[(0,e._)("span",{style:{color:"#C9D1D9"}},"    "),(0,e._)("span",{style:{color:"#FF7B72"}},"return"),(0,e._)("span",{style:{color:"#C9D1D9"}}," result;")]),(0,e.Uk)("\n"),(0,e._)("span",{class:"line"},[(0,e._)("span",{style:{color:"#C9D1D9"}},"}")]),(0,e.Uk)("\n"),(0,e._)("span",{class:"line"})])]),(0,e._)("div",{class:"line-numbers"},[(0,e._)("span",{class:"line-number"},"1"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"2"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"3"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"4"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"5"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"6"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"7"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"8"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"9"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"10"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"11"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"12"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"13"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"14"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"15"),(0,e._)("br")])],-1),U=(0,e._)("h3",{id:"middlewaretoaround",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#middlewaretoaround","aria-hidden":"true"},"#"),(0,e.Uk)(" middlewareToAround")],-1),B=(0,e.Uk)("Uma 提供了将"),g=(0,e._)("code",null,"Middleware(中间件)转Around(环绕)",-1),P=(0,e.Uk)("的方法"),E=(0,e._)("code",null,"middlewareToAround",-1),f=(0,e.Uk)("，将中间件转为 Around 修饰器后，我们可以以 AOP 的装饰器形式使用中间件，具体参考 "),O=(0,e.Uk)("Middleware 参考文档"),w={},v=(0,n(4110).Z)(w,[["render",function(s,l){const n=(0,e.up)("RouterLink");return(0,e.wg)(),(0,e.iD)(e.HY,null,[o,r,t,c,_,p,i,u,y,d,F,D,m,b,A,C,k,h,U,(0,e._)("p",null,[B,g,P,E,f,(0,e.Wm)(n,{to:"/%E5%9F%BA%E7%A1%80%E5%8A%9F%E8%83%BD/Middleware.html#aop-%E8%A3%85%E9%A5%B0%E5%99%A8%E5%BD%A2%E5%BC%8F"},{default:(0,e.w5)((()=>[O])),_:1})])],64)}]])},7571:(s,l,n)=>{n.r(l),n.d(l,{data:()=>e});const e={key:"v-6acd30a2",path:"/%E5%9F%BA%E7%A1%80%E5%8A%9F%E8%83%BD/AOP.html",title:"面向切面（AOP）",lang:"zh-CN",frontmatter:{head:[["meta",{property:"og:url",content:"/v2/%E5%9F%BA%E7%A1%80%E5%8A%9F%E8%83%BD/AOP.html"}],["meta",{property:"og:site_name",content:"UMajs"}],["meta",{property:"og:title",content:"面向切面（AOP）"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"og:locale:alternate",content:"en-US"}],["meta",{name:"twitter:card",content:"summary_large_image"}],["meta",{name:"twitter:image:alt",content:"UMajs"}],["meta",{property:"article:author",content:"wuba"}],["meta",{property:"og:restrictions:age",content:"3+"}]]},excerpt:"",headers:[{level:2,title:"什么是切面(Aspect)",slug:"什么是切面-aspect",children:[]},{level:2,title:"通知",slug:"通知",children:[]},{level:2,title:"@Around 修饰器",slug:"around-修饰器",children:[{level:3,title:"middlewareToAround",slug:"middlewaretoaround",children:[]}]}],filePathRelative:"基础功能/AOP.md",git:{updatedTime:1634654807e3,contributors:[{name:"yywang95",email:"199950720@qq.com",commits:2},{name:"jiazengp",email:"jiazengp@gmail.com",commits:1}]}}},4110:(s,l)=>{l.Z=(s,l)=>{for(const[n,e]of l)s[n]=e;return s}},5811:(s,l,n)=>{s.exports=n.p+"assets/img/AOP-aspect.d12e38eb.png"}}]);