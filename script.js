/**
 * - Fonction de génération de divs. 
 * - Fonction de mise à zéro des compteurs.
 * - écouteur sur les boutons reset et calcul.
 * 
 */

var table = document.getElementById('table');

var reset = document.getElementsByName(reset);
var calcul = document.getElementsByName(calcul);


divGenerator(table);


function divGenerator(table) {



    /**
     * @params Tableau html : table
     * Crée les divs à l'intérieur du tableur 
     * 
     * - récuperer les lignes du tableau. 
     * 
     */

    for (let i = 1; i < 6; i++) {
        for (let j = 0; j < j; j++) {
            var div = document.createElement("div");
            div.className = "div";
            div.innerHTML = " 0 ";
            div.setAttribute("contenteditable", "true");
            var tRow = table.childNodes[i].children[j];
    
            tRow.appendChild(div);
        }
    }
}