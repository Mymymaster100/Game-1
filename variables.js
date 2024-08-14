var money = 0;
var stone = 0;
function save() {
    sessionStorage.setItem("money", money);
    sessionStorage.setItem("stone", stone);
    location.href = "data.html";
}

function load() {
    let money2 = sessionStorage.getItem("money");
    let stone2 = sessionStorage.getItem("stone");
}
function gainMoney(amount) {
    money += amount;
    document.getElementById("mon").textContent = money;
    save();
}

load();