const init = () => {
    const form = document.getElementById("form");
    const fio = document.getElementById("fio")
    const password = document.getElementById("password");

    let errorFio = fio;
    while ((errorFio = errorFio.nextElementSibling).nodeType != 1); // ???

    let errorPassword = password;
    while ((errorPassword = errorPassword.nextElementSibling).nodeType != 1); // ???

    const fioPattern = /^[А-ЯЁа-яёA-Za-z]{3,}([-][А-ЯЁа-яёA-Za-z]{3,})?\s[А-ЯЁа-яёA-Za-z]{3,}\s[А-ЯЁа-яёA-Za-z]{3,}$/;
    const passwordPattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-.]).{8,}$/;

    fio.addEventListener("input", function () {
        if (fio.value.length === 0) {
            fio.className = "form__input";
            errorFio.textContent = "";
            errorFio.className = "form__input-error";
        } else if (fioPattern.test(fio.value)) {
            fio.className = "form__input valid";
            errorFio.textContent = "";
            errorFio.className = "form__input-error";
        } else {
        fio.className = "form__input invalid";
        }
    });

    password.addEventListener("input", function () {
        if (password.value.length === 0) {
            password.className = "form__input";
            errorPassword.textContent = "";
            errorPassword.className = "form__input-error";
        } else if (passwordPattern.test(password.value)) {
            password.className = "form__input valid";
            errorPassword.textContent = "";
            errorPassword.className = "form__input-error";
        } else {
            password.className = "form__input invalid";
        }
    });

    form.addEventListener("submit", function (event) {
        const fioTest = fioPattern.test(fio.value);
        const passwordTest = passwordPattern.test(password.value);
        if (fioTest && passwordTest) {
            alert('Корректные данные')
        } else {
            if (!fioTest) {
                fio.className = "form__input invalid";
                errorFio.textContent = "Use only letters";
                errorFio.className = "form__input-error active";
                event.preventDefault()
            } else {
                fio.className = "form__input valid";
                errorFio.textContent = "";
                errorFio.className = "form__input-error";
            }
            if (!passwordTest) {
                password.className = "form__input invalid";
                errorPassword.textContent = "Minimum 8 characters, without /\\|";
                errorPassword.className = "form__input-error active";
                event.preventDefault()
            } else {
                password.className = "form__input valid";
                errorPassword.textContent = "";
                errorPassword.className = "form__input-error";
            }
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    init();
});