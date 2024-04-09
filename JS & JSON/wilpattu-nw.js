// Function to update text content dynamically
function updateContent(value, id) {
    const displayElement = document.getElementById(id);
    if (displayElement) {
        displayElement.textContent = value;
    } else {
        console.error('Could not find display element with id:', id);
    }
}

// Function to update image source and alt text
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
fetch('JS & JSON/wilpattu.json')
    .then(response => response.json())
    .then(data => {

        // Store the fetched data in local storage
        localStorage.setItem('WilpattuData', JSON.stringify(data));
        // Update intro section
        updateContent(wilpattu.wilpattu.intro.title, "wilpattu_intro_title");
        updateContent(wilpattu.wilpattu.intro.content, "wilpattu_intro_content");

        // Update marvelous menagerie section
        updateContent(wilpattu.wilpattu.marvelous_menagerie.title, "wilpattu_ani_title");
        updateContent(wilpattu.wilpattu.marvelous_menagerie.content, "wilpattu_ani_content");

        // Update images in marvelous menagerie section
        updateImage(wilpattu.wilpattu.marvelous_menagerie.images[0], "Image 1", "wilpattu_ani_image_1");
        updateImage(wilpattu.wilpattu.marvelous_menagerie.images[1], "Image 2", "wilpattu_ani_image_2");
        updateImage(wilpattu.wilpattu.marvelous_menagerie.images[2], "Image 3", "wilpattu_ani_image_3");
        updateImage(wilpattu.wilpattu.marvelous_menagerie.images[3], "Image 4", "wilpattu_ani_image_4");

        // Update conservation section
        updateContent(wilpattu.wilpattu.conservation.title, "wilpattu_conservation_title");
        updateContent(wilpattu.wilpattu.conservation.content, "wilpattu_conservation_content");
    })
    .catch(error => {
        console.error('Error fetching or parsing data:', error);
    });

    let  wilpattu = JSON.parse(localStorage.getItem("WilpattuData"));
<<<<<<< HEAD
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
=======
  if (localStorage.getItem("userRole")) {
    const getPopup = `<span class="popup" onclick="openPopup()">Edit</span>`;
    document.getElementById("editor").insertAdjacentHTML("beforeend", getPopup);
}
function openPopup() {
  window.open("editor.html", "", "width=800px, height=410px");
}
>>>>>>> 36098848dcdeb0fb77388bdd5eb25c16a2ccef47
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

