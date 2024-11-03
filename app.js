let h1 = document.getElementById("div1")
let itemsElement = document.getElementById("items")
let start = document.getElementById("start")
let startAjkeHissab = document.getElementById('bttn-start')
let addMoneyDom = document.getElementById('addmoneyDOM')
let inputWork = document.getElementById("input-parent")

let money;

let itemValue;
let amount = 0;
let sent = {};

let setUserMoney = 0
let startValue;
let item = [];

startAjkeHissab.innerHTML = `<button  onclick="startCalulation()">Aaj ke Hissab add karen!</button>`
addMoneyDom.innerHTML = `<button disabled onclick="addMoney()">Add Money!</button>`

//input Work //

inputWork.innerHTML = `   
     <input disabled  oninput="addItem(event)" type="text" id="itemValue" placeholder="Enter Cut Money!">
     <input disabled class="inputWala01" oninput="addAmount(event)" id="amount" type="number" placeholder="Amount!!">
    `

const startCalulation = () => {

    money = +prompt("Aaj ke hissab ki amount ADD karen")

    if (money == 0 || !money) {
        alert("Sorry! Please Enter your Amount!")
    } else {
        setUserMoney = money
        startValue = money
        start.innerHTML = `<h1>Total hissab intna hai: ${startValue}</h1>`
        h1.innerHTML = `<h1>Itna hissab baki hai: ${setUserMoney}</h1>`

        startAjkeHissab.innerHTML = `<button disabled onclick="startCalulation()">Aaj ke Hissab add karen!</button>`
        addMoneyDom.innerHTML = `<button onclick="addMoney()">Add Money!</button>`

        inputWork.innerHTML = `   
         <input   oninput="addItem(event)" type="text" id="itemValue" placeholder="Item ki value ADD karen">
         <input class="inputWala01"  oninput="addAmount(event)" id="amount" type="number" placeholder="Amount den!">
        `
        
    }

}

const addItem = (e) => {
    itemValue = e.target.value
}

const addAmount = (e) => {
    amount = e.target.value
}


const add = () => {
    if (itemValue == "" || amount == "") {
        alert("please Enter Item And Amount!")
    } else {
        if (setUserMoney <= 0) {
            alert("sorry Sir/Mam!App ke aaj ke hissab ki amount finish ho cuki hai!! Ab App ko phele Amount ad karni hogi..")
        } else {

            sent = {
                itemValue, amount
            }
            item.push(sent)
            console.log(item)

            itemsElement.innerHTML = "";

            for (let i = 0; i < item.length; i++) {
                itemsElement.innerHTML += `
                <div class="itemsWork">
                    <p>${item[i].itemValue} / Rs: (${item[i].amount})</p>
                   <img class="img-wala" onclick="delWork(${i}, ${item[i].amount})" src="./6861362-removebg-preview.png" alt="nahi" width="20px" height="25px"/>

                </div>
                `
            }

            setUserMoney = setUserMoney - amount
            h1.innerHTML = `<h1>Itna hissab baki hai: ${setUserMoney}</h1>`



            document.getElementById("itemValue").value = "";
            document.getElementById("amount").value = "";

            itemValue = ""
            amount = ""
        }
    }
}

let delWork = (index, amountValue) => {

    console.log("me chala")
    console.log(index, "me okkk wala hon taya", amountValue)
    item.splice(index, 1)
    console.log()

    setUserMoney = setUserMoney + amountValue
    alert("Deleted!! App ki Amount total hissab me add kardi hai!")
    h1.innerHTML = '';
    h1.innerHTML = `<h1>Itna hissab baki hai: ${setUserMoney}</h1>`

    itemsElement.innerHTML = "";

    for (let i = 0; i < item.length; i++) {
        itemsElement.innerHTML += `
                <div class="itemsWork">
                    <p>${item[i].itemValue} / Rs: (${item[i].amount})</p>
                    <img class="img-wala" onclick="delWork(${i}, ${item[i].amount})" src="./6861362-removebg-preview.png" alt="nahi" width="20px" height="25px"/>
                </div>
        `
    }

}


const addMoney = () => {

    let addValue = +prompt("enter add money!")
    setUserMoney = setUserMoney + addValue
    startValue += addValue
    start.innerHTML = `<h1>Total hissab me add kiya ${addValue} Ab intna hai: ${startValue}</h1>`
    h1.innerHTML = `<h1>Itna hissab baki hai: ${setUserMoney}</h1>`

}
