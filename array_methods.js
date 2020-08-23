// filter items that are less than 100


const items = [
  {name: "Bike", price: 100 },
  {name: "TV", price: 200 },
  {name: "Album", price:10 },
  {name: "Book", price: 5},
  {name: "Phone", price: 500},
  {name: "Computer", price: 1000},
  {name: "Keyboard", price: 25}
]
const filteredItems = items.filter((item) => {
  return item.price <= 100
})
console.log(filteredItems)

// map

const itemNames = items.map((item) => {
  return item.name
})
console.log(itemNames)

const itemPrice = items.map((item) => {
  return item.price
})
console.log(itemPrice)

const arrayNames = [ "audiesha" , "dallas", "austin" ,"kyle",]
console.log(arrayNames.reverse())

console.log(arrayNames.length)

console.log(arrayNames.unshift("lucy"));
console.log(arrayNames);

console.log(arrayNames.shift());
console.log(arrayNames);

console.log(arrayNames.slice(1,3));



