let url = "http://universities.hipolabs.com/search?name=";

let btn = document.querySelector("button");
btn.addEventListener("click",async ()=>{
    let country = document.querySelector("input").value;
    
    console.log(country);
    let collegeName = await getCollege(country);
    show(collegeName);
})

async function getCollege(input){
    try {
        let result = await axios.get(url+input);
        
        return result.data;

    }
    catch (e){
        console.log(e);
    }
}
//function show name
function show(collegeName){
    let list = document.querySelector("ul");
    list.innerText="";
    for(clgname of collegeName){
        console.log(clgname.name);
        let li = document.createElement("li");
        li.innerText = clgname.name;
        list.appendChild(li);
    }
}