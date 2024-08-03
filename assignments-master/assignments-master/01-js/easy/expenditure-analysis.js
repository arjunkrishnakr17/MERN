/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  array=[]
  
  for(let i=0;i<transactions.length;i++)
  {
    let flag=false;
    for (let j=0;j<array.length;j++)
    {
      if (array[j]["category"]==transactions[i]["category"])
      {
        array[j]["totalSpent"]+=transactions[i]["price"];
        flag=true;
        break;
      }
    }
    if (!flag)
    {
    obj1={"category":transactions[i]["category"],"totalSpent":transactions[i]["price"]};
    array.push(obj1);
    }
  }
  console.log(array);
  return array;
}

module.exports = calculateTotalSpentByCategory;
