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
        // Store the fetched data in local storage
        localStorage.setItem('indexContent', JSON.stringify(data));

        // Update the introduction section
        updateContent(data.introduction.title, "wildlife_exploration_title");
        updateContent(data.introduction.content, "wildlife_exploration_content");

        // Assuming the JSON data contains information for the summary table
        // You might need to loop through the data and update each row accordingly
        const summaryTable = document.getElementById('summary_table');
        if (summaryTable && data.summary_table) {
            let tableContent = '';
            data.summary_table.forEach(item => {
                tableContent += `
                    <tr>
                        <td>${item.location}</td>
                        <td>${item.animal}</td>
                        <td>${item.fact}</td>
                        <td><img src="${item.image}" alt="${item.animal}"></td>
                    </tr>
                `;
            });
            summaryTable.querySelector('tbody').innerHTML = tableContent;
        }
    })
    .catch(error => console.error('Error fetching data:', error));
