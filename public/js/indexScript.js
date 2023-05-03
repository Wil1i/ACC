jalaliDatepicker.startWatch();
var newForm = document.getElementById("new-form");
var submitBtn = document.getElementById("submitbtn");
var delHandler = document.querySelectorAll(".delHandler");
var orderId = document.getElementById("orderId");
var price = document.getElementById("price");
var submitForm = document.getElementById("submitForm");
var submitPriceInputs = document.querySelectorAll(".submitPrice");

for (let i = 0; i < delHandler.length; i++) {
  delHandler[i].addEventListener("dblclick", async () => {
    if (confirm(`سند شماره ${delHandler[i].innerHTML} حذف شود؟`)) {
      await axios.post("/del", { id: delHandler[i].innerHTML });
      location.reload();
    }
  });
}

newForm.addEventListener("keydown", (key) => {
  if (key.key != "Enter") return;
  confirm(`شماره سفارش ${orderId.value} به مبلغ ${price.value} تومان ثبت شود؟`)
    ? submitBtn.click()
    : key.preventDefault();
});

submitForm.addEventListener("click", () => {
  confirm(
    `شماره سفارش ${orderId.value} به مبلغ ${price.value} تومان ثبت شود؟`
  ) && submitBtn.click();
});

for (let i = 0; i < submitPriceInputs.length; i++) {
  submitPriceInputs[i].addEventListener("dblclick", async () => {
    if (confirm("آيا از ثبت مبلغ مطمئن هستید‌؟")) {
      await axios.post("/api/orders/update", {
        id: submitPriceInputs[i].id,
        price: submitPriceInputs[i].value,
      });
    }
    location.reload();
  });
}
