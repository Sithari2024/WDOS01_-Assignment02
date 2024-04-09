// Function to update text content
function updateContent(value, id) {
    const displayElement = document.getElementById(id);
    if (displayElement) {
        displayElement.textContent = value;
    } else {
        console.error('Could not find display element with id:', id);
    }
}

// Function to update image
function updateImage(imagePath, altText, id) {
    const imageElement = document.getElementById(id);
    if (imageElement) {
        imageElement.src = imagePath;
        imageElement.alt = altText;
    } else {
        console.error('Could not find image element with id:', id);
    }
}

// Fetch JSON data and update HTML content
fetch('JS & JSON/yala.json')
    .then(response => response.json())
    .then(data => {

        localStorage.setItem('YalaData', JSON.stringify(data));
        
        // Update intro section
        updateContent(yala.yala.intro.title, "yala_intro_title");
        updateContent(yala.yala.intro.content, "yala_intro_content");

        // Update marvelous menagerie section
        updateContent(yala.yala.marvelous_menagerie.title, "yala_ani_title");
        updateContent(yala.yala.marvelous_menagerie.content, "yala_ani_content");

        // Update images in marvelous menagerie section
        updateImage(yala.yala.marvelous_menagerie.images[0], "Image 1", "yala_ani_image_1");
        updateImage(yala.yala.marvelous_menagerie.images[1], "Image 2", "yala_ani_image_2");
        updateImage(yala.yala.marvelous_menagerie.images[2], "Image 3", "yala_ani_image_3");
        updateImage(yala.yala.marvelous_menagerie.images[3], "Image 4", "yala_ani_image_4");

        // Update conservation section
        updateContent(yala.yala.conservation.title, "yala_conservation_title");
        updateContent(yala.yala.conservation.content, "yala_conservation_content");
    })
    .catch(error => {
        console.error('Error fetching or parsing data:', error);
    });

    let  yala = JSON.parse(localStorage.getItem("YalaData"));
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