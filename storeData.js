// Example JSON data
const websiteData = {
    "title": "HOME PAGE",
    "meta": {
        "charset": "UTF-8",
        "viewport": "width=device-width, initial-scale=1.0"
    },
    "links": {
        "appleTouchIcon": "Image/attachment_89091231-removebg-preview.png",
        "favicon32": "Image/attachment_89091231-removebg-preview.png",
        "favicon16": "Image/attachment_89091231-removebg-preview.png",
        "stylesheet": "style.css",
        "fonts": "https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;600;700&display=swap",
        "fontAwesome": "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
    },
    "header": {
        "logo": "Image/attachment_89091231-removebg-preview.png",
        "navigation": [
            { "text": "HOME", "href": "index.html", "active": true },
            { "text": "SRI LANKAN WILDLIFE", "href": "Sri Lankan wildlife.html" },
            { "text": "DWC SRI LANKA", "href": "Department of Wildlife Conservation.html" },
            { "text": "SRI LANKAN LEOPARD", "href": "Sri Lankan Leopard .html" },
            {
                "text": "ANIMALS IN SRI LANKA",
                "href": "Animals in Sri Lanka.html",
                "dropdown": [
                    { "text": "YALA NATIONAL PARK", "href": "Yala National Park .html" },
                    { "text": "WILPATTU NATIONAL PARK", "href": "Wilpattu National Park .html" }
                ]
            }
        ]
    },
    "main": {
        "introduction": [
            {
                "heading": "Biodiversity of Sri Lanka",
                "text": "Explore the wildlife of Sri Lanka and its abundant biodiversity and natural beauty. The island is home to a wide variety of flora and fauna, from pristine beaches to lush jungles. The remarkable diversity of ecosystems that sustain a wide range of wildlife species is facilitated by Sri Lanka's distinct physical features, which include mountains, plains, and coastal regions. A third or so of Sri Lanka's territory is covered with natural vegetation. In much of the nation, forests make up the climax vegetation—that is, the natural flora allowed to grow unhindered. Tropical wet evergreen forests predominate in the lowlands of the Wet Zone, while submontane and montane evergreen forests do so in the highlands. The climax vegetation of the Dry Zone is made up of moist deciduous and dry evergreen forests, with the woods giving place to a stunted, shrubby, xerophytic (drought-tolerant) vegetation in its driest areas. Grasslands and scant woodlands are common in the Central Highlands' highest altitudes."
            }
        ],
        "mangrove": [
            {
                "heading": "Mystical Mangroves-Nurturing Coastal Life",
                "text": "The coastal environment of Sri Lanka depends heavily on mangroves. The intertidal zone, or the place where land meets the sea, is home to these unusual trees because they have adapted to live in saltwater. Sri lanka has several types of mangroves. Such as:",
                "types": ["Rhizophora", "Avicennia", "Sonneratia"],
                "image": "Image/mangrove-798578_640.jpg"
            },
            {
                "heading": "Coastal Wonders - Where Land Meets Sea",
                "text": "Sri Lanka, known for its stunning coastline, offers a plethora of coastal wonders where land meets sea. The country's diverse coastal geography provides opportunities for various activities such as surfing, snorkeling, and wildlife spotting.",
                "image": "Image/Coastal.jpg"
            },
            {
                "heading": "Highland Retreats - Tranquility Amidst Tea Plantations",
                "text": "Highland Retreats in Sri Lanka offer a serene and peaceful escape amidst the breathtaking tea plantations. Highland Retreats in Sri Lanka are an ideal choice for those seeking a peaceful getaway amidst nature's beauty.",
                "activities": ["Visit tea estates", "Explore Horton plains", "Withness rare orchids"],
                "image": "Image/Highland Retreats-pexels-photo.jpeg"
            }
        ]
    },
    "footer": {
        "socialIcons": [
            { "icon": "fa-brands fa-facebook", "link": "" },
            { "icon": "fa-brands fa-instagram", "link": "" },
            { "icon": "fa-brands fa-twitter", "link": "" },
            { "icon": "fa-brands fa-linkedin", "link": "" }
        ],
        "navLinks": [
            { "text": "HOME", "href": "index.html" },
            { "text": "SRI LANKAN WILDLIFE", "href": "Sri Lankan wildlife.html" },
            { "text": "DWC SRI LANKA", "href": "Department of Wildlife Conservation.html" },
            { "text": "SRI LANKAN LEOPARD", "href": "Sri Lankan Leopard .html" },
            { "text": "ANIMALS IN SRI LANKA", "href": "Animals in Sri Lanka.html" },
            { "text": "YALA NATIONAL PARK", "href": "Yala National Park .html" },
            { "text": "WILPATTU NATIONAL PARK", "href": "Wilpattu National Park .html" }
        ],
        "copyright": "&copy;2023 sithari.All right reserved"
    }
};

// Store the JSON data in localStorage
localStorage.setItem('websiteData', JSON.stringify(websiteData));