var myView =  new Vue({
        el:"#myApp",
        data:{
            message:"Hi This messages come from here",
            firstName:"Arif",
            lastName:"Shah",
            lessonNo :"Second"
        },
        methods:{
            display : function(param){
                return 'This message is comming from Display method called by'+ param
            },
            welcome:function(name){
                return 'Welcome to Vuejs Basics '+this.lessonNo + ' By '+ name
            }
        }
    });