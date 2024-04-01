document.addEventListener('DOMContentLoaded', () => {
    // Retrieve the JSON data from localStorage
    const storedData = localStorage.getItem('websiteData');
    const websiteData = JSON.parse(storedData);

    // Dynamically set the page title
    document.title = websiteData.title;

    // Dynamically set the header logo
    document.getElementById('logo').src = websiteData.header.logo;

    // Dynamically populate the navigation menu
    const navList = document.getElementById('navList');
    if (navList) {
        websiteData.header.navigation.forEach(navItem => {
            const listItem = document.createElement('li');
            const link = document.createElement('a');
            link.href = navItem.href;
            link.textContent = navItem.text;
            listItem.appendChild(link);

            // Check if the navigation item has a dropdown
            if (navItem.dropdown) {
                const dropdown = document.createElement('ul');
                navItem.dropdown.forEach(dropdownItem => {
                    const dropdownListItem = document.createElement('li');
                    const dropdownLink = document.createElement('a');
                    dropdownLink.href = dropdownItem.href;
                    dropdownLink.textContent = dropdownItem.text;
                    dropdownListItem.appendChild(dropdownLink);
                    dropdown.appendChild(dropdownListItem);
                });
                listItem.appendChild(dropdown);
            }

            navList.appendChild(listItem);
        });
    }

    // Dynamically populate the main content section
    const mainContent = document.getElementById('mainContent');
    const sectionDiv = document.createElement('div');
    const heading = document.createElement('h2');
    heading.textContent = websiteData.main.introduction.heading;
    sectionDiv.appendChild(heading);

    const paragraph = document.createElement('p');
    paragraph.textContent = websiteData.main.introduction.text;
    sectionDiv.appendChild(paragraph);

    mainContent.appendChild(sectionDiv);

    // Dynamically populate the footer
    const footerNavList = document.getElementById('footerNavList');
    if (footerNavList) {
        websiteData.footer.navLinks.forEach(link => {
            const listItem = document.createElement('li');
            const anchor = document.createElement('a');
            anchor.href = link.href;
            anchor.textContent = link.text;
            listItem.appendChild(anchor);
            footerNavList.appendChild(listItem);
        });
    } else {
        console.error('Element with ID "footerNavList" not found.');
    };

    // Dynamically populate the footer copyright
    document.querySelector('.bottom-bar p').textContent = websiteData.footer.copyright;
});
