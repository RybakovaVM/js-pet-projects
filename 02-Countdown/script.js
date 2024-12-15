const countDownElement = document.querySelector('.countdown')
const items = document.querySelectorAll('.countdown-item > h1')

//назначаем дату отсчёта
let countDownDate = new Date(2024, 12, 1, 0, 0, 0)

function getCountTime(){
    //получаем текущее время
    const now = new Date()
    
    //находим разницу времени
    const distance = countDownDate.getTime() - now.getTime()

    //создаем переменные в милисек
    const oneDay = 1000 * 60 * 60 * 24
    const oneHour = 1000 * 60 * 60 
    const oneMinute = 1000 * 60

    //Подсчёт дней, часов, минут и секунд
    let days = Math.floor(distance / oneDay)
    let hours = Math.floor((distance % oneDay) / oneHour)
    let minutes = Math.floor((distance % oneHour) / oneMinute)
    let secounds = Math.floor((distance % oneMinute) / 1000)


    // массив для переменных
    const values = [days, hours, minutes, secounds]

    items.forEach( function(item, index){
        item.textContent = values[index]
    })

}

let countdown = setInterval(getCountTime, 1000)






getCountTime()