let cont = document.getElementById("container");


let url = "https://fakestoreapi.com/products"
async function getData(url){
    
    let res = await fetch(url);
    let data = await res.json()
    console.log(data);

    displayData(data);
    
}

getData(url)

function displayData(arr){
    cont.innerHTML="";
    arr.forEach((ele,i) => {
        let div = document.createElement("div");

        let img = document.createElement("img");
        img.src = ele.image;

        let title = document.createElement("h3");
        title.textContent = ele.title;

        let price = document.createElement("h2");
        price.textContent = `Rs : ${ele.price}`;

        div.append(img,title,price)
        cont.append(div);
    });
}
let filter = document.getElementById("filter")
let value = filter.value;

function mensdata(){
    let url = "https://fakestoreapi.com/products/category/men's%20clothing"
    getData(url);
}


