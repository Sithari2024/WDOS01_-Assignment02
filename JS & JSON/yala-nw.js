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
        localStorage.setItem('yalaContent', JSON.stringify(data));

        // Assuming Yala National Park data is under a key named 'yala' for demonstration purposes
        // Update the Yala National Park introduction section
        updateContent(data.yala.intro.title, "yala_intro_title");
        updateContent(data.yala.intro.content, "yala_intro_content");

        // Update the Yala National Park animal diversity section
        updateContent(data.yala.marvelous_menagerie.title, "yala_ani_title");
        updateContent(data.yala.marvelous_menagerie.content, "yala_ani_content");

        // Update the Yala National Park conservation section
        updateContent(data.yala.conservation.title, "yala_conservation_title");
        updateContent(data.yala.conservation.content, "yala_conservation_content");

        // Update images if necessary
        // Assuming images are stored under 'images' key within each section
        document.getElementById("yala_ani_image_1").src = data.yala.marvelous_menagerie.images[0];
        document.getElementById("yala_ani_image_2").src = data.yala.marvelous_menagerie.images[1];
        // Add more image updates as needed
    })
    .catch(error => {
        console.error('Error fetching or parsing data:', error);
    });