function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    range=[]
    let result=0
    for(let i=1; i<=A.length+1;i++){
     range.push(i)
    }
    
    for(let ii=0; ii<=range.length;ii++){
       if(!A.includes(range[ii]) && range[ii]!=undefined){
          result=range[ii];
          console.log(result)
       }
    }
    console.log(result)
    console.log(range)


    return result
    // console.log( A.includes(4))
    // console.log(A);
    // console.log(range)
}

solution([2,3,1,5,4])
