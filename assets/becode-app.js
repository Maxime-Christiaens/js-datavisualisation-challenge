/* 
// WRITE YOUR JAVASCRIPT BELOW THIS COMMENT 

Your name : Maxime Christiaens    
Date : 14-11-18
Contact information : maxime.ad.christiaens@gmail.com

What does this script do ? 
...

*/

// Your scripting goes here...

//Node.insertBefore() : insérer avant un noeud

const table1 = document.getElementById("table1");
//id du tableau 1
const table2 = document.getElementById("table2");
//id du tableau 2
const SpawnNode = document.getElementById("Crimes_et_d.C3.A9lits_enregistr.C3.A9s_par_les_services_de_police");
//récupère la nod de la table1
const SpawnNode2 = document.getElementById("Homicides");

let h2JS = document.createElement("h2");
//créer un h2 dans le document

h2JS.innerHTML = "bonsoir";
//bonsoir va contenir le message bonsoir
h2JS.setAttribute("class", "red");

//var insertH2JS = table1Node.insertBefore(h2JS, null);

SpawnNode.appendChild(h2JS);
//insérer le h2 après le h3 
SpawnNode2.appendChild(h2JS);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////


table1TD = table1.getElementsByTagName("td");
//récupère toute les valeurs du tableaux conserver dans les élémentes td;

//console.log(table1TD);
//console.log(table1TD[0].innerHTML);
