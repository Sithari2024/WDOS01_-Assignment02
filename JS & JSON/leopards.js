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
        updateContent(data.leopard_intro.title, "leopard_intro_title");
        updateContent(data.leopard_intro.content, "leopard_intro_content");

        // Update the venues section
        updateContent(data.venues[0].title, "venue1_name");
        updateContent(data.venues[0].content, "venue1_description");
        updateContent(data.venues[1].title, "venue2_name");
        updateContent(data.venues[1].content, "venue2_description");
        updateContent(data.venues[2].title, "venue3_name");
        updateContent(data.venues[2].content, "venue3_description");

        // Update the threats section
        updateContent(data.threats[0].title, "threats_content_1");
        updateContent(data.threats[0].content, "threats_content_2");
        updateContent(data.threats[0].consequences, "threats_content_3");
        updateContent(data.threats[0].how_to_protect, "threats_content_4");
        updateContent(data.threats[1].title, "threats_content_5");
        updateContent(data.threats[1].content, "threats_content_6");

        // Update images if necessary
        document.getElementById("threat1_image").src = data.threats[0].image_src;
        document.getElementById("threat2_image").src = data.threats[1].image_src;
    })
    .catch(error => {
        console.error('Error fetching or parsing data:', error);
    });

