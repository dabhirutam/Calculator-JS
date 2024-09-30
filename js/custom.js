let display = document.getElementById('display');
let ans = '';
let clr = false;

const viewNo = (no) => {
    clr ? clrSrc() : '';
    clr = false;
    display.value += no;
};

const viewOperation = (sign) => {
    ans += display.value + sign;
    clrSrc();
};

const viewAns = () => {
    display.value = eval(ans + display.value);
    ans = '';
    clr = true;  
};

const clrSrc = () => display.value = '';
const clrSno = () => display.value = display.value.slice(0,display.value.length - 1);

$(document).ready(function () {
    $('#thim').click(function () {
        $(this).children('i').toggleClass('bi-moon-fill').toggleClass('bi-brightness-high-fill');
        $('.bg-white , .bg-dark').toggleClass('bg-dark , .text-dark').toggleClass('bg-white , text-white');
    });
});