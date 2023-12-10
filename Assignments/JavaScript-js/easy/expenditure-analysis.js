/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

const transactions = [
  { itemName: "Jim Jam", category: "Buscuit", price: "100", timestamp: "" },
  { itemName: "Parle G", category: "Buscuit", price: "100", timestamp: "" },
  { itemName: "Pepsi", category: "Drink", price: "300", timestamp: "" },
  { itemName: "Lays", category: "Chips", price: "100", timestamp: "" },
  { itemName: "Bingoo", category: "Chips", price: "100", timestamp: "" },
  { itemName: "Slice", category: "Drink", price: "200", timestamp: "" },
  { itemName: "Diary Milk", category: "Chocolate", price: "200", timestamp: "" }
]

function calculateTotalSpentByCategory(transactions) {
  let obj = {},arr=[]
  for (let i = 0; i < transactions.length; i++) {
    if (Object.keys(obj).includes(transactions[i]['category'])) {
      obj[transactions[i]['category']] += parseInt(transactions[i]['price'])
    } else {
      obj[transactions[i]['category']] = parseInt(transactions[i]['price'])
    }
  }
  for(key in obj){
    let object={}
    object['category']=key
    object['totalSpent']=obj[key]
    arr.push(object)
  }
  return arr;
}


module.exports = calculateTotalSpentByCategory;
