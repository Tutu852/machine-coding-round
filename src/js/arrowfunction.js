const foo=()=>{
    console.log(this.name);
}
foo.call({name:"rajesh"});

//it will give undefined arrow function is refers to its parent scope 
// parent scope of this function is global scope so this will refers to the parent scope 