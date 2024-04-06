
    // Fetch JSON data
    fetch('JS & JSON/index.json')
        .then(response => response.json())
        .then(data => {
            // Store data in localStorage
            localStorage.setItem('jsonData', JSON.stringify(data));
            // Load data dynamically
            loadDynamicContent(data);
        })
        .catch(error => console.error('Error fetching data:', error));

    function loadDynamicContent(data) {
        const dynamicContent = document.getElementById('dynamic-content');

        // Load introduction
        const introductionSection = data.sections.find(section => section.class === 'introduction');
        if (introductionSection) {
            const introElement = document.createElement('div');
            introElement.classList.add(introductionSection.class);

            if (introductionSection.h2) {
                const h2 = document.createElement('h2');
                h2.textContent = introductionSection.h2;
                introElement.appendChild(h2);
            }

            if (introductionSection.p) {
                const p = document.createElement('p');
                p.textContent = introductionSection.p;
                introElement.appendChild(p);
            }

            dynamicContent.appendChild(introElement);
        }

        // Load sections
        data.sections.forEach(section => {
            if (section.class !== 'introduction') {
                const sectionElement = document.createElement('div');
                sectionElement.classList.add(section.class);

                if (section.h1) {
                    const h1 = document.createElement('h1');
                    h1.textContent = section.h1;
                    sectionElement.appendChild(h1);
                }

                if (section.p) {
                    const p = document.createElement('p');
                    p.textContent = section.p;
                    sectionElement.appendChild(p);
                }

                if (section.ol) {
                    const ol = document.createElement('ol');
                    section.ol.forEach(item => {
                        const li = document.createElement('li');
                        li.textContent = item;
                        ol.appendChild(li);
                    });
                    sectionElement.appendChild(ol);
                }

                if (section.img) {
                    const img = document.createElement('img');
                    img.src = section.img.src;
                    img.alt = section.img.alt;
                    sectionElement.appendChild(img);
                }

                dynamicContent.appendChild(sectionElement);
            }
        });

        // Load locations
        const locationsContainer = document.getElementById('locations-container');
        data.locations.forEach(location => {
            const locationElement = document.createElement('div');
            locationElement.classList.add('location');

            const name = document.createElement('h3');
            name.textContent = location.name;
            locationElement.appendChild(name);

            const description = document.createElement('p');
            description.textContent = location.description;
            locationElement.appendChild(description);

            const image = document.createElement('img');
            image.src = location.image;
            image.alt = location.name;
            locationElement.appendChild(image);

            const mapFrame = document.createElement('iframe');
            mapFrame.src = location.mapSrc;
            mapFrame.title = location.name + ' Map';
            mapFrame.width = '600';
            mapFrame.height = '450';
            locationElement.appendChild(mapFrame);

            locationsContainer.appendChild(locationElement);
        });

        // Load summary table
        const summaryTableContainer = document.getElementById('summary-table');
        const summaryTableData = data.summary_table.data;
        const summaryTableFooter = data.summary_table.footer;

        const table = document.createElement('table');
        const tableHeader = document.createElement('thead');
        const headerRow = document.createElement('tr');

        const headers = ['Location', 'Animal', 'Interesting Facts', 'Image'];
        headers.forEach(headerText => {
            const header = document.createElement('th');
            header.textContent = headerText;
            headerRow.appendChild(header);
        });

        tableHeader.appendChild(headerRow);
        table.appendChild(tableHeader);

        const tableBody = document.createElement('tbody');
        summaryTableData.forEach(rowData => {
            const row = document.createElement('tr');

            Object.values(rowData).forEach(cellData => {
                const cell = document.createElement('td');
                if (cellData.includes('.jpg')) {
                    const img = document.createElement('img');
                    img.src = cellData;
                    img.alt = rowData.animal;
                    cell.appendChild(img);
                } else {
                    cell.textContent = cellData;
                }
                row.appendChild(cell);
            });

            tableBody.appendChild(row);
        });

        table.appendChild(tableBody);

        const tableFooter = document.createElement('tfoot');
        const footerRow = document.createElement('tr');
        const footerCell = document.createElement('td');
        footerCell.colSpan = headers.length;
        footerCell.textContent = summaryTableFooter;

        footerRow.appendChild(footerCell);
        tableFooter.appendChild(footerRow);
        table.appendChild(tableFooter);

        summaryTableContainer.appendChild(table);
    }

