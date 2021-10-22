"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[238],{5059:(s,n,a)=>{a.r(n),a.d(n,{default:()=>o});const l=(0,a(4386).uE)('<h1 id="插件开发" tabindex="-1"><a class="header-anchor" href="#插件开发" aria-hidden="true">#</a> 插件开发</h1><p>任何 Koa 的中间件都可以直接被框架使用。在实际使用场景中，中间件有全局加载（模版渲染中间件）和局部加载（要忽略的路由规则）的需求。针对这种情况，插件形式的中间件有下面两种形式。</p><h2 id="初始化插件" tabindex="-1"><a class="header-anchor" href="#初始化插件" aria-hidden="true">#</a> 初始化插件</h2><p>通过 <code>uma</code> 命令可以快速的给工程添加插件或者可发布的插件工程</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#0d1117;"><code><span class="line"><span style="color:#C9D1D9;">uma plugin init [pluginName]</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="纯中间件形式" tabindex="-1"><a class="header-anchor" href="#纯中间件形式" aria-hidden="true">#</a> 纯中间件形式</h2><p>比如我们想使用模版渲染中间件 koa-views，就可以通过插件形式，示例如下：</p><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#0d1117;"><code><span class="line"><span style="color:#8B949E;">// app/src/plugins/views/index.ts</span></span>\n<span class="line"><span style="color:#FF7B72;">import</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">*</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">as</span><span style="color:#C9D1D9;"> Koa </span><span style="color:#FF7B72;">from</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&#39;koa&#39;</span><span style="color:#C9D1D9;">;</span></span>\n<span class="line"><span style="color:#FF7B72;">import</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">*</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">as</span><span style="color:#C9D1D9;"> views </span><span style="color:#FF7B72;">from</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&#39;koa-views&#39;</span><span style="color:#C9D1D9;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#FF7B72;">import</span><span style="color:#C9D1D9;"> { Uma } </span><span style="color:#FF7B72;">from</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&#39;@umajs/core&#39;</span><span style="color:#C9D1D9;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#FF7B72;">type</span><span style="color:#C9D1D9;"> </span><span style="color:#FFA657;">TView</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> {</span></span>\n<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#FFA657;">root</span><span style="color:#FF7B72;">:</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">string</span></span>\n<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#FFA657;">opts</span><span style="color:#FF7B72;">:</span><span style="color:#C9D1D9;"> {</span></span>\n<span class="line"><span style="color:#C9D1D9;">        </span><span style="color:#8B949E;">// views options</span></span>\n<span class="line"><span style="color:#C9D1D9;">    }</span></span>\n<span class="line"><span style="color:#C9D1D9;">};</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#8B949E;">// options 是插件的配置及 [pluginName].config.ts 的配置结合配置</span></span>\n<span class="line"><span style="color:#FF7B72;">export</span><span style="color:#FFA657;"> </span><span style="color:#FF7B72;">default</span><span style="color:#FFA657;"> (uma</span><span style="color:#FF7B72;">:</span><span style="color:#FFA657;"> Uma, options</span><span style="color:#FF7B72;">:</span><span style="color:#FFA657;"> TView </span><span style="color:#FF7B72;">=</span><span style="color:#FFA657;"> {})</span><span style="color:#FF7B72;">:</span><span style="color:#FFA657;"> Koa.Middleware </span><span style="color:#FF7B72;">=&gt;</span><span style="color:#FFA657;"> </span><span style="color:#C9D1D9;">{</span></span>\n<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#8B949E;">// uma 实例化对象；options 插件配置的 options，等同于 uma.plugin[&#39;view&#39;].options</span></span>\n<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#FF7B72;">return</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">views</span><span style="color:#C9D1D9;">(options.root, options.opts);</span></span>\n<span class="line"><span style="color:#C9D1D9;">};</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h2 id="复合插件形式" tabindex="-1"><a class="header-anchor" href="#复合插件形式" aria-hidden="true">#</a> 复合插件形式</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#0d1117;"><code><span class="line"><span style="color:#FF7B72;">export</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">type</span><span style="color:#C9D1D9;"> </span><span style="color:#FFA657;">TPlugin</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> {</span></span>\n<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#FFA657;">use</span><span style="color:#FF7B72;">?:</span><span style="color:#C9D1D9;"> {</span></span>\n<span class="line"><span style="color:#C9D1D9;">        </span><span style="color:#D2A8FF;">handler</span><span style="color:#FF7B72;">:</span><span style="color:#C9D1D9;"> (</span><span style="color:#FFA657;">ctx</span><span style="color:#FF7B72;">:</span><span style="color:#C9D1D9;"> </span><span style="color:#FFA657;">IContext</span><span style="color:#C9D1D9;">, </span><span style="color:#D2A8FF;">next</span><span style="color:#FF7B72;">?:</span><span style="color:#C9D1D9;"> </span><span style="color:#FFA657;">Function</span><span style="color:#C9D1D9;">) </span><span style="color:#FF7B72;">=&gt;</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">any</span><span style="color:#C9D1D9;">;</span></span>\n<span class="line"><span style="color:#C9D1D9;">    }</span></span>\n<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#FFA657;">filter</span><span style="color:#FF7B72;">?:</span><span style="color:#C9D1D9;"> {</span></span>\n<span class="line"><span style="color:#C9D1D9;">        </span><span style="color:#FFA657;">regexp</span><span style="color:#FF7B72;">:</span><span style="color:#C9D1D9;"> </span><span style="color:#FFA657;">RegExp</span><span style="color:#C9D1D9;">;</span></span>\n<span class="line"><span style="color:#C9D1D9;">        </span><span style="color:#D2A8FF;">handler</span><span style="color:#FF7B72;">:</span><span style="color:#C9D1D9;"> (</span><span style="color:#FFA657;">ctx</span><span style="color:#FF7B72;">:</span><span style="color:#C9D1D9;"> </span><span style="color:#FFA657;">IContext</span><span style="color:#C9D1D9;">, </span><span style="color:#D2A8FF;">next</span><span style="color:#FF7B72;">?:</span><span style="color:#C9D1D9;"> </span><span style="color:#FFA657;">Function</span><span style="color:#C9D1D9;">) </span><span style="color:#FF7B72;">=&gt;</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">any</span><span style="color:#C9D1D9;">;</span></span>\n<span class="line"><span style="color:#C9D1D9;">    };</span></span>\n<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#FFA657;">ignore</span><span style="color:#FF7B72;">?:</span><span style="color:#C9D1D9;"> {</span></span>\n<span class="line"><span style="color:#C9D1D9;">        </span><span style="color:#FFA657;">regexp</span><span style="color:#FF7B72;">:</span><span style="color:#C9D1D9;"> </span><span style="color:#FFA657;">RegExp</span><span style="color:#C9D1D9;">;</span></span>\n<span class="line"><span style="color:#C9D1D9;">        </span><span style="color:#D2A8FF;">handler</span><span style="color:#FF7B72;">:</span><span style="color:#C9D1D9;"> (</span><span style="color:#FFA657;">ctx</span><span style="color:#FF7B72;">:</span><span style="color:#C9D1D9;"> </span><span style="color:#FFA657;">IContext</span><span style="color:#C9D1D9;">, </span><span style="color:#D2A8FF;">next</span><span style="color:#FF7B72;">?:</span><span style="color:#C9D1D9;"> </span><span style="color:#FFA657;">Function</span><span style="color:#C9D1D9;">) </span><span style="color:#FF7B72;">=&gt;</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">any</span><span style="color:#C9D1D9;">;</span></span>\n<span class="line"><span style="color:#C9D1D9;">    };</span></span>\n<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#FFA657;">method</span><span style="color:#FF7B72;">?:</span><span style="color:#C9D1D9;"> {</span></span>\n<span class="line"><span style="color:#C9D1D9;">        </span><span style="color:#FFA657;">type</span><span style="color:#FF7B72;">:</span><span style="color:#C9D1D9;"> </span><span style="color:#FFA657;">RequestMethod</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">|</span><span style="color:#C9D1D9;"> </span><span style="color:#FFA657;">RequestMethod</span><span style="color:#C9D1D9;">[];</span></span>\n<span class="line"><span style="color:#C9D1D9;">        </span><span style="color:#D2A8FF;">handler</span><span style="color:#FF7B72;">:</span><span style="color:#C9D1D9;"> (</span><span style="color:#FFA657;">ctx</span><span style="color:#FF7B72;">:</span><span style="color:#C9D1D9;"> </span><span style="color:#FFA657;">IContext</span><span style="color:#C9D1D9;">, </span><span style="color:#D2A8FF;">next</span><span style="color:#FF7B72;">?:</span><span style="color:#C9D1D9;"> </span><span style="color:#FFA657;">Function</span><span style="color:#C9D1D9;">) </span><span style="color:#FF7B72;">=&gt;</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">any</span><span style="color:#C9D1D9;">;</span></span>\n<span class="line"><span style="color:#C9D1D9;">    };</span></span>\n<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#FFA657;">results</span><span style="color:#FF7B72;">?:</span><span style="color:#C9D1D9;"> { [</span><span style="color:#FFA657;">key</span><span style="color:#FF7B72;">:</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">string</span><span style="color:#C9D1D9;">]</span><span style="color:#FF7B72;">:</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">any</span><span style="color:#C9D1D9;"> };</span></span>\n<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#FFA657;">context</span><span style="color:#FF7B72;">?:</span><span style="color:#C9D1D9;"> { [</span><span style="color:#FFA657;">key</span><span style="color:#FF7B72;">:</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">string</span><span style="color:#C9D1D9;">]</span><span style="color:#FF7B72;">:</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">any</span><span style="color:#C9D1D9;"> };</span></span>\n<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#FFA657;">request</span><span style="color:#FF7B72;">?:</span><span style="color:#C9D1D9;"> { [</span><span style="color:#FFA657;">key</span><span style="color:#FF7B72;">:</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">string</span><span style="color:#C9D1D9;">]</span><span style="color:#FF7B72;">:</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">any</span><span style="color:#C9D1D9;"> };</span></span>\n<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#FFA657;">response</span><span style="color:#FF7B72;">?:</span><span style="color:#C9D1D9;"> { [</span><span style="color:#FFA657;">key</span><span style="color:#FF7B72;">:</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">string</span><span style="color:#C9D1D9;">]</span><span style="color:#FF7B72;">:</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">any</span><span style="color:#C9D1D9;"> };</span></span>\n<span class="line"><span style="color:#C9D1D9;">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p>复合插件形式不仅可以用中间件进行扩展，还可以对我们常用的 Context、Request、Response 进行扩展，扩展之后我们就可以在代码中使用 ctx、req、res 中使用我们扩展的方法。</p><p>复合插件形式还提供了<code>use、filter、ignore、method</code>四种局部加载中间件的配置形式，具体配置局部加载规则如下：</p><ul><li>use 直接使用已有的中间件</li><li>filter 通过 <code>regexp: RegExp;</code> 属性配置局部加载规则，仅对匹配的规则生效</li><li>ignore 通过 <code>regexp: RegExp;</code> 属性配置局部加载规则，忽略匹配到的规则</li><li>method 通过 <code>type: RequestMethod | RequestMethod[];</code> 属性配置局部加载规则</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#0d1117;"><code><span class="line"><span style="color:#8B949E;">// plugins/demo.plugin.ts</span></span>\n<span class="line"><span style="color:#FF7B72;">import</span><span style="color:#C9D1D9;"> { Uma, IContext, TPlugin } </span><span style="color:#FF7B72;">from</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&quot;@umajs/core&quot;</span><span style="color:#C9D1D9;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#FF7B72;">export</span><span style="color:#FFA657;"> </span><span style="color:#FF7B72;">default</span><span style="color:#FFA657;"> (uma</span><span style="color:#FF7B72;">:</span><span style="color:#FFA657;"> Uma, options</span><span style="color:#FF7B72;">:</span><span style="color:#FFA657;"> </span><span style="color:#79C0FF;">any</span><span style="color:#FFA657;"> </span><span style="color:#FF7B72;">=</span><span style="color:#FFA657;"> {})</span><span style="color:#FF7B72;">:</span><span style="color:#FFA657;"> TPlugin </span><span style="color:#FF7B72;">=&gt;</span><span style="color:#FFA657;"> </span><span style="color:#C9D1D9;">{</span></span>\n<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#FF7B72;">return</span><span style="color:#C9D1D9;"> {</span></span>\n<span class="line"><span style="color:#C9D1D9;">        context: {</span></span>\n<span class="line"><span style="color:#C9D1D9;">            test: </span><span style="color:#79C0FF;">123</span><span style="color:#C9D1D9;">,          </span><span style="color:#8B949E;">// 给 ctx 加上 test</span></span>\n<span class="line"><span style="color:#C9D1D9;">        },</span></span>\n<span class="line"><span style="color:#C9D1D9;">        request: {</span></span>\n<span class="line"><span style="color:#C9D1D9;">            fileName: </span><span style="color:#A5D6FF;">&#39;a.png&#39;</span><span style="color:#C9D1D9;">   </span><span style="color:#8B949E;">// 给 request 加上 fileName</span></span>\n<span class="line"><span style="color:#C9D1D9;">        },</span></span>\n<span class="line"><span style="color:#C9D1D9;">        use: { </span><span style="color:#8B949E;">// 全局加载</span></span>\n<span class="line"><span style="color:#C9D1D9;">            </span><span style="color:#FF7B72;">async</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">handler</span><span style="color:#C9D1D9;">(</span><span style="color:#FFA657;">ctx</span><span style="color:#FF7B72;">:</span><span style="color:#C9D1D9;"> </span><span style="color:#FFA657;">IContext</span><span style="color:#C9D1D9;">, </span><span style="color:#D2A8FF;">next</span><span style="color:#FF7B72;">:</span><span style="color:#C9D1D9;"> </span><span style="color:#FFA657;">Function</span><span style="color:#C9D1D9;">) {</span></span>\n<span class="line"><span style="color:#C9D1D9;">                console.</span><span style="color:#D2A8FF;">log</span><span style="color:#C9D1D9;">(ctx.test, ctx.req.fileName, options);    </span><span style="color:#8B949E;">// &gt;&gt; 123 a.png {}</span></span>\n<span class="line"><span style="color:#C9D1D9;">                console.</span><span style="color:#D2A8FF;">log</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&#39;use before&#39;</span><span style="color:#C9D1D9;">);</span></span>\n<span class="line"><span style="color:#C9D1D9;">                </span><span style="color:#FF7B72;">await</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">next</span><span style="color:#C9D1D9;">();</span></span>\n<span class="line"><span style="color:#C9D1D9;">                console.</span><span style="color:#D2A8FF;">log</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&#39;use after&#39;</span><span style="color:#C9D1D9;">);</span></span>\n<span class="line"><span style="color:#C9D1D9;">            },</span></span>\n<span class="line"><span style="color:#C9D1D9;">        },</span></span>\n<span class="line"><span style="color:#C9D1D9;">        filter: { </span><span style="color:#8B949E;">// 局部加载 仅对/page/路由生效</span></span>\n<span class="line"><span style="color:#C9D1D9;">            regexp: </span><span style="color:#FF7B72;">new</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">RegExp</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">/page/</span><span style="color:#C9D1D9;">),</span></span>\n<span class="line"><span style="color:#C9D1D9;">            </span><span style="color:#FF7B72;">async</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">handler</span><span style="color:#C9D1D9;">(</span><span style="color:#FFA657;">ctx</span><span style="color:#FF7B72;">:</span><span style="color:#C9D1D9;"> </span><span style="color:#FFA657;">IContext</span><span style="color:#C9D1D9;">, </span><span style="color:#D2A8FF;">next</span><span style="color:#FF7B72;">:</span><span style="color:#C9D1D9;"> </span><span style="color:#FFA657;">Function</span><span style="color:#C9D1D9;">) {</span></span>\n<span class="line"><span style="color:#C9D1D9;">                console.</span><span style="color:#D2A8FF;">log</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&#39;page get before&#39;</span><span style="color:#C9D1D9;">);</span></span>\n<span class="line"><span style="color:#C9D1D9;">                </span><span style="color:#FF7B72;">await</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">next</span><span style="color:#C9D1D9;">();</span></span>\n<span class="line"><span style="color:#C9D1D9;">                console.</span><span style="color:#D2A8FF;">log</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&#39;page get after&#39;</span><span style="color:#C9D1D9;">);</span></span>\n<span class="line"><span style="color:#C9D1D9;">            },</span></span>\n<span class="line"><span style="color:#C9D1D9;">        },</span></span>\n<span class="line"><span style="color:#C9D1D9;">        ignore: { </span><span style="color:#8B949E;">// 局部加载 忽略路由/Page/</span></span>\n<span class="line"><span style="color:#C9D1D9;">            regexp: </span><span style="color:#FF7B72;">new</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">RegExp</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">/page/</span><span style="color:#C9D1D9;">),</span></span>\n<span class="line"><span style="color:#C9D1D9;">            </span><span style="color:#FF7B72;">async</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">handler</span><span style="color:#C9D1D9;">(</span><span style="color:#FFA657;">ctx</span><span style="color:#FF7B72;">:</span><span style="color:#C9D1D9;"> </span><span style="color:#FFA657;">IContext</span><span style="color:#C9D1D9;">, </span><span style="color:#D2A8FF;">next</span><span style="color:#FF7B72;">:</span><span style="color:#C9D1D9;"> </span><span style="color:#FFA657;">Function</span><span style="color:#C9D1D9;">) {</span></span>\n<span class="line"><span style="color:#C9D1D9;">                console.</span><span style="color:#D2A8FF;">log</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&#39;page ignore before&#39;</span><span style="color:#C9D1D9;">);</span></span>\n<span class="line"><span style="color:#C9D1D9;">                </span><span style="color:#FF7B72;">await</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">next</span><span style="color:#C9D1D9;">();</span></span>\n<span class="line"><span style="color:#C9D1D9;">                console.</span><span style="color:#D2A8FF;">log</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&#39;page ignore after&#39;</span><span style="color:#C9D1D9;">);</span></span>\n<span class="line"><span style="color:#C9D1D9;">            },</span></span>\n<span class="line"><span style="color:#C9D1D9;">        },</span></span>\n<span class="line"><span style="color:#C9D1D9;">        method: { </span><span style="color:#8B949E;">// 局部加载 仅对method=GET 生效</span></span>\n<span class="line"><span style="color:#C9D1D9;">            type: </span><span style="color:#A5D6FF;">&#39;GET&#39;</span><span style="color:#C9D1D9;">,</span></span>\n<span class="line"><span style="color:#C9D1D9;">            </span><span style="color:#FF7B72;">async</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">handler</span><span style="color:#C9D1D9;">(</span><span style="color:#FFA657;">ctx</span><span style="color:#FF7B72;">:</span><span style="color:#C9D1D9;"> </span><span style="color:#FFA657;">IContext</span><span style="color:#C9D1D9;">, </span><span style="color:#D2A8FF;">next</span><span style="color:#FF7B72;">:</span><span style="color:#C9D1D9;"> </span><span style="color:#FFA657;">Function</span><span style="color:#C9D1D9;">) {</span></span>\n<span class="line"><span style="color:#C9D1D9;">                console.</span><span style="color:#D2A8FF;">log</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&#39;method get before&#39;</span><span style="color:#C9D1D9;">);</span></span>\n<span class="line"><span style="color:#C9D1D9;">                </span><span style="color:#FF7B72;">await</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">next</span><span style="color:#C9D1D9;">();</span></span>\n<span class="line"><span style="color:#C9D1D9;">                console.</span><span style="color:#D2A8FF;">log</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&#39;method get after&#39;</span><span style="color:#C9D1D9;">);</span></span>\n<span class="line"><span style="color:#C9D1D9;">            },</span></span>\n<span class="line"><span style="color:#C9D1D9;">        },</span></span>\n<span class="line"><span style="color:#C9D1D9;">    },</span></span>\n<span class="line"><span style="color:#C9D1D9;">};</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br></div></div><h2 id="npm-包名规范" tabindex="-1"><a class="header-anchor" href="#npm-包名规范" aria-hidden="true">#</a> npm 包名规范</h2><blockquote><p>欢迎大家在社区中发布支持 Umajs 的插件，为保持插件生态的统一。我们推荐使用<code>umajs-plugin-xxx</code>的命名方式发布自定义的插件包到 npm 中。以方便其他更多人搜索和使用。</p></blockquote>',16),p={},o=(0,a(4110).Z)(p,[["render",function(s,n){return l}]])},1827:(s,n,a)=>{a.r(n),a.d(n,{data:()=>l});const l={key:"v-0ceaf927",path:"/plugin/dev.html",title:"插件开发",lang:"zh-CN",frontmatter:{head:[["meta",{property:"og:url",content:"/v2/plugin/dev.html"}],["meta",{property:"og:site_name",content:"UMajs"}],["meta",{property:"og:title",content:"插件开发"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"og:locale:alternate",content:"en-US"}],["meta",{name:"twitter:card",content:"summary_large_image"}],["meta",{name:"twitter:image:alt",content:"UMajs"}],["meta",{property:"article:author",content:"wuba"}],["meta",{property:"og:restrictions:age",content:"3+"}]]},excerpt:"",headers:[{level:2,title:"初始化插件",slug:"初始化插件",children:[]},{level:2,title:"纯中间件形式",slug:"纯中间件形式",children:[]},{level:2,title:"复合插件形式",slug:"复合插件形式",children:[]},{level:2,title:"npm 包名规范",slug:"npm-包名规范",children:[]}],filePathRelative:"plugin/dev.md",git:{updatedTime:1634896538e3,contributors:[{name:"BubbleM",email:"bubblelm@163.com",commits:1},{name:"dazjean",email:"zunyi_zjj@163.com",commits:1}]}}},4110:(s,n)=>{n.Z=(s,n)=>{for(const[a,l]of n)s[a]=l;return s}}}]);