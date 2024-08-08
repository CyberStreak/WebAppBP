// Tabelle aufrufen 
const tdElemente = document.querySelectorAll('#table2 td');

// Anzahl der td Elemente
const count = Math.floor(tdElemente.length / 2);

// Neuen container kreiren
const container = document.createElement("div");

// Anzahl der Arbeitsstellen
container.innerHTML = "Ich habe für " + count + " Firmen gearbeitet.";

// Einfügen des containers unter der Tabelle
const table2 = document.getElementById("table2");
table2.parentNode.insertBefore(container, table2.nextSibling);