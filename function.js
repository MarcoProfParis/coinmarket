

window.function = async function(APIKEY, ENDPOINT, QUERYSTRING) {
if (QUERYSTRING.value === undefined) return "10En attente de QUERYSTRING";
var headers = new Headers();
let apikeyvalue = APIKEY.value;
headers.append("X-CMC_PRO_API_KEY", `${apikeyvalue}`);
    headers.append("Accept", "application/json");

console.log("header ",headers);
    // Constructing URL with query parameters
    const url = new URL(ENDPOINT.value);
const QUERY = QUERYSTRING.value;
    if (QUERY) {
        Object.keys(QUERY.value).forEach(key => url.searchParams.append(key, QUERY[key]));
    }
var requestOptions = {
      method: 'GET',
      headers: headers,
      redirect: 'follow'
    };

console.log("requestOptions ",requestOptions);
    try {
        const response = await fetch('https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest?symbol=BTC', requestOptions);
console.log("response ",response);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
};
