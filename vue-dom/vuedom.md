
## virtual Dom
Virtual DOM(虚拟DOM)，是由普通的JS对象来描述DOM对象
### why virtual Dom
Dom操作越来越复杂，既要考虑操作数据，也要考虑操作dom
- MVVM框架解决视图和状态同步问题
- 模板引擎可以简化视图操作，没办法跟踪状态
- 虚拟DOM跟踪状态变化
(虚拟DOM可以维护程序的状态，跟踪上一次的状态通过比较前后两次状态差异更新真实DOM)
### function and library
- 维护视图和状态的关系
- 复杂视图情况下提升渲染性能
- 跨平台
1. 浏览器平台渲染DOM
2. 服务端渲染SSR(Nuxt.js/Next.js)
3. 原生应用(Weex/React Native)
4. 小程序(mpvue/uni-app)等
- Snabbdom
- virtual-dom

## Snabbdom
### module
- Snabbdom的核心库并不能处理DOM元素的属性/样式/事件等，
- 可以通过注册Snabbdom默认提供的模块来实现
- Snabbdom中的模块可以用来扩展S nabbdom的功能
- Snabbdom中的模块的实现是通过注册全局的钩子函数来实现的
1. attributes
2. props
3. dataset
4. class
5. style
6. eventlisteners
### source code
#### core
- init()设置模块，创建patch()函数
- 使用h()函数创建JavaScript对象(VNode)描述真实DOM
- patch()比较新旧两个Vnode
- 把变化的内容更新到真实DOM树
#### change in V3

