import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    // 定义状态
    state: {
        baseUrl: 'http://127.0.0.1:8992'
    }
})

export default store
