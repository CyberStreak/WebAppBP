const toggleButton = document.querySelector("#toggleButton");
const toggleArea = document.querySelector('.toggleArea');

toggleButton.addEventListener('click', toggle);

function toggle(event) {
    console.log(event);

    if (toggleArea.style.display === 'none') {
        toggleArea.style.display = 'block';
        toggleButton.innerHTML = "Tabelle ausblenden";
    } else {
        toggleArea.style.display = 'none';
        toggleButton.innerHTML = 'Tabelle anzeigen';
    }
}