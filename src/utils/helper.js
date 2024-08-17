var nameList = [
    'John',
    'Jane',
    'Doe',
    'Smith',
    'Alex',
    'Max',
    'Tom',
    'Jerry',
    'Alice',
    'Bob',
    'Charlie',
    'David',
    'Eve',
    'Frank',
    'Grace',
    'Henry',
    'Ivy',
    'Jack',
    'Kate',
    'Lily',
    'Mike',
    'Nancy',
    'Oliver',
    'Peter',
    'Queen',
    'Rose',
    'Sam',
];

export function getRandomName() {
   return nameList[Math.floor(Math.random() * nameList.length)];
};

export function getRandomMessage(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while(counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return result;
};

//Function to check the number is prime
function isPrime(num) {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
       return false;
      }
    }
    return true;
   }
  
   //Function to find the nth prime number
   export function findNthPrime(n) {
    let count = 0;
    let num = 2;
    while (count < n) {
      if (isPrime(num)) {
       count++;
      }
      num++;
    }
    return num - 1;
   }
  
//    console.log(findNthPrime(10));
//    console.log(findNthPrime(100));