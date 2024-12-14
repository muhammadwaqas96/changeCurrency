let fromCountry = document.querySelector(".form-cont")

const fetching = () => {
    fetch(`https://2024-03-06.currency-api.pages.dev/v1/currencies/${fromCountry}.json`).then(Res =>{
        Res.json().
        then(json =>{
            console.log(json);
        })
    })
}
