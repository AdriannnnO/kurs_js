let add = (a,b) => {
    return a+b
}
let multiply = (a,b) => {
    return a*b
}
let divide = (a,b) => {
    return a/b
}
let substract = (a,b) => {
    return a-b
}

let calculator = (a,b,c) => {
    console.log("wynik dzialania to: " + c(a,b))
}


calculator(6,50,substract)