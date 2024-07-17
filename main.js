class Form {

    constructor() {
        this.errors = [];
        this.valid = [];
        this.form = document.getElementById('form');
        this.form.addEventListener('submit', this.validForm.bind(this));
        this.errorMessage = document.getElementById('error');
        this.validMessage = document.getElementById('valid');
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
            this.errors.push('Le téléphone est invalide, il doit comporter 10 chiffres')
        }
    }

    validForm(event) {
        event.preventDefault();
        this.errors = [];
        this.valid = [];
        const name = this.form.querySelector('#name').value;
        const mail = this.form.querySelector('#email').value;
        const phone = this.form.querySelector('#telephone').value;

        this.validName(name);
        this.validMail(mail);
        this.validPhone(phone);

        if(this.errors.length > 0) {
            this.errorMessage.innerText = 'Erreur de validation : \n' + this.errors.join('\n')
        } else {
            this.validMessage.innerText = 'Formulaire validé avec succès !';
            this.form.reset();
        }
    }
}

window.addEventListener('load', () => {
    let form = new Form();
})