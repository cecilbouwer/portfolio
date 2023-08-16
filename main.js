  // Navigation
  
  var dropdown = document.querySelector("nav .dropdown");
  var button = document.querySelector("nav .menu");


  function menu() {
    if (dropdown.style.display === "grid") {
      dropdown.style.display = "none";
      button.innerHTML = "menu";
    } else {
      dropdown.style.display = "grid";
      button.innerHTML = "close";
    }
  
    document.body.classList.toggle("active"); // Add or remove the 'active' class to the body
  }  

  window.addEventListener("resize", function () {
    if (window.innerWidth > 700) {
      dropdown.style.display = "none";
      button.innerHTML = "menu";
    }
  });

// photo gallery

const divs = Array.from(document.querySelectorAll('.photo'));
const body = document.body;
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

checkPrev = () => divs[0].classList.contains('show') ? prev.style.display = 'none' : prev.style.display = 'flex';

checkNext = () => divs[divs.length - 1].classList.contains('show') ? next.style.display = 'none' : next.style.display = 'flex';

divs.forEach(function (el) {
  el.addEventListener('click', function () {
    this.classList.toggle('show');
    body.classList.toggle('active');
    checkNext();
    checkPrev();
  });
});

prev.addEventListener('click', function () {
  const show = document.querySelector('.show');
  const event = document.createEvent('HTMLEvents');
  event.initEvent('click', true, false);

  show.previousElementSibling.dispatchEvent(event);
  show.classList.remove('show');
  body.classList.toggle('active');
  checkNext();
});

next.addEventListener('click', function () {
  const show = document.querySelector('.show');
  const event = document.createEvent('HTMLEvents');
  event.initEvent('click', true, false);

  show.nextElementSibling.dispatchEvent(event);
  show.classList.remove('show');
  body.classList.toggle('active');
  checkPrev();
});


  // contact form

  window.addEventListener("DOMContentLoaded", function () {
  // get the form elements defined in your form HTML above

  var form = document.getElementById("my-form");
  // var button = document.getElementById("my-form-button");
  var status = document.getElementById("status");

  // Success and Error functions for after the form is submitted

  function success() {
    form.reset();
    status.classList.add("success");
    status.innerHTML = "Thanks!";
  }

  function error() {
    status.classList.add("error");
    status.innerHTML = "Oops! There was a problem.";
  }

  // handle the form submission event

  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}

// preloader


$(document).ready(function() {
  var counter = 0;

  // Start the changing images
  setInterval(function() {
    if(counter == 9) { 
      counter = 0; 
    }

    changeImage(counter);
    counter++;
  }, 3000);

  // Set the percentage off
  loading();
});

function changeImage(counter) {
  var images = [
    '<i class="fa fa-fighter-jet"></i>',
    '<i class="fa fa-gamepad"></i>',
    '<i class="fa fa-headphones"></i>',
    '<i class="fa fa-cubes"></i>',
    '<i class="fa fa-paw"></i>',
    '<i class="fa fa-rocket"></i>',
    '<i class="fa fa-ticket"></i>',
    '<i class="fa fa-pie-chart"></i>',
    '<i class="fa fa-codepen"></i>'
  ];

  $(".loader .image").html(""+ images[counter] +"");
}

function loading(){
  var num = 0;

  for(i=0; i<=100; i++) {
    setTimeout(function() { 
      $('.loader span').html(num+'%');

      if(num == 100) {
        loading();
      }
      num++;
    },i*120);
  };
}

// tooltip function

$(document).ready(function() {
  // When hovering over an image inside the "work" div
  $(".work a img").hover(function() {
    // Get the alt text of the image
    var altText = $(this).attr("alt");

    // Add the alt text to the content property of the CSS
    $(this).parent().css("content", "'" + altText + "'");
  }, function() {
    // When the mouse leaves the image, reset the content property
    $(this).parent().css("content", "''");
  });
});
