var selectionList = $("#selection");
var totalLevel = ["Level 3", "Level 4", "Level 5", "Level 6", "APIIT"];
var level3 = ["TL03-DL", "TL03-PLC", "TL03-CADCAM", "TL03-ROBO"];
var level4 = ["TL04-01", "TL04-02", "TL04-03", "TL04-04", "TL04-05", "TL04-14"];
var level5 = ["TL05-SOC", "TL05-CNA", "Forensic Lab"];
var level6 = ["TL06-01", "TL06-02", "TL06-3", "TL06-04", "TL06-06", "TL06-07", "TL06-08", "TL06-09", , "TL06-11"];
var APIIT = ["APLC","AS","CGI","ID","VFX","APLC Classroom"];
var imgurl = "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
var id = "level-";

function renderSelectiondom(element) {

    if (element === "APLC Classroom") {
        var dom = `
        <div class="col-12 col-sm-11 col-md-11 col-lg-3 col-xl-3 ">
            <div class="card">
                <div class="card-image">
                    <img src="${imgurl}" />
                    <span class="card-title">${element}</span>
                </div>
                <div class="card-action">
                    <a href="lab.html?lab=APLC-L2">Go!</a>
                </div>
            </div>
        </div>`;
        return dom;    
    }else{
    var dom = `
    <div class="col-12 col-sm-11 col-md-11 col-lg-3 col-xl-3 ">
        <div class="card">
            <div class="card-image">
                <img src="${imgurl}" />
                <span class="card-title">${element}</span>
            </div>
            <div class="card-action">
                <a href="lab.html?lab=${element}">Go!</a>
            </div>
        </div>
    </div>`;
    return dom;
    }
}

function renderSelection() {
    level3.forEach(element => {
        var belong = $("#" + id + "3" + "row");
        var dom=renderSelectiondom(element);
        belong.append(dom);
    });

    level4.forEach(element => {
        var belong = $("#" + id + "4" + "row");
        var dom=renderSelectiondom(element);
        belong.append(dom);
    });

    level5.forEach(element => {
        var belong = $("#" + id + "5" + "row");
        var dom=renderSelectiondom(element);
        belong.append(dom);
    });

    level6.forEach(element => {
        var belong = $("#" + id + "6" + "row");
        var dom=renderSelectiondom(element);
        belong.append(dom);
    });
    
    APIIT.forEach(element => {
        var belong = $("#APIITrow");
        var dom=renderSelectiondom(element);
        belong.append(dom);
    });

}

function renderLevel() {
    var i = 2;
    totalLevel.forEach(element => {
        i = i + 1;
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
//TODO 1. render level
//TODO 2. render selection

firebase.auth().onAuthStateChanged(function (user) {
    if (!user) {
        alert("Please log in to continue");
        window.location.href = "../index.html";
    }
});


renderLevel()
renderSelection()

