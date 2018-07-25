<template>
<div id="AppPage">
<nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link to="/"><a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a></router-link>
          </li>
          <li class="nav-item">
              <router-link to="/about"><a class="nav-link" href="#">About</a></router-link>
          </li>
         
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>

    <router-view></router-view>
</div>


</template>

<script>
    import axios from 'axios';
//        import router from 'vue-router';
    export default {
        name: 'AppPage',
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
            message: function(value) {
                console.log(value + "too");
            }

        },
        computed: {
            currentName: function() {
                return this.name;
            },
            currentMessage: function() {
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
