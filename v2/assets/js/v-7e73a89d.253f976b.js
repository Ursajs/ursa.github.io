"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[866],{5361:(s,n,a)=>{a.r(n),a.d(n,{default:()=>p});const l=(0,a(4386).uE)('<h1 id="uma-对象" tabindex="-1"><a class="header-anchor" href="#uma-对象" aria-hidden="true">#</a> Uma 对象</h1><p>框架向外暴露了 Uma 对象，方便在项目中随时调用</p><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2><h3 id="uma-env" tabindex="-1"><a class="header-anchor" href="#uma-env" aria-hidden="true">#</a> uma.env</h3><p>当前运行环境，可以在入口文件中定义</p><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#0d1117;"><code><span class="line"><span style="color:#8B949E;">// app.ts</span></span>\n<span class="line"><span style="color:#FF7B72;">import</span><span style="color:#C9D1D9;"> Uma </span><span style="color:#FF7B72;">from</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&#39;@umajs/core&#39;</span></span>\n<span class="line"><span style="color:#FF7B72;">import</span><span style="color:#C9D1D9;"> { Router } </span><span style="color:#FF7B72;">from</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&#39;@umajs/router&#39;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#FF7B72;">const</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">uma</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> Uma.</span><span style="color:#D2A8FF;">instance</span><span style="color:#C9D1D9;">({</span></span>\n<span class="line"><span style="color:#C9D1D9;">  Router,</span></span>\n<span class="line"><span style="color:#C9D1D9;">  ROOT: __dirname,</span></span>\n<span class="line"><span style="color:#C9D1D9;">  env: process.argv.</span><span style="color:#D2A8FF;">indexOf</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&#39;production&#39;</span><span style="color:#C9D1D9;">) </span><span style="color:#FF7B72;">&gt;</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">-</span><span style="color:#79C0FF;">1</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">?</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&#39;production&#39;</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">:</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&#39;development&#39;</span><span style="color:#C9D1D9;">,</span></span>\n<span class="line"><span style="color:#C9D1D9;">})</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C9D1D9;">uma.</span><span style="color:#D2A8FF;">start</span><span style="color:#C9D1D9;">(</span><span style="color:#79C0FF;">8058</span><span style="color:#C9D1D9;">)</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="uma-config" tabindex="-1"><a class="header-anchor" href="#uma-config" aria-hidden="true">#</a> uma.config</h3><p>当前项目正在使用的配置信息，对 <code>config</code> 目录下的配置进行处理后得到</p><div class="language-json ext-json line-numbers-mode"><pre class="shiki" style="background-color:#0d1117;"><code><span class="line"><span style="color:#C9D1D9;">{</span></span>\n<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#79C0FF;">&quot;plugin&quot;</span><span style="color:#C9D1D9;">: {</span></span>\n<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#79C0FF;">&quot;logger&quot;</span><span style="color:#C9D1D9;">: </span><span style="color:#79C0FF;">true</span><span style="color:#C9D1D9;">,</span></span>\n<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#79C0FF;">&quot;model&quot;</span><span style="color:#C9D1D9;">: </span><span style="color:#79C0FF;">true</span></span>\n<span class="line"><span style="color:#C9D1D9;">  },</span></span>\n<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#79C0FF;">&quot;status&quot;</span><span style="color:#C9D1D9;">: {</span></span>\n<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#79C0FF;">&quot;_404&quot;</span><span style="color:#C9D1D9;">: </span><span style="color:#A5D6FF;">&quot;[object, function]&quot;</span></span>\n<span class="line"><span style="color:#C9D1D9;">  }</span></span>\n<span class="line"><span style="color:#C9D1D9;">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="uma-options" tabindex="-1"><a class="header-anchor" href="#uma-options" aria-hidden="true">#</a> uma.options</h3><p>初始化<code>Uma</code>时传入的参数，参数包括</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="shiki" style="background-color:#0d1117;"><code><span class="line"><span style="color:#FF7B72;">type</span><span style="color:#C9D1D9;"> </span><span style="color:#FFA657;">TUmaOption</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> {</span></span>\n<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#8B949E;">// 路由</span></span>\n<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#D2A8FF;">Router</span><span style="color:#FF7B72;">:</span><span style="color:#C9D1D9;"> </span><span style="color:#FFA657;">Function</span></span>\n<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#8B949E;">// 代码根路径，用于加载代码</span></span>\n<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#FFA657;">ROOT</span><span style="color:#FF7B72;">:</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">string</span></span>\n<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#8B949E;">// 运行环境</span></span>\n<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#FFA657;">env</span><span style="color:#FF7B72;">?:</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&#39;development&#39;</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">|</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&#39;production&#39;</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">|</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">string</span></span>\n<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#8B949E;">// 配置文件夹路径</span></span>\n<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#FFA657;">configPath</span><span style="color:#FF7B72;">?:</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">string</span></span>\n<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#8B949E;">// 需要拿到真实用户ip时设置为true</span></span>\n<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#FFA657;">proxy</span><span style="color:#FF7B72;">?:</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">boolean</span></span>\n<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#FFA657;">subdomainOffset</span><span style="color:#FF7B72;">?:</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">number</span></span>\n<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#FFA657;">jsonpBody</span><span style="color:#FF7B72;">?:</span><span style="color:#C9D1D9;"> </span><span style="color:#FFA657;">TJsonpBody</span></span>\n<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#8B949E;">// 自带 koa-body 时的配置，不配置时 koa-body 中间件不生效</span></span>\n<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#FFA657;">bodyParser</span><span style="color:#FF7B72;">?:</span><span style="color:#C9D1D9;"> </span><span style="color:#FFA657;">bodyParser</span><span style="color:#C9D1D9;">.</span><span style="color:#FFA657;">IKoaBodyOptions</span></span>\n<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#D2A8FF;">createServer</span><span style="color:#FF7B72;">?:</span><span style="color:#C9D1D9;"> (</span></span>\n<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#D2A8FF;">cb</span><span style="color:#FF7B72;">:</span><span style="color:#C9D1D9;"> (</span></span>\n<span class="line"><span style="color:#C9D1D9;">      </span><span style="color:#FFA657;">req</span><span style="color:#FF7B72;">:</span><span style="color:#C9D1D9;"> </span><span style="color:#FFA657;">IncomingMessage</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">|</span><span style="color:#C9D1D9;"> </span><span style="color:#FFA657;">Http2ServerRequest</span><span style="color:#C9D1D9;">,</span></span>\n<span class="line"><span style="color:#C9D1D9;">      </span><span style="color:#FFA657;">res</span><span style="color:#FF7B72;">:</span><span style="color:#C9D1D9;"> </span><span style="color:#FFA657;">ServerResponse</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">|</span><span style="color:#C9D1D9;"> </span><span style="color:#FFA657;">Http2ServerResponse</span></span>\n<span class="line"><span style="color:#C9D1D9;">    ) </span><span style="color:#FF7B72;">=&gt;</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">void</span></span>\n<span class="line"><span style="color:#C9D1D9;">  ) </span><span style="color:#FF7B72;">=&gt;</span><span style="color:#C9D1D9;"> </span><span style="color:#FFA657;">Server</span></span>\n<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#D2A8FF;">beforeLoad</span><span style="color:#FF7B72;">?:</span><span style="color:#C9D1D9;"> (</span><span style="color:#FFA657;">uma</span><span style="color:#FF7B72;">:</span><span style="color:#C9D1D9;"> </span><span style="color:#FFA657;">Uma</span><span style="color:#C9D1D9;">) </span><span style="color:#FF7B72;">=&gt;</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">void</span></span>\n<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#D2A8FF;">afterLoaded</span><span style="color:#FF7B72;">?:</span><span style="color:#C9D1D9;"> (</span><span style="color:#FFA657;">uma</span><span style="color:#FF7B72;">:</span><span style="color:#C9D1D9;"> </span><span style="color:#FFA657;">Uma</span><span style="color:#C9D1D9;">) </span><span style="color:#FF7B72;">=&gt;</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">void</span></span>\n<span class="line"><span style="color:#C9D1D9;">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><h3 id="uma-app" tabindex="-1"><a class="header-anchor" href="#uma-app" aria-hidden="true">#</a> uma.app</h3><p><code>Koa Application</code>对象的实例，初始化时生成</p><h3 id="uma-start-port-number-8058" tabindex="-1"><a class="header-anchor" href="#uma-start-port-number-8058" aria-hidden="true">#</a> uma.start(port: number = 8058)</h3><p><code>Uma</code>启动方法，需要在初始化时调用，默认端口是 8058</p><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#0d1117;"><code><span class="line"><span style="color:#8B949E;">// app.ts</span></span>\n<span class="line"><span style="color:#8B949E;">// ===&gt; 调用start方法启动项目</span></span>\n<span class="line"><span style="color:#C9D1D9;">uma.</span><span style="color:#D2A8FF;">start</span><span style="color:#C9D1D9;">(</span><span style="color:#79C0FF;">8058</span><span style="color:#C9D1D9;">)</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="beforeload-afterload" tabindex="-1"><a class="header-anchor" href="#beforeload-afterload" aria-hidden="true">#</a> beforeLoad, afterLoad</h3><p>服务启动前后的钩子函数，传入当前 uma 实例</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="shiki" style="background-color:#0d1117;"><code><span class="line"><span style="color:#FF7B72;">const</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">uma</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> Uma.</span><span style="color:#D2A8FF;">instance</span><span style="color:#C9D1D9;">({</span></span>\n<span class="line"><span style="color:#C9D1D9;">  ROOT: __dirname,</span></span>\n<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#D2A8FF;">beforeLoad</span><span style="color:#C9D1D9;">(</span><span style="color:#FFA657;">uma</span><span style="color:#FF7B72;">:</span><span style="color:#C9D1D9;"> </span><span style="color:#FFA657;">Uma</span><span style="color:#C9D1D9;">) {</span></span>\n<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#8B949E;">// 服务开始启动</span></span>\n<span class="line"><span style="color:#C9D1D9;">  },</span></span>\n<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#D2A8FF;">afterLoad</span><span style="color:#C9D1D9;">(</span><span style="color:#FFA657;">uma</span><span style="color:#FF7B72;">:</span><span style="color:#C9D1D9;"> </span><span style="color:#FFA657;">Uma</span><span style="color:#C9D1D9;">) {</span></span>\n<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#8B949E;">// 服务启动完成</span></span>\n<span class="line"><span style="color:#C9D1D9;">  },</span></span>\n<span class="line"><span style="color:#C9D1D9;">})</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="静态方法" tabindex="-1"><a class="header-anchor" href="#静态方法" aria-hidden="true">#</a> 静态方法</h2><h3 id="instance" tabindex="-1"><a class="header-anchor" href="#instance" aria-hidden="true">#</a> instance</h3><p>获取/实例化 Uma，实例化必须传参，获取实例化后的 Uma 不用传参</p><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#0d1117;"><code><span class="line"><span style="color:#C9D1D9;">    static </span><span style="color:#D2A8FF;">instance</span><span style="color:#C9D1D9;">(options</span><span style="color:#FF7B72;">?:</span><span style="color:#C9D1D9;"> TUmaOption): Uma;</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="获取运行环境" tabindex="-1"><a class="header-anchor" href="#获取运行环境" aria-hidden="true">#</a> 获取运行环境</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#0d1117;"><code><span class="line"><span style="color:#C9D1D9;">    static get </span><span style="color:#D2A8FF;">env</span><span style="color:#C9D1D9;">(): string;</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="获取-app" tabindex="-1"><a class="header-anchor" href="#获取-app" aria-hidden="true">#</a> 获取 app</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#0d1117;"><code><span class="line"><span style="color:#C9D1D9;">    static get </span><span style="color:#D2A8FF;">app</span><span style="color:#C9D1D9;">(): Koa</span><span style="color:#FF7B72;">&lt;</span><span style="color:#C9D1D9;">Koa.DefaultState, IContext</span><span style="color:#FF7B72;">&gt;</span><span style="color:#C9D1D9;">;</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="获取-server" tabindex="-1"><a class="header-anchor" href="#获取-server" aria-hidden="true">#</a> 获取 server</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#0d1117;"><code><span class="line"><span style="color:#C9D1D9;">    static get </span><span style="color:#D2A8FF;">server</span><span style="color:#C9D1D9;">(): http.Server </span><span style="color:#FF7B72;">|</span><span style="color:#C9D1D9;"> https.Server;</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> options</h3><p>获取运行 Uma 的参数</p><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#0d1117;"><code><span class="line"><span style="color:#C9D1D9;">    static get </span><span style="color:#D2A8FF;">options</span><span style="color:#C9D1D9;">(): TUmaOption;</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="config" tabindex="-1"><a class="header-anchor" href="#config" aria-hidden="true">#</a> config</h3><p>获取所有 Uma 的配置</p><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#0d1117;"><code><span class="line"><span style="color:#C9D1D9;">    static get </span><span style="color:#D2A8FF;">config</span><span style="color:#C9D1D9;">(): TConfig;</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="获取插件配置" tabindex="-1"><a class="header-anchor" href="#获取插件配置" aria-hidden="true">#</a> 获取插件配置</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#0d1117;"><code><span class="line"><span style="color:#C9D1D9;">    static get </span><span style="color:#D2A8FF;">pluginConfig</span><span style="color:#C9D1D9;">(): {</span></span>\n<span class="line"><span style="color:#C9D1D9;">        [pluginName: string]: boolean </span><span style="color:#FF7B72;">|</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">import</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&quot;../types/TPluginConfig&quot;</span><span style="color:#C9D1D9;">).TPluginConfig;</span></span>\n<span class="line"><span style="color:#C9D1D9;">    };</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="获取生效的-plugin-key" tabindex="-1"><a class="header-anchor" href="#获取生效的-plugin-key" aria-hidden="true">#</a> 获取生效的 plugin key</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#0d1117;"><code><span class="line"><span style="color:#C9D1D9;">    static get </span><span style="color:#D2A8FF;">pluginKeys</span><span style="color:#C9D1D9;">(): any[];</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="或者某个插件的参数" tabindex="-1"><a class="header-anchor" href="#或者某个插件的参数" aria-hidden="true">#</a> 或者某个插件的参数</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#0d1117;"><code><span class="line"><span style="color:#C9D1D9;">    static </span><span style="color:#D2A8FF;">pluginOptions</span><span style="color:#C9D1D9;">(pluginName: string): object;</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="context" tabindex="-1"><a class="header-anchor" href="#context" aria-hidden="true">#</a> context</h3><p>获取 context，可以对 context 进行扩展等。实例化之后就是我们使用的 ctx</p><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#0d1117;"><code><span class="line"><span style="color:#C9D1D9;">    static get </span><span style="color:#D2A8FF;">context</span><span style="color:#C9D1D9;">(): Koa.BaseContext </span><span style="color:#FF7B72;">&amp;</span><span style="color:#C9D1D9;"> IContext;</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="controllersinfo" tabindex="-1"><a class="header-anchor" href="#controllersinfo" aria-hidden="true">#</a> controllersInfo</h3><p>获取实例化之后的 controller 信息，包括 controller、route 等</p><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#0d1117;"><code><span class="line"><span style="color:#C9D1D9;">    static get </span><span style="color:#D2A8FF;">controllersInfo</span><span style="color:#C9D1D9;">(): IterableIterator</span><span style="color:#FF7B72;">&lt;import</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&quot;..&quot;</span><span style="color:#C9D1D9;">).TControllerInfo</span><span style="color:#FF7B72;">&gt;</span><span style="color:#C9D1D9;">;</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>',48),e={},p=(0,a(4110).Z)(e,[["render",function(s,n){return l}]])},3769:(s,n,a)=>{a.r(n),a.d(n,{data:()=>l});const l={key:"v-7e73a89d",path:"/development/Uma.html",title:"Uma 对象",lang:"zh-CN",frontmatter:{head:[["meta",{property:"og:url",content:"/v2/development/Uma.html"}],["meta",{property:"og:site_name",content:"UMajs"}],["meta",{property:"og:title",content:"Uma 对象"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"og:locale:alternate",content:"en-US"}],["meta",{name:"twitter:card",content:"summary_large_image"}],["meta",{name:"twitter:image:alt",content:"UMajs"}],["meta",{property:"article:author",content:"wuba"}],["meta",{property:"og:restrictions:age",content:"3+"}]]},excerpt:"",headers:[{level:2,title:"API",slug:"api",children:[{level:3,title:"uma.env",slug:"uma-env",children:[]},{level:3,title:"uma.config",slug:"uma-config",children:[]},{level:3,title:"uma.options",slug:"uma-options",children:[]},{level:3,title:"uma.app",slug:"uma-app",children:[]},{level:3,title:"uma.start(port: number = 8058)",slug:"uma-start-port-number-8058",children:[]},{level:3,title:"beforeLoad, afterLoad",slug:"beforeload-afterload",children:[]}]},{level:2,title:"静态方法",slug:"静态方法",children:[{level:3,title:"instance",slug:"instance",children:[]},{level:3,title:"获取运行环境",slug:"获取运行环境",children:[]},{level:3,title:"获取 app",slug:"获取-app",children:[]},{level:3,title:"获取 server",slug:"获取-server",children:[]},{level:3,title:"options",slug:"options",children:[]},{level:3,title:"config",slug:"config",children:[]},{level:3,title:"获取插件配置",slug:"获取插件配置",children:[]},{level:3,title:"获取生效的 plugin key",slug:"获取生效的-plugin-key",children:[]},{level:3,title:"或者某个插件的参数",slug:"或者某个插件的参数",children:[]},{level:3,title:"context",slug:"context",children:[]},{level:3,title:"controllersInfo",slug:"controllersinfo",children:[]}]}],filePathRelative:"development/Uma.md",git:{updatedTime:1634816476e3,contributors:[{name:"BubbleM",email:"bubblelm@163.com",commits:1}]}}},4110:(s,n)=>{n.Z=(s,n)=>{for(const[a,l]of n)s[a]=l;return s}}}]);