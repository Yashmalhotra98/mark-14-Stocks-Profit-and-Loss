var initialPrice = document.querySelector(".cost-price");
var stocksQuantity = document.querySelector(".stocks-quantity");
var currentPrice = document.querySelector(".current-price");
var submitBtn = document.querySelector("#submit-btn");
var outputBox = document.querySelector("#output-box");




function calculateProfitAndLoss(initial, quantity, current) {
    if (initialPrice.value <= 0 && stocksQuantity.value <= 0 && currentPrice.value <= 0) {
        console.log(initial, quantity, current);
        showOutput(`fill all fields and entered values must be greater than 0`);
        //showOutput(`enter values greater than 0`);
    }

    /*if(initial.value&&quantity.value&&current.value===0){
        showOutput(`fill all fields and enter values greater than 0`);
    }*/
    else if (current > initial) {
        //profit logic
        var profit = (current - initial);
        var netProfit = (profit * quantity);
        var profitPercentage = ((profit / initial) * 100).toFixed(2);
        outputBox.style.color = 'green';
        showOutput(`Yay the profit is ${netProfit} and the profit percent is ${profitPercentage}%`);
    } else if (initial > current) {
        //loss logic
        var loss = (initial - current);
        var netLoss = (loss * quantity);
        var lossPercentage = ((loss / initial) * 100).toFixed(2);
        outputBox.style.color = 'red';
        showOutput(`Yay the loss is ${netLoss} and the loss percent is ${lossPercentage}%`);
    } else {
        showOutput(`No pain No gain`);
    }


}

function showOutput(message) {
    outputBox.innerText = message;
}

submitBtn.addEventListener("click", submitHandler)

function submitHandler() {
    // if(initialPrice.value == "" || stocksQuantity.value == "" || currentPrice.value == "") return;
    var ip = Number(initialPrice.value);
    var qty = Number(stocksQuantity.value);
    var curr = Number(currentPrice.value);

    calculateProfitAndLoss(ip, qty, curr);
}