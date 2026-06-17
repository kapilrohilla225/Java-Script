//Call Back Hell

let para = document.querySelector('p')

// this is nested callback and code reading problems
setTimeout(()=> {
    setTimeout(()=>{
        para.style.color = "red";
        setTimeout(()=>{
            para.style.color = "blue";
            setTimeout(() =>{
                para.style.color = "green";
            },1000)
        },1000)
    },1000);
})

//this is promises method to do it 
let para2 = document.querySelector("#prm");

function changeColor(color,delay){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            para2.style.color = color;
            resolve();
        },delay);
    })
}

changeColor("red",1000)
.then(() => changeColor("blue",1000))
.then(() => changeColor("green",1000))
.then(() => changeColor("purple",1000))
.catch((err) => console.log(err));

//promise how works layer by layer value going calculated
new Promise((resolve,reject) =>{
    resolve(5);
})
.then((num)=>num*2)
.then((num) => num+3)
.then((num)=> console.log(num));
 

//Async Functions with use of await keyword 

// async function getData(){
//     return Promise.resolve("Server Found");
// }

// async function showData() {
//     let data = await getData();
//     console.log(data);
// }

// showData();

//question practice
function getNum() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(10);
        }, 2000);
    });
}

async function showNum() {
    console.log("Start");

    let num = await getNum();

    console.log(num);
    console.log("End");
}

showNum();