// Check if the JSON data is already stored in localStorage
const jsonData = localStorage.getItem('SLWildLifeData');

// If JSON data is not in localStorage, fetch it from the file
if (!jsonData) {
    fetch('JS & JSON/sri-lankan-wildlife-JSON.json')
        .then(response => response.json())
        .then(data => {
            // Store the fetched JSON data in localStorage
            localStorage.setItem('SLWildLifeData', JSON.stringify(data));

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
    // Target the .locations section and the .row div
    const locationsSection = document.querySelector('.locations .row');
    if (!locationsSection) {
        console.error('Error: .locations .row element not found.');
        return;
    }

    // Check if data.locations is defined and is an array
    if (data.locations && Array.isArray(data.locations)) {
        // Populate locations section
        data.locations.forEach(location => {
            const locationDiv = document.createElement('div');
            locationDiv.className = 'locations-col';

            const locationImage = document.createElement('img');
            locationImage.src = location.image;
            locationImage.alt = location.name;
            locationDiv.appendChild(locationImage);

            const locationName = document.createElement('h3');
            locationName.textContent = location.name;
            locationDiv.appendChild(locationName);

            const locationDescription = document.createElement('p');
            locationDescription.textContent = location.description;
            locationDiv.appendChild(locationDescription);

            const locationMap = document.createElement('iframe');
            locationMap.src = location.mapSrc;
            locationMap.width = "600";
            locationMap.height = "450";
            locationMap.style.border = "0";
            locationMap.allowFullscreen = true;
            locationMap.loading = "lazy";
            locationMap.referrerPolicy = "no-referrer-when-downgrade";
            locationDiv.appendChild(locationMap);

            locationsSection.appendChild(locationDiv);
        });
    } else {
        console.error('Error: data.locations is undefined or not an array.');
    }

    // Target the .summary-table section and the tbody element
    const summaryTableSection = document.querySelector('.summary-table tbody');
    if (!summaryTableSection) {
        console.error('Error: .summary-table tbody element not found.');
        return;
    }

    // Check if data.summary_table.data is defined and is an array
    if (data.summary_table && data.summary_table.data && Array.isArray(data.summary_table.data)) {
        // Populate summary table data section
        data.summary_table.data.forEach(item => {
            const summaryRow = document.createElement('tr');

            const summaryLocationCell = document.createElement('td');
            summaryLocationCell.textContent = item.location;
            summaryRow.appendChild(summaryLocationCell);

            const summaryAnimalCell = document.createElement('td');
            summaryAnimalCell.textContent = item.animal;
            summaryRow.appendChild(summaryAnimalCell);

            const summaryFactsCell = document.createElement('td');
            summaryFactsCell.textContent = item.interesting_facts;
            summaryRow.appendChild(summaryFactsCell);

            const summaryImageCell = document.createElement('td');
            const summaryImage = document.createElement('img');
            summaryImage.src = item.image;
            summaryImage.alt = item.animal;
            summaryImageCell.appendChild(summaryImage);
            summaryRow.appendChild(summaryImageCell);

            summaryTableSection.appendChild(summaryRow);
        });
    } else {
        console.error('Error: data.summary_table.data is undefined or not an array.');
    }
}

