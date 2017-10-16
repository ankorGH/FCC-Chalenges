let input = document.querySelector("#app input")

Vue.component('process',{
    template: '<div>\
    <span>Process {{num}}</span>\
    <input type="text" placeholder="Enter Process Burst Time" v-model:value="burstTime"> \
    <input type="text" placeholder="Enter Process Arrival Time" v-model:value="arrivalTime">\
    <button type="submit" @click="log">Submit</button>\
    </div>\
    ',
    props:["num"],
    data(){
        return {
            burstTime:"",
            arrivalTime:""
        }
    },
    methods:{
        log(){
            app.dataProcesses.push({name:this.name,burstTime:this.burstTime,arrivalTime:this.arrivalTime})
        }
    }

});

let app = new Vue({
    el:"#app",
    data:{
        numberOfProcesses:"",
        displayProcesses:true,
        dataProcesses:[
        ]
    },
    methods:{
        calcFCFS(e){
            console.log(this.dataProcesses)
        }
    }
})