// Function to update text content dynamically
function updateContent(value, id) {
    const element = document.getElementById(id);
    if (element) {
        element.innerHTML = value;
    } else {
        console.error('Element with id:', id, 'not found.');
    }
}

// Fetch JSON data and update HTML content
fetch('JS & JSON/index.json')
    .then(response => response.json())
    .then(data => {
        // Store the fetched JSON data in localStorage
        localStorage.setItem('animalData', JSON.stringify(data));

        // Update the introduction section
        updateContent(data['ani-introduction'].title, "ani-intro-title");
        updateContent(data['ani-introduction'].content, "ani-intro-content");

        // Update the endangered animals section
        data.endangered_animals.forEach((animal, index) => {
            updateContent(animal.name, `endangered_animal_${index}_title`);
            updateContent(animal.description, `endangered_animal_${index}_content`);
        });
    })
    .catch(error => {
        console.error('Error fetching or parsing data:', error);
    });
