// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
// зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
// При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається

let date = new Date();

let num = +localStorage.getItem('number') || 0;
const block = document.getElementById('number');
block.innerText = num.toString();
let lastSavedVisit = new Date(localStorage.getItem('lastVisit'));
const diffTime = Math.abs(date - lastSavedVisit);
const diffSeconds = Math.ceil(diffTime / 1000);
if (diffSeconds > 10) {
    console.log(diffSeconds)
    let newNum = num + 10;
    localStorage.setItem('number', newNum);
    localStorage.setItem('lastVisit', date.toString());
}