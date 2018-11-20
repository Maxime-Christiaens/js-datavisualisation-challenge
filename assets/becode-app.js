/* 
// WRITE YOUR JAVASCRIPT BELOW THIS COMMENT 

Your name : Maxime Christiaens    
Date : 14-11-18 - 16-11-18
Contact information : maxime.ad.christiaens@gmail.com

What does this script do ? 
It draw graph from the information of the tables
*/

///////////
///EXO 1///
///////////

function CreateDiv() {

    ///////////////////////////////////////
    ///A.Création d'une div dans le HTML///
    ///////////////////////////////////////

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

    let divJS2 = document.createElement("div");
    //créer un div dans le document
    divJS2.id = "graph2"
    //créer un id attaché au divJS2

    SpawnNode.appendChild(divJS);
    //insérer le div après le h3 
    SpawnNode2.appendChild(divJS2);
    //insérer le div après le h3 

}
CreateDiv();

function draw() {

    ///////////////////////////////////////////////////
    ///B1.Récupération des informations du tableau 1///
    ///////////////////////////////////////////////////

    ///1. Récupérer l'info\\\

    table1TD = table1.getElementsByTagName("td"); //séléction tout les td
    table1TH = table1.getElementsByTagName("th");
    //récupère toute les valeurs du tableaux conserver dans les élémentes td;

    ///2. Récupérateur d'info\\\

    class object {
        constructor(year, country, crimes) {
            this.year = year;
            this.country = country;
            this.crimes = crimes;
        }
    }
    //permet de créer un objet qui contiendra l'année, le pays et le nombres de crimes

    ///3. Boucle récupérant l'info\\\

    let data = [];
    //stockera toute les données
    let stockage = null;
    //contiendra chaque objet
    let compte = 0;
    //un compte pour connaitre le nombre d'objet non stocké dans data
    let NbrOfCountry = 35;
    //nombre de pays dans la liste 
    //A récupérer automatiquement
    let TDtable1 = 12;
    //nombre de td (cellule) par ligne (tr) dans la tableau 
    //A récupérer automatiquement

    for (j = 0; j < NbrOfCountry; j++) {//la deuxième bouche parcours chaque ligne permettant d'obtenir l'info pour chaque pays
        for (i = 1; i < TDtable1; i++) {//la première boucle parcours une ligne du talbeau pour en récupérer l'info sur les 10 ans de crimes
            stockage = new object(table1TH[(i + 4)].innerHTML, table1TD[(j * TDtable1)].innerHTML, table1TD[i + (TDtable1 * j)].innerHTML);
            if (stockage == undefined) {
                compte += 1;//si pas de valeur rien n'est incrémenter
            }
            else if (stockage.crimes == ":") {
                stockage.crimes = 0;//transforma la valeur : en 0 pour que dimpleJS puisse créer le graph sinon bug de dimpleJS
                data[((j) * TDtable1) + i] = stockage;//incrémente toutes les données
            }
            else {
                data[((j) * TDtable1) + i] = stockage;//incrémente toutes les données
            }
        }
    }

    data.shift();
    //retire une donnée vide présente en position zéro du tableau
    for (k = 1; k < data.length; k++) {
        if (data[k] == null) {
            data.splice(k, 1);
        }

    }
    //retire les valeurs null

    ////////////////////////////
    ///C1.Création du graph 1///
    ////////////////////////////


    let svg = dimple.newSvg("#graph1", 1200, 600);//creating a SVG with given size
    let chart = new dimple.chart(svg, data); // getting a Chart instance to draw on
    chart.addCategoryAxis("x", "year"); // setting the x axis to show the sports
    chart.addMeasureAxis("y", "crimes"); // setting the y axis to show the no. of golds own
    chart.addSeries("country", dimple.plot.line); // plotting, with nationality as series.
    let chartS = chart.addSeries("country", dimple.plot.bubble);//créer des bubbles
    chart.addLegend(750, 60, 200, 600); //ajoute une légende les deux premières valeurs modifie la position en x et y respéctivement
    //quand au deux autres valeurs elle définisse la taille de la légende sur un axe x et y respéctivement
    chart.draw();//dessine la chart


    ///////////////////////////////////////////////////
    ///B2.Récupération des informations du tableau 1///
    ///////////////////////////////////////////////////

    ///1. Récupérer l'info\\\

    table2TD = table2.getElementsByTagName("td"); //séléction tout les td
    table2TH = table2.getElementsByTagName("th");
    //récupère toute les valeurs du tableaux conserver dans les élémentes td;

    ///2. Récupérateur d'info\\\
    //déjà créer au plus au au point B1.2.

    ///3. Boucle récupérant l'info\\\

    let data2 = [];
    //stockera toute les données
    let stockage2 = null;
    //contiendra chaque objet
    let compte2 = 0;
    //un compte2 pour connaitre le nombre d'objet non stocké dans data2
    let NbrOfCountry2 = 30;
    //nombre de pays dans la liste 
    //A récupérer automatiquement
    let TDtable2 = 3;
    //nombre de td (cellule) par ligne (tr) dans la tableau 
    //A récupérer automatiquement


    for (j = 0; j < NbrOfCountry2; j++) {//la deuxième bouche parcours chaque ligne permettant d'obtenir l'info pour chaque pays
        for (i = 1; i < TDtable2; i++) {//la première boucle parcours une ligne du talbeau pour en récupérer l'info sur les 10 ans de crimes
            stockage2 = new object(table2TH[(i + 1)].innerHTML, table2TD[(j * TDtable2)].innerHTML, table2TD[i + (TDtable2 * j)].innerHTML);
            if (stockage2 == undefined) {
                compte2 += 1;//si pas de valeur rien n'est incrémenter
            }
            else if (stockage2.crimes == ":") {
                stockage2.crimes = 0;//transforma la valeur : en 0 pour que dimpleJS puisse créer le graph sinon bug de dimpleJS
                data2[((j) * TDtable2) + i] = stockage2;//incrémente toutes les données
            }
            else {
                console.log(stockage2.country.length + stockage2.country);
                if (stockage2.country.length == 55) {
                    stockage2.country = "Angleterre et Pays de Galles(UK)";
                    data2[((j) * TDtable2) + i] = stockage2;//incrémente toutes les données
                }
                data2[((j) * TDtable2) + i] = stockage2;//incrémente toutes les données
                console.log(stockage2);
            }
        }
    }

    data2.shift();
    //retire une donnée vide présente en position zéro du tableau
    for (k = 1; k < data2.length; k++) {
        if (data2[k] == null) {
            data2.splice(k, 1);
        }

    }
    console.log(data2);

    //retire les valeurs null

    ////////////////////////////
    ///C2.Création du graph 1///
    ////////////////////////////


    let svg2 = dimple.newSvg("#graph2", 2400, 500);//creating a SVG with given size
    let chart2 = new dimple.chart(svg2, data2); // getting a Chart instance to draw on
    chart2.addCategoryAxis("x", "year"); // setting the x axis to show the sports
    chart2.addMeasureAxis("y", "crimes"); // setting the y axis to show the no. of golds own
    chart2.addSeries("country", dimple.plot.line); // plotting, with nationality as series.
    let chart2S = chart2.addSeries("country", dimple.plot.bubble);//créer des bubbles
    chart2.addLegend(750, 30, 200, 600); //ajoute une légende les deux premières valeurs modifie la position en x et y respéctivement
    //quand au deux autres valeurs elle définisse la taille de la légende sur un axe x et y respéctivement
    chart2.draw();//dessine la chart2
};
//FIN EXO1\\

//draw();

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////
///EXO 2///
///////////


    ///////////////////////////////////////
    ///A.Création d'une div dans le HTML///
    ///////////////////////////////////////

    const heading = document.getElementById("firstHeading");
    //id du tableau 1

    let ruben = document.createElement("div");
    //créer un div dans le document
    ruben.id = "graph3"
    //créer un id attaché au divJS

    heading.appendChild(ruben);
    //insérer le div après le h3 


let data3 = [];

let svg3 = dimple.newSvg("#graph3", 800, 500);//creating a SVG with given size
let chart3 = new dimple.chart(svg3, data3); // getting a Chart instance to draw on
chart3.addCategoryAxis("x", "x"); // setting the x axis to show the sports
chart3.addMeasureAxis("y", "y"); // setting the y axis to show the no. of golds own
chart3.addSeries("bonsoir", dimple.plot.line); // plotting, with nationality as series.
//quand au deux autres valeurs elle définisse la taille de la légende sur un axe x et y respéctivement

function dab() {
    let xhr = new XMLHttpRequest; //requête http
    xhr.open("GET", "https://inside.becode.org/api/v1/data/random.json", true);//open l'url
    xhr.onload = function () {//charge le contenu
        console.log(this.response);//this représente tout ce qui a été open, le point response récupère juste les données
        let ajaj = JSON.parse(this.responseText);
        for (let s = 0; s < ajaj.length; s++) {
            data3.push({
                "x": ajaj[s][0],
                "y": ajaj[s][1],
                "bonsoir": "bonsoir",
            })
        }
        chart3.draw();//dessine la chart3
    }
    xhr.send();//send
};
setInterval(dab, 1000);
