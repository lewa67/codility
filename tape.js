
function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
   function calc(P){
        first=[...A].splice(0,P)
        second=[...A].splice(P)
        function myFunc(total, num) {
            return total + num;
          } 
      return Math.abs((first.reduce(myFunc)-second.reduce(myFunc)))
        
    }
    let result=[]

    for(let i=1; i<= Math.ceil(A.length/2);i++){
     result.push(calc(i))
    }
    console.log(result)
    return Math.min(...result)
    
}

solution([3,1,2,4,3])