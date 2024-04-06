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
        // Store the fetched data in local storage
        localStorage.setItem('indexContent', JSON.stringify(data));

        // Update the introduction section
        updateContent(data.introduction.title, "biodiversity_title");
        updateContent(data.introduction.content, "biodiversity_content");

        // Update the mangrove section
        updateContent(data.mangrove.title, "mangrove_title_01");
        updateContent(data.mangrove.content, "mangrove_content_01");

        // Update the coastal wonders section
        updateContent(data.coastal_wonders.title, "coastal_title");
        updateContent(data.coastal_wonders.content, "coastal_content");

        // Update the highland retreats section
        updateContent(data.highland_retreats.title, "highland_title");
        updateContent(data.highland_retreats.content, "highland_content");
    })
    .catch(error => {
        console.error('Error fetching or parsing data:', error);
    });



// Get the form and elements
const newsletterForm = document.getElementById('newsletterForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');

// Function to handle form submission
function handleSubscription(event) {
    event.preventDefault();
    
    // Get input values
    const name = nameInput.value;
    const email = emailInput.value;
    
    // Save subscription to localStorage
    let subscriptions = JSON.parse(localStorage.getItem('subscriptions')) || [];
    subscriptions.push({ name, email });
    localStorage.setItem('subscriptions', JSON.stringify(subscriptions));
    
    // Clear form inputs
    nameInput.value = '';
    emailInput.value = '';
    
    alert('Thank you for subscribing!');
}

// Add event listener to the form
newsletterForm.addEventListener('submit', handleSubscription);

    
