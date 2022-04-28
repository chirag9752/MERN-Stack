let x = "hello from main module";
function calculator(a,b)
{
    let z = a + b ;
    return z;
}
module.export = {x,calculator};

export default {x, calculator};