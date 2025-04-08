var a =100;

let obj ={
    getA :()=>{
        console.log(this.a);
    },
    inner:{
        a:20,
        getA:function(){
            console.log(this.a);
        }
    }
}
obj.getA();
obj.inner.getA();