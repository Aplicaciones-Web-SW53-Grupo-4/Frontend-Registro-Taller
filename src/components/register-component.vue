<template>
    <div class="register-form">
        <h3>{{ $t('title_title') }}</h3>
        <div class="field-container">
            <label for="email">{{ $t('email_title')}}</label>
            <input type="email" name="" id="email" aria-label="">
        </div>
        <div class="field-container">
            <label for="password">{{ $t('password_title') }}</label>
            <input type="password" id="password" :aria-label="$t('password_title')">
        </div>
        <div class="field-container">
            <label for="name">{{ $t('name_title') }}</label>
            <input type="text" id="name" aria-label="">
        </div>
        <div class="field-container">
            <label for="last_namet$">{{ $t('last_name_title') }}</label>
            <input type="text" id="last_name" aria-label="">
        </div>
        <div class="field-container">
            <label for="phone_number">{{ $t('phone_number_title') }}</label>
            <input type="number" id="phone_number" aria-label="">
        </div>
        <div class="field-container">
            <label for="age">{{ $t('age_title') }}</label>
            <input type="number" id="age" aria-label="">
        </div>
        <button class="btn-form">{{ $t('button_title') }}</button>
    </div>
</template>

<script>
export default {
    name: "register",

}
</script>

<style scoped>
    .register-form{
        width: 400px;
        background-color: grey;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .field-container{
        width: 200px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .btn-form{
        margin-top: 10px;
    }
</style>