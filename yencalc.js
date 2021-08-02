var dom_observer = new MutationObserver(function(mutation) {
    
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function insertAfter(el, referenceNode) {
    referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
}

try {
    var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    });
    
    var table = document.getElementsByTagName("table").item(0);
    
    var yenrow = table.rows[1];
    
    var price = yenrow.cells[1].textContent
    const priceArray = price.split(" ")
    var yen = parseInt(priceArray[1].replace(/,/g, ''));
    var usd = formatter.format(0.0091 * yen);
    
    var clone = yenrow.cloneNode(true);
    clone.classList.add("join-with-next-row");
    
    recUSD = clone.cells[0].firstChild;
    recUSD.textContent = "USD Amount";
    
    dollarAmt = clone.cells[1].firstChild;
    dollarAmt.textContent = usd;
    
    var ref = document.getElementsByTagName("table").item(0).getElementsByTagName("tr")[0];
    insertAfter(clone, ref);
} catch (error) {

}

try {
    var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    });
    
    var table = document.getElementsByTagName("table").item(0);
    
    var yenrow = table.rows[4];
    
    var price = yenrow.cells[1].textContent
    const priceArray = price.split(" ")
    var yen = parseInt(priceArray[1].replace(/,/g, ''));
    var usd = formatter.format(0.0091 * yen);
    
    var clone = yenrow.cloneNode(true);
    clone.classList.add("join-with-next-row");
    
    recUSD = clone.cells[0].firstChild;
    recUSD.textContent = "USD Amount";
    
    dollarAmt = clone.cells[1].firstChild;
    dollarAmt.textContent = usd;
    
    var ref = document.getElementsByTagName("table").item(0).getElementsByTagName("tr")[3];
    insertAfter(clone, ref);
} catch (error) {
}

});

var container = document.documentElement || document.body;
var config = { attributes: true, childList: true, characterData: true };
dom_observer.observe(container, config);