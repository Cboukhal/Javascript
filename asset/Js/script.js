// document.write reste une fonction obsolére du JS
document.write("<h2>Je suis du JS externe.</h2>");
//commentaire monoligne
/*comentaire 1
commentaire 2*/
//------------------------------------les variables ------------------------------------//
document.write("<h2>Les variables</h2>");
let prenom; //déclaration de la variable prenom avec let
var nom; //déclaration de la variable prenom avec var
prenom = "Ludovic"; //affectation ou assignation
nom = "Dupont";//affectation ou assignation
document.write("Bonjour ",prenom," ",nom," bienvenue sur JS.");
let a, b, c, d;
a = 130;
b = "coucou";
c = true;
document.write("<br>La valeur de a : ",a," "," son type :", typeof(a));
document.write("<br>La valeur de b : ",b," "," son type :", typeof(b));
document.write("<br>La valeur de c : ",c," "," son type :", typeof(c));
document.write("<br>La valeur de d : ",d," "," son type :", typeof(d));

//------------------------------------les constantes ------------------------------------//
document.write("<h3>Les constantes</h3>");
const drapeauFrance = "Bleu Blanc Rouge";
document.write("la constante drapeu de la france :", drapeauFrance, "<br>");
//librairie
document.write("la constante drapeu de PI :", Math.PI, "<br>");
document.write("la constante drapeu de Epsilon :", Math.E, "<br>");

//------------------------------------nbr aléatoire ------------------------------------//
let nbr = Math.random();//nbr alétoire entre 0 et 1
let nbr2 = Math.random()*100;//nbr alétoire entre 0 et 100
document.write("Nombre aléatoire :", nbr, "<br>");
document.write("Nombre aléatoire :", nbr2, "<br>");
//les fonctions pour arrondir
document.write("Nombre aléatoire :", Math.ceil(nbr), "<br>");//arrondi sup
document.write("Nombre aléatoire :", Math.floor(nbr2), "<br>");//arrondi inf

//------------------------------------les instructions lire et écrire ------------------------------------//
// document.write("<h3>les instructions lire et écrire</h3>");
// let prenom2 = prompt("Entrez votre prenom");//récupérer la saisie de l'user
// let nom2 = prompt("Entrez votre nom");//récupérer la saisie de l'user
// confirm("confirmez votre prénom" + prenom2);//récupérer une confirmation
// alert("Bonjour " + prenom2 + " " + nom2);//envoye un message de pop-up
// document.write("Bonjour ", prenom2, " ", nom2, "<br>");//ecrire dans le html
// console.log("Bonjour" + prenom2 + " " + nom2);//ecrire sur la console

//------------------------------------les opératuers ------------------------------------//
document.write("<h2>Les opérateurs</h2>");
let nbr1,nbr3;
nbr1=20;
nbr3=10;
document.write(nbr1," + ",nbr3," = ", nbr1 + nbr3, "<br>");
document.write(nbr1," - ",nbr3," = ", nbr1 - nbr3, "<br>");
document.write(nbr1," * ",nbr3," = ", nbr1 * nbr3, "<br>");
document.write(nbr1," / ",nbr3," = ", nbr1 / nbr3, "<br>");
document.write(nbr1," % ",nbr3," = ", nbr1 % nbr3, "<br>");
document.write(nbr1," ^ ",nbr3," = ", nbr1 ** nbr3, "<br>");
nbr1++;
document.write(nbr1," incrémentation ", "<br>");
nbr3--;
document.write(nbr3," décrémentation ", "<br>");

document.write("<h3>Les opérateurs affectation</h3>");
document.write("les valeurs d'entrée de nbr1 et nbr 3 :", nbr1," ", nbr3, "<br>");
nbr1+=nbr3;//nbr1 = nbr1 + nbr3
document.write("la nouvelle valeur de nbr1 :", nbr1, "<br>");
nbr1-=nbr3;//nbr1 = nbr1 - nbr3
document.write("la nouvelle valeur de nbr1 :", nbr1, "<br>");
nbr1*=nbr3;//nbr1 = nbr1 * nbr3
document.write("la nouvelle valeur de nbr1 :", nbr1, "<br>");
nbr1/=nbr3;//nbr1 = nbr1 / nbr3
document.write("la nouvelle valeur de nbr1 :", nbr1, "<br>");
nbr1%=nbr3;//nbr1 = nbr1 % nbr3
document.write("la nouvelle valeur de nbr1 :", nbr1, "<br>");
nbr1*=nbr3;//nbr1 = nbr1 * nbr3
document.write("la nouvelle valeur de nbr1 :", nbr1, "<br>");
document.write("les valeurs de sortie de nbr1 et nbr 3 :", nbr1," ", nbr3, "<br>");

document.write("<h3>Les opérateurs tertiare</h3>");
a=100;
b=20;
document.write("les valeurs d'entrée de a et b :", a," ", b, "<br>");
document.write((a>b)? a/b : b/a);

document.write("<h2>Les conversions</h2>");
a = 8;
b = "5.9";
c = 6.3;
document.write(a, " + ", b, " = ", a + b, "<br>");
document.write(a, " + Number ", b, " = ", a + Number(b),"<br>");
document.write(a, " + ParseFloat ", b, " = ", a + parseFloat(b),"<br>");
document.write(a, " + ParseInt ", b, " = ", a + parseInt(b),"<br>");
document.write(a, " + ", c, " = ", a + c,"<br>");
document.write(a, " + parseInt ", c, " = ", a + parseInt(c),"<br>");
document.write(a," : ", typeof(a), "<br>");
document.write(c," : ", typeof(c), "<br>");
c = String(c);
document.write(c," : ", typeof(c), "<br>");

//------------------------------------les chaines de caractéres ------------------------------------//

document.write("<h2>Les chaines de caractéres</h2>");
let chaine = "le JS est un langage cool.";
document.write(chaine, "<br>");
document.write(chaine.toLowerCase(), " (toLowerCase)", "<br>");
document.write(chaine.toUpperCase(), " (toUpperCase)","<br>");
document.write(chaine.strike(), " (strike)","<br>");
document.write(chaine.bold(), " (bold)","<br>");
document.write(chaine.small(), " (small)","<br>");
document.write(chaine.fontcolor("green"), " (fontcolor)","<br>");
document.write(chaine.fontsize("2em"), " (fontsize)","<br>");
document.write(chaine.length, " (length)","<br>");

//------------------------------------les conditions ------------------------------------//
document.write("<h2>Les conditions</h2>");
e = 300;
f = 200;
if (e > f) //condition simple
    document.write(e," supérieur à ",f,"<br>");
e = 100;
if (e > f) //condition alternative
    document.write(e," supérieur à ",f,"<br>");
 else
    document.write(e," inférieur à ",f,"<br>");
// if
// {}
// else
// {}
// let moyenne = prompt("Entrer votre moyenne");
// if(moyenne < 0)
//     alert("Moyenne impossible");
// else if (moyenne < 10)
//     alert("insuffisant");
// else if (moyenne < 12)
//     alert(moyenne+" passable");
// else if (moyenne < 16)
//     alert(moyenne+" bien");
// else if (moyenne < 18)
//     alert(moyenne+" excellent");
// else if (moyenne <= 20)
//     alert(moyenne+" FELICITATION");
// else
//     alert(moyenne + " tu triches");
// if{}
// else if{}
// else{}
// let civilite = prompt("Saisissez votre civilité Mr, MMme ...");
// civilite = civilite.toLowerCase();
// switch(civilite)
// {
//     case 'mr': 
//     alert("Bonjour Monsieur");
//                 break;
//     case 'mme': 
//     alert("Bonjour Madame");
//                 break;
//     case 'mlle': 
//     alert("Bonjour Mademoiselle");
//                 break;
//     default :
//         alert("Bonjour non-genré");
// }

//------------------------------------les boucles ------------------------------------//
document.write("<h2>Les boucles</h2>");
document.write("<h3>for</h3>");

for(i = 0; i<10;i++)
{
    if(i == 6)
        break;
    document.write("i est égal au nombre de passage dans la boucle = ", i, "<br>");
}
document.write("<br>");
for(i = 10; i>=0;i--)
{
    if(i == 8 || i == 4)
        continue;
    document.write("i est égal au nombre de passage dans la boucle = ", i, "<br>");
}

document.write("<h3>for in</h3>");
let tab1 = ["Janat","Mathieu","Stanley","Armel","Anthony"];
for(let a in tab1)//parcour les indices du tableau
{
    document.write(tab1[a], "<br>");
}
document.write(a);

document.write("<h3>for of</h3>");
let tab2= new Array("Ludovic","Andrew","Anaïs","Tristan","Camil");
for(let b of tab2)//parcour les valeurs du tableau
{
    document.write(b, "<br>");
}
document.write(b);
document.write("<h3>forEach</h3>");
tab2.forEach((c, d)=>//methode de l'objet Array, prend les valeurs du tab en 1er parametre et indice en 2nd.
{
    document.write("indice : ",d," <b>Valeur</b> : ",c, "<br>");
});


document.write("<h3>while</h3>");
let n = 0;
while (n<=10) {
    document.write("Je suis le passager numéro ", n, "<br>");
    n++;
}

document.write("<h3>do while</h3>");
n = 0;
do{
    document.write("Je suis le passager numéro ", n, "<br>");
    n++;
}while(n<=10);

do{
    document.write("Je suis le passager en trop ", n, "<br>");
    n++;
}while(n<=10);

//------------------------------------les Tableaux ------------------------------------//
document.write("<h2>Tableaux</h2>");
//Déclarer de tableau.
// let tab1= [];
// let tab2= new Array();//nouvelle instance de la class Array

//parcourir un tab

for(i = 0;i < tab1.length; i++)
{
    document.write("indice : ",i," <b>Valeur</b> : ",tab1[i], "<br>");
}
document.write("<br>");
for(i = 0;i < tab2.length; i++)
{
    document.write("indice : ",i," <b>Valeur</b> : ",tab2[i], "<br>");
}
document.write("<h3>copier le tableau 2 dans le tableau 1</h3>");
//copier le tableau 2 dans le tableau 1

for(let a of tab2)
{
    let j = tab1.length;
    tab1[j]=a;
}
tab1.forEach((c, d)=>//methode de l'objet Array, prend les valeurs du tab en 1er parametre et indice en 2nd.
{
    document.write("indice : ",d," <b>Valeur</b> : ",c, "<br>");
});

//modifier le tableau 2 dans le tableau 1
document.write("<h3>modifier le tableau 2 dans le tableau 1</h3>");
tab1[3] = "Julien";
tab1[8] = "Gracia";
tab1.forEach((c, d)=>//methode de l'objet Array, prend les valeurs du tab en 1er parametre et indice en 2nd.
{
    document.write("indice : ",d," <b>Valeur</b> : ",c, "<br>");
});
//------------------------------------les méthodes de l'objet array ------------------------------------//
document.writeln("<h3>les méthodes array</h3>");
document.writeln(tab1, "<br>");
tab1.pop();//supprime le dernier élément du tableau
document.writeln(tab1, "<br>");
tab1.shift();//supprime le 1er élément
document.writeln(tab1, "<br>");
tab1.push("Camil");//ajoute 1 élément à la fin du tab
document.writeln(tab1, "<br>");
tab1.unshift("Janat");//ajoute 1 élément au début du tab
document.writeln(tab1, "<br>");
tab1.splice(2,0,"Boris","Jacques","Marie","Paulette","Jade");//ajoute des éléments à partir d'un indice ciblé du tab
document.writeln(tab1, "<br>");
tab1.splice(2,2);//supprime 2 éléments à partir d'un indice ciblé du tab
document.writeln(tab1, "<br>");

//------------------------------------les tab multi ------------------------------------//
document.writeln("<h3>les tableaux multidimensionnels</h3>");
//Déclaration et initialisation
//1er méthode
let user=[
    ["prenom","id","mdp","âge"],
    ["Janat","janat@gmail.com","1234",20],
    ["Mathieu","mathieu@yahoo.fr","abcd",35],
    ["Julien","julien@outlook.fr","1234",20],
    ["Stanley","stanley@orange.fr","5678",21],
];
document.writeln(user,"<br>");

//2nd méthode
let client1 = new Array("Ludo","ludo@gmail.com","qsdf",18);
let client2 = new Array("Andrew","andrew@gmail.com","wxcv",19);
let client3 = new Array("Anais","anais@gmail.com","qsdf",16);
let client4 = new Array("Tristan","tristan@gmail.com","azer",20);
let client5 = new Array("Camil","camil@gmail.com","1234",17);
let client = new Array(client1,client2,client3,client4,client5)
document.writeln(client,"<br>");
document.writeln("<br>");

//parcourir et afficher un tab multi
for(a of client)
{
    for(b of a)
        document.writeln(b," ")
    document.writeln("<br>")
}
for(i = 1; i < user.length; i++){
    for(j = 0; j < user[i].length; j++){
        switch (j){
            case 0 : document.writeln("<b>",user[0][0].toUpperCase(),"</b> : ", user[i][j],"<br>");
            break;
            case 1 : document.writeln("<b>",user[0][1].toUpperCase(),"</b> : ", user[i][j],"<br>");
            break;
            case 2 : document.writeln("<b>",user[0][2].toUpperCase(),"</b> : ", user[i][j],"<br>");
            break;
            default : document.writeln("<b>",user[0][3].toUpperCase(),"</b> : ", user[i][j],"<br>");
        }
    }
    document.writeln("<br>");
}

//------------------------------------les fonctions ------------------------------------//

document.writeln("<h2>Les fonctions</h2>");
//fonction sans arg ni return
function bonjour()
{
    document.writeln("<h3>Je suis une fonctions JS.</h3>");
}
//Pour exec la fonction, on l'appelle
for(i=0;i<5;i++)
{
    bonjour();
}

//fonction sans arg mais avec return
function nommer()
{
    let nom = prompt("Saisisser votre nom.");
    return nom;    
}
// nom = nommer();
document.writeln("Bonjour ",nom, "<br>");

//fonction avec arg et sans return
function comparer(a,b){
    if(a>b)
        document.writeln(a, " est supérieur à ", b, "<br>");
    else if (a == b)
        document.writeln(a, " est égal à ", b, "<br>");
    else
    document.writeln(a, " est inférieur à ", b, "<br>");
}
comparer(5,4);
comparer(2,8);
comparer(7,7);

//fonction avec arg et return
function carrer(a)
{
    return(a*a);
}
let bb = 5;
nbr = carrer(bb);
document.writeln("le carré de ",bb, " est ", nbr, "<br>");
let far = function(){
    document.writeln("<h3>Je suis une fonction anonyme</h3>");
}
far();
//------------------------------------les fonctions fléchees ------------------------------------//
//les fonctions flechees sont des fonctions anonymes
let ff = ()=>{
    document.writeln("<h3>Je suis une fonction flechee</h3>");
}
ff(); //appel à la fonction

const tablem = (a)=>{
    for(i=1;i<=12;i++){
        document.writeln(a, " x ", i, " = ",a*i,"<br>");
    }
    document.writeln("<br>");
}
n = 1;
while (n<=12) {
    tablem(n);
    n++;
}
const bienvenue = ()=>{
    prenom = prompt("Entrer votre prenom");
    nom = prompt("Entrer votre nom");
    alert("Bienvenue " + prenom + " " + nom);
}
// bienvenue();



document.writeln("<h4> client dans user </h4>")
//copier le tab clien dans user
for(let a of client)
    user.push(a);
for(i = 1; i < user.length; i++){
    for(j = 0; j < user[i].length; j++){
        switch (j){
            case 0 : document.writeln("<b>",user[0][0].toUpperCase(),"</b> : ", user[i][j],"<br>");
            break;
            case 1 : document.writeln("<b>",user[0][1].toUpperCase(),"</b> : ", user[i][j],"<br>");
            break;
            case 2 : document.writeln("<b>",user[0][2].toUpperCase(),"</b> : ", user[i][j],"<br>");
            break;
            default : document.writeln("<b>",user[0][3].toUpperCase(),"</b> : ", user[i][j],"<br>");
        }
    }
    document.writeln("<br>");
}

//------------------------------------les Exercices ------------------------------------//

document.write("<h2>Exercice</h2>");
// document.write("Ecrire un programme qui demande à l'user de sair son age et une confirmation de son age, envoie le message bienvenue si il a plus de 18ans ou accés refusé sinon et aurevoir s'il ne confirme pas son age","<br>");
// let age = prompt("Saisiser votre age");//récupérer la saisie de l'user
// let conf = confirm("Vous confirmez que vous avez bien " + age + " ans");
// (conf == true)?alert((age>=18)?"Bienvenue":"accès refusé"):alert("Aurevoir");
// document.write("Demander un programme qui demande a l'utilisateur de saisir un jour de la semaine et affiche par exemple: mardi est le 2 éme jour de la semaine.")
// let date = prompt("Saisisser une journée dans la semaine");
// jour = jour.toLowerCase();
// if(date == "lundi")
//     alert(date + " est le 1 er jour de la semaine.")
// else if(date == "mardi")
//     alert(date + " est le 2 éme jour de la semaine.")
// else if(date == "mercredi")
//     alert(date + " est le 3 éme jour de la semaine.")
// else if(date == "jeudi")
//     alert(date + " est le 4 éme jour de la semaine.")
// else if(date == "vendredi")
//     alert(date + " est le 5 éme jour de la semaine.")
// else if(date == "samedi")
//     alert(date + " est le 6 éme jour de la semaine.")
// else if(date == "dimanche")
//     alert(date + " est le 7 éme jour de la semaine.")
// else
//     alert(date + " n'est pas un jour dans la semaine.")
// document.write("Ecrire le même le programme pour les mois de l'année comme pour les jours de la semaine mais avec un switch case");
// let mois = prompt("Saisissez votre mois");
// alert(typeof(mois));
//     mois = mois.toLowerCase();
//     console.log(mois);
//     switch(mois)
//     {
//         case ('janvier'):
//             case '1':
//             alert("janvier est le 1er moi de l'année.");
//             break;
//         case ('février'):
//             case '2':
//             alert("février est le 1er moi de l'année.");
//             break;
//         case ('mars'):
//             case '3':
//             alert("mars est le 1er moi de l'année.");
//             break;
//         case ('avril'):
//             alert("avril est le 1er moi de l'année.");
//             break;
//         case ('mai'):
//             alert("mai est le 1er moi de l'année.");
//             break;
//         case ('juin'):
//             alert("juin est le 1er moi de l'année.");
//             break;
//         case ('juillet'):
//             alert("juillet est le 1er moi de l'année.");
//             break;
//         case ('aout'):
//             alert("aout est le 1er moi de l'année.");
//             break;
//         case ('septembre'):
//             alert("septembre est le 1er moi de l'année.");
//             break;
//         case ('octobre'):
//             alert("octobre est le 1er moi de l'année.");
//             break;
//         case ('novembre'):
//             alert("novembre est le 1er moi de l'année.");
//             break;
//         case ('décembre'):
//             alert("décembre est le 1er moi de l'année.");
//             break;
//         default :
//             alert(mois + " n'est un moi de l'année.");
// }
document.write("afficher les 100 premiers nombre premier","<br>");
for(i = 2; i<=100;i++){
    for(j=2;j<=i;j++)
    {
        if(i%j == 0 )
            break;
    }
    if (j == i)
       document.write(i," est un nombre premier", "<br>");
}

// document.write("Réaliser un programme du jeu du juste prix de 0 à 100","<br>");
// n = Math.ceil(Math.random()*100);
// essaye = 0
// let prix = prompt("Entrer votre prix");
// while (prix != n)
// {
//     if(prix > n){
//         alert("Le prix est plus bas");
//         essaye++;
//     }
//     else {
//         alert("Le prix est plus haut");
//         essaye++;
//     }
//     if(essaye == 3)
//     {
//         alert("Je vais t'aider");
//         if (n < 50)
//             alert("Le prix est entre 0 et 49")
//         else
//             alert("Le prix est entre 50 et 100")
//     }
//     if(essaye == 6)
//     {
//         alert("tu es null");
//         break;
//     }
//     prix = prompt("Entrer un notre prix");
// }
// if (essaye == 6 )
//     alert("tu as échoué, vous n'avez rien gagné.");
// else
//     alert("bien joué vous avez gagné","<br>");

// jours = ["lundi","mardi","mercredi","jeudi","vendredi","samedi","dimanche"];
// mois = new Array("janvier","février","mars","avril","mai","juin","juillet","aout","septembre","octobre","novembre","décembre");
// document.write("Ecrire un programme à l'utilisateur de saisir un jour entre 1 et 7 et un moi entre 1 et 12 et affiche une date sous la forme lundi 15 janvier 2025,l'année et le jj peuvent rester fixe.","<br>")
// let jj = prompt("Saisisser un jours entre 1 et 7");
// // jj = jours[jj-1];
// // jours.forEach((c,d)=>
// // {
// //         if(d == jj)
// //             jj = c
// // });
// let mj = prompt("Saisser un mois entre 1 et 12");
// // mj = mois[mj-1];
// // for (let b in mois)
// // {
// //     if (b == mj)
// //         mj = mois[b];
// // }
// document.write(jours[jj-1].toUpperCase() , " 15 " , mois[mj-1].toUpperCase()  , " 2025");
//chercher le max et le min du tab et les permuter
document.write("<br>");
let tab = [2, 18, 36, 15, 8, 9, 57, 13];
document.write(tab,"<br>");
let t = tab.length-1;
max = 0;
min = 100;
pmax = 0;
pmin = 0;

tab.forEach((c,b)=>
{
    if (max < c)
    {
        max = c;
        pmax = b;
    }
    if (min > c)
    {
        min = c;
        pmin = b;
    }
    if(b == t)
    {
        tab[pmax]=min;
        tab[pmin]=max;
    }
}
)
document.write(tab,"<br>");

//Exo 3 qui demande à l'user de saisir la taille tableau d'entier, ensuite les valeur, puis affiche le tableau ensuite fais la somme des valeurs et l'affiche ainsi que ça moyenne et l'affiche et fini par mettre toutes les notes endessous de la moyenne
// let taille = prompt("donner la taille du tableau");
// tab = [];
// somme=0;
// for(i=0;i<taille;i++)
//     {
//         tab[i]=prompt("donner une valeur à l'éléve numéro " + i);
//         somme = somme + parseInt(tab[i]);
//     }
// document.write(tab,"<br>");
// document.write("la somme de toute les valeurs est de ",somme,"<br>");
// document.write("la moyenne de toute les valeurs est de ",somme/taille,"<br>");
// for(i=0;i<taille;i++)
//     {
//         if(tab[i] < somme/taille)
//             tab[i] = "ajournée";
//     }
// document.write(tab);

//exo4:Ecrire un programme qui calcule
//Le nombre de chiffre pair dans le tableau et son pourcentage
//Le nombre de chiffre parfait dans le tableau et son pourcentage
//Le nombre de chiffre premier dans le tableau et son pourcentage
//pair 50%
//parfait 2/12
//premier 50%
document.write("<br>");
let tab4 = [2, 3, 8, 7, 12, 15, 28, 30, 17, 13, 6, 19];
let premier = 0;
let parfait = 0;
let pair = 0;
let v = true;
j = 0;
//pair
for(let a of tab4){
    if (a%2 == 0)
        pair++;
//premier
    for(i = 2; i<a;i++){
        if(a%i == 0)
            v = false;
    }
    if(v == true)
        premier++;
    v =true;
//parfait
    for(i = 1; i<a;i++){
        if(a%i == 0)
            j = j + i;
    }
    if(j==a)
        parfait++;
    j = 0;        
}
document.write("<br>");
document.write(tab4,"<br>");
document.write("Le nombre de chiffre premier est de",premier," le pourcentage est de ",premier/tab4.length*100,"%","<br>");
document.write("Le nombre de chiffre parfait est de ",parfait," le pourcentage est de ",parfait/tab4.length*100,"%","<br>");
document.write("Le nombre de chiffre pair est de ",pair," le pourcentage est de ",pair/tab4.length*100,"%","<br>");


document.writeln("Ecrire une fonction qui demande à l'user de saisir un nombre et retourne le nombre.")
document.writeln("Ecrire les fonction addition,soustraction,multiplication et division en faisant appel à la 1er fonction et affiche les résultats des opérations.")
document.writeln("Ecrire une fonction qui demande à l'user de choisir une opération et appelle la fonction correspondante ou q pour quitter.")
document.writeln("Faites appel à la derniére fonction pour répéter les opérations autant de fois que nécessaire tant l'user n'a pas saisi q.")

function nombre() {
    let a = parseInt(prompt("Choisisser un nombre."));
    return a;    
}
function addition() {
    a = nombre();
    b = nombre();
    document.writeln("<br>","Le résultat de l'addition de ",a," + ",b," = ",(a+b));
    alert("Le résultat de l'addition de "+ a + " + "+ b + " = " + (a+b));
}
function soustraction() {
    a = nombre();
    b = nombre();
    document.writeln("<br>","Le résultat de la soustraction de ",a," - ",b," = ",a-b);
    alert("Le résultat de la soustraction de "+ a + " - "+ b + " = " + (a-b));
}
function multiplication() {
    a = nombre();
    b = nombre();
    document.writeln("<br>","Le résultat de la multiplication de ",a," * ",b," = ",a*b);
    alert("Le résultat de la multiplication de "+ a + " * "+ b + " = " + (a*b));
}
function division() {
    a = nombre();
    b = nombre();
    if (b ==0)
    {
        document.writeln("<br>","division impossible");
        alert("division impossible");
    }
    else
    {
        document.writeln("<br>","Le résultat de la division de ",a," / ",b," = ",a/b);
        alert("Le résultat de la division de "+ a + " / "+ b + " = " + (a/b));
    }
}
function operation()
{
    let choix = prompt("Bonjour qu'elle opération voulez vous choisir ? (addition,soustraction,multiplication ou division)");
    while (choix !="q") 
    {
        if(choix == "addition")
            addition();
        if(choix == "soustraction")
            soustraction();
        if(choix == "multiplication")
            multiplication();
        if(choix == "division")
            division();
        choix = prompt("Qu'elle opération voulez vous choisir ? (addition,soustraction,multiplication ou division) ou vous pouvez quitter en envoyant q");
    }
    return (true);
}

// let ope;
// do{
//     ope = operation();
// }while(ope!=true);
document.writeln("Réaliser le programme de l'eval algo exo 6")

function affiche_employes(tab)
{
    for(i=0;i<tab.length;i++)
    {
       document.writeln(tab[i]);
       alert(tab[i]); 
    }
}

function ajouter_employes(tab)
{
    i = tab.length;
    prenom=prompt("Saisisser un prénom.");
    nom=prompt("Saisisser un nom.");
    adresse=prompt("Saisisser une adresse.");
    telephone=prompt("Saisisser un téléphone.");
    annee=prompt("Saisisser une année embauche.");
    salaire=prompt("Saisisser une salaire.");   
    tab[i] = [prenom, nom, adresse, telephone, annee, salaire];
    return (tab);
}

function changer_salaire(tab)
{
telephone=prompt("Saisisser un téléphone.");
salaire = 0;
for(i = 0;i<tab.length;i++)
{
    if (tab[i][3] == telephone)
    {
     salaire=prompt("quelle sera son nouveau salaire ?");
     tab[i][5] = salaire; 
    }
}
if (salaire == 0) {
    alert("je ne l'ai pas trouvé");
}
return (tab);
}


function annee_employes(tab)
{
    annee = prompt("Quelle année cherchez vous, je vous afficherez tous les employé embauché cette année-ci");
    employe = 0;
    for(i=0;i<tab.length;i++)
    {
        if (tab[i][4] == annee)
        {
            alert(tab[i][1] + tab[i][0] + " a été employé en " + annee);
            employe++;
        }
    }
    if(employe == 0)
        alert("personne n'a été employé cette anné-ci");
}



function n_ajouter_employes(tab)
{
    n = parseInt(prompt("Combien d'employés voulez vous ajouter ?"));
    i = tab.length - 1;
    n = n + i;
    for(j = i+1;j<=n;j++)
    {
        tab[j] = [];
        prenom=prompt("Saisisser un prénom.");
        tab[j][0] = prenom;
        nom=prompt("Saisisser un nom.");
        tab[j][1] = nom;
        adresse=prompt("Saisisser une adresse.");
        tab[j][2] = adresse;
        telephone=prompt("Saisisser une téléphone.");
        tab[j][3] = telephone;
        annee=prompt("Saisisser une année embauche.");
        tab[j][4] = annee;
        salaire=prompt("Saisisser un salaire.");   
        tab[j][5] = salaire;
    }
    return (tab);
}


// tab = [];
// let arret = false;
// i = 0;
// n = prompt("Bonjour entrer le nombre d'employé");
// for(i=0;i<n;i++)
// {
//     tab[i] = [];
//     for(j=0;j<6;j++)
//     {
//         if(j == 0)
//             tab[i][j]=prompt("Saisisser un prénom.");
//         if(j == 1)
//             tab[i][j]=prompt("Saisisser un nom.");
//         if(j == 2)
//             tab[i][j]=prompt("Saisisser une adresse.");
//         if(j == 3)
//             tab[i][j]=prompt("Saisisser un téléphone.");
//         if(j == 4)
//             tab[i][j]=prompt("Saisisser une année d'embauche.");
//         if(j == 5)
//             tab[i][j]=prompt("Saisisser un salaire.");
//     }
// }
// while(arret == false)
// {
//     alert("Vous pouvez affiche la liste de tous les employés ");
//     alert("Vous pouvez ajouter un employé.");
//     alert("Vous pouvez changer le salaire d’un employé.");
//     alert("Vous pouvez affiche tous les employé embauchés la même année.");
//     alert("Vous pouvez saisir le nombre d’employés à ajouter et qu’il puisse rentrer leurs informations un à un.");
//     let reponse = prompt("Que voulez vous faire ?(afficher)(ajouter)(changer_le_salaire)(année)(ajouter_n)");
// switch (reponse)
// {
//     case 'afficher':affiche_employes(tab);
//         break;
//     case 'ajouter':tab = ajouter_employes(tab);
//         break;
//     case 'changer_le_salaire':tab = changer_salaire(tab);
//         break;
//     case 'année':annee_employes(tab);
//         break;
//     case 'ajouter_n':tab = n_ajouter_employes(tab);
//         break;
//     default: alert("Je n'ai pas compris reéssayer plus tard");
// }
// arret = confirm("Voulez vous arrêter ?");
// }

// document.writeln("<br>Ecrire un programme qui permet d'ajouter un user à la fin du tableau users si son id n'existe pas déjà dans le tableau<br>")
// for(i = 1; i < user.length; i++){
//     for(j = 0; j < user[i].length; j++){
//         switch (j){
//             case 0 : document.writeln("<b>",user[0][0].toUpperCase(),"</b> : ", user[i][j],"<br>");
//             break;
//             case 1 : document.writeln("<b>",user[0][1].toUpperCase(),"</b> : ", user[i][j],"<br>");
//             break;
//             case 2 : document.writeln("<b>",user[0][2].toUpperCase(),"</b> : ", user[i][j],"<br>");
//             break;
//             default : document.writeln("<b>",user[0][3].toUpperCase(),"</b> : ", user[i][j],"<br>");
//         }
//     }
//     document.writeln("<br>");
// }
// let id = prompt("Entrez votre id");
// let existe = false;
// let new_user;
// let mdp;
// let age;
// for(i = 1; i < user.length; i++)
// {
//     if(user[i][1] == id)
//     {
//         existe = true;
//         break;
//     }
// }
// if(existe == true)
//     alert("Votre id existe déjà bienvenu");
// else
// {
//     alert("Votre id n'existe pas");
//     new_user= prompt("Entrez votre Prenom");
//     mdp= prompt("Entrez votre mot de passe");
//     age= prompt("Entrez votre age");
//     alert("L'user a été ajouter.")
//     let tab_user = [new_user,id,mdp,age];
//     user.push(tab_user);
//     for(i = 1; i < user.length; i++){
//     for(j = 0; j < user[i].length; j++){
//         switch (j){
//             case 0 : document.writeln("<b>",user[0][0].toUpperCase(),"</b> : ", user[i][j],"<br>");
//             break;
//             case 1 : document.writeln("<b>",user[0][1].toUpperCase(),"</b> : ", user[i][j],"<br>");
//             break;
//             case 2 : document.writeln("<b>",user[0][2].toUpperCase(),"</b> : ", user[i][j],"<br>");
//             break;
//             default : document.writeln("<b>",user[0][3].toUpperCase(),"</b> : ", user[i][j],"<br>");
//         }
//     }
//     document.writeln("<br>");
// }
// }
document.writeln("<br>Ecrire un programme qui permet de supprimer un user à l'aide de son id  dans le tableau<br>");
// let id = prompt("Entrez l'id à supprimer");
// let existe = false;
// let position;
// for(i = 1; i < user.length; i++)
// {
//     if(user[i][1] == id)
//     {
//         let conf = confirm("voulez-vous supprimer cet user " + user[i][1]);
//         if (conf == true){
//             existe = true;
//             position = i;
//             alert("L'user sera supprimer");
//         }
//         break;
//     }
// }
// if (existe == false)
//     alert("L'id n'existe pas");
// else
//     user.splice(position,1);
// for(i = 1; i < user.length; i++){
//     for(j = 0; j < user[i].length; j++){
//         switch (j){
//             case 0 : document.writeln("<b>",user[0][0].toUpperCase(),"</b> : ", user[i][j],"<br>");
//             break;
//             case 1 : document.writeln("<b>",user[0][1].toUpperCase(),"</b> : ", user[i][j],"<br>");
//             break;
//             case 2 : document.writeln("<b>",user[0][2].toUpperCase(),"</b> : ", user[i][j],"<br>");
//             break;
//             default : document.writeln("<b>",user[0][3].toUpperCase(),"</b> : ", user[i][j],"<br>");
//         }
//     }
//     document.writeln("<br>");
// }
document.writeln("<br>Ecrire un programme pour la connexion, affiche la connexion réussie si l'id existe et que le mpd correspond sinon affiche  l'id ou mpd incorrect.<br>");
// let id = prompt("Entrez votre id");
// let existe = false;
// for(i = 1; i < user.length; i++)
// {
//     if(user[i][1] == id)
//     {
//         existe = true;
//         id = prompt("Bienvenue user " + user[i][0] + " entrer votre mot de passe");
//         for(j = 1; i < user.length; i++)
//         {
//             if(user[i][2] == id)
//             {
//                 alert("Bienvenu, connexion réussie.");
//                 break;
//             }
//             else
//             alert("Votre mdp incorrect veuillez reessayer plus tard.");
//         }
//         break;
//     }
// }
// if(existe == false)
//     alert("Votre id est incorrect veuillez reessayer plus tard.");

document.writeln("<br>Ecrire un programme pour modifier le mdp d'un user à l'aide de son id, si l'id ou le mdp ne sont pas conforme on le modifie pas. Si le nouveaux mdp est identique à l'ancien aussi on ne modifie pas.<br>");
// let id = prompt("Entrez votre id");
// let existe = false;
// let conf = false;
// for(i = 1; i < user.length; i++)
// {
//     if(user[i][1] == id)
//     {
//         existe = true;
//         id = prompt("Bienvenue user " + user[i][0] + " entrer votre mot de passe");
//         for(j = 1; i < user.length; i++)
//         {
//             if(user[i][2] == id)
//                 alert("Bienvenu, connexion réussie.");
//             else
//             alert("Votre mdp incorrect veuillez reessayer plus tard.");
//         }
//         break;
//     }
// }
// if(existe == false)
//     alert("Votre id est incorrect veuillez reessayer plus tard.");
// else
//     conf = confirm("voulez-vous changer votre mot de passe ");
// if(conf == true)
//     new_mdp = prompt("Entrer votre nouveau mot de passe");
// if(new_mdp != id)
//     user.splice(i,0,new_mdp);
// else
//     alert("Le nouveaux mdp est identique à l'ancien");
// document.writeln(user[i]);

document.writeln("<br>Ecrire un programme qui cherche et affiche toutes les info de l'user le plus agé, le moins agé et celui dont l'âge est le plus ploche de la moyenne.<br>");
max = 0;
pmax = 0;
min = user[1][3];
pmin = 0;
moyenne = 0;
for(i=1;i<user.length;i++)
{
    if(max<user[i][3])
    {
        max = parseInt(user[i][3]);
        pmax = i;
    }
    if(min>user[i][3])
    {
        min = parseInt(user[i][3]);
        pmin = i;
    }
    moyenne = moyenne + parseInt(user[i][3]);
}
for(i = 1; i < user.length; i++){
    if (i == pmax || i == pmin || user[i][3]==Math.ceil(moyenne/(user.length-1)) || user[i][3]==Math.floor(moyenne/(user.length-1))){
        for(j = 0; j < user[i].length; j++){
        switch (j){
            case 0 : document.writeln("<b>",user[0][0].toUpperCase(),"</b> : ", user[i][j],"<br>");
            break;
            case 1 : document.writeln("<b>",user[0][1].toUpperCase(),"</b> : ", user[i][j],"<br>");
            break;
            case 2 : document.writeln("<b>",user[0][2].toUpperCase(),"</b> : ", user[i][j],"<br>");
            break;
            default : document.writeln("<b>",user[0][3].toUpperCase(),"</b> : ", user[i][j],"<br>");
        }
    }  
    }
    document.writeln("<br>");
}
