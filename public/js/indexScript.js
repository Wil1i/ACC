jalaliDatepicker.startWatch();
var newForm = document.getElementById("new-form")
var submitBtn = document.getElementById("submitbtn")
var delHandler = document.querySelectorAll(".delHandler")
var orderId = document.getElementById("orderId")
var price = document.getElementById("price")
var submitForm = document.getElementById("submitForm")

for(let i = 0; i < delHandler.length; i++){
    delHandler[i].addEventListener("dblclick", () => {
        if(confirm(`سند شماره ${delHandler[i].innerHTML} حذف شود؟`)){
            axios.post("/del", {id : delHandler[i].innerHTML}).then(() => {
                location.reload()
            })
        }
    })
}

newForm.addEventListener("keydown", (key) => {
    if(key.key == "Enter"){
        if(confirm(`شماره سفارش ${orderId.value} به مبلغ ${price.value} تومان ثبت شود؟`)){
            submitBtn.click()
        }else{
            key.preventDefault()
        }
    }
})

submitForm.addEventListener("click", () => {
    if(confirm(`شماره سفارش ${orderId.value} به مبلغ ${price.value} تومان ثبت شود؟`)){
        submitBtn.click()
    }
})