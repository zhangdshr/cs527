//exercise 2
function isWeekend(){
    const todayDate = new Date();
    console.log(`todayDate` + todayDate)
    const day = todayDate.getDay()
    console.log(`day` + day)
	const days = ["weekend","weekeday","weekeday","weekeday","weekeday","weekeday","weekend"];
	return days[day];
}

isWeekend()

//exercise 3
const item = {
    "name": "Apple",
    "Type": "Fruit",
    "Category": "Food",
    "price": "100"
}

function applyCoupon(count, a) {
    item.price *= (100 - count) / 100
    return item
}

var reprice = applyCoupon.bind({}, 10)
console.log(reprice(item))