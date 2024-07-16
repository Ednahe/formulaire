class Form {

    constructor() {
        this.errors = [];
        this.form = document.getElementById('form');
        this.form.addEventListener('submit', this.validForm.bind(this));
        this.errorMessage = document.getElementById('error');
    }

    validName(name) {
        const regexName = /^[a-zA-Z]+$/;
        if(!regexName.test(name)) {
            this.errors.push('Le nom est invalide')
        }
    }

    validMail(email) {
        const regexMail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!regexMail.test(email)) {
            this.errors.push('Le mail est invalide')
        }
    }

    validPhone(phone) {
        const regexPhone = /^\d{10}$/;
        if(!regexPhone.test(phone)) {
            this.errors.push('Le téléphone est invalide')
        }
    }

    validForm(event) {
        event.preventDefault();
        this.errors = [];
        const name = this.form.querySelector('#name').value;
        const mail = this.form.querySelector('#email').value;
        const phone = this.form.querySelector('#telephone').value;
    }
}
