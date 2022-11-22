// var has function scope
// let and const has  block scope 


      // *********************var***********************************    


    var whoWillWinToday = "Pakistan"

    function matchPrediction(Team){
        if(true){
            var whoWillWinToday ="India"
            console.log(whoWillWinToday)
        }
        console.log(whoWillWinToday)
    }
    matchPrediction(true)
    console.log(whoWillWinToday)
    
    // *********************let***********************************


    let whoWillWinToday = "Pakistan"

    function matchPrediction(Team){
        if(true){
            let whoWillWinToday ="India"
            console.log(whoWillWinToday)
        }
        console.log(whoWillWinToday)
    }
    matchPrediction(true)
    console.log(whoWillWinToday)

