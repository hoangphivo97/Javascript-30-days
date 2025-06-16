interface People {
    name: string;
    year: number;
}

interface Comments {
    text: string;
    id: number
}

const peopleArr: People[] = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 },
]


const comments: Comments[] = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen in my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
];


// Some and Every Checks
// Array.prototype.some() // is at least one person adult (>19) ?
const isAdult = peopleArr.some(people => {
    const currYear = new Date().getFullYear();
    if (currYear - people.year) {
        return true
    }
})
console.log(isAdult)

// // Array.prototype.every() // is everyone adult (>19)?
const isAdultEvery = peopleArr.every(people => {
    const currYear = new Date().getFullYear();
    currYear - people.year >= 19 ? true : false
})
console.log(isAdultEvery)


// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
// const idIs823423 = comments.find(comment => comment.id === 823423)
// console.log(idIs823423)

// Array.prototype.findIndex()
// console.log(comments.findIndex(value => value.id === 123523))

// Find the comment with this ID
// delete the comment with the ID of 823423

// const id823423: Comments[] = comments.filter(cm => cm.id !== 823423)
// console.log(id823423)

const index = comments.findIndex(cm => cm.id === 823423)
comments.splice(index, 1)
console.log(comments)