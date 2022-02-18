document.getElementById('btn-action').addEventListener('click', () => {

    for(let i = 0; i < 5; i++) {
        let bory = document.getElementById("body")
        let btn = document.getElementById('btn-action')
        let color    = document.getElementById(`color-${i+1}`)
        let txtColor = document.getElementById(`txt-color-${i+1}`)
        let newColor = generateColor()
        let h1 = document.getElementById("h1")
        color.style.backgroundColor = `${newColor}`        
        txtColor.innerHTML = `${newColor}`
        btn.style.backgroundColor = `${newColor}`
        btn.innerHTML = `${newColor}`
        bory.style.backgroundColor = `${newColor}`
        h1.innerHTML = `<h3>Esse é o código da cor escolhida! ${newColor}</h3> `
       
    } 
})
function generateColor() {
    const chars = '0123456789ABCDEF'
    let color   = '#'

    for(let i = 0; i < 6; i++) {
        color += chars.charAt(Math.floor(Math.random() * chars.length))
    }

    return color;
}
