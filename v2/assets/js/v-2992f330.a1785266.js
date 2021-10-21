"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[773],{8248:(e,a,s)=>{s.r(a),s.d(a,{default:()=>m});var n=s(4386);const t=(0,n.uE)('<h1 id="控制器-controller" tabindex="-1"><a class="header-anchor" href="#控制器-controller" aria-hidden="true">#</a> 控制器（Controller）</h1><h2 id="什么是控制器" tabindex="-1"><a class="header-anchor" href="#什么是控制器" aria-hidden="true">#</a> 什么是控制器</h2><p>控制器负责解析用户输入，并向用户返回处理结果。</p><p>在控制器中，我们可以指定什么时候（<strong>路由</strong>）去响应，怎么样（<strong>服务</strong>）去返回结果。</p><h2 id="控制器加载与编写" tabindex="-1"><a class="header-anchor" href="#控制器加载与编写" aria-hidden="true">#</a> 控制器加载与编写</h2><h3 id="加载" tabindex="-1"><a class="header-anchor" href="#加载" aria-hidden="true">#</a> 加载</h3><p>控制器也是通过约定的策略进行加载：默认加载<code>${URSA_ROOT}/controller</code>下所有<code>*.controller</code>文件。</p><h3 id="控制器编写" tabindex="-1"><a class="header-anchor" href="#控制器编写" aria-hidden="true">#</a> 控制器编写</h3><p><code>Uma</code>的控制器需要通过类的继承的方式实现，方法必须都返回框架内置的 Result 静态方法，如下代码</p><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#0d1117;"><code><span class="line"><span style="color:#FF7B72;">import</span><span style="color:#C9D1D9;"> { BaseController } </span><span style="color:#FF7B72;">from</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&#39;@umajs/core&#39;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#FF7B72;">export</span><span style="color:#FFA657;"> </span><span style="color:#FF7B72;">default</span><span style="color:#FFA657;"> </span><span style="color:#FF7B72;">class</span><span style="color:#FFA657;"> Index </span><span style="color:#FF7B72;">extends</span><span style="color:#FFA657;"> </span><span style="color:#79C0FF;">BaseController</span><span style="color:#FFA657;"> {</span></span>\n<span class="line"><span style="color:#FFA657;">  </span><span style="color:#D2A8FF;">index</span><span style="color:#FFA657;">() </span><span style="color:#C9D1D9;">{</span></span>\n<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#8B949E;">// 等同于 return Result.send(&#39;this is index router&#39;);</span></span>\n<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#FF7B72;">return</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">this</span><span style="color:#C9D1D9;">.</span><span style="color:#D2A8FF;">send</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&#39;this is index router&#39;</span><span style="color:#C9D1D9;">)</span></span>\n<span class="line"><span style="color:#C9D1D9;">  }</span></span>\n<span class="line"><span style="color:#FFA657;">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>命中路由规则的控制器，在请求时会被实例化，以下属性可以通过<code>this</code>获取：</p><ol><li><code>ctx</code>: 当前请求上下文</li><li><code>req</code>: <code>Request</code>实例</li><li><code>res</code>: <code>Response</code>实例</li></ol><h2 id="获取请求参数" tabindex="-1"><a class="header-anchor" href="#获取请求参数" aria-hidden="true">#</a> 获取请求参数</h2><h3 id="query-和路由参数" tabindex="-1"><a class="header-anchor" href="#query-和路由参数" aria-hidden="true">#</a> query 和路由参数</h3><p>详见 Router#@Param、@Query 修饰器</p><h3 id="header" tabindex="-1"><a class="header-anchor" href="#header" aria-hidden="true">#</a> header</h3><p>获取 header 参数可以用<code>this.header(name)</code>方法获取。</p><h3 id="cookie" tabindex="-1"><a class="header-anchor" href="#cookie" aria-hidden="true">#</a> cookie</h3><p>在控制器中，可以通过<code>this.ctx.cookies.get</code>方法获取 cookie。</p><h3 id="session" tabindex="-1"><a class="header-anchor" href="#session" aria-hidden="true">#</a> session</h3><p>默认情况下，<code>Uma</code>的 Session 插件通过 cookie 存储 session，详细的配置和用法可以通过 Plugin#Session 获取。</p><p>在控制器中，可以通过<code>this.ctx.session</code>对象获取相应的 session 值。</p><h3 id="body-和上传文件的获取" tabindex="-1"><a class="header-anchor" href="#body-和上传文件的获取" aria-hidden="true">#</a> body 和上传文件的获取</h3><h2 id="发送响应" tabindex="-1"><a class="header-anchor" href="#发送响应" aria-hidden="true">#</a> 发送响应</h2><p>返回的数据都可以通过<code>Result</code>来返回。 <code>BaseController</code>也内置了<code>Result</code>一样的方法，还内置了一些方便使用的方法。</p><h3 id="set-status-status-number" tabindex="-1"><a class="header-anchor" href="#set-status-status-number" aria-hidden="true">#</a> set status(status: number);</h3><p>正确的设置 http 的状态码，可以增强请求的语义性。可以通过<code>this.status = code</code>设置返回的状态码。</p><h3 id="get-useragent-any" tabindex="-1"><a class="header-anchor" href="#get-useragent-any" aria-hidden="true">#</a> get userAgent(): any;</h3><p>获取请求的 user-agent</p><h3 id="get-param-any" tabindex="-1"><a class="header-anchor" href="#get-param-any" aria-hidden="true">#</a> get param(): any;</h3><p>获取请求的参数</p><h3 id="setheader-name-string-any-value-string-string-void" tabindex="-1"><a class="header-anchor" href="#setheader-name-string-any-value-string-string-void" aria-hidden="true">#</a> setHeader(name: string | any, value: string | string[]): void;</h3><p>设置请求 header</p><h3 id="getheader-name-string-any-any" tabindex="-1"><a class="header-anchor" href="#getheader-name-string-any-any" aria-hidden="true">#</a> getHeader(name: string | any): any;</h3><p>获取请求 header</p><h3 id="统一返回-result" tabindex="-1"><a class="header-anchor" href="#统一返回-result" aria-hidden="true">#</a> 统一返回 Result</h3>',36),r=(0,n.Uk)("在 controller 中可以 "),l=(0,n._)("code",null,"return Result[...](...)",-1),o=(0,n.Uk)("，也可以 "),d=(0,n._)("code",null,"return this[...](...)",-1),i=(0,n.Uk)("，更多介绍见"),c=(0,n.Uk)("Result"),h=(0,n.Uk)("。"),p=(0,n.uE)('<h4 id="this-send-val-status" tabindex="-1"><a class="header-anchor" href="#this-send-val-status" aria-hidden="true">#</a> <code>this.send(val, status)</code></h4><p>用于快捷返回文本内容，第二个参数为返回状态码。</p><h4 id="this-json-data" tabindex="-1"><a class="header-anchor" href="#this-json-data" aria-hidden="true">#</a> <code>this.json(data)</code></h4><p>返回 json 数据，并将<code>content-type</code>设置为<code>application/json</code>。</p><h4 id="this-jsonp-data-callback" tabindex="-1"><a class="header-anchor" href="#this-jsonp-data-callback" aria-hidden="true">#</a> <code>this.jsonp(data, callback)</code></h4><p>以 jsonp 的形式返回数据。</p><h4 id="this-view-templatepath-data" tabindex="-1"><a class="header-anchor" href="#this-view-templatepath-data" aria-hidden="true">#</a> <code>this.view(templatePath, data)</code></h4><p>通过渲染模板的方式将数据返回。</p><h4 id="this-stream-data-filename" tabindex="-1"><a class="header-anchor" href="#this-stream-data-filename" aria-hidden="true">#</a> <code>this.stream(data, fileName)</code></h4><p>将文件以流（stream）的方式返回</p><h4 id="this-download-filepath-opts" tabindex="-1"><a class="header-anchor" href="#this-download-filepath-opts" aria-hidden="true">#</a> <code>this.download(filePath, opts)</code></h4><p>下载文件</p><h4 id="this-done" tabindex="-1"><a class="header-anchor" href="#this-done" aria-hidden="true">#</a> <code>this.done()</code></h4><p>使用 ctx 进行完了操作，不需要使用 Result 进行其它的返回时使用此方法，常用于框架的迁移。</p>',14),u={},m=(0,s(4110).Z)(u,[["render",function(e,a){const s=(0,n.up)("RouterLink");return(0,n.wg)(),(0,n.iD)(n.HY,null,[t,(0,n._)("p",null,[r,l,o,d,i,(0,n.Wm)(s,{to:"/development/Result.html"},{default:(0,n.w5)((()=>[c])),_:1}),h]),p],64)}]])},3344:(e,a,s)=>{s.r(a),s.d(a,{data:()=>n});const n={key:"v-2992f330",path:"/development/Controller.html",title:"控制器（Controller）",lang:"zh-CN",frontmatter:{head:[["meta",{property:"og:url",content:"/v2/development/Controller.html"}],["meta",{property:"og:site_name",content:"UMajs"}],["meta",{property:"og:title",content:"控制器（Controller）"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"og:locale:alternate",content:"en-US"}],["meta",{name:"twitter:card",content:"summary_large_image"}],["meta",{name:"twitter:image:alt",content:"UMajs"}],["meta",{property:"article:author",content:"wuba"}],["meta",{property:"og:restrictions:age",content:"3+"}]]},excerpt:"",headers:[{level:2,title:"什么是控制器",slug:"什么是控制器",children:[]},{level:2,title:"控制器加载与编写",slug:"控制器加载与编写",children:[{level:3,title:"加载",slug:"加载",children:[]},{level:3,title:"控制器编写",slug:"控制器编写",children:[]}]},{level:2,title:"获取请求参数",slug:"获取请求参数",children:[{level:3,title:"query 和路由参数",slug:"query-和路由参数",children:[]},{level:3,title:"header",slug:"header",children:[]},{level:3,title:"cookie",slug:"cookie",children:[]},{level:3,title:"session",slug:"session",children:[]},{level:3,title:"body 和上传文件的获取",slug:"body-和上传文件的获取",children:[]}]},{level:2,title:"发送响应",slug:"发送响应",children:[{level:3,title:"set status(status: number);",slug:"set-status-status-number",children:[]},{level:3,title:"get userAgent(): any;",slug:"get-useragent-any",children:[]},{level:3,title:"get param(): any;",slug:"get-param-any",children:[]},{level:3,title:"setHeader(name: string | any, value: string | string[]): void;",slug:"setheader-name-string-any-value-string-string-void",children:[]},{level:3,title:"getHeader(name: string | any): any;",slug:"getheader-name-string-any-any",children:[]},{level:3,title:"统一返回 Result",slug:"统一返回-result",children:[]}]}],filePathRelative:"development/Controller.md",git:{updatedTime:1634816476e3,contributors:[{name:"BubbleM",email:"bubblelm@163.com",commits:1}]}}},4110:(e,a)=>{a.Z=(e,a)=>{for(const[s,n]of a)e[s]=n;return e}}}]);