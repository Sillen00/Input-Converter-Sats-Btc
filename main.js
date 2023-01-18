window.addEventListener('DOMContentLoaded', main)


// Initialise JS
function main() {
    addEventListeners();
}


// Event listeners when inputting in any of the fields.
function addEventListeners(){
    const satsInput = document.getElementById("sats");
    satsInput.addEventListener("input", satsToBtc)
    const btcInput = document.getElementById("btc")
    btcInput.addEventListener("input", btcToSats)
}


// Takes sats input value and converts it to btc value
function satsToBtc(){
    let satsInput = document.getElementById("sats").value
    let btcInput = document.getElementById("btc")
    
    const sats_btc = satsInput / 100_000_000
    btcInput.value =  sats_btc.toFixed(8).replace(/\.?0+$/,"")
}


// Takes btc input value and converts it to sats value
function btcToSats(){
    let btcInput = document.getElementById("btc").value
    let satsInput = document.getElementById("sats")

    const btc_sats = btcInput * 100_000_000
    satsInput.value = btc_sats.toFixed(8).replace(/\.?0+$/,"")
}