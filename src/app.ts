let billAmt: HTMLSpanElement;
let tipPercentage: HTMLSpanElement;
let amtOfTip: HTMLSpanElement;
let totalPaid: HTMLSpanElement;
let inputCheckAmt: HTMLInputElement;

let tip10Button: HTMLButtonElement;
let tip20Button: HTMLButtonElement;
let tip15Button: HTMLButtonElement;

let tipAmount = 20;
// if negative number make the border red
export function runApp() {

    tip10Button = document.getElementById('btnTip10') as HTMLButtonElement;
    tip10Button.addEventListener('click', handleTipButton10);

    tip15Button = document.getElementById('btnTip15') as HTMLButtonElement;
    tip15Button.addEventListener('click', handleTipButton15);

    tip20Button = document.getElementById('btnTip20') as HTMLButtonElement;
    tip20Button.addEventListener('click', handleTipButton20);


    inputCheckAmt = document.getElementById('inputCheckAmt') as HTMLInputElement;
    inputCheckAmt.addEventListener('keyup', updateField);
    // if (parseInt(inputCheckAmt.value) < 0) {

    // }
    billAmt = document.getElementById('billAmt') as HTMLSpanElement;

    tipPercentage = document.getElementById('tipPercentage') as HTMLSpanElement;


    amtOfTip = document.getElementById('amtOfTip') as HTMLSpanElement;

    totalPaid = document.getElementById('totalPaid') as HTMLSpanElement;

    tip20Button.click();
}
function updateField(e: any) {
    billAmt.innerText = e.target.value;
    tipPercentage.innerText = e.target.value;
    amtOfTip.innerText = e.target.value;
    totalPaid.innerText = e.target.value;
}

function updateTipPercentage(amount: string) {
    amount = amount || '0';
    tipAmount = parseInt(amount, 10);
    tipPercentage.innerText = amount;
    calculateTip(billAmt.innerText, tipPercentage.innerText);
    totalBill(billAmt.innerText, tipPercentage.innerText);
}
function totalBill(billAmount: string, amountOfTip: string) {
    billAmount = billAmount || '0';
    const bill = parseFloat(billAmount);
    const tip = parseFloat(amountOfTip);
    const tipTotal = (tip / 100) * bill;
    const billTotal = tipTotal + bill;
    totalPaid.innerText = billTotal.toString();

}
function calculateTip(billAmount: string, tipAmt: string) {
    billAmount = billAmount || '0';
    const bill = parseFloat(billAmount);
    const tip = parseFloat(tipAmt);
    const result = (tip / 100) * bill;
    amtOfTip.innerText = result.toString();
}
function handleTipButton10() {
    tip10Button.disabled = true;
    tip15Button.disabled = false;
    tip20Button.disabled = false;
    updateTipPercentage('10');
    const message = document.getElementById('message10') as HTMLElement;
    message.innerText = 'You are tipping 10%';

}

function handleTipButton15() {

    tip10Button.disabled = false;
    tip15Button.disabled = true;
    tip20Button.disabled = false;
    updateTipPercentage('15');
    const message = document.getElementById('message10') as HTMLElement;
    message.innerText = 'You are tipping 15%';

}

function handleTipButton20() {
    tip10Button.disabled = false;
    tip15Button.disabled = false;
    tip20Button.disabled = true;
    updateTipPercentage('20');
    const message = document.getElementById('message10') as HTMLElement;
    message.innerText = 'You are tipping 20%';
}





