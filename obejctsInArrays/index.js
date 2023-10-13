let users =  [{user}]

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
