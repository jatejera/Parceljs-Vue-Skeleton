<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><input type="text" v-model='name'></li>
      <li>{{ currentName }}</li>
      <li>{{ currentMessage }}</li>
    </ul>
  </div>
</template>

<script>
    import axios from 'axios';

    export default  {
        name: 'app',
        data: function() {
            return {
                msg: 'Welcome to Your Vue.js App',
                name: 'test1',
                message: 'test2'
            }
        },
        methods: {
            sayHello() {
                return this.name;
            }
        },
        watch: {
            name: function(value) {
                console.log(value);
            },
            message: function(value){
                console.log(value + "too");
            }

        },
        computed: {
            currentName: function() {
                return this.name;
            },
            currentMessage: function(){
                return this.message;
            }
        },
        mounted() {
            axios.get(`https://www.mocky.io/v2/5185415ba171ea3a00704eed`)
                .then(response => {
                    // JSON responses are automatically parsed.
                    console.log(response.data);
                    this.message = response.data.hello;
                })
                .catch(e => {
                    this.errors.push(e)
                })
            
            
        }
    }

</script>
