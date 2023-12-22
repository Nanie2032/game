const prompt = require("prompt-sync")();

// Quelque Données 
let carte = ["Feu", "plante", "eau"];
let countPlayer = 0;
let countOrdi = 0;


// Le Menu du jeu 
function menu() {
    console.log("");
    console.log("");
    console.log();
    console.log("                                         |-_____________________-|");
    console.log("                                         |     JEU DE CARTES     |");
    console.log("                                         |                       |");
    console.log("                                         |       1- JOUER        |");
    console.log("                                         |       2- AIDE         |");
    console.log("                                         |       3- QUITTER      |");
    console.log("                                         |                       |");
    console.log("                                         |-_____________________-|");
    console.log("");
    console.log("");
}

// Un petit remarque 
function tuto() {
    console.log("");
    console.log("");
    console.log("                            |-_________________-|");
    console.log("                            |      TAPEZ :      |");
    console.log("                            |   '1' POUR FEU    |");
    console.log("                            |   '2' POUR PLANTE |");
    console.log("                            |   '3' POUR EAU    |");
    console.log("                            |-_________________-|");
    console.log("");
    console.log("");
    console.log("");
}

// Une petite aide de comprehenson du jeu
function howToplay() {
    console.log("Il y a 3 manches");
    console.log("Battre votre adversaire en utilisant 3 cartes \nFeu / Plante / eau");
    console.log("Le Feu élimine la Plante \nLa Plante élimine l'Eau \nL'eau élimine le Feu");
}

// Le choix De l'adversaire qui est un ordi
function randomCarte(array) {
    const random = array[Math.floor(Math.random() * array.length)];
    return random;
}

// Le choix Du joueur 
function choix(first, second, third) {
    const saisir = +prompt("       Choisissez votre carte : ");

    if (saisir == 1) {
        return first;
    }

    if (saisir == 2) {
        return second;
    }

    if (saisir == 3) {
        return third;
    }
}

// Quelque condition 
function condition(player, ordi) { 

    if (player != ordi) {
        if ((player == "Feu" && ordi == "plante") || (player == "plante" && ordi == "eau") || (player == "eau" && ordi == "Feu")) {
            console.log("Manche Gagné");
            countPlayer++;
            console.log("Vos points : "+countPlayer);
            console.log("Points adverses : "+countOrdi);
        } else if ((player == "Feu" && ordi == "eau") || (player == "plante" && ordi == "Feu") || (player == "eau" && ordi == "plante")) {
            console.log("Manche Perdu");
            countOrdi++;
            console.log("Vos points : "+countPlayer);
            console.log("Points adverses : "+countOrdi);
        }
    } 

    if (player == ordi) {
        console.log(" = > Egalité");
        console.log("Vos points : "+countPlayer);
        console.log("Points adverses : "+countOrdi);

    }
}

// Le deroulement des 3 manches
function manches() {
    for (let index = 1; index <= 3; index++) {
        console.log("                            ");
        
        console.log("                    ");
        const joueur = choix("Feu", "plante", "eau");
        const robot = randomCarte(carte);

        console.log("Votre carte   : "+joueur);
        console.log("Carte adverse : "+robot);

        condition(joueur, robot);
    }
}

// Commencer Le jeu et assemblage des fonctions 
function commencer() {
    menu();

    for (let i = 1; i > 0; i++) {
        let choise = +prompt("Votre choix : ");

        if (choise == 1) {
            tuto();
            manches();
            end();

        }

        if (choise == 2) {
            howToplay();
        }

        if (choise == 3) {
            console.log("Merci et à bientot pour une autre partie");
            break;
        }
    }
}
commencer();
function end(){
    let ask = prompt("Rejouer ('1' pour oui/'2' pour non) ? ");
    if (ask=="1") {
        commencer();
    }
    else if (ask=="2"){
        console.log("Merci et à bientot pour une autre partie");
        menu();
    }
    else {
        console.log('Réponse invalide.');
        end();
    };
};
