var s1 = document.getElementById("opt1");
var s2 = document.getElementById("opt2");
var s3 = document.getElementById("opt3");
//s2.innerHTML="";
//s3.innerHTML="";
var created = 0;
function populate(){
    if (created==1){
        removeDrop();
    }
    var optionArray = ["EqualsTo|=","GreaterThan|>","GreaterThanOrEqualsTo|>=","LesserThan|<","LesserThanOrEqualsTo|<="];
    if (s1.value == "Chemical Composition"){
        var optionArray2 = ["Aluminium|Al","Carbon|C","Chromium|Cr","Manganese|Mn","Molybdenum|Mb","Niobium|Nb","Silicon|Si","Vanadium|V"];
    }else if (s1.value == "Mechanical Property"){
        var optionArray2 = ["Tensile|Tensile Stress (MPA)","Yield|Yield Limit (MPA)","Elongation|Elongation (%)","E-Modul|E-Modul (GPA)"];
    }else if (s1.value == "Chemical Property"){
        var optionArray2 = ["Property1|Property1","Property2|Property2"];
    }


    for (var option in optionArray2){
        var pair2 = optionArray2[option].split("|");
        var newOption2 = document.createElement("option");
        newOption2.value = pair2[0];
        newOption2.innerHTML = pair2[1];
        s2.options.add(newOption2);
    }
    for (var option in optionArray){
        var pair3 = optionArray[option].split("|");
        var newOption3 = document.createElement("option");
        newOption3.value = pair3[0];
        newOption3.innerHTML = pair3[1];
        s3.options.add(newOption3);
    }
    created=1;
}

function removeDrop(){
    var parent1 = document.getElementById("TD2");
    var parent2 = document.getElementById("TD3");
    var oldmenu1 = document.getElementById("opt2");
    var oldmenu2 = document.getElementById("opt3");
    parent1.removeChild(oldmenu1);
    parent2.removeChild(oldmenu2);
    s2 = document.createElement("select");
    s2.className = "select_2";
    s2.id = "opt2";
    parent1.appendChild(s2);
    s3 = document.createElement("select");
    s3.className = "select_2";
    s3.id = "opt3";
    parent2.appendChild(s3);
}

function addRow(btn){
    var parentRow = btn.parentNode.parentNode;
    var table = parentRow.parentNode;
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
    var cell0 = row.insertCell(0);
    var cell1 = row.insertCell(1);
    var cell2 = row.insertCell(2);
    var cell3 = row.insertCell(3);
    var cell4 = row.insertCell(4);

    var element0 = document.createElement("select");
    element0.className = "select";
    element0.id = "opt1" + table.children.length;
    var option00 = document.createElement("option");
    option00.defaultSelected= true;
    option00.innerHTML = "Please Select";
    element0.options.add(option00);
    var option01 = document.createElement("option");
    option01.value = "Mechanical Property";
    option01.innerHTML = "Mechanical Property";
    element0.options.add(option01);
    var option02 = document.createElement("option");
    option02.value = "Chemical Composition";
    option02.innerHTML = "Chemical Composition";
    element0.options.add(option02);
    var option03 = document.createElement("option");
    option03.value = "Chemical Property";
    option03.innerHTML = "Chemical Property";
    element0.options.add(option03);
    cell0.appendChild(element0);

    var element1 = document.createElement("select");
    element1.className = "select_2";
    element1.id = "opt2" + table.children.length;
    cell1.appendChild(element1);

    var element2 = document.createElement("select");
    element2.className = "select_2";
    element2.id = "opt3" + table.children.length;
    cell2.appendChild(element2);

    var element3 = document.createElement("input");
    element3.className = "input-group";
    element3.type = "text";
    element3.id = "opt4" + table.children.length
    cell3.appendChild(element3);

    var element34 = document.createElement("a");
    var element4 = document.createElement("i");
    // element4.type = "button";
    element4.className = "fas fa-trash fa-2x my-2";
    element4.style = "color: darkred; margin-left: 10px";
    element4.id = "opt5" + table.children.length;
    element34.appendChild(element4);
    cell4.appendChild(element34);
    element34.onclick = function (){
        row.parentNode.removeChild(row);
    }

    var created_new = 0;
    element0.onchange = function (){
        var optionArray = ["EqualsTo|=","GreaterThan|>","GreaterThanOrEqualsTo|>=","LesserThan|<","LesserThanOrEqualsTo|<="];
        if (created_new ==1){
            cell1.removeChild(element1);
            cell2.removeChild(element2);
            element1 = document.createElement("select");
            element1.className = "select_2";
            element1.id = "opt2" + table.children.length;
            cell1.appendChild(element1);
            element2 = document.createElement("select");
            element2.className = "select_2";
            element2.id = "opt3" + table.children.length;
            cell2.appendChild(element2);
        }
        if (element0.value=="Mechanical Property"){
            var optionArray2 = ["Tensile|Tensile Stress (MPA)","Yield|Yield Limit (MPA)","Elongation|Elongation (%)","E-Modul|E-Modul (GPA)"];
        }else if (element0.value=="Chemical Composition"){
            var optionArray2 = ["Aluminium|Al","Carbon|C","Chromium|Cr","Manganese|Mn","Molybdenum|Mb","Niobium|Nb","Silicon|Si","Vanadium|V"];
        }else if (element0.value=="Chemical Property"){
            var optionArray2 = ["Property1|Property1","Property1|Property2"];
        }
        for(option in optionArray2) {
            var pair1 = optionArray2[option].split("|");
            var option1 = document.createElement("option");
            option1.value = pair1[0];
            option1.innerHTML = pair1[1];
            element1.options.add(option1);
        }
        for(option in optionArray) {
            var pair2 = optionArray[option].split("|");
            var option2 = document.createElement("option");
            option2.value = pair2[0];
            option2.innerHTML = pair2[1];
            element2.options.add(option2);
        }
        created_new = 1;
    }
}

var count = 0;
function addCard(){
    var card_new_format = document.createElement("div");
    card_new_format.className = "col-md-3";

    var card_new = document.createElement("div");
    card_new.className = "card text-black-50 bg-info mb-3 animated heartBeat";
    card_new.style = "width: 652px; background-color: lightgrey!important; margin-left:-13.5px";

    var cheader = document.createElement("div");
    cheader.innerHTML = "I want a material with properties:";
    cheader.className = "card-header";


    var delButtonAnchor = document.createElement("a");
    var delButton = document.createElement("i");
    delButton.className = "fas fa-times-circle my-2;";
    delButton.style = "color: black; float:right;";
    delButtonAnchor.appendChild(delButton);

    var cbody = document.createElement("div");
    cbody.className = "card-body";

    var ptext = document.createElement("p");
    ptext.className = "card-text text-black-50";
    ptext.innerHTML = "Please select properties:";

    var cbodyclass = document.createElement("div");
    cbodyclass.className = "container";

    var addCardbutton = document.createElement("button");
    addCardbutton.className = "btn btn-secondary btn-grey btn-rounded my-2 waves-effect z-depth-0 animated rubberBand";
    addCardbutton.innerHTML = "+";
    addCardbutton.onclick = function (){
        addCard();
    }

    var text = document.createElement("input");
    text.className = "input-group_new";
    text.value = "OR";
    text.disabled = true;

    var tableNew = document.createElement("table");

    if(count!=0){
       tableNew.id = "tableNew" + count;
       count = count + 1;
    }else {
        tableNew.id = "tableNew";
        count = count + 1;
    }
    var tableNewrow = document.createElement("tr");
    tableNewrow.id = "initialRownew" + count;

    var cell0 = tableNewrow.insertCell(0);
    var cell1 = tableNewrow.insertCell(1);
    var cell2 = tableNewrow.insertCell(2);
    var cell3 = tableNewrow.insertCell(3);
    var cell4 = tableNewrow.insertCell(4);

    var element0 = document.createElement("select");
    element0.className = "select";
    element0.id = "opt1" + tableNew.children.length;
    var option00 = document.createElement("option");
    option00.defaultSelected= true;
    option00.innerHTML = "Please Select";
    element0.options.add(option00);
    var option01 = document.createElement("option");
    option01.value = "Mechanical Property";
    option01.innerHTML = "Mechanical Property";
    element0.options.add(option01);
    var option02 = document.createElement("option");
    option02.value = "Chemical Composition";
    option02.innerHTML = "Chemical Composition";
    element0.options.add(option02);
    var option03 = document.createElement("option");
    option03.value = "Chemical Property";
    option03.innerHTML = "Chemical Property";
    element0.options.add(option03);
    cell0.appendChild(element0);

    var element1 = document.createElement("select");
    element1.className = "select_2";
    element1.id = "opt2" + tableNew.children.length;
    cell1.appendChild(element1);

    var element2 = document.createElement("select");
    element2.className = "select_2";
    element2.id = "opt3" + tableNew.children.length;
    cell2.appendChild(element2);

    var element3 = document.createElement("input");
    element3.className = "input-group";
    element3.type = "text";
    element3.id = "opt4" + tableNew.children.length;
    cell3.appendChild(element3);

    var element4 = document.createElement("button");
    element4.type = "button";
    element4.className = "btn btn-primary btn-grey btn-rounded my-2 waves-effect z-depth-0 animated rubberBand";
    element4.id = "opt5" + tableNew.children.length;
    element4.innerHTML = "+";
    cell4.appendChild(element4);


    // console.log(tableNew.id);

    var created_new1 = 0;
    element0.onchange = function (){
        var optionArray = ["EqualsTo|=","GreaterThan|>","GreaterThanOrEqualsTo|>=","LesserThan|<","LesserThanOrEqualsTo|<="];
        if (created_new1 ==1){
            cell1.removeChild(element1);
            cell2.removeChild(element2);
            element1 = document.createElement("select");
            element1.className = "select_2";
            element1.id = "opt2" + tableNew.children.length;
            cell1.appendChild(element1);
            element2 = document.createElement("select");
            element2.className = "select_2";
            element2.id = "opt3" + tableNew.children.length;
            cell2.appendChild(element2);
        }
        if (element0.value=="Mechanical Property"){
            var optionArray2 = ["Tensile|Tensile Stress (MPA)","Yield|Yield Limit (MPA)","Elongation|Elongation (%)","E-Modul|E-Modul (GPA)"];
        }else if (element0.value=="Chemical Composition"){
            var optionArray2 = ["Aluminium|Al","Carbon|C","Chromium|Cr","Manganese|Mn","Molybdenum|Mb","Niobium|Nb","Silicon|Si","Vanadium|V"];
        }else if (element0.value=="Chemical Property"){
            var optionArray2 = ["Property1|Property1","Property1|Property2"];
        }
        for(option in optionArray2) {
            var pair1 = optionArray2[option].split("|");
            var option1 = document.createElement("option");
            option1.value = pair1[0];
            option1.innerHTML = pair1[1];
            element1.options.add(option1);
        }
        for(option in optionArray) {
            var pair2 = optionArray[option].split("|");
            var option2 = document.createElement("option");
            option2.value = pair2[0];
            option2.innerHTML = pair2[1];
            element2.options.add(option2);
        }
        created_new1 = 1;
    }

    element4.onclick = function (btn) {
        var table = document.getElementById(tableNew.id);
        var rowCount = table.rows.length;
        var row = table.insertRow(rowCount);
        var cell0 = row.insertCell(0);
        var cell1 = row.insertCell(1);
        var cell2 = row.insertCell(2);
        var cell3 = row.insertCell(3);
        var cell4 = row.insertCell(4);

        var element0 = document.createElement("select");
        element0.className = "select";
        element0.id = "opt1" + table.children.length;
        var option00 = document.createElement("option");
        option00.defaultSelected= true;
        option00.innerHTML = "Please Select";
        element0.options.add(option00);
        var option01 = document.createElement("option");
        option01.value = "Mechanical Property";
        option01.innerHTML = "Mechanical Property";
        element0.options.add(option01);
        var option02 = document.createElement("option");
        option02.value = "Chemical Composition";
        option02.innerHTML = "Chemical Composition";
        element0.options.add(option02);
        var option03 = document.createElement("option");
        option03.value = "Chemical Property";
        option03.innerHTML = "Chemical Property";
        element0.options.add(option03);
        cell0.appendChild(element0);

        var element1 = document.createElement("select");
        element1.className = "select_2";
        element1.id = "opt2" + table.children.length;
        cell1.appendChild(element1);

        var element2 = document.createElement("select");
        element2.className = "select_2";
        element2.id = "opt3" + table.children.length;
        cell2.appendChild(element2);

        var element3 = document.createElement("input");
        element3.className = "input-group";
        element3.type = "text";
        element3.id = "opt4" + table.children.length;
        cell3.appendChild(element3);

        var element34 = document.createElement("a");
        var element4 = document.createElement("i");
        element4.className = "fas fa-trash fa-2x my-2";
        element4.style = "color: darkred; margin-left: 10px;";
        element4.id = "opt15" + table.children.length;
        element34.appendChild(element4)
        cell4.appendChild(element34);
        element34.onclick = function (){
            row.parentNode.removeChild(row);
        }

        var created_new = 0;
        element0.onchange = function (){
        var optionArray = ["EqualsTo|=","GreaterThan|>","GreaterThanOrEqualsTo|>=","LesserThan|<","LesserThanOrEqualsTo|<="];
        if (created_new ==1){
            cell1.removeChild(element1);
            cell2.removeChild(element2);
            element1 = document.createElement("select");
            element1.className = "select_2";
            element1.id = "opt2" + table.children.length;
            cell1.appendChild(element1);
            element2 = document.createElement("select");
            element2.className = "select_2";
            element2.id = "opt3" + table.children.length;
            cell2.appendChild(element2);
        }
        if (element0.value=="Mechanical Property"){
            var optionArray2 = ["Tensile|Tensile Stress (MPA)","Yield|Yield Limit (MPA)","Elongation|Elongation (%)","E-Modul|E-Modul (GPA)"];
        }else if (element0.value=="Chemical Composition"){
            var optionArray2 = ["Aluminium|Al","Carbon|C","Chromium|Cr","Manganese|Mn","Molybdenum|Mb","Niobium|Nb","Silicon|Si","Vanadium|V"];
        }else if (element0.value=="Chemical Property"){
            var optionArray2 = ["Property1|Property1","Property1|Property2"];
        }
        for(option in optionArray2) {
            var pair1 = optionArray2[option].split("|");
            var option1 = document.createElement("option");
            option1.value = pair1[0];
            option1.innerHTML = pair1[1];
            element1.options.add(option1);
        }
        for(option in optionArray) {
            var pair2 = optionArray[option].split("|");
            var option2 = document.createElement("option");
            option2.value = pair2[0];
            option2.innerHTML = pair2[1];
            element2.options.add(option2);
        }
        created_new = 1;
    }
    }

    delButtonAnchor.onclick = function (){
        old_space.removeChild(card_new_format);
    }

    var old_space = document.getElementById("div0");
    old_space.appendChild(card_new_format);
    card_new_format.appendChild(card_new);
    cheader.appendChild(delButtonAnchor);
    card_new.appendChild(cheader);
    card_new.appendChild(cbody);
    cbody.appendChild(ptext);
    cbody.appendChild(cbodyclass);
    cbodyclass.appendChild(tableNew);
    tableNew.appendChild(tableNewrow);
    tableNewrow.appendChild(cell0);
    tableNewrow.appendChild(cell1);
    tableNewrow.appendChild(cell2);
    tableNewrow.appendChild(cell3);
    tableNewrow.appendChild(cell4);
    cbodyclass.appendChild(text);
    cbodyclass.appendChild(addCardbutton);

    var card_new_format_new = document.createElement("div");
    card_new_format.className = "col-md-3";
    old_space.appendChild(card_new_format_new);



}

// const table = document.getElementById('myTable');
// const initialRow = document.getElementById('initialRow');
// const rowToDuplicate = initialRow.cloneNode(true);
//
// function addRow() {
//     let duplicate = rowToDuplicate.cloneNode(true);
//     var select1 = duplicate.firstElementChild.firstElementChild
//
//     table.appendChild(duplicate);
//     select1.onchange = populate();
// }
