
// btns
const fivePer = document.querySelector(".fivePer").value = 5;
const tenPer = document.querySelector(".tenPer").value = 10;
const fiveteenPer = document.querySelector(".fiveteenPer").value = 15;
const twentyfivePer = document.querySelector(".twentyfivePer").value = 20;
const fiftyPer = document.querySelector(".fiftyPer").value = 50;
const btns = document.querySelectorAll("[data-number]");
const error = document.querySelector(".error");
const tip = document.querySelector(".right-part-tip");
const tot = document.querySelector(".right-part-tot");


// logic

window.addEventListener("input", function(){
    damn();
    if(parseInt(document.getElementById("peoplenum-input").value) <= 0){
        error.classList.add('non');
    }else{
        error.classList.remove('non');
    }
    document.querySelector('.btn-set').addEventListener('click', function(){
        window.location.reload();
    });
    
});


    


function Customer(p){
    this.number = p;
};

Customer.prototype.valueOf = function() {
    return this.number;
};

function damn(){
    const fivePer = document.querySelector(".fivePer").value = 5;
    const tenPer = document.querySelector(".tenPer").value = 10;
    const fifeteenPer = document.querySelector(".fiveteenPer").value = 15;
    const twentyfivePer = document.querySelector(".twentyfivePer").value = 25;
    const fiftyPer = document.querySelector(".fiftyPer").value = 50;
    const btns = document.querySelectorAll("[data-number]");
    let billInput = parseInt(document.getElementById("bill-input").value);
    let CustomPer = parseInt(document.getElementById("Custom").value);
    let peoplenumInt = parseInt(document.getElementById("peoplenum-input").value) ;

    

    btns.forEach(btn => {
        btn.addEventListener("click", () =>{
            btn.classList.toggle('hover');
            const object1 = new Customer(btn.dataset.number);
            let TTvalue = billInput * (object1/100);
            let TAvalue = billInput + TTvalue;
            let TPPvalue = TTvalue / peoplenumInt;
            let TotPPvalue = TAvalue / peoplenumInt;

            tot.textContent = `$${TotPPvalue}`;
            tip.textContent = `$${TPPvalue}`;
        })
    });
    
    

    
    var object1 = new Customer(CustomPer)
    let TTvalue = billInput * (object1/100);
    let TAvalue = billInput + TTvalue;
    let TPPvalue = TTvalue / peoplenumInt;
    let TotPPvalue = TAvalue / peoplenumInt;

    tot.textContent = `$${TotPPvalue}`;
    tip.textContent = `$${TPPvalue}`;
}



