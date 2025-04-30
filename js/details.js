
const countryDetail = document.querySelector('.country-detail')
let countryName = new URLSearchParams(window.location.search)
countryName = countryName.get('name')

async function fetchCountryDetail() {
    try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`)
        const data = await response.json()

        data.forEach((country) => {
            console.log(country)
            const countryName = country.name.common
            const lang = Object.values(country.languages).join(',')
            const currencies = Object.keys(country.currencies).join(',')
            const [domen] = country.tld
            const borders = country.borders
            
            let nativeName = Object.entries(country.name.nativeName)
            console.log(nativeName)
                 nativeName = nativeName[nativeName.length - 1]
               console.log(nativeName[1].common)


            countryDetail.innerHTML = `
            
        <img src="${country.flags.svg}" alt="${country.flags.alt}" class="country-detail__img">
            <div class="country-detail__desc">
                <h3 class="country-detail__title">${countryName}</h3>

                <div class="country-detail__information">
                    <div class="country-detail__population">
                        <p class="country-detail__text"><b>Native Name:</b> ${nativeName[1].common} </p>
                        <p class="country-detail__text"><b>Population:</b> ${country.population} </p>
                        <p class="country-detail__text"><b>Region:</b> ${country.region}   </p>
                        <p class="country-detail__text"><b>Sub Region:</b> ${country.subregion} </p>
                        <p class="country-detail__text"><b>Capital:</b> ${country.capital} </p>
                    </div>
                    <div class="country-detail__lang">
                        <p class="country-detail__text"><b>op Level Domain:</b> ${domen} </p>
                        <p class="country-detail__text"><b>Currencies:</b>  ${currencies} </p>
                        <p class="country-detail__text"><b>Languages: </b> ${lang} </p>
                    </div>
                </div>

                <div class="country-border">
                    <h4 class="country-border__title">Border Countries: </h4>
                    <ul class="country-border__list">
                       <!-- <a href="#@!" class="country-border__link">France</a>
                       <a href="#@!" class="country-border__link">France</a> -->
                    </ul>
                </div>

            </div>
            
            `
            const countryBorderList = document.querySelector('.country-border__list')
            borders.forEach(border => {
                console.log(border)
                let a = document.createElement('a')
                a.classList.add('country-border__link')
                a.setAttribute('href', `./country-inner.html?name=${country}`)
                a.textContent = border
                countryBorderList.append(a)
            })


            // console.log(countryName)
        });

    } catch (error) {
        console.log("Ma'lumotlar olib kelishda xatolik", error)
    }
}

fetchCountryDetail()



// Object.values()
// Object.keys()
// Object.entries()


// const car = {
//     name: "Malibu",
//     color: "Qora",
//     price: "30000$",

// }

// console.log(car)

// const val = Object.values(car)
// console.log(val)

// const keys = Object.keys(car)
// console.log(keys)

// const mix = Object.entries(car)
// console.log(mix)


// const person = {
//     name: "Ali",
//     age: 20,
//     address: {
//         city: "Guliston",
//         street: "Alisher Navoi"
//     }
// }

// const { name,age,address: { city, street} } = person
// console.log(street)




// const languages = {
//     eng: "English",
//     smo: "Samoan"
// }

// const languages = {
//     prs: "Dari",
//     pus: "Pashto",
//     tuk: "Turkmen"
// }

// const { prs,pus,tuk} = languages
// console.log(prs)




