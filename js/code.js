function validateProductForm() {
    var firstName = document.getElementById("first_name").value.trim();
    var lastName = document.getElementById("last_name").value.trim();
    var phoneNumber = document.getElementById("phone_number").value.trim();
    var destination = document.getElementById("destination").value.trim();
    var dateTime = document.getElementById("date_time").value.trim();
    var quantity = document.getElementById("quantity").value.trim();

    var firstNameError = document.getElementById("first_name_error");
    var lastNameError = document.getElementById("last_name_error");
    var phoneNumberError = document.getElementById("phone_number_error");
    var destinationError = document.getElementById("destination_error");
    var dateTimeError = document.getElementById("date_time_error");
    var quantityError = document.getElementById("quantity_error");

    firstNameError.innerHTML = "";
    lastNameError.innerHTML = "";
    phoneNumberError.innerHTML = "";
    destinationError.innerHTML = "";
    dateTimeError.innerHTML = "";
    quantityError.innerHTML = "";

    var letters = /^[A-Za-z]+$/;
    var numbers = /^[0-9]+$/;

    if (firstName === "" || !firstName.match(letters)) {
        firstNameError.innerHTML = "Введите корректное имя";
        return false;
    }
    if (lastName === "" || !lastName.match(letters)) {
        lastNameError.innerHTML = "Введите корректную фамилию";
        return false;
    }
    if (phoneNumber === "" || !phoneNumber.match(numbers)) {
        phoneNumberError.innerHTML = "Введите корректный номер телефона";
        return false;
    }

    if (destination === "") {
        destinationError.innerHTML = "Введите ваш адрес";
        return false;
    }

    if (dateTime === "") {
        dateTimeError.innerHTML = "Введите дату и время";
        return false;
    }

    if (quantity === "" || (quantity <= 0)) {
        quantityError.innerHTML = "Введите корректное количество";
        return false;
    }

    var confirmation = confirm("Вы уверены, что хотите отправить эти данные?\n" + 
                               "Имя: " + firstName + "\n" + 
                               "Фамилия: " + lastName + "\n" + 
                               "Номер телефона: " + phoneNumber + "\n" + 
                               "Адрес: " + destination + "\n" + 
                               "Дата и время: " + dateTime + "\n" + 
                               "Количество: " + quantity);

    return confirmation;
}

var productBlock = document.querySelector('.product');
productBlock.addEventListener('mouseenter', function() {
    productBlock.style.backgroundColor = '#ffcccc';
});

productBlock.addEventListener('mouseleave', function() {
    productBlock.style.backgroundColor = '#e3a3d1';
});

var surveyBlock = document.querySelector('.survey');
surveyBlock.addEventListener('mouseenter', function() {
    surveyBlock.style.backgroundColor = '#ffcccc';
});

surveyBlock.addEventListener('mouseleave', function() {
    surveyBlock.style.backgroundColor = '#e3a3d1';
});
