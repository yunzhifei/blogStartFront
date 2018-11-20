<template>
    <div class="hello">
        <h1 @click="handlClick()">{{ msg }} </h1>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'HelloWorld',
        props: {
            msg: ''
        },
        methods: {
            handlClick: function () {
                axios({
                    method: 'get',
                    url: this.baseUrl + '/',
                    params: {
                        i: 1
                    }
                }).then((response => {
                    this.msg = response.data
                    alert()
                }));
            }
        }
        ,
        computed: {
            baseUrl() {
                return this.$store.state.baseUrl
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
