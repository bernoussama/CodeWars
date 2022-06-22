// Heads or Tails
function headsOrTails(){
        //odds more in favor of tails
    //return Math.random() > 0.5 ? "Heads" : "Tails"
        // if we want equal odds we shouldn't consider 0.5 and that by using two if statements instead
    let odd = Math.random()
        if(odd > 0.5){
            return "Heads"
        }
        else if(odd < 0.5){
            return "Tails"
        }
    }
console.log(headsOrTails())