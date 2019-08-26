// lottery with 8 participants and 1 random winner

// array with 8 objects (names)
// random interger between 0-7 <-- array.length 
// math.random() -> random float between 0-1
// math.random() * lottery.length
// =  Math.floor(math.random() * lottery.length) 


function lottery(names) {
    var i = Math.floor(Math.random() * names.length);
    console.log("My random interger is " + i);
    return names[i];
}
var names = ['Anabel', 'Bob', 'Cathy', 'David', 'Eduardo', 'Frank', 'George', 'Harry']
console.log(lottery(names));
var names = ['Curly', 'Moe', 'Larry']
console.log(lottery(names));
var names = ['Safeway', 'Walmart', 'Target', 'Savemart', 'Albertsons']
console.log(lottery(names));
var names = ['Mickey', 'Donald', 'Pluto', 'Goofy', 'Tinkerbell']
console.log(lottery(names));

// recreated with pets
 
function pet(animals){
    var i = Math.floor(Math.random() * animals.length);
    console.log("My random interger is " + i);
    return animals[i];
}
var animals = ['cat', 'dog', 'hamster', 'ferret', 'bird', 'turtle']
console.log(pet(animals));
console.log(pet(animals));


// interrupting loops
var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
for (var idx in days) {
    if (days [idx] == "Wednesday") break;
    document.write ("it's " + days[idx] + "<br>");
}
// using a continue if the day is Wednesday
var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
for (var idx in days) {
    if (days [idx] == "Wednesday") continue;
    document.write ("it's " + days[idx] + "<br>");
}
