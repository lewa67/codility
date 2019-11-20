 

function test(N){

    B=(N).toString(2)
    console.log(B)
    let result=[]
    let counter=0;
    let start=false;
    for(let i=0; i< B.length; i++ ){
    
    if(B[i-1]==1 && B[i]==0){
        console.log("commence à incremente",i)
        counter++;
        start=true;
        console.log(counter);
    }  else if(B[i]=="1"){
        result.push(counter);
        start=false
        counter=0
        console.log("stop",i)
    } else if(B[i]=="0" && start==true){
       counter++
       console.log("continue à increment",i)
    } else{

        console.log("Wsh",i)
    }



    }
    
    return Math.max(...result)

}



