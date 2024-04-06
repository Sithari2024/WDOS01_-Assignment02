// Function to update text content dynamically
function updateContent(value, id) {
    const element = document.getElementById(id);
    if (element) {
        element.textContent = value; // Use textContent for safer insertion
    } else {
        console.error('Element with id:', id, 'not found.');
    }
}

// Fetch data from data.json and populate HTML elements
fetch('JS & JSON/index.json')
    .then(response => response.json())
    .then(data => {

        localStorage.setItem('DWCData', JSON.stringify(data));

        // Populate the DWC-intro section
        updateContent(data.intro.title, "DWC-intro-title");
        updateContent(data.intro.content, "DWC-intro-content");
        updateContent(data.intro.vision, "DWC-vision");
        updateContent(data.intro.mission, "DWC-mission");

        // Populate the protected_areas-h section
        updateContent(data.protectedAreas.title, "protected_areas-h-title");

        // Populate the protected_areas section
        const protectedAreasContainer = document.querySelector(".protected_areas");
        data.protectedAreas.areas.forEach(area => {
            const areaElement = document.createElement("div");
            areaElement.classList.add("area");
            areaElement.innerHTML = `
                <div class="img-container">
                    <img src="${area.image}" alt="${area.name}">
                </div>
                <div class="container">
                    <div class="content">
                        <h1>${area.name}</h1>
                    </div>
                </div>
            `;
            protectedAreasContainer.appendChild(areaElement);
        });

        // Populate the map section
        const mapContainer = document.querySelector(".map");
        mapContainer.innerHTML = `
            <div class="h1">
                <h1>WHERE WE ARE</h1>
            </div>
            <iframe src="${data.mapSrc}"
                    width="600"
                    height="450"
                    style="border:0;"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
        `;
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
