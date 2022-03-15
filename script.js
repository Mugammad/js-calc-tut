function add(num){
    let output = document.getElementById('Output')
    output.innerHTML += num
}

function sum(){
    let output = document.getElementById('Output')
    output.innerHTML = eval(output.innerHTML)
}