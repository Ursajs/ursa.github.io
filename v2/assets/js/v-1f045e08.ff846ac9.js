"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[724],{9140:(s,n,a)=>{a.r(n),a.d(n,{default:()=>i});var l=a(4386);const e=(0,l.uE)('<h1 id="参数装饰器-argdecorator" tabindex="-1"><a class="header-anchor" href="#参数装饰器-argdecorator" aria-hidden="true">#</a> 参数装饰器（ArgDecorator）</h1><p><code>Umajs</code> 提供了 <code>createArgDecorator</code> 可以很方便的创建自定义参数装饰器，并且框架还提供了如下装饰器直接使用。</p><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2><blockquote><p>安装 <code>npm install -S @umajs/arg-decorator</code></p></blockquote><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="shiki" style="background-color:#0d1117;"><code><span class="line"><span style="color:#FF7B72;">import</span><span style="color:#C9D1D9;"> { ToNumber, Body } </span><span style="color:#FF7B72;">from</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&#39;@umajs/arg-decorator&#39;</span><span style="color:#C9D1D9;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#8B949E;">// url参数类型修饰校验</span></span>\n<span class="line"><span style="color:#C9D1D9;">@</span><span style="color:#D2A8FF;">Path</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&#39;/saveUser&#39;</span><span style="color:#C9D1D9;">)</span></span>\n<span class="line"><span style="color:#D2A8FF;">saveUser</span><span style="color:#C9D1D9;">(@</span><span style="color:#D2A8FF;">ToNumber</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&#39;age&#39;</span><span style="color:#C9D1D9;">) age :number) {</span></span>\n<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#FF7B72;">return</span><span style="color:#C9D1D9;"> Result.</span><span style="color:#D2A8FF;">send</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">`This router queryParms is ${</span><span style="color:#C9D1D9;">userId</span><span style="color:#A5D6FF;">} ${</span><span style="color:#C9D1D9;">age</span><span style="color:#A5D6FF;">}`</span><span style="color:#C9D1D9;">);</span></span>\n<span class="line"><span style="color:#C9D1D9;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#8B949E;">// POST参数类型修饰校验</span></span>\n<span class="line"><span style="color:#C9D1D9;">@</span><span style="color:#D2A8FF;">Path</span><span style="color:#C9D1D9;">({value:</span><span style="color:#A5D6FF;">&#39;/post&#39;</span><span style="color:#C9D1D9;">,method:RequestMethod.</span><span style="color:#79C0FF;">POST</span><span style="color:#C9D1D9;">})</span></span>\n<span class="line"><span style="color:#D2A8FF;">saveUser</span><span style="color:#C9D1D9;">(@Body.</span><span style="color:#D2A8FF;">ToNumber</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&#39;age&#39;</span><span style="color:#C9D1D9;">) age: number){</span></span>\n<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#FF7B72;">return</span><span style="color:#C9D1D9;"> Result.</span><span style="color:#D2A8FF;">send</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">`This Post body info is ${</span><span style="color:#79C0FF;">JSON</span><span style="color:#A5D6FF;">.</span><span style="color:#79C0FF;">stringify</span><span style="color:#A5D6FF;">(</span><span style="color:#C9D1D9;">userInfo</span><span style="color:#A5D6FF;">)</span><span style="color:#A5D6FF;">}`</span><span style="color:#C9D1D9;">);</span></span>\n<span class="line"><span style="color:#C9D1D9;">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>当接口访问<code>localhost:port//saveUser?age=str</code>时，controller方法将终止执行，并默认返回客户端提示信息</p><div class="language-javascript ext-js line-numbers-mode"><pre class="shiki" style="background-color:#0d1117;"><code><span class="line"><span style="color:#C9D1D9;">{</span></span>\n<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#A5D6FF;">&quot;code&quot;</span><span style="color:#C9D1D9;">: </span><span style="color:#79C0FF;">0</span><span style="color:#C9D1D9;">,</span></span>\n<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#A5D6FF;">&quot;msg&quot;</span><span style="color:#C9D1D9;">: </span><span style="color:#A5D6FF;">&quot;age 参数必须为数据类型。入参值str&quot;</span></span>\n<span class="line"><span style="color:#C9D1D9;">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="校验参数装饰器" tabindex="-1"><a class="header-anchor" href="#校验参数装饰器" aria-hidden="true">#</a> 校验参数装饰器</h2><table><thead><tr><th><div style="width:450px;">修饰器</div></th><th><div style="width:200px;">使用说明</div></th></tr></thead><tbody><tr><td>@Param(id:string)</td><td>动态路由参数修饰</td></tr><tr><td>@Query(id:string)</td><td>url参数修饰器</td></tr><tr><td>@Body(id?:string or Function or string[] or class)</td><td>POST请求参数修饰器 <code>@Body() body:class</code> or <code>@Body(&#39;id&#39;) id:any</code> or <code>@Body([&#39;name&#39;,&#39;age&#39;]) user: {name:any,age:any}</code></td></tr><tr><td>@Require(id: string,message?:string)</td><td>url参数修饰并做必填校验</td></tr><tr><td>@ToNumber(id: string,message?: string)</td><td>参数修饰并类型转换为number类型 类型转换失败则会终止函数执行并返回提示内容</td></tr><tr><td>@ToBoolean(id: string,message?: string)</td><td>参数修饰并类型转换布尔类型 类型转换失败则会终止函数执行并返回提示内容</td></tr><tr><td>@ToArray(id: string, split?:string ,message?: string)</td><td>参数修饰并类型转换数组 类型转换失败则会终止函数执行并返回提示内容</td></tr><tr><td>@ToDate(id: string,message?: string)</td><td>参数修饰并类型转换为date类型 类型转换失败则会终止函数执行并返回提示内容 备注：参数接受如果为数字也会按照时间强制转换为时间格式。</td></tr><tr><td>@Equals(id: string,comparison?: any)</td><td>参数修饰并做值对比校验</td></tr><tr><td>@NotNull(id: string,message?: string)</td><td>限制必须不为null</td></tr><tr><td>@AssertFalse(id: string,message?: string)</td><td>限制必须为false</td></tr><tr><td>@AssertTrue(id: string,message?: string)</td><td>限制必须为true</td></tr><tr><td>@DecimalMax(id: string,value: number,message?: string)</td><td>限制必须为一个不大于指定值的数字</td></tr><tr><td>@DecimalMin(id: string,value: number,message?: string)</td><td>限制必须为一个不小于指定值的数字</td></tr><tr><td>@Future(id: string,message?: string)</td><td>限制必须是一个将来的日期</td></tr><tr><td>@Max(id: string,value: number,message?: string)</td><td>限制必须为一个不大于指定值的数字</td></tr><tr><td>@Min(id: string,value: number,message?: string)</td><td>限制必须为一个不小于指定值的数字</td></tr><tr><td>@Past(id: string,message?: string)</td><td>限制必须是一个过去的日期</td></tr><tr><td>@Pattern(id: string,pattern: RegExp,message?: string)</td><td>限制必须符合指定的正则表达式</td></tr><tr><td>@Size(id: string,max: number,min: number,message?: string)</td><td>限制字符长度必须在min到max之间</td></tr><tr><td>@NotEmpty(id: string,message?: string)</td><td>验证注解的元素值不为null且不为空（字符串长度不为0、集合大小不为0）</td></tr><tr><td>@NotBlank(id: string,message?: string)</td><td>验证注解的元素值不为空（不为null、去除首位空格后长度为0），不同于@NotEmpty，@NotBlank只应用于字符串且在比较时会去除字符串的空格</td></tr><tr><td>@Email(id: string,message?: string)</td><td>验证注解的元素值是Email</td></tr><tr><td>@Phone(id: string,message?: string)</td><td>验证元素值是手机号 具体格式参考<code>https://github.com/validatorjs/validator.js/blob/master/src/lib/isMobilePhone.js</code></td></tr></tbody></table><h2 id="非校验参数修饰器" tabindex="-1"><a class="header-anchor" href="#非校验参数修饰器" aria-hidden="true">#</a> 非校验参数修饰器</h2><table><thead><tr><th><div style="width:450px;">修饰器</div></th><th>使用说明</th></tr></thead><tbody><tr><td>@Cookies(id:string)</td><td>cookies 参数修饰器</td></tr><tr><td>@Headers(id:string)</td><td>headers 请求头参数修饰器</td></tr><tr><td>@RequestParam(id:string)</td><td>GET/POST 通用参数修饰器，POST 请求类型时参数获取优先级为：Body &lt; Query 相同参数 url 携带参数覆盖 body 请求体中的属性值</td></tr><tr><td>@RequestFile(field: string)</td><td>文件上传时文件参数修饰器</td></tr></tbody></table><h2 id="高阶" tabindex="-1"><a class="header-anchor" href="#高阶" aria-hidden="true">#</a> 高阶</h2><h3 id="body参数装饰器接受class类" tabindex="-1"><a class="header-anchor" href="#body参数装饰器接受class类" aria-hidden="true">#</a> Body参数装饰器接受class类</h3>',14),p=(0,l.Uk)("当Body传递为class类时，会将请求参数中获取到的数据作为参数调用类构造函数，同时也会进行属性类型校验，校验成功则返回实例化对象。更多class的使用请参考"),t={href:"https://github.com/Umajs/class-validator",target:"_blank",rel:"noopener noreferrer"},o=(0,l._)("code",null,"@umajs/class-validator",-1),r=(0,l.uE)('<div class="language-typescript ext-ts line-numbers-mode"><pre class="shiki" style="background-color:#0d1117;"><code><span class="line"><span style="color:#8B949E;">// 定义class</span></span>\n<span class="line"><span style="color:#FF7B72;">import</span><span style="color:#C9D1D9;"> { Type, Required, Min, Model } </span><span style="color:#FF7B72;">from</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&#39;@umajs/class-validator&#39;</span><span style="color:#C9D1D9;">;</span></span>\n<span class="line"><span style="color:#FF7B72;">export</span><span style="color:#FFA657;"> </span><span style="color:#FF7B72;">default</span><span style="color:#FFA657;"> </span><span style="color:#FF7B72;">class</span><span style="color:#FFA657;"> UserInfo </span><span style="color:#FF7B72;">extends</span><span style="color:#FFA657;"> </span><span style="color:#79C0FF;">Model</span><span style="color:#FFA657;"> {</span></span>\n<span class="line"><span style="color:#FFA657;">    </span><span style="color:#FF7B72;">constructor</span><span style="color:#FFA657;">({ id, name, age }</span><span style="color:#FF7B72;">:</span><span style="color:#FFA657;"> UserInfo, isValid</span><span style="color:#FF7B72;">:</span><span style="color:#FFA657;"> </span><span style="color:#79C0FF;">boolean</span><span style="color:#FFA657;">) </span><span style="color:#C9D1D9;">{</span></span>\n<span class="line"><span style="color:#C9D1D9;">        </span><span style="color:#79C0FF;">super</span><span style="color:#C9D1D9;">(isValid);</span></span>\n<span class="line"><span style="color:#C9D1D9;">        </span><span style="color:#79C0FF;">this</span><span style="color:#C9D1D9;">.id </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> id;</span></span>\n<span class="line"><span style="color:#C9D1D9;">        </span><span style="color:#79C0FF;">this</span><span style="color:#C9D1D9;">.name </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> name;</span></span>\n<span class="line"><span style="color:#C9D1D9;">        </span><span style="color:#79C0FF;">this</span><span style="color:#C9D1D9;">.age </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> age;</span></span>\n<span class="line"><span style="color:#C9D1D9;">    }</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#FFA657;">    @</span><span style="color:#D2A8FF;">Type</span><span style="color:#FFA657;">(</span><span style="color:#A5D6FF;">&#39;number&#39;</span><span style="color:#FFA657;">)</span></span>\n<span class="line"><span style="color:#FFA657;">    id</span><span style="color:#FF7B72;">:</span><span style="color:#FFA657;"> </span><span style="color:#79C0FF;">number</span><span style="color:#FFA657;"> </span><span style="color:#FF7B72;">=</span><span style="color:#FFA657;"> </span><span style="color:#79C0FF;">123</span><span style="color:#FFA657;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#FFA657;">    @</span><span style="color:#D2A8FF;">Required</span><span style="color:#FFA657;">()</span></span>\n<span class="line"><span style="color:#FFA657;">    name</span><span style="color:#FF7B72;">?:</span><span style="color:#FFA657;"> </span><span style="color:#79C0FF;">string</span><span style="color:#FFA657;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#FFA657;">    @</span><span style="color:#D2A8FF;">Min</span><span style="color:#FFA657;">(</span><span style="color:#79C0FF;">0</span><span style="color:#FFA657;">)</span></span>\n<span class="line"><span style="color:#FFA657;">    age</span><span style="color:#FF7B72;">?:</span><span style="color:#FFA657;"> </span><span style="color:#79C0FF;">number</span><span style="color:#FFA657;">;</span></span>\n<span class="line"><span style="color:#FFA657;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#8B949E;">// 参数装饰器使用</span></span>\n<span class="line"><span style="color:#C9D1D9;">@</span><span style="color:#D2A8FF;">Path</span><span style="color:#C9D1D9;">({ value: </span><span style="color:#A5D6FF;">&#39;/post&#39;</span><span style="color:#C9D1D9;">, method: RequestMethod.</span><span style="color:#79C0FF;">POST</span><span style="color:#C9D1D9;"> })</span></span>\n<span class="line"><span style="color:#D2A8FF;">model</span><span style="color:#C9D1D9;">(@</span><span style="color:#D2A8FF;">Body</span><span style="color:#C9D1D9;">(UserInfo) userInfo: user) {</span></span>\n<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#FF7B72;">return</span><span style="color:#C9D1D9;"> Result.</span><span style="color:#D2A8FF;">send</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">`This Post body info is ${</span><span style="color:#79C0FF;">JSON</span><span style="color:#A5D6FF;">.</span><span style="color:#79C0FF;">stringify</span><span style="color:#A5D6FF;">(</span><span style="color:#C9D1D9;">userInfo</span><span style="color:#A5D6FF;">)</span><span style="color:#A5D6FF;">}`</span><span style="color:#C9D1D9;">);</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#8B949E;">// &gt;&gt; {&quot;code&quot;:0,&quot;msg&quot;:{&quot;validate&quot;:{&quot;id&quot;:[&quot;id must be of type number.&quot;],&quot;name&quot;:[&quot;name is required.&quot;],&quot;age&quot;:[&quot;age must be greater than 0.&quot;]},&quot;parms&quot;:{&quot;id&quot;:&quot;1&quot;,&quot;age&quot;:-10}}}</span></span>\n<span class="line"><span style="color:#C9D1D9;">}</span></span>\n<span class="line"></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><h3 id="自定义校验提示内容" tabindex="-1"><a class="header-anchor" href="#自定义校验提示内容" aria-hidden="true">#</a> 自定义校验提示内容</h3><p>框架默认修饰器提示信息可以通过配置文件<code>src/config/argDecorator.config.ts</code>进行覆盖。通过<code>Result</code>模块用户可以自定义校验失败时返回的数据格式或者方式，比如json,或者状态码。</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="shiki" style="background-color:#0d1117;"><code><span class="line"><span style="color:#FF7B72;">import</span><span style="color:#C9D1D9;"> { Result } </span><span style="color:#FF7B72;">from</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&#39;@umajs/core&#39;</span><span style="color:#C9D1D9;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#FF7B72;">export</span><span style="color:#FFA657;"> </span><span style="color:#FF7B72;">default</span><span style="color:#FFA657;"> {</span></span>\n<span class="line"><span style="color:#FFA657;">    </span><span style="color:#C9D1D9;">Require: {</span></span>\n<span class="line"><span style="color:#C9D1D9;">        </span><span style="color:#D2A8FF;">err</span><span style="color:#C9D1D9;">({</span><span style="color:#FFA657;">key</span><span style="color:#C9D1D9;">, </span><span style="color:#FFA657;">ctx</span><span style="color:#C9D1D9;">, </span><span style="color:#FFA657;">tip</span><span style="color:#C9D1D9;">, </span><span style="color:#FFA657;">val</span><span style="color:#C9D1D9;">}) {</span></span>\n<span class="line"><span style="color:#C9D1D9;">            </span><span style="color:#FF7B72;">return</span><span style="color:#C9D1D9;"> Result.</span><span style="color:#D2A8FF;">send</span><span style="color:#C9D1D9;">(tip </span><span style="color:#FF7B72;">||</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">`请求${</span><span style="color:#C9D1D9;">key</span><span style="color:#A5D6FF;">} 参数不能为空。入参值为${</span><span style="color:#C9D1D9;">val</span><span style="color:#A5D6FF;">}`</span><span style="color:#C9D1D9;">,</span><span style="color:#79C0FF;">403</span><span style="color:#C9D1D9;">);</span></span>\n<span class="line"><span style="color:#C9D1D9;">        },</span></span>\n<span class="line"><span style="color:#C9D1D9;">    }</span><span style="color:#FFA657;">,</span></span>\n<span class="line"><span style="color:#FFA657;">    </span><span style="color:#C9D1D9;">ToNumber: {</span></span>\n<span class="line"><span style="color:#C9D1D9;">        </span><span style="color:#D2A8FF;">err</span><span style="color:#C9D1D9;">({</span><span style="color:#FFA657;">key</span><span style="color:#C9D1D9;">, </span><span style="color:#FFA657;">ctx</span><span style="color:#C9D1D9;">, </span><span style="color:#FFA657;">tip</span><span style="color:#C9D1D9;">, </span><span style="color:#FFA657;">val</span><span style="color:#C9D1D9;">}) {</span></span>\n<span class="line"><span style="color:#C9D1D9;">            </span><span style="color:#FF7B72;">return</span><span style="color:#C9D1D9;"> Result.</span><span style="color:#D2A8FF;">json</span><span style="color:#C9D1D9;">({</span></span>\n<span class="line"><span style="color:#C9D1D9;">                code: </span><span style="color:#79C0FF;">0</span><span style="color:#C9D1D9;">,</span></span>\n<span class="line"><span style="color:#C9D1D9;">                msg: tip </span><span style="color:#FF7B72;">||</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">`请求${</span><span style="color:#C9D1D9;">key</span><span style="color:#A5D6FF;">} 参数必须为数字类型。入参值为${</span><span style="color:#C9D1D9;">val</span><span style="color:#A5D6FF;">}`</span><span style="color:#C9D1D9;">,</span></span>\n<span class="line"><span style="color:#C9D1D9;">            });</span></span>\n<span class="line"><span style="color:#C9D1D9;">        },</span></span>\n<span class="line"><span style="color:#C9D1D9;">    }</span><span style="color:#FFA657;">,</span></span>\n<span class="line"><span style="color:#FFA657;">}</span><span style="color:#C9D1D9;">;</span></span>\n<span class="line"></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div>',4),c={},i=(0,a(4110).Z)(c,[["render",function(s,n){const a=(0,l.up)("OutboundLink");return(0,l.wg)(),(0,l.iD)(l.HY,null,[e,(0,l._)("blockquote",null,[(0,l._)("p",null,[p,(0,l._)("a",t,[o,(0,l.Wm)(a)])])]),r],64)}]])},6939:(s,n,a)=>{a.r(n),a.d(n,{data:()=>l});const l={key:"v-1f045e08",path:"/other/ArgDecorator.html",title:"参数装饰器（ArgDecorator）",lang:"zh-CN",frontmatter:{head:[["meta",{property:"og:url",content:"/v2/other/ArgDecorator.html"}],["meta",{property:"og:site_name",content:"UMajs"}],["meta",{property:"og:title",content:"参数装饰器（ArgDecorator）"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"og:locale:alternate",content:"en-US"}],["meta",{name:"twitter:card",content:"summary_large_image"}],["meta",{name:"twitter:image:alt",content:"UMajs"}],["meta",{property:"article:author",content:"wuba"}],["meta",{property:"og:restrictions:age",content:"3+"}]]},excerpt:"",headers:[{level:2,title:"使用",slug:"使用",children:[]},{level:2,title:"示例",slug:"示例",children:[]},{level:2,title:"校验参数装饰器",slug:"校验参数装饰器",children:[]},{level:2,title:"非校验参数修饰器",slug:"非校验参数修饰器",children:[]},{level:2,title:"高阶",slug:"高阶",children:[{level:3,title:"Body参数装饰器接受class类",slug:"body参数装饰器接受class类",children:[]},{level:3,title:"自定义校验提示内容",slug:"自定义校验提示内容",children:[]}]}],filePathRelative:"other/ArgDecorator.md",git:{updatedTime:1634802581e3,contributors:[{name:"dazjean",email:"zunyi_zjj@163.com",commits:3},{name:"jiazengp",email:"jiazengp@gmail.com",commits:1}]}}},4110:(s,n)=>{n.Z=(s,n)=>{for(const[a,l]of n)s[a]=l;return s}}}]);