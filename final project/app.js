import { merchData } from "./merch.js";

console.log(merchData);
const tileContainer = document.getElementById("tile-container");
const searchBar = document.getElementById("search-input");

const renderMerchTiles = (merch) => {
    
    tileContainer.innerHTML = "";
  
    merch.forEach((merch) => {
      
      const tileInnerHTML = `
              <div class="tile">
                  <img class="tile-image" src="${merch.imageUrl}"></img>
                  <h3 class="tile-title">${merch.name}</h3>
                  <p>"${merch.description}"</p>
              </div>
          `;
  
      const tile = document.createElement("div"); 
      tile.innerHTML = tileInnerHTML; 
      tileContainer.append(tile); 
    });

  };

searchBar.addEventListener('keyup', (event) => {
 const userInput = event.target.value;
 console.log(userInput);

 const filterMerch = merchData.filter((merch) => {
    return merch.name.includes(userInput);

})

renderMerchTiles(filterMerch)
})


renderMerchTiles(merchData);



const storeButton = document.getElementById("store-button");
const aboutButton = document.getElementById("about-button");
const contactsButton = document.getElementById("contact-button");
const homeButton = document.getElementById("home-button");


const storePage = document.getElementById("store");
const homePage = document.getElementById("homepage");
const detailsPage = document.getElementById("detailspage");
const aboutPage = document.getElementById("about");
const contactsPage = document.getElementById("contacts");

const tilecontainer = document.getElementById("tile-container");

const addmerchDetailsToSection = (tileIndex) => {
  detailsSection.innerHTML = "";
  const selectedMerch = merchData[tileIndex];
  const sectionContent = document.createElement("div");
  sectionContent.innerHTML = `

  <div class="merch-details-section">
  <img class="tile-image" src="${selectedMerch.imageUrl}" loading="lazy"></img>
  <div>
    <h2 class="tile-title">${selectedMerch.name}</h2>
    <p>"${selectedMerch.description}"</p>
  </div>
</div>`;

detailsSection.append(sectionContent);
};

const changeSection = (SectionId) => {
  storePage.style = "display: none;";
  homePage.style = "display: none;";
  aboutPage.style = "display: none;";
  contactsPage.style = "display: none;";
  detailsPage.style = "display: none";
  contactsButton.style = "font-weight: normal; ";
  aboutButton.style = "font-weight: normal; ";


  switch (SectionId) {
    case "storePage":
      storePage.style = "display: block;";
      break;
    case "homePage":
      homePage.style = "display: block;";

      break;
    case "aboutPage":
      aboutPage.style = "display: block;";
      aboutButton.style = "font-weight: bold; ";
      break;

      case "contactsPage":
      contactsPage.style = "display: block;";
      contactsButton.style = "font-weight: bold; ";
      break;

      case "detailsPage":
      detailsPage.style = "display: block;";
      break;
  }
};

const rendermerchTiles = (merch) => {
  tilecontainer.innerHTML = "";
  merch.forEach((merch, index) => {
    const tile = document.createElement("div");
    tile.innerHTML = `
    <div class="tile">
        <img class="tile-image" src="${merch.imageUrl}" loading="lazy"></img>
        <h2 class="tile-title">${merch.name}</h2>
        <p>"${merch.description}"</p>
    </div>`;

    // when clicking on a robot
    tile.onclick = () => {
      changeSection("detailsPage");
      addmerchDetailsToSection(index);
    };
    tilecontainer.append(tile);
  });
};

const init = () => {
  changeSection("storePage");
  rendermerchTiles(merchData);
};



storeButton.addEventListener("click", () => {
  changeSection("storePage");
});

contactsButton.addEventListener("click", () => {
  changeSection("contactsPage");
});

aboutButton.addEventListener("click", () => {
  changeSection("aboutPage");
});

homeButton.addEventListener("click", () => {
  changeSection("homePage");
});

init();