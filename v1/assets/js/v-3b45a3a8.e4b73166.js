"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[378],{5166:(s,n,a)=>{a.r(n),a.d(n,{default:()=>i});var l=a(4386);const e=(0,l.uE)('<h1 id="国际化-i18n" tabindex="-1"><a class="header-anchor" href="#国际化-i18n" aria-hidden="true">#</a> 国际化（i18n）</h1><p>为了满足用户对于多语言应用的需求，本框架内置了国际化(I18n)支持</p><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><blockquote><p>$ npm install -S @umajs/plugin-i18n</p></blockquote><h2 id="开启服务" tabindex="-1"><a class="header-anchor" href="#开启服务" aria-hidden="true">#</a> 开启服务</h2><p>请参照插件使用说明开启国际化支持</p><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#0d1117;"><code><span class="line"><span style="color:#8B949E;">// plugin.config.ts</span></span>\n<span class="line"><span style="color:#FF7B72;">export</span><span style="color:#FFA657;"> </span><span style="color:#FF7B72;">default</span><span style="color:#FFA657;"> {</span></span>\n<span class="line"><span style="color:#FFA657;">    </span><span style="color:#C9D1D9;">i18n: {</span></span>\n<span class="line"><span style="color:#C9D1D9;">        enable: </span><span style="color:#79C0FF;">true</span><span style="color:#C9D1D9;">,</span></span>\n<span class="line"><span style="color:#C9D1D9;">        options: &lt;</span><span style="color:#7EE787;">i18nOptions</span><span style="color:#C9D1D9;">&gt;{</span></span>\n<span class="line"><span style="color:#C9D1D9;">            defaultLocale: </span><span style="color:#A5D6FF;">&#39;zh-cn&#39;</span><span style="color:#C9D1D9;">,</span></span>\n<span class="line"><span style="color:#C9D1D9;">        },</span></span>\n<span class="line"><span style="color:#C9D1D9;">    },</span></span>\n<span class="line"><span style="color:#C9D1D9;">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div>',7),p=(0,l.Uk)("具体开启方式请参考 "),o=(0,l.Uk)("plugin"),r=(0,l.Uk)(" 一节中的配置方式"),c=(0,l.uE)('<h2 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> options</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#0d1117;"><code><span class="line"><span style="color:#FF7B72;">type</span><span style="color:#C9D1D9;"> </span><span style="color:#FFA657;">i18nOptions</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> {</span></span>\n<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#FFA657;">defaultLocale</span><span style="color:#FF7B72;">?:</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">string</span><span style="color:#C9D1D9;">, </span><span style="color:#8B949E;">// 默认语言             默认值：en-US</span></span>\n<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#FFA657;">queryField</span><span style="color:#FF7B72;">?:</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">string</span><span style="color:#C9D1D9;">, </span><span style="color:#8B949E;">// 接收的query字段      默认值：locale</span></span>\n<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#FFA657;">cookieField</span><span style="color:#FF7B72;">?:</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">string</span><span style="color:#C9D1D9;">, </span><span style="color:#8B949E;">// 存储的cookie字段     默认值：locale</span></span>\n<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#FFA657;">writeCookie</span><span style="color:#FF7B72;">?:</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">boolean</span><span style="color:#C9D1D9;">, </span><span style="color:#8B949E;">// 是否写入cookie       默认值：true</span></span>\n<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#FFA657;">cookieMaxAge</span><span style="color:#FF7B72;">?:</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">string</span><span style="color:#C9D1D9;">, </span><span style="color:#8B949E;">// cookie最大存储时间   默认值：1y</span></span>\n<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#FFA657;">cookieDomain</span><span style="color:#FF7B72;">?:</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">string</span><span style="color:#C9D1D9;">, </span><span style="color:#8B949E;">// cookie的域名        默认值：&#39;&#39;</span></span>\n<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#FFA657;">defaultDirName</span><span style="color:#FF7B72;">?:</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">string</span><span style="color:#C9D1D9;">, </span><span style="color:#8B949E;">// 多语言文件夹名       默认值：i18n</span></span>\n<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#FFA657;">functionName</span><span style="color:#FF7B72;">?:</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">string</span><span style="color:#C9D1D9;">, </span><span style="color:#8B949E;">// 自定义函数名         默认值：i18n</span></span>\n<span class="line"><span style="color:#C9D1D9;">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="多语言文件" tabindex="-1"><a class="header-anchor" href="#多语言文件" aria-hidden="true">#</a> 多语言文件</h2><p>多语言独立配置成文件，默认放置于<code>&lt;root&gt;/src/i18n/</code>文件夹下（可配置 defaultDirName 进行更改），结构如下：</p><div class="language-text ext-text line-numbers-mode"><pre class="shiki" style="background-color:#0d1117;"><code><span class="line"><span style="color:#c9d1d9;">├── i18n\n|   ├── zh-CN.js(ts)\n|   ├── en-US.js(ts)\n|   ├── ...\n</span></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#0d1117;"><code><span class="line"><span style="color:#8B949E;">// en-US.js</span></span>\n<span class="line"><span style="color:#FF7B72;">export</span><span style="color:#FFA657;"> </span><span style="color:#FF7B72;">default</span><span style="color:#FFA657;"> </span><span style="color:#FF7B72;">function</span><span style="color:#FFA657;"> (template) </span><span style="color:#C9D1D9;">{</span></span>\n<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#FF7B72;">return</span><span style="color:#C9D1D9;"> {</span></span>\n<span class="line"><span style="color:#C9D1D9;">        welcome: </span><span style="color:#D2A8FF;">template</span><span style="color:#A5D6FF;">`HAHA, ${</span><span style="color:#79C0FF;">0</span><span style="color:#A5D6FF;">} ${&#39;name&#39;}!`</span><span style="color:#C9D1D9;">,</span></span>\n<span class="line"><span style="color:#C9D1D9;">        bye: </span><span style="color:#D2A8FF;">template</span><span style="color:#A5D6FF;">`goodbye, ${</span><span style="color:#C9D1D9;">name</span><span style="color:#A5D6FF;">}`</span><span style="color:#C9D1D9;">,</span></span>\n<span class="line"><span style="color:#C9D1D9;">        hi: </span><span style="color:#A5D6FF;">&#39;nice to see you&#39;</span><span style="color:#C9D1D9;">,</span></span>\n<span class="line"><span style="color:#C9D1D9;">    };</span></span>\n<span class="line"><span style="color:#C9D1D9;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#8B949E;">// zh-CN.js</span></span>\n<span class="line"><span style="color:#FF7B72;">export</span><span style="color:#FFA657;"> </span><span style="color:#FF7B72;">default</span><span style="color:#FFA657;"> </span><span style="color:#FF7B72;">function</span><span style="color:#FFA657;"> (template) </span><span style="color:#C9D1D9;">{</span></span>\n<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#FF7B72;">return</span><span style="color:#C9D1D9;"> {</span></span>\n<span class="line"><span style="color:#C9D1D9;">        welcome: </span><span style="color:#D2A8FF;">template</span><span style="color:#A5D6FF;">`哈哈, ${</span><span style="color:#79C0FF;">0</span><span style="color:#A5D6FF;">} ${&#39;name&#39;}!`</span><span style="color:#C9D1D9;">,</span></span>\n<span class="line"><span style="color:#C9D1D9;">        bye: </span><span style="color:#D2A8FF;">template</span><span style="color:#A5D6FF;">`再见, ${</span><span style="color:#C9D1D9;">name</span><span style="color:#A5D6FF;">}`</span><span style="color:#C9D1D9;">,</span></span>\n<span class="line"><span style="color:#C9D1D9;">        hi: </span><span style="color:#A5D6FF;">&#39;很高兴见到你!&#39;</span><span style="color:#C9D1D9;">,</span></span>\n<span class="line"><span style="color:#C9D1D9;">    };</span></span>\n<span class="line"><span style="color:#C9D1D9;">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><ul><li>template 参数为模板处理函数，在插件初始化时会自动调用</li><li>当需要使用自定义变量时，请使用 template 处理字符串模板</li><li>自定义变量提供两种传递方式 <ul><li>number 占位符 --&gt; <code>${0}</code></li><li>string 占位符 --&gt; <code>${&#39;name&#39;}</code></li></ul></li></ul><h2 id="获取多语言文本" tabindex="-1"><a class="header-anchor" href="#获取多语言文本" aria-hidden="true">#</a> 获取多语言文本</h2><p>统一使用<code>context.i18n</code>来获取多语言描述</p><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#0d1117;"><code><span class="line"><span style="color:#8B949E;">// en-US.js</span></span>\n<span class="line"><span style="color:#FF7B72;">export</span><span style="color:#FFA657;"> </span><span style="color:#FF7B72;">default</span><span style="color:#FFA657;"> </span><span style="color:#FF7B72;">function</span><span style="color:#FFA657;"> (template) </span><span style="color:#C9D1D9;">{</span></span>\n<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#FF7B72;">return</span><span style="color:#C9D1D9;"> {</span></span>\n<span class="line"><span style="color:#C9D1D9;">        name: </span><span style="color:#D2A8FF;">template</span><span style="color:#A5D6FF;">`hi, ${</span><span style="color:#79C0FF;">0</span><span style="color:#A5D6FF;">} ${</span><span style="color:#79C0FF;">1</span><span style="color:#A5D6FF;">}`</span><span style="color:#C9D1D9;">,</span></span>\n<span class="line"><span style="color:#C9D1D9;">        phone: </span><span style="color:#D2A8FF;">template</span><span style="color:#A5D6FF;">`phone: ${&#39;phone&#39;}`</span></span>\n<span class="line"><span style="color:#C9D1D9;">        time: </span><span style="color:#D2A8FF;">template</span><span style="color:#A5D6FF;">`today is ${&#39;week&#39;} at ${</span><span style="color:#79C0FF;">0</span><span style="color:#A5D6FF;">}`</span></span>\n<span class="line"><span style="color:#C9D1D9;">        hi: nice to see you</span><span style="color:#FF7B72;">!</span></span>\n<span class="line"><span style="color:#C9D1D9;">    };</span></span>\n<span class="line"><span style="color:#C9D1D9;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C9D1D9;">ctx.i18n.</span><span style="color:#D2A8FF;">name</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&#39;Scarlett&#39;</span><span style="color:#C9D1D9;">, </span><span style="color:#A5D6FF;">&#39;Johansson&#39;</span><span style="color:#C9D1D9;">)     </span><span style="color:#FF7B72;">==&gt;</span><span style="color:#C9D1D9;"> hi, Scarlett Johansson</span></span>\n<span class="line"><span style="color:#C9D1D9;">ctx.i18n.</span><span style="color:#D2A8FF;">phone</span><span style="color:#C9D1D9;">({phone: </span><span style="color:#79C0FF;">123456</span><span style="color:#C9D1D9;">})            </span><span style="color:#FF7B72;">==&gt;</span><span style="color:#C9D1D9;"> </span><span style="color:#FFA657;">phone</span><span style="color:#C9D1D9;">: </span><span style="color:#79C0FF;">123456</span></span>\n<span class="line"><span style="color:#C9D1D9;">ctx.i18n.</span><span style="color:#D2A8FF;">time</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&#39;12:00am&#39;</span><span style="color:#C9D1D9;">, {week: </span><span style="color:#A5D6FF;">&#39;Sunday&#39;</span><span style="color:#C9D1D9;">}) </span><span style="color:#FF7B72;">==&gt;</span><span style="color:#C9D1D9;"> today is Sunday at </span><span style="color:#79C0FF;">12</span><span style="color:#C9D1D9;">:00am</span></span>\n<span class="line"><span style="color:#C9D1D9;">ctx.i18n.hi                                </span><span style="color:#FF7B72;">==&gt;</span><span style="color:#C9D1D9;"> nice to see you</span><span style="color:#FF7B72;">!</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#8B949E;">// number占位符代表对应变量在调用时的参数位置（从0开始）</span></span>\n<span class="line"><span style="color:#8B949E;">// 当使用string占位符时，调用时变量使用对象形式传递，置于参数的最后一位</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h3 id="basecontroller-中使用" tabindex="-1"><a class="header-anchor" href="#basecontroller-中使用" aria-hidden="true">#</a> BaseController 中使用</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#0d1117;"><code><span class="line"><span style="color:#FF7B72;">export</span><span style="color:#FFA657;"> </span><span style="color:#FF7B72;">default</span><span style="color:#FFA657;"> </span><span style="color:#FF7B72;">class</span><span style="color:#FFA657;"> Index </span><span style="color:#FF7B72;">extends</span><span style="color:#FFA657;"> </span><span style="color:#79C0FF;">BaseController</span><span style="color:#FFA657;"> {</span></span>\n<span class="line"><span style="color:#FFA657;">  </span><span style="color:#D2A8FF;">index</span><span style="color:#FFA657;">() </span><span style="color:#C9D1D9;">{</span></span>\n<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#FF7B72;">const</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">time</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">this</span><span style="color:#C9D1D9;">.ctx.i18n.</span><span style="color:#D2A8FF;">time</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&#39;12:00am&#39;</span><span style="color:#C9D1D9;">, { week: </span><span style="color:#A5D6FF;">&#39;Sunday&#39;</span><span style="color:#C9D1D9;"> })</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#FF7B72;">return</span><span style="color:#C9D1D9;"> Result.</span><span style="color:#D2A8FF;">send</span><span style="color:#C9D1D9;">(time)</span></span>\n<span class="line"><span style="color:#C9D1D9;">  }</span></span>\n<span class="line"><span style="color:#FFA657;">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="view-中使用" tabindex="-1"><a class="header-anchor" href="#view-中使用" aria-hidden="true">#</a> View 中使用</h3><div class="language-html ext-html line-numbers-mode"><pre class="shiki" style="background-color:#0d1117;"><code><span class="line"><span style="color:#8B949E;">&lt;!-- ejs --&gt;</span></span>\n<span class="line"><span style="color:#C9D1D9;">&lt;</span><span style="color:#7EE787;">title</span><span style="color:#C9D1D9;">&gt;</span><span style="color:#FFA198;font-style:italic;">&lt;</span><span style="color:#C9D1D9;">%= ctx.i18n.hi %&gt;&lt;/</span><span style="color:#7EE787;">title</span><span style="color:#C9D1D9;">&gt;</span></span>\n<span class="line"><span style="color:#C9D1D9;">&lt;</span><span style="color:#7EE787;">p</span><span style="color:#C9D1D9;">&gt;</span><span style="color:#FFA198;font-style:italic;">&lt;</span><span style="color:#C9D1D9;">%= ctx.i18n.phone({phone: 123456}) %&gt;&lt;/</span><span style="color:#7EE787;">p</span><span style="color:#C9D1D9;">&gt;</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="切换语言" tabindex="-1"><a class="header-anchor" href="#切换语言" aria-hidden="true">#</a> 切换语言</h2><p>插件提供了三种方式供切换多语言，他们的优先级分别是：</p><p><code>query</code> &gt; <code>cookie</code> &gt; <code>header</code></p><ol><li>query: <code>url/?i18n=zh-CN</code></li><li>cookie: <code>i18n=zh-CN</code> （在一次请求后会自动将此种语言记录到 cookie）</li><li>header: <code>Accept-Language: zh-CN,zh;q=0.5</code></li></ol><blockquote><p>当以上三种方式在一次请求中都未设置，则 i18n 会选取默认语言（en-US）,可以通过配置进行修改，另外还提供了其他几项自定义配置，配置方法同插件使用方法</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#0d1117;"><code><span class="line"><span style="color:#C9D1D9;">{</span></span>\n<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#FFA657;">defaultLocale</span><span style="color:#C9D1D9;">: </span><span style="color:#A5D6FF;">&#39;en-US&#39;</span><span style="color:#C9D1D9;">, </span><span style="color:#8B949E;">// 默认下使用的语言</span></span>\n<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#FFA657;">queryField</span><span style="color:#C9D1D9;">: </span><span style="color:#A5D6FF;">&#39;i18n&#39;</span><span style="color:#C9D1D9;">,     </span><span style="color:#8B949E;">// query字段名</span></span>\n<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#FFA657;">cookieField</span><span style="color:#C9D1D9;">: </span><span style="color:#A5D6FF;">&#39;i18n&#39;</span><span style="color:#C9D1D9;">,     </span><span style="color:#8B949E;">//    cookie字段名</span></span>\n<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#FFA657;">writeCookie</span><span style="color:#C9D1D9;">: </span><span style="color:#79C0FF;">true</span><span style="color:#C9D1D9;">,         </span><span style="color:#8B949E;">// 是否自动写入cookie</span></span>\n<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#FFA657;">cookieMaxAge</span><span style="color:#C9D1D9;">: </span><span style="color:#A5D6FF;">&#39;1y&#39;</span><span style="color:#C9D1D9;">,         </span><span style="color:#8B949E;">// cookie存储时间 &lt;number&gt;time(ms/s/m/h/d/w/y)</span></span>\n<span class="line"><span style="color:#C9D1D9;">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="手动切换" tabindex="-1"><a class="header-anchor" href="#手动切换" aria-hidden="true">#</a> 手动切换</h3><p>某些特殊情况下如果需要手动设置语言，可调用<code>ctx.setLocale</code>方法</p><blockquote><p>注意：手动切换仅对当前访问有效</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#0d1117;"><code><span class="line"><span style="color:#8B949E;">/** query: i18n = en-US */</span></span>\n<span class="line"><span style="color:#FF7B72;">const</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">en</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> ctx.i18n.hi </span><span style="color:#8B949E;">// &#39;nice to see you!&#39;</span></span>\n<span class="line"><span style="color:#8B949E;">/** setLocale */</span></span>\n<span class="line"><span style="color:#C9D1D9;">ctx.</span><span style="color:#D2A8FF;">setLocale</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&#39;zh-CN&#39;</span><span style="color:#C9D1D9;">)</span></span>\n<span class="line"><span style="color:#FF7B72;">const</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">zh</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> ctx.i18n.hi </span><span style="color:#8B949E;">// &#39;很高兴见到你!&#39;</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>',24),t={},i=(0,a(4110).Z)(t,[["render",function(s,n){const a=(0,l.up)("RouterLink");return(0,l.wg)(),(0,l.iD)(l.HY,null,[e,(0,l._)("blockquote",null,[(0,l._)("p",null,[p,(0,l.Wm)(a,{to:"/%E5%9F%BA%E7%A1%80%E5%8A%9F%E8%83%BD/Plugin.html"},{default:(0,l.w5)((()=>[o])),_:1}),r])]),c],64)}]])},3303:(s,n,a)=>{a.r(n),a.d(n,{data:()=>l});const l={key:"v-3b45a3a8",path:"/%E6%8F%92%E4%BB%B6/i18n.html",title:"国际化（i18n）",lang:"zh-CN",frontmatter:{head:[["meta",{property:"og:url",content:"/v1/%E6%8F%92%E4%BB%B6/i18n.html"}],["meta",{property:"og:site_name",content:"UMajs"}],["meta",{property:"og:title",content:"国际化（i18n）"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"og:locale:alternate",content:"en-US"}],["meta",{name:"twitter:card",content:"summary_large_image"}],["meta",{name:"twitter:image:alt",content:"UMajs"}],["meta",{property:"article:author",content:"JiaZeng"}],["meta",{property:"og:restrictions:age",content:"3+"}],["meta",{name:"twitter:creator",content:"UMajs"}]]},excerpt:"",headers:[{level:2,title:"安装",slug:"安装",children:[]},{level:2,title:"开启服务",slug:"开启服务",children:[]},{level:2,title:"options",slug:"options",children:[]},{level:2,title:"多语言文件",slug:"多语言文件",children:[]},{level:2,title:"获取多语言文本",slug:"获取多语言文本",children:[{level:3,title:"BaseController 中使用",slug:"basecontroller-中使用",children:[]},{level:3,title:"View 中使用",slug:"view-中使用",children:[]}]},{level:2,title:"切换语言",slug:"切换语言",children:[{level:3,title:"手动切换",slug:"手动切换",children:[]}]}],filePathRelative:"插件/i18n.md",git:{updatedTime:1630481998e3,contributors:[{name:"jiazengp",email:"jiazengp@gmail.com",commits:1}]}}},4110:(s,n)=>{n.Z=(s,n)=>{for(const[a,l]of n)s[a]=l;return s}}}]);