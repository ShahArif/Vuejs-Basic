var myView =  new Vue({
        el:"#myApp",
        data:{
            counter : 0,
            message:'Default message'
        },
        methods:{
            increment: function(){
                this.counter++;
            },
             parentClickEvent: function(){
               console.log('Parent Click Event');
            },
            btnChildClick: function(){
               console.log('Button Child Click');
            },
        }
    });


