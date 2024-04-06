// Check if the JSON data is already stored in localStorage
const jsonData = localStorage.getItem('DWCData');

// If JSON data is not in localStorage, fetch it from the file
if (!jsonData) {
    fetch('JS & JSON/DWC-sri-lanka-JSON.json')
        .then(response => response.json())
        .then(data => {
            // Store the fetched JSON data in localStorage
            localStorage.setItem('DWCData', JSON.stringify(data));

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
    // Iterate over the sections in the JSON data
    data.sections.forEach(section => {
        // Create a container for each section
        const sectionContainer = document.createElement('section');
        sectionContainer.className = section.class;

        // Check if the section has a header
        if (section.h1) {
            const header = document.createElement('h1');
            header.textContent = section.h1;
            sectionContainer.appendChild(header);
        }

        // Check if the section has a paragraph
        if (section.p) {
            const paragraph = document.createElement('p');
            paragraph.textContent = section.p;
            sectionContainer.appendChild(paragraph);
        }

        // Check if the section has a second header
        if (section.h2) {
            const header2 = document.createElement('h2');
            header2.textContent = section.h2;
            sectionContainer.appendChild(header2);
        }

        // Check if the section has a second paragraph
        if (section.p2) {
            const paragraph2 = document.createElement('p');
            paragraph2.textContent = section.p2;
            sectionContainer.appendChild(paragraph2);
        }

        // Check if the section has a third header
        if (section.h3) {
            const header3 = document.createElement('h3');
            header3.textContent = section.h3;
            sectionContainer.appendChild(header3);
        }

        // Check if the section has a third paragraph
        if (section.p3) {
            const paragraph3 = document.createElement('p');
            paragraph3.textContent = section.p3;
            sectionContainer.appendChild(paragraph3);
        }

        // Check if the section has an unordered list
        if (section.ul) {
            const ul = document.createElement('ul');
            section.ul.forEach(li => {
                const liElement = document.createElement('li');
                liElement.textContent = li;
                ul.appendChild(liElement);
            });
            sectionContainer.appendChild(ul);
        }

        // Check if the section has a second unordered list
        if (section.ul2) {
            const ul2 = document.createElement('ul');
            section.ul2.forEach(li => {
                const liElement = document.createElement('li');
                liElement.textContent = li;
                ul2.appendChild(liElement);
            });
            sectionContainer.appendChild(ul2);
        }

        // Check if the section has an iframe
        if (section.iframe) {
            const iframe = document.createElement('iframe');
            iframe.src = section.iframe.src;
            iframe.width = section.iframe.width;
            iframe.height = section.iframe.height;
            iframe.style = section.iframe.style;
            iframe.allowFullscreen = true;
            iframe.loading = section.iframe.loading;
            iframe.referrerPolicy = section.iframe.referrerpolicy;
            sectionContainer.appendChild(iframe);
        }

        // Check if the section is the protected areas section
        if (section.class === 'protected_areas') {
            // Iterate over the protected areas data
            section.areas.forEach(area => {
                const areaDiv = document.createElement('div');
                areaDiv.className = 'areas';

                const imgContainer = document.createElement('div');
                imgContainer.className = 'img-container';
                const img = document.createElement('img');
                img.src = area['img-container'].src;
                img.alt = area['img-container'].alt;
                imgContainer.appendChild(img);

                const contentContainer = document.createElement('div');
                contentContainer.className = 'container';
                const content = document.createElement('div');
                content.className = 'content';
                const h1 = document.createElement('h1');
                h1.textContent = area.container.content.h1;
                content.appendChild(h1);
                contentContainer.appendChild(content);

                areaDiv.appendChild(imgContainer);
                areaDiv.appendChild(contentContainer);

                sectionContainer.appendChild(areaDiv);
            });
        }

        // Append the section container to the body or a specific container
        document.getElementById('dynamic-content').appendChild(sectionContainer);
    });
}
