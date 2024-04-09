// Function to update text content
function updateContent(value, id) {
  const displayElement = document.getElementById(id);
  if (displayElement) {
    displayElement.textContent = value;
  } else {
    console.error('Could not find display element with id:', id);
  }
}


// Fetch JSON data and update HTML content
fetch('JS & JSON/index.json')
  .then(response => response.json())
  .then(data => {
      localStorage.setItem('index', JSON.stringify(data));

    // Update introduction section
    updateContent(indexData.introduction.title, "biodiversity_title");
    updateContent(indexData.introduction.content, "biodiversity_content");

    // Update mangrove section
      updateContent(indexData.mangrove.title, "mangrove_title_01");
      updateContent(indexData.mangrove.content, "mangrove_content_01");

      // Update coastal wonders section
      updateContent(indexData.coastal_wonders.title, "coastal_title");
      updateContent(indexData.coastal_wonders.content, "coastal_content");

      // Update highland retreats section
      updateContent(indexData.highland_retreats.title, "highland_title");
      updateContent(indexData.highland_retreats.content, "highland_content");
      
  })
  .catch(error => {
    console.error('Error fetching or parsing data:', error);
  });
  
  let  indexData = JSON.parse(localStorage.getItem("index"));
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

