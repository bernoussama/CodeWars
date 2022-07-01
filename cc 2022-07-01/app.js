//  Zbeh

    //computer random zbeh

function computer(){
    let random = Math.random()
    if(random< 1/3){
        return 'rock'
    }else if(random < 2/3){
        return 'paper'
    }
    return 'scissors'
}
function runNtimes(n){
    for(let i=0; i<n; i++){
        let result = computer()
        console.log(result)
    }
}
//console.log(computer())
//console.log(runNtimes(10, computer()))
//runNtimes(10)
function zbeh(x){
    x = x.toLowerCase()
    let com = computer()
    if(x=='rock'&& com=='scissors' || x=='paper'&& com=='rock' || x=='scissors'&& com=='paper'){
        return `You: ${x}, computer: ${com}, You Won🎉`
    }else if(x==com){
        return `You: ${x}, computer: ${com}, It's a Tie :/ `
    }
    return `You: ${x}, computer: ${com}, Computer wins😈`
}
console.log(zbeh('Rock'))