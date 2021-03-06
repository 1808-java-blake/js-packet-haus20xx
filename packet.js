// 1. Fibonacci
// Define function: fib(n) 
// Return the nth number in the fibonacci sequence.
function fib(n){
    let i = 1;
    let fib1 =1;
    let fib2 =1;
    let recentFib;
    if (n === 1 || n === 2)
        return 1;
    for(i=2;i<n;i++){
        recentFib = fib1+fib2;
        fib1=fib2;
        fib2=recentFib;
    }
    return recentFib;
}
// 2. Bubble Sort
// Define function: bubbleSort(numArray)
// Use the bubble sort algorithm to sort the array.
// Return the sorted array.
function bubbleSort(numArray){
    let endpoint = numArray.length;
    let index1 = 0;
    let index2 = 1;
    let swapStore;
    for(let i = endpoint;i>1;i--){
        while(index2<i){
            if(numArray[index1]>numArray[index2]){
                swapStore = numArray[index2];
                numArray[index2] = numArray[index1];
                numArray[index1] = swapStore;
            }
            index1++;
            index2++;
        }
        index1=0;
        index2=1;
    }
    return numArray;
}
// 3. Reverse String
// Define function: reverseStr(someStr)
// Reverse and return the String.
function reverseStr(someString){
    let stringLength = someString.length;
    let newString = "";
    for(let i = stringLength-1;i>=0;i--){
        newString = newString + someString.charAt(i);
    }
    return newString;
}

// 4. Factorial
// Define function: factorial(someNum)
// Use recursion to compute and return the factorial of someNum.
function factorial(someNum){
    if (someNum===1){
        return 1;
    }
    else{
        return someNum * factorial(someNum-1);
    }
}

// 5. Substring
// Define function substring(someStr, length, offset)
// Return the substring contained between offset and (offset + length) inclusively.
// If incorrect input is entered, use the alert function and describe why the input was incorrect.
function substring(someStr,length,offset){
    if (!(typeof someStr === 'string')){
        console.log('Please use a string.');
        return;
    }
    if (!((typeof length === 'number')&&(typeof offset ==='number'))){
        console.log('length and offset must be numbers');
        return;
    }
    if(length+offset > someStr.length){
        console.log('Length and offset must not exceed length of string');
        return;
    }
    else{
    let returnString;
    returnString = someStr.substr(offset,length);
    return returnString;
    }
}

// 6. Even Number
// Define function: isEven(someNum)
// Return true if even, false if odd.
// Do not use % operator.
function isEven(someNum){
    if (someNum < 0){
        someNum *= -1;
    }
    if (someNum === 0){
        return true;
    }
    else{
        while(true){
            someNum = someNum - 2;
            if(someNum==0){
                return true;
            }
            if(someNum<0){
                return false;
            }
        }
    }
}

// 7. Palindrome
// Define function isPalindrome(someStr)
// Return true if someStr is a palindrome, otherwise return false
function isPalindrome(someStr){
    let index1 = 0;
    let index2 = someStr.length-1;

    while(index1<=index2){
        if(someStr.charAt(index1)!==someStr.charAt(index2)){
            return false;
        }
        index1++;
        index2--;
    }
    return true;
}

// 8. Shapes
// Define function: printShape(shape, height, character)
// shape is a String and is either "Square", "Triangle", "Diamond".
// height is a Number and is the height of the shape. Assume the number is odd.
// character is a String that represents the contents of the shape. Assume this String contains just one character.
// Use a switch statement to determine which shape was passed in.
// Use the console.log function to print the desired shape.
// Example for printShape("Square", 3, "%");
// %%%
// %%%
// %%%
// Example for printShape("Triangle", 3, "$");
// $
// $$
// $$$
// Example for printShape("Diamond", 5, "*");
//   *
//  ***
// *****
//  ***
//   *
function printShape(shape, height, character){
    shape = shape.toLowerCase();
    let thisLine = '';
    switch (shape) {
        case 'square':
            for(let i = 0;i<height;i++){
                thisLine = '';
                for(let j = 0;j<height;j++){
                    thisLine+=character;
                }
                console.log(thisLine);
            }
                break;
        case 'triangle':
            for(let i = 0;i<height;i++){
                thisLine ='';
                for(let j = 0;j<=i;j++){
                    thisLine+=character;
                }
                console.log(thisLine);
            }
            break;
        case 'diamond':
            let counter1 = (height +1)/2;
            let counter2 = (height +1)/2;
            for(let i = 0;i<height;i++){
                thisLine = '';
                for(let j = 0;j<=height;j++){
                    if (j === counter1 || j === counter2){
                            thisLine +=character;
                    }
                    else{
                        thisLine += " ";
                    }
                }
                if(i >((height -1)/2)-1){
                    counter1--;
                    counter2++;
                }
                else{
                counter1++;
                counter2--;
                }
                console.log(thisLine);
            }
            break;
        default:
            break;
    }
   
}

// 9. Object literal
// Define function traverseObject(someObj)
// Print every property and it's value.
function traverseObject(someObj){
    for(let key in someObj){
        console.log(key + " : " + someObj[key]);
    }
}
// 10. Delete Element
// Define function deleteElement(someArr)
// Print length
// Delete the third element in the array.
// Print length
// The lengths should be the same.
function deleteElement(someArr){
    console.log(someArr.length);
    delete someArr[2];
    console.log(someArr.length);
}
// 11. Splice Element
// Define function spliceElement(someArr)
// Print length
// Splice the third element in the array.
// Print length
// The lengths should be one less than the original length.
function spliceElement(someArr){
    console.log(someArr.length);
    someArr.splice(2,1);
    console.log(someArr.length);
}
// 12. Defining an object using a constructor
// Define a function Person(name, age)
// The following line should set a Person object to the variable john:
// 	var john = new Person("John", 30);
function Person(name,age){
    this.name = name,
    this.age =age
}

// 13. Defining an object using an object literal
// Define function getPerson(name, age)
// The following line should set a Person object to the variable john:
// 	var john = getPerson("John", 30);
function getPerson(name,age){
    return {name:name, age:age};
}

 // 1. USA
    // Define function getUSA()
    // Find the html element that contains "USA".
    // Print that element's contents.
    // function getUSA(){
    //     let eles = [...document.getElementsByTagName("*")];
    //     eles.forEach(element => {
    //       if(element.childNodes.length === 1 && element.childNodes[0].nodeValue.includes("USA"))
    //         console.log(element.childNodes[0].nodeValue)
    //     });
    //     }
      // 2. Sales
      // Define function getPeopleInSales()
      // Print the names of all the people in the sales department.
  
    //   function getPeopleInSales(){
    //       let empl = [...document.getElementsByClassName('empName')];
    //       let emplStat = [];
    //       empl.forEach(element => {
    //           if (element.nextElementSibling.innerHTML === "Sales"){
    //               console.log(element.innerHTML);
    //           }
    //       });
    //     }
        
      // 3. Click Here
      // Define function getAnchorChildren()
      // Find all anchor elements with a <span> child.
      // Print the contents of <span>
    //   function getAnchorChildren(){
    //     let anchors = [...document.getElementsByTagName('a')]
    //     let anchorChild = [];
    //     anchors.forEach(element =>{
    //       element.childNodes.forEach(child =>{
    //         if (child.nodeName === "SPAN"){
    //           console.log(child.innerHTML);
    //         }
    //       })
    //     })
    //   }
    // 4. Hobbies
    // Define function getHobbies()
    // Find all checked options in the 'skills' select element.
    // Print the value and the contents.
    // function getHobbies(){
    //   let elements = document.querySelectorAll('select[name="hobbies"]');
    //   let hobbies = elements[0].querySelectorAll('option[selected="selected"]');
    //   hobbies.forEach(element => {
    //     console.log(element.textContent);
    //   });
    // }
  
    // 5. Custom Attribute
    // Define function getCustomAttribute()
    // Find all elements with "data-customAttr" attribute
    // Print the value of the attribute.
    // Print the element that has the attribute.
  
    // function getCustomAttribute(){
    //   let elements = document.querySelectorAll('[data-customAttr]');
    //   elements.forEach(element => {
    //     let val = element.getAttribute('data-customAttr');
    //     console.log(val);
    //     console.log(element);
    //   });
    // }
  
    // 6. Sum Event
    // NOTE: Write unobtrusive Javascript
    // Regarding these elements:
    // 	<input id="num1" class="nums" type="text"/>
    // 	<input id="num2" class="nums" type="text"/>
    // 	<h3>Sum: <span id="sum"></span></h3>
  
    // Define onchange event handler.
    // Add <input> element values.
    // Put the sum in the <span> element.
    // If values cannot be added, put "Cannot add" in the <span> element
    // let sumParts = [...document.getElementsByClassName('nums')];
    // sumParts.forEach(element => {
    //   element.setAttribute('onchange','onNumberChange(this)');
    // });
  
    // function onNumberChange(id){
    //   let elements = document.getElementsByClassName('nums');
    //   let numbers = [];
    //   [].forEach.call(elements,(element) => {
    //     numbers.push(+element.value);
    //   });
    //   let arentNumbers = numbers.some(num=>{
    //     if(typeof(num)!=='number' || Number.isNaN(num)){
    //       return true;
    //     }
    //   });
    //   let e = document.getElementById('sum');
    //   if (arentNumbers === false){
    //     e.innerText = numbers[0]+numbers[1];
    //   }
    //   else{
    //     e.innerText='Cannot add';
    //   }
    // }
  
    // 7. Skills Event
    // NOTE: Write unobtrusive Javascript
    // When user selects a skill, create an alert with a message similar to:
    // 	"Are you sure CSS is one of your skills?"
    // NOTE: no alert should appear when user deselects a skill.
    // let skillset = document.querySelector('select[name="skills"]');
    // let skillsubset = skillset.childNodes;
    // skillset.setAttribute('onchange','onSkillChange(this)');
  
    // function onSkillChange(id){
    //   alert("Are you sure "+id.value+" is a skill of yours?");
    // }
  
    // 8. Favorite Color Event
    // NOTE: Write unobtrusive Javascript
    // NOTE: This is regarding the favoriteColor radio buttons.
    // When a user selects a color, create an alert with a message similar to:
    // 	"So you like green more than blue now?"
    // In this example, green is the new value and blue is the old value.
    // Make the background color (of all favoriteColor radio buttons) the newly selected favoriteColor
    // let lastColor = null;
    // let colors = document.querySelectorAll("input[name='favoriteColor']");
    // [].forEach.call(colors,(color)=>{
    //     if (color.checked){
    //         lastColor = color.value;
    //     }
    //     color.setAttribute('onclick','onFavoriteColor(this)');
  
    // })
    // function onFavoriteColor(id){
    //     alert("Wow so you like " +id.value+" more than "+id.value+" now?");
    //     lastColor = id.value;
    //     [].forEach.call(colors,(col)=>{
    //       col.style = `background-color:${id.value}`;
    //     })
    // }
  
    // 9. Show/Hide Event
    // NOTE: Write unobtrusive Javascript
    // When user hovers over an employees name:
    // 	Hide the name if shown.
    // 	Show the name if hidden
    // let emps = document.getElementsByClassName('empName');
    // [].forEach.call(emps,(e)=>{
    //   e.setAttribute('onmouseover','toggleVis(this)');
    //   e.setAttribute('onmouseout','toggleVis(this)');
    // })
    // function toggleVis(id){
    //   if (id.style.visibility == 'hidden'){
    //     id.style.visibility = 'visible';
    //   }
    //   else{
    //     id.style.visibility = 'hidden';
    //   }
    // }
  
  // 10. Current Time
  // Regarding this element:
  // 	<h5 id="currentTime"></h5>
  // Show the current time in this element in this format: 9:05:23 AM
  // The time should be accurate to the second without having to reload the page.
//   setInterval(()=>{
//     let showTime = document.getElementById('currentTime');
//     let d = new Date();
//     function timeSuff(hour){
//       if (hour >= 12){
//         return 'PM';
//       }
//       else{
//         return 'AM';
//       }
//     }
//     showTime.innerText = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()} ${timeSuff(d.getHours())}`;
//   },500)
  
//   // 11. Delay
//   // Regarding this element:
//   // 	<p id="helloWorld">Hello, World!</p>
//   // Three seconds after a user clicks on this element, change the text to a random color.
//   document.getElementById('helloWorld').setAttribute('onclick','delayEvent(this)');
  
//   function delayEvent(id){
//     setTimeout(()=>{
//       function randomInt(upper) {
//         return Math.floor(Math.random()*Math.floor(upper));
//   }
//       document.getElementById('helloWorld').style.color = `rgb(${randomInt(255)},${randomInt(255)},${randomInt(255)})`;
//     },3000)
//   }
  
  
  // 12. Walk the DOM
  // Define function walkTheDOM(node, func)
  // This function should traverse every node in the DOM. Use recursion.
  // On each node, call func(node).
  function walkTheDOM(node, func){
  
  }