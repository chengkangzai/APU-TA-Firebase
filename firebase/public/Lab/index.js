var selectionList = $("#selection");
var totalLevel = ["Level 3", "Level 4", "Level 5", "Level 6", "APIIT"];
var level3 = ["TL03-DL", "TL03-PLC", "TL03-CADCAM", "TL03-ROBO"];
var level4 = ["TL04-01", "TL04-02", "TL04-03", "TL04-04", "TL04-05", "TL04-14"];
var level5 = ["TL05-SOC", "TL05-CNA", "Forensic Lab"];
var level6 = ["TL06-01", "TL06-02", "TL06-03", "TL06-04", "TL06-06", "TL06-07", "TL06-08", "TL06-09", , "TL06-11"];
var APIIT = ["APLC", "AS", "CGI", "ID", "VFX", "APLC Classroom"];
var imgUrl = [];
var id = "level-";


function makeImgUrl() {
    for (let index = 1; index <= 8; index++) {
        var temp = "../asset/img/" + index + ".jpg";
        imgUrl.push(temp);
    }
}

function renderSelectionDom(element) {
    var dom = `        
    <div class="col-12 col-sm-11 col-md-11 col-lg-3 col-xl-3 ">
        <div class="card">
    <div class="card-image">`;

    (element === "APLC Classroom") ?
    dom += `<a href="lab.html?lab=APLC-L2" title="Click here to go ${element}">`:
        dom += `<a href="lab.html?lab=${element}" title="Click here to go ${element}">`;

    dom += `
    <img src="${imgUrl[Math.floor(Math.random() * 8)]}" /></a>
        <span class="card-title">${element}</span>
    </div>
    <div class="card-action">
        <a href="lab.html?lab=APLC-L2" class="text-dark " title="Click here to go ${element}"><strong>Go!</strong></a>
    </div>
    </div>
    </div>`
    return dom;
}

function renderSelection() {
    level3.forEach(element => {
        var belong = $("#" + id + "3" + "row");
        var dom = renderSelectionDom(element);
        belong.append(dom);
    });

    level4.forEach(element => {
        var belong = $("#" + id + "4" + "row");
        var dom = renderSelectionDom(element);
        belong.append(dom);
    });

    level5.forEach(element => {
        var belong = $("#" + id + "5" + "row");
        var dom = renderSelectionDom(element);
        belong.append(dom);
    });

    level6.forEach(element => {
        var belong = $("#" + id + "6" + "row");
        var dom = renderSelectionDom(element);
        belong.append(dom);
    });

    APIIT.forEach(element => {
        var belong = $("#APIITrow");
        var dom = renderSelectionDom(element);
        belong.append(dom);
    });

}

function renderLevel() {
    var i = 2;
    totalLevel.forEach(element => {
        i++;
        if (element == "APIIT") {
            var dom = `
            <div id="${element}">
                <h3>${element}</h3>
                <div class="row" id="${element + "row"}">
                </div>
            </div>
            `;
        } else {
            var dom = `
        <div id="${id + i}">
            <h3>${element}</h3>
            <div class="row" id="${id + i + "row"}">
            </div>
        </div>
        `;
        }
        selectionList.append(dom);
    });
}


firebase.auth().onAuthStateChanged(function(user) {
    if (!user) window.location.href = "../index.html";
});


makeImgUrl();
renderLevel();
renderSelection();
particleJS();
makeFloatOnParticle("content-wrapper");