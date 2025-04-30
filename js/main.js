const countries = document.querySelector('.country')
const inputSearch = document.querySelector('.search-country')
const formSelect = document.querySelector('.form-select')

const url = "https://restcountries.com/v3.1/all";

 async function fetchCountryData() {
    try {
        const response = await fetch(url)
        const data = await response.json()

        const countrySort = data.sort((a,b) => {
            return a.name.common.localeCompare(b.name.common)
        })

       countryData = countrySort
    //    console.log(countryData)
       renderCountry(countryData)

    } catch (error) {
        console.log("Ma'lumotlarni olib kelishda xatolik",error)
    }
}


function renderCountry(data){
    // console.log(data)
    countries.innerHTML = ''

    data.forEach(country => {
        // console.log(country)
        countryName = country.name.common

        const col = document.createElement("div")
        col.classList.add("col-12","col-md-6","col-lg-3","my-4")
        const cardLink = document.createElement('a')
        cardLink.classList.add('card')
        cardLink.setAttribute('href',`./country-inner.html?name=${countryName}`,)

        const {flags: { png,svg,alt } } = country

        cardLink.innerHTML = `
            <img src="${svg}" class="card-img-top" alt="">
                           <div class="card-body">
                             <h5 class="card-title">${countryName}</h5>
                             <p class="card-text"><span class="card-text__span">Population:</span> ${country.population}</p>
                             <p class="card-text"><span class="card-text__span">Region: </span>${country.region}</p>
                             <p class="card-text"><span class="card-text__span">Capital: </span>${country.capital}</p>
                           </div>
        `
        col.append(cardLink);
        countries.append(col);

    });
}



fetchCountryData()

//  search country

inputSearch.addEventListener('input',() => {
    // console.log(inputSearch.value)

    let inpVal = inputSearch.value.toLowerCase();
    // console.log(inpVal)
    // console.log(countryData)

    let filterCountry = countryData.filter(function (country) {
        return country.name.common.toLowerCase().includes(inpVal)
    })
    console.log(filterCountry)
    renderCountry(filterCountry)
})

// search region


formSelect.addEventListener('change',() => {
    const selectRegion = formSelect.value
    console.log(selectRegion)

    if(selectRegion === "All"){
        renderCountry(countryData)
    }else {
        const filterRegionCountry = countryData.filter(country => country.region === selectRegion)
        renderCountry(filterRegionCountry)
    }
})



