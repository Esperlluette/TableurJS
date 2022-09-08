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
    getAllValue(table)


    for (let i = 2; i < table.length*2; i++) {
        for (let j = 2; j < table.length*2; j++) {

        }
    }

}


function getAllValue(table) {
    /**
     * @params Table HTML : table
     * @return Array : values
     * 
     * - récupère toutes les valeurs du tableau pour les retourner dans une liste.
     */


    

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