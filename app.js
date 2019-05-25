var myView =  new Vue({
        el:"#myApp",
        data:{
            message:'Default message'
        },
        methods:{
            keypressEvent: function(){

               console.log('key Press Events called ' + event.key);
            },
             keyUpEvent: function(){
               console.log('key Up Events called ' + event.key);
            },
            keyDownEvent: function(){
               console.log('key Down Events called ' + event.key);
            },
        }
    });


