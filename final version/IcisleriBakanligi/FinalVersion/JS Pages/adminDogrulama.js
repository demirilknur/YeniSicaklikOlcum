document.addEventListener("DOMContentLoaded", () => {
    const loginSubmit = document.getElementById("loginSubmit");

    loginSubmit.addEventListener("click", (event) => {
        event.preventDefault(); // Formun varsayılan gönderilmesini engeller

        // Formdan alınan kullanıcı adı ve şifre
        const loginEmail = document.getElementById("loginEmail").value;
        const password = document.getElementById("password").value;

        // Belirlenen kullanıcı adı ve şifre kombinasyonu
        const validEmail = "onalmehmet30@gmail.com";
        const validPassword = "Password1!";

        // Giriş doğrulama
        if (loginEmail === validEmail && password === validPassword) {
            window.location.href = "admin.html"; // Bilgiler doğruysa yönlendirir
        } else {
            const warningBox = document.getElementById("warningBox");
            const warningText = document.getElementById("warningText");
            warningText.innerText = "Login Failed: Incorrect email or password.";
            warningBox.classList.add("active"); // Hata mesajını gösterir
        }
    });
});
