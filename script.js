function getRandomInteger(lower, upper){
    var multiplier = upper - (lower - 1);
    var rnd = parseInt(Math.random() * multiplier) + lower;

    return rnd;
}

function rollDice(){
    var frequencyTable = document.getElementById("frequencyTable");
    var numDice = document.getElementById("numDice").value;
    var numRolls = document.getElementById("numRolls").value;
    var avg = 0;
    var array = [];
    const total = [];
    for(var roll = 0; roll < numRolls; roll ++){
        var thisRoll = [];
        for(var dice = 0; dice < numDice; dice ++)
        {
            var dieRoll = getRandomInteger(1,6);
            thisRoll.push(dieRoll);
            avg +=dieRoll;
        }
        array.push(thisRoll);
        total.push(array[roll].reduce((a, b) => a + b, 0));
    }
    console.log(array);
    console.log(total);
    for(var num = 1*numDice; num <= 6*numDice; num ++){
        var newRow = frequencyTable.insertRow();
        var newCell = newRow.insertCell();
        newCell.innerHTML = num;
        newCell = newRow.insertCell();
        newCell.innerHTML = total.filter(item => item===num).length;
    }
    
    var statsTable = document.getElementById("statsTable");
    var secNewRow = statsTable.insertRow();
    var doubles = secNewRow.insertCell();
    var triples = secNewRow.insertCell();
    var mean = secNewRow.insertCell();
    var median = secNewRow.insertCell();
    var mode = secNewRow.insertCell();
    
    doubles.innerHTML = 0;
    triples.innerHTML = 0;
    mean.innerHTML = Math.round(100*(avg/numRolls))/100;
    median.innerHTML = getMedian(total, numRolls);
    mode.innerHTML = getMode(total);

    if(numDice > 1){
        doubles.innerHTML=repeats(array, 2);
        if(numDice > 2){
            triples.innerHTML = repeats(array, 3);
        }
    }
}
function repeats(array, numOccur){
    var num = 0;
    for (var item of array){
        const counts = {};
        item.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; counts[x]>=numOccur?num++:num+=0});
    }
    return(num);
}

function getMedian(array, num){
    array = array.sort(function(a, b){return a - b});
    returnValue = num%2===0? (array[(num-2)/2] + array[num/2])/2:array[(Math.round(num/2)-1)];
    return returnValue;
}
function getMode(arr){
    if(arr.length < 2){
        return arr[0];
    }
    let freq = 0, freqNum, list = []

    arr.forEach(function(num){
        let foundNum = list.find(function(el){ return el.num == num })

        if(foundNum){
        foundNum.count++
        if(foundNum.count > freq){
            freqNum = num
            freq = foundNum
        }
        }
        else
        list.push({num: num, count: 1})
    })
        
    return freqNum
}