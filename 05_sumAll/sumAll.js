const sumAll = function(start,end) {

    if(start < 0 || end < 0||typeof(start) !== typeof(1)||typeof(end) !== typeof(1))
    {
        return "ERROR";
    }

    let sum = 0;
    n = end-start;
    if(n < 0)
    {
        n *= -1;
    }
    console.log("n:"+n);
    sum = ((n+1) * (start+end))/2;
    console.log(sum);
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
