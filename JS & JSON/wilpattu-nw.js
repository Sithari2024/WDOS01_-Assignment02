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
        console.log(data); // Add this line to inspect the fetched data

        // Store the fetched data in local storage
        localStorage.setItem('wilpattuContent', JSON.stringify(data));

        // Update the Wilpattu National Park introduction section
        updateContent(data.wilpattu.intro.title, "wilpattu_intro_title");
        updateContent(data.wilpattu.intro.content, "wilpattu_intro_content");

        // Update the Wilpattu National Park animal diversity section
        updateContent(data.wilpattu.marvelous_menagerie.title, "wilpattu_ani_title");
        updateContent(data.wilpattu.marvelous_menagerie.content, "wilpattu_ani_content");

        // Update the Wilpattu National Park conservation section
        updateContent(data.wilpattu.conservation.title, "wilpattu_conservation_title");
        updateContent(data.wilpattu.conservation.content, "wilpattu_conservation_content");


        // Update images if necessary
        // Assuming images are stored under 'images' key within each section
        document.getElementById("wilpattu_ani_image_1").src = data.wilpattu.marvelous_menagerie.images[0];
        document.getElementById("wilpattu_ani_image_2").src = data.wilpattu.marvelous_menagerie.images[1];
        document.getElementById("wilpattu_ani_image_3").src = data.wilpattu.marvelous_menagerie.images[2];
        document.getElementById("wilpattu_ani_image_4").src = data.wilpattu.marvelous_menagerie.images[3];
        // Add more image updates as needed
    })
    .catch(error => {
        console.error('Error fetching or parsing data:', error);
    });
