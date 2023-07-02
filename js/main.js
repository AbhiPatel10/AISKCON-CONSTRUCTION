
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

const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach((question) => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;
    const icon = question.children[1];
    answer.classList.toggle("show-answer")
    if (!answer.classList.contains("show-answer")) {
      icon.setAttribute('class', 'fa-solid fa-plus fa-xl');
    } else {
      icon.setAttribute('class', 'fa-solid fa-minus fa-xl');
    }
  });
});


if (document.querySelector('.footer-copyright')) {
  let year = new Date();
  year = year.getFullYear();
  document.querySelector('.footer-copyright').innerHTML = 'Copyright &#169; ' + year + ' <a href="./">Aiskcon</a>, All Rights Reserved';
}

// ******************* CHATBOT Start ***********************

const responseArr = [
  {
    hello: "Hello I am AiBot, What would you like to know?",
  },

  {
    faq1: "Why do I need an interior designer?",
    faq2: "Why is Aiskcon perfect for your design?",
    faq3: "What services are included under home interior design",
    faq4: "What will be the timelines for my project completion?",
    faq5: "What are the trending interior design styles?",
  },

  {
    answer1:
      "Interior designers are professionals who are able to gauge your needs and tastes to deliver your dream home. They assist you in getting custom-designed pieces that fit perfectly into your beautiful vision.",
    answer2:
      "Aiskcon is the perfect partner who can build your home interiors just the way you want! Our design experts customize designs as per your needs. They will listen to your ideas and suggest options. At Aiskcon, we incorporate advanced technology into our modular solutions to create flawless interiors and also to expedite the process of making your dream home a reality.",
    answer3:
      "Some of the most common services that are included under home interior design are: Space planning, Colour Selection, Material Selection, Lighting Design, Furniture Selection, Decorative Accessories",
    answer4:
      "The timeline for a construction project completion can vary depending on a number of factors, such as the size and complexity of the project, the location, weather conditions, availability of materials",
    answer5:
      "Minimalism, Biophilic design, Industrial design, Scandinavian design, Bohemian design, Modern farmhouse, Art Deco",
  },
];

const chatbotToggler = document.querySelector(".chatbot-toggler");
const closeBtn = document.querySelector(".close-btn");
const chatbox = document.querySelector(".chatbox");
const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");

const inputInitHeight = chatInput.scrollHeight;

const createChatLi = (message, className) => {
  // Create a chat <li> element with passed message and className
  const chatLi = document.createElement("li");
  chatLi.classList.add("chat", `${className}`);
  let chatContent = className === "outgoing" ? `<p></p><span class="userAvatar"><img src="img/logo/userAvatar.png" alt=""></span>` : `<span class="material-symbols-outlined"><img src="img/logo/navLogo.png" alt=""></span><p></p>`;
  chatLi.innerHTML = chatContent;
  chatLi.querySelector("p").textContent = message;
  return chatLi; // return chat <li> element
}

const generateResponse = (chatElement) => {
  const messageElement = chatElement.querySelector("p");
  const userMessage = messageElement.textContent; // Get the user's message
  messageElement.textContent = responseArr[0].hello;
  const chatBox = document.querySelector(".chatbox");

  const userInput = chatInput.value;
  // const response = getChatBotResponse();
  let botMessageElement = document.createElement("li");
  botMessageElement.classList.add("chat")
  botMessageElement.classList.add("incoming")
  let botImageElement = document.createElement("img");
  const faq = document.createElement("li");
  // botMessageElement.textContent = response;
  faq.innerHTML = `
    <p> ${responseArr[1]["faq1"]} </p> 
    <p> ${responseArr[1]["faq2"]} </p> 
    <p> ${responseArr[1]["faq3"]} </p> 
    <p> ${responseArr[1]["faq4"]} </p> 
    <p> ${responseArr[1]["faq5"]} </p>`;
  faq.classList.add("chat-faqs")
  // faq.classList.add("chat")
  // faq.classList.add("incoming")
  // botMessageElement.classList.add("bot-message");
  // messageElement.append(botMessageElement);
  chatBox.append(faq);

  faq.querySelectorAll("p").forEach((child, index) => {
    child.addEventListener("click", () => {
      // botMessageElement.textContent = responseArr[2][`answer${index + 1}`]
      // botMessageElement.classList.add("chatbox")
      // botMessageElement.classList.add("js-incoming")
      // botImageElement.src = "img/logo/navLogo.png";
      botMessageElement.innerHTML = 
      `<span class="material-symbols-outlined"><img src="img/logo/navLogo.png" alt=""></span>
      <p>${responseArr[2][`answer${index + 1}`]}</p>`
      chatBox.append(botMessageElement);
      scrollPosition();
    })
  })
}

const handleChat = () => {
  userMessage = chatInput.value.trim(); // Get user entered message and remove extra whitespace
  if (!userMessage) return;

  // Clear the input textarea and set its height to default
  chatInput.value = "";
  chatInput.style.height = `${inputInitHeight}px`;

  // Append the user's message to the chatbox
  chatbox.appendChild(createChatLi(userMessage, "outgoing"));
  chatbox.scrollTo(0, chatbox.scrollHeight);

  setTimeout(() => {
    // Display "Thinking..." message while waiting for the response
    const incomingChatLi = createChatLi("...", "incoming");
    chatbox.appendChild(incomingChatLi);
    chatbox.scrollTo(0, chatbox.scrollHeight);
    generateResponse(incomingChatLi);
  }, 600);
}

chatInput.addEventListener("input", () => {
  // Adjust the height of the input textarea based on its content
  chatInput.style.height = `${inputInitHeight}px`;
  chatInput.style.height = `${chatInput.scrollHeight}px`;
});

chatInput.addEventListener("keydown", (e) => {
  // If Enter key is pressed without Shift key and the window 
  // width is greater than 800px, handle the chat
  if (e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
    e.preventDefault();
    handleChat();
  }
});

sendChatBtn.addEventListener("click", handleChat);
closeBtn.addEventListener("click", () => document.body.classList.remove("show-chatbot"));
chatbotToggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));


// const responseArr = [
//     {
//         hello: "Hello I am AiBot, What would you like to know?",
//     },

//     {
//         faq1: "Why do I need an interior designer?",
//         faq2: "Why is Aiskcon perfect for your design?",
//         faq3: "What services are included under home interior design",
//         faq4: "What will be the timelines for my project completion?",
//         faq5: "What are the trending interior design styles?",
//     },

//     {
//         answer1:
//             "Interior designers are professionals who are able to gauge your needs and tastes to deliver your dream home. They assist you in getting custom-designed pieces that fit perfectly into your beautiful vision.",
//         answer2:
//             "Aiskcon is the perfect partner who can build your home interiors just the way you want! Our design experts customize designs as per your needs. They will listen to your ideas and suggest options. At Aiskcon, we incorporate advanced technology into our modular solutions to create flawless interiors and also to expedite the process of making your dream home a reality.",
//         answer3:
//             "Some of the most common services that are included under home interior design are: Space planning, Colour Selection, Material Selection, Lighting Design, Furniture Selection, Decorative Accessories",
//         answer4:
//             "The timeline for a construction project completion can vary depending on a number of factors, such as the size and complexity of the project, the location, weather conditions, availability of materials",
//         answer5:
//             "Minimalism, Biophilic design, Industrial design, Scandinavian design, Bohemian design, Modern farmhouse, Art Deco",
//     },
// ];
// const chatBotBtn = document.querySelector(".chatbot-btn");
// const chatContainer = document.querySelector(".chat-container");
// const chatBody = document.querySelector(".chat-body");
// const chatInput = document.querySelector(".chat-input");
// const chatForm = document.querySelector(".chat-form");
// const chatFormBtn = document.querySelector(".chatform-btn");

// chatBotBtn.addEventListener("click", () => {
//     chatContainer.classList.toggle("show-chat")
//     if (!chatContainer.classList.contains("show-chat")) {
//         clearChatBody()
//     }
// })

// chatInput.addEventListener("input", () => {
//     if (!chatInput.value.trim() == "") {
//         chatFormBtn.removeAttribute("disabled")
//     } else {
//         chatFormBtn.setAttribute("disabled", true)
//     }
// });

// chatForm.addEventListener("submit", (e) => {
//     e.preventDefault()
//     renderMessages()
//     clearInput()
// })

// const renderMessages = () => {
//     renderUserMessage()
//     renderChatBotMessage()
// }

// const renderUserMessage = () => {
//     const userInput = chatInput.value;
//     const messageElement = document.createElement("div");
//     messageElement.textContent = userInput;
//     messageElement.classList.add("user-message");
//     chatBody.append(messageElement);
// };

const renderChatBotMessage = () => {
  const userInput = chatInput.value;
  const response = getChatBotResponse();
  let botMessageElement = document.createElement("div");
  let botImageElement = document.createElement("img");
  const faq = document.createElement("div");
  botMessageElement.textContent = response;
  faq.innerHTML = `
    <div> ${responseArr[1]["faq1"]} </div> 
    <div> ${responseArr[1]["faq2"]} </div> 
    <div> ${responseArr[1]["faq3"]} </div> 
    <div> ${responseArr[1]["faq4"]} </div> 
    <div> ${responseArr[1]["faq5"]} </div>`;
  faq.classList.add("chat-faqs")
  botMessageElement.classList.add("bot-message");
  chatBody.append(botMessageElement);
  chatBody.append(faq);

  faq.querySelectorAll("div").forEach((child, index) => {
    child.addEventListener("click", () => {
      botMessageElement.textContent = responseArr[2][`answer${index + 1}`]
      botMessageElement.classList.add("bot-message")
      botImageElement.src = "img/logo/navLogo.png";
      chatBody.append(botMessageElement);
      scrollPosition();
    })
  })
};

// const getChatBotResponse = () => {
//     return responseArr[0]["hello"];
// };

// const clearInput = () => {
//     chatInput.value = "";
// };

// const clearChatBody = () => {
//     chatBody.innerHTML = "";
// }

// const scrollPosition = () => {
//     chatBody.scrollTop = chatBody.scrollHeight
// }

// ******************* CHATBOT End *************************

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