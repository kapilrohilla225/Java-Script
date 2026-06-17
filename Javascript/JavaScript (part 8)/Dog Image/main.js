let url2 = 'https://dog.ceo/api/breeds/image/random';

let btn = document.querySelector('button');
let img = document.querySelector('#img1');

btn.addEventListener("click", async() =>{
    let imgLink = await getImages();
    img.setAttribute("src", imgLink);
})

async function getImages() {
    try{
        let res = await axios.get(url2);
        return (res.data.message);
    }catch(e){
        console.log("error - ",e);
        return "No Image Found";
    }
}