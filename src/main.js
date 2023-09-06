import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

//Se debe instalar el paquete: "npm i vue-i18n"
import { createI18n } from 'vue-i18n'

const i18n = createI18n({
    locale: 'en',
    messages: {
        es: {
            greet: "Hola, {username}",
            Category: 'Esta es una categoria',
            tutorial: 'Este es un tutorial',

            title_title: "Registrarse",
            name_title: "Nombre",
            email_title: "Correo",
            password_title: "Contraseña",
            last_name_title: "Apellidos",
            phone_number_title: "Número de teléfono",
            age_title: "Edad",
            button_title: "Registrarme"
        },
        en: {
            greet: "Hello, {username}",
            Category: 'this is a category',
            tutorial: 'this is a tutorial',

            title_title: "Register",
            name_title: "Name",
            email_title: "Email",
            password_title: "Password",
            last_name_title: "Last Name",
            phone_number_title: "Phone number",
            age_title: "Age",
            button_title: "Register me"

        },
        fr: {
            greet: "Mercy, {username}",
            Category: 'il s\'agit d\'une catégorie',
            tutorial: 'Ceci est un tutoriel',

            title_title: "Registre",
            name_title: "Nom de l'entreprise",
            email_title: "Votre adresse email",
            password_title: "Mot de passe",
            last_name_title: "Nom de famille",
            phone_number_title: "Numéro de téléphone",
            age_title: "Age de la personne",
            button_title: "M'inscrire"

        }
    }

})

const app = createApp(App);
app.use(i18n)
app.mount('#app')
