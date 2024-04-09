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

// Fetch JSON data and update HTML content
fetch('JS & JSON/leopards.json')
    .then(response => response.json()) 
    .then(data => {

        // Store the fetched data in local storage
        localStorage.setItem('LeolData', JSON.stringify(data));
    
        // Update leopard introduction section
        updateContent(leo.leopard_introduction.title, "leo_intro_title");
        updateContent(leo.leopard_introduction.content, "leo_intro_content");

        // Update venues section
        updateContent(leo.venues.yala.title, "yala_title");
        updateContent(leo.venues.yala.content, "yala_content");
        updateContent(leo.venues.kumana.title, "kumana_title");
        updateContent(leo.venues.kumana.content, "kumana_content");
        updateContent(leo.venues.sinharaja.title, "sinharaja_title");
        updateContent(leo.venues.sinharaja.content, "sinharaja_content");

         // Update threat_1 section
        updateContent(leo.threats.human_wildlife_conflict.title, "human_wildlife_conflict_title");
        updateContent(leo.threats.human_wildlife_conflict.content, "human_wildlife_conflict_content");
        updateContent(leo.threats.human_wildlife_conflict.consequences, "human_wildlife_conflict_consequences");
        updateContent(leo.threats.human_wildlife_conflict.protection, "human_wildlife_conflict_protection");

        // Update threat_2 section
        updateContent(leo.threats.habitat_loss.title, "habitat_loss_title");
        updateContent(leo.threats.habitat_loss.content, "habitat_loss_content");
        updateContent(leo.threats.habitat_loss.consequences, "habitat_loss_consequences");
        updateContent(leo.threats.habitat_loss.protection, "habitat_loss_protection");
    })
    .catch(error => {
        console.error('Error fetching or parsing data:', error);
    });

    let  leo = JSON.parse(localStorage.getItem("LeolData"));
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
