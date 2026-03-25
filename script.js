function hello() {
    alert("مرحبا بك في موقعي!");
}
let time = document.getElementById("time").value;
let phone = "213540942085"; // رقمك
let message = "حجز جديد:%0Aالاسم: " + name + "%0Aالخدمة: " + service + "%0Aالوقت: " + time;

window.open("https://wa.me/" + phone + "?text=" + message);
