function myMap(func) {
	let arr = this
	let newArr = new Array(arr.length)
	for (let i = 0; i < arr.length; i++) {
		newArr[i] = func(arr[i])
	}
	return newArr
}

Array.prototype.myMap = myMap

let arr = [1, 2, 3]
let newArr = arr.map((element) => element * 2)
let myArr = arr.myMap((element) => element * 2)

console.log(newArr, myArr, newArr == myArr)
