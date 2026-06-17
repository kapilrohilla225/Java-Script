let url = "http://universities.hipolabs.com/search?name=india";

let btn = document.querySelector('button');
let colleges;
btn.addEventListener('click',async () =>{
    let state = document.querySelector('input').value;
    colleges = await checkState(state);
    // console.log(colleges);
    console.log(state);
    show(colleges);
})

async function checkState(state) {
    let obj1 = await getColleges();
    // console.log(obj1);
    let result = [];
    for(x of obj1){
        // console.log(x);
        if(x["state-province"] && x["state-province"].toLowerCase() === state.toLowerCase()){
            result = x.name;
        }
    }
    return result;
}

async function show(colleges) {
        let list = document.querySelector('#list');
        list.innerText = "";
        let li = document.createElement("li");
        li.innerText = await colleges;
        list.appendChild(li);
    if(colleges.length === 0){
        list.innerText = "Not Found";
    }
}

 async function getColleges(){
    try{
        let res = await axios.get(url);
        return (res.data);
        // console.log(obj);
        // console.log(obj[21]["state-province"]);
    }
    catch(err){
        console.log("error is - ",err);
    }
 }