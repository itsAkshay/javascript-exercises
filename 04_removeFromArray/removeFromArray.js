const removeFromArray = function(myArr) {
    const args = Array.prototype.slice.call(arguments,1);
    for(let i = 0; i < args.length; i++)
    {
        
        let index = myArr.findIndex(function(x){
            return x===args[i];
        });
        if(index >= 0)
        {
            myArr.splice(index,1);
        }
        if(typeof(args[i]) === typeof("s"))
        {
            continue;
        } 
        
    }
    console.log(myArr);
    return myArr;
};

// Do not edit below this line
module.exports = removeFromArray;
