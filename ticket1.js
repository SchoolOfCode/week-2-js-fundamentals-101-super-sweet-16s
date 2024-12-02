function convertGBPtoEur(pounds) {
    let euros = pounds * 1.21;
    return euros
}
//Write another function `convertGBPtoUSD` 
 
function convertGBPtoUSD(pounds) { //that takes in a specified amount in £
    let USD = pounds * 1.27; //converts it to $ using a given exchange rate.
    return USD 
}

//Write a function convertGBPToCurrency
function convertGBPToCurrency(currency, pounds) {
    if (currency == "EUR") {
        return convertGBPtoEur(pounds);
    } 
    else if (currency == "USD") {
        return convertGBPtoUSD(pounds);
    }
    return "Currency not supported"
}
//which takes in both a currency code ("EUR" or "USD") and an amount of £ to convert.
//It should, based on which code has been entered, 
// use one of your previously written functions to return the correct conversion. 
// If an unknown code is entered, it should return null.