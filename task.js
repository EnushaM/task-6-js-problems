function s1(s) {
    console.log(s.split("").reverse().join(""));
}
function s2()
{
    var arr=['a', 'b', 'c', 'd', 'e', 'f']
    console.log((arr);
    arr.length = 0;
    console.log((arr);
}
let stack1 = [];
let stack2 = [];  

function enqueue(val) {
    if (stack2.length > 0) {
        let len = stack2.length;
        for (let i = 0; i < len; i++) {
            let p = stack2.pop();
            stack1.push(p);
        }
    }
    stack1.push(val);
    console.log("Elements after Enqueue: ", stack1);
}
function dequeue() {
    if (stack2.length > 0) {
        console.log("Element after dequeue : "+ stack2.pop());
    }
    else if (stack2.length === 0)
    {
        if (stack1.length === 0) {
            console.log("Queue is empty");
        }
        else if (stack1.length === 1) 
        {
            console.log(stack1.pop());
        }
        else if (stack1.length > 0) 
        {
            let len = stack1.length;
            for (let i = 0; i < len; i++) 
            {
                let p = stack1.pop();
                stack2.push(p);
            }
            console.log("Element after dequeue: "+ stack2.pop());
        }
    }
}
function s3() {
    enqueue(1);
    enqueue(2);
    enqueue(3);
    dequeue();
    enqueue(4);
    enqueue(5);

}

function q4()
{
    for(var i=0;i<100;i++)
    {
        if(i%3==0) console.log("fizz");
        else if(i%5==0) console.log("buzz");
        else if(i%15==0) console.log("fizzbuzz");
    }
}

function q5(s1,s2)
{ 
    let n=26;
    const arr =  new Array(s1.length);
    if (s1.length != s2.length) console.log("false");
    for(let i=0;i<n;i++) {arr[i]=0;}
    for(let i = 0; i < s1.length; i++)
    {
        arr[s1.charAt(i)-a]++;
        arr[s2.charAt(i)-a]--;
    }
    let f=true;
    for(let i = 0; i < n; i++)
        if (arr[i] != 0)
        {f=false;}
    console.log(f);
}
function s6(s) {
    let first = "",middle = "",last = "",space = 0,dot = 0,e = "";
    for (let i = 0; i < s.length; i++) {
        if (s[i]==".") dot+= 1;
        if (s[i]==" ") space+= 1;
        if (space== 0) first+= s[i];
        else
        {
            if (space === 1 && s[i] !== " ") middle+= s[i];
            else if (space === 2 && s[i] !== " ") last+= s[i];
        }
    }
    if (s[s.length - 1] === ".") dot -= 1;
    let firstregex = /^[A-Z][a-zA-Z]+$|^[A-Z]\W$/g;
    let a = firstregex.test(first);
    let middleregex = /^[A-Z][a-zA-Z]+$|^[A-Z]\W$/g;
    let b = middleregex.test(middle);
    let lastregex = /^[A-Z][a-zA-Z]+$/g;
    let c = lastregex.test(last);
    if (a === true && b === true && c === true && space === 2&& (dot === 0 || dot === 2)) {
        f = true;
    } 
    else if (a === true && b === true && c === true && space === 2 && (middle[middle.length - 1] === ".")) {
        f= true;
    } 
    else if (a === true && b === true && space === 1) {
        f= true; 
    }
    else f= false;
    console.log(f);
}