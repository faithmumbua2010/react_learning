// class = provides more structured and cleaner way to 
// work with objecrs compared to traditional constructor functions
// eg. static keyword, encapsulation, inheritance

/* class className(object){
    constructorKeyword(parameters){... }

    create a function---- inside a class you do not need to use the function keyword
}*/

class product{
    constructor(name, price){
        this.name = name;
        this.price= price;
    }

    displayProduct(){
        console.log(`product: ${this.name}`);
         console.log(`price: $${this.price.toFixed(2)}`);
    }

    calculateTotal(salesTax){
      return this.price + (this.price * salesTax );
    }
}

const salesTax = 0.05;

const product1 = new product("shirt", 19.99);
const product2 = new product("pants", 29.99);
const product3 = new product("underwear", 100.00);

product1.displayProduct();


const total = product1.calculateTotal(salesTax);
console.log(`Total price (with tax): $${total.toFixed(2)}`);

//Example 2
class car{
    constructor(name, year){
        this.name = name;
        this.year= year;
    }
    age(){
        const date= new Date();
        return date.getFullYear() - this.year;
    }
}

const myCar = new car("Ford", 2014);
console.log( `My car is ${myCar.age()} years old`);

//example 3
class Car{
    constructor(name){
        this.brand = name;
    
    }
}

const theCar = new Car("Ford");
console.log(theCar);// this needs some fixing

/*Methods in classes*/
// creating a method called present
class Bag{
    constructor(name){
this.brand = name;
    }

    present(){
     return 'I have a ' + this.brand;
    }
}

const mybag = new Bag("Birkin");
console.log(mybag.present());
