let billAmt: HTMLSpanElement;
let tipPercentage: HTMLSpanElement;
let amtOfTip: HTMLSpanElement;
let totalPaid: HTMLSpanElement;
let inputCheckAmt: HTMLInputElement;

// if negative number make the border red
export function runApp() {
    inputCheckAmt = document.getElementById('inputCheckAmt') as HTMLInputElement;
    inputCheckAmt.addEventListener('keyup', updateField);
    // if (parseInt(inputCheckAmt.value) < 0) {

    // }
    billAmt = document.getElementById('billAmt') as HTMLSpanElement;
    tipPercentage = document.getElementById('tipPercentage') as HTMLSpanElement;
    amtOfTip = document.getElementById('amtOfTip') as HTMLSpanElement;
    totalPaid = document.getElementById('totalPaid') as HTMLSpanElement;
}
function updateField(e: any) {
    billAmt.innerText = e.target.value;
    tipPercentage.innerText = e.target.value;
    amtOfTip.innerText = e.target.value;
    totalPaid.innerText = e.target.value;


}
