var text = document.getElementById("text");

window.onload = function () {
    var i = 0;
    var txt = "COMING SOON!";
    var speed = 90;
    var type = setInterval(function () {
        if (i < txt.length) {
            text.innerHTML += txt.charAt(i);
            i++;
        } else {
            clearInterval(type);
        }
    }, speed);
};

text.addEventListener("click", function () {
    text.innerHTML = "";
    //add box to text
    var qrcode = new QRCode(text, {
        text: "https://www.paypal.com/paypalme/asrielthegoat",
        width: 256,
        height: 256,
        colorDark: "#ffffff",
        colorLight: "#000000",
        correctLevel: QRCode.CorrectLevel.H,
    });
});
