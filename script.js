/**
 * - Fonction de génération de divs. 
 * - Fonction de mise à zéro des compteurs.
 * - écouteur sur les boutons reset et calcul.
 * 
 */


var table = document.getElementById('table');

var resetB = document.getElementById("reset");
var calculB = document.getElementById("calcul");


resetB.addEventListener("click", () => { vanish(table) }, false);


calculB.addEventListener("click", () => { calcul(table) }, false);



function vanish(table) {
    /**
     * @params Table HTML : table
     * 
     * - vide le tableau passé en paramètres et le 
     *   re-rempli avec la valeur par défaut
     */



}

function calcul(table) {
    // console.log(table);
    getAllValue(table)




}


function getAllValue(table) {
    /**
     * @params Table HTML : table
     * @return Array : values
     * 
     * - récupère toutes les valeurs du tableau pour les retourner dans une liste.
     */

    var value = [];

    console.log(table.childNodes[1].children[1]);
    // console.log(table.childNodes[1].children);
    for (let i = 1; i < table.childNodes[1].children.length; i++) {
        var temp = [];
        var node ;
        for (let j = 1; j <= 4; j++) {
            // console.log(table.childNodes[1].childNodes[i].length);
            
            // temp.push(table.childNodes[1].childNodes[i])

        }
    }



}

divGenerator(table);



function divGenerator(table) {

    /**
     * @params Table HTML : table
     * 
     * - crée renpli un tableau HTML vide avec des td>div 
     */

    for (let i = 2; i <= 8; i = i + 2) {
        for (let j = 2; j <= 8; j = j + 2) {


            var td = document.createElement("td");


            var div = document.createElement("div");
            div.className = "div";
            div.innerHTML = " 1 ";
            div.setAttribute("contenteditable", "true");

            td.appendChild(div);

            table.childNodes[1].childNodes[i].appendChild(td);

        }
    }
}