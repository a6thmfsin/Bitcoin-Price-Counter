/*<div id="price-btc" style="color:rgb(0, 255, 0); font-size: 50px; text-align: center;">
    Loading Bitcoin price...
</div>*/

/*
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
*/

<script>
    async function fetchBitcoinPrice() {
      try {
        const response = await axios.get("https://api.coingecko.com/api/v3/simple/price", {
          params: {
            ids: "bitcoin",
            vs_currencies: "usd",
          }
        });
  
        const bitcoinPrice = response.data.bitcoin.usd;
  
        const bitcoinPriceContainer = document.getElementById("price-btc");
        bitcoinPriceContainer.textContent = `Current BTC Price: $${bitcoinPrice}`;
      } catch (error) {
        console.error("Error", error);
      }
    }
  
    fetchBitcoinPrice();
</script>