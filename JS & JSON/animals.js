// Function to update text content dynamically
function updateContent(value, id) {
    const displayElement = document.getElementById(id);
    if (displayElement) {
      displayElement.textContent = value;
    } else {
      console.error('Could not find display element with id:', id);
    }
  }
  
  // Function to update image source dynamically
  function updateImageSource(src, id) {
    const imageElement = document.getElementById(id);
    if (imageElement) {
      imageElement.src = src;
    } else {
      console.error('Could not find image element with id:', id);
    }
  }
  
  // Fetch JSON data and update HTML content
  fetch('JS & JSON/animal.json')
    .then(response => response.json())
    .then(data => {
        // Store the fetched data in local storage
    localStorage.setItem('animalData', JSON.stringify(data));

      // Update the introduction section
      updateContent(animal['ani-introduction'].title, "ani-intro-title");
      updateContent(animal['ani-introduction'].content, "ani-intro-content");

      // Update Blue Whales section
      updateContent(animal.endangered_animals[0].name, "endangered_animal_0_title");
      updateContent(animal.endangered_animals[0].description, "endangered_animal_0_content");
      updateImageSource(animal.endangered_animals[0].image, "endangered_animal_0_image");

      // Update Leatherback turtle section
      updateContent(animal.endangered_animals[1].name, "endangered_animal_1_title");
      updateContent(animal.endangered_animals[1].description, "endangered_animal_1_content");
      updateImageSource(animal.endangered_animals[1].image, "endangered_animal_1_image");

      // Update Sloth Bear section
      updateContent(animal.endangered_animals[2].name, "endangered_animal_2_title");
      updateContent(animal.endangered_animals[2].description, "endangered_animal_2_content");
      updateImageSource(animal.endangered_animals[2].image, "endangered_animal_2_image");

      // Update Asian Elephant section
      updateContent(animal.endangered_animals[3].name, "endangered_animal_3_title");
      updateContent(animal.endangered_animals[3].description, "endangered_animal_3_content");
      updateImageSource(animal.endangered_animals[3].image, "endangered_animal_3_image");

      // Update saltwater crocodile section
      updateContent(animal.endangered_animals[4].name, "endangered_animal_4_title");
      updateContent(animal.endangered_animals[4].description, "endangered_animal_4_content");
      updateImageSource(animal.endangered_animals[4].image, "endangered_animal_4_image");

      // Update The Black-Necked Stork section
      updateContent(animal.endangered_animals[5].name, "endangered_animal_5_title");
      updateContent(animal.endangered_animals[5].description, "endangered_animal_5_content");
      updateImageSource(animal.endangered_animals[5].image, "endangered_animal_5_image");

    })
    .catch(error => {
      console.error('Error fetching or parsing data:', error);
    });

    let  animal = JSON.parse(localStorage.getItem("animalData"));
  if (localStorage.getItem("userRole")) {
    const getPopup = `<span class="popup" onclick="openPopup()">Edit</span>`;
    document.getElementById("editor").insertAdjacentHTML("beforeend", getPopup);
}
function openPopup() {
  window.open("editor.html", "", "width=800px, height=410px");
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

  