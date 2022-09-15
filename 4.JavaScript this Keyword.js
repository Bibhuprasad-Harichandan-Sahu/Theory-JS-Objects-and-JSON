const person = {
    name: 'John',
    age: 30,

    // accessing name property by using this.name
    greet: function() { console.log('The name is' + ' ' + this.name); }
};

person.greet();



let Hero = {
    name : "Tonystark",
    age : 40,
    greet : function() {console.log("i am" + ' ' + this.name); }

}
Hero.greet();


let human = {
    firstname : 'Bibhu',
    lastname : 'prasad',
     age : 34,
     address : 'Odisha',
     fullname : function fullname(){
        return this.firstname + ' ' + this.lastname

     }
};
console.log(human.fullname());//Bibhu prasad
