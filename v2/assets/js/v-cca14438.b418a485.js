"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[410],{969:(s,n,a)=>{a.r(n),a.d(n,{default:()=>h});var l=a(3168);const e=(0,l.uE)('<h1 id="状态-status" tabindex="-1"><a class="header-anchor" href="#状态-status" aria-hidden="true">#</a> 状态（Status）</h1><p>为了方便用户对 response<code>不同状态码</code>情况和<code>错误</code>进行处理，<code>Uma</code>提供了状态处理插件 plugin-status</p><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#0d1117;"><code><span class="line"><span style="color:#C9D1D9;">$ npm install -S @umajs/plugin-status</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="开启" tabindex="-1"><a class="header-anchor" href="#开启" aria-hidden="true">#</a> 开启</h2><p>在 plugin.config.ts 中开启 plugin-status 插件</p><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#0d1117;"><code><span class="line"><span style="color:#8B949E;">// plugin.config.ts</span></span>\n<span class="line"><span style="color:#FF7B72;">export</span><span style="color:#FFA657;"> </span><span style="color:#FF7B72;">default</span><span style="color:#FFA657;"> {</span></span>\n<span class="line"><span style="color:#FFA657;">  </span><span style="color:#C9D1D9;">status: </span><span style="color:#79C0FF;">true</span><span style="color:#FFA657;">,</span></span>\n<span class="line"><span style="color:#FFA657;">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>',7),p=(0,l.Uk)("具体开启方式请参考"),o=(0,l.Uk)("plugin"),r=(0,l.Uk)("一节中的配置方式"),t=(0,l.uE)('<h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#0d1117;"><code><span class="line"><span style="color:#FF7B72;">type</span><span style="color:#C9D1D9;"> </span><span style="color:#FFA657;">statusOptions</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> {</span></span>\n<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#8B949E;">/**</span></span>\n<span class="line"><span style="color:#8B949E;">   * 前缀</span></span>\n<span class="line"><span style="color:#8B949E;">   * 默认：_</span></span>\n<span class="line"><span style="color:#8B949E;">   */</span></span>\n<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#FFA657;">prefix</span><span style="color:#FF7B72;">?:</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">string</span><span style="color:#C9D1D9;">,</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#8B949E;">/**</span></span>\n<span class="line"><span style="color:#8B949E;">   * 状态或者错误调用方法</span></span>\n<span class="line"><span style="color:#8B949E;">   * 错误方法参数 (err, ctx, next)</span></span>\n<span class="line"><span style="color:#8B949E;">   * 状态方法参数 (ctx, next)</span></span>\n<span class="line"><span style="color:#8B949E;">   */</span></span>\n<span class="line"><span style="color:#C9D1D9;">  [</span><span style="color:#FFA657;">key</span><span style="color:#FF7B72;">:</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">string</span><span style="color:#C9D1D9;">]</span><span style="color:#FF7B72;">:</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">string</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">|</span><span style="color:#C9D1D9;"> </span><span style="color:#FFA657;">Function</span><span style="color:#C9D1D9;">,</span></span>\n<span class="line"><span style="color:#C9D1D9;">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>plugin-status 插件通过<code>对不同状态码设置处理函数</code>的方式来实现统一处理，函数名需要按照<code>${prefix}状态码</code>的格式来命令</p><p>例如，在<code>${URSA_ROOT}/config/${URSA_ENV}</code>目录下创建<code>status.config.ts</code>（也可以在 plugin.config.ts 的 status.options 配置）</p><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#0d1117;"><code><span class="line"><span style="color:#8B949E;">// status.config.ts</span></span>\n<span class="line"><span style="color:#FF7B72;">export</span><span style="color:#FFA657;"> </span><span style="color:#FF7B72;">default</span><span style="color:#FFA657;"> &lt;</span><span style="color:#7EE787;">statusOptions</span><span style="color:#FFA657;">&gt;</span><span style="color:#C9D1D9;">{</span></span>\n<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#8B949E;">// ===&gt; 404状态码处理方法</span></span>\n<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#D2A8FF;">_404</span><span style="color:#C9D1D9;">(ctx) {</span></span>\n<span class="line"><span style="color:#C9D1D9;">        return ctx.render(</span><span style="color:#A5D6FF;">&#39;404.html&#39;</span><span style="color:#C9D1D9;">);</span></span>\n<span class="line"><span style="color:#C9D1D9;">    }</span></span>\n<span class="line"><span style="color:#C9D1D9;">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>上面的配置为状态码 404 的请求添加了统一处理，当请求 404 的时候会返回 404.html 页面，函数接收<code>ctx</code>作为参数，开发者可以根据自己业务情况进行不同处理</p><p>除了对不同状态码情况进行处理外，插件还能<code>对未捕获的错误进行处理</code></p><p>在上面的<code>status.config.ts</code>中添加<code>_error</code>方法可以捕获到未被捕获的错误</p><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#0d1117;"><code><span class="line"><span style="color:#8B949E;">// status.config.ts</span></span>\n<span class="line"><span style="color:#FF7B72;">import</span><span style="color:#C9D1D9;"> { IContext } </span><span style="color:#FF7B72;">from</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&quot;@umajs/core&quot;</span><span style="color:#C9D1D9;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#FF7B72;">export</span><span style="color:#FFA657;"> </span><span style="color:#FF7B72;">default</span><span style="color:#FFA657;"> {</span></span>\n<span class="line"><span style="color:#FFA657;">    </span><span style="color:#D2A8FF;">_404</span><span style="color:#FFA657;">(ctx</span><span style="color:#FF7B72;">:</span><span style="color:#FFA657;"> IContext) </span><span style="color:#C9D1D9;">{</span></span>\n<span class="line"><span style="color:#C9D1D9;">        </span><span style="color:#FF7B72;">return</span><span style="color:#C9D1D9;"> ctx.</span><span style="color:#D2A8FF;">render</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&#39;404.html&#39;</span><span style="color:#C9D1D9;">);</span></span>\n<span class="line"><span style="color:#C9D1D9;">    }</span></span>\n<span class="line"><span style="color:#FFA657;">    </span><span style="color:#8B949E;">// ===&gt; 未被捕获错误</span></span>\n<span class="line"><span style="color:#FFA657;">    </span><span style="color:#D2A8FF;">_error</span><span style="color:#FFA657;">(e</span><span style="color:#FF7B72;">:</span><span style="color:#FFA657;"> Error, ctx</span><span style="color:#FF7B72;">:</span><span style="color:#FFA657;"> IContext) </span><span style="color:#C9D1D9;">{</span></span>\n<span class="line"><span style="color:#C9D1D9;">        </span><span style="color:#8B949E;">// ...</span></span>\n<span class="line"><span style="color:#C9D1D9;">    }</span></span>\n<span class="line"><span style="color:#FFA657;">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div>',9),c=(0,l.Uk)("在"),i=(0,l.Uk)("异常errorHanding"),u=(0,l.Uk)("一节中我们介绍了@Around 可以用来处理方法调用时发生的异常，"),y=(0,l._)("code",null,"当方法使用了@Around",-1),d=(0,l.Uk)("进行修饰在代码中"),b=(0,l._)("code",null,"使用了try-catch",-1),F=(0,l.Uk)("，plugin-status 中配置的"),m=(0,l._)("code",null,"_error方法就不会被调用",-1),D=(0,l.Uk)("，plugin-status 的只会捕获到未 catch 住的错误"),g={},h=(0,a(6215).Z)(g,[["render",function(s,n){const a=(0,l.up)("RouterLink");return(0,l.wg)(),(0,l.iD)(l.HY,null,[e,(0,l._)("blockquote",null,[(0,l._)("p",null,[p,(0,l.Wm)(a,{to:"/development/Plugin.html"},{default:(0,l.w5)((()=>[o])),_:1}),r])]),t,(0,l._)("blockquote",null,[(0,l._)("p",null,[c,(0,l.Wm)(a,{to:"/other/errorHandling.html#%E4%BD%BF%E7%94%A8Around"},{default:(0,l.w5)((()=>[i])),_:1}),u,y,d,b,F,m,D])])],64)}]])},6349:(s,n,a)=>{a.r(n),a.d(n,{data:()=>l});const l={key:"v-cca14438",path:"/plugin/Status.html",title:"状态（Status）",lang:"zh-CN",frontmatter:{head:[["meta",{property:"og:url",content:"/v2/plugin/Status.html"}],["meta",{property:"og:site_name",content:"UMajs"}],["meta",{property:"og:title",content:"状态（Status）"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"og:locale:alternate",content:"en-US"}],["meta",{name:"twitter:card",content:"summary_large_image"}],["meta",{name:"twitter:image:alt",content:"UMajs"}],["meta",{property:"article:author",content:"wuba"}],["meta",{property:"og:restrictions:age",content:"3+"}]]},excerpt:"",headers:[{level:2,title:"安装",slug:"安装",children:[]},{level:2,title:"开启",slug:"开启",children:[]},{level:2,title:"配置",slug:"配置",children:[]}],filePathRelative:"plugin/Status.md",git:{updatedTime:1634896538e3,contributors:[{name:"BubbleM",email:"bubblelm@163.com",commits:1},{name:"dazjean",email:"zunyi_zjj@163.com",commits:1}]}}},6215:(s,n)=>{n.Z=(s,n)=>{for(const[a,l]of n)s[a]=l;return s}}}]);