import Vue from 'vue'
console.log(122)

let vm = new Vue({
    el: '#app',
    data() {
        return {
            title: "运动列表",
            total: 2,
            bigBall: ['篮球','足球'],
            miniBall: ['乒乓', '羽毛球']
        }
    }
})

console.log(vm);