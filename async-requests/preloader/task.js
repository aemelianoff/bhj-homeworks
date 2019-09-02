const loader = document.getElementById("loader");
const items = document.getElementById("items");

let xhr = new XMLHttpRequest();
xhr.open("GET", "https://netology-slow-rest.herokuapp.com");
//xhr.responseType = "json";
xhr.send();
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        loader.classList.toggle('loader_active');
        let data = JSON.parse(this.responseText);
        //console.log(data);
    // console.log(data.response.Valute);
        for (let valute in data.response.Valute) {
            //console.log(valute);
            items.insertAdjacentHTML("beforeEnd", `<div class="item">
                                    <div class="item__code">${data.response.Valute[valute].CharCode}</div>
                                                        <div class="item__value">${data.response.Valute[valute].Value}</div>
                                                        <div class="item__currency">руб.</div>`
            );
        }
    }
}