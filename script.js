const searchBar = document.getElementById("searchBar")

const tools = document.querySelectorAll(".tool-card")

searchBar.addEventListener("keyup",function(){

let value = searchBar.value.toLowerCase()

tools.forEach(function(tool){

let name = tool.getAttribute("data-name")

if(name.includes(value)){

tool.style.display="block"

}else{

tool.style.display="none"

}

})

})