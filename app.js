var myView =  new Vue({
        el:"#myApp",
        data:{
            counter: 0
        },
        methods:{
            increment: function(){
               
                this.counter ++;
            },
            decrement: function(num){
                 this.counter -= num;
            }
        }
    });