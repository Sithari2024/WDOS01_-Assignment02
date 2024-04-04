// Check if the JSON data is already stored in localStorage
const jsonData = localStorage.getItem('animalsData');

// If JSON data is not in localStorage, fetch it from the file
if (!jsonData) {
    fetch('JS & JSON/animals in sri lanka.json')
        .then(response => response.json())
        .then(data => {
            // Store the fetched JSON data in localStorage
            localStorage.setItem('animalsData', JSON.stringify(data));

            // Call the function to populate the website content
            populateWebsiteContent(data);
        })
        .catch(error => console.error('Error fetching JSON data:', error));
} else {
    // If JSON data is already in localStorage, parse and use it directly
    const data = JSON.parse(jsonData);
    populateWebsiteContent(data);
}

function populateWebsiteContent(data) {
    // Check if the .endangered_animals element exists
    const endangeredAnimalsSection = document.querySelector('.endangered_animals');
    if (!endangeredAnimalsSection) {
        console.error('Error: .endangered_animals element not found.');
        return;
    }

    // Populate introduction section
    const introSection = document.querySelector('.ani-intro');
    if (introSection) {
        const introHeading = introSection.querySelector('#intro-heading');
        const introParagraph = introSection.querySelector('#intro-paragraph');

        // Populate with data from JSON
        const introData = data.intro;
        introHeading.textContent = introData.h1;
        introParagraph.textContent = introData.p;
    }

    // Populate endangered animals section
    data.endangered_animals.forEach(animal => {
        const cardDiv = document.createElement('div');
        cardDiv.className = 'card';

        const frontDiv = document.createElement('div');
        frontDiv.className = 'img_card-front';
        const img = document.createElement('img');
        img.src = animal.img.src;
        img.alt = animal.img.alt;
        frontDiv.appendChild(img);
        const h1Front = document.createElement('h1');
        h1Front.textContent = animal.h1;
        frontDiv.appendChild(h1Front);

        const backDiv = document.createElement('div');
        backDiv.className = 'img_card-back';
        const h1Back = document.createElement('h1');
        h1Back.textContent = animal.h1;
        backDiv.appendChild(h1Back);
        const pBack = document.createElement('p');
        pBack.textContent = animal.p;
        backDiv.appendChild(pBack);

        cardDiv.appendChild(frontDiv);
        cardDiv.appendChild(backDiv);

        endangeredAnimalsSection.appendChild(cardDiv);
    });
}
