const input = document.querySelector("input");
const passwords = ["user", "admin"];
const messages = ["uzyskałeś dostęp do terminala", "hasło złamane"];
const div = document.querySelector(".message");

input.addEventListener("input", (e) => {
    div.textContent = "";
    text = e.target.value


    passwords.forEach((password, index) => {
        if (password === text) {
            div.textContent = messages[index];
            e.target.value = "";
        }
    })
})

input.addEventListener("focus", (e) => {
    e.target.classList.add("active");
})

input.addEventListener("blur", (e) => {
    e.target.classList.remove("active");
})