function tagg(strings, ...values){
    console.log(strings);
    console.log(values);
};

const name = "dhana"
const age = 20;


tagg`my name is ${name} and my age is ${age} years`;