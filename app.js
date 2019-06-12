var myView =  new Vue({
        el:"#myApp",
        data:{
            a:0,
            b:0,
            age:5,
        },
        methods:{
            // addToA: function(){
            //     console.log('AddTo A Is Running');
            //     return this.age + this.a
            // },
            // addToB: function(){
            //     console.log('AddTo B Is Running');
            //     return this.age + this.b
            // }
        },
        // Copy same code which was in methods and paste it in computed
        computed:{
            addToA: function(){
                console.log('AddTo A Is Running');
                return this.age + this.a
            },
            addToB: function(){
                console.log('AddTo B Is Running');
                return this.age + this.b
            }
        }
    });


