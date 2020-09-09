// Exercise 1

function reverseNum(number) {
	number = number + "";
  	return number.split("").reverse().join("");
}

console.log(reverseNum(12345678)) // prints 87654321

// Exercise 2

function isPrime(number) {
	if (number === 1) {
    	return false;
  	} else if (number === 2) {
    	return true;
  	} else {
    	for(var x = 2; x < number; x++) {
      		if(number % x === 0) {
        		return false;
      		}
    	} return true;
  	}
}

console.log(isPrime(37)) // prints true
console.log(isPrime(40)) // prints false

// Exercise 3

function countLetter(str, letter) {
	letterCount = 0;
	for(i = 0; i < str.length; i++) {
    	if (str[i] === letter) {
    		letterCount += 1;
    	}
  	}
  	return letterCount;
}

console.log(countLetter('Hello World','l')) // prints 3