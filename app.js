var myView =  new Vue({
        el:"#myApp",
        data:{
            chrecterfirst : '',
            name : 'Enter name please',
            email:'Enter Email Id'
        },
        methods:{
            keypressfunction: function(event){
               this.chrecterfirst = event.key;
            }
        }
    });


