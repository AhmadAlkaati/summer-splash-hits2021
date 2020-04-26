/* Getting elements that are needed to be defined in global scope */
var input = document.getElementById("input");
var msg = document.getElementById("msg");
var priceTable = document.getElementById("price-table");
var basicPrice = document.getElementById("all-info-basic");
var standardPrice = document.getElementById("all-info-standard");
var premiumPrice = document.getElementById("all-info-premium");
var sectionD = document.getElementById("section-d");

/* Function for showing an error when the user type something in search bar and clicks enter*/
input.addEventListener("keydown", function (event) {
  if (event.keyCode === 13) {
    msg.style.display = "block";
    event.preventDefault();
  }
  setTimeout(() => (msg.style.display = "none"), 2000);
});

/*  Function for opening search field */
function openSearchField() {
  var search = document.getElementById("search");
  search.style.opacity = "1";
  search.style.width = "100%";
  search.style.height = "80px";
}
/*  Function for closing search field */
function closeSearchField() {
  var search = document.getElementById("search");
  search.style.opacity = "0";
  search.style.width = "0px";
  search.style.height = "0px";
}

/* Function for making a language drop down*/

function languageDropDown() {
  var dropdown = document.getElementById("content");

  if (dropdown.style.opacity === "1") {
    dropdown.style.opacity = "0";
  } else {
    dropdown.style.opacity = "1";
  }
}

/* Function for makign a sidebar */
function sideBar() {
  if (document.getElementById("linksdropdown").style.display === "none") {
    document.getElementById("linksdropdown").style.display = "block";
  } else {
    document.getElementById("linksdropdown").style.display = "none";
  }
}

/* Function for changing the display of buying divs */

function blockBasic(width) {
  if (width.matches) {
    basicPrice.classList.add("div-price");
    basicPrice.classList.remove("div-price-2");
    standardPrice.classList.add("div-price");
    standardPrice.classList.remove("div-price-2");
    premiumPrice.classList.add("div-price");
    premiumPrice.classList.remove("div-price-2");
  } else {
    basicPrice.classList.add("div-price-2");
    basicPrice.classList.remove("div-price");
    standardPrice.classList.add("div-price-2");
    standardPrice.classList.remove("div-price");
    premiumPrice.classList.add("div-price-2");
    premiumPrice.classList.remove("div-price");
  }
}
var width = window.matchMedia("(min-width: 1100px)");
blockBasic(width);
width.addListener(blockBasic);

/* Function for opening basic buying menu */

function openBasic() {
  if (basicPrice.classList.contains("div-price")) {
    priceTable.classList.add("price-table-hide");
    basicPrice.classList.add("all-info");
  } else {
    priceTable.classList.add("price-table-hide");
    basicPrice.classList.add("div-block");
  }
}

/* Function for closing basic buying menu */

function closeBasic() {
  if (basicPrice.classList.contains("all-info")) {
    priceTable.classList.remove("price-table-hide");
    basicPrice.classList.remove("all-info");
  } else {
    basicPrice.classList.remove("div-block");
    priceTable.classList.remove("price-table-hide");
  }
}

/* Function for opening standard buying menu */
function openStandard() {
  if (standardPrice.classList.contains("div-price")) {
    priceTable.classList.add("price-table-hide");
    standardPrice.classList.add("all-info");
  } else {
    standardPrice.classList.add("div-block");
    priceTable.classList.add("price-table-hide");
  }
}

/* Function for closing standard buying menu */
function closeStandard() {
  if (standardPrice.classList.contains("all-info")) {
    priceTable.classList.remove("price-table-hide");
    standardPrice.classList.remove("all-info");
  } else {
    standardPrice.classList.remove("div-block");
    priceTable.classList.remove("price-table-hide");
  }
}

/* Function for opening premium buying menu */
function openPremium() {
  if (premiumPrice.classList.contains("div-price")) {
    priceTable.classList.add("price-table-hide");
    premiumPrice.classList.add("all-info");
  } else {
    premiumPrice.classList.add("div-block");
    priceTable.classList.add("price-table-hide");
  }
}

/* Function for closing premium buying menu */
function closePremium() {
  if (premiumPrice.classList.contains("all-info")) {
    priceTable.classList.remove("price-table-hide");
    premiumPrice.classList.remove("all-info");
  } else {
    premiumPrice.classList.remove("div-block");
    priceTable.classList.remove("price-table-hide");
  }
}

/* Function for showing a message when user type email and clicks subscribe button*/
function subscribeBtn() {
  var emailInput = document.querySelector("#email-input").value;
  var news = document.querySelector("#news");
  if (emailInput === "") {
    var error = document.createElement("h2");
    error.id = "errormsg";
    var textError = document.createTextNode("You Did not Type Anything!");

    error.appendChild(textError);
    news.appendChild(error);
    error.style.width = "300px";
    error.style.margin = "15px  auto";
    error.style.backgroundColor = "red";
    error.style.borderRadius = "5px";
  } else {
    var success = document.createElement("h2");
    success.id = "successmsg";
    var text = document.createTextNode(
      "Thanks For Subscribing To Our NewsLetter!"
    );
    success.appendChild(text);
    news.appendChild(success);
    success.style.width = "300px";
    success.style.margin = "15px  auto";
    success.style.backgroundColor = "mediumseagreen";
    success.style.borderRadius = "5px";
  }
  setTimeout(() => document.getElementById("errormsg").remove(), 2000);
  setTimeout(() => document.getElementById("successmsg").remove(), 2000);
}

/*************************************** */
