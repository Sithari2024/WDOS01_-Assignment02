
const get_data_button = document.getElementById("select");
if (get_data_button)
  get_data_button.addEventListener("click", function (e) {

    const selectPage = document.querySelector(".selection").value;
    let textarea = document.querySelector(".textarea");
    

    if (selectPage == "HOME") {
      textarea.value = localStorage.getItem("index");
    }
    if (selectPage == "SRI LANKAN WILDLIFE") {
      textarea.value = localStorage.getItem("SLwildLifeData");
    }

    if (selectPage == "DWC SRI LANKA") {
      textarea.value = localStorage.getItem("DWCData");
    }

    if (selectPage == "SRI LANKAN LEOPARD") {
      textarea.value = localStorage.getItem("LeolData");
    }

    if (selectPage == "ANIMALS IN SRI LANKA") {
      textarea.value = localStorage.getItem("animalData");
    }

    if (selectPage == "YALA NATIONAL PARK") {
      textarea.value = localStorage.getItem("YalaData");
<<<<<<< HEAD
    } 
=======
    } else {
      console.log("something went wrong");
    }

>>>>>>> 36098848dcdeb0fb77388bdd5eb25c16a2ccef47
    if (selectPage == "WILPATTU NATIONAL PARK") {
      textarea.value = localStorage.getItem("WilpattuData");
    }

    
  });

const editPageButton = document.getElementById("save");

if (editPageButton) {
  editPageButton.addEventListener("click", function (e) {
    e.preventDefault();

    const selectPage = document.querySelector(".selection").value;
    const textareaValue = document.querySelector(".textarea").value;

    if (selectPage && textareaValue) {
<<<<<<< HEAD
      if (selectPage == "HOME") {
=======
      if (selectPage == "Home") {
>>>>>>> 36098848dcdeb0fb77388bdd5eb25c16a2ccef47
        localStorage.setItem("index", textareaValue);
      }

      if (selectPage == "SRI LANKAN WILDLIFE") {
        localStorage.setItem("SLwildLifeData", textareaValue);
      }

      if (selectPage == "DWC SRI LANKA") {
        localStorage.setItem("DWCData", textareaValue);
      }

      if (selectPage == "SRI LANKAN LEOPARD") {
        localStorage.setItem("LeolData", textareaValue);
      }

      if (selectPage == "ANIMALS IN SRI LANKA") {
        localStorage.setItem("animalData", textareaValue);
      }

      if (selectPage == "YALA NATIONAL PARK") {
        localStorage.setItem("YalaData", textareaValue);
      }

      if (selectPage == "WILPATTU NATIONAL PARK") {
        localStorage.setItem("WilpattuData", textareaValue);
      }

      

      
      alert("Data saved to local storage!");
    } else {
      console.log(
        "Error: Something went wrong. Make sure both page and textarea have values."
      );
    }
  });
}