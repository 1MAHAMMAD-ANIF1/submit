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

  // const yearsPassed = [];
  // for (let i = 0; i < since.length - 1; i++) {
  //      const sinceYear = since[i];
  //      yearsPassed.push(2020 - sinceYear);
  // }

  // 20 , 17, 10

  const yearsPassed = since.map(year => 2020 - year);

  console.log(yearsPassed);
```



