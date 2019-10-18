let billAmt: HTMLSpanElement;
let tipPercentage: NodeListOf<HTMLDivElement>;
let amtOfTip: NodeListOf<HTMLDivElement>;
let totalPaid: NodeListOf<HTMLDivElement>;
let inputCheckAmt: HTMLInputElement;

// if negative number make the border red
export function runApp() {
    inputCheckAmt = document.getElementById('inputCheckAmt') as HTMLInputElement;
    inputCheckAmt.addEventListener('keyup', updateField);
    // if (parseInt(inputCheckAmt.value) < 0) {

    // }
    billAmt = document.getElementById('billAmt') as HTMLSpanElement;
    const tipPercentage = document.getElementById('tipPercentage') as HTMLElement;
    const amtOfTip = document.getElementById('amtOfTip') as HTMLElement;
    const totalPaid = document.getElementById('totalPaid') as HTMLElement;
}
function updateField(e: any) {
    billAmt.innerText = e.target.value;


}
