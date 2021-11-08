"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[874],{4756:(s,a,n)=>{n.r(a),n.d(a,{default:()=>c});var e=n(3168);const l=(0,e.uE)('<h1 id="express迁移" tabindex="-1"><a class="header-anchor" href="#express迁移" aria-hidden="true">#</a> express迁移</h1><blockquote><p>对于一些历史项目，我们可以采取逐步升级，将 umajs 集成到 express 项目中。新的接口和逻辑通过 Umajs 来写，然后再慢慢将老的逻辑迁移到 Umajs 中。</p></blockquote><h2 id="uma-callback" tabindex="-1"><a class="header-anchor" href="#uma-callback" aria-hidden="true">#</a> Uma.callback</h2><blockquote><p>通过 uma.callback 函数可以获取到框架实例化后的 koa.callback.然后采用中间件形式集成到 express,connect 框架中。</p></blockquote><h2 id="接入方式步骤" tabindex="-1"><a class="header-anchor" href="#接入方式步骤" aria-hidden="true">#</a> 接入方式步骤</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="shiki" style="background-color:#0d1117;"><code><span class="line"><span style="color:#8B949E;">//app.ts</span></span>\n<span class="line"><span style="color:#FF7B72;">import</span><span style="color:#C9D1D9;"> { Uma } </span><span style="color:#FF7B72;">from</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&#39;@umajs/core&#39;</span></span>\n<span class="line"><span style="color:#FF7B72;">import</span><span style="color:#C9D1D9;"> express </span><span style="color:#FF7B72;">from</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&#39;express&#39;</span></span>\n<span class="line"><span style="color:#C9D1D9;">;(</span><span style="color:#FF7B72;">async</span><span style="color:#C9D1D9;"> () </span><span style="color:#FF7B72;">=&gt;</span><span style="color:#C9D1D9;"> {</span></span>\n<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#FF7B72;">const</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">callback</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> &lt;</span><span style="color:#79C0FF;">any</span><span style="color:#C9D1D9;">&gt;</span><span style="color:#FF7B72;">await</span><span style="color:#C9D1D9;"> Uma.</span><span style="color:#D2A8FF;">callback</span><span style="color:#C9D1D9;">(options)</span></span>\n<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#FF7B72;">const</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">app</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">express</span><span style="color:#C9D1D9;">()</span></span>\n<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#8B949E;">/** 老项目中间件加载 **/</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#8B949E;">// callback在express放到最后一个中间件中</span></span>\n<span class="line"><span style="color:#C9D1D9;">  app.</span><span style="color:#D2A8FF;">use</span><span style="color:#C9D1D9;">((</span><span style="color:#FFA657;">req</span><span style="color:#C9D1D9;">, </span><span style="color:#FFA657;">res</span><span style="color:#C9D1D9;">, </span><span style="color:#FFA657;">next</span><span style="color:#C9D1D9;">) </span><span style="color:#FF7B72;">=&gt;</span></span>\n<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#D2A8FF;">callback</span><span style="color:#C9D1D9;">(req, res).</span><span style="color:#D2A8FF;">then</span><span style="color:#C9D1D9;">(() </span><span style="color:#FF7B72;">=&gt;</span><span style="color:#C9D1D9;"> {</span></span>\n<span class="line"><span style="color:#C9D1D9;">      </span><span style="color:#FF7B72;">if</span><span style="color:#C9D1D9;"> (res.headersSent) </span><span style="color:#FF7B72;">return</span></span>\n<span class="line"><span style="color:#C9D1D9;">      </span><span style="color:#D2A8FF;">next</span><span style="color:#C9D1D9;">()</span></span>\n<span class="line"><span style="color:#C9D1D9;">    })</span></span>\n<span class="line"><span style="color:#C9D1D9;">  )</span></span>\n<span class="line"><span style="color:#C9D1D9;">})()</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h2 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项" aria-hidden="true">#</a> 注意事项</h2><p>1、建议在 umajs 中间件中重置 ctx.status=200 状态码。</p><p>2、umajs 中配置的 view 插件和 express 中使用的模板引擎保持一致.或者直接通过插件挂载到 context 和 Result 对象</p><p>3、express 老项目中如果有存储的 token 和 session 建议通过 umajs 自定义插件转移到 ctx 后再 uma 逻辑中进行复用</p><p>4、在 express 中使用 Umajs 时，Umajs 中间件的执行顺序需要在 express 所有中间件之后，如果之前项目有设置 404 路由需要删掉 404 中间件。</p><h2 id="其他方案" tabindex="-1"><a class="header-anchor" href="#其他方案" aria-hidden="true">#</a> 其他方案</h2>',12),p=(0,e.Uk)("对于只想使用 express 框架路线的项目，框架也提供了 express 版本的 Umajs.API 几乎与 Umajs 保持一致，详情查看"),r={href:"https://github.com/Umajs/umajs-express",target:"_blank",rel:"noopener noreferrer"},o=(0,e.Uk)("umajs-express"),t={},c=(0,n(6215).Z)(t,[["render",function(s,a){const n=(0,e.up)("OutboundLink");return(0,e.wg)(),(0,e.iD)(e.HY,null,[l,(0,e._)("blockquote",null,[(0,e._)("p",null,[p,(0,e._)("a",r,[o,(0,e.Wm)(n)])])])],64)}]])},1051:(s,a,n)=>{n.r(a),n.d(a,{data:()=>e});const e={key:"v-067e8178",path:"/other/expressUpdate.html",title:"express迁移",lang:"zh-CN",frontmatter:{head:[["meta",{property:"og:url",content:"/other/expressUpdate.html"}],["meta",{property:"og:site_name",content:"UMajs"}],["meta",{property:"og:title",content:"express迁移"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"og:locale:alternate",content:"en-US"}],["meta",{name:"twitter:card",content:"summary_large_image"}],["meta",{name:"twitter:image:alt",content:"UMajs"}],["meta",{property:"article:author",content:"wuba"}],["meta",{property:"og:restrictions:age",content:"3+"}]]},excerpt:"",headers:[{level:2,title:"Uma.callback",slug:"uma-callback",children:[]},{level:2,title:"接入方式步骤",slug:"接入方式步骤",children:[]},{level:2,title:"注意事项",slug:"注意事项",children:[]},{level:2,title:"其他方案",slug:"其他方案",children:[]}],filePathRelative:"other/expressUpdate.md",git:{updatedTime:1634816476e3,contributors:[{name:"BubbleM",email:"bubblelm@163.com",commits:1}]}}},6215:(s,a)=>{a.Z=(s,a)=>{for(const[n,e]of a)s[n]=e;return s}}}]);