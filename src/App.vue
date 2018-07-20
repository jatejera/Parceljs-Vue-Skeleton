<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><input type="text" v-model='name'></li>
      <li><a href="https://forum.vuejs.org" target="_blank">{{ currentName }}</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: 'app',
        data: function() {
            return {
                msg: 'Welcome to Your Vue.js App',
                name: 'sss'
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
            }

        },
        computed: {
            currentName: function() {
                return this.name;
            }
        }
    }

</script>

