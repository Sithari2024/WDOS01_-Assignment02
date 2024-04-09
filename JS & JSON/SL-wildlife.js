// Function to update text content dynamically
function updateContent(value, id) {
    // Find the HTML element where you want to display the value
    const displayElement = document.getElementById(id);
    // Check if the element exists
    if (displayElement) {
        // Set the textContent of the element to the value
        displayElement.textContent = value;
    } else {
        console.error('Could not find display element with id:', id);
    }
}

// Function to update image source and alt text
function updateImage(imagePath, altText, id) {
    // Find the HTML image element
    const imageElement = document.getElementById(id);
    // Check if the element exists
    if (imageElement) {
        // Set the src and alt attributes of the image
        imageElement.src = imagePath;
        imageElement.alt = altText;
    } else {
        console.error('Could not find image element with id:', id);
    }
}

// Fetch JSON data and update HTML content
fetch('JS & JSON/SL-wildlife.json')
    .then(response => response.json())
    .then(data => {

        // Store the fetched data in local storage
        localStorage.setItem('SLwildLifeData', JSON.stringify(data));
        // Update locations section
        updateContent(wildLife.locations.title, "locations_title");
        updateContent(wildLife.locations.content, "locations_content");

        // Update Horton Plains National Park
        updateContent(wildLife.hortonPlains.title, "horton_title");
        updateContent(wildLife.hortonPlains.content, "horton_content");

        // Update Kumana National Park
        updateContent(wildLife.kumana.title, "kumana_title");
        updateContent(wildLife.kumana.content, "kumana_content");

        // Update Sinharaja Forest Reserve
        updateContent(wildLife.sinharaja.title, "sinharaja_title");
        updateContent(wildLife.sinharaja.content, "sinharaja_content");

        // Update locations section
        updateContent(wildLife.summaryTable.locations[0], "locations_0");
        updateContent(wildLife.summaryTable.locations[1], "locations_1");
        updateContent(wildLife.summaryTable.locations[2], "locations_2");

        // Update animal section
        updateContent(wildLife.summaryTable.animal[0], "animal_0");
        updateContent(wildLife.summaryTable.animal[1], "animal_1");
        updateContent(wildLife.summaryTable.animal[2], "animal_2");

        // Update interesting facts section
        updateContent(wildLife.summaryTable.interestingFacts[0], "interestingFacts_0");
        updateContent(wildLife.summaryTable.interestingFacts[1], "interestingFacts_1");
        updateContent(wildLife.summaryTable.interestingFacts[2], "interestingFacts_2");

        // Update image section
        updateImage(wildLife.summaryTable.image[0], "Sambar Deer", "image_0");
        updateImage(wildLife.summaryTable.image[1], "Elephant", "image_1");
        updateImage(wildLife.summaryTable.image[2], "Sri Lankan Purple-faced Langur", "image_2");
    })
    .catch(error => {
        console.error('Error fetching or parsing data:', error);
    });

    let  wildLife = JSON.parse(localStorage.getItem("SLwildLifeData"));
    if (localStorage.getItem("userRole")) {
        const  userInfo = JSON.parse(localStorage.getItem("userRole"));
        if  (userInfo == "admin"){
          const getPopup = `<a onclick="openPopup()">Edit</a>`;
          document.getElementById("editor").insertAdjacentHTML("beforeend", getPopup);
          function openPopup() {
          window.open("editor.html", "", "width=800px, height=410px");
         }
        }
    }
if(localStorage.getItem("userRole")){
const  loginUser = `<li><a onclick="removeuser()">Logout</a></li>`;
document.getElementById("login").insertAdjacentHTML("beforeend", loginUser);
}
else{
const  loginUser = `<li><a href="form.html">Login</a></li>`;
document.getElementById("login").insertAdjacentHTML("beforeend", loginUser);

}
function removeuser() {
localStorage.removeItem('userRole');
location.reload();
}

  
