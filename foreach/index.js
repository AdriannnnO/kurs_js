// let t = [2, 34, 21, 56, 43, 57, 2, 4, 56, 21, 34, 23, 8, 2, 67, 2, 4, 53, 2, 4];
// let a = 24;
// let huj = "chuj"

// is_higher = (element) => {
//     element > a ? console.log(`${element} is greater than ${a}`) : console.log(`${element} is not greater than ${a} i kurwa ${huj}`);
// }

// t.forEach(is_higher);


let user = {
    name: "janusz",
    nazwisko: "pizdziwas",
    age: 15,
    isLoggedIn: false,
    login: function(){
        user.isLoggedIn = true
    },
    logout: function(){
        user.isLoggedIn = false
    },
    jakmamnaimie: function(){
        return this.name
    }
};

