var myView =  new Vue({
        el:"#myApp",
        data:{
            isbgGreen:true,
            isbgBlue :false,
            isActive:false,
        },
        methods:{
            chnageColorToGreen: function(event){
                alert('heylo');
               this.isbgBlue = false;
               this.isbgGreen = true;
            },
            chnageColorToBlue: function(event){
               this.isbgGreen = false;
               this.isbgBlue = true;
            },
            toggleColor : function(){
                alert('hey');
                this.isActive = !this.isActive;
            }
        }
    });


