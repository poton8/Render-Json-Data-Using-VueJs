Vue.component('render-json', {
    data(){
        return{
            message: "Loading"
        }
        
    },
    template: '<p>{{message}}</p>',

    async mounted() {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const json = await response.json();
        this.message = json
    }
    
    
  });

new Vue({
    el: '#render'
});