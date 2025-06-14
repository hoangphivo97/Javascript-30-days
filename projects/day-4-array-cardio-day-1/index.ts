const inventors = [
    { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
    { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
    { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
    { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
    { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
    { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
    { first: "Max", last: "Planck", year: 1858, passed: 1947 }
]

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick',
    'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire',
    'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David',
    'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas',
    'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano',
    'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi',
    'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken',
    'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank',
    'Birrell, Augustine', 'Black Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const peopleBornIn1500s = inventors.filter(inventor => inventor.year >= 1500 && inventor.year <= 1599)
console.table(peopleBornIn1500s)

// Array.prototype.map()
// 2. Give us an array of the inventory first and last names
const arrayOfInventorsWithFirstAndLastName = inventors.map(inventor => inventor.first + ' ' + inventor.last)
console.log(arrayOfInventorsWithFirstAndLastName, 'arrayOfInventorsWithFirstAndLastName')

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const sortByBirthdate = inventors.sort((a, b) => a.year - b.year);
console.table(sortByBirthdate)

// Array.prototype.reduce()
// 4. How many years did all the inventors live?
const yearOfLiveInventors = inventors.reduce((total, currVal) => {
    return total + (currVal.passed - currVal.year)
}, 0)
console.log(yearOfLiveInventors, 'yearOfLiveInventors')

// 5. Sort the inventors by years lived
const sortByYearLived = inventors.sort((a, b) =>
    (b.passed - b.year) - (a.passed - a.year)
)
console.table(sortByYearLived)

// 6. Create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// const mwCategory = document.querySelector<HTMLElement>('.mw-category')
// const links = mwCategory?.querySelectorAll('a')

// let listDe = []
// const de = links?.forEach(link => {
//     if(link.textContent?.includes('de')){
//         listDe.push(link.textContent)
//     }
// })

// const listDe = Array.from(links || []).filter(link => link.textContent?.includes('de')).map(link => link.textContent);

// 7. Sort Exercise
// Sort the people alphabetically by last name
const sortedPeople = people.sort((last: string, next: string) => {
    const [aLast, aFirst] = last.split(', ')
    const [bLast, bFirst] = next.split(', ')
    if (aLast < bLast) {
        return -1
    } else {
        return 1
    }
})
console.log(sortedPeople)



// 8. Reduce Exercise
// Sum up the instances of each of these

const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];

// const result = data.reduce((obj: { [key: string]: any }, item: string): Object => {
//     if (!obj[item]) {
//         obj[item] = 0
//     }
//     obj[item]++
//     return obj
// }, {})

const result = data.reduce((acc: Record<string, number>, item: string) => {
    acc[item] = (acc[item] || 0) + 1;
    // if(!acc[item]){
    //     acc[item] = 0
    // }
    // acc[item]++
    return acc
}, {})

console.log(result)