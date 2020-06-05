# 1

+ The var statement declares a function-scoped or globally-scoped variable, optionally initialising it to a value.

Variables declared with the "var" keyword can not have Block Scope.

Variables declared inside a block () can be accessed from outside the block.

+ The "let" statement declares a block-scoped local variable, optionally initialising it to a value.

+ Constants are block-scoped, much like variables defined using the let keyword.
The value of a constant can't be changed through reassignment, and it can't be re-declared.

# 2 
The for-in loop is used to loop through the properties of an object.
In each repetition, one property from the object is associated to the variable name, and the loop is continued till all the properties of the object are depleted.

### Syntax
```
const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}

// expected output:
// "a:1"
// "b:2"
// "c:3"
```

# 3
+ The defer attribute tells the browser that it should go on working with the page, and load the script “in background”, then run the script when it loads.

Here’s the same example as above, but with defer:
```
<p>...content before script...</p>

<script defer src="function.js"</script>

<!-- visible immediately -->
<p>...content after script...</p> 
```

# 4 
Screen objects are used to read the information from the client's screen. The properties of screen objects are -

### Properties
availHeight: Gives the height of client's screen <br>
availWidth: Gives the width of client's screen. <br>
colorDepth: Gives the bit depth of images on the client's screen <br>
height: Gives the total height of the client's screen, including the taskbar <br>
width: Gives the total width of the client's screen, including the taskbar <br>

# 5 
Closure is a locally declared variable related to a function which stays in memory when the function has returned.

```
function outerFunction() {                    
  let outerVariable = 'I am outside!';

  function innerFunction() {
    console.log(outerVariable);                    
  }

  return innerFunction;
}

let myInnerFunction = outerFunction();

myInnerFunction();
```

# 7
```
const since = [2000, 2003, 2010, 2019];

   const yearsPassed = [];
   for (let i = 0; i < since.length - 1; i++) {
        const sinceYear = since[i];
        yearsPassed.push(2020 - sinceYear);
   }

   20 , 17, 10

  const yearsPassed = since.map(year => 2020 - year);

  console.log(yearsPassed);
```


# 9 

#### If Presence
At a point in our code, we need to check if a variable is present or not. The if present shorthand helps you achieve that with a simple code.
```
// Longhand
if(isGirl === true){
  console.log('isGirl')
}

//Shorthand
if(isGirl){
  console.log('isGirl')
}
```
Note: The shorthand in the example above will evaluate as long as isGirl is a truthy value.

#### Ternary Operator
We can use the conditional (ternary) operator instead of the if ... else statement in just one line of code.
```
//Longhand
const age = 19;
let status;
if(age > 18){
  status = "An adult"
}else{
  status = "Young"
}

//Shorthand
const status = age > 18 ? "An Adult" : "Young"
```

#### Arrow Function
The traditional javascript functions can be simplified with ES6 arrow functions.

```
//Longhand
function greet(name){
  console.log('Welcome ', name)
}

//Shorthand
great = name => console.log(name)
```
####Destructuring Assignment
Destructuring assignment will not only save a lot of time makes your code cleaner and simpler.
```
const vehicles = {
  car: "🚗",
  taxi: "🚕",
  bus: "🚌",
  minibus: "🚐"
};

// Longhand
let car = vehicles.car
let taxi = vehicles.taxi
let bus = vehicles.bus
let minibus = vehicles.minibus

// Shorthand
const { car, taxi, bus, minibus } = vehicles
```

### For Loop
The example below used for ... of and for ... in which is simplified the code.
const animals = ["goat", "sheep", "dog", "cat"]
```

// Longhand
for (let i=0; i < animals.length; i++){
  console.log(animals[i])
}

// Shorthand
for(let animal of animals){
  console.log(animal)
}
// Getting the index
for(let index in animals){
  console.log(animals[index])
}


6. Template Literals
It is common to use '+' to concatenate multiple string variables. ES6 template literals make it much easier with backtick and ${}.

Example:
-------------
// Longhand
const checkOut = 'Order price: ' + price + ' at a discount of ' + discount

// Shorthand
const checkOut = `Order price: ${price} at a discount of ${discount}`

```
### Multi-line String
Writing lines of string in code is made much easier with backticks.
```

// Longhand
const msg = 'A wonderful serenity has taken possession\n\t'
    + 'of my entire soul, like these sweet mornings of spring\n\t' 
    +'which I enjoy with my whole heart. I am alone,\n\t' 
    +'and feel the charm of existence in this spot,\n\t' 
    +'which was created for the bliss of souls like mine.\n\t '

//Shorthand
const msg = `A wonderful serenity has taken possession
    of my entire soul, like these sweet mornings of spring 
    which I enjoy with my whole heart. I am alone, 
    and feel the charm of existence in this spot, 
    which was created for the bliss of souls like mine.` 
```
### Exponent Power

```
// Longhand
Math.pow(5,3) // 125

// Shorthand
5**3 // 125
```
### Declaring Variables

```
Shorthand can save you a lot of time when declaring multiple variables.
// Longhand
let a;
let b = 6;
let c;

// Shorthand
let a, b = 6, c;

```
### Default Parameter Values
ES6 makes it possible to assign default to variables in the function declaration.

```

//Longhand
function checkOut(quantity, price, discount){
  if(discount === undefined){
    discount = 0
  }
  return quantity * price + discount
}

// Shorthand
checkOut = (quantity, price, discount = 0) => (quantity * price - discount)
```

# 10

#### LOAD EVENTS

The onload event occurs when an object has been loaded.
onload is most often used within the <body> element to execute a script once a web page has completely loaded all content
 (including images, script files, CSS files, etc.).
```

<html>
<head>
<script>
function myFunction() {
  alert("Page is loaded");
}
</script>
</head>

<body onload="myFunction()">
<h2>Hello World!</h2>
</body>

</html>

```

#### ONCLICK

The onclick event occurs when the user clicks on an element.
```
<!DOCTYPE html>
<html>
<body>

<h1>The onclick Event</h1>

<button onclick="myFunction()">Click me</button>

<p id="demo"></p>

<script>
function myFunction() {
  document.getElementById("demo").innerHTML = "Hello World";
}
</script>

</body>
</html>
```

#### INPUT EVENTS

Events that occur when an form element's content changes, belongs to the InputEvent Object.
The event occurs when an element gets user

```
<html>
<head>
<script>
function preferedBrowser() {
  prefer = document.forms[0].browsers.value;
  alert("You prefer browsing internet with " + prefer);
}
</script>
</head>
<body>

<form>
Choose which browser you prefer:
  <select id="browsers" onchange="preferedBrowser()">
    <option value="Chrome">Chrome</option>
    <option value="Internet Explorer">Internet Explorer</option>
    <option value="Firefox">Firefox</option>
  </select>
</form>

</body>
</html>
```



