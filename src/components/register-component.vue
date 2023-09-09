<template>
    <div class="register-form">
        <h3>{{ $t('title_title') }}</h3>
        <div class="field-container">
            <label for="email">{{ $t('email_title') }}</label>
            <pv-input-text id="email" type="email" v-model="email" :aria-label="$t('aria_email')" />
        </div>
        <div class="field-container">
            <label for="password">{{ $t('password_title') }}</label>
            <pv-password v-model="password" id="password" :aria-label="$t('aria_password')"></pv-password>
        </div>
        <div class="field-container">
            <label for="name">{{ $t('name_title') }}</label>
            <pv-input-text id="name" type="text" v-model="name" :aria-label="$t('aria_name')"/>
        </div>
        <div class="field-container">
            <label for="genre$">{{ $t('genre_title') }}</label>
          <pv-dropdown v-model="selectedGender" :options="[$t('male_gender'),$t('female_gender')]"  :placeholder="$t('placeholder_genre')"/>
        </div>
         <div class="field-container">
                <label for="last_namet$">{{ $t('last_name_title') }}</label>
                <pv-input-text id="last_name" type="text" v-model="last_name" :aria-label="$t('aria_last_name')"/>
            </div>
        <div class="field-container">
            <label for="phone_number">{{ $t('phone_number_title') }}</label>
            <pv-input-text id="phone_number" type="text" v-model="phone_number" :aria-label="$t('aria_phone_number')" />
        </div>
        <div class="field-container">
            <label for="age">{{ $t('age_title') }}</label>
            <pv-autocomplete v-model="ages" dropdown :suggestions="items" @complete="search" :aria-label="$t('aria_age')"/>
        </div>
        <pv-button class="btn-form">{{ $t('button_title') }}</pv-button>
    </div>
</template>


<script setup>
import { ref } from "vue";
const selectedGender = ref("");
const ages = ref("");
const password = ref("");
const items = ref([]);

const search = (event) => {
    const maxAge = 100;
    let _items = [...Array(maxAge).keys()];
    items.value = event.query ? [...Array(maxAge).keys()].map((item) => event.query + '-' + item) : _items;
}
</script>



<script>
export default {
    name: "register",

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
*{
    font-family: 'Poppins', sans-serif;
}
.register-form {
    width: 400px;
    background-color: grey;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 40px;
}

.field-container {
    width: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.btn-form {
    margin-top: 10px;
    margin-bottom: 20px;
}
</style>