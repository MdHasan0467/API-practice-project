

//------------------Start Time From Here
var time = document.getElementById("current-time");


setInterval(() => {
   let d = new Date();

   time.innerHTML = d.toLocaleTimeString();
},1000) //---1000 means 1000 mili seconds or 1 second

//------------------End time section here


//https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita
const loadCocktails = async (searchText, dataLimit) => {
  try {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchText}`;
  const res = await fetch(url);
  const data = await res.json();
  displayCocktails(data.drinks, dataLimit);
  }
  catch {
    // console.log(data.drinks);
  }
}

//Display phones data
const displayCocktails = (cocktails, dataLimit) => {
  const cocktailsContainer = document.getElementById('cocktails-container');
      
  // Reload by every search automatically
  cocktailsContainer.textContent = '';
  
  
  // Display only 6 items
  const showAll = document.getElementById('show-all');
  if (dataLimit && cocktails.length > 6){
    cocktails = cocktails.slice(0, 6);
    showAll.classList.remove('d-none')
  }
  else {
    showAll.classList.add('d-none')
  }






  // Display all cocktails
  cocktails.forEach(cocktail => {
    const cocktailDiv = document.createElement('div')
    cocktailDiv.classList.add('col')
    cocktailDiv.innerHTML = `
  <div class="card p-5">
        <img src="${cocktail.strDrinkThumb}" class="card-img-top">
    <div class="card-body">
          <h5 class="card-title">${cocktail.strDrink}</h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      <button id="" onclick = "loadPhoneDetails('${cocktail.strDrink}')" href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#phoneDetailModal">Show Details</button>
    </div>
  </div>
    `;
    cocktailsContainer.appendChild(cocktailDiv)
    // console.log(cocktail);
  })
    //Stop Spinner or Loader
  toggleLoader(false);
}

const processSearch = (dataLimit) => {
  //Start Loader
  toggleLoader(true);
  const searchField = document.getElementById('search-field');
  const searchText = searchField.value;
  loadCocktails(searchText, dataLimit);

}
// When user click search button , show 6 items
document.getElementById('btn-search').addEventListener('click', function () {
  processSearch(6);
})

  
// To show all items by clicked show all button

document.getElementById('show-all -btn').addEventListener('click', function () {
  processSearch();
})

// loadCocktails()

// Loader Or spinner Condition
  const toggleLoader = isLoading => {
    const loaderSection = document.getElementById('loader');
    if (isLoading) {
      loaderSection.classList.remove('d-none');
    }
    else {
      loaderSection.classList.add('d-none')
    }
}

//Load Phone Details by modal

// const loadCocktailsDetails = async id=> {
// const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${id}`;
//   const res = await fetch(url);
//   const myData = await res.json();
//   // console.log(myData.drinks);
//   displayCocktailsDetails(myData.drinks);
// }

// const displayCocktailsDetails = cocktail2 => {
//   // console.log(cocktail2);
//   const modalTittle = document.getElementById('cocktailDetailModalLabel');
//   modalTittle.innerText = cocktail2.strDrink;
//   const cocktailDetails = document.getElementById('cocktail-details');
//   cocktailDetails.innerHTML = `
//    <img src="${cocktail2.strImageSource}" class="card-img-top">
//   `
// }
// loadCocktailsDetails();

// //https://randomuser.me/api/?results=5000



// const loadUsers = async () => {
//    const url = `https://randomuser.me/api/?results=50`;
//   const res = await fetch(url);
//   const data = await res.json();
//   displayUsers(data.results[0])
//   // console.log(data);
// }
// const displayUsers = users => {
//   console.log(users);

//   const carouselExampleControls = document.getElementById('carouselExampleControls');

//   users.forEach(user => {
//     const cocktailDiv = document.createElement('div');
//     cocktailDiv.classList.add('carousel-body');
//     cocktailDiv.innerHTML = `

//   <div class="carousel-inner">
//     <div class="carousel-item">
//       <img src="${user.picture.thumbnail}" class="d-block w-100">
//       <h1>Name :${user.name.first}</h1>
//     </div>
//   </div>

//   <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
//     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//     <span class="visually-hidden">Previous</span>
//   </button>
//   <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
//     <span class="carousel-control-next-icon" aria-hidden="true"></span>
//     <span class="visually-hidden">Next</span>
//   </button>

//     `
//   })

// }
//   loadUsers()