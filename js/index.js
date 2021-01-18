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
  },{passive: true})

  let footer = document.querySelector("footer")

  footer.addEventListener("mouseenter", event => {
      event.target.style.fontSize ="22px"
      event.target.style.backgroundColor = "blue"
  });

  window.addEventListener("load", checkCookies)
  

function checkCookies() {
  var text = "";

  if (navigator.cookieEnabled == true) {
    text = "Cookies are enabled.";
  } else {
     text = "Cookies are not enabled.";
  } 
  console.log(text)
}

let sections = document.querySelectorAll(".destination")
console.log(sections)

sections.forEach(div => {
    console.log(div)
    div.addEventListener("click", event => {
        event.target.style.backgroundImage = 'url(https://images.unsplash.com/photo-1568145675395-66a2eda0c6d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80)'
        event.target.style.color = 'white'
    })
})

let img = document.querySelectorAll('img')

img[2].addEventListener("resize", event => {
    event.target.style.width = "55px"
    event.target.style.height = "35px"
})

const heightOutput = document.querySelector('#height');
const widthOutput = document.querySelector('#width');

function reportWindowSize() {
  heightOutput.textContent = window.innerHeight;
  widthOutput.textContent = window.innerWidth;
}

window.addEventListener('resize', reportWindowSize);

document.addEventListener('keydown', logKey);

function logKey(e) {
  log.textContent += ` ${e.code}`;
}

let btn = document.querySelectorAll(".btn")

btn.forEach(div=> {
    div.addEventListener("click", event => {
        event.target.style.backgroundColor = "red"
        event.stopPropogation()
    })
})