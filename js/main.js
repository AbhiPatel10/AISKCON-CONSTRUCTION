
// Navbar start
document.querySelector('#services').addEventListener('mouseover', () => {
  document.querySelector('#services i').setAttribute('class', 'fas fa-chevron-circle-up');
});
document.querySelector('#services').addEventListener('mouseout', () => {
  document.querySelector('#services i').setAttribute('class', 'fas fa-chevron-circle-down');
});

document.querySelector('#repair').addEventListener('mouseover', () => {
  document.querySelector('#repair i').setAttribute('class', 'fas fa-chevron-circle-up');
});
document.querySelector('#repair').addEventListener('mouseout', () => {
  document.querySelector('#repair i').setAttribute('class', 'fas fa-chevron-circle-down');
});

document.querySelector('#bt2 button').addEventListener('click', () => {
  document.getElementById('ser').setAttribute('class', 'fas fa-chevron-circle-down');
  document.getElementById('rep').setAttribute('class', 'fas fa-chevron-circle-down');
  document.querySelector('.drop3').style.display = 'none';
  document.querySelector('.drop4').style.display = 'none';
  if (document.querySelector('.navBar2').style.display == 'block') {
    document.querySelector('.navBar2').classList.replace('navOpen', 'navClose');
    document.querySelector('.navBar1').style.boxShadow = 'none';
    setTimeout(() => {
      document.querySelector('#bt2 button i').classList.replace('fa-times', 'fa-bars');
      document.querySelector('.navBar2').style.display = 'none';
    }, 750);
  }
  else {
    document.querySelector('.navBar2').style.display = 'block';
    document.querySelector('.navBar2').classList.replace('navClose', 'navOpen');
    document.querySelector('.navBar1').style.boxShadow = '0px 24px 3px -24px gray';
    document.querySelector('#bt2 button i').classList.replace('fa-bars', 'fa-times');
  }
});

document.querySelector('#services2').addEventListener('click', () => {
  document.getElementById('rep').setAttribute('class', 'fas fa-chevron-circle-down');
  document.querySelector('.drop4').style.display = 'none';
  if (document.getElementById('ser').getAttribute('class').localeCompare('fas fa-chevron-circle-down') == 0)
    document.getElementById('ser').setAttribute('class', 'fas fa-chevron-circle-up');
  else
    document.getElementById('ser').setAttribute('class', 'fas fa-chevron-circle-down');
  if (document.querySelector('.drop3').style.display == 'block')
    document.querySelector('.drop3').style.display = 'none';
  else
    document.querySelector('.drop3').style.display = 'block';
});
document.querySelector('#repair2').addEventListener('click', () => {
  document.getElementById('ser').setAttribute('class', 'fas fa-chevron-circle-down');
  document.querySelector('.drop3').style.display = 'none';
  if (document.getElementById('rep').getAttribute('class').localeCompare('fas fa-chevron-circle-down') == 0)
    document.getElementById('rep').setAttribute('class', 'fas fa-chevron-circle-up');
  else
    document.getElementById('rep').setAttribute('class', 'fas fa-chevron-circle-down');
  if (document.querySelector('.drop4').style.display == 'block')
    document.querySelector('.drop4').style.display = 'none';
  else
    document.querySelector('.drop4').style.display = 'block';
});
document.querySelector('#services2').addEventListener('mouseover', () => {
  document.querySelector('#services2').style.cursor = 'pointer';
  document.querySelector('#services2').style.color = 'blue';
});
document.querySelector('#repair2').addEventListener('mouseover', () => {
  document.querySelector('#repair2').style.cursor = 'pointer';
  document.querySelector('#repair2').style.color = 'blue';
});
document.querySelector('#services2').addEventListener('mouseout', () => {
  document.querySelector('#services2').style.color = 'black';
});
document.querySelector('#repair2').addEventListener('mouseout', () => {
  document.querySelector('#repair2').style.color = 'black';
});

let items = document.querySelectorAll('.navBar2 a');
items.forEach((element) => {
  element.addEventListener('click', () => {
    document.getElementById('ser').setAttribute('class', 'fas fa-chevron-circle-down');
    document.getElementById('rep').setAttribute('class', 'fas fa-chevron-circle-down');
    document.querySelector('.drop3').style.display = 'none';
    document.querySelector('.drop4').style.display = 'none';
  });
});
// Navbar end

//Form starts
function fun() {
  const openFormBtn = document.getElementById('form-open');
  const formContainer = document.querySelector('.form-container');

  openFormBtn.addEventListener('click', function () {
    window.location.href = 'form.html';
    window.scrollTo(0, document.body.scrollHeight);
  });
}
//Form ends

//FAQ STARTS
const faqContent = document.querySelectorAll('.faq-content');

faqContent.forEach((item, index) => {
	let header = item.querySelector('header');
	header.addEventListener('click', () => {
		item.classList.toggle('open');

		let description = item.querySelector('.description');
		if (item.classList.contains('open')) {
			description.style.height = `${description.scrollHeight}px`;
			item.querySelector('i').classList.replace('fa-plus', 'fa-minus');
		} else {
			description.style.height = '0px';
			item.querySelector('i').classList.replace('fa-minus', 'fa-plus');
		}
		removeOpen(index);
	});
});

function removeOpen(index1) {
	faqContent.forEach((item2, index2) => {
		if (index1 != index2) {
			item2.classList.remove('open');
			let des = item2.querySelector('.description');
			des.style.height = '0px';
			item2.querySelector('i').classList.replace('fa-minus', 'fa-plus');
		}
	});
}
//FAQ ENDS

if (document.querySelector('.footer-copyright')) {
  let year = new Date();
  year = year.getFullYear();
  document.querySelector('.footer-copyright').innerHTML = 'Copyright &#169; ' + year + ' <a href="./">Aiskcon</a>, All Rights Reserved';
}

// Particle Js
particlesJS("particles-js", {
  particles: {
    number: { value: 60, density: { enable: true, value_area: 900 } },
    color: { value: "#0f12c0" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 5 },
      image: { src: "img/github.svg", width: 100, height: 100 }
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
    },
    size: {
      value: 2,
      random: false,
      anim: { enable: false, speed: 5, size_min: 0.1, sync: false }
    },
    line_linked: {
      enable: false,
    },
    move: {
      enable: true,
      speed: 6,
      direction: "bottom",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
      resize: true
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
      repulse: { distance: 150, duration: 0.8 },
      push: { particles_nb: 10, },
      remove: { particles_nb: 2 }
    }
  },
  retina_detect: false
});
var count_particles, stats, update;
stats = new Stats();
stats.setMode(0);
stats.domElement.style.position = "absolute";
stats.domElement.style.left = "0px";
stats.domElement.style.top = "0px";
document.body.appendChild(stats.domElement);
count_particles = document.querySelector(".js-count-particles");
update = function () {
  stats.begin();
  stats.end();
  if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
    count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
  }
  requestAnimationFrame(update);
};
requestAnimationFrame(update);
// Particle Js End