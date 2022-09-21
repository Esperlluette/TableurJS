/**
 * lorsque j'affiche les résultats et que je 
 * réinitialise le tableur les lignes total se dupliquent
 */


var tableX = 4;
var tableY = 4;
var table = document.getElementById('table');

var resetB = document.getElementById("reset");
var calculB = document.getElementById("calcul");

var hasResults = false;

resetB.addEventListener("click", () => { vanish(table) }, false);


calculB.addEventListener("click", () => { calcul(table) }, false);



function vanish() {
    /**
     * @params Table HTML : table
     * 
     * - vide le tableau passé en paramètres et le 
     *   re-rempli avec la valeur par défaut (0) puis supprime 
     *   la colone de résultats.
     */
    var collection = document.getElementsByClassName('div');
    for (let i = 0; i < collection.length; i++) {
        collection[i].childNodes[0].nodeValue = "1"
    }

    deleteResults(table);

    console.log("\nTableau_réinitialisé");
}

function calcul() {

    if (hasResults) {
        deleteResults(table);
    }

    var collection = document.getElementsByClassName('div');
    var tCollection = getAllValue(collection);
    var tSortCollection = sortTable(tCollection);
    var resultsVertical = calculVertical(tSortCollection);
    var resultHorizontal = calculHorizontal(tSortCollection);

    resultToScreen(resultsVertical, resultHorizontal, table);

    hasResults = true;

}


function deleteResults(table) {
    /**
     * @params Array : table
     * @return void
     * 
     * - supprime la colone total
     */
    
    console.log(table);
    for (let i = 2; i < tableY*2+1; i+=2) {
        table.childNodes[1].childNodes[i].removeChild(table.childNodes[1].childNodes[i].childNodes[7])
    }

    hasResults = false;

}

function resultToScreen(resultsY, resultsX, table) {
    //résultats horizontaux ok
    //résultats verticaux Pas ok 
    /**
     * @params Array : resultsV
     * @params Array : resultH
     * @return void
     * 
     * - Affiche les résultats totaux 
     */

    j = 0;
    for (let i = 2; i <= tableY * 2; i += 2) {
        var td = document.createElement("td");


        var div = document.createElement("div");
        div.className = "div";
        div.id = "total " + i;
        div.innerHTML = resultsX[j];

        td.appendChild(div);

        table.childNodes[1].childNodes[i].appendChild(td);
        j++;
    }
}

function calculHorizontal(tSortCollection) {

    /**
     * @params Array : tCollection
     * @return Array : results
     * 
     * - récupère un tableau de valeurs et calcule
     *   tous les totals horizontaux pour les 
     *   retourner sous forme de tableau.
     */

    var results = [];
    for (let i = 0; i < tableY; i++) {

        var temp = 0;
        for (let j = 0; j < tableX; j++) {
            temp = temp + parseInt(tSortCollection[i][j]);
        }
        results.push(temp);
    }

    return results;

}

function calculVertical(tSortCollection) {
    /**
     * @params Array2D : tSortCollection
     * @return Array : results
     * 
     * - récupère un tableau de valeurs et calcule
     *   tous les totals verticaux pour les 
     *   retourner sous forme de tableau.
     */
    var results = [];
    for (let i = 0; i < tableY; i++) {

        var temp = 0;
        for (let j = 0; j < tableX; j++) {
            temp = temp + parseInt(tSortCollection[j][i]);
        }
        results.push(temp);
    }

    return results;

}

function sortTable(tCollection) {

    /**
     * @params Array : tCollection
     * @return Array2D : tSortCollection 
     * 
     * - récupère un tableau en une dimention
     *   pour le retourner sous forme d'un tableau 2D
     */

    var values = [];
    var temp = [];
    for (let i = 0; i < tCollection.length; i++) {
        temp.push(tCollection[i]);

        if (temp.length == tableX) {
            values.push(temp);
            temp = [];
        }
    }

    return values;

}


function getAllValue(collection) {
    /**
     * @params Collection HTML : table
     * @return Array : values
     * 
     * - récupère toutes les valeurs du tableau 
     *   pour les retourner dans tableau.
     */

    var value = [];

    for (let i = 0; i < collection.length; i++) {

        value.push(collection[i].childNodes[0].nodeValue)

    }
    return value;
}

divGenerator(table);



function divGenerator(table) {

    /**
     * @params Table HTML : table
     * 
     * - crée renpli un tableau HTML vide avec des td>div 
     */

    for (let i = 2; i <= tableY * 2; i = i + 2) {
        for (let j = 2; j <= tableX * 2; j = j + 2) {


            var td = document.createElement("td");


            var div = document.createElement("div");
            div.className = "div";
            div.id = i + " " + j;
            div.innerHTML = "1";
            div.setAttribute("contenteditable", "true");

            td.appendChild(div);

            table.childNodes[1].childNodes[i].appendChild(td);

        }
    }
}