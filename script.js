const input = document.querySelector('.input')
const button = document.querySelector('.btn')
const btnClear = document.querySelector('.btn-clear')
const date = document.querySelector('.date')
const btnFuture = document.querySelector('.btn-future')
const imgWr = document.querySelector('.img-wrap')
const inputText = document.querySelector('.input-text')
const country = document.querySelector('.country2')
const city2 = document.querySelector('.city2')
const temp2 = document.querySelector('.temp2')
const title = document.querySelector('.title')
const cityName = document.querySelector('.city-name')
const cityTemp = document.querySelector('.city-temp')
const imgWr2 = document.querySelector('.img-wrap2')

input.addEventListener('keypress',(e) =>{
    console.log(e)
    
})



btnClear.addEventListener('click',(e) =>{
    input.value = ''

})
button.addEventListener('click',() =>{
    let cities = input.value
    console.log(cities)
    fetch(`https://api.weatherapi.com/v1/current.json?key= f7ec88c9770843eda3255412233003 &q=${cities}`)
        .then(res => res.json())
        .then(data =>{

            console.log(data)
            title.innerHTML = data.location.country
            cityName.innerHTML = data.location.name
            cityTemp.innerHTML = `${data.current.temp_c}'`
            imgWr2.innerHTML = `<img src="${data.current.condition.icon}" alt="">`
            // wrapper.innerHTML =`<div class="country">
            //                         Country:<h3>${data.location.country}</h3>
            //                      </div>
            //                     <div class="city">City:<h3>${data.location.name}</h3></div>
            //                     <div class="temp">Temp:<h3>${data.current.temp_c} '</h3>
            //                     <img src="${data.current.condition.icon}" alt=""></div>`
        })

})
//

btnFuture.addEventListener('click',() =>{
    let getDate = date.value
    let getCity = inputText.value
    let getRev = getDate.split('-').reverse().join('-')
    console.log(getDate)
    fetch(`https://api.weatherapi.com/v1/future.json?key= f7ec88c9770843eda3255412233003&dt=${getDate} &q=${getCity}`)
        .then(res1 => res1.json())
        .then((data1 =>{
            console.log(data1)
            country.innerHTML = data1.location.country
            city2.innerHTML = data1.location.name
            temp2.innerHTML = data1.forecast.forecastday[0].day.maxtemp_c
            imgWr.innerHTML =`<img src="${data1.forecast.forecastday[0].day.condition.icon}"/>`
        }))

})

