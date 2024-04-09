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
fetch('JS & JSON/DWC.json')
    .then(response => response.json()) 
    .then(data => {

        // Store the fetched data in local storage
        localStorage.setItem('DWCData', JSON.stringify(data));
        // Update the DWC section
        updateContent(dept.DWC.title, "DWC-title");
        updateContent(dept.DWC.intro, "DWC-intro");
        updateContent(dept.DWC.vision, "DWC-vision");
        updateContent(dept.DWC.mission[0], "DWC-mission");

        // Update DWC functions
        updateContent(dept.DWC.functions[0], "DWC-functions-0");
        updateContent(dept.DWC.functions[1], "DWC-functions-1");
        updateContent(dept.DWC.functions[2], "DWC-functions-2");
        updateContent(dept.DWC.functions[3], "DWC-functions-3");

        // Update DWC strategies
        updateContent(dept.DWC.strategies[0], "DWC-strategies-0");
        updateContent(dept.DWC.strategies[1], "DWC-strategies-1");
        updateContent(dept.DWC.strategies[2], "DWC-strategies-2");
        updateContent(dept.DWC.strategies[3], "DWC-strategies-3");

        // Update protected areas titles
        updateContent(dept.protected_areas[0].name, "protected_area_title_0");
        updateContent(dept.protected_areas[1].name, "protected_area_title_1");
        updateContent(dept.protected_areas[2].name, "protected_area_title_2");
        updateContent(dept.protected_areas[3].name, "protected_area_title_3");
        updateContent(dept.protected_areas[4].name, "protected_area_title_4");

        // Update map section
        const mapContainer = document.querySelector('.map');
        const iframe = document.createElement('iframe');
        iframe.src = dept.map.iframeSrc;
        iframe.width = dept.map.width;
        iframe.height = dept.map.height;
        iframe.allowFullscreen = dept.map.allowFullscreen;
        mapContainer.appendChild(iframe);
    })
    .catch(error => {
        console.error('Error fetching or parsing data:', error);
    });

    let  dept = JSON.parse(localStorage.getItem("DWCData"));
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

  
