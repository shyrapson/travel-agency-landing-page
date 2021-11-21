const travelDestinations = () => {
  const menuBar = document.querySelector(".menu__bar");
  const nav = document.querySelector(".nav__links");
  const navLinks = document.querySelectorAll(".nav__links li");
  const serviceData = document.querySelector(".category__items");
  const bookings = document.querySelector(".bookings__method");
  const footerdatan = document.querySelector(".footer__items");

  if (menuBar) {
    menuBar.addEventListener("click", () => {
      nav.classList.toggle("nav-active");

      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = "";
        } else {
          link.style.animation = `fadeLinks 0.5s ease forwards ${
            index / 5 + 0.3
          }s`;
        }
      });
    });
  }
  const serviceDetails = [
    {
      avatar: "./images/Group48.png",
      name: "Calculated Weather",
      text: "Built Wicket longer admire do barton vanity itself do in it.",
    },
    {
      avatar: "./images/Group 51.png",
      name: "Best Flights",
      text: "Engrossed listening. Park gate sell they west hard for the.",
    },
    {
      avatar: "./images/Group 50.png",
      name: "Local Events",
      text: "Barton vanity itself do in it. Preferd to men it engrossed listening.",
    },
    {
      avatar: "./images/Group 49.png",
      name: "Customization",
      text: "We deliver outsourced aviation services for military customers",
    },
  ];
  document.getElementById("items").innerHTML = serviceDetails
    .map(
      (details, index) =>
        `<div>
    <img src = "${details.avatar}">
    <h1> ${details.name}</h1>
    <p> ${details.text}</p>
    </div>`
    )
    .join("");

  const bookingDetails = [
    {
      logo: "./images/yellow.png",
      title: "Choose Destination",
      text: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Urna tortor tempus.",
    },
    {
      logo: "./images/orange.png",
      title: "Make Payment",
      text: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Urna tortor tempus.",
    },
    {
      logo: "./images/purple.png",
      title: "Reach Airport on Selected Date",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna tortor tempus.",
    },
  ];

  document.getElementById("method").innerHTML = bookingDetails
    .map(
      (data) =>
        `
      <div class="method__logo">
          <img src = "${data.logo}">
      <div>
          <h3>${data.title}</h3>
         <p>${data.text}</p>
      </div>
      
      </div>
      `
    )
    .join("");

  const footerLinks = [
    { title: "Company", link1: "About", link2: "Careers", link3: "Mobile" },
    { title: "Contact", link1: "Help/FAQ", link2: "Press", link3: "Affilates" },
    {
      title: "More",
      link1: "Airlinefees",
      link2: "Airline",
      link3: "Low fare tips",
    },
  ];
  document.getElementById("footer__links").innerHTML = footerLinks
    .map(
      (link) =>
        `
    <ul>
    <h1>${link.title}</h1>
    <div>
    <li>${link.link1}</li>
    <li>${link.link2}</li>
    <li>${link.link3}</li>
    </div>
    </ul>`
    )
    .join("");
};
travelDestinations();
