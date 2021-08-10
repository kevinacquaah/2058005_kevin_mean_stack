var Artifact = /** @class */ (function () {
    class Artifact {
        constructor(name, price) {
            this.name = name;
            this.price = price;

        }
        dis() {
            console.log("Name is " + this.name);
            console.log("Price is " + this.price);
        }
    }
    return Artifact;
}()); 
function IncludeInCart(name,price) {
    var item = new Artifact(name,price);
    console.log(item.dis());
    var cart = JSON.parse(localStorage.getItem("cart") || "[]");
    cart.push(item);
    localStorage.setItem("cart",JSON.stringify(cart));
    document.getElementById('size').innerHTML = "" + cart.length;
}

function showCart() {
    var CartArray = JSON.parse(localStorage.getItem("cart"));
    var Tablecnt = "";
    var BeginTble = "<table border=2><tr><th>Artifact</th><th>Price</th></tr>";
    var total = 0;
    CartArray.forEach(function (cartArtifact) {
Tablecnt = Tablecnt + "<tr><td>" + cartArtifact.name + "</td><td>" + cartArtifact.price + "</td></tr>";
total += cartArtifact.price;
    });
    var closeTable = "</table>";
    Tablecnt = BeginTble + Tablecnt + closeTable + "TOTAL AMOUNT: $ " + total;
    document.getElementById("main").innerHTML = Tablecnt;
}


