//Button
var y   = $('#openLevel3');
var y1  = $('#openLevel4');
var y2  = $('#openLevel5');
var y3  = $('#openLevel6');
var y4  = $('#open_Apiit');


//Hiiden 
var Z   = $('#level-3');
var Z1  = $('#level-4');
var Z2  = $('#level-5');
var Z3  = $('#level-6');
var Z4  = $('#APIIT');

Z.hide();
Z1.hide();
Z2.hide();
Z3.hide();
Z4.hide();


//Welcome Page
var a = $('#welcome');

function openlevel3() {
    Z.show();
    Z1.hide();
    Z2.hide();
    Z3.hide();
    Z4.hide();
    a.hide();
}

function openlevel4() {
    Z1.show();
    Z.hide();
    Z2.hide();
    Z3.hide();
    Z4.hide();
    a.hide();
}

function openlevel5() {
    Z2.show();

    Z.hide();
    Z3.hide();
    Z1.hide();
    Z4.hide();
    a.hide();
}

function openlevel6() {
    Z3.show();

    Z.hide();
    Z1.hide();
    Z2.hide();
    Z4.hide();
    a.hide();
}

function open_apiit() {
    Z4.show();

    Z.hide();
    Z1.hide();
    Z2.hide();
    Z3.hide();
    a.hide();
}