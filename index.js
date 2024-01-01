"use strict";

let disp = document.querySelector(".display");

let n1 = document.querySelector(".one");

console.dir(n1);

let num = document.querySelectorAll(".num");

let chisl_1 = 0, chisl_2 = 0;

let plus = false;
let minus = false;
let multy = false;
let division = false;

num.forEach(element => { 
    element.addEventListener('click', () => {

        if (disp.textContent.length == 10 || disp.textContent.length == 20 || disp.textContent.length == 30) {
            disp.innerHTML += '<br>';
        }

        switch (element.classList[1]) {
            case "zero":
                disp.innerHTML += '0';
                break;
            case "one":
                disp.innerHTML += '1';
                break;
            case "two":
                disp.innerHTML += '2';
                break;
            case "three":
                disp.innerHTML += '3';
                break;
            case "four":
                disp.innerHTML += '4';
                break;
            case "five":
                disp.innerHTML += '5';
                break;
            case "six":
                disp.innerHTML += '6'; 
                break;
            case "seven":
                disp.innerHTML += '7';
                break;
            case "eight":
                disp.innerHTML += '8';
                break;
            case "nine":
                disp.innerHTML += '9';
                break;

            case "plus":
                plus = true;
                minus = false;
                multy = false;
                division = false;

                chisl_1 = +disp.innerHTML;
                disp.innerHTML = "";
                break;

            case "minus":
                plus = false;
                minus = true;
                multy = false;
                division = false;

                chisl_1 = +disp.innerHTML;
                disp.innerHTML = "";
                break;

            case "multiplication":
                plus = false;
                minus = false;
                multy = true;
                division = false;

                chisl_1 = +disp.innerHTML;
                disp.innerHTML = "";
                break;

            case "division":
                plus = false;
                minus = false;
                multy = false;
                division = true;

                chisl_1 = +disp.innerHTML;
                disp.innerHTML = "";
                break;

            case "AC":
                disp.innerHTML = '';
                chisl_1 = 0;
                chisl_2 = 0;
                break;

            case "ravno":
                if (plus == true){
                    chisl_2 = +disp.innerHTML;
                    disp.innerHTML = chisl_1 + chisl_2;

                    plus = false;
                    minus = false;
                    multy = false;
                    division = false;
                } else if (minus == true) {
                    chisl_2 = +disp.innerHTML;
                    disp.innerHTML = chisl_1 - chisl_2;

                    plus = false;
                    minus = false;
                    multy = false;
                    division = false;
                } else if (multy == true) {
                    chisl_2 = +disp.innerHTML;
                    disp.innerHTML = chisl_1 * chisl_2;

                    plus = false;
                    minus = false;
                    multy = false;
                    division = false;
                } else if (division == true) {
                    chisl_2 = +disp.innerHTML;
                    disp.innerHTML = chisl_1 / chisl_2;

                    plus = false;
                    minus = false;
                    multy = false;
                    division = false;
                }
                break;
            default:
                break;
        }
    })
});