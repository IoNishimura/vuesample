var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
        ,seen: true
    }
})

// app.message = 'I have changed the data!';
// app.seen = false;

var app2 = new Vue({
    el: '#app-2',
    data: {
        message: 'You loaded this page on ' + new Date().toLocaleString()
    }
})

var app_for = new Vue({
    el: '#app_for',
    data: {
        todos: [
            { text: 'Learn JavaScript' },
            { text: 'Learn Vue' },
            { text: 'Build something awesome' }
        ]
    }
})

app_for.todos.push({ text: 'New item' })

let app_onclick = new Vue({
    el: '#app_onclick',
    data: {
        message: 'Hello Vue.js'
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        }
    }
})

Vue.component('tool-item', {
    props: ['todo'],
    template: '<li>This is a todo</li>'
})

vue app_componet = new Vue({
    el: '#app_component',
    data: [
        groceryList: [
            { id: 0, text: 'Vegetables' },
            { id: 1, text: 'Cheese' },
            { id: 2, text: 'Whatever else humans are  supposed to eats' }
        ]
    ]
})