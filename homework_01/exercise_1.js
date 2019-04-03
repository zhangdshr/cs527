//Use ES6
String.prototype.filter = function(filterarray){
    var result = this;
    filterarray.forEach(text => {
         result = result.replace(text, "***");
    });
    console.log(result);
}
"I am Ethan Zhang".filter(['Ethan','Zhang']);

//Use Promise
String.prototype.filterByPromise = function(filterarray){
    return new Promise((resolve, reject) => {
      var result =this;
      filterarray.forEach(text => {
          result = result.replace(text, "***");
     });
     resolve(result);
});
}
"I am Ethan Zhang".filterByPromise(['Ethan','Zhang']).then(console.log)

//Use Async
String.prototype.filterByAsync =  async function filtertext(data){
    let result = await this.filterByPromise(data)
    console.log(result);
}
"I am Ethan Zhang".filterByAsync(['Ethan','Zhang'])

//Use observable
const {from} = rxjs;
const{Observable, of} = rxjs;
String.prototype.filterByobservable = function (filterarray){
    var result = this;
    from(filterarray)
        .pipe(
            map(text => this.replace(text,"*"))
        )
        .subscribe(
            result =>console.log(result)
    )
} 
"I am Ethan Zhang".filterByobservable(['Ethan','Zhang'])