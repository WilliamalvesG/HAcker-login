document.getElementById("submitButton").addEventListener("click", function() {
    var password = document.getElementById("passwordInput").value;
    if (password === "MarcioVictor123") {
        window.open("identidade.html", "_blank");
    } else {
        alert("Senha incorreta! Tente novamente.");
        document.getElementById("passwordInput").value = "";
    }
});
