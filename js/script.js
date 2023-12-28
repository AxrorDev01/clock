// let i = 0;
// let stop;
// function rec() {
//     console.log(i++)
//     if (i <= 10) {
//         rec()
//     }

//     // stop = setTimeout(() => {
//     //     rec()
//     //     if (i == 10) {
//     //         clearInterval(stop)
//     //     }
//     // },1000)
// }
// rec()


// let data = new Date()
// console.log(data)

// let month = new Date().getDay()
// console.log(day)

// let month = new Date().getDay()
// console.log(day)

// let month = new Date().getDay()
// console.log(day)

// let month = new Date().getDay()
// console.log(day)



const hours = document.querySelector('.hours')
const minutes = document.querySelector('.minutes')

const h = document.querySelector('.h')
const m = document.querySelector('.m')
const s = document.querySelector('.s')


function rec() {
    let time = new Date()

    let hour = new Date().getHours()
    let minut = new Date().getMinutes()
    let sec = new Date().getSeconds()

    hours.innerText = hour
    minutes.innerText = minut
    
    if (minut < 10) {
        minutes.innerHTML = "0" + minut
    }else{
        minutes.innerHTML = minut
    }
    if (hour < 10) {
        hours.innerHTML = "0" + hour
    }else{
        hours.innerHTML = hour
    }


    s.style.transform = `rotate(${sec * 6}deg)`
    m.style.transform = `rotate(${minut * 6}deg)`
    h.style.transform = `rotate(${hour * 30}deg)`

    setTimeout(()=> {
        rec()
    },1000)
}
rec()



const tabsItem = [...document.querySelectorAll('.tabsItem')]
const tabsContentItem = [...document.querySelectorAll('.tabsContentItem')]

for (let i = 0; i < tabsItem.length; i++) {
    tabsItem[i].addEventListener('click',function () {
        for (let k = 0; k < tabsContentItem.length; k++) {
            
            tabsItem[k].classList.remove('active')
            tabsContentItem[k].classList.remove('active')
        }
        tabsItem[i].classList.add('active')
        tabsContentItem[i].classList.add('active')
    })
    
}


const stopwatchBtn = document.querySelector('.stopwatch__btn')
stopwatchBtn.addEventListener('click',function () {
    if (this.innerHTML == "start") {
        this.innerHTML = 'stop'
    }else if(this.innerHTML == "stop") {
        this.innerHTML = 'clear'
    }else if(this.innerHTML == "clear") {
        this.innerHTML = 'start'
    }
})

var span = document.querySelector('.tabsLink__span')
stopwatchBtn.addEventListener('click',function(){
    span.classList.add("active")
    if(stopwatchBtn.innerHTML == "clear"){
        span.classList.remove('active')
        span.classList.add('active_clear')
    }
    else if(stopwatchBtn.innerHTML == "start"){
        span.classList.remove('active')
        span.classList.remove('active_clear')
    }
})