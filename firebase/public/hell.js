//Button
var y = document.getElementById('openLevel3');
var y1 = document.getElementById('openLevel4');
var y2 = document.getElementById('openLevel5');
var y3 = document.getElementById('openLevel6');
var y4 = document.getElementById('open_Apiit');


//Hiiden 
var Z = document.getElementById('level-3');
var Z1 = document.getElementById('level-4');
var Z2 = document.getElementById('level-5');
var Z3 = document.getElementById('level-6');
var Z4 = document.getElementById('APIIT');



//Welcome Page
var a = document.getElementById('welcome');

function openlevel3() {
    if (Z.style.display === 'none') {
        Z.classList.add("d-none");
        a.classList.add("d-block");

    } else {
        Z.classList.add("d-block");
        a.classList.remove("d-block");
        a.classList.add("d-none");
        //Others 
        Z1.classList.remove("d-block");
        Z2.classList.remove("d-block");
        Z3.classList.remove("d-block");
        Z4.classList.remove("d-block");


        //Make sure they go off
        Z1.classList.add("d-none");
        Z2.classList.add("d-none");
        Z3.classList.add("d-none");
        Z4.classList.add("d-none");

    }
}

function openlevel4() {
    if (Z1.style.display === 'block') {
        Z1.classList.add("d-none");
        a.classList.add("d-block");

    } else {
        Z1.classList.add("d-block");
        a.classList.remove("d-block");
        a.classList.add("d-none");
        //Others 
        Z.classList.remove("d-block");
        Z2.classList.remove("d-block");
        Z3.classList.remove("d-block");
        Z4.classList.remove("d-block");

        //Make sure they go off
        Z.classList.add("d-none");
        Z2.classList.add("d-none");
        Z3.classList.add("d-none");
        Z4.classList.add("d-none");
    }
}

function openlevel5() {
    if (Z2.style.display === 'block') {
        //hide the main shit
        Z2.classList.add("d-none");
        a.classList.add("d-block");

    } else {
        Z2.classList.add("d-block");
        a.classList.remove("d-block");
        a.classList.add("d-none");
        //Others 
        Z1.classList.remove("d-block");
        Z.classList.remove("d-block");
        Z3.classList.remove("d-block");
        Z4.classList.remove("d-block");

        //Make sure they fuck off
        Z1.classList.add("d-none");
        Z.classList.add("d-none");
        Z3.classList.add("d-none");
        Z4.classList.add("d-none");
    }
}

function openlevel6() {
    if (Z3.style.display === 'block') {
        //hide the main shit
        Z3.classList.add("d-none");
        a.classList.add("d-block");

    } else {
        Z3.classList.add("d-block");
        a.classList.remove("d-block");
        a.classList.add("d-none");
        //Others 
        Z1.classList.remove("d-block");
        Z.classList.remove("d-block");
        Z2.classList.remove("d-block");
        Z4.classList.remove("d-block");

        //Make sure they fuck off
        Z1.classList.add("d-none");
        Z.classList.add("d-none");
        Z2.classList.add("d-none");
        Z4.classList.add("d-none");
    }
}

function open_apiit() {
    if (Z4.style.display === 'block') {
        //hide the main shit
        Z4.classList.add("d-none");
        a.classList.add("d-block");

    } else {
        Z4.classList.add("d-block");
        a.classList.remove("d-block");
        a.classList.add("d-none");
        //Others 
        Z.classList.remove("d-block");
        Z1.classList.remove("d-block");
        Z2.classList.remove("d-block");
        Z3.classList.remove("d-block");

        //Make sure they fuck off
        Z.classList.add("d-none");
        Z1.classList.add("d-none");
        Z2.classList.add("d-none");
        Z3.classList.add("d-none");
    }
}