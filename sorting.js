function sorting(){

    array1 = [17,3,67,"s",44,18];
     let even = [];
     let odd = [];
     let chars = [];

     for(var i=0; i<array1.length; i++){

        if(isNaN(array1[i])){
            chars.push(array1[i]);
        }else{

        if((array1[i])%2===0){

            even.push(array1[i]);

        }else{odd.push(array1[i]) }
    }
}
var array_sort = {Evens:even, Odds: odd, Chars: chars}
     console.log(array_sort);
}
console.log(sorting());