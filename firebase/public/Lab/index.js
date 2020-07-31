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
    for (let i = 1; i <= 8; i++) {
        imgUrl.push(`../asset/img/${i}.jpg`);
    }
}

function renderSelectionDom(element) {
    var btnDom = `<a href="lab.html?lab=${element}" class="btn btn-primary" title="Click here to go ${element}">`;
    if (element === "APLC Classroom") {
        var btnDom = `<a href="lab.html?lab=APLC-L2" class="btn btn-primary" title="Click here to go ${element}">`;
    }
    var temp = `
    <div class="col-12 col-sm-11 col-md-11 col-lg-3 col-xl-3 mb-1 m-0 ">
        <div class="card m-0">
            <img class="card-img-top" src="${imgUrl[Math.floor(Math.random() * 8)]}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title text-dark">${element}</h5>
                <a href="lab.html?lab=${element}" class="btn btn-primary">Go </a>
            </div>
        </div>
    </div>`;
    return temp;
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
                <h3 class="p-3">${element}</h3>
                <div class="row m-0" id="${element + "row"}">
                </div>
            </div>
            `;
        } else {
            var dom = `
        <div id="${id + i}">
            <h3 class="p-3">${element}</h3>
            <div class="row m-0" id="${id + i + "row"}">
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