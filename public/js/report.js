jalaliDatepicker.startWatch();

var menuContainer2 = document.getElementById("menuContainer2");
var dateInput = document.getElementById("dateInput");
var dateInput2 = document.getElementById("dateInput2");
var dateSubmit = document.getElementById("dateSubmit");
var times = document.querySelectorAll(".orderTime");
var taminKonandeha = document.querySelectorAll(".taminKonande");
var tamin = document.getElementById("tamin");
var priceFaktor = document.getElementById("price-faktor");
var pricePardakht = document.getElementById("price-pardakht");
var descriptions = document.querySelectorAll(".descriptions");
var prices = document.querySelectorAll(".prices");
var allPrice = document.getElementById("allPrice");
var allMode = document.getElementById("allMode");
var delHandler = document.querySelectorAll(".delHandler");
var karkard = document.getElementById("karkard");
var reportDate = document.getElementById("reportDate");

for (let i = 0; i < delHandler.length; i++) {
  delHandler[i].addEventListener("dblclick", async () => {
    if (confirm(`سند شماره ${delHandler[i].innerHTML} حذف شود؟`)) {
      await axios.post("/del", { id: delHandler[i].innerHTML });
      location.reload();
    }
  });
}

dateSubmit.addEventListener("click", () => {
  let from = dateInput.value.split("/").map((s) => {
    return Number(s);
  });
  let to = dateInput2.value.split("/").map((s) => {
    return Number(s);
  });

  let jaamFaktor = 0;
  let jaamPardakht = 0;

  for (let i = 0; i < times.length; i++) {
    let timesTime = times[i].innerHTML.split("/").map((s) => {
      return Number(s);
    });

    let isAv = true;

    if (timesTime[0] < from[0] || timesTime[0] > to[0]) {
      // If date is not between selected date
      document.getElementById(`o-${times[i].id}`).style.display = "none";
      isAv = false;
    } else if (timesTime[0] == from[0] && timesTime[1] < from[1]) {
      // If Year is same to "from date" but month is not between selected
      document.getElementById(`o-${times[i].id}`).style.display = "none";
      isAv = false;
    } else if (timesTime[0] == to[0] && timesTime[1] > to[1]) {
      // If Year is same to "to date" but month is not between selected
      document.getElementById(`o-${times[i].id}`).style.display = "none";
      isAv = false;
    } else if (
      timesTime[0] == from[0] &&
      timesTime[1] >= from[1] &&
      timesTime[2] < from[2]
    ) {
      // Day is lower than selected "from date"
      document.getElementById(`o-${times[i].id}`).style.display = "none";
      isAv = false;
    } else if (
      timesTime[0] == to[0] &&
      timesTime[1] <= to[1] &&
      timesTime[2] > to[2]
    ) {
      // Day is upper than selected "to date"
      document.getElementById(`o-${times[i].id}`).style.display = "none";
      isAv = false;
    }

    if (taminKonandeha[i].innerHTML != tamin.value) {
      document.getElementById(`o-${times[i].id}`).style.display = "none";
      isAv = false;
    }

    if (isAv) {
      const info = descriptions[i].textContent;
      if (info.includes("پرداختی")) jaamPardakht += Number(prices[i].innerHTML);
      if (info.includes("فاکتور")) jaamFaktor += Number(prices[i].innerHTML);
    }
  }
  priceFaktor.innerHTML = jaamFaktor;
  pricePardakht.innerHTML = jaamPardakht;

  if (jaamFaktor > jaamPardakht) {
    allPrice.innerHTML = `${jaamFaktor - jaamPardakht} تومان`;
    allMode.innerHTML = "بدهکار : ";
  } else {
    allPrice.innerHTML = `${jaamPardakht - jaamFaktor} تومان`;
    allMode.innerHTML = "بستانکار : ";
  }

  karkard.innerHTML = `کارکرد حساب ${tamin.value}`;
  reportDate.innerHTML = `از بازه ${dateInput.value} تا ${dateInput2.value}`;

  menuContainer2.style.opacity = "0";
  setTimeout(() => {
    menuContainer2.style.display = "none";
  }, 200);
});
