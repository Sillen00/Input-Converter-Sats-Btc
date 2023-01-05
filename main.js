window.addEventListener('DOMContentLoaded', main)

function main() {
    addEventListeners();

}



function addEventListeners(){
    const satsInput = document.getElementById("sats");
    satsInput.addEventListener("input", satsToBtc)
}



function satsToBtc(){
    let satsInput = document.getElementById("sats").value
    let btcInput = document.getElementById("btc")
    
    btcInput.value = satsInput / 100_000_000;

}