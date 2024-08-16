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