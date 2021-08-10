class Artifact {
    public name:string;
    public price:number;


constructor(name:string, price:number) {
    this.name = name;
    this.price = price;
}
dis(): void {
    console.log("Name is " + this.name);
    console.log("Price is " + this.price);
}
}

function IncludeInCart(name:string, price:number) {
    let item = new Artifact(name,price);
    console.log(item.dis());
let cart:Array<Artifact> = JSON.parse(localStorage.getItem("cart") || "[]");
cart.push(item);
localStorage.setItem("cart", JSON.stringify(cart));
document.getElementById("size").innerHTML=""+cart.length;
}

function showCart() {
    let CartArray = JSON.parse(localStorage.getItem("cart"));
var Tablecnt = "";
var Begintble = "<table border=2><tr><th>Artifact</th><th>Price</th></tr>";
var total:number = 0;
CartArray.array.forEach(cartItem => {
    Tablecnt = Tablecnt+"<tr><td>"+cartItem.name+"</td><td>"+cartItem.price+"</td></tr>";
    total += cartItem.price;
})
var closeTable= "</table>";
Tablecnt = Begintble+Tablecnt+closeTable+"TOTAL AMOUNT: $ "+total;
document.getElementById("main").innerHTML=Tablecnt;
}
