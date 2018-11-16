/* 
// WRITE YOUR JAVASCRIPT BELOW THIS COMMENT 

Your name : Maxime Christiaens    
Date : 14-11-18 - 16-11-18
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

let divJS = document.createElement("div");
//créer un div dans le document
divJS.id = "graph1"
//créer un id attaché au divJS

//var insertH2JS = table1Node.insertBefore(divJS, null);

SpawnNode.appendChild(divJS);
//insérer le div après le h3 

//SpawnNode2.appendChild(div2JS);

table1TD = table1.getElementsByTagName("td"); //séléction tout les td
table1TH = table1.getElementsByTagName("th");
//récupère toute les valeurs du tableaux conserver dans les élémentes td;

class object {
    constructor(year, country, crimes) {
      this.year = year;
      this.country =  country;
      this.crimes = crimes;
    }
}
//permet de créer un objet

let data = [];
let stockage = null;

for (j=0; j<12; j++){
    for (i=1; i<12 ; i++){
        stockage = new object(table1TH[(i+4)].innerHTML, table1TD[(j*12)].innerHTML, table1TD[i+(12*j)].innerHTML);

        data[((j)*12)+i] = stockage;//incrémente toutes les données
        /*
        if (data.length < 385){
        data[((j)*12)+i] = stockage;//incrémente toutes les données
        }
        */
    }
}

for (let k=0; k<data.length+1; k++){
    if (data[k] == undefined ){
        data.splice(k, 1);
        //élimine en position K un élément qui a une valeur indéfini
    }
    else if (data[k].crimes == ":"){
        data.splice(k, 1);
    }
}

console.log(data);  

let svg = dimple.newSvg("#graph1", 1200, 600);//creating a SVG with given size
let chart = new dimple.chart(svg, data); // getting a Chart instance to draw on
chart.addCategoryAxis("x", "year"); // setting the x axis to show the sports
chart.addMeasureAxis("y", "crimes"); // setting the y axis to show the no. of golds own
chart.addSeries("country", dimple.plot.line); // plotting, with nationality as series.
chart.draw();//dessine la chart



