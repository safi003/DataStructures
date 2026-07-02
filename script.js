function LeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

function TicketPricing(age){
    if (age <= 12) {
        return "Votre ticket coûte 10$";
    }else if (age <= 17) {
         return "Votre ticket coûte 15$";
    }else{
        return "Votre ticket coûte 20$";
    }
}

function Fibonacci(n) {
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        return Fibonacci(n - 1) + Fibonacci(n - 2);
    }
}

console.log(Fibonacci(0)); // 0
console.log(Fibonacci(1)); // 1
console.log(Fibonacci(2)); // 1
console.log(Fibonacci(3)); // 2
console.log(Fibonacci(4)); // 3
console.log(Fibonacci(5)); // 5
console.log(Fibonacci(6)); // 8
console.log(Fibonacci(7)); // 13


function PowerFunction(base, exponent) {
    if (exponent === 0) {
        return 1;
    } else if (exponent < 0) {
        return 1 / PowerFunction(base, -exponent);
    } else {
        return base * PowerFunction(base, exponent - 1);
    }

}