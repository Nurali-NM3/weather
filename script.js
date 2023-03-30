const wrapper =document.querySelector('.wrapper')
const input = document.querySelector('.input')
const button = document.querySelector('.btn')
const btnClear = document.querySelector('.btn-clear')


btnClear.addEventListener('click',() =>{
    input.value = ''
})
button.addEventListener('click',() =>{
    let cities = input.value
    console.log(cities)
    fetch(`https://api.weatherapi.com/v1/current.json?key= f7ec88c9770843eda3255412233003 &q=${cities}`)
        .then(res => res.json())
        .then(data =>{
            wrapper.innerHTML += ''
            console.log(data)

            wrapper.innerHTML =`<div class="country">
                                    Country:<h3>${data.location.country}</h3>
                                 </div>
                                <div class="city">City:<h3>${data.location.name}</h3></div>
                                <div class="temp">Temp:<h3>${data.current.temp_c}'</h3></div>`
        })

})



