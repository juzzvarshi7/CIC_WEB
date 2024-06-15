/* General Styles */
body {
    font-family: 'Open Sans', sans-serif;
    margin: 0;
    padding: 0;
}

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: #333;
    color: white;
}

nav ul {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
}

nav ul li {
    margin-right: 20px;
}

nav ul li a {
    color: white;
    text-decoration: none;
}

.header-right {
    display: flex;
    align-items: center;
}

.header-right input {
    margin-right: 10px;
}

.header-right a img {
    height: 25px; /* Adjust the height of the LinkedIn logo */
    margin-right: 1rem;
}

.side-menu {
    position: fixed;
    top: 0;
    left: -300px;
    width: 300px;
    height: 100%;
    background-color: #333;
    color: white;
    transition: left 0.3s;
}

.side-menu-content {
    padding: 20px;
}

.side-menu h2 {
    margin-top: 0;
}

#menu-btn, #close-btn {
    background: none;
    border: none;
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
}

main {
    padding: 20px;
}

.slider {
    position: relative;
    overflow: hidden;
}

.slide {
    display: none;
    position: relative;
}

.slide img {
    width: 100%;
    height: auto;
}

.slide-content {
    position: absolute;
    bottom: 20px;
    left: 20px;
    color: white;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 20px;
}

.slider-prev-btn, .slider-next-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    font-size: 2rem;
    cursor: pointer;
    color: black;
    z-index: 10;
}

.slider-prev-btn {
    left: 10px;
}

.slider-next-btn {
    right: 10px;
}

.recent-progress {
    margin-top: 20px;
}

.ticker {
    background-color: #f2f2f2;
    padding: 10px;
    margin-bottom: 20px;
}

.progress-content {
    display: flex;
    justify-content: space-between;
}

.progress-item {
    width: 30%;
    background-color: #f2f2f2;
    padding: 20px;
}

.services-overview {
    position: relative;
    margin-top: 40px;
}

.services-title {
    text-align: center;
    margin-bottom: 20px;
}

.services-content {
    display: flex;
    overflow: hidden; /* Disable horizontal overflow */
    position: relative;
}

.service-box {
    background-color: #fff;
    border: 1px solid #ddd;
    padding: 20px;
    text-align: center;
    width: calc(25% - 20px); /* Adjust the width to display four boxes per row */
    margin-bottom: 20px;
}


/* Styles for the images inside service boxes */
.service-box img {
    max-width: 100%; /* Ensure images fit within the box */
    height: auto; /* Maintain aspect ratio */
}

/* Styles for the headings and paragraphs */
.service-box h3 {
    font-size: 1.5em; /* Adjust the font size */
    margin: 10px 0; /* Add margin for spacing */
}

.service-box p {
    font-size: 1em; /* Adjust the font size */
    color: #333; /* Set text color */
}

.services-overview {
     position: relative;
}

.services-prev-btn, .services-next-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
    border: none;
    padding: 10px;
    cursor: pointer;
}

.services-prev-btn {
    left: 10px;
}

.services-next-btn {
    right: 10px;
}

.services-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.product-boxes {
    display: flex;
    flex-wrap: wrap;
}

.product-box {
    width: 30%;
    background: #FDB813;
    margin: 1.5%;
    border-radius: 5px;
    text-align: center;
    flex: 1;
    margin: 0 0.5rem;
}

.product-box img {
    width: 100%;
    height: auto;
    display: block;
    margin: 0 auto 1rem;
}

.product-details {
    display: none;
    text-align: center;
}

footer {
    display: flex;
    justify-content: space-between;
    padding: 20px;
    background-color: #333;
    color: white;
}

footer ul {
    list-style: none;
    display: flex;
    padding: 0;
}

footer ul li {
    margin-left: 20px;
}

footer ul li a {
    color: white;
    text-decoration: none;
}

.read-more-btn {
    color: #F26D21;
    background-color: transparent; /* Assuming you want just the text color changed */
    border: 2px solid #F26D21; /* If there's a border, to match the text color */
    padding: 10px 20px;
    text-decoration: none;
    display: inline-block;
    transition: background-color 0.3s, color 0.3s;
}

.read-more-btn:hover {
    background-color: #F26D21;
    color: white; /* Change the text color on hover if needed */
    padding: 0.5rem 1rem; /* Adjust padding as needed */
    border: none; /* Remove border */
    font-size: 14px; /* Adjust font size */
    text-decoration: none; /* Remove underline */
}

.read-more-btn:hover {
    background-color: #E25D15; /* Change background color on hover */
}


