//Every day a new frog is born weighing 0g
//gain 10g/day maxing out at 100g

//on day n whats the total wight of the frogs

//on day n whats the average weight of the average frog

//redesign to allow new frogs to be born on a manually set schedule


//day1 [0]
//day2 [0,10]
//day3 [0,10,20]
//day4 [0,10,20,30]
//day5 [0,10,20,30,40]
//day6 [0,10,20,30,40,50]
//day7 [0,10,20,30,40,50,60]
//day8 [0,10,20,30,40,50,60,70]
//day9 [0,10,20,30,40,50,60,70,80]
//day10[0,10,20,30,40,50,60,70,80,90]

//cd into CS Questions
//node frog.js

function frogs(days) {
    let frogs = [];
    let weight = 0;
    let avg = 0;
    for (let i = 1; i <= days; i++) {
        if (i > 10) {
            frogs.push(100)
        } else {
            frogs.push(weight);
            weight += 10;
        }
    }
    let total = frogs.reduce((total, num) => {
        return total + num;
    }, 0)

    total === 0 ? avg = 0 : avg = total / frogs.length;

    console.log(`There are ${frogs.length} frogs weighing a total of ${total} grams.  
    The average frog weighs ${avg} grams `)
}

frogs(5)

function moreFrogs(days, schedule) {
    let frogs = [];
    let weight = 0;
    let avg = 0;
    for (let i = 1; i <= days; i++) {
        if (i % schedule === 0) {
            if (frogs.length > 10) {
                frogs.push(100)
            } else {
                frogs.push(weight);
                weight += 10;
            }
        }
    }
    let total = frogs.reduce((total, num) => {
        return total + num;
    }, 0)

    total === 0 ? avg = 0 : avg = total / frogs.length;

    console.log(`There are ${frogs.length} frogs weighing a total of ${total} grams.  
    The average frog weighs ${avg} grams `)
}
moreFrogs(10, 1)