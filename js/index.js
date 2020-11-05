// Your code goes here
let tabs = document.querySelectorAll('a');

tabs[0].addEventListener('mouseover', event => {
    event.target.style.color = 'blue';
    event.target.style.fontSize = '5rem'
});
tabs[0].addEventListener('mouseleave', event => {
    event.target.style.color = 'black';
    event.target.style.fontSize = '1.5rem';
});

tabs[1].addEventListener('mouseover', event => {
    event.target.style.color = 'blue';
    event.target.style.fontSize = '5rem'
});
tabs[1].addEventListener('mouseleave', event => {
    event.target.style.color = 'black';
    event.target.style.fontSize = '1.5rem';
});

tabs[2].addEventListener('mouseover', event => {
    event.target.style.color = 'blue';
    event.target.style.fontSize = '5rem'
});
tabs[2].addEventListener('mouseleave', event => {
    event.target.style.color = 'black';
    event.target.style.fontSize = '1.5rem';
});

tabs[3].addEventListener('mouseover', event => {
    event.target.style.color = 'blue';
    event.target.style.fontSize = '5rem'
});
tabs[3].addEventListener('mouseleave', event => {
    event.target.style.color = 'black';
    event.target.style.fontSize = '1.5rem';
});





let logo = document.querySelector("h1")

logo.addEventListener('dblclick', event => {
    event.target.style.transform = 'rotate(90deg)'
    event.target.style.transition = '3s'
})

let pic = document.querySelector("img")

// function zoom(event) {
//     event.preventDefault();
//     scale += event.deltaY * -0.01;
//     scale = Math.min(Math.max(.125, scale), 4);
//     pic.target.style.transform = `scale(${scale})`;
//   }

  pic.addEventListener('wheel', event => {
      event.target.style.transform = "scale(.5)"
      event.target.style.transition ="3s ease-in-out"
  })

  let footer = document.querySelector("footer")

  footer.addEventListener("mouseenter", event => {
      event.target.style.fontSize ="22px"
      event.target.style.backgroundColor = "blue"
  });

//   window.addEventListener("load", checkCookies())
  

// function checkCookies() {
//   var text = "";

//   if (navigator.cookieEnabled == true) {
//     text = "Cookies are enabled.";
//   } else {
//      text = "Cookies are not enabled.";
//   }
// }

let lastSection = document.getElementsByClassName("btn")

lastSection[0].addEventListener("click", event => {
    event.target.style.background = 'red'
})