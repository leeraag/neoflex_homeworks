const init = () => {
    const API_KEY_CURRENCY = '5f8fee5e22mshed13ce4325035a3p1ddfb1jsnc1a690fb9aa9'
    const API_HOST_CURRENCY = 'currency-exchange.p.rapidapi.com'
    const API_URL_CURRENCY = 'https://currency-exchange.p.rapidapi.com/exchange'

    const loader = document.getElementById("loader")
    const getCurrencies = async () => {
        const currencies = ['USD', 'EUR', 'CAD', 'CNY', 'CHF', 'SGD']
        const countCurrency = 6
        let currencyValues = []
        loader.style.display = "block";
        for (let i = 0; i < countCurrency; i++) {
            const options = {
                method: 'GET',
                url: API_URL_CURRENCY,
                params: {
                    from: currencies[i],
                    to: 'RUB',
                    q: '1.0'
                },
                headers: {
                    'X-RapidAPI-Key': API_KEY_CURRENCY,
                    'X-RapidAPI-Host': API_HOST_CURRENCY
                }};
                try {
                    const response = await axios.request(options);
                    currencyValues.push(response.data.toFixed(2))
                } catch (error) {
                    console.error(error);
                }
            }
        loader.style.display = "none";
        showCurrencies(currencyValues, currencies)
    }

    const showCurrencies = (currencyValues, currencies) => {
        const list = document.getElementById("list");
        let listCurrencies = ''
        currencyValues.forEach((val, index) => {
            listCurrencies += `<li><span>${currencies[index]}: </span> ${ val }</li>`
        })
        list.innerHTML = listCurrencies;
    }

    getCurrencies() // при загрузке страницы
    setInterval(getCurrencies, 15 * 60 * 1000); // вызывается каждые 15 мин
}

document.addEventListener('DOMContentLoaded', function() {
    init();
});