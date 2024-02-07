function factorialize(n){
    let factorl = 1 
    for( let i = n ; i > 0 ; i--){
        factorl*=i
    }
    return factorl
}
console.log(factorialize(10)) 