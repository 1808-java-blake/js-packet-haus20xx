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

function reverseStr(someString){
    let stringLength = someString.length;
    let newString = "";
    for(let i = stringLength-1;i>=0;i--){
        newString = newString + someString.charAt(i);
    }
    return newString;
}

function factorial(someNum){
    if (someNum===1){
        return 1;
    }
    else{
        return someNum * factorial(someNum-1);
    }
}

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

//IMPLEMENT SHAPE THING

function traverseObject(someObj){
    for(let key in someObj){
        console.log(key + " : " + someObj[key]);
    }
}

function deleteElement(someArr){
    console.log(someArr.length);
    delete someArr[2];
    console.log(someArr.length);
}

function spliceElement(someArr){
    console.log(someArr.length);
    someArr.splice(2,1);
    console.log(someArr.length);
}

function Person(name,age){
    this.name = name,
    this.age =age
}

function getPerson(name,age){
    return {name:name, age:age};
}

function getUSA(){
    let eles = [...document.getElementsByTagName("*")];
    eles.forEach(element => {
      if(element.childNodes.length === 1 && element.childNodes[0].nodeValue.includes("USA"))
        console.log(element.childNodes[0].nodeValue)
    });
}

function getPeopleInSales(){
    let empl = [...document.getElementsByClassName('empName')];
    let emplStat = [];
    empl.forEach(element => {
        if (element.nextElementSibling.nodeValue === "Sales"){
            console.log(element.nodeValue);
        }
    });
}

function getAnchorChildren(){
    let anchors = [...document.getElementsByTagName('a')]
    let anchorChild = [];
    anchors.forEach(element =>{
      element.childNodes.forEach(child =>{
        if (child.nodeName === "SPAN"){
          console.log(child.innerHTML);
        }
      })
    })
}

function getHobbies(){
    let elements = document.querySelectorAll('select[name="hobbies"]');
    let hobbies = elements[0].querySelectorAll('option[selected="selected"]');
    hobbies.forEach(element => {
      console.log(element.textContent);
    });
}

let skillset = document.querySelector('select[name="skills"]');
let skillsubset = skillset.childNodes;
skillset.setAttribute('onchange','onSkillChange(this)');

function onSkillChange(id){
  alert("Are you sure "+id.value+" is a skill of yours?");
};

let lastColor = null;
let colors = document.querySelectorAll("input[name='favoriteColor']");
[].forEach.call(colors,(color)=>{
    if (color.checked){
        lastColor = color.value;
    }
    color.setAttribute('onclick','onFavoriteColor(this)');

})


function onFavoriteColor(id){
    console.log("old:" + lastColor+" new:"+id.value);
    lastColor = id.value;
}