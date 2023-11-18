const btn = document.querySelector('.js-btn')

const span = document.querySelector('.js-span-like')

let count = 0
btn.onclick =()=>{
    count += 1
    span.textContent=count
    if (count==100) {
        const h2= document.createElement("h2")
        h2.textContent='Вы получили билет в Дубай, скиньте ваш номер телефона!'
        document.body.append(h2)
    }
}