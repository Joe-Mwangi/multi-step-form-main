const arr1 = [
  { title: "Online service", price: "1" },
  { title: "Customizable profile", price: "2" },
  { title: "Customizable profile", price: "2" },
  { title: "Larger storage", price: "2" },
];

const arr2 = [1, 3, 3, 4, 5, 1];

function uniqueArr(array: any[]) {
  return array.filter(function (item, pos) {
    return array.indexOf(item) == pos;
  });
}

console.log(uniqueArr(arr1));
console.log(uniqueArr(arr2));
