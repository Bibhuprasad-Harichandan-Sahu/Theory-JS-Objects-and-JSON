const person = {
    name: 'Sam',
    age: 30,
    // using function as a value
    greet: function() { console.log('hello I am Berlin') }

}

person.greet(); // hello


let movies = {
    Marvel:"Ironman",
    Dc : "Batman",
    favorite : function() {
        console.log('i love Ironman')
    }
}
movies.favorite();