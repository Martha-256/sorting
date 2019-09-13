function arraySort(anArray) {
    let evens = [];
    let odds = [];
    let chars = [];

    if(typeof anArray==='string' || typeof anArray==='number'){
        return 'invalid input';
    }else{
        for(var i=0; i<anArray.length; i++){

        if(isNaN(anArray[i])){
            chars.push(anArray[i]);
            chars=chars.sort();}
        else{     
            if((anArray[i])%2===0){
              evens.push(anArray[i]);
              evens=evens.sort();}    
            else{
                odds.push(anArray[i])
                odds=odds.sort(); }}
     }
     var array_sort = {evens:evens, odds: odds, chars: chars}
     //console.log(array_sort);
     return array_sort;
    }


}
arraySort([4, 9, 2, 3, 5, 1, 'd', 'a', 'c', 'f']);

module.exports = arraySort;