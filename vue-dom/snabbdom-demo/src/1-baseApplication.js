import {h, init} from "snabbdom";


const patch = init([])

// arg1: tag + selector
// arg2: content
let vnode1 = h('div#container.old', 'Hello Snabbdom')
let app1 = document.getElementById('app1')
// arg1: previous VNode (Dom elements)
// arg2: next VNode
// return new VNode
let oldVnode1 = patch(app1, vnode1)
// VNode change
vnode1 = h('div#container.new', 'Hello Snabbdom new')
patch(oldVnode1, vnode1)

let vnode2 = h('div#container.old', [
    h('h1', 'Hello Snabbdom'),
    h('p', 'here is intro of Snabbdom')]
)
let app2 = document.getElementById('app2')
let oldVnode2 = patch(app2, vnode2)

setTimeout(() => {
    vnode2 = h('div#container.old', [
        h('h1', 'Hello Snabbdom new '),
        h('p', 'here is a new intro of Snabbdom')]
    )
    patch(oldVnode2, vnode2)
}, 2000)

setTimeout(() => {
    // vnode2 = h('div#container.old', [
    //     h('h1', 'Hello Snabbdom new '),
    //     h('p', 'here is a new intro of Snabbdom')]
    // )
    // patch(oldVnode2, vnode2)
    patch(vnode2, h('!'))
}, 4000)