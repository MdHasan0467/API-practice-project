   //------------Start Text Typing From Here
  var typed = new Typed(".auto-type", {
    strings: ["I'm a front end web developer","I'm a back end web developer", "I'm a web designer"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
    })
  //------------End Text Typing  Here


   //------------Start Menu Bar From Here

var navLinks = document.getElementById("navLinks");


  function showMenu() {
  navLinks.style.top = "0"; //beacause of we want to change the right value
  }

  function hideMenu() {
  navLinks.style.top = "-230px"; //beacause of we want to change the right value
}
  
//----------------End Menu Bar Here


//------------------Start Time From Here
var time = document.getElementById("current-time");


setInterval(() => {
   let d = new Date();

   time.innerHTML = d.toLocaleTimeString();
},1000) //---1000 means 1000 mili seconds or 1 second

//------------------End time section here

//-----------------Start Image slider from here

//-----It come from "Swiper.com" Then, "get started" And Then,"Initialize Swiper"-----Copy the link and paste here Some Edit--Starting pont

  const swiper = new Swiper('.swiper', {
  // Optional parameters
  autoplay: {
    delay:2000, //2000 means mili second Or 2 seconds
    disableOnInteraction:false,
  },
  loop: true,
    
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable:true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


//--------It come from "Swiper.com" Then, "get started" And Then,"Initialize Swiper"-----Copy the link and paste here--Ending pont

//----------------------------End Image slider here