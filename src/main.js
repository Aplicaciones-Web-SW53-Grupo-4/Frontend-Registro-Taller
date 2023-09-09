import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

//Se debe instalar el paquete: "npm i vue-i18n"
import { createI18n } from 'vue-i18n'

import PrimeVue from 'primevue/config';
import 'primevue/resources/primevue.min.css' //core css
import 'primevue/resources/themes/vela-green/theme.css'
import 'primeicons/primeicons.css' //icons

import Button from 'primevue/button';
import Password from 'primevue/password';
import AutoComplete from 'primevue/autocomplete';
import InputNumber from 'primevue/inputnumber';
import InputText from 'primevue/inputtext';
import Dropdown from "primevue/dropdown";

const i18n = createI18n({
    locale: 'es',
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
            button_title: "Registrarme",
            genre_title: "Género",

            aria_password: "Ingresa tu contraseña",
            aria_name:"Ingresa tu nombre",
            aria_email:"Ingresa tu email ",
            aria_last_name:"Ingresa tus apellidos",
            aria_age:"Selecciona tu edad",
            aria_phone_number:"Ingresa número de celular",
            aria_genre:"Selecciona tu género",

            male_gender:"masculino",
            female_gender:"femenino",
            other_gender:"otro",

            placeholder_genre:"Selecciona tu género"
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
            button_title: "Register me",
            genre_title: "Genre",

            aria_password: "Enter your password",
            aria_name:"enter your name",
            aria_last_name:"Enter your last name",
            aria_email:"Enter your email",
            aria_age:"Select your age   ",
            aria_phone_number:"Enter cell phone number",
            aria_genre:"Select your gender",

            male_gender:"male",
            female_gender:"female",
            other_gender:"other",

            placeholder_genre:"Select your gender"

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
            button_title: "M'inscrire",
            genre_title: "Genre",

            aria_password: "Tapez votre mot de passe",
            aria_name:"Entrez votre nom",
            aria_last_name:"Entrez votre nom de famille",
            aria_email:"Entrer votre Email",
            aria_age:"Sélectionnez votre âge",
            aria_phone_number:"Entrez le numéro de téléphone portable",
            aria_genre:"Sélectionnez votre sexe",

            male_gender:"homme",
            female_gender:"féminin",
            other_gender:"autres",

            placeholder_genre:"Sélectionnez votre sexe"


        }
    }

})

const app = createApp(App);
app.use(i18n)
app.use(PrimeVue)

app.component('pv-button', Button);
app.component('pv-password', Password);
app.component('pv-autocomplete', AutoComplete);
app.component('pv-input-text', InputText);
app.component('pv-dropdown', Dropdown);

app.mount('#app')
