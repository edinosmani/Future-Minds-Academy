
function loadPage(seasons) {
    let headerText = document.querySelector('.headerText');
    let ImgContainer = document.querySelector('.ImgContainer');

    if (seasons == 'spring') {
        headerText.textContent = "Welcome to Spring";
        ImgContainer.innerHTML = `  <img class="img-xxl imgOfSeasons" src="assets/images/spring.png" alt="Spring" />`
    }

    else if (seasons == 'summer') {
        headerText.textContent = "Welcome to Summer";
        ImgContainer.innerHTML = `  <img class="img-xxl imgOfSeasons" src="assets/images/summer.png" alt="Summer" />`
    }

    else if (seasons == 'fall') {
        headerText.textContent = "Welcome to Fall";
        ImgContainer.innerHTML = `  <img class="img-xxl imgOfSeasons" src="assets/images/fall.png" alt="Fall" />`
    }

    else if (seasons == 'winter') {
        headerText.textContent = "Welcome to Winter";
        ImgContainer.innerHTML = `  <img class="img-xxl imgOfSeasons" src="assets/images/winter.png" alt="Winter" />`
    }

    else if (seasons == 'allseasons') {
        headerText.textContent = "Welcome to all seasons";
        ImgContainer.innerHTML = `  
        <img class="img-xxl imgOfSeasons" src="assets/images/spring.png" alt="Fall" />
         <img class="img-xxl imgOfSeasons" src="assets/images/summer.png" alt="Summer" />
         <img class="img-xxl imgOfSeasons" src="assets/images/fall.png" alt="Fall" />
          <img class="img-xxl imgOfSeasons" src="assets/images/winter.png" alt="Winter" />
          `
    }

}