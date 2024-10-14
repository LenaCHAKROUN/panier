// declaration des variables
var plusbtn = Array.from(document.querySelectorAll(".fa-plus-circle"));
var minusbtn = Array.from(document.querySelectorAll(".fa-minus-circle"));
var cards = Array.from(document.querySelectorAll(".card"));
var delbtn= Array.from(document.querySelectorAll(".fa-trash-alt"));
var fav = Array.from(document.querySelectorAll(".fa-heart"));

// fonction plus
for (let plus of plusbtn) {
    plus.addEventListener("click", function() {
        plus.nextElementSibling.innerHTML++;
        somme()
    });

}

// fonction minus
for (let  minus of minusbtn) {
    minus.addEventListener("click", function() {
        minus.previousElementSibling.innerHTML>1
        ?minus.previousElementSibling.innerHTML--
        : null;
        somme()
    });
}

// fonction delete
for (let i in delbtn) {
    delbtn[i].addEventListener("click", function() {
        cards[i].remove()
        somme()
    });
}

// fonction somme
function somme() {
    let prx= Array.from(document.querySelectorAll(".unitt-price"));
    let quan=Array.from(document.querySelectorAll(".qute"));
    s=0
    for ( let i=0; i<prx.length; i++) {
        s=s+quan[i].innerHTML*prx[i].innerHTML;
    }
    document.getElementById("total-price").innerHTML=s;
}

// fonction fav
for (let favorite of fav) {
    favorite.addEventListener("click", function() {
        if (favorite.style.color == "black") {
            favorite.style.color = "red"
        }
        else {
            favorite.style.color = "black"
        }
    });
}
