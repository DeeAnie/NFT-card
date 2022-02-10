const body = document.querySelector('body');
body.style.backgroundColor = "hsl(217, 54%, 11%)";
body.style.margin = "0";
body.style.padding = "0";
body.style.boxSizing = "border-box";


// Wrapper
const wrapper = document.createElement("div");
wrapper.id = "wrapper";
document.body.appendChild(wrapper);
wrapper.style.maxWidth = "1440px";
wrapper.style.height = "100vh"; 
wrapper.style.margin = "0 auto";
wrapper.style.display = "flex";
wrapper.style.flexWrap = "wrap";
wrapper.style.gap = "20px";
wrapper.style.alignContent = "space-around";
wrapper.style.justifyContent = "space-around";


// Card
const card = document.createElement("div");
card.className = "card";
wrapper.appendChild(card);
card.style.backgroundColor = "hsl(216, 50%, 16%)";
card.style.minWidth = "348px";
card.style.height = "590px";
card.style.borderRadius = "10px";


// const card2 = document.createElement("div");
// card2.className = "card2";
// card2.style.backgroundColor = "hsl(216, 50%, 16%)";
// card2.style.width = "348px";
// card2.style.height = "590px";
// card2.style.borderRadius = "10px";
// wrapper.appendChild(card2);


// Container

const container = document.createElement("div");
container.className = "container";
card.appendChild(container);
container.style.width = "300px";
container.style.margin = "25px auto";
container.style.fontFamily = "Outfit, sans-serif";
container.style.color = "hsl(215, 51%, 70%)";

const img = document.createElement("img");
container.appendChild(img);
img.src = "images/image-equilibrium.jpg";
img.style.width = "300px";
img.style.borderRadius = "10px";

const title = document.createElement("h3");
container.appendChild(title);
title.innerText = "Equilibrium #3429";
title.style.color = "hsl(0, 0%, 100%)";
title.style.fontWeight = "600";
title.style.fontSize = "22px";

const subtitle = document.createElement("p");
container.appendChild(subtitle);
subtitle.innerText = "Our Equilibrium collection promotes balance and calm.";
subtitle.style.color = "hsl(215, 51%, 70%)";
subtitle.style.fontSize = "18px";



// ethBlock

const ethBlc = document.createElement("div");
ethBlc.className = "ethBlc";
container.appendChild(ethBlc);
ethBlc.style.color = "hsl(0, 0%, 100%)";
ethBlc.style.display = "flex";
ethBlc.style.justifyContent = "space-between";
ethBlc.style.paddingTop = "6px";
ethBlc.style.paddingBottom = "25px";
ethBlc.style.borderBottom = "2px solid hsl(215, 32%, 27%)";


// ethPrice 
const ethPrice = document.createElement("div");
ethPrice.className = "ethBlc";
ethBlc.appendChild(ethPrice);
ethPrice.style.display = "flex";
ethPrice.style.alignItems = "center";

const ethPriceIcon = document.createElement("img");
ethPriceIcon.className = "ethPriceIcon";
ethPrice.appendChild(ethPriceIcon);
ethPriceIcon.src = "images/icon-ethereum.svg";

const ethPriceText = document.createElement("span");
ethPriceText.className = "ethPriceText";
ethPrice.appendChild(ethPriceText);
ethPriceText.innerText = "0.041 ETH";
ethPriceText.style.marginLeft = "8px";
ethPriceText.style.color = "hsl(178, 100%, 50%)";


// ethDate
const ethDate = document.createElement("div");
ethDate.className = "ethBlc";
ethBlc.appendChild(ethDate);
ethDate.style.display = "flex";
ethDate.style.alignContent = "center";

const ethDateIcon = document.createElement("img");
ethDateIcon.className = "ethDateIcon";
ethDate.appendChild(ethDateIcon);
ethDateIcon.src = "images/icon-clock.svg";

const ethDateText = document.createElement("span");
ethDateText.className = "ethDateText";
ethDate.appendChild(ethDateText);
ethDateText.innerText = "3 days left";
ethDateText.style.marginLeft = "8px";
ethDateText.style.color = "hsl(215, 51%, 70%)";


// Footer 
const footer = document.createElement("div");
footer.className = "footer";
container.appendChild(footer);
footer.style.display = "flex";
footer.style.alignItems = "center";
footer.style.paddingTop = "15px";

const avatar = document.createElement("img");
avatar.className = "footer";
footer.appendChild(avatar);
avatar.src = "images/image-avatar.png";
avatar.style.width = "35px";

const footerCopy = document.createElement("span");
footerCopy.className = "footerCopy";
footer.appendChild(footerCopy);
footerCopy.innerText = "Creation of";
footerCopy.style.paddingLeft = "15px";

const footerCopyLink = document.createElement("a");
footerCopyLink.className = "footerCopyLink";
footer.appendChild(footerCopyLink);
footerCopyLink.innerText = "Jules Wyvern";
footerCopyLink.href = "https://github.com/DianaZhusupbek";
footerCopyLink.target = "_blank";
footerCopyLink.style.paddingLeft = "10px";
footerCopyLink.style.textDecoration = "none";
footerCopyLink.target = "_blank";
footerCopyLink.style.color = "white";


alert("Я оцениваю свою работу на 110 баллов");
