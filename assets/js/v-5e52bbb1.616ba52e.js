"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[766],{336:(s,n,a)=>{a.r(n),a.d(n,{default:()=>o});var e=a(3168);const l=(0,e.uE)('<h1 id="服务-service" tabindex="-1"><a class="header-anchor" href="#服务-service" aria-hidden="true">#</a> 服务（Service）</h1><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2><h3 id="cli-工具在初始化会自动生成-service-目录-可直接在-service-目录中编写-service" tabindex="-1"><a class="header-anchor" href="#cli-工具在初始化会自动生成-service-目录-可直接在-service-目录中编写-service" aria-hidden="true">#</a> cli 工具在初始化会自动生成 service 目录，可直接在 service 目录中编写 service</h3><div class="language-text ext-text line-numbers-mode"><pre class="shiki" style="background-color:#0d1117;"><code><span class="line"><span style="color:#c9d1d9;">app\n|- src\n  |-middleware\n  |-config\n  |-controller\n  |-service\n    |-demo.service.ts\n</span></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="命名规范-service-ts" tabindex="-1"><a class="header-anchor" href="#命名规范-service-ts" aria-hidden="true">#</a> 命名规范: <code>*.service.ts</code></h3><h3 id="编写-service-时需继承默认-baseservice-以便我们将-service-挂载到-ctx-中" tabindex="-1"><a class="header-anchor" href="#编写-service-时需继承默认-baseservice-以便我们将-service-挂载到-ctx-中" aria-hidden="true">#</a> 编写 service 时需继承默认 baseService 以便我们将 service 挂载到 ctx 中</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#0d1117;"><code><span class="line"><span style="color:#FF7B72;">import</span><span style="color:#C9D1D9;"> { BaseService } </span><span style="color:#FF7B72;">from</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&#39;@umajs/core&#39;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#FF7B72;">export</span><span style="color:#FFA657;"> </span><span style="color:#FF7B72;">default</span><span style="color:#FFA657;"> </span><span style="color:#FF7B72;">class</span><span style="color:#FFA657;"> demo </span><span style="color:#FF7B72;">extends</span><span style="color:#FFA657;"> </span><span style="color:#79C0FF;">BaseService</span><span style="color:#FFA657;"> {</span></span>\n<span class="line"><span style="color:#FFA657;">  </span><span style="color:#D2A8FF;">demoService</span><span style="color:#FFA657;">() </span><span style="color:#C9D1D9;">{</span></span>\n<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#FF7B72;">return</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&#39;this is demo service&#39;</span></span>\n<span class="line"><span style="color:#C9D1D9;">  }</span></span>\n<span class="line"><span style="color:#FFA657;">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="controller-中使用" tabindex="-1"><a class="header-anchor" href="#controller-中使用" aria-hidden="true">#</a> controller 中使用</h3><ul><li>引入 service</li><li>依赖注入 <code>@Service(serviceClazz)</code> , <em>注意</em>：在V2之后，Service参数装饰器只接受class类型参数。不再支持传入文件名字符串。</li><li>注入之后可直接使用无需再进行实例</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#0d1117;"><code><span class="line"><span style="color:#8B949E;">// controller</span></span>\n<span class="line"><span style="color:#FF7B72;">import</span><span style="color:#C9D1D9;"> DemoService </span><span style="color:#FF7B72;">from</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&#39;../service/demo.service&#39;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#FF7B72;">export</span><span style="color:#FFA657;"> </span><span style="color:#FF7B72;">default</span><span style="color:#FFA657;"> </span><span style="color:#FF7B72;">class</span><span style="color:#FFA657;"> Index </span><span style="color:#FF7B72;">extends</span><span style="color:#FFA657;"> </span><span style="color:#79C0FF;">BaseController</span><span style="color:#FFA657;"> {</span></span>\n<span class="line"><span style="color:#FFA657;">  @</span><span style="color:#D2A8FF;">Service</span><span style="color:#FFA657;">(</span><span style="color:#C9D1D9;">DemoService</span><span style="color:#FFA657;">)</span></span>\n<span class="line"><span style="color:#FFA657;">  demoService</span><span style="color:#FF7B72;">:</span><span style="color:#FFA657;"> DemoService</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#FFA657;">  @</span><span style="color:#D2A8FF;">Path</span><span style="color:#FFA657;">(</span><span style="color:#A5D6FF;">&#39;/demo&#39;</span><span style="color:#FFA657;">)</span></span>\n<span class="line"><span style="color:#FFA657;">  </span><span style="color:#D2A8FF;">demoService</span><span style="color:#FFA657;">() </span><span style="color:#C9D1D9;">{</span></span>\n<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#8B949E;">// return this.demoService.loadAll();</span></span>\n<span class="line"><span style="color:#C9D1D9;">  }</span></span>\n<span class="line"><span style="color:#FFA657;">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#0d1117;"><code><span class="line"><span style="color:#8B949E;">// service</span></span>\n<span class="line"><span style="color:#FF7B72;">import</span><span style="color:#C9D1D9;"> { BaseService } </span><span style="color:#FF7B72;">from</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&#39;@umajs/core&#39;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#FF7B72;">export</span><span style="color:#FFA657;"> </span><span style="color:#FF7B72;">default</span><span style="color:#FFA657;"> </span><span style="color:#FF7B72;">class</span><span style="color:#FFA657;"> Demp </span><span style="color:#FF7B72;">extends</span><span style="color:#FFA657;"> </span><span style="color:#79C0FF;">BaseService</span><span style="color:#FFA657;"> {</span></span>\n<span class="line"><span style="color:#FFA657;">  </span><span style="color:#D2A8FF;">loadAll</span><span style="color:#FFA657;">() </span><span style="color:#C9D1D9;">{</span></span>\n<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#8B949E;">// return</span></span>\n<span class="line"><span style="color:#C9D1D9;">  }</span></span>\n<span class="line"><span style="color:#FFA657;">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="在非-controller-中使用-service-时-必须传入-ctx-进行实例化才能使用。" tabindex="-1"><a class="header-anchor" href="#在非-controller-中使用-service-时-必须传入-ctx-进行实例化才能使用。" aria-hidden="true">#</a> 在非 Controller 中使用 Service 时，必须传入 ctx 进行实例化才能使用。</h3><blockquote><p>如果<code>Service</code>不需要传入<code>ctx</code> ,则无需继承<code>BaseService</code></p></blockquote><ul><li>在插件中使用</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#0d1117;"><code><span class="line"><span style="color:#8B949E;">// plugin</span></span>\n<span class="line"><span style="color:#FF7B72;">import</span><span style="color:#C9D1D9;"> DemoService </span><span style="color:#FF7B72;">from</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&#39;../service/demo.service&#39;</span><span style="color:#C9D1D9;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#FF7B72;">export</span><span style="color:#FFA657;"> </span><span style="color:#FF7B72;">default</span><span style="color:#FFA657;"> (uma</span><span style="color:#FF7B72;">:</span><span style="color:#FFA657;"> Uma, options</span><span style="color:#FF7B72;">:</span><span style="color:#FFA657;"> </span><span style="color:#79C0FF;">any</span><span style="color:#FFA657;"> </span><span style="color:#FF7B72;">=</span><span style="color:#FFA657;"> {})</span><span style="color:#FF7B72;">:</span><span style="color:#FFA657;"> Koa.Middleware </span><span style="color:#FF7B72;">=&gt;</span><span style="color:#FFA657;"> </span><span style="color:#C9D1D9;">{</span></span>\n<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#FF7B72;">return</span><span style="color:#C9D1D9;"> (ctx, next) </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">&gt;</span><span style="color:#C9D1D9;"> {</span></span>\n<span class="line"><span style="color:#C9D1D9;">        const demoService: DemoService </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">new</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">DemoService</span><span style="color:#C9D1D9;">(ctx);</span></span>\n<span class="line"><span style="color:#C9D1D9;">        </span><span style="color:#8B949E;">// ...</span></span>\n<span class="line"><span style="color:#C9D1D9;">    };</span></span>\n<span class="line"><span style="color:#C9D1D9;">};</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><ul><li>在 Around 面向切面编程时使用</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#0d1117;"><code><span class="line"><span style="color:#8B949E;">// src/aspect/demo.aspect.ts</span></span>\n<span class="line"><span style="color:#FF7B72;">import</span><span style="color:#C9D1D9;"> DemoService </span><span style="color:#FF7B72;">from</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&#39;../service/demo.service&#39;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#FF7B72;">export</span><span style="color:#FFA657;"> </span><span style="color:#FF7B72;">default</span><span style="color:#FFA657;"> </span><span style="color:#C9D1D9;">async</span><span style="color:#FFA657;"> </span><span style="color:#D2A8FF;">around</span><span style="color:#FFA657;">(</span><span style="color:#C9D1D9;">proceedPoint</span><span style="color:#FFA657;">: </span><span style="color:#C9D1D9;">IProceedJoinPoint</span><span style="color:#FFA657;">) {</span></span>\n<span class="line"><span style="color:#FFA657;">    const { </span><span style="color:#C9D1D9;">target</span><span style="color:#FFA657;">, </span><span style="color:#C9D1D9;">proceed</span><span style="color:#FFA657;">, </span><span style="color:#C9D1D9;">args </span><span style="color:#FFA657;">} </span><span style="color:#FF7B72;">=</span><span style="color:#FFA657;"> </span><span style="color:#C9D1D9;">proceedPoint</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#FF7B72;">const</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">demoService</span><span style="color:#FF7B72;">:</span><span style="color:#C9D1D9;"> </span><span style="color:#FFA657;">DemoService</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">new</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">DemoService</span><span style="color:#C9D1D9;">(target.ctx)</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#FF7B72;">const</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">result</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">await</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">proceed</span><span style="color:#C9D1D9;">(</span><span style="color:#FF7B72;">...</span><span style="color:#C9D1D9;">args)</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#FF7B72;">return</span><span style="color:#C9D1D9;"> result</span></span>\n<span class="line"><span style="color:#C9D1D9;">  }</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p><strong>此外，框架还提供了@Resource 和@Inject 装饰器来实现<code>IOC容器</code>和<code>依赖注入</code></strong></p>',18),p=(0,e.Uk)("IOC 参考文档"),r={},o=(0,a(6215).Z)(r,[["render",function(s,n){const a=(0,e.up)("RouterLink");return(0,e.wg)(),(0,e.iD)(e.HY,null,[l,(0,e._)("p",null,[(0,e.Wm)(a,{to:"/development/IOC.html"},{default:(0,e.w5)((()=>[p])),_:1})])],64)}]])},9565:(s,n,a)=>{a.r(n),a.d(n,{data:()=>e});const e={key:"v-5e52bbb1",path:"/development/Service.html",title:"服务（Service）",lang:"zh-CN",frontmatter:{head:[["meta",{property:"og:url",content:"/development/Service.html"}],["meta",{property:"og:site_name",content:"UMajs"}],["meta",{property:"og:title",content:"服务（Service）"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"og:locale:alternate",content:"en-US"}],["meta",{name:"twitter:card",content:"summary_large_image"}],["meta",{name:"twitter:image:alt",content:"UMajs"}],["meta",{property:"article:author",content:"wuba"}],["meta",{property:"og:restrictions:age",content:"3+"}]]},excerpt:"",headers:[{level:2,title:"使用",slug:"使用",children:[{level:3,title:"cli 工具在初始化会自动生成 service 目录，可直接在 service 目录中编写 service",slug:"cli-工具在初始化会自动生成-service-目录-可直接在-service-目录中编写-service",children:[]},{level:3,title:"命名规范: *.service.ts",slug:"命名规范-service-ts",children:[]},{level:3,title:"编写 service 时需继承默认 baseService 以便我们将 service 挂载到 ctx 中",slug:"编写-service-时需继承默认-baseservice-以便我们将-service-挂载到-ctx-中",children:[]},{level:3,title:"controller 中使用",slug:"controller-中使用",children:[]},{level:3,title:"在非 Controller 中使用 Service 时，必须传入 ctx 进行实例化才能使用。",slug:"在非-controller-中使用-service-时-必须传入-ctx-进行实例化才能使用。",children:[]}]}],filePathRelative:"development/Service.md",git:{updatedTime:1634896538e3,contributors:[{name:"BubbleM",email:"bubblelm@163.com",commits:1},{name:"dazjean",email:"zunyi_zjj@163.com",commits:1}]}}},6215:(s,n)=>{n.Z=(s,n)=>{for(const[a,e]of n)s[a]=e;return s}}}]);