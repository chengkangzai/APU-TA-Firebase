//Button
var y = $('#openLevel3');
var y1 = $('#openLevel4');
var y2 = $('#openLevel5');
var y3 = $('#openLevel6');
var y4 = $('#open_Apiit');


//Hiiden 
var Z = $('#level-3');
var Z1 = $('#level-4');
var Z2 = $('#level-5');
var Z3 = $('#level-6');
var Z4 = $('#APIIT');

var Zs = [Z, Z1, Z2, Z3, Z4];

hideAllSection();

//Welcome Page
var a = $('#welcome');

function hideAllSection() {
    Zs.forEach(element => {
        element.hide();
    });
}

function openlevel3() {
    if (Z.css('display') === "none") {
        hideAllSection();
        Z.show();
        a.hide();
    }
}

function openlevel4() {
    if (Z1.css('display') === "none") {
        hideAllSection();
        Z1.show();
        a.hide();
    } else {
        hideAllSection();
    }
}

function openlevel5() {
    if (Z2.css('display') === "none") {
        hideAllSection();
        Z2.show();
        a.hide();
    } else {
        hideAllSection();
    }
}

function openlevel6() {
    if (Z3.css('display') === "none") {
        hideAllSection();
        Z3.show();
        a.hide();
    } else {
        hideAllSection();
    }
}

function open_apiit() {
    if (Z4.css('display') === "none") {
        hideAllSection();
        Z4.show();
        a.hide();
    } else {
        hideAllSection();
    }
}