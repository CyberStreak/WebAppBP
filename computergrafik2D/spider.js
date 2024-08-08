// Canvas holen & 2D-Zeichenkontext
const canvas = document.getElementById('spider');
const ktx = canvas.getContext('2d');

// Array um Punkte zu speichern
const points = [];

// Funktion zum Zentrieren des Canvas
function centerCanvas() {
    // Bestimmung von Breite und Höhe des Fensters
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    // Absolute positionierung für den Canvas
    canvas.style.position = 'absolute';
    // Berechnung um den Canvas mittig zu positionieren
    canvas.style.left = `${(windowWidth - canvas.width) / 2}px`;
    canvas.style.top = `${(windowHeight - canvas.height) / 2}px`;
}

// Funktion um Punkte zu generieren
function generatePoints() {
    // Das Array leeren für neue Punkte
    points.length = 0;
    // Generieren von random Punkten
    for (let i = 0; i < 500; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        points.push({ x, y });
    }
    // Punkte zeichnen
    drawPoints();
}

// Funktion um Punkte zu zeichnen
function drawPoints() {
    // Inhalt auf dem Canvas löschen
    ktx.clearRect(0, 0, canvas.width, canvas.height);
    // Durch das Array iterieren
    points.forEach(point => {
        // Neuer Pfad für den Punkt
        ktx.beginPath();
        // Kreis (Punkt) an der Position zeichnen
        ktx.arc(point.x, point.y, 2, 0, Math.PI * 2);
        // Farbe
        ktx.fillStyle = 'blue';
        // Kreis auffüllen
        ktx.fill();
    });
}

// Funktion für das Highlighten
function highlightPoints(mouseX, mouseY, distance) {
    // Canvas leeren
    ktx.clearRect(0, 0, canvas.width, canvas.height);
    // Durch die Punkte iterieren
    points.forEach(point => {
        // Distanz zwischen Mauszeiger und Punkt
        const dist = Math.hypot(mouseX - point.x, mouseY - point.y);
        // Überprüfung des festgelegten Radius für das Highlighten
        if (dist <= distance) {
            // Neuer Pfad für die Linien
            ktx.beginPath();
            // Linien vom Mauszeiger zum Punkt
            ktx.moveTo(mouseX, mouseY);
            ktx.lineTo(point.x, point.y);
            // Farbe der Linien
            ktx.strokeStyle = 'red';
            // Zeichnen der Linien
            ktx.stroke();
        }
        else {
            // Wenn Distanz zu gross, Punkt zeichnen
            ktx.beginPath();
            ktx.arc(point.x, point.y, 2, 0, Math.PI * 2);
            // Farbe für den Punkt
            ktx.fillStyle = 'blue';
            // Kreis auffüllen
            ktx.fill();
        }
    });
}

// Funktion für die Mausbewegung
function init() {
    // Breite und Höhe des Canvas
    canvas.width = 750;
    canvas.height = 750;
    // Zentriere den Canvas beim Laden
    centerCanvas();
    // Zentriere den Canvas bei Änderungen der Fenstergröße
    window.addEventListener('resize', centerCanvas);
    // Generieren von Punkten
    generatePoints();

    canvas.addEventListener('mousemove', function(event) {
        // Mausposition relativ zum Canvas
        const rect = canvas.getBoundingClientRect();
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;
        // Highlighten der Punkte
        highlightPoints(mouseX, mouseY, 50);
    });

    // Generiere alle 5 Sekunden neue Punkte
    setInterval(generatePoints, 5000);
}

init();
