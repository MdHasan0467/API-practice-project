


//Asynconize the API link for the fetch

const loadPhones = async(searchText, dataLimit) => {
  const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
  const res = await fetch(url);
  const data = await res.json();
  displayPhones(data.data, dataLimit);
}
//Display phones data
const displayPhones = (phones,dataLimit) => {
  console.log(phones);
  const phoneContainer = document.getElementById('phone-container');
  //IF reload The phoneContainer page will empty 
    // phoneContainer.innerText = '';
  phoneContainer.textContent = '';


  // Show All Button
  const showAll = document.getElementById('show-all-btn');
    if (dataLimit && phones.length > 6) {
      //Display 10 phones only
       phones = phones.slice(0, 6);
       showAll.classList.remove('d-none');
    }
    else {
       showAll.classList.add('d-none');
    }


   // Display no phone found
  const noPhone = document.getElementById('no-phone-msg');
  
  if(phones.length === 0){
    noPhone.classList.remove('d-none');
  }
  else {
    noPhone.classList.add('d-none');
  }

  //Display all phones
  phones.forEach(phone =>{
    const phoneDiv = document.createElement('div')
    phoneDiv.classList.add('col')
    phoneDiv.innerHTML = `
    <div class="card p-4">
      <img src="${phone.image}" class="card-img-top p-3">
      <div class="card-body">
        <h5 class="card-title">${phone.phone_name}</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
        <button onclick = "loadPhoneDetails('${phone.slug}')" href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#phoneDetailModal">Show Details</button>
      </div>
  </div>
    `;
    phoneContainer.appendChild(phoneDiv)
  })
  //Stop Spinner or Loader
  toggleLoader(false);
}
const processSearch = (dataLimit)=>{
  //Start Loader
  toggleLoader(true);
  const searchField = document.getElementById('search-field');
  const searchText = searchField.value;
  
  loadPhones(searchText,dataLimit);
}



//Search Button Even handler
document.getElementById('btn-search').addEventListener('click', function () {
  //Start Loader
  processSearch(6);
})

// Search input field enter key handler
document.getElementById('search-field').addEventListener('keypress', function (e) {
  // console.log(e.key);
  if (e.key === 'Enter') {
      // Code for enter
       processSearch(6);
     }
   })

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
  
//Not the best way to  load show all 
document.getElementById('show-all-btn').addEventListener('click', function () {
  processSearch();
})



//Load Phone Details by modal

const loadPhoneDetails = async id => {
  const url = `https://openapi.programming-hero.com/api/phone/${id}`;
  const res = await fetch(url);
  const myData = await res.json();
  displayPhoneDetails(myData.data);
}

const displayPhoneDetails = phone => {
  console.log(phone);
  const modalTittle = document.getElementById('phoneDetailModalLabel');
  modalTittle.innerText = phone.name;
  const phoneDetails = document.getElementById('phone-details');
  phoneDetails.innerHTML = `
   <img src="${phone.image}" class="card-img-top w-50 ms-5 ps-5">
  <p>Release Date : ${phone.releaseDate ? phone.releaseDate : 'No release date found'}</p>
  <p>display Size : ${phone.mainFeatures ? phone.mainFeatures.displaySize : 'No details found'}</p>
  <p>Storage : ${phone.mainFeatures ? phone.mainFeatures.storage : 'No details found'}</p>
  <p>Bluetooth : ${phone.others ? phone.others.Bluetooth : 'No details found'}</p>
  <p>Sensor : ${phone.mainFeatures.sensors ? phone.mainFeatures.sensors[0] : 'No sensor'}</p>
  `
}
// loadPhones('apple');



