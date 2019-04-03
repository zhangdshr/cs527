
Array.prototype.even = async function() {
    return this.filter(e => e % 2 == 0)
}

Array.prototype.odd = async function() {
    return this.filter(e => e % 2 != 0)
}

var arr = [1,2,3,4,5,6,7,8]

console.log(arr.even())
console.log(arr.odd())