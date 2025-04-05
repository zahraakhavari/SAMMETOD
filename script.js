// Hämtar alla dragbara element
const draggableItems = document.querySelectorAll('.draggable');

// Hämtar alla dropzoner (tabellceller där begreppen kan släppas)
const dropzones = document.querySelectorAll('.dropzone');

// Lägg till event listeners för varje dragbar element
draggableItems.forEach(item => {
    item.addEventListener('dragstart', dragStart);
    item.addEventListener('dragend', dragEnd);
});

// Lägg till event listeners för varje dropzone (tabellcell)
dropzones.forEach(zone => {
    zone.addEventListener('dragover', dragOver);
    zone.addEventListener('dragenter', dragEnter);
    zone.addEventListener('dragleave', dragLeave);
    zone.addEventListener('drop', drop);
});

// Hanterar när dragning startar
function dragStart(e) {
    this.classList.add('dragging');
}

// Hanterar när dragning slutar
function dragEnd(e) {
    this.classList.remove('dragging');
}

// Hanterar när något dras över en dropzone
function dragOver(e) {
    e.preventDefault(); // Viktigt för att tillåta drop
}

// Hanterar när ett objekt dras in i en dropzone
function dragEnter(e) {
    e.preventDefault(); // Tillåter drop
    this.style.backgroundColor = '#d3f3d3'; // Markera dropzonen
}

// Hanterar när dragningen lämnar en dropzone
function dragLeave(e) {
    this.style.backgroundColor = '#e9e9e9'; // Återställ dropzonen
}

// Hanterar när objektet släpps i en dropzone
function drop(e) {
    e.preventDefault(); // Förhindrar standardbeteendet (t.ex. öppna en länk)

    const draggingItem = document.querySelector('.dragging'); // Hämtar det dragna objektet
    this.appendChild(draggingItem); // Lägg till det dragna objektet i dropzonen (tabellcell)

    // Återställ bakgrundsfärg på dropzonen
    this.style.backgroundColor = '#e9e9e9';
}
