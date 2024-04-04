// Check if the JSON data is already stored in localStorage
const jsonData = localStorage.getItem('indexData');

// If JSON data is not in localStorage, fetch it from the file
if (!jsonData) {
    fetch('JS & JSON/index.json')
        .then(response => response.json())
        .then(data => {
            // Store the fetched JSON data in localStorage
            localStorage.setItem('indexData', JSON.stringify(data));

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
    // Iterate over the sections in the JSON data
    data.sections.forEach(section => {
        // Create a container for each section
        const sectionContainer = document.createElement('section');
        sectionContainer.className = section.class;

        // Check if the section has a header
        if (section.h1 || section.h2) { // Adjusted to handle both h1 and h2
            const header = document.createElement('h1'); // Assuming h1 for consistency
            header.textContent = section.h1 || section.h2; // Prioritize h1, fallback to h2
            sectionContainer.appendChild(header);
        }

        // Check if the section has a paragraph
        if (section.p) {
            const paragraph = document.createElement('p');
            paragraph.textContent = section.p;
            sectionContainer.appendChild(paragraph);
        }

        // Check if the section has nested sections
        if (section.sections) {
            section.sections.forEach(nestedSection => {
                const nestedSectionContainer = document.createElement('div');
                nestedSectionContainer.className = nestedSection.class;

                nestedSection.divs.forEach(div => {
                    const divContainer = document.createElement('div');
                    divContainer.className = div.class;

                    // Check if the div has a heading
                    if (div.h1) {
                        const h1 = document.createElement('h1');
                        h1.textContent = div.h1;
                        divContainer.appendChild(h1);
                    }

                    // Check if the div has multiple paragraphs
                    if (div.ps) {
                        div.ps.forEach(pText => {
                            const paragraph = document.createElement('p');
                            paragraph.textContent = pText;
                            divContainer.appendChild(paragraph);
                        });
                    }

                    // Check if the div has an unordered list
                    if (div.ul) {
                        const ul = document.createElement('ul');
                        div.ul.forEach(li => {
                            const liElement = document.createElement('li');
                            liElement.textContent = li;
                            ul.appendChild(liElement);
                        });
                        divContainer.appendChild(ul);
                    }

                    // Check if the div has an image
                    if (div.img) {
                        const img = document.createElement('img');
                        img.src = div.img.src;
                        img.alt = div.img.alt;
                        divContainer.appendChild(img);
                    }

                    nestedSectionContainer.appendChild(divContainer);
                });

                sectionContainer.appendChild(nestedSectionContainer);
            });
        }

        // Check if the section has an ordered list
        if (section.ol) {
            const ol = document.createElement('ol');
            section.ol.forEach(liText => {
                const liElement = document.createElement('li');
                liElement.textContent = liText;
                ol.appendChild(liElement);
            });
            sectionContainer.appendChild(ol);
        }

        // Append the section container to the body or a specific container
        document.getElementById('dynamic-content').appendChild(sectionContainer);
    });
}