const canvas = document.getElementById('myLife');
const ctx = canvas.getContext('2d');

const weeksPerYear = 52;
const totalYears = 90;

const canvasWidth = canvas.width;
const canvasHeight = canvas.height;

const weekWidth = canvasWidth / weeksPerYear;
const yearHeight = canvasHeight / totalYears;

const lifeData = [
    {period: 'Kindheit & Grundschule', startYear: 0, endYear: 15},
    {period: 'Lehre', startYear: 16, endYear: 20},
    {period: 'BM Berufsbegleitend', startYear: 21, endYear: 22},
    {period: 'Arbeit', startYear: 23, endYear: 26},
    {period: 'Bachelor', startYear: 27, endYear: 30},
    {period: 'Arbeit', startYear: 31, endYear: 55},
    {period: 'Genusszeit', startYear: 56, endYear: 90},
];

function drawWeeks() {
    ctx.fillStyle = 'blue';
    for (let year = 0; year < totalYears; year++) {
        for (let week = 0; week < weeksPerYear; week++) {
            const x = (week * weekWidth) + 12;
            const y = (year * yearHeight) + 4;
            ctx.beginPath();
            ctx.arc(x, y, 2, 0, Math.PI * 2);
            ctx.fill();
            ctx.closePath();
        }
    }
}

function drawAxesLabels() {
    ctx.fillStyle = 'black';
    ctx.font = 'bold 16px Arial';

    // Beschriftung der vertikalen Achse (Jahre)
    for (let year = 0; year <= totalYears; year += 10) {
        const y = year * yearHeight;
        ctx.fillText((year + 1).toString(), 2, y + 10);
    }

    // Beschriftung der horizontalen Achse (Wochen)
    for (let week = 0; week <= weeksPerYear; week += 4) {
        const x = week * weekWidth;
        ctx.fillText((week + 1).toString(), x, canvasHeight - 2);
    }
}

function draw() {
    drawWeeks();
    drawAxesLabels();
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

canvas.addEventListener('mousemove', function(event) {
    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    checkHoveredPeriod(mouseX, mouseY);
});

function checkHoveredPeriod(mouseX, mouseY) {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    draw();

    lifeData.forEach(data => {
        const startY = data.startYear * yearHeight;
        const endY = (data.endYear + 1) * yearHeight;

        if (mouseX >= 0 && mouseX <= canvasWidth && mouseY >= startY && mouseY <= endY) {
            ctx.fillStyle = getRandomColor();
            ctx.fillRect(0, startY, canvasWidth, endY - startY);

            // Punkte durch das rectangle
            draw();

            const text = data.period;
            const textWidth = ctx.measureText(text).width; // Breite des Texts
            const textX = (canvasWidth - textWidth) / 2; // X-Position des Texts
            const textY = startY + (endY - startY) / 2 + 8; // Y-Position des Texts

            // Hintergrund Periode
            ctx.fillStyle = "purple";
            ctx.fillRect(textX - 5, textY - 20, textWidth + 10, 30);

            // Text
            ctx.fillStyle = 'white';
            ctx.font = 'bold 16px Arial';
            ctx.fillText(text, textX, textY);
        }
    });
}

draw();