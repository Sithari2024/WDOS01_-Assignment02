// Check if the JSON data is already stored in localStorage
const jsonData = localStorage.getItem('wilpattuData');

// If JSON data is not in localStorage, fetch it from the file
if (!jsonData) {
    fetch('JS & JSON/wilpattu-JSON.json')
        .then(response => response.json())
        .then(data => {
            // Store the fetched JSON data in localStorage
            localStorage.setItem('wilpattuData', JSON.stringify(data));

            // Call the function to populate the website content
            LoadContent(data);
        })
        .catch(error => console.error('Error fetching JSON data:', error));
} else {
    // If JSON data is already in localStorage, parse and use it directly
    const data = JSON.parse(jsonData);
    LoadContent(data);
}

function LoadContent(data) {
    // Loop through the sections in the JSON data
    data.sections.forEach(section => {
        // Find the corresponding section element by class nam
        const sectionElement = document.querySelector('.' + section.class);
        
        // If the section element exists, populate its content
        if (sectionElement) {
            // Set the title
            const titleElement = sectionElement.querySelector('h1');
            if (titleElement) {
                titleElement.textContent = section.title;
            }
            
            // Set the content
            const contentElement = sectionElement.querySelector('p');
            if (contentElement) {
                contentElement.textContent = section.content;
            }
            
            // Populate the gallery if it exists
            if (section.gallery) {
                const galleryElement = sectionElement.querySelector('.gallery');
                if (galleryElement) {
                    section.gallery.forEach(imageSrc => {
                        const figureElement = document.createElement('figure');
                        const imgElement = document.createElement('img');
                        imgElement.src = imageSrc;
                        figureElement.appendChild(imgElement);
                        galleryElement.appendChild(figureElement);
                    });
                }
            }
        }
    });
}