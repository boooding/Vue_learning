import {eventListenersModule, h, init, styleModule} from "snabbdom";

const patch = init([
    styleModule,
    eventListenersModule
])
let eventHandler = () => {
    alert("clicked")
}
let vnode1 = h('div', [
    h('h1', {style: {color: "grey"}, on: {click: eventHandler}},  'Hello Snabbdom'),
    h('p', 'here is intro of Snabbdom')]
)
let module = document.getElementById('module');
patch(module, vnode1)