let url = "https://catfact.ninja/fact";
        // fetch(url)
        // .then((res) => {
        //     return res.json();
        // })
        // .then((data) =>{
        //     console.log("data 1 =",data.fact);
        //     return fetch(url);
        // })
        // .then((res) =>{
        //     return res.json();
        // })
        // .then((data2) =>{
        //     console.log("data2 = ", data2.fact)
        // })
        // .catch((err) =>{
        //     console.log("error :",err);
        // })

//     async function getFacts() {
//     try {
//     let res = await fetch(url);
//     let data = await res.json();
//     console.log(data.fact);

//     let res2 =await fetch(url);
//     let data2 = await res2.json();
//     console.log(data2.fact);
//     } catch(e) {
//         console.log("error -",e);
//     }  
// } 

let btn = document.querySelector('button');
let elem = document.querySelector("#para");

btn.addEventListener("click",async () =>{
    let fact = await getFacts();
    elem.innerText = fact;
})

async function getFacts() {
    try {
    let res = await axios.get(url);
    return (res.data.fact);
    } catch(e) {
        console.log("error -",e);
        return "No Fact Found";
    }  
} 
